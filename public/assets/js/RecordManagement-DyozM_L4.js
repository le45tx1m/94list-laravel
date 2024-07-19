import{i}from"./index-hO2dDUkE.js";import{f as g}from"./format-DaCfCw6f.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";const k=u=>i.get(`/admin/record?page=${u.page}&size=${u.size}&orderBy=${u.orderBy}`),T=()=>i.get("/admin/record/count"),B=u=>i.delete("/admin/record",{data:{record_ids:[u.id]}}),$=u=>i.delete("/admin/record",{data:{record_ids:u}}),I=Vue.defineComponent({__name:"RecordManagement",setup(u){const l=Vue.ref(!1),s=Vue.ref(15),c=Vue.ref(1),V=Vue.ref("id"),d=Vue.ref(),p=Vue.ref([]),r=Vue.ref({today:{count:0,size:0},total:{count:0,size:0}}),n=async()=>{try{l.value=!0;const o=await k({page:c.value,size:s.value,orderBy:V.value});d.value=o.data}finally{l.value=!1,await x()}},x=async()=>{try{l.value=!0;const o=await T();r.value=o.data}finally{l.value=!1}},C=async o=>{try{l.value=!0,await B(o),ElementPlus.ElMessage.success("删除记录成功")}finally{l.value=!1,await n()}},w=async()=>{try{l.value=!0;const o=p.value.map(a=>a.id);await $(o),ElementPlus.ElMessage.success("删除记录成功")}finally{l.value=!1,await n()}},b=o=>p.value=o;return Vue.onMounted(n),(o,a)=>{var m,y,N;const _=Vue.resolveComponent("el-button"),f=Vue.resolveComponent("el-text"),v=Vue.resolveComponent("el-option"),z=Vue.resolveComponent("el-select"),t=Vue.resolveComponent("el-table-column"),D=Vue.resolveComponent("el-table"),h=Vue.resolveComponent("el-pagination"),S=Vue.resolveDirective("loading");return Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[Vue.createVNode(_,{type:"primary",onClick:a[0]||(a[0]=e=>n())},{default:Vue.withCtx(()=>[Vue.createTextVNode("刷新列表")]),_:1}),Vue.createVNode(_,{type:"danger",disabled:p.value.length<=0,onClick:a[1]||(a[1]=e=>w())},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 批量删除 ")]),_:1},8,["disabled"]),Vue.createVNode(f,{style:{"margin-left":"20px"}},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 累计解析: "+Vue.toDisplayString(r.value.total.count)+" ("+Vue.toDisplayString(Vue.unref(g)(r.value.total.size??0))+") ",1)]),_:1}),Vue.createVNode(f,null,{default:Vue.withCtx(()=>[Vue.createTextVNode(" 今日解析: "+Vue.toDisplayString(r.value.today.count)+" ("+Vue.toDisplayString(Vue.unref(g)(r.value.today.size??0))+") ",1)]),_:1}),Vue.createVNode(f,{style:{"margin-left":"20px"}},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 按照 "),Vue.createVNode(z,{modelValue:V.value,"onUpdate:modelValue":a[2]||(a[2]=e=>V.value=e),onChange:n,style:{width:"100px"}},{default:Vue.withCtx(()=>[Vue.createVNode(v,{key:"id",label:"时间",value:"id"}),Vue.createVNode(v,{key:"size",label:"文件大小",value:"size"})]),_:1},8,["modelValue"]),Vue.createTextVNode(" 排序 ")]),_:1}),Vue.withDirectives((Vue.openBlock(),Vue.createBlock(D,{data:((m=d.value)==null?void 0:m.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:b},{default:Vue.withCtx(()=>[Vue.createVNode(t,{type:"selection",width:"40"}),Vue.createVNode(t,{prop:"id",label:"ID"}),Vue.createVNode(t,{prop:"ip",label:"IP"}),Vue.createVNode(t,{prop:"fs_id",label:"文件ID"}),Vue.createVNode(t,{prop:"file.filename",label:"文件名"}),Vue.createVNode(t,{prop:"fs_id",label:"文件大小"},{default:Vue.withCtx(({row:e})=>[Vue.createElementVNode("span",null,Vue.toDisplayString(Vue.unref(g)(e.file.size)),1)]),_:1}),Vue.createVNode(t,{prop:"url",label:"下载链接"}),Vue.createVNode(t,{prop:"ua",label:"UA"}),Vue.createVNode(t,{prop:"user_id",label:"用户ID"},{default:Vue.withCtx(({row:e})=>[Vue.createTextVNode(Vue.toDisplayString(e.user_id??"非用戶解析"),1)]),_:1}),Vue.createVNode(t,{prop:"token_id",label:"卡密ID"},{default:Vue.withCtx(({row:e})=>[Vue.createTextVNode(Vue.toDisplayString(e.token_id??"非卡密解析"),1)]),_:1}),Vue.createVNode(t,{prop:"account_id",label:"解析账号ID"}),Vue.createVNode(t,{prop:"created_at",label:"创建时间"},{default:Vue.withCtx(({row:e})=>[Vue.createTextVNode(Vue.toDisplayString(new Date(e.created_at).toLocaleString()),1)]),_:1}),Vue.createVNode(t,{prop:"updated_at",label:"更新时间"},{default:Vue.withCtx(({row:e})=>[Vue.createTextVNode(Vue.toDisplayString(new Date(e.updated_at).toLocaleString()),1)]),_:1}),Vue.createVNode(t,{width:"150",label:"操作",fixed:"right"},{default:Vue.withCtx(({row:e})=>[Vue.createVNode(_,{size:"small",type:"danger",onClick:E=>C(e)},{default:Vue.withCtx(()=>[Vue.createTextVNode("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[S,l.value]]),Vue.createVNode(h,{"current-page":c.value,"onUpdate:currentPage":a[3]||(a[3]=e=>c.value=e),"page-size":s.value,"onUpdate:pageSize":a[4]||(a[4]=e=>s.value=e),"page-sizes":[15,50,100,500,((y=d.value)==null?void 0:y.total)??100],total:((N=d.value)==null?void 0:N.total)??100,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:n,onCurrentChange:n},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),L=R(I,[["__scopeId","data-v-eed480fb"]]);export{L as default};
