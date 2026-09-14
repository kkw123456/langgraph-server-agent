import{a as e}from"./createLucideIcon-_CLNjfoO.js";import{A as t,C as n,D as r,E as i,O as a,P as o,T as s,k as c}from"./workbench-CY6foNDO.js";import{t as l}from"./use-keyboard-C8Ak54ab.js";import{t as u}from"./ChevronRight-BldGEdaJ.js";import{t as d}from"./Icon-Db7d8Kue.js";import{$n as f,Bn as p,Cr as m,F as h,Fr as g,Hn as _,In as v,Jt as y,Kn as b,L as x,Ln as S,Lt as C,Mt as w,Nt as T,Or as E,Ot as D,Pr as O,Rt as k,Sr as A,Vn as j,Yt as M,Zt as N,_ as P,an as F,ar as I,at as L,cn as R,fr as z,ir as B,jt as V,mr as H,nn as ee,pr as U,rr as W,sn as te,sr as G,ur as K,w as ne,wt as q,xt as re,zn as J}from"./index-oKSSUqMd.js";function Y(e){return t=>{e.value=t?t.$el:null}}var X=F(`n-dropdown-menu`),Z=F(`n-dropdown`),Q=F(`n-dropdown-option`),ie=K({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return A(),G(`div`,{class:y(`${this.clsPrefix}-dropdown-divider`)},null,2)}});function $(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ae(e){return e.type===`group`}function oe(e){return e.type===`divider`}function se(e){return e.type===`render`}function ce(e,t,n){if(!t)return e;let r=O(e.value),i=null;return E(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}var le=K({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=U(Z),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:s,animatedRef:c,mergedShowRef:l,renderLabelRef:u,renderIconRef:d,labelFieldRef:f,childrenFieldRef:p,renderOptionRef:h,nodePropsRef:g,menuPropsRef:_}=t,v=U(Q,null),y=U(X),b=U(V),x=W(()=>e.tmNode.rawNode),S=W(()=>{let{value:t}=p;return $(e.tmNode.rawNode,t)}),C=W(()=>{let{disabled:t}=e.tmNode;return t}),w=ce(W(()=>{if(!S.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l!==null&&u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,W(()=>r.value===null&&!c.value)),T=W(()=>!!v?.enteringSubmenuRef.value),E=O(!1);m(Q,{enteringSubmenuRef:E});function k(){E.value=!0}function A(){E.value=!1}function j(){let{parentKey:t,tmNode:a}=e;a.disabled||l.value&&(i.value=t,r.value=null,n.value=a.key)}function M(){let{tmNode:t}=e;t.disabled||l.value&&n.value!==t.key&&j()}function N(t){if(e.tmNode.disabled||!l.value)return;let{relatedTarget:r}=t;r&&!o({target:r},`dropdownOption`)&&!o({target:r},`scrollbarRail`)&&(n.value=null)}function P(){let{value:n}=S,{tmNode:r}=e;l.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:f,renderLabel:u,renderIcon:d,siblingHasIcon:y.showIconRef,siblingHasSubmenu:y.hasSubmenuRef,menuProps:_,popoverBody:b,animated:c,mergedShowSubmenu:W(()=>w.value&&!T.value),rawNode:x,hasSubmenu:S,pending:D(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:D(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r!==-1&&r<t.length-1}),active:D(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r!==-1&&r===t.length-1}),mergedDisabled:C,renderOption:h,nodeProps:g,handleClick:P,handleMouseMove:M,handleMouseEnter:j,handleMouseLeave:N,handleSubmenuBeforeEnter:k,handleSubmenuAfterEnter:A}},render(){let{animated:e,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:o,siblingHasSubmenu:s,renderLabel:l,renderIcon:p,renderOption:m,nodeProps:h,props:g,scrollable:_}=this,v=null;if(r){let e=this.menuProps?.(n,n.children);v=(t=>(A(),I(pe,H({key:1},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}),null,16,[`clsPrefix`,`scrollable`,`tmNodes`,`parentKey`])))(v)}let S={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},C=h?.(n),w=(A(),G(`div`,H({class:[`${i}-dropdown-option`,C?.class],"data-dropdown-option":!0},C),[N(()=>z(`div`,H(S,g),[(A(),G(`div`,{class:y([`${i}-dropdown-option-body__prefix`,o&&`${i}-dropdown-option-body__prefix--show-icon`])},[N(()=>[p?p(n):x(n.icon)])],2)),(A(),G(`div`,{"data-dropdown-option":!0,class:y(`${i}-dropdown-option-body__label`)},[l?(A(),G(f,{key:0},[N(()=>l(n))],64)):(A(),G(f,{key:1},[N(()=>x(n[this.labelField]??n.title))],64))],2)),(A(),G(`div`,{"data-dropdown-option":!0,class:y([`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`])},[this.hasSubmenu?(A(),I(d,{key:0},{_:1,default:M(()=>(A(),I(u)))})):N(()=>null)],2))])),this.hasSubmenu?(A(),I(t,{key:0},{default:()=>[(A(),I(c,null,{default:()=>(A(),G(`div`,{class:y(`${i}-dropdown-offset-container`)},[(A(),I(a,{show:this.mergedShowSubmenu,placement:this.placement,to:_&&this.popoverBody||void 0,teleportDisabled:!_},{default:()=>(A(),G(`div`,{class:y(`${i}-dropdown-menu-wrapper`)},[e?(A(),I(b,{key:0,onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>v},1032,[`onBeforeEnter`,`onAfterEnter`])):(A(),G(f,{key:1},[N(()=>v)],64))],2))},1032,[`show`,`placement`,`to`,`teleportDisabled`]))],2))},1024))]},1024)):N(()=>null)],16));return m?m({node:w,option:n}):w}}),ue=K({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=U(X),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=U(Z);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=(A(),G(`div`,H({class:`${e}-dropdown-option`},r?.(o)),[B(`div`,{class:y(`${e}-dropdown-option-body ${e}-dropdown-option-body--group`)},[B(`div`,{"data-dropdown-option":!0,class:y([`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`])},[N(()=>x(o.icon))],2),B(`div`,{class:y(`${e}-dropdown-option-body__label`),"data-dropdown-option":!0},[i?(A(),G(f,{key:0},[N(()=>i(o))],64)):(A(),G(f,{key:1},[N(()=>x(o.title??o[this.labelField]))],64))],2),B(`div`,{class:y([`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`]),"data-dropdown-option":!0},null,2)],2)],16));return a?a({node:s,option:o}):s}}),de=K({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return A(),G(f,null,[(A(),I(ue,{clsPrefix:n,tmNode:e,key:e.key},null,8,[`clsPrefix`,`tmNode`])),N(()=>r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:oe(r)?z(ie,{clsPrefix:n,key:e.key}):e.isGroup?(R(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):(A(),I(le,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key},null,8,[`clsPrefix`,`tmNode`,`parentKey`]))}))],64)}}),fe=K({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return z(`div`,t,[e?.()])}}),pe=K({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=U(Z);m(X,{showIconRef:W(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:W(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>$(e,t));let{rawNode:n}=e;return $(n,t)})})});let r=O(null);return m(w,null),m(T,null),m(V,r),{bodyRef:r}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,i=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:se(i)?(A(),I(fe,{tmNode:r,key:r.key},null,8,[`tmNode`])):oe(i)?(A(),I(ie,{clsPrefix:t,key:r.key},null,8,[`clsPrefix`])):ae(i)?(A(),I(de,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key},null,8,[`clsPrefix`,`tmNode`,`parentKey`])):(A(),I(le,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n},null,8,[`clsPrefix`,`tmNode`,`parentKey`,`props`,`scrollable`]))});return A(),G(`div`,{class:y([`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`]),ref:`bodyRef`},[n?(A(),I(L,{key:0,contentClass:`${t}-dropdown-menu__content`},{default:()=>i},1032,[`contentClass`])):(A(),G(f,{key:1},[N(()=>i)],64)),this.showArrow?(A(),G(f,{key:2},[N(()=>r({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}))],64)):N(()=>null)],2)}}),me=S(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[h(),S(`dropdown-option`,`
 position: relative;
 `,[v(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[v(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),S(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[v(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),j(`disabled`,[p(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[J(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),v(`&::before`,`background-color: var(--n-option-color-hover);`)]),p(`active`,`
 color: var(--n-option-text-color-active);
 `,[J(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),v(`&::before`,`background-color: var(--n-option-color-active);`)]),p(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[J(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),p(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),p(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[J(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[p(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),J(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[p(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),S(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),J(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),J(`suffix`,`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[p(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),S(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),S(`dropdown-menu`,`pointer-events: all;`)]),S(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),S(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),S(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),v(`>`,[S(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),j(`scrollable`,`
 padding: var(--n-padding);
 `),p(`scrollable`,[J(`content`,`
 padding: var(--n-padding);
 `)])]),he={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},ge=Object.keys(i),_e={...i,...he,...C.props},ve=K({name:`Dropdown`,inheritAttrs:!1,props:_e,setup(t){let r=O(!1),i=e(g(t,`show`),r),a=W(()=>{let{keyField:e,childrenField:r}=t;return n(t.options,{getKey(t){return t[e]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[r]}})}),o=W(()=>a.value.treeNodes),s=O(null),c=O(null),u=O(null),d=W(()=>s.value??c.value??u.value??null),f=W(()=>a.value.getPath(d.value).keyPath),p=W(()=>a.value.getPath(t.value).keyPath),h=D(()=>t.keyboard&&i.value);l({keydown:{ArrowUp:{prevent:!0,handler:P},ArrowRight:{prevent:!0,handler:N},ArrowDown:{prevent:!0,handler:F},ArrowLeft:{prevent:!0,handler:M},Enter:{prevent:!0,handler:I},Escape:j}},h);let{mergedClsPrefixRef:v,inlineThemeDisabled:y,mergedComponentPropsRef:b}=ee(t),x=W(()=>t.size||b?.value?.Dropdown?.size||`medium`),S=C(`Dropdown`,`-dropdown`,me,ne,t,v);m(Z,{labelFieldRef:g(t,`labelField`),childrenFieldRef:g(t,`childrenField`),renderLabelRef:g(t,`renderLabel`),renderIconRef:g(t,`renderIcon`),hoverKeyRef:s,keyboardKeyRef:c,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:f,activeKeyPathRef:p,animatedRef:g(t,`animated`),mergedShowRef:i,nodePropsRef:g(t,`nodeProps`),renderOptionRef:g(t,`renderOption`),menuPropsRef:g(t,`menuProps`),doSelect:w,doUpdateShow:T}),E(i,e=>{!t.animated&&!e&&A()});function w(e,n){let{onSelect:r}=t;r&&q(r,e,n)}function T(e){let{"onUpdate:show":n,onUpdateShow:i}=t;n&&q(n,e),i&&q(i,e),r.value=e}function A(){s.value=null,c.value=null,u.value=null}function j(){T(!1)}function M(){R(`left`)}function N(){R(`right`)}function P(){R(`up`)}function F(){R(`down`)}function I(){let e=L();e?.isLeaf&&i.value&&(w(e.key,e.rawNode),T(!1))}function L(){let{value:e}=a,{value:t}=d;return!e||t===null?null:e.getNode(t)??null}function R(e){let{value:t}=d,{value:{getFirstAvailableNode:n}}=a,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=L();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent()}n&&(r=n.key)}}r!==null&&(s.value=null,c.value=r)}let z=W(()=>{let{inverted:e}=t,n=x.value,{common:{cubicBezierEaseInOut:r},self:i}=S.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[_(`optionIconSuffixWidth`,n)]:l,[_(`optionSuffixWidth`,n)]:u,[_(`optionIconPrefixWidth`,n)]:d,[_(`optionPrefixWidth`,n)]:f,[_(`fontSize`,n)]:p,[_(`optionHeight`,n)]:m,[_(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return e?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),B=y?k(`dropdown`,W(()=>`${x.value[0]}${t.inverted?`i`:``}`),z,t):void 0;return{mergedClsPrefix:v,mergedTheme:S,mergedSize:x,tmNodes:o,mergedShow:i,handleAfterLeave:()=>{t.animated&&A()},doUpdateShow:T,cssVars:y?void 0:z,themeClass:B?.themeClass,onRender:B?.onRender}},render(){let e=(e,t,n,r,i)=>{let{mergedClsPrefix:a,menuProps:o}=this;this.onRender?.();let s=o?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},c={ref:Y(t),class:[e,`${a}-dropdown`,`${a}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:a,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return z(pe,H(this.$attrs,c,s))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return A(),I(s,re(this.$props,ge,n),{_:1,trigger:M(()=>this.$slots.default?.())},16)}});function ye(){let e=U(P,null);return e===null&&te(`use-dialog`,`No outer <n-dialog-provider /> founded.`),e}export{ve as n,Y as r,ye as t};