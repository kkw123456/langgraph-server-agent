import{i as e}from"./createLucideIcon-SGZexfXm.js";import{An as t,Cr as n,Dn as r,F as i,Ft as a,Gn as o,Gt as s,I as c,Nt as l,On as u,Ot as d,P as f,R as p,Rt as m,Tn as h,Un as g,Vt as _,Wn as v,Xn as y,br as b,c as x,ct as S,dt as C,er as w,ht as T,kn as E,kt as D,qn as O,sr as k,wn as A,yr as j}from"./index-Q0kdHZPm.js";var M=h(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[r(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),r(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),r(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),h(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[i({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),r(`checked, unchecked`,`
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
 `),r(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),r(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),A(`&:focus`,[r(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),u(`round`,[r(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[r(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),E(`disabled`,[E(`icon`,[u(`rubber-band`,[u(`pressed`,[r(`rail`,[r(`button`,`max-width: var(--n-button-width-pressed);`)])]),r(`rail`,[A(`&:active`,[r(`button`,`max-width: var(--n-button-width-pressed);`)])]),u(`active`,[u(`pressed`,[r(`rail`,[r(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),r(`rail`,[A(`&:active`,[r(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),u(`active`,[r(`rail`,[r(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),r(`rail`,`
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
 `,[r(`button-icon`,`
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
 `,[i()]),r(`button`,`
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
 `)]),u(`active`,[r(`rail`,`background-color: var(--n-rail-color-active);`)]),u(`loading`,[r(`rail`,`
 cursor: wait;
 `)]),u(`disabled`,[r(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),N=[`aria-checked`,`tabindex`,`onClick`,`onFocus`,`onBlur`,`onKeyup`,`onKeydown`],P={...d.props,size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]},F,I=y({name:`Switch`,props:P,slots:Object,setup(n){F===void 0&&(F=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:o}=s(n),c=d(`Switch`,`-switch`,M,x,n,r),u=p(n,{mergedSize(e){return n.size===void 0?e?e.mergedSize.value:o?.value?.Switch?.size||`medium`:n.size}}),{mergedSizeRef:f,mergedDisabledRef:m}=u,h=j(n.defaultValue),_=b(n,`value`),v=e(_,h),y=g(()=>v.value===n.checkedValue),S=j(!1),C=j(!1),w=g(()=>{let{railStyle:e}=n;if(e)return e({focused:C.value,checked:y.value})});function E(e){let{"onUpdate:value":t,onChange:r,onUpdateValue:i}=n,{nTriggerFormInput:a,nTriggerFormChange:o}=u;t&&T(t,e),i&&T(i,e),r&&T(r,e),h.value=e,a(),o()}function O(){let{nTriggerFormFocus:e}=u;e()}function k(){let{nTriggerFormBlur:e}=u;e()}function A(){n.loading||m.value||(v.value===n.checkedValue?E(n.uncheckedValue):E(n.checkedValue))}function N(){C.value=!0,O()}function P(){C.value=!1,k(),S.value=!1}function I(e){n.loading||m.value||e.key===` `&&(v.value===n.checkedValue?E(n.uncheckedValue):E(n.checkedValue),S.value=!1)}function L(e){n.loading||m.value||e.key===` `&&(e.preventDefault(),S.value=!0)}let R=g(()=>{let{value:e}=f,{self:{opacityDisabled:n,railColor:r,railColorActive:i,buttonBoxShadow:o,buttonColor:s,boxShadowFocus:u,loadingColor:d,textColor:p,iconColor:m,[t(`buttonHeight`,e)]:h,[t(`buttonWidth`,e)]:g,[t(`buttonWidthPressed`,e)]:_,[t(`railHeight`,e)]:v,[t(`railWidth`,e)]:y,[t(`railBorderRadius`,e)]:b,[t(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=c.value,C,w,T;return F?(C=`calc((${v} - ${h}) / 2)`,w=`max(${v}, ${h})`,T=`max(${y}, calc(${y} + ${h} - ${v}))`):(C=a((l(v)-l(h))/2),w=a(Math.max(l(v),l(h))),T=l(v)>l(h)?y:a(l(y)+l(h)-l(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":o,"--n-button-color":s,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":h,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":n,"--n-rail-border-radius":b,"--n-rail-color":r,"--n-rail-color-active":i,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":u,"--n-loading-color":d,"--n-text-color":p,"--n-icon-color":m}}),z=i?D(`switch`,g(()=>f.value[0]),R,n):void 0;return{handleClick:A,handleBlur:P,handleFocus:N,handleKeyup:I,handleKeydown:L,mergedRailStyle:w,pressed:S,mergedClsPrefix:r,mergedValue:v,checked:y,mergedDisabled:m,cssVars:i?void 0:R,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:r,mergedRailStyle:i,onRender:a,$slots:s}=this;a?.();let{checked:l,unchecked:u,icon:d,"checked-icon":p,"unchecked-icon":h}=s,g=!(S(d)&&S(p)&&S(h));return k(),O(`div`,{role:`switch`,"aria-checked":r,class:m([`${e}-switch`,this.themeClass,g&&`${e}-switch--icon`,r&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`]),tabindex:this.mergedDisabled?void 0:0,style:n(this.cssVars),onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},[v(`div`,{class:m(`${e}-switch__rail`),"aria-hidden":`true`,style:n(i)},[_(()=>C(l,t=>C(u,n=>t||n?(k(),O(`div`,{key:4,"aria-hidden":!0,class:m(`${e}-switch__children-placeholder`)},[v(`div`,{class:m(`${e}-switch__rail-placeholder`)},[v(`div`,{class:m(`${e}-switch__button-placeholder`)},null,2),_(()=>t)],2),v(`div`,{class:m(`${e}-switch__rail-placeholder`)},[v(`div`,{class:m(`${e}-switch__button-placeholder`)},null,2),_(()=>n)],2)],2)):null))),v(`div`,{class:m(`${e}-switch__button`)},[_(()=>C(d,t=>C(p,n=>C(h,r=>(k(),o(c,null,{default:()=>this.loading?(k(),o(f,w({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps),null,16,[`clsPrefix`])):this.checked&&(n||t)?(k(),O(`div`,{class:m(`${e}-switch__button-icon`),key:n?`checked-icon`:`icon`},[_(()=>n||t)],2)):!this.checked&&(r||t)?(k(),O(`div`,{class:m(`${e}-switch__button-icon`),key:r?`unchecked-icon`:`icon`},[_(()=>r||t)],2)):null},1024)))))),_(()=>C(l,t=>t&&(k(),O(`div`,{key:`checked`,class:m(`${e}-switch__checked`)},[_(()=>t)],2)))),_(()=>C(u,t=>t&&(k(),O(`div`,{key:`unchecked`,class:m(`${e}-switch__unchecked`)},[_(()=>t)],2))))],2)],6)],46,N)}});export{I as t};