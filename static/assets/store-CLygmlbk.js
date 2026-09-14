import{a as e}from"./createLucideIcon-t_5ULLXx.js";import{An as t,At as n,Bn as r,Dn as i,Dt as a,Gn as o,Gt as s,Jn as c,K as l,Kn as u,Lt as d,On as f,Ot as p,Pt as m,Rt as h,Tn as g,Vt as _,Wn as v,Y as y,Zn as b,br as x,cr as S,dt as C,ht as w,kn as T,kt as E,lr as D,q as O,qt as ee,st as k,t as A,vr as j,wn as M,wr as N,xr as P}from"./index-Co1niah7.js";var F=b({name:`Empty`,render(){return(()=>{let e=d(`15c1a247ae156450`);return e[0]||=o(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[o(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),o(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`})],-1)})()}}),I=g(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[i(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[M(`+`,[i(`description`,`
 margin-top: 8px;
 `)])]),i(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),i(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),L={...p.props,description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function},R=b({name:`Empty`,props:L,slots:Object,setup(r){let{mergedClsPrefixRef:i,inlineThemeDisabled:a,mergedComponentPropsRef:o}=s(r),c=p(`Empty`,`-empty`,I,n,r,i),{localeRef:l}=e(`Empty`),d=v(()=>r.description??o?.value?.Empty?.description),f=v(()=>o?.value?.Empty?.renderIcon||(()=>(S(),u(F)))),m=v(()=>{let{size:e}=r,{common:{cubicBezierEaseInOut:n},self:{[t(`iconSize`,e)]:i,[t(`fontSize`,e)]:a,textColor:o,iconColor:s,extraTextColor:l}}=c.value;return{"--n-icon-size":i,"--n-font-size":a,"--n-bezier":n,"--n-text-color":o,"--n-icon-color":s,"--n-extra-text-color":l}}),h=a?E(`empty`,v(()=>{let e=``,{size:t}=r;return e+=t[0],e}),m,r):void 0;return{mergedClsPrefix:i,mergedRenderIcon:f,localizedDescription:v(()=>d.value||l.value.description),cssVars:a?void 0:m,themeClass:h?.themeClass,onRender:h?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),S(),c(`div`,{class:h([`${t}-empty`,this.themeClass]),style:N(this.cssVars)},[this.showIcon?(S(),c(`div`,{key:0,class:h(`${t}-empty__icon`)},[e.icon?(S(),c(r,{key:0},[_(()=>e.icon())],64)):(S(),u(a,{key:1,clsPrefix:t},{default:this.mergedRenderIcon},1032,[`clsPrefix`]))],2)):_(()=>null),this.showDescription?(S(),c(`div`,{key:2,class:h(`${t}-empty__description`)},[e.default?(S(),c(r,{key:0},[_(()=>e.default())],64)):(S(),c(r,{key:1},[_(()=>this.localizedDescription)],64))],2)):_(()=>null),e.extra?(S(),c(`div`,{key:4,class:h(`${t}-empty__extra`)},[_(()=>e.extra())],2)):_(()=>null)],6)}}),z={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},te=g(`tag`,`
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
`,[f(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),i(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),i(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),i(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),i(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),f(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[i(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),i(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),f(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),f(`icon, avatar`,[f(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),f(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),f(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[T(`disabled`,[M(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[T(`checked`,`color: var(--n-text-color-hover-checkable);`)]),M(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[T(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),f(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[T(`disabled`,[M(`&:hover`,`background-color: var(--n-color-checked-hover);`),M(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),ne=[`onClick`,`onMouseenter`,`onMouseleave`],re={...p.props,...z,bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function},B=ee(`n-tag`),ie=b({name:`Tag`,props:re,slots:Object,setup(e){let n=x(null),{mergedBorderedRef:r,mergedClsPrefixRef:i,inlineThemeDisabled:a,mergedRtlRef:o,mergedComponentPropsRef:c}=s(e),u=v(()=>e.size||c?.value?.Tag?.size||`medium`),d=p(`Tag`,`-tag`,te,l,e,i);D(B,{roundRef:P(e,`round`)});function f(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function h(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&w(n,t)}}let g={setTextContent(e){let{value:t}=n;t&&(t.textContent=e)}},_=k(`Tag`,o,i),b=v(()=>{let{type:n,color:{color:i,textColor:a}={}}=e,o=u.value,{common:{cubicBezierEaseInOut:s},self:{padding:c,closeMargin:l,borderRadius:f,opacityDisabled:p,textColorCheckable:h,textColorHoverCheckable:g,textColorPressedCheckable:_,textColorChecked:v,colorCheckable:y,colorHoverCheckable:b,colorPressedCheckable:x,colorChecked:S,colorCheckedHover:C,colorCheckedPressed:w,closeBorderRadius:T,fontWeightStrong:E,[t(`colorBordered`,n)]:D,[t(`closeSize`,o)]:O,[t(`closeIconSize`,o)]:ee,[t(`fontSize`,o)]:k,[t(`height`,o)]:A,[t(`color`,n)]:j,[t(`textColor`,n)]:M,[t(`border`,n)]:N,[t(`closeIconColor`,n)]:P,[t(`closeIconColorHover`,n)]:F,[t(`closeIconColorPressed`,n)]:I,[t(`closeColorHover`,n)]:L,[t(`closeColorPressed`,n)]:R}}=d.value,z=m(l);return{"--n-font-weight-strong":E,"--n-avatar-size-override":`calc(${A} - 8px)`,"--n-bezier":s,"--n-border-radius":f,"--n-border":N,"--n-close-icon-size":ee,"--n-close-color-pressed":R,"--n-close-color-hover":L,"--n-close-border-radius":T,"--n-close-icon-color":P,"--n-close-icon-color-hover":F,"--n-close-icon-color-pressed":I,"--n-close-icon-color-disabled":P,"--n-close-margin-top":z.top,"--n-close-margin-right":z.right,"--n-close-margin-bottom":z.bottom,"--n-close-margin-left":z.left,"--n-close-size":O,"--n-color":i||(r.value?D:j),"--n-color-checkable":y,"--n-color-checked":S,"--n-color-checked-hover":C,"--n-color-checked-pressed":w,"--n-color-hover-checkable":b,"--n-color-pressed-checkable":x,"--n-font-size":k,"--n-height":A,"--n-opacity-disabled":p,"--n-padding":c,"--n-text-color":a||M,"--n-text-color-checkable":h,"--n-text-color-checked":v,"--n-text-color-hover-checkable":g,"--n-text-color-pressed-checkable":_}}),S=a?E(`tag`,v(()=>{let t=``,{type:n,color:{color:i,textColor:a}={}}=e;return t+=n[0],t+=u.value[0],i&&(t+=`a${y(i)}`),a&&(t+=`b${y(a)}`),r.value&&(t+=`c`),t}),b,e):void 0;return{...g,rtlEnabled:_,mergedClsPrefix:i,contentRef:n,mergedBordered:r,handleClick:f,handleCloseClick:h,cssVars:a?void 0:b,themeClass:S?.themeClass,onRender:S?.onRender}},render(){let{mergedClsPrefix:e,rtlEnabled:t,closable:n,color:{borderColor:r}={},round:i,onRender:a,$slots:s}=this;a?.();let l=C(s.avatar,t=>t&&(S(),c(`div`,{class:h(`${e}-tag__avatar`)},[_(()=>t)],2))),d=C(s.icon,t=>t&&(S(),c(`div`,{class:h(`${e}-tag__icon`)},[_(()=>t)],2)));return S(),c(`div`,{class:h([`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:t,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:i,[`${e}-tag--avatar`]:l,[`${e}-tag--icon`]:d,[`${e}-tag--closable`]:n}]),style:N(this.cssVars),onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[_(()=>d||l),o(`span`,{class:h(`${e}-tag__content`),ref:`contentRef`},[_(()=>this.$slots.default?.())],2),!this.checkable&&n?(S(),u(O,{key:0,clsPrefix:e,class:h(`${e}-tag__close`),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0},null,8,[`clsPrefix`,`class`,`disabled`,`onClick`,`focusable`,`round`,`isButtonTag`])):_(()=>null),!this.checkable&&this.mergedBordered?(S(),c(`div`,{key:2,class:h(`${e}-tag__border`),style:N({borderColor:r})},null,6)):_(()=>null)],46,ne)}});async function V(e){e.status===401&&!location.pathname.startsWith(`/login`)&&window.dispatchEvent(new CustomEvent(`lg:unauthorized`));try{return await e.json()}catch{return{}}}var H={get:e=>fetch(e).then(V),post:(e,t)=>fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t??{})}).then(V),del:e=>fetch(e,{method:`DELETE`}).then(V),patch:(e,t)=>fetch(e,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)}).then(V),files:async(e,t=``)=>await(await fetch(`/api/conversations/${e}/files?path=${encodeURIComponent(t)}`)).json(),rawFileUrl:(e,t)=>`/api/conversations/${e}/files/raw?path=${encodeURIComponent(t)}`,uploadFiles:async(e,t)=>await(await fetch(`/api/conversations/${e}/files/upload`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({files:t})})).json()};function ae(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=String(r.result||``);t(e.slice(e.indexOf(`,`)+1))},r.onerror=()=>n(r.error),r.readAsDataURL(e)})}var U=j({convs:[],current:null,messages:[],convTitle:`未选择会话`,status:`○ 未连接`,skills:[],live:null,mode:`auto`,pendingTool:null,searchKw:``,waiting:!1,running:!1,loadingMsgs:!1,convsLoading:!1,filesTick:0,sidebarOpen:!1,rightOpen:!1}),W=null,oe=new Set([`write_file`,`make_dir`,`delete_file`,`run_python`]),G=``;function K(){if(W){try{W.close()}catch{}W=null}}function q(e){K();let t=location.protocol===`https:`?`wss`:`ws`;W=new WebSocket(`${t}://${location.host}/ws/${e}`),W.onopen=()=>{U.status=`● 已连接`,W.send(JSON.stringify({type:`set_mode`,mode:U.mode}))},W.onclose=()=>{U.status=`○ 已断开`,U.waiting&&!U.live&&(U.messages.push({role:`assistant`,content:`（连接中断，请重新发送）`}),U.waiting=!1,U.running=!1,J(U.current,!1))},W.onmessage=e=>ce(JSON.parse(e.data))}function se(e=8e3){return new Promise(t=>{if(!W)return t(!1);if(W.readyState===1)return t(!0);let n=!1,r=0,i=e=>{n||(n=!0,clearTimeout(r),W?.removeEventListener(`open`,a),W?.removeEventListener(`close`,o),W?.removeEventListener(`error`,o),t(e))},a=()=>i(!0),o=()=>i(!1);W.addEventListener(`open`,a),W.addEventListener(`close`,o),W.addEventListener(`error`,o),r=window.setTimeout(()=>{W&&W.readyState===0||i(W?.readyState===1)},e)})}function ce(e){if(e.type===`resume`){e.mode&&(U.mode=e.mode),U.live=null,U.pendingTool=null,U.waiting=!1,U.running=!0,J(U.current,!0);for(let t of e.events)Y(t);return}Y(e)}function J(e,t){if(!e)return;let n=U.convs.find(t=>t.id===e);n&&(n.running=t)}function Y(e){switch(e.type){case`message_start`:U.live={role:`assistant`,content:``,tool_calls:[]},U.waiting=!1,U.running=!0,J(U.current,!0);break;case`token`:U.live&&(U.live.content+=e.content),U.waiting=!1;break;case`reasoning`:U.live&&(U.live.reasoning=(U.live.reasoning||``)+e.content),U.waiting=!1;break;case`tool_start`:U.live&&U.live.tool_calls.push({name:e.name,input:e.input,output:`执行中…`,at:e.at}),G=e.name,U.waiting=!1;break;case`tool_end`:{let t=U.live?.tool_calls,n=t?.find(t=>(!e.name||t.name===e.name)&&e.at!==void 0&&t.at===e.at&&t.output===`执行中…`)??(t&&e.name?t.find(t=>t.name===e.name&&t.output===`执行中…`):void 0)??(t&&t.length?t[t.length-1]:void 0);n&&(n.output=e.output)}oe.has(G)&&U.filesTick++;break;case`message_end`:if(U.live){let t=U.live.content;e.stopped&&(t||(U.live.tool_calls??[]).length)&&(t=(t||``)+(t?`

`:``)+`（已手动停止）`),t||(U.live.tool_calls??[]).length?U.messages.push({role:`assistant`,content:t,tool_calls:(U.live.tool_calls??[]).map(e=>({...e})),reasoning:U.live.reasoning}):U.messages.push({role:`assistant`,content:`（本轮模型未返回内容，可能是服务波动，请重试）`}),U.live=null}U.waiting=!1,U.running=!1,J(U.current,!1),e.stopped&&A.info(`已停止，已生成的内容已保留`),U.filesTick++,Z();break;case`error`:U.live?U.live.content+=`
[错误] `+e.content:U.messages.push({role:`assistant`,content:`[错误] `+e.content}),U.waiting=!1,J(U.current,!1);break;case`tool_confirm`:U.pendingTool=e.tool_calls,U.waiting=!1;break;case`mode_set`:U.mode=e.mode;break;case`warn`:A.warning(e.content)}}var X=null;function Z(){if(X)return X;let e=U.convs.length===0;return e&&(U.convsLoading=!0),X=(async()=>{try{U.convs=await H.get(`/api/conversations`),U.running=!!U.convs.find(e=>e.id===U.current)?.running}finally{e&&(U.convsLoading=!1),X=null}})(),X}function le(){let e=U.searchKw.trim().toLowerCase();return e?U.convs.filter(t=>(t.title||``).toLowerCase().includes(e)):U.convs}async function ue(e){let t=(e||``).trim();return t?(await Q(),await ge(t),U.current):null}async function de(e){K(),U.current=e,U.live=null,U.pendingTool=null,U.waiting=!1,U.running=!1,U.loadingMsgs=!0,localStorage.setItem(`lg_last_conv`,e);try{let t=await H.get(`/api/conversations/${e}`);U.convTitle=t.meta?t.meta.title:`未选择会话`,U.messages=t.messages??[]}finally{U.loadingMsgs=!1}q(e),await Z()}async function Q(){K(),U.current=null,U.live=null,U.pendingTool=null,U.waiting=!1,U.running=!1,U.messages=[],U.convTitle=`新对话`,localStorage.removeItem(`lg_last_conv`),await Z()}function fe(e){U.mode=e,W&&W.readyState===1&&W.send(JSON.stringify({type:`set_mode`,mode:e}))}function pe(e){W&&W.readyState===1&&W.send(JSON.stringify({type:`tool_decision`,action:e.action,calls:e.calls??[]})),U.pendingTool=null}async function me(e){await H.del(`/api/conversations/${e}`),U.current===e&&await Q(),await Z()}async function he(e,t){let n=(t||``).trim();if(!n)return;await H.patch(`/api/conversations/${e}`,{title:n});let r=U.convs.find(t=>t.id===e);r&&(r.title=n),U.current===e&&(U.convTitle=n)}async function ge(e,t){let n=(e||``).trim();if(!n&&!(t&&t.length))return;if(U.waiting=!0,U.running=!0,J(U.current,!0),!U.current){let e=await H.post(`/api/conversations`,{title:(n||`文件会话`).slice(0,30)});U.current=e.id,localStorage.setItem(`lg_last_conv`,e.id),await Z(),q(e.id),await se()}let r=n,i=[];if(t&&t.length&&U.current){for(let e of t)try{let t=await ae(e),n=await H.uploadFiles(U.current,[{name:e.name,data:t}]);n.ok&&n.saved?.length?i.push(...n.saved):A.error(`${e.name} 上传失败: ${n.error||`未知错误`}`)}catch{A.error(`${e.name} 读取失败`)}if(i.length){U.filesTick++;let e=i.map(e=>`${e.path} (${_e(e.size)})`).join(`、`);r=(r?r+`

`:``)+`[附件已上传至工作目录：${e}，可直接读取]`}}if(!r.trim()&&!i.length){U.waiting=!1,U.running=!1,J(U.current,!1);return}U.messages.push({role:`user`,content:r,attachments:i.length?i:void 0}),W&&W.readyState===1?W.send(JSON.stringify({type:`message`,content:r,attachments:i})):(await H.post(`/api/conversations/${U.current}/messages`,{content:r,attachments:i}),U.messages=(await H.get(`/api/conversations/${U.current}`)).messages??[],U.waiting=!1,U.running=!1,U.filesTick++,Z())}function _e(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(1)} MB`}async function ve(){if(U.current){U.waiting=!1;try{await H.post(`/api/conversations/${U.current}/stop`,{})}catch{}W&&W.readyState===1&&W.send(JSON.stringify({type:`stop`}))}}async function $(){U.skills=await H.get(`/api/skills`)}async function ye(e){await H.post(`/api/skills/${e.id}/${e.enabled?`disable`:`enable`}`),await $()}async function be(e){await H.del(`/api/skills/${e}`),await $()}async function xe(){await H.post(`/api/skills/reload`),await $()}async function Se(e){let t=await H.post(`/api/skills/custom`,e);return t.ok&&await $(),t}export{R as S,ve as _,Z as a,ie as b,xe as c,pe as d,de as f,U as g,ue as h,le as i,be as l,fe as m,Se as n,$ as o,ge as p,me as r,Q as s,K as t,he as u,ye as v,B as x,H as y};