import{a as e,i as t,r as n}from"./createLucideIcon-BXmGfaRL.js";import{A as r,C as i,D as a,E as o,M as s,N as c,O as l,S as u,j as d,k as f,x as p}from"./workbench-DnslEpAR.js";import{S as m,b as h}from"./store-B9TQ41QR.js";import{n as g,r as _,t as v}from"./cssr-CDDyI__-.js";import{$ as y,$n as b,A as x,An as S,C as ee,Dn as C,Dt as w,Et as T,Ft as E,Gt as te,Hn as D,In as O,It as ne,Jn as re,Kn as k,Lt as ie,Nt as ae,O as A,On as j,Ot as oe,P as se,Pn as M,Pt as ce,Qn as N,R as P,Rt as F,S as le,Sr as I,Tn as L,Un as R,Ut as z,Vt as B,Wn as V,X as ue,Yn as H,Zn as U,ar as de,b as fe,dt as pe,er as W,et as G,fr as me,gt as he,hr as ge,ht as K,ir as _e,k as ve,kn as ye,kt as be,lr as xe,lt as Se,or as q,ot as Ce,pr as we,rr as Te,rt as Ee,sr as De,st as Oe,tr as ke,vr as J,wn as Y,yr as X,yt as Ae,zn as Z,zt as Q}from"./index-B-84Kufr.js";function je(e){return e&-e}var Me=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=je(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=je(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},Ne;function Pe(){return typeof document>`u`?!1:(Ne===void 0&&(Ne=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches),Ne)}var Fe;function Ie(){return typeof document>`u`?1:(Fe===void 0&&(Fe=`chrome`in window?window.devicePixelRatio:1),Fe)}var Le=`VVirtualListXScroll`;function Re({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let r=J(0),i=J(0),a=D(()=>{let t=e.value;if(t.length===0)return null;let n=new Me(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n}),o=Ae(()=>{let e=a.value;return e===null?0:Math.max(e.getBound(i.value)-1,0)}),s=e=>{let t=a.value;return t===null?0:t.sum(e)},c=Ae(()=>{let t=a.value;return t===null?0:Math.min(t.getBound(i.value+r.value)+1,e.value.length-1)});return De(Le,{startIndexRef:o,endIndexRef:c,columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:s}),{listWidthRef:r,scrollLeftRef:i}}var ze=H({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=N(Le);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),Be=v(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[v(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[v(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),Ve=H({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){let t=z();Be.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:g,ssr:t}),de(()=>{let{defaultScrollIndex:t,defaultScrollKey:n}=e;t==null?n!=null&&v({key:n}):v({index:t})});let n=!1,r=!1;ke(()=>{if(n=!1,!r){r=!0;return}v({top:m.value,left:o.value})}),_e(()=>{n=!0,r||=!0});let i=Ae(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let t=0;return e.columns.forEach(e=>{t+=e.width}),t}),a=D(()=>{let t=new Map,{keyField:n}=e;return e.items.forEach((e,r)=>{t.set(e[n],r)}),t}),{scrollLeftRef:o,listWidthRef:s}=Re({columnsRef:X(e,`columns`),renderColRef:X(e,`renderCol`),renderItemWithColsRef:X(e,`renderItemWithCols`)}),l=J(null),u=J(void 0),d=new Map,f=D(()=>{let{items:t,itemSize:n,keyField:r}=e,i=new Me(t.length,n);return t.forEach((e,t)=>{let n=e[r],a=d.get(n);a!==void 0&&i.add(t,a)}),i}),p=J(0),m=J(0),h=Ae(()=>Math.max(f.value.getBound(m.value-ae(e.paddingTop))-1,0)),_=D(()=>{let{value:t}=u;if(t===void 0)return[];let{items:n,itemSize:r}=e,i=h.value,a=Math.min(i+Math.ceil(t/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),v=(e,t)=>{if(typeof e==`number`){S(e,t,`auto`);return}let{left:n,top:r,index:i,key:o,position:s,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)S(n,r,c);else if(i!==void 0)x(i,c,l);else if(o!==void 0){let e=a.value.get(o);e!==void 0&&x(e,c,l)}else s===`bottom`?S(0,2**53-1,c):s===`top`&&S(0,0,c)},y,b=null;function x(t,n,r){let i=l.value;if(i==null)return;let{value:a}=f,o=a.sum(t)+ae(e.paddingTop);if(!r)i.scrollTo({left:0,top:o,behavior:n});else{y=t,b!==null&&window.clearTimeout(b),b=window.setTimeout(()=>{y=void 0,b=null},16);let{scrollTop:e,offsetHeight:r}=i;if(o>e){let s=a.get(t);o+s<=e+r||i.scrollTo({left:0,top:o+s-r,behavior:n})}else i.scrollTo({left:0,top:o,behavior:n})}}function S(e,t,n){l.value?.scrollTo({left:e,top:t,behavior:n})}function ee(t,r){if(n||e.ignoreItemResize||re(r.target))return;let{value:i}=f,o=a.value.get(t),s=i.get(o),c=r.borderBoxSize?.[0]?.blockSize??r.contentRect.height;if(c===s)return;c-e.itemSize===0?d.delete(t):d.set(t,c-e.itemSize);let u=c-s;if(u===0)return;i.add(o,u);let m=l.value;if(m!=null){if(y===void 0){let e=i.sum(o);m.scrollTop>e&&m.scrollBy(0,u)}else(o<y||o===y&&c+i.sum(o)>m.scrollTop+m.offsetHeight)&&m.scrollBy(0,u);ne()}p.value++}let C=!Pe(),w=!1;function T(t){var n;(n=e.onScroll)==null||n.call(e,t),(!C||!w)&&ne()}function te(t){var n;if((n=e.onWheel)==null||n.call(e,t),C){let e=l.value;if(e!=null){if(t.deltaX===0&&(e.scrollTop===0&&t.deltaY<=0||e.scrollTop+e.offsetHeight>=e.scrollHeight&&t.deltaY>=0))return;t.preventDefault(),e.scrollTop+=t.deltaY/Ie(),e.scrollLeft+=t.deltaX/Ie(),ne(),w=!0,c(()=>{w=!1})}}}function O(t){if(n||re(t.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(t.contentRect.height===u.value)return}else if(t.contentRect.height===u.value&&t.contentRect.width===s.value)return;u.value=t.contentRect.height,s.value=t.contentRect.width;let{onResize:r}=e;r!==void 0&&r(t)}function ne(){let{value:e}=l;e!=null&&(m.value=e.scrollTop,o.value=e.scrollLeft)}function re(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:u,listStyle:{overflow:`auto`},keyToIndex:a,itemsStyle:D(()=>{let{itemResizable:t}=e,n=E(f.value.sum());return p.value,[e.itemsStyle,{boxSizing:`content-box`,width:E(i.value),height:t?``:n,minHeight:t?n:``,paddingTop:E(e.paddingTop),paddingBottom:E(e.paddingBottom)}]}),visibleItemsStyle:D(()=>(p.value,{transform:`translateY(${E(f.value.sum(h.value))})`})),viewportItems:_,listElRef:l,itemsElRef:J(null),scrollTo:v,handleListResize:O,handleListScroll:T,handleListWheel:te,handleItemResize:ee}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return U(y,{onResize:this.handleListResize},{default:()=>{var i;return U(`div`,b(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(i=this.$slots).empty?.call(i):U(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[U(r,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:i}=this;return this.viewportItems.map(a=>{let o=a[t],s=n.get(o),c=r==null?void 0:U(ze,{index:s,item:a}),l=i==null?void 0:U(ze,{index:s,item:a}),u=this.$slots.default({item:a,renderedCols:c,renderedItemWithCols:l,index:s})[0];return e?U(y,{key:o,onResize:e=>this.handleItemResize(o,e)},{default:()=>u}):(u.key=o,u)})}})])])}})}}),$=`v-hidden`,He=v(`[v-hidden]`,{display:`none!important`}),Ue=H({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=J(null),r=J(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute($)&&c.removeAttribute($);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute($)&&e.removeAttribute($);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute($)||n.setAttribute($,``);continue}n.hasAttribute($)&&n.removeAttribute($);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute($,``))}let a=z();return He.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:g,ssr:a}),de(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return W(()=>this.sync({showAllItemsBeforeCalculate:!1})),U(`div`,{class:`v-overflow`,ref:`selfRef`},[xe(e,`default`),e.counter?e.counter():U(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function We(e){switch(typeof e){case`string`:return e||void 0;case`number`:return String(e);default:return}}function Ge(e,t){t&&(de(()=>{let{value:n}=e;n&&G.registerHandler(n,t)}),me(e,(e,t)=>{t&&G.unregisterHandler(t)},{deep:!1}),Te(()=>{let{value:t}=e;t&&G.unregisterHandler(t)}))}var Ke=H({props:{onFocus:Function,onBlur:Function},setup(e){return()=>(()=>{let t=ie(`d16ead82505dc285`);return q(),k(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:t[0]||=t=>e.onFocus?.(t),onBlur:t[1]||=t=>e.onBlur?.(t)},null,32)})()}}),qe=H({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=N(d);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):x(i[this.labelField],i,!1),s=(q(),k(`div`,b(a,{class:[`${e}-base-select-group-header`,a?.class]}),[B(()=>o)],16));return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}}),Je=H({name:`Checkmark`,render(){return(()=>{let e=ie(`3c84eac8ae4e1f96`);return e[0]||=R(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},[R(`g`,{fill:`none`},[R(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})])],-1)})()}}),Ye=[`onClick`,`onMouseenter`,`onMousemove`];function Xe(e,t){return q(),V(M,{name:`fade-in-scale-up-transition`},{default:()=>e?(q(),V(w,{key:1,clsPrefix:t,class:F(`${t}-base-select-option__check`)},{default:()=>U(Je)},1032,[`clsPrefix`,`class`])):null},1024)}var Ze=H({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:i,renderLabelRef:a,renderOptionRef:o,labelFieldRef:s,valueFieldRef:c,showCheckmarkRef:l,nodePropsRef:u,handleOptionClick:f,handleOptionMouseEnter:p}=N(d),m=Ae(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e;n.disabled||p(t,n)}function _(t){let{tmNode:n}=e,{value:r}=m;n.disabled||r||p(t,n)}return{multiple:r,isGrouped:Ae(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:l,nodeProps:u,isPending:m,isSelected:Ae(()=>{let{value:n}=t,{value:a}=r;if(n===null)return!1;let o=e.tmNode.rawNode[c.value];if(a){let{value:e}=i;return e.has(o)}return n===o}),labelField:s,renderLabel:a,renderOption:o,handleMouseMove:_,handleMouseEnter:g,handleClick:h}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:s,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,f=Xe(n,e),p=c?[c(t,n),a&&f]:[x(t[this.labelField],t,n),a&&f],m=o?.(t),h=(q(),k(`div`,b(m,{class:[`${e}-base-select-option`,t.class,m?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[m?.style||``,t.style||``],onClick:ve([l,m?.onClick]),onMouseenter:ve([u,m?.onMouseenter]),onMousemove:ve([d,m?.onMousemove])}),[R(`div`,{class:F(`${e}-base-select-option__content`)},[B(()=>p)],2)],16,Ye));return t.render?t.render({node:h,option:t,selected:n}):s?s({node:h,option:t,selected:n}):h}}),Qe=L(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[L(`scrollbar`,`
 max-height: var(--n-height);
 `),L(`virtual-list`,`
 max-height: var(--n-height);
 `),L(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[C(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),L(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),L(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),C(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),C(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),C(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),C(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),L(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),L(`base-select-option`,`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[j(`show-checkmark`,`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Y(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Y(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),j(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),j(`pending`,[Y(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),j(`selected`,`
 color: var(--n-option-text-color-active);
 `,[Y(`&::before`,`
 background-color: var(--n-option-color-active);
 `),j(`pending`,[Y(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),j(`disabled`,`
 cursor: not-allowed;
 `,[ye(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),j(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),C(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[A({enterScale:`0.5`})])])]),$e=[`tabindex`,`onFocusin`,`onFocusout`,`onKeyup`,`onKeydown`,`onMousedown`,`onMouseenter`,`onMouseleave`],et=H({name:`InternalSelectMenu`,props:{...oe.props,clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function},setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n,mergedComponentPropsRef:i}=te(e),a=Oe(`InternalSelectMenu`,n,t),o=oe(`InternalSelectMenu`,`-internal-select-menu`,Qe,T,e,X(e,`clsPrefix`)),c=J(null),l=J(null),f=J(null),p=D(()=>e.treeMate.getFlattenedNodes()),m=D(()=>u(p.value)),h=J(null);function g(){let{treeMate:t}=e,n=null,{value:r}=e;r===null?n=t.getFirstAvailableNode():(n=e.multiple?t.getNode((r||[])[(r||[]).length-1]):t.getNode(r),(!n||n.disabled)&&(n=t.getFirstAvailableNode())),P(n||null)}function _(){let{value:t}=h;t&&!e.treeMate.getNode(t.key)&&(h.value=null)}let v;me(()=>e.show,t=>{t?v=me(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():_(),W(F)):_()},{immediate:!0}):v?.()},{immediate:!0}),Te(()=>{v?.()});let y=D(()=>ae(o.value.self[S(`optionHeight`,e.size)])),b=D(()=>ce(o.value.self[S(`padding`,e.size)])),x=D(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),ee=D(()=>{let e=p.value;return e&&e.length===0}),C=D(()=>i?.value?.Select?.renderEmpty);function w(t){let{onToggle:n}=e;n&&n(t)}function E(t){let{onScroll:n}=e;n&&n(t)}function O(e){f.value?.sync(),E(e)}function ne(){f.value?.sync()}function re(){let{value:e}=h;return e||null}function k(e,t){t.disabled||P(t,!1)}function ie(e,t){t.disabled||w(t)}function A(t){s(t,`action`)||e.onKeyup?.(t)}function j(t){s(t,`action`)||e.onKeydown?.(t)}function se(t){e.onMousedown?.(t),!e.focusable&&t.preventDefault()}function M(){let{value:e}=h;e&&P(e.getNext({loop:!0}),!0)}function N(){let{value:e}=h;e&&P(e.getPrev({loop:!0}),!0)}function P(e,t=!1){h.value=e,t&&F()}function F(){let t=h.value;if(!t)return;let n=m.value(t.key);n!==null&&(e.virtualScroll?l.value?.scrollTo({index:n}):f.value?.scrollTo({index:n,elSize:y.value}))}function le(t){c.value?.contains(t.target)&&e.onFocus?.(t)}function I(t){c.value?.contains(t.relatedTarget)||e.onBlur?.(t)}De(d,{handleOptionMouseEnter:k,handleOptionClick:ie,valueSetRef:x,pendingTmNodeRef:h,nodePropsRef:X(e,`nodeProps`),showCheckmarkRef:X(e,`showCheckmark`),multipleRef:X(e,`multiple`),valueRef:X(e,`value`),renderLabelRef:X(e,`renderLabel`),renderOptionRef:X(e,`renderOption`),labelFieldRef:X(e,`labelField`),valueFieldRef:X(e,`valueField`)}),De(r,c),de(()=>{let{value:e}=f;e&&e.sync()});let L=D(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:s,actionDividerColor:c,optionTextColorPressed:l,optionTextColor:u,optionTextColorDisabled:d,optionTextColorActive:f,optionOpacityDisabled:p,optionCheckColor:m,actionTextColor:h,optionColorPending:g,optionColorActive:_,loadingColor:v,loadingSize:y,optionColorActivePending:b,[S(`optionFontSize`,t)]:x,[S(`optionHeight`,t)]:ee,[S(`optionPadding`,t)]:C}}=o.value;return{"--n-height":r,"--n-action-divider-color":c,"--n-action-text-color":h,"--n-bezier":n,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":x,"--n-group-header-text-color":s,"--n-option-check-color":m,"--n-option-color-pending":g,"--n-option-color-active":_,"--n-option-color-active-pending":b,"--n-option-height":ee,"--n-option-opacity-disabled":p,"--n-option-text-color":u,"--n-option-text-color-active":f,"--n-option-text-color-disabled":d,"--n-option-text-color-pressed":l,"--n-option-padding":C,"--n-option-padding-left":ce(C,`left`),"--n-option-padding-right":ce(C,`right`),"--n-loading-color":v,"--n-loading-size":y}}),{inlineThemeDisabled:R}=e,z=R?be(`internal-select-menu`,D(()=>e.size[0]),L,e):void 0,B={selfRef:c,next:M,prev:N,getPendingTmNode:re};return Ge(c,e.onResize),{mergedTheme:o,mergedClsPrefix:t,rtlEnabled:a,virtualListRef:l,scrollbarRef:f,itemSize:y,padding:b,flattenedNodes:p,empty:ee,mergedRenderEmpty:C,virtualListContainer(){let{value:e}=l;return e?.listElRef},virtualListContent(){let{value:e}=l;return e?.itemsElRef},doScroll:E,handleFocusin:le,handleFocusout:I,handleKeyUp:A,handleKeyDown:j,handleMouseDown:se,handleVirtualListResize:ne,handleVirtualListScroll:O,cssVars:R?void 0:L,themeClass:z?.themeClass,onRender:z?.onRender,...B}},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:i,onRender:a}=this;return a?.(),q(),k(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:F([`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`]),style:I(this.cssVars),onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[B(()=>pe(e.header,e=>e&&(q(),k(`div`,{class:F(`${n}-base-select-menu__header`),"data-header":!0,key:`header`},[B(()=>e)],2)))),this.loading?(q(),k(`div`,{key:0,class:F(`${n}-base-select-menu__loading`)},[(q(),V(se,{clsPrefix:n,strokeWidth:20},null,8,[`clsPrefix`]))],2)):(q(),k(Z,{key:1},[this.empty?(q(),k(`div`,{key:1,class:F(`${n}-base-select-menu__empty`),"data-empty":!0},[B(()=>Se(e.empty,()=>[this.mergedRenderEmpty?.()||(q(),V(m,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size},null,8,[`theme`,`themeOverrides`,`size`]))]))],2)):(q(),V(ue,b({key:0,ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?(q(),V(Ve,{key:1,ref:`virtualListRef`,class:F(`${n}-virtual-list`),items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?(q(),V(qe,{key:e.key,clsPrefix:n,tmNode:e},null,8,[`clsPrefix`,`tmNode`])):e.ignored?null:(q(),V(Ze,{clsPrefix:n,key:e.key,tmNode:e},null,8,[`clsPrefix`,`tmNode`]))},1032,[`class`,`items`,`itemSize`,`paddingTop`,`paddingBottom`,`onResize`,`onScroll`])):(q(),k(`div`,{key:4,class:F(`${n}-base-select-menu-option-wrapper`),style:I({paddingTop:this.padding.top,paddingBottom:this.padding.bottom})},[B(()=>this.flattenedNodes.map(e=>e.isGroup?(q(),V(qe,{key:e.key,clsPrefix:n,tmNode:e},null,8,[`clsPrefix`,`tmNode`])):(q(),V(Ze,{clsPrefix:n,key:e.key,tmNode:e},null,8,[`clsPrefix`,`tmNode`]))))],6))},1040,[`theme`,`themeOverrides`,`scrollable`,`container`,`content`,`onScroll`]))],64)),B(()=>pe(e.action,e=>e&&[(q(),k(`div`,{class:F(`${n}-base-select-menu__action`),"data-action":!0,key:`action`},[B(()=>e)],2)),(q(),V(Ke,{onFocus:this.onTabOut,key:`focus-detector`},null,8,[`onFocus`]))]))],46,$e)}});function tt(e){return e.type===`group`}function nt(e){return e.type===`ignored`}function rt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function it(e,t){return{getIsGroup:tt,getIgnored:nt,getKey(t){return tt(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function at(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(tt(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(nt(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function ot(e,t,n){let r=new Map;return e.forEach(e=>{tt(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var st=Y([L(`base-selection`,`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[L(`base-loading`,`
 color: var(--n-loading-color);
 `),L(`base-selection-tags`,`min-height: var(--n-height);`),C(`border, state-border`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),C(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),L(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[C(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),L(`base-selection-overlay`,`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[C(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),L(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[C(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),L(`base-selection-tags`,`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),L(`base-selection-label`,`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[L(`base-selection-input`,`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[C(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),C(`render-label`,`
 color: var(--n-text-color);
 `)]),ye(`disabled`,[Y(`&:hover`,[C(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),j(`focus`,[C(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),j(`active`,[C(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),L(`base-selection-label`,`background-color: var(--n-color-active);`),L(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),j(`disabled`,`cursor: not-allowed;`,[C(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),L(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[L(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),C(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),L(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),L(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),L(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[C(`input`,`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),C(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>j(`${e}-status`,[C(`state-border`,`border: var(--n-border-${e});`),ye(`disabled`,[Y(`&:hover`,[C(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),j(`active`,[C(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),L(`base-selection-label`,`background-color: var(--n-color-active-${e});`),L(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),j(`focus`,[C(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),L(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),L(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Y(`&:last-child`,`padding-right: 0;`),L(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[C(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ct=[`disabled`,`value`,`autofocus`,`onBlur`,`onFocus`,`onKeydown`,`onInput`,`onCompositionstart`,`onCompositionend`],lt=[`tabindex`],ut=[`title`],dt=[`value`,`readonly`,`disabled`,`autofocus`,`onFocus`,`onBlur`,`onInput`,`onCompositionstart`,`onCompositionend`],ft=[`tabindex`],pt=[`onClick`,`onMouseenter`,`onMouseleave`,`onKeydown`,`onFocusin`,`onFocusout`,`onMousedown`],mt=H({name:`InternalSelection`,props:{...oe.props,clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function},setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n}=te(e),r=Oe(`InternalSelection`,n,t),i=J(null),a=J(null),o=J(null),s=J(null),c=J(null),l=J(null),u=J(null),d=J(null),f=J(null),p=J(null),m=J(!1),h=J(!1),g=J(!1),_=oe(`InternalSelection`,`-internal-selection`,st,ee,e,X(e,`clsPrefix`)),v=D(()=>e.clearable&&!e.disabled&&(g.value||e.active)),y=D(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):x(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),b=D(()=>{let t=e.selectedOption;if(t)return t[e.labelField]}),C=D(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function w(){let{value:t}=i;if(t){let{value:n}=a;n&&(n.style.width=`${t.offsetWidth}px`,e.maxTagCount!==`responsive`&&f.value?.sync({showAllItemsBeforeCalculate:!1}))}}function T(){let{value:e}=p;e&&(e.style.display=`none`)}function E(){let{value:e}=p;e&&(e.style.display=`inline-block`)}me(X(e,`active`),e=>{e||T()}),me(X(e,`pattern`),()=>{e.multiple&&W(w)});function O(t){let{onFocus:n}=e;n&&n(t)}function ne(t){let{onBlur:n}=e;n&&n(t)}function re(t){let{onDeleteOption:n}=e;n&&n(t)}function k(t){let{onClear:n}=e;n&&n(t)}function ie(t){let{onPatternInput:n}=e;n&&n(t)}function ae(e){(!e.relatedTarget||!o.value?.contains(e.relatedTarget))&&O(e)}function A(e){o.value?.contains(e.relatedTarget)||ne(e)}function j(e){k(e)}function se(){g.value=!0}function M(){g.value=!1}function N(t){e.active&&e.filterable&&t.target!==a.value&&t.preventDefault()}function P(e){re(e)}let F=J(!1);function le(t){if(t.key===`Backspace`&&!F.value&&!e.pattern.length){let{selectedOptions:t}=e;t?.length&&P(t[t.length-1])}}let I=null;function L(t){let{value:n}=i;n&&(n.textContent=t.target.value,w()),e.ignoreComposition&&F.value?I=t:ie(t)}function R(){F.value=!0}function z(){F.value=!1,e.ignoreComposition&&ie(I),I=null}function B(t){h.value=!0,e.onPatternFocus?.(t)}function V(t){h.value=!1,e.onPatternBlur?.(t)}function ue(){if(e.filterable)h.value=!1,l.value?.blur(),a.value?.blur();else if(e.multiple){let{value:e}=s;e?.blur()}else{let{value:e}=c;e?.blur()}}function H(){e.filterable?(h.value=!1,l.value?.focus()):e.multiple?s.value?.focus():c.value?.focus()}function U(){let{value:e}=a;e&&(E(),e.focus())}function fe(){let{value:e}=a;e&&e.blur()}function pe(e){let{value:t}=u;t&&t.setTextContent(`+${e}`)}function G(){let{value:e}=d;return e}function he(){return a.value}let ge=null;function K(){ge!==null&&window.clearTimeout(ge)}function _e(){e.active||(K(),ge=window.setTimeout(()=>{C.value&&(m.value=!0)},100))}function ve(){K()}function ye(e){e||(K(),m.value=!1)}me(C,e=>{e||(m.value=!1)}),de(()=>{we(()=>{let t=l.value;t&&(e.disabled?t.removeAttribute(`tabindex`):t.tabIndex=h.value?-1:0)})}),Ge(o,e.onResize);let{inlineThemeDisabled:xe}=e,Se=D(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:o,textColor:s,paddingSingle:c,paddingMultiple:l,caretColor:u,colorDisabled:d,textColorDisabled:f,placeholderColorDisabled:p,colorActive:m,boxShadowFocus:h,boxShadowActive:g,boxShadowHover:v,border:y,borderFocus:b,borderHover:x,borderActive:ee,arrowColor:C,arrowColorDisabled:w,loadingColor:T,colorActiveWarning:E,boxShadowFocusWarning:te,boxShadowActiveWarning:D,boxShadowHoverWarning:O,borderWarning:ne,borderFocusWarning:re,borderHoverWarning:k,borderActiveWarning:ie,colorActiveError:ae,boxShadowFocusError:A,boxShadowActiveError:j,boxShadowHoverError:oe,borderError:se,borderFocusError:M,borderHoverError:N,borderActiveError:P,clearColor:F,clearColorHover:le,clearColorPressed:I,clearSize:L,arrowSize:R,[S(`height`,t)]:z,[S(`fontSize`,t)]:B}}=_.value,V=ce(c),ue=ce(l);return{"--n-bezier":n,"--n-border":y,"--n-border-active":ee,"--n-border-focus":b,"--n-border-hover":x,"--n-border-radius":i,"--n-box-shadow-active":g,"--n-box-shadow-focus":h,"--n-box-shadow-hover":v,"--n-caret-color":u,"--n-color":a,"--n-color-active":m,"--n-color-disabled":d,"--n-font-size":B,"--n-height":z,"--n-padding-single-top":V.top,"--n-padding-multiple-top":ue.top,"--n-padding-single-right":V.right,"--n-padding-multiple-right":ue.right,"--n-padding-single-left":V.left,"--n-padding-multiple-left":ue.left,"--n-padding-single-bottom":V.bottom,"--n-padding-multiple-bottom":ue.bottom,"--n-placeholder-color":o,"--n-placeholder-color-disabled":p,"--n-text-color":s,"--n-text-color-disabled":f,"--n-arrow-color":C,"--n-arrow-color-disabled":w,"--n-loading-color":T,"--n-color-active-warning":E,"--n-box-shadow-focus-warning":te,"--n-box-shadow-active-warning":D,"--n-box-shadow-hover-warning":O,"--n-border-warning":ne,"--n-border-focus-warning":re,"--n-border-hover-warning":k,"--n-border-active-warning":ie,"--n-color-active-error":ae,"--n-box-shadow-focus-error":A,"--n-box-shadow-active-error":j,"--n-box-shadow-hover-error":oe,"--n-border-error":se,"--n-border-focus-error":M,"--n-border-hover-error":N,"--n-border-active-error":P,"--n-clear-size":L,"--n-clear-color":F,"--n-clear-color-hover":le,"--n-clear-color-pressed":I,"--n-arrow-size":R,"--n-font-weight":r}}),q=xe?be(`internal-selection`,D(()=>e.size[0]),Se,e):void 0;return{mergedTheme:_,mergedClearable:v,mergedClsPrefix:t,rtlEnabled:r,patternInputFocused:h,filterablePlaceholder:y,label:b,selected:C,showTagsPanel:m,isComposing:F,counterRef:u,counterWrapperRef:d,patternInputMirrorRef:i,patternInputRef:a,selfRef:o,multipleElRef:s,singleElRef:c,patternInputWrapperRef:l,overflowRef:f,inputTagElRef:p,handleMouseDown:N,handleFocusin:ae,handleClear:j,handleMouseEnter:se,handleMouseLeave:M,handleDeleteOption:P,handlePatternKeyDown:le,handlePatternInputInput:L,handlePatternInputBlur:V,handlePatternInputFocus:B,handleMouseEnterCounter:_e,handleMouseLeaveCounter:ve,handleFocusout:A,handleCompositionEnd:z,handleCompositionStart:R,onPopoverUpdateShow:ye,focus:H,focusInput:U,blur:ue,blurInput:fe,updateCounter:pe,getCounter:G,getTail:he,renderLabel:e.renderLabel,cssVars:xe?void 0:Se,themeClass:q?.themeClass,onRender:q?.onRender}},render(){let{status:e,multiple:t,size:r,disabled:a,filterable:o,maxTagCount:s,bordered:c,clsPrefix:l,ellipsisTagPopoverProps:u,onRender:d,renderTag:f,renderLabel:p}=this;d?.();let m=s===`responsive`,g=typeof s==`number`,_=m||g,v=(q(),V(Ce,null,{default:()=>(q(),V(n,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>this.$slots.arrow?.()},1032,[`clsPrefix`,`loading`,`showArrow`,`showClear`,`onClear`]))},1024)),y;if(t){let{labelField:e}=this,t=t=>(q(),k(`div`,{class:F(`${l}-base-selection-tag-wrapper`),key:t.value},[f?(q(),k(Z,{key:0},[B(()=>f({option:t,handleClose:()=>{this.handleDeleteOption(t)}}))],64)):(q(),V(h,{key:1,size:r,closable:!t.disabled,disabled:a,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>p?p(t,!0):x(t[e],t,!0)},1032,[`size`,`closable`,`disabled`,`onClose`]))],2)),n=()=>(g?this.selectedOptions.slice(0,s):this.selectedOptions).map(t),c=o?(q(),k(`div`,{class:F(`${l}-base-selection-input-tag`),ref:`inputTagElRef`,key:`__input-tag__`},[R(`input`,b(this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:a,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd}),null,16,ct),R(`span`,{ref:`patternInputMirrorRef`,class:F(`${l}-base-selection-input-tag__mirror`)},[B(()=>this.pattern)],2)],2)):null,d=m?()=>(q(),k(`div`,{class:F(`${l}-base-selection-tag-wrapper`),ref:`counterWrapperRef`},[(q(),V(h,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:a},null,8,[`size`,`onMouseenter`,`onMouseleave`,`disabled`]))],2)):void 0,S;if(g){let e=this.selectedOptions.length-s;e>0&&(S=(t=>(q(),k(`div`,{class:F(`${l}-base-selection-tag-wrapper`),key:`__counter__`},[(q(),V(h,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:a},{default:()=>`+${e}`},1032,[`size`,`onMouseenter`,`disabled`]))],2)))(S))}let ee=m?o?(q(),V(Ue,{key:3,ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:n,counter:d,tail:()=>c},1032,[`updateCounter`,`getCounter`,`getTail`])):(q(),V(Ue,{key:4,ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:n,counter:d},1032,[`updateCounter`,`getCounter`])):g&&S?n().concat(S):n(),C=_?()=>(q(),k(`div`,{class:F(`${l}-base-selection-popover`)},[m?(q(),k(Z,{key:0},[B(()=>n())],64)):(q(),k(Z,{key:1},[B(()=>this.selectedOptions.map(t))],64))],2)):void 0,w=_?{show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover,...u}:null,T=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?(q(),k(`div`,{key:5,class:F(`${l}-base-selection-placeholder ${l}-base-selection-overlay`)},[R(`div`,{class:F(`${l}-base-selection-placeholder__inner`)},[B(()=>this.placeholder)],2)],2)):null,E=o?(q(),k(`div`,{key:6,ref:`patternInputWrapperRef`,class:F(`${l}-base-selection-tags`)},[B(()=>ee),m?B(()=>null):(q(),k(Z,{key:1},[B(()=>c)],64)),B(()=>v)],2)):(q(),k(`div`,{key:7,ref:`multipleElRef`,class:F(`${l}-base-selection-tags`),tabindex:a?void 0:0},[B(()=>ee),B(()=>v)],10,lt));y=(e=>(q(),k(Z,{key:8},[_?(q(),V(i,b({key:0},w,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>E,default:C},1040)):(q(),k(Z,{key:1},[B(()=>E)],64)),B(()=>T)],64)))(y)}else if(o){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=!this.active&&this.selected;y=(e=>(q(),k(`div`,{key:9,ref:`patternInputWrapperRef`,class:F(`${l}-base-selection-label`),title:this.patternInputFocused?void 0:We(this.label)},[R(`input`,b(this.inputProps,{ref:`patternInputRef`,class:`${l}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:a,disabled:a,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd}),null,16,dt),n?(q(),k(`div`,{class:F(`${l}-base-selection-label__render-label ${l}-base-selection-overlay`),key:`input`},[R(`div`,{class:F(`${l}-base-selection-overlay__wrapper`)},[f?(q(),k(Z,{key:0},[B(()=>f({option:this.selectedOption,handleClose:()=>{}}))],64)):(q(),k(Z,{key:1},[p?(q(),k(Z,{key:0},[B(()=>p(this.selectedOption,!0))],64)):(q(),k(Z,{key:1},[B(()=>x(this.label,this.selectedOption,!0))],64))],64))],2)],2)):B(()=>null),t?(q(),k(`div`,{class:F(`${l}-base-selection-placeholder ${l}-base-selection-overlay`),key:`placeholder`},[R(`div`,{class:F(`${l}-base-selection-overlay__wrapper`)},[B(()=>this.filterablePlaceholder)],2)],2)):B(()=>null),B(()=>v)],10,ut)))(y)}else y=(e=>(q(),k(`div`,{key:10,ref:`singleElRef`,class:F(`${l}-base-selection-label`),tabindex:this.disabled?void 0:0},[this.label===void 0?(q(),k(`div`,{class:F(`${l}-base-selection-placeholder ${l}-base-selection-overlay`),key:`placeholder`},[R(`div`,{class:F(`${l}-base-selection-placeholder__inner`)},[B(()=>this.placeholder)],2)],2)):(q(),k(`div`,{class:F(`${l}-base-selection-input`),title:We(this.label),key:`input`},[R(`div`,{class:F(`${l}-base-selection-input__content`)},[f?(q(),k(Z,{key:0},[B(()=>f({option:this.selectedOption,handleClose:()=>{}}))],64)):(q(),k(Z,{key:1},[p?(q(),k(Z,{key:0},[B(()=>p(this.selectedOption,!0))],64)):(q(),k(Z,{key:1},[B(()=>x(this.label,this.selectedOption,!0))],64))],64))],2)],10,[`title`])),B(()=>v)],10,ft)))(y);return q(),k(`div`,{ref:`selfRef`,class:F([`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}]),style:I(this.cssVars),onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},[B(()=>y),c?(q(),k(`div`,{key:0,class:F(`${l}-base-selection__border`)},null,2)):B(()=>null),c?(q(),k(`div`,{key:2,class:F(`${l}-base-selection__state-border`)},null,2)):B(()=>null)],46,pt)}}),ht=Y([L(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),L(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[A({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),gt={...oe.props,to:f.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array},_t=H({name:`Select`,props:gt,slots:Object,setup(n){let{mergedClsPrefixRef:r,mergedBorderedRef:i,namespaceRef:a,inlineThemeDisabled:o,mergedComponentPropsRef:c}=te(n),l=oe(`Select`,`-select`,ht,fe,n,r),u=J(n.defaultValue),d=X(n,`value`),m=t(d,u),h=J(!1),g=J(``),v=_(n,[`items`,`options`]),y=J([]),b=J([]),x=D(()=>b.value.concat(y.value).concat(v.value)),S=D(()=>{let{filter:e}=n;if(e)return e;let{labelField:t,valueField:r}=n;return(e,n)=>{if(!n)return!1;let i=n[t];if(typeof i==`string`)return rt(e,i);let a=n[r];return typeof a==`string`?rt(e,a):typeof a==`number`&&rt(e,String(a))}}),ee=D(()=>{if(n.remote)return v.value;{let{value:e}=x,{value:t}=g;return!t.length||!n.filterable?e:at(e,S.value,t,n.childrenField)}}),C=D(()=>{let{valueField:e,childrenField:t}=n,r=it(e,t);return p(ee.value,r)}),w=D(()=>ot(x.value,n.valueField,n.childrenField)),T=J(!1),E=t(X(n,`show`),T),O=J(null),re=J(null),k=J(null),{localeRef:ie}=e(`Select`),ae=D(()=>n.placeholder??ie.value.placeholder),A=[],j=J(new Map),se=D(()=>{let{fallbackOption:e}=n;if(e===void 0){let{labelField:e,valueField:t}=n;return n=>({[e]:String(n),[t]:n})}return e===!1?!1:t=>Object.assign(e(t),{value:t})});function M(e){let t=n.remote,{value:r}=j,{value:i}=w,{value:a}=se,o=[];return e.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(t&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let ce=D(()=>{if(n.multiple){let{value:e}=m;return Array.isArray(e)?M(e):[]}return null}),N=D(()=>{let{value:e}=m;return!n.multiple&&!Array.isArray(e)?e===null?null:M([e])[0]||null:null}),F=P(n,{mergedSize:e=>{let{size:t}=n;if(t)return t;let{mergedSize:r}=e||{};return r?.value?r.value:c?.value?.Select?.size||`medium`}}),{mergedSizeRef:I,mergedDisabledRef:L,mergedStatusRef:R}=F;function z(e,t){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=n,{nTriggerFormChange:o,nTriggerFormInput:s}=F;r&&K(r,e,t),a&&K(a,e,t),i&&K(i,e,t),u.value=e,o(),s()}function B(e){let{onBlur:t}=n,{nTriggerFormBlur:r}=F;t&&K(t,e),r()}function V(){let{onClear:e}=n;e&&K(e)}function ue(e){let{onFocus:t,showOnFocus:r}=n,{nTriggerFormFocus:i}=F;t&&K(t,e),i(),r&&W()}function H(e){let{onSearch:t}=n;t&&K(t,e)}function U(e){let{onScroll:t}=n;t&&K(t,e)}function de(){let{remote:e,multiple:t}=n;if(e){let{value:e}=j;if(t){let{valueField:t}=n;ce.value?.forEach(n=>{e.set(n[t],n)})}else{let t=N.value;t&&e.set(t[n.valueField],t)}}}function pe(e){let{onUpdateShow:t,"onUpdate:show":r}=n;t&&K(t,e),r&&K(r,e),T.value=e}function W(){L.value||(pe(!0),T.value=!0,n.filterable&&Pe())}function G(){pe(!1)}function ge(){g.value=``,b.value=A}let _e=J(!1);function ve(){n.filterable&&(_e.value=!0)}function ye(){n.filterable&&(_e.value=!1,E.value||ge())}function xe(){L.value||(E.value?n.filterable?Pe():G():W())}function Se(e){k.value?.selfRef?.contains(e.relatedTarget)||(h.value=!1,B(e),G())}function q(e){ue(e),h.value=!0}function Ce(){h.value=!0}function we(e){O.value?.$el.contains(e.relatedTarget)||(h.value=!1,B(e),G())}function Te(){O.value?.focus(),G()}function Ee(e){E.value&&(O.value?.$el.contains(ne(e))||G())}function De(e){if(!Array.isArray(e))return[];if(se.value)return Array.from(e);{let{remote:t}=n,{value:r}=w;if(t){let{value:t}=j;return e.filter(e=>r.has(e)||t.has(e))}return e.filter(e=>r.has(e))}}function Oe(e){ke(e.rawNode)}function ke(e){if(L.value)return;let{tag:t,remote:r,clearFilterAfterSelect:i,valueField:a}=n;if(t&&!r){let{value:e}=b,t=e[0]||null;if(t){let e=y.value;e.length?e.push(t):y.value=[t],b.value=A}}if(r&&j.value.set(e[a],e),n.multiple){let n=De(m.value),o=n.findIndex(t=>t===e[a]);if(~o){if(n.splice(o,1),t&&!r){let t=Y(e[a]);~t&&(y.value.splice(t,1),i&&(g.value=``))}}else n.push(e[a]),i&&(g.value=``);z(n,M(n))}else{if(t&&!r){let t=Y(e[a]);~t?y.value=[y.value[t]]:y.value=A}Ne(),G(),z(e[a],e)}}function Y(e){return y.value.findIndex(t=>t[n.valueField]===e)}function Ae(e){E.value||W();let{value:t}=e.target;g.value=t;let{tag:r,remote:i}=n;if(H(t),r&&!i){if(!t){b.value=A;return}let{onCreate:e}=n,r=e?e(t):{[n.labelField]:t,[n.valueField]:t},{valueField:i,labelField:a}=n;v.value.some(e=>e[i]===r[i]||e[a]===r[a])||y.value.some(e=>e[i]===r[i]||e[a]===r[a])?b.value=A:b.value=[r]}}function Z(e){e.stopPropagation();let{multiple:t,tag:r,remote:i,clearCreatedOptionsOnClear:a}=n;!t&&n.filterable&&G(),r&&!i&&a&&(y.value=A),V(),t?z([],[]):z(null,null)}function Q(e){!s(e,`action`)&&!s(e,`empty`)&&!s(e,`header`)&&e.preventDefault()}function je(e){U(e)}function Me(e){if(!n.keyboard){e.preventDefault();return}switch(e.key){case` `:if(n.filterable)break;e.preventDefault();case`Enter`:if(!O.value?.isComposing){if(E.value){let e=k.value?.getPendingTmNode();e?Oe(e):n.filterable||(G(),Ne())}else if(W(),n.tag&&_e.value){let e=b.value[0];if(e){let t=e[n.valueField],{value:r}=m;n.multiple&&Array.isArray(r)&&r.includes(t)||ke(e)}}}e.preventDefault();break;case`ArrowUp`:if(e.preventDefault(),n.loading)return;E.value&&k.value?.prev();break;case`ArrowDown`:if(e.preventDefault(),n.loading)return;E.value?k.value?.next():W();break;case`Escape`:E.value&&(le(e),G()),O.value?.focus()}}function Ne(){O.value?.focus()}function Pe(){O.value?.focusInput()}function Fe(){E.value&&re.value?.syncPosition()}de(),me(X(n,`options`),de);let Ie={focus:()=>{O.value?.focus()},focusInput:()=>{O.value?.focusInput()},blur:()=>{O.value?.blur()},blurInput:()=>{O.value?.blurInput()}},Le=D(()=>{let{self:{menuBoxShadow:e}}=l.value;return{"--n-menu-box-shadow":e}}),Re=o?be(`select`,void 0,Le,n):void 0;return{...Ie,mergedStatus:R,mergedClsPrefix:r,mergedBordered:i,namespace:a,treeMate:C,isMounted:he(),triggerRef:O,menuRef:k,pattern:g,uncontrolledShow:T,mergedShow:E,adjustedTo:f(n),uncontrolledValue:u,mergedValue:m,followerRef:re,localizedPlaceholder:ae,selectedOption:N,selectedOptions:ce,mergedSize:I,mergedDisabled:L,focused:h,activeWithoutMenuOpen:_e,inlineThemeDisabled:o,onTriggerInputFocus:ve,onTriggerInputBlur:ye,handleTriggerOrMenuResize:Fe,handleMenuFocus:Ce,handleMenuBlur:we,handleMenuTabOut:Te,handleTriggerClick:xe,handleToggle:Oe,handleDeleteOption:ke,handlePatternInput:Ae,handleClear:Z,handleTriggerBlur:Se,handleTriggerFocus:q,handleKeydown:Me,handleMenuAfterLeave:ge,handleMenuClickOutside:Ee,handleMenuScroll:je,handleMenuKeydown:Me,handleMenuMousedown:Q,mergedTheme:l,cssVars:o?void 0:Le,themeClass:Re?.themeClass,onRender:Re?.onRender}},render(){return q(),k(`div`,{class:F(`${this.mergedClsPrefix}-select`)},[re(l,null,{_:1,default:Q(()=>[(q(),V(a,null,{_:1,default:Q(()=>(q(),V(mt,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{_:1,arrow:Q(()=>[this.$slots.arrow?.()])},8,`inlineThemeDisabled.status.inputProps.clsPrefix.showArrow.maxTagCount.ellipsisTagPopoverProps.bordered.active.pattern.placeholder.selectedOption.selectedOptions.multiple.renderTag.renderLabel.filterable.clearable.disabled.size.theme.labelField.valueField.themeOverrides.loading.focused.onClick.onDeleteOption.onPatternInput.onClear.onBlur.onFocus.onKeydown.onPatternBlur.onPatternFocus.onResize.ignoreComposition`.split(`.`))))})),(q(),V(o,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===f.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{_:1,default:Q(()=>(q(),V(M,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{_:1,default:Q(()=>this.mergedShow||this.displayDirective===`show`?(this.onRender?.(),ge((q(),V(et,b(this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{_:1,empty:Q(()=>[this.$slots.empty?.()]),header:Q(()=>[this.$slots.header?.()]),action:Q(()=>[this.$slots.action?.()])},16,`onResize.inlineThemeDisabled.virtualScroll.class.clsPrefix.labelField.valueField.nodeProps.theme.themeOverrides.treeMate.multiple.size.renderOption.renderLabel.value.style.onToggle.onScroll.onFocus.onBlur.onKeydown.onTabOut.onMousedown.show.showCheckmark.resetMenuOnOptionsChange.scrollbarProps`.split(`.`))),this.displayDirective===`show`?[[O,this.mergedShow],[Ee,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Ee,this.handleMenuClickOutside,void 0,{capture:!0}]])):null)},8,[`appear`,`onAfterLeave`])))},8,[`show`,`to`,`teleportDisabled`,`containerClass`,`width`,`placement`]))])})],2)}});export{Ke as n,_t as t};