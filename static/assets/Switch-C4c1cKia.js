import{i as e}from"./createLucideIcon-BLces-_0.js";import{At as t,Bn as n,F as r,Fr as i,Gn as a,Hn as o,Ht as s,I as c,It as l,Kt as u,P as d,Pr as f,Pt as p,R as m,Rr as h,Sr as g,Un as _,Wn as v,ar as y,cr as b,ct as x,dr as S,dt as C,gt as w,hr as T,ir as E,jt as D,or as O,s as k,zn as A,zt as j}from"./index-BCIasUWA.js";var M=n(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[o(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),o(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),o(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),n(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[r({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),o(`checked, unchecked`,`
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
 `),o(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),o(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),A(`&:focus`,[o(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),_(`round`,[o(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[o(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),v(`disabled`,[v(`icon`,[_(`rubber-band`,[_(`pressed`,[o(`rail`,[o(`button`,`max-width: var(--n-button-width-pressed);`)])]),o(`rail`,[A(`&:active`,[o(`button`,`max-width: var(--n-button-width-pressed);`)])]),_(`active`,[_(`pressed`,[o(`rail`,[o(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),o(`rail`,[A(`&:active`,[o(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),_(`active`,[o(`rail`,[o(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),o(`rail`,`
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
 `,[o(`button-icon`,`
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
 `,[r()]),o(`button`,`
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
 `)]),_(`active`,[o(`rail`,`background-color: var(--n-rail-color-active);`)]),_(`loading`,[o(`rail`,`
 cursor: wait;
 `)]),_(`disabled`,[o(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),N=[`aria-checked`,`tabindex`,`onClick`,`onFocus`,`onBlur`,`onKeyup`,`onKeydown`],P={...t.props,size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]},F,I=S({name:`Switch`,props:P,slots:Object,setup(n){F===void 0&&(F=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedComponentPropsRef:s}=u(n),c=t(`Switch`,`-switch`,M,k,n,r),d=m(n,{mergedSize(e){return n.size===void 0?e?e.mergedSize.value:s?.value?.Switch?.size||`medium`:n.size}}),{mergedSizeRef:h,mergedDisabledRef:g}=d,_=f(n.defaultValue),v=i(n,`value`),y=e(v,_),b=E(()=>y.value===n.checkedValue),x=f(!1),S=f(!1),C=E(()=>{let{railStyle:e}=n;if(e)return e({focused:S.value,checked:b.value})});function T(e){let{"onUpdate:value":t,onChange:r,onUpdateValue:i}=n,{nTriggerFormInput:a,nTriggerFormChange:o}=d;t&&w(t,e),i&&w(i,e),r&&w(r,e),_.value=e,a(),o()}function O(){let{nTriggerFormFocus:e}=d;e()}function A(){let{nTriggerFormBlur:e}=d;e()}function j(){n.loading||g.value||(y.value===n.checkedValue?T(n.uncheckedValue):T(n.checkedValue))}function N(){S.value=!0,O()}function P(){S.value=!1,A(),x.value=!1}function I(e){n.loading||g.value||e.key===` `&&(y.value===n.checkedValue?T(n.uncheckedValue):T(n.checkedValue),x.value=!1)}function L(e){n.loading||g.value||e.key===` `&&(e.preventDefault(),x.value=!0)}let R=E(()=>{let{value:e}=h,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:o,boxShadowFocus:s,loadingColor:u,textColor:d,iconColor:f,[a(`buttonHeight`,e)]:m,[a(`buttonWidth`,e)]:g,[a(`buttonWidthPressed`,e)]:_,[a(`railHeight`,e)]:v,[a(`railWidth`,e)]:y,[a(`railBorderRadius`,e)]:b,[a(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=c.value,C,w,T;return F?(C=`calc((${v} - ${m}) / 2)`,w=`max(${v}, ${m})`,T=`max(${y}, calc(${y} + ${m} - ${v}))`):(C=l((p(v)-p(m))/2),w=l(Math.max(p(v),p(m))),T=p(v)>p(m)?y:l(p(y)+p(m)-p(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":i,"--n-button-color":o,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":m,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":s,"--n-loading-color":u,"--n-text-color":d,"--n-icon-color":f}}),z=o?D(`switch`,E(()=>h.value[0]),R,n):void 0;return{handleClick:j,handleBlur:P,handleFocus:N,handleKeyup:I,handleKeydown:L,mergedRailStyle:C,pressed:x,mergedClsPrefix:r,mergedValue:y,checked:b,mergedDisabled:g,cssVars:o?void 0:R,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:r,onRender:i,$slots:a}=this;i?.();let{checked:o,unchecked:l,icon:u,"checked-icon":f,"unchecked-icon":p}=a,m=!(x(u)&&x(f)&&x(p));return g(),b(`div`,{role:`switch`,"aria-checked":n,class:j([`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`]),tabindex:this.mergedDisabled?void 0:0,style:h(this.cssVars),onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},[y(`div`,{class:j(`${e}-switch__rail`),"aria-hidden":`true`,style:h(r)},[s(()=>C(o,t=>C(l,n=>t||n?(g(),b(`div`,{key:4,"aria-hidden":!0,class:j(`${e}-switch__children-placeholder`)},[y(`div`,{class:j(`${e}-switch__rail-placeholder`)},[y(`div`,{class:j(`${e}-switch__button-placeholder`)},null,2),s(()=>t)],2),y(`div`,{class:j(`${e}-switch__rail-placeholder`)},[y(`div`,{class:j(`${e}-switch__button-placeholder`)},null,2),s(()=>n)],2)],2)):null))),y(`div`,{class:j(`${e}-switch__button`)},[s(()=>C(u,t=>C(f,n=>C(p,r=>(g(),O(c,null,{default:()=>this.loading?(g(),O(d,T({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps),null,16,[`clsPrefix`])):this.checked&&(n||t)?(g(),b(`div`,{class:j(`${e}-switch__button-icon`),key:n?`checked-icon`:`icon`},[s(()=>n||t)],2)):!this.checked&&(r||t)?(g(),b(`div`,{class:j(`${e}-switch__button-icon`),key:r?`unchecked-icon`:`icon`},[s(()=>r||t)],2)):null},1024)))))),s(()=>C(o,t=>t&&(g(),b(`div`,{key:`checked`,class:j(`${e}-switch__checked`)},[s(()=>t)],2)))),s(()=>C(l,t=>t&&(g(),b(`div`,{key:`unchecked`,class:j(`${e}-switch__unchecked`)},[s(()=>t)],2))))],2)],6)],46,N)}});export{I as t};