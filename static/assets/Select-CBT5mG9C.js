import{a as e,i as t,r as n}from"./createLucideIcon-BVttscYv.js";import{C as r,D as i,E as a,O as o,S as s,T as c,_ as l,k as u,v as d,w as f,y as p}from"./workbench-CHxJTq70.js";import{S as m,b as h}from"./store-O3l69acd.js";import{i as g,n as _,r as v}from"./plus-CKfrleMS.js";import{$ as y,$n as b,A as x,An as S,Bn as C,C as w,Cr as T,Dn as E,Dt as D,Et as O,Ft as k,Gn as A,Gt as ee,It as te,Ln as ne,Lt as re,Nt as j,O as M,On as N,Ot as ie,P as ae,Pn as oe,Pt as se,Qn as P,R as F,Rt as I,S as ce,Tn as L,Un as R,Ut as le,Vt as z,Wn as B,X as ue,Xn as V,Yn as de,ar as fe,b as pe,br as H,cr as me,dt as he,er as U,et as W,gr as ge,gt as _e,ht as G,ir as K,k as ve,kn as ye,kt as be,lt as xe,mr as Se,nr as Ce,or as we,ot as Te,pr as Ee,qn as q,rt as De,sr as J,st as Oe,tr as ke,ur as Ae,wn as Y,yr as X,yt as Z,zt as Q}from"./index-4ZsUaYAJ.js";function je(e){return e&-e}var Me=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=je(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=je(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},Ne;function Pe(){return typeof document>`u`?!1:(Ne===void 0&&(Ne=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches),Ne)}var Fe;function Ie(){return typeof document>`u`?1:(Fe===void 0&&(Fe=`chrome`in window?window.devicePixelRatio:1),Fe)}var Le=`VVirtualListXScroll`;function Re({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let r=X(0),i=X(0),a=R(()=>{let t=e.value;if(t.length===0)return null;let n=new Me(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n}),o=Z(()=>{let e=a.value;return e===null?0:Math.max(e.getBound(i.value)-1,0)}),s=e=>{let t=a.value;return t===null?0:t.sum(e)},c=Z(()=>{let t=a.value;return t===null?0:Math.min(t.getBound(i.value+r.value)+1,e.value.length-1)});return me(Le,{startIndexRef:o,endIndexRef:c,columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:s}),{listWidthRef:r,scrollLeftRef:i}}var ze=V({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=b(Le);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),Be=_(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[_(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[_(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),Ve=V({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){let t=le();Be.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:v,ssr:t}),we(()=>{let{defaultScrollIndex:t,defaultScrollKey:n}=e;t==null?n!=null&&_({key:n}):_({index:t})});let n=!1,r=!1;Ce(()=>{if(n=!1,!r){r=!0;return}_({top:m.value,left:o.value})}),fe(()=>{n=!0,r||=!0});let i=Z(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let t=0;return e.columns.forEach(e=>{t+=e.width}),t}),a=R(()=>{let t=new Map,{keyField:n}=e;return e.items.forEach((e,r)=>{t.set(e[n],r)}),t}),{scrollLeftRef:o,listWidthRef:s}=Re({columnsRef:H(e,`columns`),renderColRef:H(e,`renderCol`),renderItemWithColsRef:H(e,`renderItemWithCols`)}),c=X(null),l=X(void 0),d=new Map,f=R(()=>{let{items:t,itemSize:n,keyField:r}=e,i=new Me(t.length,n);return t.forEach((e,t)=>{let n=e[r],a=d.get(n);a!==void 0&&i.add(t,a)}),i}),p=X(0),m=X(0),h=Z(()=>Math.max(f.value.getBound(m.value-j(e.paddingTop))-1,0)),g=R(()=>{let{value:t}=l;if(t===void 0)return[];let{items:n,itemSize:r}=e,i=h.value,a=Math.min(i+Math.ceil(t/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),_=(e,t)=>{if(typeof e==`number`){S(e,t,`auto`);return}let{left:n,top:r,index:i,key:o,position:s,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)S(n,r,c);else if(i!==void 0)x(i,c,l);else if(o!==void 0){let e=a.value.get(o);e!==void 0&&x(e,c,l)}else s===`bottom`?S(0,2**53-1,c):s===`top`&&S(0,0,c)},y,b=null;function x(t,n,r){let i=c.value;if(i==null)return;let{value:a}=f,o=a.sum(t)+j(e.paddingTop);if(!r)i.scrollTo({left:0,top:o,behavior:n});else{y=t,b!==null&&window.clearTimeout(b),b=window.setTimeout(()=>{y=void 0,b=null},16);let{scrollTop:e,offsetHeight:r}=i;if(o>e){let s=a.get(t);o+s<=e+r||i.scrollTo({left:0,top:o+s-r,behavior:n})}else i.scrollTo({left:0,top:o,behavior:n})}}function S(e,t,n){c.value?.scrollTo({left:e,top:t,behavior:n})}function C(t,r){if(n||e.ignoreItemResize||ee(r.target))return;let{value:i}=f,o=a.value.get(t),s=i.get(o),l=r.borderBoxSize?.[0]?.blockSize??r.contentRect.height;if(l===s)return;l-e.itemSize===0?d.delete(t):d.set(t,l-e.itemSize);let u=l-s;if(u===0)return;i.add(o,u);let m=c.value;if(m!=null){if(y===void 0){let e=i.sum(o);m.scrollTop>e&&m.scrollBy(0,u)}else(o<y||o===y&&l+i.sum(o)>m.scrollTop+m.offsetHeight)&&m.scrollBy(0,u);A()}p.value++}let w=!Pe(),T=!1;function E(t){var n;(n=e.onScroll)==null||n.call(e,t),(!w||!T)&&A()}function D(t){var n;if((n=e.onWheel)==null||n.call(e,t),w){let e=c.value;if(e!=null){if(t.deltaX===0&&(e.scrollTop===0&&t.deltaY<=0||e.scrollTop+e.offsetHeight>=e.scrollHeight&&t.deltaY>=0))return;t.preventDefault(),e.scrollTop+=t.deltaY/Ie(),e.scrollLeft+=t.deltaX/Ie(),A(),T=!0,u(()=>{T=!1})}}}function O(t){if(n||ee(t.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(t.contentRect.height===l.value)return}else if(t.contentRect.height===l.value&&t.contentRect.width===s.value)return;l.value=t.contentRect.height,s.value=t.contentRect.width;let{onResize:r}=e;r!==void 0&&r(t)}function A(){let{value:e}=c;e!=null&&(m.value=e.scrollTop,o.value=e.scrollLeft)}function ee(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:l,listStyle:{overflow:`auto`},keyToIndex:a,itemsStyle:R(()=>{let{itemResizable:t}=e,n=k(f.value.sum());return p.value,[e.itemsStyle,{boxSizing:`content-box`,width:k(i.value),height:t?``:n,minHeight:t?n:``,paddingTop:k(e.paddingTop),paddingBottom:k(e.paddingBottom)}]}),visibleItemsStyle:R(()=>(p.value,{transform:`translateY(${k(f.value.sum(h.value))})`})),viewportItems:g,listElRef:c,itemsElRef:X(null),scrollTo:_,handleListResize:O,handleListScroll:E,handleListWheel:D,handleItemResize:C}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return P(y,{onResize:this.handleListResize},{default:()=>{var i;return P(`div`,U(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(i=this.$slots).empty?.call(i):P(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[P(r,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:i}=this;return this.viewportItems.map(a=>{let o=a[t],s=n.get(o),c=r==null?void 0:P(ze,{index:s,item:a}),l=i==null?void 0:P(ze,{index:s,item:a}),u=this.$slots.default({item:a,renderedCols:c,renderedItemWithCols:l,index:s})[0];return e?P(y,{key:o,onResize:e=>this.handleItemResize(o,e)},{default:()=>u}):(u.key=o,u)})}})])])}})}}),$=`v-hidden`,He=_(`[v-hidden]`,{display:`none!important`}),Ue=V({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=X(null),r=X(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute($)&&c.removeAttribute($);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute($)&&e.removeAttribute($);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute($)||n.setAttribute($,``);continue}n.hasAttribute($)&&n.removeAttribute($);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute($,``))}let a=le();return He.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:v,ssr:a}),we(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return ke(()=>this.sync({showAllItemsBeforeCalculate:!1})),P(`div`,{class:`v-overflow`,ref:`selfRef`},[Ae(e,`default`),e.counter?e.counter():P(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function We(e){switch(typeof e){case`string`:return e||void 0;case`number`:return String(e);default:return}}function Ge(e,t){t&&(we(()=>{let{value:n}=e;n&&W.registerHandler(n,t)}),Ee(e,(e,t)=>{t&&W.unregisterHandler(t)},{deep:!1}),K(()=>{let{value:t}=e;t&&W.unregisterHandler(t)}))}var Ke=V({props:{onFocus:Function,onBlur:Function},setup(e){return()=>(()=>{let t=re(`d16ead82505dc285`);return J(),q(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:t[0]||=t=>e.onFocus?.(t),onBlur:t[1]||=t=>e.onBlur?.(t)},null,32)})()}}),qe=V({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=b(i);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):x(i[this.labelField],i,!1),s=(J(),q(`div`,U(a,{class:[`${e}-base-select-group-header`,a?.class]}),[z(()=>o)],16));return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}}),Je=V({name:`Checkmark`,render(){return(()=>{let e=re(`3c84eac8ae4e1f96`);return e[0]||=B(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},[B(`g`,{fill:`none`},[B(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})])],-1)})()}}),Ye=[`onClick`,`onMouseenter`,`onMousemove`];function Xe(e,t){return J(),A(oe,{name:`fade-in-scale-up-transition`},{default:()=>e?(J(),A(D,{key:1,clsPrefix:t,class:I(`${t}-base-select-option__check`)},{default:()=>P(Je)},1032,[`clsPrefix`,`class`])):null},1024)}var Ze=V({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:a,renderLabelRef:o,renderOptionRef:s,labelFieldRef:c,valueFieldRef:l,showCheckmarkRef:u,nodePropsRef:d,handleOptionClick:f,handleOptionMouseEnter:p}=b(i),m=Z(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e;n.disabled||p(t,n)}function _(t){let{tmNode:n}=e,{value:r}=m;n.disabled||r||p(t,n)}return{multiple:r,isGrouped:Z(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:u,nodeProps:d,isPending:m,isSelected:Z(()=>{let{value:n}=t,{value:i}=r;if(n===null)return!1;let o=e.tmNode.rawNode[l.value];if(i){let{value:e}=a;return e.has(o)}return n===o}),labelField:c,renderLabel:o,renderOption:s,handleMouseMove:_,handleMouseEnter:g,handleClick:h}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:s,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,f=Xe(n,e),p=c?[c(t,n),a&&f]:[x(t[this.labelField],t,n),a&&f],m=o?.(t),h=(J(),q(`div`,U(m,{class:[`${e}-base-select-option`,t.class,m?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[m?.style||``,t.style||``],onClick:ve([l,m?.onClick]),onMouseenter:ve([u,m?.onMouseenter]),onMousemove:ve([d,m?.onMousemove])}),[B(`div`,{class:I(`${e}-base-select-option__content`)},[z(()=>p)],2)],16,Ye));return t.render?t.render({node:h,option:t,selected:n}):s?s({node:h,option:t,selected:n}):h}}),Qe=L(`base-select-menu`,`
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
 `,[E(`content`,`
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
 `),E(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),E(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),E(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),E(`action`,`
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
 `,[N(`show-checkmark`,`
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
 `),N(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),N(`pending`,[Y(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),N(`selected`,`
 color: var(--n-option-text-color-active);
 `,[Y(`&::before`,`
 background-color: var(--n-option-color-active);
 `),N(`pending`,[Y(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),N(`disabled`,`
 cursor: not-allowed;
 `,[ye(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),N(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),E(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[M({enterScale:`0.5`})])])]),$e=[`tabindex`,`onFocusin`,`onFocusout`,`onKeyup`,`onKeydown`,`onMousedown`,`onMouseenter`,`onMouseleave`],et=V({name:`InternalSelectMenu`,props:{...ie.props,clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function},setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n,mergedComponentPropsRef:r}=ee(e),s=Oe(`InternalSelectMenu`,n,t),c=ie(`InternalSelectMenu`,`-internal-select-menu`,Qe,O,e,H(e,`clsPrefix`)),l=X(null),u=X(null),f=X(null),p=R(()=>e.treeMate.getFlattenedNodes()),m=R(()=>d(p.value)),h=X(null);function g(){let{treeMate:t}=e,n=null,{value:r}=e;r===null?n=t.getFirstAvailableNode():(n=e.multiple?t.getNode((r||[])[(r||[]).length-1]):t.getNode(r),(!n||n.disabled)&&(n=t.getFirstAvailableNode())),P(n||null)}function _(){let{value:t}=h;t&&!e.treeMate.getNode(t.key)&&(h.value=null)}let v;Ee(()=>e.show,t=>{t?v=Ee(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():_(),ke(F)):_()},{immediate:!0}):v?.()},{immediate:!0}),K(()=>{v?.()});let y=R(()=>j(c.value.self[S(`optionHeight`,e.size)])),b=R(()=>se(c.value.self[S(`padding`,e.size)])),x=R(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),C=R(()=>{let e=p.value;return e&&e.length===0}),w=R(()=>r?.value?.Select?.renderEmpty);function T(t){let{onToggle:n}=e;n&&n(t)}function E(t){let{onScroll:n}=e;n&&n(t)}function D(e){f.value?.sync(),E(e)}function k(){f.value?.sync()}function A(){let{value:e}=h;return e||null}function te(e,t){t.disabled||P(t,!1)}function ne(e,t){t.disabled||T(t)}function re(t){o(t,`action`)||e.onKeyup?.(t)}function M(t){o(t,`action`)||e.onKeydown?.(t)}function N(t){e.onMousedown?.(t),!e.focusable&&t.preventDefault()}function ae(){let{value:e}=h;e&&P(e.getNext({loop:!0}),!0)}function oe(){let{value:e}=h;e&&P(e.getPrev({loop:!0}),!0)}function P(e,t=!1){h.value=e,t&&F()}function F(){let t=h.value;if(!t)return;let n=m.value(t.key);n!==null&&(e.virtualScroll?u.value?.scrollTo({index:n}):f.value?.scrollTo({index:n,elSize:y.value}))}function I(t){l.value?.contains(t.target)&&e.onFocus?.(t)}function ce(t){l.value?.contains(t.relatedTarget)||e.onBlur?.(t)}me(i,{handleOptionMouseEnter:te,handleOptionClick:ne,valueSetRef:x,pendingTmNodeRef:h,nodePropsRef:H(e,`nodeProps`),showCheckmarkRef:H(e,`showCheckmark`),multipleRef:H(e,`multiple`),valueRef:H(e,`value`),renderLabelRef:H(e,`renderLabel`),renderOptionRef:H(e,`renderOption`),labelFieldRef:H(e,`labelField`),valueFieldRef:H(e,`valueField`)}),me(a,l),we(()=>{let{value:e}=f;e&&e.sync()});let L=R(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:o,actionDividerColor:s,optionTextColorPressed:l,optionTextColor:u,optionTextColorDisabled:d,optionTextColorActive:f,optionOpacityDisabled:p,optionCheckColor:m,actionTextColor:h,optionColorPending:g,optionColorActive:_,loadingColor:v,loadingSize:y,optionColorActivePending:b,[S(`optionFontSize`,t)]:x,[S(`optionHeight`,t)]:C,[S(`optionPadding`,t)]:w}}=c.value;return{"--n-height":r,"--n-action-divider-color":s,"--n-action-text-color":h,"--n-bezier":n,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":x,"--n-group-header-text-color":o,"--n-option-check-color":m,"--n-option-color-pending":g,"--n-option-color-active":_,"--n-option-color-active-pending":b,"--n-option-height":C,"--n-option-opacity-disabled":p,"--n-option-text-color":u,"--n-option-text-color-active":f,"--n-option-text-color-disabled":d,"--n-option-text-color-pressed":l,"--n-option-padding":w,"--n-option-padding-left":se(w,`left`),"--n-option-padding-right":se(w,`right`),"--n-loading-color":v,"--n-loading-size":y}}),{inlineThemeDisabled:le}=e,z=le?be(`internal-select-menu`,R(()=>e.size[0]),L,e):void 0,B={selfRef:l,next:ae,prev:oe,getPendingTmNode:A};return Ge(l,e.onResize),{mergedTheme:c,mergedClsPrefix:t,rtlEnabled:s,virtualListRef:u,scrollbarRef:f,itemSize:y,padding:b,flattenedNodes:p,empty:C,mergedRenderEmpty:w,virtualListContainer(){let{value:e}=u;return e?.listElRef},virtualListContent(){let{value:e}=u;return e?.itemsElRef},doScroll:E,handleFocusin:I,handleFocusout:ce,handleKeyUp:re,handleKeyDown:M,handleMouseDown:N,handleVirtualListResize:k,handleVirtualListScroll:D,cssVars:le?void 0:L,themeClass:z?.themeClass,onRender:z?.onRender,...B}},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:i,onRender:a}=this;return a?.(),J(),q(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:I([`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`]),style:T(this.cssVars),onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[z(()=>he(e.header,e=>e&&(J(),q(`div`,{class:I(`${n}-base-select-menu__header`),"data-header":!0,key:`header`},[z(()=>e)],2)))),this.loading?(J(),q(`div`,{key:0,class:I(`${n}-base-select-menu__loading`)},[(J(),A(ae,{clsPrefix:n,strokeWidth:20},null,8,[`clsPrefix`]))],2)):(J(),q(C,{key:1},[this.empty?(J(),q(`div`,{key:1,class:I(`${n}-base-select-menu__empty`),"data-empty":!0},[z(()=>xe(e.empty,()=>[this.mergedRenderEmpty?.()||(J(),A(m,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size},null,8,[`theme`,`themeOverrides`,`size`]))]))],2)):(J(),A(ue,U({key:0,ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?(J(),A(Ve,{key:1,ref:`virtualListRef`,class:I(`${n}-virtual-list`),items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?(J(),A(qe,{key:e.key,clsPrefix:n,tmNode:e},null,8,[`clsPrefix`,`tmNode`])):e.ignored?null:(J(),A(Ze,{clsPrefix:n,key:e.key,tmNode:e},null,8,[`clsPrefix`,`tmNode`]))},1032,[`class`,`items`,`itemSize`,`paddingTop`,`paddingBottom`,`onResize`,`onScroll`])):(J(),q(`div`,{key:4,class:I(`${n}-base-select-menu-option-wrapper`),style:T({paddingTop:this.padding.top,paddingBottom:this.padding.bottom})},[z(()=>this.flattenedNodes.map(e=>e.isGroup?(J(),A(qe,{key:e.key,clsPrefix:n,tmNode:e},null,8,[`clsPrefix`,`tmNode`])):(J(),A(Ze,{clsPrefix:n,key:e.key,tmNode:e},null,8,[`clsPrefix`,`tmNode`]))))],6))},1040,[`theme`,`themeOverrides`,`scrollable`,`container`,`content`,`onScroll`]))],64)),z(()=>he(e.action,e=>e&&[(J(),q(`div`,{class:I(`${n}-base-select-menu__action`),"data-action":!0,key:`action`},[z(()=>e)],2)),(J(),A(Ke,{onFocus:this.onTabOut,key:`focus-detector`},null,8,[`onFocus`]))]))],46,$e)}});function tt(e){return e.type===`group`}function nt(e){return e.type===`ignored`}function rt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function it(e,t){return{getIsGroup:tt,getIgnored:nt,getKey(t){return tt(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function at(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(tt(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(nt(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function ot(e,t,n){let r=new Map;return e.forEach(e=>{tt(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var st=Y([L(`base-selection`,`
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
 `),L(`base-selection-tags`,`min-height: var(--n-height);`),E(`border, state-border`,`
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
 `),E(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),L(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[E(`arrow`,`
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
 `,[E(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),L(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[E(`inner`,`
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
 `,[E(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),E(`render-label`,`
 color: var(--n-text-color);
 `)]),ye(`disabled`,[Y(`&:hover`,[E(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),N(`focus`,[E(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),N(`active`,[E(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),L(`base-selection-label`,`background-color: var(--n-color-active);`),L(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),N(`disabled`,`cursor: not-allowed;`,[E(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),L(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[L(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),E(`render-label`,`
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
 `,[E(`input`,`
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
 `),E(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>N(`${e}-status`,[E(`state-border`,`border: var(--n-border-${e});`),ye(`disabled`,[Y(`&:hover`,[E(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),N(`active`,[E(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),L(`base-selection-label`,`background-color: var(--n-color-active-${e});`),L(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),N(`focus`,[E(`state-border`,`
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
 `,[E(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ct=[`disabled`,`value`,`autofocus`,`onBlur`,`onFocus`,`onKeydown`,`onInput`,`onCompositionstart`,`onCompositionend`],lt=[`tabindex`],ut=[`title`],dt=[`value`,`readonly`,`disabled`,`autofocus`,`onFocus`,`onBlur`,`onInput`,`onCompositionstart`,`onCompositionend`],ft=[`tabindex`],pt=[`onClick`,`onMouseenter`,`onMouseleave`,`onKeydown`,`onFocusin`,`onFocusout`,`onMousedown`],mt=V({name:`InternalSelection`,props:{...ie.props,clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function},setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n}=ee(e),r=Oe(`InternalSelection`,n,t),i=X(null),a=X(null),o=X(null),s=X(null),c=X(null),l=X(null),u=X(null),d=X(null),f=X(null),p=X(null),m=X(!1),h=X(!1),g=X(!1),_=ie(`InternalSelection`,`-internal-selection`,st,w,e,H(e,`clsPrefix`)),v=R(()=>e.clearable&&!e.disabled&&(g.value||e.active)),y=R(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):x(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),b=R(()=>{let t=e.selectedOption;if(t)return t[e.labelField]}),C=R(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function T(){let{value:t}=i;if(t){let{value:n}=a;n&&(n.style.width=`${t.offsetWidth}px`,e.maxTagCount!==`responsive`&&f.value?.sync({showAllItemsBeforeCalculate:!1}))}}function E(){let{value:e}=p;e&&(e.style.display=`none`)}function D(){let{value:e}=p;e&&(e.style.display=`inline-block`)}Ee(H(e,`active`),e=>{e||E()}),Ee(H(e,`pattern`),()=>{e.multiple&&ke(T)});function O(t){let{onFocus:n}=e;n&&n(t)}function k(t){let{onBlur:n}=e;n&&n(t)}function A(t){let{onDeleteOption:n}=e;n&&n(t)}function te(t){let{onClear:n}=e;n&&n(t)}function ne(t){let{onPatternInput:n}=e;n&&n(t)}function re(e){(!e.relatedTarget||!o.value?.contains(e.relatedTarget))&&O(e)}function j(e){o.value?.contains(e.relatedTarget)||k(e)}function M(e){te(e)}function N(){g.value=!0}function ae(){g.value=!1}function oe(t){e.active&&e.filterable&&t.target!==a.value&&t.preventDefault()}function P(e){A(e)}let F=X(!1);function I(t){if(t.key===`Backspace`&&!F.value&&!e.pattern.length){let{selectedOptions:t}=e;t?.length&&P(t[t.length-1])}}let ce=null;function L(t){let{value:n}=i;n&&(n.textContent=t.target.value,T()),e.ignoreComposition&&F.value?ce=t:ne(t)}function le(){F.value=!0}function z(){F.value=!1,e.ignoreComposition&&ne(ce),ce=null}function B(t){h.value=!0,e.onPatternFocus?.(t)}function ue(t){h.value=!1,e.onPatternBlur?.(t)}function V(){if(e.filterable)h.value=!1,l.value?.blur(),a.value?.blur();else if(e.multiple){let{value:e}=s;e?.blur()}else{let{value:e}=c;e?.blur()}}function de(){e.filterable?(h.value=!1,l.value?.focus()):e.multiple?s.value?.focus():c.value?.focus()}function fe(){let{value:e}=a;e&&(D(),e.focus())}function pe(){let{value:e}=a;e&&e.blur()}function me(e){let{value:t}=u;t&&t.setTextContent(`+${e}`)}function he(){let{value:e}=d;return e}function U(){return a.value}let W=null;function ge(){W!==null&&window.clearTimeout(W)}function _e(){e.active||(ge(),W=window.setTimeout(()=>{C.value&&(m.value=!0)},100))}function G(){ge()}function K(e){e||(ge(),m.value=!1)}Ee(C,e=>{e||(m.value=!1)}),we(()=>{Se(()=>{let t=l.value;t&&(e.disabled?t.removeAttribute(`tabindex`):t.tabIndex=h.value?-1:0)})}),Ge(o,e.onResize);let{inlineThemeDisabled:ve}=e,ye=R(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:o,textColor:s,paddingSingle:c,paddingMultiple:l,caretColor:u,colorDisabled:d,textColorDisabled:f,placeholderColorDisabled:p,colorActive:m,boxShadowFocus:h,boxShadowActive:g,boxShadowHover:v,border:y,borderFocus:b,borderHover:x,borderActive:C,arrowColor:w,arrowColorDisabled:T,loadingColor:E,colorActiveWarning:D,boxShadowFocusWarning:O,boxShadowActiveWarning:k,boxShadowHoverWarning:A,borderWarning:ee,borderFocusWarning:te,borderHoverWarning:ne,borderActiveWarning:re,colorActiveError:j,boxShadowFocusError:M,boxShadowActiveError:N,boxShadowHoverError:ie,borderError:ae,borderFocusError:oe,borderHoverError:P,borderActiveError:F,clearColor:I,clearColorHover:ce,clearColorPressed:L,clearSize:R,arrowSize:le,[S(`height`,t)]:z,[S(`fontSize`,t)]:B}}=_.value,ue=se(c),V=se(l);return{"--n-bezier":n,"--n-border":y,"--n-border-active":C,"--n-border-focus":b,"--n-border-hover":x,"--n-border-radius":i,"--n-box-shadow-active":g,"--n-box-shadow-focus":h,"--n-box-shadow-hover":v,"--n-caret-color":u,"--n-color":a,"--n-color-active":m,"--n-color-disabled":d,"--n-font-size":B,"--n-height":z,"--n-padding-single-top":ue.top,"--n-padding-multiple-top":V.top,"--n-padding-single-right":ue.right,"--n-padding-multiple-right":V.right,"--n-padding-single-left":ue.left,"--n-padding-multiple-left":V.left,"--n-padding-single-bottom":ue.bottom,"--n-padding-multiple-bottom":V.bottom,"--n-placeholder-color":o,"--n-placeholder-color-disabled":p,"--n-text-color":s,"--n-text-color-disabled":f,"--n-arrow-color":w,"--n-arrow-color-disabled":T,"--n-loading-color":E,"--n-color-active-warning":D,"--n-box-shadow-focus-warning":O,"--n-box-shadow-active-warning":k,"--n-box-shadow-hover-warning":A,"--n-border-warning":ee,"--n-border-focus-warning":te,"--n-border-hover-warning":ne,"--n-border-active-warning":re,"--n-color-active-error":j,"--n-box-shadow-focus-error":M,"--n-box-shadow-active-error":N,"--n-box-shadow-hover-error":ie,"--n-border-error":ae,"--n-border-focus-error":oe,"--n-border-hover-error":P,"--n-border-active-error":F,"--n-clear-size":R,"--n-clear-color":I,"--n-clear-color-hover":ce,"--n-clear-color-pressed":L,"--n-arrow-size":le,"--n-font-weight":r}}),xe=ve?be(`internal-selection`,R(()=>e.size[0]),ye,e):void 0;return{mergedTheme:_,mergedClearable:v,mergedClsPrefix:t,rtlEnabled:r,patternInputFocused:h,filterablePlaceholder:y,label:b,selected:C,showTagsPanel:m,isComposing:F,counterRef:u,counterWrapperRef:d,patternInputMirrorRef:i,patternInputRef:a,selfRef:o,multipleElRef:s,singleElRef:c,patternInputWrapperRef:l,overflowRef:f,inputTagElRef:p,handleMouseDown:oe,handleFocusin:re,handleClear:M,handleMouseEnter:N,handleMouseLeave:ae,handleDeleteOption:P,handlePatternKeyDown:I,handlePatternInputInput:L,handlePatternInputBlur:ue,handlePatternInputFocus:B,handleMouseEnterCounter:_e,handleMouseLeaveCounter:G,handleFocusout:j,handleCompositionEnd:z,handleCompositionStart:le,onPopoverUpdateShow:K,focus:de,focusInput:fe,blur:V,blurInput:pe,updateCounter:me,getCounter:he,getTail:U,renderLabel:e.renderLabel,cssVars:ve?void 0:ye,themeClass:xe?.themeClass,onRender:xe?.onRender}},render(){let{status:e,multiple:t,size:r,disabled:i,filterable:a,maxTagCount:o,bordered:s,clsPrefix:c,ellipsisTagPopoverProps:l,onRender:u,renderTag:d,renderLabel:f}=this;u?.();let m=o===`responsive`,g=typeof o==`number`,_=m||g,v=(J(),A(Te,null,{default:()=>(J(),A(n,{clsPrefix:c,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>this.$slots.arrow?.()},1032,[`clsPrefix`,`loading`,`showArrow`,`showClear`,`onClear`]))},1024)),y;if(t){let{labelField:e}=this,t=t=>(J(),q(`div`,{class:I(`${c}-base-selection-tag-wrapper`),key:t.value},[d?(J(),q(C,{key:0},[z(()=>d({option:t,handleClose:()=>{this.handleDeleteOption(t)}}))],64)):(J(),A(h,{key:1,size:r,closable:!t.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>f?f(t,!0):x(t[e],t,!0)},1032,[`size`,`closable`,`disabled`,`onClose`]))],2)),n=()=>(g?this.selectedOptions.slice(0,o):this.selectedOptions).map(t),s=a?(J(),q(`div`,{class:I(`${c}-base-selection-input-tag`),ref:`inputTagElRef`,key:`__input-tag__`},[B(`input`,U(this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${c}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd}),null,16,ct),B(`span`,{ref:`patternInputMirrorRef`,class:I(`${c}-base-selection-input-tag__mirror`)},[z(()=>this.pattern)],2)],2)):null,u=m?()=>(J(),q(`div`,{class:I(`${c}-base-selection-tag-wrapper`),ref:`counterWrapperRef`},[(J(),A(h,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i},null,8,[`size`,`onMouseenter`,`onMouseleave`,`disabled`]))],2)):void 0,b;if(g){let e=this.selectedOptions.length-o;e>0&&(b=(t=>(J(),q(`div`,{class:I(`${c}-base-selection-tag-wrapper`),key:`__counter__`},[(J(),A(h,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${e}`},1032,[`size`,`onMouseenter`,`disabled`]))],2)))(b))}let S=m?a?(J(),A(Ue,{key:3,ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:n,counter:u,tail:()=>s},1032,[`updateCounter`,`getCounter`,`getTail`])):(J(),A(Ue,{key:4,ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:n,counter:u},1032,[`updateCounter`,`getCounter`])):g&&b?n().concat(b):n(),w=_?()=>(J(),q(`div`,{class:I(`${c}-base-selection-popover`)},[m?(J(),q(C,{key:0},[z(()=>n())],64)):(J(),q(C,{key:1},[z(()=>this.selectedOptions.map(t))],64))],2)):void 0,T=_?{show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover,...l}:null,E=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?(J(),q(`div`,{key:5,class:I(`${c}-base-selection-placeholder ${c}-base-selection-overlay`)},[B(`div`,{class:I(`${c}-base-selection-placeholder__inner`)},[z(()=>this.placeholder)],2)],2)):null,D=a?(J(),q(`div`,{key:6,ref:`patternInputWrapperRef`,class:I(`${c}-base-selection-tags`)},[z(()=>S),m?z(()=>null):(J(),q(C,{key:1},[z(()=>s)],64)),z(()=>v)],2)):(J(),q(`div`,{key:7,ref:`multipleElRef`,class:I(`${c}-base-selection-tags`),tabindex:i?void 0:0},[z(()=>S),z(()=>v)],10,lt));y=(e=>(J(),q(C,{key:8},[_?(J(),A(p,U({key:0},T,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>D,default:w},1040)):(J(),q(C,{key:1},[z(()=>D)],64)),z(()=>E)],64)))(y)}else if(a){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=!this.active&&this.selected;y=(e=>(J(),q(`div`,{key:9,ref:`patternInputWrapperRef`,class:I(`${c}-base-selection-label`),title:this.patternInputFocused?void 0:We(this.label)},[B(`input`,U(this.inputProps,{ref:`patternInputRef`,class:`${c}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd}),null,16,dt),n?(J(),q(`div`,{class:I(`${c}-base-selection-label__render-label ${c}-base-selection-overlay`),key:`input`},[B(`div`,{class:I(`${c}-base-selection-overlay__wrapper`)},[d?(J(),q(C,{key:0},[z(()=>d({option:this.selectedOption,handleClose:()=>{}}))],64)):(J(),q(C,{key:1},[f?(J(),q(C,{key:0},[z(()=>f(this.selectedOption,!0))],64)):(J(),q(C,{key:1},[z(()=>x(this.label,this.selectedOption,!0))],64))],64))],2)],2)):z(()=>null),t?(J(),q(`div`,{class:I(`${c}-base-selection-placeholder ${c}-base-selection-overlay`),key:`placeholder`},[B(`div`,{class:I(`${c}-base-selection-overlay__wrapper`)},[z(()=>this.filterablePlaceholder)],2)],2)):z(()=>null),z(()=>v)],10,ut)))(y)}else y=(e=>(J(),q(`div`,{key:10,ref:`singleElRef`,class:I(`${c}-base-selection-label`),tabindex:this.disabled?void 0:0},[this.label===void 0?(J(),q(`div`,{class:I(`${c}-base-selection-placeholder ${c}-base-selection-overlay`),key:`placeholder`},[B(`div`,{class:I(`${c}-base-selection-placeholder__inner`)},[z(()=>this.placeholder)],2)],2)):(J(),q(`div`,{class:I(`${c}-base-selection-input`),title:We(this.label),key:`input`},[B(`div`,{class:I(`${c}-base-selection-input__content`)},[d?(J(),q(C,{key:0},[z(()=>d({option:this.selectedOption,handleClose:()=>{}}))],64)):(J(),q(C,{key:1},[f?(J(),q(C,{key:0},[z(()=>f(this.selectedOption,!0))],64)):(J(),q(C,{key:1},[z(()=>x(this.label,this.selectedOption,!0))],64))],64))],2)],10,[`title`])),z(()=>v)],10,ft)))(y);return J(),q(`div`,{ref:`selfRef`,class:I([`${c}-base-selection`,this.rtlEnabled&&`${c}-base-selection--rtl`,this.themeClass,e&&`${c}-base-selection--${e}-status`,{[`${c}-base-selection--active`]:this.active,[`${c}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${c}-base-selection--disabled`]:this.disabled,[`${c}-base-selection--multiple`]:this.multiple,[`${c}-base-selection--focus`]:this.focused}]),style:T(this.cssVars),onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},[z(()=>y),s?(J(),q(`div`,{key:0,class:I(`${c}-base-selection__border`)},null,2)):z(()=>null),s?(J(),q(`div`,{key:2,class:I(`${c}-base-selection__state-border`)},null,2)):z(()=>null)],46,pt)}}),ht=Y([L(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),L(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[M({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),gt={...ie.props,to:c.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array},_t=V({name:`Select`,props:gt,slots:Object,setup(n){let{mergedClsPrefixRef:r,mergedBorderedRef:i,namespaceRef:a,inlineThemeDisabled:s,mergedComponentPropsRef:u}=ee(n),d=ie(`Select`,`-select`,ht,pe,n,r),f=X(n.defaultValue),p=H(n,`value`),m=t(p,f),h=X(!1),_=X(``),v=g(n,[`items`,`options`]),y=X([]),b=X([]),x=R(()=>b.value.concat(y.value).concat(v.value)),S=R(()=>{let{filter:e}=n;if(e)return e;let{labelField:t,valueField:r}=n;return(e,n)=>{if(!n)return!1;let i=n[t];if(typeof i==`string`)return rt(e,i);let a=n[r];return typeof a==`string`?rt(e,a):typeof a==`number`&&rt(e,String(a))}}),C=R(()=>{if(n.remote)return v.value;{let{value:e}=x,{value:t}=_;return!t.length||!n.filterable?e:at(e,S.value,t,n.childrenField)}}),w=R(()=>{let{valueField:e,childrenField:t}=n,r=it(e,t);return l(C.value,r)}),T=R(()=>ot(x.value,n.valueField,n.childrenField)),E=X(!1),D=t(H(n,`show`),E),O=X(null),k=X(null),A=X(null),{localeRef:ne}=e(`Select`),re=R(()=>n.placeholder??ne.value.placeholder),j=[],M=X(new Map),N=R(()=>{let{fallbackOption:e}=n;if(e===void 0){let{labelField:e,valueField:t}=n;return n=>({[e]:String(n),[t]:n})}return e===!1?!1:t=>Object.assign(e(t),{value:t})});function ae(e){let t=n.remote,{value:r}=M,{value:i}=T,{value:a}=N,o=[];return e.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(t&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let oe=R(()=>{if(n.multiple){let{value:e}=m;return Array.isArray(e)?ae(e):[]}return null}),se=R(()=>{let{value:e}=m;return!n.multiple&&!Array.isArray(e)?e===null?null:ae([e])[0]||null:null}),P=F(n,{mergedSize:e=>{let{size:t}=n;if(t)return t;let{mergedSize:r}=e||{};return r?.value?r.value:u?.value?.Select?.size||`medium`}}),{mergedSizeRef:I,mergedDisabledRef:L,mergedStatusRef:le}=P;function z(e,t){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=n,{nTriggerFormChange:o,nTriggerFormInput:s}=P;r&&G(r,e,t),a&&G(a,e,t),i&&G(i,e,t),f.value=e,o(),s()}function B(e){let{onBlur:t}=n,{nTriggerFormBlur:r}=P;t&&G(t,e),r()}function ue(){let{onClear:e}=n;e&&G(e)}function V(e){let{onFocus:t,showOnFocus:r}=n,{nTriggerFormFocus:i}=P;t&&G(t,e),i(),r&&U()}function de(e){let{onSearch:t}=n;t&&G(t,e)}function fe(e){let{onScroll:t}=n;t&&G(t,e)}function me(){let{remote:e,multiple:t}=n;if(e){let{value:e}=M;if(t){let{valueField:t}=n;oe.value?.forEach(n=>{e.set(n[t],n)})}else{let t=se.value;t&&e.set(t[n.valueField],t)}}}function he(e){let{onUpdateShow:t,"onUpdate:show":r}=n;t&&G(t,e),r&&G(r,e),E.value=e}function U(){L.value||(he(!0),E.value=!0,n.filterable&&Pe())}function W(){he(!1)}function ge(){_.value=``,b.value=j}let K=X(!1);function ve(){n.filterable&&(K.value=!0)}function ye(){n.filterable&&(K.value=!1,D.value||ge())}function xe(){L.value||(D.value?n.filterable?Pe():W():U())}function Se(e){A.value?.selfRef?.contains(e.relatedTarget)||(h.value=!1,B(e),W())}function Ce(e){V(e),h.value=!0}function we(){h.value=!0}function Te(e){O.value?.$el.contains(e.relatedTarget)||(h.value=!1,B(e),W())}function q(){O.value?.focus(),W()}function De(e){D.value&&(O.value?.$el.contains(te(e))||W())}function J(e){if(!Array.isArray(e))return[];if(N.value)return Array.from(e);{let{remote:t}=n,{value:r}=T;if(t){let{value:t}=M;return e.filter(e=>r.has(e)||t.has(e))}return e.filter(e=>r.has(e))}}function Oe(e){ke(e.rawNode)}function ke(e){if(L.value)return;let{tag:t,remote:r,clearFilterAfterSelect:i,valueField:a}=n;if(t&&!r){let{value:e}=b,t=e[0]||null;if(t){let e=y.value;e.length?e.push(t):y.value=[t],b.value=j}}if(r&&M.value.set(e[a],e),n.multiple){let n=J(m.value),o=n.findIndex(t=>t===e[a]);if(~o){if(n.splice(o,1),t&&!r){let t=Ae(e[a]);~t&&(y.value.splice(t,1),i&&(_.value=``))}}else n.push(e[a]),i&&(_.value=``);z(n,ae(n))}else{if(t&&!r){let t=Ae(e[a]);~t?y.value=[y.value[t]]:y.value=j}Ne(),W(),z(e[a],e)}}function Ae(e){return y.value.findIndex(t=>t[n.valueField]===e)}function Y(e){D.value||U();let{value:t}=e.target;_.value=t;let{tag:r,remote:i}=n;if(de(t),r&&!i){if(!t){b.value=j;return}let{onCreate:e}=n,r=e?e(t):{[n.labelField]:t,[n.valueField]:t},{valueField:i,labelField:a}=n;v.value.some(e=>e[i]===r[i]||e[a]===r[a])||y.value.some(e=>e[i]===r[i]||e[a]===r[a])?b.value=j:b.value=[r]}}function Z(e){e.stopPropagation();let{multiple:t,tag:r,remote:i,clearCreatedOptionsOnClear:a}=n;!t&&n.filterable&&W(),r&&!i&&a&&(y.value=j),ue(),t?z([],[]):z(null,null)}function Q(e){!o(e,`action`)&&!o(e,`empty`)&&!o(e,`header`)&&e.preventDefault()}function je(e){fe(e)}function Me(e){if(!n.keyboard){e.preventDefault();return}switch(e.key){case` `:if(n.filterable)break;e.preventDefault();case`Enter`:if(!O.value?.isComposing){if(D.value){let e=A.value?.getPendingTmNode();e?Oe(e):n.filterable||(W(),Ne())}else if(U(),n.tag&&K.value){let e=b.value[0];if(e){let t=e[n.valueField],{value:r}=m;n.multiple&&Array.isArray(r)&&r.includes(t)||ke(e)}}}e.preventDefault();break;case`ArrowUp`:if(e.preventDefault(),n.loading)return;D.value&&A.value?.prev();break;case`ArrowDown`:if(e.preventDefault(),n.loading)return;D.value?A.value?.next():U();break;case`Escape`:D.value&&(ce(e),W()),O.value?.focus()}}function Ne(){O.value?.focus()}function Pe(){O.value?.focusInput()}function Fe(){D.value&&k.value?.syncPosition()}me(),Ee(H(n,`options`),me);let Ie={focus:()=>{O.value?.focus()},focusInput:()=>{O.value?.focusInput()},blur:()=>{O.value?.blur()},blurInput:()=>{O.value?.blurInput()}},Le=R(()=>{let{self:{menuBoxShadow:e}}=d.value;return{"--n-menu-box-shadow":e}}),Re=s?be(`select`,void 0,Le,n):void 0;return{...Ie,mergedStatus:le,mergedClsPrefix:r,mergedBordered:i,namespace:a,treeMate:w,isMounted:_e(),triggerRef:O,menuRef:A,pattern:_,uncontrolledShow:E,mergedShow:D,adjustedTo:c(n),uncontrolledValue:f,mergedValue:m,followerRef:k,localizedPlaceholder:re,selectedOption:se,selectedOptions:oe,mergedSize:I,mergedDisabled:L,focused:h,activeWithoutMenuOpen:K,inlineThemeDisabled:s,onTriggerInputFocus:ve,onTriggerInputBlur:ye,handleTriggerOrMenuResize:Fe,handleMenuFocus:we,handleMenuBlur:Te,handleMenuTabOut:q,handleTriggerClick:xe,handleToggle:Oe,handleDeleteOption:ke,handlePatternInput:Y,handleClear:Z,handleTriggerBlur:Se,handleTriggerFocus:Ce,handleKeydown:Me,handleMenuAfterLeave:ge,handleMenuClickOutside:De,handleMenuScroll:je,handleMenuKeydown:Me,handleMenuMousedown:Q,mergedTheme:d,cssVars:s?void 0:Le,themeClass:Re?.themeClass,onRender:Re?.onRender}},render(){return J(),q(`div`,{class:I(`${this.mergedClsPrefix}-select`)},[de(f,null,{_:1,default:Q(()=>[(J(),A(r,null,{_:1,default:Q(()=>(J(),A(mt,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{_:1,arrow:Q(()=>[this.$slots.arrow?.()])},8,`inlineThemeDisabled.status.inputProps.clsPrefix.showArrow.maxTagCount.ellipsisTagPopoverProps.bordered.active.pattern.placeholder.selectedOption.selectedOptions.multiple.renderTag.renderLabel.filterable.clearable.disabled.size.theme.labelField.valueField.themeOverrides.loading.focused.onClick.onDeleteOption.onPatternInput.onClear.onBlur.onFocus.onKeydown.onPatternBlur.onPatternFocus.onResize.ignoreComposition`.split(`.`))))})),(J(),A(s,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===c.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{_:1,default:Q(()=>(J(),A(oe,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{_:1,default:Q(()=>this.mergedShow||this.displayDirective===`show`?(this.onRender?.(),ge((J(),A(et,U(this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{_:1,empty:Q(()=>[this.$slots.empty?.()]),header:Q(()=>[this.$slots.header?.()]),action:Q(()=>[this.$slots.action?.()])},16,`onResize.inlineThemeDisabled.virtualScroll.class.clsPrefix.labelField.valueField.nodeProps.theme.themeOverrides.treeMate.multiple.size.renderOption.renderLabel.value.style.onToggle.onScroll.onFocus.onBlur.onKeydown.onTabOut.onMousedown.show.showCheckmark.resetMenuOnOptionsChange.scrollbarProps`.split(`.`))),this.displayDirective===`show`?[[ne,this.mergedShow],[De,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[De,this.handleMenuClickOutside,void 0,{capture:!0}]])):null)},8,[`appear`,`onAfterLeave`])))},8,[`show`,`to`,`teleportDisabled`,`containerClass`,`width`,`placement`]))])})],2)}});export{Ke as n,_t as t};