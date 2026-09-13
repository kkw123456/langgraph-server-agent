import{i as e,t}from"./createLucideIcon-DgHbSls0.js";import{k as n}from"./isArrayLikeObject-DDw98r_w.js";import{n as r,t as i}from"./now-DEvl0O6C.js";import{r as a,t as o}from"./Tag-Be452eZG.js";import{i as s,n as c,r as l,t as u}from"./cssr-Bp7EOVZ3.js";import{t as d}from"./Input-cxlQaQFq.js";import{i as f,n as p,r as m,t as h}from"./SkillModal-7lePb7T4.js";import{n as g,t as _}from"./bot-DlePdjqR.js";import{t as v}from"./Switch-CcPpVDIy.js";import{An as y,At as b,Bt as x,Cr as S,D as C,Dn as w,E as T,En as E,Er as D,Gn as O,Gt as k,Ht as ee,It as te,J as ne,Jn as A,Kn as j,Ln as re,Mn as M,Mt as ie,Qn as N,Rn as ae,Sr as P,Tr as F,Ut as I,Vn as L,Wn as oe,Xn as R,Yn as z,Yt as se,Zn as B,Zt as ce,_r as V,_t as le,cr as ue,ct as de,dr as H,er as fe,et as U,f as W,ft as G,gr as pe,gt as me,hr as K,j as he,jn as ge,jt as _e,kn as q,l as ve,lr as J,mr as Y,nr as X,qn as Z,qt as ye,rr as Q,tr as be,ur as xe,vr as Se,wr as Ce,x as we,xr as $,zt as Te}from"./index-DPMqRjBW.js";import{t as Ee}from"./plus-DNgrTAHx.js";import{t as De}from"./puzzle-Dy9pxcjY.js";import{t as Oe}from"./refresh-cw-RVroCufz.js";import{t as ke}from"./search-BAwigtNH.js";import{t as Ae}from"./trash-2-Bj3fpfOW.js";import{t as je}from"./x-BtFC9eLV.js";import{_ as Me,a as Ne,c as Pe,h as Fe,s as Ie,t as Le}from"./store-DyzEHWh-.js";var Re=`Expected a function`,ze=Math.max,Be=Math.min;function Ve(e,t,a){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(Re);t=r(t)||0,n(a)&&(p=!!a.leading,m=`maxWait`in a,c=m?ze(r(a.maxWait)||0,t):c,h=`trailing`in a?!!a.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?Be(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=i();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(i())}function w(){var e=i(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var He=`Expected a function`;function Ue(e,t,r){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(He);return n(r)&&(i=`leading`in r?!!r.leading:i,a=`trailing`in r?!!r.trailing:a),Ve(e,t,{leading:i,maxWait:t,trailing:a})}var We=u(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[u(`&::-webkit-scrollbar`,{width:0,height:0})]),Ge=N({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=$(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=k();return We.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:c,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return fe(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Ke=N({name:`Add`,render(){return(()=>{let e=Te(`b30130fbba5c5b23`);return e[0]||=j(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[j(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)})()}}),qe=se(`n-tabs`),Je={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Ye=N({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Je,slots:Object,setup(e){let t=be(qe,null);return t||ce(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return J(),z(`div`,{class:x([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:F(this.style)},[I(()=>this.$slots.default?.())],6)}}),Xe=[`data-name`,`data-disabled`],Ze={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...we(Je,[`displayDirective`])},Qe=N({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Ze,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=be(qe);return{trigger:d,mergedClosable:O(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:o,mergedClosable:s,trigger:c,$slots:{default:l}}=this,u=i??a;return J(),z(`div`,{class:x(`${t}-tabs-tab-wrapper`)},[this.internalLeftPadded?(J(),z(`div`,{key:0,class:x(`${t}-tabs-tab-pad`)},null,2)):I(()=>null),(J(),z(`div`,X({key:n,"data-name":n,"data-disabled":r?!0:void 0},X({class:[`${t}-tabs-tab`,o===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:c===`click`?this.activateTab:void 0,onMouseenter:c===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[j(`span`,{class:x(`${t}-tabs-tab__label`)},[e?(J(),z(L,{key:0},[j(`div`,{class:x(`${t}-tabs-tab__height-placeholder`)},`\xA0`,2),(J(),Z(b,{clsPrefix:t},{default:()=>(J(),Z(Ke))},1032,[`clsPrefix`]))],64)):(J(),z(L,{key:1},[l?(J(),z(L,{key:0},[I(()=>l())],64)):(J(),z(L,{key:1},[typeof u==`object`?(J(),z(L,{key:0},[I(()=>u)],64)):(J(),z(L,{key:1},[I(()=>he(u??n))],64))],64))],64))],2),s&&this.type===`card`?(J(),Z(ne,{key:0,clsPrefix:t,class:x(`${t}-tabs-tab__close`),onClick:this.handleClose,disabled:r},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):I(()=>null)],16,Xe))],2)}}),$e=w(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[E(`&.transition-disabled`,[w(`tabs-tab`,`
 transition: none !important;
 `),w(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),w(`tabs-tab-pad`,`
 transition: none !important;
 `)]),y(`segment-type`,[w(`tabs-rail`,[E(`&.transition-disabled`,[w(`tabs-capsule`,`
 transition: none;
 `)])])]),y(`top`,[w(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),y(`left`,[w(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),y(`left, right`,`
 flex-direction: row;
 `,[w(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),w(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),y(`right`,`
 flex-direction: row-reverse;
 `,[w(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),w(`tabs-bar`,`
 left: 0;
 `)]),y(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[w(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),w(`tabs-bar`,`
 top: 0;
 `)]),w(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[w(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),w(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[w(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[y(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),E(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),y(`flex`,[w(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[w(`tabs-wrapper`,`
 width: 100%;
 `,[w(`tabs-tab`,`
 margin-right: 0;
 `)])])]),w(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[q(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),q(`prefix`,`padding-right: 16px;`),q(`suffix`,`padding-left: 16px;`)]),y(`top, bottom`,[E(`>`,[w(`tabs-nav`,[w(`tabs-nav-scroll-wrapper`,[E(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),E(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),y(`shadow-start`,[E(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),y(`shadow-end`,[E(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),y(`left, right`,[w(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),E(`>`,[w(`tabs-nav`,[w(`tabs-nav-scroll-wrapper`,[E(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),E(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),y(`shadow-start`,[E(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),y(`shadow-end`,[E(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),w(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[w(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[E(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),E(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `),E(`&.transition-disabled`,[E(`&::before, &::after`,`
 transition: none;
 `)])]),w(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),w(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),w(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),w(`tabs-tab`,`
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
 `,[y(`disabled`,{cursor:`not-allowed`}),q(`close`,`
 margin-inline-start: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),q(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),w(`tabs-bar`,`
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
 `,[E(`&.transition-disabled`,`
 transition: none;
 `),y(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),w(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),w(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[E(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),E(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),E(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),E(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),E(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),w(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),y(`line-type, bar-type`,[w(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[E(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),y(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),y(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),w(`tabs-nav`,[q(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),w(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),y(`line-type`,[y(`top`,[q(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),w(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),w(`tabs-bar`,`
 bottom: -1px;
 `)]),y(`left`,[q(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),w(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),w(`tabs-bar`,`
 right: -1px;
 `)]),y(`right`,[q(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),w(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),w(`tabs-bar`,`
 left: -1px;
 `)]),y(`bottom`,[q(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),w(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),w(`tabs-bar`,`
 top: -1px;
 `)]),q(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),w(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),w(`tabs-bar`,`
 border-radius: 0;
 `)]),y(`card-type`,[q(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),w(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),w(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),w(`tabs-tab`,`
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
 `,[y(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[q(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ge(`disabled`,[E(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),y(`closable`,`padding-inline-end: 8px;`),y(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),y(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),y(`left, right`,`
 flex-direction: column; 
 `,[q(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),w(`tabs-wrapper`,`
 flex-direction: column;
 `),w(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[w(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),y(`top`,[y(`card-type`,[w(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),q(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),w(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[y(`active`,`
 border-bottom: 1px solid #0000;
 `)]),w(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),w(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),y(`left`,[y(`card-type`,[w(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),q(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),w(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[y(`active`,`
 border-right: 1px solid #0000;
 `)]),w(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),w(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),y(`right`,[y(`card-type`,[w(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),q(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),w(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[y(`active`,`
 border-left: 1px solid #0000;
 `)]),w(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),w(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),y(`bottom`,[y(`card-type`,[w(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),q(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),w(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[y(`active`,`
 border-top: 1px solid #0000;
 `)]),w(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),w(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),w(`tabs-scroll-button`,[y(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),y(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),y(`up`,`
 padding-bottom: 10px;
 `),y(`down`,`
 padding-top: 10px;
 `)])]),et=N({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:e,disabled:t,type:n,vertical:r,rtl:i,theme:a,themeOverrides:o,handleClick:s}=this,c=n===`next`,l=r?c:i?!c:c;return J(),Z(C,{text:!0,disabled:t,size:`small`,theme:a,themeOverrides:o,onClick:s,class:x([`${e}-tabs-scroll-button`,!r&&n===`prev`&&`${e}-tabs-scroll-button--start`,!r&&n===`next`&&`${e}-tabs-scroll-button--end`,r&&n===`prev`&&`${e}-tabs-scroll-button--up`,r&&n===`next`&&`${e}-tabs-scroll-button--down`])},{icon:()=>(J(),Z(b,{clsPrefix:e,style:F(r?{transform:`rotate(90deg)`}:void 0)},{default:()=>l?(J(),Z(m,{key:1})):(J(),Z(f,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),tt=Ue,nt={..._e.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},rt=N({name:`Tabs`,props:nt,slots:Object,setup(t,{slots:n}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a,mergedRtlRef:o}=ye(t),c=de(`Tabs`,o,r),u=O(()=>{let{placement:e}=t;return e===`start`?c?.value?`right`:`left`:e===`end`?c?.value?`left`:`right`:e}),d=_e(`Tabs`,`-tabs`,$e,ve,t,r),f=$(null),p=$(null),m=$(null),h=$(null),g=$(null),_=$(null),v=$(null),y=$(!0),b=$(!0),x=l(t,[`labelSize`,`size`]),S=O(()=>x.value?x.value:a?.value?.Tabs?.size||`medium`),C=l(t,[`activeName`,`value`]),w=$(C.value??t.defaultValue??(n.default?me(n.default())[0]?.props?.name:null)),T=e(C,w),E={id:0},D=O(()=>{if(t.justifyContent&&t.type!==`card`)return{display:`flex`,justifyContent:t.justifyContent}});K(T,()=>{E.id=0,j(),Q(()=>{N()})});function k(){let{value:e}=T;return e===null?null:f.value?.querySelector(`[data-name="${e}"]`)}function ee(e){if(t.type===`card`)return;let{value:n}=m;if(!n)return;let i=n.style.opacity===`0`;if(e){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o}=t,s=u.value;if(e.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(A([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(A([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function ne(){if(t.type===`card`)return;let{value:e}=m;e&&(e.style.opacity=`0`)}function A(e){let{value:t}=m;if(t)for(let n of e)t.style[n]=``}function j(){if(t.type===`card`)return;let e=k();e?ee(e):ne()}function re(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function N(){let e=[`top`,`bottom`].includes(u.value),n=k();if(n){if(e){let r=_.value?.$el;if(!r)return;re(r,n,e,t.centerActiveTab)}else{let{value:r}=v;if(!r)return;re(r,n,e,t.centerActiveTab)}}}let ae=$(null),F=0,I=null;function L(e){let t=ae.value;if(t){F=e.getBoundingClientRect().height;let n=`${F}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};I?(r(),I(),I=null):I=r}}function oe(e){let t=ae.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(F,n)}px`};I?(I(),I=null,r()):I=r}}function R(){let e=ae.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let z={value:[]},se=$(`next`);function B(e){let t=T.value,n=`next`;for(let r of z.value){if(r===t)break;if(r===e){n=`prev`;break}}se.value=n,ce(e)}function ce(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&le(n,e),r&&le(r,e),i&&le(i,e),w.value=e}function V(e){let{onClose:n}=t;n&&le(n,e)}function H(e){if([`top`,`bottom`].includes(u.value)){let{value:t}=_;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!c?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=v;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let fe=!0;function U(){let{value:e}=m;if(!e)return;fe&&=!1;let t=`transition-disabled`;e.classList.add(t),j(),e.classList.remove(t)}let W=$(null);function G({transitionDisabled:e}){let t=f.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=k();n&&W.value&&(W.value.style.width=`${n.offsetWidth}px`,W.value.style.height=`${n.offsetHeight}px`,W.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&W.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}K([T],()=>{t.type===`segment`&&Q(()=>{G({transitionDisabled:!1})})}),ue(()=>{t.type===`segment`&&G({transitionDisabled:!0})});let he=0;function ge(e){if(e.contentRect.width===0&&e.contentRect.height===0||he===e.contentRect.width)return;he=e.contentRect.width;let{type:n}=t;(n===`line`||n===`bar`)&&(fe||t.justifyContent?.startsWith(`space`))&&U(),n!==`segment`&&we(Ce())}let q=tt(ge,64);function J(){let{type:e}=t;e===`line`||e===`bar`?U():e===`segment`&&G({transitionDisabled:!0})}K([()=>t.justifyContent,()=>t.size],()=>{Q(()=>{(t.type===`line`||t.type===`bar`)&&U()})}),K([u,()=>c?.value],()=>{Q(()=>{J(),we(Ce(),{instantly:!0})})}),K(()=>t.type,()=>{Q(()=>{let e=p.value;e&&(e.classList.add(`transition-disabled`),J(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let Y=$(!1);function X(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=u.value;if(!Y.value)o===`top`||o===`bottom`?i<n&&(Y.value=!0):a<r&&(Y.value=!0);else{let{value:e}=g;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(Y.value=!1):a-r>e.$el.offsetHeight&&(Y.value=!1)}we(_.value?.$el||null)}let Z=tt(X,64);function be(){let{onAdd:e}=t;e&&e()}let Se=$(!1);function Ce(){let e=u.value;return(e===`top`||e===`bottom`?_.value?.$el:v.value)||null}function we(e,t={instantly:!1}){if(!e)return;let n=t.instantly?h.value:null;n&&n.classList.add(`transition-disabled`);let r=u.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);y.value=i<=1,b.value=i+r>=n-1,Se.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;y.value=t<=1,b.value=t+r>=n-1,Se.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let Te=tt(e=>{we(e.target)},64);xe(qe,{triggerRef:P(t,`trigger`),tabStyleRef:P(t,`tabStyle`),tabClassRef:P(t,`tabClass`),addTabStyleRef:P(t,`addTabStyle`),addTabClassRef:P(t,`addTabClass`),paneClassRef:P(t,`paneClass`),paneStyleRef:P(t,`paneStyle`),mergedClsPrefixRef:r,typeRef:P(t,`type`),closableRef:P(t,`closable`),valueRef:T,tabChangeIdRef:E,onBeforeLeaveRef:P(t,`onBeforeLeave`),activateTab:B,handleClose:V,handleAdd:be}),s(()=>{j(),N()}),pe(()=>{let{value:e}=h;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;y.value?e.classList.remove(n):e.classList.add(n),b.value?e.classList.remove(i):e.classList.add(i)});let Ee={syncBarPosition:()=>{j()},scrollToCurrentTab:()=>{N()}},De=()=>{G({transitionDisabled:!0})},Oe=O(()=>{let{value:e}=S,{type:n}=t,r=`${e}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:l,paneTextColor:u,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:C,[M(`panePadding`,e)]:w,[M(`tabPadding`,r)]:T,[M(`tabPaddingVertical`,r)]:E,[M(`tabGap`,r)]:D,[M(`tabGap`,`${r}Vertical`)]:O,[M(`tabTextColor`,n)]:k,[M(`tabTextColorActive`,n)]:ee,[M(`tabTextColorHover`,n)]:ne,[M(`tabTextColorDisabled`,n)]:A,[M(`tabFontSize`,e)]:j},common:{cubicBezierEaseInOut:re}}=d.value;return{"--n-bezier":re,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":j,"--n-tab-text-color":k,"--n-tab-text-color-active":ee,"--n-tab-text-color-disabled":A,"--n-tab-text-color-hover":ne,"--n-pane-text-color":u,"--n-tab-border-color":l,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":C,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":E,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":te(w,`left`),"--n-pane-padding-right":te(w,`right`),"--n-pane-padding-top":te(w,`top`),"--n-pane-padding-bottom":te(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),ke=i?ie(`tabs`,O(()=>`${S.value[0]}${t.type[0]}`),Oe,t):void 0;return{mergedClsPrefix:r,mergedValue:T,renderedNames:new Set,segmentCapsuleElRef:W,tabsPaneWrapperRef:ae,tabsElRef:f,selfElRef:p,barElRef:m,addTabInstRef:g,xScrollInstRef:_,scrollWrapperElRef:h,addTabFixed:Y,tabWrapperStyle:D,handleNavResize:q,mergedSize:S,handleScroll:Te,handleTabsResize:Z,cssVars:i?void 0:Oe,themeClass:ke?.themeClass,animationDirection:se,renderNameListRef:z,yScrollElRef:v,handleSegmentResize:De,onAnimationBeforeLeave:L,onAnimationEnter:oe,onAnimationAfterEnter:R,onRender:ke?.onRender,startReachedRef:y,endReachedRef:b,isOverflow:Se,handleButtonClick:H,mergedTheme:d,rtlEnabled:c,mergedPlacement:u,...Ee}},render(){let{mergedClsPrefix:e,type:t,mergedPlacement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,startReachedRef:u,endReachedRef:d,isOverflow:f,showScrollButton:p,handleButtonClick:m,mergedTheme:h,rtlEnabled:g,$slots:{default:_,prefix:v,suffix:y}}=this;s?.();let b=_?me(_()).filter(e=>e.type.__TAB_PANE__===!0):[],S=_?me(_()).filter(e=>e.type.__TAB__===!0):[],C=!S.length,w=t===`card`,T=t===`segment`,E=!w&&!T&&this.justifyContent;o.value=[];let D=()=>{let t=(J(),z(`div`,{style:F(this.tabWrapperStyle),class:x(`${e}-tabs-wrapper`)},[E?I(()=>null):(J(),z(`div`,{key:1,class:x(`${e}-tabs-scroll-padding`),style:F(n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),C?(J(),z(L,{key:2},[I(()=>b.map((e,t)=>(o.value.push(e.props.name),st((J(),Z(Qe,X(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!E||E===`center`||E===`start`||E===`end`)}),ee(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(J(),z(L,{key:3},[I(()=>S.map((e,t)=>(o.value.push(e.props.name),st(t!==0&&!E?ot(e):e))))],64)),!r&&i&&w?(J(),z(L,{key:4},[I(()=>at(i,(C?b.length:S.length)!==0))],64)):I(()=>null),E?I(()=>null):(J(),z(`div`,{key:7,class:x(`${e}-tabs-scroll-padding`),style:F({width:`${this.tabsPadding}px`})},null,6)),w?I(()=>null):(J(),z(`div`,{key:9,ref:`barElRef`,class:x(`${e}-tabs-bar`)},null,2))],6));return J(),z(`div`,{ref:`tabsElRef`,class:x(`${e}-tabs-nav-scroll-content`)},[w&&i?(J(),Z(U,{key:0,onResize:this.handleTabsResize},{default:()=>t},1032,[`onResize`])):(J(),z(L,{key:1},[I(()=>t)],64)),w?(J(),z(`div`,{key:2,class:x(`${e}-tabs-pad`)},null,2)):I(()=>null)],2)},O=T?`top`:n;return J(),z(`div`,{ref:`selfElRef`,class:x([`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,E&&`${e}-tabs--flex`,`${e}-tabs--${O}`,g&&`${e}-tabs--rtl`]),style:F(this.cssVars)},[j(`div`,{class:x([`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${O}`,`${e}-tabs-nav`])},[I(()=>G(v,t=>t&&(J(),z(`div`,{class:x(`${e}-tabs-nav__prefix`)},[I(()=>t)],2)))),T?(J(),Z(U,{key:0,onResize:this.handleSegmentResize},{default:()=>(J(),z(`div`,{class:x(`${e}-tabs-rail`),ref:`tabsElRef`},[j(`div`,{class:x(`${e}-tabs-capsule`),ref:`segmentCapsuleElRef`},[j(`div`,{class:x(`${e}-tabs-wrapper`)},[j(`div`,{class:x(`${e}-tabs-tab`)},null,2)],2)],2),C?(J(),z(L,{key:0},[I(()=>b.map((e,t)=>(o.value.push(e.props.name),J(),Z(Qe,X(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),ee(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(J(),z(L,{key:1},[I(()=>S.map((e,t)=>(o.value.push(e.props.name),t===0?e:ot(e))))],64))],2))},1032,[`onResize`])):(J(),z(L,{key:1},[I(()=>p&&f&&(J(),Z(et,{mergedClsPrefix:e,type:`prev`,vertical:O===`left`||O===`right`,disabled:u,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(J(),Z(U,{onResize:this.handleNavResize},{default:()=>(J(),z(`div`,{class:x(`${e}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(O)?(J(),Z(Ge,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:D},1032,[`onScroll`])):(J(),z(`div`,{key:1,class:x(`${e}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[I(()=>D())],42,[`onScroll`]))],2))},1032,[`onResize`])),I(()=>p&&f&&(J(),Z(et,{mergedClsPrefix:e,type:`next`,vertical:O===`left`||O===`right`,disabled:d,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),r&&i&&w?(J(),z(L,{key:2},[I(()=>at(i,!0))],64)):I(()=>null),I(()=>G(y,t=>t&&(J(),z(`div`,{class:x(`${e}-tabs-nav__suffix`)},[I(()=>t)],2))))],2),I(()=>C&&(this.animated&&(O===`top`||O===`bottom`)?(J(),z(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:F(l),class:x([`${e}-tabs-pane-wrapper`,c])},[I(()=>it(b,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):it(b,this.mergedValue,this.renderedNames)))],6)}});function it(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?Se(e,[[ae,c]]):e)}}),o?(J(),Z(re,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):s}function at(e,t){return J(),Z(Qe,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled},null,8,[`internalLeftPadded`,`disabled`])}function ot(e){let t=oe(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function st(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var ct=t(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),lt=t(`plug`,[[`path`,{d:`M12 22v-5`,key:`1ega77`}],[`path`,{d:`M15 8V2`,key:`18g5xt`}],[`path`,{d:`M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z`,key:`1xoxul`}],[`path`,{d:`M9 8V2`,key:`14iosj`}]]),ut={class:`skill-manager`},dt={class:`sm-head`},ft={class:`sm-title`},pt={class:`muted sm-count`},mt={class:`sm-actions`},ht={class:`sm-cats`},gt={class:`sm-body`},_t={class:`group-title`},vt={class:`muted`},yt={class:`sm-grid`},bt={class:`card-head`},xt={class:`card-name`},St={class:`card-desc`},Ct={class:`card-tools`},wt={key:0,class:`muted tiny`},Tt={class:`card-foot`},Et=N({__name:`SkillManager`,props:{skills:{}},emits:[`toggle`,`remove`,`reload`,`add`],setup(e){let t=e,n=[`系统`,`文件`,`代码`,`网络`,`数学`,`通用`,`其他`],r=$(``),i=$(`全部`),s=O(()=>{let e=r.value.trim().toLowerCase(),i=t=>!e||t.name.toLowerCase().includes(e)||(t.description||``).toLowerCase().includes(e)||(t.tools||[]).some(t=>t.toLowerCase().includes(e)),a=new Map;for(let e of t.skills){if(!i(e))continue;let t=e.category||`其他`;a.has(t)||a.set(t,[]),a.get(t).push(e)}let o=Array.from(a.entries()).map(([e,t])=>({category:e,list:t}));return o.sort((e,t)=>{let r=n.indexOf(e.category),i=n.indexOf(t.category);return(r===-1?99:r)-(i===-1?99:i)}),o}),c=O(()=>[`全部`,...s.value.map(e=>e.category)]),l=O(()=>i.value===`全部`?s.value:s.value.filter(e=>e.category===i.value)),u=O(()=>t.skills.filter(e=>e.enabled).length);return(t,n)=>(J(),z(`div`,ut,[j(`div`,dt,[j(`div`,ft,[B(S(De),{size:20}),n[3]||=j(`h2`,null,`技能管理`,-1),j(`span`,pt,D(u.value)+` / `+D(e.skills.length)+` 已启用`,1)]),j(`div`,mt,[B(S(d),{value:r.value,"onUpdate:value":n[0]||=e=>r.value=e,class:`sm-search`,placeholder:`搜索技能 / 工具…`,clearable:``},{prefix:V(()=>[B(S(g),{component:S(ke)},null,8,[`component`])]),_:1},8,[`value`]),B(S(C),{onClick:n[1]||=e=>t.$emit(`reload`)},{icon:V(()=>[B(S(Oe),{size:15})]),default:V(()=>[n[4]||=R(` 重载 `,-1)]),_:1}),B(S(C),{type:`primary`,onClick:n[2]||=e=>t.$emit(`add`)},{icon:V(()=>[B(S(Ee),{size:15})]),default:V(()=>[n[5]||=R(` 新建技能 `,-1)]),_:1})])]),j(`div`,ht,[(J(!0),z(L,null,H(c.value,e=>(J(),Z(S(o),{key:e,class:`cat-chip`,type:i.value===e?`primary`:`default`,bordered:!1,checkable:``,checked:i.value===e,"onUpdate:checked":t=>i.value=e},{default:V(()=>[R(D(e),1)]),_:2},1032,[`type`,`checked`,`onUpdate:checked`]))),128))]),j(`div`,gt,[l.value.length?A(``,!0):(J(),Z(S(a),{key:0,class:`sm-empty`,description:`没有匹配的技能`})),(J(!0),z(L,null,H(l.value,e=>(J(),z(`section`,{key:e.category,class:`sm-group`},[j(`h4`,_t,[R(D(e.category)+` `,1),j(`span`,vt,`· `+D(e.list.length),1)]),j(`div`,yt,[(J(!0),z(L,null,H(e.list,e=>(J(),Z(S(T),{key:e.id,class:Ce([`skill-card`,{off:!e.enabled}]),size:`small`},{default:V(()=>[j(`div`,bt,[j(`div`,xt,[B(S(p),{size:15}),j(`b`,null,D(e.name),1),B(S(o),{size:`small`,bordered:!1,type:e.builtin?`default`:`info`},{default:V(()=>[R(D(e.builtin?`内置`:`自定义`),1)]),_:2},1032,[`type`])]),B(S(v),{value:e.enabled,size:`small`,"onUpdate:value":n=>t.$emit(`toggle`,e)},null,8,[`value`,`onUpdate:value`])]),j(`p`,St,D(e.description||`（无描述）`),1),j(`div`,Ct,[(J(!0),z(L,null,H(e.tools||[],e=>(J(),Z(S(o),{key:e,size:`small`,bordered:!1,class:`tool-chip`},{default:V(()=>[R(D(e),1)]),_:2},1024))),128)),!e.tools||!e.tools.length?(J(),z(`span`,wt,`无工具`)):A(``,!0)]),j(`div`,Tt,[j(`span`,{class:Ce([`state`,e.enabled?`on`:`off`])},D(e.enabled?`已启用`:`已禁用`),3),e.builtin?A(``,!0):(J(),Z(S(C),{key:0,quaternary:``,circle:``,size:`tiny`,title:`删除技能`,type:`error`,onClick:n=>t.$emit(`remove`,e.id)},{icon:V(()=>[B(S(Ae),{size:14})]),_:1},8,[`onClick`]))])]),_:2},1032,[`class`]))),128))])]))),128))])]))}}),Dt={class:`page`},Ot={class:`page-head`},kt={class:`page-title`},At={class:`page-body page-body-flush`},jt={class:`tab-label`},Mt={class:`tab-label`},Nt={key:1,class:`grid-cards`},Pt={class:`card-head`},Ft={class:`card-name`},It={class:`card-desc card-desc-flat`},Lt=N({__name:`Experts`,setup(e){let t=W(),n=$(`skills`),r=$(!1),i=[{name:`工作目录`,desc:`读写当前会话隔离目录下的文件`,ready:!0},{name:`Shell 执行`,desc:`在沙箱内执行命令并返回输出`,ready:!0},{name:`Web 检索`,desc:`联网搜索与抓取页面内容`,ready:!0},{name:`计算器`,desc:`安全的数学表达式求值`,ready:!0},{name:`腾讯文档`,desc:`读取与写入腾讯文档（需授权）`,ready:!1},{name:`GitHub`,desc:`仓库、Issue 与 PR 操作（需授权）`,ready:!1}];async function s(e){let n=await Le(e);n.ok?(r.value=!1,t.success(`技能创建成功`)):t.error(`创建失败: `+(n.error||`未知错误`))}return ue(()=>Ne()),(e,t)=>(J(),z(`div`,Dt,[j(`div`,Ot,[j(`div`,kt,[B(S(De),{size:20}),t[3]||=j(`h1`,null,`专家 · 技能 · 连接器`,-1)])]),j(`div`,At,[B(S(rt),{value:n.value,"onUpdate:value":t[0]||=e=>n.value=e,type:`line`,size:`medium`,class:`experts-tabs`},{default:V(()=>[B(S(Ye),{name:`skills`},{tab:V(()=>[j(`span`,jt,[B(S(De),{size:15}),t[4]||=R(` 技能`,-1)])]),_:1}),B(S(Ye),{name:`connectors`},{tab:V(()=>[j(`span`,Mt,[B(S(lt),{size:15}),t[5]||=R(` 连接器`,-1)])]),_:1})]),_:1},8,[`value`]),n.value===`skills`?(J(),Z(Et,{key:0,skills:S(Fe).skills,onToggle:S(Me),onRemove:S(Pe),onReload:S(Ie),onAdd:t[1]||=e=>r.value=!0},null,8,[`skills`,`onToggle`,`onRemove`,`onReload`])):(J(),z(`div`,Nt,[(J(),z(L,null,H(i,e=>B(S(T),{key:e.name,size:`small`},{default:V(()=>[j(`div`,Pt,[j(`div`,Ft,[B(S(_),{size:15}),j(`b`,null,D(e.name),1)]),B(S(o),{size:`small`,bordered:!1,type:e.ready?`success`:`default`},{icon:V(()=>[(J(),Z(Y(e.ready?S(ct):S(je)),{size:12}))]),default:V(()=>[R(` `+D(e.ready?`已就绪`:`未接入`),1)]),_:2},1032,[`type`])]),j(`p`,It,D(e.desc),1)]),_:2},1024)),64)),i.length?A(``,!0):(J(),Z(S(a),{key:0,class:`page-empty`,description:`暂无连接器`}))]))]),B(h,{open:r.value,onClose:t[2]||=e=>r.value=!1,onSubmit:s},null,8,[`open`])]))}});export{Lt as default};