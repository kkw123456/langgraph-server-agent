import{i as e}from"./createLucideIcon-BXmGfaRL.js";import{$n as t,An as n,Dn as r,F as i,Ft as a,Gt as o,Hn as s,I as c,Kn as l,Nt as u,On as d,Ot as f,P as p,R as m,Rt as h,Sr as g,Tn as _,Un as v,Vt as y,Wn as b,Yn as x,c as S,ct as C,dt as w,ht as T,kn as E,kt as D,or as O,vr as k,wn as A,yr as j}from"./index-B-84Kufr.js";var M=_(`switch`,`
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
 `),_(`base-loading`,`
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
 `)]),d(`round`,[r(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[r(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),E(`disabled`,[E(`icon`,[d(`rubber-band`,[d(`pressed`,[r(`rail`,[r(`button`,`max-width: var(--n-button-width-pressed);`)])]),r(`rail`,[A(`&:active`,[r(`button`,`max-width: var(--n-button-width-pressed);`)])]),d(`active`,[d(`pressed`,[r(`rail`,[r(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),r(`rail`,[A(`&:active`,[r(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),d(`active`,[r(`rail`,[r(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),r(`rail`,`
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
 `)]),d(`active`,[r(`rail`,`background-color: var(--n-rail-color-active);`)]),d(`loading`,[r(`rail`,`
 cursor: wait;
 `)]),d(`disabled`,[r(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),N=[`aria-checked`,`tabindex`,`onClick`,`onFocus`,`onBlur`,`onKeyup`,`onKeydown`],P={...f.props,size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]},F,I=x({name:`Switch`,props:P,slots:Object,setup(t){F===void 0&&(F=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:c}=o(t),l=f(`Switch`,`-switch`,M,S,t,r),d=m(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:c?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:p,mergedDisabledRef:h}=d,g=k(t.defaultValue),_=j(t,`value`),v=e(_,g),y=s(()=>v.value===t.checkedValue),b=k(!1),x=k(!1),C=s(()=>{let{railStyle:e}=t;if(e)return e({focused:x.value,checked:y.value})});function w(e){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=t,{nTriggerFormInput:a,nTriggerFormChange:o}=d;n&&T(n,e),i&&T(i,e),r&&T(r,e),g.value=e,a(),o()}function E(){let{nTriggerFormFocus:e}=d;e()}function O(){let{nTriggerFormBlur:e}=d;e()}function A(){t.loading||h.value||(v.value===t.checkedValue?w(t.uncheckedValue):w(t.checkedValue))}function N(){x.value=!0,E()}function P(){x.value=!1,O(),b.value=!1}function I(e){t.loading||h.value||e.key===` `&&(v.value===t.checkedValue?w(t.uncheckedValue):w(t.checkedValue),b.value=!1)}function L(e){t.loading||h.value||e.key===` `&&(e.preventDefault(),b.value=!0)}let R=s(()=>{let{value:e}=p,{self:{opacityDisabled:t,railColor:r,railColorActive:i,buttonBoxShadow:o,buttonColor:s,boxShadowFocus:c,loadingColor:d,textColor:f,iconColor:m,[n(`buttonHeight`,e)]:h,[n(`buttonWidth`,e)]:g,[n(`buttonWidthPressed`,e)]:_,[n(`railHeight`,e)]:v,[n(`railWidth`,e)]:y,[n(`railBorderRadius`,e)]:b,[n(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=l.value,C,w,T;return F?(C=`calc((${v} - ${h}) / 2)`,w=`max(${v}, ${h})`,T=`max(${y}, calc(${y} + ${h} - ${v}))`):(C=a((u(v)-u(h))/2),w=a(Math.max(u(v),u(h))),T=u(v)>u(h)?y:a(u(y)+u(h)-u(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":o,"--n-button-color":s,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":h,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":r,"--n-rail-color-active":i,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":c,"--n-loading-color":d,"--n-text-color":f,"--n-icon-color":m}}),z=i?D(`switch`,s(()=>p.value[0]),R,t):void 0;return{handleClick:A,handleBlur:P,handleFocus:N,handleKeyup:I,handleKeydown:L,mergedRailStyle:C,pressed:b,mergedClsPrefix:r,mergedValue:v,checked:y,mergedDisabled:h,cssVars:i?void 0:R,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:n,checked:r,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:s,unchecked:u,icon:d,"checked-icon":f,"unchecked-icon":m}=o,_=!(C(d)&&C(f)&&C(m));return O(),l(`div`,{role:`switch`,"aria-checked":r,class:h([`${e}-switch`,this.themeClass,_&&`${e}-switch--icon`,r&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`]),tabindex:this.mergedDisabled?void 0:0,style:g(this.cssVars),onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},[v(`div`,{class:h(`${e}-switch__rail`),"aria-hidden":`true`,style:g(i)},[y(()=>w(s,t=>w(u,n=>t||n?(O(),l(`div`,{key:4,"aria-hidden":!0,class:h(`${e}-switch__children-placeholder`)},[v(`div`,{class:h(`${e}-switch__rail-placeholder`)},[v(`div`,{class:h(`${e}-switch__button-placeholder`)},null,2),y(()=>t)],2),v(`div`,{class:h(`${e}-switch__rail-placeholder`)},[v(`div`,{class:h(`${e}-switch__button-placeholder`)},null,2),y(()=>n)],2)],2)):null))),v(`div`,{class:h(`${e}-switch__button`)},[y(()=>w(d,n=>w(f,r=>w(m,i=>(O(),b(c,null,{default:()=>this.loading?(O(),b(p,t({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps),null,16,[`clsPrefix`])):this.checked&&(r||n)?(O(),l(`div`,{class:h(`${e}-switch__button-icon`),key:r?`checked-icon`:`icon`},[y(()=>r||n)],2)):!this.checked&&(i||n)?(O(),l(`div`,{class:h(`${e}-switch__button-icon`),key:i?`unchecked-icon`:`icon`},[y(()=>i||n)],2)):null},1024)))))),y(()=>w(s,t=>t&&(O(),l(`div`,{key:`checked`,class:h(`${e}-switch__checked`)},[y(()=>t)],2)))),y(()=>w(u,t=>t&&(O(),l(`div`,{key:`unchecked`,class:h(`${e}-switch__unchecked`)},[y(()=>t)],2))))],2)],6)],46,N)}});export{I as t};