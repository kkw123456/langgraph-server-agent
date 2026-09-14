import{a as e,i as t,r as n}from"./createLucideIcon-CaCBVfAm.js";import{A as r,D as i,E as a,M as o,O as s,S as c,T as l,b as u,j as d,k as f,x as p}from"./workbench-B-xeVxsR.js";import{S as m,b as h}from"./store-D8wSeW02.js";import{i as g,n as _,r as v}from"./plus-Dv_3NzgT.js";import{$ as y,$n as b,A as x,An as S,Bn as C,C as w,Dn as T,Dt as E,Et as D,Ft as O,Gn as k,Gt as ee,It as te,Jn as A,Kn as j,Ln as ne,Lt as M,Nt as N,O as re,On as P,Ot as ie,P as ae,Pn as F,Pt as I,R as L,Rt as R,S as oe,Tn as z,Ut as se,Vt as B,Wn as V,X as ce,Xn as le,Zn as H,_r as ue,ar as de,b as fe,br as U,cr as W,dr as pe,dt as G,er as K,et as q,gt as me,hr as he,ht as J,k as ge,kn as _e,kt as ve,lr as ye,lt as be,mr as xe,nr as Se,or as Ce,ot as we,rr as Te,rt as Ee,sr as De,st as Oe,tr as Y,wn as X,wr as ke,xr as Z,yt as Ae,zt as Q}from"./index-CRZeUnv2.js";function je(e){return e&-e}var Me=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=je(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=je(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},Ne;function Pe(){return typeof document>`u`?!1:(Ne===void 0&&(Ne=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches),Ne)}var Fe;function Ie(){return typeof document>`u`?1:(Fe===void 0&&(Fe=`chrome`in window?window.devicePixelRatio:1),Fe)}var Le=`VVirtualListXScroll`;function Re({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let r=U(0),i=U(0),a=V(()=>{let t=e.value;if(t.length===0)return null;let n=new Me(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n}),o=Ae(()=>{let e=a.value;return e===null?0:Math.max(e.getBound(i.value)-1,0)}),s=e=>{let t=a.value;return t===null?0:t.sum(e)},c=Ae(()=>{let t=a.value;return t===null?0:Math.min(t.getBound(i.value+r.value)+1,e.value.length-1)});return ye(Le,{startIndexRef:o,endIndexRef:c,columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:s}),{listWidthRef:r,scrollLeftRef:i}}var ze=H({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=K(Le);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),Be=_(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[_(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[_(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),Ve=H({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){let t=se();Be.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:v,ssr:t}),De(()=>{let{defaultScrollIndex:t,defaultScrollKey:n}=e;t==null?n!=null&&_({key:n}):_({index:t})});let n=!1,r=!1;Te(()=>{if(n=!1,!r){r=!0;return}_({top:m.value,left:s.value})}),Ce(()=>{n=!0,r||=!0});let i=Ae(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let t=0;return e.columns.forEach(e=>{t+=e.width}),t}),a=V(()=>{let t=new Map,{keyField:n}=e;return e.items.forEach((e,r)=>{t.set(e[n],r)}),t}),{scrollLeftRef:s,listWidthRef:c}=Re({columnsRef:Z(e,`columns`),renderColRef:Z(e,`renderCol`),renderItemWithColsRef:Z(e,`renderItemWithCols`)}),l=U(null),u=U(void 0),d=new Map,f=V(()=>{let{items:t,itemSize:n,keyField:r}=e,i=new Me(t.length,n);return t.forEach((e,t)=>{let n=e[r],a=d.get(n);a!==void 0&&i.add(t,a)}),i}),p=U(0),m=U(0),h=Ae(()=>Math.max(f.value.getBound(m.value-N(e.paddingTop))-1,0)),g=V(()=>{let{value:t}=u;if(t===void 0)return[];let{items:n,itemSize:r}=e,i=h.value,a=Math.min(i+Math.ceil(t/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),_=(e,t)=>{if(typeof e==`number`){S(e,t,`auto`);return}let{left:n,top:r,index:i,key:o,position:s,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)S(n,r,c);else if(i!==void 0)x(i,c,l);else if(o!==void 0){let e=a.value.get(o);e!==void 0&&x(e,c,l)}else s===`bottom`?S(0,2**53-1,c):s===`top`&&S(0,0,c)},y,b=null;function x(t,n,r){let i=l.value;if(i==null)return;let{value:a}=f,o=a.sum(t)+N(e.paddingTop);if(!r)i.scrollTo({left:0,top:o,behavior:n});else{y=t,b!==null&&window.clearTimeout(b),b=window.setTimeout(()=>{y=void 0,b=null},16);let{scrollTop:e,offsetHeight:r}=i;if(o>e){let s=a.get(t);o+s<=e+r||i.scrollTo({left:0,top:o+s-r,behavior:n})}else i.scrollTo({left:0,top:o,behavior:n})}}function S(e,t,n){l.value?.scrollTo({left:e,top:t,behavior:n})}function C(t,r){if(n||e.ignoreItemResize||te(r.target))return;let{value:i}=f,o=a.value.get(t),s=i.get(o),c=r.borderBoxSize?.[0]?.blockSize??r.contentRect.height;if(c===s)return;c-e.itemSize===0?d.delete(t):d.set(t,c-e.itemSize);let u=c-s;if(u===0)return;i.add(o,u);let m=l.value;if(m!=null){if(y===void 0){let e=i.sum(o);m.scrollTop>e&&m.scrollBy(0,u)}else(o<y||o===y&&c+i.sum(o)>m.scrollTop+m.offsetHeight)&&m.scrollBy(0,u);ee()}p.value++}let w=!Pe(),T=!1;function E(t){var n;(n=e.onScroll)==null||n.call(e,t),(!w||!T)&&ee()}function D(t){var n;if((n=e.onWheel)==null||n.call(e,t),w){let e=l.value;if(e!=null){if(t.deltaX===0&&(e.scrollTop===0&&t.deltaY<=0||e.scrollTop+e.offsetHeight>=e.scrollHeight&&t.deltaY>=0))return;t.preventDefault(),e.scrollTop+=t.deltaY/Ie(),e.scrollLeft+=t.deltaX/Ie(),ee(),T=!0,o(()=>{T=!1})}}}function k(t){if(n||te(t.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(t.contentRect.height===u.value)return}else if(t.contentRect.height===u.value&&t.contentRect.width===c.value)return;u.value=t.contentRect.height,c.value=t.contentRect.width;let{onResize:r}=e;r!==void 0&&r(t)}function ee(){let{value:e}=l;e!=null&&(m.value=e.scrollTop,s.value=e.scrollLeft)}function te(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:u,listStyle:{overflow:`auto`},keyToIndex:a,itemsStyle:V(()=>{let{itemResizable:t}=e,n=O(f.value.sum());return p.value,[e.itemsStyle,{boxSizing:`content-box`,width:O(i.value),height:t?``:n,minHeight:t?n:``,paddingTop:O(e.paddingTop),paddingBottom:O(e.paddingBottom)}]}),visibleItemsStyle:V(()=>(p.value,{transform:`translateY(${O(f.value.sum(h.value))})`})),viewportItems:g,listElRef:l,itemsElRef:U(null),scrollTo:_,handleListResize:k,handleListScroll:E,handleListWheel:D,handleItemResize:C}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return b(y,{onResize:this.handleListResize},{default:()=>{var i;return b(`div`,Y(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(i=this.$slots).empty?.call(i):b(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[b(r,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:i}=this;return this.viewportItems.map(a=>{let o=a[t],s=n.get(o),c=r==null?void 0:b(ze,{index:s,item:a}),l=i==null?void 0:b(ze,{index:s,item:a}),u=this.$slots.default({item:a,renderedCols:c,renderedItemWithCols:l,index:s})[0];return e?b(y,{key:o,onResize:e=>this.handleItemResize(o,e)},{default:()=>u}):(u.key=o,u)})}})])])}})}}),$=`v-hidden`,He=_(`[v-hidden]`,{display:`none!important`}),Ue=H({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=U(null),r=U(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute($)&&c.removeAttribute($);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute($)&&e.removeAttribute($);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute($)||n.setAttribute($,``);continue}n.hasAttribute($)&&n.removeAttribute($);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute($,``))}let a=se();return He.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:v,ssr:a}),De(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return Se(()=>this.sync({showAllItemsBeforeCalculate:!1})),b(`div`,{class:`v-overflow`,ref:`selfRef`},[pe(e,`default`),e.counter?e.counter():b(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function We(e){switch(typeof e){case`string`:return e||void 0;case`number`:return String(e);default:return}}function Ge(e,t){t&&(De(()=>{let{value:n}=e;n&&q.registerHandler(n,t)}),xe(e,(e,t)=>{t&&q.unregisterHandler(t)},{deep:!1}),de(()=>{let{value:t}=e;t&&q.unregisterHandler(t)}))}var Ke=H({props:{onFocus:Function,onBlur:Function},setup(e){return()=>(()=>{let t=M(`d16ead82505dc285`);return W(),A(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:t[0]||=t=>e.onFocus?.(t),onBlur:t[1]||=t=>e.onBlur?.(t)},null,32)})()}}),qe=H({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:i}=K(r);return{labelField:n,nodeProps:i,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):x(i[this.labelField],i,!1),s=(W(),A(`div`,Y(a,{class:[`${e}-base-select-group-header`,a?.class]}),[B(()=>o)],16));return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}}),Je=H({name:`Checkmark`,render(){return(()=>{let e=M(`3c84eac8ae4e1f96`);return e[0]||=k(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},[k(`g`,{fill:`none`},[k(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})])],-1)})()}}),Ye=[`onClick`,`onMouseenter`,`onMousemove`];function Xe(e,t){return W(),j(F,{name:`fade-in-scale-up-transition`},{default:()=>e?(W(),j(E,{key:1,clsPrefix:t,class:R(`${t}-base-select-option__check`)},{default:()=>b(Je)},1032,[`clsPrefix`,`class`])):null},1024)}var Ze=H({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:i,valueSetRef:a,renderLabelRef:o,renderOptionRef:s,labelFieldRef:c,valueFieldRef:l,showCheckmarkRef:u,nodePropsRef:d,handleOptionClick:f,handleOptionMouseEnter:p}=K(r),m=Ae(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e;n.disabled||p(t,n)}function _(t){let{tmNode:n}=e,{value:r}=m;n.disabled||r||p(t,n)}return{multiple:i,isGrouped:Ae(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:u,nodeProps:d,isPending:m,isSelected:Ae(()=>{let{value:n}=t,{value:r}=i;if(n===null)return!1;let o=e.tmNode.rawNode[l.value];if(r){let{value:e}=a;return e.has(o)}return n===o}),labelField:c,renderLabel:o,renderOption:s,handleMouseMove:_,handleMouseEnter:g,handleClick:h}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:s,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,f=Xe(n,e),p=c?[c(t,n),a&&f]:[x(t[this.labelField],t,n),a&&f],m=o?.(t),h=(W(),A(`div`,Y(m,{class:[`${e}-base-select-option`,t.class,m?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[m?.style||``,t.style||``],onClick:ge([l,m?.onClick]),onMouseenter:ge([u,m?.onMouseenter]),onMousemove:ge([d,m?.onMousemove])}),[k(`div`,{class:R(`${e}-base-select-option__content`)},[B(()=>p)],2)],16,Ye));return t.render?t.render({node:h,option:t,selected:n}):s?s({node:h,option:t,selected:n}):h}}),Qe=z(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[z(`scrollbar`,`
 max-height: var(--n-height);
 `),z(`virtual-list`,`
 max-height: var(--n-height);
 `),z(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[T(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),z(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),z(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),T(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),T(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),T(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),T(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),z(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),z(`base-select-option`,`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[P(`show-checkmark`,`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),X(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),X(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),P(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),P(`pending`,[X(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),P(`selected`,`
 color: var(--n-option-text-color-active);
 `,[X(`&::before`,`
 background-color: var(--n-option-color-active);
 `),P(`pending`,[X(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),P(`disabled`,`
 cursor: not-allowed;
 `,[_e(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),P(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),T(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[re({enterScale:`0.5`})])])]),$e=[`tabindex`,`onFocusin`,`onFocusout`,`onKeyup`,`onKeydown`,`onMousedown`,`onMouseenter`,`onMouseleave`],et=H({name:`InternalSelectMenu`,props:{...ie.props,clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function},setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n,mergedComponentPropsRef:i}=ee(e),a=Oe(`InternalSelectMenu`,n,t),o=ie(`InternalSelectMenu`,`-internal-select-menu`,Qe,D,e,Z(e,`clsPrefix`)),s=U(null),c=U(null),l=U(null),u=V(()=>e.treeMate.getFlattenedNodes()),m=V(()=>p(u.value)),h=U(null);function g(){let{treeMate:t}=e,n=null,{value:r}=e;r===null?n=t.getFirstAvailableNode():(n=e.multiple?t.getNode((r||[])[(r||[]).length-1]):t.getNode(r),(!n||n.disabled)&&(n=t.getFirstAvailableNode())),F(n||null)}function _(){let{value:t}=h;t&&!e.treeMate.getNode(t.key)&&(h.value=null)}let v;xe(()=>e.show,t=>{t?v=xe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():_(),Se(L)):_()},{immediate:!0}):v?.()},{immediate:!0}),de(()=>{v?.()});let y=V(()=>N(o.value.self[S(`optionHeight`,e.size)])),b=V(()=>I(o.value.self[S(`padding`,e.size)])),x=V(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),C=V(()=>{let e=u.value;return e&&e.length===0}),w=V(()=>i?.value?.Select?.renderEmpty);function T(t){let{onToggle:n}=e;n&&n(t)}function E(t){let{onScroll:n}=e;n&&n(t)}function O(e){l.value?.sync(),E(e)}function k(){l.value?.sync()}function te(){let{value:e}=h;return e||null}function A(e,t){t.disabled||F(t,!1)}function j(e,t){t.disabled||T(t)}function ne(t){d(t,`action`)||e.onKeyup?.(t)}function M(t){d(t,`action`)||e.onKeydown?.(t)}function re(t){e.onMousedown?.(t),!e.focusable&&t.preventDefault()}function P(){let{value:e}=h;e&&F(e.getNext({loop:!0}),!0)}function ae(){let{value:e}=h;e&&F(e.getPrev({loop:!0}),!0)}function F(e,t=!1){h.value=e,t&&L()}function L(){let t=h.value;if(!t)return;let n=m.value(t.key);n!==null&&(e.virtualScroll?c.value?.scrollTo({index:n}):l.value?.scrollTo({index:n,elSize:y.value}))}function R(t){s.value?.contains(t.target)&&e.onFocus?.(t)}function oe(t){s.value?.contains(t.relatedTarget)||e.onBlur?.(t)}ye(r,{handleOptionMouseEnter:A,handleOptionClick:j,valueSetRef:x,pendingTmNodeRef:h,nodePropsRef:Z(e,`nodeProps`),showCheckmarkRef:Z(e,`showCheckmark`),multipleRef:Z(e,`multiple`),valueRef:Z(e,`value`),renderLabelRef:Z(e,`renderLabel`),renderOptionRef:Z(e,`renderOption`),labelFieldRef:Z(e,`labelField`),valueFieldRef:Z(e,`valueField`)}),ye(f,s),De(()=>{let{value:e}=l;e&&e.sync()});let z=V(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:s,actionDividerColor:c,optionTextColorPressed:l,optionTextColor:u,optionTextColorDisabled:d,optionTextColorActive:f,optionOpacityDisabled:p,optionCheckColor:m,actionTextColor:h,optionColorPending:g,optionColorActive:_,loadingColor:v,loadingSize:y,optionColorActivePending:b,[S(`optionFontSize`,t)]:x,[S(`optionHeight`,t)]:C,[S(`optionPadding`,t)]:w}}=o.value;return{"--n-height":r,"--n-action-divider-color":c,"--n-action-text-color":h,"--n-bezier":n,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":x,"--n-group-header-text-color":s,"--n-option-check-color":m,"--n-option-color-pending":g,"--n-option-color-active":_,"--n-option-color-active-pending":b,"--n-option-height":C,"--n-option-opacity-disabled":p,"--n-option-text-color":u,"--n-option-text-color-active":f,"--n-option-text-color-disabled":d,"--n-option-text-color-pressed":l,"--n-option-padding":w,"--n-option-padding-left":I(w,`left`),"--n-option-padding-right":I(w,`right`),"--n-loading-color":v,"--n-loading-size":y}}),{inlineThemeDisabled:se}=e,B=se?ve(`internal-select-menu`,V(()=>e.size[0]),z,e):void 0,ce={selfRef:s,next:P,prev:ae,getPendingTmNode:te};return Ge(s,e.onResize),{mergedTheme:o,mergedClsPrefix:t,rtlEnabled:a,virtualListRef:c,scrollbarRef:l,itemSize:y,padding:b,flattenedNodes:u,empty:C,mergedRenderEmpty:w,virtualListContainer(){let{value:e}=c;return e?.listElRef},virtualListContent(){let{value:e}=c;return e?.itemsElRef},doScroll:E,handleFocusin:R,handleFocusout:oe,handleKeyUp:ne,handleKeyDown:M,handleMouseDown:re,handleVirtualListResize:k,handleVirtualListScroll:O,cssVars:se?void 0:z,themeClass:B?.themeClass,onRender:B?.onRender,...ce}},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:i,onRender:a}=this;return a?.(),W(),A(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:R([`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`]),style:ke(this.cssVars),onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[B(()=>G(e.header,e=>e&&(W(),A(`div`,{class:R(`${n}-base-select-menu__header`),"data-header":!0,key:`header`},[B(()=>e)],2)))),this.loading?(W(),A(`div`,{key:0,class:R(`${n}-base-select-menu__loading`)},[(W(),j(ae,{clsPrefix:n,strokeWidth:20},null,8,[`clsPrefix`]))],2)):(W(),A(C,{key:1},[this.empty?(W(),A(`div`,{key:1,class:R(`${n}-base-select-menu__empty`),"data-empty":!0},[B(()=>be(e.empty,()=>[this.mergedRenderEmpty?.()||(W(),j(m,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size},null,8,[`theme`,`themeOverrides`,`size`]))]))],2)):(W(),j(ce,Y({key:0,ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?(W(),j(Ve,{key:1,ref:`virtualListRef`,class:R(`${n}-virtual-list`),items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?(W(),j(qe,{key:e.key,clsPrefix:n,tmNode:e},null,8,[`clsPrefix`,`tmNode`])):e.ignored?null:(W(),j(Ze,{clsPrefix:n,key:e.key,tmNode:e},null,8,[`clsPrefix`,`tmNode`]))},1032,[`class`,`items`,`itemSize`,`paddingTop`,`paddingBottom`,`onResize`,`onScroll`])):(W(),A(`div`,{key:4,class:R(`${n}-base-select-menu-option-wrapper`),style:ke({paddingTop:this.padding.top,paddingBottom:this.padding.bottom})},[B(()=>this.flattenedNodes.map(e=>e.isGroup?(W(),j(qe,{key:e.key,clsPrefix:n,tmNode:e},null,8,[`clsPrefix`,`tmNode`])):(W(),j(Ze,{clsPrefix:n,key:e.key,tmNode:e},null,8,[`clsPrefix`,`tmNode`]))))],6))},1040,[`theme`,`themeOverrides`,`scrollable`,`container`,`content`,`onScroll`]))],64)),B(()=>G(e.action,e=>e&&[(W(),A(`div`,{class:R(`${n}-base-select-menu__action`),"data-action":!0,key:`action`},[B(()=>e)],2)),(W(),j(Ke,{onFocus:this.onTabOut,key:`focus-detector`},null,8,[`onFocus`]))]))],46,$e)}});function tt(e){return e.type===`group`}function nt(e){return e.type===`ignored`}function rt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function it(e,t){return{getIsGroup:tt,getIgnored:nt,getKey(t){return tt(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function at(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(tt(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(nt(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function ot(e,t,n){let r=new Map;return e.forEach(e=>{tt(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var st=X([z(`base-selection`,`
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
 `,[z(`base-loading`,`
 color: var(--n-loading-color);
 `),z(`base-selection-tags`,`min-height: var(--n-height);`),T(`border, state-border`,`
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
 `),T(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),z(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[T(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),z(`base-selection-overlay`,`
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
 `,[T(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),z(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[T(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),z(`base-selection-tags`,`
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
 `),z(`base-selection-label`,`
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
 `,[z(`base-selection-input`,`
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
 `,[T(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),T(`render-label`,`
 color: var(--n-text-color);
 `)]),_e(`disabled`,[X(`&:hover`,[T(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),P(`focus`,[T(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),P(`active`,[T(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),z(`base-selection-label`,`background-color: var(--n-color-active);`),z(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),P(`disabled`,`cursor: not-allowed;`,[T(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),z(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[z(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),T(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),z(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),z(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),z(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[T(`input`,`
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
 `),T(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>P(`${e}-status`,[T(`state-border`,`border: var(--n-border-${e});`),_e(`disabled`,[X(`&:hover`,[T(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),P(`active`,[T(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),z(`base-selection-label`,`background-color: var(--n-color-active-${e});`),z(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),P(`focus`,[T(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),z(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),z(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[X(`&:last-child`,`padding-right: 0;`),z(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[T(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ct=[`disabled`,`value`,`autofocus`,`onBlur`,`onFocus`,`onKeydown`,`onInput`,`onCompositionstart`,`onCompositionend`],lt=[`tabindex`],ut=[`title`],dt=[`value`,`readonly`,`disabled`,`autofocus`,`onFocus`,`onBlur`,`onInput`,`onCompositionstart`,`onCompositionend`],ft=[`tabindex`],pt=[`onClick`,`onMouseenter`,`onMouseleave`,`onKeydown`,`onFocusin`,`onFocusout`,`onMousedown`],mt=H({name:`InternalSelection`,props:{...ie.props,clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function},setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n}=ee(e),r=Oe(`InternalSelection`,n,t),i=U(null),a=U(null),o=U(null),s=U(null),c=U(null),l=U(null),u=U(null),d=U(null),f=U(null),p=U(null),m=U(!1),h=U(!1),g=U(!1),_=ie(`InternalSelection`,`-internal-selection`,st,w,e,Z(e,`clsPrefix`)),v=V(()=>e.clearable&&!e.disabled&&(g.value||e.active)),y=V(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):x(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),b=V(()=>{let t=e.selectedOption;if(t)return t[e.labelField]}),C=V(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function T(){let{value:t}=i;if(t){let{value:n}=a;n&&(n.style.width=`${t.offsetWidth}px`,e.maxTagCount!==`responsive`&&f.value?.sync({showAllItemsBeforeCalculate:!1}))}}function E(){let{value:e}=p;e&&(e.style.display=`none`)}function D(){let{value:e}=p;e&&(e.style.display=`inline-block`)}xe(Z(e,`active`),e=>{e||E()}),xe(Z(e,`pattern`),()=>{e.multiple&&Se(T)});function O(t){let{onFocus:n}=e;n&&n(t)}function k(t){let{onBlur:n}=e;n&&n(t)}function te(t){let{onDeleteOption:n}=e;n&&n(t)}function A(t){let{onClear:n}=e;n&&n(t)}function j(t){let{onPatternInput:n}=e;n&&n(t)}function ne(e){(!e.relatedTarget||!o.value?.contains(e.relatedTarget))&&O(e)}function M(e){o.value?.contains(e.relatedTarget)||k(e)}function N(e){A(e)}function re(){g.value=!0}function P(){g.value=!1}function ae(t){e.active&&e.filterable&&t.target!==a.value&&t.preventDefault()}function F(e){te(e)}let L=U(!1);function R(t){if(t.key===`Backspace`&&!L.value&&!e.pattern.length){let{selectedOptions:t}=e;t?.length&&F(t[t.length-1])}}let oe=null;function z(t){let{value:n}=i;n&&(n.textContent=t.target.value,T()),e.ignoreComposition&&L.value?oe=t:j(t)}function se(){L.value=!0}function B(){L.value=!1,e.ignoreComposition&&j(oe),oe=null}function ce(t){h.value=!0,e.onPatternFocus?.(t)}function le(t){h.value=!1,e.onPatternBlur?.(t)}function H(){if(e.filterable)h.value=!1,l.value?.blur(),a.value?.blur();else if(e.multiple){let{value:e}=s;e?.blur()}else{let{value:e}=c;e?.blur()}}function ue(){e.filterable?(h.value=!1,l.value?.focus()):e.multiple?s.value?.focus():c.value?.focus()}function de(){let{value:e}=a;e&&(D(),e.focus())}function fe(){let{value:e}=a;e&&e.blur()}function W(e){let{value:t}=u;t&&t.setTextContent(`+${e}`)}function pe(){let{value:e}=d;return e}function G(){return a.value}let K=null;function q(){K!==null&&window.clearTimeout(K)}function me(){e.active||(q(),K=window.setTimeout(()=>{C.value&&(m.value=!0)},100))}function J(){q()}function ge(e){e||(q(),m.value=!1)}xe(C,e=>{e||(m.value=!1)}),De(()=>{he(()=>{let t=l.value;t&&(e.disabled?t.removeAttribute(`tabindex`):t.tabIndex=h.value?-1:0)})}),Ge(o,e.onResize);let{inlineThemeDisabled:_e}=e,ye=V(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:o,textColor:s,paddingSingle:c,paddingMultiple:l,caretColor:u,colorDisabled:d,textColorDisabled:f,placeholderColorDisabled:p,colorActive:m,boxShadowFocus:h,boxShadowActive:g,boxShadowHover:v,border:y,borderFocus:b,borderHover:x,borderActive:C,arrowColor:w,arrowColorDisabled:T,loadingColor:E,colorActiveWarning:D,boxShadowFocusWarning:O,boxShadowActiveWarning:k,boxShadowHoverWarning:ee,borderWarning:te,borderFocusWarning:A,borderHoverWarning:j,borderActiveWarning:ne,colorActiveError:M,boxShadowFocusError:N,boxShadowActiveError:re,boxShadowHoverError:P,borderError:ie,borderFocusError:ae,borderHoverError:F,borderActiveError:L,clearColor:R,clearColorHover:oe,clearColorPressed:z,clearSize:se,arrowSize:B,[S(`height`,t)]:V,[S(`fontSize`,t)]:ce}}=_.value,le=I(c),H=I(l);return{"--n-bezier":n,"--n-border":y,"--n-border-active":C,"--n-border-focus":b,"--n-border-hover":x,"--n-border-radius":i,"--n-box-shadow-active":g,"--n-box-shadow-focus":h,"--n-box-shadow-hover":v,"--n-caret-color":u,"--n-color":a,"--n-color-active":m,"--n-color-disabled":d,"--n-font-size":ce,"--n-height":V,"--n-padding-single-top":le.top,"--n-padding-multiple-top":H.top,"--n-padding-single-right":le.right,"--n-padding-multiple-right":H.right,"--n-padding-single-left":le.left,"--n-padding-multiple-left":H.left,"--n-padding-single-bottom":le.bottom,"--n-padding-multiple-bottom":H.bottom,"--n-placeholder-color":o,"--n-placeholder-color-disabled":p,"--n-text-color":s,"--n-text-color-disabled":f,"--n-arrow-color":w,"--n-arrow-color-disabled":T,"--n-loading-color":E,"--n-color-active-warning":D,"--n-box-shadow-focus-warning":O,"--n-box-shadow-active-warning":k,"--n-box-shadow-hover-warning":ee,"--n-border-warning":te,"--n-border-focus-warning":A,"--n-border-hover-warning":j,"--n-border-active-warning":ne,"--n-color-active-error":M,"--n-box-shadow-focus-error":N,"--n-box-shadow-active-error":re,"--n-box-shadow-hover-error":P,"--n-border-error":ie,"--n-border-focus-error":ae,"--n-border-hover-error":F,"--n-border-active-error":L,"--n-clear-size":se,"--n-clear-color":R,"--n-clear-color-hover":oe,"--n-clear-color-pressed":z,"--n-arrow-size":B,"--n-font-weight":r}}),be=_e?ve(`internal-selection`,V(()=>e.size[0]),ye,e):void 0;return{mergedTheme:_,mergedClearable:v,mergedClsPrefix:t,rtlEnabled:r,patternInputFocused:h,filterablePlaceholder:y,label:b,selected:C,showTagsPanel:m,isComposing:L,counterRef:u,counterWrapperRef:d,patternInputMirrorRef:i,patternInputRef:a,selfRef:o,multipleElRef:s,singleElRef:c,patternInputWrapperRef:l,overflowRef:f,inputTagElRef:p,handleMouseDown:ae,handleFocusin:ne,handleClear:N,handleMouseEnter:re,handleMouseLeave:P,handleDeleteOption:F,handlePatternKeyDown:R,handlePatternInputInput:z,handlePatternInputBlur:le,handlePatternInputFocus:ce,handleMouseEnterCounter:me,handleMouseLeaveCounter:J,handleFocusout:M,handleCompositionEnd:B,handleCompositionStart:se,onPopoverUpdateShow:ge,focus:ue,focusInput:de,blur:H,blurInput:fe,updateCounter:W,getCounter:pe,getTail:G,renderLabel:e.renderLabel,cssVars:_e?void 0:ye,themeClass:be?.themeClass,onRender:be?.onRender}},render(){let{status:e,multiple:t,size:r,disabled:i,filterable:a,maxTagCount:o,bordered:s,clsPrefix:l,ellipsisTagPopoverProps:u,onRender:d,renderTag:f,renderLabel:p}=this;d?.();let m=o===`responsive`,g=typeof o==`number`,_=m||g,v=(W(),j(we,null,{default:()=>(W(),j(n,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>this.$slots.arrow?.()},1032,[`clsPrefix`,`loading`,`showArrow`,`showClear`,`onClear`]))},1024)),y;if(t){let{labelField:e}=this,t=t=>(W(),A(`div`,{class:R(`${l}-base-selection-tag-wrapper`),key:t.value},[f?(W(),A(C,{key:0},[B(()=>f({option:t,handleClose:()=>{this.handleDeleteOption(t)}}))],64)):(W(),j(h,{key:1,size:r,closable:!t.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>p?p(t,!0):x(t[e],t,!0)},1032,[`size`,`closable`,`disabled`,`onClose`]))],2)),n=()=>(g?this.selectedOptions.slice(0,o):this.selectedOptions).map(t),s=a?(W(),A(`div`,{class:R(`${l}-base-selection-input-tag`),ref:`inputTagElRef`,key:`__input-tag__`},[k(`input`,Y(this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd}),null,16,ct),k(`span`,{ref:`patternInputMirrorRef`,class:R(`${l}-base-selection-input-tag__mirror`)},[B(()=>this.pattern)],2)],2)):null,d=m?()=>(W(),A(`div`,{class:R(`${l}-base-selection-tag-wrapper`),ref:`counterWrapperRef`},[(W(),j(h,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i},null,8,[`size`,`onMouseenter`,`onMouseleave`,`disabled`]))],2)):void 0,b;if(g){let e=this.selectedOptions.length-o;e>0&&(b=(t=>(W(),A(`div`,{class:R(`${l}-base-selection-tag-wrapper`),key:`__counter__`},[(W(),j(h,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${e}`},1032,[`size`,`onMouseenter`,`disabled`]))],2)))(b))}let S=m?a?(W(),j(Ue,{key:3,ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:n,counter:d,tail:()=>s},1032,[`updateCounter`,`getCounter`,`getTail`])):(W(),j(Ue,{key:4,ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:n,counter:d},1032,[`updateCounter`,`getCounter`])):g&&b?n().concat(b):n(),w=_?()=>(W(),A(`div`,{class:R(`${l}-base-selection-popover`)},[m?(W(),A(C,{key:0},[B(()=>n())],64)):(W(),A(C,{key:1},[B(()=>this.selectedOptions.map(t))],64))],2)):void 0,T=_?{show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover,...u}:null,E=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?(W(),A(`div`,{key:5,class:R(`${l}-base-selection-placeholder ${l}-base-selection-overlay`)},[k(`div`,{class:R(`${l}-base-selection-placeholder__inner`)},[B(()=>this.placeholder)],2)],2)):null,D=a?(W(),A(`div`,{key:6,ref:`patternInputWrapperRef`,class:R(`${l}-base-selection-tags`)},[B(()=>S),m?B(()=>null):(W(),A(C,{key:1},[B(()=>s)],64)),B(()=>v)],2)):(W(),A(`div`,{key:7,ref:`multipleElRef`,class:R(`${l}-base-selection-tags`),tabindex:i?void 0:0},[B(()=>S),B(()=>v)],10,lt));y=(e=>(W(),A(C,{key:8},[_?(W(),j(c,Y({key:0},T,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>D,default:w},1040)):(W(),A(C,{key:1},[B(()=>D)],64)),B(()=>E)],64)))(y)}else if(a){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=!this.active&&this.selected;y=(e=>(W(),A(`div`,{key:9,ref:`patternInputWrapperRef`,class:R(`${l}-base-selection-label`),title:this.patternInputFocused?void 0:We(this.label)},[k(`input`,Y(this.inputProps,{ref:`patternInputRef`,class:`${l}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd}),null,16,dt),n?(W(),A(`div`,{class:R(`${l}-base-selection-label__render-label ${l}-base-selection-overlay`),key:`input`},[k(`div`,{class:R(`${l}-base-selection-overlay__wrapper`)},[f?(W(),A(C,{key:0},[B(()=>f({option:this.selectedOption,handleClose:()=>{}}))],64)):(W(),A(C,{key:1},[p?(W(),A(C,{key:0},[B(()=>p(this.selectedOption,!0))],64)):(W(),A(C,{key:1},[B(()=>x(this.label,this.selectedOption,!0))],64))],64))],2)],2)):B(()=>null),t?(W(),A(`div`,{class:R(`${l}-base-selection-placeholder ${l}-base-selection-overlay`),key:`placeholder`},[k(`div`,{class:R(`${l}-base-selection-overlay__wrapper`)},[B(()=>this.filterablePlaceholder)],2)],2)):B(()=>null),B(()=>v)],10,ut)))(y)}else y=(e=>(W(),A(`div`,{key:10,ref:`singleElRef`,class:R(`${l}-base-selection-label`),tabindex:this.disabled?void 0:0},[this.label===void 0?(W(),A(`div`,{class:R(`${l}-base-selection-placeholder ${l}-base-selection-overlay`),key:`placeholder`},[k(`div`,{class:R(`${l}-base-selection-placeholder__inner`)},[B(()=>this.placeholder)],2)],2)):(W(),A(`div`,{class:R(`${l}-base-selection-input`),title:We(this.label),key:`input`},[k(`div`,{class:R(`${l}-base-selection-input__content`)},[f?(W(),A(C,{key:0},[B(()=>f({option:this.selectedOption,handleClose:()=>{}}))],64)):(W(),A(C,{key:1},[p?(W(),A(C,{key:0},[B(()=>p(this.selectedOption,!0))],64)):(W(),A(C,{key:1},[B(()=>x(this.label,this.selectedOption,!0))],64))],64))],2)],10,[`title`])),B(()=>v)],10,ft)))(y);return W(),A(`div`,{ref:`selfRef`,class:R([`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}]),style:ke(this.cssVars),onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},[B(()=>y),s?(W(),A(`div`,{key:0,class:R(`${l}-base-selection__border`)},null,2)):B(()=>null),s?(W(),A(`div`,{key:2,class:R(`${l}-base-selection__state-border`)},null,2)):B(()=>null)],46,pt)}}),ht=X([z(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),z(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[re({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),gt={...ie.props,to:s.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array},_t=H({name:`Select`,props:gt,slots:Object,setup(n){let{mergedClsPrefixRef:r,mergedBorderedRef:i,namespaceRef:a,inlineThemeDisabled:o,mergedComponentPropsRef:c}=ee(n),l=ie(`Select`,`-select`,ht,fe,n,r),f=U(n.defaultValue),p=Z(n,`value`),m=t(p,f),h=U(!1),_=U(``),v=g(n,[`items`,`options`]),y=U([]),b=U([]),x=V(()=>b.value.concat(y.value).concat(v.value)),S=V(()=>{let{filter:e}=n;if(e)return e;let{labelField:t,valueField:r}=n;return(e,n)=>{if(!n)return!1;let i=n[t];if(typeof i==`string`)return rt(e,i);let a=n[r];return typeof a==`string`?rt(e,a):typeof a==`number`&&rt(e,String(a))}}),C=V(()=>{if(n.remote)return v.value;{let{value:e}=x,{value:t}=_;return!t.length||!n.filterable?e:at(e,S.value,t,n.childrenField)}}),w=V(()=>{let{valueField:e,childrenField:t}=n,r=it(e,t);return u(C.value,r)}),T=V(()=>ot(x.value,n.valueField,n.childrenField)),E=U(!1),D=t(Z(n,`show`),E),O=U(null),k=U(null),A=U(null),{localeRef:j}=e(`Select`),ne=V(()=>n.placeholder??j.value.placeholder),M=[],N=U(new Map),re=V(()=>{let{fallbackOption:e}=n;if(e===void 0){let{labelField:e,valueField:t}=n;return n=>({[e]:String(n),[t]:n})}return e===!1?!1:t=>Object.assign(e(t),{value:t})});function P(e){let t=n.remote,{value:r}=N,{value:i}=T,{value:a}=re,o=[];return e.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(t&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let ae=V(()=>{if(n.multiple){let{value:e}=m;return Array.isArray(e)?P(e):[]}return null}),F=V(()=>{let{value:e}=m;return!n.multiple&&!Array.isArray(e)?e===null?null:P([e])[0]||null:null}),I=L(n,{mergedSize:e=>{let{size:t}=n;if(t)return t;let{mergedSize:r}=e||{};return r?.value?r.value:c?.value?.Select?.size||`medium`}}),{mergedSizeRef:R,mergedDisabledRef:z,mergedStatusRef:se}=I;function B(e,t){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=n,{nTriggerFormChange:o,nTriggerFormInput:s}=I;r&&J(r,e,t),a&&J(a,e,t),i&&J(i,e,t),f.value=e,o(),s()}function ce(e){let{onBlur:t}=n,{nTriggerFormBlur:r}=I;t&&J(t,e),r()}function le(){let{onClear:e}=n;e&&J(e)}function H(e){let{onFocus:t,showOnFocus:r}=n,{nTriggerFormFocus:i}=I;t&&J(t,e),i(),r&&G()}function ue(e){let{onSearch:t}=n;t&&J(t,e)}function de(e){let{onScroll:t}=n;t&&J(t,e)}function W(){let{remote:e,multiple:t}=n;if(e){let{value:e}=N;if(t){let{valueField:t}=n;ae.value?.forEach(n=>{e.set(n[t],n)})}else{let t=F.value;t&&e.set(t[n.valueField],t)}}}function pe(e){let{onUpdateShow:t,"onUpdate:show":r}=n;t&&J(t,e),r&&J(r,e),E.value=e}function G(){z.value||(pe(!0),E.value=!0,n.filterable&&Pe())}function K(){pe(!1)}function q(){_.value=``,b.value=M}let he=U(!1);function ge(){n.filterable&&(he.value=!0)}function _e(){n.filterable&&(he.value=!1,D.value||q())}function ye(){z.value||(D.value?n.filterable?Pe():K():G())}function be(e){A.value?.selfRef?.contains(e.relatedTarget)||(h.value=!1,ce(e),K())}function Se(e){H(e),h.value=!0}function Ce(){h.value=!0}function we(e){O.value?.$el.contains(e.relatedTarget)||(h.value=!1,ce(e),K())}function Te(){O.value?.focus(),K()}function Ee(e){D.value&&(O.value?.$el.contains(te(e))||K())}function De(e){if(!Array.isArray(e))return[];if(re.value)return Array.from(e);{let{remote:t}=n,{value:r}=T;if(t){let{value:t}=N;return e.filter(e=>r.has(e)||t.has(e))}return e.filter(e=>r.has(e))}}function Oe(e){Y(e.rawNode)}function Y(e){if(z.value)return;let{tag:t,remote:r,clearFilterAfterSelect:i,valueField:a}=n;if(t&&!r){let{value:e}=b,t=e[0]||null;if(t){let e=y.value;e.length?e.push(t):y.value=[t],b.value=M}}if(r&&N.value.set(e[a],e),n.multiple){let n=De(m.value),o=n.findIndex(t=>t===e[a]);if(~o){if(n.splice(o,1),t&&!r){let t=X(e[a]);~t&&(y.value.splice(t,1),i&&(_.value=``))}}else n.push(e[a]),i&&(_.value=``);B(n,P(n))}else{if(t&&!r){let t=X(e[a]);~t?y.value=[y.value[t]]:y.value=M}Ne(),K(),B(e[a],e)}}function X(e){return y.value.findIndex(t=>t[n.valueField]===e)}function ke(e){D.value||G();let{value:t}=e.target;_.value=t;let{tag:r,remote:i}=n;if(ue(t),r&&!i){if(!t){b.value=M;return}let{onCreate:e}=n,r=e?e(t):{[n.labelField]:t,[n.valueField]:t},{valueField:i,labelField:a}=n;v.value.some(e=>e[i]===r[i]||e[a]===r[a])||y.value.some(e=>e[i]===r[i]||e[a]===r[a])?b.value=M:b.value=[r]}}function Ae(e){e.stopPropagation();let{multiple:t,tag:r,remote:i,clearCreatedOptionsOnClear:a}=n;!t&&n.filterable&&K(),r&&!i&&a&&(y.value=M),le(),t?B([],[]):B(null,null)}function Q(e){!d(e,`action`)&&!d(e,`empty`)&&!d(e,`header`)&&e.preventDefault()}function je(e){de(e)}function Me(e){if(!n.keyboard){e.preventDefault();return}switch(e.key){case` `:if(n.filterable)break;e.preventDefault();case`Enter`:if(!O.value?.isComposing){if(D.value){let e=A.value?.getPendingTmNode();e?Oe(e):n.filterable||(K(),Ne())}else if(G(),n.tag&&he.value){let e=b.value[0];if(e){let t=e[n.valueField],{value:r}=m;n.multiple&&Array.isArray(r)&&r.includes(t)||Y(e)}}}e.preventDefault();break;case`ArrowUp`:if(e.preventDefault(),n.loading)return;D.value&&A.value?.prev();break;case`ArrowDown`:if(e.preventDefault(),n.loading)return;D.value?A.value?.next():G();break;case`Escape`:D.value&&(oe(e),K()),O.value?.focus()}}function Ne(){O.value?.focus()}function Pe(){O.value?.focusInput()}function Fe(){D.value&&k.value?.syncPosition()}W(),xe(Z(n,`options`),W);let Ie={focus:()=>{O.value?.focus()},focusInput:()=>{O.value?.focusInput()},blur:()=>{O.value?.blur()},blurInput:()=>{O.value?.blurInput()}},Le=V(()=>{let{self:{menuBoxShadow:e}}=l.value;return{"--n-menu-box-shadow":e}}),Re=o?ve(`select`,void 0,Le,n):void 0;return{...Ie,mergedStatus:se,mergedClsPrefix:r,mergedBordered:i,namespace:a,treeMate:w,isMounted:me(),triggerRef:O,menuRef:A,pattern:_,uncontrolledShow:E,mergedShow:D,adjustedTo:s(n),uncontrolledValue:f,mergedValue:m,followerRef:k,localizedPlaceholder:ne,selectedOption:F,selectedOptions:ae,mergedSize:R,mergedDisabled:z,focused:h,activeWithoutMenuOpen:he,inlineThemeDisabled:o,onTriggerInputFocus:ge,onTriggerInputBlur:_e,handleTriggerOrMenuResize:Fe,handleMenuFocus:Ce,handleMenuBlur:we,handleMenuTabOut:Te,handleTriggerClick:ye,handleToggle:Oe,handleDeleteOption:Y,handlePatternInput:ke,handleClear:Ae,handleTriggerBlur:be,handleTriggerFocus:Se,handleKeydown:Me,handleMenuAfterLeave:q,handleMenuClickOutside:Ee,handleMenuScroll:je,handleMenuKeydown:Me,handleMenuMousedown:Q,mergedTheme:l,cssVars:o?void 0:Le,themeClass:Re?.themeClass,onRender:Re?.onRender}},render(){return W(),A(`div`,{class:R(`${this.mergedClsPrefix}-select`)},[le(i,null,{_:1,default:Q(()=>[(W(),j(a,null,{_:1,default:Q(()=>(W(),j(mt,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{_:1,arrow:Q(()=>[this.$slots.arrow?.()])},8,`inlineThemeDisabled.status.inputProps.clsPrefix.showArrow.maxTagCount.ellipsisTagPopoverProps.bordered.active.pattern.placeholder.selectedOption.selectedOptions.multiple.renderTag.renderLabel.filterable.clearable.disabled.size.theme.labelField.valueField.themeOverrides.loading.focused.onClick.onDeleteOption.onPatternInput.onClear.onBlur.onFocus.onKeydown.onPatternBlur.onPatternFocus.onResize.ignoreComposition`.split(`.`))))})),(W(),j(l,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===s.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{_:1,default:Q(()=>(W(),j(F,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{_:1,default:Q(()=>this.mergedShow||this.displayDirective===`show`?(this.onRender?.(),ue((W(),j(et,Y(this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{_:1,empty:Q(()=>[this.$slots.empty?.()]),header:Q(()=>[this.$slots.header?.()]),action:Q(()=>[this.$slots.action?.()])},16,`onResize.inlineThemeDisabled.virtualScroll.class.clsPrefix.labelField.valueField.nodeProps.theme.themeOverrides.treeMate.multiple.size.renderOption.renderLabel.value.style.onToggle.onScroll.onFocus.onBlur.onKeydown.onTabOut.onMousedown.show.showCheckmark.resetMenuOnOptionsChange.scrollbarProps`.split(`.`))),this.displayDirective===`show`?[[ne,this.mergedShow],[Ee,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Ee,this.handleMenuClickOutside,void 0,{capture:!0}]])):null)},8,[`appear`,`onAfterLeave`])))},8,[`show`,`to`,`teleportDisabled`,`containerClass`,`width`,`placement`]))])})],2)}});export{Ke as n,_t as t};