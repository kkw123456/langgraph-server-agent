import{t as e}from"./createLucideIcon-CaCBVfAm.js";import{An as t,B as n,Dn as r,Dt as i,G as a,Gn as o,Gt as s,H as c,Jn as l,Kn as u,On as d,Ot as f,Pt as p,Rt as m,Tn as h,U as g,V as _,Vt as v,W as y,Wn as b,Zn as x,br as S,cr as C,dt as w,kt as T,lt as E,q as D,st as O,tr as k,wn as A,z as j}from"./index-CRZeUnv2.js";var M=h(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[r(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),d(`closable`,[h(`alert-body`,[r(`title`,`
 padding-right: 24px;
 `)])]),r(`icon`,{color:`var(--n-icon-color)`}),h(`alert-body`,{padding:`var(--n-padding)`},[r(`title`,{color:`var(--n-title-text-color)`}),r(`content`,{color:`var(--n-content-text-color)`})]),j({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),r(`icon`,`
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
 `),r(`close`,`
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
 `,[r(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[A(`& +`,[r(`content`,{marginTop:`9px`})])]),r(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),r(`icon`,{transition:`color .3s var(--n-bezier)`})]),N={...f.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},P=x({name:`Alert`,inheritAttrs:!1,props:N,slots:Object,setup(e){let{mergedClsPrefixRef:r,mergedBorderedRef:i,inlineThemeDisabled:a,mergedRtlRef:o}=s(e),c=f(`Alert`,`-alert`,M,n,e,r),l=O(`Alert`,o,r),u=b(()=>{let{common:{cubicBezierEaseInOut:n},self:r}=c.value,{fontSize:i,borderRadius:a,titleFontWeight:o,lineHeight:s,iconSize:l,iconMargin:u,iconMarginRtl:d,closeIconSize:f,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=r,{type:y}=e,{left:b,right:x}=p(u);return{"--n-bezier":n,"--n-color":r[t(`color`,y)],"--n-close-icon-size":f,"--n-close-border-radius":m,"--n-close-color-hover":r[t(`closeColorHover`,y)],"--n-close-color-pressed":r[t(`closeColorPressed`,y)],"--n-close-icon-color":r[t(`closeIconColor`,y)],"--n-close-icon-color-hover":r[t(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":r[t(`closeIconColorPressed`,y)],"--n-icon-color":r[t(`iconColor`,y)],"--n-border":r[t(`border`,y)],"--n-title-text-color":r[t(`titleTextColor`,y)],"--n-content-text-color":r[t(`contentTextColor`,y)],"--n-line-height":s,"--n-border-radius":a,"--n-font-size":i,"--n-title-font-weight":o,"--n-icon-size":l,"--n-icon-margin":u,"--n-icon-margin-rtl":d,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),d=a?T(`alert`,b(()=>e.type[0]),u,e):void 0,m=S(!0),h=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:l,mergedClsPrefix:r,mergedBordered:i,visible:m,handleCloseClick:()=>{Promise.resolve(e.onClose?.()).then(e=>{e!==!1&&(m.value=!1)})},handleAfterLeave:()=>{h()},mergedTheme:c,cssVars:a?void 0:u,themeClass:d?.themeClass,onRender:d?.onRender}},render(){return this.onRender?.(),C(),u(_,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,n={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(C(),l(`div`,k({key:1},k(this.$attrs,n)),[v(()=>this.closable&&(C(),u(D,{clsPrefix:e,class:m(`${e}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),v(()=>this.bordered&&(C(),l(`div`,{class:m(`${e}-alert__border`)},null,2))),v(()=>this.showIcon&&(C(),l(`div`,{class:m(`${e}-alert__icon`),"aria-hidden":`true`},[v(()=>E(t.icon,()=>[(C(),u(i,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return C(),u(g,{key:3});case`info`:return C(),u(y,{key:4});case`warning`:return C(),u(c,{key:5});case`error`:return C(),u(a,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),o(`div`,{class:m([`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`])},[v(()=>w(t.header,t=>{let n=t||this.title;return n?(C(),l(`div`,{key:2,class:m(`${e}-alert-body__title`)},[v(()=>n)],2)):null})),v(()=>t.default&&(C(),l(`div`,{class:m(`${e}-alert-body__content`)},[v(()=>t.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}}),F=e(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]);export{P as n,F as t};