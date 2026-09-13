import{i as e,n as t,t as n}from"./createLucideIcon-BXmGfaRL.js";import{k as r}from"./isArrayLikeObject-DDw98r_w.js";import{n as i,t as a}from"./now-DEvl0O6C.js";import{S as o,b as s,c,g as l,l as u,n as d,o as f,v as p}from"./store-B9TQ41QR.js";import{i as m,n as h,r as g,t as _}from"./cssr-CDDyI__-.js";import{n as v,t as y}from"./FormItem-Dz_-Z61_.js";import{n as b,t as x}from"./puzzle-62F1sZFh.js";import{t as S}from"./Icon-BO41iW-Q.js";import{n as C,t as w}from"./trash-2-CYFHOU0A.js";import{t as T}from"./Switch-Blzh9sLT.js";import{$ as ee,$n as te,A as E,An as D,Bt as ne,Cr as O,Dn as k,Dt as A,E as j,Fn as re,Gn as M,Gt as ie,Hn as N,In as ae,Jn as P,Kn as F,Lt as oe,On as I,Ot as se,Pt as ce,Qn as le,Rt as L,Sr as R,T as ue,Tn as z,Un as B,Ut as de,Vn as fe,Vt as V,Wn as H,Yn as U,Yt as pe,Zn as me,ar as he,br as W,cr as G,dr as ge,dt as _e,er as ve,fr as K,gr as ye,hr as be,ht as xe,kn as Se,kt as Ce,m as we,mr as q,mt as Te,o as Ee,or as J,p as De,pr as Oe,q as ke,qn as Y,qt as Ae,sr as je,st as Me,u as Ne,vr as X,wn as Z,x as Pe,xr as Fe,yr as Q,zn as $}from"./index-B-84Kufr.js";import{t as Ie}from"./bot-CApFQCws.js";import{t as Le}from"./check-BPhfLHwn.js";import{t as Re}from"./package-DifPn5uL.js";import{t as ze}from"./plus-D-Zm3HGH.js";import{t as Be}from"./refresh-cw-yw7J1JNv.js";import{t as Ve}from"./search-pKVqwnEN.js";import{t as He}from"./x-C8BsV7Mi.js";var Ue=`Expected a function`,We=Math.max,Ge=Math.min;function Ke(e,t,n){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(Ue);t=i(t)||0,r(n)&&(p=!!n.leading,m=`maxWait`in n,c=m?We(i(n.maxWait)||0,t):c,h=`trailing`in n?!!n.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?Ge(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=a();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(a())}function w(){var e=a(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var qe=`Expected a function`;function Je(e,t,n){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(qe);return r(n)&&(i=`leading`in n?!!n.leading:i,a=`trailing`in n?!!n.trailing:a),Ke(e,t,{leading:i,maxWait:t,trailing:a})}var Ye=_(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[_(`&::-webkit-scrollbar`,{width:0,height:0})]),Xe=U({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=X(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=de();return Ye.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:h,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return me(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Ze=U({name:`ChevronLeft`,render(){return(()=>{let e=oe(`dfe229c2639b2082`);return e[0]||=B(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[B(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`})],-1)})()}}),Qe=U({name:`Add`,render(){return(()=>{let e=oe(`b30130fbba5c5b23`);return e[0]||=B(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[B(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)})()}}),$e=Ae(`n-tabs`),et={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},tt=U({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:et,slots:Object,setup(e){let t=le($e,null);return t||pe(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return J(),F(`div`,{class:L([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:R(this.style)},[V(()=>this.$slots.default?.())],6)}}),nt=[`data-name`,`data-disabled`],rt={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...Pe(et,[`displayDirective`])},it=U({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:rt,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=le($e);return{trigger:d,mergedClosable:N(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:o,mergedClosable:s,trigger:c,$slots:{default:l}}=this,u=i??a;return J(),F(`div`,{class:L(`${t}-tabs-tab-wrapper`)},[this.internalLeftPadded?(J(),F(`div`,{key:0,class:L(`${t}-tabs-tab-pad`)},null,2)):V(()=>null),(J(),F(`div`,te({key:n,"data-name":n,"data-disabled":r?!0:void 0},te({class:[`${t}-tabs-tab`,o===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:c===`click`?this.activateTab:void 0,onMouseenter:c===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[B(`span`,{class:L(`${t}-tabs-tab__label`)},[e?(J(),F($,{key:0},[B(`div`,{class:L(`${t}-tabs-tab__height-placeholder`)},`\xA0`,2),(J(),H(A,{clsPrefix:t},{default:()=>(J(),H(Qe))},1032,[`clsPrefix`]))],64)):(J(),F($,{key:1},[l?(J(),F($,{key:0},[V(()=>l())],64)):(J(),F($,{key:1},[typeof u==`object`?(J(),F($,{key:0},[V(()=>u)],64)):(J(),F($,{key:1},[V(()=>E(u??n))],64))],64))],64))],2),s&&this.type===`card`?(J(),H(ke,{key:0,clsPrefix:t,class:L(`${t}-tabs-tab__close`),onClick:this.handleClose,disabled:r},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):V(()=>null)],16,nt))],2)}}),at=z(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[Z(`&.transition-disabled`,[z(`tabs-tab`,`
 transition: none !important;
 `),z(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),z(`tabs-tab-pad`,`
 transition: none !important;
 `)]),I(`segment-type`,[z(`tabs-rail`,[Z(`&.transition-disabled`,[z(`tabs-capsule`,`
 transition: none;
 `)])])]),I(`top`,[z(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),I(`left`,[z(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),I(`left, right`,`
 flex-direction: row;
 `,[z(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),z(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),I(`right`,`
 flex-direction: row-reverse;
 `,[z(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),z(`tabs-bar`,`
 left: 0;
 `)]),I(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[z(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),z(`tabs-bar`,`
 top: 0;
 `)]),z(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[z(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),z(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[z(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[I(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),Z(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),I(`flex`,[z(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[z(`tabs-wrapper`,`
 width: 100%;
 `,[z(`tabs-tab`,`
 margin-right: 0;
 `)])])]),z(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[k(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),k(`prefix`,`padding-right: 16px;`),k(`suffix`,`padding-left: 16px;`)]),I(`top, bottom`,[Z(`>`,[z(`tabs-nav`,[z(`tabs-nav-scroll-wrapper`,[Z(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),Z(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),I(`shadow-start`,[Z(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),I(`shadow-end`,[Z(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),I(`left, right`,[z(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),Z(`>`,[z(`tabs-nav`,[z(`tabs-nav-scroll-wrapper`,[Z(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),Z(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),I(`shadow-start`,[Z(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),I(`shadow-end`,[Z(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),z(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[z(`tabs-nav-y-scroll`,`
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
 `)])]),z(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),z(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),z(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),z(`tabs-tab`,`
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
 `,[I(`disabled`,{cursor:`not-allowed`}),k(`close`,`
 margin-inline-start: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),k(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),z(`tabs-bar`,`
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
 `),I(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),z(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),z(`tab-pane`,`
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
 `)]),z(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),I(`line-type, bar-type`,[z(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[Z(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),I(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),I(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),z(`tabs-nav`,[k(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),I(`line-type`,[I(`top`,[k(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),z(`tabs-bar`,`
 bottom: -1px;
 `)]),I(`left`,[k(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),z(`tabs-bar`,`
 right: -1px;
 `)]),I(`right`,[k(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),z(`tabs-bar`,`
 left: -1px;
 `)]),I(`bottom`,[k(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),z(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),z(`tabs-bar`,`
 top: -1px;
 `)]),k(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),z(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),z(`tabs-bar`,`
 border-radius: 0;
 `)]),I(`card-type`,[k(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),z(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),z(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),z(`tabs-tab`,`
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
 `,[I(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[k(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Se(`disabled`,[Z(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),I(`closable`,`padding-inline-end: 8px;`),I(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),I(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),I(`left, right`,`
 flex-direction: column; 
 `,[k(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),z(`tabs-wrapper`,`
 flex-direction: column;
 `),z(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[z(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),I(`top`,[I(`card-type`,[z(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),k(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),z(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[I(`active`,`
 border-bottom: 1px solid #0000;
 `)]),z(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),z(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),I(`left`,[I(`card-type`,[z(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),k(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),z(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[I(`active`,`
 border-right: 1px solid #0000;
 `)]),z(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),z(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),I(`right`,[I(`card-type`,[z(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),k(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),z(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[I(`active`,`
 border-left: 1px solid #0000;
 `)]),z(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),z(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),I(`bottom`,[I(`card-type`,[z(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),k(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),z(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[I(`active`,`
 border-top: 1px solid #0000;
 `)]),z(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),z(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),z(`tabs-scroll-button`,[I(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),I(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),I(`up`,`
 padding-bottom: 10px;
 `),I(`down`,`
 padding-top: 10px;
 `)])]),ot=U({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:e,disabled:t,type:n,vertical:r,rtl:i,theme:a,themeOverrides:o,handleClick:s}=this,c=n===`next`,l=r?c:i?!c:c;return J(),H(j,{text:!0,disabled:t,size:`small`,theme:a,themeOverrides:o,onClick:s,class:L([`${e}-tabs-scroll-button`,!r&&n===`prev`&&`${e}-tabs-scroll-button--start`,!r&&n===`next`&&`${e}-tabs-scroll-button--end`,r&&n===`prev`&&`${e}-tabs-scroll-button--up`,r&&n===`next`&&`${e}-tabs-scroll-button--down`])},{icon:()=>(J(),H(A,{clsPrefix:e,style:R(r?{transform:`rotate(90deg)`}:void 0)},{default:()=>l?(J(),H(b,{key:1})):(J(),H(Ze,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),st=Je,ct={...se.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},lt=U({name:`Tabs`,props:ct,slots:Object,setup(t,{slots:n}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a,mergedRtlRef:o}=ie(t),s=Me(`Tabs`,o,r),c=N(()=>{let{placement:e}=t;return e===`start`?s?.value?`right`:`left`:e===`end`?s?.value?`left`:`right`:e}),l=se(`Tabs`,`-tabs`,at,Ne,t,r),u=X(null),d=X(null),f=X(null),p=X(null),h=X(null),_=X(null),v=X(null),y=X(!0),b=X(!0),x=g(t,[`labelSize`,`size`]),S=N(()=>x.value?x.value:a?.value?.Tabs?.size||`medium`),C=g(t,[`activeName`,`value`]),w=X(C.value??t.defaultValue??(n.default?Te(n.default())[0]?.props?.name:null)),T=e(C,w),ee={id:0},te=N(()=>{if(t.justifyContent&&t.type!==`card`)return{display:`flex`,justifyContent:t.justifyContent}});K(T,()=>{ee.id=0,A(),ve(()=>{re()})});function E(){let{value:e}=T;return e===null?null:u.value?.querySelector(`[data-name="${e}"]`)}function ne(e){if(t.type===`card`)return;let{value:n}=f;if(!n)return;let i=n.style.opacity===`0`;if(e){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o}=t,s=c.value;if(e.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(k([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(k([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function O(){if(t.type===`card`)return;let{value:e}=f;e&&(e.style.opacity=`0`)}function k(e){let{value:t}=f;if(t)for(let n of e)t.style[n]=``}function A(){if(t.type===`card`)return;let e=E();e?ne(e):O()}function j(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function re(){let e=[`top`,`bottom`].includes(c.value),n=E();if(n){if(e){let r=_.value?.$el;if(!r)return;j(r,n,e,t.centerActiveTab)}else{let{value:r}=v;if(!r)return;j(r,n,e,t.centerActiveTab)}}}let M=X(null),ae=0,P=null;function F(e){let t=M.value;if(t){ae=e.getBoundingClientRect().height;let n=`${ae}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};P?(r(),P(),P=null):P=r}}function oe(e){let t=M.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(ae,n)}px`};P?(P(),P=null,r()):P=r}}function I(){let e=M.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let le={value:[]},L=X(`next`);function R(e){let t=T.value,n=`next`;for(let r of le.value){if(r===t)break;if(r===e){n=`prev`;break}}L.value=n,ue(e)}function ue(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&xe(n,e),r&&xe(r,e),i&&xe(i,e),w.value=e}function z(e){let{onClose:n}=t;n&&xe(n,e)}function B(e){if([`top`,`bottom`].includes(c.value)){let{value:t}=_;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!s?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=v;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let de=!0;function fe(){let{value:e}=f;if(!e)return;de&&=!1;let t=`transition-disabled`;e.classList.add(t),A(),e.classList.remove(t)}let V=X(null);function H({transitionDisabled:e}){let t=u.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=E();n&&V.value&&(V.value.style.width=`${n.offsetWidth}px`,V.value.style.height=`${n.offsetHeight}px`,V.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&V.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}K([T],()=>{t.type===`segment`&&ve(()=>{H({transitionDisabled:!1})})}),he(()=>{t.type===`segment`&&H({transitionDisabled:!0})});let U=0;function pe(e){if(e.contentRect.width===0&&e.contentRect.height===0||U===e.contentRect.width)return;U=e.contentRect.width;let{type:n}=t;(n===`line`||n===`bar`)&&(de||t.justifyContent?.startsWith(`space`))&&fe(),n!==`segment`&&we(Se())}let me=st(pe,64);function W(){let{type:e}=t;e===`line`||e===`bar`?fe():e===`segment`&&H({transitionDisabled:!0})}K([()=>t.justifyContent,()=>t.size],()=>{ve(()=>{(t.type===`line`||t.type===`bar`)&&fe()})}),K([c,()=>s?.value],()=>{ve(()=>{W(),we(Se(),{instantly:!0})})}),K(()=>t.type,()=>{ve(()=>{let e=d.value;e&&(e.classList.add(`transition-disabled`),W(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let G=X(!1);function ge(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=c.value;if(!G.value)o===`top`||o===`bottom`?i<n&&(G.value=!0):a<r&&(G.value=!0);else{let{value:e}=h;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(G.value=!1):a-r>e.$el.offsetHeight&&(G.value=!1)}we(_.value?.$el||null)}let _e=st(ge,64);function ye(){let{onAdd:e}=t;e&&e()}let be=X(!1);function Se(){let e=c.value;return(e===`top`||e===`bottom`?_.value?.$el:v.value)||null}function we(e,t={instantly:!1}){if(!e)return;let n=t.instantly?p.value:null;n&&n.classList.add(`transition-disabled`);let r=c.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);y.value=i<=1,b.value=i+r>=n-1,be.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;y.value=t<=1,b.value=t+r>=n-1,be.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let q=st(e=>{we(e.target)},64);je($e,{triggerRef:Q(t,`trigger`),tabStyleRef:Q(t,`tabStyle`),tabClassRef:Q(t,`tabClass`),addTabStyleRef:Q(t,`addTabStyle`),addTabClassRef:Q(t,`addTabClass`),paneClassRef:Q(t,`paneClass`),paneStyleRef:Q(t,`paneStyle`),mergedClsPrefixRef:r,typeRef:Q(t,`type`),closableRef:Q(t,`closable`),valueRef:T,tabChangeIdRef:ee,onBeforeLeaveRef:Q(t,`onBeforeLeave`),activateTab:R,handleClose:z,handleAdd:ye}),m(()=>{A(),re()}),Oe(()=>{let{value:e}=p;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;y.value?e.classList.remove(n):e.classList.add(n),b.value?e.classList.remove(i):e.classList.add(i)});let Ee={syncBarPosition:()=>{A()},scrollToCurrentTab:()=>{re()}},J=()=>{H({transitionDisabled:!0})},De=N(()=>{let{value:e}=S,{type:n}=t,r=`${e}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:C,[D(`panePadding`,e)]:w,[D(`tabPadding`,r)]:T,[D(`tabPaddingVertical`,r)]:ee,[D(`tabGap`,r)]:te,[D(`tabGap`,`${r}Vertical`)]:E,[D(`tabTextColor`,n)]:ne,[D(`tabTextColorActive`,n)]:O,[D(`tabTextColorHover`,n)]:k,[D(`tabTextColorDisabled`,n)]:A,[D(`tabFontSize`,e)]:j},common:{cubicBezierEaseInOut:re}}=l.value;return{"--n-bezier":re,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":j,"--n-tab-text-color":ne,"--n-tab-text-color-active":O,"--n-tab-text-color-disabled":A,"--n-tab-text-color-hover":k,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":C,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":ee,"--n-tab-gap":te,"--n-tab-gap-vertical":E,"--n-pane-padding-left":ce(w,`left`),"--n-pane-padding-right":ce(w,`right`),"--n-pane-padding-top":ce(w,`top`),"--n-pane-padding-bottom":ce(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),ke=i?Ce(`tabs`,N(()=>`${S.value[0]}${t.type[0]}`),De,t):void 0;return{mergedClsPrefix:r,mergedValue:T,renderedNames:new Set,segmentCapsuleElRef:V,tabsPaneWrapperRef:M,tabsElRef:u,selfElRef:d,barElRef:f,addTabInstRef:h,xScrollInstRef:_,scrollWrapperElRef:p,addTabFixed:G,tabWrapperStyle:te,handleNavResize:me,mergedSize:S,handleScroll:q,handleTabsResize:_e,cssVars:i?void 0:De,themeClass:ke?.themeClass,animationDirection:L,renderNameListRef:le,yScrollElRef:v,handleSegmentResize:J,onAnimationBeforeLeave:F,onAnimationEnter:oe,onAnimationAfterEnter:I,onRender:ke?.onRender,startReachedRef:y,endReachedRef:b,isOverflow:be,handleButtonClick:B,mergedTheme:l,rtlEnabled:s,mergedPlacement:c,...Ee}},render(){let{mergedClsPrefix:e,type:t,mergedPlacement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,startReachedRef:u,endReachedRef:d,isOverflow:f,showScrollButton:p,handleButtonClick:m,mergedTheme:h,rtlEnabled:g,$slots:{default:_,prefix:v,suffix:y}}=this;s?.();let b=_?Te(_()).filter(e=>e.type.__TAB_PANE__===!0):[],x=_?Te(_()).filter(e=>e.type.__TAB__===!0):[],S=!x.length,C=t===`card`,w=t===`segment`,T=!C&&!w&&this.justifyContent;o.value=[];let E=()=>{let t=(J(),F(`div`,{style:R(this.tabWrapperStyle),class:L(`${e}-tabs-wrapper`)},[T?V(()=>null):(J(),F(`div`,{key:1,class:L(`${e}-tabs-scroll-padding`),style:R(n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),S?(J(),F($,{key:2},[V(()=>b.map((e,t)=>(o.value.push(e.props.name),pt((J(),H(it,te(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!T||T===`center`||T===`start`||T===`end`)}),ne(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(J(),F($,{key:3},[V(()=>x.map((e,t)=>(o.value.push(e.props.name),pt(t!==0&&!T?ft(e):e))))],64)),!r&&i&&C?(J(),F($,{key:4},[V(()=>dt(i,(S?b.length:x.length)!==0))],64)):V(()=>null),T?V(()=>null):(J(),F(`div`,{key:7,class:L(`${e}-tabs-scroll-padding`),style:R({width:`${this.tabsPadding}px`})},null,6)),C?V(()=>null):(J(),F(`div`,{key:9,ref:`barElRef`,class:L(`${e}-tabs-bar`)},null,2))],6));return J(),F(`div`,{ref:`tabsElRef`,class:L(`${e}-tabs-nav-scroll-content`)},[C&&i?(J(),H(ee,{key:0,onResize:this.handleTabsResize},{default:()=>t},1032,[`onResize`])):(J(),F($,{key:1},[V(()=>t)],64)),C?(J(),F(`div`,{key:2,class:L(`${e}-tabs-pad`)},null,2)):V(()=>null)],2)},D=w?`top`:n;return J(),F(`div`,{ref:`selfElRef`,class:L([`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${D}`,g&&`${e}-tabs--rtl`]),style:R(this.cssVars)},[B(`div`,{class:L([`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${D}`,`${e}-tabs-nav`])},[V(()=>_e(v,t=>t&&(J(),F(`div`,{class:L(`${e}-tabs-nav__prefix`)},[V(()=>t)],2)))),w?(J(),H(ee,{key:0,onResize:this.handleSegmentResize},{default:()=>(J(),F(`div`,{class:L(`${e}-tabs-rail`),ref:`tabsElRef`},[B(`div`,{class:L(`${e}-tabs-capsule`),ref:`segmentCapsuleElRef`},[B(`div`,{class:L(`${e}-tabs-wrapper`)},[B(`div`,{class:L(`${e}-tabs-tab`)},null,2)],2)],2),S?(J(),F($,{key:0},[V(()=>b.map((e,t)=>(o.value.push(e.props.name),J(),H(it,te(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),ne(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(J(),F($,{key:1},[V(()=>x.map((e,t)=>(o.value.push(e.props.name),t===0?e:ft(e))))],64))],2))},1032,[`onResize`])):(J(),F($,{key:1},[V(()=>p&&f&&(J(),H(ot,{mergedClsPrefix:e,type:`prev`,vertical:D===`left`||D===`right`,disabled:u,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(J(),H(ee,{onResize:this.handleNavResize},{default:()=>(J(),F(`div`,{class:L(`${e}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(D)?(J(),H(Xe,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:E},1032,[`onScroll`])):(J(),F(`div`,{key:1,class:L(`${e}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[V(()=>E())],42,[`onScroll`]))],2))},1032,[`onResize`])),V(()=>p&&f&&(J(),H(ot,{mergedClsPrefix:e,type:`next`,vertical:D===`left`||D===`right`,disabled:d,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),r&&i&&C?(J(),F($,{key:2},[V(()=>dt(i,!0))],64)):V(()=>null),V(()=>_e(y,t=>t&&(J(),F(`div`,{class:L(`${e}-tabs-nav__suffix`)},[V(()=>t)],2))))],2),V(()=>S&&(this.animated&&(D===`top`||D===`bottom`)?(J(),F(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:R(l),class:L([`${e}-tabs-pane-wrapper`,c])},[V(()=>ut(b,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):ut(b,this.mergedValue,this.renderedNames)))],6)}});function ut(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?be(e,[[ae,c]]):e)}}),o?(J(),H(re,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):s}function dt(e,t){return J(),H(it,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled},null,8,[`internalLeftPadded`,`disabled`])}function ft(e){let t=fe(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function pt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var mt=n(`plug`,[[`path`,{d:`M12 22v-5`,key:`1ega77`}],[`path`,{d:`M15 8V2`,key:`18g5xt`}],[`path`,{d:`M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z`,key:`1xoxul`}],[`path`,{d:`M9 8V2`,key:`14iosj`}]]),ht={class:`skill-manager`},gt={class:`sm-head`},_t={class:`sm-title`},vt={class:`muted sm-count`},yt={class:`sm-actions`},bt={class:`sm-cats`},xt={class:`sm-body`},St={class:`group-title`},Ct={class:`muted`},wt={class:`sm-grid`},Tt={class:`card-head`},Et={class:`card-name`},Dt={class:`card-desc`},Ot={class:`card-tools`},kt={key:0,class:`muted tiny`},At={class:`card-foot`},jt=U({__name:`SkillManager`,props:{skills:{}},emits:[`toggle`,`remove`,`reload`,`add`],setup(e){let n=e,r=[`系统`,`文件`,`代码`,`网络`,`数学`,`通用`,`其他`],i=X(``),a=X(`全部`),c=N(()=>{let e=i.value.trim().toLowerCase(),t=t=>!e||t.name.toLowerCase().includes(e)||(t.description||``).toLowerCase().includes(e)||(t.tools||[]).some(t=>t.toLowerCase().includes(e)),a=new Map;for(let e of n.skills){if(!t(e))continue;let n=e.category||`其他`;a.has(n)||a.set(n,[]),a.get(n).push(e)}let o=Array.from(a.entries()).map(([e,t])=>({category:e,list:t}));return o.sort((e,t)=>{let n=r.indexOf(e.category),i=r.indexOf(t.category);return(n===-1?99:n)-(i===-1?99:i)}),o}),l=N(()=>[`全部`,...c.value.map(e=>e.category)]),u=N(()=>a.value===`全部`?c.value:c.value.filter(e=>e.category===a.value)),d=N(()=>n.skills.filter(e=>e.enabled).length);return(n,r)=>(J(),F(`div`,ht,[B(`div`,gt,[B(`div`,_t,[P(W(x),{size:20}),r[3]||=B(`h2`,null,`技能管理`,-1),B(`span`,vt,O(d.value)+` / `+O(e.skills.length)+` 已启用`,1)]),B(`div`,yt,[P(W(t),{value:i.value,"onUpdate:value":r[0]||=e=>i.value=e,class:`sm-search`,placeholder:`搜索技能 / 工具…`,clearable:``},{prefix:q(()=>[P(W(S),{component:W(Ve)},null,8,[`component`])]),_:1},8,[`value`]),P(W(j),{onClick:r[1]||=e=>n.$emit(`reload`)},{icon:q(()=>[P(W(Be),{size:15})]),default:q(()=>[r[4]||=Y(` 重载 `,-1)]),_:1}),P(W(j),{type:`primary`,onClick:r[2]||=e=>n.$emit(`add`)},{icon:q(()=>[P(W(ze),{size:15})]),default:q(()=>[r[5]||=Y(` 新建技能 `,-1)]),_:1})])]),B(`div`,bt,[(J(!0),F($,null,G(l.value,e=>(J(),H(W(s),{key:e,class:`cat-chip`,type:a.value===e?`primary`:`default`,bordered:!1,checkable:``,checked:a.value===e,"onUpdate:checked":t=>a.value=e},{default:q(()=>[Y(O(e),1)]),_:2},1032,[`type`,`checked`,`onUpdate:checked`]))),128))]),B(`div`,xt,[u.value.length?M(``,!0):(J(),H(W(o),{key:0,class:`sm-empty`,description:`没有匹配的技能`})),(J(!0),F($,null,G(u.value,e=>(J(),F(`section`,{key:e.category,class:`sm-group`},[B(`h4`,St,[Y(O(e.category)+` `,1),B(`span`,Ct,`· `+O(e.list.length),1)]),B(`div`,wt,[(J(!0),F($,null,G(e.list,e=>(J(),H(W(ue),{key:e.id,class:Fe([`skill-card`,{off:!e.enabled}]),size:`small`},{default:q(()=>[B(`div`,Tt,[B(`div`,Et,[P(W(Re),{size:15}),B(`b`,null,O(e.name),1),P(W(s),{size:`small`,bordered:!1,type:e.builtin?`default`:`info`},{default:q(()=>[Y(O(e.builtin?`内置`:`自定义`),1)]),_:2},1032,[`type`])]),P(W(T),{value:e.enabled,size:`small`,"onUpdate:value":t=>n.$emit(`toggle`,e)},null,8,[`value`,`onUpdate:value`])]),B(`p`,Dt,O(e.description||`（无描述）`),1),B(`div`,Ot,[(J(!0),F($,null,G(e.tools||[],e=>(J(),H(W(s),{key:e,size:`small`,bordered:!1,class:`tool-chip`},{default:q(()=>[Y(O(e),1)]),_:2},1024))),128)),!e.tools||!e.tools.length?(J(),F(`span`,kt,`无工具`)):M(``,!0)]),B(`div`,At,[B(`span`,{class:Fe([`state`,e.enabled?`on`:`off`])},O(e.enabled?`已启用`:`已禁用`),3),e.builtin?M(``,!0):(J(),H(W(j),{key:0,quaternary:``,circle:``,size:`tiny`,title:`删除技能`,type:`error`,onClick:t=>n.$emit(`remove`,e.id)},{icon:q(()=>[P(W(w),{size:14})]),_:1},8,[`onClick`]))])]),_:2},1032,[`class`]))),128))])]))),128))])]))}}),Mt={class:`modal-actions`},Nt=U({__name:`SkillModal`,props:{open:{type:Boolean}},emits:[`close`,`submit`],setup(e,{emit:n}){let r=e,i=n,a=De(),o=ye({name:``,description:``,code:``}),s=X(!1);K(()=>r.open,e=>{e&&(o.name=``,o.description=``,o.code=``,s.value=!1)});function c(){if(!o.code.trim()){a.warning(`代码不能为空`);return}s.value=!0,i(`submit`,{...o})}return(n,r)=>(J(),H(W(we),{show:e.open,"onUpdate:show":r[4]||=e=>i(`close`)},{default:q(()=>[P(W(ue),{class:`modal-card modal-w-md`,title:`新建自定义技能`,bordered:!1,size:`medium`},{footer:q(()=>[B(`div`,Mt,[P(W(j),{onClick:r[3]||=e=>i(`close`)},{default:q(()=>[...r[5]||=[Y(`取消`,-1)]]),_:1}),P(W(j),{type:`primary`,loading:s.value,onClick:c},{default:q(()=>[...r[6]||=[Y(`创建`,-1)]]),_:1},8,[`loading`])])]),default:q(()=>[P(W(v),{"label-placement":`top`,"show-feedback":!1},{default:q(()=>[P(W(y),{label:`名称`},{default:q(()=>[P(W(t),{value:o.name,"onUpdate:value":r[0]||=e=>o.name=e,placeholder:`我的技能`},null,8,[`value`])]),_:1}),P(W(y),{label:`描述`},{default:q(()=>[P(W(t),{value:o.description,"onUpdate:value":r[1]||=e=>o.description=e,placeholder:`这个技能做什么`},null,8,[`value`])]),_:1}),P(W(y),{label:`代码（用 @tool 装饰函数，可定义 META 元信息）`},{default:q(()=>[P(W(t),{value:o.code,"onUpdate:value":r[2]||=e=>o.code=e,type:`textarea`,autosize:{minRows:10,maxRows:20},placeholder:`用 @tool 装饰定义一个工具函数`},null,8,[`value`])]),_:1})]),_:1})]),_:1})]),_:1},8,[`show`]))}}),Pt={class:`page`},Ft={class:`page-head`},It={class:`page-title`},Lt={class:`page-body page-body-flush`},Rt={class:`tab-label`},zt={class:`tab-label`},Bt={key:0,class:`grid-cards`},Vt={key:2,class:`grid-cards`},Ht={class:`card-head`},Ut={class:`card-name`},Wt={class:`card-desc card-desc-flat`},Gt=U({__name:`Experts`,setup(e){let t=De(),n=X(`skills`),r=X(!1),i=[{name:`工作目录`,desc:`读写当前会话隔离目录下的文件`,ready:!0},{name:`Shell 执行`,desc:`在沙箱内执行命令并返回输出`,ready:!0},{name:`Web 检索`,desc:`联网搜索与抓取页面内容`,ready:!0},{name:`计算器`,desc:`安全的数学表达式求值`,ready:!0},{name:`腾讯文档`,desc:`读取与写入腾讯文档（需授权）`,ready:!1},{name:`GitHub`,desc:`仓库、Issue 与 PR 操作（需授权）`,ready:!1}];async function a(e){let n=await d(e);n.ok?(r.value=!1,t.success(`技能创建成功`)):t.error(`创建失败: `+(n.error||`未知错误`))}let m=Ee(),h=X(!0);return he(async()=>{await f(),h.value=!1,m.query.new===`1`&&(r.value=!0)}),(e,t)=>(J(),F(`div`,Pt,[B(`div`,Ft,[B(`div`,It,[P(W(x),{size:20}),t[3]||=B(`h1`,null,`专家 · 技能 · 连接器`,-1)])]),B(`div`,Lt,[P(W(lt),{value:n.value,"onUpdate:value":t[0]||=e=>n.value=e,type:`line`,size:`medium`,class:`experts-tabs`},{default:q(()=>[P(W(tt),{name:`skills`},{tab:q(()=>[B(`span`,Rt,[P(W(x),{size:15}),t[4]||=Y(` 技能`,-1)])]),_:1}),P(W(tt),{name:`connectors`},{tab:q(()=>[B(`span`,zt,[P(W(mt),{size:15}),t[5]||=Y(` 连接器`,-1)])]),_:1})]),_:1},8,[`value`]),n.value===`skills`&&h.value?(J(),F(`div`,Bt,[(J(),F($,null,G(4,e=>P(W(ue),{key:`sk`+e,size:`small`},{default:q(()=>[P(W(C),{text:``,width:`42%`,class:`sk-title`}),P(W(C),{text:``,repeat:2})]),_:1})),64))])):n.value===`skills`?(J(),H(jt,{key:1,skills:W(l).skills,onToggle:W(p),onRemove:W(u),onReload:W(c),onAdd:t[1]||=e=>r.value=!0},null,8,[`skills`,`onToggle`,`onRemove`,`onReload`])):(J(),F(`div`,Vt,[(J(),F($,null,G(i,e=>P(W(ue),{key:e.name,size:`small`},{default:q(()=>[B(`div`,Ht,[B(`div`,Ut,[P(W(Ie),{size:15}),B(`b`,null,O(e.name),1)]),P(W(s),{size:`small`,bordered:!1,type:e.ready?`success`:`default`},{icon:q(()=>[(J(),H(ge(e.ready?W(Le):W(He)),{size:12}))]),default:q(()=>[Y(` `+O(e.ready?`已就绪`:`未接入`),1)]),_:2},1032,[`type`])]),B(`p`,Wt,O(e.desc),1)]),_:2},1024)),64)),i.length?M(``,!0):(J(),H(W(o),{key:0,class:`page-empty`,description:`暂无连接器`}))]))]),P(Nt,{open:r.value,onClose:t[2]||=e=>r.value=!1,onSubmit:a},null,8,[`open`])]))}});export{Gt as default};