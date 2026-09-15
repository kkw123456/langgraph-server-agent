import{a as e,n as t,t as n}from"./createLucideIcon--8DT_RtV.js";import{k as r}from"./isArrayLikeObject-DDw98r_w.js";import{n as i,t as a}from"./now-DEvl0O6C.js";import{C as o,_ as s,c,l,n as u,o as d,x as f,y as p}from"./store-BUsLJM31.js";import{a as m,i as h,n as g,r as _,t as v}from"./plus-Cb2OPW-Q.js";import{n as y,t as b}from"./FormItem-DDIfCoeG.js";import{t as x}from"./ChevronRight-fOPon8Ry.js";import{t as S}from"./Icon-D_0cj9fF.js";import{t as C}from"./Skeleton-D-fCPh04.js";import{t as w}from"./Switch-uDeRUfg9.js";import{$n as T,$t as E,Ar as D,Bn as O,Cr as ee,Ct as te,Dr as ne,Fr as k,Hn as A,In as j,Ir as M,It as N,Jt as P,L as re,Ln as F,Lr as ie,Lt as ae,M as I,Mr as oe,N as L,O as se,Or as ce,Pr as R,Rr as z,Rt as le,Sr as B,Vn as ue,Wt as de,Xt as fe,Yn as pe,Zt as V,an as me,ar as H,br as he,bt as U,cr as W,fr as ge,g as _e,gt as ve,h as ye,hr as be,ir as G,jr as K,kr as xe,lr as q,mr as Se,nn as Ce,nr as we,o as Te,or as J,pr as Ee,qn as De,qt as Oe,rr as Y,sn as ke,sr as X,st as Ae,tt as je,u as Me,ur as Z,wr as Ne,wt as Pe,zn as Q,zr as $}from"./index-DBUzJGPl.js";import{t as Fe}from"./bot-8nQ7I2Ui.js";import{t as Ie}from"./package-BPNZnDe9.js";import{t as Le}from"./puzzle-DR9S7Bmi.js";import{t as Re}from"./refresh-cw-Ba8Mc4g0.js";import{t as ze}from"./search-D-1AHuxK.js";import{t as Be}from"./trash-2-D8KsdP3K.js";import{t as Ve}from"./x-CydKU9pg.js";var He=`Expected a function`,Ue=Math.max,We=Math.min;function Ge(e,t,n){var o,s,c,l,u,d,f=0,p=!1,m=!1,h=!0;if(typeof e!=`function`)throw TypeError(He);t=i(t)||0,r(n)&&(p=!!n.leading,m=`maxWait`in n,c=m?Ue(i(n.maxWait)||0,t):c,h=`trailing`in n?!!n.trailing:h);function g(t){var n=o,r=s;return o=s=void 0,f=t,l=e.apply(r,n),l}function _(e){return f=e,u=setTimeout(b,t),p?g(e):l}function v(e){var n=e-d,r=e-f,i=t-n;return m?We(i,c-r):i}function y(e){var n=e-d,r=e-f;return d===void 0||n>=t||n<0||m&&r>=c}function b(){var e=a();if(y(e))return x(e);u=setTimeout(b,v(e))}function x(e){return u=void 0,h&&o?g(e):(o=s=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,o=d=s=u=void 0}function C(){return u===void 0?l:x(a())}function w(){var e=a(),n=y(e);if(o=arguments,s=this,d=e,n){if(u===void 0)return _(d);if(m)return clearTimeout(u),u=setTimeout(b,t),g(d)}return u===void 0&&(u=setTimeout(b,t)),l}return w.cancel=S,w.flush=C,w}var Ke=`Expected a function`;function qe(e,t,n){var i=!0,a=!0;if(typeof e!=`function`)throw TypeError(Ke);return r(n)&&(i=`leading`in n?!!n.leading:i,a=`trailing`in n?!!n.trailing:a),Ge(e,t,{leading:i,maxWait:t,trailing:a})}var Je=g(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[g(`&::-webkit-scrollbar`,{width:0,height:0})]),Ye=Z({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=R(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=E();return Je.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:_,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return ge(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Xe=Z({name:`ChevronLeft`,render(){return(()=>{let e=Oe(`dfe229c2639b2082`);return e[0]||=G(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[G(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`})],-1)})()}}),Ze=Z({name:`Add`,render(){return(()=>{let e=Oe(`b30130fbba5c5b23`);return e[0]||=G(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[G(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)})()}}),Qe=me(`n-tabs`),$e={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},et=Z({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:$e,slots:Object,setup(e){let t=Ee(Qe,null);return t||ke(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return B(),X(`div`,{class:P([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:z(this.style)},[V(()=>this.$slots.default?.())],6)}}),tt=[`data-name`,`data-disabled`],nt={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...se($e,[`displayDirective`])},rt=Z({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:nt,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=Ee(Qe);return{trigger:d,mergedClosable:Y(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:o,mergedClosable:s,trigger:c,$slots:{default:l}}=this,u=i??a;return B(),X(`div`,{class:P(`${t}-tabs-tab-wrapper`)},[this.internalLeftPadded?(B(),X(`div`,{key:0,class:P(`${t}-tabs-tab-pad`)},null,2)):V(()=>null),(B(),X(`div`,Se({key:n,"data-name":n,"data-disabled":r?!0:void 0},Se({class:[`${t}-tabs-tab`,o===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:c===`click`?this.activateTab:void 0,onMouseenter:c===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[G(`span`,{class:P(`${t}-tabs-tab__label`)},[e?(B(),X(T,{key:0},[G(`div`,{class:P(`${t}-tabs-tab__height-placeholder`)},`\xA0`,2),(B(),H(N,{clsPrefix:t},{default:()=>(B(),H(Ze))},1032,[`clsPrefix`]))],64)):(B(),X(T,{key:1},[l?(B(),X(T,{key:0},[V(()=>l())],64)):(B(),X(T,{key:1},[typeof u==`object`?(B(),X(T,{key:0},[V(()=>u)],64)):(B(),X(T,{key:1},[V(()=>re(u??n))],64))],64))],64))],2),s&&this.type===`card`?(B(),H(je,{key:0,clsPrefix:t,class:P(`${t}-tabs-tab__close`),onClick:this.handleClose,disabled:r},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):V(()=>null)],16,tt))],2)}}),it=F(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[j(`&.transition-disabled`,[F(`tabs-tab`,`
 transition: none !important;
 `),F(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),F(`tabs-tab-pad`,`
 transition: none !important;
 `)]),O(`segment-type`,[F(`tabs-rail`,[j(`&.transition-disabled`,[F(`tabs-capsule`,`
 transition: none;
 `)])])]),O(`top`,[F(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),O(`left`,[F(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),O(`left, right`,`
 flex-direction: row;
 `,[F(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),F(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),O(`right`,`
 flex-direction: row-reverse;
 `,[F(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),F(`tabs-bar`,`
 left: 0;
 `)]),O(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[F(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),F(`tabs-bar`,`
 top: 0;
 `)]),F(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[F(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),F(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[F(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[O(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),j(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),O(`flex`,[F(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[F(`tabs-wrapper`,`
 width: 100%;
 `,[F(`tabs-tab`,`
 margin-right: 0;
 `)])])]),F(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[Q(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),Q(`prefix`,`padding-right: 16px;`),Q(`suffix`,`padding-left: 16px;`)]),O(`top, bottom`,[j(`>`,[F(`tabs-nav`,[F(`tabs-nav-scroll-wrapper`,[j(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),j(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),O(`shadow-start`,[j(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),O(`shadow-end`,[j(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),O(`left, right`,[F(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),j(`>`,[F(`tabs-nav`,[F(`tabs-nav-scroll-wrapper`,[j(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),j(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),O(`shadow-start`,[j(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),O(`shadow-end`,[j(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),F(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[F(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[j(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),j(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `),j(`&.transition-disabled`,[j(`&::before, &::after`,`
 transition: none;
 `)])]),F(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),F(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),F(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),F(`tabs-tab`,`
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
 `,[O(`disabled`,{cursor:`not-allowed`}),Q(`close`,`
 margin-inline-start: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Q(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),F(`tabs-bar`,`
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
 `,[j(`&.transition-disabled`,`
 transition: none;
 `),O(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),F(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),F(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[j(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),j(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),j(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),j(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),j(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),F(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),O(`line-type, bar-type`,[F(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[j(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),O(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),O(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),F(`tabs-nav`,[Q(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),O(`line-type`,[O(`top`,[Q(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),F(`tabs-bar`,`
 bottom: -1px;
 `)]),O(`left`,[Q(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),F(`tabs-bar`,`
 right: -1px;
 `)]),O(`right`,[Q(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),F(`tabs-bar`,`
 left: -1px;
 `)]),O(`bottom`,[Q(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),F(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),F(`tabs-bar`,`
 top: -1px;
 `)]),Q(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),F(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),F(`tabs-bar`,`
 border-radius: 0;
 `)]),O(`card-type`,[Q(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),F(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),F(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),F(`tabs-tab`,`
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
 `,[Q(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ue(`disabled`,[j(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),O(`closable`,`padding-inline-end: 8px;`),O(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),O(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),O(`left, right`,`
 flex-direction: column; 
 `,[Q(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),F(`tabs-wrapper`,`
 flex-direction: column;
 `),F(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[F(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),O(`top`,[O(`card-type`,[F(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),Q(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),F(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-bottom: 1px solid #0000;
 `)]),F(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),F(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),O(`left`,[O(`card-type`,[F(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),Q(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),F(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-right: 1px solid #0000;
 `)]),F(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),F(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),O(`right`,[O(`card-type`,[F(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),Q(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),F(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-left: 1px solid #0000;
 `)]),F(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),F(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),O(`bottom`,[O(`card-type`,[F(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),Q(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),F(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-top: 1px solid #0000;
 `)]),F(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),F(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),F(`tabs-scroll-button`,[O(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),O(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),O(`up`,`
 padding-bottom: 10px;
 `),O(`down`,`
 padding-top: 10px;
 `)])]),at=Z({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:e,disabled:t,type:n,vertical:r,rtl:i,theme:a,themeOverrides:o,handleClick:s}=this,c=n===`next`,l=r?c:i?!c:c;return B(),H(L,{text:!0,disabled:t,size:`small`,theme:a,themeOverrides:o,onClick:s,class:P([`${e}-tabs-scroll-button`,!r&&n===`prev`&&`${e}-tabs-scroll-button--start`,!r&&n===`next`&&`${e}-tabs-scroll-button--end`,r&&n===`prev`&&`${e}-tabs-scroll-button--up`,r&&n===`next`&&`${e}-tabs-scroll-button--down`])},{icon:()=>(B(),H(N,{clsPrefix:e,style:z(r?{transform:`rotate(90deg)`}:void 0)},{default:()=>l?(B(),H(x,{key:1})):(B(),H(Xe,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),ot=qe,st={...ae.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},ct=Z({name:`Tabs`,props:st,slots:Object,setup(t,{slots:n}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a,mergedRtlRef:o}=Ce(t),s=ve(`Tabs`,o,r),c=Y(()=>{let{placement:e}=t;return e===`start`?s?.value?`right`:`left`:e===`end`?s?.value?`left`:`right`:e}),l=ae(`Tabs`,`-tabs`,it,Me,t,r),u=R(null),d=R(null),f=R(null),p=R(null),g=R(null),_=R(null),v=R(null),y=R(!0),b=R(!0),x=h(t,[`labelSize`,`size`]),S=Y(()=>x.value?x.value:a?.value?.Tabs?.size||`medium`),C=h(t,[`activeName`,`value`]),w=R(C.value??t.defaultValue??(n.default?te(n.default())[0]?.props?.name:null)),T=e(C,w),E={id:0},D=Y(()=>{if(t.justifyContent&&t.type!==`card`)return{display:`flex`,justifyContent:t.justifyContent}});ce(T,()=>{E.id=0,N(),be(()=>{re()})});function O(){let{value:e}=T;return e===null?null:u.value?.querySelector(`[data-name="${e}"]`)}function ne(e){if(t.type===`card`)return;let{value:n}=f;if(!n)return;let i=n.style.opacity===`0`;if(e){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o}=t,s=c.value;if(e.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(M([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(M([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function j(){if(t.type===`card`)return;let{value:e}=f;e&&(e.style.opacity=`0`)}function M(e){let{value:t}=f;if(t)for(let n of e)t.style[n]=``}function N(){if(t.type===`card`)return;let e=O();e?ne(e):j()}function P(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function re(){let e=[`top`,`bottom`].includes(c.value),n=O();if(n){if(e){let r=_.value?.$el;if(!r)return;P(r,n,e,t.centerActiveTab)}else{let{value:r}=v;if(!r)return;P(r,n,e,t.centerActiveTab)}}}let F=R(null),ie=0,I=null;function oe(e){let t=F.value;if(t){ie=e.getBoundingClientRect().height;let n=`${ie}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};I?(r(),I(),I=null):I=r}}function L(e){let t=F.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(ie,n)}px`};I?(I(),I=null,r()):I=r}}function se(){let e=F.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let z={value:[]},B=R(`next`);function ue(e){let t=T.value,n=`next`;for(let r of z.value){if(r===t)break;if(r===e){n=`prev`;break}}B.value=n,fe(e)}function fe(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&Pe(n,e),r&&Pe(r,e),i&&Pe(i,e),w.value=e}function pe(e){let{onClose:n}=t;n&&Pe(n,e)}function V(e){if([`top`,`bottom`].includes(c.value)){let{value:t}=_;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!s?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=v;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let me=!0;function H(){let{value:e}=f;if(!e)return;me&&=!1;let t=`transition-disabled`;e.classList.add(t),N(),e.classList.remove(t)}let U=R(null);function W({transitionDisabled:e}){let t=u.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=O();n&&U.value&&(U.value.style.width=`${n.offsetWidth}px`,U.value.style.height=`${n.offsetHeight}px`,U.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&U.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}ce([T],()=>{t.type===`segment`&&be(()=>{W({transitionDisabled:!1})})}),he(()=>{t.type===`segment`&&W({transitionDisabled:!0})});let ge=0;function _e(e){if(e.contentRect.width===0&&e.contentRect.height===0||ge===e.contentRect.width)return;ge=e.contentRect.width;let{type:n}=t;(n===`line`||n===`bar`)&&(me||t.justifyContent?.startsWith(`space`))&&H(),n!==`segment`&&Ee(J())}let ye=ot(_e,64);function G(){let{type:e}=t;e===`line`||e===`bar`?H():e===`segment`&&W({transitionDisabled:!0})}ce([()=>t.justifyContent,()=>t.size],()=>{be(()=>{(t.type===`line`||t.type===`bar`)&&H()})}),ce([c,()=>s?.value],()=>{be(()=>{G(),Ee(J(),{instantly:!0})})}),ce(()=>t.type,()=>{be(()=>{let e=d.value;e&&(e.classList.add(`transition-disabled`),G(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let K=R(!1);function q(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=c.value;if(!K.value)o===`top`||o===`bottom`?i<n&&(K.value=!0):a<r&&(K.value=!0);else{let{value:e}=g;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(K.value=!1):a-r>e.$el.offsetHeight&&(K.value=!1)}Ee(_.value?.$el||null)}let Se=ot(q,64);function we(){let{onAdd:e}=t;e&&e()}let Te=R(!1);function J(){let e=c.value;return(e===`top`||e===`bottom`?_.value?.$el:v.value)||null}function Ee(e,t={instantly:!1}){if(!e)return;let n=t.instantly?p.value:null;n&&n.classList.add(`transition-disabled`);let r=c.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);y.value=i<=1,b.value=i+r>=n-1,Te.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;y.value=t<=1,b.value=t+r>=n-1,Te.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let De=ot(e=>{Ee(e.target)},64);ee(Qe,{triggerRef:k(t,`trigger`),tabStyleRef:k(t,`tabStyle`),tabClassRef:k(t,`tabClass`),addTabStyleRef:k(t,`addTabStyle`),addTabClassRef:k(t,`addTabClass`),paneClassRef:k(t,`paneClass`),paneStyleRef:k(t,`paneStyle`),mergedClsPrefixRef:r,typeRef:k(t,`type`),closableRef:k(t,`closable`),valueRef:T,tabChangeIdRef:E,onBeforeLeaveRef:k(t,`onBeforeLeave`),activateTab:ue,handleClose:pe,handleAdd:we}),m(()=>{N(),re()}),xe(()=>{let{value:e}=p;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;y.value?e.classList.remove(n):e.classList.add(n),b.value?e.classList.remove(i):e.classList.add(i)});let Oe={syncBarPosition:()=>{N()},scrollToCurrentTab:()=>{re()}},ke=()=>{W({transitionDisabled:!0})},X=Y(()=>{let{value:e}=S,{type:n}=t,r=`${e}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:C,[A(`panePadding`,e)]:w,[A(`tabPadding`,r)]:T,[A(`tabPaddingVertical`,r)]:E,[A(`tabGap`,r)]:D,[A(`tabGap`,`${r}Vertical`)]:O,[A(`tabTextColor`,n)]:ee,[A(`tabTextColorActive`,n)]:te,[A(`tabTextColorHover`,n)]:ne,[A(`tabTextColorDisabled`,n)]:k,[A(`tabFontSize`,e)]:j},common:{cubicBezierEaseInOut:M}}=l.value;return{"--n-bezier":M,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":j,"--n-tab-text-color":ee,"--n-tab-text-color-active":te,"--n-tab-text-color-disabled":k,"--n-tab-text-color-hover":ne,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":C,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":E,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":de(w,`left`),"--n-pane-padding-right":de(w,`right`),"--n-pane-padding-top":de(w,`top`),"--n-pane-padding-bottom":de(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),Ae=i?le(`tabs`,Y(()=>`${S.value[0]}${t.type[0]}`),X,t):void 0;return{mergedClsPrefix:r,mergedValue:T,renderedNames:new Set,segmentCapsuleElRef:U,tabsPaneWrapperRef:F,tabsElRef:u,selfElRef:d,barElRef:f,addTabInstRef:g,xScrollInstRef:_,scrollWrapperElRef:p,addTabFixed:K,tabWrapperStyle:D,handleNavResize:ye,mergedSize:S,handleScroll:De,handleTabsResize:Se,cssVars:i?void 0:X,themeClass:Ae?.themeClass,animationDirection:B,renderNameListRef:z,yScrollElRef:v,handleSegmentResize:ke,onAnimationBeforeLeave:oe,onAnimationEnter:L,onAnimationAfterEnter:se,onRender:Ae?.onRender,startReachedRef:y,endReachedRef:b,isOverflow:Te,handleButtonClick:V,mergedTheme:l,rtlEnabled:s,mergedPlacement:c,...Oe}},render(){let{mergedClsPrefix:e,type:t,mergedPlacement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,startReachedRef:u,endReachedRef:d,isOverflow:f,showScrollButton:p,handleButtonClick:m,mergedTheme:h,rtlEnabled:g,$slots:{default:_,prefix:v,suffix:y}}=this;s?.();let b=_?te(_()).filter(e=>e.type.__TAB_PANE__===!0):[],x=_?te(_()).filter(e=>e.type.__TAB__===!0):[],S=!x.length,C=t===`card`,w=t===`segment`,E=!C&&!w&&this.justifyContent;o.value=[];let D=()=>{let t=(B(),X(`div`,{style:z(this.tabWrapperStyle),class:P(`${e}-tabs-wrapper`)},[E?V(()=>null):(B(),X(`div`,{key:1,class:P(`${e}-tabs-scroll-padding`),style:z(n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),S?(B(),X(T,{key:2},[V(()=>b.map((e,t)=>(o.value.push(e.props.name),ft((B(),H(rt,Se(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!E||E===`center`||E===`start`||E===`end`)}),fe(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(B(),X(T,{key:3},[V(()=>x.map((e,t)=>(o.value.push(e.props.name),ft(t!==0&&!E?dt(e):e))))],64)),!r&&i&&C?(B(),X(T,{key:4},[V(()=>ut(i,(S?b.length:x.length)!==0))],64)):V(()=>null),E?V(()=>null):(B(),X(`div`,{key:7,class:P(`${e}-tabs-scroll-padding`),style:z({width:`${this.tabsPadding}px`})},null,6)),C?V(()=>null):(B(),X(`div`,{key:9,ref:`barElRef`,class:P(`${e}-tabs-bar`)},null,2))],6));return B(),X(`div`,{ref:`tabsElRef`,class:P(`${e}-tabs-nav-scroll-content`)},[C&&i?(B(),H(Ae,{key:0,onResize:this.handleTabsResize},{default:()=>t},1032,[`onResize`])):(B(),X(T,{key:1},[V(()=>t)],64)),C?(B(),X(`div`,{key:2,class:P(`${e}-tabs-pad`)},null,2)):V(()=>null)],2)},O=w?`top`:n;return B(),X(`div`,{ref:`selfElRef`,class:P([`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,E&&`${e}-tabs--flex`,`${e}-tabs--${O}`,g&&`${e}-tabs--rtl`]),style:z(this.cssVars)},[G(`div`,{class:P([`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${O}`,`${e}-tabs-nav`])},[V(()=>U(v,t=>t&&(B(),X(`div`,{class:P(`${e}-tabs-nav__prefix`)},[V(()=>t)],2)))),w?(B(),H(Ae,{key:0,onResize:this.handleSegmentResize},{default:()=>(B(),X(`div`,{class:P(`${e}-tabs-rail`),ref:`tabsElRef`},[G(`div`,{class:P(`${e}-tabs-capsule`),ref:`segmentCapsuleElRef`},[G(`div`,{class:P(`${e}-tabs-wrapper`)},[G(`div`,{class:P(`${e}-tabs-tab`)},null,2)],2)],2),S?(B(),X(T,{key:0},[V(()=>b.map((e,t)=>(o.value.push(e.props.name),B(),H(rt,Se(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),fe(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(B(),X(T,{key:1},[V(()=>x.map((e,t)=>(o.value.push(e.props.name),t===0?e:dt(e))))],64))],2))},1032,[`onResize`])):(B(),X(T,{key:1},[V(()=>p&&f&&(B(),H(at,{mergedClsPrefix:e,type:`prev`,vertical:O===`left`||O===`right`,disabled:u,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(B(),H(Ae,{onResize:this.handleNavResize},{default:()=>(B(),X(`div`,{class:P(`${e}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(O)?(B(),H(Ye,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:D},1032,[`onScroll`])):(B(),X(`div`,{key:1,class:P(`${e}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[V(()=>D())],42,[`onScroll`]))],2))},1032,[`onResize`])),V(()=>p&&f&&(B(),H(at,{mergedClsPrefix:e,type:`next`,vertical:O===`left`||O===`right`,disabled:d,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),r&&i&&C?(B(),X(T,{key:2},[V(()=>ut(i,!0))],64)):V(()=>null),V(()=>U(y,t=>t&&(B(),X(`div`,{class:P(`${e}-tabs-nav__suffix`)},[V(()=>t)],2))))],2),V(()=>S&&(this.animated&&(O===`top`||O===`bottom`)?(B(),X(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:z(l),class:P([`${e}-tabs-pane-wrapper`,c])},[V(()=>lt(b,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):lt(b,this.mergedValue,this.renderedNames)))],6)}});function lt(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?K(e,[[pe,c]]):e)}}),o?(B(),H(De,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):s}function ut(e,t){return B(),H(rt,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled},null,8,[`internalLeftPadded`,`disabled`])}function dt(e){let t=we(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function ft(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var pt=n(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),mt=n(`plug`,[[`path`,{d:`M12 22v-5`,key:`1ega77`}],[`path`,{d:`M15 8V2`,key:`18g5xt`}],[`path`,{d:`M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z`,key:`1xoxul`}],[`path`,{d:`M9 8V2`,key:`14iosj`}]]),ht={class:`skill-manager`},gt={class:`sm-head`},_t={class:`sm-title`},vt={class:`muted sm-count`},yt={class:`sm-actions`},bt={class:`sm-cats`},xt={class:`sm-body`},St={class:`group-title`},Ct={class:`muted`},wt={class:`sm-grid`},Tt={class:`card-head`},Et={class:`card-name`},Dt={class:`card-desc`},Ot={class:`card-tools`},kt={key:0,class:`muted tiny`},At={class:`card-foot`},jt=Z({__name:`SkillManager`,props:{skills:{}},emits:[`toggle`,`remove`,`reload`,`add`],setup(e){let n=e,r=[`系统`,`文件`,`代码`,`网络`,`数学`,`通用`,`其他`],i=R(``),a=R(`全部`),s=Y(()=>{let e=i.value.trim().toLowerCase(),t=t=>!e||t.name.toLowerCase().includes(e)||(t.description||``).toLowerCase().includes(e)||(t.tools||[]).some(t=>t.toLowerCase().includes(e)),a=new Map;for(let e of n.skills){if(!t(e))continue;let n=e.category||`其他`;a.has(n)||a.set(n,[]),a.get(n).push(e)}let o=Array.from(a.entries()).map(([e,t])=>({category:e,list:t}));return o.sort((e,t)=>{let n=r.indexOf(e.category),i=r.indexOf(t.category);return(n===-1?99:n)-(i===-1?99:i)}),o}),c=Y(()=>[`全部`,...s.value.map(e=>e.category)]),l=Y(()=>a.value===`全部`?s.value:s.value.filter(e=>e.category===a.value)),u=Y(()=>n.skills.filter(e=>e.enabled).length);return(n,r)=>(B(),X(`div`,ht,[G(`div`,gt,[G(`div`,_t,[q(M(Le),{size:20}),r[3]||=G(`h2`,null,`技能管理`,-1),G(`span`,vt,$(u.value)+` / `+$(e.skills.length)+` 已启用`,1)]),G(`div`,yt,[q(M(t),{value:i.value,"onUpdate:value":r[0]||=e=>i.value=e,class:`sm-search`,placeholder:`搜索技能 / 工具…`,clearable:``},{prefix:D(()=>[q(M(S),{component:M(ze)},null,8,[`component`])]),_:1},8,[`value`]),q(M(L),{onClick:r[1]||=e=>n.$emit(`reload`)},{icon:D(()=>[q(M(Re),{size:15})]),default:D(()=>[r[4]||=W(` 重载 `,-1)]),_:1}),q(M(L),{type:`primary`,onClick:r[2]||=e=>n.$emit(`add`)},{icon:D(()=>[q(M(v),{size:15})]),default:D(()=>[r[5]||=W(` 新建技能 `,-1)]),_:1})])]),G(`div`,bt,[(B(!0),X(T,null,Ne(c.value,e=>(B(),H(M(f),{key:e,class:`cat-chip`,type:a.value===e?`primary`:`default`,bordered:!1,checkable:``,checked:a.value===e,"onUpdate:checked":t=>a.value=e},{default:D(()=>[W($(e),1)]),_:2},1032,[`type`,`checked`,`onUpdate:checked`]))),128))]),G(`div`,xt,[l.value.length?J(``,!0):(B(),H(M(o),{key:0,class:`sm-empty`,description:`没有匹配的技能`})),(B(!0),X(T,null,Ne(l.value,e=>(B(),X(`section`,{key:e.category,class:`sm-group`},[G(`h4`,St,[W($(e.category)+` `,1),G(`span`,Ct,`· `+$(e.list.length),1)]),G(`div`,wt,[(B(!0),X(T,null,Ne(e.list,e=>(B(),H(M(I),{key:e.id,class:ie([`skill-card`,{off:!e.enabled}]),size:`small`},{default:D(()=>[G(`div`,Tt,[G(`div`,Et,[q(M(Ie),{size:15}),G(`b`,null,$(e.name),1),q(M(f),{size:`small`,bordered:!1,type:e.builtin?`default`:`info`},{default:D(()=>[W($(e.builtin?`内置`:`自定义`),1)]),_:2},1032,[`type`])]),q(M(w),{value:e.enabled,size:`small`,"onUpdate:value":t=>n.$emit(`toggle`,e)},null,8,[`value`,`onUpdate:value`])]),G(`p`,Dt,$(e.description||`（无描述）`),1),G(`div`,Ot,[(B(!0),X(T,null,Ne(e.tools||[],e=>(B(),H(M(f),{key:e,size:`small`,bordered:!1,class:`tool-chip`},{default:D(()=>[W($(e),1)]),_:2},1024))),128)),!e.tools||!e.tools.length?(B(),X(`span`,kt,`无工具`)):J(``,!0)]),G(`div`,At,[G(`span`,{class:ie([`state`,e.enabled?`on`:`off`])},$(e.enabled?`已启用`:`已禁用`),3),e.builtin?J(``,!0):(B(),H(M(L),{key:0,quaternary:``,circle:``,size:`tiny`,title:`删除技能`,type:`error`,onClick:t=>n.$emit(`remove`,e.id)},{icon:D(()=>[q(M(Be),{size:14})]),_:1},8,[`onClick`]))])]),_:2},1032,[`class`]))),128))])]))),128))])]))}}),Mt={class:`modal-actions`},Nt=Z({__name:`SkillModal`,props:{open:{type:Boolean}},emits:[`close`,`submit`],setup(e,{emit:n}){let r=e,i=n,a=ye(),o=oe({name:``,description:``,code:``}),s=R(!1);ce(()=>r.open,e=>{e&&(o.name=``,o.description=``,o.code=``,s.value=!1)});function c(){if(!o.code.trim()){a.warning(`代码不能为空`);return}s.value=!0,i(`submit`,{...o})}return(n,r)=>(B(),H(M(_e),{show:e.open,"onUpdate:show":r[4]||=e=>i(`close`)},{default:D(()=>[q(M(I),{class:`modal-card modal-w-md`,title:`新建自定义技能`,bordered:!1,size:`medium`},{footer:D(()=>[G(`div`,Mt,[q(M(L),{onClick:r[3]||=e=>i(`close`)},{default:D(()=>[...r[5]||=[W(`取消`,-1)]]),_:1}),q(M(L),{type:`primary`,loading:s.value,onClick:c},{default:D(()=>[...r[6]||=[W(`创建`,-1)]]),_:1},8,[`loading`])])]),default:D(()=>[q(M(y),{"label-placement":`top`,"show-feedback":!1},{default:D(()=>[q(M(b),{label:`名称`},{default:D(()=>[q(M(t),{value:o.name,"onUpdate:value":r[0]||=e=>o.name=e,placeholder:`我的技能`},null,8,[`value`])]),_:1}),q(M(b),{label:`描述`},{default:D(()=>[q(M(t),{value:o.description,"onUpdate:value":r[1]||=e=>o.description=e,placeholder:`这个技能做什么`},null,8,[`value`])]),_:1}),q(M(b),{label:`代码（用 @tool 装饰函数，可定义 META 元信息）`},{default:D(()=>[q(M(t),{value:o.code,"onUpdate:value":r[2]||=e=>o.code=e,type:`textarea`,autosize:{minRows:10,maxRows:20},placeholder:`用 @tool 装饰定义一个工具函数`},null,8,[`value`])]),_:1})]),_:1})]),_:1})]),_:1},8,[`show`]))}}),Pt={class:`page`},Ft={class:`page-head`},It={class:`page-title`},Lt={class:`page-body page-body-flush experts-body`},Rt={class:`tab-label`},zt={class:`tab-label`},Bt={key:0,class:`grid-cards`},Vt={key:2,class:`grid-cards`},Ht={class:`card-head`},Ut={class:`card-name`},Wt={class:`card-desc card-desc-flat`},Gt=Z({__name:`Experts`,setup(e){let t=ye(),n=R(`skills`),r=R(!1),i=[{name:`工作目录`,desc:`读写当前会话隔离目录下的文件`,ready:!0},{name:`Shell 执行`,desc:`在沙箱内执行命令并返回输出`,ready:!0},{name:`Web 检索`,desc:`联网搜索与抓取页面内容`,ready:!0},{name:`计算器`,desc:`安全的数学表达式求值`,ready:!0},{name:`腾讯文档`,desc:`读取与写入腾讯文档（需授权）`,ready:!1},{name:`GitHub`,desc:`仓库、Issue 与 PR 操作（需授权）`,ready:!1}];async function a(e){let n=await u(e);n.ok?(r.value=!1,t.success(`技能创建成功`)):t.error(`创建失败: `+(n.error||`未知错误`))}let m=Te(),h=R(!0);return he(async()=>{await d(),h.value=!1,m.query.new===`1`&&(r.value=!0)}),(e,t)=>(B(),X(`div`,Pt,[G(`div`,Ft,[G(`div`,It,[q(M(Le),{size:20}),t[3]||=G(`h1`,null,`专家 · 技能 · 连接器`,-1)])]),G(`div`,Lt,[q(M(ct),{value:n.value,"onUpdate:value":t[0]||=e=>n.value=e,type:`line`,size:`medium`,class:`experts-tabs`},{default:D(()=>[q(M(et),{name:`skills`},{tab:D(()=>[G(`span`,Rt,[q(M(Le),{size:15}),t[4]||=W(` 技能`,-1)])]),_:1}),q(M(et),{name:`connectors`},{tab:D(()=>[G(`span`,zt,[q(M(mt),{size:15}),t[5]||=W(` 连接器`,-1)])]),_:1})]),_:1},8,[`value`]),n.value===`skills`&&h.value?(B(),X(`div`,Bt,[(B(),X(T,null,Ne(4,e=>q(M(I),{key:`sk`+e,size:`small`},{default:D(()=>[q(M(C),{text:``,width:`42%`,class:`sk-title`}),q(M(C),{text:``,repeat:2})]),_:1})),64))])):n.value===`skills`?(B(),H(jt,{key:1,skills:M(s).skills,onToggle:M(p),onRemove:M(l),onReload:M(c),onAdd:t[1]||=e=>r.value=!0},null,8,[`skills`,`onToggle`,`onRemove`,`onReload`])):(B(),X(`div`,Vt,[(B(),X(T,null,Ne(i,e=>q(M(I),{key:e.name,size:`small`},{default:D(()=>[G(`div`,Ht,[G(`div`,Ut,[q(M(Fe),{size:15}),G(`b`,null,$(e.name),1)]),q(M(f),{size:`small`,bordered:!1,type:e.ready?`success`:`default`},{icon:D(()=>[(B(),H(ne(e.ready?M(pt):M(Ve)),{size:12}))]),default:D(()=>[W(` `+$(e.ready?`已就绪`:`未接入`),1)]),_:2},1032,[`type`])]),G(`p`,Wt,$(e.desc),1)]),_:2},1024)),64)),i.length?J(``,!0):(B(),H(M(o),{key:0,class:`page-empty`,description:`暂无连接器`}))]))]),q(Nt,{open:r.value,onClose:t[2]||=e=>r.value=!1,onSubmit:a},null,8,[`open`])]))}});export{Gt as default};