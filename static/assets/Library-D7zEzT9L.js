import{n as e,t}from"./createLucideIcon-DTZipSeT.js";import{i as n,s as ee,u as r,v as i,y as a}from"./workbench-CJilD2V2.js";import{S as o,b as s,h as c}from"./store-UWf7_oX3.js";import{t as l}from"./plus-D7vuENJ3.js";import{t as te}from"./Select-CTOrjk90.js";import{n as ne,t as u}from"./FormItem-DsPHvM9k.js";import{t as d}from"./Skeleton-DCYZVZCf.js";import{n as f,t as p}from"./pencil-CPKz27pa.js";import{Cr as m,E as h,Er as g,Fr as _,Gt as v,Ht as y,Nr as b,Qn as x,Rn as S,Rr as C,Rt as w,T,Vn as E,Vt as D,ar as O,br as re,cr as k,er as A,ir as j,kr as M,lr as N,m as P,or as F,p as I,s as L,sr as R,ur as z,xr as B,zn as V}from"./index-BKnoSBpI.js";import{t as H}from"./book-marked-nVeERm8X.js";import{t as U}from"./file-text-DDwa7B61.js";import{t as W}from"./search-CynKb3GQ.js";import{t as G}from"./send-4yIDJPYm.js";import{t as K}from"./trash-2-EI8GYVga.js";var q=V(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[S(`>`,[V(`input`,[S(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),S(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),V(`button`,[S(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[E(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),S(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[E(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),S(`*`,[S(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[S(`>`,[V(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),V(`base-selection`,[V(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),V(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),E(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),S(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[S(`>`,[V(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),V(`base-selection`,[V(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),V(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),E(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),J=z({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=v(e);return y(`-input-group`,q,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return B(),R(`div`,{class:w(`${e}-input-group`)},[D(()=>this.$slots.default?.())],2)}}),Y=t(`link-2`,[[`path`,{d:`M9 17H7A5 5 0 0 1 7 7h2`,key:`8i5ue5`}],[`path`,{d:`M15 7h2a5 5 0 1 1 0 10h-2`,key:`1b9ql8`}],[`line`,{x1:`8`,x2:`16`,y1:`12`,y2:`12`,key:`1jonct`}]]),X=t(`sticky-note`,[[`path`,{d:`M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z`,key:`1dfntj`}],[`path`,{d:`M15 3v5a1 1 0 0 0 1 1h5`,key:`6s6qgf`}]]),ie={class:`page`},ae={class:`page-head`},oe={class:`page-title`},se={class:`muted count`},ce={class:`page-actions`},le={class:`page-body`},ue={class:`lib-toolbar`},de={key:0,class:`lib-list`},fe={key:2,class:`lib-list`},pe={class:`lb-head`},me={class:`lb-title`},he={class:`muted tiny`},ge={key:0,class:`lb-content`},_e={key:1,class:`muted tiny mb-8`},ve={class:`lb-foot`},ye={class:`lb-tags`},be={key:0,class:`muted tiny`},xe={class:`btn-group gap-4`},Se={class:`form-grid`},Z={class:`modal-actions`},Q=z({__name:`Library`,setup(t){let v=I(),y=L(),S=b(!1),w=b(null),E=b(``),D=b({title:``,content:``,kind:`note`,tags:``}),z=[{label:`笔记`,value:`note`},{label:`链接`,value:`link`},{label:`文件`,value:`file`}];function V(e){return e===`link`?{icon:Y,label:`链接`,type:`info`}:e===`file`?{icon:U,label:`文件`,type:`success`}:{icon:X,label:`笔记`,type:`default`}}function q(e){let t=new Date(e*1e3),n=e=>String(e).padStart(2,`0`);return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}`}function Q(e){return(e||``).split(`,`).map(e=>e.trim()).filter(Boolean)}function Ce(){w.value=null,D.value={title:``,content:``,kind:`note`,tags:``},S.value=!0}function we(e){w.value=e,D.value={title:e.title,content:e.content,kind:e.kind,tags:e.tags},S.value=!0}async function Te(){let e=D.value.title.trim();if(!e){v.warning(`标题不能为空`);return}let t={...D.value,title:e};(w.value?await i(w.value.id,t):await n(t))&&(v.success(w.value?`已更新`:`已保存到资料库`),S.value=!1)}async function Ee(e){await ee(e.id)&&v.success(`已删除`)}async function De(e){let t=`${e.title}\n\n${e.content}`.trim();await y.push(`/`),await c(t)}async function $(){await r(E.value.trim())}return re(()=>r()),(t,n)=>(B(),R(`div`,ie,[j(`div`,ae,[j(`div`,oe,[N(_(H),{size:20}),n[8]||=j(`h1`,null,`资料库`,-1),j(`span`,se,C(_(a).library.length)+` 条`,1)]),j(`div`,ce,[N(_(h),{type:`primary`,onClick:Ce},{icon:M(()=>[N(_(l),{size:15})]),default:M(()=>[n[9]||=k(` 新建条目 `,-1)]),_:1})])]),j(`div`,le,[j(`div`,ue,[N(_(J),{class:`lib-search`},{default:M(()=>[N(_(e),{value:E.value,"onUpdate:value":n[0]||=e=>E.value=e,placeholder:`搜索标题 / 内容 / 标签…`,clearable:``,onKeydown:x($,[`enter`])},{prefix:M(()=>[N(_(W),{size:14})]),_:1},8,[`value`]),N(_(h),{onClick:$},{default:M(()=>[...n[10]||=[k(`搜索`,-1)]]),_:1})]),_:1}),E.value?(B(),O(_(h),{key:0,quaternary:``,onClick:n[1]||=e=>{E.value=``,_(r)()}},{default:M(()=>[...n[11]||=[k(`清空`,-1)]]),_:1})):F(``,!0)]),_(a).loadingLibrary?(B(),R(`div`,de,[(B(),R(A,null,m(3,e=>N(_(T),{key:`sk`+e,size:`small`},{default:M(()=>[N(_(d),{text:``,width:`30%`,class:`sk-title`}),N(_(d),{text:``,repeat:3})]),_:1})),64))])):_(a).library.length?(B(),R(`div`,fe,[(B(!0),R(A,null,m(_(a).library,e=>(B(),O(_(T),{key:e.id,class:`lib-card`,size:`small`},{default:M(()=>[j(`div`,pe,[N(_(s),{size:`small`,bordered:!1,type:V(e.kind).type},{icon:M(()=>[(B(),O(g(V(e.kind).icon),{size:12}))]),default:M(()=>[k(` `+C(V(e.kind).label),1)]),_:2},1032,[`type`]),j(`span`,me,C(e.title),1),j(`span`,he,C(q(e.updated_at)),1)]),e.content?(B(),R(`pre`,ge,C(e.content),1)):(B(),R(`p`,_e,`（无内容）`)),j(`div`,ve,[j(`span`,ye,[(B(!0),R(A,null,m(Q(e.tags),e=>(B(),O(_(s),{key:e,size:`tiny`,bordered:!1},{default:M(()=>[k(C(e),1)]),_:2},1024))),128)),Q(e.tags).length?F(``,!0):(B(),R(`span`,be,`无标签`))]),j(`span`,xe,[N(_(h),{size:`tiny`,onClick:t=>De(e)},{icon:M(()=>[N(_(G),{size:13})]),default:M(()=>[n[12]||=k(` 带进对话 `,-1)]),_:1},8,[`onClick`]),N(_(h),{quaternary:``,circle:``,size:`tiny`,title:`编辑`,onClick:t=>we(e)},{icon:M(()=>[N(_(p),{size:13})]),_:1},8,[`onClick`]),N(_(f),{onPositiveClick:t=>Ee(e)},{trigger:M(()=>[N(_(h),{quaternary:``,circle:``,size:`tiny`,type:`error`,title:`删除`},{icon:M(()=>[N(_(K),{size:13})]),_:1})]),default:M(()=>[n[13]||=k(` 删除该条目？ `,-1)]),_:1},8,[`onPositiveClick`])])])]),_:2},1024))),128))])):(B(),O(_(o),{key:1,class:`page-empty`,description:`资料库还是空的，把常用资料存进来，随时带进对话`}))]),N(_(P),{show:S.value,"onUpdate:show":n[7]||=e=>S.value=e},{default:M(()=>[N(_(T),{class:`modal-card modal-w-md`,title:w.value?`编辑条目`:`新建条目`,bordered:!1},{footer:M(()=>[j(`div`,Z,[N(_(h),{onClick:n[6]||=e=>S.value=!1},{default:M(()=>[...n[14]||=[k(`取消`,-1)]]),_:1}),N(_(h),{type:`primary`,onClick:Te},{default:M(()=>[...n[15]||=[k(`保存`,-1)]]),_:1})])]),default:M(()=>[N(_(ne),{"label-placement":`top`,"show-feedback":!1},{default:M(()=>[j(`div`,Se,[N(_(u),{label:`标题`},{default:M(()=>[N(_(e),{value:D.value.title,"onUpdate:value":n[2]||=e=>D.value.title=e,placeholder:`便于检索的名称`},null,8,[`value`])]),_:1}),N(_(u),{label:`类型`},{default:M(()=>[N(_(te),{value:D.value.kind,"onUpdate:value":n[3]||=e=>D.value.kind=e,options:_(z)},null,8,[`value`,`options`])]),_:1}),N(_(u),{label:`内容（链接类型直接粘贴 URL）`},{default:M(()=>[N(_(e),{value:D.value.content,"onUpdate:value":n[4]||=e=>D.value.content=e,type:`textarea`,autosize:{minRows:6,maxRows:16},placeholder:`正文 / URL / 文件路径`},null,8,[`value`])]),_:1}),N(_(u),{label:`标签（逗号分隔）`},{default:M(()=>[N(_(e),{value:D.value.tags,"onUpdate:value":n[5]||=e=>D.value.tags=e,placeholder:`例如：回测, MACD, 参考`},null,8,[`value`])]),_:1})])]),_:1})]),_:1},8,[`title`])]),_:1},8,[`show`])]))}});export{Q as default};