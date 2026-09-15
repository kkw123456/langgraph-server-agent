import{$ as e,Bn as t,Hn as n,In as r,It as i,J as a,Jt as o,Ln as s,Lt as c,Pr as l,Q as u,Rt as d,Sr as f,Wt as p,X as m,Y as h,Z as g,Zt as _,ar as v,bt as y,gt as b,ir as x,mr as S,nn as C,q as w,rr as T,sr as E,tt as D,ur as O,vt as k,zn as A}from"./index-DBUzJGPl.js";var j=s(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[A(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),t(`closable`,[s(`alert-body`,[A(`title`,`
 padding-right: 24px;
 `)])]),A(`icon`,{color:`var(--n-icon-color)`}),s(`alert-body`,{padding:`var(--n-padding)`},[A(`title`,{color:`var(--n-title-text-color)`}),A(`content`,{color:`var(--n-content-text-color)`})]),w({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),A(`icon`,`
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
 `),A(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),t(`show-icon`,[s(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),t(`right-adjust`,[s(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),s(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[A(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[r(`& +`,[A(`content`,{marginTop:`9px`})])]),A(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),A(`icon`,{transition:`color .3s var(--n-bezier)`})]),M={...c.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},N=O({name:`Alert`,inheritAttrs:!1,props:M,slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:r,inlineThemeDisabled:i,mergedRtlRef:o}=C(e),s=c(`Alert`,`-alert`,j,a,e,t),u=b(`Alert`,o,t),f=T(()=>{let{common:{cubicBezierEaseInOut:t},self:r}=s.value,{fontSize:i,borderRadius:a,titleFontWeight:o,lineHeight:c,iconSize:l,iconMargin:u,iconMarginRtl:d,closeIconSize:f,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=r,{type:y}=e,{left:b,right:x}=p(u);return{"--n-bezier":t,"--n-color":r[n(`color`,y)],"--n-close-icon-size":f,"--n-close-border-radius":m,"--n-close-color-hover":r[n(`closeColorHover`,y)],"--n-close-color-pressed":r[n(`closeColorPressed`,y)],"--n-close-icon-color":r[n(`closeIconColor`,y)],"--n-close-icon-color-hover":r[n(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":r[n(`closeIconColorPressed`,y)],"--n-icon-color":r[n(`iconColor`,y)],"--n-border":r[n(`border`,y)],"--n-title-text-color":r[n(`titleTextColor`,y)],"--n-content-text-color":r[n(`contentTextColor`,y)],"--n-line-height":c,"--n-border-radius":a,"--n-font-size":i,"--n-title-font-weight":o,"--n-icon-size":l,"--n-icon-margin":u,"--n-icon-margin-rtl":d,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),m=i?d(`alert`,T(()=>e.type[0]),f,e):void 0,h=l(!0),g=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:u,mergedClsPrefix:t,mergedBordered:r,visible:h,handleCloseClick:()=>{Promise.resolve(e.onClose?.()).then(e=>{e!==!1&&(h.value=!1)})},handleAfterLeave:()=>{g()},mergedTheme:s,cssVars:i?void 0:f,themeClass:m?.themeClass,onRender:m?.onRender}},render(){return this.onRender?.(),f(),v(h,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:t,$slots:n}=this,r={class:[`${t}-alert`,this.themeClass,this.closable&&`${t}-alert--closable`,this.showIcon&&`${t}-alert--show-icon`,!this.title&&this.closable&&`${t}-alert--right-adjust`,this.rtlEnabled&&`${t}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(f(),E(`div`,S({key:1},S(this.$attrs,r)),[_(()=>this.closable&&(f(),v(D,{clsPrefix:t,class:o(`${t}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),_(()=>this.bordered&&(f(),E(`div`,{class:o(`${t}-alert__border`)},null,2))),_(()=>this.showIcon&&(f(),E(`div`,{class:o(`${t}-alert__icon`),"aria-hidden":`true`},[_(()=>k(n.icon,()=>[(f(),v(i,{clsPrefix:t},{default:()=>{switch(this.type){case`success`:return f(),v(g,{key:3});case`info`:return f(),v(u,{key:4});case`warning`:return f(),v(m,{key:5});case`error`:return f(),v(e,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),x(`div`,{class:o([`${t}-alert-body`,this.mergedBordered&&`${t}-alert-body--bordered`])},[_(()=>y(n.header,e=>{let n=e||this.title;return n?(f(),E(`div`,{key:2,class:o(`${t}-alert-body__title`)},[_(()=>n)],2)):null})),_(()=>n.default&&(f(),E(`div`,{class:o(`${t}-alert-body__content`)},[_(()=>n.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}});export{N as t};