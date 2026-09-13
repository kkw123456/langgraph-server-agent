import{i as e,n as t,t as n}from"./createLucideIcon-CRS-aC7q.js";import{S as r,b as i,c as a,g as o,l as s,n as c,o as l,v as u}from"./store-CVKy6SWQ.js";import{a as d,i as f,n as p,r as m,t as h}from"./plus-C4Vg5Qzv.js";import{n as g,t as _}from"./FormItem-DNqOUK-i.js";import{n as v,t as y}from"./puzzle-DeQAPc36.js";import{t as b}from"./Icon-B69jV09v.js";import{t as x}from"./Skeleton-BzR6bXf2.js";import{t as S}from"./Switch-Bouzb_df.js";import{$ as C,A as w,Ar as T,Bt as ee,Cn as E,Cr as te,Dr as D,Dt as ne,E as O,Fr as k,Gt as re,Hn as A,Ir as j,Lr as ie,Lt as ae,Mr as oe,Or as M,Ot as se,Pr as N,Pt as ce,Rn as P,Rr as F,Rt as I,Sr as L,T as le,Un as ue,Ut as de,Vn as R,Vt as z,Wn as B,Yn as fe,Yt as pe,Zn as me,ar as V,cr as H,dr as U,dt as he,er as W,gn as ge,gr as _e,hr as G,ht as ve,ir as K,jr as q,kr as ye,kt as be,lr as J,m as xe,mr as Se,mt as Ce,o as we,or as Y,p as Te,pr as Ee,q as De,qt as Oe,rr as ke,sr as X,st as Ae,u as je,ur as Z,wr as Me,x as Ne,xr as Pe,yn as Fe,zn as Q,zr as $}from"./index-C_M67W1L.js";import{t as Ie}from"./bot-BFhRYuNv.js";import{n as Le,t as Re}from"./refresh-cw-DKEiIao0.js";import{t as ze}from"./package-CeYdpz-Y.js";import{t as Be}from"./search-C1Akf67W.js";import{t as Ve}from"./trash-2-ChS4DHlS.js";import{t as He}from"./x-BTSqFAKI.js";var Ue=/\s/;function We(e){for(var t=e.length;t--&&Ue.test(e.charAt(t)););return t}var Ge=/^\s+/;function Ke(e){return e&&e.slice(0,We(e)+1).replace(Ge,``)}var qe=NaN,Je=/^[-+]0x[0-9a-f]+$/i,Ye=/^0b[01]+$/i,Xe=/^0o[0-7]+$/i,Ze=parseInt;function Qe(e){if(typeof e==`number`)return e;if(Fe(e))return qe;if(ge(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=ge(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=Ke(e);var n=Ye.test(e);return n||Xe.test(e)?Ze(e.slice(2),n?2:8):Je.test(e)?qe:+e}var $e=function(){return E.Date.now()},et=`Expected a function`,tt=Math.max,nt=Math.min;function rt(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(et);t=Qe(t)||0,ge(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?tt(Qe(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?nt(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=$e();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v($e())}function x(){var e=$e(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var it=`Expected a function`;function at(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(it);return ge(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),rt(e,t,{leading:r,maxWait:t,trailing:i})}var ot=p(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[p(`&::-webkit-scrollbar`,{width:0,height:0})]),st=U({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=N(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=de();return ot.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:m,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return Ee(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),ct=U({name:`ChevronLeft`,render(){return(()=>{let e=ae(`dfe229c2639b2082`);return e[0]||=V(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[V(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`})],-1)})()}}),lt=U({name:`Add`,render(){return(()=>{let e=ae(`b30130fbba5c5b23`);return e[0]||=V(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[V(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)})()}}),ut=Oe(`n-tabs`),dt={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ft=U({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:dt,slots:Object,setup(e){let t=Se(ut,null);return t||pe(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return L(),H(`div`,{class:I([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:F(this.style)},[z(()=>this.$slots.default?.())],6)}}),pt=[`data-name`,`data-disabled`],mt={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...Ne(dt,[`displayDirective`])},ht=U({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:mt,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=Se(ut);return{trigger:d,mergedClosable:K(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:o,mergedClosable:s,trigger:c,$slots:{default:l}}=this,u=i??a;return L(),H(`div`,{class:I(`${t}-tabs-tab-wrapper`)},[this.internalLeftPadded?(L(),H(`div`,{key:0,class:I(`${t}-tabs-tab-pad`)},null,2)):z(()=>null),(L(),H(`div`,G({key:n,"data-name":n,"data-disabled":r?!0:void 0},G({class:[`${t}-tabs-tab`,o===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:c===`click`?this.activateTab:void 0,onMouseenter:c===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[V(`span`,{class:I(`${t}-tabs-tab__label`)},[e?(L(),H(W,{key:0},[V(`div`,{class:I(`${t}-tabs-tab__height-placeholder`)},`\xA0`,2),(L(),Y(ne,{clsPrefix:t},{default:()=>(L(),Y(lt))},1032,[`clsPrefix`]))],64)):(L(),H(W,{key:1},[l?(L(),H(W,{key:0},[z(()=>l())],64)):(L(),H(W,{key:1},[typeof u==`object`?(L(),H(W,{key:0},[z(()=>u)],64)):(L(),H(W,{key:1},[z(()=>w(u??n))],64))],64))],64))],2),s&&this.type===`card`?(L(),Y(De,{key:0,clsPrefix:t,class:I(`${t}-tabs-tab__close`),onClick:this.handleClose,disabled:r},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):z(()=>null)],16,pt))],2)}}),gt=Q(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[P(`&.transition-disabled`,[Q(`tabs-tab`,`
 transition: none !important;
 `),Q(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),Q(`tabs-tab-pad`,`
 transition: none !important;
 `)]),A(`segment-type`,[Q(`tabs-rail`,[P(`&.transition-disabled`,[Q(`tabs-capsule`,`
 transition: none;
 `)])])]),A(`top`,[Q(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),A(`left`,[Q(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),A(`left, right`,`
 flex-direction: row;
 `,[Q(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),Q(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),A(`right`,`
 flex-direction: row-reverse;
 `,[Q(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),Q(`tabs-bar`,`
 left: 0;
 `)]),A(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[Q(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),Q(`tabs-bar`,`
 top: 0;
 `)]),Q(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[Q(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),Q(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Q(`tabs-tab`,`
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
 `)])])]),A(`flex`,[Q(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[Q(`tabs-wrapper`,`
 width: 100%;
 `,[Q(`tabs-tab`,`
 margin-right: 0;
 `)])])]),Q(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[R(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),R(`prefix`,`padding-right: 16px;`),R(`suffix`,`padding-left: 16px;`)]),A(`top, bottom`,[P(`>`,[Q(`tabs-nav`,[Q(`tabs-nav-scroll-wrapper`,[P(`&::before`,`
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
 `)])])])])]),A(`left, right`,[Q(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),P(`>`,[Q(`tabs-nav`,[Q(`tabs-nav-scroll-wrapper`,[P(`&::before`,`
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
 `)])])])])]),Q(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[Q(`tabs-nav-y-scroll`,`
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
 `)])]),Q(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),Q(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),Q(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),Q(`tabs-tab`,`
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
 `,[A(`disabled`,{cursor:`not-allowed`}),R(`close`,`
 margin-inline-start: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),R(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),Q(`tabs-bar`,`
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
 `)]),Q(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),Q(`tab-pane`,`
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
 `)]),Q(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),A(`line-type, bar-type`,[Q(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[P(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),A(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),A(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),Q(`tabs-nav`,[R(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),Q(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),A(`line-type`,[A(`top`,[R(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-bar`,`
 bottom: -1px;
 `)]),A(`left`,[R(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-bar`,`
 right: -1px;
 `)]),A(`right`,[R(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-bar`,`
 left: -1px;
 `)]),A(`bottom`,[R(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-bar`,`
 top: -1px;
 `)]),R(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),Q(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),Q(`tabs-bar`,`
 border-radius: 0;
 `)]),A(`card-type`,[R(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),Q(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),Q(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),Q(`tabs-tab`,`
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
 `,[R(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ue(`disabled`,[P(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),A(`closable`,`padding-inline-end: 8px;`),A(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),A(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),A(`left, right`,`
 flex-direction: column; 
 `,[R(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),Q(`tabs-wrapper`,`
 flex-direction: column;
 `),Q(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[Q(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),A(`top`,[A(`card-type`,[Q(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),R(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[A(`active`,`
 border-bottom: 1px solid #0000;
 `)]),Q(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),A(`left`,[A(`card-type`,[Q(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),R(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[A(`active`,`
 border-right: 1px solid #0000;
 `)]),Q(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),A(`right`,[A(`card-type`,[Q(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),R(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[A(`active`,`
 border-left: 1px solid #0000;
 `)]),Q(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),A(`bottom`,[A(`card-type`,[Q(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),R(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[A(`active`,`
 border-top: 1px solid #0000;
 `)]),Q(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Q(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),Q(`tabs-scroll-button`,[A(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),A(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),A(`up`,`
 padding-bottom: 10px;
 `),A(`down`,`
 padding-top: 10px;
 `)])]),_t=U({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:e,disabled:t,type:n,vertical:r,rtl:i,theme:a,themeOverrides:o,handleClick:s}=this,c=n===`next`,l=r?c:i?!c:c;return L(),Y(O,{text:!0,disabled:t,size:`small`,theme:a,themeOverrides:o,onClick:s,class:I([`${e}-tabs-scroll-button`,!r&&n===`prev`&&`${e}-tabs-scroll-button--start`,!r&&n===`next`&&`${e}-tabs-scroll-button--end`,r&&n===`prev`&&`${e}-tabs-scroll-button--up`,r&&n===`next`&&`${e}-tabs-scroll-button--down`])},{icon:()=>(L(),Y(ne,{clsPrefix:e,style:F(r?{transform:`rotate(90deg)`}:void 0)},{default:()=>l?(L(),Y(v,{key:1})):(L(),Y(ct,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),vt=at,yt={...se.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},bt=U({name:`Tabs`,props:yt,slots:Object,setup(t,{slots:n}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a,mergedRtlRef:o}=re(t),s=Ae(`Tabs`,o,r),c=K(()=>{let{placement:e}=t;return e===`start`?s?.value?`right`:`left`:e===`end`?s?.value?`left`:`right`:e}),l=se(`Tabs`,`-tabs`,gt,je,t,r),u=N(null),p=N(null),m=N(null),h=N(null),g=N(null),_=N(null),v=N(null),y=N(!0),b=N(!0),x=f(t,[`labelSize`,`size`]),S=K(()=>x.value?x.value:a?.value?.Tabs?.size||`medium`),C=f(t,[`activeName`,`value`]),w=N(C.value??t.defaultValue??(n.default?Ce(n.default())[0]?.props?.name:null)),T=e(C,w),ee={id:0},E=K(()=>{if(t.justifyContent&&t.type!==`card`)return{display:`flex`,justifyContent:t.justifyContent}});M(T,()=>{ee.id=0,j(),_e(()=>{ae()})});function D(){let{value:e}=T;return e===null?null:u.value?.querySelector(`[data-name="${e}"]`)}function ne(e){if(t.type===`card`)return;let{value:n}=m;if(!n)return;let i=n.style.opacity===`0`;if(e){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o}=t,s=c.value;if(e.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(A([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(A([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function O(){if(t.type===`card`)return;let{value:e}=m;e&&(e.style.opacity=`0`)}function A(e){let{value:t}=m;if(t)for(let n of e)t.style[n]=``}function j(){if(t.type===`card`)return;let e=D();e?ne(e):O()}function ie(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function ae(){let e=[`top`,`bottom`].includes(c.value),n=D();if(n){if(e){let r=_.value?.$el;if(!r)return;ie(r,n,e,t.centerActiveTab)}else{let{value:r}=v;if(!r)return;ie(r,n,e,t.centerActiveTab)}}}let oe=N(null),P=0,F=null;function I(e){let t=oe.value;if(t){P=e.getBoundingClientRect().height;let n=`${P}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};F?(r(),F(),F=null):F=r}}function L(e){let t=oe.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(P,n)}px`};F?(F(),F=null,r()):F=r}}function le(){let e=oe.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let ue={value:[]},de=N(`next`);function R(e){let t=T.value,n=`next`;for(let r of ue.value){if(r===t)break;if(r===e){n=`prev`;break}}de.value=n,z(e)}function z(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&ve(n,e),r&&ve(r,e),i&&ve(i,e),w.value=e}function fe(e){let{onClose:n}=t;n&&ve(n,e)}function pe(e){if([`top`,`bottom`].includes(c.value)){let{value:t}=_;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!s?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=v;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let me=!0;function V(){let{value:e}=m;if(!e)return;me&&=!1;let t=`transition-disabled`;e.classList.add(t),j(),e.classList.remove(t)}let H=N(null);function U({transitionDisabled:e}){let t=u.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=D();n&&H.value&&(H.value.style.width=`${n.offsetWidth}px`,H.value.style.height=`${n.offsetHeight}px`,H.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&H.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}M([T],()=>{t.type===`segment`&&_e(()=>{U({transitionDisabled:!1})})}),Pe(()=>{t.type===`segment`&&U({transitionDisabled:!0})});let he=0;function W(e){if(e.contentRect.width===0&&e.contentRect.height===0||he===e.contentRect.width)return;he=e.contentRect.width;let{type:n}=t;(n===`line`||n===`bar`)&&(me||t.justifyContent?.startsWith(`space`))&&V(),n!==`segment`&&Te(Y())}let ge=vt(W,64);function G(){let{type:e}=t;e===`line`||e===`bar`?V():e===`segment`&&U({transitionDisabled:!0})}M([()=>t.justifyContent,()=>t.size],()=>{_e(()=>{(t.type===`line`||t.type===`bar`)&&V()})}),M([c,()=>s?.value],()=>{_e(()=>{G(),Te(Y(),{instantly:!0})})}),M(()=>t.type,()=>{_e(()=>{let e=p.value;e&&(e.classList.add(`transition-disabled`),G(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let q=N(!1);function J(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=c.value;if(!q.value)o===`top`||o===`bottom`?i<n&&(q.value=!0):a<r&&(q.value=!0);else{let{value:e}=g;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(q.value=!1):a-r>e.$el.offsetHeight&&(q.value=!1)}Te(_.value?.$el||null)}let xe=vt(J,64);function Se(){let{onAdd:e}=t;e&&e()}let we=N(!1);function Y(){let e=c.value;return(e===`top`||e===`bottom`?_.value?.$el:v.value)||null}function Te(e,t={instantly:!1}){if(!e)return;let n=t.instantly?h.value:null;n&&n.classList.add(`transition-disabled`);let r=c.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);y.value=i<=1,b.value=i+r>=n-1,we.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;y.value=t<=1,b.value=t+r>=n-1,we.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let Ee=vt(e=>{Te(e.target)},64);te(ut,{triggerRef:k(t,`trigger`),tabStyleRef:k(t,`tabStyle`),tabClassRef:k(t,`tabClass`),addTabStyleRef:k(t,`addTabStyle`),addTabClassRef:k(t,`addTabClass`),paneClassRef:k(t,`paneClass`),paneStyleRef:k(t,`paneStyle`),mergedClsPrefixRef:r,typeRef:k(t,`type`),closableRef:k(t,`closable`),valueRef:T,tabChangeIdRef:ee,onBeforeLeaveRef:k(t,`onBeforeLeave`),activateTab:R,handleClose:fe,handleAdd:Se}),d(()=>{j(),ae()}),ye(()=>{let{value:e}=h;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;y.value?e.classList.remove(n):e.classList.add(n),b.value?e.classList.remove(i):e.classList.add(i)});let De={syncBarPosition:()=>{j()},scrollToCurrentTab:()=>{ae()}},Oe=()=>{U({transitionDisabled:!0})},ke=K(()=>{let{value:e}=S,{type:n}=t,r=`${e}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:C,[B(`panePadding`,e)]:w,[B(`tabPadding`,r)]:T,[B(`tabPaddingVertical`,r)]:ee,[B(`tabGap`,r)]:E,[B(`tabGap`,`${r}Vertical`)]:te,[B(`tabTextColor`,n)]:D,[B(`tabTextColorActive`,n)]:ne,[B(`tabTextColorHover`,n)]:O,[B(`tabTextColorDisabled`,n)]:k,[B(`tabFontSize`,e)]:re},common:{cubicBezierEaseInOut:A}}=l.value;return{"--n-bezier":A,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":re,"--n-tab-text-color":D,"--n-tab-text-color-active":ne,"--n-tab-text-color-disabled":k,"--n-tab-text-color-hover":O,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":C,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":ee,"--n-tab-gap":E,"--n-tab-gap-vertical":te,"--n-pane-padding-left":ce(w,`left`),"--n-pane-padding-right":ce(w,`right`),"--n-pane-padding-top":ce(w,`top`),"--n-pane-padding-bottom":ce(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),X=i?be(`tabs`,K(()=>`${S.value[0]}${t.type[0]}`),ke,t):void 0;return{mergedClsPrefix:r,mergedValue:T,renderedNames:new Set,segmentCapsuleElRef:H,tabsPaneWrapperRef:oe,tabsElRef:u,selfElRef:p,barElRef:m,addTabInstRef:g,xScrollInstRef:_,scrollWrapperElRef:h,addTabFixed:q,tabWrapperStyle:E,handleNavResize:ge,mergedSize:S,handleScroll:Ee,handleTabsResize:xe,cssVars:i?void 0:ke,themeClass:X?.themeClass,animationDirection:de,renderNameListRef:ue,yScrollElRef:v,handleSegmentResize:Oe,onAnimationBeforeLeave:I,onAnimationEnter:L,onAnimationAfterEnter:le,onRender:X?.onRender,startReachedRef:y,endReachedRef:b,isOverflow:we,handleButtonClick:pe,mergedTheme:l,rtlEnabled:s,mergedPlacement:c,...De}},render(){let{mergedClsPrefix:e,type:t,mergedPlacement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,startReachedRef:u,endReachedRef:d,isOverflow:f,showScrollButton:p,handleButtonClick:m,mergedTheme:h,rtlEnabled:g,$slots:{default:_,prefix:v,suffix:y}}=this;s?.();let b=_?Ce(_()).filter(e=>e.type.__TAB_PANE__===!0):[],x=_?Ce(_()).filter(e=>e.type.__TAB__===!0):[],S=!x.length,w=t===`card`,T=t===`segment`,E=!w&&!T&&this.justifyContent;o.value=[];let te=()=>{let t=(L(),H(`div`,{style:F(this.tabWrapperStyle),class:I(`${e}-tabs-wrapper`)},[E?z(()=>null):(L(),H(`div`,{key:1,class:I(`${e}-tabs-scroll-padding`),style:F(n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),S?(L(),H(W,{key:2},[z(()=>b.map((e,t)=>(o.value.push(e.props.name),wt((L(),Y(ht,G(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!E||E===`center`||E===`start`||E===`end`)}),ee(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(L(),H(W,{key:3},[z(()=>x.map((e,t)=>(o.value.push(e.props.name),wt(t!==0&&!E?Ct(e):e))))],64)),!r&&i&&w?(L(),H(W,{key:4},[z(()=>St(i,(S?b.length:x.length)!==0))],64)):z(()=>null),E?z(()=>null):(L(),H(`div`,{key:7,class:I(`${e}-tabs-scroll-padding`),style:F({width:`${this.tabsPadding}px`})},null,6)),w?z(()=>null):(L(),H(`div`,{key:9,ref:`barElRef`,class:I(`${e}-tabs-bar`)},null,2))],6));return L(),H(`div`,{ref:`tabsElRef`,class:I(`${e}-tabs-nav-scroll-content`)},[w&&i?(L(),Y(C,{key:0,onResize:this.handleTabsResize},{default:()=>t},1032,[`onResize`])):(L(),H(W,{key:1},[z(()=>t)],64)),w?(L(),H(`div`,{key:2,class:I(`${e}-tabs-pad`)},null,2)):z(()=>null)],2)},D=T?`top`:n;return L(),H(`div`,{ref:`selfElRef`,class:I([`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,E&&`${e}-tabs--flex`,`${e}-tabs--${D}`,g&&`${e}-tabs--rtl`]),style:F(this.cssVars)},[V(`div`,{class:I([`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${D}`,`${e}-tabs-nav`])},[z(()=>he(v,t=>t&&(L(),H(`div`,{class:I(`${e}-tabs-nav__prefix`)},[z(()=>t)],2)))),T?(L(),Y(C,{key:0,onResize:this.handleSegmentResize},{default:()=>(L(),H(`div`,{class:I(`${e}-tabs-rail`),ref:`tabsElRef`},[V(`div`,{class:I(`${e}-tabs-capsule`),ref:`segmentCapsuleElRef`},[V(`div`,{class:I(`${e}-tabs-wrapper`)},[V(`div`,{class:I(`${e}-tabs-tab`)},null,2)],2)],2),S?(L(),H(W,{key:0},[z(()=>b.map((e,t)=>(o.value.push(e.props.name),L(),Y(ht,G(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),ee(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(L(),H(W,{key:1},[z(()=>x.map((e,t)=>(o.value.push(e.props.name),t===0?e:Ct(e))))],64))],2))},1032,[`onResize`])):(L(),H(W,{key:1},[z(()=>p&&f&&(L(),Y(_t,{mergedClsPrefix:e,type:`prev`,vertical:D===`left`||D===`right`,disabled:u,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(L(),Y(C,{onResize:this.handleNavResize},{default:()=>(L(),H(`div`,{class:I(`${e}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(D)?(L(),Y(st,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:te},1032,[`onScroll`])):(L(),H(`div`,{key:1,class:I(`${e}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[z(()=>te())],42,[`onScroll`]))],2))},1032,[`onResize`])),z(()=>p&&f&&(L(),Y(_t,{mergedClsPrefix:e,type:`next`,vertical:D===`left`||D===`right`,disabled:d,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),r&&i&&w?(L(),H(W,{key:2},[z(()=>St(i,!0))],64)):z(()=>null),z(()=>he(y,t=>t&&(L(),H(`div`,{class:I(`${e}-tabs-nav__suffix`)},[z(()=>t)],2))))],2),z(()=>S&&(this.animated&&(D===`top`||D===`bottom`)?(L(),H(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:F(l),class:I([`${e}-tabs-pane-wrapper`,c])},[z(()=>xt(b,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):xt(b,this.mergedValue,this.renderedNames)))],6)}});function xt(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?q(e,[[me,c]]):e)}}),o?(L(),Y(fe,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):s}function St(e,t){return L(),Y(ht,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled},null,8,[`internalLeftPadded`,`disabled`])}function Ct(e){let t=ke(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function wt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var Tt=n(`plug`,[[`path`,{d:`M12 22v-5`,key:`1ega77`}],[`path`,{d:`M15 8V2`,key:`18g5xt`}],[`path`,{d:`M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z`,key:`1xoxul`}],[`path`,{d:`M9 8V2`,key:`14iosj`}]]),Et={class:`skill-manager`},Dt={class:`sm-head`},Ot={class:`sm-title`},kt={class:`muted sm-count`},At={class:`sm-actions`},jt={class:`sm-cats`},Mt={class:`sm-body`},Nt={class:`group-title`},Pt={class:`muted`},Ft={class:`sm-grid`},It={class:`card-head`},Lt={class:`card-name`},Rt={class:`card-desc`},zt={class:`card-tools`},Bt={key:0,class:`muted tiny`},Vt={class:`card-foot`},Ht=U({__name:`SkillManager`,props:{skills:{}},emits:[`toggle`,`remove`,`reload`,`add`],setup(e){let n=e,a=[`系统`,`文件`,`代码`,`网络`,`数学`,`通用`,`其他`],o=N(``),s=N(`全部`),c=K(()=>{let e=o.value.trim().toLowerCase(),t=t=>!e||t.name.toLowerCase().includes(e)||(t.description||``).toLowerCase().includes(e)||(t.tools||[]).some(t=>t.toLowerCase().includes(e)),r=new Map;for(let e of n.skills){if(!t(e))continue;let n=e.category||`其他`;r.has(n)||r.set(n,[]),r.get(n).push(e)}let i=Array.from(r.entries()).map(([e,t])=>({category:e,list:t}));return i.sort((e,t)=>{let n=a.indexOf(e.category),r=a.indexOf(t.category);return(n===-1?99:n)-(r===-1?99:r)}),i}),l=K(()=>[`全部`,...c.value.map(e=>e.category)]),u=K(()=>s.value===`全部`?c.value:c.value.filter(e=>e.category===s.value)),d=K(()=>n.skills.filter(e=>e.enabled).length);return(n,a)=>(L(),H(`div`,Et,[V(`div`,Dt,[V(`div`,Ot,[Z(j(y),{size:20}),a[3]||=V(`h2`,null,`技能管理`,-1),V(`span`,kt,$(d.value)+` / `+$(e.skills.length)+` 已启用`,1)]),V(`div`,At,[Z(j(t),{value:o.value,"onUpdate:value":a[0]||=e=>o.value=e,class:`sm-search`,placeholder:`搜索技能 / 工具…`,clearable:``},{prefix:T(()=>[Z(j(b),{component:j(Be)},null,8,[`component`])]),_:1},8,[`value`]),Z(j(O),{onClick:a[1]||=e=>n.$emit(`reload`)},{icon:T(()=>[Z(j(Re),{size:15})]),default:T(()=>[a[4]||=J(` 重载 `,-1)]),_:1}),Z(j(O),{type:`primary`,onClick:a[2]||=e=>n.$emit(`add`)},{icon:T(()=>[Z(j(h),{size:15})]),default:T(()=>[a[5]||=J(` 新建技能 `,-1)]),_:1})])]),V(`div`,jt,[(L(!0),H(W,null,Me(l.value,e=>(L(),Y(j(i),{key:e,class:`cat-chip`,type:s.value===e?`primary`:`default`,bordered:!1,checkable:``,checked:s.value===e,"onUpdate:checked":t=>s.value=e},{default:T(()=>[J($(e),1)]),_:2},1032,[`type`,`checked`,`onUpdate:checked`]))),128))]),V(`div`,Mt,[u.value.length?X(``,!0):(L(),Y(j(r),{key:0,class:`sm-empty`,description:`没有匹配的技能`})),(L(!0),H(W,null,Me(u.value,e=>(L(),H(`section`,{key:e.category,class:`sm-group`},[V(`h4`,Nt,[J($(e.category)+` `,1),V(`span`,Pt,`· `+$(e.list.length),1)]),V(`div`,Ft,[(L(!0),H(W,null,Me(e.list,e=>(L(),Y(j(le),{key:e.id,class:ie([`skill-card`,{off:!e.enabled}]),size:`small`},{default:T(()=>[V(`div`,It,[V(`div`,Lt,[Z(j(ze),{size:15}),V(`b`,null,$(e.name),1),Z(j(i),{size:`small`,bordered:!1,type:e.builtin?`default`:`info`},{default:T(()=>[J($(e.builtin?`内置`:`自定义`),1)]),_:2},1032,[`type`])]),Z(j(S),{value:e.enabled,size:`small`,"onUpdate:value":t=>n.$emit(`toggle`,e)},null,8,[`value`,`onUpdate:value`])]),V(`p`,Rt,$(e.description||`（无描述）`),1),V(`div`,zt,[(L(!0),H(W,null,Me(e.tools||[],e=>(L(),Y(j(i),{key:e,size:`small`,bordered:!1,class:`tool-chip`},{default:T(()=>[J($(e),1)]),_:2},1024))),128)),!e.tools||!e.tools.length?(L(),H(`span`,Bt,`无工具`)):X(``,!0)]),V(`div`,Vt,[V(`span`,{class:ie([`state`,e.enabled?`on`:`off`])},$(e.enabled?`已启用`:`已禁用`),3),e.builtin?X(``,!0):(L(),Y(j(O),{key:0,quaternary:``,circle:``,size:`tiny`,title:`删除技能`,type:`error`,onClick:t=>n.$emit(`remove`,e.id)},{icon:T(()=>[Z(j(Ve),{size:14})]),_:1},8,[`onClick`]))])]),_:2},1032,[`class`]))),128))])]))),128))])]))}}),Ut={class:`modal-actions`},Wt=U({__name:`SkillModal`,props:{open:{type:Boolean}},emits:[`close`,`submit`],setup(e,{emit:n}){let r=e,i=n,a=Te(),o=oe({name:``,description:``,code:``}),s=N(!1);M(()=>r.open,e=>{e&&(o.name=``,o.description=``,o.code=``,s.value=!1)});function c(){if(!o.code.trim()){a.warning(`代码不能为空`);return}s.value=!0,i(`submit`,{...o})}return(n,r)=>(L(),Y(j(xe),{show:e.open,"onUpdate:show":r[4]||=e=>i(`close`)},{default:T(()=>[Z(j(le),{class:`modal-card modal-w-md`,title:`新建自定义技能`,bordered:!1,size:`medium`},{footer:T(()=>[V(`div`,Ut,[Z(j(O),{onClick:r[3]||=e=>i(`close`)},{default:T(()=>[...r[5]||=[J(`取消`,-1)]]),_:1}),Z(j(O),{type:`primary`,loading:s.value,onClick:c},{default:T(()=>[...r[6]||=[J(`创建`,-1)]]),_:1},8,[`loading`])])]),default:T(()=>[Z(j(g),{"label-placement":`top`,"show-feedback":!1},{default:T(()=>[Z(j(_),{label:`名称`},{default:T(()=>[Z(j(t),{value:o.name,"onUpdate:value":r[0]||=e=>o.name=e,placeholder:`我的技能`},null,8,[`value`])]),_:1}),Z(j(_),{label:`描述`},{default:T(()=>[Z(j(t),{value:o.description,"onUpdate:value":r[1]||=e=>o.description=e,placeholder:`这个技能做什么`},null,8,[`value`])]),_:1}),Z(j(_),{label:`代码（用 @tool 装饰函数，可定义 META 元信息）`},{default:T(()=>[Z(j(t),{value:o.code,"onUpdate:value":r[2]||=e=>o.code=e,type:`textarea`,autosize:{minRows:10,maxRows:20},placeholder:`用 @tool 装饰定义一个工具函数`},null,8,[`value`])]),_:1})]),_:1})]),_:1})]),_:1},8,[`show`]))}}),Gt={class:`page`},Kt={class:`page-head`},qt={class:`page-title`},Jt={class:`page-body page-body-flush experts-body`},Yt={class:`tab-label`},Xt={class:`tab-label`},Zt={key:0,class:`grid-cards`},Qt={key:2,class:`grid-cards`},$t={class:`card-head`},en={class:`card-name`},tn={class:`card-desc card-desc-flat`},nn=U({__name:`Experts`,setup(e){let t=Te(),n=N(`skills`),d=N(!1),f=[{name:`工作目录`,desc:`读写当前会话隔离目录下的文件`,ready:!0},{name:`Shell 执行`,desc:`在沙箱内执行命令并返回输出`,ready:!0},{name:`Web 检索`,desc:`联网搜索与抓取页面内容`,ready:!0},{name:`计算器`,desc:`安全的数学表达式求值`,ready:!0},{name:`腾讯文档`,desc:`读取与写入腾讯文档（需授权）`,ready:!1},{name:`GitHub`,desc:`仓库、Issue 与 PR 操作（需授权）`,ready:!1}];async function p(e){let n=await c(e);n.ok?(d.value=!1,t.success(`技能创建成功`)):t.error(`创建失败: `+(n.error||`未知错误`))}let m=we(),h=N(!0);return Pe(async()=>{await l(),h.value=!1,m.query.new===`1`&&(d.value=!0)}),(e,t)=>(L(),H(`div`,Gt,[V(`div`,Kt,[V(`div`,qt,[Z(j(y),{size:20}),t[3]||=V(`h1`,null,`专家 · 技能 · 连接器`,-1)])]),V(`div`,Jt,[Z(j(bt),{value:n.value,"onUpdate:value":t[0]||=e=>n.value=e,type:`line`,size:`medium`,class:`experts-tabs`},{default:T(()=>[Z(j(ft),{name:`skills`},{tab:T(()=>[V(`span`,Yt,[Z(j(y),{size:15}),t[4]||=J(` 技能`,-1)])]),_:1}),Z(j(ft),{name:`connectors`},{tab:T(()=>[V(`span`,Xt,[Z(j(Tt),{size:15}),t[5]||=J(` 连接器`,-1)])]),_:1})]),_:1},8,[`value`]),n.value===`skills`&&h.value?(L(),H(`div`,Zt,[(L(),H(W,null,Me(4,e=>Z(j(le),{key:`sk`+e,size:`small`},{default:T(()=>[Z(j(x),{text:``,width:`42%`,class:`sk-title`}),Z(j(x),{text:``,repeat:2})]),_:1})),64))])):n.value===`skills`?(L(),Y(Ht,{key:1,skills:j(o).skills,onToggle:j(u),onRemove:j(s),onReload:j(a),onAdd:t[1]||=e=>d.value=!0},null,8,[`skills`,`onToggle`,`onRemove`,`onReload`])):(L(),H(`div`,Qt,[(L(),H(W,null,Me(f,e=>Z(j(le),{key:e.name,size:`small`},{default:T(()=>[V(`div`,$t,[V(`div`,en,[Z(j(Ie),{size:15}),V(`b`,null,$(e.name),1)]),Z(j(i),{size:`small`,bordered:!1,type:e.ready?`success`:`default`},{icon:T(()=>[(L(),Y(D(e.ready?j(Le):j(He)),{size:12}))]),default:T(()=>[J(` `+$(e.ready?`已就绪`:`未接入`),1)]),_:2},1032,[`type`])]),V(`p`,tn,$(e.desc),1)]),_:2},1024)),64)),f.length?X(``,!0):(L(),Y(j(r),{key:0,class:`page-empty`,description:`暂无连接器`}))]))]),Z(Wt,{open:d.value,onClose:t[2]||=e=>d.value=!1,onSubmit:p},null,8,[`open`])]))}});export{nn as default};