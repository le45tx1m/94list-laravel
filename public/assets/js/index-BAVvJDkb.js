const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/UserView-Dk94lSVN.js","assets/css/UserView-V0M9nBA1.css","assets/css/.pnpm-DFEtZ-6b.css","assets/js/LoginView-CnVgbE_B.js","assets/js/favicon-BrYC5Vmz.js","assets/js/_plugin-vue_export-helper-DlAUqK2U.js","assets/css/LoginView-kFAD-Fzo.css","assets/js/RegisterView-C31nf1Lu.js","assets/css/RegisterView-BnKfmdM9.css","assets/js/AdminView-RLaQgfOr.js","assets/js/InstallView-D84bKH3P.js","assets/css/InstallView-CRaRKPdy.css","assets/js/NotFoundView-BRgeZwzl.js","assets/css/NotFoundView-B8o8jygP.css"])))=>i.map(i=>d[i]);
/* empty css              */(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(n){if(n.ep)return;n.ep=!0;const t=o(n);fetch(n.href,t)}})();const L="modulepreload",P=function(e){return"/"+e},_={},m=function(s,o,r){let n=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),a=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));n=Promise.all(o.map(c=>{if(c=P(c),c in _)return;_[c]=!0;const g=c.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${y}`))return;const l=document.createElement("link");if(l.rel=g?"stylesheet":L,g||(l.as="script",l.crossOrigin=""),l.href=c,a&&l.setAttribute("nonce",a),document.head.appendChild(l),g)return new Promise((E,v)=>{l.addEventListener("load",E),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}return n.then(()=>s()).catch(t=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=t,window.dispatchEvent(a),!a.defaultPrevented)throw t})},k=()=>localStorage.getItem("login_state")??"0",p=e=>localStorage.setItem("login_state",e),O=()=>localStorage.getItem("login_role")??"user",f=e=>localStorage.setItem("login_role",e),S=()=>localStorage.getItem("announce")??"",C=e=>localStorage.setItem("announce",e),T=async()=>(await m(async()=>{const{default:e}=await import("./package-tf61R99U.js");return{default:e}},[])).default.version,w=()=>{var e;return((e=document.querySelector("meta[name='app_name']"))==null?void 0:e.getAttribute("content"))??"94list-laravel"},$=()=>{const e=localStorage.getItem("aria2_config");return e?JSON.parse(e):{host:"http://localhost",port:6800,token:""}},M=e=>localStorage.setItem("aria2_config",JSON.stringify(e)),i=axios.create({baseURL:"/api",timeout:1/0,headers:{Accept:"application/json","Content-Type":"application/json"}});i.interceptors.response.use(e=>e.data,e=>{var o;const s=(o=e.response.data)==null?void 0:o.message;return s?s==="用户未登陆"?(ElementPlus.ElMessage.error("登陆已过期, 请重新登陆!"),p("0"),setTimeout(()=>location.href="/login",1e3)):s==="Too Many Attempts."?ElementPlus.ElMessage.error("请求量过大! 请等待10分钟后重试!"):s==="用户权限不足"?(ElementPlus.ElMessage.error("用户权限不足, 请联系管理员!"),f("user"),setTimeout(()=>location.href="/user",1e3)):ElementPlus.ElMessage.error(s):(ElementPlus.ElMessage.error("服务器异常, 请稍后再试"),console.log(e)),Promise.reject(e.response.data)});const u=e=>typeof e=="string"?parseInt(e):e,A=()=>i.get("/parse/config"),D=async e=>{const s=await i.post("/parse/get_file_list",e);return s.data.list=s.data.list.map(o=>(o.category=u(o.category),o.fs_id=u(o.fs_id),o.isdir=u(o.isdir),o.local_ctime=u(o.local_ctime),o.local_mtime=u(o.local_mtime),o.server_ctime=u(o.local_mtime),o.server_mtime=u(o.local_mtime),o.size=u(o.size),o)),s},x=e=>i.post("/parse/get_vcode",e),q=e=>i.post("/parse/get_download_links",e),N=e=>i.get(`/parse/limit?token=${e.token}`),j=e=>i.post("/user/login",e),B=e=>i.post("/user/register",e),R=()=>i.delete("/user"),b=Pinia.defineStore("mainStore",()=>{const e=Vue.ref({show_announce:!1,announce:"",debug:!1,max_once:0,have_account:!1,have_login:!1,need_inv_code:!1,need_password:!1,is_https:!1,show_copyright:!1,custom_copyright:"",min_single_file:0,token_mode:!1,button_link:""});return{config:e,logout:async()=>{try{await R()}finally{p("0"),f("user"),location.reload(),ElementPlus.ElMessage.success("退出登陆成功~")}},getConfig:async(r=!0)=>{const t=(await A()).data;t.announce=t.announce.replaceAll("[NextLine]","<br>"),t.announce===S()&&(t.show_announce=!1),r||(t.show_announce=!1),e.value={...t,is_https:document.location.protocol==="https:"},p(t.have_login?"1":"0")}}}),V=Vue.defineComponent({__name:"App",setup(e){const s=b();function o(){const r="0123456789ABCDEF";let n="#";for(let t=0;t<6;t++)n+=r[Math.floor(Math.random()*16)];return n}return Vue.onMounted(async()=>{console.info(`%c
 █████╗   ██╗  ██╗  ██╗       ██╗  ███████╗  ████████╗          ██╗        █████╗   ██████╗    █████╗   ██╗   ██╗  ███████╗  ██╗     
██╔══██╗  ██║  ██║  ██║       ██║  ██╔════╝  ╚══██╔══╝          ██║       ██╔══██╗  ██╔══██╗  ██╔══██╗  ██║   ██║  ██╔════╝  ██║     
╚██████║  ███████║  ██║       ██║  ███████╗     ██║     █████╗  ██║       ███████║  ██████╔╝  ███████║  ██║   ██║  █████╗    ██║     
 ╚═══██║  ╚════██║  ██║       ██║  ╚════██║     ██║     ╚════╝  ██║       ██╔══██║  ██╔══██╗  ██╔══██║  ╚██╗ ██╔╝  ██╔══╝    ██║     
 █████╔╝       ██║  ███████╗  ██║  ███████║     ██║             ███████╗  ██║  ██║  ██║  ██║  ██║  ██║   ╚████╔╝   ███████╗  ███████╗
 ╚════╝        ╚═╝  ╚══════╝  ╚═╝  ╚══════╝     ╚═╝             ╚══════╝  ╚═╝  ╚═╝  ╚═╝  ╚═╝  ╚═╝  ╚═╝    ╚═══╝    ╚══════╝  ╚══════╝ `,`font-family: courier; background: linear-gradient(to right, ${o()}, ${o()});-webkit-background-clip: text;color: transparent;`);const r=window.matchMedia("(prefers-color-scheme: dark)");n(r),r.addEventListener("change",n);function n(t){t.matches?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")}await s.getConfig()}),(r,n)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(VueRouter.RouterView)))}}),h=VueRouter.createRouter({history:VueRouter.createWebHistory("/"),routes:[{path:"/",name:"index",redirect:"/user"},{path:"/user",name:"user",meta:{title:"前台解析中心"},component:()=>m(()=>import("./UserView-Dk94lSVN.js"),__vite__mapDeps([0,1,2]))},{path:"/login",name:"login",meta:{title:"登陆"},component:()=>m(()=>import("./LoginView-CnVgbE_B.js"),__vite__mapDeps([3,4,5,6,2]))},{path:"/register",name:"register",meta:{title:"注册"},component:()=>m(()=>import("./RegisterView-C31nf1Lu.js"),__vite__mapDeps([7,4,5,8,2]))},{path:"/admin",name:"admin",meta:{title:"后台控制中心"},component:()=>m(()=>import("./AdminView-RLaQgfOr.js"),__vite__mapDeps([9,2]))},{path:"/install",name:"install",meta:{title:"安装"},component:()=>m(()=>import("./InstallView-D84bKH3P.js"),__vite__mapDeps([10,4,5,11,2]))},{path:"/404",name:"404",meta:{title:"404页面不存在"},component:()=>m(()=>import("./NotFoundView-BRgeZwzl.js"),__vite__mapDeps([12,13]))},{path:"/:pathMatch(.*)",redirect:"/404"}]});h.beforeEach((e,s,o)=>{document.title=`${e.meta.title} | ${w()}`,o()});const d=Vue.createApp(V);d.use(ElementPlus);d.use(Pinia.createPinia());d.use(h);d.mount("#app");export{m as _,w as a,f as b,O as c,C as d,D as e,q as f,k as g,x as h,i,N as j,$ as k,j as l,M as m,T as n,B as r,p as s,b as u};
