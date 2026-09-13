const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/docx-preview-BRdgJMme.js","assets/rolldown-runtime-C0FnF6B9.js","assets/lib-BAFGXF-i.js","assets/__vite-browser-external-DpH90L5b.js"])))=>i.map(i=>d[i]);
import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t}from"./index-BKnoSBpI.js";import{G as n,Q as r,W as i,f as a}from"./assets-ri6ja1m_.js";import"./dist-D-x2UDfv.js";import{a as o,i as s,p as c,t as l,u}from"./messages-D2MYCsuK.js";import{n as d,t as f}from"./export-CYFHAiTH.js";import{i as p,n as m,r as h,t as g}from"./printLayout-cwq3dGGh.js";import{t as _}from"./options-C1_I3e1G.js";import{t as v}from"./lib-BAFGXF-i.js";var y=e(v(),1),b={width:794,height:1123},x=new Set([`file:`,`about:`,`data:`]),S=.24,C=3,w=.15,T=20555,E=`http://schemas.openxmlformats.org/wordprocessingml/2006/main`,D=`http://schemas.openxmlformats.org/officeDocument/2006/relationships`,O=`http://schemas.openxmlformats.org/package/2006/relationships`,k=`urn:schemas-microsoft-com:vml`,A=`word/document.xml`,j=`word/_rels/document.xml.rels`,M=`docx-page-background`,ee={bmp:`image/bmp`,gif:`image/gif`,jpeg:`image/jpeg`,jpg:`image/jpeg`,png:`image/png`,svg:`image/svg+xml`,tif:`image/tiff`,tiff:`image/tiff`,webp:`image/webp`},te=e=>{let t=typeof e.renderAsync==`function`?e:e.default;if(!t||typeof t.renderAsync!=`function`)throw TypeError(`@file-viewer/docx did not expose a compatible renderAsync function.`);return t},ne=(()=>{let e={module:null,async load(){return this.module||=t(()=>import(`./docx-preview-BRdgJMme.js`),__vite__mapDeps([0,1,2,3])),this.module}};return async()=>te(await e.load())})(),N=e=>e instanceof Error&&/(?:undefined|null).*children|children.*(?:undefined|null)/i.test(e.message)&&/renderHeaderFooter/i.test(e.stack||``),P=async(e,t,n,r)=>{try{return await e(t,n,void 0,r),!1}catch(i){if(!N(i))throw i;return n.replaceChildren(),await e(t,n,void 0,{...r,renderHeaders:!1,renderFooters:!1}),!0}},re=(e,t)=>{if((e.byteLength>=4?new DataView(e).getUint16(0,!1):0)!==T)throw Error(l(t?.options)(`word.error.invalidDocx`))},F=e=>e.ownerDocument.defaultView,ie=e=>new((F(e)?.DOMParser)??globalThis.DOMParser),ae=e=>{let t=[e.ownerDocument.URL,F(e)?.location?.href,globalThis.location?.href].filter(Boolean);for(let e of t)try{return new URL(e).protocol}catch{}return``},I=(e,t,n)=>{let r=Array.from(e.getElementsByTagNameNS(t,n));return r.length?r:Array.from(e.getElementsByTagName(`*`)).filter(e=>e.localName===n)},L=(e,t)=>{let n=t.parseFromString(e,`application/xml`);return I(n,`http://www.mozilla.org/newlayout/xml/parsererror.xml`,`parsererror`).length?null:n},R=(e,t)=>{let n=t.startsWith(`/`)?[]:e.split(`/`).slice(0,-1);return t.replace(/^\/+/,``).split(`/`).forEach(e=>{if(e&&e!==`.`){if(e===`..`){n.pop();return}n.push(e)}}),n.join(`/`)},z=e=>ee[e.split(`.`).pop()?.toLowerCase()||``],B=async(e,t=()=>new DOMParser)=>{try{let n=await y.default.loadAsync(e),r=n.file(A),i=n.file(j);if(!r||!i)return;let a=t(),o=L(await r.async(`string`),a),s=L(await i.async(`string`),a);if(!o||!s)return;let c=I(o,E,`background`)[0],l=c&&I(c,k,`fill`)[0],u=l?.getAttributeNS(D,`id`)||l?.getAttribute(`r:id`);if(!u)return;let d=I(s,O,`Relationship`).find(e=>e.getAttribute(`Id`)===u),f=d?.getAttribute(`Target`);if(!f||d?.getAttribute(`TargetMode`)===`External`)return;let p=R(A,f),m=z(p),h=n.file(p)||n.file(decodeURIComponent(p));return!m||!h?void 0:`data:${m};base64,${await h.async(`base64`)}`}catch{return}},V=(e,t)=>{if(!t)return 0;let n=0;return e.querySelectorAll(`section.docx`).forEach(r=>{let i=Array.from(r.children).find(e=>e.classList.contains(M)),a=i||e.ownerDocument.createElement(`div`);a.className=M,a.setAttribute(`aria-hidden`,`true`),a.style.backgroundImage=`url("${t}")`,i||r.prepend(a),n+=1}),n},H=(e,t)=>t?.worker===!1?!1:t?.worker===!0||!!((F(e)?.Worker??globalThis.Worker)&&t?.workerUrl&&!x.has(ae(e))),U=e=>{let t=F(e)?.matchMedia??globalThis.matchMedia;return typeof t==`function`&&t(`(prefers-color-scheme: dark)`).matches},W=(e,t,n)=>{if(n?.darkMode!==void 0)return n.darkMode;let r=_(t?.options?.theme);return r===`dark`||r!==`light`&&U(e)},G=(e,t)=>!e||t?e:/[?&]file-viewer-docx=[^&#]*/.test(e)?e.replace(/([?&])file-viewer-docx=[^&#]*/,`$1file-viewer-docx=${a}`):`${e}${e.includes(`?`)?`&`:`?`}file-viewer-docx=${a}`,K=(e,t)=>{if(t===`allow`)return 0;let n=0;return e.querySelectorAll(`a[href]`).forEach(e=>{let t=e.getAttribute(`href`);t&&!t.startsWith(`#`)&&(e.hasAttribute(`data-docx-external-href`)||e.setAttribute(`data-docx-external-href`,t),e.removeAttribute(`href`),e.setAttribute(`aria-disabled`,`true`),n+=1)}),n},q=(e,t,a)=>{let o=t?.options?.docx,s=r(e.ownerDocument),c=H(e,o),l=o?.visualPagination===!0,u=W(e,t,o),d=e=>{(e.phase===`render`||e.phase===`layout`||e.phase===`done`)&&a()},f=o?.externalLinkPolicy??`block`,p=o?.externalResourcePolicy??`block`,m={useWorker:c,reviewMode:o?.reviewMode??`all`,breakPages:!0,fixedPageHeight:l,ignoreLastRenderedPageBreak:o?.ignoreLastRenderedPageBreak??!l,externalLinkPolicy:f,externalResourcePolicy:p,darkMode:u,progress:t=>{(t.phase===`render`||t.phase===`layout`||t.phase===`done`)&&K(e,f),d(t)}};return c&&(m.workerUrl=G(n(o,s),!!o?.workerUrl),m.workerJsZipUrl=G(i(o,s),!!o?.workerJsZipUrl)),o?.workerTimeout!==void 0&&(m.workerTimeout=o.workerTimeout),o?.renderPageBatchSize===void 0?o?.progressive===!1&&(m.renderPageBatchSize=2**53-1):m.renderPageBatchSize=o.renderPageBatchSize,o?.renderYieldEveryMs!==void 0&&(m.renderYieldEveryMs=o.renderYieldEveryMs),o?.strictWordCompatibility!==void 0&&(m.strictWordCompatibility=o.strictWordCompatibility),o?.paginationTolerance!==void 0&&(m.paginationTolerance=o.paginationTolerance),o?.maxDynamicPaginationPasses!==void 0&&(m.maxDynamicPaginationPasses=o.maxDynamicPaginationPasses),o?.awaitLayout!==void 0&&(m.awaitLayout=o.awaitLayout),o?.preserveComplexFieldResults!==void 0&&(m.preserveComplexFieldResults=o.preserveComplexFieldResults),o?.updatePageReferences!==void 0&&(m.updatePageReferences=o.updatePageReferences),o?.hideWebHiddenContent!==void 0&&(m.hideWebHiddenContent=o.hideWebHiddenContent),m},J=(e,t)=>{let n=F(t)?.HTMLElement;return n?e instanceof n:e instanceof HTMLElement},oe=`
/* This component has no review balloon rail, so keep all-markup deletions readable inline. */
.docx-fit-viewer [data-docx-review-enabled="true"][data-docx-review-mode="all"] del[data-docx-change-kind]{display:inline!important;width:auto!important;max-width:none!important;height:auto!important;overflow:visible!important;line-height:inherit!important;color:var(--docx-review-color,#c2410c);text-decoration:line-through;text-decoration-color:var(--docx-review-color,#c2410c)}
.docx-fit-viewer {
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  background: var(--file-viewer-render-surface-background, #ececec);
  color-scheme: light;
}
.docx-fit-viewer[data-docx-dark-mode='true'] {
  background: var(--file-viewer-render-surface-background, #242424);
  color-scheme: dark;
}
.docx-fit-viewer .docx-wrapper {
  box-sizing: border-box;
  min-width: 0 !important;
  width: 100% !important;
  padding: 24px 14px 40px !important;
  background: var(--file-viewer-render-surface-background, #e7e9ec) !important;
}
.docx-fit-viewer[data-docx-dark-mode='true'] .docx-wrapper {
  background: var(--file-viewer-render-surface-background, #242424) !important;
}
.docx-fit-viewer .docx-page-frame {
  position: relative;
  width: 100%;
  min-width: 0;
  margin: 0 auto 24px;
  overflow: visible;
}
.docx-fit-viewer .docx-flow-frame {
  position: relative;
  width: 100%;
  min-width: 0;
  margin: 0 auto 28px;
  overflow: visible;
}
.docx-fit-viewer .docx-page-frame > section.docx,
.docx-fit-viewer .docx-flow-frame > section.docx {
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0 !important;
  background: #ffffff !important;
  box-shadow: 0 2px 14px rgba(25, 35, 48, 0.18);
  box-sizing: border-box;
  overflow: hidden;
  transform-origin: top center;
}
.docx-fit-viewer .docx-page-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.docx-fit-viewer[data-docx-dark-mode='true'] .docx-page-frame > section.docx,
.docx-fit-viewer[data-docx-dark-mode='true'] .docx-flow-frame > section.docx {
  background: rgb(51, 51, 51) !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  outline: 1px solid rgba(255, 255, 255, 0.15);
  outline-offset: -1px;
}
.docx-fit-viewer .docx-flow-frame > section.docx {
  height: auto !important;
  min-height: var(--docx-page-height, auto) !important;
  overflow: visible !important;
}
.docx-fit-viewer .docx-page-frame > section.docx > article,
.docx-fit-viewer .docx-flow-frame > section.docx > article {
  position: relative;
  z-index: 1;
}
`;function se(e){let t=e.ownerDocument.createElement(`style`);return t.textContent=oe,e.prepend(t),t}function ce(e,t){let n=e.querySelector(`.docx-wrapper`);return n?Array.from(n.children).flatMap(n=>{if(!J(n,e)||!n.matches(`section.docx`))return[];let r=e.ownerDocument.createElement(`div`);return r.className=t?`docx-page-frame`:`docx-flow-frame`,n.before(r),r.appendChild(n),[r]}):[]}function Y(e,t){e.classList.add(`docx-fit-viewer`);let n=se(e),r=t?.options?.docx?.visualPagination===!0,i=ce(e,r),a=F(e),l=a?.ResizeObserver,d=0,f=1,m=1,h=1,g=o(),_=e=>Math.min(C,Math.max(S,Number(e.toFixed(2)))),v=()=>{let t=m,n=h,a=!1;i.forEach(i=>{let o=i.firstElementChild;if(!J(o,e))return;o.style.transform=`translateX(-50%)`;let s=o.offsetWidth,c=r?o.offsetHeight:Math.max(o.scrollHeight,o.offsetHeight);if(!s||!c)return;let l=Math.max(e.clientWidth-28,120),u=Math.min(1,Math.max(S,l/s)),d=_(u*f);a||=(t=d,n=u,!0),o.style.transform=`translateX(-50%) scale(${d})`,i.style.width=`${Math.ceil(Math.max(s*d,e.clientWidth-28,120))}px`,i.style.maxWidth=`none`,i.style.height=`${Math.ceil(c*d)}px`}),a&&(m=t,h=n,g.emit())},y=()=>{if(!a){v();return}a.cancelAnimationFrame(d),d=a.requestAnimationFrame(()=>{v()})},x=()=>({scale:m,label:`${Math.round(m*100)}%`,canZoomIn:m<C,canZoomOut:m>S,canReset:f!==1,minScale:S,maxScale:C}),T=e=>(f=Math.min(6,Math.max(.2,Number(e.toFixed(2)))),a?.cancelAnimationFrame(d),v(),x()),E=e=>T(e/Math.max(h,.01)),D=()=>{for(let e of i){let t=X(e);if(!t)continue;let n=p(t,b);return{width:t.offsetWidth||n.width||b.width,height:Z(e)?b.height:t.offsetHeight||n.height||b.height}}return null},O=t=>{let n=D();if(!n)return{applied:!1,mode:t.mode,resize:t.resize,source:t.source,reason:`unmeasurable`,provider:`zoom`};let r=t.mode===`auto`?`width`:t.mode,i=s({mode:r,viewportWidth:Math.max(1,t.viewportWidth||e.clientWidth||0),viewportHeight:Math.max(1,t.viewportHeight||e.clientHeight||0),contentWidth:n.width,contentHeight:n.height,currentScale:m,minScale:t.minScale??S,maxScale:t.maxScale??C});if(!i)return{applied:!1,mode:t.mode,resize:t.resize,source:t.source,reason:`unmeasurable`,provider:`zoom`};let a=E(i);return{applied:!0,mode:t.mode,resize:t.resize,scale:a.scale,source:t.source,provider:`zoom`}};e.dataset.viewerZoomProvider=`docx`,u(e,{zoomIn:()=>T((m+w)/Math.max(h,.01)),zoomOut:()=>T((m-w)/Math.max(h,.01)),resetZoom:()=>T(1),setZoom:E,fit:O,getState:x,subscribe:g.subscribe});let k=l?new l(y):null;return k?.observe(e),i.forEach(e=>{let t=X(e);t&&k?.observe(t)}),v(),()=>{a?.cancelAnimationFrame(d),k?.disconnect(),c(e),n.remove(),e.classList.remove(`docx-fit-viewer`)}}function X(e){let t=e.firstElementChild,n=e.ownerDocument.defaultView?.HTMLElement;return n&&t instanceof n?t:null}function Z(e){return!!e?.classList.contains(`docx-flow-frame`)}function Q(e){return!!e?.classList.contains(`docx-canvas-sheet`)}function $(e){let t=e?X(e):null;if(!t)return b;let n=p(t,b);return Z(e)?{width:n.width,height:Math.max(t.scrollHeight||0,t.offsetHeight||0,b.height)}:n}function le(e,t){var n;if(Q(e)){g(e,t),(n=e.dataset).viewerPrintPageIndex||(n.viewerPrintPageIndex=`0`),e.classList.remove(`docx-canvas-sheet-pending`,`docx-canvas-sheet-virtualized`),e.style.position=`relative`,e.style.contain=`none`,e.style.margin=`0 auto 18px`,e.style.boxShadow=`none`;return}let r=Z(e),i=h(t.width),a=h(t.height);g(e,t,{heightMode:r?`min`:`fixed`}),e.style.margin=`0 auto 18px`;let o=X(e);o&&(o.style.position=`relative`,o.style.top=`auto`,o.style.left=`auto`,o.style.width=i,o.style.maxWidth=`none`,o.style.minHeight=r?`0`:a,o.style.height=r?`auto`:a,o.style.margin=`0 auto`,o.style.transform=`none`,o.style.transformOrigin=`top left`,o.style.overflow=r?`visible`:`hidden`,o.style.boxShadow=`none`)}function ue(e){let t=e.querySelector(`.docx-page-frame, .docx-flow-frame, .docx-canvas-sheet`),n=$(t||void 0),r=Q(t||void 0)?`.viewer-export-content .docx-canvas-sheet`:t?.classList.contains(`docx-flow-frame`)?`.viewer-export-content .docx-flow-frame`:`.viewer-export-content .docx-page-frame`;return m({selector:r,width:n.width,height:t?.classList.contains(`docx-flow-frame`)?b.height:n.height,heightMode:t?.classList.contains(`docx-flow-frame`)?`min`:`fixed`})}async function de(e){let t=F(e),n=!!e.querySelector(`.docx-canvas-sheet`),r=t?.__docxCanvasMaterializeAllPages,i=!1;n&&typeof r==`function`&&(await r.call(t,`file-viewer-print-snapshot`),await d(t),i=!0);try{let t=`.docx-page-frame, .docx-flow-frame, .docx-canvas-sheet`,n=Array.from(e.querySelectorAll(t)),r=e.cloneNode(!0);f(e,r);let i=e.ownerDocument.createElement(`div`);i.className=`docx-print-document`;let a=Array.from(r.querySelectorAll(`style`)).filter(e=>!e.textContent?.includes(`.docx-fit-viewer`)).map(e=>e.outerHTML).join(``);return r.querySelectorAll(t).forEach((e,t)=>{e.dataset.viewerPrintPageIndex=String(t),le(e,$(n[t])),i.appendChild(e.cloneNode(!0))}),i.childElementCount?`${a}${i.outerHTML}`:r.innerHTML}finally{if(i&&t){let n=e.ownerDocument.createEvent(`Event`);n.initEvent(`afterprint`,!1,!1),t.dispatchEvent(n)}}}async function fe(e,t,n){var r,i;re(e,n),t.replaceChildren();let a=!1,o=()=>{var e;a||(a=!0,(e=n?.onProgressiveRender)==null||e.call(n))},s=q(t,n,o),[{defaultOptions:c,renderAsync:l},u]=await Promise.all([ne(),B(e,()=>ie(t))]);t.dataset.docxWorker=s.useWorker?`self`:`false`,t.dataset.docxDarkMode=s.darkMode?`true`:`false`;let d=await P(l,e,t,{...c,...s});K(t,s.externalLinkPolicy),t.dataset.docxHeaderFooterFallback=d?`true`:`false`,t.dataset.docxPageBackground=V(t,u)>0?`true`:`false`,o();let f=Y(t,n);return(r=n?.registerExportAdapter)==null||r.call(n,{includeDocumentStyles:!1,getPrintMaskPages:()=>Array.from(t.querySelectorAll(`.docx-page-frame, .docx-flow-frame, .docx-canvas-sheet`)),beforeSnapshot:()=>{let e=F(t);e&&e.dispatchEvent(new e.Event(`resize`))},printStyle:()=>ue(t),toHtml:()=>de(t)}),(i=n?.registerThumbnailAdapter)==null||i.call(n,{getTarget:()=>t.querySelector(`.docx-page-frame, .docx-flow-frame, .docx-canvas-sheet`)||t}),{$el:t,unmount(){var e,r;(e=n?.registerExportAdapter)==null||e.call(n,null),(r=n?.registerThumbnailAdapter)==null||r.call(n,null),f(),delete t.dataset.docxWorker,delete t.dataset.docxDarkMode,delete t.dataset.docxHeaderFooterFallback,delete t.dataset.docxPageBackground,t.replaceChildren()}}}export{fe as default};