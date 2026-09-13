import{i as e,n as t,t as n}from"./createLucideIcon-DTZipSeT.js";import{S as r,b as i,c as a,g as o,l as s,n as c,o as l,v as u}from"./store-UWf7_oX3.js";import{a as d,i as f,n as p,r as m,t as h}from"./plus-D7vuENJ3.js";import{n as g,t as _}from"./FormItem-DsPHvM9k.js";import{n as v,t as y}from"./puzzle-PZ7oafZk.js";import{t as b}from"./Icon-kCn36hul.js";import{t as x}from"./Skeleton-DCYZVZCf.js";import{t as S}from"./Switch-D21vI9sM.js";import{$ as ee,A as C,Ar as w,Bt as te,Cn as T,Cr as E,Dr as D,Dt as ne,E as O,Er as re,Fr as k,Gt as ie,Hn as A,Ir as ae,Lr as j,Lt as oe,Nr as M,Or as se,Ot as ce,Pr as N,Pt as le,Rn as P,Rr as F,Rt as I,Sr as ue,T as de,Un as fe,Ut as pe,Vn as L,Vt as R,Wn as z,Yn as me,Yt as he,Zn as ge,ar as B,br as _e,cr as V,dt as H,er as U,fr as ve,gn as ye,hr as be,ht as xe,ir as W,jr as G,kr as K,kt as Se,lr as q,m as Ce,mr as J,mt as we,nr as Te,o as Ee,or as De,p as Oe,pr as ke,q as Ae,qt as je,rr as Y,sr as X,st as Me,u as Ne,ur as Z,x as Pe,xr as Q,yn as Fe,zn as $}from"./index-BKnoSBpI.js";import{t as Ie}from"./bot-DIGuJUJI.js";import{n as Le,t as Re}from"./refresh-cw-CbWu3XU6.js";import{t as ze}from"./package-BGYqw2rU.js";import{t as Be}from"./search-CynKb3GQ.js";import{t as Ve}from"./trash-2-EI8GYVga.js";import{t as He}from"./x-CouLK96w.js";var Ue=/\s/;function We(e){for(var t=e.length;t--&&Ue.test(e.charAt(t)););return t}var Ge=/^\s+/;function Ke(e){return e&&e.slice(0,We(e)+1).replace(Ge,``)}var qe=NaN,Je=/^[-+]0x[0-9a-f]+$/i,Ye=/^0b[01]+$/i,Xe=/^0o[0-7]+$/i,Ze=parseInt;function Qe(e){if(typeof e==`number`)return e;if(Fe(e))return qe;if(ye(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=ye(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=Ke(e);var n=Ye.test(e);return n||Xe.test(e)?Ze(e.slice(2),n?2:8):Je.test(e)?qe:+e}var $e=function(){return T.Date.now()},et=`Expected a function`,tt=Math.max,nt=Math.min;function rt(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(et);t=Qe(t)||0,ye(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?tt(Qe(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?nt(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=$e();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v($e())}function x(){var e=$e(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var it=`Expected a function`;function at(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(it);return ye(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),rt(e,t,{leading:r,maxWait:t,trailing:i})}var ot=p(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[p(`&::-webkit-scrollbar`,{width:0,height:0})]),st=Z({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=M(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=pe();return ot.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:m,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return ve(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),ct=Z({name:`ChevronLeft`,render(){return(()=>{let e=oe(`dfe229c2639b2082`);return e[0]||=W(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[W(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`})],-1)})()}}),lt=Z({name:`Add`,render(){return(()=>{let e=oe(`b30130fbba5c5b23`);return e[0]||=W(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[W(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)})()}}),ut=je(`n-tabs`),dt={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ft=Z({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:dt,slots:Object,setup(e){let t=ke(ut,null);return t||he(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return Q(),X(`div`,{class:I([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:j(this.style)},[R(()=>this.$slots.default?.())],6)}}),pt=[`data-name`,`data-disabled`],mt={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...Pe(dt,[`displayDirective`])},ht=Z({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:mt,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=ke(ut);return{trigger:d,mergedClosable:Y(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:o,mergedClosable:s,trigger:c,$slots:{default:l}}=this,u=i??a;return Q(),X(`div`,{class:I(`${t}-tabs-tab-wrapper`)},[this.internalLeftPadded?(Q(),X(`div`,{key:0,class:I(`${t}-tabs-tab-pad`)},null,2)):R(()=>null),(Q(),X(`div`,J({key:n,"data-name":n,"data-disabled":r?!0:void 0},J({class:[`${t}-tabs-tab`,o===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:c===`click`?this.activateTab:void 0,onMouseenter:c===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[W(`span`,{class:I(`${t}-tabs-tab__label`)},[e?(Q(),X(U,{key:0},[W(`div`,{class:I(`${t}-tabs-tab__height-placeholder`)},`\xA0`,2),(Q(),B(ne,{clsPrefix:t},{default:()=>(Q(),B(lt))},1032,[`clsPrefix`]))],64)):(Q(),X(U,{key:1},[l?(Q(),X(U,{key:0},[R(()=>l())],64)):(Q(),X(U,{key:1},[typeof u==`object`?(Q(),X(U,{key:0},[R(()=>u)],64)):(Q(),X(U,{key:1},[R(()=>C(u??n))],64))],64))],64))],2),s&&this.type===`card`?(Q(),B(Ae,{key:0,clsPrefix:t,class:I(`${t}-tabs-tab__close`),onClick:this.handleClose,disabled:r},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):R(()=>null)],16,pt))],2)}}),gt=$(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[P(`&.transition-disabled`,[$(`tabs-tab`,`
 transition: none !important;
 `),$(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),$(`tabs-tab-pad`,`
 transition: none !important;
 `)]),A(`segment-type`,[$(`tabs-rail`,[P(`&.transition-disabled`,[$(`tabs-capsule`,`
 transition: none;
 `)])])]),A(`top`,[$(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),A(`left`,[$(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),A(`left, right`,`
 flex-direction: row;
 `,[$(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),$(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),A(`right`,`
 flex-direction: row-reverse;
 `,[$(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),$(`tabs-bar`,`
 left: 0;
 `)]),A(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[$(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),$(`tabs-bar`,`
 top: 0;
 `)]),$(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[$(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),$(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[$(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[A(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),P(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),A(`flex`,[$(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[$(`tabs-wrapper`,`
 width: 100%;
 `,[$(`tabs-tab`,`
 margin-right: 0;
 `)])])]),$(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[L(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),L(`prefix`,`padding-right: 16px;`),L(`suffix`,`padding-left: 16px;`)]),A(`top, bottom`,[P(`>`,[$(`tabs-nav`,[$(`tabs-nav-scroll-wrapper`,[P(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),P(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),A(`shadow-start`,[P(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),A(`shadow-end`,[P(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),A(`left, right`,[$(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),P(`>`,[$(`tabs-nav`,[$(`tabs-nav-scroll-wrapper`,[P(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),P(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),A(`shadow-start`,[P(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),A(`shadow-end`,[P(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),$(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[$(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[P(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),P(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `),P(`&.transition-disabled`,[P(`&::before, &::after`,`
 transition: none;
 `)])]),$(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),$(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),$(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),$(`tabs-tab`,`
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
 `,[A(`disabled`,{cursor:`not-allowed`}),L(`close`,`
 margin-inline-start: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),L(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),$(`tabs-bar`,`
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
 `,[P(`&.transition-disabled`,`
 transition: none;
 `),A(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),$(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),$(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[P(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),P(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),P(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),P(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),P(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),$(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),A(`line-type, bar-type`,[$(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[P(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),A(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),A(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),$(`tabs-nav`,[L(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),$(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),A(`line-type`,[A(`top`,[L(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),$(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),$(`tabs-bar`,`
 bottom: -1px;
 `)]),A(`left`,[L(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),$(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),$(`tabs-bar`,`
 right: -1px;
 `)]),A(`right`,[L(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),$(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),$(`tabs-bar`,`
 left: -1px;
 `)]),A(`bottom`,[L(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),$(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),$(`tabs-bar`,`
 top: -1px;
 `)]),L(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),$(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),$(`tabs-bar`,`
 border-radius: 0;
 `)]),A(`card-type`,[L(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),$(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),$(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),$(`tabs-tab`,`
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
 `,[A(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[L(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),fe(`disabled`,[P(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),A(`closable`,`padding-inline-end: 8px;`),A(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),A(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),A(`left, right`,`
 flex-direction: column; 
 `,[L(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),$(`tabs-wrapper`,`
 flex-direction: column;
 `),$(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[$(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),A(`top`,[A(`card-type`,[$(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),L(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),$(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[A(`active`,`
 border-bottom: 1px solid #0000;
 `)]),$(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),$(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),A(`left`,[A(`card-type`,[$(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),L(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),$(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[A(`active`,`
 border-right: 1px solid #0000;
 `)]),$(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),$(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),A(`right`,[A(`card-type`,[$(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),L(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),$(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[A(`active`,`
 border-left: 1px solid #0000;
 `)]),$(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),$(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),A(`bottom`,[A(`card-type`,[$(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),L(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),$(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[A(`active`,`
 border-top: 1px solid #0000;
 `)]),$(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),$(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),$(`tabs-scroll-button`,[A(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),A(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),A(`up`,`
 padding-bottom: 10px;
 `),A(`down`,`
 padding-top: 10px;
 `)])]),_t=Z({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:e,disabled:t,type:n,vertical:r,rtl:i,theme:a,themeOverrides:o,handleClick:s}=this,c=n===`next`,l=r?c:i?!c:c;return Q(),B(O,{text:!0,disabled:t,size:`small`,theme:a,themeOverrides:o,onClick:s,class:I([`${e}-tabs-scroll-button`,!r&&n===`prev`&&`${e}-tabs-scroll-button--start`,!r&&n===`next`&&`${e}-tabs-scroll-button--end`,r&&n===`prev`&&`${e}-tabs-scroll-button--up`,r&&n===`next`&&`${e}-tabs-scroll-button--down`])},{icon:()=>(Q(),B(ne,{clsPrefix:e,style:j(r?{transform:`rotate(90deg)`}:void 0)},{default:()=>l?(Q(),B(v,{key:1})):(Q(),B(ct,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),vt=at,yt={...ce.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},bt=Z({name:`Tabs`,props:yt,slots:Object,setup(t,{slots:n}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a,mergedRtlRef:o}=ie(t),s=Me(`Tabs`,o,r),c=Y(()=>{let{placement:e}=t;return e===`start`?s?.value?`right`:`left`:e===`end`?s?.value?`left`:`right`:e}),l=ce(`Tabs`,`-tabs`,gt,Ne,t,r),u=M(null),p=M(null),m=M(null),h=M(null),g=M(null),_=M(null),v=M(null),y=M(!0),b=M(!0),x=f(t,[`labelSize`,`size`]),S=Y(()=>x.value?x.value:a?.value?.Tabs?.size||`medium`),ee=f(t,[`activeName`,`value`]),C=M(ee.value??t.defaultValue??(n.default?we(n.default())[0]?.props?.name:null)),w=e(ee,C),te={id:0},T=Y(()=>{if(t.justifyContent&&t.type!==`card`)return{display:`flex`,justifyContent:t.justifyContent}});D(w,()=>{te.id=0,k(),be(()=>{ae()})});function E(){let{value:e}=w;return e===null?null:u.value?.querySelector(`[data-name="${e}"]`)}function ne(e){if(t.type===`card`)return;let{value:n}=m;if(!n)return;let i=n.style.opacity===`0`;if(e){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o}=t,s=c.value;if(e.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(re([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(re([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function O(){if(t.type===`card`)return;let{value:e}=m;e&&(e.style.opacity=`0`)}function re(e){let{value:t}=m;if(t)for(let n of e)t.style[n]=``}function k(){if(t.type===`card`)return;let e=E();e?ne(e):O()}function A(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function ae(){let e=[`top`,`bottom`].includes(c.value),n=E();if(n){if(e){let r=_.value?.$el;if(!r)return;A(r,n,e,t.centerActiveTab)}else{let{value:r}=v;if(!r)return;A(r,n,e,t.centerActiveTab)}}}let j=M(null),oe=0,P=null;function F(e){let t=j.value;if(t){oe=e.getBoundingClientRect().height;let n=`${oe}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};P?(r(),P(),P=null):P=r}}function I(e){let t=j.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(oe,n)}px`};P?(P(),P=null,r()):P=r}}function de(){let e=j.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let fe={value:[]},pe=M(`next`);function L(e){let t=w.value,n=`next`;for(let r of fe.value){if(r===t)break;if(r===e){n=`prev`;break}}pe.value=n,R(e)}function R(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&xe(n,e),r&&xe(r,e),i&&xe(i,e),C.value=e}function me(e){let{onClose:n}=t;n&&xe(n,e)}function he(e){if([`top`,`bottom`].includes(c.value)){let{value:t}=_;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!s?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=v;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let ge=!0;function B(){let{value:e}=m;if(!e)return;ge&&=!1;let t=`transition-disabled`;e.classList.add(t),k(),e.classList.remove(t)}let V=M(null);function H({transitionDisabled:e}){let t=u.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=E();n&&V.value&&(V.value.style.width=`${n.offsetWidth}px`,V.value.style.height=`${n.offsetHeight}px`,V.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&V.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}D([w],()=>{t.type===`segment`&&be(()=>{H({transitionDisabled:!1})})}),_e(()=>{t.type===`segment`&&H({transitionDisabled:!0})});let U=0;function ve(e){if(e.contentRect.width===0&&e.contentRect.height===0||U===e.contentRect.width)return;U=e.contentRect.width;let{type:n}=t;(n===`line`||n===`bar`)&&(ge||t.justifyContent?.startsWith(`space`))&&B(),n!==`segment`&&Ee(Te())}let ye=vt(ve,64);function W(){let{type:e}=t;e===`line`||e===`bar`?B():e===`segment`&&H({transitionDisabled:!0})}D([()=>t.justifyContent,()=>t.size],()=>{be(()=>{(t.type===`line`||t.type===`bar`)&&B()})}),D([c,()=>s?.value],()=>{be(()=>{W(),Ee(Te(),{instantly:!0})})}),D(()=>t.type,()=>{be(()=>{let e=p.value;e&&(e.classList.add(`transition-disabled`),W(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let G=M(!1);function K(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=c.value;if(!G.value)o===`top`||o===`bottom`?i<n&&(G.value=!0):a<r&&(G.value=!0);else{let{value:e}=g;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(G.value=!1):a-r>e.$el.offsetHeight&&(G.value=!1)}Ee(_.value?.$el||null)}let q=vt(K,64);function Ce(){let{onAdd:e}=t;e&&e()}let J=M(!1);function Te(){let e=c.value;return(e===`top`||e===`bottom`?_.value?.$el:v.value)||null}function Ee(e,t={instantly:!1}){if(!e)return;let n=t.instantly?h.value:null;n&&n.classList.add(`transition-disabled`);let r=c.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);y.value=i<=1,b.value=i+r>=n-1,J.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;y.value=t<=1,b.value=t+r>=n-1,J.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let De=vt(e=>{Ee(e.target)},64);ue(ut,{triggerRef:N(t,`trigger`),tabStyleRef:N(t,`tabStyle`),tabClassRef:N(t,`tabClass`),addTabStyleRef:N(t,`addTabStyle`),addTabClassRef:N(t,`addTabClass`),paneClassRef:N(t,`paneClass`),paneStyleRef:N(t,`paneStyle`),mergedClsPrefixRef:r,typeRef:N(t,`type`),closableRef:N(t,`closable`),valueRef:w,tabChangeIdRef:te,onBeforeLeaveRef:N(t,`onBeforeLeave`),activateTab:L,handleClose:me,handleAdd:Ce}),d(()=>{k(),ae()}),se(()=>{let{value:e}=h;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;y.value?e.classList.remove(n):e.classList.add(n),b.value?e.classList.remove(i):e.classList.add(i)});let Oe={syncBarPosition:()=>{k()},scrollToCurrentTab:()=>{ae()}},ke=()=>{H({transitionDisabled:!0})},Ae=Y(()=>{let{value:e}=S,{type:n}=t,r=`${e}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:ee,[z(`panePadding`,e)]:C,[z(`tabPadding`,r)]:w,[z(`tabPaddingVertical`,r)]:te,[z(`tabGap`,r)]:T,[z(`tabGap`,`${r}Vertical`)]:E,[z(`tabTextColor`,n)]:D,[z(`tabTextColorActive`,n)]:ne,[z(`tabTextColorHover`,n)]:O,[z(`tabTextColorDisabled`,n)]:re,[z(`tabFontSize`,e)]:k},common:{cubicBezierEaseInOut:ie}}=l.value;return{"--n-bezier":ie,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":k,"--n-tab-text-color":D,"--n-tab-text-color-active":ne,"--n-tab-text-color-disabled":re,"--n-tab-text-color-hover":O,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":ee,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":w,"--n-tab-padding-vertical":te,"--n-tab-gap":T,"--n-tab-gap-vertical":E,"--n-pane-padding-left":le(C,`left`),"--n-pane-padding-right":le(C,`right`),"--n-pane-padding-top":le(C,`top`),"--n-pane-padding-bottom":le(C,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),je=i?Se(`tabs`,Y(()=>`${S.value[0]}${t.type[0]}`),Ae,t):void 0;return{mergedClsPrefix:r,mergedValue:w,renderedNames:new Set,segmentCapsuleElRef:V,tabsPaneWrapperRef:j,tabsElRef:u,selfElRef:p,barElRef:m,addTabInstRef:g,xScrollInstRef:_,scrollWrapperElRef:h,addTabFixed:G,tabWrapperStyle:T,handleNavResize:ye,mergedSize:S,handleScroll:De,handleTabsResize:q,cssVars:i?void 0:Ae,themeClass:je?.themeClass,animationDirection:pe,renderNameListRef:fe,yScrollElRef:v,handleSegmentResize:ke,onAnimationBeforeLeave:F,onAnimationEnter:I,onAnimationAfterEnter:de,onRender:je?.onRender,startReachedRef:y,endReachedRef:b,isOverflow:J,handleButtonClick:he,mergedTheme:l,rtlEnabled:s,mergedPlacement:c,...Oe}},render(){let{mergedClsPrefix:e,type:t,mergedPlacement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,startReachedRef:u,endReachedRef:d,isOverflow:f,showScrollButton:p,handleButtonClick:m,mergedTheme:h,rtlEnabled:g,$slots:{default:_,prefix:v,suffix:y}}=this;s?.();let b=_?we(_()).filter(e=>e.type.__TAB_PANE__===!0):[],x=_?we(_()).filter(e=>e.type.__TAB__===!0):[],S=!x.length,C=t===`card`,w=t===`segment`,T=!C&&!w&&this.justifyContent;o.value=[];let E=()=>{let t=(Q(),X(`div`,{style:j(this.tabWrapperStyle),class:I(`${e}-tabs-wrapper`)},[T?R(()=>null):(Q(),X(`div`,{key:1,class:I(`${e}-tabs-scroll-padding`),style:j(n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),S?(Q(),X(U,{key:2},[R(()=>b.map((e,t)=>(o.value.push(e.props.name),wt((Q(),B(ht,J(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!T||T===`center`||T===`start`||T===`end`)}),te(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(Q(),X(U,{key:3},[R(()=>x.map((e,t)=>(o.value.push(e.props.name),wt(t!==0&&!T?Ct(e):e))))],64)),!r&&i&&C?(Q(),X(U,{key:4},[R(()=>St(i,(S?b.length:x.length)!==0))],64)):R(()=>null),T?R(()=>null):(Q(),X(`div`,{key:7,class:I(`${e}-tabs-scroll-padding`),style:j({width:`${this.tabsPadding}px`})},null,6)),C?R(()=>null):(Q(),X(`div`,{key:9,ref:`barElRef`,class:I(`${e}-tabs-bar`)},null,2))],6));return Q(),X(`div`,{ref:`tabsElRef`,class:I(`${e}-tabs-nav-scroll-content`)},[C&&i?(Q(),B(ee,{key:0,onResize:this.handleTabsResize},{default:()=>t},1032,[`onResize`])):(Q(),X(U,{key:1},[R(()=>t)],64)),C?(Q(),X(`div`,{key:2,class:I(`${e}-tabs-pad`)},null,2)):R(()=>null)],2)},D=w?`top`:n;return Q(),X(`div`,{ref:`selfElRef`,class:I([`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${D}`,g&&`${e}-tabs--rtl`]),style:j(this.cssVars)},[W(`div`,{class:I([`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${D}`,`${e}-tabs-nav`])},[R(()=>H(v,t=>t&&(Q(),X(`div`,{class:I(`${e}-tabs-nav__prefix`)},[R(()=>t)],2)))),w?(Q(),B(ee,{key:0,onResize:this.handleSegmentResize},{default:()=>(Q(),X(`div`,{class:I(`${e}-tabs-rail`),ref:`tabsElRef`},[W(`div`,{class:I(`${e}-tabs-capsule`),ref:`segmentCapsuleElRef`},[W(`div`,{class:I(`${e}-tabs-wrapper`)},[W(`div`,{class:I(`${e}-tabs-tab`)},null,2)],2)],2),S?(Q(),X(U,{key:0},[R(()=>b.map((e,t)=>(o.value.push(e.props.name),Q(),B(ht,J(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),te(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(Q(),X(U,{key:1},[R(()=>x.map((e,t)=>(o.value.push(e.props.name),t===0?e:Ct(e))))],64))],2))},1032,[`onResize`])):(Q(),X(U,{key:1},[R(()=>p&&f&&(Q(),B(_t,{mergedClsPrefix:e,type:`prev`,vertical:D===`left`||D===`right`,disabled:u,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(Q(),B(ee,{onResize:this.handleNavResize},{default:()=>(Q(),X(`div`,{class:I(`${e}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(D)?(Q(),B(st,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:E},1032,[`onScroll`])):(Q(),X(`div`,{key:1,class:I(`${e}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[R(()=>E())],42,[`onScroll`]))],2))},1032,[`onResize`])),R(()=>p&&f&&(Q(),B(_t,{mergedClsPrefix:e,type:`next`,vertical:D===`left`||D===`right`,disabled:d,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),r&&i&&C?(Q(),X(U,{key:2},[R(()=>St(i,!0))],64)):R(()=>null),R(()=>H(y,t=>t&&(Q(),X(`div`,{class:I(`${e}-tabs-nav__suffix`)},[R(()=>t)],2))))],2),R(()=>S&&(this.animated&&(D===`top`||D===`bottom`)?(Q(),X(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:j(l),class:I([`${e}-tabs-pane-wrapper`,c])},[R(()=>xt(b,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):xt(b,this.mergedValue,this.renderedNames)))],6)}});function xt(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?w(e,[[ge,c]]):e)}}),o?(Q(),B(me,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):s}function St(e,t){return Q(),B(ht,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled},null,8,[`internalLeftPadded`,`disabled`])}function Ct(e){let t=Te(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function wt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var Tt=n(`plug`,[[`path`,{d:`M12 22v-5`,key:`1ega77`}],[`path`,{d:`M15 8V2`,key:`18g5xt`}],[`path`,{d:`M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z`,key:`1xoxul`}],[`path`,{d:`M9 8V2`,key:`14iosj`}]]),Et={class:`skill-manager`},Dt={class:`sm-head`},Ot={class:`sm-title`},kt={class:`muted sm-count`},At={class:`sm-actions`},jt={class:`sm-cats`},Mt={class:`sm-body`},Nt={class:`group-title`},Pt={class:`muted`},Ft={class:`sm-grid`},It={class:`card-head`},Lt={class:`card-name`},Rt={class:`card-desc`},zt={class:`card-tools`},Bt={key:0,class:`muted tiny`},Vt={class:`card-foot`},Ht=Z({__name:`SkillManager`,props:{skills:{}},emits:[`toggle`,`remove`,`reload`,`add`],setup(e){let n=e,a=[`系统`,`文件`,`代码`,`网络`,`数学`,`通用`,`其他`],o=M(``),s=M(`全部`),c=Y(()=>{let e=o.value.trim().toLowerCase(),t=t=>!e||t.name.toLowerCase().includes(e)||(t.description||``).toLowerCase().includes(e)||(t.tools||[]).some(t=>t.toLowerCase().includes(e)),r=new Map;for(let e of n.skills){if(!t(e))continue;let n=e.category||`其他`;r.has(n)||r.set(n,[]),r.get(n).push(e)}let i=Array.from(r.entries()).map(([e,t])=>({category:e,list:t}));return i.sort((e,t)=>{let n=a.indexOf(e.category),r=a.indexOf(t.category);return(n===-1?99:n)-(r===-1?99:r)}),i}),l=Y(()=>[`全部`,...c.value.map(e=>e.category)]),u=Y(()=>s.value===`全部`?c.value:c.value.filter(e=>e.category===s.value)),d=Y(()=>n.skills.filter(e=>e.enabled).length);return(n,a)=>(Q(),X(`div`,Et,[W(`div`,Dt,[W(`div`,Ot,[q(k(y),{size:20}),a[3]||=W(`h2`,null,`技能管理`,-1),W(`span`,kt,F(d.value)+` / `+F(e.skills.length)+` 已启用`,1)]),W(`div`,At,[q(k(t),{value:o.value,"onUpdate:value":a[0]||=e=>o.value=e,class:`sm-search`,placeholder:`搜索技能 / 工具…`,clearable:``},{prefix:K(()=>[q(k(b),{component:k(Be)},null,8,[`component`])]),_:1},8,[`value`]),q(k(O),{onClick:a[1]||=e=>n.$emit(`reload`)},{icon:K(()=>[q(k(Re),{size:15})]),default:K(()=>[a[4]||=V(` 重载 `,-1)]),_:1}),q(k(O),{type:`primary`,onClick:a[2]||=e=>n.$emit(`add`)},{icon:K(()=>[q(k(h),{size:15})]),default:K(()=>[a[5]||=V(` 新建技能 `,-1)]),_:1})])]),W(`div`,jt,[(Q(!0),X(U,null,E(l.value,e=>(Q(),B(k(i),{key:e,class:`cat-chip`,type:s.value===e?`primary`:`default`,bordered:!1,checkable:``,checked:s.value===e,"onUpdate:checked":t=>s.value=e},{default:K(()=>[V(F(e),1)]),_:2},1032,[`type`,`checked`,`onUpdate:checked`]))),128))]),W(`div`,Mt,[u.value.length?De(``,!0):(Q(),B(k(r),{key:0,class:`sm-empty`,description:`没有匹配的技能`})),(Q(!0),X(U,null,E(u.value,e=>(Q(),X(`section`,{key:e.category,class:`sm-group`},[W(`h4`,Nt,[V(F(e.category)+` `,1),W(`span`,Pt,`· `+F(e.list.length),1)]),W(`div`,Ft,[(Q(!0),X(U,null,E(e.list,e=>(Q(),B(k(de),{key:e.id,class:ae([`skill-card`,{off:!e.enabled}]),size:`small`},{default:K(()=>[W(`div`,It,[W(`div`,Lt,[q(k(ze),{size:15}),W(`b`,null,F(e.name),1),q(k(i),{size:`small`,bordered:!1,type:e.builtin?`default`:`info`},{default:K(()=>[V(F(e.builtin?`内置`:`自定义`),1)]),_:2},1032,[`type`])]),q(k(S),{value:e.enabled,size:`small`,"onUpdate:value":t=>n.$emit(`toggle`,e)},null,8,[`value`,`onUpdate:value`])]),W(`p`,Rt,F(e.description||`（无描述）`),1),W(`div`,zt,[(Q(!0),X(U,null,E(e.tools||[],e=>(Q(),B(k(i),{key:e,size:`small`,bordered:!1,class:`tool-chip`},{default:K(()=>[V(F(e),1)]),_:2},1024))),128)),!e.tools||!e.tools.length?(Q(),X(`span`,Bt,`无工具`)):De(``,!0)]),W(`div`,Vt,[W(`span`,{class:ae([`state`,e.enabled?`on`:`off`])},F(e.enabled?`已启用`:`已禁用`),3),e.builtin?De(``,!0):(Q(),B(k(O),{key:0,quaternary:``,circle:``,size:`tiny`,title:`删除技能`,type:`error`,onClick:t=>n.$emit(`remove`,e.id)},{icon:K(()=>[q(k(Ve),{size:14})]),_:1},8,[`onClick`]))])]),_:2},1032,[`class`]))),128))])]))),128))])]))}}),Ut={class:`modal-actions`},Wt=Z({__name:`SkillModal`,props:{open:{type:Boolean}},emits:[`close`,`submit`],setup(e,{emit:n}){let r=e,i=n,a=Oe(),o=G({name:``,description:``,code:``}),s=M(!1);D(()=>r.open,e=>{e&&(o.name=``,o.description=``,o.code=``,s.value=!1)});function c(){if(!o.code.trim()){a.warning(`代码不能为空`);return}s.value=!0,i(`submit`,{...o})}return(n,r)=>(Q(),B(k(Ce),{show:e.open,"onUpdate:show":r[4]||=e=>i(`close`)},{default:K(()=>[q(k(de),{class:`modal-card modal-w-md`,title:`新建自定义技能`,bordered:!1,size:`medium`},{footer:K(()=>[W(`div`,Ut,[q(k(O),{onClick:r[3]||=e=>i(`close`)},{default:K(()=>[...r[5]||=[V(`取消`,-1)]]),_:1}),q(k(O),{type:`primary`,loading:s.value,onClick:c},{default:K(()=>[...r[6]||=[V(`创建`,-1)]]),_:1},8,[`loading`])])]),default:K(()=>[q(k(g),{"label-placement":`top`,"show-feedback":!1},{default:K(()=>[q(k(_),{label:`名称`},{default:K(()=>[q(k(t),{value:o.name,"onUpdate:value":r[0]||=e=>o.name=e,placeholder:`我的技能`},null,8,[`value`])]),_:1}),q(k(_),{label:`描述`},{default:K(()=>[q(k(t),{value:o.description,"onUpdate:value":r[1]||=e=>o.description=e,placeholder:`这个技能做什么`},null,8,[`value`])]),_:1}),q(k(_),{label:`代码（用 @tool 装饰函数，可定义 META 元信息）`},{default:K(()=>[q(k(t),{value:o.code,"onUpdate:value":r[2]||=e=>o.code=e,type:`textarea`,autosize:{minRows:10,maxRows:20},placeholder:`用 @tool 装饰定义一个工具函数`},null,8,[`value`])]),_:1})]),_:1})]),_:1})]),_:1},8,[`show`]))}}),Gt={class:`page`},Kt={class:`page-head`},qt={class:`page-title`},Jt={class:`page-body page-body-flush experts-body`},Yt={class:`tab-label`},Xt={class:`tab-label`},Zt={key:0,class:`grid-cards`},Qt={key:2,class:`grid-cards`},$t={class:`card-head`},en={class:`card-name`},tn={class:`card-desc card-desc-flat`},nn=Z({__name:`Experts`,setup(e){let t=Oe(),n=M(`skills`),d=M(!1),f=[{name:`工作目录`,desc:`读写当前会话隔离目录下的文件`,ready:!0},{name:`Shell 执行`,desc:`在沙箱内执行命令并返回输出`,ready:!0},{name:`Web 检索`,desc:`联网搜索与抓取页面内容`,ready:!0},{name:`计算器`,desc:`安全的数学表达式求值`,ready:!0},{name:`腾讯文档`,desc:`读取与写入腾讯文档（需授权）`,ready:!1},{name:`GitHub`,desc:`仓库、Issue 与 PR 操作（需授权）`,ready:!1}];async function p(e){let n=await c(e);n.ok?(d.value=!1,t.success(`技能创建成功`)):t.error(`创建失败: `+(n.error||`未知错误`))}let m=Ee(),h=M(!0);return _e(async()=>{await l(),h.value=!1,m.query.new===`1`&&(d.value=!0)}),(e,t)=>(Q(),X(`div`,Gt,[W(`div`,Kt,[W(`div`,qt,[q(k(y),{size:20}),t[3]||=W(`h1`,null,`专家 · 技能 · 连接器`,-1)])]),W(`div`,Jt,[q(k(bt),{value:n.value,"onUpdate:value":t[0]||=e=>n.value=e,type:`line`,size:`medium`,class:`experts-tabs`},{default:K(()=>[q(k(ft),{name:`skills`},{tab:K(()=>[W(`span`,Yt,[q(k(y),{size:15}),t[4]||=V(` 技能`,-1)])]),_:1}),q(k(ft),{name:`connectors`},{tab:K(()=>[W(`span`,Xt,[q(k(Tt),{size:15}),t[5]||=V(` 连接器`,-1)])]),_:1})]),_:1},8,[`value`]),n.value===`skills`&&h.value?(Q(),X(`div`,Zt,[(Q(),X(U,null,E(4,e=>q(k(de),{key:`sk`+e,size:`small`},{default:K(()=>[q(k(x),{text:``,width:`42%`,class:`sk-title`}),q(k(x),{text:``,repeat:2})]),_:1})),64))])):n.value===`skills`?(Q(),B(Ht,{key:1,skills:k(o).skills,onToggle:k(u),onRemove:k(s),onReload:k(a),onAdd:t[1]||=e=>d.value=!0},null,8,[`skills`,`onToggle`,`onRemove`,`onReload`])):(Q(),X(`div`,Qt,[(Q(),X(U,null,E(f,e=>q(k(de),{key:e.name,size:`small`},{default:K(()=>[W(`div`,$t,[W(`div`,en,[q(k(Ie),{size:15}),W(`b`,null,F(e.name),1)]),q(k(i),{size:`small`,bordered:!1,type:e.ready?`success`:`default`},{icon:K(()=>[(Q(),B(re(e.ready?k(Le):k(He)),{size:12}))]),default:K(()=>[V(` `+F(e.ready?`已就绪`:`未接入`),1)]),_:2},1032,[`type`])]),W(`p`,tn,F(e.desc),1)]),_:2},1024)),64)),f.length?De(``,!0):(Q(),B(k(r),{key:0,class:`page-empty`,description:`暂无连接器`}))]))]),q(Wt,{open:d.value,onClose:t[2]||=e=>d.value=!1,onSubmit:p},null,8,[`open`])]))}});export{nn as default};