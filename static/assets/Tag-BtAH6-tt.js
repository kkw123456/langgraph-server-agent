import{a as e}from"./createLucideIcon-BLces-_0.js";import{At as t,Bn as n,Cr as r,Fr as i,Ft as a,Gn as o,Hn as s,Ht as c,Jt as l,K as u,Kt as d,Mt as f,Pr as p,Rr as m,Rt as h,Sr as g,Un as _,Wn as v,Y as y,ar as b,cr as x,dr as S,dt as C,er as w,gt as T,ir as E,jt as D,kt as O,or as k,q as A,st as j,zn as M,zt as N}from"./index-BCIasUWA.js";var P=S({name:`Empty`,render(){return(()=>{let e=h(`15c1a247ae156450`);return e[0]||=b(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[b(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),b(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`})],-1)})()}}),F=n(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[s(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[M(`+`,[s(`description`,`
 margin-top: 8px;
 `)])]),s(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),s(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),I={...t.props,description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function},L=S({name:`Empty`,props:I,slots:Object,setup(n){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a}=d(n),s=t(`Empty`,`-empty`,F,f,n,r),{localeRef:c}=e(`Empty`),l=E(()=>n.description??a?.value?.Empty?.description),u=E(()=>a?.value?.Empty?.renderIcon||(()=>(g(),k(P)))),p=E(()=>{let{size:e}=n,{common:{cubicBezierEaseInOut:t},self:{[o(`iconSize`,e)]:r,[o(`fontSize`,e)]:i,textColor:a,iconColor:c,extraTextColor:l}}=s.value;return{"--n-icon-size":r,"--n-font-size":i,"--n-bezier":t,"--n-text-color":a,"--n-icon-color":c,"--n-extra-text-color":l}}),m=i?D(`empty`,E(()=>{let e=``,{size:t}=n;return e+=t[0],e}),p,n):void 0;return{mergedClsPrefix:r,mergedRenderIcon:u,localizedDescription:E(()=>l.value||c.value.description),cssVars:i?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),g(),x(`div`,{class:N([`${t}-empty`,this.themeClass]),style:m(this.cssVars)},[this.showIcon?(g(),x(`div`,{key:0,class:N(`${t}-empty__icon`)},[e.icon?(g(),x(w,{key:0},[c(()=>e.icon())],64)):(g(),k(O,{key:1,clsPrefix:t},{default:this.mergedRenderIcon},1032,[`clsPrefix`]))],2)):c(()=>null),this.showDescription?(g(),x(`div`,{key:2,class:N(`${t}-empty__description`)},[e.default?(g(),x(w,{key:0},[c(()=>e.default())],64)):(g(),x(w,{key:1},[c(()=>this.localizedDescription)],64))],2)):c(()=>null),e.extra?(g(),x(`div`,{key:4,class:N(`${t}-empty__extra`)},[c(()=>e.extra())],2)):c(()=>null)],6)}}),R={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},z=n(`tag`,`
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
`,[_(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),s(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),s(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),s(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),s(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),_(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[s(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),s(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),_(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),_(`icon, avatar`,[_(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),_(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),_(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[v(`disabled`,[M(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[v(`checked`,`color: var(--n-text-color-hover-checkable);`)]),M(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[v(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),_(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[v(`disabled`,[M(`&:hover`,`background-color: var(--n-color-checked-hover);`),M(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),B=[`onClick`,`onMouseenter`,`onMouseleave`],V={...t.props,...R,bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function},H=l(`n-tag`),U=S({name:`Tag`,props:V,slots:Object,setup(e){let n=p(null),{mergedBorderedRef:s,mergedClsPrefixRef:c,inlineThemeDisabled:l,mergedRtlRef:f,mergedComponentPropsRef:m}=d(e),h=E(()=>e.size||m?.value?.Tag?.size||`medium`),g=t(`Tag`,`-tag`,z,u,e,c);r(H,{roundRef:i(e,`round`)});function _(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function v(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&T(n,t)}}let b={setTextContent(e){let{value:t}=n;t&&(t.textContent=e)}},x=j(`Tag`,f,c),S=E(()=>{let{type:t,color:{color:n,textColor:r}={}}=e,i=h.value,{common:{cubicBezierEaseInOut:c},self:{padding:l,closeMargin:u,borderRadius:d,opacityDisabled:f,textColorCheckable:p,textColorHoverCheckable:m,textColorPressedCheckable:_,textColorChecked:v,colorCheckable:y,colorHoverCheckable:b,colorPressedCheckable:x,colorChecked:S,colorCheckedHover:C,colorCheckedPressed:w,closeBorderRadius:T,fontWeightStrong:E,[o(`colorBordered`,t)]:D,[o(`closeSize`,i)]:O,[o(`closeIconSize`,i)]:k,[o(`fontSize`,i)]:A,[o(`height`,i)]:j,[o(`color`,t)]:M,[o(`textColor`,t)]:N,[o(`border`,t)]:P,[o(`closeIconColor`,t)]:F,[o(`closeIconColorHover`,t)]:I,[o(`closeIconColorPressed`,t)]:L,[o(`closeColorHover`,t)]:R,[o(`closeColorPressed`,t)]:z}}=g.value,B=a(u);return{"--n-font-weight-strong":E,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":c,"--n-border-radius":d,"--n-border":P,"--n-close-icon-size":k,"--n-close-color-pressed":z,"--n-close-color-hover":R,"--n-close-border-radius":T,"--n-close-icon-color":F,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":L,"--n-close-icon-color-disabled":F,"--n-close-margin-top":B.top,"--n-close-margin-right":B.right,"--n-close-margin-bottom":B.bottom,"--n-close-margin-left":B.left,"--n-close-size":O,"--n-color":n||(s.value?D:M),"--n-color-checkable":y,"--n-color-checked":S,"--n-color-checked-hover":C,"--n-color-checked-pressed":w,"--n-color-hover-checkable":b,"--n-color-pressed-checkable":x,"--n-font-size":A,"--n-height":j,"--n-opacity-disabled":f,"--n-padding":l,"--n-text-color":r||N,"--n-text-color-checkable":p,"--n-text-color-checked":v,"--n-text-color-hover-checkable":m,"--n-text-color-pressed-checkable":_}}),C=l?D(`tag`,E(()=>{let t=``,{type:n,color:{color:r,textColor:i}={}}=e;return t+=n[0],t+=h.value[0],r&&(t+=`a${y(r)}`),i&&(t+=`b${y(i)}`),s.value&&(t+=`c`),t}),S,e):void 0;return{...b,rtlEnabled:x,mergedClsPrefix:c,contentRef:n,mergedBordered:s,handleClick:_,handleCloseClick:v,cssVars:l?void 0:S,themeClass:C?.themeClass,onRender:C?.onRender}},render(){let{mergedClsPrefix:e,rtlEnabled:t,closable:n,color:{borderColor:r}={},round:i,onRender:a,$slots:o}=this;a?.();let s=C(o.avatar,t=>t&&(g(),x(`div`,{class:N(`${e}-tag__avatar`)},[c(()=>t)],2))),l=C(o.icon,t=>t&&(g(),x(`div`,{class:N(`${e}-tag__icon`)},[c(()=>t)],2)));return g(),x(`div`,{class:N([`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:t,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:i,[`${e}-tag--avatar`]:s,[`${e}-tag--icon`]:l,[`${e}-tag--closable`]:n}]),style:m(this.cssVars),onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[c(()=>l||s),b(`span`,{class:N(`${e}-tag__content`),ref:`contentRef`},[c(()=>this.$slots.default?.())],2),!this.checkable&&n?(g(),k(A,{key:0,clsPrefix:e,class:N(`${e}-tag__close`),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0},null,8,[`clsPrefix`,`class`,`disabled`,`onClick`,`focusable`,`round`,`isButtonTag`])):c(()=>null),!this.checkable&&this.mergedBordered?(g(),x(`div`,{key:2,class:N(`${e}-tag__border`),style:m({borderColor:r})},null,6)):c(()=>null)],46,B)}});export{H as n,L as r,U as t};