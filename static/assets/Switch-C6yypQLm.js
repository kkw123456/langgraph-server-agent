import{i as e}from"./createLucideIcon-Neiaj8sN.js";import{At as t,F as n,Ft as r,Gt as i,Hn as a,Ir as o,L as s,Mr as c,N as l,Nr as u,Nt as d,P as f,Rn as p,Rt as m,Un as h,Vn as g,Vt as _,Wn as v,br as y,ht as b,ir as x,kt as S,lr as C,nr as w,or as T,pr as E,rr as D,s as O,st as k,ut as A,zn as j}from"./index-D8pxfoyK.js";var M=j(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[g(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),g(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),g(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),j(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[f({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),g(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),g(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),g(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),p(`&:focus`,[g(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),a(`round`,[g(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[g(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),h(`disabled`,[h(`icon`,[a(`rubber-band`,[a(`pressed`,[g(`rail`,[g(`button`,`max-width: var(--n-button-width-pressed);`)])]),g(`rail`,[p(`&:active`,[g(`button`,`max-width: var(--n-button-width-pressed);`)])]),a(`active`,[a(`pressed`,[g(`rail`,[g(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),g(`rail`,[p(`&:active`,[g(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),a(`active`,[g(`rail`,[g(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),g(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[g(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[f()]),g(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),a(`active`,[g(`rail`,`background-color: var(--n-rail-color-active);`)]),a(`loading`,[g(`rail`,`
 cursor: wait;
 `)]),a(`disabled`,[g(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),N=[`aria-checked`,`tabindex`,`onClick`,`onFocus`,`onBlur`,`onKeyup`,`onKeydown`],P={...S.props,size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]},F,I=C({name:`Switch`,props:P,slots:Object,setup(n){F===void 0&&(F=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:a,inlineThemeDisabled:o,mergedComponentPropsRef:l}=i(n),f=S(`Switch`,`-switch`,M,O,n,a),p=s(n,{mergedSize(e){return n.size===void 0?e?e.mergedSize.value:l?.value?.Switch?.size||`medium`:n.size}}),{mergedSizeRef:m,mergedDisabledRef:h}=p,g=c(n.defaultValue),_=u(n,`value`),y=e(_,g),x=w(()=>y.value===n.checkedValue),C=c(!1),T=c(!1),E=w(()=>{let{railStyle:e}=n;if(e)return e({focused:T.value,checked:x.value})});function D(e){let{"onUpdate:value":t,onChange:r,onUpdateValue:i}=n,{nTriggerFormInput:a,nTriggerFormChange:o}=p;t&&b(t,e),i&&b(i,e),r&&b(r,e),g.value=e,a(),o()}function k(){let{nTriggerFormFocus:e}=p;e()}function A(){let{nTriggerFormBlur:e}=p;e()}function j(){n.loading||h.value||(y.value===n.checkedValue?D(n.uncheckedValue):D(n.checkedValue))}function N(){T.value=!0,k()}function P(){T.value=!1,A(),C.value=!1}function I(e){n.loading||h.value||e.key===` `&&(y.value===n.checkedValue?D(n.uncheckedValue):D(n.checkedValue),C.value=!1)}function L(e){n.loading||h.value||e.key===` `&&(e.preventDefault(),C.value=!0)}let R=w(()=>{let{value:e}=m,{self:{opacityDisabled:t,railColor:n,railColorActive:i,buttonBoxShadow:a,buttonColor:o,boxShadowFocus:s,loadingColor:c,textColor:l,iconColor:u,[v(`buttonHeight`,e)]:p,[v(`buttonWidth`,e)]:h,[v(`buttonWidthPressed`,e)]:g,[v(`railHeight`,e)]:_,[v(`railWidth`,e)]:y,[v(`railBorderRadius`,e)]:b,[v(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=f.value,C,w,T;return F?(C=`calc((${_} - ${p}) / 2)`,w=`max(${_}, ${p})`,T=`max(${y}, calc(${y} + ${p} - ${_}))`):(C=r((d(_)-d(p))/2),w=r(Math.max(d(_),d(p))),T=d(_)>d(p)?y:r(d(y)+d(p)-d(_))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":a,"--n-button-color":o,"--n-button-width":h,"--n-button-width-pressed":g,"--n-button-height":p,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":n,"--n-rail-color-active":i,"--n-rail-height":_,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":s,"--n-loading-color":c,"--n-text-color":l,"--n-icon-color":u}}),z=o?t(`switch`,w(()=>m.value[0]),R,n):void 0;return{handleClick:j,handleBlur:P,handleFocus:N,handleKeyup:I,handleKeydown:L,mergedRailStyle:E,pressed:C,mergedClsPrefix:a,mergedValue:y,checked:x,mergedDisabled:h,cssVars:o?void 0:R,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:r,mergedRailStyle:i,onRender:a,$slots:s}=this;a?.();let{checked:c,unchecked:u,icon:d,"checked-icon":f,"unchecked-icon":p}=s,h=!(k(d)&&k(f)&&k(p));return y(),T(`div`,{role:`switch`,"aria-checked":r,class:m([`${e}-switch`,this.themeClass,h&&`${e}-switch--icon`,r&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`]),tabindex:this.mergedDisabled?void 0:0,style:o(this.cssVars),onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},[D(`div`,{class:m(`${e}-switch__rail`),"aria-hidden":`true`,style:o(i)},[_(()=>A(c,t=>A(u,n=>t||n?(y(),T(`div`,{key:4,"aria-hidden":!0,class:m(`${e}-switch__children-placeholder`)},[D(`div`,{class:m(`${e}-switch__rail-placeholder`)},[D(`div`,{class:m(`${e}-switch__button-placeholder`)},null,2),_(()=>t)],2),D(`div`,{class:m(`${e}-switch__rail-placeholder`)},[D(`div`,{class:m(`${e}-switch__button-placeholder`)},null,2),_(()=>n)],2)],2)):null))),D(`div`,{class:m(`${e}-switch__button`)},[_(()=>A(d,t=>A(f,r=>A(p,i=>(y(),x(n,null,{default:()=>this.loading?(y(),x(l,E({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps),null,16,[`clsPrefix`])):this.checked&&(r||t)?(y(),T(`div`,{class:m(`${e}-switch__button-icon`),key:r?`checked-icon`:`icon`},[_(()=>r||t)],2)):!this.checked&&(i||t)?(y(),T(`div`,{class:m(`${e}-switch__button-icon`),key:i?`unchecked-icon`:`icon`},[_(()=>i||t)],2)):null},1024)))))),_(()=>A(c,t=>t&&(y(),T(`div`,{key:`checked`,class:m(`${e}-switch__checked`)},[_(()=>t)],2)))),_(()=>A(u,t=>t&&(y(),T(`div`,{key:`unchecked`,class:m(`${e}-switch__unchecked`)},[_(()=>t)],2))))],2)],6)],46,N)}});export{I as t};