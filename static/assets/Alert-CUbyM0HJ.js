import{At as e,B as t,Bn as n,Ft as r,G as i,Gn as a,H as o,Hn as s,Ht as c,Kt as l,Pr as u,Sr as d,U as f,Un as p,V as m,W as h,ar as g,cr as _,dr as v,dt as y,hr as b,ir as x,jt as S,kt as C,lt as w,or as T,q as E,st as D,z as O,zn as k,zt as A}from"./index-BCIasUWA.js";var j=n(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[s(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),p(`closable`,[n(`alert-body`,[s(`title`,`
 padding-right: 24px;
 `)])]),s(`icon`,{color:`var(--n-icon-color)`}),n(`alert-body`,{padding:`var(--n-padding)`},[s(`title`,{color:`var(--n-title-text-color)`}),s(`content`,{color:`var(--n-content-text-color)`})]),O({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),s(`icon`,`
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
 `),s(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),p(`show-icon`,[n(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),p(`right-adjust`,[n(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),n(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[s(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[k(`& +`,[s(`content`,{marginTop:`9px`})])]),s(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),s(`icon`,{transition:`color .3s var(--n-bezier)`})]),M={...e.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},N=v({name:`Alert`,inheritAttrs:!1,props:M,slots:Object,setup(n){let{mergedClsPrefixRef:i,mergedBorderedRef:o,inlineThemeDisabled:s,mergedRtlRef:c}=l(n),d=e(`Alert`,`-alert`,j,t,n,i),f=D(`Alert`,c,i),p=x(()=>{let{common:{cubicBezierEaseInOut:e},self:t}=d.value,{fontSize:i,borderRadius:o,titleFontWeight:s,lineHeight:c,iconSize:l,iconMargin:u,iconMarginRtl:f,closeIconSize:p,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=t,{type:y}=n,{left:b,right:x}=r(u);return{"--n-bezier":e,"--n-color":t[a(`color`,y)],"--n-close-icon-size":p,"--n-close-border-radius":m,"--n-close-color-hover":t[a(`closeColorHover`,y)],"--n-close-color-pressed":t[a(`closeColorPressed`,y)],"--n-close-icon-color":t[a(`closeIconColor`,y)],"--n-close-icon-color-hover":t[a(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":t[a(`closeIconColorPressed`,y)],"--n-icon-color":t[a(`iconColor`,y)],"--n-border":t[a(`border`,y)],"--n-title-text-color":t[a(`titleTextColor`,y)],"--n-content-text-color":t[a(`contentTextColor`,y)],"--n-line-height":c,"--n-border-radius":o,"--n-font-size":i,"--n-title-font-weight":s,"--n-icon-size":l,"--n-icon-margin":u,"--n-icon-margin-rtl":f,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),m=s?S(`alert`,x(()=>n.type[0]),p,n):void 0,h=u(!0),g=()=>{let{onAfterLeave:e,onAfterHide:t}=n;e&&e(),t&&t()};return{rtlEnabled:f,mergedClsPrefix:i,mergedBordered:o,visible:h,handleCloseClick:()=>{Promise.resolve(n.onClose?.()).then(e=>{e!==!1&&(h.value=!1)})},handleAfterLeave:()=>{g()},mergedTheme:d,cssVars:s?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender}},render(){return this.onRender?.(),d(),T(m,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,n={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(d(),_(`div`,b({key:1},b(this.$attrs,n)),[c(()=>this.closable&&(d(),T(E,{clsPrefix:e,class:A(`${e}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),c(()=>this.bordered&&(d(),_(`div`,{class:A(`${e}-alert__border`)},null,2))),c(()=>this.showIcon&&(d(),_(`div`,{class:A(`${e}-alert__icon`),"aria-hidden":`true`},[c(()=>w(t.icon,()=>[(d(),T(C,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return d(),T(f,{key:3});case`info`:return d(),T(h,{key:4});case`warning`:return d(),T(o,{key:5});case`error`:return d(),T(i,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),g(`div`,{class:A([`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`])},[c(()=>y(t.header,t=>{let n=t||this.title;return n?(d(),_(`div`,{key:2,class:A(`${e}-alert-body__title`)},[c(()=>n)],2)):null})),c(()=>t.default&&(d(),_(`div`,{class:A(`${e}-alert-body__content`)},[c(()=>t.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}});export{N as t};