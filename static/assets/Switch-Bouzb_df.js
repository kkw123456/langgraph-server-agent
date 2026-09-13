import{i as e}from"./createLucideIcon-CRS-aC7q.js";import{F as t,Fr as n,Ft as r,Gt as i,Hn as a,I as o,Nt as s,Ot as c,P as l,Pr as u,R as d,Rn as f,Rr as p,Rt as m,Sr as h,Un as g,Vn as _,Vt as v,Wn as y,ar as b,c as x,cr as S,ct as C,dr as w,dt as T,hr as E,ht as D,ir as O,kt as k,or as A,zn as j}from"./index-C_M67W1L.js";var M=j(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[_(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),_(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),_(`button-placeholder`,`
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
 `,[t({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),_(`checked, unchecked`,`
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
 `),_(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),_(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),f(`&:focus`,[_(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),a(`round`,[_(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[_(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),g(`disabled`,[g(`icon`,[a(`rubber-band`,[a(`pressed`,[_(`rail`,[_(`button`,`max-width: var(--n-button-width-pressed);`)])]),_(`rail`,[f(`&:active`,[_(`button`,`max-width: var(--n-button-width-pressed);`)])]),a(`active`,[a(`pressed`,[_(`rail`,[_(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),_(`rail`,[f(`&:active`,[_(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),a(`active`,[_(`rail`,[_(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),_(`rail`,`
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
 `,[_(`button-icon`,`
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
 `,[t()]),_(`button`,`
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
 `)]),a(`active`,[_(`rail`,`background-color: var(--n-rail-color-active);`)]),a(`loading`,[_(`rail`,`
 cursor: wait;
 `)]),a(`disabled`,[_(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),N=[`aria-checked`,`tabindex`,`onClick`,`onFocus`,`onBlur`,`onKeyup`,`onKeydown`],P={...c.props,size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]},F,I=w({name:`Switch`,props:P,slots:Object,setup(t){F===void 0&&(F=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:a,inlineThemeDisabled:o,mergedComponentPropsRef:l}=i(t),f=c(`Switch`,`-switch`,M,x,t,a),p=d(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:l?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:m,mergedDisabledRef:h}=p,g=u(t.defaultValue),_=n(t,`value`),v=e(_,g),b=O(()=>v.value===t.checkedValue),S=u(!1),C=u(!1),w=O(()=>{let{railStyle:e}=t;if(e)return e({focused:C.value,checked:b.value})});function T(e){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=t,{nTriggerFormInput:a,nTriggerFormChange:o}=p;n&&D(n,e),i&&D(i,e),r&&D(r,e),g.value=e,a(),o()}function E(){let{nTriggerFormFocus:e}=p;e()}function A(){let{nTriggerFormBlur:e}=p;e()}function j(){t.loading||h.value||(v.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue))}function N(){C.value=!0,E()}function P(){C.value=!1,A(),S.value=!1}function I(e){t.loading||h.value||e.key===` `&&(v.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue),S.value=!1)}function L(e){t.loading||h.value||e.key===` `&&(e.preventDefault(),S.value=!0)}let R=O(()=>{let{value:e}=m,{self:{opacityDisabled:t,railColor:n,railColorActive:i,buttonBoxShadow:a,buttonColor:o,boxShadowFocus:c,loadingColor:l,textColor:u,iconColor:d,[y(`buttonHeight`,e)]:p,[y(`buttonWidth`,e)]:h,[y(`buttonWidthPressed`,e)]:g,[y(`railHeight`,e)]:_,[y(`railWidth`,e)]:v,[y(`railBorderRadius`,e)]:b,[y(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=f.value,C,w,T;return F?(C=`calc((${_} - ${p}) / 2)`,w=`max(${_}, ${p})`,T=`max(${v}, calc(${v} + ${p} - ${_}))`):(C=r((s(_)-s(p))/2),w=r(Math.max(s(_),s(p))),T=s(_)>s(p)?v:r(s(v)+s(p)-s(_))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":a,"--n-button-color":o,"--n-button-width":h,"--n-button-width-pressed":g,"--n-button-height":p,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":n,"--n-rail-color-active":i,"--n-rail-height":_,"--n-rail-width":v,"--n-width":T,"--n-box-shadow-focus":c,"--n-loading-color":l,"--n-text-color":u,"--n-icon-color":d}}),z=o?k(`switch`,O(()=>m.value[0]),R,t):void 0;return{handleClick:j,handleBlur:P,handleFocus:N,handleKeyup:I,handleKeydown:L,mergedRailStyle:w,pressed:S,mergedClsPrefix:a,mergedValue:v,checked:b,mergedDisabled:h,cssVars:o?void 0:R,themeClass:z?.themeClass,onRender:z?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:r,onRender:i,$slots:a}=this;i?.();let{checked:s,unchecked:c,icon:u,"checked-icon":d,"unchecked-icon":f}=a,g=!(C(u)&&C(d)&&C(f));return h(),S(`div`,{role:`switch`,"aria-checked":n,class:m([`${e}-switch`,this.themeClass,g&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`]),tabindex:this.mergedDisabled?void 0:0,style:p(this.cssVars),onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},[b(`div`,{class:m(`${e}-switch__rail`),"aria-hidden":`true`,style:p(r)},[v(()=>T(s,t=>T(c,n=>t||n?(h(),S(`div`,{key:4,"aria-hidden":!0,class:m(`${e}-switch__children-placeholder`)},[b(`div`,{class:m(`${e}-switch__rail-placeholder`)},[b(`div`,{class:m(`${e}-switch__button-placeholder`)},null,2),v(()=>t)],2),b(`div`,{class:m(`${e}-switch__rail-placeholder`)},[b(`div`,{class:m(`${e}-switch__button-placeholder`)},null,2),v(()=>n)],2)],2)):null))),b(`div`,{class:m(`${e}-switch__button`)},[v(()=>T(u,t=>T(d,n=>T(f,r=>(h(),A(o,null,{default:()=>this.loading?(h(),A(l,E({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps),null,16,[`clsPrefix`])):this.checked&&(n||t)?(h(),S(`div`,{class:m(`${e}-switch__button-icon`),key:n?`checked-icon`:`icon`},[v(()=>n||t)],2)):!this.checked&&(r||t)?(h(),S(`div`,{class:m(`${e}-switch__button-icon`),key:r?`unchecked-icon`:`icon`},[v(()=>r||t)],2)):null},1024)))))),v(()=>T(s,t=>t&&(h(),S(`div`,{key:`checked`,class:m(`${e}-switch__checked`)},[v(()=>t)],2)))),v(()=>T(c,t=>t&&(h(),S(`div`,{key:`unchecked`,class:m(`${e}-switch__unchecked`)},[v(()=>t)],2))))],2)],6)],46,N)}});export{I as t};