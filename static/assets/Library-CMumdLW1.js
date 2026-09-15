import{n as e,t}from"./createLucideIcon--8DT_RtV.js";import{S as n,a as r,c as i,p as a,x as o}from"./workbench-Bf-U5f1h.js";import{C as s,g as c,x as l}from"./store-BUsLJM31.js";import{t as u}from"./plus-Cb2OPW-Q.js";import{t as ee}from"./Select-BoB83TqK.js";import{n as d,t as f}from"./FormItem-DDIfCoeG.js";import{t as p}from"./Skeleton-D-fCPh04.js";import{n as m,t as h}from"./pencil-CscjUBZK.js";import{$n as g,Ar as _,Dr as v,In as y,Ir as b,Jt as x,Ln as S,M as C,N as w,Pr as T,Qt as E,Sr as D,Xn as O,Zt as k,ar as A,br as j,cr as M,g as te,h as ne,ir as N,lr as P,nn as F,or as I,s as L,sr as R,ur as z,wr as B,zn as V,zr as H}from"./index-DBUzJGPl.js";import{t as U}from"./book-marked-C4qlVj5i.js";import{t as W}from"./file-text-DYkZAoG7.js";import{t as G}from"./search-D-1AHuxK.js";import{t as K}from"./send-DA0Pl2w7.js";import{t as q}from"./trash-2-D8KsdP3K.js";var J=S(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[y(`>`,[S(`input`,[y(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),y(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),S(`button`,[y(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[V(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),y(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[V(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),y(`*`,[y(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[y(`>`,[S(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),S(`base-selection`,[S(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),S(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),V(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),y(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[y(`>`,[S(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),S(`base-selection`,[S(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),S(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),V(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),Y=z({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=F(e);return E(`-input-group`,J,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return D(),R(`div`,{class:x(`${e}-input-group`)},[k(()=>this.$slots.default?.())],2)}}),X=t(`link-2`,[[`path`,{d:`M9 17H7A5 5 0 0 1 7 7h2`,key:`8i5ue5`}],[`path`,{d:`M15 7h2a5 5 0 1 1 0 10h-2`,key:`1b9ql8`}],[`line`,{x1:`8`,x2:`16`,y1:`12`,y2:`12`,key:`1jonct`}]]),Z=t(`sticky-note`,[[`path`,{d:`M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z`,key:`1dfntj`}],[`path`,{d:`M15 3v5a1 1 0 0 0 1 1h5`,key:`6s6qgf`}]]),re={class:`page`},ie={class:`page-head`},ae={class:`page-title`},oe={class:`muted count`},se={class:`page-actions`},ce={class:`page-body`},le={class:`lib-toolbar`},ue={key:0,class:`lib-list`},de={key:2,class:`lib-list`},fe={class:`lb-head`},pe={class:`lb-title`},me={class:`muted tiny`},he={key:0,class:`lb-content`},ge={key:1,class:`muted tiny mb-8`},_e={class:`lb-foot`},ve={class:`lb-tags`},ye={key:0,class:`muted tiny`},be={class:`btn-group gap-4`},xe={class:`form-grid`},Se={class:`modal-actions`},Q=z({__name:`Library`,setup(t){let y=ne(),x=L(),S=T(!1),E=T(null),k=T(``),F=T({title:``,content:``,kind:`note`,tags:``}),z=[{label:`笔记`,value:`note`},{label:`链接`,value:`link`},{label:`文件`,value:`file`}];function V(e){return e===`link`?{icon:X,label:`链接`,type:`info`}:e===`file`?{icon:W,label:`文件`,type:`success`}:{icon:Z,label:`笔记`,type:`default`}}function J(e){let t=new Date(e*1e3),n=e=>String(e).padStart(2,`0`);return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}`}function Q(e){return(e||``).split(`,`).map(e=>e.trim()).filter(Boolean)}function Ce(){E.value=null,F.value={title:``,content:``,kind:`note`,tags:``},S.value=!0}function we(e){E.value=e,F.value={title:e.title,content:e.content,kind:e.kind,tags:e.tags},S.value=!0}async function Te(){let e=F.value.title.trim();if(!e){y.warning(`标题不能为空`);return}let t={...F.value,title:e};(E.value?await o(E.value.id,t):await r(t))&&(y.success(E.value?`已更新`:`已保存到资料库`),S.value=!1)}async function Ee(e){await i(e.id)&&y.success(`已删除`)}async function De(e){let t=`${e.title}\n\n${e.content}`.trim();await x.push(`/`),await c(t)}async function $(){await a(k.value.trim())}return j(()=>a()),(t,r)=>(D(),R(`div`,re,[N(`div`,ie,[N(`div`,ae,[P(b(U),{size:20}),r[8]||=N(`h1`,null,`资料库`,-1),N(`span`,oe,H(b(n).library.length)+` 条`,1)]),N(`div`,se,[P(b(w),{type:`primary`,onClick:Ce},{icon:_(()=>[P(b(u),{size:15})]),default:_(()=>[r[9]||=M(` 新建条目 `,-1)]),_:1})])]),N(`div`,ce,[N(`div`,le,[P(b(Y),{class:`lib-search`},{default:_(()=>[P(b(e),{value:k.value,"onUpdate:value":r[0]||=e=>k.value=e,placeholder:`搜索标题 / 内容 / 标签…`,clearable:``,onKeydown:O($,[`enter`])},{prefix:_(()=>[P(b(G),{size:14})]),_:1},8,[`value`]),P(b(w),{onClick:$},{default:_(()=>[...r[10]||=[M(`搜索`,-1)]]),_:1})]),_:1}),k.value?(D(),A(b(w),{key:0,quaternary:``,onClick:r[1]||=e=>{k.value=``,b(a)()}},{default:_(()=>[...r[11]||=[M(`清空`,-1)]]),_:1})):I(``,!0)]),b(n).loadingLibrary?(D(),R(`div`,ue,[(D(),R(g,null,B(3,e=>P(b(C),{key:`sk`+e,size:`small`},{default:_(()=>[P(b(p),{text:``,width:`30%`,class:`sk-title`}),P(b(p),{text:``,repeat:3})]),_:1})),64))])):b(n).library.length?(D(),R(`div`,de,[(D(!0),R(g,null,B(b(n).library,e=>(D(),A(b(C),{key:e.id,class:`lib-card`,size:`small`},{default:_(()=>[N(`div`,fe,[P(b(l),{size:`small`,bordered:!1,type:V(e.kind).type},{icon:_(()=>[(D(),A(v(V(e.kind).icon),{size:12}))]),default:_(()=>[M(` `+H(V(e.kind).label),1)]),_:2},1032,[`type`]),N(`span`,pe,H(e.title),1),N(`span`,me,H(J(e.updated_at)),1)]),e.content?(D(),R(`pre`,he,H(e.content),1)):(D(),R(`p`,ge,`（无内容）`)),N(`div`,_e,[N(`span`,ve,[(D(!0),R(g,null,B(Q(e.tags),e=>(D(),A(b(l),{key:e,size:`tiny`,bordered:!1},{default:_(()=>[M(H(e),1)]),_:2},1024))),128)),Q(e.tags).length?I(``,!0):(D(),R(`span`,ye,`无标签`))]),N(`span`,be,[P(b(w),{size:`tiny`,onClick:t=>De(e)},{icon:_(()=>[P(b(K),{size:13})]),default:_(()=>[r[12]||=M(` 带进对话 `,-1)]),_:1},8,[`onClick`]),P(b(w),{quaternary:``,circle:``,size:`tiny`,title:`编辑`,onClick:t=>we(e)},{icon:_(()=>[P(b(h),{size:13})]),_:1},8,[`onClick`]),P(b(m),{onPositiveClick:t=>Ee(e)},{trigger:_(()=>[P(b(w),{quaternary:``,circle:``,size:`tiny`,type:`error`,title:`删除`},{icon:_(()=>[P(b(q),{size:13})]),_:1})]),default:_(()=>[r[13]||=M(` 删除该条目？ `,-1)]),_:1},8,[`onPositiveClick`])])])]),_:2},1024))),128))])):(D(),A(b(s),{key:1,class:`page-empty`,description:`资料库还是空的，把常用资料存进来，随时带进对话`}))]),P(b(te),{show:S.value,"onUpdate:show":r[7]||=e=>S.value=e},{default:_(()=>[P(b(C),{class:`modal-card modal-w-md`,title:E.value?`编辑条目`:`新建条目`,bordered:!1},{footer:_(()=>[N(`div`,Se,[P(b(w),{onClick:r[6]||=e=>S.value=!1},{default:_(()=>[...r[14]||=[M(`取消`,-1)]]),_:1}),P(b(w),{type:`primary`,onClick:Te},{default:_(()=>[...r[15]||=[M(`保存`,-1)]]),_:1})])]),default:_(()=>[P(b(d),{"label-placement":`top`,"show-feedback":!1},{default:_(()=>[N(`div`,xe,[P(b(f),{label:`标题`},{default:_(()=>[P(b(e),{value:F.value.title,"onUpdate:value":r[2]||=e=>F.value.title=e,placeholder:`便于检索的名称`},null,8,[`value`])]),_:1}),P(b(f),{label:`类型`},{default:_(()=>[P(b(ee),{value:F.value.kind,"onUpdate:value":r[3]||=e=>F.value.kind=e,options:b(z)},null,8,[`value`,`options`])]),_:1}),P(b(f),{label:`内容（链接类型直接粘贴 URL）`},{default:_(()=>[P(b(e),{value:F.value.content,"onUpdate:value":r[4]||=e=>F.value.content=e,type:`textarea`,autosize:{minRows:6,maxRows:16},placeholder:`正文 / URL / 文件路径`},null,8,[`value`])]),_:1}),P(b(f),{label:`标签（逗号分隔）`},{default:_(()=>[P(b(e),{value:F.value.tags,"onUpdate:value":r[5]||=e=>F.value.tags=e,placeholder:`例如：回测, MACD, 参考`},null,8,[`value`])]),_:1})])]),_:1})]),_:1},8,[`title`])]),_:1},8,[`show`])]))}});export{Q as default};