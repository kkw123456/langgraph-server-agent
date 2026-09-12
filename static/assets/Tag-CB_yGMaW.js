import{a as e}from"./createLucideIcon-CcUDMBwk.js";import{$n as t,At as n,G as r,Gt as i,Hn as a,J as o,K as s,Lr as c,Lt as l,Nr as u,Ot as d,Pr as f,Pt as p,Rn as m,Rt as h,Sr as g,Un as _,Vn as v,Vt as y,Wn as b,ar as x,ht as S,ir as C,jt as w,kt as T,ot as E,qt as D,rr as O,sr as k,ur as A,ut as j,xr as M,zn as N}from"./index-C2tisXHj.js";var P=A({name:`Empty`,render(){return(()=>{let e=l(`15c1a247ae156450`);return e[0]||=C(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[C(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),C(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`})],-1)})()}}),F=N(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[v(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[m(`+`,[v(`description`,`
 margin-top: 8px;
 `)])]),v(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),v(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),I={...T.props,description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function},L=A({name:`Empty`,props:I,slots:Object,setup(t){let{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedComponentPropsRef:o}=i(t),s=T(`Empty`,`-empty`,F,w,t,r),{localeRef:c}=e(`Empty`),l=O(()=>t.description??o?.value?.Empty?.description),u=O(()=>o?.value?.Empty?.renderIcon||(()=>(M(),x(P)))),d=O(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:{[b(`iconSize`,e)]:r,[b(`fontSize`,e)]:i,textColor:a,iconColor:o,extraTextColor:c}}=s.value;return{"--n-icon-size":r,"--n-font-size":i,"--n-bezier":n,"--n-text-color":a,"--n-icon-color":o,"--n-extra-text-color":c}}),f=a?n(`empty`,O(()=>{let e=``,{size:n}=t;return e+=n[0],e}),d,t):void 0;return{mergedClsPrefix:r,mergedRenderIcon:u,localizedDescription:O(()=>l.value||c.value.description),cssVars:a?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){let{$slots:e,mergedClsPrefix:n,onRender:r}=this;return r?.(),M(),k(`div`,{class:h([`${n}-empty`,this.themeClass]),style:c(this.cssVars)},[this.showIcon?(M(),k(`div`,{key:0,class:h(`${n}-empty__icon`)},[e.icon?(M(),k(t,{key:0},[y(()=>e.icon())],64)):(M(),x(d,{key:1,clsPrefix:n},{default:this.mergedRenderIcon},1032,[`clsPrefix`]))],2)):y(()=>null),this.showDescription?(M(),k(`div`,{key:2,class:h(`${n}-empty__description`)},[e.default?(M(),k(t,{key:0},[y(()=>e.default())],64)):(M(),k(t,{key:1},[y(()=>this.localizedDescription)],64))],2)):y(()=>null),e.extra?(M(),k(`div`,{key:4,class:h(`${n}-empty__extra`)},[y(()=>e.extra())],2)):y(()=>null)],6)}}),R={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},z=N(`tag`,`
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
`,[a(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),v(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),v(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),v(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),v(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),a(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[v(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),v(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),a(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),a(`icon, avatar`,[a(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),a(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),a(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[_(`disabled`,[m(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[_(`checked`,`color: var(--n-text-color-hover-checkable);`)]),m(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[_(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),a(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[_(`disabled`,[m(`&:hover`,`background-color: var(--n-color-checked-hover);`),m(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),B=[`onClick`,`onMouseenter`,`onMouseleave`],V={...T.props,...R,bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function},H=D(`n-tag`),U=A({name:`Tag`,props:V,slots:Object,setup(e){let t=u(null),{mergedBorderedRef:a,mergedClsPrefixRef:s,inlineThemeDisabled:c,mergedRtlRef:l,mergedComponentPropsRef:d}=i(e),m=O(()=>e.size||d?.value?.Tag?.size||`medium`),h=T(`Tag`,`-tag`,z,r,e,s);g(H,{roundRef:f(e,`round`)});function _(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function v(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&S(n,t)}}let y={setTextContent(e){let{value:n}=t;n&&(n.textContent=e)}},x=E(`Tag`,l,s),C=O(()=>{let{type:t,color:{color:n,textColor:r}={}}=e,i=m.value,{common:{cubicBezierEaseInOut:o},self:{padding:s,closeMargin:c,borderRadius:l,opacityDisabled:u,textColorCheckable:d,textColorHoverCheckable:f,textColorPressedCheckable:g,textColorChecked:_,colorCheckable:v,colorHoverCheckable:y,colorPressedCheckable:x,colorChecked:S,colorCheckedHover:C,colorCheckedPressed:w,closeBorderRadius:T,fontWeightStrong:E,[b(`colorBordered`,t)]:D,[b(`closeSize`,i)]:O,[b(`closeIconSize`,i)]:k,[b(`fontSize`,i)]:A,[b(`height`,i)]:j,[b(`color`,t)]:M,[b(`textColor`,t)]:N,[b(`border`,t)]:P,[b(`closeIconColor`,t)]:F,[b(`closeIconColorHover`,t)]:I,[b(`closeIconColorPressed`,t)]:L,[b(`closeColorHover`,t)]:R,[b(`closeColorPressed`,t)]:z}}=h.value,B=p(c);return{"--n-font-weight-strong":E,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":o,"--n-border-radius":l,"--n-border":P,"--n-close-icon-size":k,"--n-close-color-pressed":z,"--n-close-color-hover":R,"--n-close-border-radius":T,"--n-close-icon-color":F,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":L,"--n-close-icon-color-disabled":F,"--n-close-margin-top":B.top,"--n-close-margin-right":B.right,"--n-close-margin-bottom":B.bottom,"--n-close-margin-left":B.left,"--n-close-size":O,"--n-color":n||(a.value?D:M),"--n-color-checkable":v,"--n-color-checked":S,"--n-color-checked-hover":C,"--n-color-checked-pressed":w,"--n-color-hover-checkable":y,"--n-color-pressed-checkable":x,"--n-font-size":A,"--n-height":j,"--n-opacity-disabled":u,"--n-padding":s,"--n-text-color":r||N,"--n-text-color-checkable":d,"--n-text-color-checked":_,"--n-text-color-hover-checkable":f,"--n-text-color-pressed-checkable":g}}),w=c?n(`tag`,O(()=>{let t=``,{type:n,color:{color:r,textColor:i}={}}=e;return t+=n[0],t+=m.value[0],r&&(t+=`a${o(r)}`),i&&(t+=`b${o(i)}`),a.value&&(t+=`c`),t}),C,e):void 0;return{...y,rtlEnabled:x,mergedClsPrefix:s,contentRef:t,mergedBordered:a,handleClick:_,handleCloseClick:v,cssVars:c?void 0:C,themeClass:w?.themeClass,onRender:w?.onRender}},render(){let{mergedClsPrefix:e,rtlEnabled:t,closable:n,color:{borderColor:r}={},round:i,onRender:a,$slots:o}=this;a?.();let l=j(o.avatar,t=>t&&(M(),k(`div`,{class:h(`${e}-tag__avatar`)},[y(()=>t)],2))),u=j(o.icon,t=>t&&(M(),k(`div`,{class:h(`${e}-tag__icon`)},[y(()=>t)],2)));return M(),k(`div`,{class:h([`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:t,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:i,[`${e}-tag--avatar`]:l,[`${e}-tag--icon`]:u,[`${e}-tag--closable`]:n}]),style:c(this.cssVars),onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[y(()=>u||l),C(`span`,{class:h(`${e}-tag__content`),ref:`contentRef`},[y(()=>this.$slots.default?.())],2),!this.checkable&&n?(M(),x(s,{key:0,clsPrefix:e,class:h(`${e}-tag__close`),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0},null,8,[`clsPrefix`,`class`,`disabled`,`onClick`,`focusable`,`round`,`isButtonTag`])):y(()=>null),!this.checkable&&this.mergedBordered?(M(),k(`div`,{key:2,class:h(`${e}-tag__border`),style:c({borderColor:r})},null,6)):y(()=>null)],46,B)}});export{H as n,L as r,U as t};