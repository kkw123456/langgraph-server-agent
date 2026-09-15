import{a as e}from"./createLucideIcon--8DT_RtV.js";import{$n as t,At as n,Bn as r,Bt as i,Cr as a,Fr as o,Hn as s,In as c,Jt as l,K as u,Ln as d,Lt as f,Ot as p,Pr as m,Rr as h,Rt as g,Sr as _,U as v,Un as y,W as b,Wn as x,Zt as S,an as C,ar as w,bt as T,gt as E,ir as D,j as O,lr as k,nn as A,pr as j,qt as M,rr as N,sr as P,ur as F,wt as I,zn as L}from"./index-DBUzJGPl.js";var R=()=>(()=>{let e=M(`75be776d8875fa17`);return e[0]||=D(`svg`,{viewBox:`0 0 64 64`,class:`check-icon`},[D(`path`,{d:`M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z`})],-1)})(),z=()=>(()=>{let e=M(`c6eed899356c8404`);return e[0]||=D(`svg`,{viewBox:`0 0 100 100`,class:`line-icon`},[D(`path`,{d:`M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z`})],-1)})(),B=c([d(`checkbox`,`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[r(`show-label`,`line-height: var(--n-label-line-height);`),c(`&:hover`,[d(`checkbox-box`,[L(`border`,`border: var(--n-border-checked);`)])]),c(`&:focus:not(:active)`,[d(`checkbox-box`,[L(`border`,`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r(`inside-table`,[d(`checkbox-box`,`
 background-color: var(--n-merged-color-table);
 `)]),r(`checked`,[d(`checkbox-box`,`
 background-color: var(--n-color-checked);
 `,[d(`checkbox-icon`,[c(`.check-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),r(`indeterminate`,[d(`checkbox-box`,[d(`checkbox-icon`,[c(`.check-icon`,`
 opacity: 0;
 transform: scale(.5);
 `),c(`.line-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),r(`checked, indeterminate`,[c(`&:focus:not(:active)`,[d(`checkbox-box`,[L(`border`,`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),d(`checkbox-box`,`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[L(`border`,{border:`var(--n-border-checked)`})])]),r(`disabled`,{cursor:`not-allowed`},[r(`checked`,[d(`checkbox-box`,`
 background-color: var(--n-color-disabled-checked);
 `,[L(`border`,{border:`var(--n-border-disabled-checked)`}),d(`checkbox-icon`,[c(`.check-icon, .line-icon`,{fill:`var(--n-check-mark-color-disabled-checked)`})])])]),d(`checkbox-box`,`
 background-color: var(--n-color-disabled);
 `,[L(`border`,`
 border: var(--n-border-disabled);
 `),d(`checkbox-icon`,[c(`.check-icon, .line-icon`,`
 fill: var(--n-check-mark-color-disabled);
 `)])]),L(`label`,`
 color: var(--n-text-color-disabled);
 `)]),d(`checkbox-box-wrapper`,`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),d(`checkbox-box`,`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[L(`border`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),d(`checkbox-icon`,`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[c(`.check-icon, .line-icon`,`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),v({left:`1px`,top:`1px`})])]),L(`label`,`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[c(`&:empty`,{display:`none`})])]),y(d(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),x(d(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),V=[`id`],H=[`tabindex`,`aria-checked`,`aria-labelledby`,`onKeyup`,`onKeydown`,`onClick`],U={...f.props,size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]},W=F({name:`Checkbox`,props:U,setup(t){let n=j(G,null),r=m(null),{mergedClsPrefixRef:a,inlineThemeDisabled:c,mergedRtlRef:l,mergedComponentPropsRef:d}=A(t),h=m(t.defaultChecked),_=o(t,`checked`),v=e(_,h),y=p(()=>{if(n){let e=n.valueSetRef.value;return e&&t.value!==void 0?e.has(t.value):!1}return v.value===t.checkedValue}),b=u(t,{mergedSize(e){let{size:r}=t;if(r!==void 0)return r;if(n){let{value:e}=n.mergedSizeRef;if(e!==void 0)return e}if(e){let{mergedSize:t}=e;if(t!==void 0)return t.value}return d?.value?.Checkbox?.size||`medium`},mergedDisabled(e){let{disabled:r}=t;if(r!==void 0)return r;if(n){if(n.disabledRef.value)return!0;let{maxRef:{value:e},checkedCountRef:t}=n;if(e!==void 0&&t.value>=e&&!y.value)return!0;let{minRef:{value:r}}=n;if(r!==void 0&&t.value<=r&&y.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:x,mergedSizeRef:S}=b,C=f(`Checkbox`,`-checkbox`,B,O,t,a);function w(e){if(n&&t.value!==void 0)n.toggleCheckbox(!y.value,t.value);else{let{onChange:n,"onUpdate:checked":r,onUpdateChecked:i}=t,{nTriggerFormInput:a,nTriggerFormChange:o}=b,s=y.value?t.uncheckedValue:t.checkedValue;r&&I(r,s,e),i&&I(i,s,e),n&&I(n,s,e),a(),o(),h.value=s}}function T(e){x.value||w(e)}function D(e){if(!x.value)switch(e.key){case` `:case`Enter`:w(e)}}function k(e){e.key===` `&&e.preventDefault()}let M={focus:()=>{r.value?.focus()},blur:()=>{r.value?.blur()}},P=E(`Checkbox`,l,a),F=N(()=>{let{value:e}=S,{common:{cubicBezierEaseInOut:t},self:{borderRadius:n,color:r,colorChecked:i,colorDisabled:a,colorTableHeader:o,colorTableHeaderModal:c,colorTableHeaderPopover:l,checkMarkColor:u,checkMarkColorDisabled:d,border:f,borderFocus:p,borderDisabled:m,borderChecked:h,boxShadowFocus:g,textColor:_,textColorDisabled:v,checkMarkColorDisabledChecked:y,colorDisabledChecked:b,borderDisabledChecked:x,labelPadding:w,labelLineHeight:T,labelFontWeight:E,[s(`fontSize`,e)]:D,[s(`size`,e)]:O}}=C.value;return{"--n-label-line-height":T,"--n-label-font-weight":E,"--n-size":O,"--n-bezier":t,"--n-border-radius":n,"--n-border":f,"--n-border-checked":h,"--n-border-focus":p,"--n-border-disabled":m,"--n-border-disabled-checked":x,"--n-box-shadow-focus":g,"--n-color":r,"--n-color-checked":i,"--n-color-table":o,"--n-color-table-modal":c,"--n-color-table-popover":l,"--n-color-disabled":a,"--n-color-disabled-checked":b,"--n-text-color":_,"--n-text-color-disabled":v,"--n-check-mark-color":u,"--n-check-mark-color-disabled":d,"--n-check-mark-color-disabled-checked":y,"--n-font-size":D,"--n-label-padding":w}}),L=c?g(`checkbox`,N(()=>S.value[0]),F,t):void 0;return Object.assign(b,M,{rtlEnabled:P,selfRef:r,mergedClsPrefix:a,mergedDisabled:x,renderedChecked:y,mergedTheme:C,labelId:i(),handleClick:T,handleKeyUp:D,handleKeyDown:k,cssVars:c?void 0:F,themeClass:L?.themeClass,onRender:L?.onRender})},render(){let{$slots:e,renderedChecked:t,mergedDisabled:r,indeterminate:i,privateInsideTable:a,cssVars:o,labelId:s,label:c,mergedClsPrefix:u,focusable:d,handleKeyUp:f,handleKeyDown:p,handleClick:m}=this;this.onRender?.();let g=T(e.default,e=>c||e?(_(),P(`span`,{key:1,class:l(`${u}-checkbox__label`),id:s},[S(()=>c||e)],10,V)):null);return(()=>{let e=M(`70be6e74cd27cb50`);return _(),P(`div`,{ref:`selfRef`,class:l([`${u}-checkbox`,this.themeClass,this.rtlEnabled&&`${u}-checkbox--rtl`,t&&`${u}-checkbox--checked`,r&&`${u}-checkbox--disabled`,i&&`${u}-checkbox--indeterminate`,a&&`${u}-checkbox--inside-table`,g&&`${u}-checkbox--show-label`]),tabindex:r||!d?void 0:0,role:`checkbox`,"aria-checked":i?`mixed`:t,"aria-labelledby":s,style:h(o),onKeyup:f,onKeydown:p,onClick:m,onMousedown:e[0]||=()=>{n(`selectstart`,window,e=>{e.preventDefault()},{once:!0})}},[D(`div`,{class:l(`${u}-checkbox-box-wrapper`)},[e[1]||=S(`\xA0`,-1),D(`div`,{class:l(`${u}-checkbox-box`)},[k(b,null,{default:()=>this.indeterminate?(_(),P(`div`,{key:`indeterminate`,class:l(`${u}-checkbox-icon`)},[S(()=>z())],2)):(_(),P(`div`,{key:`check`,class:l(`${u}-checkbox-icon`)},[S(()=>R())],2))},1024),D(`div`,{class:l(`${u}-checkbox-box__border`)},null,2)],2)],2),S(()=>g)],46,H)})()}}),G=C(`n-checkbox-group`),K=F({name:`CheckboxGroup`,props:{min:Number,max:Number,size:String,options:Array,labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},setup(t){let{mergedClsPrefixRef:n}=A(t),r=u(t),{mergedSizeRef:i,mergedDisabledRef:s}=r,c=m(t.defaultValue),l=N(()=>t.value),d=e(l,c),f=N(()=>d.value?.length||0),p=N(()=>Array.isArray(d.value)?new Set(d.value):new Set);function h(e,n){let{nTriggerFormInput:i,nTriggerFormChange:a}=r,{onChange:o,"onUpdate:value":s,onUpdateValue:l}=t;if(Array.isArray(d.value)){let t=Array.from(d.value),r=t.findIndex(e=>e===n);e?~r||(t.push(n),l&&I(l,t,{actionType:`check`,value:n}),s&&I(s,t,{actionType:`check`,value:n}),i(),a(),c.value=t,o&&I(o,t)):~r&&(t.splice(r,1),l&&I(l,t,{actionType:`uncheck`,value:n}),s&&I(s,t,{actionType:`uncheck`,value:n}),o&&I(o,t),c.value=t,i(),a())}else e?(l&&I(l,[n],{actionType:`check`,value:n}),s&&I(s,[n],{actionType:`check`,value:n}),o&&I(o,[n]),c.value=[n],i(),a()):(l&&I(l,[],{actionType:`uncheck`,value:n}),s&&I(s,[],{actionType:`uncheck`,value:n}),o&&I(o,[]),c.value=[],i(),a())}return a(G,{checkedCountRef:f,maxRef:o(t,`max`),minRef:o(t,`min`),valueSetRef:p,disabledRef:s,mergedSizeRef:i,toggleCheckbox:h}),{mergedClsPrefix:n}},render(){let{options:e,labelField:n,valueField:r}=this.$props;return _(),P(`div`,{class:l(`${this.mergedClsPrefix}-checkbox-group`),role:`group`},[e?(_(),P(t,{key:0},[S(()=>e.map(e=>{let t=e[r];return _(),w(W,{key:t,value:t,disabled:e.disabled,label:e[n]},null,8,[`value`,`disabled`,`label`])}))],64)):(_(),P(t,{key:1},[S(()=>this.$slots.default?.())],64))],2)}});export{W as n,K as t};