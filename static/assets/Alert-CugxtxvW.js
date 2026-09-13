import{An as e,At as t,B as n,Bt as r,Dn as i,En as a,G as o,Gn as s,H as c,It as l,J as u,K as d,Kn as f,Mn as p,Mt as m,Qn as h,U as g,Ut as _,V as v,W as y,Yn as b,ct as x,ft as S,jt as C,kn as w,lr as T,nr as E,qn as D,qt as O,ut as k,xr as A}from"./index-DPMqRjBW.js";var j=i(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[w(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),e(`closable`,[i(`alert-body`,[w(`title`,`
 padding-right: 24px;
 `)])]),w(`icon`,{color:`var(--n-icon-color)`}),i(`alert-body`,{padding:`var(--n-padding)`},[w(`title`,{color:`var(--n-title-text-color)`}),w(`content`,{color:`var(--n-content-text-color)`})]),n({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),w(`icon`,`
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
 `),w(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),e(`show-icon`,[i(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),e(`right-adjust`,[i(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),i(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[w(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[a(`& +`,[w(`content`,{marginTop:`9px`})])]),w(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),w(`icon`,{transition:`color .3s var(--n-bezier)`})]),M={...C.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},N=h({name:`Alert`,inheritAttrs:!1,props:M,slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=O(e),a=C(`Alert`,`-alert`,j,v,e,t),o=x(`Alert`,i,t),c=s(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=a.value,{fontSize:r,borderRadius:i,titleFontWeight:o,lineHeight:s,iconSize:c,iconMargin:u,iconMarginRtl:d,closeIconSize:f,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=n,{type:y}=e,{left:b,right:x}=l(u);return{"--n-bezier":t,"--n-color":n[p(`color`,y)],"--n-close-icon-size":f,"--n-close-border-radius":m,"--n-close-color-hover":n[p(`closeColorHover`,y)],"--n-close-color-pressed":n[p(`closeColorPressed`,y)],"--n-close-icon-color":n[p(`closeIconColor`,y)],"--n-close-icon-color-hover":n[p(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":n[p(`closeIconColorPressed`,y)],"--n-icon-color":n[p(`iconColor`,y)],"--n-border":n[p(`border`,y)],"--n-title-text-color":n[p(`titleTextColor`,y)],"--n-content-text-color":n[p(`contentTextColor`,y)],"--n-line-height":s,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":o,"--n-icon-size":c,"--n-icon-margin":u,"--n-icon-margin-rtl":d,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),u=r?m(`alert`,s(()=>e.type[0]),c,e):void 0,d=A(!0),f=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:o,mergedClsPrefix:t,mergedBordered:n,visible:d,handleCloseClick:()=>{Promise.resolve(e.onClose?.()).then(e=>{e!==!1&&(d.value=!1)})},handleAfterLeave:()=>{f()},mergedTheme:a,cssVars:r?void 0:c,themeClass:u?.themeClass,onRender:u?.onRender}},render(){return this.onRender?.(),T(),D(c,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:n}=this,i={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(T(),b(`div`,E({key:1},E(this.$attrs,i)),[_(()=>this.closable&&(T(),D(u,{clsPrefix:e,class:r(`${e}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),_(()=>this.bordered&&(T(),b(`div`,{class:r(`${e}-alert__border`)},null,2))),_(()=>this.showIcon&&(T(),b(`div`,{class:r(`${e}-alert__icon`),"aria-hidden":`true`},[_(()=>k(n.icon,()=>[(T(),D(t,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return T(),D(y,{key:3});case`info`:return T(),D(o,{key:4});case`warning`:return T(),D(g,{key:5});case`error`:return T(),D(d,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),f(`div`,{class:r([`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`])},[_(()=>S(n.header,t=>{let n=t||this.title;return n?(T(),b(`div`,{key:2,class:r(`${e}-alert-body__title`)},[_(()=>n)],2)):null})),_(()=>n.default&&(T(),b(`div`,{class:r(`${e}-alert-body__content`)},[_(()=>n.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}});export{N as t};