import{i as e}from"./createLucideIcon-DgHbSls0.js";import{An as t,Bt as n,Dn as r,En as i,F as a,Ft as o,Gn as s,I as c,Kn as l,L as u,Lt as d,Mn as f,Mt as p,Qn as m,Sr as h,Tr as g,Ut as _,Yn as v,_t as y,c as b,ft as x,jn as S,jt as C,kn as w,lr as T,lt as E,nr as D,qn as O,qt as k,xr as A,z as j}from"./index-DPMqRjBW.js";var M=r(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[w(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),w(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),w(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),r(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[c({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),w(`checked, unchecked`,`
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
 `),w(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),w(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),i(`&:focus`,[w(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),t(`round`,[w(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[w(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),S(`disabled`,[S(`icon`,[t(`rubber-band`,[t(`pressed`,[w(`rail`,[w(`button`,`max-width: var(--n-button-width-pressed);`)])]),w(`rail`,[i(`&:active`,[w(`button`,`max-width: var(--n-button-width-pressed);`)])]),t(`active`,[t(`pressed`,[w(`rail`,[w(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),w(`rail`,[i(`&:active`,[w(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),t(`active`,[w(`rail`,[w(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),w(`rail`,`
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
 `,[w(`button-icon`,`
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
 `,[c()]),w(`button`,`
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
 `)]),t(`active`,[w(`rail`,`background-color: var(--n-rail-color-active);`)]),t(`loading`,[w(`rail`,`
 cursor: wait;
 `)]),t(`disabled`,[w(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),N=[`aria-checked`,`tabindex`,`onClick`,`onFocus`,`onBlur`,`onKeyup`,`onKeydown`],P={...C.props,size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]},F,I=m({name:`Switch`,props:P,slots:Object,setup(t){F===void 0&&(F=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=k(t),a=C(`Switch`,`-switch`,M,b,t,n),c=j(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:i?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:l,mergedDisabledRef:u}=c,m=A(t.defaultValue),g=h(t,`value`),_=e(g,m),v=s(()=>_.value===t.checkedValue),x=A(!1),S=A(!1),w=s(()=>{let{railStyle:e}=t;if(e)return e({focused:S.value,checked:v.value})});function T(e){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=t,{nTriggerFormInput:a,nTriggerFormChange:o}=c;n&&y(n,e),i&&y(i,e),r&&y(r,e),m.value=e,a(),o()}function E(){let{nTriggerFormFocus:e}=c;e()}function D(){let{nTriggerFormBlur:e}=c;e()}function O(){t.loading||u.value||(_.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue))}function N(){S.value=!0,E()}function P(){S.value=!1,D(),x.value=!1}function I(e){t.loading||u.value||e.key===` `&&(_.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue),x.value=!1)}function L(e){t.loading||u.value||e.key===` `&&(e.preventDefault(),x.value=!0)}let R=s(()=>{let{value:e}=l,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:s,boxShadowFocus:c,loadingColor:u,textColor:p,iconColor:m,[f(`buttonHeight`,e)]:h,[f(`buttonWidth`,e)]:g,[f(`buttonWidthPressed`,e)]:_,[f(`railHeight`,e)]:v,[f(`railWidth`,e)]:y,[f(`railBorderRadius`,e)]:b,[f(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=a.value,C,w,T;return F?(C=`calc((${v} - ${h}) / 2)`,w=`max(${v}, ${h})`,T=`max(${y}, calc(${y} + ${h} - ${v}))`):(C=d((o(v)-o(h))/2),w=d(Math.max(o(v),o(h))),T=o(v)>o(h)?y:d(o(y)+o(h)-o(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":i,"--n-button-color":s,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":h,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":c,"--n-loading-color":u,"--n-text-color":p,"--n-icon-color":m}}),z=r?p(`switch`,s(()=>l.value[0]),R,t):void 0;return{handleClick:O,handleBlur:P,handleFocus:N,handleKeyup:I,handleKeydown:L,mergedRailStyle:w,pressed:x,mergedClsPrefix:n,mergedValue:_,checked:v,mergedDisabled:u,cssVars:r?void 0:R,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:r,mergedRailStyle:i,onRender:o,$slots:s}=this;o?.();let{checked:c,unchecked:d,icon:f,"checked-icon":p,"unchecked-icon":m}=s,h=!(E(f)&&E(p)&&E(m));return T(),v(`div`,{role:`switch`,"aria-checked":r,class:n([`${e}-switch`,this.themeClass,h&&`${e}-switch--icon`,r&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`]),tabindex:this.mergedDisabled?void 0:0,style:g(this.cssVars),onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},[l(`div`,{class:n(`${e}-switch__rail`),"aria-hidden":`true`,style:g(i)},[_(()=>x(c,t=>x(d,r=>t||r?(T(),v(`div`,{key:4,"aria-hidden":!0,class:n(`${e}-switch__children-placeholder`)},[l(`div`,{class:n(`${e}-switch__rail-placeholder`)},[l(`div`,{class:n(`${e}-switch__button-placeholder`)},null,2),_(()=>t)],2),l(`div`,{class:n(`${e}-switch__rail-placeholder`)},[l(`div`,{class:n(`${e}-switch__button-placeholder`)},null,2),_(()=>r)],2)],2)):null))),l(`div`,{class:n(`${e}-switch__button`)},[_(()=>x(f,t=>x(p,r=>x(m,i=>(T(),O(u,null,{default:()=>this.loading?(T(),O(a,D({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps),null,16,[`clsPrefix`])):this.checked&&(r||t)?(T(),v(`div`,{class:n(`${e}-switch__button-icon`),key:r?`checked-icon`:`icon`},[_(()=>r||t)],2)):!this.checked&&(i||t)?(T(),v(`div`,{class:n(`${e}-switch__button-icon`),key:i?`unchecked-icon`:`icon`},[_(()=>i||t)],2)):null},1024)))))),_(()=>x(c,t=>t&&(T(),v(`div`,{key:`checked`,class:n(`${e}-switch__checked`)},[_(()=>t)],2)))),_(()=>x(d,t=>t&&(T(),v(`div`,{key:`unchecked`,class:n(`${e}-switch__unchecked`)},[_(()=>t)],2))))],2)],6)],46,N)}});export{I as t};