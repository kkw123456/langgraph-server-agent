import{i as e,n as t,t as n}from"./createLucideIcon-Bxm2uauf.js";import{k as r}from"./isArrayLikeObject-DDw98r_w.js";import{n as i,t as a}from"./now-DEvl0O6C.js";import{S as o,b as s,c,g as l,l as u,n as d,o as f,v as p}from"./store-BHGwtfBp.js";import{a as m,i as h,n as g,r as _,t as v}from"./plus-UD13EQTL.js";import{n as y,t as b}from"./FormItem-DCh-P7g1.js";import{n as x,t as S}from"./puzzle-Bx8Wgi-0.js";import{t as C}from"./Icon-BhiY6_8X.js";import{n as w,t as T}from"./trash-2-3DiTVboU.js";import{t as ee}from"./Switch-BtXj1aDI.js";import{$ as te,$n as E,A as ne,An as D,Bn as O,Bt as re,Cr as k,Dn as A,Dt as j,E as M,Fn as ie,Gn as N,Gt as ae,Hn as oe,Jn as P,Kn as se,Ln as ce,Lt as le,On as F,Ot as ue,Pt as de,Qn as fe,Rt as I,Sr as pe,T as me,Tn as L,Un as R,Ut as z,Vt as B,Wn as V,Xn as H,Yn as U,Yt as he,_r as W,br as G,cr as ge,dt as _e,er as ve,fr as ye,gr as be,hr as K,ht as xe,kn as Se,kt as Ce,lr as q,m as we,mr as Te,mt as Ee,o as De,or as Oe,p as ke,pr as Ae,q as je,qn as J,qt as Me,sr as Y,st as Ne,tr as Pe,u as Fe,wn as X,wr as Z,x as Ie,xr as Q,yr as $}from"./index-C0Q3aJro.js";import{t as Le}from"./bot-zCuoO1K-.js";import{n as Re,t as ze}from"./refresh-cw-HN0g87pu.js";import{t as Be}from"./package-BPUkuo19.js";import{t as Ve}from"./search-CvGuzNpk.js";import{t as He}from"./x-BBJZzheW.js";var Ue=`Expected a function`,We=Math.max,Ge=Math.min;function Ke(e,t,n){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(Ue);t=i(t)||0,r(n)&&(p=!!n.leading,m=`maxWait`in n,c=m?We(i(n.maxWait)||0,t):c,h=`trailing`in n?!!n.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?Ge(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=a();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(a())}function w(){var e=a(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var qe=`Expected a function`;function Je(e,t,n){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(qe);return r(n)&&(i=`leading`in n?!!n.leading:i,a=`trailing`in n?!!n.trailing:a),Ke(e,t,{leading:i,maxWait:t,trailing:a})}var Ye=g(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[g(`&::-webkit-scrollbar`,{width:0,height:0})]),Xe=H({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=$(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=z();return Ye.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:_,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return fe(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Ze=H({name:`ChevronLeft`,render(){return(()=>{let e=le(`dfe229c2639b2082`);return e[0]||=V(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[V(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`})],-1)})()}}),Qe=H({name:`Add`,render(){return(()=>{let e=le(`b30130fbba5c5b23`);return e[0]||=V(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[V(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)})()}}),$e=Me(`n-tabs`),et={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},tt=H({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:et,slots:Object,setup(e){let t=E($e,null);return t||he(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return Y(),J(`div`,{class:I([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:k(this.style)},[B(()=>this.$slots.default?.())],6)}}),nt=[`data-name`,`data-disabled`],rt={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...Ie(et,[`displayDirective`])},it=H({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:rt,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=E($e);return{trigger:d,mergedClosable:R(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:o,mergedClosable:s,trigger:c,$slots:{default:l}}=this,u=i??a;return Y(),J(`div`,{class:I(`${t}-tabs-tab-wrapper`)},[this.internalLeftPadded?(Y(),J(`div`,{key:0,class:I(`${t}-tabs-tab-pad`)},null,2)):B(()=>null),(Y(),J(`div`,ve({key:n,"data-name":n,"data-disabled":r?!0:void 0},ve({class:[`${t}-tabs-tab`,o===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:c===`click`?this.activateTab:void 0,onMouseenter:c===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[V(`span`,{class:I(`${t}-tabs-tab__label`)},[e?(Y(),J(O,{key:0},[V(`div`,{class:I(`${t}-tabs-tab__height-placeholder`)},`\xA0`,2),(Y(),N(j,{clsPrefix:t},{default:()=>(Y(),N(Qe))},1032,[`clsPrefix`]))],64)):(Y(),J(O,{key:1},[l?(Y(),J(O,{key:0},[B(()=>l())],64)):(Y(),J(O,{key:1},[typeof u==`object`?(Y(),J(O,{key:0},[B(()=>u)],64)):(Y(),J(O,{key:1},[B(()=>ne(u??n))],64))],64))],64))],2),s&&this.type===`card`?(Y(),N(je,{key:0,clsPrefix:t,class:I(`${t}-tabs-tab__close`),onClick:this.handleClose,disabled:r},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):B(()=>null)],16,nt))],2)}}),at=L(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[X(`&.transition-disabled`,[L(`tabs-tab`,`
 transition: none !important;
 `),L(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),L(`tabs-tab-pad`,`
 transition: none !important;
 `)]),F(`segment-type`,[L(`tabs-rail`,[X(`&.transition-disabled`,[L(`tabs-capsule`,`
 transition: none;
 `)])])]),F(`top`,[L(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),F(`left`,[L(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),F(`left, right`,`
 flex-direction: row;
 `,[L(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),L(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),F(`right`,`
 flex-direction: row-reverse;
 `,[L(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),L(`tabs-bar`,`
 left: 0;
 `)]),F(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[L(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),L(`tabs-bar`,`
 top: 0;
 `)]),L(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[L(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),L(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[L(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[F(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),X(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),F(`flex`,[L(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[L(`tabs-wrapper`,`
 width: 100%;
 `,[L(`tabs-tab`,`
 margin-right: 0;
 `)])])]),L(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),A(`prefix`,`padding-right: 16px;`),A(`suffix`,`padding-left: 16px;`)]),F(`top, bottom`,[X(`>`,[L(`tabs-nav`,[L(`tabs-nav-scroll-wrapper`,[X(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),X(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),F(`shadow-start`,[X(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),F(`shadow-end`,[X(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),F(`left, right`,[L(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),X(`>`,[L(`tabs-nav`,[L(`tabs-nav-scroll-wrapper`,[X(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),X(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),F(`shadow-start`,[X(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),F(`shadow-end`,[X(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),L(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[L(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[X(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),X(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `),X(`&.transition-disabled`,[X(`&::before, &::after`,`
 transition: none;
 `)])]),L(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),L(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),L(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),L(`tabs-tab`,`
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
 `)]),L(`tabs-bar`,`
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
 `,[X(`&.transition-disabled`,`
 transition: none;
 `),F(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),L(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),L(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[X(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),X(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),X(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),X(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),X(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),L(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),F(`line-type, bar-type`,[L(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[X(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),F(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),F(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),L(`tabs-nav`,[A(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),L(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),F(`line-type`,[F(`top`,[A(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),L(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),L(`tabs-bar`,`
 bottom: -1px;
 `)]),F(`left`,[A(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),L(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),L(`tabs-bar`,`
 right: -1px;
 `)]),F(`right`,[A(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),L(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),L(`tabs-bar`,`
 left: -1px;
 `)]),F(`bottom`,[A(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),L(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),L(`tabs-bar`,`
 top: -1px;
 `)]),A(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),L(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),L(`tabs-bar`,`
 border-radius: 0;
 `)]),F(`card-type`,[A(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),L(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),L(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),L(`tabs-tab`,`
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
 `),Se(`disabled`,[X(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),F(`closable`,`padding-inline-end: 8px;`),F(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),F(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),F(`left, right`,`
 flex-direction: column; 
 `,[A(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),L(`tabs-wrapper`,`
 flex-direction: column;
 `),L(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[L(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),F(`top`,[F(`card-type`,[L(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),A(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),L(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[F(`active`,`
 border-bottom: 1px solid #0000;
 `)]),L(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),L(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),F(`left`,[F(`card-type`,[L(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),A(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),L(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[F(`active`,`
 border-right: 1px solid #0000;
 `)]),L(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),L(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),F(`right`,[F(`card-type`,[L(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),A(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),L(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[F(`active`,`
 border-left: 1px solid #0000;
 `)]),L(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),L(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),F(`bottom`,[F(`card-type`,[L(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),A(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),L(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[F(`active`,`
 border-top: 1px solid #0000;
 `)]),L(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),L(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),L(`tabs-scroll-button`,[F(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),F(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),F(`up`,`
 padding-bottom: 10px;
 `),F(`down`,`
 padding-top: 10px;
 `)])]),ot=H({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:e,disabled:t,type:n,vertical:r,rtl:i,theme:a,themeOverrides:o,handleClick:s}=this,c=n===`next`,l=r?c:i?!c:c;return Y(),N(M,{text:!0,disabled:t,size:`small`,theme:a,themeOverrides:o,onClick:s,class:I([`${e}-tabs-scroll-button`,!r&&n===`prev`&&`${e}-tabs-scroll-button--start`,!r&&n===`next`&&`${e}-tabs-scroll-button--end`,r&&n===`prev`&&`${e}-tabs-scroll-button--up`,r&&n===`next`&&`${e}-tabs-scroll-button--down`])},{icon:()=>(Y(),N(j,{clsPrefix:e,style:k(r?{transform:`rotate(90deg)`}:void 0)},{default:()=>l?(Y(),N(x,{key:1})):(Y(),N(Ze,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),st=Je,ct={...ue.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},lt=H({name:`Tabs`,props:ct,slots:Object,setup(t,{slots:n}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a,mergedRtlRef:o}=ae(t),s=Ne(`Tabs`,o,r),c=R(()=>{let{placement:e}=t;return e===`start`?s?.value?`right`:`left`:e===`end`?s?.value?`left`:`right`:e}),l=ue(`Tabs`,`-tabs`,at,Fe,t,r),u=$(null),d=$(null),f=$(null),p=$(null),g=$(null),_=$(null),v=$(null),y=$(!0),b=$(!0),x=h(t,[`labelSize`,`size`]),S=R(()=>x.value?x.value:a?.value?.Tabs?.size||`medium`),C=h(t,[`activeName`,`value`]),w=$(C.value??t.defaultValue??(n.default?Ee(n.default())[0]?.props?.name:null)),T=e(C,w),ee={id:0},te=R(()=>{if(t.justifyContent&&t.type!==`card`)return{display:`flex`,justifyContent:t.justifyContent}});Ae(T,()=>{ee.id=0,k(),Pe(()=>{j()})});function E(){let{value:e}=T;return e===null?null:u.value?.querySelector(`[data-name="${e}"]`)}function ne(e){if(t.type===`card`)return;let{value:n}=f;if(!n)return;let i=n.style.opacity===`0`;if(e){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o}=t,s=c.value;if(e.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(re([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(re([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function O(){if(t.type===`card`)return;let{value:e}=f;e&&(e.style.opacity=`0`)}function re(e){let{value:t}=f;if(t)for(let n of e)t.style[n]=``}function k(){if(t.type===`card`)return;let e=E();e?ne(e):O()}function A(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function j(){let e=[`top`,`bottom`].includes(c.value),n=E();if(n){if(e){let r=_.value?.$el;if(!r)return;A(r,n,e,t.centerActiveTab)}else{let{value:r}=v;if(!r)return;A(r,n,e,t.centerActiveTab)}}}let M=$(null),ie=0,N=null;function oe(e){let t=M.value;if(t){ie=e.getBoundingClientRect().height;let n=`${ie}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};N?(r(),N(),N=null):N=r}}function P(e){let t=M.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(ie,n)}px`};N?(N(),N=null,r()):N=r}}function se(){let e=M.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let ce={value:[]},le=$(`next`);function F(e){let t=T.value,n=`next`;for(let r of ce.value){if(r===t)break;if(r===e){n=`prev`;break}}le.value=n,fe(e)}function fe(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&xe(n,e),r&&xe(r,e),i&&xe(i,e),w.value=e}function I(e){let{onClose:n}=t;n&&xe(n,e)}function pe(e){if([`top`,`bottom`].includes(c.value)){let{value:t}=_;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!s?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=v;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let me=!0;function L(){let{value:e}=f;if(!e)return;me&&=!1;let t=`transition-disabled`;e.classList.add(t),k(),e.classList.remove(t)}let z=$(null);function B({transitionDisabled:e}){let t=u.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=E();n&&z.value&&(z.value.style.width=`${n.offsetWidth}px`,z.value.style.height=`${n.offsetHeight}px`,z.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&z.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}Ae([T],()=>{t.type===`segment`&&Pe(()=>{B({transitionDisabled:!1})})}),Oe(()=>{t.type===`segment`&&B({transitionDisabled:!0})});let V=0;function H(e){if(e.contentRect.width===0&&e.contentRect.height===0||V===e.contentRect.width)return;V=e.contentRect.width;let{type:n}=t;(n===`line`||n===`bar`)&&(me||t.justifyContent?.startsWith(`space`))&&L(),n!==`segment`&&Se(K())}let U=st(H,64);function he(){let{type:e}=t;e===`line`||e===`bar`?L():e===`segment`&&B({transitionDisabled:!0})}Ae([()=>t.justifyContent,()=>t.size],()=>{Pe(()=>{(t.type===`line`||t.type===`bar`)&&L()})}),Ae([c,()=>s?.value],()=>{Pe(()=>{he(),Se(K(),{instantly:!0})})}),Ae(()=>t.type,()=>{Pe(()=>{let e=d.value;e&&(e.classList.add(`transition-disabled`),he(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let W=$(!1);function _e(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=c.value;if(!W.value)o===`top`||o===`bottom`?i<n&&(W.value=!0):a<r&&(W.value=!0);else{let{value:e}=g;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(W.value=!1):a-r>e.$el.offsetHeight&&(W.value=!1)}Se(_.value?.$el||null)}let ve=st(_e,64);function ye(){let{onAdd:e}=t;e&&e()}let be=$(!1);function K(){let e=c.value;return(e===`top`||e===`bottom`?_.value?.$el:v.value)||null}function Se(e,t={instantly:!1}){if(!e)return;let n=t.instantly?p.value:null;n&&n.classList.add(`transition-disabled`);let r=c.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);y.value=i<=1,b.value=i+r>=n-1,be.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;y.value=t<=1,b.value=t+r>=n-1,be.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let q=st(e=>{Se(e.target)},64);ge($e,{triggerRef:G(t,`trigger`),tabStyleRef:G(t,`tabStyle`),tabClassRef:G(t,`tabClass`),addTabStyleRef:G(t,`addTabStyle`),addTabClassRef:G(t,`addTabClass`),paneClassRef:G(t,`paneClass`),paneStyleRef:G(t,`paneStyle`),mergedClsPrefixRef:r,typeRef:G(t,`type`),closableRef:G(t,`closable`),valueRef:T,tabChangeIdRef:ee,onBeforeLeaveRef:G(t,`onBeforeLeave`),activateTab:F,handleClose:I,handleAdd:ye}),m(()=>{k(),j()}),Te(()=>{let{value:e}=p;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;y.value?e.classList.remove(n):e.classList.add(n),b.value?e.classList.remove(i):e.classList.add(i)});let we={syncBarPosition:()=>{k()},scrollToCurrentTab:()=>{j()}},De=()=>{B({transitionDisabled:!0})},ke=R(()=>{let{value:e}=S,{type:n}=t,r=`${e}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:C,[D(`panePadding`,e)]:w,[D(`tabPadding`,r)]:T,[D(`tabPaddingVertical`,r)]:ee,[D(`tabGap`,r)]:te,[D(`tabGap`,`${r}Vertical`)]:E,[D(`tabTextColor`,n)]:ne,[D(`tabTextColorActive`,n)]:O,[D(`tabTextColorHover`,n)]:re,[D(`tabTextColorDisabled`,n)]:k,[D(`tabFontSize`,e)]:A},common:{cubicBezierEaseInOut:j}}=l.value;return{"--n-bezier":j,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":A,"--n-tab-text-color":ne,"--n-tab-text-color-active":O,"--n-tab-text-color-disabled":k,"--n-tab-text-color-hover":re,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":C,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":ee,"--n-tab-gap":te,"--n-tab-gap-vertical":E,"--n-pane-padding-left":de(w,`left`),"--n-pane-padding-right":de(w,`right`),"--n-pane-padding-top":de(w,`top`),"--n-pane-padding-bottom":de(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),je=i?Ce(`tabs`,R(()=>`${S.value[0]}${t.type[0]}`),ke,t):void 0;return{mergedClsPrefix:r,mergedValue:T,renderedNames:new Set,segmentCapsuleElRef:z,tabsPaneWrapperRef:M,tabsElRef:u,selfElRef:d,barElRef:f,addTabInstRef:g,xScrollInstRef:_,scrollWrapperElRef:p,addTabFixed:W,tabWrapperStyle:te,handleNavResize:U,mergedSize:S,handleScroll:q,handleTabsResize:ve,cssVars:i?void 0:ke,themeClass:je?.themeClass,animationDirection:le,renderNameListRef:ce,yScrollElRef:v,handleSegmentResize:De,onAnimationBeforeLeave:oe,onAnimationEnter:P,onAnimationAfterEnter:se,onRender:je?.onRender,startReachedRef:y,endReachedRef:b,isOverflow:be,handleButtonClick:pe,mergedTheme:l,rtlEnabled:s,mergedPlacement:c,...we}},render(){let{mergedClsPrefix:e,type:t,mergedPlacement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,startReachedRef:u,endReachedRef:d,isOverflow:f,showScrollButton:p,handleButtonClick:m,mergedTheme:h,rtlEnabled:g,$slots:{default:_,prefix:v,suffix:y}}=this;s?.();let b=_?Ee(_()).filter(e=>e.type.__TAB_PANE__===!0):[],x=_?Ee(_()).filter(e=>e.type.__TAB__===!0):[],S=!x.length,C=t===`card`,w=t===`segment`,T=!C&&!w&&this.justifyContent;o.value=[];let ee=()=>{let t=(Y(),J(`div`,{style:k(this.tabWrapperStyle),class:I(`${e}-tabs-wrapper`)},[T?B(()=>null):(Y(),J(`div`,{key:1,class:I(`${e}-tabs-scroll-padding`),style:k(n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),S?(Y(),J(O,{key:2},[B(()=>b.map((e,t)=>(o.value.push(e.props.name),pt((Y(),N(it,ve(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!T||T===`center`||T===`start`||T===`end`)}),re(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(Y(),J(O,{key:3},[B(()=>x.map((e,t)=>(o.value.push(e.props.name),pt(t!==0&&!T?ft(e):e))))],64)),!r&&i&&C?(Y(),J(O,{key:4},[B(()=>dt(i,(S?b.length:x.length)!==0))],64)):B(()=>null),T?B(()=>null):(Y(),J(`div`,{key:7,class:I(`${e}-tabs-scroll-padding`),style:k({width:`${this.tabsPadding}px`})},null,6)),C?B(()=>null):(Y(),J(`div`,{key:9,ref:`barElRef`,class:I(`${e}-tabs-bar`)},null,2))],6));return Y(),J(`div`,{ref:`tabsElRef`,class:I(`${e}-tabs-nav-scroll-content`)},[C&&i?(Y(),N(te,{key:0,onResize:this.handleTabsResize},{default:()=>t},1032,[`onResize`])):(Y(),J(O,{key:1},[B(()=>t)],64)),C?(Y(),J(`div`,{key:2,class:I(`${e}-tabs-pad`)},null,2)):B(()=>null)],2)},E=w?`top`:n;return Y(),J(`div`,{ref:`selfElRef`,class:I([`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${E}`,g&&`${e}-tabs--rtl`]),style:k(this.cssVars)},[V(`div`,{class:I([`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${E}`,`${e}-tabs-nav`])},[B(()=>_e(v,t=>t&&(Y(),J(`div`,{class:I(`${e}-tabs-nav__prefix`)},[B(()=>t)],2)))),w?(Y(),N(te,{key:0,onResize:this.handleSegmentResize},{default:()=>(Y(),J(`div`,{class:I(`${e}-tabs-rail`),ref:`tabsElRef`},[V(`div`,{class:I(`${e}-tabs-capsule`),ref:`segmentCapsuleElRef`},[V(`div`,{class:I(`${e}-tabs-wrapper`)},[V(`div`,{class:I(`${e}-tabs-tab`)},null,2)],2)],2),S?(Y(),J(O,{key:0},[B(()=>b.map((e,t)=>(o.value.push(e.props.name),Y(),N(it,ve(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),re(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(Y(),J(O,{key:1},[B(()=>x.map((e,t)=>(o.value.push(e.props.name),t===0?e:ft(e))))],64))],2))},1032,[`onResize`])):(Y(),J(O,{key:1},[B(()=>p&&f&&(Y(),N(ot,{mergedClsPrefix:e,type:`prev`,vertical:E===`left`||E===`right`,disabled:u,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(Y(),N(te,{onResize:this.handleNavResize},{default:()=>(Y(),J(`div`,{class:I(`${e}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(E)?(Y(),N(Xe,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:ee},1032,[`onScroll`])):(Y(),J(`div`,{key:1,class:I(`${e}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[B(()=>ee())],42,[`onScroll`]))],2))},1032,[`onResize`])),B(()=>p&&f&&(Y(),N(ot,{mergedClsPrefix:e,type:`next`,vertical:E===`left`||E===`right`,disabled:d,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),r&&i&&C?(Y(),J(O,{key:2},[B(()=>dt(i,!0))],64)):B(()=>null),B(()=>_e(y,t=>t&&(Y(),J(`div`,{class:I(`${e}-tabs-nav__suffix`)},[B(()=>t)],2))))],2),B(()=>S&&(this.animated&&(E===`top`||E===`bottom`)?(Y(),J(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:k(l),class:I([`${e}-tabs-pane-wrapper`,c])},[B(()=>ut(b,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):ut(b,this.mergedValue,this.renderedNames)))],6)}});function ut(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?be(e,[[ce,c]]):e)}}),o?(Y(),N(ie,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):s}function dt(e,t){return Y(),N(it,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled},null,8,[`internalLeftPadded`,`disabled`])}function ft(e){let t=oe(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function pt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var mt=n(`plug`,[[`path`,{d:`M12 22v-5`,key:`1ega77`}],[`path`,{d:`M15 8V2`,key:`18g5xt`}],[`path`,{d:`M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z`,key:`1xoxul`}],[`path`,{d:`M9 8V2`,key:`14iosj`}]]),ht={class:`skill-manager`},gt={class:`sm-head`},_t={class:`sm-title`},vt={class:`muted sm-count`},yt={class:`sm-actions`},bt={class:`sm-cats`},xt={class:`sm-body`},St={class:`group-title`},Ct={class:`muted`},wt={class:`sm-grid`},Tt={class:`card-head`},Et={class:`card-name`},Dt={class:`card-desc`},Ot={class:`card-tools`},kt={key:0,class:`muted tiny`},At={class:`card-foot`},jt=H({__name:`SkillManager`,props:{skills:{}},emits:[`toggle`,`remove`,`reload`,`add`],setup(e){let n=e,r=[`系统`,`文件`,`代码`,`网络`,`数学`,`通用`,`其他`],i=$(``),a=$(`全部`),c=R(()=>{let e=i.value.trim().toLowerCase(),t=t=>!e||t.name.toLowerCase().includes(e)||(t.description||``).toLowerCase().includes(e)||(t.tools||[]).some(t=>t.toLowerCase().includes(e)),a=new Map;for(let e of n.skills){if(!t(e))continue;let n=e.category||`其他`;a.has(n)||a.set(n,[]),a.get(n).push(e)}let o=Array.from(a.entries()).map(([e,t])=>({category:e,list:t}));return o.sort((e,t)=>{let n=r.indexOf(e.category),i=r.indexOf(t.category);return(n===-1?99:n)-(i===-1?99:i)}),o}),l=R(()=>[`全部`,...c.value.map(e=>e.category)]),u=R(()=>a.value===`全部`?c.value:c.value.filter(e=>e.category===a.value)),d=R(()=>n.skills.filter(e=>e.enabled).length);return(n,r)=>(Y(),J(`div`,ht,[V(`div`,gt,[V(`div`,_t,[U(Q(S),{size:20}),r[3]||=V(`h2`,null,`技能管理`,-1),V(`span`,vt,Z(d.value)+` / `+Z(e.skills.length)+` 已启用`,1)]),V(`div`,yt,[U(Q(t),{value:i.value,"onUpdate:value":r[0]||=e=>i.value=e,class:`sm-search`,placeholder:`搜索技能 / 工具…`,clearable:``},{prefix:K(()=>[U(Q(C),{component:Q(Ve)},null,8,[`component`])]),_:1},8,[`value`]),U(Q(M),{onClick:r[1]||=e=>n.$emit(`reload`)},{icon:K(()=>[U(Q(ze),{size:15})]),default:K(()=>[r[4]||=P(` 重载 `,-1)]),_:1}),U(Q(M),{type:`primary`,onClick:r[2]||=e=>n.$emit(`add`)},{icon:K(()=>[U(Q(v),{size:15})]),default:K(()=>[r[5]||=P(` 新建技能 `,-1)]),_:1})])]),V(`div`,bt,[(Y(!0),J(O,null,q(l.value,e=>(Y(),N(Q(s),{key:e,class:`cat-chip`,type:a.value===e?`primary`:`default`,bordered:!1,checkable:``,checked:a.value===e,"onUpdate:checked":t=>a.value=e},{default:K(()=>[P(Z(e),1)]),_:2},1032,[`type`,`checked`,`onUpdate:checked`]))),128))]),V(`div`,xt,[u.value.length?se(``,!0):(Y(),N(Q(o),{key:0,class:`sm-empty`,description:`没有匹配的技能`})),(Y(!0),J(O,null,q(u.value,e=>(Y(),J(`section`,{key:e.category,class:`sm-group`},[V(`h4`,St,[P(Z(e.category)+` `,1),V(`span`,Ct,`· `+Z(e.list.length),1)]),V(`div`,wt,[(Y(!0),J(O,null,q(e.list,e=>(Y(),N(Q(me),{key:e.id,class:pe([`skill-card`,{off:!e.enabled}]),size:`small`},{default:K(()=>[V(`div`,Tt,[V(`div`,Et,[U(Q(Be),{size:15}),V(`b`,null,Z(e.name),1),U(Q(s),{size:`small`,bordered:!1,type:e.builtin?`default`:`info`},{default:K(()=>[P(Z(e.builtin?`内置`:`自定义`),1)]),_:2},1032,[`type`])]),U(Q(ee),{value:e.enabled,size:`small`,"onUpdate:value":t=>n.$emit(`toggle`,e)},null,8,[`value`,`onUpdate:value`])]),V(`p`,Dt,Z(e.description||`（无描述）`),1),V(`div`,Ot,[(Y(!0),J(O,null,q(e.tools||[],e=>(Y(),N(Q(s),{key:e,size:`small`,bordered:!1,class:`tool-chip`},{default:K(()=>[P(Z(e),1)]),_:2},1024))),128)),!e.tools||!e.tools.length?(Y(),J(`span`,kt,`无工具`)):se(``,!0)]),V(`div`,At,[V(`span`,{class:pe([`state`,e.enabled?`on`:`off`])},Z(e.enabled?`已启用`:`已禁用`),3),e.builtin?se(``,!0):(Y(),N(Q(M),{key:0,quaternary:``,circle:``,size:`tiny`,title:`删除技能`,type:`error`,onClick:t=>n.$emit(`remove`,e.id)},{icon:K(()=>[U(Q(T),{size:14})]),_:1},8,[`onClick`]))])]),_:2},1032,[`class`]))),128))])]))),128))])]))}}),Mt={class:`modal-actions`},Nt=H({__name:`SkillModal`,props:{open:{type:Boolean}},emits:[`close`,`submit`],setup(e,{emit:n}){let r=e,i=n,a=ke(),o=W({name:``,description:``,code:``}),s=$(!1);Ae(()=>r.open,e=>{e&&(o.name=``,o.description=``,o.code=``,s.value=!1)});function c(){if(!o.code.trim()){a.warning(`代码不能为空`);return}s.value=!0,i(`submit`,{...o})}return(n,r)=>(Y(),N(Q(we),{show:e.open,"onUpdate:show":r[4]||=e=>i(`close`)},{default:K(()=>[U(Q(me),{class:`modal-card modal-w-md`,title:`新建自定义技能`,bordered:!1,size:`medium`},{footer:K(()=>[V(`div`,Mt,[U(Q(M),{onClick:r[3]||=e=>i(`close`)},{default:K(()=>[...r[5]||=[P(`取消`,-1)]]),_:1}),U(Q(M),{type:`primary`,loading:s.value,onClick:c},{default:K(()=>[...r[6]||=[P(`创建`,-1)]]),_:1},8,[`loading`])])]),default:K(()=>[U(Q(y),{"label-placement":`top`,"show-feedback":!1},{default:K(()=>[U(Q(b),{label:`名称`},{default:K(()=>[U(Q(t),{value:o.name,"onUpdate:value":r[0]||=e=>o.name=e,placeholder:`我的技能`},null,8,[`value`])]),_:1}),U(Q(b),{label:`描述`},{default:K(()=>[U(Q(t),{value:o.description,"onUpdate:value":r[1]||=e=>o.description=e,placeholder:`这个技能做什么`},null,8,[`value`])]),_:1}),U(Q(b),{label:`代码（用 @tool 装饰函数，可定义 META 元信息）`},{default:K(()=>[U(Q(t),{value:o.code,"onUpdate:value":r[2]||=e=>o.code=e,type:`textarea`,autosize:{minRows:10,maxRows:20},placeholder:`用 @tool 装饰定义一个工具函数`},null,8,[`value`])]),_:1})]),_:1})]),_:1})]),_:1},8,[`show`]))}}),Pt={class:`page`},Ft={class:`page-head`},It={class:`page-title`},Lt={class:`page-body page-body-flush experts-body`},Rt={class:`tab-label`},zt={class:`tab-label`},Bt={key:0,class:`grid-cards`},Vt={key:2,class:`grid-cards`},Ht={class:`card-head`},Ut={class:`card-name`},Wt={class:`card-desc card-desc-flat`},Gt=H({__name:`Experts`,setup(e){let t=ke(),n=$(`skills`),r=$(!1),i=[{name:`工作目录`,desc:`读写当前会话隔离目录下的文件`,ready:!0},{name:`Shell 执行`,desc:`在沙箱内执行命令并返回输出`,ready:!0},{name:`Web 检索`,desc:`联网搜索与抓取页面内容`,ready:!0},{name:`计算器`,desc:`安全的数学表达式求值`,ready:!0},{name:`腾讯文档`,desc:`读取与写入腾讯文档（需授权）`,ready:!1},{name:`GitHub`,desc:`仓库、Issue 与 PR 操作（需授权）`,ready:!1}];async function a(e){let n=await d(e);n.ok?(r.value=!1,t.success(`技能创建成功`)):t.error(`创建失败: `+(n.error||`未知错误`))}let m=De(),h=$(!0);return Oe(async()=>{await f(),h.value=!1,m.query.new===`1`&&(r.value=!0)}),(e,t)=>(Y(),J(`div`,Pt,[V(`div`,Ft,[V(`div`,It,[U(Q(S),{size:20}),t[3]||=V(`h1`,null,`专家 · 技能 · 连接器`,-1)])]),V(`div`,Lt,[U(Q(lt),{value:n.value,"onUpdate:value":t[0]||=e=>n.value=e,type:`line`,size:`medium`,class:`experts-tabs`},{default:K(()=>[U(Q(tt),{name:`skills`},{tab:K(()=>[V(`span`,Rt,[U(Q(S),{size:15}),t[4]||=P(` 技能`,-1)])]),_:1}),U(Q(tt),{name:`connectors`},{tab:K(()=>[V(`span`,zt,[U(Q(mt),{size:15}),t[5]||=P(` 连接器`,-1)])]),_:1})]),_:1},8,[`value`]),n.value===`skills`&&h.value?(Y(),J(`div`,Bt,[(Y(),J(O,null,q(4,e=>U(Q(me),{key:`sk`+e,size:`small`},{default:K(()=>[U(Q(w),{text:``,width:`42%`,class:`sk-title`}),U(Q(w),{text:``,repeat:2})]),_:1})),64))])):n.value===`skills`?(Y(),N(jt,{key:1,skills:Q(l).skills,onToggle:Q(p),onRemove:Q(u),onReload:Q(c),onAdd:t[1]||=e=>r.value=!0},null,8,[`skills`,`onToggle`,`onRemove`,`onReload`])):(Y(),J(`div`,Vt,[(Y(),J(O,null,q(i,e=>U(Q(me),{key:e.name,size:`small`},{default:K(()=>[V(`div`,Ht,[V(`div`,Ut,[U(Q(Le),{size:15}),V(`b`,null,Z(e.name),1)]),U(Q(s),{size:`small`,bordered:!1,type:e.ready?`success`:`default`},{icon:K(()=>[(Y(),N(ye(e.ready?Q(Re):Q(He)),{size:12}))]),default:K(()=>[P(` `+Z(e.ready?`已就绪`:`未接入`),1)]),_:2},1032,[`type`])]),V(`p`,Wt,Z(e.desc),1)]),_:2},1024)),64)),i.length?se(``,!0):(Y(),N(Q(o),{key:0,class:`page-empty`,description:`暂无连接器`}))]))]),U(Nt,{open:r.value,onClose:t[2]||=e=>r.value=!1,onSubmit:a},null,8,[`open`])]))}});export{Gt as default};