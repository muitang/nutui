System.register(["./mobile-legacy.e5525e06.js","./vendor-legacy.2cbae777.js","./index-legacy.4b6dd49d.js"],(function(e){"use strict";var t,l,c,i,n,s,d;return{setters:[function(e){t=e.c},function(e){l=e.k,c=e.r,i=e.o,n=e.c,s=e.f,d=e.i},function(){}],execute:function(){const{createDemo:u}=t("cell");var o=e("default",u({setup:()=>({testClick:e=>{console.log("点击事件")},switchChecked:l(!0)})}));const a={class:"demo"},r=s("h2",null,"基本用法",-1),h=s("h2",null,"直接使用插槽(slot)",-1),f=s("div",null,"自定义内容",-1),k=s("h2",null,"展示图标",-1),m=s("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);o.render=function(e,t,l,u,o,g){const C=c("nut-cell"),j=c("nut-cell-group"),p=c("nut-switch");return i(),n("div",a,[r,s(C,{title:"我是标题",desc:"描述文字"}),s(C,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),s(C,{title:"点击测试",onClick:e.testClick},null,8,["onClick"]),h,s(C,{title:"我是标题",desc:"描述文字"},{default:d((()=>[f])),_:1}),s(j,{title:"链接 | 分组用法"},{default:d((()=>[s(C,{title:"链接","is-link":""}),s(C,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),s(C,{title:"路由跳转 ’/‘ ",to:"/"})])),_:1}),s(j,{title:"自定义右侧箭头区域"},{default:d((()=>[s(C,{title:"Switch"},{link:d((()=>[s(p,{modelValue:e.switchChecked,"onUpdate:modelValue":t[1]||(t[1]=t=>e.switchChecked=t)},null,8,["modelValue"])])),_:1})])),_:1}),k,s(C,{title:"姓名",icon:"my",desc:"张三",isLink:""}),m,s(C,{"desc-text-align":"left",desc:"张三"})])}}}}));