import{t as e}from"./createLucideIcon-C0tFHUeh.js";import{g as t,l as n,o as r,r as i,v as a,y as o}from"./workbench-CJKl6Woq.js";import{_ as s,p as c,y as l}from"./store-CLgscIK6.js";import{n as u,t as d}from"./FormItem-DimvIQIi.js";import{t as f}from"./Input-dX81aqjP.js";import{t as ee}from"./Popconfirm-5iiaCyDG.js";import{$n as p,Cr as m,Er as h,Fr as g,Gt as _,Ht as v,Nr as y,Rn as b,Rr as x,Rt as S,T as C,Vn as w,Vt as T,Zn as E,ar as D,br as O,cr as k,d as te,f as ne,ir as A,kr as j,lr as M,o as N,or as P,sr as F,ur as I,w as L,xr as R,zn as z}from"./index-BMqIxkxK.js";import{t as B}from"./book-marked-DYVmUnx8.js";import{t as V}from"./file-text-gU9tk6iy.js";import{t as H}from"./pencil-uXfsP5JB.js";import{t as U}from"./plus-BLE89VPC.js";import{t as W}from"./search-CPa1EMj7.js";import{t as G}from"./send-BNJQkHxz.js";import{t as K}from"./trash-2-Apmi14et.js";var q=z(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[b(`>`,[z(`input`,[b(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),z(`button`,[b(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[w(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),b(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[w(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),b(`*`,[b(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[b(`>`,[z(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),z(`base-selection`,[z(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),z(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),w(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),b(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[b(`>`,[z(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),z(`base-selection`,[z(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),z(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),w(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),J=I({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=_(e);return v(`-input-group`,q,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return R(),F(`div`,{class:S(`${e}-input-group`)},[T(()=>this.$slots.default?.())],2)}}),Y=e(`link-2`,[[`path`,{d:`M9 17H7A5 5 0 0 1 7 7h2`,key:`8i5ue5`}],[`path`,{d:`M15 7h2a5 5 0 1 1 0 10h-2`,key:`1b9ql8`}],[`line`,{x1:`8`,x2:`16`,y1:`12`,y2:`12`,key:`1jonct`}]]),X=e(`sticky-note`,[[`path`,{d:`M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z`,key:`1dfntj`}],[`path`,{d:`M15 3v5a1 1 0 0 0 1 1h5`,key:`6s6qgf`}]]),re={class:`page`},ie={class:`page-head`},ae={class:`page-title`},oe={class:`muted count`},se={class:`page-actions`},ce={class:`page-body`},le={class:`lib-toolbar`},ue={key:1,class:`lib-list`},de={class:`lb-head`},fe={class:`lb-title`},pe={class:`muted tiny`},me={key:0,class:`lb-content`},he={key:1,class:`muted tiny mb-8`},ge={class:`lb-foot`},_e={class:`lb-tags`},ve={key:0,class:`muted tiny`},ye={class:`btn-group gap-4`},be={class:`form-grid`},xe={class:`modal-actions`},Z=I({__name:`Library`,setup(e){let _=te(),v=N(),b=y(!1),S=y(null),w=y(``),T=y({title:``,content:``,kind:`note`,tags:``}),I=[{label:`笔记`,value:`note`},{label:`链接`,value:`link`},{label:`文件`,value:`file`}];function z(e){return e===`link`?{icon:Y,label:`链接`,type:`info`}:e===`file`?{icon:V,label:`文件`,type:`success`}:{icon:X,label:`笔记`,type:`default`}}function q(e){let t=new Date(e*1e3),n=e=>String(e).padStart(2,`0`);return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}`}function Z(e){return(e||``).split(`,`).map(e=>e.trim()).filter(Boolean)}function Q(){S.value=null,T.value={title:``,content:``,kind:`note`,tags:``},b.value=!0}function Se(e){S.value=e,T.value={title:e.title,content:e.content,kind:e.kind,tags:e.tags},b.value=!0}async function Ce(){let e=T.value.title.trim();if(!e){_.warning(`标题不能为空`);return}let n={...T.value,title:e};(S.value?await t(S.value.id,n):await i(n))&&(_.success(S.value?`已更新`:`已保存到资料库`),b.value=!1)}async function we(e){await r(e.id)&&_.success(`已删除`)}async function Te(e){let t=`${e.title}\n\n${e.content}`.trim();await v.push(`/`),await c(t)}async function $(){await n(w.value.trim())}return O(()=>n()),(e,t)=>(R(),F(`div`,re,[A(`div`,ie,[A(`div`,ae,[M(g(B),{size:20}),t[8]||=A(`h1`,null,`资料库`,-1),A(`span`,oe,x(g(a).library.length)+` 条`,1)]),A(`div`,se,[M(g(C),{type:`primary`,onClick:Q},{icon:j(()=>[M(g(U),{size:15})]),default:j(()=>[t[9]||=k(` 新建条目 `,-1)]),_:1})])]),A(`div`,ce,[A(`div`,le,[M(g(J),{class:`lib-search`},{default:j(()=>[M(g(f),{value:w.value,"onUpdate:value":t[0]||=e=>w.value=e,placeholder:`搜索标题 / 内容 / 标签…`,clearable:``,onKeydown:E($,[`enter`])},{prefix:j(()=>[M(g(W),{size:14})]),_:1},8,[`value`]),M(g(C),{onClick:$},{default:j(()=>[...t[10]||=[k(`搜索`,-1)]]),_:1})]),_:1}),w.value?(R(),D(g(C),{key:0,quaternary:``,onClick:t[1]||=e=>{w.value=``,g(n)()}},{default:j(()=>[...t[11]||=[k(`清空`,-1)]]),_:1})):P(``,!0)]),g(a).library.length?(R(),F(`div`,ue,[(R(!0),F(p,null,m(g(a).library,e=>(R(),D(g(L),{key:e.id,class:`lib-card`,size:`small`},{default:j(()=>[A(`div`,de,[M(g(s),{size:`small`,bordered:!1,type:z(e.kind).type},{icon:j(()=>[(R(),D(h(z(e.kind).icon),{size:12}))]),default:j(()=>[k(` `+x(z(e.kind).label),1)]),_:2},1032,[`type`]),A(`span`,fe,x(e.title),1),A(`span`,pe,x(q(e.updated_at)),1)]),e.content?(R(),F(`pre`,me,x(e.content),1)):(R(),F(`p`,he,`（无内容）`)),A(`div`,ge,[A(`span`,_e,[(R(!0),F(p,null,m(Z(e.tags),e=>(R(),D(g(s),{key:e,size:`tiny`,bordered:!1},{default:j(()=>[k(x(e),1)]),_:2},1024))),128)),Z(e.tags).length?P(``,!0):(R(),F(`span`,ve,`无标签`))]),A(`span`,ye,[M(g(C),{size:`tiny`,onClick:t=>Te(e)},{icon:j(()=>[M(g(G),{size:13})]),default:j(()=>[t[12]||=k(` 带进对话 `,-1)]),_:1},8,[`onClick`]),M(g(C),{quaternary:``,circle:``,size:`tiny`,title:`编辑`,onClick:t=>Se(e)},{icon:j(()=>[M(g(H),{size:13})]),_:1},8,[`onClick`]),M(g(ee),{onPositiveClick:t=>we(e)},{trigger:j(()=>[M(g(C),{quaternary:``,circle:``,size:`tiny`,type:`error`,title:`删除`},{icon:j(()=>[M(g(K),{size:13})]),_:1})]),default:j(()=>[t[13]||=k(` 删除该条目？ `,-1)]),_:1},8,[`onPositiveClick`])])])]),_:2},1024))),128))])):(R(),D(g(l),{key:0,class:`page-empty`,description:`资料库还是空的，把常用资料存进来，随时带进对话`}))]),M(g(ne),{show:b.value,"onUpdate:show":t[7]||=e=>b.value=e},{default:j(()=>[M(g(L),{class:`modal-card modal-w-md`,title:S.value?`编辑条目`:`新建条目`,bordered:!1},{footer:j(()=>[A(`div`,xe,[M(g(C),{onClick:t[6]||=e=>b.value=!1},{default:j(()=>[...t[14]||=[k(`取消`,-1)]]),_:1}),M(g(C),{type:`primary`,onClick:Ce},{default:j(()=>[...t[15]||=[k(`保存`,-1)]]),_:1})])]),default:j(()=>[M(g(u),{"label-placement":`top`,"show-feedback":!1},{default:j(()=>[A(`div`,be,[M(g(d),{label:`标题`},{default:j(()=>[M(g(f),{value:T.value.title,"onUpdate:value":t[2]||=e=>T.value.title=e,placeholder:`便于检索的名称`},null,8,[`value`])]),_:1}),M(g(d),{label:`类型`},{default:j(()=>[M(g(o),{value:T.value.kind,"onUpdate:value":t[3]||=e=>T.value.kind=e,options:g(I)},null,8,[`value`,`options`])]),_:1}),M(g(d),{label:`内容（链接类型直接粘贴 URL）`},{default:j(()=>[M(g(f),{value:T.value.content,"onUpdate:value":t[4]||=e=>T.value.content=e,type:`textarea`,autosize:{minRows:6,maxRows:16},placeholder:`正文 / URL / 文件路径`},null,8,[`value`])]),_:1}),M(g(d),{label:`标签（逗号分隔）`},{default:j(()=>[M(g(f),{value:T.value.tags,"onUpdate:value":t[5]||=e=>T.value.tags=e,placeholder:`例如：回测, MACD, 参考`},null,8,[`value`])]),_:1})])]),_:1})]),_:1},8,[`title`])]),_:1},8,[`show`])]))}});export{Z as default};