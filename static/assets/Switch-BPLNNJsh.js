import{i as e}from"./createLucideIcon-CaCBVfAm.js";import{An as t,Dn as n,F as r,Ft as i,Gn as a,Gt as o,I as s,Jn as c,Kn as l,Nt as u,On as d,Ot as f,P as p,R as m,Rt as h,Tn as g,Vt as _,Wn as v,Zn as y,br as b,c as x,cr as S,ct as C,dt as w,ht as T,kn as E,kt as D,tr as O,wn as k,wr as A,xr as j}from"./index-CRZeUnv2.js";var M=g(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[n(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),n(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),n(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),g(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[r({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),n(`checked, unchecked`,`
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
 `),n(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),n(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),k(`&:focus`,[n(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),d(`round`,[n(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[n(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),E(`disabled`,[E(`icon`,[d(`rubber-band`,[d(`pressed`,[n(`rail`,[n(`button`,`max-width: var(--n-button-width-pressed);`)])]),n(`rail`,[k(`&:active`,[n(`button`,`max-width: var(--n-button-width-pressed);`)])]),d(`active`,[d(`pressed`,[n(`rail`,[n(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),n(`rail`,[k(`&:active`,[n(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),d(`active`,[n(`rail`,[n(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),n(`rail`,`
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
 `,[n(`button-icon`,`
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
 `,[r()]),n(`button`,`
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
 `)]),d(`active`,[n(`rail`,`background-color: var(--n-rail-color-active);`)]),d(`loading`,[n(`rail`,`
 cursor: wait;
 `)]),d(`disabled`,[n(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),N=[`aria-checked`,`tabindex`,`onClick`,`onFocus`,`onBlur`,`onKeyup`,`onKeydown`],P={...f.props,size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]},F,I=y({name:`Switch`,props:P,slots:Object,setup(n){F===void 0&&(F=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedComponentPropsRef:s}=o(n),c=f(`Switch`,`-switch`,M,x,n,r),l=m(n,{mergedSize(e){return n.size===void 0?e?e.mergedSize.value:s?.value?.Switch?.size||`medium`:n.size}}),{mergedSizeRef:d,mergedDisabledRef:p}=l,h=b(n.defaultValue),g=j(n,`value`),_=e(g,h),y=v(()=>_.value===n.checkedValue),S=b(!1),C=b(!1),w=v(()=>{let{railStyle:e}=n;if(e)return e({focused:C.value,checked:y.value})});function E(e){let{"onUpdate:value":t,onChange:r,onUpdateValue:i}=n,{nTriggerFormInput:a,nTriggerFormChange:o}=l;t&&T(t,e),i&&T(i,e),r&&T(r,e),h.value=e,a(),o()}function O(){let{nTriggerFormFocus:e}=l;e()}function k(){let{nTriggerFormBlur:e}=l;e()}function A(){n.loading||p.value||(_.value===n.checkedValue?E(n.uncheckedValue):E(n.checkedValue))}function N(){C.value=!0,O()}function P(){C.value=!1,k(),S.value=!1}function I(e){n.loading||p.value||e.key===` `&&(_.value===n.checkedValue?E(n.uncheckedValue):E(n.checkedValue),S.value=!1)}function L(e){n.loading||p.value||e.key===` `&&(e.preventDefault(),S.value=!0)}let R=v(()=>{let{value:e}=d,{self:{opacityDisabled:n,railColor:r,railColorActive:a,buttonBoxShadow:o,buttonColor:s,boxShadowFocus:l,loadingColor:f,textColor:p,iconColor:m,[t(`buttonHeight`,e)]:h,[t(`buttonWidth`,e)]:g,[t(`buttonWidthPressed`,e)]:_,[t(`railHeight`,e)]:v,[t(`railWidth`,e)]:y,[t(`railBorderRadius`,e)]:b,[t(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=c.value,C,w,T;return F?(C=`calc((${v} - ${h}) / 2)`,w=`max(${v}, ${h})`,T=`max(${y}, calc(${y} + ${h} - ${v}))`):(C=i((u(v)-u(h))/2),w=i(Math.max(u(v),u(h))),T=u(v)>u(h)?y:i(u(y)+u(h)-u(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":o,"--n-button-color":s,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":h,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":n,"--n-rail-border-radius":b,"--n-rail-color":r,"--n-rail-color-active":a,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":l,"--n-loading-color":f,"--n-text-color":p,"--n-icon-color":m}}),z=a?D(`switch`,v(()=>d.value[0]),R,n):void 0;return{handleClick:A,handleBlur:P,handleFocus:N,handleKeyup:I,handleKeydown:L,mergedRailStyle:w,pressed:S,mergedClsPrefix:r,mergedValue:_,checked:y,mergedDisabled:p,cssVars:a?void 0:R,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:r,onRender:i,$slots:o}=this;i?.();let{checked:u,unchecked:d,icon:f,"checked-icon":m,"unchecked-icon":g}=o,v=!(C(f)&&C(m)&&C(g));return S(),c(`div`,{role:`switch`,"aria-checked":n,class:h([`${e}-switch`,this.themeClass,v&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`]),tabindex:this.mergedDisabled?void 0:0,style:A(this.cssVars),onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},[a(`div`,{class:h(`${e}-switch__rail`),"aria-hidden":`true`,style:A(r)},[_(()=>w(u,t=>w(d,n=>t||n?(S(),c(`div`,{key:4,"aria-hidden":!0,class:h(`${e}-switch__children-placeholder`)},[a(`div`,{class:h(`${e}-switch__rail-placeholder`)},[a(`div`,{class:h(`${e}-switch__button-placeholder`)},null,2),_(()=>t)],2),a(`div`,{class:h(`${e}-switch__rail-placeholder`)},[a(`div`,{class:h(`${e}-switch__button-placeholder`)},null,2),_(()=>n)],2)],2)):null))),a(`div`,{class:h(`${e}-switch__button`)},[_(()=>w(f,t=>w(m,n=>w(g,r=>(S(),l(s,null,{default:()=>this.loading?(S(),l(p,O({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps),null,16,[`clsPrefix`])):this.checked&&(n||t)?(S(),c(`div`,{class:h(`${e}-switch__button-icon`),key:n?`checked-icon`:`icon`},[_(()=>n||t)],2)):!this.checked&&(r||t)?(S(),c(`div`,{class:h(`${e}-switch__button-icon`),key:r?`unchecked-icon`:`icon`},[_(()=>r||t)],2)):null},1024)))))),_(()=>w(u,t=>t&&(S(),c(`div`,{key:`checked`,class:h(`${e}-switch__checked`)},[_(()=>t)],2)))),_(()=>w(d,t=>t&&(S(),c(`div`,{key:`unchecked`,class:h(`${e}-switch__unchecked`)},[_(()=>t)],2))))],2)],6)],46,N)}});export{I as t};