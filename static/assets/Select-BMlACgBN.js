import{a as e,i as t,n}from"./createLucideIcon-ufvbaH_P.js";import{A as r,D as i,E as a,O as o,T as s,b as c,j as l,k as u,w as d,x as f,y as p}from"./workbench-Bx6kGap8.js";import{S as m,b as h}from"./store-CSIpedIT.js";import{n as g,r as _,t as v}from"./cssr-CkDjpwkB.js";import{$ as y,$n as b,Bn as x,Cn as S,D as C,Dn as w,Dt as T,En as E,Et as D,Ft as O,Hn as k,It as A,Kn as j,L as ee,Ln as M,Lt as N,Mn as te,Mt as P,N as ne,Nt as F,O as I,On as L,Ot as re,Pn as R,Pt as ie,Q as z,Qn as ae,S as oe,Sn as B,Tn as V,Tt as se,Ut as ce,Vn as H,Vt as le,Wn as U,Xn as ue,Y as de,Yn as W,Zn as G,_r as K,ar as q,at as fe,br as J,ct as pe,dr as me,gr as Y,ht as he,ir as X,jt as ge,k as _e,mt as Z,nr as ve,nt as ye,ot as be,pr as xe,qn as Q,rr as Se,sr as Ce,tr as we,ur as Te,ut as Ee,vt as De,x as Oe,y as ke,zt as $}from"./index-CoXLYJFb.js";function Ae(e){return e&-e}var je=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=Ae(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=Ae(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},Me;function Ne(){return typeof document>`u`?!1:(Me===void 0&&(Me=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches),Me)}var Pe;function Fe(){return typeof document>`u`?1:(Pe===void 0&&(Pe=`chrome`in window?window.devicePixelRatio:1),Pe)}var Ie=`VVirtualListXScroll`;function Le({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let r=Y(0),i=Y(0),a=x(()=>{let t=e.value;if(t.length===0)return null;let n=new je(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n}),o=De(()=>{let e=a.value;return e===null?0:Math.max(e.getBound(i.value)-1,0)}),s=e=>{let t=a.value;return t===null?0:t.sum(e)},c=De(()=>{let t=a.value;return t===null?0:Math.min(t.getBound(i.value+r.value)+1,e.value.length-1)});return q(Ie,{startIndexRef:o,endIndexRef:c,columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:s}),{listWidthRef:r,scrollLeftRef:i}}var Re=Q({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=ue(Ie);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),ze=v(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[v(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[v(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),Be=Q({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){let t=le();ze.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:g,ssr:t}),Se(()=>{let{defaultScrollIndex:t,defaultScrollKey:n}=e;t==null?n!=null&&v({key:n}):v({index:t})});let n=!1,r=!1;b(()=>{if(n=!1,!r){r=!0;return}v({top:m.value,left:o.value})}),ve(()=>{n=!0,r||=!0});let i=De(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let t=0;return e.columns.forEach(e=>{t+=e.width}),t}),a=x(()=>{let t=new Map,{keyField:n}=e;return e.items.forEach((e,r)=>{t.set(e[n],r)}),t}),{scrollLeftRef:o,listWidthRef:s}=Le({columnsRef:K(e,`columns`),renderColRef:K(e,`renderCol`),renderItemWithColsRef:K(e,`renderItemWithCols`)}),c=Y(null),u=Y(void 0),d=new Map,f=x(()=>{let{items:t,itemSize:n,keyField:r}=e,i=new je(t.length,n);return t.forEach((e,t)=>{let n=e[r],a=d.get(n);a!==void 0&&i.add(t,a)}),i}),p=Y(0),m=Y(0),h=De(()=>Math.max(f.value.getBound(m.value-ge(e.paddingTop))-1,0)),_=x(()=>{let{value:t}=u;if(t===void 0)return[];let{items:n,itemSize:r}=e,i=h.value,a=Math.min(i+Math.ceil(t/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),v=(e,t)=>{if(typeof e==`number`){w(e,t,`auto`);return}let{left:n,top:r,index:i,key:o,position:s,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)w(n,r,c);else if(i!==void 0)C(i,c,l);else if(o!==void 0){let e=a.value.get(o);e!==void 0&&C(e,c,l)}else s===`bottom`?w(0,2**53-1,c):s===`top`&&w(0,0,c)},y,S=null;function C(t,n,r){let i=c.value;if(i==null)return;let{value:a}=f,o=a.sum(t)+ge(e.paddingTop);if(!r)i.scrollTo({left:0,top:o,behavior:n});else{y=t,S!==null&&window.clearTimeout(S),S=window.setTimeout(()=>{y=void 0,S=null},16);let{scrollTop:e,offsetHeight:r}=i;if(o>e){let s=a.get(t);o+s<=e+r||i.scrollTo({left:0,top:o+s-r,behavior:n})}else i.scrollTo({left:0,top:o,behavior:n})}}function w(e,t,n){c.value?.scrollTo({left:e,top:t,behavior:n})}function T(t,r){if(n||e.ignoreItemResize||ee(r.target))return;let{value:i}=f,o=a.value.get(t),s=i.get(o),l=r.borderBoxSize?.[0]?.blockSize??r.contentRect.height;if(l===s)return;l-e.itemSize===0?d.delete(t):d.set(t,l-e.itemSize);let u=l-s;if(u===0)return;i.add(o,u);let m=c.value;if(m!=null){if(y===void 0){let e=i.sum(o);m.scrollTop>e&&m.scrollBy(0,u)}else(o<y||o===y&&l+i.sum(o)>m.scrollTop+m.offsetHeight)&&m.scrollBy(0,u);j()}p.value++}let E=!Ne(),D=!1;function O(t){var n;(n=e.onScroll)==null||n.call(e,t),(!E||!D)&&j()}function k(t){var n;if((n=e.onWheel)==null||n.call(e,t),E){let e=c.value;if(e!=null){if(t.deltaX===0&&(e.scrollTop===0&&t.deltaY<=0||e.scrollTop+e.offsetHeight>=e.scrollHeight&&t.deltaY>=0))return;t.preventDefault(),e.scrollTop+=t.deltaY/Fe(),e.scrollLeft+=t.deltaX/Fe(),j(),D=!0,l(()=>{D=!1})}}}function A(t){if(n||ee(t.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(t.contentRect.height===u.value)return}else if(t.contentRect.height===u.value&&t.contentRect.width===s.value)return;u.value=t.contentRect.height,s.value=t.contentRect.width;let{onResize:r}=e;r!==void 0&&r(t)}function j(){let{value:e}=c;e!=null&&(m.value=e.scrollTop,o.value=e.scrollLeft)}function ee(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:u,listStyle:{overflow:`auto`},keyToIndex:a,itemsStyle:x(()=>{let{itemResizable:t}=e,n=F(f.value.sum());return p.value,[e.itemsStyle,{boxSizing:`content-box`,width:F(i.value),height:t?``:n,minHeight:t?n:``,paddingTop:F(e.paddingTop),paddingBottom:F(e.paddingBottom)}]}),visibleItemsStyle:x(()=>(p.value,{transform:`translateY(${F(f.value.sum(h.value))})`})),viewportItems:_,listElRef:c,itemsElRef:Y(null),scrollTo:v,handleListResize:A,handleListScroll:O,handleListWheel:k,handleItemResize:T}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return W(z,{onResize:this.handleListResize},{default:()=>{var i;return W(`div`,G(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(i=this.$slots).empty?.call(i):W(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[W(r,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:i}=this;return this.viewportItems.map(a=>{let o=a[t],s=n.get(o),c=r==null?void 0:W(Re,{index:s,item:a}),l=i==null?void 0:W(Re,{index:s,item:a}),u=this.$slots.default({item:a,renderedCols:c,renderedItemWithCols:l,index:s})[0];return e?W(z,{key:o,onResize:e=>this.handleItemResize(o,e)},{default:()=>u}):(u.key=o,u)})}})])])}})}}),Ve=`v-hidden`,He=v(`[v-hidden]`,{display:`none!important`}),Ue=Q({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=Y(null),r=Y(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute(Ve)&&c.removeAttribute(Ve);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute(Ve)&&e.removeAttribute(Ve);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute(Ve)||n.setAttribute(Ve,``);continue}n.hasAttribute(Ve)&&n.removeAttribute(Ve);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute(Ve,``))}let a=le();return He.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:g,ssr:a}),Se(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return ae(()=>this.sync({showAllItemsBeforeCalculate:!1})),W(`div`,{class:`v-overflow`,ref:`selfRef`},[Ce(e,`default`),e.counter?e.counter():W(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function We(e){switch(typeof e){case`string`:return e||void 0;case`number`:return String(e);default:return}}function Ge(e,t){t&&(Se(()=>{let{value:n}=e;n&&y.registerHandler(n,t)}),Te(e,(e,t)=>{t&&y.unregisterHandler(t)},{deep:!1}),we(()=>{let{value:t}=e;t&&y.unregisterHandler(t)}))}var Ke=Q({props:{onFocus:Function,onBlur:Function},setup(e){return()=>(()=>{let t=O(`d16ead82505dc285`);return X(),U(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:t[0]||=t=>e.onFocus?.(t),onBlur:t[1]||=t=>e.onBlur?.(t)},null,32)})()}}),qe=Q({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=ue(u);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):_e(i[this.labelField],i,!1),s=(X(),U(`div`,G(a,{class:[`${e}-base-select-group-header`,a?.class]}),[$(()=>o)],16));return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}}),Je=Q({name:`Checkmark`,render(){return(()=>{let e=O(`3c84eac8ae4e1f96`);return e[0]||=H(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},[H(`g`,{fill:`none`},[H(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})])],-1)})()}}),Ye=[`onClick`,`onMouseenter`,`onMousemove`];function Xe(e,t){return X(),k(te,{name:`fade-in-scale-up-transition`},{default:()=>e?(X(),k(D,{key:1,clsPrefix:t,class:A(`${t}-base-select-option__check`)},{default:()=>W(Je)},1032,[`clsPrefix`,`class`])):null},1024)}var Ze=Q({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:i,renderLabelRef:a,renderOptionRef:o,labelFieldRef:s,valueFieldRef:c,showCheckmarkRef:l,nodePropsRef:d,handleOptionClick:f,handleOptionMouseEnter:p}=ue(u),m=De(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e;n.disabled||p(t,n)}function _(t){let{tmNode:n}=e,{value:r}=m;n.disabled||r||p(t,n)}return{multiple:r,isGrouped:De(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:l,nodeProps:d,isPending:m,isSelected:De(()=>{let{value:n}=t,{value:a}=r;if(n===null)return!1;let o=e.tmNode.rawNode[c.value];if(a){let{value:e}=i;return e.has(o)}return n===o}),labelField:s,renderLabel:a,renderOption:o,handleMouseMove:_,handleMouseEnter:g,handleClick:h}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:s,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,f=Xe(n,e),p=c?[c(t,n),a&&f]:[_e(t[this.labelField],t,n),a&&f],m=o?.(t),h=(X(),U(`div`,G(m,{class:[`${e}-base-select-option`,t.class,m?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[m?.style||``,t.style||``],onClick:I([l,m?.onClick]),onMouseenter:I([u,m?.onMouseenter]),onMousemove:I([d,m?.onMousemove])}),[H(`div`,{class:A(`${e}-base-select-option__content`)},[$(()=>p)],2)],16,Ye));return t.render?t.render({node:h,option:t,selected:n}):s?s({node:h,option:t,selected:n}):h}}),Qe=S(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[S(`scrollbar`,`
 max-height: var(--n-height);
 `),S(`virtual-list`,`
 max-height: var(--n-height);
 `),S(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[V(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),S(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),S(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),V(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),V(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),V(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),V(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),S(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),S(`base-select-option`,`
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
 `),B(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),B(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),E(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),E(`pending`,[B(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),E(`selected`,`
 color: var(--n-option-text-color-active);
 `,[B(`&::before`,`
 background-color: var(--n-option-color-active);
 `),E(`pending`,[B(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),E(`disabled`,`
 cursor: not-allowed;
 `,[w(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),E(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),V(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[C({enterScale:`0.5`})])])]),$e=[`tabindex`,`onFocusin`,`onFocusout`,`onKeyup`,`onKeydown`,`onMousedown`,`onMouseenter`,`onMouseleave`],et=Q({name:`InternalSelectMenu`,props:{...T.props,clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function},setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n,mergedComponentPropsRef:i}=ce(e),a=be(`InternalSelectMenu`,n,t),s=T(`InternalSelectMenu`,`-internal-select-menu`,Qe,se,e,K(e,`clsPrefix`)),l=Y(null),d=Y(null),f=Y(null),p=x(()=>e.treeMate.getFlattenedNodes()),m=x(()=>c(p.value)),h=Y(null);function g(){let{treeMate:t}=e,n=null,{value:r}=e;r===null?n=t.getFirstAvailableNode():(n=e.multiple?t.getNode((r||[])[(r||[]).length-1]):t.getNode(r),(!n||n.disabled)&&(n=t.getFirstAvailableNode())),I(n||null)}function _(){let{value:t}=h;t&&!e.treeMate.getNode(t.key)&&(h.value=null)}let v;Te(()=>e.show,t=>{t?v=Te(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():_(),ae(R)):_()},{immediate:!0}):v?.()},{immediate:!0}),we(()=>{v?.()});let y=x(()=>ge(s.value.self[L(`optionHeight`,e.size)])),b=x(()=>P(s.value.self[L(`padding`,e.size)])),S=x(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),C=x(()=>{let e=p.value;return e&&e.length===0}),w=x(()=>i?.value?.Select?.renderEmpty);function E(t){let{onToggle:n}=e;n&&n(t)}function D(t){let{onScroll:n}=e;n&&n(t)}function O(e){f.value?.sync(),D(e)}function k(){f.value?.sync()}function A(){let{value:e}=h;return e||null}function j(e,t){t.disabled||I(t,!1)}function ee(e,t){t.disabled||E(t)}function M(t){r(t,`action`)||e.onKeyup?.(t)}function N(t){r(t,`action`)||e.onKeydown?.(t)}function te(t){e.onMousedown?.(t),!e.focusable&&t.preventDefault()}function ne(){let{value:e}=h;e&&I(e.getNext({loop:!0}),!0)}function F(){let{value:e}=h;e&&I(e.getPrev({loop:!0}),!0)}function I(e,t=!1){h.value=e,t&&R()}function R(){let t=h.value;if(!t)return;let n=m.value(t.key);n!==null&&(e.virtualScroll?d.value?.scrollTo({index:n}):f.value?.scrollTo({index:n,elSize:y.value}))}function ie(t){l.value?.contains(t.target)&&e.onFocus?.(t)}function z(t){l.value?.contains(t.relatedTarget)||e.onBlur?.(t)}q(u,{handleOptionMouseEnter:j,handleOptionClick:ee,valueSetRef:S,pendingTmNodeRef:h,nodePropsRef:K(e,`nodeProps`),showCheckmarkRef:K(e,`showCheckmark`),multipleRef:K(e,`multiple`),valueRef:K(e,`value`),renderLabelRef:K(e,`renderLabel`),renderOptionRef:K(e,`renderOption`),labelFieldRef:K(e,`labelField`),valueFieldRef:K(e,`valueField`)}),q(o,l),Se(()=>{let{value:e}=f;e&&e.sync()});let oe=x(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:o,actionDividerColor:c,optionTextColorPressed:l,optionTextColor:u,optionTextColorDisabled:d,optionTextColorActive:f,optionOpacityDisabled:p,optionCheckColor:m,actionTextColor:h,optionColorPending:g,optionColorActive:_,loadingColor:v,loadingSize:y,optionColorActivePending:b,[L(`optionFontSize`,t)]:x,[L(`optionHeight`,t)]:S,[L(`optionPadding`,t)]:C}}=s.value;return{"--n-height":r,"--n-action-divider-color":c,"--n-action-text-color":h,"--n-bezier":n,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":x,"--n-group-header-text-color":o,"--n-option-check-color":m,"--n-option-color-pending":g,"--n-option-color-active":_,"--n-option-color-active-pending":b,"--n-option-height":S,"--n-option-opacity-disabled":p,"--n-option-text-color":u,"--n-option-text-color-active":f,"--n-option-text-color-disabled":d,"--n-option-text-color-pressed":l,"--n-option-padding":C,"--n-option-padding-left":P(C,`left`),"--n-option-padding-right":P(C,`right`),"--n-loading-color":v,"--n-loading-size":y}}),{inlineThemeDisabled:B}=e,V=B?re(`internal-select-menu`,x(()=>e.size[0]),oe,e):void 0,H={selfRef:l,next:ne,prev:F,getPendingTmNode:A};return Ge(l,e.onResize),{mergedTheme:s,mergedClsPrefix:t,rtlEnabled:a,virtualListRef:d,scrollbarRef:f,itemSize:y,padding:b,flattenedNodes:p,empty:C,mergedRenderEmpty:w,virtualListContainer(){let{value:e}=d;return e?.listElRef},virtualListContent(){let{value:e}=d;return e?.itemsElRef},doScroll:D,handleFocusin:ie,handleFocusout:z,handleKeyUp:M,handleKeyDown:N,handleMouseDown:te,handleVirtualListResize:k,handleVirtualListScroll:O,cssVars:B?void 0:oe,themeClass:V?.themeClass,onRender:V?.onRender,...H}},render(){let{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:i,onRender:a}=this;return a?.(),X(),U(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:A([`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`]),style:J(this.cssVars),onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[$(()=>Ee(e.header,e=>e&&(X(),U(`div`,{class:A(`${n}-base-select-menu__header`),"data-header":!0,key:`header`},[$(()=>e)],2)))),this.loading?(X(),U(`div`,{key:0,class:A(`${n}-base-select-menu__loading`)},[(X(),k(ne,{clsPrefix:n,strokeWidth:20},null,8,[`clsPrefix`]))],2)):(X(),U(M,{key:1},[this.empty?(X(),U(`div`,{key:1,class:A(`${n}-base-select-menu__empty`),"data-empty":!0},[$(()=>pe(e.empty,()=>[this.mergedRenderEmpty?.()||(X(),k(m,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size},null,8,[`theme`,`themeOverrides`,`size`]))]))],2)):(X(),k(de,G({key:0,ref:`scrollbarRef`,theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?(X(),k(Be,{key:1,ref:`virtualListRef`,class:A(`${n}-virtual-list`),items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?(X(),k(qe,{key:e.key,clsPrefix:n,tmNode:e},null,8,[`clsPrefix`,`tmNode`])):e.ignored?null:(X(),k(Ze,{clsPrefix:n,key:e.key,tmNode:e},null,8,[`clsPrefix`,`tmNode`]))},1032,[`class`,`items`,`itemSize`,`paddingTop`,`paddingBottom`,`onResize`,`onScroll`])):(X(),U(`div`,{key:4,class:A(`${n}-base-select-menu-option-wrapper`),style:J({paddingTop:this.padding.top,paddingBottom:this.padding.bottom})},[$(()=>this.flattenedNodes.map(e=>e.isGroup?(X(),k(qe,{key:e.key,clsPrefix:n,tmNode:e},null,8,[`clsPrefix`,`tmNode`])):(X(),k(Ze,{clsPrefix:n,key:e.key,tmNode:e},null,8,[`clsPrefix`,`tmNode`]))))],6))},1040,[`theme`,`themeOverrides`,`scrollable`,`container`,`content`,`onScroll`]))],64)),$(()=>Ee(e.action,e=>e&&[(X(),U(`div`,{class:A(`${n}-base-select-menu__action`),"data-action":!0,key:`action`},[$(()=>e)],2)),(X(),k(Ke,{onFocus:this.onTabOut,key:`focus-detector`},null,8,[`onFocus`]))]))],46,$e)}});function tt(e){return e.type===`group`}function nt(e){return e.type===`ignored`}function rt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function it(e,t){return{getIsGroup:tt,getIgnored:nt,getKey(t){return tt(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function at(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(tt(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(nt(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function ot(e,t,n){let r=new Map;return e.forEach(e=>{tt(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var st=B([S(`base-selection`,`
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
 `,[S(`base-loading`,`
 color: var(--n-loading-color);
 `),S(`base-selection-tags`,`min-height: var(--n-height);`),V(`border, state-border`,`
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
 `),V(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),S(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[V(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),S(`base-selection-overlay`,`
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
 `,[V(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),S(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[V(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),S(`base-selection-tags`,`
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
 `),S(`base-selection-label`,`
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
 `,[S(`base-selection-input`,`
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
 `,[V(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),V(`render-label`,`
 color: var(--n-text-color);
 `)]),w(`disabled`,[B(`&:hover`,[V(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),E(`focus`,[V(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),E(`active`,[V(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),S(`base-selection-label`,`background-color: var(--n-color-active);`),S(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),E(`disabled`,`cursor: not-allowed;`,[V(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),S(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[S(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),V(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),S(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),S(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),S(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[V(`input`,`
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
 `),V(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>E(`${e}-status`,[V(`state-border`,`border: var(--n-border-${e});`),w(`disabled`,[B(`&:hover`,[V(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),E(`active`,[V(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),S(`base-selection-label`,`background-color: var(--n-color-active-${e});`),S(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),E(`focus`,[V(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),S(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),S(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[B(`&:last-child`,`padding-right: 0;`),S(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[V(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ct=[`disabled`,`value`,`autofocus`,`onBlur`,`onFocus`,`onKeydown`,`onInput`,`onCompositionstart`,`onCompositionend`],lt=[`tabindex`],ut=[`title`],dt=[`value`,`readonly`,`disabled`,`autofocus`,`onFocus`,`onBlur`,`onInput`,`onCompositionstart`,`onCompositionend`],ft=[`tabindex`],pt=[`onClick`,`onMouseenter`,`onMouseleave`,`onKeydown`,`onFocusin`,`onFocusout`,`onMousedown`],mt=Q({name:`InternalSelection`,props:{...T.props,clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function},setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n}=ce(e),r=be(`InternalSelection`,n,t),i=Y(null),a=Y(null),o=Y(null),s=Y(null),c=Y(null),l=Y(null),u=Y(null),d=Y(null),f=Y(null),p=Y(null),m=Y(!1),h=Y(!1),g=Y(!1),_=T(`InternalSelection`,`-internal-selection`,st,oe,e,K(e,`clsPrefix`)),v=x(()=>e.clearable&&!e.disabled&&(g.value||e.active)),y=x(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):_e(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),b=x(()=>{let t=e.selectedOption;if(t)return t[e.labelField]}),S=x(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function C(){let{value:t}=i;if(t){let{value:n}=a;n&&(n.style.width=`${t.offsetWidth}px`,e.maxTagCount!==`responsive`&&f.value?.sync({showAllItemsBeforeCalculate:!1}))}}function w(){let{value:e}=p;e&&(e.style.display=`none`)}function E(){let{value:e}=p;e&&(e.style.display=`inline-block`)}Te(K(e,`active`),e=>{e||w()}),Te(K(e,`pattern`),()=>{e.multiple&&ae(C)});function D(t){let{onFocus:n}=e;n&&n(t)}function O(t){let{onBlur:n}=e;n&&n(t)}function k(t){let{onDeleteOption:n}=e;n&&n(t)}function A(t){let{onClear:n}=e;n&&n(t)}function j(t){let{onPatternInput:n}=e;n&&n(t)}function ee(e){(!e.relatedTarget||!o.value?.contains(e.relatedTarget))&&D(e)}function M(e){o.value?.contains(e.relatedTarget)||O(e)}function N(e){A(e)}function te(){g.value=!0}function ne(){g.value=!1}function F(t){e.active&&e.filterable&&t.target!==a.value&&t.preventDefault()}function I(e){k(e)}let R=Y(!1);function ie(t){if(t.key===`Backspace`&&!R.value&&!e.pattern.length){let{selectedOptions:t}=e;t?.length&&I(t[t.length-1])}}let z=null;function B(t){let{value:n}=i;n&&(n.textContent=t.target.value,C()),e.ignoreComposition&&R.value?z=t:j(t)}function V(){R.value=!0}function se(){R.value=!1,e.ignoreComposition&&j(z),z=null}function H(t){h.value=!0,e.onPatternFocus?.(t)}function le(t){h.value=!1,e.onPatternBlur?.(t)}function U(){if(e.filterable)h.value=!1,l.value?.blur(),a.value?.blur();else if(e.multiple){let{value:e}=s;e?.blur()}else{let{value:e}=c;e?.blur()}}function ue(){e.filterable?(h.value=!1,l.value?.focus()):e.multiple?s.value?.focus():c.value?.focus()}function de(){let{value:e}=a;e&&(E(),e.focus())}function W(){let{value:e}=a;e&&e.blur()}function G(e){let{value:t}=u;t&&t.setTextContent(`+${e}`)}function q(){let{value:e}=d;return e}function fe(){return a.value}let J=null;function pe(){J!==null&&window.clearTimeout(J)}function he(){e.active||(pe(),J=window.setTimeout(()=>{S.value&&(m.value=!0)},100))}function X(){pe()}function ge(e){e||(pe(),m.value=!1)}Te(S,e=>{e||(m.value=!1)}),Se(()=>{me(()=>{let t=l.value;t&&(e.disabled?t.removeAttribute(`tabindex`):t.tabIndex=h.value?-1:0)})}),Ge(o,e.onResize);let{inlineThemeDisabled:Z}=e,ve=x(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:o,textColor:s,paddingSingle:c,paddingMultiple:l,caretColor:u,colorDisabled:d,textColorDisabled:f,placeholderColorDisabled:p,colorActive:m,boxShadowFocus:h,boxShadowActive:g,boxShadowHover:v,border:y,borderFocus:b,borderHover:x,borderActive:S,arrowColor:C,arrowColorDisabled:w,loadingColor:T,colorActiveWarning:E,boxShadowFocusWarning:D,boxShadowActiveWarning:O,boxShadowHoverWarning:k,borderWarning:A,borderFocusWarning:j,borderHoverWarning:ee,borderActiveWarning:M,colorActiveError:N,boxShadowFocusError:te,boxShadowActiveError:ne,boxShadowHoverError:F,borderError:I,borderFocusError:re,borderHoverError:R,borderActiveError:ie,clearColor:z,clearColorHover:ae,clearColorPressed:oe,clearSize:B,arrowSize:V,[L(`height`,t)]:se,[L(`fontSize`,t)]:ce}}=_.value,H=P(c),le=P(l);return{"--n-bezier":n,"--n-border":y,"--n-border-active":S,"--n-border-focus":b,"--n-border-hover":x,"--n-border-radius":i,"--n-box-shadow-active":g,"--n-box-shadow-focus":h,"--n-box-shadow-hover":v,"--n-caret-color":u,"--n-color":a,"--n-color-active":m,"--n-color-disabled":d,"--n-font-size":ce,"--n-height":se,"--n-padding-single-top":H.top,"--n-padding-multiple-top":le.top,"--n-padding-single-right":H.right,"--n-padding-multiple-right":le.right,"--n-padding-single-left":H.left,"--n-padding-multiple-left":le.left,"--n-padding-single-bottom":H.bottom,"--n-padding-multiple-bottom":le.bottom,"--n-placeholder-color":o,"--n-placeholder-color-disabled":p,"--n-text-color":s,"--n-text-color-disabled":f,"--n-arrow-color":C,"--n-arrow-color-disabled":w,"--n-loading-color":T,"--n-color-active-warning":E,"--n-box-shadow-focus-warning":D,"--n-box-shadow-active-warning":O,"--n-box-shadow-hover-warning":k,"--n-border-warning":A,"--n-border-focus-warning":j,"--n-border-hover-warning":ee,"--n-border-active-warning":M,"--n-color-active-error":N,"--n-box-shadow-focus-error":te,"--n-box-shadow-active-error":ne,"--n-box-shadow-hover-error":F,"--n-border-error":I,"--n-border-focus-error":re,"--n-border-hover-error":R,"--n-border-active-error":ie,"--n-clear-size":B,"--n-clear-color":z,"--n-clear-color-hover":ae,"--n-clear-color-pressed":oe,"--n-arrow-size":V,"--n-font-weight":r}}),ye=Z?re(`internal-selection`,x(()=>e.size[0]),ve,e):void 0;return{mergedTheme:_,mergedClearable:v,mergedClsPrefix:t,rtlEnabled:r,patternInputFocused:h,filterablePlaceholder:y,label:b,selected:S,showTagsPanel:m,isComposing:R,counterRef:u,counterWrapperRef:d,patternInputMirrorRef:i,patternInputRef:a,selfRef:o,multipleElRef:s,singleElRef:c,patternInputWrapperRef:l,overflowRef:f,inputTagElRef:p,handleMouseDown:F,handleFocusin:ee,handleClear:N,handleMouseEnter:te,handleMouseLeave:ne,handleDeleteOption:I,handlePatternKeyDown:ie,handlePatternInputInput:B,handlePatternInputBlur:le,handlePatternInputFocus:H,handleMouseEnterCounter:he,handleMouseLeaveCounter:X,handleFocusout:M,handleCompositionEnd:se,handleCompositionStart:V,onPopoverUpdateShow:ge,focus:ue,focusInput:de,blur:U,blurInput:W,updateCounter:G,getCounter:q,getTail:fe,renderLabel:e.renderLabel,cssVars:Z?void 0:ve,themeClass:ye?.themeClass,onRender:ye?.onRender}},render(){let{status:e,multiple:t,size:r,disabled:i,filterable:a,maxTagCount:o,bordered:s,clsPrefix:c,ellipsisTagPopoverProps:l,onRender:u,renderTag:d,renderLabel:p}=this;u?.();let m=o===`responsive`,g=typeof o==`number`,_=m||g,v=(X(),k(fe,null,{default:()=>(X(),k(n,{clsPrefix:c,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>this.$slots.arrow?.()},1032,[`clsPrefix`,`loading`,`showArrow`,`showClear`,`onClear`]))},1024)),y;if(t){let{labelField:e}=this,t=t=>(X(),U(`div`,{class:A(`${c}-base-selection-tag-wrapper`),key:t.value},[d?(X(),U(M,{key:0},[$(()=>d({option:t,handleClose:()=>{this.handleDeleteOption(t)}}))],64)):(X(),k(h,{key:1,size:r,closable:!t.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>p?p(t,!0):_e(t[e],t,!0)},1032,[`size`,`closable`,`disabled`,`onClose`]))],2)),n=()=>(g?this.selectedOptions.slice(0,o):this.selectedOptions).map(t),s=a?(X(),U(`div`,{class:A(`${c}-base-selection-input-tag`),ref:`inputTagElRef`,key:`__input-tag__`},[H(`input`,G(this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${c}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd}),null,16,ct),H(`span`,{ref:`patternInputMirrorRef`,class:A(`${c}-base-selection-input-tag__mirror`)},[$(()=>this.pattern)],2)],2)):null,u=m?()=>(X(),U(`div`,{class:A(`${c}-base-selection-tag-wrapper`),ref:`counterWrapperRef`},[(X(),k(h,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i},null,8,[`size`,`onMouseenter`,`onMouseleave`,`disabled`]))],2)):void 0,b;if(g){let e=this.selectedOptions.length-o;e>0&&(b=(t=>(X(),U(`div`,{class:A(`${c}-base-selection-tag-wrapper`),key:`__counter__`},[(X(),k(h,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${e}`},1032,[`size`,`onMouseenter`,`disabled`]))],2)))(b))}let x=m?a?(X(),k(Ue,{key:3,ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:n,counter:u,tail:()=>s},1032,[`updateCounter`,`getCounter`,`getTail`])):(X(),k(Ue,{key:4,ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:n,counter:u},1032,[`updateCounter`,`getCounter`])):g&&b?n().concat(b):n(),S=_?()=>(X(),U(`div`,{class:A(`${c}-base-selection-popover`)},[m?(X(),U(M,{key:0},[$(()=>n())],64)):(X(),U(M,{key:1},[$(()=>this.selectedOptions.map(t))],64))],2)):void 0,C=_?{show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover,...l}:null,w=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?(X(),U(`div`,{key:5,class:A(`${c}-base-selection-placeholder ${c}-base-selection-overlay`)},[H(`div`,{class:A(`${c}-base-selection-placeholder__inner`)},[$(()=>this.placeholder)],2)],2)):null,T=a?(X(),U(`div`,{key:6,ref:`patternInputWrapperRef`,class:A(`${c}-base-selection-tags`)},[$(()=>x),m?$(()=>null):(X(),U(M,{key:1},[$(()=>s)],64)),$(()=>v)],2)):(X(),U(`div`,{key:7,ref:`multipleElRef`,class:A(`${c}-base-selection-tags`),tabindex:i?void 0:0},[$(()=>x),$(()=>v)],10,lt));y=(e=>(X(),U(M,{key:8},[_?(X(),k(f,G({key:0},C,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>T,default:S},1040)):(X(),U(M,{key:1},[$(()=>T)],64)),$(()=>w)],64)))(y)}else if(a){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=!this.active&&this.selected;y=(e=>(X(),U(`div`,{key:9,ref:`patternInputWrapperRef`,class:A(`${c}-base-selection-label`),title:this.patternInputFocused?void 0:We(this.label)},[H(`input`,G(this.inputProps,{ref:`patternInputRef`,class:`${c}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd}),null,16,dt),n?(X(),U(`div`,{class:A(`${c}-base-selection-label__render-label ${c}-base-selection-overlay`),key:`input`},[H(`div`,{class:A(`${c}-base-selection-overlay__wrapper`)},[d?(X(),U(M,{key:0},[$(()=>d({option:this.selectedOption,handleClose:()=>{}}))],64)):(X(),U(M,{key:1},[p?(X(),U(M,{key:0},[$(()=>p(this.selectedOption,!0))],64)):(X(),U(M,{key:1},[$(()=>_e(this.label,this.selectedOption,!0))],64))],64))],2)],2)):$(()=>null),t?(X(),U(`div`,{class:A(`${c}-base-selection-placeholder ${c}-base-selection-overlay`),key:`placeholder`},[H(`div`,{class:A(`${c}-base-selection-overlay__wrapper`)},[$(()=>this.filterablePlaceholder)],2)],2)):$(()=>null),$(()=>v)],10,ut)))(y)}else y=(e=>(X(),U(`div`,{key:10,ref:`singleElRef`,class:A(`${c}-base-selection-label`),tabindex:this.disabled?void 0:0},[this.label===void 0?(X(),U(`div`,{class:A(`${c}-base-selection-placeholder ${c}-base-selection-overlay`),key:`placeholder`},[H(`div`,{class:A(`${c}-base-selection-placeholder__inner`)},[$(()=>this.placeholder)],2)],2)):(X(),U(`div`,{class:A(`${c}-base-selection-input`),title:We(this.label),key:`input`},[H(`div`,{class:A(`${c}-base-selection-input__content`)},[d?(X(),U(M,{key:0},[$(()=>d({option:this.selectedOption,handleClose:()=>{}}))],64)):(X(),U(M,{key:1},[p?(X(),U(M,{key:0},[$(()=>p(this.selectedOption,!0))],64)):(X(),U(M,{key:1},[$(()=>_e(this.label,this.selectedOption,!0))],64))],64))],2)],10,[`title`])),$(()=>v)],10,ft)))(y);return X(),U(`div`,{ref:`selfRef`,class:A([`${c}-base-selection`,this.rtlEnabled&&`${c}-base-selection--rtl`,this.themeClass,e&&`${c}-base-selection--${e}-status`,{[`${c}-base-selection--active`]:this.active,[`${c}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${c}-base-selection--disabled`]:this.disabled,[`${c}-base-selection--multiple`]:this.multiple,[`${c}-base-selection--focus`]:this.focused}]),style:J(this.cssVars),onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},[$(()=>y),s?(X(),U(`div`,{key:0,class:A(`${c}-base-selection__border`)},null,2)):$(()=>null),s?(X(),U(`div`,{key:2,class:A(`${c}-base-selection__state-border`)},null,2)):$(()=>null)],46,pt)}}),ht=B([S(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),S(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[C({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),gt={...T.props,to:i.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array},_t=Q({name:`Select`,props:gt,slots:Object,setup(n){let{mergedClsPrefixRef:a,mergedBorderedRef:o,namespaceRef:s,inlineThemeDisabled:c,mergedComponentPropsRef:l}=ce(n),u=T(`Select`,`-select`,ht,ke,n,a),d=Y(n.defaultValue),f=K(n,`value`),m=t(f,d),h=Y(!1),g=Y(``),v=_(n,[`items`,`options`]),y=Y([]),b=Y([]),S=x(()=>b.value.concat(y.value).concat(v.value)),C=x(()=>{let{filter:e}=n;if(e)return e;let{labelField:t,valueField:r}=n;return(e,n)=>{if(!n)return!1;let i=n[t];if(typeof i==`string`)return rt(e,i);let a=n[r];return typeof a==`string`?rt(e,a):typeof a==`number`&&rt(e,String(a))}}),w=x(()=>{if(n.remote)return v.value;{let{value:e}=S,{value:t}=g;return!t.length||!n.filterable?e:at(e,C.value,t,n.childrenField)}}),E=x(()=>{let{valueField:e,childrenField:t}=n,r=it(e,t);return p(w.value,r)}),D=x(()=>ot(S.value,n.valueField,n.childrenField)),O=Y(!1),k=t(K(n,`show`),O),A=Y(null),j=Y(null),M=Y(null),{localeRef:N}=e(`Select`),te=x(()=>n.placeholder??N.value.placeholder),P=[],ne=Y(new Map),F=x(()=>{let{fallbackOption:e}=n;if(e===void 0){let{labelField:e,valueField:t}=n;return n=>({[e]:String(n),[t]:n})}return e===!1?!1:t=>Object.assign(e(t),{value:t})});function I(e){let t=n.remote,{value:r}=ne,{value:i}=D,{value:a}=F,o=[];return e.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(t&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let L=x(()=>{if(n.multiple){let{value:e}=m;return Array.isArray(e)?I(e):[]}return null}),R=x(()=>{let{value:e}=m;return!n.multiple&&!Array.isArray(e)?e===null?null:I([e])[0]||null:null}),z=ee(n,{mergedSize:e=>{let{size:t}=n;if(t)return t;let{mergedSize:r}=e||{};return r?.value?r.value:l?.value?.Select?.size||`medium`}}),{mergedSizeRef:ae,mergedDisabledRef:oe,mergedStatusRef:B}=z;function V(e,t){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=n,{nTriggerFormChange:o,nTriggerFormInput:s}=z;r&&Z(r,e,t),a&&Z(a,e,t),i&&Z(i,e,t),d.value=e,o(),s()}function se(e){let{onBlur:t}=n,{nTriggerFormBlur:r}=z;t&&Z(t,e),r()}function H(){let{onClear:e}=n;e&&Z(e)}function le(e){let{onFocus:t,showOnFocus:r}=n,{nTriggerFormFocus:i}=z;t&&Z(t,e),i(),r&&G()}function U(e){let{onSearch:t}=n;t&&Z(t,e)}function ue(e){let{onScroll:t}=n;t&&Z(t,e)}function de(){let{remote:e,multiple:t}=n;if(e){let{value:e}=ne;if(t){let{valueField:t}=n;L.value?.forEach(n=>{e.set(n[t],n)})}else{let t=R.value;t&&e.set(t[n.valueField],t)}}}function W(e){let{onUpdateShow:t,"onUpdate:show":r}=n;t&&Z(t,e),r&&Z(r,e),O.value=e}function G(){oe.value||(W(!0),O.value=!0,n.filterable&&Ne())}function q(){W(!1)}function fe(){g.value=``,b.value=P}let J=Y(!1);function pe(){n.filterable&&(J.value=!0)}function me(){n.filterable&&(J.value=!1,k.value||fe())}function X(){oe.value||(k.value?n.filterable?Ne():q():G())}function ge(e){M.value?.selfRef?.contains(e.relatedTarget)||(h.value=!1,se(e),q())}function _e(e){le(e),h.value=!0}function ve(){h.value=!0}function ye(e){A.value?.$el.contains(e.relatedTarget)||(h.value=!1,se(e),q())}function be(){A.value?.focus(),q()}function xe(e){k.value&&(A.value?.$el.contains(ie(e))||q())}function Q(e){if(!Array.isArray(e))return[];if(F.value)return Array.from(e);{let{remote:t}=n,{value:r}=D;if(t){let{value:t}=ne;return e.filter(e=>r.has(e)||t.has(e))}return e.filter(e=>r.has(e))}}function Se(e){Ce(e.rawNode)}function Ce(e){if(oe.value)return;let{tag:t,remote:r,clearFilterAfterSelect:i,valueField:a}=n;if(t&&!r){let{value:e}=b,t=e[0]||null;if(t){let e=y.value;e.length?e.push(t):y.value=[t],b.value=P}}if(r&&ne.value.set(e[a],e),n.multiple){let n=Q(m.value),o=n.findIndex(t=>t===e[a]);if(~o){if(n.splice(o,1),t&&!r){let t=we(e[a]);~t&&(y.value.splice(t,1),i&&(g.value=``))}}else n.push(e[a]),i&&(g.value=``);V(n,I(n))}else{if(t&&!r){let t=we(e[a]);~t?y.value=[y.value[t]]:y.value=P}Me(),q(),V(e[a],e)}}function we(e){return y.value.findIndex(t=>t[n.valueField]===e)}function Ee(e){k.value||G();let{value:t}=e.target;g.value=t;let{tag:r,remote:i}=n;if(U(t),r&&!i){if(!t){b.value=P;return}let{onCreate:e}=n,r=e?e(t):{[n.labelField]:t,[n.valueField]:t},{valueField:i,labelField:a}=n;v.value.some(e=>e[i]===r[i]||e[a]===r[a])||y.value.some(e=>e[i]===r[i]||e[a]===r[a])?b.value=P:b.value=[r]}}function De(e){e.stopPropagation();let{multiple:t,tag:r,remote:i,clearCreatedOptionsOnClear:a}=n;!t&&n.filterable&&q(),r&&!i&&a&&(y.value=P),H(),t?V([],[]):V(null,null)}function $(e){!r(e,`action`)&&!r(e,`empty`)&&!r(e,`header`)&&e.preventDefault()}function Ae(e){ue(e)}function je(e){if(!n.keyboard){e.preventDefault();return}switch(e.key){case` `:if(n.filterable)break;e.preventDefault();case`Enter`:if(!A.value?.isComposing){if(k.value){let e=M.value?.getPendingTmNode();e?Se(e):n.filterable||(q(),Me())}else if(G(),n.tag&&J.value){let e=b.value[0];if(e){let t=e[n.valueField],{value:r}=m;n.multiple&&Array.isArray(r)&&r.includes(t)||Ce(e)}}}e.preventDefault();break;case`ArrowUp`:if(e.preventDefault(),n.loading)return;k.value&&M.value?.prev();break;case`ArrowDown`:if(e.preventDefault(),n.loading)return;k.value?M.value?.next():G();break;case`Escape`:k.value&&(Oe(e),q()),A.value?.focus()}}function Me(){A.value?.focus()}function Ne(){A.value?.focusInput()}function Pe(){k.value&&j.value?.syncPosition()}de(),Te(K(n,`options`),de);let Fe={focus:()=>{A.value?.focus()},focusInput:()=>{A.value?.focusInput()},blur:()=>{A.value?.blur()},blurInput:()=>{A.value?.blurInput()}},Ie=x(()=>{let{self:{menuBoxShadow:e}}=u.value;return{"--n-menu-box-shadow":e}}),Le=c?re(`select`,void 0,Ie,n):void 0;return{...Fe,mergedStatus:B,mergedClsPrefix:a,mergedBordered:o,namespace:s,treeMate:E,isMounted:he(),triggerRef:A,menuRef:M,pattern:g,uncontrolledShow:O,mergedShow:k,adjustedTo:i(n),uncontrolledValue:d,mergedValue:m,followerRef:j,localizedPlaceholder:te,selectedOption:R,selectedOptions:L,mergedSize:ae,mergedDisabled:oe,focused:h,activeWithoutMenuOpen:J,inlineThemeDisabled:c,onTriggerInputFocus:pe,onTriggerInputBlur:me,handleTriggerOrMenuResize:Pe,handleMenuFocus:ve,handleMenuBlur:ye,handleMenuTabOut:be,handleTriggerClick:X,handleToggle:Se,handleDeleteOption:Ce,handlePatternInput:Ee,handleClear:De,handleTriggerBlur:ge,handleTriggerFocus:_e,handleKeydown:je,handleMenuAfterLeave:fe,handleMenuClickOutside:xe,handleMenuScroll:Ae,handleMenuKeydown:je,handleMenuMousedown:$,mergedTheme:u,cssVars:c?void 0:Ie,themeClass:Le?.themeClass,onRender:Le?.onRender}},render(){return X(),U(`div`,{class:A(`${this.mergedClsPrefix}-select`)},[j(a,null,{_:1,default:N(()=>[(X(),k(s,null,{_:1,default:N(()=>(X(),k(mt,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{_:1,arrow:N(()=>[this.$slots.arrow?.()])},8,`inlineThemeDisabled.status.inputProps.clsPrefix.showArrow.maxTagCount.ellipsisTagPopoverProps.bordered.active.pattern.placeholder.selectedOption.selectedOptions.multiple.renderTag.renderLabel.filterable.clearable.disabled.size.theme.labelField.valueField.themeOverrides.loading.focused.onClick.onDeleteOption.onPatternInput.onClear.onBlur.onFocus.onKeydown.onPatternBlur.onPatternFocus.onResize.ignoreComposition`.split(`.`))))})),(X(),k(d,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===i.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{_:1,default:N(()=>(X(),k(te,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{_:1,default:N(()=>this.mergedShow||this.displayDirective===`show`?(this.onRender?.(),xe((X(),k(et,G(this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{_:1,empty:N(()=>[this.$slots.empty?.()]),header:N(()=>[this.$slots.header?.()]),action:N(()=>[this.$slots.action?.()])},16,`onResize.inlineThemeDisabled.virtualScroll.class.clsPrefix.labelField.valueField.nodeProps.theme.themeOverrides.treeMate.multiple.size.renderOption.renderLabel.value.style.onToggle.onScroll.onFocus.onBlur.onKeydown.onTabOut.onMousedown.show.showCheckmark.resetMenuOnOptionsChange.scrollbarProps`.split(`.`))),this.displayDirective===`show`?[[R,this.mergedShow],[ye,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ye,this.handleMenuClickOutside,void 0,{capture:!0}]])):null)},8,[`appear`,`onAfterLeave`])))},8,[`show`,`to`,`teleportDisabled`,`containerClass`,`width`,`placement`]))])})],2)}});export{Ke as n,_t as t};