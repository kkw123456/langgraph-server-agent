import{a as e,i as t,r as n}from"./createLucideIcon-DTZipSeT.js";import{A as r,D as i,E as a,M as o,O as s,S as c,T as l,b as u,j as d,k as f,x as p}from"./workbench-CJilD2V2.js";import{S as m,b as h}from"./store-UWf7_oX3.js";import{i as g,n as _,r as v}from"./plus-D7vuENJ3.js";import{$ as y,A as b,Ar as x,C as S,Dr as C,Dt as w,Et as ee,Ft as T,Gt as te,Hn as E,It as ne,Jn as D,Lr as O,Lt as re,Nr as k,Nt as A,O as ie,Or as ae,Ot as oe,P as j,Pr as M,Pt as N,R as se,Rn as P,Rt as F,S as ce,Sr as le,Un as I,Ut as ue,Vn as L,Vt as R,Wn as de,X as z,Zn as B,ar as V,b as fe,br as pe,dt as me,er as H,et as he,fr as U,gr as ge,gt as _e,hr as W,ht as G,ir as K,k as q,kt as ve,lr as ye,lt as be,mr as J,ot as xe,pr as Se,rr as Y,rt as Ce,sr as X,st as we,ur as Z,vr as Te,wr as Ee,xr as Q,yr as De,yt as Oe,zn as $,zt as ke}from"./index-BKnoSBpI.js";function Ae(e){return e&-e}var je=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=Ae(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=Ae(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},Me;function Ne(){return typeof document>`u`?!1:(Me===void 0&&(Me=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches),Me)}var Pe;function Fe(){return typeof document>`u`?1:(Pe===void 0&&(Pe=`chrome`in window?window.devicePixelRatio:1),Pe)}var Ie=`VVirtualListXScroll`;function Le({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let r=k(0),i=k(0),a=Y(()=>{let t=e.value;if(t.length===0)return null;let n=new je(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n}),o=Oe(()=>{let e=a.value;return e===null?0:Math.max(e.getBound(i.value)-1,0)}),s=e=>{let t=a.value;return t===null?0:t.sum(e)},c=Oe(()=>{let t=a.value;return t===null?0:Math.min(t.getBound(i.value+r.value)+1,e.value.length-1)});return le(Ie,{startIndexRef:o,endIndexRef:c,columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:s}),{listWidthRef:r,scrollLeftRef:i}}var Re=Z({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=Se(Ie);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),ze=_(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[_(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[_(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),Be=Z({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){let t=ue();ze.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:v,ssr:t}),pe(()=>{let{defaultScrollIndex:t,defaultScrollKey:n}=e;t==null?n!=null&&_({key:n}):_({index:t})});let n=!1,r=!1;ge(()=>{if(n=!1,!r){r=!0;return}_({top:m.value,left:s.value})}),De(()=>{n=!0,r||=!0});let i=Oe(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let t=0;return e.columns.forEach(e=>{t+=e.width}),t}),a=Y(()=>{let t=new Map,{keyField:n}=e;return e.items.forEach((e,r)=>{t.set(e[n],r)}),t}),{scrollLeftRef:s,listWidthRef:c}=Le({columnsRef:M(e,`columns`),renderColRef:M(e,`renderCol`),renderItemWithColsRef:M(e,`renderItemWithCols`)}),l=k(null),u=k(void 0),d=new Map,f=Y(()=>{let{items:t,itemSize:n,keyField:r}=e,i=new je(t.length,n);return t.forEach((e,t)=>{let n=e[r],a=d.get(n);a!==void 0&&i.add(t,a)}),i}),p=k(0),m=k(0),h=Oe(()=>Math.max(f.value.getBound(m.value-A(e.paddingTop))-1,0)),g=Y(()=>{let{value:t}=u;if(t===void 0)return[];let{items:n,itemSize:r}=e,i=h.value,a=Math.min(i+Math.ceil(t/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),_=(e,t)=>{if(typeof e==`number`){S(e,t,`auto`);return}let{left:n,top:r,index:i,key:o,position:s,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)S(n,r,c);else if(i!==void 0)x(i,c,l);else if(o!==void 0){let e=a.value.get(o);e!==void 0&&x(e,c,l)}else s===`bottom`?S(0,2**53-1,c):s===`top`&&S(0,0,c)},y,b=null;function x(t,n,r){let i=l.value;if(i==null)return;let{value:a}=f,o=a.sum(t)+A(e.paddingTop);if(!r)i.scrollTo({left:0,top:o,behavior:n});else{y=t,b!==null&&window.clearTimeout(b),b=window.setTimeout(()=>{y=void 0,b=null},16);let{scrollTop:e,offsetHeight:r}=i;if(o>e){let s=a.get(t);o+s<=e+r||i.scrollTo({left:0,top:o+s-r,behavior:n})}else i.scrollTo({left:0,top:o,behavior:n})}}function S(e,t,n){l.value?.scrollTo({left:e,top:t,behavior:n})}function C(t,r){if(n||e.ignoreItemResize||O(r.target))return;let{value:i}=f,o=a.value.get(t),s=i.get(o),c=r.borderBoxSize?.[0]?.blockSize??r.contentRect.height;if(c===s)return;c-e.itemSize===0?d.delete(t):d.set(t,c-e.itemSize);let u=c-s;if(u===0)return;i.add(o,u);let m=l.value;if(m!=null){if(y===void 0){let e=i.sum(o);m.scrollTop>e&&m.scrollBy(0,u)}else(o<y||o===y&&c+i.sum(o)>m.scrollTop+m.offsetHeight)&&m.scrollBy(0,u);D()}p.value++}let w=!Ne(),ee=!1;function te(t){var n;(n=e.onScroll)==null||n.call(e,t),(!w||!ee)&&D()}function E(t){var n;if((n=e.onWheel)==null||n.call(e,t),w){let e=l.value;if(e!=null){if(t.deltaX===0&&(e.scrollTop===0&&t.deltaY<=0||e.scrollTop+e.offsetHeight>=e.scrollHeight&&t.deltaY>=0))return;t.preventDefault(),e.scrollTop+=t.deltaY/Fe(),e.scrollLeft+=t.deltaX/Fe(),D(),ee=!0,o(()=>{ee=!1})}}}function ne(t){if(n||O(t.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(t.contentRect.height===u.value)return}else if(t.contentRect.height===u.value&&t.contentRect.width===c.value)return;u.value=t.contentRect.height,c.value=t.contentRect.width;let{onResize:r}=e;r!==void 0&&r(t)}function D(){let{value:e}=l;e!=null&&(m.value=e.scrollTop,s.value=e.scrollLeft)}function O(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:u,listStyle:{overflow:`auto`},keyToIndex:a,itemsStyle:Y(()=>{let{itemResizable:t}=e,n=T(f.value.sum());return p.value,[e.itemsStyle,{boxSizing:`content-box`,width:T(i.value),height:t?``:n,minHeight:t?n:``,paddingTop:T(e.paddingTop),paddingBottom:T(e.paddingBottom)}]}),visibleItemsStyle:Y(()=>(p.value,{transform:`translateY(${T(f.value.sum(h.value))})`})),viewportItems:g,listElRef:l,itemsElRef:k(null),scrollTo:_,handleListResize:ne,handleListScroll:te,handleListWheel:E,handleItemResize:C}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return U(y,{onResize:this.handleListResize},{default:()=>{var i;return U(`div`,J(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(i=this.$slots).empty?.call(i):U(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[U(r,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:i}=this;return this.viewportItems.map(a=>{let o=a[t],s=n.get(o),c=r==null?void 0:U(Re,{index:s,item:a}),l=i==null?void 0:U(Re,{index:s,item:a}),u=this.$slots.default({item:a,renderedCols:c,renderedItemWithCols:l,index:s})[0];return e?U(y,{key:o,onResize:e=>this.handleItemResize(o,e)},{default:()=>u}):(u.key=o,u)})}})])])}})}}),Ve=`v-hidden`,He=_(`[v-hidden]`,{display:`none!important`}),Ue=Z({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=k(null),r=k(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute(Ve)&&c.removeAttribute(Ve);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute(Ve)&&e.removeAttribute(Ve);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute(Ve)||n.setAttribute(Ve,``);continue}n.hasAttribute(Ve)&&n.removeAttribute(Ve);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute(Ve,``))}let a=ue();return He.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:v,ssr:a}),pe(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return W(()=>this.sync({showAllItemsBeforeCalculate:!1})),U(`div`,{class:`v-overflow`,ref:`selfRef`},[Ee(e,`default`),e.counter?e.counter():U(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function We(e){switch(typeof e){case`string`:return e||void 0;case`number`:return String(e);default:return}}function Ge(e,t){t&&(pe(()=>{let{value:n}=e;n&&he.registerHandler(n,t)}),C(e,(e,t)=>{t&&he.unregisterHandler(t)},{deep:!1}),Te(()=>{let{value:t}=e;t&&he.unregisterHandler(t)}))}var Ke=Z({props:{onFocus:Function,onBlur:Function},setup(e){return()=>(()=>{let t=re(`d16ead82505dc285`);return Q(),X(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:t[0]||=t=>e.onFocus?.(t),onBlur:t[1]||=t=>e.onBlur?.(t)},null,32)})()}}),qe=Z({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:i}=Se(r);return{labelField:n,nodeProps:i,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):b(i[this.labelField],i,!1),s=(Q(),X(`div`,J(a,{class:[`${e}-base-select-group-header`,a?.class]}),[R(()=>o)],16));return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}}),Je=Z({name:`Checkmark`,render(){return(()=>{let e=re(`3c84eac8ae4e1f96`);return e[0]||=K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},[K(`g`,{fill:`none`},[K(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})])],-1)})()}}),Ye=[`onClick`,`onMouseenter`,`onMousemove`];function Xe(e,t){return Q(),V(D,{name:`fade-in-scale-up-transition`},{default:()=>e?(Q(),V(w,{key:1,clsPrefix:t,class:F(`${t}-base-select-option__check`)},{default:()=>U(Je)},1032,[`clsPrefix`,`class`])):null},1024)}var Ze=Z({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:i,valueSetRef:a,renderLabelRef:o,renderOptionRef:s,labelFieldRef:c,valueFieldRef:l,showCheckmarkRef:u,nodePropsRef:d,handleOptionClick:f,handleOptionMouseEnter:p}=Se(r),m=Oe(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e;n.disabled||p(t,n)}function _(t){let{tmNode:n}=e,{value:r}=m;n.disabled||r||p(t,n)}return{multiple:i,isGrouped:Oe(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:u,nodeProps:d,isPending:m,isSelected:Oe(()=>{let{value:n}=t,{value:r}=i;if(n===null)return!1;let o=e.tmNode.rawNode[l.value];if(r){let{value:e}=a;return e.has(o)}return n===o}),labelField:c,renderLabel:o,renderOption:s,handleMouseMove:_,handleMouseEnter:g,handleClick:h}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:s,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,f=Xe(n,e),p=c?[c(t,n),a&&f]:[b(t[this.labelField],t,n),a&&f],m=o?.(t),h=(Q(),X(`div`,J(m,{class:[`${e}-base-select-option`,t.class,m?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[m?.style||``,t.style||``],onClick:q([l,m?.onClick]),onMouseenter:q([u,m?.onMouseenter]),onMousemove:q([d,m?.onMousemove])}),[K(`div`,{class:F(`${e}-base-select-option__content`)},[R(()=>p)],2)],16,Ye));return t.render?t.render({node:h,option:t,selected:n}):s?s({node:h,option:t,selected:n}):h}}),Qe=$(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[$(`scrollbar`,`
 max-height: var(--n-height);
 `),$(`virtual-list`,`
 max-height: var(--n-height);
 `),$(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[L(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),$(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),$(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),L(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),L(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),L(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),L(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),$(`base-select-option`,`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[E(`show-checkmark`,`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),P(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),P(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),E(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),E(`pending`,[P(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),E(`selected`,`
 color: var(--n-option-text-color-active);
 `,[P(`&::before`,`
 background-color: var(--n-option-color-active);
 `),E(`pending`,[P(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),E(`disabled`,`
 cursor: not-allowed;
 `,[I(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),E(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),L(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[ie({enterScale:`0.5`})])])]),$e=[`tabindex`,`onFocusin`,`onFocusout`,`onKeyup`,`onKeydown`,`onMousedown`,`onMouseenter`,`onMouseleave`],et=Z({name:`InternalSelectMenu`,props:{...oe.props,clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function},setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n,mergedComponentPropsRef:i}=te(e),a=we(`InternalSelectMenu`,n,t),o=oe(`InternalSelectMenu`,`-internal-select-menu`,Qe,ee,e,M(e,`clsPrefix`)),s=k(null),c=k(null),l=k(null),u=Y(()=>e.treeMate.getFlattenedNodes()),m=Y(()=>p(u.value)),h=k(null);function g(){let{treeMate:t}=e,n=null,{value:r}=e;r===null?n=t.getFirstAvailableNode():(n=e.multiple?t.getNode((r||[])[(r||[]).length-1]):t.getNode(r),(!n||n.disabled)&&(n=t.getFirstAvailableNode())),ce(n||null)}function _(){let{value:t}=h;t&&!e.treeMate.getNode(t.key)&&(h.value=null)}let v;C(()=>e.show,t=>{t?v=C(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():_(),W(I)):_()},{immediate:!0}):v?.()},{immediate:!0}),Te(()=>{v?.()});let y=Y(()=>A(o.value.self[de(`optionHeight`,e.size)])),b=Y(()=>N(o.value.self[de(`padding`,e.size)])),x=Y(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),S=Y(()=>{let e=u.value;return e&&e.length===0}),w=Y(()=>i?.value?.Select?.renderEmpty);function T(t){let{onToggle:n}=e;n&&n(t)}function E(t){let{onScroll:n}=e;n&&n(t)}function ne(e){l.value?.sync(),E(e)}function D(){l.value?.sync()}function O(){let{value:e}=h;return e||null}function re(e,t){t.disabled||ce(t,!1)}function ie(e,t){t.disabled||T(t)}function ae(t){d(t,`action`)||e.onKeyup?.(t)}function j(t){d(t,`action`)||e.onKeydown?.(t)}function se(t){e.onMousedown?.(t),!e.focusable&&t.preventDefault()}function P(){let{value:e}=h;e&&ce(e.getNext({loop:!0}),!0)}function F(){let{value:e}=h;e&&ce(e.getPrev({loop:!0}),!0)}function ce(e,t=!1){h.value=e,t&&I()}function I(){let t=h.value;if(!t)return;let n=m.value(t.key);n!==null&&(e.virtualScroll?c.value?.scrollTo({index:n}):l.value?.scrollTo({index:n,elSize:y.value}))}function ue(t){s.value?.contains(t.target)&&e.onFocus?.(t)}function L(t){s.value?.contains(t.relatedTarget)||e.onBlur?.(t)}le(r,{handleOptionMouseEnter:re,handleOptionClick:ie,valueSetRef:x,pendingTmNodeRef:h,nodePropsRef:M(e,`nodeProps`),showCheckmarkRef:M(e,`showCheckmark`),multipleRef:M(e,`multiple`),valueRef:M(e,`value`),renderLabelRef:M(e,`renderLabel`),renderOptionRef:M(e,`renderOption`),labelFieldRef:M(e,`labelField`),valueFieldRef:M(e,`valueField`)}),le(f,s),pe(()=>{let{value:e}=l;e&&e.sync()});let R=Y(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:s,actionDividerColor:c,optionTextColorPressed:l,optionTextColor:u,optionTextColorDisabled:d,optionTextColorActive:f,optionOpacityDisabled:p,optionCheckColor:m,actionTextColor:h,optionColorPending:g,optionColorActive:_,loadingColor:v,loadingSize:y,optionColorActivePending:b,[de(`optionFontSize`,t)]:x,[de(`optionHeight`,t)]:S,[de(`optionPadding`,t)]:C}}=o.value;return{"--n-height":r,"--n-action-divider-color":c,"--n-action-text-color":h,"--n-bezier":n,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":x,"--n-group-header-text-color":s,"--n-option-check-color":m,"--n-option-color-pending":g,"--n-option-color-active":_,"--n-option-color-active-pending":b,"--n-option-height":S,"--n-option-opacity-disabled":p,"--n-option-text-color":u,"--n-option-text-color-active":f,"--n-option-text-color-disabled":d,"--n-option-text-color-pressed":l,"--n-option-padding":C,"--n-option-padding-left":N(C,`left`),"--n-option-padding-right":N(C,`right`),"--n-loading-color":v,"--n-loading-size":y}}),{inlineThemeDisabled:z}=e,B=z?ve(`internal-select-menu`,Y(()=>e.size[0]),R,e):void 0,V={selfRef:s,next:P,prev:F,getPendingTmNode:O};return Ge(s,e.onResize),{mergedTheme:o,mergedClsPrefix:t,rtlEnabled:a,virtualListRef:c,scrollbarRef:l,itemSize:y,padding:b,flattenedNodes:u,empty:S,mergedRenderEmpty:w,virtualListContainer(){let{value:e}=c;return e?.listElRef},virtualListContent(){let{value:e}=c;return e?.itemsElRef},doScroll:E,handleFocusin:ue,handleFocusout:L,handleKeyUp:ae,handleKeyDown:j,handleMouseDown:se,handleVirtualListResize:D,handleVirtualListScroll:ne,cssVars:z?void 0:R,themeClass:B?.themeClass,onRender:B?.onRender,...V}},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:i,onRender:a}=this;return a?.(),Q(),X(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:F([`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`]),style:O(this.cssVars),onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[R(()=>me(e.header,e=>e&&(Q(),X(`div`,{class:F(`${n}-base-select-menu__header`),"data-header":!0,key:`header`},[R(()=>e)],2)))),this.loading?(Q(),X(`div`,{key:0,class:F(`${n}-base-select-menu__loading`)},[(Q(),V(j,{clsPrefix:n,strokeWidth:20},null,8,[`clsPrefix`]))],2)):(Q(),X(H,{key:1},[this.empty?(Q(),X(`div`,{key:1,class:F(`${n}-base-select-menu__empty`),"data-empty":!0},[R(()=>be(e.empty,()=>[this.mergedRenderEmpty?.()||(Q(),V(m,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size},null,8,[`theme`,`themeOverrides`,`size`]))]))],2)):(Q(),V(z,J({key:0,ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?(Q(),V(Be,{key:1,ref:`virtualListRef`,class:F(`${n}-virtual-list`),items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?(Q(),V(qe,{key:e.key,clsPrefix:n,tmNode:e},null,8,[`clsPrefix`,`tmNode`])):e.ignored?null:(Q(),V(Ze,{clsPrefix:n,key:e.key,tmNode:e},null,8,[`clsPrefix`,`tmNode`]))},1032,[`class`,`items`,`itemSize`,`paddingTop`,`paddingBottom`,`onResize`,`onScroll`])):(Q(),X(`div`,{key:4,class:F(`${n}-base-select-menu-option-wrapper`),style:O({paddingTop:this.padding.top,paddingBottom:this.padding.bottom})},[R(()=>this.flattenedNodes.map(e=>e.isGroup?(Q(),V(qe,{key:e.key,clsPrefix:n,tmNode:e},null,8,[`clsPrefix`,`tmNode`])):(Q(),V(Ze,{clsPrefix:n,key:e.key,tmNode:e},null,8,[`clsPrefix`,`tmNode`]))))],6))},1040,[`theme`,`themeOverrides`,`scrollable`,`container`,`content`,`onScroll`]))],64)),R(()=>me(e.action,e=>e&&[(Q(),X(`div`,{class:F(`${n}-base-select-menu__action`),"data-action":!0,key:`action`},[R(()=>e)],2)),(Q(),V(Ke,{onFocus:this.onTabOut,key:`focus-detector`},null,8,[`onFocus`]))]))],46,$e)}});function tt(e){return e.type===`group`}function nt(e){return e.type===`ignored`}function rt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function it(e,t){return{getIsGroup:tt,getIgnored:nt,getKey(t){return tt(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function at(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(tt(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(nt(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function ot(e,t,n){let r=new Map;return e.forEach(e=>{tt(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var st=P([$(`base-selection`,`
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
 `,[$(`base-loading`,`
 color: var(--n-loading-color);
 `),$(`base-selection-tags`,`min-height: var(--n-height);`),L(`border, state-border`,`
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
 `),L(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),$(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[L(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),$(`base-selection-overlay`,`
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
 `,[L(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),$(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[L(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),$(`base-selection-tags`,`
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
 `),$(`base-selection-label`,`
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
 `,[$(`base-selection-input`,`
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
 `,[L(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),L(`render-label`,`
 color: var(--n-text-color);
 `)]),I(`disabled`,[P(`&:hover`,[L(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),E(`focus`,[L(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),E(`active`,[L(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),$(`base-selection-label`,`background-color: var(--n-color-active);`),$(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),E(`disabled`,`cursor: not-allowed;`,[L(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),$(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[$(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),L(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),$(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),$(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),$(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[L(`input`,`
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
 `),L(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>E(`${e}-status`,[L(`state-border`,`border: var(--n-border-${e});`),I(`disabled`,[P(`&:hover`,[L(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),E(`active`,[L(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),$(`base-selection-label`,`background-color: var(--n-color-active-${e});`),$(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),E(`focus`,[L(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),$(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),$(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[P(`&:last-child`,`padding-right: 0;`),$(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[L(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ct=[`disabled`,`value`,`autofocus`,`onBlur`,`onFocus`,`onKeydown`,`onInput`,`onCompositionstart`,`onCompositionend`],lt=[`tabindex`],ut=[`title`],dt=[`value`,`readonly`,`disabled`,`autofocus`,`onFocus`,`onBlur`,`onInput`,`onCompositionstart`,`onCompositionend`],ft=[`tabindex`],pt=[`onClick`,`onMouseenter`,`onMouseleave`,`onKeydown`,`onFocusin`,`onFocusout`,`onMousedown`],mt=Z({name:`InternalSelection`,props:{...oe.props,clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function},setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n}=te(e),r=we(`InternalSelection`,n,t),i=k(null),a=k(null),o=k(null),s=k(null),c=k(null),l=k(null),u=k(null),d=k(null),f=k(null),p=k(null),m=k(!1),h=k(!1),g=k(!1),_=oe(`InternalSelection`,`-internal-selection`,st,S,e,M(e,`clsPrefix`)),v=Y(()=>e.clearable&&!e.disabled&&(g.value||e.active)),y=Y(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):b(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),x=Y(()=>{let t=e.selectedOption;if(t)return t[e.labelField]}),w=Y(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function ee(){let{value:t}=i;if(t){let{value:n}=a;n&&(n.style.width=`${t.offsetWidth}px`,e.maxTagCount!==`responsive`&&f.value?.sync({showAllItemsBeforeCalculate:!1}))}}function T(){let{value:e}=p;e&&(e.style.display=`none`)}function E(){let{value:e}=p;e&&(e.style.display=`inline-block`)}C(M(e,`active`),e=>{e||T()}),C(M(e,`pattern`),()=>{e.multiple&&W(ee)});function ne(t){let{onFocus:n}=e;n&&n(t)}function D(t){let{onBlur:n}=e;n&&n(t)}function O(t){let{onDeleteOption:n}=e;n&&n(t)}function re(t){let{onClear:n}=e;n&&n(t)}function A(t){let{onPatternInput:n}=e;n&&n(t)}function ie(e){(!e.relatedTarget||!o.value?.contains(e.relatedTarget))&&ne(e)}function j(e){o.value?.contains(e.relatedTarget)||D(e)}function se(e){re(e)}function P(){g.value=!0}function F(){g.value=!1}function ce(t){e.active&&e.filterable&&t.target!==a.value&&t.preventDefault()}function le(e){O(e)}let I=k(!1);function ue(t){if(t.key===`Backspace`&&!I.value&&!e.pattern.length){let{selectedOptions:t}=e;t?.length&&le(t[t.length-1])}}let L=null;function R(t){let{value:n}=i;n&&(n.textContent=t.target.value,ee()),e.ignoreComposition&&I.value?L=t:A(t)}function z(){I.value=!0}function B(){I.value=!1,e.ignoreComposition&&A(L),L=null}function V(t){h.value=!0,e.onPatternFocus?.(t)}function fe(t){h.value=!1,e.onPatternBlur?.(t)}function me(){if(e.filterable)h.value=!1,l.value?.blur(),a.value?.blur();else if(e.multiple){let{value:e}=s;e?.blur()}else{let{value:e}=c;e?.blur()}}function H(){e.filterable?(h.value=!1,l.value?.focus()):e.multiple?s.value?.focus():c.value?.focus()}function he(){let{value:e}=a;e&&(E(),e.focus())}function U(){let{value:e}=a;e&&e.blur()}function ge(e){let{value:t}=u;t&&t.setTextContent(`+${e}`)}function _e(){let{value:e}=d;return e}function G(){return a.value}let K=null;function q(){K!==null&&window.clearTimeout(K)}function ye(){e.active||(q(),K=window.setTimeout(()=>{w.value&&(m.value=!0)},100))}function be(){q()}function J(e){e||(q(),m.value=!1)}C(w,e=>{e||(m.value=!1)}),pe(()=>{ae(()=>{let t=l.value;t&&(e.disabled?t.removeAttribute(`tabindex`):t.tabIndex=h.value?-1:0)})}),Ge(o,e.onResize);let{inlineThemeDisabled:xe}=e,Se=Y(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:o,textColor:s,paddingSingle:c,paddingMultiple:l,caretColor:u,colorDisabled:d,textColorDisabled:f,placeholderColorDisabled:p,colorActive:m,boxShadowFocus:h,boxShadowActive:g,boxShadowHover:v,border:y,borderFocus:b,borderHover:x,borderActive:S,arrowColor:C,arrowColorDisabled:w,loadingColor:ee,colorActiveWarning:T,boxShadowFocusWarning:te,boxShadowActiveWarning:E,boxShadowHoverWarning:ne,borderWarning:D,borderFocusWarning:O,borderHoverWarning:re,borderActiveWarning:k,colorActiveError:A,boxShadowFocusError:ie,boxShadowActiveError:ae,boxShadowHoverError:oe,borderError:j,borderFocusError:M,borderHoverError:se,borderActiveError:P,clearColor:F,clearColorHover:ce,clearColorPressed:le,clearSize:I,arrowSize:ue,[de(`height`,t)]:L,[de(`fontSize`,t)]:R}}=_.value,z=N(c),B=N(l);return{"--n-bezier":n,"--n-border":y,"--n-border-active":S,"--n-border-focus":b,"--n-border-hover":x,"--n-border-radius":i,"--n-box-shadow-active":g,"--n-box-shadow-focus":h,"--n-box-shadow-hover":v,"--n-caret-color":u,"--n-color":a,"--n-color-active":m,"--n-color-disabled":d,"--n-font-size":R,"--n-height":L,"--n-padding-single-top":z.top,"--n-padding-multiple-top":B.top,"--n-padding-single-right":z.right,"--n-padding-multiple-right":B.right,"--n-padding-single-left":z.left,"--n-padding-multiple-left":B.left,"--n-padding-single-bottom":z.bottom,"--n-padding-multiple-bottom":B.bottom,"--n-placeholder-color":o,"--n-placeholder-color-disabled":p,"--n-text-color":s,"--n-text-color-disabled":f,"--n-arrow-color":C,"--n-arrow-color-disabled":w,"--n-loading-color":ee,"--n-color-active-warning":T,"--n-box-shadow-focus-warning":te,"--n-box-shadow-active-warning":E,"--n-box-shadow-hover-warning":ne,"--n-border-warning":D,"--n-border-focus-warning":O,"--n-border-hover-warning":re,"--n-border-active-warning":k,"--n-color-active-error":A,"--n-box-shadow-focus-error":ie,"--n-box-shadow-active-error":ae,"--n-box-shadow-hover-error":oe,"--n-border-error":j,"--n-border-focus-error":M,"--n-border-hover-error":se,"--n-border-active-error":P,"--n-clear-size":I,"--n-clear-color":F,"--n-clear-color-hover":ce,"--n-clear-color-pressed":le,"--n-arrow-size":ue,"--n-font-weight":r}}),Ce=xe?ve(`internal-selection`,Y(()=>e.size[0]),Se,e):void 0;return{mergedTheme:_,mergedClearable:v,mergedClsPrefix:t,rtlEnabled:r,patternInputFocused:h,filterablePlaceholder:y,label:x,selected:w,showTagsPanel:m,isComposing:I,counterRef:u,counterWrapperRef:d,patternInputMirrorRef:i,patternInputRef:a,selfRef:o,multipleElRef:s,singleElRef:c,patternInputWrapperRef:l,overflowRef:f,inputTagElRef:p,handleMouseDown:ce,handleFocusin:ie,handleClear:se,handleMouseEnter:P,handleMouseLeave:F,handleDeleteOption:le,handlePatternKeyDown:ue,handlePatternInputInput:R,handlePatternInputBlur:fe,handlePatternInputFocus:V,handleMouseEnterCounter:ye,handleMouseLeaveCounter:be,handleFocusout:j,handleCompositionEnd:B,handleCompositionStart:z,onPopoverUpdateShow:J,focus:H,focusInput:he,blur:me,blurInput:U,updateCounter:ge,getCounter:_e,getTail:G,renderLabel:e.renderLabel,cssVars:xe?void 0:Se,themeClass:Ce?.themeClass,onRender:Ce?.onRender}},render(){let{status:e,multiple:t,size:r,disabled:i,filterable:a,maxTagCount:o,bordered:s,clsPrefix:l,ellipsisTagPopoverProps:u,onRender:d,renderTag:f,renderLabel:p}=this;d?.();let m=o===`responsive`,g=typeof o==`number`,_=m||g,v=(Q(),V(xe,null,{default:()=>(Q(),V(n,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>this.$slots.arrow?.()},1032,[`clsPrefix`,`loading`,`showArrow`,`showClear`,`onClear`]))},1024)),y;if(t){let{labelField:e}=this,t=t=>(Q(),X(`div`,{class:F(`${l}-base-selection-tag-wrapper`),key:t.value},[f?(Q(),X(H,{key:0},[R(()=>f({option:t,handleClose:()=>{this.handleDeleteOption(t)}}))],64)):(Q(),V(h,{key:1,size:r,closable:!t.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>p?p(t,!0):b(t[e],t,!0)},1032,[`size`,`closable`,`disabled`,`onClose`]))],2)),n=()=>(g?this.selectedOptions.slice(0,o):this.selectedOptions).map(t),s=a?(Q(),X(`div`,{class:F(`${l}-base-selection-input-tag`),ref:`inputTagElRef`,key:`__input-tag__`},[K(`input`,J(this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd}),null,16,ct),K(`span`,{ref:`patternInputMirrorRef`,class:F(`${l}-base-selection-input-tag__mirror`)},[R(()=>this.pattern)],2)],2)):null,d=m?()=>(Q(),X(`div`,{class:F(`${l}-base-selection-tag-wrapper`),ref:`counterWrapperRef`},[(Q(),V(h,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i},null,8,[`size`,`onMouseenter`,`onMouseleave`,`disabled`]))],2)):void 0,x;if(g){let e=this.selectedOptions.length-o;e>0&&(x=(t=>(Q(),X(`div`,{class:F(`${l}-base-selection-tag-wrapper`),key:`__counter__`},[(Q(),V(h,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${e}`},1032,[`size`,`onMouseenter`,`disabled`]))],2)))(x))}let S=m?a?(Q(),V(Ue,{key:3,ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:n,counter:d,tail:()=>s},1032,[`updateCounter`,`getCounter`,`getTail`])):(Q(),V(Ue,{key:4,ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:n,counter:d},1032,[`updateCounter`,`getCounter`])):g&&x?n().concat(x):n(),C=_?()=>(Q(),X(`div`,{class:F(`${l}-base-selection-popover`)},[m?(Q(),X(H,{key:0},[R(()=>n())],64)):(Q(),X(H,{key:1},[R(()=>this.selectedOptions.map(t))],64))],2)):void 0,w=_?{show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover,...u}:null,ee=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?(Q(),X(`div`,{key:5,class:F(`${l}-base-selection-placeholder ${l}-base-selection-overlay`)},[K(`div`,{class:F(`${l}-base-selection-placeholder__inner`)},[R(()=>this.placeholder)],2)],2)):null,T=a?(Q(),X(`div`,{key:6,ref:`patternInputWrapperRef`,class:F(`${l}-base-selection-tags`)},[R(()=>S),m?R(()=>null):(Q(),X(H,{key:1},[R(()=>s)],64)),R(()=>v)],2)):(Q(),X(`div`,{key:7,ref:`multipleElRef`,class:F(`${l}-base-selection-tags`),tabindex:i?void 0:0},[R(()=>S),R(()=>v)],10,lt));y=(e=>(Q(),X(H,{key:8},[_?(Q(),V(c,J({key:0},w,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>T,default:C},1040)):(Q(),X(H,{key:1},[R(()=>T)],64)),R(()=>ee)],64)))(y)}else if(a){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=!this.active&&this.selected;y=(e=>(Q(),X(`div`,{key:9,ref:`patternInputWrapperRef`,class:F(`${l}-base-selection-label`),title:this.patternInputFocused?void 0:We(this.label)},[K(`input`,J(this.inputProps,{ref:`patternInputRef`,class:`${l}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd}),null,16,dt),n?(Q(),X(`div`,{class:F(`${l}-base-selection-label__render-label ${l}-base-selection-overlay`),key:`input`},[K(`div`,{class:F(`${l}-base-selection-overlay__wrapper`)},[f?(Q(),X(H,{key:0},[R(()=>f({option:this.selectedOption,handleClose:()=>{}}))],64)):(Q(),X(H,{key:1},[p?(Q(),X(H,{key:0},[R(()=>p(this.selectedOption,!0))],64)):(Q(),X(H,{key:1},[R(()=>b(this.label,this.selectedOption,!0))],64))],64))],2)],2)):R(()=>null),t?(Q(),X(`div`,{class:F(`${l}-base-selection-placeholder ${l}-base-selection-overlay`),key:`placeholder`},[K(`div`,{class:F(`${l}-base-selection-overlay__wrapper`)},[R(()=>this.filterablePlaceholder)],2)],2)):R(()=>null),R(()=>v)],10,ut)))(y)}else y=(e=>(Q(),X(`div`,{key:10,ref:`singleElRef`,class:F(`${l}-base-selection-label`),tabindex:this.disabled?void 0:0},[this.label===void 0?(Q(),X(`div`,{class:F(`${l}-base-selection-placeholder ${l}-base-selection-overlay`),key:`placeholder`},[K(`div`,{class:F(`${l}-base-selection-placeholder__inner`)},[R(()=>this.placeholder)],2)],2)):(Q(),X(`div`,{class:F(`${l}-base-selection-input`),title:We(this.label),key:`input`},[K(`div`,{class:F(`${l}-base-selection-input__content`)},[f?(Q(),X(H,{key:0},[R(()=>f({option:this.selectedOption,handleClose:()=>{}}))],64)):(Q(),X(H,{key:1},[p?(Q(),X(H,{key:0},[R(()=>p(this.selectedOption,!0))],64)):(Q(),X(H,{key:1},[R(()=>b(this.label,this.selectedOption,!0))],64))],64))],2)],10,[`title`])),R(()=>v)],10,ft)))(y);return Q(),X(`div`,{ref:`selfRef`,class:F([`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}]),style:O(this.cssVars),onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},[R(()=>y),s?(Q(),X(`div`,{key:0,class:F(`${l}-base-selection__border`)},null,2)):R(()=>null),s?(Q(),X(`div`,{key:2,class:F(`${l}-base-selection__state-border`)},null,2)):R(()=>null)],46,pt)}}),ht=P([$(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),$(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[ie({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),gt={...oe.props,to:s.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array},_t=Z({name:`Select`,props:gt,slots:Object,setup(n){let{mergedClsPrefixRef:r,mergedBorderedRef:i,namespaceRef:a,inlineThemeDisabled:o,mergedComponentPropsRef:c}=te(n),l=oe(`Select`,`-select`,ht,fe,n,r),f=k(n.defaultValue),p=M(n,`value`),m=t(p,f),h=k(!1),_=k(``),v=g(n,[`items`,`options`]),y=k([]),b=k([]),x=Y(()=>b.value.concat(y.value).concat(v.value)),S=Y(()=>{let{filter:e}=n;if(e)return e;let{labelField:t,valueField:r}=n;return(e,n)=>{if(!n)return!1;let i=n[t];if(typeof i==`string`)return rt(e,i);let a=n[r];return typeof a==`string`?rt(e,a):typeof a==`number`&&rt(e,String(a))}}),w=Y(()=>{if(n.remote)return v.value;{let{value:e}=x,{value:t}=_;return!t.length||!n.filterable?e:at(e,S.value,t,n.childrenField)}}),ee=Y(()=>{let{valueField:e,childrenField:t}=n,r=it(e,t);return u(w.value,r)}),T=Y(()=>ot(x.value,n.valueField,n.childrenField)),E=k(!1),D=t(M(n,`show`),E),O=k(null),re=k(null),A=k(null),{localeRef:ie}=e(`Select`),ae=Y(()=>n.placeholder??ie.value.placeholder),j=[],N=k(new Map),P=Y(()=>{let{fallbackOption:e}=n;if(e===void 0){let{labelField:e,valueField:t}=n;return n=>({[e]:String(n),[t]:n})}return e===!1?!1:t=>Object.assign(e(t),{value:t})});function F(e){let t=n.remote,{value:r}=N,{value:i}=T,{value:a}=P,o=[];return e.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(t&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let le=Y(()=>{if(n.multiple){let{value:e}=m;return Array.isArray(e)?F(e):[]}return null}),I=Y(()=>{let{value:e}=m;return!n.multiple&&!Array.isArray(e)?e===null?null:F([e])[0]||null:null}),ue=se(n,{mergedSize:e=>{let{size:t}=n;if(t)return t;let{mergedSize:r}=e||{};return r?.value?r.value:c?.value?.Select?.size||`medium`}}),{mergedSizeRef:L,mergedDisabledRef:R,mergedStatusRef:de}=ue;function z(e,t){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=n,{nTriggerFormChange:o,nTriggerFormInput:s}=ue;r&&G(r,e,t),a&&G(a,e,t),i&&G(i,e,t),f.value=e,o(),s()}function B(e){let{onBlur:t}=n,{nTriggerFormBlur:r}=ue;t&&G(t,e),r()}function V(){let{onClear:e}=n;e&&G(e)}function pe(e){let{onFocus:t,showOnFocus:r}=n,{nTriggerFormFocus:i}=ue;t&&G(t,e),i(),r&&ge()}function me(e){let{onSearch:t}=n;t&&G(t,e)}function H(e){let{onScroll:t}=n;t&&G(t,e)}function he(){let{remote:e,multiple:t}=n;if(e){let{value:e}=N;if(t){let{valueField:t}=n;le.value?.forEach(n=>{e.set(n[t],n)})}else{let t=I.value;t&&e.set(t[n.valueField],t)}}}function U(e){let{onUpdateShow:t,"onUpdate:show":r}=n;t&&G(t,e),r&&G(r,e),E.value=e}function ge(){R.value||(U(!0),E.value=!0,n.filterable&&Ne())}function W(){U(!1)}function K(){_.value=``,b.value=j}let q=k(!1);function ye(){n.filterable&&(q.value=!0)}function be(){n.filterable&&(q.value=!1,D.value||K())}function J(){R.value||(D.value?n.filterable?Ne():W():ge())}function xe(e){A.value?.selfRef?.contains(e.relatedTarget)||(h.value=!1,B(e),W())}function Se(e){pe(e),h.value=!0}function Ce(){h.value=!0}function X(e){O.value?.$el.contains(e.relatedTarget)||(h.value=!1,B(e),W())}function we(){O.value?.focus(),W()}function Z(e){D.value&&(O.value?.$el.contains(ne(e))||W())}function Te(e){if(!Array.isArray(e))return[];if(P.value)return Array.from(e);{let{remote:t}=n,{value:r}=T;if(t){let{value:t}=N;return e.filter(e=>r.has(e)||t.has(e))}return e.filter(e=>r.has(e))}}function Ee(e){Q(e.rawNode)}function Q(e){if(R.value)return;let{tag:t,remote:r,clearFilterAfterSelect:i,valueField:a}=n;if(t&&!r){let{value:e}=b,t=e[0]||null;if(t){let e=y.value;e.length?e.push(t):y.value=[t],b.value=j}}if(r&&N.value.set(e[a],e),n.multiple){let n=Te(m.value),o=n.findIndex(t=>t===e[a]);if(~o){if(n.splice(o,1),t&&!r){let t=De(e[a]);~t&&(y.value.splice(t,1),i&&(_.value=``))}}else n.push(e[a]),i&&(_.value=``);z(n,F(n))}else{if(t&&!r){let t=De(e[a]);~t?y.value=[y.value[t]]:y.value=j}Me(),W(),z(e[a],e)}}function De(e){return y.value.findIndex(t=>t[n.valueField]===e)}function Oe(e){D.value||ge();let{value:t}=e.target;_.value=t;let{tag:r,remote:i}=n;if(me(t),r&&!i){if(!t){b.value=j;return}let{onCreate:e}=n,r=e?e(t):{[n.labelField]:t,[n.valueField]:t},{valueField:i,labelField:a}=n;v.value.some(e=>e[i]===r[i]||e[a]===r[a])||y.value.some(e=>e[i]===r[i]||e[a]===r[a])?b.value=j:b.value=[r]}}function $(e){e.stopPropagation();let{multiple:t,tag:r,remote:i,clearCreatedOptionsOnClear:a}=n;!t&&n.filterable&&W(),r&&!i&&a&&(y.value=j),V(),t?z([],[]):z(null,null)}function ke(e){!d(e,`action`)&&!d(e,`empty`)&&!d(e,`header`)&&e.preventDefault()}function Ae(e){H(e)}function je(e){if(!n.keyboard){e.preventDefault();return}switch(e.key){case` `:if(n.filterable)break;e.preventDefault();case`Enter`:if(!O.value?.isComposing){if(D.value){let e=A.value?.getPendingTmNode();e?Ee(e):n.filterable||(W(),Me())}else if(ge(),n.tag&&q.value){let e=b.value[0];if(e){let t=e[n.valueField],{value:r}=m;n.multiple&&Array.isArray(r)&&r.includes(t)||Q(e)}}}e.preventDefault();break;case`ArrowUp`:if(e.preventDefault(),n.loading)return;D.value&&A.value?.prev();break;case`ArrowDown`:if(e.preventDefault(),n.loading)return;D.value?A.value?.next():ge();break;case`Escape`:D.value&&(ce(e),W()),O.value?.focus()}}function Me(){O.value?.focus()}function Ne(){O.value?.focusInput()}function Pe(){D.value&&re.value?.syncPosition()}he(),C(M(n,`options`),he);let Fe={focus:()=>{O.value?.focus()},focusInput:()=>{O.value?.focusInput()},blur:()=>{O.value?.blur()},blurInput:()=>{O.value?.blurInput()}},Ie=Y(()=>{let{self:{menuBoxShadow:e}}=l.value;return{"--n-menu-box-shadow":e}}),Le=o?ve(`select`,void 0,Ie,n):void 0;return{...Fe,mergedStatus:de,mergedClsPrefix:r,mergedBordered:i,namespace:a,treeMate:ee,isMounted:_e(),triggerRef:O,menuRef:A,pattern:_,uncontrolledShow:E,mergedShow:D,adjustedTo:s(n),uncontrolledValue:f,mergedValue:m,followerRef:re,localizedPlaceholder:ae,selectedOption:I,selectedOptions:le,mergedSize:L,mergedDisabled:R,focused:h,activeWithoutMenuOpen:q,inlineThemeDisabled:o,onTriggerInputFocus:ye,onTriggerInputBlur:be,handleTriggerOrMenuResize:Pe,handleMenuFocus:Ce,handleMenuBlur:X,handleMenuTabOut:we,handleTriggerClick:J,handleToggle:Ee,handleDeleteOption:Q,handlePatternInput:Oe,handleClear:$,handleTriggerBlur:xe,handleTriggerFocus:Se,handleKeydown:je,handleMenuAfterLeave:K,handleMenuClickOutside:Z,handleMenuScroll:Ae,handleMenuKeydown:je,handleMenuMousedown:ke,mergedTheme:l,cssVars:o?void 0:Ie,themeClass:Le?.themeClass,onRender:Le?.onRender}},render(){return Q(),X(`div`,{class:F(`${this.mergedClsPrefix}-select`)},[ye(i,null,{_:1,default:ke(()=>[(Q(),V(a,null,{_:1,default:ke(()=>(Q(),V(mt,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{_:1,arrow:ke(()=>[this.$slots.arrow?.()])},8,`inlineThemeDisabled.status.inputProps.clsPrefix.showArrow.maxTagCount.ellipsisTagPopoverProps.bordered.active.pattern.placeholder.selectedOption.selectedOptions.multiple.renderTag.renderLabel.filterable.clearable.disabled.size.theme.labelField.valueField.themeOverrides.loading.focused.onClick.onDeleteOption.onPatternInput.onClear.onBlur.onFocus.onKeydown.onPatternBlur.onPatternFocus.onResize.ignoreComposition`.split(`.`))))})),(Q(),V(l,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===s.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{_:1,default:ke(()=>(Q(),V(D,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{_:1,default:ke(()=>this.mergedShow||this.displayDirective===`show`?(this.onRender?.(),x((Q(),V(et,J(this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{_:1,empty:ke(()=>[this.$slots.empty?.()]),header:ke(()=>[this.$slots.header?.()]),action:ke(()=>[this.$slots.action?.()])},16,`onResize.inlineThemeDisabled.virtualScroll.class.clsPrefix.labelField.valueField.nodeProps.theme.themeOverrides.treeMate.multiple.size.renderOption.renderLabel.value.style.onToggle.onScroll.onFocus.onBlur.onKeydown.onTabOut.onMousedown.show.showCheckmark.resetMenuOnOptionsChange.scrollbarProps`.split(`.`))),this.displayDirective===`show`?[[B,this.mergedShow],[Ce,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Ce,this.handleMenuClickOutside,void 0,{capture:!0}]])):null)},8,[`appear`,`onAfterLeave`])))},8,[`show`,`to`,`teleportDisabled`,`containerClass`,`width`,`placement`]))])})],2)}});export{Ke as n,_t as t};