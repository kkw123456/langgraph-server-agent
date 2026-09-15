import{a as e}from"./createLucideIcon-DGSffkkr.js";import{Bn as t,Fr as n,Gt as r,Hn as i,Ht as a,In as o,Jt as s,K as c,Ln as l,Lt as u,Pr as d,Rr as f,Rt as p,Sr as m,U as h,V as g,Vn as _,W as v,Zt as y,_t as b,ar as x,bt as S,c as C,ir as w,mr as T,nn as E,rr as D,sr as O,ur as k,wt as A,zn as j}from"./index-vAIOlw3Q.js";var M=l(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[j(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),j(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),j(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),l(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[h({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),j(`checked, unchecked`,`
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
 `),j(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),j(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),o(`&:focus`,[j(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),t(`round`,[j(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[j(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),_(`disabled`,[_(`icon`,[t(`rubber-band`,[t(`pressed`,[j(`rail`,[j(`button`,`max-width: var(--n-button-width-pressed);`)])]),j(`rail`,[o(`&:active`,[j(`button`,`max-width: var(--n-button-width-pressed);`)])]),t(`active`,[t(`pressed`,[j(`rail`,[j(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),j(`rail`,[o(`&:active`,[j(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),t(`active`,[j(`rail`,[j(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),j(`rail`,`
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
 `,[j(`button-icon`,`
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
 `,[h()]),j(`button`,`
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
 `)]),t(`active`,[j(`rail`,`background-color: var(--n-rail-color-active);`)]),t(`loading`,[j(`rail`,`
 cursor: wait;
 `)]),t(`disabled`,[j(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),N=[`aria-checked`,`tabindex`,`onClick`,`onFocus`,`onBlur`,`onKeyup`,`onKeydown`],P={...u.props,size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]},F,I=k({name:`Switch`,props:P,slots:Object,setup(t){F===void 0&&(F=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:o,inlineThemeDisabled:s,mergedComponentPropsRef:l}=E(t),f=u(`Switch`,`-switch`,M,C,t,o),m=c(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:l?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:h,mergedDisabledRef:g}=m,_=d(t.defaultValue),v=n(t,`value`),y=e(v,_),b=D(()=>y.value===t.checkedValue),x=d(!1),S=d(!1),w=D(()=>{let{railStyle:e}=t;if(e)return e({focused:S.value,checked:b.value})});function T(e){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=t,{nTriggerFormInput:a,nTriggerFormChange:o}=m;n&&A(n,e),i&&A(i,e),r&&A(r,e),_.value=e,a(),o()}function O(){let{nTriggerFormFocus:e}=m;e()}function k(){let{nTriggerFormBlur:e}=m;e()}function j(){t.loading||g.value||(y.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue))}function N(){S.value=!0,O()}function P(){S.value=!1,k(),x.value=!1}function I(e){t.loading||g.value||e.key===` `&&(y.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue),x.value=!1)}function L(e){t.loading||g.value||e.key===` `&&(e.preventDefault(),x.value=!0)}let R=D(()=>{let{value:e}=h,{self:{opacityDisabled:t,railColor:n,railColorActive:o,buttonBoxShadow:s,buttonColor:c,boxShadowFocus:l,loadingColor:u,textColor:d,iconColor:p,[i(`buttonHeight`,e)]:m,[i(`buttonWidth`,e)]:g,[i(`buttonWidthPressed`,e)]:_,[i(`railHeight`,e)]:v,[i(`railWidth`,e)]:y,[i(`railBorderRadius`,e)]:b,[i(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=f.value,C,w,T;return F?(C=`calc((${v} - ${m}) / 2)`,w=`max(${v}, ${m})`,T=`max(${y}, calc(${y} + ${m} - ${v}))`):(C=r((a(v)-a(m))/2),w=r(Math.max(a(v),a(m))),T=a(v)>a(m)?y:r(a(y)+a(m)-a(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":s,"--n-button-color":c,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":m,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":n,"--n-rail-color-active":o,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":l,"--n-loading-color":u,"--n-text-color":d,"--n-icon-color":p}}),z=s?p(`switch`,D(()=>h.value[0]),R,t):void 0;return{handleClick:j,handleBlur:P,handleFocus:N,handleKeyup:I,handleKeydown:L,mergedRailStyle:w,pressed:x,mergedClsPrefix:o,mergedValue:y,checked:b,mergedDisabled:g,cssVars:s?void 0:R,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:r,onRender:i,$slots:a}=this;i?.();let{checked:o,unchecked:c,icon:l,"checked-icon":u,"unchecked-icon":d}=a,p=!(b(l)&&b(u)&&b(d));return m(),O(`div`,{role:`switch`,"aria-checked":n,class:s([`${e}-switch`,this.themeClass,p&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`]),tabindex:this.mergedDisabled?void 0:0,style:f(this.cssVars),onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},[w(`div`,{class:s(`${e}-switch__rail`),"aria-hidden":`true`,style:f(r)},[y(()=>S(o,t=>S(c,n=>t||n?(m(),O(`div`,{key:4,"aria-hidden":!0,class:s(`${e}-switch__children-placeholder`)},[w(`div`,{class:s(`${e}-switch__rail-placeholder`)},[w(`div`,{class:s(`${e}-switch__button-placeholder`)},null,2),y(()=>t)],2),w(`div`,{class:s(`${e}-switch__rail-placeholder`)},[w(`div`,{class:s(`${e}-switch__button-placeholder`)},null,2),y(()=>n)],2)],2)):null))),w(`div`,{class:s(`${e}-switch__button`)},[y(()=>S(l,t=>S(u,n=>S(d,r=>(m(),x(v,null,{default:()=>this.loading?(m(),x(g,T({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps),null,16,[`clsPrefix`])):this.checked&&(n||t)?(m(),O(`div`,{class:s(`${e}-switch__button-icon`),key:n?`checked-icon`:`icon`},[y(()=>n||t)],2)):!this.checked&&(r||t)?(m(),O(`div`,{class:s(`${e}-switch__button-icon`),key:r?`unchecked-icon`:`icon`},[y(()=>r||t)],2)):null},1024)))))),y(()=>S(o,t=>t&&(m(),O(`div`,{key:`checked`,class:s(`${e}-switch__checked`)},[y(()=>t)],2)))),y(()=>S(c,t=>t&&(m(),O(`div`,{key:`unchecked`,class:s(`${e}-switch__unchecked`)},[y(()=>t)],2))))],2)],6)],46,N)}});export{I as t};