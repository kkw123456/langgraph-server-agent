import{i as e,t}from"./createLucideIcon-ufvbaH_P.js";import{k as n}from"./isArrayLikeObject-DDw98r_w.js";import{n as r,t as i}from"./now-DEvl0O6C.js";import{S as a,b as o,c as s,g as c,l,n as u,o as d,v as f}from"./store-CSIpedIT.js";import{i as p,n as m,r as h,t as g}from"./cssr-CkDjpwkB.js";import{n as _,t as v}from"./FormItem-CUZgL8zJ.js";import{t as y}from"./Input-BeBd6sPA.js";import{n as b,t as x}from"./puzzle-BGDTtSHL.js";import{t as S}from"./Icon-DLvlWwpA.js";import{t as C}from"./Switch-gfm9dE--.js";import{Bn as w,Cn as T,Dn as E,Dt as D,En as O,Et as ee,Ft as k,Gn as A,Gt as te,Hn as j,It as M,K as ne,Kn as N,Ln as P,Mt as re,Nn as ie,On as F,Ot as ae,Pn as I,Q as oe,Qn as se,Rt as ce,Sn as L,T as R,Tn as z,Un as le,Ut as ue,Vn as B,Vt as de,Wn as V,Xn as fe,Yn as pe,Zn as H,_r as U,ar as me,b as he,br as W,dr as ge,f as _e,fr as G,gr as K,ir as q,k as J,l as ve,lr as ye,mr as be,mt as xe,o as Se,or as Y,ot as Ce,p as we,pr as Te,pt as Ee,qn as X,qt as De,rr as Oe,ur as ke,ut as Ae,vr as Z,w as je,xr as Q,yr as Me,zn as Ne,zt as $}from"./index-CoXLYJFb.js";import{t as Pe}from"./bot-DyEIiAjW.js";import{n as Fe,t as Ie}from"./package-DjtnjvRd.js";import{t as Le}from"./plus-Cj0q9ZYy.js";import{t as Re}from"./refresh-cw-Dlo4lME1.js";import{t as ze}from"./search-BY8k3uei.js";import{t as Be}from"./trash-2-DMQqtkBz.js";import{t as Ve}from"./x-DgfAc5lW.js";var He=`Expected a function`,Ue=Math.max,We=Math.min;function Ge(e,t,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(He);t=r(t)||0,n(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?Ue(r(a.maxWait)||0,t):c,h=`trailing`in a?!!a.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?We(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=i();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(i())}function w(){var e=i(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var Ke=`Expected a function`;function qe(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(Ke);return n(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),Ge(e,t,{leading:i,maxWait:t,trailing:a})}var Je=g(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[g(`&::-webkit-scrollbar`,{width:0,height:0})]),Ye=X({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=K(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=de();return Je.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:m,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return pe(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Xe=X({name:`ChevronLeft`,render(){return(()=>{let e=k(`dfe229c2639b2082`);return e[0]||=B(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[B(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`})],-1)})()}}),Ze=X({name:`Add`,render(){return(()=>{let e=k(`b30130fbba5c5b23`);return e[0]||=B(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[B(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)})()}}),Qe=te(`n-tabs`),$e={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},et=X({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:$e,slots:Object,setup(e){let t=fe(Qe,null);return t||De(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return q(),V(`div`,{class:M([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:W(this.style)},[$(()=>this.$slots.default?.())],6)}}),tt=[`data-name`,`data-disabled`],nt={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...he($e,[`displayDirective`])},rt=X({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:nt,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=fe(Qe);return{trigger:d,mergedClosable:w(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:o,mergedClosable:s,trigger:c,$slots:{default:l}}=this,u=i??a;return q(),V(`div`,{class:M(`${t}-tabs-tab-wrapper`)},[this.internalLeftPadded?(q(),V(`div`,{key:0,class:M(`${t}-tabs-tab-pad`)},null,2)):$(()=>null),(q(),V(`div`,H({key:n,"data-name":n,"data-disabled":r?!0:void 0},H({class:[`${t}-tabs-tab`,o===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:c===`click`?this.activateTab:void 0,onMouseenter:c===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[B(`span`,{class:M(`${t}-tabs-tab__label`)},[e?(q(),V(P,{key:0},[B(`div`,{class:M(`${t}-tabs-tab__height-placeholder`)},`\xA0`,2),(q(),j(ee,{clsPrefix:t},{default:()=>(q(),j(Ze))},1032,[`clsPrefix`]))],64)):(q(),V(P,{key:1},[l?(q(),V(P,{key:0},[$(()=>l())],64)):(q(),V(P,{key:1},[typeof u==`object`?(q(),V(P,{key:0},[$(()=>u)],64)):(q(),V(P,{key:1},[$(()=>J(u??n))],64))],64))],64))],2),s&&this.type===`card`?(q(),j(ne,{key:0,clsPrefix:t,class:M(`${t}-tabs-tab__close`),onClick:this.handleClose,disabled:r},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):$(()=>null)],16,tt))],2)}}),it=T(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[L(`&.transition-disabled`,[T(`tabs-tab`,`
 transition: none !important;
 `),T(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),T(`tabs-tab-pad`,`
 transition: none !important;
 `)]),O(`segment-type`,[T(`tabs-rail`,[L(`&.transition-disabled`,[T(`tabs-capsule`,`
 transition: none;
 `)])])]),O(`top`,[T(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),O(`left`,[T(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),O(`left, right`,`
 flex-direction: row;
 `,[T(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),T(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),O(`right`,`
 flex-direction: row-reverse;
 `,[T(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),T(`tabs-bar`,`
 left: 0;
 `)]),O(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[T(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),T(`tabs-bar`,`
 top: 0;
 `)]),T(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[T(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),T(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[T(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[O(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),L(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),O(`flex`,[T(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[T(`tabs-wrapper`,`
 width: 100%;
 `,[T(`tabs-tab`,`
 margin-right: 0;
 `)])])]),T(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[z(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),z(`prefix`,`padding-right: 16px;`),z(`suffix`,`padding-left: 16px;`)]),O(`top, bottom`,[L(`>`,[T(`tabs-nav`,[T(`tabs-nav-scroll-wrapper`,[L(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),L(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),O(`shadow-start`,[L(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),O(`shadow-end`,[L(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),O(`left, right`,[T(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),L(`>`,[T(`tabs-nav`,[T(`tabs-nav-scroll-wrapper`,[L(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),L(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),O(`shadow-start`,[L(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),O(`shadow-end`,[L(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),T(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[T(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[L(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),L(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `),L(`&.transition-disabled`,[L(`&::before, &::after`,`
 transition: none;
 `)])]),T(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),T(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),T(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),T(`tabs-tab`,`
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
 `,[O(`disabled`,{cursor:`not-allowed`}),z(`close`,`
 margin-inline-start: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),z(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),T(`tabs-bar`,`
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
 `,[L(`&.transition-disabled`,`
 transition: none;
 `),O(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),T(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),T(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[L(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),L(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),L(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),L(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),L(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),T(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),O(`line-type, bar-type`,[T(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[L(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),O(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),O(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),T(`tabs-nav`,[z(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),T(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),O(`line-type`,[O(`top`,[z(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),T(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),T(`tabs-bar`,`
 bottom: -1px;
 `)]),O(`left`,[z(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),T(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),T(`tabs-bar`,`
 right: -1px;
 `)]),O(`right`,[z(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),T(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),T(`tabs-bar`,`
 left: -1px;
 `)]),O(`bottom`,[z(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),T(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),T(`tabs-bar`,`
 top: -1px;
 `)]),z(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),T(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),T(`tabs-bar`,`
 border-radius: 0;
 `)]),O(`card-type`,[z(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),T(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),T(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),T(`tabs-tab`,`
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
 `,[O(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[z(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),E(`disabled`,[L(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),O(`closable`,`padding-inline-end: 8px;`),O(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),O(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),O(`left, right`,`
 flex-direction: column; 
 `,[z(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),T(`tabs-wrapper`,`
 flex-direction: column;
 `),T(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[T(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),O(`top`,[O(`card-type`,[T(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),T(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-bottom: 1px solid #0000;
 `)]),T(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),T(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),O(`left`,[O(`card-type`,[T(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),T(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-right: 1px solid #0000;
 `)]),T(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),T(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),O(`right`,[O(`card-type`,[T(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),T(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-left: 1px solid #0000;
 `)]),T(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),T(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),O(`bottom`,[O(`card-type`,[T(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),T(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-top: 1px solid #0000;
 `)]),T(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),T(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),T(`tabs-scroll-button`,[O(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),O(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),O(`up`,`
 padding-bottom: 10px;
 `),O(`down`,`
 padding-top: 10px;
 `)])]),at=X({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:e,disabled:t,type:n,vertical:r,rtl:i,theme:a,themeOverrides:o,handleClick:s}=this,c=n===`next`,l=r?c:i?!c:c;return q(),j(R,{text:!0,disabled:t,size:`small`,theme:a,themeOverrides:o,onClick:s,class:M([`${e}-tabs-scroll-button`,!r&&n===`prev`&&`${e}-tabs-scroll-button--start`,!r&&n===`next`&&`${e}-tabs-scroll-button--end`,r&&n===`prev`&&`${e}-tabs-scroll-button--up`,r&&n===`next`&&`${e}-tabs-scroll-button--down`])},{icon:()=>(q(),j(ee,{clsPrefix:e,style:W(r?{transform:`rotate(90deg)`}:void 0)},{default:()=>l?(q(),j(b,{key:1})):(q(),j(Xe,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),ot=qe,st={...D.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},ct=X({name:`Tabs`,props:st,slots:Object,setup(t,{slots:n}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a,mergedRtlRef:o}=ue(t),s=Ce(`Tabs`,o,r),c=w(()=>{let{placement:e}=t;return e===`start`?s?.value?`right`:`left`:e===`end`?s?.value?`left`:`right`:e}),l=D(`Tabs`,`-tabs`,it,ve,t,r),u=K(null),d=K(null),f=K(null),m=K(null),g=K(null),_=K(null),v=K(null),y=K(!0),b=K(!0),x=h(t,[`labelSize`,`size`]),S=w(()=>x.value?x.value:a?.value?.Tabs?.size||`medium`),C=h(t,[`activeName`,`value`]),T=K(C.value??t.defaultValue??(n.default?Ee(n.default())[0]?.props?.name:null)),E=e(C,T),O={id:0},ee=w(()=>{if(t.justifyContent&&t.type!==`card`)return{display:`flex`,justifyContent:t.justifyContent}});ke(E,()=>{O.id=0,M(),se(()=>{N()})});function k(){let{value:e}=E;return e===null?null:u.value?.querySelector(`[data-name="${e}"]`)}function A(e){if(t.type===`card`)return;let{value:n}=f;if(!n)return;let i=n.style.opacity===`0`;if(e){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o}=t,s=c.value;if(e.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(j([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(j([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function te(){if(t.type===`card`)return;let{value:e}=f;e&&(e.style.opacity=`0`)}function j(e){let{value:t}=f;if(t)for(let n of e)t.style[n]=``}function M(){if(t.type===`card`)return;let e=k();e?A(e):te()}function ne(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function N(){let e=[`top`,`bottom`].includes(c.value),n=k();if(n){if(e){let r=_.value?.$el;if(!r)return;ne(r,n,e,t.centerActiveTab)}else{let{value:r}=v;if(!r)return;ne(r,n,e,t.centerActiveTab)}}}let P=K(null),ie=0,I=null;function oe(e){let t=P.value;if(t){ie=e.getBoundingClientRect().height;let n=`${ie}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};I?(r(),I(),I=null):I=r}}function ce(e){let t=P.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(ie,n)}px`};I?(I(),I=null,r()):I=r}}function L(){let e=P.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let R={value:[]},z=K(`next`);function le(e){let t=E.value,n=`next`;for(let r of R.value){if(r===t)break;if(r===e){n=`prev`;break}}z.value=n,B(e)}function B(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&xe(n,e),r&&xe(r,e),i&&xe(i,e),T.value=e}function de(e){let{onClose:n}=t;n&&xe(n,e)}function V(e){if([`top`,`bottom`].includes(c.value)){let{value:t}=_;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!s?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=v;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let fe=!0;function pe(){let{value:e}=f;if(!e)return;fe&&=!1;let t=`transition-disabled`;e.classList.add(t),M(),e.classList.remove(t)}let H=K(null);function he({transitionDisabled:e}){let t=u.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=k();n&&H.value&&(H.value.style.width=`${n.offsetWidth}px`,H.value.style.height=`${n.offsetHeight}px`,H.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&H.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}ke([E],()=>{t.type===`segment`&&se(()=>{he({transitionDisabled:!1})})}),Oe(()=>{t.type===`segment`&&he({transitionDisabled:!0})});let W=0;function _e(e){if(e.contentRect.width===0&&e.contentRect.height===0||W===e.contentRect.width)return;W=e.contentRect.width;let{type:n}=t;(n===`line`||n===`bar`)&&(fe||t.justifyContent?.startsWith(`space`))&&pe(),n!==`segment`&&Te(we())}let G=ot(_e,64);function q(){let{type:e}=t;e===`line`||e===`bar`?pe():e===`segment`&&he({transitionDisabled:!0})}ke([()=>t.justifyContent,()=>t.size],()=>{se(()=>{(t.type===`line`||t.type===`bar`)&&pe()})}),ke([c,()=>s?.value],()=>{se(()=>{q(),Te(we(),{instantly:!0})})}),ke(()=>t.type,()=>{se(()=>{let e=d.value;e&&(e.classList.add(`transition-disabled`),q(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let J=K(!1);function ye(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=c.value;if(!J.value)o===`top`||o===`bottom`?i<n&&(J.value=!0):a<r&&(J.value=!0);else{let{value:e}=g;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(J.value=!1):a-r>e.$el.offsetHeight&&(J.value=!1)}Te(_.value?.$el||null)}let be=ot(ye,64);function Se(){let{onAdd:e}=t;e&&e()}let Y=K(!1);function we(){let e=c.value;return(e===`top`||e===`bottom`?_.value?.$el:v.value)||null}function Te(e,t={instantly:!1}){if(!e)return;let n=t.instantly?m.value:null;n&&n.classList.add(`transition-disabled`);let r=c.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);y.value=i<=1,b.value=i+r>=n-1,Y.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;y.value=t<=1,b.value=t+r>=n-1,Y.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let X=ot(e=>{Te(e.target)},64);me(Qe,{triggerRef:U(t,`trigger`),tabStyleRef:U(t,`tabStyle`),tabClassRef:U(t,`tabClass`),addTabStyleRef:U(t,`addTabStyle`),addTabClassRef:U(t,`addTabClass`),paneClassRef:U(t,`paneClass`),paneStyleRef:U(t,`paneStyle`),mergedClsPrefixRef:r,typeRef:U(t,`type`),closableRef:U(t,`closable`),valueRef:E,tabChangeIdRef:O,onBeforeLeaveRef:U(t,`onBeforeLeave`),activateTab:le,handleClose:de,handleAdd:Se}),p(()=>{M(),N()}),ge(()=>{let{value:e}=m;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;y.value?e.classList.remove(n):e.classList.add(n),b.value?e.classList.remove(i):e.classList.add(i)});let De={syncBarPosition:()=>{M()},scrollToCurrentTab:()=>{N()}},Ae=()=>{he({transitionDisabled:!0})},Z=w(()=>{let{value:e}=S,{type:n}=t,r=`${e}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:C,[F(`panePadding`,e)]:w,[F(`tabPadding`,r)]:T,[F(`tabPaddingVertical`,r)]:E,[F(`tabGap`,r)]:D,[F(`tabGap`,`${r}Vertical`)]:O,[F(`tabTextColor`,n)]:ee,[F(`tabTextColorActive`,n)]:k,[F(`tabTextColorHover`,n)]:A,[F(`tabTextColorDisabled`,n)]:te,[F(`tabFontSize`,e)]:j},common:{cubicBezierEaseInOut:M}}=l.value;return{"--n-bezier":M,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":j,"--n-tab-text-color":ee,"--n-tab-text-color-active":k,"--n-tab-text-color-disabled":te,"--n-tab-text-color-hover":A,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":C,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":E,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":re(w,`left`),"--n-pane-padding-right":re(w,`right`),"--n-pane-padding-top":re(w,`top`),"--n-pane-padding-bottom":re(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),je=i?ae(`tabs`,w(()=>`${S.value[0]}${t.type[0]}`),Z,t):void 0;return{mergedClsPrefix:r,mergedValue:E,renderedNames:new Set,segmentCapsuleElRef:H,tabsPaneWrapperRef:P,tabsElRef:u,selfElRef:d,barElRef:f,addTabInstRef:g,xScrollInstRef:_,scrollWrapperElRef:m,addTabFixed:J,tabWrapperStyle:ee,handleNavResize:G,mergedSize:S,handleScroll:X,handleTabsResize:be,cssVars:i?void 0:Z,themeClass:je?.themeClass,animationDirection:z,renderNameListRef:R,yScrollElRef:v,handleSegmentResize:Ae,onAnimationBeforeLeave:oe,onAnimationEnter:ce,onAnimationAfterEnter:L,onRender:je?.onRender,startReachedRef:y,endReachedRef:b,isOverflow:Y,handleButtonClick:V,mergedTheme:l,rtlEnabled:s,mergedPlacement:c,...De}},render(){let{mergedClsPrefix:e,type:t,mergedPlacement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,startReachedRef:u,endReachedRef:d,isOverflow:f,showScrollButton:p,handleButtonClick:m,mergedTheme:h,rtlEnabled:g,$slots:{default:_,prefix:v,suffix:y}}=this;s?.();let b=_?Ee(_()).filter(e=>e.type.__TAB_PANE__===!0):[],x=_?Ee(_()).filter(e=>e.type.__TAB__===!0):[],S=!x.length,C=t===`card`,w=t===`segment`,T=!C&&!w&&this.justifyContent;o.value=[];let E=()=>{let t=(q(),V(`div`,{style:W(this.tabWrapperStyle),class:M(`${e}-tabs-wrapper`)},[T?$(()=>null):(q(),V(`div`,{key:1,class:M(`${e}-tabs-scroll-padding`),style:W(n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),S?(q(),V(P,{key:2},[$(()=>b.map((e,t)=>(o.value.push(e.props.name),ft((q(),j(rt,H(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!T||T===`center`||T===`start`||T===`end`)}),ce(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(q(),V(P,{key:3},[$(()=>x.map((e,t)=>(o.value.push(e.props.name),ft(t!==0&&!T?dt(e):e))))],64)),!r&&i&&C?(q(),V(P,{key:4},[$(()=>ut(i,(S?b.length:x.length)!==0))],64)):$(()=>null),T?$(()=>null):(q(),V(`div`,{key:7,class:M(`${e}-tabs-scroll-padding`),style:W({width:`${this.tabsPadding}px`})},null,6)),C?$(()=>null):(q(),V(`div`,{key:9,ref:`barElRef`,class:M(`${e}-tabs-bar`)},null,2))],6));return q(),V(`div`,{ref:`tabsElRef`,class:M(`${e}-tabs-nav-scroll-content`)},[C&&i?(q(),j(oe,{key:0,onResize:this.handleTabsResize},{default:()=>t},1032,[`onResize`])):(q(),V(P,{key:1},[$(()=>t)],64)),C?(q(),V(`div`,{key:2,class:M(`${e}-tabs-pad`)},null,2)):$(()=>null)],2)},D=w?`top`:n;return q(),V(`div`,{ref:`selfElRef`,class:M([`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${D}`,g&&`${e}-tabs--rtl`]),style:W(this.cssVars)},[B(`div`,{class:M([`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${D}`,`${e}-tabs-nav`])},[$(()=>Ae(v,t=>t&&(q(),V(`div`,{class:M(`${e}-tabs-nav__prefix`)},[$(()=>t)],2)))),w?(q(),j(oe,{key:0,onResize:this.handleSegmentResize},{default:()=>(q(),V(`div`,{class:M(`${e}-tabs-rail`),ref:`tabsElRef`},[B(`div`,{class:M(`${e}-tabs-capsule`),ref:`segmentCapsuleElRef`},[B(`div`,{class:M(`${e}-tabs-wrapper`)},[B(`div`,{class:M(`${e}-tabs-tab`)},null,2)],2)],2),S?(q(),V(P,{key:0},[$(()=>b.map((e,t)=>(o.value.push(e.props.name),q(),j(rt,H(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),ce(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(q(),V(P,{key:1},[$(()=>x.map((e,t)=>(o.value.push(e.props.name),t===0?e:dt(e))))],64))],2))},1032,[`onResize`])):(q(),V(P,{key:1},[$(()=>p&&f&&(q(),j(at,{mergedClsPrefix:e,type:`prev`,vertical:D===`left`||D===`right`,disabled:u,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(q(),j(oe,{onResize:this.handleNavResize},{default:()=>(q(),V(`div`,{class:M(`${e}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(D)?(q(),j(Ye,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:E},1032,[`onScroll`])):(q(),V(`div`,{key:1,class:M(`${e}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[$(()=>E())],42,[`onScroll`]))],2))},1032,[`onResize`])),$(()=>p&&f&&(q(),j(at,{mergedClsPrefix:e,type:`next`,vertical:D===`left`||D===`right`,disabled:d,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),r&&i&&C?(q(),V(P,{key:2},[$(()=>ut(i,!0))],64)):$(()=>null),$(()=>Ae(y,t=>t&&(q(),V(`div`,{class:M(`${e}-tabs-nav__suffix`)},[$(()=>t)],2))))],2),$(()=>S&&(this.animated&&(D===`top`||D===`bottom`)?(q(),V(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:W(l),class:M([`${e}-tabs-pane-wrapper`,c])},[$(()=>lt(b,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):lt(b,this.mergedValue,this.renderedNames)))],6)}});function lt(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?Te(e,[[I,c]]):e)}}),o?(q(),j(ie,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):s}function ut(e,t){return q(),j(rt,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled},null,8,[`internalLeftPadded`,`disabled`])}function dt(e){let t=Ne(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function ft(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var pt=t(`plug`,[[`path`,{d:`M12 22v-5`,key:`1ega77`}],[`path`,{d:`M15 8V2`,key:`18g5xt`}],[`path`,{d:`M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z`,key:`1xoxul`}],[`path`,{d:`M9 8V2`,key:`14iosj`}]]),mt={class:`skill-manager`},ht={class:`sm-head`},gt={class:`sm-title`},_t={class:`muted sm-count`},vt={class:`sm-actions`},yt={class:`sm-cats`},bt={class:`sm-body`},xt={class:`group-title`},St={class:`muted`},Ct={class:`sm-grid`},wt={class:`card-head`},Tt={class:`card-name`},Et={class:`card-desc`},Dt={class:`card-tools`},Ot={key:0,class:`muted tiny`},kt={class:`card-foot`},At=X({__name:`SkillManager`,props:{skills:{}},emits:[`toggle`,`remove`,`reload`,`add`],setup(e){let t=e,n=[`系统`,`文件`,`代码`,`网络`,`数学`,`通用`,`其他`],r=K(``),i=K(`全部`),s=w(()=>{let e=r.value.trim().toLowerCase(),i=t=>!e||t.name.toLowerCase().includes(e)||(t.description||``).toLowerCase().includes(e)||(t.tools||[]).some(t=>t.toLowerCase().includes(e)),a=new Map;for(let e of t.skills){if(!i(e))continue;let t=e.category||`其他`;a.has(t)||a.set(t,[]),a.get(t).push(e)}let o=Array.from(a.entries()).map(([e,t])=>({category:e,list:t}));return o.sort((e,t)=>{let r=n.indexOf(e.category),i=n.indexOf(t.category);return(r===-1?99:r)-(i===-1?99:i)}),o}),c=w(()=>[`全部`,...s.value.map(e=>e.category)]),l=w(()=>i.value===`全部`?s.value:s.value.filter(e=>e.category===i.value)),u=w(()=>t.skills.filter(e=>e.enabled).length);return(t,n)=>(q(),V(`div`,mt,[B(`div`,ht,[B(`div`,gt,[N(Z(x),{size:20}),n[3]||=B(`h2`,null,`技能管理`,-1),B(`span`,_t,Q(u.value)+` / `+Q(e.skills.length)+` 已启用`,1)]),B(`div`,vt,[N(Z(y),{value:r.value,"onUpdate:value":n[0]||=e=>r.value=e,class:`sm-search`,placeholder:`搜索技能 / 工具…`,clearable:``},{prefix:G(()=>[N(Z(S),{component:Z(ze)},null,8,[`component`])]),_:1},8,[`value`]),N(Z(R),{onClick:n[1]||=e=>t.$emit(`reload`)},{icon:G(()=>[N(Z(Re),{size:15})]),default:G(()=>[n[4]||=A(` 重载 `,-1)]),_:1}),N(Z(R),{type:`primary`,onClick:n[2]||=e=>t.$emit(`add`)},{icon:G(()=>[N(Z(Le),{size:15})]),default:G(()=>[n[5]||=A(` 新建技能 `,-1)]),_:1})])]),B(`div`,yt,[(q(!0),V(P,null,Y(c.value,e=>(q(),j(Z(o),{key:e,class:`cat-chip`,type:i.value===e?`primary`:`default`,bordered:!1,checkable:``,checked:i.value===e,"onUpdate:checked":t=>i.value=e},{default:G(()=>[A(Q(e),1)]),_:2},1032,[`type`,`checked`,`onUpdate:checked`]))),128))]),B(`div`,bt,[l.value.length?le(``,!0):(q(),j(Z(a),{key:0,class:`sm-empty`,description:`没有匹配的技能`})),(q(!0),V(P,null,Y(l.value,e=>(q(),V(`section`,{key:e.category,class:`sm-group`},[B(`h4`,xt,[A(Q(e.category)+` `,1),B(`span`,St,`· `+Q(e.list.length),1)]),B(`div`,Ct,[(q(!0),V(P,null,Y(e.list,e=>(q(),j(Z(je),{key:e.id,class:Me([`skill-card`,{off:!e.enabled}]),size:`small`},{default:G(()=>[B(`div`,wt,[B(`div`,Tt,[N(Z(Ie),{size:15}),B(`b`,null,Q(e.name),1),N(Z(o),{size:`small`,bordered:!1,type:e.builtin?`default`:`info`},{default:G(()=>[A(Q(e.builtin?`内置`:`自定义`),1)]),_:2},1032,[`type`])]),N(Z(C),{value:e.enabled,size:`small`,"onUpdate:value":n=>t.$emit(`toggle`,e)},null,8,[`value`,`onUpdate:value`])]),B(`p`,Et,Q(e.description||`（无描述）`),1),B(`div`,Dt,[(q(!0),V(P,null,Y(e.tools||[],e=>(q(),j(Z(o),{key:e,size:`small`,bordered:!1,class:`tool-chip`},{default:G(()=>[A(Q(e),1)]),_:2},1024))),128)),!e.tools||!e.tools.length?(q(),V(`span`,Ot,`无工具`)):le(``,!0)]),B(`div`,kt,[B(`span`,{class:Me([`state`,e.enabled?`on`:`off`])},Q(e.enabled?`已启用`:`已禁用`),3),e.builtin?le(``,!0):(q(),j(Z(R),{key:0,quaternary:``,circle:``,size:`tiny`,title:`删除技能`,type:`error`,onClick:n=>t.$emit(`remove`,e.id)},{icon:G(()=>[N(Z(Be),{size:14})]),_:1},8,[`onClick`]))])]),_:2},1032,[`class`]))),128))])]))),128))])]))}}),jt={class:`modal-actions`},Mt=X({__name:`SkillModal`,props:{open:{type:Boolean}},emits:[`close`,`submit`],setup(e,{emit:t}){let n=e,r=t,i=_e(),a=be({name:``,description:``,code:``}),o=K(!1);ke(()=>n.open,e=>{e&&(a.name=``,a.description=``,a.code=``,o.value=!1)});function s(){if(!a.code.trim()){i.warning(`代码不能为空`);return}o.value=!0,r(`submit`,{...a})}return(t,n)=>(q(),j(Z(we),{show:e.open,"onUpdate:show":n[4]||=e=>r(`close`)},{default:G(()=>[N(Z(je),{class:`modal-card modal-w-md`,title:`新建自定义技能`,bordered:!1,size:`medium`},{footer:G(()=>[B(`div`,jt,[N(Z(R),{onClick:n[3]||=e=>r(`close`)},{default:G(()=>[...n[5]||=[A(`取消`,-1)]]),_:1}),N(Z(R),{type:`primary`,loading:o.value,onClick:s},{default:G(()=>[...n[6]||=[A(`创建`,-1)]]),_:1},8,[`loading`])])]),default:G(()=>[N(Z(_),{"label-placement":`top`,"show-feedback":!1},{default:G(()=>[N(Z(v),{label:`名称`},{default:G(()=>[N(Z(y),{value:a.name,"onUpdate:value":n[0]||=e=>a.name=e,placeholder:`我的技能`},null,8,[`value`])]),_:1}),N(Z(v),{label:`描述`},{default:G(()=>[N(Z(y),{value:a.description,"onUpdate:value":n[1]||=e=>a.description=e,placeholder:`这个技能做什么`},null,8,[`value`])]),_:1}),N(Z(v),{label:`代码（用 @tool 装饰函数，可定义 META 元信息）`},{default:G(()=>[N(Z(y),{value:a.code,"onUpdate:value":n[2]||=e=>a.code=e,type:`textarea`,autosize:{minRows:10,maxRows:20},placeholder:`用 @tool 装饰定义一个工具函数`},null,8,[`value`])]),_:1})]),_:1})]),_:1})]),_:1},8,[`show`]))}}),Nt={class:`page`},Pt={class:`page-head`},Ft={class:`page-title`},It={class:`page-body page-body-flush`},Lt={class:`tab-label`},Rt={class:`tab-label`},zt={key:1,class:`grid-cards`},Bt={class:`card-head`},Vt={class:`card-name`},Ht={class:`card-desc card-desc-flat`},Ut=X({__name:`Experts`,setup(e){let t=_e(),n=K(`skills`),r=K(!1),i=[{name:`工作目录`,desc:`读写当前会话隔离目录下的文件`,ready:!0},{name:`Shell 执行`,desc:`在沙箱内执行命令并返回输出`,ready:!0},{name:`Web 检索`,desc:`联网搜索与抓取页面内容`,ready:!0},{name:`计算器`,desc:`安全的数学表达式求值`,ready:!0},{name:`腾讯文档`,desc:`读取与写入腾讯文档（需授权）`,ready:!1},{name:`GitHub`,desc:`仓库、Issue 与 PR 操作（需授权）`,ready:!1}];async function p(e){let n=await u(e);n.ok?(r.value=!1,t.success(`技能创建成功`)):t.error(`创建失败: `+(n.error||`未知错误`))}let m=Se();return Oe(()=>{d(),m.query.new===`1`&&(r.value=!0)}),(e,t)=>(q(),V(`div`,Nt,[B(`div`,Pt,[B(`div`,Ft,[N(Z(x),{size:20}),t[3]||=B(`h1`,null,`专家 · 技能 · 连接器`,-1)])]),B(`div`,It,[N(Z(ct),{value:n.value,"onUpdate:value":t[0]||=e=>n.value=e,type:`line`,size:`medium`,class:`experts-tabs`},{default:G(()=>[N(Z(et),{name:`skills`},{tab:G(()=>[B(`span`,Lt,[N(Z(x),{size:15}),t[4]||=A(` 技能`,-1)])]),_:1}),N(Z(et),{name:`connectors`},{tab:G(()=>[B(`span`,Rt,[N(Z(pt),{size:15}),t[5]||=A(` 连接器`,-1)])]),_:1})]),_:1},8,[`value`]),n.value===`skills`?(q(),j(At,{key:0,skills:Z(c).skills,onToggle:Z(f),onRemove:Z(l),onReload:Z(s),onAdd:t[1]||=e=>r.value=!0},null,8,[`skills`,`onToggle`,`onRemove`,`onReload`])):(q(),V(`div`,zt,[(q(),V(P,null,Y(i,e=>N(Z(je),{key:e.name,size:`small`},{default:G(()=>[B(`div`,Bt,[B(`div`,Vt,[N(Z(Pe),{size:15}),B(`b`,null,Q(e.name),1)]),N(Z(o),{size:`small`,bordered:!1,type:e.ready?`success`:`default`},{icon:G(()=>[(q(),j(ye(e.ready?Z(Fe):Z(Ve)),{size:12}))]),default:G(()=>[A(` `+Q(e.ready?`已就绪`:`未接入`),1)]),_:2},1032,[`type`])]),B(`p`,Ht,Q(e.desc),1)]),_:2},1024)),64)),i.length?le(``,!0):(q(),j(Z(a),{key:0,class:`page-empty`,description:`暂无连接器`}))]))]),N(Mt,{open:r.value,onClose:t[2]||=e=>r.value=!1,onSubmit:p},null,8,[`open`])]))}});export{Ut as default};