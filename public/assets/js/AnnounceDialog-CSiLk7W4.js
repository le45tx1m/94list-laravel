import{b as f,N as p,e as g,c as b,m as n,q as r,k as c,x as u,u as t,A as V,O as k}from"./.pnpm-fc_Lr1wI.js";import{u as w,d as x}from"./index-B6Bk_CPg.js";const C=["innerHTML"],h={class:"dialog-footer"},T=f({__name:"AnnounceDialog",setup(v){const i=w(),{config:e}=p(i),d=()=>{},a=()=>e.value.show_announce=!1,_=()=>{x(e.value.announce),a()};return(A,o)=>{const s=V,m=k;return g(),b(m,{modelValue:t(e).show_announce,"onUpdate:modelValue":o[1]||(o[1]=l=>t(e).show_announce=l),title:"公告",width:"60%","before-close":d},{footer:n(()=>[r("div",h,[c(s,{type:"danger",onClick:_},{default:n(()=>[u(" 下次不再提示 ")]),_:1}),c(s,{type:"primary",onClick:o[0]||(o[0]=l=>a())},{default:n(()=>[u(" 确认 ")]),_:1})])]),default:n(()=>[r("span",{innerHTML:t(e).announce},null,8,C)]),_:1},8,["modelValue"])}}});export{T as default};
