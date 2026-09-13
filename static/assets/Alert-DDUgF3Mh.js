import{B as e,Bn as t,Cn as n,Dt as r,En as i,Et as a,H as o,Hn as s,It as c,K as l,Mt as u,On as d,Ot as f,R as p,Sn as m,Tn as h,U as g,Ut as _,V as v,Vn as y,W as b,Wn as x,Zn as S,ct as C,gr as w,ir as T,ot as E,qn as D,ut as O,z as k,zt as A}from"./index-CoXLYJFb.js";var j=n(`alert`,`
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
 `),i(`closable`,[n(`alert-body`,[h(`title`,`
 padding-right: 24px;
 `)])]),h(`icon`,{color:`var(--n-icon-color)`}),n(`alert-body`,{padding:`var(--n-padding)`},[h(`title`,{color:`var(--n-title-text-color)`}),h(`content`,{color:`var(--n-content-text-color)`})]),p({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),h(`icon`,`
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
 `),i(`show-icon`,[n(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),i(`right-adjust`,[n(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),n(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[h(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[m(`& +`,[h(`content`,{marginTop:`9px`})])]),h(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),h(`icon`,{transition:`color .3s var(--n-bezier)`})]),M={...r.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},N=D({name:`Alert`,inheritAttrs:!1,props:M,slots:Object,setup(e){let{mergedClsPrefixRef:n,mergedBorderedRef:i,inlineThemeDisabled:a,mergedRtlRef:o}=_(e),s=r(`Alert`,`-alert`,j,k,e,n),c=E(`Alert`,o,n),l=t(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=s.value,{fontSize:r,borderRadius:i,titleFontWeight:a,lineHeight:o,iconSize:c,iconMargin:l,iconMarginRtl:f,closeIconSize:p,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=n,{type:y}=e,{left:b,right:x}=u(l);return{"--n-bezier":t,"--n-color":n[d(`color`,y)],"--n-close-icon-size":p,"--n-close-border-radius":m,"--n-close-color-hover":n[d(`closeColorHover`,y)],"--n-close-color-pressed":n[d(`closeColorPressed`,y)],"--n-close-icon-color":n[d(`closeIconColor`,y)],"--n-close-icon-color-hover":n[d(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":n[d(`closeIconColorPressed`,y)],"--n-icon-color":n[d(`iconColor`,y)],"--n-border":n[d(`border`,y)],"--n-title-text-color":n[d(`titleTextColor`,y)],"--n-content-text-color":n[d(`contentTextColor`,y)],"--n-line-height":o,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":a,"--n-icon-size":c,"--n-icon-margin":l,"--n-icon-margin-rtl":f,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),p=a?f(`alert`,t(()=>e.type[0]),l,e):void 0,m=w(!0),h=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:c,mergedClsPrefix:n,mergedBordered:i,visible:m,handleCloseClick:()=>{Promise.resolve(e.onClose?.()).then(e=>{e!==!1&&(m.value=!1)})},handleAfterLeave:()=>{h()},mergedTheme:s,cssVars:a?void 0:l,themeClass:p?.themeClass,onRender:p?.onRender}},render(){return this.onRender?.(),T(),s(e,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,n={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(T(),x(`div`,S({key:1},S(this.$attrs,n)),[A(()=>this.closable&&(T(),s(l,{clsPrefix:e,class:c(`${e}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),A(()=>this.bordered&&(T(),x(`div`,{class:c(`${e}-alert__border`)},null,2))),A(()=>this.showIcon&&(T(),x(`div`,{class:c(`${e}-alert__icon`),"aria-hidden":`true`},[A(()=>C(t.icon,()=>[(T(),s(a,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return T(),s(o,{key:3});case`info`:return T(),s(g,{key:4});case`warning`:return T(),s(v,{key:5});case`error`:return T(),s(b,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),y(`div`,{class:c([`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`])},[A(()=>O(t.header,t=>{let n=t||this.title;return n?(T(),x(`div`,{key:2,class:c(`${e}-alert-body__title`)},[A(()=>n)],2)):null})),A(()=>t.default&&(T(),x(`div`,{class:c(`${e}-alert-body__content`)},[A(()=>t.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}});export{N as t};