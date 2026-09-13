import{t as e}from"./createLucideIcon-CRS-aC7q.js";import{B as t,Dt as n,G as r,Gt as i,H as a,Hn as o,Ot as s,Pr as c,Pt as l,Rn as u,Rt as d,Sr as f,U as p,V as m,Vn as h,Vt as g,W as _,Wn as v,ar as y,cr as b,dr as x,dt as S,hr as C,ir as w,kt as T,lt as E,or as D,q as O,st as k,z as A,zn as j}from"./index-C_M67W1L.js";var M=j(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[h(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),o(`closable`,[j(`alert-body`,[h(`title`,`
 padding-right: 24px;
 `)])]),h(`icon`,{color:`var(--n-icon-color)`}),j(`alert-body`,{padding:`var(--n-padding)`},[h(`title`,{color:`var(--n-title-text-color)`}),h(`content`,{color:`var(--n-content-text-color)`})]),A({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),h(`icon`,`
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
 `),h(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),o(`show-icon`,[j(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),o(`right-adjust`,[j(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),j(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[h(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[u(`& +`,[h(`content`,{marginTop:`9px`})])]),h(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),h(`icon`,{transition:`color .3s var(--n-bezier)`})]),N={...s.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},P=x({name:`Alert`,inheritAttrs:!1,props:N,slots:Object,setup(e){let{mergedClsPrefixRef:n,mergedBorderedRef:r,inlineThemeDisabled:a,mergedRtlRef:o}=i(e),u=s(`Alert`,`-alert`,M,t,e,n),d=k(`Alert`,o,n),f=w(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=u.value,{fontSize:r,borderRadius:i,titleFontWeight:a,lineHeight:o,iconSize:s,iconMargin:c,iconMarginRtl:d,closeIconSize:f,closeBorderRadius:p,closeSize:m,closeMargin:h,closeMarginRtl:g,padding:_}=n,{type:y}=e,{left:b,right:x}=l(c);return{"--n-bezier":t,"--n-color":n[v(`color`,y)],"--n-close-icon-size":f,"--n-close-border-radius":p,"--n-close-color-hover":n[v(`closeColorHover`,y)],"--n-close-color-pressed":n[v(`closeColorPressed`,y)],"--n-close-icon-color":n[v(`closeIconColor`,y)],"--n-close-icon-color-hover":n[v(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":n[v(`closeIconColorPressed`,y)],"--n-icon-color":n[v(`iconColor`,y)],"--n-border":n[v(`border`,y)],"--n-title-text-color":n[v(`titleTextColor`,y)],"--n-content-text-color":n[v(`contentTextColor`,y)],"--n-line-height":o,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":a,"--n-icon-size":s,"--n-icon-margin":c,"--n-icon-margin-rtl":d,"--n-close-size":m,"--n-close-margin":h,"--n-close-margin-rtl":g,"--n-padding":_,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),p=a?T(`alert`,w(()=>e.type[0]),f,e):void 0,m=c(!0),h=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:d,mergedClsPrefix:n,mergedBordered:r,visible:m,handleCloseClick:()=>{Promise.resolve(e.onClose?.()).then(e=>{e!==!1&&(m.value=!1)})},handleAfterLeave:()=>{h()},mergedTheme:u,cssVars:a?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender}},render(){return this.onRender?.(),f(),D(m,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,i={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(f(),b(`div`,C({key:1},C(this.$attrs,i)),[g(()=>this.closable&&(f(),D(O,{clsPrefix:e,class:d(`${e}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),g(()=>this.bordered&&(f(),b(`div`,{class:d(`${e}-alert__border`)},null,2))),g(()=>this.showIcon&&(f(),b(`div`,{class:d(`${e}-alert__icon`),"aria-hidden":`true`},[g(()=>E(t.icon,()=>[(f(),D(n,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return f(),D(p,{key:3});case`info`:return f(),D(_,{key:4});case`warning`:return f(),D(a,{key:5});case`error`:return f(),D(r,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),y(`div`,{class:d([`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`])},[g(()=>S(t.header,t=>{let n=t||this.title;return n?(f(),b(`div`,{key:2,class:d(`${e}-alert-body__title`)},[g(()=>n)],2)):null})),g(()=>t.default&&(f(),b(`div`,{class:d(`${e}-alert-body__content`)},[g(()=>t.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}}),F=e(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]);export{P as n,F as t};