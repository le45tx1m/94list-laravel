import"./base-FFb6ABGl.js";import{v as C}from"./el-loading-SJb1wJ0I.js";import{E as R}from"./el-card-DlDoXJKb.js";import{E as x,a as B}from"./el-form-item-kKOb3mX2.js";import{E as N}from"./el-button-C33TVszl.js";import{E as h}from"./el-input-Bv-ge0Tw.js";import{r as S}from"./user-DFWkiVqt.js";import{f as q}from"./favicon-BrYC5Vmz.js";import{d as I,g as L,r as m,m as U,c as D,w as M,e as w,f as a,h as j,o as d,i as p,u as c,t as A,j as T,a as o,n as $,k as V,E as z}from"./index-q5nPSmrO.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-DBXySpCx.js";import"./index-_lCbC3W8.js";const H={class:"container"},J=["src"],K=I({__name:"RegisterView",setup(O){const l=j();L()==="1"&&l.push("/admin");const y=()=>l.push("/login"),n=m(!1),e=m({username:"",password:"",inv_code:""}),_=m(null),f={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},g=U();g.config.need_inv_code&&(f.inv_code=[{required:!0,message:"请输入邀请码",trigger:"blur"}]);const E=async u=>{if(!(!u||!await u.validate()))try{n.value=!0,await S({username:e.value.username,password:e.value.password,inv_code:e.value.inv_code}),z.success("注册成功"),l.push("/login")}finally{n.value=!1}};return(u,r)=>{const i=h,s=x,v=N,b=B,k=R,F=C;return d(),D("div",H,[M((d(),w(k,null,{default:a(()=>[p("h1",null,[p("img",{src:c(q),alt:"logo"},null,8,J)]),p("h2",null,"注册 | "+A(c(T)()),1),o(b,{ref_key:"registerFormRef",ref:_,model:e.value,rules:f,"label-width":"auto"},{default:a(()=>[o(s,{label:"用户名",prop:"username"},{default:a(()=>[o(i,{modelValue:e.value.username,"onUpdate:modelValue":r[0]||(r[0]=t=>e.value.username=t)},null,8,["modelValue"])]),_:1}),o(s,{label:"密码",prop:"password"},{default:a(()=>[o(i,{modelValue:e.value.password,"onUpdate:modelValue":r[1]||(r[1]=t=>e.value.password=t),type:"password"},null,8,["modelValue"])]),_:1}),c(g).config.need_inv_code?(d(),w(s,{key:0,label:"邀请码",prop:"inv_code"},{default:a(()=>[o(i,{modelValue:e.value.inv_code,"onUpdate:modelValue":r[2]||(r[2]=t=>e.value.inv_code=t)},null,8,["modelValue"])]),_:1})):$("",!0),o(s,{class:"center"},{default:a(()=>[o(v,{type:"primary",onClick:y},{default:a(()=>[V("登陆")]),_:1}),o(v,{type:"primary",onClick:r[3]||(r[3]=t=>E(_.value))},{default:a(()=>[V("注册")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})),[[F,n.value]])])}}}),le=G(K,[["__scopeId","data-v-2243b14a"]]);export{le as default};