import{i as e,n as t,t as n}from"./createLucideIcon-CaCBVfAm.js";import{k as r}from"./isArrayLikeObject-DDw98r_w.js";import{n as i,t as a}from"./now-DEvl0O6C.js";import{S as o,b as s,c,g as l,l as u,n as d,o as f,v as p}from"./store-D8wSeW02.js";import{a as m,i as h,n as g,r as _,t as v}from"./plus-Dv_3NzgT.js";import{n as y,t as b}from"./FormItem-BrYi7VPa.js";import{n as x,t as S}from"./puzzle-hqQr8FIF.js";import{t as C}from"./Icon-D0B-BHlR.js";import{t as w}from"./Skeleton-DSYSUd1f.js";import{t as T}from"./Switch-BPLNNJsh.js";import{$ as E,$n as ee,A as D,An as O,Bn as k,Bt as te,Cr as ne,Dn as A,Dt as re,E as j,Fn as ie,Gn as M,Gt as ae,Jn as N,Kn as P,Ln as oe,Lt as se,On as F,Ot as ce,Pt as le,Rt as I,Sr as L,T as ue,Tn as R,Tr as z,Un as de,Ut as fe,Vt as B,Wn as V,Xn as H,Yn as U,Yt as pe,Zn as W,_r as me,br as G,cr as K,dt as he,er as ge,gr as q,hr as _e,ht as ve,kn as ye,kt as be,lr as xe,m as Se,mr as J,mt as Ce,nr as we,o as Te,p as Ee,pr as De,q as Oe,qn as Y,qt as ke,sr as Ae,st as je,tr as Me,u as Ne,ur as X,vr as Pe,wn as Z,wr as Q,x as Fe,xr as $}from"./index-CRZeUnv2.js";import{t as Ie}from"./bot-CBTt5jLm.js";import{n as Le,t as Re}from"./refresh-cw-C-JD7Jth.js";import{t as ze}from"./package-DHfegiBQ.js";import{t as Be}from"./search-sxEDANDF.js";import{t as Ve}from"./trash-2-BYVefoTm.js";import{t as He}from"./x-CnzHMayK.js";var Ue=`Expected a function`,We=Math.max,Ge=Math.min;function Ke(e,t,n){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(Ue);t=i(t)||0,r(n)&&(p=!!n.leading,m=`maxWait`in n,c=m?We(i(n.maxWait)||0,t):c,h=`trailing`in n?!!n.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?Ge(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=a();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(a())}function w(){var e=a(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var qe=`Expected a function`;function Je(e,t,n){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(qe);return r(n)&&(i=`leading`in n?!!n.leading:i,a=`trailing`in n?!!n.trailing:a),Ke(e,t,{leading:i,maxWait:t,trailing:a})}var Ye=g(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[g(`&::-webkit-scrollbar`,{width:0,height:0})]),Xe=W({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=G(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=fe();return Ye.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:_,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return ee(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Ze=W({name:`ChevronLeft`,render(){return(()=>{let e=se(`dfe229c2639b2082`);return e[0]||=M(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[M(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`})],-1)})()}}),Qe=W({name:`Add`,render(){return(()=>{let e=se(`b30130fbba5c5b23`);return e[0]||=M(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[M(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)})()}}),$e=ke(`n-tabs`),et={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},tt=W({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:et,slots:Object,setup(e){let t=ge($e,null);return t||pe(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return K(),N(`div`,{class:I([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:Q(this.style)},[B(()=>this.$slots.default?.())],6)}}),nt=[`data-name`,`data-disabled`],rt={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...Fe(et,[`displayDirective`])},it=W({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:rt,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=ge($e);return{trigger:d,mergedClosable:V(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:o,mergedClosable:s,trigger:c,$slots:{default:l}}=this,u=i??a;return K(),N(`div`,{class:I(`${t}-tabs-tab-wrapper`)},[this.internalLeftPadded?(K(),N(`div`,{key:0,class:I(`${t}-tabs-tab-pad`)},null,2)):B(()=>null),(K(),N(`div`,Me({key:n,"data-name":n,"data-disabled":r?!0:void 0},Me({class:[`${t}-tabs-tab`,o===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:c===`click`?this.activateTab:void 0,onMouseenter:c===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[M(`span`,{class:I(`${t}-tabs-tab__label`)},[e?(K(),N(k,{key:0},[M(`div`,{class:I(`${t}-tabs-tab__height-placeholder`)},`\xA0`,2),(K(),P(re,{clsPrefix:t},{default:()=>(K(),P(Qe))},1032,[`clsPrefix`]))],64)):(K(),N(k,{key:1},[l?(K(),N(k,{key:0},[B(()=>l())],64)):(K(),N(k,{key:1},[typeof u==`object`?(K(),N(k,{key:0},[B(()=>u)],64)):(K(),N(k,{key:1},[B(()=>D(u??n))],64))],64))],64))],2),s&&this.type===`card`?(K(),P(Oe,{key:0,clsPrefix:t,class:I(`${t}-tabs-tab__close`),onClick:this.handleClose,disabled:r},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):B(()=>null)],16,nt))],2)}}),at=R(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[Z(`&.transition-disabled`,[R(`tabs-tab`,`
 transition: none !important;
 `),R(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),R(`tabs-tab-pad`,`
 transition: none !important;
 `)]),F(`segment-type`,[R(`tabs-rail`,[Z(`&.transition-disabled`,[R(`tabs-capsule`,`
 transition: none;
 `)])])]),F(`top`,[R(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),F(`left`,[R(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),F(`left, right`,`
 flex-direction: row;
 `,[R(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),R(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),F(`right`,`
 flex-direction: row-reverse;
 `,[R(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),R(`tabs-bar`,`
 left: 0;
 `)]),F(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[R(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),R(`tabs-bar`,`
 top: 0;
 `)]),R(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[R(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),R(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[R(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[F(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),Z(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),F(`flex`,[R(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[R(`tabs-wrapper`,`
 width: 100%;
 `,[R(`tabs-tab`,`
 margin-right: 0;
 `)])])]),R(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),A(`prefix`,`padding-right: 16px;`),A(`suffix`,`padding-left: 16px;`)]),F(`top, bottom`,[Z(`>`,[R(`tabs-nav`,[R(`tabs-nav-scroll-wrapper`,[Z(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),Z(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),F(`shadow-start`,[Z(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),F(`shadow-end`,[Z(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),F(`left, right`,[R(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),Z(`>`,[R(`tabs-nav`,[R(`tabs-nav-scroll-wrapper`,[Z(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),Z(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),F(`shadow-start`,[Z(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),F(`shadow-end`,[Z(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),R(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[R(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[Z(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),Z(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `),Z(`&.transition-disabled`,[Z(`&::before, &::after`,`
 transition: none;
 `)])]),R(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),R(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),R(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),R(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[F(`disabled`,{cursor:`not-allowed`}),A(`close`,`
 margin-inline-start: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),R(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[Z(`&.transition-disabled`,`
 transition: none;
 `),F(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),R(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),R(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[Z(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),Z(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),Z(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),Z(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),Z(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),R(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),F(`line-type, bar-type`,[R(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[Z(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),F(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),F(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),R(`tabs-nav`,[A(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),R(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),F(`line-type`,[F(`top`,[A(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),R(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),R(`tabs-bar`,`
 bottom: -1px;
 `)]),F(`left`,[A(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),R(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),R(`tabs-bar`,`
 right: -1px;
 `)]),F(`right`,[A(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),R(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),R(`tabs-bar`,`
 left: -1px;
 `)]),F(`bottom`,[A(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),R(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),R(`tabs-bar`,`
 top: -1px;
 `)]),A(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),R(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),R(`tabs-bar`,`
 border-radius: 0;
 `)]),F(`card-type`,[A(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),R(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),R(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),R(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[F(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[A(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ye(`disabled`,[Z(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),F(`closable`,`padding-inline-end: 8px;`),F(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),F(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),F(`left, right`,`
 flex-direction: column; 
 `,[A(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),R(`tabs-wrapper`,`
 flex-direction: column;
 `),R(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[R(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),F(`top`,[F(`card-type`,[R(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),A(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),R(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[F(`active`,`
 border-bottom: 1px solid #0000;
 `)]),R(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),R(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),F(`left`,[F(`card-type`,[R(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),A(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),R(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[F(`active`,`
 border-right: 1px solid #0000;
 `)]),R(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),R(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),F(`right`,[F(`card-type`,[R(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),A(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),R(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[F(`active`,`
 border-left: 1px solid #0000;
 `)]),R(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),R(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),F(`bottom`,[F(`card-type`,[R(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),A(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),R(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[F(`active`,`
 border-top: 1px solid #0000;
 `)]),R(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),R(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),R(`tabs-scroll-button`,[F(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),F(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),F(`up`,`
 padding-bottom: 10px;
 `),F(`down`,`
 padding-top: 10px;
 `)])]),ot=W({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:e,disabled:t,type:n,vertical:r,rtl:i,theme:a,themeOverrides:o,handleClick:s}=this,c=n===`next`,l=r?c:i?!c:c;return K(),P(j,{text:!0,disabled:t,size:`small`,theme:a,themeOverrides:o,onClick:s,class:I([`${e}-tabs-scroll-button`,!r&&n===`prev`&&`${e}-tabs-scroll-button--start`,!r&&n===`next`&&`${e}-tabs-scroll-button--end`,r&&n===`prev`&&`${e}-tabs-scroll-button--up`,r&&n===`next`&&`${e}-tabs-scroll-button--down`])},{icon:()=>(K(),P(re,{clsPrefix:e,style:Q(r?{transform:`rotate(90deg)`}:void 0)},{default:()=>l?(K(),P(x,{key:1})):(K(),P(Ze,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),st=Je,ct={...ce.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},lt=W({name:`Tabs`,props:ct,slots:Object,setup(t,{slots:n}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a,mergedRtlRef:o}=ae(t),s=je(`Tabs`,o,r),c=V(()=>{let{placement:e}=t;return e===`start`?s?.value?`right`:`left`:e===`end`?s?.value?`left`:`right`:e}),l=ce(`Tabs`,`-tabs`,at,Ne,t,r),u=G(null),d=G(null),f=G(null),p=G(null),g=G(null),_=G(null),v=G(null),y=G(!0),b=G(!0),x=h(t,[`labelSize`,`size`]),S=V(()=>x.value?x.value:a?.value?.Tabs?.size||`medium`),C=h(t,[`activeName`,`value`]),w=G(C.value??t.defaultValue??(n.default?Ce(n.default())[0]?.props?.name:null)),T=e(C,w),E={id:0},ee=V(()=>{if(t.justifyContent&&t.type!==`card`)return{display:`flex`,justifyContent:t.justifyContent}});J(T,()=>{E.id=0,A(),we(()=>{j()})});function D(){let{value:e}=T;return e===null?null:u.value?.querySelector(`[data-name="${e}"]`)}function k(e){if(t.type===`card`)return;let{value:n}=f;if(!n)return;let i=n.style.opacity===`0`;if(e){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o}=t,s=c.value;if(e.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(ne([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(ne([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function te(){if(t.type===`card`)return;let{value:e}=f;e&&(e.style.opacity=`0`)}function ne(e){let{value:t}=f;if(t)for(let n of e)t.style[n]=``}function A(){if(t.type===`card`)return;let e=D();e?k(e):te()}function re(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function j(){let e=[`top`,`bottom`].includes(c.value),n=D();if(n){if(e){let r=_.value?.$el;if(!r)return;re(r,n,e,t.centerActiveTab)}else{let{value:r}=v;if(!r)return;re(r,n,e,t.centerActiveTab)}}}let ie=G(null),M=0,N=null;function P(e){let t=ie.value;if(t){M=e.getBoundingClientRect().height;let n=`${M}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};N?(r(),N(),N=null):N=r}}function oe(e){let t=ie.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(M,n)}px`};N?(N(),N=null,r()):N=r}}function se(){let e=ie.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let F={value:[]},I=G(`next`);function L(e){let t=T.value,n=`next`;for(let r of F.value){if(r===t)break;if(r===e){n=`prev`;break}}I.value=n,ue(e)}function ue(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&ve(n,e),r&&ve(r,e),i&&ve(i,e),w.value=e}function R(e){let{onClose:n}=t;n&&ve(n,e)}function z(e){if([`top`,`bottom`].includes(c.value)){let{value:t}=_;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!s?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=v;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let de=!0;function fe(){let{value:e}=f;if(!e)return;de&&=!1;let t=`transition-disabled`;e.classList.add(t),A(),e.classList.remove(t)}let B=G(null);function H({transitionDisabled:e}){let t=u.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=D();n&&B.value&&(B.value.style.width=`${n.offsetWidth}px`,B.value.style.height=`${n.offsetHeight}px`,B.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&B.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}J([T],()=>{t.type===`segment`&&we(()=>{H({transitionDisabled:!1})})}),Ae(()=>{t.type===`segment`&&H({transitionDisabled:!0})});let U=0;function pe(e){if(e.contentRect.width===0&&e.contentRect.height===0||U===e.contentRect.width)return;U=e.contentRect.width;let{type:n}=t;(n===`line`||n===`bar`)&&(de||t.justifyContent?.startsWith(`space`))&&fe(),n!==`segment`&&Te(Se())}let W=st(pe,64);function me(){let{type:e}=t;e===`line`||e===`bar`?fe():e===`segment`&&H({transitionDisabled:!0})}J([()=>t.justifyContent,()=>t.size],()=>{we(()=>{(t.type===`line`||t.type===`bar`)&&fe()})}),J([c,()=>s?.value],()=>{we(()=>{me(),Te(Se(),{instantly:!0})})}),J(()=>t.type,()=>{we(()=>{let e=d.value;e&&(e.classList.add(`transition-disabled`),me(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let K=G(!1);function he(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=c.value;if(!K.value)o===`top`||o===`bottom`?i<n&&(K.value=!0):a<r&&(K.value=!0);else{let{value:e}=g;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(K.value=!1):a-r>e.$el.offsetHeight&&(K.value=!1)}Te(_.value?.$el||null)}let ge=st(he,64);function q(){let{onAdd:e}=t;e&&e()}let ye=G(!1);function Se(){let e=c.value;return(e===`top`||e===`bottom`?_.value?.$el:v.value)||null}function Te(e,t={instantly:!1}){if(!e)return;let n=t.instantly?p.value:null;n&&n.classList.add(`transition-disabled`);let r=c.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);y.value=i<=1,b.value=i+r>=n-1,ye.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;y.value=t<=1,b.value=t+r>=n-1,ye.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let Ee=st(e=>{Te(e.target)},64);xe($e,{triggerRef:$(t,`trigger`),tabStyleRef:$(t,`tabStyle`),tabClassRef:$(t,`tabClass`),addTabStyleRef:$(t,`addTabStyle`),addTabClassRef:$(t,`addTabClass`),paneClassRef:$(t,`paneClass`),paneStyleRef:$(t,`paneStyle`),mergedClsPrefixRef:r,typeRef:$(t,`type`),closableRef:$(t,`closable`),valueRef:T,tabChangeIdRef:E,onBeforeLeaveRef:$(t,`onBeforeLeave`),activateTab:L,handleClose:R,handleAdd:q}),m(()=>{A(),j()}),_e(()=>{let{value:e}=p;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;y.value?e.classList.remove(n):e.classList.add(n),b.value?e.classList.remove(i):e.classList.add(i)});let De={syncBarPosition:()=>{A()},scrollToCurrentTab:()=>{j()}},Oe=()=>{H({transitionDisabled:!0})},Y=V(()=>{let{value:e}=S,{type:n}=t,r=`${e}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:C,[O(`panePadding`,e)]:w,[O(`tabPadding`,r)]:T,[O(`tabPaddingVertical`,r)]:E,[O(`tabGap`,r)]:ee,[O(`tabGap`,`${r}Vertical`)]:D,[O(`tabTextColor`,n)]:k,[O(`tabTextColorActive`,n)]:te,[O(`tabTextColorHover`,n)]:ne,[O(`tabTextColorDisabled`,n)]:A,[O(`tabFontSize`,e)]:re},common:{cubicBezierEaseInOut:j}}=l.value;return{"--n-bezier":j,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":re,"--n-tab-text-color":k,"--n-tab-text-color-active":te,"--n-tab-text-color-disabled":A,"--n-tab-text-color-hover":ne,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":C,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":E,"--n-tab-gap":ee,"--n-tab-gap-vertical":D,"--n-pane-padding-left":le(w,`left`),"--n-pane-padding-right":le(w,`right`),"--n-pane-padding-top":le(w,`top`),"--n-pane-padding-bottom":le(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),ke=i?be(`tabs`,V(()=>`${S.value[0]}${t.type[0]}`),Y,t):void 0;return{mergedClsPrefix:r,mergedValue:T,renderedNames:new Set,segmentCapsuleElRef:B,tabsPaneWrapperRef:ie,tabsElRef:u,selfElRef:d,barElRef:f,addTabInstRef:g,xScrollInstRef:_,scrollWrapperElRef:p,addTabFixed:K,tabWrapperStyle:ee,handleNavResize:W,mergedSize:S,handleScroll:Ee,handleTabsResize:ge,cssVars:i?void 0:Y,themeClass:ke?.themeClass,animationDirection:I,renderNameListRef:F,yScrollElRef:v,handleSegmentResize:Oe,onAnimationBeforeLeave:P,onAnimationEnter:oe,onAnimationAfterEnter:se,onRender:ke?.onRender,startReachedRef:y,endReachedRef:b,isOverflow:ye,handleButtonClick:z,mergedTheme:l,rtlEnabled:s,mergedPlacement:c,...De}},render(){let{mergedClsPrefix:e,type:t,mergedPlacement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,startReachedRef:u,endReachedRef:d,isOverflow:f,showScrollButton:p,handleButtonClick:m,mergedTheme:h,rtlEnabled:g,$slots:{default:_,prefix:v,suffix:y}}=this;s?.();let b=_?Ce(_()).filter(e=>e.type.__TAB_PANE__===!0):[],x=_?Ce(_()).filter(e=>e.type.__TAB__===!0):[],S=!x.length,C=t===`card`,w=t===`segment`,T=!C&&!w&&this.justifyContent;o.value=[];let ee=()=>{let t=(K(),N(`div`,{style:Q(this.tabWrapperStyle),class:I(`${e}-tabs-wrapper`)},[T?B(()=>null):(K(),N(`div`,{key:1,class:I(`${e}-tabs-scroll-padding`),style:Q(n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),S?(K(),N(k,{key:2},[B(()=>b.map((e,t)=>(o.value.push(e.props.name),pt((K(),P(it,Me(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!T||T===`center`||T===`start`||T===`end`)}),te(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(K(),N(k,{key:3},[B(()=>x.map((e,t)=>(o.value.push(e.props.name),pt(t!==0&&!T?ft(e):e))))],64)),!r&&i&&C?(K(),N(k,{key:4},[B(()=>dt(i,(S?b.length:x.length)!==0))],64)):B(()=>null),T?B(()=>null):(K(),N(`div`,{key:7,class:I(`${e}-tabs-scroll-padding`),style:Q({width:`${this.tabsPadding}px`})},null,6)),C?B(()=>null):(K(),N(`div`,{key:9,ref:`barElRef`,class:I(`${e}-tabs-bar`)},null,2))],6));return K(),N(`div`,{ref:`tabsElRef`,class:I(`${e}-tabs-nav-scroll-content`)},[C&&i?(K(),P(E,{key:0,onResize:this.handleTabsResize},{default:()=>t},1032,[`onResize`])):(K(),N(k,{key:1},[B(()=>t)],64)),C?(K(),N(`div`,{key:2,class:I(`${e}-tabs-pad`)},null,2)):B(()=>null)],2)},D=w?`top`:n;return K(),N(`div`,{ref:`selfElRef`,class:I([`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${D}`,g&&`${e}-tabs--rtl`]),style:Q(this.cssVars)},[M(`div`,{class:I([`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${D}`,`${e}-tabs-nav`])},[B(()=>he(v,t=>t&&(K(),N(`div`,{class:I(`${e}-tabs-nav__prefix`)},[B(()=>t)],2)))),w?(K(),P(E,{key:0,onResize:this.handleSegmentResize},{default:()=>(K(),N(`div`,{class:I(`${e}-tabs-rail`),ref:`tabsElRef`},[M(`div`,{class:I(`${e}-tabs-capsule`),ref:`segmentCapsuleElRef`},[M(`div`,{class:I(`${e}-tabs-wrapper`)},[M(`div`,{class:I(`${e}-tabs-tab`)},null,2)],2)],2),S?(K(),N(k,{key:0},[B(()=>b.map((e,t)=>(o.value.push(e.props.name),K(),P(it,Me(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),te(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(K(),N(k,{key:1},[B(()=>x.map((e,t)=>(o.value.push(e.props.name),t===0?e:ft(e))))],64))],2))},1032,[`onResize`])):(K(),N(k,{key:1},[B(()=>p&&f&&(K(),P(ot,{mergedClsPrefix:e,type:`prev`,vertical:D===`left`||D===`right`,disabled:u,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(K(),P(E,{onResize:this.handleNavResize},{default:()=>(K(),N(`div`,{class:I(`${e}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(D)?(K(),P(Xe,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:ee},1032,[`onScroll`])):(K(),N(`div`,{key:1,class:I(`${e}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[B(()=>ee())],42,[`onScroll`]))],2))},1032,[`onResize`])),B(()=>p&&f&&(K(),P(ot,{mergedClsPrefix:e,type:`next`,vertical:D===`left`||D===`right`,disabled:d,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),r&&i&&C?(K(),N(k,{key:2},[B(()=>dt(i,!0))],64)):B(()=>null),B(()=>he(y,t=>t&&(K(),N(`div`,{class:I(`${e}-tabs-nav__suffix`)},[B(()=>t)],2))))],2),B(()=>S&&(this.animated&&(D===`top`||D===`bottom`)?(K(),N(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:Q(l),class:I([`${e}-tabs-pane-wrapper`,c])},[B(()=>ut(b,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):ut(b,this.mergedValue,this.renderedNames)))],6)}});function ut(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?me(e,[[oe,c]]):e)}}),o?(K(),P(ie,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):s}function dt(e,t){return K(),P(it,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled},null,8,[`internalLeftPadded`,`disabled`])}function ft(e){let t=de(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function pt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var mt=n(`plug`,[[`path`,{d:`M12 22v-5`,key:`1ega77`}],[`path`,{d:`M15 8V2`,key:`18g5xt`}],[`path`,{d:`M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z`,key:`1xoxul`}],[`path`,{d:`M9 8V2`,key:`14iosj`}]]),ht={class:`skill-manager`},gt={class:`sm-head`},_t={class:`sm-title`},vt={class:`muted sm-count`},yt={class:`sm-actions`},bt={class:`sm-cats`},xt={class:`sm-body`},St={class:`group-title`},Ct={class:`muted`},wt={class:`sm-grid`},Tt={class:`card-head`},Et={class:`card-name`},Dt={class:`card-desc`},Ot={class:`card-tools`},kt={key:0,class:`muted tiny`},At={class:`card-foot`},jt=W({__name:`SkillManager`,props:{skills:{}},emits:[`toggle`,`remove`,`reload`,`add`],setup(e){let n=e,r=[`系统`,`文件`,`代码`,`网络`,`数学`,`通用`,`其他`],i=G(``),a=G(`全部`),c=V(()=>{let e=i.value.trim().toLowerCase(),t=t=>!e||t.name.toLowerCase().includes(e)||(t.description||``).toLowerCase().includes(e)||(t.tools||[]).some(t=>t.toLowerCase().includes(e)),a=new Map;for(let e of n.skills){if(!t(e))continue;let n=e.category||`其他`;a.has(n)||a.set(n,[]),a.get(n).push(e)}let o=Array.from(a.entries()).map(([e,t])=>({category:e,list:t}));return o.sort((e,t)=>{let n=r.indexOf(e.category),i=r.indexOf(t.category);return(n===-1?99:n)-(i===-1?99:i)}),o}),l=V(()=>[`全部`,...c.value.map(e=>e.category)]),u=V(()=>a.value===`全部`?c.value:c.value.filter(e=>e.category===a.value)),d=V(()=>n.skills.filter(e=>e.enabled).length);return(n,r)=>(K(),N(`div`,ht,[M(`div`,gt,[M(`div`,_t,[H(L(S),{size:20}),r[3]||=M(`h2`,null,`技能管理`,-1),M(`span`,vt,z(d.value)+` / `+z(e.skills.length)+` 已启用`,1)]),M(`div`,yt,[H(L(t),{value:i.value,"onUpdate:value":r[0]||=e=>i.value=e,class:`sm-search`,placeholder:`搜索技能 / 工具…`,clearable:``},{prefix:q(()=>[H(L(C),{component:L(Be)},null,8,[`component`])]),_:1},8,[`value`]),H(L(j),{onClick:r[1]||=e=>n.$emit(`reload`)},{icon:q(()=>[H(L(Re),{size:15})]),default:q(()=>[r[4]||=U(` 重载 `,-1)]),_:1}),H(L(j),{type:`primary`,onClick:r[2]||=e=>n.$emit(`add`)},{icon:q(()=>[H(L(v),{size:15})]),default:q(()=>[r[5]||=U(` 新建技能 `,-1)]),_:1})])]),M(`div`,bt,[(K(!0),N(k,null,X(l.value,e=>(K(),P(L(s),{key:e,class:`cat-chip`,type:a.value===e?`primary`:`default`,bordered:!1,checkable:``,checked:a.value===e,"onUpdate:checked":t=>a.value=e},{default:q(()=>[U(z(e),1)]),_:2},1032,[`type`,`checked`,`onUpdate:checked`]))),128))]),M(`div`,xt,[u.value.length?Y(``,!0):(K(),P(L(o),{key:0,class:`sm-empty`,description:`没有匹配的技能`})),(K(!0),N(k,null,X(u.value,e=>(K(),N(`section`,{key:e.category,class:`sm-group`},[M(`h4`,St,[U(z(e.category)+` `,1),M(`span`,Ct,`· `+z(e.list.length),1)]),M(`div`,wt,[(K(!0),N(k,null,X(e.list,e=>(K(),P(L(ue),{key:e.id,class:ne([`skill-card`,{off:!e.enabled}]),size:`small`},{default:q(()=>[M(`div`,Tt,[M(`div`,Et,[H(L(ze),{size:15}),M(`b`,null,z(e.name),1),H(L(s),{size:`small`,bordered:!1,type:e.builtin?`default`:`info`},{default:q(()=>[U(z(e.builtin?`内置`:`自定义`),1)]),_:2},1032,[`type`])]),H(L(T),{value:e.enabled,size:`small`,"onUpdate:value":t=>n.$emit(`toggle`,e)},null,8,[`value`,`onUpdate:value`])]),M(`p`,Dt,z(e.description||`（无描述）`),1),M(`div`,Ot,[(K(!0),N(k,null,X(e.tools||[],e=>(K(),P(L(s),{key:e,size:`small`,bordered:!1,class:`tool-chip`},{default:q(()=>[U(z(e),1)]),_:2},1024))),128)),!e.tools||!e.tools.length?(K(),N(`span`,kt,`无工具`)):Y(``,!0)]),M(`div`,At,[M(`span`,{class:ne([`state`,e.enabled?`on`:`off`])},z(e.enabled?`已启用`:`已禁用`),3),e.builtin?Y(``,!0):(K(),P(L(j),{key:0,quaternary:``,circle:``,size:`tiny`,title:`删除技能`,type:`error`,onClick:t=>n.$emit(`remove`,e.id)},{icon:q(()=>[H(L(Ve),{size:14})]),_:1},8,[`onClick`]))])]),_:2},1032,[`class`]))),128))])]))),128))])]))}}),Mt={class:`modal-actions`},Nt=W({__name:`SkillModal`,props:{open:{type:Boolean}},emits:[`close`,`submit`],setup(e,{emit:n}){let r=e,i=n,a=Ee(),o=Pe({name:``,description:``,code:``}),s=G(!1);J(()=>r.open,e=>{e&&(o.name=``,o.description=``,o.code=``,s.value=!1)});function c(){if(!o.code.trim()){a.warning(`代码不能为空`);return}s.value=!0,i(`submit`,{...o})}return(n,r)=>(K(),P(L(Se),{show:e.open,"onUpdate:show":r[4]||=e=>i(`close`)},{default:q(()=>[H(L(ue),{class:`modal-card modal-w-md`,title:`新建自定义技能`,bordered:!1,size:`medium`},{footer:q(()=>[M(`div`,Mt,[H(L(j),{onClick:r[3]||=e=>i(`close`)},{default:q(()=>[...r[5]||=[U(`取消`,-1)]]),_:1}),H(L(j),{type:`primary`,loading:s.value,onClick:c},{default:q(()=>[...r[6]||=[U(`创建`,-1)]]),_:1},8,[`loading`])])]),default:q(()=>[H(L(y),{"label-placement":`top`,"show-feedback":!1},{default:q(()=>[H(L(b),{label:`名称`},{default:q(()=>[H(L(t),{value:o.name,"onUpdate:value":r[0]||=e=>o.name=e,placeholder:`我的技能`},null,8,[`value`])]),_:1}),H(L(b),{label:`描述`},{default:q(()=>[H(L(t),{value:o.description,"onUpdate:value":r[1]||=e=>o.description=e,placeholder:`这个技能做什么`},null,8,[`value`])]),_:1}),H(L(b),{label:`代码（用 @tool 装饰函数，可定义 META 元信息）`},{default:q(()=>[H(L(t),{value:o.code,"onUpdate:value":r[2]||=e=>o.code=e,type:`textarea`,autosize:{minRows:10,maxRows:20},placeholder:`用 @tool 装饰定义一个工具函数`},null,8,[`value`])]),_:1})]),_:1})]),_:1})]),_:1},8,[`show`]))}}),Pt={class:`page`},Ft={class:`page-head`},It={class:`page-title`},Lt={class:`page-body page-body-flush experts-body`},Rt={class:`tab-label`},zt={class:`tab-label`},Bt={key:0,class:`grid-cards`},Vt={key:2,class:`grid-cards`},Ht={class:`card-head`},Ut={class:`card-name`},Wt={class:`card-desc card-desc-flat`},Gt=W({__name:`Experts`,setup(e){let t=Ee(),n=G(`skills`),r=G(!1),i=[{name:`工作目录`,desc:`读写当前会话隔离目录下的文件`,ready:!0},{name:`Shell 执行`,desc:`在沙箱内执行命令并返回输出`,ready:!0},{name:`Web 检索`,desc:`联网搜索与抓取页面内容`,ready:!0},{name:`计算器`,desc:`安全的数学表达式求值`,ready:!0},{name:`腾讯文档`,desc:`读取与写入腾讯文档（需授权）`,ready:!1},{name:`GitHub`,desc:`仓库、Issue 与 PR 操作（需授权）`,ready:!1}];async function a(e){let n=await d(e);n.ok?(r.value=!1,t.success(`技能创建成功`)):t.error(`创建失败: `+(n.error||`未知错误`))}let m=Te(),h=G(!0);return Ae(async()=>{await f(),h.value=!1,m.query.new===`1`&&(r.value=!0)}),(e,t)=>(K(),N(`div`,Pt,[M(`div`,Ft,[M(`div`,It,[H(L(S),{size:20}),t[3]||=M(`h1`,null,`专家 · 技能 · 连接器`,-1)])]),M(`div`,Lt,[H(L(lt),{value:n.value,"onUpdate:value":t[0]||=e=>n.value=e,type:`line`,size:`medium`,class:`experts-tabs`},{default:q(()=>[H(L(tt),{name:`skills`},{tab:q(()=>[M(`span`,Rt,[H(L(S),{size:15}),t[4]||=U(` 技能`,-1)])]),_:1}),H(L(tt),{name:`connectors`},{tab:q(()=>[M(`span`,zt,[H(L(mt),{size:15}),t[5]||=U(` 连接器`,-1)])]),_:1})]),_:1},8,[`value`]),n.value===`skills`&&h.value?(K(),N(`div`,Bt,[(K(),N(k,null,X(4,e=>H(L(ue),{key:`sk`+e,size:`small`},{default:q(()=>[H(L(w),{text:``,width:`42%`,class:`sk-title`}),H(L(w),{text:``,repeat:2})]),_:1})),64))])):n.value===`skills`?(K(),P(jt,{key:1,skills:L(l).skills,onToggle:L(p),onRemove:L(u),onReload:L(c),onAdd:t[1]||=e=>r.value=!0},null,8,[`skills`,`onToggle`,`onRemove`,`onReload`])):(K(),N(`div`,Vt,[(K(),N(k,null,X(i,e=>H(L(ue),{key:e.name,size:`small`},{default:q(()=>[M(`div`,Ht,[M(`div`,Ut,[H(L(Ie),{size:15}),M(`b`,null,z(e.name),1)]),H(L(s),{size:`small`,bordered:!1,type:e.ready?`success`:`default`},{icon:q(()=>[(K(),P(De(e.ready?L(Le):L(He)),{size:12}))]),default:q(()=>[U(` `+z(e.ready?`已就绪`:`未接入`),1)]),_:2},1032,[`type`])]),M(`p`,Wt,z(e.desc),1)]),_:2},1024)),64)),i.length?Y(``,!0):(K(),P(L(o),{key:0,class:`page-empty`,description:`暂无连接器`}))]))]),H(Nt,{open:r.value,onClose:t[2]||=e=>r.value=!1,onSubmit:a},null,8,[`open`])]))}});export{Gt as default};