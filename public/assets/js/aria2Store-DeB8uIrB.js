import{k as o,m as s}from"./index-B6Bk_CPg.js";import{d as n,r as e,E as t}from"./.pnpm-fc_Lr1wI.js";const g=n("aria2Store",()=>{const i=e(!1),r=e(o()),a=e(null);return{aria2ConfigDialogVisible:i,aria2ConfigForm:r,aria2ConfigFormRef:a,saveAria2Config:async()=>{!a.value||!await a.value.validate()||(s(r.value),t.success("保存成功"),i.value=!1)}}});export{g as u};
