import{At as e,B as t,Gt as n,H as r,Hn as i,K as a,Nr as o,Ot as s,Pt as c,R as l,Rn as u,Rt as d,U as f,V as p,Vn as m,Vt as h,W as g,Wn as _,ar as v,ct as y,ir as b,kt as x,mr as S,ot as C,rr as w,sr as T,ur as E,ut as D,xr as O,z as k,zn as A}from"./index-C2tisXHj.js";var j=A(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[m(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),i(`closable`,[A(`alert-body`,[m(`title`,`
 padding-right: 24px;
 `)])]),m(`icon`,{color:`var(--n-icon-color)`}),A(`alert-body`,{padding:`var(--n-padding)`},[m(`title`,{color:`var(--n-title-text-color)`}),m(`content`,{color:`var(--n-content-text-color)`})]),l({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),m(`icon`,`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),m(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),i(`show-icon`,[A(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),i(`right-adjust`,[A(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),A(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[m(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[u(`& +`,[m(`content`,{marginTop:`9px`})])]),m(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),m(`icon`,{transition:`color .3s var(--n-bezier)`})]),M={...x.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},N=E({name:`Alert`,inheritAttrs:!1,props:M,slots:Object,setup(t){let{mergedClsPrefixRef:r,mergedBorderedRef:i,inlineThemeDisabled:a,mergedRtlRef:s}=n(t),l=x(`Alert`,`-alert`,j,k,t,r),u=C(`Alert`,s,r),d=w(()=>{let{common:{cubicBezierEaseInOut:e},self:n}=l.value,{fontSize:r,borderRadius:i,titleFontWeight:a,lineHeight:o,iconSize:s,iconMargin:u,iconMarginRtl:d,closeIconSize:f,closeBorderRadius:p,closeSize:m,closeMargin:h,closeMarginRtl:g,padding:v}=n,{type:y}=t,{left:b,right:x}=c(u);return{"--n-bezier":e,"--n-color":n[_(`color`,y)],"--n-close-icon-size":f,"--n-close-border-radius":p,"--n-close-color-hover":n[_(`closeColorHover`,y)],"--n-close-color-pressed":n[_(`closeColorPressed`,y)],"--n-close-icon-color":n[_(`closeIconColor`,y)],"--n-close-icon-color-hover":n[_(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":n[_(`closeIconColorPressed`,y)],"--n-icon-color":n[_(`iconColor`,y)],"--n-border":n[_(`border`,y)],"--n-title-text-color":n[_(`titleTextColor`,y)],"--n-content-text-color":n[_(`contentTextColor`,y)],"--n-line-height":o,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":a,"--n-icon-size":s,"--n-icon-margin":u,"--n-icon-margin-rtl":d,"--n-close-size":m,"--n-close-margin":h,"--n-close-margin-rtl":g,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),f=a?e(`alert`,w(()=>t.type[0]),d,t):void 0,p=o(!0),m=()=>{let{onAfterLeave:e,onAfterHide:n}=t;e&&e(),n&&n()};return{rtlEnabled:u,mergedClsPrefix:r,mergedBordered:i,visible:p,handleCloseClick:()=>{Promise.resolve(t.onClose?.()).then(e=>{e!==!1&&(p.value=!1)})},handleAfterLeave:()=>{m()},mergedTheme:l,cssVars:a?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){return this.onRender?.(),O(),v(t,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,n={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(O(),T(`div`,S({key:1},S(this.$attrs,n)),[h(()=>this.closable&&(O(),v(a,{clsPrefix:e,class:d(`${e}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),h(()=>this.bordered&&(O(),T(`div`,{class:d(`${e}-alert__border`)},null,2))),h(()=>this.showIcon&&(O(),T(`div`,{class:d(`${e}-alert__icon`),"aria-hidden":`true`},[h(()=>y(t.icon,()=>[(O(),v(s,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return O(),v(r,{key:3});case`info`:return O(),v(f,{key:4});case`warning`:return O(),v(p,{key:5});case`error`:return O(),v(g,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),b(`div`,{class:d([`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`])},[h(()=>D(t.header,t=>{let n=t||this.title;return n?(O(),T(`div`,{key:2,class:d(`${e}-alert-body__title`)},[h(()=>n)],2)):null})),h(()=>t.default&&(O(),T(`div`,{class:d(`${e}-alert-body__content`)},[h(()=>t.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}});export{N as t};