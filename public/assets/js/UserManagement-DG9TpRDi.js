import{b as G,_ as ee,$ as ae,r as v,e as V,c as S,m as l,k as a,x as _,w as U,j as L,F as N,Z as J,E as M,y as Z,z as le,I as H,J as K,B as te,A as Q,O as se,v as W,o as ne,q as k,t as i,u as R,a0 as E,C as T,S as oe,U as de,a1 as ue}from"./.pnpm-fc_Lr1wI.js";import{i as w}from"./index-B6Bk_CPg.js";import{f as j}from"./format-DaCfCw6f.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ie=u=>w.post("/admin/user",u),pe=u=>w.get(`/admin/user?page=${u.page}&size=${u.size}`),me=u=>w.patch(`/admin/user/${u.id}`,u),ce=u=>w.delete("/admin/user",{data:{user_ids:[u.id]}}),_e=u=>w.delete("/admin/user",{data:{user_ids:u}}),ve=G({__name:"AddUser",props:{modelValue:{},modelModifiers:{}},emits:ee(["getUsers"],["update:modelValue"]),setup(u,{emit:m}){const z=m,b=ae(u,"modelValue"),f=v(!1),r=v({username:"",password:"",role:"user",inv_code_id:1}),c=v(null),F={username:[{required:!0,message:"请输入账户用户名",trigger:"blur"}],password:[{required:!0,message:"请输入账户密码",trigger:"blur"}]},B=async C=>{if(!(!C||!await C.validate()))try{f.value=!0,await ie(r.value),M.success("添加成功")}finally{f.value=!1}},D=C=>{z("getUsers"),C()},I=()=>{b.value=!1,z("getUsers")};return(C,n)=>{const g=Z,$=le,t=H,o=K,y=te,d=Q,x=se,A=W;return V(),S(x,{title:"添加用户",width:"60%",modelValue:b.value,"onUpdate:modelValue":n[6]||(n[6]=s=>b.value=s),"before-close":D},{footer:l(()=>[a(d,{type:"info",onClick:n[4]||(n[4]=s=>I())},{default:l(()=>[_("取消")]),_:1}),a(d,{type:"primary",onClick:n[5]||(n[5]=s=>B(c.value))},{default:l(()=>[_("添加")]),_:1})]),default:l(()=>[U((V(),S(y,{ref_key:"addUserFormRef",ref:c,model:r.value,rules:F,"label-width":"auto"},{default:l(()=>[a($,{label:"用户名",prop:"username"},{default:l(()=>[a(g,{modelValue:r.value.username,"onUpdate:modelValue":n[0]||(n[0]=s=>r.value.username=s)},null,8,["modelValue"])]),_:1}),a($,{label:"密码",prop:"password"},{default:l(()=>[a(g,{modelValue:r.value.password,"onUpdate:modelValue":n[1]||(n[1]=s=>r.value.password=s)},null,8,["modelValue"])]),_:1}),a($,{label:"权限",prop:"role"},{default:l(()=>[a(o,{modelValue:r.value.role,"onUpdate:modelValue":n[2]||(n[2]=s=>r.value.role=s)},{default:l(()=>[(V(),L(N,null,J(["user","admin"],s=>a(t,{key:s,label:s,value:s},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a($,{label:"邀请码ID",prop:"inv_code_id"},{default:l(()=>[a(g,{modelValue:r.value.inv_code_id,"onUpdate:modelValue":n[3]||(n[3]=s=>r.value.inv_code_id=s)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[A,f.value]])]),_:1},8,["modelValue"])}}}),fe=G({__name:"UserManagement",setup(u){const m=v(!1),z=v(15),b=v(1),f=v(),r=v([]),c=async()=>{try{m.value=!0;const t=await pe({page:b.value,size:z.value});f.value=t.data}finally{m.value=!1}},F=async t=>{t.edit=!(t.edit??!1)},B=async t=>{t.edit=!(t.edit??!0),await D(t)},D=async t=>{try{m.value=!0,await me(t),M.success("修改用户成功")}finally{m.value=!1,await c()}},I=async t=>{try{m.value=!0,await ce(t),M.success("删除用户成功")}finally{m.value=!1,await c()}},C=async()=>{try{m.value=!0;const t=r.value.map(o=>o.id);await _e(t),M.success("批量删除用户成功")}finally{m.value=!1,await c()}},n=t=>r.value=t;ne(c);const g=v(!1),$=()=>g.value=!g.value;return(t,o)=>{var O,q,P;const y=Q,d=oe,x=Z,A=H,s=K,X=de,Y=ue,h=W;return V(),L(N,null,[a(ve,{onGetUsers:c,modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=e=>g.value=e)},null,8,["modelValue"]),a(y,{type:"primary",onClick:o[1]||(o[1]=e=>c())},{default:l(()=>[_("刷新列表")]),_:1}),a(y,{type:"primary",onClick:o[2]||(o[2]=e=>$())},{default:l(()=>[_("添加用户")]),_:1}),a(y,{type:"danger",disabled:r.value.length<=0,onClick:o[3]||(o[3]=e=>C())},{default:l(()=>[_(" 批量删除 ")]),_:1},8,["disabled"]),U((V(),S(X,{data:((O=f.value)==null?void 0:O.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:n},{default:l(()=>[a(d,{type:"selection",width:"40"}),a(d,{prop:"id",label:"ID"}),a(d,{prop:"",label:"用户组"},{default:l(({row:e})=>[k("span",null,i(e.group.id)+" ("+i(e.group.name)+")",1)]),_:1}),a(d,{prop:"inv_code.name",label:"邀请码"},{default:l(({row:e})=>[k("span",null,i(e.inv_code.id)+" ("+i(e.inv_code.name)+")",1)]),_:1}),a(d,{prop:"today_size",label:"今日解析"},{default:l(({row:e})=>[k("span",null,i(e.today_count)+" ("+i(R(j)(e.today_size??0))+")",1)]),_:1}),a(d,{prop:"today_size",label:"縂共解析"},{default:l(({row:e})=>[k("span",null,i(e.total_count)+" ("+i(R(j)(e.total_size??0))+")",1)]),_:1}),a(d,{prop:"username",label:"用户名"},{default:l(({row:e})=>[U(k("span",null,i(e.username),513),[[E,!e.edit]]),U(a(x,{modelValue:e.username,"onUpdate:modelValue":p=>e.username=p},null,8,["modelValue","onUpdate:modelValue"]),[[E,e.edit]])]),_:1}),a(d,{prop:"password",label:"密码"},{default:l(({row:e})=>[U(k("span",null,i(e.password),513),[[E,!e.edit]]),U(a(x,{modelValue:e.password,"onUpdate:modelValue":p=>e.password=p},null,8,["modelValue","onUpdate:modelValue"]),[[E,e.edit]])]),_:1}),a(d,{prop:"role",label:"权限"},{default:l(({row:e})=>[U(k("span",null,i(e.role),513),[[E,!e.edit]]),U(a(s,{modelValue:e.role,"onUpdate:modelValue":p=>e.role=p},{default:l(()=>[(V(),L(N,null,J(["user","admin"],p=>a(A,{key:p,label:p,value:p},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),[[E,e.edit]])]),_:1}),a(d,{prop:"created_at",label:"创建时间"},{default:l(({row:e})=>[_(i(new Date(e.created_at).toLocaleString()),1)]),_:1}),a(d,{prop:"updated_at",label:"更新时间"},{default:l(({row:e})=>[_(i(new Date(e.updated_at).toLocaleString()),1)]),_:1}),a(d,{width:"150",label:"操作",fixed:"right"},{default:l(({row:e})=>[e.edit?T("",!0):(V(),S(y,{key:0,size:"small",type:"primary",onClick:p=>F(e)},{default:l(()=>[_(" 编辑 ")]),_:2},1032,["onClick"])),e.edit?(V(),S(y,{key:1,size:"small",type:"primary",onClick:p=>B(e)},{default:l(()=>[_(" 保存 ")]),_:2},1032,["onClick"])):T("",!0),a(y,{size:"small",type:"danger",onClick:p=>I(e)},{default:l(()=>[_("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[h,m.value]]),a(Y,{"current-page":b.value,"onUpdate:currentPage":o[4]||(o[4]=e=>b.value=e),"page-size":z.value,"onUpdate:pageSize":o[5]||(o[5]=e=>z.value=e),"page-sizes":[15,50,100,500,((q=f.value)==null?void 0:q.total)??100],total:((P=f.value)==null?void 0:P.total)??100,layout:"sizes, prev, pager, next",onSizeChange:c,onCurrentChange:c},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),be=re(fe,[["__scopeId","data-v-39a05d3b"]]);export{be as default};
