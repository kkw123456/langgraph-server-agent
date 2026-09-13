import{t as e}from"./createLucideIcon-BXmGfaRL.js";import{$n as t,An as n,B as r,Dn as i,Dt as a,G as o,Gt as s,H as c,Hn as l,Kn as u,On as d,Ot as f,Pt as p,Rt as m,Tn as h,U as g,Un as _,V as v,Vt as y,W as b,Wn as x,Yn as S,dt as C,kt as w,lt as T,or as E,q as D,st as O,vr as k,wn as A,z as j}from"./index-B-84Kufr.js";var M=h(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),d(`closable`,[h(`alert-body`,[i(`title`,`
 padding-right: 24px;
 `)])]),i(`icon`,{color:`var(--n-icon-color)`}),h(`alert-body`,{padding:`var(--n-padding)`},[i(`title`,{color:`var(--n-title-text-color)`}),i(`content`,{color:`var(--n-content-text-color)`})]),j({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),i(`icon`,`
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
 `),i(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),d(`show-icon`,[h(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),d(`right-adjust`,[h(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),h(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[A(`& +`,[i(`content`,{marginTop:`9px`})])]),i(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),i(`icon`,{transition:`color .3s var(--n-bezier)`})]),N={...f.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},P=S({name:`Alert`,inheritAttrs:!1,props:N,slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:i,inlineThemeDisabled:a,mergedRtlRef:o}=s(e),c=f(`Alert`,`-alert`,M,r,e,t),u=O(`Alert`,o,t),d=l(()=>{let{common:{cubicBezierEaseInOut:t},self:r}=c.value,{fontSize:i,borderRadius:a,titleFontWeight:o,lineHeight:s,iconSize:l,iconMargin:u,iconMarginRtl:d,closeIconSize:f,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=r,{type:y}=e,{left:b,right:x}=p(u);return{"--n-bezier":t,"--n-color":r[n(`color`,y)],"--n-close-icon-size":f,"--n-close-border-radius":m,"--n-close-color-hover":r[n(`closeColorHover`,y)],"--n-close-color-pressed":r[n(`closeColorPressed`,y)],"--n-close-icon-color":r[n(`closeIconColor`,y)],"--n-close-icon-color-hover":r[n(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":r[n(`closeIconColorPressed`,y)],"--n-icon-color":r[n(`iconColor`,y)],"--n-border":r[n(`border`,y)],"--n-title-text-color":r[n(`titleTextColor`,y)],"--n-content-text-color":r[n(`contentTextColor`,y)],"--n-line-height":s,"--n-border-radius":a,"--n-font-size":i,"--n-title-font-weight":o,"--n-icon-size":l,"--n-icon-margin":u,"--n-icon-margin-rtl":d,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),m=a?w(`alert`,l(()=>e.type[0]),d,e):void 0,h=k(!0),g=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:u,mergedClsPrefix:t,mergedBordered:i,visible:h,handleCloseClick:()=>{Promise.resolve(e.onClose?.()).then(e=>{e!==!1&&(h.value=!1)})},handleAfterLeave:()=>{g()},mergedTheme:c,cssVars:a?void 0:d,themeClass:m?.themeClass,onRender:m?.onRender}},render(){return this.onRender?.(),E(),x(v,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:n}=this,r={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(E(),u(`div`,t({key:1},t(this.$attrs,r)),[y(()=>this.closable&&(E(),x(D,{clsPrefix:e,class:m(`${e}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),y(()=>this.bordered&&(E(),u(`div`,{class:m(`${e}-alert__border`)},null,2))),y(()=>this.showIcon&&(E(),u(`div`,{class:m(`${e}-alert__icon`),"aria-hidden":`true`},[y(()=>T(n.icon,()=>[(E(),x(a,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return E(),x(g,{key:3});case`info`:return E(),x(b,{key:4});case`warning`:return E(),x(c,{key:5});case`error`:return E(),x(o,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),_(`div`,{class:m([`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`])},[y(()=>C(n.header,t=>{let n=t||this.title;return n?(E(),u(`div`,{key:2,class:m(`${e}-alert-body__title`)},[y(()=>n)],2)):null})),y(()=>n.default&&(E(),u(`div`,{class:m(`${e}-alert-body__content`)},[y(()=>n.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}}),F=e(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]);export{P as n,F as t};