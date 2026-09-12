import{a as e}from"./createLucideIcon-Neiaj8sN.js";import{$n as t,Ar as n,At as r,G as i,Gt as a,Hn as o,Ir as s,J as c,K as l,Lt as u,Mr as d,Nr as f,Ot as p,Pt as ee,Rn as m,Rt as h,Un as g,Vn as _,Vt as v,Wn as y,br as b,ht as x,ir as S,jt as C,kt as w,lr as T,nr as E,or as D,ot as O,qt as k,rr as A,t as j,ut as M,xr as N,zn as P}from"./index-D8pxfoyK.js";var F=T({name:`Empty`,render(){return(()=>{let e=u(`15c1a247ae156450`);return e[0]||=A(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[A(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),A(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`})],-1)})()}}),I=P(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[_(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[m(`+`,[_(`description`,`
 margin-top: 8px;
 `)])]),_(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),_(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),L={...w.props,description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function},R=T({name:`Empty`,props:L,slots:Object,setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:i,mergedComponentPropsRef:o}=a(t),s=w(`Empty`,`-empty`,I,C,t,n),{localeRef:c}=e(`Empty`),l=E(()=>t.description??o?.value?.Empty?.description),u=E(()=>o?.value?.Empty?.renderIcon||(()=>(b(),S(F)))),d=E(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:{[y(`iconSize`,e)]:r,[y(`fontSize`,e)]:i,textColor:a,iconColor:o,extraTextColor:c}}=s.value;return{"--n-icon-size":r,"--n-font-size":i,"--n-bezier":n,"--n-text-color":a,"--n-icon-color":o,"--n-extra-text-color":c}}),f=i?r(`empty`,E(()=>{let e=``,{size:n}=t;return e+=n[0],e}),d,t):void 0;return{mergedClsPrefix:n,mergedRenderIcon:u,localizedDescription:E(()=>l.value||c.value.description),cssVars:i?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){let{$slots:e,mergedClsPrefix:n,onRender:r}=this;return r?.(),b(),D(`div`,{class:h([`${n}-empty`,this.themeClass]),style:s(this.cssVars)},[this.showIcon?(b(),D(`div`,{key:0,class:h(`${n}-empty__icon`)},[e.icon?(b(),D(t,{key:0},[v(()=>e.icon())],64)):(b(),S(p,{key:1,clsPrefix:n},{default:this.mergedRenderIcon},1032,[`clsPrefix`]))],2)):v(()=>null),this.showDescription?(b(),D(`div`,{key:2,class:h(`${n}-empty__description`)},[e.default?(b(),D(t,{key:0},[v(()=>e.default())],64)):(b(),D(t,{key:1},[v(()=>this.localizedDescription)],64))],2)):v(()=>null),e.extra?(b(),D(`div`,{key:4,class:h(`${n}-empty__extra`)},[v(()=>e.extra())],2)):v(()=>null)],6)}}),z={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},B=P(`tag`,`
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
`,[o(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),_(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),_(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),_(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),_(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),o(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[_(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),_(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),o(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),o(`icon, avatar`,[o(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),o(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),o(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[g(`disabled`,[m(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[g(`checked`,`color: var(--n-text-color-hover-checkable);`)]),m(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[g(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),o(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[g(`disabled`,[m(`&:hover`,`background-color: var(--n-color-checked-hover);`),m(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),V=[`onClick`,`onMouseenter`,`onMouseleave`],H={...w.props,...z,bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function},U=k(`n-tag`),te=T({name:`Tag`,props:H,slots:Object,setup(e){let t=d(null),{mergedBorderedRef:n,mergedClsPrefixRef:o,inlineThemeDisabled:s,mergedRtlRef:l,mergedComponentPropsRef:u}=a(e),p=E(()=>e.size||u?.value?.Tag?.size||`medium`),m=w(`Tag`,`-tag`,B,i,e,o);N(U,{roundRef:f(e,`round`)});function h(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function g(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&x(n,t)}}let _={setTextContent(e){let{value:n}=t;n&&(n.textContent=e)}},v=O(`Tag`,l,o),b=E(()=>{let{type:t,color:{color:r,textColor:i}={}}=e,a=p.value,{common:{cubicBezierEaseInOut:o},self:{padding:s,closeMargin:c,borderRadius:l,opacityDisabled:u,textColorCheckable:d,textColorHoverCheckable:f,textColorPressedCheckable:h,textColorChecked:g,colorCheckable:_,colorHoverCheckable:v,colorPressedCheckable:b,colorChecked:x,colorCheckedHover:S,colorCheckedPressed:C,closeBorderRadius:w,fontWeightStrong:T,[y(`colorBordered`,t)]:E,[y(`closeSize`,a)]:D,[y(`closeIconSize`,a)]:O,[y(`fontSize`,a)]:k,[y(`height`,a)]:A,[y(`color`,t)]:j,[y(`textColor`,t)]:M,[y(`border`,t)]:N,[y(`closeIconColor`,t)]:P,[y(`closeIconColorHover`,t)]:F,[y(`closeIconColorPressed`,t)]:I,[y(`closeColorHover`,t)]:L,[y(`closeColorPressed`,t)]:R}}=m.value,z=ee(c);return{"--n-font-weight-strong":T,"--n-avatar-size-override":`calc(${A} - 8px)`,"--n-bezier":o,"--n-border-radius":l,"--n-border":N,"--n-close-icon-size":O,"--n-close-color-pressed":R,"--n-close-color-hover":L,"--n-close-border-radius":w,"--n-close-icon-color":P,"--n-close-icon-color-hover":F,"--n-close-icon-color-pressed":I,"--n-close-icon-color-disabled":P,"--n-close-margin-top":z.top,"--n-close-margin-right":z.right,"--n-close-margin-bottom":z.bottom,"--n-close-margin-left":z.left,"--n-close-size":D,"--n-color":r||(n.value?E:j),"--n-color-checkable":_,"--n-color-checked":x,"--n-color-checked-hover":S,"--n-color-checked-pressed":C,"--n-color-hover-checkable":v,"--n-color-pressed-checkable":b,"--n-font-size":k,"--n-height":A,"--n-opacity-disabled":u,"--n-padding":s,"--n-text-color":i||M,"--n-text-color-checkable":d,"--n-text-color-checked":g,"--n-text-color-hover-checkable":f,"--n-text-color-pressed-checkable":h}}),S=s?r(`tag`,E(()=>{let t=``,{type:r,color:{color:i,textColor:a}={}}=e;return t+=r[0],t+=p.value[0],i&&(t+=`a${c(i)}`),a&&(t+=`b${c(a)}`),n.value&&(t+=`c`),t}),b,e):void 0;return{..._,rtlEnabled:v,mergedClsPrefix:o,contentRef:t,mergedBordered:n,handleClick:h,handleCloseClick:g,cssVars:s?void 0:b,themeClass:S?.themeClass,onRender:S?.onRender}},render(){let{mergedClsPrefix:e,rtlEnabled:t,closable:n,color:{borderColor:r}={},round:i,onRender:a,$slots:o}=this;a?.();let c=M(o.avatar,t=>t&&(b(),D(`div`,{class:h(`${e}-tag__avatar`)},[v(()=>t)],2))),u=M(o.icon,t=>t&&(b(),D(`div`,{class:h(`${e}-tag__icon`)},[v(()=>t)],2)));return b(),D(`div`,{class:h([`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:t,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:i,[`${e}-tag--avatar`]:c,[`${e}-tag--icon`]:u,[`${e}-tag--closable`]:n}]),style:s(this.cssVars),onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[v(()=>u||c),A(`span`,{class:h(`${e}-tag__content`),ref:`contentRef`},[v(()=>this.$slots.default?.())],2),!this.checkable&&n?(b(),S(l,{key:0,clsPrefix:e,class:h(`${e}-tag__close`),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0},null,8,[`clsPrefix`,`class`,`disabled`,`onClick`,`focusable`,`round`,`isButtonTag`])):v(()=>null),!this.checkable&&this.mergedBordered?(b(),D(`div`,{key:2,class:h(`${e}-tag__border`),style:s({borderColor:r})},null,6)):v(()=>null)],46,V)}});async function W(e){e.status===401&&!location.pathname.startsWith(`/login`)&&window.dispatchEvent(new CustomEvent(`lg:unauthorized`));try{return await e.json()}catch{return{}}}var G={get:e=>fetch(e).then(W),post:(e,t)=>fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t??{})}).then(W),del:e=>fetch(e,{method:`DELETE`}).then(W),patch:(e,t)=>fetch(e,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)}).then(W),files:async(e,t=``)=>await(await fetch(`/api/conversations/${e}/files?path=${encodeURIComponent(t)}`)).json(),rawFileUrl:(e,t)=>`/api/conversations/${e}/files/raw?path=${encodeURIComponent(t)}`},K=n({convs:[],current:null,messages:[],convTitle:`未选择会话`,status:`○ 未连接`,skills:[],live:null,mode:`auto`,pendingTool:null,searchKw:``}),q=null;function J(){if(q){try{q.close()}catch{}q=null}}function Y(e){J();let t=location.protocol===`https:`?`wss`:`ws`;q=new WebSocket(`${t}://${location.host}/ws/${e}`),q.onopen=()=>{K.status=`● 已连接`,q.send(JSON.stringify({type:`set_mode`,mode:K.mode}))},q.onclose=()=>{K.status=`○ 已断开`},q.onmessage=e=>ne(JSON.parse(e.data))}function ne(e){switch(e.type){case`message_start`:K.live={role:`assistant`,content:``,tool_calls:[]};break;case`token`:K.live&&(K.live.content+=e.content);break;case`tool_start`:K.live&&K.live.tool_calls.push({name:e.name,input:e.input,output:`执行中…`});break;case`tool_end`:if(K.live&&K.live.tool_calls.length){let t=K.live.tool_calls[K.live.tool_calls.length-1];t.output=e.output}break;case`message_end`:K.live&&=(K.messages.push({role:`assistant`,content:K.live.content,tool_calls:(K.live.tool_calls??[]).map(e=>({...e}))}),null),X();break;case`error`:K.live?K.live.content+=`
[错误] `+e.content:K.messages.push({role:`assistant`,content:`[错误] `+e.content});break;case`tool_confirm`:K.pendingTool=e.tool_calls;break;case`mode_set`:K.mode=e.mode;break;case`warn`:j.warning(e.content)}}async function X(){K.convs=await G.get(`/api/conversations`)}function re(){let e=K.searchKw.trim().toLowerCase();return e?K.convs.filter(t=>(t.title||``).toLowerCase().includes(e)):K.convs}async function ie(e){let t=(e||``).trim();return t?(await Z(),await Q(t),K.current):null}async function ae(e){J(),K.current=e,K.live=null,K.pendingTool=null;let t=await G.get(`/api/conversations/${e}`);K.convTitle=t.meta?t.meta.title:`未选择会话`,K.messages=t.messages??[],Y(e),await X()}async function Z(){J(),K.current=null,K.live=null,K.pendingTool=null,K.messages=[],K.convTitle=`新对话`,await X()}function oe(e){K.mode=e,q&&q.readyState===1&&q.send(JSON.stringify({type:`set_mode`,mode:e}))}function se(e){q&&q.readyState===1&&q.send(JSON.stringify({type:`tool_decision`,action:e.action,calls:e.calls??[]})),K.pendingTool=null}async function ce(e){await G.del(`/api/conversations/${e}`),K.current===e&&await Z(),await X()}async function Q(e){let t=(e||``).trim();if(t){if(!K.current){let e=await G.post(`/api/conversations`,{title:t.slice(0,30)});K.current=e.id,await X(),Y(e.id)}K.messages.push({role:`user`,content:t}),q&&q.readyState===1?q.send(JSON.stringify({type:`message`,content:t})):(await G.post(`/api/conversations/${K.current}/messages`,{content:t}),K.messages=(await G.get(`/api/conversations/${K.current}`)).messages??[],X())}}async function $(){K.skills=await G.get(`/api/skills`)}async function le(e){await G.post(`/api/skills/${e.id}/${e.enabled?`disable`:`enable`}`),await $()}async function ue(e){await G.del(`/api/skills/${e}`),await $()}async function de(){await G.post(`/api/skills/reload`),await $()}async function fe(e){let t=await G.post(`/api/skills/custom`,e);return t.ok&&await $(),t}export{te as _,$ as a,ue as c,Q as d,oe as f,G as g,le as h,X as i,se as l,K as m,ce as n,Z as o,ie as p,re as r,de as s,fe as t,ae as u,U as v,R as y};