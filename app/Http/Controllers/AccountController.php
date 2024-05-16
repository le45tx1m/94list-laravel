<?php

namespace App\Http\Controllers;

use App\Models\Account;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class AccountController extends Controller
{
    public function getAccount(Request $request, $account_id = null)
    {
        if ($account_id !== null) {
            $account = Account::query()->find($account_id);
            if (!$account) return ResponseController::accountNotExists();
            return ResponseController::success($account);
        }

        $accounts = Account::query()->paginate($request['size']);
        return ResponseController::success($accounts);
    }

    public static function _getAccountInfo($cookie)
    {
        $http = new Client([
            'headers' => [
                'User-Agent' => config('94list.fake_user_agent'),
                'cookie'     => $cookie
            ]
        ]);

        try {
            $res      = $http->get('https://pan.baidu.com/rest/2.0/xpan/nas', [
                'query' => [
                    'method' => 'uinfo'
                ]
            ]);
            $response = JSON::decode($res->getBody()->getContents());
        } catch (RequestException $e) {
            $response = $e->hasResponse() ? JSON::decode($e->getResponse()->getBody()->getContents()) : null;
        } catch (GuzzleException $e) {
            return ResponseController::networkError('获取百度账户信息');
        }

        if ($response['errmsg'] === 'Invalid Bduss') return ResponseController::accountExpired();

        return $response ? ResponseController::success($response) : ResponseController::getAccountInfoFailed();
    }

    public static function _getSvipEndAt($cookie)
    {
        $http = new Client([
            'headers' => [
                'User-Agent' => config('94list.fake_user_agent'),
                'Cookie'     => $cookie
            ]
        ]);

        try {
            $res      = $http->get('https://pan.baidu.com/rest/2.0/membership/user', [
                'query' => [
                    'method'     => 'query',
                    'clienttype' => 0,
                    'app_id'     => 250528,
                    'web'        => 1
                ]
            ]);
            $response = JSON::decode($res->getBody()->getContents());
        } catch (RequestException $e) {
            $response = $e->hasResponse() ? JSON::decode($e->getResponse()->getBody()->getContents()) : null;
        } catch (GuzzleException $e) {
            return ResponseController::networkError('获取SVIP到期时间');
        }

        return $response ? ResponseController::success($response) : ResponseController::getSvipEndTimeFailed();
    }

    public static function _getAccountItems($cookie)
    {
        $accountInfoRes  = self::_getAccountInfo($cookie);
        $accountInfoData = $accountInfoRes->getData(true);
        if ($accountInfoData['code'] !== 200) return $accountInfoRes;

        $vip_type = match ($accountInfoData['data']['vip_type']) {
            0       => '普通用户',
            1       => '普通会员',
            2       => '超级会员',
            default => '未知'
        };

        $switch      = 1;
        $svip_end_at = date('Y-m-d H:i:s', 0);

        if ($vip_type === '超级会员') {
            $svipEndAtRes  = self::_getSvipEndAt($cookie);
            $svipEndAtData = $svipEndAtRes->getData(true);
            if ($svipEndAtData['code'] !== 200) return $svipEndAtRes;

            $svip_end_at = date('Y-m-d H:i:s', $svipEndAtData['data']['currenttime'] ?? 0 + $svipEndAtData['data']['reminder']['svip']['leftseconds'] ?? 0);
            if (strtotime($svip_end_at) < strtotime('now')) $switch = 0;
        }

        return ResponseController::success([
            'baidu_name'   => $accountInfoData['data']['baidu_name'],
            'netdisk_name' => $accountInfoData['data']['netdisk_name'],
            'cookie'       => $cookie,
            'vip_type'     => $vip_type,
            'switch'       => $switch,
            'reason'       => '',
            'svip_end_at'  => $svip_end_at,
            'last_use_at'  => date('Y-m-d H:i:s', 0)
        ]);
    }

    public function addAccount(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cookie' => 'required'
        ]);

        if ($validator->fails()) return ResponseController::paramsError();

        $request['cookie'] = is_array($request['cookie']) ? $request['cookie'] : [$request['cookie']];

        $have_repeat = false;
        foreach ($request['cookie'] as $cookie) {
            if (!$cookie) continue;
            $accountItemsRes  = self::_getAccountItems($cookie);
            $accountItemsData = $accountItemsRes->getData(true);
            if ($accountItemsData['code'] !== 200) return $accountItemsRes;
            $account = Account::query()->firstWhere([
                'baidu_name'   => $accountItemsData['data']['baidu_name'],
                'netdisk_name' => $accountItemsData['data']['netdisk_name'],
            ]);
            if (!$account) Account::query()->create($accountItemsData['data']);
            else $have_repeat = true;
            sleep(1);
        }

        return ResponseController::success(['have_repeat' => $have_repeat]);
    }

    public static function updateAccount($account_id)
    {
        $account = Account::query()->find($account_id);
        if (!$account) return ResponseController::accountNotExists();
        $cookie = $account['cookie'];

        $accountItemsRes  = self::_getAccountItems($cookie);
        $accountItemsData = $accountItemsRes->getData(true);
        if ($accountItemsData['code'] === 200) {
            $account->update($accountItemsData['data']);
        } else if ($accountItemsData['code'] === 10045) {
            $account->update([
                'switch' => 0,
                'reason' => 'cookie已过期'
            ]);
        }

        return ResponseController::success();
    }

    public static function updateAccounts(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'account_ids.*' => 'numeric'
        ]);

        if ($validator->fails()) return ResponseController::paramsError();

        foreach ($request['account_ids'] as $account_id) {
            $updateAccountRes  = self::updateAccount($account_id);
            $updateAccountData = $updateAccountRes->getData(true);
            if ($updateAccountData['code'] !== 200) return $updateAccountRes;
            sleep(1);
        }

        return ResponseController::success();
    }

    public function switchAccounts(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'account_ids.*' => 'numeric',
            'switch'        => ['required', Rule::in([1, 0])]
        ]);

        if ($validator->fails()) return ResponseController::paramsError();

        foreach ($request['account_ids'] as $account_id) {
            $account = Account::query()->find($account_id);
            if (!$account) return ResponseController::accountNotExists();

            $account->update([
                'switch' => $request['switch']
            ]);
        }

        return ResponseController::success();
    }

    public function removeAccounts(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'account_ids.*' => 'numeric'
        ]);

        if ($validator->fails()) return ResponseController::paramsError();

        foreach ($request['account_ids'] as $account_id) {
            $account = Account::query()->find($account_id);
            if (!$account) return ResponseController::accountNotExists();
            $account->delete();
        }

        return ResponseController::success();
    }
}
