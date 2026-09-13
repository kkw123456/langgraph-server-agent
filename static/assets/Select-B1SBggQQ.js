import{a as e,i as t,r as n}from"./createLucideIcon-CRS-aC7q.js";import{A as r,D as i,E as a,M as o,O as s,S as c,T as l,b as u,j as d,k as f,x as p}from"./workbench-CRwT1F2r.js";import{S as m,b as h}from"./store-CVKy6SWQ.js";import{i as g,n as _,r as v}from"./plus-C4Vg5Qzv.js";import{$ as y,A as b,C as x,Cr as S,Dt as C,Et as ee,Fr as w,Ft as T,Gt as te,Hn as E,It as ne,Jn as D,Lt as O,Nt as re,O as k,Or as ie,Ot as ae,P as oe,Pr as A,Pt as se,R as ce,Rn as j,Rr as M,Rt as N,S as le,Sr as P,Tr as F,Un as I,Ut as L,Vn as R,Vt as z,Wn as ue,X as B,Zn as V,_r as de,ar as H,b as fe,br as pe,cr as U,dr as W,dt as me,er as G,et as K,gr as he,gt as ge,hr as q,ht as J,ir as Y,jr as _e,k as ve,kr as ye,kt as be,lt as xe,mr as Se,or as X,ot as Ce,pr as Z,rt as we,st as Te,ur as Ee,xr as De,yr as Oe,yt as ke,zn as Q,zt as $}from"./index-C_M67W1L.js";function Ae(e){return e&-e}var je=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=Ae(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=Ae(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},Me;function Ne(){return typeof document>`u`?!1:(Me===void 0&&(Me=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches),Me)}var Pe;function Fe(){return typeof document>`u`?1:(Pe===void 0&&(Pe=`chrome`in window?window.devicePixelRatio:1),Pe)}var Ie=`VVirtualListXScroll`;function Le({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let r=A(0),i=A(0),a=Y(()=>{let t=e.value;if(t.length===0)return null;let n=new je(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n}),o=ke(()=>{let e=a.value;return e===null?0:Math.max(e.getBound(i.value)-1,0)}),s=e=>{let t=a.value;return t===null?0:t.sum(e)},c=ke(()=>{let t=a.value;return t===null?0:Math.min(t.getBound(i.value+r.value)+1,e.value.length-1)});return S(Ie,{startIndexRef:o,endIndexRef:c,columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:s}),{listWidthRef:r,scrollLeftRef:i}}var Re=W({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=Se(Ie);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),ze=_(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[_(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[_(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),Be=W({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){let t=L();ze.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:v,ssr:t}),De(()=>{let{defaultScrollIndex:t,defaultScrollKey:n}=e;t==null?n!=null&&_({key:n}):_({index:t})});let n=!1,r=!1;de(()=>{if(n=!1,!r){r=!0;return}_({top:m.value,left:s.value})}),pe(()=>{n=!0,r||=!0});let i=ke(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let t=0;return e.columns.forEach(e=>{t+=e.width}),t}),a=Y(()=>{let t=new Map,{keyField:n}=e;return e.items.forEach((e,r)=>{t.set(e[n],r)}),t}),{scrollLeftRef:s,listWidthRef:c}=Le({columnsRef:w(e,`columns`),renderColRef:w(e,`renderCol`),renderItemWithColsRef:w(e,`renderItemWithCols`)}),l=A(null),u=A(void 0),d=new Map,f=Y(()=>{let{items:t,itemSize:n,keyField:r}=e,i=new je(t.length,n);return t.forEach((e,t)=>{let n=e[r],a=d.get(n);a!==void 0&&i.add(t,a)}),i}),p=A(0),m=A(0),h=ke(()=>Math.max(f.value.getBound(m.value-re(e.paddingTop))-1,0)),g=Y(()=>{let{value:t}=u;if(t===void 0)return[];let{items:n,itemSize:r}=e,i=h.value,a=Math.min(i+Math.ceil(t/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),_=(e,t)=>{if(typeof e==`number`){S(e,t,`auto`);return}let{left:n,top:r,index:i,key:o,position:s,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)S(n,r,c);else if(i!==void 0)x(i,c,l);else if(o!==void 0){let e=a.value.get(o);e!==void 0&&x(e,c,l)}else s===`bottom`?S(0,2**53-1,c):s===`top`&&S(0,0,c)},y,b=null;function x(t,n,r){let i=l.value;if(i==null)return;let{value:a}=f,o=a.sum(t)+re(e.paddingTop);if(!r)i.scrollTo({left:0,top:o,behavior:n});else{y=t,b!==null&&window.clearTimeout(b),b=window.setTimeout(()=>{y=void 0,b=null},16);let{scrollTop:e,offsetHeight:r}=i;if(o>e){let s=a.get(t);o+s<=e+r||i.scrollTo({left:0,top:o+s-r,behavior:n})}else i.scrollTo({left:0,top:o,behavior:n})}}function S(e,t,n){l.value?.scrollTo({left:e,top:t,behavior:n})}function C(t,r){if(n||e.ignoreItemResize||k(r.target))return;let{value:i}=f,o=a.value.get(t),s=i.get(o),c=r.borderBoxSize?.[0]?.blockSize??r.contentRect.height;if(c===s)return;c-e.itemSize===0?d.delete(t):d.set(t,c-e.itemSize);let u=c-s;if(u===0)return;i.add(o,u);let m=l.value;if(m!=null){if(y===void 0){let e=i.sum(o);m.scrollTop>e&&m.scrollBy(0,u)}else(o<y||o===y&&c+i.sum(o)>m.scrollTop+m.offsetHeight)&&m.scrollBy(0,u);O()}p.value++}let ee=!Ne(),te=!1;function E(t){var n;(n=e.onScroll)==null||n.call(e,t),(!ee||!te)&&O()}function ne(t){var n;if((n=e.onWheel)==null||n.call(e,t),ee){let e=l.value;if(e!=null){if(t.deltaX===0&&(e.scrollTop===0&&t.deltaY<=0||e.scrollTop+e.offsetHeight>=e.scrollHeight&&t.deltaY>=0))return;t.preventDefault(),e.scrollTop+=t.deltaY/Fe(),e.scrollLeft+=t.deltaX/Fe(),O(),te=!0,o(()=>{te=!1})}}}function D(t){if(n||k(t.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(t.contentRect.height===u.value)return}else if(t.contentRect.height===u.value&&t.contentRect.width===c.value)return;u.value=t.contentRect.height,c.value=t.contentRect.width;let{onResize:r}=e;r!==void 0&&r(t)}function O(){let{value:e}=l;e!=null&&(m.value=e.scrollTop,s.value=e.scrollLeft)}function k(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:u,listStyle:{overflow:`auto`},keyToIndex:a,itemsStyle:Y(()=>{let{itemResizable:t}=e,n=T(f.value.sum());return p.value,[e.itemsStyle,{boxSizing:`content-box`,width:T(i.value),height:t?``:n,minHeight:t?n:``,paddingTop:T(e.paddingTop),paddingBottom:T(e.paddingBottom)}]}),visibleItemsStyle:Y(()=>(p.value,{transform:`translateY(${T(f.value.sum(h.value))})`})),viewportItems:g,listElRef:l,itemsElRef:A(null),scrollTo:_,handleListResize:D,handleListScroll:E,handleListWheel:ne,handleItemResize:C}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return Z(y,{onResize:this.handleListResize},{default:()=>{var i;return Z(`div`,q(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(i=this.$slots).empty?.call(i):Z(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[Z(r,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:i}=this;return this.viewportItems.map(a=>{let o=a[t],s=n.get(o),c=r==null?void 0:Z(Re,{index:s,item:a}),l=i==null?void 0:Z(Re,{index:s,item:a}),u=this.$slots.default({item:a,renderedCols:c,renderedItemWithCols:l,index:s})[0];return e?Z(y,{key:o,onResize:e=>this.handleItemResize(o,e)},{default:()=>u}):(u.key=o,u)})}})])])}})}}),Ve=`v-hidden`,He=_(`[v-hidden]`,{display:`none!important`}),Ue=W({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=A(null),r=A(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute(Ve)&&c.removeAttribute(Ve);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute(Ve)&&e.removeAttribute(Ve);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute(Ve)||n.setAttribute(Ve,``);continue}n.hasAttribute(Ve)&&n.removeAttribute(Ve);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute(Ve,``))}let a=L();return He.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:v,ssr:a}),De(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return he(()=>this.sync({showAllItemsBeforeCalculate:!1})),Z(`div`,{class:`v-overflow`,ref:`selfRef`},[F(e,`default`),e.counter?e.counter():Z(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function We(e){switch(typeof e){case`string`:return e||void 0;case`number`:return String(e);default:return}}function Ge(e,t){t&&(De(()=>{let{value:n}=e;n&&K.registerHandler(n,t)}),ie(e,(e,t)=>{t&&K.unregisterHandler(t)},{deep:!1}),Oe(()=>{let{value:t}=e;t&&K.unregisterHandler(t)}))}var Ke=W({props:{onFocus:Function,onBlur:Function},setup(e){return()=>(()=>{let t=O(`d16ead82505dc285`);return P(),U(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:t[0]||=t=>e.onFocus?.(t),onBlur:t[1]||=t=>e.onBlur?.(t)},null,32)})()}}),qe=W({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:i}=Se(r);return{labelField:n,nodeProps:i,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):b(i[this.labelField],i,!1),s=(P(),U(`div`,q(a,{class:[`${e}-base-select-group-header`,a?.class]}),[z(()=>o)],16));return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}}),Je=W({name:`Checkmark`,render(){return(()=>{let e=O(`3c84eac8ae4e1f96`);return e[0]||=H(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},[H(`g`,{fill:`none`},[H(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})])],-1)})()}}),Ye=[`onClick`,`onMouseenter`,`onMousemove`];function Xe(e,t){return P(),X(D,{name:`fade-in-scale-up-transition`},{default:()=>e?(P(),X(C,{key:1,clsPrefix:t,class:N(`${t}-base-select-option__check`)},{default:()=>Z(Je)},1032,[`clsPrefix`,`class`])):null},1024)}var Ze=W({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:i,valueSetRef:a,renderLabelRef:o,renderOptionRef:s,labelFieldRef:c,valueFieldRef:l,showCheckmarkRef:u,nodePropsRef:d,handleOptionClick:f,handleOptionMouseEnter:p}=Se(r),m=ke(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e;n.disabled||p(t,n)}function _(t){let{tmNode:n}=e,{value:r}=m;n.disabled||r||p(t,n)}return{multiple:i,isGrouped:ke(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:u,nodeProps:d,isPending:m,isSelected:ke(()=>{let{value:n}=t,{value:r}=i;if(n===null)return!1;let o=e.tmNode.rawNode[l.value];if(r){let{value:e}=a;return e.has(o)}return n===o}),labelField:c,renderLabel:o,renderOption:s,handleMouseMove:_,handleMouseEnter:g,handleClick:h}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:s,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,f=Xe(n,e),p=c?[c(t,n),a&&f]:[b(t[this.labelField],t,n),a&&f],m=o?.(t),h=(P(),U(`div`,q(m,{class:[`${e}-base-select-option`,t.class,m?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[m?.style||``,t.style||``],onClick:ve([l,m?.onClick]),onMouseenter:ve([u,m?.onMouseenter]),onMousemove:ve([d,m?.onMousemove])}),[H(`div`,{class:N(`${e}-base-select-option__content`)},[z(()=>p)],2)],16,Ye));return t.render?t.render({node:h,option:t,selected:n}):s?s({node:h,option:t,selected:n}):h}}),Qe=Q(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[Q(`scrollbar`,`
 max-height: var(--n-height);
 `),Q(`virtual-list`,`
 max-height: var(--n-height);
 `),Q(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[R(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),Q(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),Q(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),R(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),R(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),R(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),R(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),Q(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),Q(`base-select-option`,`
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
 `),j(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),j(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),E(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),E(`pending`,[j(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),E(`selected`,`
 color: var(--n-option-text-color-active);
 `,[j(`&::before`,`
 background-color: var(--n-option-color-active);
 `),E(`pending`,[j(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),E(`disabled`,`
 cursor: not-allowed;
 `,[I(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),E(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),R(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[k({enterScale:`0.5`})])])]),$e=[`tabindex`,`onFocusin`,`onFocusout`,`onKeyup`,`onKeydown`,`onMousedown`,`onMouseenter`,`onMouseleave`],et=W({name:`InternalSelectMenu`,props:{...ae.props,clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function},setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n,mergedComponentPropsRef:i}=te(e),a=Te(`InternalSelectMenu`,n,t),o=ae(`InternalSelectMenu`,`-internal-select-menu`,Qe,ee,e,w(e,`clsPrefix`)),s=A(null),c=A(null),l=A(null),u=Y(()=>e.treeMate.getFlattenedNodes()),m=Y(()=>p(u.value)),h=A(null);function g(){let{treeMate:t}=e,n=null,{value:r}=e;r===null?n=t.getFirstAvailableNode():(n=e.multiple?t.getNode((r||[])[(r||[]).length-1]):t.getNode(r),(!n||n.disabled)&&(n=t.getFirstAvailableNode())),F(n||null)}function _(){let{value:t}=h;t&&!e.treeMate.getNode(t.key)&&(h.value=null)}let v;ie(()=>e.show,t=>{t?v=ie(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():_(),he(I)):_()},{immediate:!0}):v?.()},{immediate:!0}),Oe(()=>{v?.()});let y=Y(()=>re(o.value.self[ue(`optionHeight`,e.size)])),b=Y(()=>se(o.value.self[ue(`padding`,e.size)])),x=Y(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),C=Y(()=>{let e=u.value;return e&&e.length===0}),T=Y(()=>i?.value?.Select?.renderEmpty);function E(t){let{onToggle:n}=e;n&&n(t)}function ne(t){let{onScroll:n}=e;n&&n(t)}function D(e){l.value?.sync(),ne(e)}function O(){l.value?.sync()}function k(){let{value:e}=h;return e||null}function oe(e,t){t.disabled||F(t,!1)}function ce(e,t){t.disabled||E(t)}function j(t){d(t,`action`)||e.onKeyup?.(t)}function M(t){d(t,`action`)||e.onKeydown?.(t)}function N(t){e.onMousedown?.(t),!e.focusable&&t.preventDefault()}function le(){let{value:e}=h;e&&F(e.getNext({loop:!0}),!0)}function P(){let{value:e}=h;e&&F(e.getPrev({loop:!0}),!0)}function F(e,t=!1){h.value=e,t&&I()}function I(){let t=h.value;if(!t)return;let n=m.value(t.key);n!==null&&(e.virtualScroll?c.value?.scrollTo({index:n}):l.value?.scrollTo({index:n,elSize:y.value}))}function L(t){s.value?.contains(t.target)&&e.onFocus?.(t)}function R(t){s.value?.contains(t.relatedTarget)||e.onBlur?.(t)}S(r,{handleOptionMouseEnter:oe,handleOptionClick:ce,valueSetRef:x,pendingTmNodeRef:h,nodePropsRef:w(e,`nodeProps`),showCheckmarkRef:w(e,`showCheckmark`),multipleRef:w(e,`multiple`),valueRef:w(e,`value`),renderLabelRef:w(e,`renderLabel`),renderOptionRef:w(e,`renderOption`),labelFieldRef:w(e,`labelField`),valueFieldRef:w(e,`valueField`)}),S(f,s),De(()=>{let{value:e}=l;e&&e.sync()});let z=Y(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:s,actionDividerColor:c,optionTextColorPressed:l,optionTextColor:u,optionTextColorDisabled:d,optionTextColorActive:f,optionOpacityDisabled:p,optionCheckColor:m,actionTextColor:h,optionColorPending:g,optionColorActive:_,loadingColor:v,loadingSize:y,optionColorActivePending:b,[ue(`optionFontSize`,t)]:x,[ue(`optionHeight`,t)]:S,[ue(`optionPadding`,t)]:C}}=o.value;return{"--n-height":r,"--n-action-divider-color":c,"--n-action-text-color":h,"--n-bezier":n,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":x,"--n-group-header-text-color":s,"--n-option-check-color":m,"--n-option-color-pending":g,"--n-option-color-active":_,"--n-option-color-active-pending":b,"--n-option-height":S,"--n-option-opacity-disabled":p,"--n-option-text-color":u,"--n-option-text-color-active":f,"--n-option-text-color-disabled":d,"--n-option-text-color-pressed":l,"--n-option-padding":C,"--n-option-padding-left":se(C,`left`),"--n-option-padding-right":se(C,`right`),"--n-loading-color":v,"--n-loading-size":y}}),{inlineThemeDisabled:B}=e,V=B?be(`internal-select-menu`,Y(()=>e.size[0]),z,e):void 0,de={selfRef:s,next:le,prev:P,getPendingTmNode:k};return Ge(s,e.onResize),{mergedTheme:o,mergedClsPrefix:t,rtlEnabled:a,virtualListRef:c,scrollbarRef:l,itemSize:y,padding:b,flattenedNodes:u,empty:C,mergedRenderEmpty:T,virtualListContainer(){let{value:e}=c;return e?.listElRef},virtualListContent(){let{value:e}=c;return e?.itemsElRef},doScroll:ne,handleFocusin:L,handleFocusout:R,handleKeyUp:j,handleKeyDown:M,handleMouseDown:N,handleVirtualListResize:O,handleVirtualListScroll:D,cssVars:B?void 0:z,themeClass:V?.themeClass,onRender:V?.onRender,...de}},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:i,onRender:a}=this;return a?.(),P(),U(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:N([`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`]),style:M(this.cssVars),onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[z(()=>me(e.header,e=>e&&(P(),U(`div`,{class:N(`${n}-base-select-menu__header`),"data-header":!0,key:`header`},[z(()=>e)],2)))),this.loading?(P(),U(`div`,{key:0,class:N(`${n}-base-select-menu__loading`)},[(P(),X(oe,{clsPrefix:n,strokeWidth:20},null,8,[`clsPrefix`]))],2)):(P(),U(G,{key:1},[this.empty?(P(),U(`div`,{key:1,class:N(`${n}-base-select-menu__empty`),"data-empty":!0},[z(()=>xe(e.empty,()=>[this.mergedRenderEmpty?.()||(P(),X(m,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size},null,8,[`theme`,`themeOverrides`,`size`]))]))],2)):(P(),X(B,q({key:0,ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?(P(),X(Be,{key:1,ref:`virtualListRef`,class:N(`${n}-virtual-list`),items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?(P(),X(qe,{key:e.key,clsPrefix:n,tmNode:e},null,8,[`clsPrefix`,`tmNode`])):e.ignored?null:(P(),X(Ze,{clsPrefix:n,key:e.key,tmNode:e},null,8,[`clsPrefix`,`tmNode`]))},1032,[`class`,`items`,`itemSize`,`paddingTop`,`paddingBottom`,`onResize`,`onScroll`])):(P(),U(`div`,{key:4,class:N(`${n}-base-select-menu-option-wrapper`),style:M({paddingTop:this.padding.top,paddingBottom:this.padding.bottom})},[z(()=>this.flattenedNodes.map(e=>e.isGroup?(P(),X(qe,{key:e.key,clsPrefix:n,tmNode:e},null,8,[`clsPrefix`,`tmNode`])):(P(),X(Ze,{clsPrefix:n,key:e.key,tmNode:e},null,8,[`clsPrefix`,`tmNode`]))))],6))},1040,[`theme`,`themeOverrides`,`scrollable`,`container`,`content`,`onScroll`]))],64)),z(()=>me(e.action,e=>e&&[(P(),U(`div`,{class:N(`${n}-base-select-menu__action`),"data-action":!0,key:`action`},[z(()=>e)],2)),(P(),X(Ke,{onFocus:this.onTabOut,key:`focus-detector`},null,8,[`onFocus`]))]))],46,$e)}});function tt(e){return e.type===`group`}function nt(e){return e.type===`ignored`}function rt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function it(e,t){return{getIsGroup:tt,getIgnored:nt,getKey(t){return tt(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function at(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(tt(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(nt(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function ot(e,t,n){let r=new Map;return e.forEach(e=>{tt(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var st=j([Q(`base-selection`,`
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
 `,[Q(`base-loading`,`
 color: var(--n-loading-color);
 `),Q(`base-selection-tags`,`min-height: var(--n-height);`),R(`border, state-border`,`
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
 `),R(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),Q(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[R(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),Q(`base-selection-overlay`,`
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
 `,[R(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),Q(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[R(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),Q(`base-selection-tags`,`
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
 `),Q(`base-selection-label`,`
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
 `,[Q(`base-selection-input`,`
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
 `,[R(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),R(`render-label`,`
 color: var(--n-text-color);
 `)]),I(`disabled`,[j(`&:hover`,[R(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),E(`focus`,[R(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),E(`active`,[R(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),Q(`base-selection-label`,`background-color: var(--n-color-active);`),Q(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),E(`disabled`,`cursor: not-allowed;`,[R(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),Q(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[Q(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),R(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),Q(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),Q(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),Q(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[R(`input`,`
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
 `),R(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>E(`${e}-status`,[R(`state-border`,`border: var(--n-border-${e});`),I(`disabled`,[j(`&:hover`,[R(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),E(`active`,[R(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),Q(`base-selection-label`,`background-color: var(--n-color-active-${e});`),Q(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),E(`focus`,[R(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),Q(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),Q(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[j(`&:last-child`,`padding-right: 0;`),Q(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[R(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ct=[`disabled`,`value`,`autofocus`,`onBlur`,`onFocus`,`onKeydown`,`onInput`,`onCompositionstart`,`onCompositionend`],lt=[`tabindex`],ut=[`title`],dt=[`value`,`readonly`,`disabled`,`autofocus`,`onFocus`,`onBlur`,`onInput`,`onCompositionstart`,`onCompositionend`],ft=[`tabindex`],pt=[`onClick`,`onMouseenter`,`onMouseleave`,`onKeydown`,`onFocusin`,`onFocusout`,`onMousedown`],mt=W({name:`InternalSelection`,props:{...ae.props,clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function},setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n}=te(e),r=Te(`InternalSelection`,n,t),i=A(null),a=A(null),o=A(null),s=A(null),c=A(null),l=A(null),u=A(null),d=A(null),f=A(null),p=A(null),m=A(!1),h=A(!1),g=A(!1),_=ae(`InternalSelection`,`-internal-selection`,st,x,e,w(e,`clsPrefix`)),v=Y(()=>e.clearable&&!e.disabled&&(g.value||e.active)),y=Y(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):b(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),S=Y(()=>{let t=e.selectedOption;if(t)return t[e.labelField]}),C=Y(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function ee(){let{value:t}=i;if(t){let{value:n}=a;n&&(n.style.width=`${t.offsetWidth}px`,e.maxTagCount!==`responsive`&&f.value?.sync({showAllItemsBeforeCalculate:!1}))}}function T(){let{value:e}=p;e&&(e.style.display=`none`)}function E(){let{value:e}=p;e&&(e.style.display=`inline-block`)}ie(w(e,`active`),e=>{e||T()}),ie(w(e,`pattern`),()=>{e.multiple&&he(ee)});function ne(t){let{onFocus:n}=e;n&&n(t)}function D(t){let{onBlur:n}=e;n&&n(t)}function O(t){let{onDeleteOption:n}=e;n&&n(t)}function re(t){let{onClear:n}=e;n&&n(t)}function k(t){let{onPatternInput:n}=e;n&&n(t)}function oe(e){(!e.relatedTarget||!o.value?.contains(e.relatedTarget))&&ne(e)}function ce(e){o.value?.contains(e.relatedTarget)||D(e)}function j(e){re(e)}function M(){g.value=!0}function N(){g.value=!1}function le(t){e.active&&e.filterable&&t.target!==a.value&&t.preventDefault()}function P(e){O(e)}let F=A(!1);function I(t){if(t.key===`Backspace`&&!F.value&&!e.pattern.length){let{selectedOptions:t}=e;t?.length&&P(t[t.length-1])}}let L=null;function R(t){let{value:n}=i;n&&(n.textContent=t.target.value,ee()),e.ignoreComposition&&F.value?L=t:k(t)}function z(){F.value=!0}function B(){F.value=!1,e.ignoreComposition&&k(L),L=null}function V(t){h.value=!0,e.onPatternFocus?.(t)}function de(t){h.value=!1,e.onPatternBlur?.(t)}function H(){if(e.filterable)h.value=!1,l.value?.blur(),a.value?.blur();else if(e.multiple){let{value:e}=s;e?.blur()}else{let{value:e}=c;e?.blur()}}function fe(){e.filterable?(h.value=!1,l.value?.focus()):e.multiple?s.value?.focus():c.value?.focus()}function pe(){let{value:e}=a;e&&(E(),e.focus())}function U(){let{value:e}=a;e&&e.blur()}function W(e){let{value:t}=u;t&&t.setTextContent(`+${e}`)}function me(){let{value:e}=d;return e}function G(){return a.value}let K=null;function ge(){K!==null&&window.clearTimeout(K)}function q(){e.active||(ge(),K=window.setTimeout(()=>{C.value&&(m.value=!0)},100))}function J(){ge()}function _e(e){e||(ge(),m.value=!1)}ie(C,e=>{e||(m.value=!1)}),De(()=>{ye(()=>{let t=l.value;t&&(e.disabled?t.removeAttribute(`tabindex`):t.tabIndex=h.value?-1:0)})}),Ge(o,e.onResize);let{inlineThemeDisabled:ve}=e,xe=Y(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:o,textColor:s,paddingSingle:c,paddingMultiple:l,caretColor:u,colorDisabled:d,textColorDisabled:f,placeholderColorDisabled:p,colorActive:m,boxShadowFocus:h,boxShadowActive:g,boxShadowHover:v,border:y,borderFocus:b,borderHover:x,borderActive:S,arrowColor:C,arrowColorDisabled:ee,loadingColor:w,colorActiveWarning:T,boxShadowFocusWarning:te,boxShadowActiveWarning:E,boxShadowHoverWarning:ne,borderWarning:D,borderFocusWarning:O,borderHoverWarning:re,borderActiveWarning:k,colorActiveError:ie,boxShadowFocusError:ae,boxShadowActiveError:oe,boxShadowHoverError:A,borderError:ce,borderFocusError:j,borderHoverError:M,borderActiveError:N,clearColor:le,clearColorHover:P,clearColorPressed:F,clearSize:I,arrowSize:L,[ue(`height`,t)]:R,[ue(`fontSize`,t)]:z}}=_.value,B=se(c),V=se(l);return{"--n-bezier":n,"--n-border":y,"--n-border-active":S,"--n-border-focus":b,"--n-border-hover":x,"--n-border-radius":i,"--n-box-shadow-active":g,"--n-box-shadow-focus":h,"--n-box-shadow-hover":v,"--n-caret-color":u,"--n-color":a,"--n-color-active":m,"--n-color-disabled":d,"--n-font-size":z,"--n-height":R,"--n-padding-single-top":B.top,"--n-padding-multiple-top":V.top,"--n-padding-single-right":B.right,"--n-padding-multiple-right":V.right,"--n-padding-single-left":B.left,"--n-padding-multiple-left":V.left,"--n-padding-single-bottom":B.bottom,"--n-padding-multiple-bottom":V.bottom,"--n-placeholder-color":o,"--n-placeholder-color-disabled":p,"--n-text-color":s,"--n-text-color-disabled":f,"--n-arrow-color":C,"--n-arrow-color-disabled":ee,"--n-loading-color":w,"--n-color-active-warning":T,"--n-box-shadow-focus-warning":te,"--n-box-shadow-active-warning":E,"--n-box-shadow-hover-warning":ne,"--n-border-warning":D,"--n-border-focus-warning":O,"--n-border-hover-warning":re,"--n-border-active-warning":k,"--n-color-active-error":ie,"--n-box-shadow-focus-error":ae,"--n-box-shadow-active-error":oe,"--n-box-shadow-hover-error":A,"--n-border-error":ce,"--n-border-focus-error":j,"--n-border-hover-error":M,"--n-border-active-error":N,"--n-clear-size":I,"--n-clear-color":le,"--n-clear-color-hover":P,"--n-clear-color-pressed":F,"--n-arrow-size":L,"--n-font-weight":r}}),Se=ve?be(`internal-selection`,Y(()=>e.size[0]),xe,e):void 0;return{mergedTheme:_,mergedClearable:v,mergedClsPrefix:t,rtlEnabled:r,patternInputFocused:h,filterablePlaceholder:y,label:S,selected:C,showTagsPanel:m,isComposing:F,counterRef:u,counterWrapperRef:d,patternInputMirrorRef:i,patternInputRef:a,selfRef:o,multipleElRef:s,singleElRef:c,patternInputWrapperRef:l,overflowRef:f,inputTagElRef:p,handleMouseDown:le,handleFocusin:oe,handleClear:j,handleMouseEnter:M,handleMouseLeave:N,handleDeleteOption:P,handlePatternKeyDown:I,handlePatternInputInput:R,handlePatternInputBlur:de,handlePatternInputFocus:V,handleMouseEnterCounter:q,handleMouseLeaveCounter:J,handleFocusout:ce,handleCompositionEnd:B,handleCompositionStart:z,onPopoverUpdateShow:_e,focus:fe,focusInput:pe,blur:H,blurInput:U,updateCounter:W,getCounter:me,getTail:G,renderLabel:e.renderLabel,cssVars:ve?void 0:xe,themeClass:Se?.themeClass,onRender:Se?.onRender}},render(){let{status:e,multiple:t,size:r,disabled:i,filterable:a,maxTagCount:o,bordered:s,clsPrefix:l,ellipsisTagPopoverProps:u,onRender:d,renderTag:f,renderLabel:p}=this;d?.();let m=o===`responsive`,g=typeof o==`number`,_=m||g,v=(P(),X(Ce,null,{default:()=>(P(),X(n,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>this.$slots.arrow?.()},1032,[`clsPrefix`,`loading`,`showArrow`,`showClear`,`onClear`]))},1024)),y;if(t){let{labelField:e}=this,t=t=>(P(),U(`div`,{class:N(`${l}-base-selection-tag-wrapper`),key:t.value},[f?(P(),U(G,{key:0},[z(()=>f({option:t,handleClose:()=>{this.handleDeleteOption(t)}}))],64)):(P(),X(h,{key:1,size:r,closable:!t.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>p?p(t,!0):b(t[e],t,!0)},1032,[`size`,`closable`,`disabled`,`onClose`]))],2)),n=()=>(g?this.selectedOptions.slice(0,o):this.selectedOptions).map(t),s=a?(P(),U(`div`,{class:N(`${l}-base-selection-input-tag`),ref:`inputTagElRef`,key:`__input-tag__`},[H(`input`,q(this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd}),null,16,ct),H(`span`,{ref:`patternInputMirrorRef`,class:N(`${l}-base-selection-input-tag__mirror`)},[z(()=>this.pattern)],2)],2)):null,d=m?()=>(P(),U(`div`,{class:N(`${l}-base-selection-tag-wrapper`),ref:`counterWrapperRef`},[(P(),X(h,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i},null,8,[`size`,`onMouseenter`,`onMouseleave`,`disabled`]))],2)):void 0,x;if(g){let e=this.selectedOptions.length-o;e>0&&(x=(t=>(P(),U(`div`,{class:N(`${l}-base-selection-tag-wrapper`),key:`__counter__`},[(P(),X(h,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${e}`},1032,[`size`,`onMouseenter`,`disabled`]))],2)))(x))}let S=m?a?(P(),X(Ue,{key:3,ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:n,counter:d,tail:()=>s},1032,[`updateCounter`,`getCounter`,`getTail`])):(P(),X(Ue,{key:4,ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:n,counter:d},1032,[`updateCounter`,`getCounter`])):g&&x?n().concat(x):n(),C=_?()=>(P(),U(`div`,{class:N(`${l}-base-selection-popover`)},[m?(P(),U(G,{key:0},[z(()=>n())],64)):(P(),U(G,{key:1},[z(()=>this.selectedOptions.map(t))],64))],2)):void 0,ee=_?{show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover,...u}:null,w=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?(P(),U(`div`,{key:5,class:N(`${l}-base-selection-placeholder ${l}-base-selection-overlay`)},[H(`div`,{class:N(`${l}-base-selection-placeholder__inner`)},[z(()=>this.placeholder)],2)],2)):null,T=a?(P(),U(`div`,{key:6,ref:`patternInputWrapperRef`,class:N(`${l}-base-selection-tags`)},[z(()=>S),m?z(()=>null):(P(),U(G,{key:1},[z(()=>s)],64)),z(()=>v)],2)):(P(),U(`div`,{key:7,ref:`multipleElRef`,class:N(`${l}-base-selection-tags`),tabindex:i?void 0:0},[z(()=>S),z(()=>v)],10,lt));y=(e=>(P(),U(G,{key:8},[_?(P(),X(c,q({key:0},ee,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>T,default:C},1040)):(P(),U(G,{key:1},[z(()=>T)],64)),z(()=>w)],64)))(y)}else if(a){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=!this.active&&this.selected;y=(e=>(P(),U(`div`,{key:9,ref:`patternInputWrapperRef`,class:N(`${l}-base-selection-label`),title:this.patternInputFocused?void 0:We(this.label)},[H(`input`,q(this.inputProps,{ref:`patternInputRef`,class:`${l}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd}),null,16,dt),n?(P(),U(`div`,{class:N(`${l}-base-selection-label__render-label ${l}-base-selection-overlay`),key:`input`},[H(`div`,{class:N(`${l}-base-selection-overlay__wrapper`)},[f?(P(),U(G,{key:0},[z(()=>f({option:this.selectedOption,handleClose:()=>{}}))],64)):(P(),U(G,{key:1},[p?(P(),U(G,{key:0},[z(()=>p(this.selectedOption,!0))],64)):(P(),U(G,{key:1},[z(()=>b(this.label,this.selectedOption,!0))],64))],64))],2)],2)):z(()=>null),t?(P(),U(`div`,{class:N(`${l}-base-selection-placeholder ${l}-base-selection-overlay`),key:`placeholder`},[H(`div`,{class:N(`${l}-base-selection-overlay__wrapper`)},[z(()=>this.filterablePlaceholder)],2)],2)):z(()=>null),z(()=>v)],10,ut)))(y)}else y=(e=>(P(),U(`div`,{key:10,ref:`singleElRef`,class:N(`${l}-base-selection-label`),tabindex:this.disabled?void 0:0},[this.label===void 0?(P(),U(`div`,{class:N(`${l}-base-selection-placeholder ${l}-base-selection-overlay`),key:`placeholder`},[H(`div`,{class:N(`${l}-base-selection-placeholder__inner`)},[z(()=>this.placeholder)],2)],2)):(P(),U(`div`,{class:N(`${l}-base-selection-input`),title:We(this.label),key:`input`},[H(`div`,{class:N(`${l}-base-selection-input__content`)},[f?(P(),U(G,{key:0},[z(()=>f({option:this.selectedOption,handleClose:()=>{}}))],64)):(P(),U(G,{key:1},[p?(P(),U(G,{key:0},[z(()=>p(this.selectedOption,!0))],64)):(P(),U(G,{key:1},[z(()=>b(this.label,this.selectedOption,!0))],64))],64))],2)],10,[`title`])),z(()=>v)],10,ft)))(y);return P(),U(`div`,{ref:`selfRef`,class:N([`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}]),style:M(this.cssVars),onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},[z(()=>y),s?(P(),U(`div`,{key:0,class:N(`${l}-base-selection__border`)},null,2)):z(()=>null),s?(P(),U(`div`,{key:2,class:N(`${l}-base-selection__state-border`)},null,2)):z(()=>null)],46,pt)}}),ht=j([Q(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),Q(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[k({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),gt={...ae.props,to:s.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array},_t=W({name:`Select`,props:gt,slots:Object,setup(n){let{mergedClsPrefixRef:r,mergedBorderedRef:i,namespaceRef:a,inlineThemeDisabled:o,mergedComponentPropsRef:c}=te(n),l=ae(`Select`,`-select`,ht,fe,n,r),f=A(n.defaultValue),p=w(n,`value`),m=t(p,f),h=A(!1),_=A(``),v=g(n,[`items`,`options`]),y=A([]),b=A([]),x=Y(()=>b.value.concat(y.value).concat(v.value)),S=Y(()=>{let{filter:e}=n;if(e)return e;let{labelField:t,valueField:r}=n;return(e,n)=>{if(!n)return!1;let i=n[t];if(typeof i==`string`)return rt(e,i);let a=n[r];return typeof a==`string`?rt(e,a):typeof a==`number`&&rt(e,String(a))}}),C=Y(()=>{if(n.remote)return v.value;{let{value:e}=x,{value:t}=_;return!t.length||!n.filterable?e:at(e,S.value,t,n.childrenField)}}),ee=Y(()=>{let{valueField:e,childrenField:t}=n,r=it(e,t);return u(C.value,r)}),T=Y(()=>ot(x.value,n.valueField,n.childrenField)),E=A(!1),D=t(w(n,`show`),E),O=A(null),re=A(null),k=A(null),{localeRef:oe}=e(`Select`),se=Y(()=>n.placeholder??oe.value.placeholder),j=[],M=A(new Map),N=Y(()=>{let{fallbackOption:e}=n;if(e===void 0){let{labelField:e,valueField:t}=n;return n=>({[e]:String(n),[t]:n})}return e===!1?!1:t=>Object.assign(e(t),{value:t})});function P(e){let t=n.remote,{value:r}=M,{value:i}=T,{value:a}=N,o=[];return e.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(t&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let F=Y(()=>{if(n.multiple){let{value:e}=m;return Array.isArray(e)?P(e):[]}return null}),I=Y(()=>{let{value:e}=m;return!n.multiple&&!Array.isArray(e)?e===null?null:P([e])[0]||null:null}),L=ce(n,{mergedSize:e=>{let{size:t}=n;if(t)return t;let{mergedSize:r}=e||{};return r?.value?r.value:c?.value?.Select?.size||`medium`}}),{mergedSizeRef:R,mergedDisabledRef:z,mergedStatusRef:ue}=L;function B(e,t){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=n,{nTriggerFormChange:o,nTriggerFormInput:s}=L;r&&J(r,e,t),a&&J(a,e,t),i&&J(i,e,t),f.value=e,o(),s()}function V(e){let{onBlur:t}=n,{nTriggerFormBlur:r}=L;t&&J(t,e),r()}function de(){let{onClear:e}=n;e&&J(e)}function H(e){let{onFocus:t,showOnFocus:r}=n,{nTriggerFormFocus:i}=L;t&&J(t,e),i(),r&&G()}function pe(e){let{onSearch:t}=n;t&&J(t,e)}function U(e){let{onScroll:t}=n;t&&J(t,e)}function W(){let{remote:e,multiple:t}=n;if(e){let{value:e}=M;if(t){let{valueField:t}=n;F.value?.forEach(n=>{e.set(n[t],n)})}else{let t=I.value;t&&e.set(t[n.valueField],t)}}}function me(e){let{onUpdateShow:t,"onUpdate:show":r}=n;t&&J(t,e),r&&J(r,e),E.value=e}function G(){z.value||(me(!0),E.value=!0,n.filterable&&Ne())}function K(){me(!1)}function he(){_.value=``,b.value=j}let q=A(!1);function _e(){n.filterable&&(q.value=!0)}function ve(){n.filterable&&(q.value=!1,D.value||he())}function ye(){z.value||(D.value?n.filterable?Ne():K():G())}function xe(e){k.value?.selfRef?.contains(e.relatedTarget)||(h.value=!1,V(e),K())}function Se(e){H(e),h.value=!0}function X(){h.value=!0}function Ce(e){O.value?.$el.contains(e.relatedTarget)||(h.value=!1,V(e),K())}function Z(){O.value?.focus(),K()}function we(e){D.value&&(O.value?.$el.contains(ne(e))||K())}function Te(e){if(!Array.isArray(e))return[];if(N.value)return Array.from(e);{let{remote:t}=n,{value:r}=T;if(t){let{value:t}=M;return e.filter(e=>r.has(e)||t.has(e))}return e.filter(e=>r.has(e))}}function Ee(e){De(e.rawNode)}function De(e){if(z.value)return;let{tag:t,remote:r,clearFilterAfterSelect:i,valueField:a}=n;if(t&&!r){let{value:e}=b,t=e[0]||null;if(t){let e=y.value;e.length?e.push(t):y.value=[t],b.value=j}}if(r&&M.value.set(e[a],e),n.multiple){let n=Te(m.value),o=n.findIndex(t=>t===e[a]);if(~o){if(n.splice(o,1),t&&!r){let t=Oe(e[a]);~t&&(y.value.splice(t,1),i&&(_.value=``))}}else n.push(e[a]),i&&(_.value=``);B(n,P(n))}else{if(t&&!r){let t=Oe(e[a]);~t?y.value=[y.value[t]]:y.value=j}Me(),K(),B(e[a],e)}}function Oe(e){return y.value.findIndex(t=>t[n.valueField]===e)}function ke(e){D.value||G();let{value:t}=e.target;_.value=t;let{tag:r,remote:i}=n;if(pe(t),r&&!i){if(!t){b.value=j;return}let{onCreate:e}=n,r=e?e(t):{[n.labelField]:t,[n.valueField]:t},{valueField:i,labelField:a}=n;v.value.some(e=>e[i]===r[i]||e[a]===r[a])||y.value.some(e=>e[i]===r[i]||e[a]===r[a])?b.value=j:b.value=[r]}}function Q(e){e.stopPropagation();let{multiple:t,tag:r,remote:i,clearCreatedOptionsOnClear:a}=n;!t&&n.filterable&&K(),r&&!i&&a&&(y.value=j),de(),t?B([],[]):B(null,null)}function $(e){!d(e,`action`)&&!d(e,`empty`)&&!d(e,`header`)&&e.preventDefault()}function Ae(e){U(e)}function je(e){if(!n.keyboard){e.preventDefault();return}switch(e.key){case` `:if(n.filterable)break;e.preventDefault();case`Enter`:if(!O.value?.isComposing){if(D.value){let e=k.value?.getPendingTmNode();e?Ee(e):n.filterable||(K(),Me())}else if(G(),n.tag&&q.value){let e=b.value[0];if(e){let t=e[n.valueField],{value:r}=m;n.multiple&&Array.isArray(r)&&r.includes(t)||De(e)}}}e.preventDefault();break;case`ArrowUp`:if(e.preventDefault(),n.loading)return;D.value&&k.value?.prev();break;case`ArrowDown`:if(e.preventDefault(),n.loading)return;D.value?k.value?.next():G();break;case`Escape`:D.value&&(le(e),K()),O.value?.focus()}}function Me(){O.value?.focus()}function Ne(){O.value?.focusInput()}function Pe(){D.value&&re.value?.syncPosition()}W(),ie(w(n,`options`),W);let Fe={focus:()=>{O.value?.focus()},focusInput:()=>{O.value?.focusInput()},blur:()=>{O.value?.blur()},blurInput:()=>{O.value?.blurInput()}},Ie=Y(()=>{let{self:{menuBoxShadow:e}}=l.value;return{"--n-menu-box-shadow":e}}),Le=o?be(`select`,void 0,Ie,n):void 0;return{...Fe,mergedStatus:ue,mergedClsPrefix:r,mergedBordered:i,namespace:a,treeMate:ee,isMounted:ge(),triggerRef:O,menuRef:k,pattern:_,uncontrolledShow:E,mergedShow:D,adjustedTo:s(n),uncontrolledValue:f,mergedValue:m,followerRef:re,localizedPlaceholder:se,selectedOption:I,selectedOptions:F,mergedSize:R,mergedDisabled:z,focused:h,activeWithoutMenuOpen:q,inlineThemeDisabled:o,onTriggerInputFocus:_e,onTriggerInputBlur:ve,handleTriggerOrMenuResize:Pe,handleMenuFocus:X,handleMenuBlur:Ce,handleMenuTabOut:Z,handleTriggerClick:ye,handleToggle:Ee,handleDeleteOption:De,handlePatternInput:ke,handleClear:Q,handleTriggerBlur:xe,handleTriggerFocus:Se,handleKeydown:je,handleMenuAfterLeave:he,handleMenuClickOutside:we,handleMenuScroll:Ae,handleMenuKeydown:je,handleMenuMousedown:$,mergedTheme:l,cssVars:o?void 0:Ie,themeClass:Le?.themeClass,onRender:Le?.onRender}},render(){return P(),U(`div`,{class:N(`${this.mergedClsPrefix}-select`)},[Ee(i,null,{_:1,default:$(()=>[(P(),X(a,null,{_:1,default:$(()=>(P(),X(mt,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{_:1,arrow:$(()=>[this.$slots.arrow?.()])},8,`inlineThemeDisabled.status.inputProps.clsPrefix.showArrow.maxTagCount.ellipsisTagPopoverProps.bordered.active.pattern.placeholder.selectedOption.selectedOptions.multiple.renderTag.renderLabel.filterable.clearable.disabled.size.theme.labelField.valueField.themeOverrides.loading.focused.onClick.onDeleteOption.onPatternInput.onClear.onBlur.onFocus.onKeydown.onPatternBlur.onPatternFocus.onResize.ignoreComposition`.split(`.`))))})),(P(),X(l,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===s.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{_:1,default:$(()=>(P(),X(D,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{_:1,default:$(()=>this.mergedShow||this.displayDirective===`show`?(this.onRender?.(),_e((P(),X(et,q(this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{_:1,empty:$(()=>[this.$slots.empty?.()]),header:$(()=>[this.$slots.header?.()]),action:$(()=>[this.$slots.action?.()])},16,`onResize.inlineThemeDisabled.virtualScroll.class.clsPrefix.labelField.valueField.nodeProps.theme.themeOverrides.treeMate.multiple.size.renderOption.renderLabel.value.style.onToggle.onScroll.onFocus.onBlur.onKeydown.onTabOut.onMousedown.show.showCheckmark.resetMenuOnOptionsChange.scrollbarProps`.split(`.`))),this.displayDirective===`show`?[[V,this.mergedShow],[we,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[we,this.handleMenuClickOutside,void 0,{capture:!0}]])):null)},8,[`appear`,`onAfterLeave`])))},8,[`show`,`to`,`teleportDisabled`,`containerClass`,`width`,`placement`]))])})],2)}});export{Ke as n,_t as t};