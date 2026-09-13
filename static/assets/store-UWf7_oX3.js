import{a as e}from"./createLucideIcon-DTZipSeT.js";import{At as t,Dt as n,Gt as r,Hn as i,K as a,Lr as o,Lt as s,Nr as c,Ot as l,Pr as u,Pt as d,Rn as f,Rt as p,Sr as m,Un as h,Vn as g,Vt as _,Wn as v,Y as y,ar as b,dt as x,er as S,ht as C,ir as w,jr as T,kt as E,q as D,qt as O,rr as k,sr as A,st as j,t as M,ur as N,xr as P,zn as F}from"./index-BKnoSBpI.js";var I=N({name:`Empty`,render(){return(()=>{let e=s(`15c1a247ae156450`);return e[0]||=w(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[w(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),w(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`})],-1)})()}}),L=F(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[g(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[f(`+`,[g(`description`,`
 margin-top: 8px;
 `)])]),g(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),g(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),R={...l.props,description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function},z=N({name:`Empty`,props:R,slots:Object,setup(n){let{mergedClsPrefixRef:i,inlineThemeDisabled:a,mergedComponentPropsRef:o}=r(n),s=l(`Empty`,`-empty`,L,t,n,i),{localeRef:c}=e(`Empty`),u=k(()=>n.description??o?.value?.Empty?.description),d=k(()=>o?.value?.Empty?.renderIcon||(()=>(P(),b(I)))),f=k(()=>{let{size:e}=n,{common:{cubicBezierEaseInOut:t},self:{[v(`iconSize`,e)]:r,[v(`fontSize`,e)]:i,textColor:a,iconColor:o,extraTextColor:c}}=s.value;return{"--n-icon-size":r,"--n-font-size":i,"--n-bezier":t,"--n-text-color":a,"--n-icon-color":o,"--n-extra-text-color":c}}),p=a?E(`empty`,k(()=>{let e=``,{size:t}=n;return e+=t[0],e}),f,n):void 0;return{mergedClsPrefix:i,mergedRenderIcon:d,localizedDescription:k(()=>u.value||c.value.description),cssVars:a?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:r}=this;return r?.(),P(),A(`div`,{class:p([`${t}-empty`,this.themeClass]),style:o(this.cssVars)},[this.showIcon?(P(),A(`div`,{key:0,class:p(`${t}-empty__icon`)},[e.icon?(P(),A(S,{key:0},[_(()=>e.icon())],64)):(P(),b(n,{key:1,clsPrefix:t},{default:this.mergedRenderIcon},1032,[`clsPrefix`]))],2)):_(()=>null),this.showDescription?(P(),A(`div`,{key:2,class:p(`${t}-empty__description`)},[e.default?(P(),A(S,{key:0},[_(()=>e.default())],64)):(P(),A(S,{key:1},[_(()=>this.localizedDescription)],64))],2)):_(()=>null),e.extra?(P(),A(`div`,{key:4,class:p(`${t}-empty__extra`)},[_(()=>e.extra())],2)):_(()=>null)],6)}}),B={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},ee=F(`tag`,`
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
`,[i(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),g(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),g(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),g(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),g(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),i(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[g(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),g(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),i(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),i(`icon, avatar`,[i(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),i(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),i(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[h(`disabled`,[f(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[h(`checked`,`color: var(--n-text-color-hover-checkable);`)]),f(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[h(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),i(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[h(`disabled`,[f(`&:hover`,`background-color: var(--n-color-checked-hover);`),f(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),te=[`onClick`,`onMouseenter`,`onMouseleave`],ne={...l.props,...B,bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function},V=O(`n-tag`),re=N({name:`Tag`,props:ne,slots:Object,setup(e){let t=c(null),{mergedBorderedRef:n,mergedClsPrefixRef:i,inlineThemeDisabled:o,mergedRtlRef:s,mergedComponentPropsRef:f}=r(e),p=k(()=>e.size||f?.value?.Tag?.size||`medium`),h=l(`Tag`,`-tag`,ee,a,e,i);m(V,{roundRef:u(e,`round`)});function g(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function _(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&C(n,t)}}let b={setTextContent(e){let{value:n}=t;n&&(n.textContent=e)}},x=j(`Tag`,s,i),S=k(()=>{let{type:t,color:{color:r,textColor:i}={}}=e,a=p.value,{common:{cubicBezierEaseInOut:o},self:{padding:s,closeMargin:c,borderRadius:l,opacityDisabled:u,textColorCheckable:f,textColorHoverCheckable:m,textColorPressedCheckable:g,textColorChecked:_,colorCheckable:y,colorHoverCheckable:b,colorPressedCheckable:x,colorChecked:S,colorCheckedHover:C,colorCheckedPressed:w,closeBorderRadius:T,fontWeightStrong:E,[v(`colorBordered`,t)]:D,[v(`closeSize`,a)]:O,[v(`closeIconSize`,a)]:k,[v(`fontSize`,a)]:A,[v(`height`,a)]:j,[v(`color`,t)]:M,[v(`textColor`,t)]:N,[v(`border`,t)]:P,[v(`closeIconColor`,t)]:F,[v(`closeIconColorHover`,t)]:I,[v(`closeIconColorPressed`,t)]:L,[v(`closeColorHover`,t)]:R,[v(`closeColorPressed`,t)]:z}}=h.value,B=d(c);return{"--n-font-weight-strong":E,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":o,"--n-border-radius":l,"--n-border":P,"--n-close-icon-size":k,"--n-close-color-pressed":z,"--n-close-color-hover":R,"--n-close-border-radius":T,"--n-close-icon-color":F,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":L,"--n-close-icon-color-disabled":F,"--n-close-margin-top":B.top,"--n-close-margin-right":B.right,"--n-close-margin-bottom":B.bottom,"--n-close-margin-left":B.left,"--n-close-size":O,"--n-color":r||(n.value?D:M),"--n-color-checkable":y,"--n-color-checked":S,"--n-color-checked-hover":C,"--n-color-checked-pressed":w,"--n-color-hover-checkable":b,"--n-color-pressed-checkable":x,"--n-font-size":A,"--n-height":j,"--n-opacity-disabled":u,"--n-padding":s,"--n-text-color":i||N,"--n-text-color-checkable":f,"--n-text-color-checked":_,"--n-text-color-hover-checkable":m,"--n-text-color-pressed-checkable":g}}),w=o?E(`tag`,k(()=>{let t=``,{type:r,color:{color:i,textColor:a}={}}=e;return t+=r[0],t+=p.value[0],i&&(t+=`a${y(i)}`),a&&(t+=`b${y(a)}`),n.value&&(t+=`c`),t}),S,e):void 0;return{...b,rtlEnabled:x,mergedClsPrefix:i,contentRef:t,mergedBordered:n,handleClick:g,handleCloseClick:_,cssVars:o?void 0:S,themeClass:w?.themeClass,onRender:w?.onRender}},render(){let{mergedClsPrefix:e,rtlEnabled:t,closable:n,color:{borderColor:r}={},round:i,onRender:a,$slots:s}=this;a?.();let c=x(s.avatar,t=>t&&(P(),A(`div`,{class:p(`${e}-tag__avatar`)},[_(()=>t)],2))),l=x(s.icon,t=>t&&(P(),A(`div`,{class:p(`${e}-tag__icon`)},[_(()=>t)],2)));return P(),A(`div`,{class:p([`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:t,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:i,[`${e}-tag--avatar`]:c,[`${e}-tag--icon`]:l,[`${e}-tag--closable`]:n}]),style:o(this.cssVars),onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[_(()=>l||c),w(`span`,{class:p(`${e}-tag__content`),ref:`contentRef`},[_(()=>this.$slots.default?.())],2),!this.checkable&&n?(P(),b(D,{key:0,clsPrefix:e,class:p(`${e}-tag__close`),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0},null,8,[`clsPrefix`,`class`,`disabled`,`onClick`,`focusable`,`round`,`isButtonTag`])):_(()=>null),!this.checkable&&this.mergedBordered?(P(),A(`div`,{key:2,class:p(`${e}-tag__border`),style:o({borderColor:r})},null,6)):_(()=>null)],46,te)}});async function H(e){e.status===401&&!location.pathname.startsWith(`/login`)&&window.dispatchEvent(new CustomEvent(`lg:unauthorized`));try{return await e.json()}catch{return{}}}var U={get:e=>fetch(e).then(H),post:(e,t)=>fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t??{})}).then(H),del:e=>fetch(e,{method:`DELETE`}).then(H),patch:(e,t)=>fetch(e,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)}).then(H),files:async(e,t=``)=>await(await fetch(`/api/conversations/${e}/files?path=${encodeURIComponent(t)}`)).json(),rawFileUrl:(e,t)=>`/api/conversations/${e}/files/raw?path=${encodeURIComponent(t)}`,uploadFiles:async(e,t)=>await(await fetch(`/api/conversations/${e}/files/upload`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({files:t})})).json()};function ie(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=String(r.result||``);t(e.slice(e.indexOf(`,`)+1))},r.onerror=()=>n(r.error),r.readAsDataURL(e)})}var W=T({convs:[],current:null,messages:[],convTitle:`未选择会话`,status:`○ 未连接`,skills:[],live:null,mode:`auto`,pendingTool:null,searchKw:``,waiting:!1,running:!1,loadingMsgs:!1,convsLoading:!1,filesTick:0,sidebarOpen:!1,rightOpen:!1}),G=null,ae=new Set([`write_file`,`make_dir`,`delete_file`,`run_python`]),K=``;function q(){if(G){try{G.close()}catch{}G=null}}function J(e){q();let t=location.protocol===`https:`?`wss`:`ws`;G=new WebSocket(`${t}://${location.host}/ws/${e}`),G.onopen=()=>{W.status=`● 已连接`,G.send(JSON.stringify({type:`set_mode`,mode:W.mode}))},G.onclose=()=>{W.status=`○ 已断开`,W.waiting&&!W.live&&(W.messages.push({role:`assistant`,content:`（连接中断，请重新发送）`}),W.waiting=!1,W.running=!1,Y(W.current,!1))},G.onmessage=e=>se(JSON.parse(e.data))}function oe(e=8e3){return new Promise(t=>{if(!G)return t(!1);if(G.readyState===1)return t(!0);let n=!1,r=0,i=e=>{n||(n=!0,clearTimeout(r),G?.removeEventListener(`open`,a),G?.removeEventListener(`close`,o),G?.removeEventListener(`error`,o),t(e))},a=()=>i(!0),o=()=>i(!1);G.addEventListener(`open`,a),G.addEventListener(`close`,o),G.addEventListener(`error`,o),r=window.setTimeout(()=>{G&&G.readyState===0||i(G?.readyState===1)},e)})}function se(e){if(e.type===`resume`){e.mode&&(W.mode=e.mode),W.live=null,W.pendingTool=null,W.waiting=!1,W.running=!0,Y(W.current,!0);for(let t of e.events)X(t);return}X(e)}function Y(e,t){if(!e)return;let n=W.convs.find(t=>t.id===e);n&&(n.running=t)}function X(e){switch(e.type){case`message_start`:W.live={role:`assistant`,content:``,tool_calls:[]},W.waiting=!1,W.running=!0,Y(W.current,!0);break;case`token`:W.live&&(W.live.content+=e.content),W.waiting=!1;break;case`reasoning`:W.live&&(W.live.reasoning=(W.live.reasoning||``)+e.content),W.waiting=!1;break;case`tool_start`:W.live&&W.live.tool_calls.push({name:e.name,input:e.input,output:`执行中…`,at:e.at}),K=e.name,W.waiting=!1;break;case`tool_end`:{let t=W.live?.tool_calls,n=t?.find(t=>(!e.name||t.name===e.name)&&e.at!==void 0&&t.at===e.at&&t.output===`执行中…`)??(t&&e.name?t.find(t=>t.name===e.name&&t.output===`执行中…`):void 0)??(t&&t.length?t[t.length-1]:void 0);n&&(n.output=e.output)}ae.has(K)&&W.filesTick++;break;case`message_end`:if(W.live){let t=W.live.content;e.stopped&&(t||(W.live.tool_calls??[]).length)&&(t=(t||``)+(t?`

`:``)+`（已手动停止）`),t||(W.live.tool_calls??[]).length?W.messages.push({role:`assistant`,content:t,tool_calls:(W.live.tool_calls??[]).map(e=>({...e})),reasoning:W.live.reasoning}):W.messages.push({role:`assistant`,content:`（本轮模型未返回内容，可能是服务波动，请重试）`}),W.live=null}W.waiting=!1,W.running=!1,Y(W.current,!1),e.stopped&&M.info(`已停止，已生成的内容已保留`),W.filesTick++,Z();break;case`error`:W.live?W.live.content+=`
[错误] `+e.content:W.messages.push({role:`assistant`,content:`[错误] `+e.content}),W.waiting=!1,Y(W.current,!1);break;case`tool_confirm`:W.pendingTool=e.tool_calls,W.waiting=!1;break;case`mode_set`:W.mode=e.mode;break;case`warn`:M.warning(e.content)}}async function Z(){let e=W.convs.length===0;e&&(W.convsLoading=!0);try{W.convs=await U.get(`/api/conversations`),W.running=!!W.convs.find(e=>e.id===W.current)?.running}finally{e&&(W.convsLoading=!1)}}function ce(){let e=W.searchKw.trim().toLowerCase();return e?W.convs.filter(t=>(t.title||``).toLowerCase().includes(e)):W.convs}async function le(e){let t=(e||``).trim();return t?(await Q(),await he(t),W.current):null}async function ue(e){q(),W.current=e,W.live=null,W.pendingTool=null,W.waiting=!1,W.running=!1,W.loadingMsgs=!0,localStorage.setItem(`lg_last_conv`,e);try{let t=await U.get(`/api/conversations/${e}`);W.convTitle=t.meta?t.meta.title:`未选择会话`,W.messages=t.messages??[]}finally{W.loadingMsgs=!1}J(e),await Z()}async function Q(){q(),W.current=null,W.live=null,W.pendingTool=null,W.waiting=!1,W.running=!1,W.messages=[],W.convTitle=`新对话`,localStorage.removeItem(`lg_last_conv`),await Z()}function de(e){W.mode=e,G&&G.readyState===1&&G.send(JSON.stringify({type:`set_mode`,mode:e}))}function fe(e){G&&G.readyState===1&&G.send(JSON.stringify({type:`tool_decision`,action:e.action,calls:e.calls??[]})),W.pendingTool=null}async function pe(e){await U.del(`/api/conversations/${e}`),W.current===e&&await Q(),await Z()}async function me(e,t){let n=(t||``).trim();if(!n)return;await U.patch(`/api/conversations/${e}`,{title:n});let r=W.convs.find(t=>t.id===e);r&&(r.title=n),W.current===e&&(W.convTitle=n)}async function he(e,t){let n=(e||``).trim();if(!n&&!(t&&t.length))return;if(W.waiting=!0,W.running=!0,Y(W.current,!0),!W.current){let e=await U.post(`/api/conversations`,{title:(n||`文件会话`).slice(0,30)});W.current=e.id,localStorage.setItem(`lg_last_conv`,e.id),await Z(),J(e.id),await oe()}let r=n,i=[];if(t&&t.length&&W.current){for(let e of t)try{let t=await ie(e),n=await U.uploadFiles(W.current,[{name:e.name,data:t}]);n.ok&&n.saved?.length?i.push(...n.saved):M.error(`${e.name} 上传失败: ${n.error||`未知错误`}`)}catch{M.error(`${e.name} 读取失败`)}if(i.length){W.filesTick++;let e=i.map(e=>`${e.path} (${ge(e.size)})`).join(`、`);r=(r?r+`

`:``)+`[附件已上传至工作目录：${e}，可直接读取]`}}if(!r.trim()&&!i.length){W.waiting=!1,W.running=!1,Y(W.current,!1);return}W.messages.push({role:`user`,content:r,attachments:i.length?i:void 0}),G&&G.readyState===1?G.send(JSON.stringify({type:`message`,content:r,attachments:i})):(await U.post(`/api/conversations/${W.current}/messages`,{content:r,attachments:i}),W.messages=(await U.get(`/api/conversations/${W.current}`)).messages??[],W.waiting=!1,W.running=!1,W.filesTick++,Z())}function ge(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(1)} MB`}async function _e(){if(W.current){W.waiting=!1;try{await U.post(`/api/conversations/${W.current}/stop`,{})}catch{}G&&G.readyState===1&&G.send(JSON.stringify({type:`stop`}))}}async function $(){W.skills=await U.get(`/api/skills`)}async function ve(e){await U.post(`/api/skills/${e.id}/${e.enabled?`disable`:`enable`}`),await $()}async function ye(e){await U.del(`/api/skills/${e}`),await $()}async function be(){await U.post(`/api/skills/reload`),await $()}async function xe(e){let t=await U.post(`/api/skills/custom`,e);return t.ok&&await $(),t}export{z as S,_e as _,Z as a,re as b,be as c,fe as d,ue as f,W as g,le as h,ce as i,ye as l,de as m,xe as n,$ as o,he as p,pe as r,Q as s,q as t,me as u,ve as v,V as x,U as y};