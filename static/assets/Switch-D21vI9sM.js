import{i as e}from"./createLucideIcon-DTZipSeT.js";import{F as t,Ft as n,Gt as r,Hn as i,I as a,Lr as o,Nr as s,Nt as c,Ot as l,P as u,Pr as d,R as f,Rn as p,Rt as m,Un as h,Vn as g,Vt as _,Wn as v,ar as y,c as b,ct as x,dt as S,ht as C,ir as w,kt as T,mr as E,rr as D,sr as O,ur as k,xr as A,zn as j}from"./index-BKnoSBpI.js";var M=j(`switch`,`
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
 `,[t({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),g(`checked, unchecked`,`
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
 `)]),i(`round`,[g(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[g(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),h(`disabled`,[h(`icon`,[i(`rubber-band`,[i(`pressed`,[g(`rail`,[g(`button`,`max-width: var(--n-button-width-pressed);`)])]),g(`rail`,[p(`&:active`,[g(`button`,`max-width: var(--n-button-width-pressed);`)])]),i(`active`,[i(`pressed`,[g(`rail`,[g(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),g(`rail`,[p(`&:active`,[g(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),i(`active`,[g(`rail`,[g(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),g(`rail`,`
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
 `,[t()]),g(`button`,`
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
 `)]),i(`active`,[g(`rail`,`background-color: var(--n-rail-color-active);`)]),i(`loading`,[g(`rail`,`
 cursor: wait;
 `)]),i(`disabled`,[g(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),N=[`aria-checked`,`tabindex`,`onClick`,`onFocus`,`onBlur`,`onKeyup`,`onKeydown`],P={...l.props,size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]},F,I=k({name:`Switch`,props:P,slots:Object,setup(t){F===void 0&&(F=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:i,inlineThemeDisabled:a,mergedComponentPropsRef:o}=r(t),u=l(`Switch`,`-switch`,M,b,t,i),p=f(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:o?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:m,mergedDisabledRef:h}=p,g=s(t.defaultValue),_=d(t,`value`),y=e(_,g),x=D(()=>y.value===t.checkedValue),S=s(!1),w=s(!1),E=D(()=>{let{railStyle:e}=t;if(e)return e({focused:w.value,checked:x.value})});function O(e){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=t,{nTriggerFormInput:a,nTriggerFormChange:o}=p;n&&C(n,e),i&&C(i,e),r&&C(r,e),g.value=e,a(),o()}function k(){let{nTriggerFormFocus:e}=p;e()}function A(){let{nTriggerFormBlur:e}=p;e()}function j(){t.loading||h.value||(y.value===t.checkedValue?O(t.uncheckedValue):O(t.checkedValue))}function N(){w.value=!0,k()}function P(){w.value=!1,A(),S.value=!1}function I(e){t.loading||h.value||e.key===` `&&(y.value===t.checkedValue?O(t.uncheckedValue):O(t.checkedValue),S.value=!1)}function L(e){t.loading||h.value||e.key===` `&&(e.preventDefault(),S.value=!0)}let R=D(()=>{let{value:e}=m,{self:{opacityDisabled:t,railColor:r,railColorActive:i,buttonBoxShadow:a,buttonColor:o,boxShadowFocus:s,loadingColor:l,textColor:d,iconColor:f,[v(`buttonHeight`,e)]:p,[v(`buttonWidth`,e)]:h,[v(`buttonWidthPressed`,e)]:g,[v(`railHeight`,e)]:_,[v(`railWidth`,e)]:y,[v(`railBorderRadius`,e)]:b,[v(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=u.value,C,w,T;return F?(C=`calc((${_} - ${p}) / 2)`,w=`max(${_}, ${p})`,T=`max(${y}, calc(${y} + ${p} - ${_}))`):(C=n((c(_)-c(p))/2),w=n(Math.max(c(_),c(p))),T=c(_)>c(p)?y:n(c(y)+c(p)-c(_))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":a,"--n-button-color":o,"--n-button-width":h,"--n-button-width-pressed":g,"--n-button-height":p,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":r,"--n-rail-color-active":i,"--n-rail-height":_,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":s,"--n-loading-color":l,"--n-text-color":d,"--n-icon-color":f}}),z=a?T(`switch`,D(()=>m.value[0]),R,t):void 0;return{handleClick:j,handleBlur:P,handleFocus:N,handleKeyup:I,handleKeydown:L,mergedRailStyle:E,pressed:S,mergedClsPrefix:i,mergedValue:y,checked:x,mergedDisabled:h,cssVars:a?void 0:R,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:r,onRender:i,$slots:s}=this;i?.();let{checked:c,unchecked:l,icon:d,"checked-icon":f,"unchecked-icon":p}=s,h=!(x(d)&&x(f)&&x(p));return A(),O(`div`,{role:`switch`,"aria-checked":n,class:m([`${e}-switch`,this.themeClass,h&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`]),tabindex:this.mergedDisabled?void 0:0,style:o(this.cssVars),onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},[w(`div`,{class:m(`${e}-switch__rail`),"aria-hidden":`true`,style:o(r)},[_(()=>S(c,t=>S(l,n=>t||n?(A(),O(`div`,{key:4,"aria-hidden":!0,class:m(`${e}-switch__children-placeholder`)},[w(`div`,{class:m(`${e}-switch__rail-placeholder`)},[w(`div`,{class:m(`${e}-switch__button-placeholder`)},null,2),_(()=>t)],2),w(`div`,{class:m(`${e}-switch__rail-placeholder`)},[w(`div`,{class:m(`${e}-switch__button-placeholder`)},null,2),_(()=>n)],2)],2)):null))),w(`div`,{class:m(`${e}-switch__button`)},[_(()=>S(d,t=>S(f,n=>S(p,r=>(A(),y(a,null,{default:()=>this.loading?(A(),y(u,E({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps),null,16,[`clsPrefix`])):this.checked&&(n||t)?(A(),O(`div`,{class:m(`${e}-switch__button-icon`),key:n?`checked-icon`:`icon`},[_(()=>n||t)],2)):!this.checked&&(r||t)?(A(),O(`div`,{class:m(`${e}-switch__button-icon`),key:r?`unchecked-icon`:`icon`},[_(()=>r||t)],2)):null},1024)))))),_(()=>S(c,t=>t&&(A(),O(`div`,{key:`checked`,class:m(`${e}-switch__checked`)},[_(()=>t)],2)))),_(()=>S(l,t=>t&&(A(),O(`div`,{key:`unchecked`,class:m(`${e}-switch__unchecked`)},[_(()=>t)],2))))],2)],6)],46,N)}});export{I as t};