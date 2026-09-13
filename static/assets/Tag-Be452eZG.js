import{a as e}from"./createLucideIcon-DgHbSls0.js";import{An as t,At as n,Bt as r,Dn as i,En as a,Gn as o,It as s,J as c,Kn as l,Mn as u,Mt as d,Nt as f,Qn as p,Sr as m,Tr as h,Ut as g,Vn as _,X as v,Yn as y,Yt as b,_t as x,ct as S,ft as C,jn as w,jt as T,kn as E,lr as D,q as O,qn as k,qt as A,ur as j,xr as M,zt as N}from"./index-DPMqRjBW.js";var P=p({name:`Empty`,render(){return(()=>{let e=N(`15c1a247ae156450`);return e[0]||=l(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[l(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),l(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`})],-1)})()}}),F=i(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[E(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[a(`+`,[E(`description`,`
 margin-top: 8px;
 `)])]),E(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),E(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),I={...T.props,description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function},L=p({name:`Empty`,props:I,slots:Object,setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=A(t),a=T(`Empty`,`-empty`,F,f,t,n),{localeRef:s}=e(`Empty`),c=o(()=>t.description??i?.value?.Empty?.description),l=o(()=>i?.value?.Empty?.renderIcon||(()=>(D(),k(P)))),p=o(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:{[u(`iconSize`,e)]:r,[u(`fontSize`,e)]:i,textColor:o,iconColor:s,extraTextColor:c}}=a.value;return{"--n-icon-size":r,"--n-font-size":i,"--n-bezier":n,"--n-text-color":o,"--n-icon-color":s,"--n-extra-text-color":c}}),m=r?d(`empty`,o(()=>{let e=``,{size:n}=t;return e+=n[0],e}),p,t):void 0;return{mergedClsPrefix:n,mergedRenderIcon:l,localizedDescription:o(()=>c.value||s.value.description),cssVars:r?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:i}=this;return i?.(),D(),y(`div`,{class:r([`${t}-empty`,this.themeClass]),style:h(this.cssVars)},[this.showIcon?(D(),y(`div`,{key:0,class:r(`${t}-empty__icon`)},[e.icon?(D(),y(_,{key:0},[g(()=>e.icon())],64)):(D(),k(n,{key:1,clsPrefix:t},{default:this.mergedRenderIcon},1032,[`clsPrefix`]))],2)):g(()=>null),this.showDescription?(D(),y(`div`,{key:2,class:r(`${t}-empty__description`)},[e.default?(D(),y(_,{key:0},[g(()=>e.default())],64)):(D(),y(_,{key:1},[g(()=>this.localizedDescription)],64))],2)):g(()=>null),e.extra?(D(),y(`div`,{key:4,class:r(`${t}-empty__extra`)},[g(()=>e.extra())],2)):g(()=>null)],6)}}),R={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},z=i(`tag`,`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[t(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),E(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),E(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),E(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),E(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),t(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[E(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),E(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),t(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),t(`icon, avatar`,[t(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),t(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),t(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[w(`disabled`,[a(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[w(`checked`,`color: var(--n-text-color-hover-checkable);`)]),a(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[w(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),t(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[w(`disabled`,[a(`&:hover`,`background-color: var(--n-color-checked-hover);`),a(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),B=[`onClick`,`onMouseenter`,`onMouseleave`],V={...T.props,...R,bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function},H=b(`n-tag`),U=p({name:`Tag`,props:V,slots:Object,setup(e){let t=M(null),{mergedBorderedRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:a,mergedComponentPropsRef:c}=A(e),l=o(()=>e.size||c?.value?.Tag?.size||`medium`),f=T(`Tag`,`-tag`,z,O,e,r);j(H,{roundRef:m(e,`round`)});function p(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function h(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&x(n,t)}}let g={setTextContent(e){let{value:n}=t;n&&(n.textContent=e)}},_=S(`Tag`,a,r),y=o(()=>{let{type:t,color:{color:r,textColor:i}={}}=e,a=l.value,{common:{cubicBezierEaseInOut:o},self:{padding:c,closeMargin:d,borderRadius:p,opacityDisabled:m,textColorCheckable:h,textColorHoverCheckable:g,textColorPressedCheckable:_,textColorChecked:v,colorCheckable:y,colorHoverCheckable:b,colorPressedCheckable:x,colorChecked:S,colorCheckedHover:C,colorCheckedPressed:w,closeBorderRadius:T,fontWeightStrong:E,[u(`colorBordered`,t)]:D,[u(`closeSize`,a)]:O,[u(`closeIconSize`,a)]:k,[u(`fontSize`,a)]:A,[u(`height`,a)]:j,[u(`color`,t)]:M,[u(`textColor`,t)]:N,[u(`border`,t)]:P,[u(`closeIconColor`,t)]:F,[u(`closeIconColorHover`,t)]:I,[u(`closeIconColorPressed`,t)]:L,[u(`closeColorHover`,t)]:R,[u(`closeColorPressed`,t)]:z}}=f.value,B=s(d);return{"--n-font-weight-strong":E,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":o,"--n-border-radius":p,"--n-border":P,"--n-close-icon-size":k,"--n-close-color-pressed":z,"--n-close-color-hover":R,"--n-close-border-radius":T,"--n-close-icon-color":F,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":L,"--n-close-icon-color-disabled":F,"--n-close-margin-top":B.top,"--n-close-margin-right":B.right,"--n-close-margin-bottom":B.bottom,"--n-close-margin-left":B.left,"--n-close-size":O,"--n-color":r||(n.value?D:M),"--n-color-checkable":y,"--n-color-checked":S,"--n-color-checked-hover":C,"--n-color-checked-pressed":w,"--n-color-hover-checkable":b,"--n-color-pressed-checkable":x,"--n-font-size":A,"--n-height":j,"--n-opacity-disabled":m,"--n-padding":c,"--n-text-color":i||N,"--n-text-color-checkable":h,"--n-text-color-checked":v,"--n-text-color-hover-checkable":g,"--n-text-color-pressed-checkable":_}}),b=i?d(`tag`,o(()=>{let t=``,{type:r,color:{color:i,textColor:a}={}}=e;return t+=r[0],t+=l.value[0],i&&(t+=`a${v(i)}`),a&&(t+=`b${v(a)}`),n.value&&(t+=`c`),t}),y,e):void 0;return{...g,rtlEnabled:_,mergedClsPrefix:r,contentRef:t,mergedBordered:n,handleClick:p,handleCloseClick:h,cssVars:i?void 0:y,themeClass:b?.themeClass,onRender:b?.onRender}},render(){let{mergedClsPrefix:e,rtlEnabled:t,closable:n,color:{borderColor:i}={},round:a,onRender:o,$slots:s}=this;o?.();let u=C(s.avatar,t=>t&&(D(),y(`div`,{class:r(`${e}-tag__avatar`)},[g(()=>t)],2))),d=C(s.icon,t=>t&&(D(),y(`div`,{class:r(`${e}-tag__icon`)},[g(()=>t)],2)));return D(),y(`div`,{class:r([`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:t,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:a,[`${e}-tag--avatar`]:u,[`${e}-tag--icon`]:d,[`${e}-tag--closable`]:n}]),style:h(this.cssVars),onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[g(()=>d||u),l(`span`,{class:r(`${e}-tag__content`),ref:`contentRef`},[g(()=>this.$slots.default?.())],2),!this.checkable&&n?(D(),k(c,{key:0,clsPrefix:e,class:r(`${e}-tag__close`),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0},null,8,[`clsPrefix`,`class`,`disabled`,`onClick`,`focusable`,`round`,`isButtonTag`])):g(()=>null),!this.checkable&&this.mergedBordered?(D(),y(`div`,{key:2,class:r(`${e}-tag__border`),style:h({borderColor:i})},null,6)):g(()=>null)],46,B)}});export{H as n,L as r,U as t};