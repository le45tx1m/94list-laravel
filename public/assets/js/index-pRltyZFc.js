const __vite__fileDeps=["assets/js/UserView-tgzM6Dt0.js","assets/js/.pnpm-DD7z4_75.js","assets/css/.pnpm-Cz8IueYi.css","assets/css/UserView-V0M9nBA1.css","assets/js/LoginView-BXOvaq5T.js","assets/js/favicon-BrYC5Vmz.js","assets/js/_plugin-vue_export-helper-DlAUqK2U.js","assets/css/LoginView-VnGQPPmd.css","assets/js/RegisterView-QLfewAkE.js","assets/css/RegisterView-BZfYOUpu.css","assets/js/AdminView-D0UnZhxr.js","assets/js/NotFoundView-DMFyvFjw.js","assets/css/NotFoundView-B8o8jygP.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as L,E as u,d as S,r as w,u as A,b as P,o as R,c as b,e as I,f as O,R as T,g as k,h as C,i as D,j as V}from"./.pnpm-DD7z4_75.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&m(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const $="modulepreload",q=function(e){return"/"+e},f={},d=function(r,t,m){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),n=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(t.map(i=>{if(i=q(i),i in f)return;f[i]=!0;const p=i.endsWith(".css"),y=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${y}`))return;const c=document.createElement("link");if(c.rel=p?"stylesheet":$,p||(c.as="script",c.crossOrigin=""),c.href=i,n&&c.setAttribute("nonce",n),document.head.appendChild(c),p)return new Promise((E,v)=>{c.addEventListener("load",E),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})}))}return s.then(()=>r()).catch(o=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o})},z=()=>localStorage.getItem("login_state")??"0",g=e=>localStorage.setItem("login_state",e),J=()=>localStorage.getItem("login_role")??"admin",j=e=>localStorage.setItem("login_role",e),W=async()=>(await d(()=>import("./package-CS2ajzbm.js"),[])).default.version,x=()=>{var e;return((e=document.querySelector("meta[name='app_name']"))==null?void 0:e.getAttribute("content"))??"94list-laravel"},H=()=>{const e=localStorage.getItem("aria2_config");return e?JSON.parse(e):{host:"http://localhost",port:6800,token:""}},K=e=>localStorage.setItem("aria2_config",JSON.stringify(e)),a=L.create({baseURL:"/api/v1",timeout:1/0,headers:{Accept:"application/json","Content-Type":"application/json"}});a.interceptors.response.use(e=>e.data,e=>{var t;const r=(t=e.response.data)==null?void 0:t.message;return r?r==="用户未登陆"?(u.error("登陆已过期, 请重新登陆!"),g("0"),setTimeout(()=>location.href="/login",1e3)):r==="Too Many Attempts."?u.error("请求量过大! 请等待10分钟后重试!"):r==="用户权限不足"?(u.error("用户权限不足, 请联系管理员!"),j("user"),setTimeout(()=>location.href="/user",1e3)):u.error(r):u.error("服务器异常, 请稍后再试"),Promise.reject(e.response.data)});const G=e=>a.post("/user/login",e),Q=e=>a.post("/user/register",e),N=()=>a.delete("/user"),M=S("mainStore",()=>{const e=w({show_announce:!1,announce:"",user_agent:"",debug:!1,max_once:0,have_account:!1,have_login:!1,need_inv_code:!1,need_password:!1,is_https:!1}),r=A();return{config:e,logout:async()=>{try{await N()}finally{g("0"),r.push("/"),u.success("退出登陆成功~")}}}}),l=e=>typeof e=="string"?parseInt(e):e,U=()=>a.get("/parse/config"),X=async e=>{const r=await a.post("/parse/get_file_list",e);return r.data.list=r.data.list.map(t=>(t.category=l(t.category),t.fs_id=l(t.fs_id),t.isdir=l(t.isdir),t.local_ctime=l(t.local_ctime),t.local_mtime=l(t.local_mtime),t.server_ctime=l(t.local_mtime),t.server_mtime=l(t.local_mtime),t.size=l(t.size),t)),r},Y=e=>a.post("/parse/get_sign",e),Z=e=>a.post("/parse/get_download_links",e),ee=()=>a.get("/parse/limit"),B=P({__name:"App",setup(e){const r=M();return R(async()=>{const t=window.matchMedia("(prefers-color-scheme: dark)");m(t),t.addEventListener("change",m);function m(o){o.matches?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")}const s=await U();r.config={...s.data,is_https:document.location.protocol==="https:"},g(s.data.have_login?"1":"0")}),(t,m)=>(O(),b(I(T)))}}),h=k({history:C("/"),routes:[{path:"/",name:"index",redirect:"/user"},{path:"/user",name:"user",meta:{title:"前台解析中心"},component:()=>d(()=>import("./UserView-tgzM6Dt0.js"),__vite__mapDeps([0,1,2,3]))},{path:"/login",name:"login",meta:{title:"登陆"},component:()=>d(()=>import("./LoginView-BXOvaq5T.js"),__vite__mapDeps([4,1,2,5,6,7]))},{path:"/register",name:"register",meta:{title:"注册"},component:()=>d(()=>import("./RegisterView-QLfewAkE.js"),__vite__mapDeps([8,1,2,5,6,9]))},{path:"/admin",name:"admin",meta:{title:"后台控制中心"},component:()=>d(()=>import("./AdminView-D0UnZhxr.js"),__vite__mapDeps([10,1,2]))},{path:"/404",name:"404",meta:{title:"404页面不存在"},component:()=>d(()=>import("./NotFoundView-DMFyvFjw.js"),__vite__mapDeps([11,1,2,12]))},{path:"/:pathMatch(.*)",redirect:"/404"}]});h.beforeEach((e,r,t)=>{document.title=`${e.meta.title} | ${x()}`,t()});const _=D(B);_.use(V());_.use(h);_.mount("#app");export{d as _,x as a,j as b,J as c,X as d,Z as e,ee as f,z as g,Y as h,a as i,H as j,K as k,G as l,W as m,Q as r,g as s,M as u};
