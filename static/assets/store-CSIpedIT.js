import{a as e}from"./createLucideIcon-ufvbaH_P.js";import{Bn as t,Cn as n,Dn as r,Dt as i,En as a,Et as o,Ft as s,G as c,Gt as l,Hn as u,It as d,J as f,K as p,Ln as m,Mt as ee,On as h,Ot as g,Sn as _,Tn as v,Ut as y,Vn as b,Wn as x,_r as S,ar as C,br as w,gr as T,ir as E,kt as D,mr as O,mt as k,ot as A,qn as j,t as M,ut as N,zt as P}from"./index-CoXLYJFb.js";var F=j({name:`Empty`,render(){return(()=>{let e=s(`15c1a247ae156450`);return e[0]||=b(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[b(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),b(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`})],-1)})()}}),I=n(`empty`,`
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
 `,[_(`+`,[v(`description`,`
 margin-top: 8px;
 `)])]),v(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),v(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),L={...i.props,description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function},R=j({name:`Empty`,props:L,slots:Object,setup(n){let{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedComponentPropsRef:o}=y(n),s=i(`Empty`,`-empty`,I,D,n,r),{localeRef:c}=e(`Empty`),l=t(()=>n.description??o?.value?.Empty?.description),d=t(()=>o?.value?.Empty?.renderIcon||(()=>(E(),u(F)))),f=t(()=>{let{size:e}=n,{common:{cubicBezierEaseInOut:t},self:{[h(`iconSize`,e)]:r,[h(`fontSize`,e)]:i,textColor:a,iconColor:o,extraTextColor:c}}=s.value;return{"--n-icon-size":r,"--n-font-size":i,"--n-bezier":t,"--n-text-color":a,"--n-icon-color":o,"--n-extra-text-color":c}}),p=a?g(`empty`,t(()=>{let e=``,{size:t}=n;return e+=t[0],e}),f,n):void 0;return{mergedClsPrefix:r,mergedRenderIcon:d,localizedDescription:t(()=>l.value||c.value.description),cssVars:a?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),E(),x(`div`,{class:d([`${t}-empty`,this.themeClass]),style:w(this.cssVars)},[this.showIcon?(E(),x(`div`,{key:0,class:d(`${t}-empty__icon`)},[e.icon?(E(),x(m,{key:0},[P(()=>e.icon())],64)):(E(),u(o,{key:1,clsPrefix:t},{default:this.mergedRenderIcon},1032,[`clsPrefix`]))],2)):P(()=>null),this.showDescription?(E(),x(`div`,{key:2,class:d(`${t}-empty__description`)},[e.default?(E(),x(m,{key:0},[P(()=>e.default())],64)):(E(),x(m,{key:1},[P(()=>this.localizedDescription)],64))],2)):P(()=>null),e.extra?(E(),x(`div`,{key:4,class:d(`${t}-empty__extra`)},[P(()=>e.extra())],2)):P(()=>null)],6)}}),z={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},te=n(`tag`,`
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
 `,[r(`disabled`,[_(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[r(`checked`,`color: var(--n-text-color-hover-checkable);`)]),_(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[r(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),a(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[r(`disabled`,[_(`&:hover`,`background-color: var(--n-color-checked-hover);`),_(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),ne=[`onClick`,`onMouseenter`,`onMouseleave`],re={...i.props,...z,bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function},B=l(`n-tag`),ie=j({name:`Tag`,props:re,slots:Object,setup(e){let n=T(null),{mergedBorderedRef:r,mergedClsPrefixRef:a,inlineThemeDisabled:o,mergedRtlRef:s,mergedComponentPropsRef:l}=y(e),u=t(()=>e.size||l?.value?.Tag?.size||`medium`),d=i(`Tag`,`-tag`,te,c,e,a);C(B,{roundRef:S(e,`round`)});function p(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function m(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&k(n,t)}}let _={setTextContent(e){let{value:t}=n;t&&(t.textContent=e)}},v=A(`Tag`,s,a),b=t(()=>{let{type:t,color:{color:n,textColor:i}={}}=e,a=u.value,{common:{cubicBezierEaseInOut:o},self:{padding:s,closeMargin:c,borderRadius:l,opacityDisabled:f,textColorCheckable:p,textColorHoverCheckable:m,textColorPressedCheckable:g,textColorChecked:_,colorCheckable:v,colorHoverCheckable:y,colorPressedCheckable:b,colorChecked:x,colorCheckedHover:S,colorCheckedPressed:C,closeBorderRadius:w,fontWeightStrong:T,[h(`colorBordered`,t)]:E,[h(`closeSize`,a)]:D,[h(`closeIconSize`,a)]:O,[h(`fontSize`,a)]:k,[h(`height`,a)]:A,[h(`color`,t)]:j,[h(`textColor`,t)]:M,[h(`border`,t)]:N,[h(`closeIconColor`,t)]:P,[h(`closeIconColorHover`,t)]:F,[h(`closeIconColorPressed`,t)]:I,[h(`closeColorHover`,t)]:L,[h(`closeColorPressed`,t)]:R}}=d.value,z=ee(c);return{"--n-font-weight-strong":T,"--n-avatar-size-override":`calc(${A} - 8px)`,"--n-bezier":o,"--n-border-radius":l,"--n-border":N,"--n-close-icon-size":O,"--n-close-color-pressed":R,"--n-close-color-hover":L,"--n-close-border-radius":w,"--n-close-icon-color":P,"--n-close-icon-color-hover":F,"--n-close-icon-color-pressed":I,"--n-close-icon-color-disabled":P,"--n-close-margin-top":z.top,"--n-close-margin-right":z.right,"--n-close-margin-bottom":z.bottom,"--n-close-margin-left":z.left,"--n-close-size":D,"--n-color":n||(r.value?E:j),"--n-color-checkable":v,"--n-color-checked":x,"--n-color-checked-hover":S,"--n-color-checked-pressed":C,"--n-color-hover-checkable":y,"--n-color-pressed-checkable":b,"--n-font-size":k,"--n-height":A,"--n-opacity-disabled":f,"--n-padding":s,"--n-text-color":i||M,"--n-text-color-checkable":p,"--n-text-color-checked":_,"--n-text-color-hover-checkable":m,"--n-text-color-pressed-checkable":g}}),x=o?g(`tag`,t(()=>{let t=``,{type:n,color:{color:i,textColor:a}={}}=e;return t+=n[0],t+=u.value[0],i&&(t+=`a${f(i)}`),a&&(t+=`b${f(a)}`),r.value&&(t+=`c`),t}),b,e):void 0;return{..._,rtlEnabled:v,mergedClsPrefix:a,contentRef:n,mergedBordered:r,handleClick:p,handleCloseClick:m,cssVars:o?void 0:b,themeClass:x?.themeClass,onRender:x?.onRender}},render(){let{mergedClsPrefix:e,rtlEnabled:t,closable:n,color:{borderColor:r}={},round:i,onRender:a,$slots:o}=this;a?.();let s=N(o.avatar,t=>t&&(E(),x(`div`,{class:d(`${e}-tag__avatar`)},[P(()=>t)],2))),c=N(o.icon,t=>t&&(E(),x(`div`,{class:d(`${e}-tag__icon`)},[P(()=>t)],2)));return E(),x(`div`,{class:d([`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:t,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:i,[`${e}-tag--avatar`]:s,[`${e}-tag--icon`]:c,[`${e}-tag--closable`]:n}]),style:w(this.cssVars),onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[P(()=>c||s),b(`span`,{class:d(`${e}-tag__content`),ref:`contentRef`},[P(()=>this.$slots.default?.())],2),!this.checkable&&n?(E(),u(p,{key:0,clsPrefix:e,class:d(`${e}-tag__close`),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0},null,8,[`clsPrefix`,`class`,`disabled`,`onClick`,`focusable`,`round`,`isButtonTag`])):P(()=>null),!this.checkable&&this.mergedBordered?(E(),x(`div`,{key:2,class:d(`${e}-tag__border`),style:w({borderColor:r})},null,6)):P(()=>null)],46,ne)}});async function V(e){e.status===401&&!location.pathname.startsWith(`/login`)&&window.dispatchEvent(new CustomEvent(`lg:unauthorized`));try{return await e.json()}catch{return{}}}var H={get:e=>fetch(e).then(V),post:(e,t)=>fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t??{})}).then(V),del:e=>fetch(e,{method:`DELETE`}).then(V),patch:(e,t)=>fetch(e,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)}).then(V),files:async(e,t=``)=>await(await fetch(`/api/conversations/${e}/files?path=${encodeURIComponent(t)}`)).json(),rawFileUrl:(e,t)=>`/api/conversations/${e}/files/raw?path=${encodeURIComponent(t)}`,uploadFiles:async(e,t)=>await(await fetch(`/api/conversations/${e}/files/upload`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({files:t})})).json()};function ae(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=String(r.result||``);t(e.slice(e.indexOf(`,`)+1))},r.onerror=()=>n(r.error),r.readAsDataURL(e)})}var U=O({convs:[],current:null,messages:[],convTitle:`未选择会话`,status:`○ 未连接`,skills:[],live:null,mode:`auto`,pendingTool:null,searchKw:``,waiting:!1,running:!1,filesTick:0,sidebarOpen:!1}),W=null,oe=new Set([`write_file`,`make_dir`,`delete_file`,`run_python`]),G=``;function K(){if(W){try{W.close()}catch{}W=null}}function q(e){K();let t=location.protocol===`https:`?`wss`:`ws`;W=new WebSocket(`${t}://${location.host}/ws/${e}`),W.onopen=()=>{U.status=`● 已连接`,W.send(JSON.stringify({type:`set_mode`,mode:U.mode}))},W.onclose=()=>{U.status=`○ 已断开`},W.onmessage=e=>ce(JSON.parse(e.data))}function se(e=8e3){return new Promise(t=>{if(!W)return t(!1);if(W.readyState===1)return t(!0);let n=!1,r=0,i=e=>{n||(n=!0,clearTimeout(r),W?.removeEventListener(`open`,a),W?.removeEventListener(`close`,o),W?.removeEventListener(`error`,o),t(e))},a=()=>i(!0),o=()=>i(!1);W.addEventListener(`open`,a),W.addEventListener(`close`,o),W.addEventListener(`error`,o),r=window.setTimeout(()=>{W&&W.readyState===0||i(W?.readyState===1)},e)})}function ce(e){if(e.type===`resume`){e.mode&&(U.mode=e.mode),U.live=null,U.pendingTool=null,U.waiting=!1,U.running=!0,J(U.current,!0);for(let t of e.events)Y(t);return}Y(e)}function J(e,t){if(!e)return;let n=U.convs.find(t=>t.id===e);n&&(n.running=t)}function Y(e){switch(e.type){case`message_start`:U.live={role:`assistant`,content:``,tool_calls:[]},U.waiting=!1,U.running=!0,J(U.current,!0);break;case`token`:U.live&&(U.live.content+=e.content),U.waiting=!1;break;case`reasoning`:U.live&&(U.live.reasoning=(U.live.reasoning||``)+e.content),U.waiting=!1;break;case`tool_start`:U.live&&U.live.tool_calls.push({name:e.name,input:e.input,output:`执行中…`,at:e.at}),G=e.name,U.waiting=!1;break;case`tool_end`:if(U.live&&U.live.tool_calls.length){let t=U.live.tool_calls[U.live.tool_calls.length-1];t.output=e.output}oe.has(G)&&U.filesTick++;break;case`message_end`:if(U.live){let t=U.live.content;e.stopped&&(t||(U.live.tool_calls??[]).length)&&(t=(t||``)+(t?`

`:``)+`（已手动停止）`),(t||(U.live.tool_calls??[]).length)&&U.messages.push({role:`assistant`,content:t,tool_calls:(U.live.tool_calls??[]).map(e=>({...e})),reasoning:U.live.reasoning}),U.live=null}U.waiting=!1,U.running=!1,J(U.current,!1),e.stopped&&M.info(`已停止，已生成的内容已保留`),U.filesTick++,X();break;case`error`:U.live?U.live.content+=`
[错误] `+e.content:U.messages.push({role:`assistant`,content:`[错误] `+e.content}),U.waiting=!1,J(U.current,!1);break;case`tool_confirm`:U.pendingTool=e.tool_calls,U.waiting=!1;break;case`mode_set`:U.mode=e.mode;break;case`warn`:M.warning(e.content)}}async function X(){U.convs=await H.get(`/api/conversations`),U.running=!!U.convs.find(e=>e.id===U.current)?.running}function le(){let e=U.searchKw.trim().toLowerCase();return e?U.convs.filter(t=>(t.title||``).toLowerCase().includes(e)):U.convs}async function ue(e){let t=(e||``).trim();return t?(await Z(),await Q(t),U.current):null}async function de(e){K(),U.current=e,U.live=null,U.pendingTool=null,U.waiting=!1,U.running=!1,localStorage.setItem(`lg_last_conv`,e);let t=await H.get(`/api/conversations/${e}`);U.convTitle=t.meta?t.meta.title:`未选择会话`,U.messages=t.messages??[],q(e),await X()}async function Z(){K(),U.current=null,U.live=null,U.pendingTool=null,U.waiting=!1,U.running=!1,U.messages=[],U.convTitle=`新对话`,localStorage.removeItem(`lg_last_conv`),await X()}function fe(e){U.mode=e,W&&W.readyState===1&&W.send(JSON.stringify({type:`set_mode`,mode:e}))}function pe(e){W&&W.readyState===1&&W.send(JSON.stringify({type:`tool_decision`,action:e.action,calls:e.calls??[]})),U.pendingTool=null}async function me(e){await H.del(`/api/conversations/${e}`),U.current===e&&await Z(),await X()}async function he(e,t){let n=(t||``).trim();if(!n)return;await H.patch(`/api/conversations/${e}`,{title:n});let r=U.convs.find(t=>t.id===e);r&&(r.title=n),U.current===e&&(U.convTitle=n)}async function Q(e,t){let n=(e||``).trim();if(!n&&!(t&&t.length))return;if(!U.current){let e=await H.post(`/api/conversations`,{title:(n||`文件会话`).slice(0,30)});U.current=e.id,localStorage.setItem(`lg_last_conv`,e.id),await X(),q(e.id),await se()}let r=n;if(t&&t.length&&U.current){let e=[];for(let n of t)try{let t=await ae(n),r=await H.uploadFiles(U.current,[{name:n.name,data:t}]);r.ok&&r.saved?.length?e.push(...r.saved.map(e=>`${e.path} (${ge(e.size)})`)):M.error(`${n.name} 上传失败: ${r.error||`未知错误`}`)}catch{M.error(`${n.name} 读取失败`)}e.length&&(U.filesTick++,r=(r?r+`

`:``)+`[已上传附件到工作目录：${e.join(`、`)}，可直接读取]`)}r.trim()&&(U.messages.push({role:`user`,content:r}),W&&W.readyState===1?(U.waiting=!0,U.running=!0,J(U.current,!0),W.send(JSON.stringify({type:`message`,content:r}))):(await H.post(`/api/conversations/${U.current}/messages`,{content:r}),U.messages=(await H.get(`/api/conversations/${U.current}`)).messages??[],U.waiting=!1,U.filesTick++,X()))}function ge(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(1)} MB`}async function _e(){if(U.current){U.waiting=!1;try{await H.post(`/api/conversations/${U.current}/stop`,{})}catch{}W&&W.readyState===1&&W.send(JSON.stringify({type:`stop`}))}}async function $(){U.skills=await H.get(`/api/skills`)}async function ve(e){await H.post(`/api/skills/${e.id}/${e.enabled?`disable`:`enable`}`),await $()}async function ye(e){await H.del(`/api/skills/${e}`),await $()}async function be(){await H.post(`/api/skills/reload`),await $()}async function xe(e){let t=await H.post(`/api/skills/custom`,e);return t.ok&&await $(),t}export{R as S,_e as _,X as a,ie as b,be as c,pe as d,de as f,U as g,ue as h,le as i,ye as l,fe as m,xe as n,$ as o,Q as p,me as r,Z as s,K as t,he as u,ve as v,B as x,H as y};