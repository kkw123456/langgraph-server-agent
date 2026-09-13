import{t as e}from"./createLucideIcon-BVttscYv.js";import{An as t,B as n,Dn as r,Dt as i,G as a,Gn as o,Gt as s,H as c,On as l,Ot as u,Pt as d,Rt as f,Tn as p,U as m,Un as h,V as g,Vt as _,W as v,Wn as y,Xn as b,dt as x,er as S,kt as C,lt as w,q as T,qn as E,sr as D,st as O,wn as k,yr as A,z as j}from"./index-4ZsUaYAJ.js";var M=p(`alert`,`
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
 `),l(`closable`,[p(`alert-body`,[r(`title`,`
 padding-right: 24px;
 `)])]),r(`icon`,{color:`var(--n-icon-color)`}),p(`alert-body`,{padding:`var(--n-padding)`},[r(`title`,{color:`var(--n-title-text-color)`}),r(`content`,{color:`var(--n-content-text-color)`})]),j({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),r(`icon`,`
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
 `),l(`show-icon`,[p(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),l(`right-adjust`,[p(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),p(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[r(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[k(`& +`,[r(`content`,{marginTop:`9px`})])]),r(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),r(`icon`,{transition:`color .3s var(--n-bezier)`})]),N={...u.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},P=b({name:`Alert`,inheritAttrs:!1,props:N,slots:Object,setup(e){let{mergedClsPrefixRef:r,mergedBorderedRef:i,inlineThemeDisabled:a,mergedRtlRef:o}=s(e),c=u(`Alert`,`-alert`,M,n,e,r),l=O(`Alert`,o,r),f=h(()=>{let{common:{cubicBezierEaseInOut:n},self:r}=c.value,{fontSize:i,borderRadius:a,titleFontWeight:o,lineHeight:s,iconSize:l,iconMargin:u,iconMarginRtl:f,closeIconSize:p,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=r,{type:y}=e,{left:b,right:x}=d(u);return{"--n-bezier":n,"--n-color":r[t(`color`,y)],"--n-close-icon-size":p,"--n-close-border-radius":m,"--n-close-color-hover":r[t(`closeColorHover`,y)],"--n-close-color-pressed":r[t(`closeColorPressed`,y)],"--n-close-icon-color":r[t(`closeIconColor`,y)],"--n-close-icon-color-hover":r[t(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":r[t(`closeIconColorPressed`,y)],"--n-icon-color":r[t(`iconColor`,y)],"--n-border":r[t(`border`,y)],"--n-title-text-color":r[t(`titleTextColor`,y)],"--n-content-text-color":r[t(`contentTextColor`,y)],"--n-line-height":s,"--n-border-radius":a,"--n-font-size":i,"--n-title-font-weight":o,"--n-icon-size":l,"--n-icon-margin":u,"--n-icon-margin-rtl":f,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),p=a?C(`alert`,h(()=>e.type[0]),f,e):void 0,m=A(!0),g=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:l,mergedClsPrefix:r,mergedBordered:i,visible:m,handleCloseClick:()=>{Promise.resolve(e.onClose?.()).then(e=>{e!==!1&&(m.value=!1)})},handleAfterLeave:()=>{g()},mergedTheme:c,cssVars:a?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender}},render(){return this.onRender?.(),D(),o(g,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,n={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(D(),E(`div`,S({key:1},S(this.$attrs,n)),[_(()=>this.closable&&(D(),o(T,{clsPrefix:e,class:f(`${e}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),_(()=>this.bordered&&(D(),E(`div`,{class:f(`${e}-alert__border`)},null,2))),_(()=>this.showIcon&&(D(),E(`div`,{class:f(`${e}-alert__icon`),"aria-hidden":`true`},[_(()=>w(t.icon,()=>[(D(),o(i,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return D(),o(m,{key:3});case`info`:return D(),o(v,{key:4});case`warning`:return D(),o(c,{key:5});case`error`:return D(),o(a,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),y(`div`,{class:f([`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`])},[_(()=>x(t.header,t=>{let n=t||this.title;return n?(D(),E(`div`,{key:2,class:f(`${e}-alert-body__title`)},[_(()=>n)],2)):null})),_(()=>t.default&&(D(),E(`div`,{class:f(`${e}-alert-body__content`)},[_(()=>t.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}}),F=e(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]);export{P as n,F as t};