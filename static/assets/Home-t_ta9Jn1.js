import{a as e,c as t,d as n,f as r,g as i,h as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./eye-Qdx5SXqV.js";import{$ as g,$n as _,$t as v,A as y,At as b,Bn as x,Bt as S,Cn as C,Ct as ee,D as w,Dn as T,Dt as E,E as te,En as ne,Et as re,Fn as D,G as ie,Gn as O,Gt as ae,H as oe,Hn as k,Ht as se,In as A,It as ce,J as le,Jn as ue,Jt as de,K as fe,Kn as pe,Kt as me,Ln as j,Lt as he,Mn as M,Mt as ge,N as _e,Nn as ve,O as ye,On as be,Ot as xe,P as Se,Pn as Ce,Pt as we,Q as Te,Qn as Ee,Qt as De,R as Oe,Rn as N,Rt as ke,S as Ae,Sn as je,St as Me,T as Ne,Tn as Pe,Tt as Fe,U as Ie,Un as Le,V as Re,Vn as P,Vt as ze,W as Be,Wn as Ve,Wt as He,X as Ue,Xn as F,Xt as We,Y as Ge,Yn as Ke,Yt as qe,Z as Je,Zn as Ye,Zt as Xe,_ as Ze,_n as I,_t as Qe,an as $e,ar as L,at as et,b as R,bn as z,bt as tt,c as nt,cn as rt,cr as it,ct as at,d as ot,dn as st,dt as ct,en as lt,er as ut,et as dt,f as ft,fn as pt,ft as mt,g as ht,gt,h as _t,ht as vt,i as yt,in as bt,ir as xt,it as St,j as Ct,jn as wt,kn as Tt,kt as Et,l as Dt,ln as Ot,lr as B,lt as kt,mt as At,n as jt,nn as Mt,nr as V,nt as Nt,o as Pt,on as Ft,or as H,ot as U,p as It,pt as Lt,q as Rt,qn as zt,qt as Bt,rn as Vt,rr as Ht,rt as Ut,s as Wt,sn as Gt,sr as W,st as Kt,t as qt,tn as Jt,tr as Yt,tt as G,un as Xt,ur as K,ut as Zt,vn as q,vt as J,wn as Qt,wt as $t,x as en,xn as Y,xt as tn,y as nn,yn as rn,yt as an,z as on,zn as X}from"./index-EjLfQ72B.js";var sn=/\s/;function cn(e){for(var t=e.length;t--&&sn.test(e.charAt(t)););return t}var ln=/^\s+/;function un(e){return e&&e.slice(0,cn(e)+1).replace(ln,``)}var dn=NaN,fn=/^[-+]0x[0-9a-f]+$/i,pn=/^0b[01]+$/i,mn=/^0o[0-7]+$/i,hn=parseInt;function gn(e){if(typeof e==`number`)return e;if(rt(e))return dn;if($e(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=$e(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=un(e);var n=pn.test(e);return n||mn.test(e)?hn(e.slice(2),n?2:8):fn.test(e)?dn:+e}var _n=Mt(pt,`WeakMap`),vn=me(Object.keys,Object),yn=Object.prototype.hasOwnProperty;function bn(e){if(!Xe(e))return vn(e);var t=[];for(var n in Object(e))yn.call(e,n)&&n!=`constructor`&&t.push(n);return t}function xn(e){return De(e)?Bt(e):bn(e)}function Sn(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Cn(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function wn(){return[]}var Tn=Object.prototype.propertyIsEnumerable,En=Object.getOwnPropertySymbols,Dn=En?function(e){return e==null?[]:(e=Object(e),Cn(En(e),function(t){return Tn.call(e,t)}))}:wn;function On(e,t,n){var r=t(e);return Ft(e)?r:Sn(r,n(e))}function kn(e){return On(e,xn,Dn)}var An=Mt(pt,`DataView`),jn=Mt(pt,`Promise`),Mn=Mt(pt,`Set`),Nn=`[object Map]`,Pn=`[object Object]`,Fn=`[object Promise]`,In=`[object Set]`,Ln=`[object WeakMap]`,Rn=`[object DataView]`,zn=Vt(An),Bn=Vt(ae),Vn=Vt(jn),Hn=Vt(Mn),Un=Vt(_n),Wn=Xt;(An&&Wn(new An(new ArrayBuffer(1)))!=Rn||ae&&Wn(new ae)!=Nn||jn&&Wn(jn.resolve())!=Fn||Mn&&Wn(new Mn)!=In||_n&&Wn(new _n)!=Ln)&&(Wn=function(e){var t=Xt(e),n=t==Pn?e.constructor:void 0,r=n?Vt(n):``;if(r)switch(r){case zn:return Rn;case Bn:return Nn;case Vn:return Fn;case Hn:return In;case Un:return Ln}return t});var Gn=Wn,Kn=`__lodash_hash_undefined__`;function qn(e){return this.__data__.set(e,Kn),this}function Jn(e){return this.__data__.has(e)}function Yn(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new He;++t<n;)this.add(e[t])}Yn.prototype.add=Yn.prototype.push=qn,Yn.prototype.has=Jn;function Xn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Zn(e,t){return e.has(t)}var Qn=1,$n=2;function er(e,t,n,r,i,a){var o=n&Qn,s=e.length,c=t.length;if(s!=c&&!(o&&c>s))return!1;var l=a.get(e),u=a.get(t);if(l&&u)return l==t&&u==e;var d=-1,f=!0,p=n&$n?new Yn:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var m=e[d],h=t[d];if(r)var g=o?r(h,m,d,t,e,a):r(m,h,d,e,t,a);if(g!==void 0){if(g)continue;f=!1;break}if(p){if(!Xn(t,function(e,t){if(!Zn(p,t)&&(m===e||i(m,e,n,r,a)))return p.push(t)})){f=!1;break}}else if(!(m===h||i(m,h,n,r,a))){f=!1;break}}return a.delete(e),a.delete(t),f}function tr(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function nr(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}var rr=1,ir=2,ar=`[object Boolean]`,or=`[object Date]`,sr=`[object Error]`,cr=`[object Map]`,lr=`[object Number]`,ur=`[object RegExp]`,dr=`[object Set]`,fr=`[object String]`,pr=`[object Symbol]`,mr=`[object ArrayBuffer]`,hr=`[object DataView]`,gr=st?st.prototype:void 0,_r=gr?gr.valueOf:void 0;function vr(e,t,n,r,i,a,o){switch(n){case hr:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case mr:return!(e.byteLength!=t.byteLength||!a(new ze(e),new ze(t)));case ar:case or:case lr:return lt(+e,+t);case sr:return e.name==t.name&&e.message==t.message;case ur:case fr:return e==t+``;case cr:var s=tr;case dr:var c=r&rr;if(s||=nr,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=ir,o.set(e,t);var u=er(s(e),s(t),r,i,a,o);return o.delete(e),u;case pr:if(_r)return _r.call(e)==_r.call(t)}return!1}var yr=1,br=Object.prototype.hasOwnProperty;function xr(e,t,n,r,i,a){var o=n&yr,s=kn(e),c=s.length;if(c!=kn(t).length&&!o)return!1;for(var l=c;l--;){var u=s[l];if(!(o?u in t:br.call(t,u)))return!1}var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var p=!0;a.set(e,t),a.set(t,e);for(var m=o;++l<c;){u=s[l];var h=e[u],g=t[u];if(r)var _=o?r(g,h,u,t,e,a):r(h,g,u,e,t,a);if(!(_===void 0?h===g||i(h,g,n,r,a):_)){p=!1;break}m||=u==`constructor`}if(p&&!m){var v=e.constructor,y=t.constructor;v!=y&&`constructor`in e&&`constructor`in t&&!(typeof v==`function`&&v instanceof v&&typeof y==`function`&&y instanceof y)&&(p=!1)}return a.delete(e),a.delete(t),p}var Sr=1,Cr=`[object Arguments]`,wr=`[object Array]`,Tr=`[object Object]`,Er=Object.prototype.hasOwnProperty;function Dr(e,t,n,r,i,a){var o=Ft(e),s=Ft(t),c=o?wr:Gn(e),l=s?wr:Gn(t);c=c==Cr?Tr:c,l=l==Cr?Tr:l;var u=c==Tr,d=l==Tr,f=c==l;if(f&&qe(e)){if(!qe(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new se,o||de(e)?er(e,t,n,r,i,a):vr(e,t,c,n,r,i,a);if(!(n&Sr)){var p=u&&Er.call(e,`__wrapped__`),m=d&&Er.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new se,i(h,g,n,r,a)}}return f?(a||=new se,xr(e,t,n,r,i,a)):!1}function Or(e,t,n,r,i){return e===t?!0:e==null||t==null||!Ot(e)&&!Ot(t)?e!==e&&t!==t:Dr(e,t,n,r,Or,i)}var kr=1,Ar=2;function jr(e,t,n,r){var i=n.length,a=i,o=!r;if(e==null)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){s=n[i];var c=s[0],l=e[c],u=s[1];if(o&&s[2]){if(l===void 0&&!(c in e))return!1}else{var d=new se;if(r)var f=r(l,u,c,e,t,d);if(!(f===void 0?Or(u,l,kr|Ar,r,d):f))return!1}}return!0}function Mr(e){return e===e&&!$e(e)}function Nr(e){for(var t=xn(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Mr(i)]}return t}function Pr(e,t){return function(n){return n!=null&&n[e]===t&&(t!==void 0||e in Object(n))}}function Fr(e){var t=Nr(e);return t.length==1&&t[0][2]?Pr(t[0][0],t[0][1]):function(n){return n===e||jr(n,e,t)}}function Ir(e,t){return e!=null&&t in Object(e)}function Lr(e,t,n){t=a(t,e);for(var r=-1,i=t.length,o=!1;++r<i;){var s=c(t[r]);if(!(o=e!=null&&n(e,s)))break;e=e[s]}return o||++r!=i?o:(i=e==null?0:e.length,!!i&&v(i)&&Jt(s,i)&&(Ft(e)||We(e)))}function Rr(e,t){return e!=null&&Lr(e,t,Ir)}var zr=1,Br=2;function Vr(e,t){return i(e)&&Mr(t)?Pr(c(e),t):function(n){var i=r(n,e);return i===void 0&&i===t?Rr(n,e):Or(t,i,zr|Br)}}function Hr(e){return function(t){return t?.[e]}}function Ur(e){return function(t){return d(t,e)}}function Wr(e){return i(e)?Hr(c(e)):Ur(e)}function Gr(e){return typeof e==`function`?e:e==null?bt:typeof e==`object`?Ft(e)?Vr(e[0],e[1]):Fr(e):Wr(e)}function Kr(e,t){return e&&S(e,t,xn)}function qr(e,t){return function(n,r){if(n==null)return n;if(!De(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Object(n);(t?a--:++a<i)&&r(o[a],a,o)!==!1;);return n}}var Jr=qr(Kr),Yr=function(){return pt.Date.now()},Xr=`Expected a function`,Zr=Math.max,Qr=Math.min;function $r(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(Xr);t=gn(t)||0,$e(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?Zr(gn(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?Qr(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=Yr();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(Yr())}function x(){var e=Yr(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}function ei(e,t){var n=-1,r=De(e)?Array(e.length):[];return Jr(e,function(e,i,a){r[++n]=t(e,i,a)}),r}function ti(e,t){return(Ft(e)?Gt:ei)(e,Gr(t,3))}var ni=`Expected a function`;function ri(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(ni);return $e(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),$r(e,t,{leading:r,maxWait:t,trailing:i})}var ii=[],ai=new WeakMap;function oi(){ii.forEach(e=>e(...ai.get(e))),ii=[]}function si(e,...t){ai.set(e,t),!ii.includes(e)&&ii.push(e)===1&&requestAnimationFrame(oi)}function ci(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}var li=k({name:`Empty`,render(){return(()=>{let e=re(`15c1a247ae156450`);return e[0]||=A(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[A(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),A(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`})],-1)})()}}),ui=q(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[z(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[I(`+`,[z(`description`,`
 margin-top: 8px;
 `)])]),z(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),z(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),di={...J.props,description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function},fi=k({name:`Empty`,props:di,slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedComponentPropsRef:i}=we(e),a=J(`Empty`,`-empty`,ui,tt,e,t),{localeRef:o}=n(`Empty`),s=D(()=>e.description??i?.value?.Empty?.description),c=D(()=>i?.value?.Empty?.renderIcon||(()=>(F(),j(li)))),l=D(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{[C(`iconSize`,t)]:r,[C(`fontSize`,t)]:i,textColor:o,iconColor:s,extraTextColor:c}}=a.value;return{"--n-icon-size":r,"--n-font-size":i,"--n-bezier":n,"--n-text-color":o,"--n-icon-color":s,"--n-extra-text-color":c}}),u=r?an(`empty`,D(()=>{let t=``,{size:n}=e;return t+=n[0],t}),l,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:c,localizedDescription:D(()=>s.value||o.value.description),cssVars:r?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),F(),X(`div`,{class:E([`${t}-empty`,this.themeClass]),style:B(this.cssVars)},[this.showIcon?(F(),X(`div`,{key:0,class:E(`${t}-empty__icon`)},[e.icon?(F(),X(M,{key:0},[b(()=>e.icon())],64)):(F(),j(Qe,{key:1,clsPrefix:t},{default:this.mergedRenderIcon},1032,[`clsPrefix`]))],2)):b(()=>null),this.showDescription?(F(),X(`div`,{key:2,class:E(`${t}-empty__description`)},[e.default?(F(),X(M,{key:0},[b(()=>e.default())],64)):(F(),X(M,{key:1},[b(()=>this.localizedDescription)],64))],2)):b(()=>null),e.extra?(F(),X(`div`,{key:4,class:E(`${t}-empty__extra`)},[b(()=>e.extra())],2)):b(()=>null)],6)}});ce(`n-internal-select-menu`);var pi=ce(`n-internal-select-menu-body`),mi=at?document?.fonts?.ready:void 0,hi=!1;mi===void 0?hi=!0:mi.then(()=>{hi=!0});function gi(e){if(hi)return;let t=!1;Ke(()=>{hi||mi?.then(()=>{t||e()})}),ue(()=>{t=!0})}function _i(e,t){return D(()=>{for(let n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}var vi=`__disabled__`;function yi(e){let t=O(At,null),n=O(vt,null),r=O(Lt,null),i=O(pi,null),a=L();if(typeof document<`u`){a.value=document.fullscreenElement;let e=()=>{a.value=document.fullscreenElement};Ke(()=>{mt(`fullscreenchange`,document,e)}),ue(()=>{ct(`fullscreenchange`,document,e)})}return kt(()=>{let{to:o}=e;return o===void 0?t?.value?t.value.$el??t.value:n?.value?n.value:r?.value?r.value:i?.value?i.value:o??(a.value||`body`):o===!1?vi:o===!0?a.value||`body`:o})}yi.tdkey=vi,yi.propTo={type:[String,Object,Boolean],default:void 0};var bi;function xi(){return bi===void 0&&(bi=navigator.userAgent.includes(`Node.js`)||navigator.userAgent.includes(`jsdom`)),bi}var Si=null;function Ci(){if(Si===null&&(Si=document.getElementById(`v-binder-view-measurer`),Si===null)){Si=document.createElement(`div`),Si.id=`v-binder-view-measurer`;let{style:e}=Si;e.position=`fixed`,e.left=`0`,e.right=`0`,e.top=`0`,e.bottom=`0`,e.pointerEvents=`none`,e.visibility=`hidden`,document.body.appendChild(Si)}return Si.getBoundingClientRect()}function wi(e,t){let n=Ci();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function Ti(e){let t=e.getBoundingClientRect(),n=Ci();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function Ei(e){return e.nodeType===9?null:e.parentNode}function Di(e){if(e===null)return null;let t=Ei(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){let{overflow:e,overflowX:n,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(e+r+n))return t}return Di(t)}var Oi=k({name:`Binder`,props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){Ye(`VBinder`,Le()?.proxy);let t=O(`VBinder`,null),n=L(null),r=r=>{n.value=r,t&&e.syncTargetWithParent&&t.setTargetRef(r)},i=[],a=()=>{let e=n.value;for(;e=Di(e),e!==null;)i.push(e);for(let e of i)mt(`scroll`,e,u,!0)},o=()=>{for(let e of i)ct(`scroll`,e,u,!0);i=[]},s=new Set,c=e=>{s.size===0&&a(),s.has(e)||s.add(e)},l=e=>{s.has(e)&&s.delete(e),s.size===0&&o()},u=()=>{si(d)},d=()=>{s.forEach(e=>e())},f=new Set,p=e=>{f.size===0&&mt(`resize`,window,h),f.has(e)||f.add(e)},m=e=>{f.has(e)&&f.delete(e),f.size===0&&ct(`resize`,window,h)},h=()=>{f.forEach(e=>e())};return ue(()=>{ct(`resize`,window,h),o()}),{targetRef:n,setTargetRef:r,addScrollListener:c,removeScrollListener:l,addResizeListener:p,removeResizeListener:m}},render(){return Ue(`binder`,this.$slots)}}),ki=k({name:`Target`,setup(){let{setTargetRef:e,syncTarget:t}=O(`VBinder`);return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){let{syncTarget:e,setTargetDirective:t}=this;return e?Ht(Ge(`follower`,this.$slots),[[t]]):Ge(`follower`,this.$slots)}}),Ai=`@@mmoContext`,ji={mounted(e,{value:t}){e[Ai]={handler:void 0},typeof t==`function`&&(e[Ai].handler=t,mt(`mousemoveoutside`,e,t))},updated(e,{value:t}){let n=e[Ai];typeof t==`function`?n.handler?n.handler!==t&&(ct(`mousemoveoutside`,e,n.handler),n.handler=t,mt(`mousemoveoutside`,e,t)):(e[Ai].handler=t,mt(`mousemoveoutside`,e,t)):n.handler&&=(ct(`mousemoveoutside`,e,n.handler),void 0)},unmounted(e){let{handler:t}=e[Ai];t&&ct(`mousemoveoutside`,e,t),e[Ai].handler=void 0}},{c:Mi}=ne(),Ni=`vueuc-style`,Pi={top:`bottom`,bottom:`top`,left:`right`,right:`left`},Fi={start:`end`,center:`center`,end:`start`},Ii={top:`height`,bottom:`height`,left:`width`,right:`width`},Li={"bottom-start":`top left`,bottom:`top center`,"bottom-end":`top right`,"top-start":`bottom left`,top:`bottom center`,"top-end":`bottom right`,"right-start":`top left`,right:`center left`,"right-end":`bottom left`,"left-start":`top right`,left:`center right`,"left-end":`bottom right`},Ri={"bottom-start":`bottom left`,bottom:`bottom center`,"bottom-end":`bottom right`,"top-start":`top left`,top:`top center`,"top-end":`top right`,"right-start":`top right`,right:`center right`,"right-end":`bottom right`,"left-start":`top left`,left:`center left`,"left-end":`bottom left`},zi={"bottom-start":`right`,"bottom-end":`left`,"top-start":`right`,"top-end":`left`,"right-start":`bottom`,"right-end":`top`,"left-start":`bottom`,"left-end":`top`},Bi={top:!0,bottom:!1,left:!0,right:!1},Vi={top:`end`,bottom:`start`,left:`end`,right:`start`};function Hi(e,t,n,r,i,a){if(!i||a)return{placement:e,top:0,left:0};let[o,s]=e.split(`-`),c=s??`center`,l={top:0,left:0},u=(e,i,a)=>{let o=0,s=0,c=n[e]-t[i]-t[e];return c>0&&r&&(a?s=Bi[i]?c:-c:o=Bi[i]?c:-c),{left:o,top:s}},d=o===`left`||o===`right`;if(c!==`center`){let r=zi[e],i=Pi[r],a=Ii[r];if(n[a]>t[a]){if(t[r]+t[a]<n[a]){let e=(n[a]-t[a])/2;t[r]<e||t[i]<e?t[r]<t[i]?(c=Fi[s],l=u(a,i,d)):l=u(a,r,d):c=`center`}}else n[a]<t[a]&&t[i]<0&&t[r]>t[i]&&(c=Fi[s])}else{let e=o===`bottom`||o===`top`?`left`:`top`,r=Pi[e],i=Ii[e],a=(n[i]-t[i])/2;(t[e]<a||t[r]<a)&&(t[e]>t[r]?(c=Vi[e],l=u(i,e,d)):(c=Vi[r],l=u(i,r,d)))}let f=o;return t[o]<n[Ii[o]]&&t[o]<t[Pi[o]]&&(f=Pi[o]),{placement:c===`center`?f:`${f}-${c}`,left:l.left,top:l.top}}function Ui(e,t){return t?Ri[e]:Li[e]}function Wi(e,t,n,r,i,a){if(a)switch(e){case`bottom-start`:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:`translateY(-100%)`};case`bottom-end`:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%) translateY(-100%)`};case`top-start`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:``};case`top-end`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%)`};case`right-start`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%)`};case`right-end`:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%) translateY(-100%)`};case`left-start`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:``};case`left-end`:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:`translateY(-100%)`};case`top`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:`translateX(-50%)`};case`right`:return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%) translateY(-50%)`};case`left`:return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:`translateY(-50%)`};default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:`translateX(-50%) translateY(-100%)`}}switch(e){case`bottom-start`:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:``};case`bottom-end`:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:`translateX(-100%)`};case`top-start`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:`translateY(-100%)`};case`top-end`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:`translateX(-100%) translateY(-100%)`};case`right-start`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:``};case`right-end`:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:`translateY(-100%)`};case`left-start`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:`translateX(-100%)`};case`left-end`:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:`translateX(-100%) translateY(-100%)`};case`top`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:`translateY(-100%) translateX(-50%)`};case`right`:return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:`translateY(-50%)`};case`left`:return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:`translateY(-50%) translateX(-100%)`};default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:`translateX(-50%)`}}}var Gi=Mi([Mi(`.v-binder-follower-container`,{position:`absolute`,left:`0`,right:`0`,top:`0`,height:`0`,pointerEvents:`none`,zIndex:`auto`}),Mi(`.v-binder-follower-content`,{position:`absolute`,zIndex:`auto`},[Mi(`> *`,{pointerEvents:`all`})])]),Ki=k({name:`Follower`,inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:`bottom`},syncTrigger:{type:Array,default:[`resize`,`scroll`]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){let t=O(`VBinder`),n=kt(()=>e.enabled===void 0?e.show:e.enabled),r=L(null),i=L(null),a=()=>{let{syncTrigger:n}=e;n.includes(`scroll`)&&t.addScrollListener(c),n.includes(`resize`)&&t.addResizeListener(c)},o=()=>{t.removeScrollListener(c),t.removeResizeListener(c)};Ke(()=>{n.value&&(c(),a())});let s=ge();Gi.mount({id:`vueuc/binder`,head:!0,anchorMetaName:Ni,ssr:s}),ue(()=>{o()}),gi(()=>{n.value&&c()});let c=()=>{if(!n.value)return;let a=r.value;if(a===null)return;let o=t.targetRef,{x:s,y:c,overlap:l}=e,u=s!==void 0&&c!==void 0?wi(s,c):Ti(o);a.style.setProperty(`--v-target-width`,`${Math.round(u.width)}px`),a.style.setProperty(`--v-target-height`,`${Math.round(u.height)}px`);let{width:d,minWidth:f,placement:p,internalShift:m,flip:h}=e;a.setAttribute(`v-placement`,p),l?a.setAttribute(`v-overlap`,``):a.removeAttribute(`v-overlap`);let{style:g}=a;g.width=d===`target`?`${u.width}px`:d===void 0?``:d,g.minWidth=f===`target`?`${u.width}px`:f===void 0?``:f;let _=Ti(a),v=Ti(i.value),{left:y,top:b,placement:x}=Hi(p,u,_,m,h,l),S=Ui(x,l),{left:C,top:ee,transform:w}=Wi(x,v,u,b,y,l);a.setAttribute(`v-placement`,x),a.style.setProperty(`--v-offset-left`,`${Math.round(y)}px`),a.style.setProperty(`--v-offset-top`,`${Math.round(b)}px`),a.style.transform=`translateX(${C}) translateY(${ee}) ${w}`,a.style.setProperty(`--v-transform-origin`,S),a.style.transformOrigin=S};ut(n,e=>{e?(a(),l()):o()});let l=()=>{zt().then(c).catch(e=>console.error(e))};[`placement`,`x`,`y`,`internalShift`,`flip`,`width`,`overlap`,`minWidth`].forEach(t=>{ut(H(e,t),c)}),[`teleportDisabled`].forEach(t=>{ut(H(e,t),l)}),ut(H(e,`syncTrigger`),e=>{e.includes(`resize`)?t.addResizeListener(c):t.removeResizeListener(c),e.includes(`scroll`)?t.addScrollListener(c):t.removeScrollListener(c)});let u=Kt();return{VBinder:t,mergedEnabled:n,offsetContainerRef:i,followerRef:r,mergedTo:kt(()=>{let{to:t}=e;if(t!==void 0)return t;u.value}),syncPosition:c}},render(){return Ve(fe,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e;let t=Ve(`div`,{class:[`v-binder-follower-container`,this.containerClass],ref:`offsetContainerRef`},[Ve(`div`,{class:`v-binder-follower-content`,ref:`followerRef`},(e=this.$slots).default?.call(e))]);return this.zindexable?Ht(t,[[Rt,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}}),qi=Mi(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[Mi(`&::-webkit-scrollbar`,{width:0,height:0})]),Ji=k({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=L(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=ge();return qi.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:Ni,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return Ve(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Yi={top:`bottom`,bottom:`top`,left:`right`,right:`left`},Z=`var(--n-arrow-height) * 1.414`,Xi=I([q(`popover`,`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[I(`>`,[q(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),je(`raw`,`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[je(`scrollable`,[je(`show-header-or-footer`,`padding: var(--n-padding);`)])]),z(`header`,`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),z(`footer`,`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Y(`scrollable, show-header-or-footer`,[z(`content`,`
 padding: var(--n-padding);
 `)])]),q(`popover-shared`,`
 transform-origin: inherit;
 `,[q(`popover-arrow-wrapper`,`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[q(`popover-arrow`,`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Z});
 height: calc(${Z});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),I(`&.popover-transition-enter-from, &.popover-transition-leave-to`,`
 opacity: 0;
 transform: scale(.85);
 `),I(`&.popover-transition-enter-to, &.popover-transition-leave-from`,`
 transform: scale(1);
 opacity: 1;
 `),I(`&.popover-transition-enter-active`,`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),I(`&.popover-transition-leave-active`,`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),Qi(`top-start`,`
 top: calc(${Z} / -2);
 left: calc(${Zi(`top-start`)} - var(--v-offset-left));
 `),Qi(`top`,`
 top: calc(${Z} / -2);
 transform: translateX(calc(${Z} / -2)) rotate(45deg);
 left: 50%;
 `),Qi(`top-end`,`
 top: calc(${Z} / -2);
 right: calc(${Zi(`top-end`)} + var(--v-offset-left));
 `),Qi(`bottom-start`,`
 bottom: calc(${Z} / -2);
 left: calc(${Zi(`bottom-start`)} - var(--v-offset-left));
 `),Qi(`bottom`,`
 bottom: calc(${Z} / -2);
 transform: translateX(calc(${Z} / -2)) rotate(45deg);
 left: 50%;
 `),Qi(`bottom-end`,`
 bottom: calc(${Z} / -2);
 right: calc(${Zi(`bottom-end`)} + var(--v-offset-left));
 `),Qi(`left-start`,`
 left: calc(${Z} / -2);
 top: calc(${Zi(`left-start`)} - var(--v-offset-top));
 `),Qi(`left`,`
 left: calc(${Z} / -2);
 transform: translateY(calc(${Z} / -2)) rotate(45deg);
 top: 50%;
 `),Qi(`left-end`,`
 left: calc(${Z} / -2);
 bottom: calc(${Zi(`left-end`)} + var(--v-offset-top));
 `),Qi(`right-start`,`
 right: calc(${Z} / -2);
 top: calc(${Zi(`right-start`)} - var(--v-offset-top));
 `),Qi(`right`,`
 right: calc(${Z} / -2);
 transform: translateY(calc(${Z} / -2)) rotate(45deg);
 top: 50%;
 `),Qi(`right-end`,`
 right: calc(${Z} / -2);
 bottom: calc(${Zi(`right-end`)} + var(--v-offset-top));
 `),...ti({top:[`right-start`,`left-start`],right:[`top-end`,`bottom-end`],bottom:[`right-end`,`left-end`],left:[`top-start`,`bottom-start`]},(e,t)=>{let n=[`right`,`left`].includes(t),r=n?`width`:`height`;return e.map(e=>{let i=e.split(`-`)[1]===`end`,a=`calc((${`var(--v-target-${r}, 0px)`} - ${Z}) / 2)`,o=Zi(e);return I(`[v-placement="${e}"] >`,[q(`popover-shared`,[Y(`center-arrow`,[q(`popover-arrow`,`${t}: calc(max(${a}, ${o}) ${i?`+`:`-`} var(--v-offset-${n?`left`:`top`}));`)])])])})})]);function Zi(e){return[`top`,`bottom`].includes(e.split(`-`)[0])?`var(--n-arrow-offset)`:`var(--n-arrow-offset-vertical)`}function Qi(e,t){let n=e.split(`-`)[0],r=[`top`,`bottom`].includes(n)?`height: var(--n-space-arrow);`:`width: var(--n-space-arrow);`;return I(`[v-placement="${e}"] >`,[q(`popover-shared`,`
 margin-${Yi[n]}: var(--n-space);
 `,[Y(`show-arrow`,`
 margin-${Yi[n]}: var(--n-space-arrow);
 `),Y(`overlap`,`
 margin: 0;
 `),rn(`popover-arrow-wrapper`,`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Yi[n]}: auto;
 ${r}
 `,[q(`popover-arrow`,t)])])])}var $i={...J.props,to:yi.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number};function ea({arrowClass:e,arrowStyle:t,arrowWrapperClass:n,arrowWrapperStyle:r,clsPrefix:i}){return F(),X(`div`,{key:`__popover-arrow__`,style:B(r),class:E([`${i}-popover-arrow-wrapper`,n])},[A(`div`,{class:E([`${i}-popover-arrow`,e]),style:B(t)},null,6)],6)}var ta=k({name:`PopoverBody`,inheritAttrs:!1,props:$i,setup(e,{slots:t,attrs:n}){let{namespaceRef:r,mergedClsPrefixRef:i,inlineThemeDisabled:a,mergedRtlRef:o}=we(e),c=J(`Popover`,`-popover`,Xi,gt,e,i),l=Je(`Popover`,o,i),u=L(null),d=O(`NPopover`),f=L(null),p=L(e.show),m=L(!1);Yt(()=>{let{show:t}=e;t&&!xi()&&!e.internalDeactivateImmediately&&(m.value=!0)});let h=D(()=>{let{trigger:t,onClickoutside:n}=e,r=[],{positionManuallyRef:{value:i}}=d;return i||(t===`click`&&!n&&r.push([le,ee,void 0,{capture:!0}]),t===`hover`&&r.push([ji,C])),n&&r.push([le,ee,void 0,{capture:!0}]),(e.displayDirective===`show`||e.animated&&m.value)&&r.push([Tt,e.show]),r}),g=D(()=>{let{common:{cubicBezierEaseInOut:e,cubicBezierEaseIn:t,cubicBezierEaseOut:n},self:{space:r,spaceArrow:i,padding:a,fontSize:o,textColor:s,dividerColor:l,color:u,boxShadow:d,borderRadius:f,arrowHeight:p,arrowOffset:m,arrowOffsetVertical:h}}=c.value;return{"--n-box-shadow":d,"--n-bezier":e,"--n-bezier-ease-in":t,"--n-bezier-ease-out":n,"--n-font-size":o,"--n-text-color":s,"--n-color":u,"--n-divider-color":l,"--n-border-radius":f,"--n-arrow-height":p,"--n-arrow-offset":m,"--n-arrow-offset-vertical":h,"--n-padding":a,"--n-space":r,"--n-space-arrow":i}}),_=D(()=>{let t=e.width===`trigger`?void 0:s(e.width),n=[];t&&n.push({width:t});let{maxWidth:r,minWidth:i}=e;return r&&n.push({maxWidth:s(r)}),i&&n.push({maxWidth:s(i)}),a||n.push(g.value),n}),v=a?an(`popover`,void 0,g,e):void 0;d.setBodyInstance({syncPosition:y}),ue(()=>{d.setBodyInstance(null)}),ut(H(e,`show`),t=>{e.animated||(t?p.value=!0:p.value=!1)});function y(){u.value?.syncPosition()}function x(t){e.trigger===`hover`&&e.keepAliveOnHover&&e.show&&d.handleMouseEnter(t)}function S(t){e.trigger===`hover`&&e.keepAliveOnHover&&d.handleMouseLeave(t)}function C(t){e.trigger===`hover`&&!w().contains(Fe(t))&&d.handleMouseMoveOutside(t)}function ee(t){(e.trigger===`click`&&!w().contains(Fe(t))||e.onClickoutside)&&d.handleClickOutside(t)}function w(){return d.getTriggerElement()}Ye(Lt,f),Ye(vt,null),Ye(At,null);function T(){if(v?.onRender(),!(e.displayDirective===`show`||e.show||e.animated&&m.value))return null;let r,a=d.internalRenderBodyRef.value,{value:o}=i;if(a)r=a([`${o}-popover-shared`,l?.value&&`${o}-popover--rtl`,v?.themeClass.value,e.overlap&&`${o}-popover-shared--overlap`,e.showArrow&&`${o}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${o}-popover-shared--center-arrow`],f,_.value,x,S);else{let{value:i}=d.extraClassRef,{internalTrapFocus:a}=e,s=!Te(t.header)||!Te(t.footer),u=()=>{let n=s?(F(),X(M,{key:1},[b(()=>G(t.header,t=>t?(F(),X(`div`,{key:2,class:E([`${o}-popover__header`,e.headerClass]),style:B(e.headerStyle)},[b(()=>t)],6)):null)),b(()=>G(t.default,n=>n?(F(),X(`div`,{key:3,class:E([`${o}-popover__content`,e.contentClass]),style:B(e.contentStyle)},[b(()=>t.default?.())],6)):null)),b(()=>G(t.footer,t=>t?(F(),X(`div`,{key:4,class:E([`${o}-popover__footer`,e.footerClass]),style:B(e.footerStyle)},[b(()=>t)],6)):null))],64)):e.scrollable?t.default?.():(F(),X(`div`,{key:5,class:E([`${o}-popover__content`,e.contentClass]),style:B(e.contentStyle)},[b(()=>t.default?.())],6));return[e.scrollable?(F(),j(Ie,{key:6,themeOverrides:c.value.peerOverrides.Scrollbar,theme:c.value.peers.Scrollbar,contentClass:s?void 0:`${o}-popover__content ${e.contentClass??``}`,contentStyle:s?void 0:e.contentStyle},{default:()=>n},1032,[`themeOverrides`,`theme`,`contentClass`,`contentStyle`])):n,e.showArrow?ea({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:o}):null]};r=Ve(`div`,pe({class:[`${o}-popover`,`${o}-popover-shared`,l?.value&&`${o}-popover--rtl`,v?.themeClass.value,i.map(e=>`${o}-${e}`),{[`${o}-popover--scrollable`]:e.scrollable,[`${o}-popover--show-header-or-footer`]:s,[`${o}-popover--raw`]:e.raw,[`${o}-popover-shared--overlap`]:e.overlap,[`${o}-popover-shared--show-arrow`]:e.showArrow,[`${o}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:f,style:_.value,onKeydown:d.handleKeydown,onMouseenter:x,onMouseleave:S},n),a?(F(),j(Be,{key:7,active:e.show,autoFocus:!0},{default:u},1032,[`active`])):u())}return Ht(r,h.value)}return{displayed:m,namespace:r,isMounted:d.isMountedRef,zIndex:d.zIndexRef,followerRef:u,adjustedTo:yi(e),followerEnabled:p,renderContentNode:T}},render(){return F(),j(Ki,{ref:`followerRef`,zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width===`trigger`?`target`:void 0,teleportDisabled:this.adjustedTo===yi.tdkey},{_:1,default:xe(()=>this.animated?(F(),j(T,{key:8,name:`popover-transition`,appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{this.internalOnAfterLeave?.(),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode},1032,[`appear`,`onEnter`,`onAfterLeave`])):this.renderContentNode())},8,[`zIndex`,`show`,`enabled`,`to`,`x`,`y`,`flip`,`placement`,`containerClass`,`overlap`,`width`,`teleportDisabled`])}}),na={key:1,style:{position:`fixed`,top:0,right:0,bottom:0,left:0}},ra=Object.keys($i),ia={focus:[`onFocus`,`onBlur`],click:[`onClick`],hover:[`onMouseenter`,`onMouseleave`],manual:[],nested:[`onFocus`,`onBlur`,`onMouseenter`,`onMouseleave`,`onClick`]};function aa(e,t,n){ia[t].forEach(t=>{e.props=e.props?Object.assign({},e.props):{};let r=e.props[t],i=n[t];r?e.props[t]=(...e)=>{r(...e),i(...e)}:e.props[t]=i})}var oa={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:`hover`},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:`top`},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:`if`},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:yi.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},sa={...J.props,...oa,internalOnAfterLeave:Function,internalRenderBody:Function},ca=k({name:`Popover`,inheritAttrs:!1,props:sa,slots:Object,__popover__:!0,setup(e){let t=Kt(),n=L(null),r=D(()=>e.show),i=L(e.defaultShow),a=h(r,i),o=kt(()=>!e.disabled&&a.value),s=()=>{if(e.disabled)return!0;let{getDisabled:t}=e;return!!t?.()},c=()=>!s()&&a.value,l=_i(e,[`arrow`,`showArrow`]),u=D(()=>!e.overlap&&l.value),d=null,f=L(null),p=L(null),m=kt(()=>e.x!==void 0&&e.y!==void 0);function g(t){let{"onUpdate:show":n,onUpdateShow:r,onShow:a,onHide:o}=e;i.value=t,n&&U(n,t),r&&U(r,t),t&&a&&U(a,!0),t&&o&&U(o,!1)}function _(){d&&d.syncPosition()}function v(){let{value:e}=f;e&&(window.clearTimeout(e),f.value=null)}function y(){let{value:e}=p;e&&(window.clearTimeout(e),p.value=null)}function b(){let t=s();if(e.trigger===`focus`&&!t){if(c())return;g(!0)}}function x(){let t=s();if(e.trigger===`focus`&&!t){if(!c())return;g(!1)}}function S(){let t=s();if(e.trigger===`hover`&&!t){if(y(),f.value!==null||c())return;let t=()=>{g(!0),f.value=null},{delay:n}=e;n===0?t():f.value=window.setTimeout(t,n)}}function C(){let t=s();if(e.trigger===`hover`&&!t){if(v(),p.value!==null||!c())return;let t=()=>{g(!1),p.value=null},{duration:n}=e;n===0?t():p.value=window.setTimeout(t,n)}}function ee(){C()}function w(t){c()&&(e.trigger===`click`&&(v(),y(),g(!1)),e.onClickoutside?.(t))}function T(){e.trigger===`click`&&!s()&&(v(),y(),g(!c()))}function E(t){e.internalTrapFocus&&t.key===`Escape`&&(v(),y(),g(!1))}function te(e){i.value=e}function ne(){return n.value?.targetRef}function re(e){d=e}return Ye(`NPopover`,{getTriggerElement:ne,handleKeydown:E,handleMouseEnter:S,handleMouseLeave:C,handleClickOutside:w,handleMouseMoveOutside:ee,setBodyInstance:re,positionManuallyRef:m,isMountedRef:t,zIndexRef:H(e,`zIndex`),extraClassRef:H(e,`internalExtraClass`),internalRenderBodyRef:H(e,`internalRenderBody`)}),Yt(()=>{a.value&&s()&&g(!1)}),{binderInstRef:n,positionManually:m,mergedShowConsideringDisabledProp:o,uncontrolledShow:i,mergedShowArrow:u,getMergedShow:c,setShow:te,handleClick:T,handleMouseEnter:S,handleMouseLeave:C,handleFocus:b,handleBlur:x,syncPosition:_}},render(){let{positionManually:e,$slots:t}=this,n,r=!1;if(!e&&(n=St(t,`trigger`),n)){n=Ce(n),n=n.type===ve?Ve(`span`,[n]):n;let t={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(n.type?.__popover__)r=!0,n.props||(n.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),n.props.internalSyncTargetWithParent=!0,n.props.internalInheritedEventHandlers?n.props.internalInheritedEventHandlers=[t,...n.props.internalInheritedEventHandlers]:n.props.internalInheritedEventHandlers=[t];else{let{internalInheritedEventHandlers:r}=this,i=[t,...r];aa(n,r?`nested`:e?`manual`:this.trigger,{onBlur:e=>{i.forEach(t=>{t.onBlur(e)})},onFocus:e=>{i.forEach(t=>{t.onFocus(e)})},onClick:e=>{i.forEach(t=>{t.onClick(e)})},onMouseenter:e=>{i.forEach(t=>{t.onMouseenter(e)})},onMouseleave:e=>{i.forEach(t=>{t.onMouseleave(e)})}})}}return F(),j(Oi,{ref:`binderInstRef`,syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;let t=this.getMergedShow();return[this.internalTrapFocus&&t?Ht((F(),X(`div`,na)),[[Rt,{enabled:t,zIndex:this.zIndex}]]):null,e?null:Ve(ki,null,{default:()=>n}),Ve(ta,Ut(this.$props,ra,{...this.$attrs,showArrow:this.mergedShowArrow,show:t}),{default:()=>this.$slots.default?.(),header:()=>this.$slots.header?.(),footer:()=>this.$slots.footer?.()})]}},1032,[`syncTarget`,`syncTargetWithParent`])}}),la={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},ua=q(`tag`,`
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
`,[Y(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),z(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),z(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),z(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),z(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Y(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[z(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),z(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Y(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Y(`icon, avatar`,[Y(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Y(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Y(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[je(`disabled`,[I(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[je(`checked`,`color: var(--n-text-color-hover-checkable);`)]),I(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[je(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),Y(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[je(`disabled`,[I(`&:hover`,`background-color: var(--n-color-checked-hover);`),I(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),da=[`onClick`,`onMouseenter`,`onMouseleave`],fa={...J.props,...la,bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function},pa=ce(`n-tag`),ma=k({name:`Tag`,props:fa,slots:Object,setup(e){let t=L(null),{mergedBorderedRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:a,mergedComponentPropsRef:o}=we(e),s=D(()=>e.size||o?.value?.Tag?.size||`medium`),c=J(`Tag`,`-tag`,ua,Oe,e,r);Ye(pa,{roundRef:H(e,`round`)});function l(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function u(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&U(n,t)}}let d={setTextContent(e){let{value:n}=t;n&&(n.textContent=e)}},f=Je(`Tag`,a,r),p=D(()=>{let{type:t,color:{color:r,textColor:i}={}}=e,a=s.value,{common:{cubicBezierEaseInOut:o},self:{padding:l,closeMargin:u,borderRadius:d,opacityDisabled:f,textColorCheckable:p,textColorHoverCheckable:m,textColorPressedCheckable:h,textColorChecked:g,colorCheckable:_,colorHoverCheckable:v,colorPressedCheckable:y,colorChecked:b,colorCheckedHover:x,colorCheckedPressed:S,closeBorderRadius:w,fontWeightStrong:T,[C(`colorBordered`,t)]:E,[C(`closeSize`,a)]:te,[C(`closeIconSize`,a)]:ne,[C(`fontSize`,a)]:re,[C(`height`,a)]:D,[C(`color`,t)]:ie,[C(`textColor`,t)]:O,[C(`border`,t)]:ae,[C(`closeIconColor`,t)]:oe,[C(`closeIconColorHover`,t)]:k,[C(`closeIconColorPressed`,t)]:se,[C(`closeColorHover`,t)]:A,[C(`closeColorPressed`,t)]:ce}}=c.value,le=ee(u);return{"--n-font-weight-strong":T,"--n-avatar-size-override":`calc(${D} - 8px)`,"--n-bezier":o,"--n-border-radius":d,"--n-border":ae,"--n-close-icon-size":ne,"--n-close-color-pressed":ce,"--n-close-color-hover":A,"--n-close-border-radius":w,"--n-close-icon-color":oe,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":se,"--n-close-icon-color-disabled":oe,"--n-close-margin-top":le.top,"--n-close-margin-right":le.right,"--n-close-margin-bottom":le.bottom,"--n-close-margin-left":le.left,"--n-close-size":te,"--n-color":r||(n.value?E:ie),"--n-color-checkable":_,"--n-color-checked":b,"--n-color-checked-hover":x,"--n-color-checked-pressed":S,"--n-color-hover-checkable":v,"--n-color-pressed-checkable":y,"--n-font-size":re,"--n-height":D,"--n-opacity-disabled":f,"--n-padding":l,"--n-text-color":i||O,"--n-text-color-checkable":p,"--n-text-color-checked":g,"--n-text-color-hover-checkable":m,"--n-text-color-pressed-checkable":h}}),m=i?an(`tag`,D(()=>{let t=``,{type:r,color:{color:i,textColor:a}={}}=e;return t+=r[0],t+=s.value[0],i&&(t+=`a${Re(i)}`),a&&(t+=`b${Re(a)}`),n.value&&(t+=`c`),t}),p,e):void 0;return{...d,rtlEnabled:f,mergedClsPrefix:r,contentRef:t,mergedBordered:n,handleClick:l,handleCloseClick:u,cssVars:i?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender}},render(){let{mergedClsPrefix:e,rtlEnabled:t,closable:n,color:{borderColor:r}={},round:i,onRender:a,$slots:o}=this;a?.();let s=G(o.avatar,t=>t&&(F(),X(`div`,{class:E(`${e}-tag__avatar`)},[b(()=>t)],2))),c=G(o.icon,t=>t&&(F(),X(`div`,{class:E(`${e}-tag__icon`)},[b(()=>t)],2)));return F(),X(`div`,{class:E([`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:t,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:i,[`${e}-tag--avatar`]:s,[`${e}-tag--icon`]:c,[`${e}-tag--closable`]:n}]),style:B(this.cssVars),onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[b(()=>c||s),A(`span`,{class:E(`${e}-tag__content`),ref:`contentRef`},[b(()=>this.$slots.default?.())],2),!this.checkable&&n?(F(),j(on,{key:0,clsPrefix:e,class:E(`${e}-tag__close`),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0},null,8,[`clsPrefix`,`class`,`disabled`,`onClick`,`focusable`,`round`,`isButtonTag`])):b(()=>null),!this.checkable&&this.mergedBordered?(F(),X(`div`,{key:2,class:E(`${e}-tag__border`),style:B({borderColor:r})},null,6)):b(()=>null)],46,da)}}),ha=Ne&&`loading`in document.createElement(`img`);function ga(e={}){let{root:t=null}=e;return{hash:`${e.rootMargin||`0px 0px 0px 0px`}-${Array.isArray(e.threshold)?e.threshold.join(`,`):e.threshold??`0`}`,options:{...e,root:(typeof t==`string`?document.querySelector(t):t)||document.documentElement}}}var _a=new WeakMap,va=new WeakMap,ya=new WeakMap,ba=(e,t,n)=>{if(!e)return()=>{};let r=ga(t),{root:i}=r.options,a,o=_a.get(i);o?a=o:(a=new Map,_a.set(i,a));let s,c;a.has(r.hash)?(c=a.get(r.hash),c[1].has(e)||(s=c[0],c[1].add(e),s.observe(e))):(s=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let t=va.get(e.target),n=ya.get(e.target);t&&t(),n&&(n.value=!0)}})},r.options),s.observe(e),c=[s,new Set([e])],a.set(r.hash,c));let l=!1,u=()=>{l||(va.delete(e),ya.delete(e),l=!0,c[1].has(e)&&(c[0].unobserve(e),c[1].delete(e)),c[1].size<=0&&a.delete(r.hash),a.size||_a.delete(i))};return va.set(e,u),ya.set(e,n),u},xa=ce(`n-avatar-group`),Sa=q(`avatar`,`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[Qt(I(`&`,`--n-merged-color: var(--n-color-modal);`)),Pe(I(`&`,`--n-merged-color: var(--n-color-popover);`)),I(`img`,`
 width: 100%;
 height: 100%;
 `),z(`text`,`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),q(`icon`,`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),z(`text`,`line-height: 1.25`)]),Ca=[`src`],wa={...J.props,size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String},Ta=k({name:`Avatar`,props:wa,slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=we(e),r=L(!1),i=null,a=L(null),o=L(null),s=()=>{let{value:e}=a;if(e&&(i===null||i!==e.innerHTML)){i=e.innerHTML;let{value:t}=o;if(t){let{offsetWidth:n,offsetHeight:r}=t,{offsetWidth:i,offsetHeight:a}=e,o=.9,s=Math.min(n/i*o,r/a*o,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${s})`}}},c=O(xa,null),l=D(()=>{let{size:t}=e;if(t)return t;let{size:n}=c||{};return n||`medium`}),u=J(`Avatar`,`-avatar`,Sa,en,e,t),d=O(pa,null),f=D(()=>{if(c)return!0;let{round:t,circle:n}=e;return t!==void 0||n!==void 0?t||n:d?d.roundRef.value:!1}),p=D(()=>c?!0:e.bordered||!1),m=D(()=>{let t=l.value,n=f.value,r=p.value,{color:i}=e,{self:{borderRadius:a,fontSize:o,color:s,border:c,colorModal:d,colorPopover:m},common:{cubicBezierEaseInOut:h}}=u.value,g;return g=typeof t==`number`?`${t}px`:u.value.self[C(`height`,t)],{"--n-font-size":o,"--n-border":r?c:`none`,"--n-border-radius":n?`50%`:a,"--n-color":i||s,"--n-color-modal":i||d,"--n-color-popover":i||m,"--n-bezier":h,"--n-merged-size":`var(--n-avatar-size-override, ${g})`}}),h=n?an(`avatar`,D(()=>{let t=l.value,n=f.value,r=p.value,{color:i}=e,a=``;return t&&(a+=typeof t==`number`?`a${t}`:t[0]),n&&(a+=`b`),r&&(a+=`c`),i&&(a+=Re(i)),a}),m,e):void 0,g=L(!e.lazy);Ke(()=>{if(e.lazy&&e.intersectionObserverOptions){let t,n=Yt(()=>{t?.(),t=void 0,e.lazy&&(t=ba(o.value,e.intersectionObserverOptions,g))});ue(()=>{n(),t?.()})}}),ut(()=>e.src||e.imgProps?.src,()=>{r.value=!1});let _=L(!e.lazy);return{textRef:a,selfRef:o,mergedRoundRef:f,mergedClsPrefix:t,fitTextTransform:s,cssVars:n?void 0:m,themeClass:h?.themeClass,onRender:h?.onRender,hasLoadError:r,shouldStartLoading:g,loaded:_,mergedOnError:t=>{if(!g.value)return;r.value=!0;let{onError:n,imgProps:{onError:i}={}}=e;n?.(t),i?.(t)},mergedOnLoad:t=>{let{onLoad:n,imgProps:{onLoad:r}={}}=e;n?.(t),r?.(t),_.value=!0}}},render(){let{$slots:e,src:t,mergedClsPrefix:n,lazy:r,onRender:i,loaded:a,hasLoadError:o,imgProps:s={}}=this;i?.();let c,l=!a&&!o&&(this.renderPlaceholder?this.renderPlaceholder():this.$slots.placeholder?.());return c=this.hasLoadError?this.renderFallback?this.renderFallback():g(e.fallback,()=>[(F(),X(`img`,{src:this.fallbackSrc,style:B({objectFit:this.objectFit})},null,12,Ca))]):G(e.default,e=>{if(e)return F(),j(ie,{key:1,onResize:this.fitTextTransform},{default:()=>(F(),X(`span`,{ref:`textRef`,class:E(`${n}-avatar__text`)},[b(()=>e)],2))},1032,[`onResize`]);if(t||s.src){let e=this.src||s.src;return Ve(`img`,{...s,loading:ha&&!this.intersectionObserverOptions&&r?`lazy`:`eager`,src:r&&this.intersectionObserverOptions?this.shouldStartLoading?e:void 0:e,"data-image-src":e,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[s.style||``,{objectFit:this.objectFit},l?{height:`0`,width:`0`,visibility:`hidden`,position:`absolute`}:``]})}}),F(),X(`span`,{ref:`selfRef`,class:E([`${n}-avatar`,this.themeClass]),style:B(this.cssVars)},[b(()=>c),b(()=>r&&l)],6)}}),Ea=k({name:`ChevronLeft`,render(){return(()=>{let e=re(`dfe229c2639b2082`);return e[0]||=A(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[A(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`})],-1)})()}}),Da=k({name:`ChevronRight`,render(){return(()=>{let e=re(`6ab04425f4fcb756`);return e[0]||=A(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[A(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`})],-1)})()}}),Oa=q(`collapse`,`width: 100%;`,[q(`collapse-item`,`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[Y(`disabled`,[z(`header`,`cursor: not-allowed;`,[z(`header-main`,`
 color: var(--n-title-text-color-disabled);
 `),q(`collapse-item-arrow`,`
 color: var(--n-arrow-color-disabled);
 `)])]),q(`collapse-item`,`margin-left: 32px;`),I(`&:first-child`,`margin-top: 0;`),I(`&:first-child >`,[z(`header`,`padding-top: 0;`)]),Y(`left-arrow-placement`,[z(`header`,[q(`collapse-item-arrow`,`margin-right: 4px;`)])]),Y(`right-arrow-placement`,[z(`header`,[q(`collapse-item-arrow`,`margin-left: 4px;`)])]),z(`content-wrapper`,[z(`content-inner`,`padding-top: 16px;`),Ct({duration:`0.15s`})]),Y(`active`,[z(`header`,[Y(`active`,[q(`collapse-item-arrow`,`transform: rotate(90deg);`)])])]),I(`&:not(:first-child)`,`border-top: 1px solid var(--n-divider-color);`),je(`disabled`,[Y(`trigger-area-main`,[z(`header`,[z(`header-main`,`cursor: pointer;`),q(`collapse-item-arrow`,`cursor: default;`)])]),Y(`trigger-area-arrow`,[z(`header`,[q(`collapse-item-arrow`,`cursor: pointer;`)])]),Y(`trigger-area-extra`,[z(`header`,[z(`header-extra`,`cursor: pointer;`)])])]),z(`header`,`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[z(`header-main`,`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),z(`header-extra`,`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),q(`collapse-item-arrow`,`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),ka={...J.props,defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:`left`},accordion:Boolean,displayDirective:{type:String,default:`if`},triggerAreas:{type:Array,default:()=>[`main`,`extra`,`arrow`]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}},Aa=ce(`n-collapse`),ja=k({name:`Collapse`,props:ka,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=we(e),a=L(e.defaultExpandedNames),o=D(()=>e.expandedNames),s=h(o,a),c=J(`Collapse`,`-collapse`,Oa,Ze,e,n);function l(t){let{"onUpdate:expandedNames":n,onUpdateExpandedNames:r,onExpandedNamesChange:i}=e;r&&U(r,t),n&&U(n,t),i&&U(i,t),a.value=t}function u(t){let{onItemHeaderClick:n}=e;n&&U(n,t)}function d(t,n,r){let{accordion:i}=e,{value:a}=s;if(i)t?(l([n]),u({name:n,expanded:!0,event:r})):(l([]),u({name:n,expanded:!1,event:r}));else if(!Array.isArray(a))l([n]),u({name:n,expanded:!0,event:r});else{let e=a.slice(),t=e.findIndex(e=>n===e);~t?(e.splice(t,1),l(e),u({name:n,expanded:!1,event:r})):(e.push(n),l(e),u({name:n,expanded:!0,event:r}))}}Ye(Aa,{props:e,mergedClsPrefixRef:n,expandedNamesRef:s,slots:t,toggleItem:d});let f=Je(`Collapse`,i,n),p=D(()=>{let{common:{cubicBezierEaseInOut:e},self:{titleFontWeight:t,dividerColor:n,titlePadding:r,titleTextColor:i,titleTextColorDisabled:a,textColor:o,arrowColor:s,fontSize:l,titleFontSize:u,arrowColorDisabled:d,itemMargin:f}}=c.value;return{"--n-font-size":l,"--n-bezier":e,"--n-text-color":o,"--n-divider-color":n,"--n-title-padding":r,"--n-title-font-size":u,"--n-title-text-color":i,"--n-title-text-color-disabled":a,"--n-title-font-weight":t,"--n-arrow-color":s,"--n-arrow-color-disabled":d,"--n-item-margin":f}}),m=r?an(`collapse`,void 0,p,e):void 0;return{rtlEnabled:f,mergedTheme:c,mergedClsPrefix:n,cssVars:r?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender}},render(){return this.onRender?.(),F(),X(`div`,{class:E([`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass]),style:B(this.cssVars)},[b(()=>this.$slots.default?.())],6)}}),Ma=k({name:`CollapseItemContent`,props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:Zt(H(e,`show`))}},render(){return F(),j(_e,null,{_:1,default:xe(()=>{let{show:e,displayDirective:t,onceTrue:n,clsPrefix:r}=this,i=t===`show`&&n,a=(F(),X(`div`,{class:E(`${r}-collapse-item__content-wrapper`)},[A(`div`,{class:E(`${r}-collapse-item__content-inner`)},[b(()=>this.$slots.default?.())],2)],2));return i?Ht(a,[[Tt,e]]):e?a:null})})}}),Na=[`onClick`],Pa=[`onClick`],Fa=k({name:`CollapseItem`,props:{title:String,name:[String,Number],disabled:Boolean,displayDirective:String},setup(e){let{mergedRtlRef:t}=we(e),n=tn(),r=kt(()=>e.name??n),i=O(Aa);i||ke(`collapse-item`,"`n-collapse-item` must be placed inside `n-collapse`.");let{expandedNamesRef:a,props:o,mergedClsPrefixRef:s,slots:c}=i,l=D(()=>{let{value:e}=a;if(Array.isArray(e)){let{value:t}=r;return!~e.findIndex(e=>e===t)}if(e){let{value:t}=r;return t!==e}return!0});return{rtlEnabled:Je(`Collapse`,t,s),collapseSlots:c,randomName:n,mergedClsPrefix:s,collapsed:l,triggerAreas:H(o,`triggerAreas`),mergedDisplayDirective:D(()=>{let{displayDirective:t}=e;return t||o.displayDirective}),arrowPlacement:D(()=>o.arrowPlacement),handleClick(t){let n=`main`;ci(t,`arrow`)&&(n=`arrow`),ci(t,`extra`)&&(n=`extra`),o.triggerAreas.includes(n)&&i&&!e.disabled&&i.toggleItem(l.value,r.value,t)}}},render(){let{collapseSlots:e,$slots:t,arrowPlacement:n,collapsed:r,mergedDisplayDirective:i,mergedClsPrefix:a,disabled:o,triggerAreas:s}=this,c=dt(t.header,{collapsed:r},()=>[this.title]),l=t[`header-extra`]||e[`header-extra`],u=t.arrow||e.arrow;return F(),X(`div`,{class:E([`${a}-collapse-item`,`${a}-collapse-item--${n}-arrow-placement`,o&&`${a}-collapse-item--disabled`,!r&&`${a}-collapse-item--active`,s.map(e=>`${a}-collapse-item--trigger-area-${e}`)])},[A(`div`,{class:E([`${a}-collapse-item__header`,!r&&`${a}-collapse-item__header--active`])},[A(`div`,{class:E(`${a}-collapse-item__header-main`),onClick:this.handleClick},[b(()=>n===`right`&&c),(F(),X(`div`,{class:E(`${a}-collapse-item-arrow`),key:+!this.rtlEnabled,"data-arrow":!0},[b(()=>dt(u,{collapsed:r},()=>[(F(),j(Qe,{clsPrefix:a},{default:()=>this.rtlEnabled?(F(),j(Ea,{key:1})):(F(),j(Da,{key:2}))},1032,[`clsPrefix`]))]))],2)),b(()=>n===`left`&&c)],10,Pa),b(()=>Nt(l,{collapsed:r},e=>(F(),X(`div`,{class:E(`${a}-collapse-item__header-extra`),onClick:this.handleClick,"data-extra":!0},[b(()=>e)],10,Na))))],2),(F(),j(Ma,{clsPrefix:a,displayDirective:i,show:!r},Et(t),1032,[`clsPrefix`,`displayDirective`,`show`]))],2)}}),Ia=q(`radio`,`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[Y(`checked`,[z(`dot`,`
 background-color: var(--n-color-active);
 `)]),z(`dot-wrapper`,`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),q(`radio-input`,`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),z(`dot`,`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[I(`&::before`,`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),Y(`checked`,{boxShadow:`var(--n-box-shadow-active)`},[I(`&::before`,`
 opacity: 1;
 transform: scale(1);
 `)])]),z(`label`,`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),je(`disabled`,`
 cursor: pointer;
 `,[I(`&:hover`,[z(`dot`,{boxShadow:`var(--n-box-shadow-hover)`})]),Y(`focus`,[I(`&:not(:active)`,[z(`dot`,{boxShadow:`var(--n-box-shadow-focus)`})])])]),Y(`disabled`,`
 cursor: not-allowed;
 `,[z(`dot`,{boxShadow:`var(--n-box-shadow-disabled)`,backgroundColor:`var(--n-color-disabled)`},[I(`&::before`,{backgroundColor:`var(--n-dot-color-disabled)`}),Y(`checked`,`
 opacity: 1;
 `)]),z(`label`,{color:`var(--n-text-color-disabled)`}),q(`radio-input`,`
 cursor: not-allowed;
 `)])]),La={name:String,value:{type:[String,Number,Boolean],default:`on`},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},Ra=ce(`n-radio-group`);function za(e){let t=O(Ra,null),{mergedClsPrefixRef:n,mergedComponentPropsRef:r}=we(e),i=y(e,{mergedSize(n){let{size:i}=e;if(i!==void 0)return i;if(t){let{mergedSizeRef:{value:e}}=t;if(e!==void 0)return e}return n?n.mergedSize.value:r?.value?.Radio?.size||`medium`},mergedDisabled(n){return!!(e.disabled||t?.disabledRef.value||n?.disabled.value)}}),{mergedSizeRef:a,mergedDisabledRef:o}=i,s=L(null),c=L(null),l=L(e.defaultChecked),u=H(e,`checked`),d=h(u,l),f=kt(()=>t?t.valueRef.value===e.value:d.value),p=kt(()=>{let{name:n}=e;if(n!==void 0)return n;if(t)return t.nameRef.value}),m=L(!1);function g(){if(t){let{doUpdateValue:n}=t,{value:r}=e;U(n,r)}else{let{onUpdateChecked:t,"onUpdate:checked":n}=e,{nTriggerFormInput:r,nTriggerFormChange:a}=i;t&&U(t,!0),n&&U(n,!0),r(),a(),l.value=!0}}function _(){o.value||f.value||g()}function v(){_(),s.value&&(s.value.checked=f.value)}function b(){m.value=!1}function x(){m.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:n,inputRef:s,labelRef:c,mergedName:p,mergedDisabled:o,renderSafeChecked:f,focus:m,mergedSize:a,handleRadioInputChange:v,handleRadioInputBlur:b,handleRadioInputFocus:x}}var Ba=[`value`,`name`,`checked`,`disabled`,`onChange`,`onFocus`,`onBlur`],Va={...J.props,...La},Ha=k({name:`Radio`,props:Va,setup(e){let t=za(e),n=J(`Radio`,`-radio`,Ia,_t,e,t.mergedClsPrefix),r=D(()=>{let{mergedSize:{value:e}}=t,{common:{cubicBezierEaseInOut:r},self:{boxShadow:i,boxShadowActive:a,boxShadowDisabled:o,boxShadowFocus:s,boxShadowHover:c,color:l,colorDisabled:u,colorActive:d,textColor:f,textColorDisabled:p,dotColorActive:m,dotColorDisabled:h,labelPadding:g,labelLineHeight:_,labelFontWeight:v,[C(`fontSize`,e)]:y,[C(`radioSize`,e)]:b}}=n.value;return{"--n-bezier":r,"--n-label-line-height":_,"--n-label-font-weight":v,"--n-box-shadow":i,"--n-box-shadow-active":a,"--n-box-shadow-disabled":o,"--n-box-shadow-focus":s,"--n-box-shadow-hover":c,"--n-color":l,"--n-color-active":d,"--n-color-disabled":u,"--n-dot-color-active":m,"--n-dot-color-disabled":h,"--n-font-size":y,"--n-radio-size":b,"--n-text-color":f,"--n-text-color-disabled":p,"--n-label-padding":g}}),{inlineThemeDisabled:i,mergedClsPrefixRef:a,mergedRtlRef:o}=we(e),s=Je(`Radio`,o,a),c=i?an(`radio`,D(()=>t.mergedSize.value[0]),r,e):void 0;return Object.assign(t,{rtlEnabled:s,cssVars:i?void 0:r,themeClass:c?.themeClass,onRender:c?.onRender})},render(){let{$slots:e,mergedClsPrefix:t,onRender:n,label:r}=this;return n?.(),(()=>{let n=re(`f8c6901d8cd45c02`);return F(),X(`label`,{class:E([`${t}-radio`,this.themeClass,this.rtlEnabled&&`${t}-radio--rtl`,this.mergedDisabled&&`${t}-radio--disabled`,this.renderSafeChecked&&`${t}-radio--checked`,this.focus&&`${t}-radio--focus`]),style:B(this.cssVars)},[A(`div`,{class:E(`${t}-radio__dot-wrapper`)},[n[0]||=b(`\xA0`,-1),A(`div`,{class:E([`${t}-radio__dot`,this.renderSafeChecked&&`${t}-radio__dot--checked`])},null,2),A(`input`,{ref:`inputRef`,type:`radio`,class:E(`${t}-radio-input`),value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur},null,42,Ba)],2),b(()=>G(e.default,e=>!e&&!r?null:(F(),X(`div`,{ref:`labelRef`,class:E(`${t}-radio__label`)},[b(()=>e||r)],2))))],6)})()}}),Ua=[`value`,`name`,`checked`,`disabled`,`onChange`,`onFocus`,`onBlur`],Wa=k({name:`RadioButton`,props:La,setup:za,render(){let{mergedClsPrefix:e}=this;return F(),X(`label`,{class:E([`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]])},[A(`input`,{ref:`inputRef`,type:`radio`,class:E(`${e}-radio-input`),value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur},null,42,Ua),A(`div`,{class:E(`${e}-radio-button__state-border`)},null,2),b(()=>G(this.$slots.default,t=>!t&&!this.label?null:(F(),X(`div`,{ref:`labelRef`,class:E(`${e}-radio__label`)},[b(()=>t||this.label)],2))))],2)}});function Ga(e,t=`default`,n=[]){let r=e.$slots[t];return r===void 0?n:r()}var Ka=q(`radio-group`,`
 display: inline-block;
 font-size: var(--n-font-size);
`,[z(`splitor`,`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[Y(`checked`,{backgroundColor:`var(--n-button-border-color-active)`}),Y(`disabled`,{opacity:`var(--n-opacity-disabled)`})]),Y(`button-group`,`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[q(`radio-button`,{height:`var(--n-height)`,lineHeight:`var(--n-height)`}),z(`splitor`,{height:`var(--n-height)`})]),q(`radio-button`,`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[q(`radio-input`,`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),z(`state-border`,`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),I(`&:first-child`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[z(`state-border`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),I(`&:last-child`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[z(`state-border`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),je(`disabled`,`
 cursor: pointer;
 `,[I(`&:hover`,[z(`state-border`,`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),je(`checked`,{color:`var(--n-button-text-color-hover)`})]),Y(`focus`,[I(`&:not(:active)`,[z(`state-border`,{boxShadow:`var(--n-button-box-shadow-focus)`})])])]),Y(`checked`,`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),Y(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]),qa=[`onFocusin`,`onFocusout`];function Ja(e,t,n){let r=[],i=!1;for(let a=0;a<e.length;++a){let o=e[a],s=o.type?.name;s===`RadioButton`&&(i=!0);let c=o.props;if(s!==`RadioButton`){r.push(o);continue}if(a===0)r.push(o);else{let e=r[r.length-1].props,i=t===e.value,a=e.disabled,s=t===c.value,l=c.disabled,u=(i?2:0)+ +!a,d=(s?2:0)+ +!l,f={[`${n}-radio-group__splitor--disabled`]:a,[`${n}-radio-group__splitor--checked`]:i},p={[`${n}-radio-group__splitor--disabled`]:l,[`${n}-radio-group__splitor--checked`]:s},m=u<d?p:f;r.push((F(),X(`div`,{key:1,class:E([`${n}-radio-group__splitor`,m])},null,2)),o)}}return{children:r,isButtonGroup:i}}var Ya={...J.props,name:String,options:Array,labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]},Xa=k({name:`RadioGroup`,props:Ya,setup(e){let t=L(null),{mergedSizeRef:n,mergedDisabledRef:r,nTriggerFormChange:i,nTriggerFormInput:a,nTriggerFormBlur:o,nTriggerFormFocus:s}=y(e),{mergedClsPrefixRef:c,inlineThemeDisabled:l,mergedRtlRef:u}=we(e),d=J(`Radio`,`-radio-group`,Ka,_t,e,c),f=L(e.defaultValue),p=H(e,`value`),m=h(p,f);function g(t){let{onUpdateValue:n,"onUpdate:value":r}=e;n&&U(n,t),r&&U(r,t),f.value=t,i(),a()}function _(e){let{value:n}=t;n&&(n.contains(e.relatedTarget)||s())}function v(e){let{value:n}=t;n&&(n.contains(e.relatedTarget)||o())}Ye(Ra,{mergedClsPrefixRef:c,nameRef:H(e,`name`),valueRef:m,disabledRef:r,mergedSizeRef:n,doUpdateValue:g});let b=Je(`Radio`,u,c),x=D(()=>{let{value:e}=n,{common:{cubicBezierEaseInOut:t},self:{buttonBorderColor:r,buttonBorderColorActive:i,buttonBorderRadius:a,buttonBoxShadow:o,buttonBoxShadowFocus:s,buttonBoxShadowHover:c,buttonColor:l,buttonColorActive:u,buttonTextColor:f,buttonTextColorActive:p,buttonTextColorHover:m,opacityDisabled:h,[C(`buttonHeight`,e)]:g,[C(`fontSize`,e)]:_}}=d.value;return{"--n-font-size":_,"--n-bezier":t,"--n-button-border-color":r,"--n-button-border-color-active":i,"--n-button-border-radius":a,"--n-button-box-shadow":o,"--n-button-box-shadow-focus":s,"--n-button-box-shadow-hover":c,"--n-button-color":l,"--n-button-color-active":u,"--n-button-text-color":f,"--n-button-text-color-hover":m,"--n-button-text-color-active":p,"--n-height":g,"--n-opacity-disabled":h}}),S=l?an(`radio-group`,D(()=>n.value[0]),x,e):void 0;return{selfElRef:t,rtlEnabled:b,mergedClsPrefix:c,mergedValue:m,handleFocusout:v,handleFocusin:_,cssVars:l?void 0:x,themeClass:S?.themeClass,onRender:S?.onRender}},render(){let{mergedValue:e,mergedClsPrefix:t,handleFocusin:n,handleFocusout:r}=this,{options:i,labelField:a,valueField:o}=this.$props,{children:s,isButtonGroup:c}=Ja(i?i.map(e=>{let t=e[o];return F(),j(Ha,{key:typeof t==`boolean`?`__n_${t}`:t,value:t,disabled:e.disabled,label:e[a]},null,8,[`value`,`disabled`,`label`])}):et(Ga(this)),e,t);return this.onRender?.(),F(),X(`div`,{onFocusin:n,onFocusout:r,ref:`selfElRef`,class:E([`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,c&&`${t}-radio-group--button-group`]),style:B(this.cssVars)},[b(()=>s)],46,qa)}});function Za(){let e=O(It,null);return e===null&&ke(`use-dialog`,`No outer <n-dialog-provider /> founded.`),e}var Qa=k({name:`Add`,render(){return(()=>{let e=re(`b30130fbba5c5b23`);return e[0]||=A(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[A(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)})()}}),$a=ce(`n-popconfirm`),eo={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},to=he(eo),no=k({name:`NPopconfirmPanel`,props:eo,setup(e){let{localeRef:t}=n(`Popconfirm`),{inlineThemeDisabled:r}=we(),{mergedClsPrefixRef:i,mergedThemeRef:a,props:o}=O($a),s=D(()=>{let{common:{cubicBezierEaseInOut:e},self:{fontSize:t,iconSize:n,iconColor:r}}=a.value;return{"--n-bezier":e,"--n-font-size":t,"--n-icon-size":n,"--n-icon-color":r}}),c=r?an(`popconfirm-panel`,void 0,s,o):void 0;return{...n(`Popconfirm`),mergedClsPrefix:i,cssVars:r?void 0:s,localizedPositiveText:D(()=>e.positiveText||t.value.positiveText),localizedNegativeText:D(()=>e.negativeText||t.value.negativeText),positiveButtonProps:H(o,`positiveButtonProps`),negativeButtonProps:H(o,`negativeButtonProps`),handlePositiveClick(t){e.onPositiveClick(t)},handleNegativeClick(t){e.onNegativeClick(t)},themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{mergedClsPrefix:e,showIcon:t,$slots:n}=this,r=g(n.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&(F(),j(R,pe({key:1,size:`small`,onClick:this.handleNegativeClick},this.negativeButtonProps),{_:1,default:xe(()=>this.localizedNegativeText)},16,[`onClick`])),this.positiveText!==null&&(F(),j(R,pe({key:2,size:`small`,type:`primary`,onClick:this.handlePositiveClick},this.positiveButtonProps),{_:1,default:xe(()=>this.localizedPositiveText)},16,[`onClick`]))]);return this.onRender?.(),F(),X(`div`,{class:E([`${e}-popconfirm__panel`,this.themeClass]),style:B(this.cssVars)},[b(()=>G(n.default,r=>t||r?(F(),X(`div`,{key:3,class:E(`${e}-popconfirm__body`)},[t?(F(),X(`div`,{key:0,class:E(`${e}-popconfirm__icon`)},[b(()=>g(n.icon,()=>[(F(),j(Qe,{clsPrefix:e},{default:()=>(F(),j(Se))},1032,[`clsPrefix`]))]))],2)):b(()=>null),b(()=>r)],2)):null)),r?(F(),X(`div`,{key:0,class:E([`${e}-popconfirm__action`])},[b(()=>r)],2)):b(()=>null)],6)}}),ro=q(`popconfirm`,[z(`body`,`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[z(`icon`,`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),z(`action`,`
 display: flex;
 justify-content: flex-end;
 `,[I(`&:not(:first-child)`,`margin-top: 8px`),q(`button`,[I(`&:not(:last-child)`,`margin-right: 8px;`)])])]),io={...J.props,...oa,positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:`click`},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function},ao=k({name:`Popconfirm`,props:io,slots:Object,__popover__:!0,setup(e){let{mergedClsPrefixRef:t}=we(),n=J(`Popconfirm`,`-popconfirm`,ro,Dt,e,t),r=L(null);function i(t){if(!r.value?.getMergedShow())return;let{onPositiveClick:n,"onUpdate:show":i}=e;Promise.resolve(!n||n(t)).then(e=>{e!==!1&&(r.value?.setShow(!1),i&&U(i,!1))})}function a(t){if(!r.value?.getMergedShow())return;let{onNegativeClick:n,"onUpdate:show":i}=e;Promise.resolve(!n||n(t)).then(e=>{e!==!1&&(r.value?.setShow(!1),i&&U(i,!1))})}return Ye($a,{mergedThemeRef:n,mergedClsPrefixRef:t,props:e}),{setShow(e){r.value?.setShow(e)},syncPosition(){r.value?.syncPosition()},mergedTheme:n,popoverInstRef:r,handlePositiveClick:i,handleNegativeClick:a}},render(){let{$slots:e,$props:t,mergedTheme:n}=this;return F(),j(ca,pe(ht(t,to),{theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalExtraClass:[`popconfirm`],ref:`popoverInstRef`}),{trigger:e.trigger,default:()=>{let n=Ut(t,to);return F(),j(no,{...n,onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick},Et(e),1040)}},1040,[`theme`,`themeOverrides`])}}),oo={...J.props,trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],yPlacement:{type:String,default:`right`},xPlacement:{type:String,default:`bottom`}},so=k({name:`Scrollbar`,props:oo,setup(){let e=L(null);return{scrollTo:(...t)=>{e.value?.scrollTo(t[0],t[1])},scrollBy:(...t)=>{e.value?.scrollBy(t[0],t[1])},scrollbarInstRef:e}},render(){return F(),j(oe,pe({ref:`scrollbarInstRef`},this.$props),Et(this.$slots),1040)}}),co=q(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[z(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),z(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),z(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),q(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[w({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),z(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),z(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),z(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),I(`&:focus`,[z(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),Y(`round`,[z(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[z(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),je(`disabled`,[je(`icon`,[Y(`rubber-band`,[Y(`pressed`,[z(`rail`,[z(`button`,`max-width: var(--n-button-width-pressed);`)])]),z(`rail`,[I(`&:active`,[z(`button`,`max-width: var(--n-button-width-pressed);`)])]),Y(`active`,[Y(`pressed`,[z(`rail`,[z(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),z(`rail`,[I(`&:active`,[z(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),Y(`active`,[z(`rail`,[z(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),z(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[z(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[w()]),z(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),Y(`active`,[z(`rail`,`background-color: var(--n-rail-color-active);`)]),Y(`loading`,[z(`rail`,`
 cursor: wait;
 `)]),Y(`disabled`,[z(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),lo=[`aria-checked`,`tabindex`,`onClick`,`onFocus`,`onBlur`,`onKeyup`,`onKeydown`],uo={...J.props,size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]},fo,po=k({name:`Switch`,props:uo,slots:Object,setup(e){fo===void 0&&(fo=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:r}=we(e),i=J(`Switch`,`-switch`,co,Wt,e,t),a=y(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:r?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:o,mergedDisabledRef:s}=a,c=L(e.defaultValue),l=H(e,`value`),u=h(l,c),d=D(()=>u.value===e.checkedValue),f=L(!1),p=L(!1),m=D(()=>{let{railStyle:t}=e;if(t)return t({focused:p.value,checked:d.value})});function g(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:o,nTriggerFormChange:s}=a;n&&U(n,t),i&&U(i,t),r&&U(r,t),c.value=t,o(),s()}function _(){let{nTriggerFormFocus:e}=a;e()}function v(){let{nTriggerFormBlur:e}=a;e()}function b(){e.loading||s.value||(u.value===e.checkedValue?g(e.uncheckedValue):g(e.checkedValue))}function x(){p.value=!0,_()}function S(){p.value=!1,v(),f.value=!1}function ee(t){e.loading||s.value||t.key===` `&&(u.value===e.checkedValue?g(e.uncheckedValue):g(e.checkedValue),f.value=!1)}function w(t){e.loading||s.value||t.key===` `&&(t.preventDefault(),f.value=!0)}let T=D(()=>{let{value:e}=o,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:a,buttonColor:s,boxShadowFocus:c,loadingColor:l,textColor:u,iconColor:d,[C(`buttonHeight`,e)]:f,[C(`buttonWidth`,e)]:p,[C(`buttonWidthPressed`,e)]:m,[C(`railHeight`,e)]:h,[C(`railWidth`,e)]:g,[C(`railBorderRadius`,e)]:_,[C(`buttonBorderRadius`,e)]:v},common:{cubicBezierEaseInOut:y}}=i.value,b,x,S;return fo?(b=`calc((${h} - ${f}) / 2)`,x=`max(${h}, ${f})`,S=`max(${g}, calc(${g} + ${f} - ${h}))`):(b=$t((Me(h)-Me(f))/2),x=$t(Math.max(Me(h),Me(f))),S=Me(h)>Me(f)?g:$t(Me(g)+Me(f)-Me(h))),{"--n-bezier":y,"--n-button-border-radius":v,"--n-button-box-shadow":a,"--n-button-color":s,"--n-button-width":p,"--n-button-width-pressed":m,"--n-button-height":f,"--n-height":x,"--n-offset":b,"--n-opacity-disabled":t,"--n-rail-border-radius":_,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":h,"--n-rail-width":g,"--n-width":S,"--n-box-shadow-focus":c,"--n-loading-color":l,"--n-text-color":u,"--n-icon-color":d}}),E=n?an(`switch`,D(()=>o.value[0]),T,e):void 0;return{handleClick:b,handleBlur:S,handleFocus:x,handleKeyup:ee,handleKeydown:w,mergedRailStyle:m,pressed:f,mergedClsPrefix:t,mergedValue:u,checked:d,mergedDisabled:s,cssVars:n?void 0:T,themeClass:E?.themeClass,onRender:E?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:r,onRender:i,$slots:a}=this;i?.();let{checked:o,unchecked:s,icon:c,"checked-icon":l,"unchecked-icon":u}=a,d=!(Te(c)&&Te(l)&&Te(u));return F(),X(`div`,{role:`switch`,"aria-checked":n,class:E([`${e}-switch`,this.themeClass,d&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`]),tabindex:this.mergedDisabled?void 0:0,style:B(this.cssVars),onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},[A(`div`,{class:E(`${e}-switch__rail`),"aria-hidden":`true`,style:B(r)},[b(()=>G(o,t=>G(s,n=>t||n?(F(),X(`div`,{key:4,"aria-hidden":!0,class:E(`${e}-switch__children-placeholder`)},[A(`div`,{class:E(`${e}-switch__rail-placeholder`)},[A(`div`,{class:E(`${e}-switch__button-placeholder`)},null,2),b(()=>t)],2),A(`div`,{class:E(`${e}-switch__rail-placeholder`)},[A(`div`,{class:E(`${e}-switch__button-placeholder`)},null,2),b(()=>n)],2)],2)):null))),A(`div`,{class:E(`${e}-switch__button`)},[b(()=>G(c,t=>G(l,n=>G(u,r=>(F(),j(ye,null,{default:()=>this.loading?(F(),j(te,pe({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps),null,16,[`clsPrefix`])):this.checked&&(n||t)?(F(),X(`div`,{class:E(`${e}-switch__button-icon`),key:n?`checked-icon`:`icon`},[b(()=>n||t)],2)):!this.checked&&(r||t)?(F(),X(`div`,{class:E(`${e}-switch__button-icon`),key:r?`unchecked-icon`:`icon`},[b(()=>r||t)],2)):null},1024)))))),b(()=>G(o,t=>t&&(F(),X(`div`,{key:`checked`,class:E(`${e}-switch__checked`)},[b(()=>t)],2)))),b(()=>G(s,t=>t&&(F(),X(`div`,{key:`unchecked`,class:E(`${e}-switch__unchecked`)},[b(()=>t)],2))))],2)],6)],46,lo)}}),mo=ce(`n-tabs`),ho={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},go=k({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:ho,slots:Object,setup(e){let t=O(mo,null);return t||ke(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return F(),X(`div`,{class:E([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:B(this.style)},[b(()=>this.$slots.default?.())],6)}}),_o=[`data-name`,`data-disabled`],vo={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...ht(ho,[`displayDirective`])},yo=k({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:vo,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=O(mo);return{trigger:d,mergedClosable:D(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:a,value:o,mergedClosable:s,trigger:c,$slots:{default:l}}=this,u=i??a;return F(),X(`div`,{class:E(`${t}-tabs-tab-wrapper`)},[this.internalLeftPadded?(F(),X(`div`,{key:0,class:E(`${t}-tabs-tab-pad`)},null,2)):b(()=>null),(F(),X(`div`,pe({key:n,"data-name":n,"data-disabled":r?!0:void 0},pe({class:[`${t}-tabs-tab`,o===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:c===`click`?this.activateTab:void 0,onMouseenter:c===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[A(`span`,{class:E(`${t}-tabs-tab__label`)},[e?(F(),X(M,{key:0},[A(`div`,{class:E(`${t}-tabs-tab__height-placeholder`)},`\xA0`,2),(F(),j(Qe,{clsPrefix:t},{default:()=>(F(),j(Qa))},1032,[`clsPrefix`]))],64)):(F(),X(M,{key:1},[l?(F(),X(M,{key:0},[b(()=>l())],64)):(F(),X(M,{key:1},[typeof u==`object`?(F(),X(M,{key:0},[b(()=>u)],64)):(F(),X(M,{key:1},[b(()=>Ae(u??n))],64))],64))],64))],2),s&&this.type===`card`?(F(),j(on,{key:0,clsPrefix:t,class:E(`${t}-tabs-tab__close`),onClick:this.handleClose,disabled:r},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):b(()=>null)],16,_o))],2)}}),bo=q(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[I(`&.transition-disabled`,[q(`tabs-tab`,`
 transition: none !important;
 `),q(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),q(`tabs-tab-pad`,`
 transition: none !important;
 `)]),Y(`segment-type`,[q(`tabs-rail`,[I(`&.transition-disabled`,[q(`tabs-capsule`,`
 transition: none;
 `)])])]),Y(`top`,[q(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),Y(`left`,[q(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),Y(`left, right`,`
 flex-direction: row;
 `,[q(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),q(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),Y(`right`,`
 flex-direction: row-reverse;
 `,[q(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),q(`tabs-bar`,`
 left: 0;
 `)]),Y(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[q(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),q(`tabs-bar`,`
 top: 0;
 `)]),q(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[q(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),q(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[q(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Y(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),I(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),Y(`flex`,[q(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[q(`tabs-wrapper`,`
 width: 100%;
 `,[q(`tabs-tab`,`
 margin-right: 0;
 `)])])]),q(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[z(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),z(`prefix`,`padding-right: 16px;`),z(`suffix`,`padding-left: 16px;`)]),Y(`top, bottom`,[I(`>`,[q(`tabs-nav`,[q(`tabs-nav-scroll-wrapper`,[I(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),I(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),Y(`shadow-start`,[I(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),Y(`shadow-end`,[I(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),Y(`left, right`,[q(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),I(`>`,[q(`tabs-nav`,[q(`tabs-nav-scroll-wrapper`,[I(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),I(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),Y(`shadow-start`,[I(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),Y(`shadow-end`,[I(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),q(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[q(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[I(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),I(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `),I(`&.transition-disabled`,[I(`&::before, &::after`,`
 transition: none;
 `)])]),q(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),q(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),q(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),q(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Y(`disabled`,{cursor:`not-allowed`}),z(`close`,`
 margin-inline-start: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),z(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),q(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[I(`&.transition-disabled`,`
 transition: none;
 `),Y(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),q(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),q(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[I(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),I(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),I(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),I(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),I(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),q(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),Y(`line-type, bar-type`,[q(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[I(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),Y(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),Y(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),q(`tabs-nav`,[z(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),q(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),Y(`line-type`,[Y(`top`,[z(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),q(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),q(`tabs-bar`,`
 bottom: -1px;
 `)]),Y(`left`,[z(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),q(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),q(`tabs-bar`,`
 right: -1px;
 `)]),Y(`right`,[z(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),q(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),q(`tabs-bar`,`
 left: -1px;
 `)]),Y(`bottom`,[z(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),q(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),q(`tabs-bar`,`
 top: -1px;
 `)]),z(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),q(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),q(`tabs-bar`,`
 border-radius: 0;
 `)]),Y(`card-type`,[z(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),q(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),q(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),q(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[Y(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[z(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),je(`disabled`,[I(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),Y(`closable`,`padding-inline-end: 8px;`),Y(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),Y(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),Y(`left, right`,`
 flex-direction: column; 
 `,[z(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),q(`tabs-wrapper`,`
 flex-direction: column;
 `),q(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[q(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),Y(`top`,[Y(`card-type`,[q(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),q(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[Y(`active`,`
 border-bottom: 1px solid #0000;
 `)]),q(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),q(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),Y(`left`,[Y(`card-type`,[q(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),q(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[Y(`active`,`
 border-right: 1px solid #0000;
 `)]),q(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),q(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),Y(`right`,[Y(`card-type`,[q(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),q(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[Y(`active`,`
 border-left: 1px solid #0000;
 `)]),q(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),q(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),Y(`bottom`,[Y(`card-type`,[q(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),q(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[Y(`active`,`
 border-top: 1px solid #0000;
 `)]),q(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),q(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),q(`tabs-scroll-button`,[Y(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),Y(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),Y(`up`,`
 padding-bottom: 10px;
 `),Y(`down`,`
 padding-top: 10px;
 `)])]),xo=k({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:e,disabled:t,type:n,vertical:r,rtl:i,theme:a,themeOverrides:o,handleClick:s}=this,c=n===`next`,l=r?c:i?!c:c;return F(),j(R,{text:!0,disabled:t,size:`small`,theme:a,themeOverrides:o,onClick:s,class:E([`${e}-tabs-scroll-button`,!r&&n===`prev`&&`${e}-tabs-scroll-button--start`,!r&&n===`next`&&`${e}-tabs-scroll-button--end`,r&&n===`prev`&&`${e}-tabs-scroll-button--up`,r&&n===`next`&&`${e}-tabs-scroll-button--down`])},{icon:()=>(F(),j(Qe,{clsPrefix:e,style:B(r?{transform:`rotate(90deg)`}:void 0)},{default:()=>l?(F(),j(Da,{key:1})):(F(),j(Ea,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),So=ri,Co={...J.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},wo=k({name:`Tabs`,props:Co,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i,mergedRtlRef:a}=we(e),o=Je(`Tabs`,a,n),s=D(()=>{let{placement:t}=e;return t===`start`?o?.value?`right`:`left`:t===`end`?o?.value?`left`:`right`:t}),c=J(`Tabs`,`-tabs`,bo,nt,e,n),l=L(null),u=L(null),d=L(null),f=L(null),p=L(null),m=L(null),g=L(null),_=L(!0),v=L(!0),y=_i(e,[`labelSize`,`size`]),b=D(()=>y.value?y.value:i?.value?.Tabs?.size||`medium`),x=_i(e,[`activeName`,`value`]),S=L(x.value??e.defaultValue??(t.default?et(t.default())[0]?.props?.name:null)),w=h(x,S),T={id:0},E=D(()=>{if(e.justifyContent&&e.type!==`card`)return{display:`flex`,justifyContent:e.justifyContent}});ut(w,()=>{T.id=0,O(),zt(()=>{oe()})});function te(){let{value:e}=w;return e===null?null:l.value?.querySelector(`[data-name="${e}"]`)}function ne(t){if(e.type===`card`)return;let{value:r}=d;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o}=e,c=s.value;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(c)){if(ie([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(ie([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function re(){if(e.type===`card`)return;let{value:t}=d;t&&(t.style.opacity=`0`)}function ie(e){let{value:t}=d;if(t)for(let n of e)t.style[n]=``}function O(){if(e.type===`card`)return;let t=te();t?ne(t):re()}function ae(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function oe(){let t=[`top`,`bottom`].includes(s.value),n=te();if(n){if(t){let r=m.value?.$el;if(!r)return;ae(r,n,t,e.centerActiveTab)}else{let{value:r}=g;if(!r)return;ae(r,n,t,e.centerActiveTab)}}}let k=L(null),se=0,A=null;function ce(e){let t=k.value;if(t){se=e.getBoundingClientRect().height;let n=`${se}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};A?(r(),A(),A=null):A=r}}function le(e){let t=k.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(se,n)}px`};A?(A(),A=null,r()):A=r}}function ue(){let t=k.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let de={value:[]},fe=L(`next`);function pe(e){let t=w.value,n=`next`;for(let r of de.value){if(r===t)break;if(r===e){n=`prev`;break}}fe.value=n,me(e)}function me(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&U(n,t),r&&U(r,t),i&&U(i,t),S.value=t}function j(t){let{onClose:n}=e;n&&U(n,t)}function he(e){if([`top`,`bottom`].includes(s.value)){let{value:t}=m;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!o?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=g;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let M=!0;function ge(){let{value:e}=d;if(!e)return;M&&=!1;let t=`transition-disabled`;e.classList.add(t),O(),e.classList.remove(t)}let _e=L(null);function ve({transitionDisabled:e}){let t=l.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=te();n&&_e.value&&(_e.value.style.width=`${n.offsetWidth}px`,_e.value.style.height=`${n.offsetHeight}px`,_e.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&_e.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}ut([w],()=>{e.type===`segment`&&zt(()=>{ve({transitionDisabled:!1})})}),Ke(()=>{e.type===`segment`&&ve({transitionDisabled:!0})});let ye=0;function be(t){if(t.contentRect.width===0&&t.contentRect.height===0||ye===t.contentRect.width)return;ye=t.contentRect.width;let{type:n}=e;(n===`line`||n===`bar`)&&(M||e.justifyContent?.startsWith(`space`))&&ge(),n!==`segment`&&ke(N())}let xe=So(be,64);function Se(){let{type:t}=e;t===`line`||t===`bar`?ge():t===`segment`&&ve({transitionDisabled:!0})}ut([()=>e.justifyContent,()=>e.size],()=>{zt(()=>{(e.type===`line`||e.type===`bar`)&&ge()})}),ut([s,()=>o?.value],()=>{zt(()=>{Se(),ke(N(),{instantly:!0})})}),ut(()=>e.type,()=>{zt(()=>{let e=u.value;e&&(e.classList.add(`transition-disabled`),Se(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let Ce=L(!1);function Te(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=s.value;if(!Ce.value)o===`top`||o===`bottom`?i<n&&(Ce.value=!0):a<r&&(Ce.value=!0);else{let{value:e}=p;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(Ce.value=!1):a-r>e.$el.offsetHeight&&(Ce.value=!1)}ke(m.value?.$el||null)}let Ee=So(Te,64);function De(){let{onAdd:t}=e;t&&t()}let Oe=L(!1);function N(){let e=s.value;return(e===`top`||e===`bottom`?m.value?.$el:g.value)||null}function ke(e,t={instantly:!1}){if(!e)return;let n=t.instantly?f.value:null;n&&n.classList.add(`transition-disabled`);let r=s.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);_.value=i<=1,v.value=i+r>=n-1,Oe.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;_.value=t<=1,v.value=t+r>=n-1,Oe.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let Ae=So(e=>{ke(e.target)},64);Ye(mo,{triggerRef:H(e,`trigger`),tabStyleRef:H(e,`tabStyle`),tabClassRef:H(e,`tabClass`),addTabStyleRef:H(e,`addTabStyle`),addTabClassRef:H(e,`addTabClass`),paneClassRef:H(e,`paneClass`),paneStyleRef:H(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:H(e,`type`),closableRef:H(e,`closable`),valueRef:w,tabChangeIdRef:T,onBeforeLeaveRef:H(e,`onBeforeLeave`),activateTab:pe,handleClose:j,handleAdd:De}),gi(()=>{O(),oe()}),Yt(()=>{let{value:e}=f;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;_.value?e.classList.remove(r):e.classList.add(r),v.value?e.classList.remove(i):e.classList.add(i)});let je={syncBarPosition:()=>{O()},scrollToCurrentTab:()=>{oe()}},Me=()=>{ve({transitionDisabled:!0})},Ne=D(()=>{let{value:t}=b,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:x,closeColorPressed:S,closeBorderRadius:w,[C(`panePadding`,t)]:T,[C(`tabPadding`,r)]:E,[C(`tabPaddingVertical`,r)]:te,[C(`tabGap`,r)]:ne,[C(`tabGap`,`${r}Vertical`)]:re,[C(`tabTextColor`,n)]:D,[C(`tabTextColorActive`,n)]:ie,[C(`tabTextColorHover`,n)]:O,[C(`tabTextColorDisabled`,n)]:ae,[C(`tabFontSize`,t)]:oe},common:{cubicBezierEaseInOut:k}}=c.value;return{"--n-bezier":k,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":oe,"--n-tab-text-color":D,"--n-tab-text-color-active":ie,"--n-tab-text-color-disabled":ae,"--n-tab-text-color-hover":O,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":w,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":E,"--n-tab-padding-vertical":te,"--n-tab-gap":ne,"--n-tab-gap-vertical":re,"--n-pane-padding-left":ee(T,`left`),"--n-pane-padding-right":ee(T,`right`),"--n-pane-padding-top":ee(T,`top`),"--n-pane-padding-bottom":ee(T,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),Pe=r?an(`tabs`,D(()=>`${b.value[0]}${e.type[0]}`),Ne,e):void 0;return{mergedClsPrefix:n,mergedValue:w,renderedNames:new Set,segmentCapsuleElRef:_e,tabsPaneWrapperRef:k,tabsElRef:l,selfElRef:u,barElRef:d,addTabInstRef:p,xScrollInstRef:m,scrollWrapperElRef:f,addTabFixed:Ce,tabWrapperStyle:E,handleNavResize:xe,mergedSize:b,handleScroll:Ae,handleTabsResize:Ee,cssVars:r?void 0:Ne,themeClass:Pe?.themeClass,animationDirection:fe,renderNameListRef:de,yScrollElRef:g,handleSegmentResize:Me,onAnimationBeforeLeave:ce,onAnimationEnter:le,onAnimationAfterEnter:ue,onRender:Pe?.onRender,startReachedRef:_,endReachedRef:v,isOverflow:Oe,handleButtonClick:he,mergedTheme:c,rtlEnabled:o,mergedPlacement:s,...je}},render(){let{mergedClsPrefix:e,type:t,mergedPlacement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,startReachedRef:u,endReachedRef:d,isOverflow:f,showScrollButton:p,handleButtonClick:m,mergedTheme:h,rtlEnabled:g,$slots:{default:_,prefix:v,suffix:y}}=this;s?.();let x=_?et(_()).filter(e=>e.type.__TAB_PANE__===!0):[],S=_?et(_()).filter(e=>e.type.__TAB__===!0):[],C=!S.length,ee=t===`card`,w=t===`segment`,T=!ee&&!w&&this.justifyContent;o.value=[];let te=()=>{let t=(F(),X(`div`,{style:B(this.tabWrapperStyle),class:E(`${e}-tabs-wrapper`)},[T?b(()=>null):(F(),X(`div`,{key:1,class:E(`${e}-tabs-scroll-padding`),style:B(n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),C?(F(),X(M,{key:2},[b(()=>x.map((e,t)=>(o.value.push(e.props.name),Oo((F(),j(yo,pe(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!T||T===`center`||T===`start`||T===`end`)}),Et(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(F(),X(M,{key:3},[b(()=>S.map((e,t)=>(o.value.push(e.props.name),Oo(t!==0&&!T?Do(e):e))))],64)),!r&&i&&ee?(F(),X(M,{key:4},[b(()=>Eo(i,(C?x.length:S.length)!==0))],64)):b(()=>null),T?b(()=>null):(F(),X(`div`,{key:7,class:E(`${e}-tabs-scroll-padding`),style:B({width:`${this.tabsPadding}px`})},null,6)),ee?b(()=>null):(F(),X(`div`,{key:9,ref:`barElRef`,class:E(`${e}-tabs-bar`)},null,2))],6));return F(),X(`div`,{ref:`tabsElRef`,class:E(`${e}-tabs-nav-scroll-content`)},[ee&&i?(F(),j(ie,{key:0,onResize:this.handleTabsResize},{default:()=>t},1032,[`onResize`])):(F(),X(M,{key:1},[b(()=>t)],64)),ee?(F(),X(`div`,{key:2,class:E(`${e}-tabs-pad`)},null,2)):b(()=>null)],2)},ne=w?`top`:n;return F(),X(`div`,{ref:`selfElRef`,class:E([`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${ne}`,g&&`${e}-tabs--rtl`]),style:B(this.cssVars)},[A(`div`,{class:E([`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${ne}`,`${e}-tabs-nav`])},[b(()=>G(v,t=>t&&(F(),X(`div`,{class:E(`${e}-tabs-nav__prefix`)},[b(()=>t)],2)))),w?(F(),j(ie,{key:0,onResize:this.handleSegmentResize},{default:()=>(F(),X(`div`,{class:E(`${e}-tabs-rail`),ref:`tabsElRef`},[A(`div`,{class:E(`${e}-tabs-capsule`),ref:`segmentCapsuleElRef`},[A(`div`,{class:E(`${e}-tabs-wrapper`)},[A(`div`,{class:E(`${e}-tabs-tab`)},null,2)],2)],2),C?(F(),X(M,{key:0},[b(()=>x.map((e,t)=>(o.value.push(e.props.name),F(),j(yo,pe(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),Et(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(F(),X(M,{key:1},[b(()=>S.map((e,t)=>(o.value.push(e.props.name),t===0?e:Do(e))))],64))],2))},1032,[`onResize`])):(F(),X(M,{key:1},[b(()=>p&&f&&(F(),j(xo,{mergedClsPrefix:e,type:`prev`,vertical:ne===`left`||ne===`right`,disabled:u,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(F(),j(ie,{onResize:this.handleNavResize},{default:()=>(F(),X(`div`,{class:E(`${e}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(ne)?(F(),j(Ji,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:te},1032,[`onScroll`])):(F(),X(`div`,{key:1,class:E(`${e}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[b(()=>te())],42,[`onScroll`]))],2))},1032,[`onResize`])),b(()=>p&&f&&(F(),j(xo,{mergedClsPrefix:e,type:`next`,vertical:ne===`left`||ne===`right`,disabled:d,rtl:!!g,theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,onClick:m},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),r&&i&&ee?(F(),X(M,{key:2},[b(()=>Eo(i,!0))],64)):b(()=>null),b(()=>G(y,t=>t&&(F(),X(`div`,{class:E(`${e}-tabs-nav__suffix`)},[b(()=>t)],2))))],2),b(()=>C&&(this.animated&&(ne===`top`||ne===`bottom`)?(F(),X(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:B(l),class:E([`${e}-tabs-pane-wrapper`,c])},[b(()=>To(x,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):To(x,this.mergedValue,this.renderedNames)))],6)}});function To(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?Ht(e,[[Tt,c]]):e)}}),o?(F(),j(be,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):s}function Eo(e,t){return F(),j(yo,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled},null,8,[`internalLeftPadded`,`disabled`])}function Do(e){let t=Ce(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Oo(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var ko=f(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),Ao=f(`arrow-up`,[[`path`,{d:`m5 12 7-7 7 7`,key:`hav0vg`}],[`path`,{d:`M12 19V5`,key:`x0mq9r`}]]),jo=f(`chevrons-left`,[[`path`,{d:`m11 17-5-5 5-5`,key:`13zhaf`}],[`path`,{d:`m18 17-5-5 5-5`,key:`h8a8et`}]]),Mo=f(`chevrons-right`,[[`path`,{d:`m6 17 5-5-5-5`,key:`xnjwq`}],[`path`,{d:`m13 17 5-5-5-5`,key:`17xmmf`}]]),No=f(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),Po=f(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Fo=f(`folder-closed`,[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}],[`path`,{d:`M2 10h20`,key:`1ir3d8`}]]),Io=f(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),Lo=f(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),Ro=f(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),zo=f(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),Bo=f(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),Vo=f(`package`,[[`path`,{d:`M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z`,key:`1a0edw`}],[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`,key:`ousv84`}],[`path`,{d:`m7.5 4.27 9 5.15`,key:`1c824w`}]]),Ho=f(`panel-right-close`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}],[`path`,{d:`m8 9 3 3-3 3`,key:`12hl5m`}]]),Uo=f(`panel-right-open`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}],[`path`,{d:`m10 15-3-3 3-3`,key:`1pgupc`}]]),Wo=f(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Go=f(`puzzle`,[[`path`,{d:`M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z`,key:`w46dr5`}]]),Ko=f(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),qo=f(`rotate-cw`,[[`path`,{d:`M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8`,key:`1p45f6`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}]]),Jo=f(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Yo=f(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),Xo=f(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),Zo=f(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Qo=f(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),$o=f(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),es=f(`wrench`,[[`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`,key:`1ngwbx`}]]);async function ts(e){return await e.json()}var ns={get:e=>fetch(e).then(ts),post:(e,t)=>fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t??{})}).then(ts),del:e=>fetch(e,{method:`DELETE`}).then(ts),patch:(e,t)=>fetch(e,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)}).then(ts),files:async(e,t=``)=>await(await fetch(`/api/conversations/${e}/files?path=${encodeURIComponent(t)}`)).json(),rawFileUrl:(e,t)=>`/api/conversations/${e}/files/raw?path=${encodeURIComponent(t)}`},Q=xt({convs:[],current:null,messages:[],convTitle:`未选择会话`,status:`○ 未连接`,skills:[],live:null,mode:`auto`,pendingTool:null}),$=null;function rs(){if($){try{$.close()}catch{}$=null}}function is(e){rs();let t=location.protocol===`https:`?`wss`:`ws`;$=new WebSocket(`${t}://${location.host}/ws/${e}`),$.onopen=()=>{Q.status=`● 已连接`,$.send(JSON.stringify({type:`set_mode`,mode:Q.mode}))},$.onclose=()=>{Q.status=`○ 已断开`},$.onmessage=e=>as(JSON.parse(e.data))}function as(e){switch(e.type){case`message_start`:Q.live={role:`assistant`,content:``,tool_calls:[]};break;case`token`:Q.live&&(Q.live.content+=e.content);break;case`tool_start`:Q.live&&Q.live.tool_calls.push({name:e.name,input:e.input,output:`执行中…`});break;case`tool_end`:if(Q.live&&Q.live.tool_calls.length){let t=Q.live.tool_calls[Q.live.tool_calls.length-1];t.output=e.output}break;case`message_end`:Q.live&&=(Q.messages.push({role:`assistant`,content:Q.live.content,tool_calls:(Q.live.tool_calls??[]).map(e=>({...e}))}),null),os();break;case`error`:Q.live?Q.live.content+=`
[错误] `+e.content:Q.messages.push({role:`assistant`,content:`[错误] `+e.content});break;case`tool_confirm`:Q.pendingTool=e.tool_calls;break;case`mode_set`:Q.mode=e.mode;break;case`warn`:qt.warning(e.content)}}async function os(){Q.convs=await ns.get(`/api/conversations`)}async function ss(e){rs(),Q.current=e,Q.live=null,Q.pendingTool=null;let t=await ns.get(`/api/conversations/${e}`);Q.convTitle=t.meta?t.meta.title:`未选择会话`,Q.messages=t.messages??[],is(e),await os()}async function cs(){rs(),Q.current=null,Q.live=null,Q.pendingTool=null,Q.messages=[],Q.convTitle=`新对话`,await os()}function ls(e){Q.mode=e,$&&$.readyState===1&&$.send(JSON.stringify({type:`set_mode`,mode:e}))}function us(e){$&&$.readyState===1&&$.send(JSON.stringify({type:`tool_decision`,action:e.action,calls:e.calls??[]})),Q.pendingTool=null}async function ds(e){await ns.del(`/api/conversations/${e}`),Q.current===e&&await cs(),await os()}async function fs(e){let t=(e||``).trim();if(t){if(!Q.current){let e=await ns.post(`/api/conversations`,{title:t.slice(0,30)});Q.current=e.id,await os(),is(e.id)}Q.messages.push({role:`user`,content:t}),$&&$.readyState===1?$.send(JSON.stringify({type:`message`,content:t})):(await ns.post(`/api/conversations/${Q.current}/messages`,{content:t}),Q.messages=(await ns.get(`/api/conversations/${Q.current}`)).messages??[],os())}}async function ps(){Q.skills=await ns.get(`/api/skills`)}async function ms(e){await ns.post(`/api/skills/${e.id}/${e.enabled?`disable`:`enable`}`),await ps()}async function hs(e){await ns.del(`/api/skills/${e}`),await ps()}async function gs(){await ns.post(`/api/skills/reload`),await ps()}async function _s(e){let t=await ns.post(`/api/skills/custom`,e);return t.ok&&await ps(),t}var vs={class:`conv-list`},ys=[`onClick`],bs={class:`conv-title`},xs=k({__name:`ConversationList`,props:{convs:{},current:{}},emits:[`select`,`delete`],setup(e){return(t,n)=>(F(),X(`div`,vs,[(F(!0),X(M,null,Ee(e.convs,r=>(F(),X(`div`,{key:r.id,class:it([`conv`,{active:r.id===e.current}]),onClick:e=>t.$emit(`select`,r.id)},[P(W(zo),{size:15,class:`conv-ico`}),A(`span`,bs,K(r.title),1),P(W(ao),{onPositiveClick:e=>t.$emit(`delete`,r.id)},{trigger:V(()=>[P(W(R),{class:`conv-del`,quaternary:``,circle:``,size:`tiny`,onClick:n[0]||=wt(()=>{},[`stop`])},{icon:V(()=>[P(W(Qo),{size:14})]),_:1})]),default:V(()=>[n[1]||=x(` 删除该会话？ `,-1)]),_:1},8,[`onPositiveClick`])],10,ys))),128)),e.convs.length?N(``,!0):(F(),j(W(fi),{key:0,class:`conv-empty`,size:`small`,description:`暂无会话`}))]))}}),Ss={class:`tool-head`},Cs={class:`tool-name`},ws={key:0,class:`tool-arg muted`},Ts={class:`tool-body`},Es=k({__name:`ToolCall`,props:{tc:{}},setup(e){let t=e,n=L([]);function r(e,t){return e=String(e||``),e.length>t?e.slice(0,t)+`…`:e}let i=D(()=>t.tc.output===`执行中…`),a=D(()=>t.tc.input?r(t.tc.input,90):``),o=D(()=>t.tc.name||`tool`);return(t,r)=>(F(),j(W(ja),{"expanded-names":n.value,"onUpdate:expandedNames":r[0]||=e=>n.value=e,class:`tool-collapse`,"arrow-placement":`left`},{default:V(()=>[P(W(Fa),{name:o.value+(e.tc.input||``),class:`tool-item`},{header:V(()=>[A(`span`,Ss,[P(W(es),{size:13,class:`tool-ico`}),A(`span`,Cs,K(o.value),1),a.value?(F(),X(`span`,ws,K(a.value),1)):N(``,!0),i.value?(F(),j(W(Io),{key:1,size:12,class:`spin`})):(F(),j(W(ma),{key:2,size:`small`,bordered:!1,type:`success`},{default:V(()=>[...r[1]||=[x(`完成`,-1)]]),_:1}))])]),default:V(()=>[A(`pre`,Ts,`输入: `+K(e.tc.input||``)+`

输出: `+K(e.tc.output||``),1)]),_:1},8,[`name`])]),_:1},8,[`expanded-names`]))}}),Ds={class:`bubble`},Os={class:`assistant-text`},ks={key:0,class:`cursor`},As=k({__name:`MessageBubble`,props:{msg:{},streaming:{type:Boolean}},setup(e){return(t,n)=>(F(),X(`div`,{class:it([`msg`,e.msg.role])},[P(W(Ta),{class:it([`avatar`,e.msg.role]),round:``,size:30,color:e.msg.role===`user`?`#2f6feb`:`#e8f0fe`},{default:V(()=>[(F(),j(_(e.msg.role===`user`?W($o):W(l)),{size:16,color:e.msg.role===`user`?`#fff`:`#2f6feb`},null,8,[`color`]))]),_:1},8,[`class`,`color`]),A(`div`,Ds,[e.msg.role===`user`?(F(),X(M,{key:0},[x(K(e.msg.content),1)],64)):(F(),X(M,{key:1},[A(`span`,Os,K(e.msg.content),1),e.streaming?(F(),X(`span`,ks)):N(``,!0),(F(!0),X(M,null,Ee(e.msg.tool_calls||[],(e,t)=>(F(),j(Es,{key:t,tc:e},null,8,[`tc`]))),128))],64))])],2))}}),js={class:`chat-view`},Ms={key:0,class:`hero`},Ns={class:`hero-logo`},Ps={class:`suggestions`},Fs={class:`composer`},Is={class:`composer-inner`},Ls={class:`composer-foot`},Rs={class:`muted tiny`},zs=k({__name:`ChatWindow`,emits:[`send`],setup(e,{emit:t}){let n=t,r=L(``),i=L(null),a=L(null),o=D(()=>!!Q.live),s=D(()=>!Q.messages.length&&!Q.live);function c(){let e=r.value;e.trim()&&(n(`send`,e),r.value=``)}function l(e){e.key===`Enter`&&!e.shiftKey&&!e.isComposing&&(e.preventDefault(),c())}function u(){let e=i.value;e&&(e.scrollTop=e.scrollHeight)}let d=[`帮我写一个快速排序的 Python 实现`,`读取当前工作目录的文件列表并总结`,`解释一下 MACD 指标的计算方法`,`用一句话介绍你能做什么`];function f(e){r.value=e,zt(()=>a.value?.focus())}return ut(()=>[Q.messages.length,Q.live?.content,Q.live?.tool_calls?.length],async()=>{await zt(),u()}),ut(()=>Q.current,()=>{r.value=``}),(e,t)=>(F(),X(`div`,js,[A(`section`,{class:`messages`,ref_key:`box`,ref:i},[s.value?(F(),X(`div`,Ms,[A(`div`,Ns,[P(W(Zo),{size:34})]),t[1]||=A(`h2`,null,`有什么可以帮你的？`,-1),t[2]||=A(`p`,{class:`muted`},`基于 LangGraph 的服务端智能体，支持工具调用、技能扩展与会话隔离工作目录。`,-1),A(`div`,Ps,[(F(),X(M,null,Ee(d,e=>P(W(R),{key:e,class:`suggestion`,quaternary:``,onClick:t=>f(e)},{default:V(()=>[x(K(e),1)]),_:2},1032,[`onClick`])),64))])])):(F(),X(M,{key:1},[(F(!0),X(M,null,Ee(W(Q).messages,(e,t)=>(F(),j(As,{key:`h`+t,msg:e},null,8,[`msg`]))),128)),W(Q).live?(F(),j(As,{key:0,msg:W(Q).live,streaming:``},null,8,[`msg`])):N(``,!0)],64))],512),A(`footer`,Fs,[A(`div`,Is,[P(W(p),{ref_key:`inputRef`,ref:a,value:r.value,"onUpdate:value":t[0]||=e=>r.value=e,type:`textarea`,autosize:{minRows:1,maxRows:8},placeholder:`给智能体发送消息…（Enter 发送，Shift+Enter 换行）`,bordered:!1,class:`composer-input`,onKeydown:l},null,8,[`value`]),P(W(R),{class:`send-btn`,type:`primary`,circle:``,disabled:!r.value.trim(),title:`发送`,onClick:c},{icon:V(()=>[P(W(Yo),{size:17})]),_:1},8,[`disabled`])]),A(`div`,Ls,[A(`span`,Rs,[(F(),j(_(o.value?W(Io):W(Zo)),{size:12})),x(` `+K(o.value?`智能体正在回复…`:`智能体可能会调用工具，请留意确认提示`),1)])])])]))}}),Bs={class:`skill-manager`},Vs={class:`sm-head`},Hs={class:`sm-title`},Us={class:`muted sm-count`},Ws={class:`sm-actions`},Gs={class:`sm-cats`},Ks={class:`sm-body`},qs={class:`group-title`},Js={class:`muted`},Ys={class:`sm-grid`},Xs={class:`card-head`},Zs={class:`card-name`},Qs={class:`card-desc`},$s={class:`card-tools`},ec={key:0,class:`muted tiny`},tc={class:`card-foot`},nc=k({__name:`SkillManager`,props:{skills:{}},emits:[`toggle`,`remove`,`reload`,`add`],setup(e){let t=e,n=[`系统`,`文件`,`代码`,`网络`,`数学`,`通用`,`其他`],r=L(``),i=L(`全部`),a=D(()=>{let e=r.value.trim().toLowerCase(),i=t=>!e||t.name.toLowerCase().includes(e)||(t.description||``).toLowerCase().includes(e)||(t.tools||[]).some(t=>t.toLowerCase().includes(e)),a=new Map;for(let e of t.skills){if(!i(e))continue;let t=e.category||`其他`;a.has(t)||a.set(t,[]),a.get(t).push(e)}let o=Array.from(a.entries()).map(([e,t])=>({category:e,list:t}));return o.sort((e,t)=>{let r=n.indexOf(e.category),i=n.indexOf(t.category);return(r===-1?99:r)-(i===-1?99:i)}),o}),o=D(()=>[`全部`,...a.value.map(e=>e.category)]),s=D(()=>i.value===`全部`?a.value:a.value.filter(e=>e.category===i.value)),c=D(()=>t.skills.filter(e=>e.enabled).length);return(t,n)=>(F(),X(`div`,Bs,[A(`div`,Vs,[A(`div`,Hs,[P(W(Go),{size:20}),n[3]||=A(`h2`,null,`技能管理`,-1),A(`span`,Us,K(c.value)+` / `+K(e.skills.length)+` 已启用`,1)]),A(`div`,Ws,[P(W(p),{value:r.value,"onUpdate:value":n[0]||=e=>r.value=e,class:`sm-search`,placeholder:`搜索技能 / 工具…`,clearable:``},{prefix:V(()=>[P(W(u),{component:W(Jo)},null,8,[`component`])]),_:1},8,[`value`]),P(W(R),{onClick:n[1]||=e=>t.$emit(`reload`)},{icon:V(()=>[P(W(Ko),{size:15})]),default:V(()=>[n[4]||=x(` 重载 `,-1)]),_:1}),P(W(R),{type:`primary`,onClick:n[2]||=e=>t.$emit(`add`)},{icon:V(()=>[P(W(Wo),{size:15})]),default:V(()=>[n[5]||=x(` 新建技能 `,-1)]),_:1})])]),A(`div`,Gs,[(F(!0),X(M,null,Ee(o.value,e=>(F(),j(W(ma),{key:e,class:`cat-chip`,type:i.value===e?`primary`:`default`,bordered:!1,checkable:``,checked:i.value===e,"onUpdate:checked":t=>i.value=e},{default:V(()=>[x(K(e),1)]),_:2},1032,[`type`,`checked`,`onUpdate:checked`]))),128))]),A(`div`,Ks,[s.value.length?N(``,!0):(F(),j(W(fi),{key:0,class:`sm-empty`,description:`没有匹配的技能`})),(F(!0),X(M,null,Ee(s.value,e=>(F(),X(`section`,{key:e.category,class:`sm-group`},[A(`h4`,qs,[x(K(e.category)+` `,1),A(`span`,Js,`· `+K(e.list.length),1)]),A(`div`,Ys,[(F(!0),X(M,null,Ee(e.list,e=>(F(),j(W(nn),{key:e.id,class:it([`skill-card`,{off:!e.enabled}]),size:`small`},{default:V(()=>[A(`div`,Xs,[A(`div`,Zs,[P(W(Vo),{size:15}),A(`b`,null,K(e.name),1),P(W(ma),{size:`small`,bordered:!1,type:e.builtin?`default`:`info`},{default:V(()=>[x(K(e.builtin?`内置`:`自定义`),1)]),_:2},1032,[`type`])]),P(W(po),{value:e.enabled,size:`small`,"onUpdate:value":n=>t.$emit(`toggle`,e)},null,8,[`value`,`onUpdate:value`])]),A(`p`,Qs,K(e.description||`（无描述）`),1),A(`div`,$s,[(F(!0),X(M,null,Ee(e.tools||[],e=>(F(),j(W(ma),{key:e,size:`small`,bordered:!1,class:`tool-chip`},{default:V(()=>[x(K(e),1)]),_:2},1024))),128)),!e.tools||!e.tools.length?(F(),X(`span`,ec,`无工具`)):N(``,!0)]),A(`div`,tc,[A(`span`,{class:it([`state`,e.enabled?`on`:`off`])},K(e.enabled?`已启用`:`已禁用`),3),e.builtin?N(``,!0):(F(),j(W(R),{key:0,quaternary:``,circle:``,size:`tiny`,title:`删除技能`,type:`error`,onClick:n=>t.$emit(`remove`,e.id)},{icon:V(()=>[P(W(Qo),{size:14})]),_:1},8,[`onClick`]))])]),_:2},1032,[`class`]))),128))])]))),128))])]))}}),rc={class:`modal-actions`},ic=k({__name:`SkillModal`,props:{open:{type:Boolean}},emits:[`close`,`submit`],setup(t,{emit:n}){let r=t,i=n,a=ot(),s=xt({name:``,description:``,code:``}),c=L(!1);ut(()=>r.open,e=>{e&&(s.name=``,s.description=``,s.code=``,c.value=!1)});function l(){if(!s.code.trim()){a.warning(`代码不能为空`);return}c.value=!0,i(`submit`,{...s})}return(n,r)=>(F(),j(W(ft),{show:t.open,"onUpdate:show":r[4]||=e=>i(`close`)},{default:V(()=>[P(W(nn),{class:`modal-card`,title:`新建自定义技能`,bordered:!1,size:`medium`,style:{width:`560px`,"max-width":`94vw`}},{footer:V(()=>[A(`div`,rc,[P(W(R),{onClick:r[3]||=e=>i(`close`)},{default:V(()=>[...r[5]||=[x(`取消`,-1)]]),_:1}),P(W(R),{type:`primary`,loading:c.value,onClick:l},{default:V(()=>[...r[6]||=[x(`创建`,-1)]]),_:1},8,[`loading`])])]),default:V(()=>[P(W(e),{"label-placement":`top`,"show-feedback":!1},{default:V(()=>[P(W(o),{label:`名称`},{default:V(()=>[P(W(p),{value:s.name,"onUpdate:value":r[0]||=e=>s.name=e,placeholder:`我的技能`},null,8,[`value`])]),_:1}),P(W(o),{label:`描述`},{default:V(()=>[P(W(p),{value:s.description,"onUpdate:value":r[1]||=e=>s.description=e,placeholder:`这个技能做什么`},null,8,[`value`])]),_:1}),P(W(o),{label:`代码（用 @tool 装饰函数，可定义 META 元信息）`},{default:V(()=>[P(W(p),{value:s.code,"onUpdate:value":r[2]||=e=>s.code=e,type:`textarea`,autosize:{minRows:10,maxRows:20},placeholder:`用 @tool 装饰定义一个工具函数`},null,8,[`value`])]),_:1})]),_:1})]),_:1})]),_:1},8,[`show`]))}}),ac={class:`file-panel`},oc={class:`file-toolbar`},sc={class:`file-path`},cc={key:0,class:`muted`},lc={key:2,class:`file-view`},uc={class:`file-view-head`},dc={class:`file-name`},fc={class:`muted`},pc={key:0,class:`file-hint muted`},mc={key:1,class:`file-hint muted`},hc={class:`file-content`},gc={class:`file-list`},_c=[`onClick`],vc={class:`fi-icon`},yc={class:`fi-name`},bc={class:`fi-meta muted`},xc={class:`fi-meta muted`},Sc=k({__name:`FilePanel`,emits:[`preview`],setup(e,{expose:n,emit:r}){let i=r,a=L(``),o=L([]),s=L(!1),c=L(``),l=L(null),u=D(()=>Q.current);n({selected:l});function d(e,t){return e?`${e}/${t}`:t}function f(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(1)} MB`}function p(e){let t=new Date(e*1e3),n=e=>String(e).padStart(2,`0`);return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())} ${n(t.getHours())}:${n(t.getMinutes())}`}async function m(e=``){if(!u.value){c.value=`请先选择会话`,o.value=[];return}s.value=!0,c.value=``,l.value=null;try{let t=await ns.files(u.value,e);if(!t.ok){c.value=t.error||`加载失败`,o.value=[];return}t.type===`dir`?(a.value=t.path,o.value=t.entries):l.value=t}catch(e){c.value=String(e)}finally{s.value=!1}}async function h(e){let t=d(a.value,e.name);e.type===`dir`?await m(t):(await g(t),i(`preview`))}async function g(e){if(u.value){s.value=!0,c.value=``;try{let t=await ns.files(u.value,e);if(!t.ok){c.value=t.error||`打开失败`;return}l.value=t}catch(e){c.value=String(e)}finally{s.value=!1}}}function v(){let e=a.value.split(`/`).filter(Boolean);e.pop(),m(e.join(`/`))}function y(){m(a.value)}function b(){l.value=null,m(a.value)}function S(e){return u.value?ns.rawFileUrl(u.value,e):`#`}return ut(u,()=>{a.value=``,l.value=null,m(``)},{immediate:!0}),(e,n)=>(F(),X(`div`,ac,[A(`div`,oc,[P(W(R),{quaternary:``,circle:``,size:`small`,title:`返回上级`,disabled:!a.value,onClick:v},{icon:V(()=>[P(W(Ao),{size:15})]),_:1},8,[`disabled`]),A(`span`,sc,[P(W(Fo),{size:14}),x(` `+K(a.value||`/`)+` `,1),s.value?(F(),X(`span`,cc,`…`)):N(``,!0)]),P(W(R),{quaternary:``,circle:``,size:`small`,title:`刷新`,onClick:y},{icon:V(()=>[P(W(qo),{size:15})]),_:1})]),u.value?c.value?(F(),j(W(t),{key:1,type:`error`,bordered:!1,class:`file-hint`},{default:V(()=>[x(K(c.value),1)]),_:1})):l.value?(F(),X(`div`,lc,[A(`div`,uc,[A(`span`,dc,[P(W(Po),{size:14}),x(` `+K(l.value.name),1)]),A(`span`,fc,K(f(l.value.size)),1),P(W(R),{quaternary:``,circle:``,size:`tiny`,tag:`a`,href:S(l.value.path),target:`_blank`,title:`下载`},{icon:V(()=>[P(W(No),{size:14})]),_:1},8,[`href`]),P(W(R),{quaternary:``,circle:``,size:`tiny`,title:`返回列表`,onClick:b},{icon:V(()=>[P(W(ko),{size:14})]),_:1})]),l.value.binary?(F(),X(`div`,pc,K(l.value.note||`二进制文件，无法直接预览，请下载。`),1)):l.value.truncated?(F(),X(`div`,mc,K(l.value.note||`文件过大，仅显示部分内容。`),1)):(F(),j(W(so),{key:2,class:`file-scroll`},{default:V(()=>[A(`pre`,hc,K(l.value.content),1)]),_:1}))])):(F(),j(W(so),{key:3,class:`file-list-scroll`},{default:V(()=>[A(`ul`,gc,[(F(!0),X(M,null,Ee(o.value,e=>(F(),X(`li`,{key:e.name,class:it([`file-item`,e.type]),onClick:t=>h(e)},[A(`span`,vc,[(F(),j(_(e.type===`dir`?W(Fo):e.is_text?W(Po):W(Vo)),{size:15}))]),A(`span`,yc,K(e.name),1),A(`span`,bc,K(e.type===`dir`?``:f(e.size)),1),A(`span`,xc,K(p(e.mtime)),1)],10,_c))),128))]),o.value.length?N(``,!0):(F(),j(W(fi),{key:0,class:`file-hint`,size:`small`,description:`空目录`}))]),_:1})):(F(),j(W(t),{key:0,type:`default`,bordered:!1,class:`file-hint`},{default:V(()=>[...n[0]||=[x(` 请先在左侧选择或新建一个会话，每个会话拥有独立隔离的工作目录。 `,-1)]]),_:1}))]))}}),Cc={key:1,class:`rail`},wc={class:`panel-tabs`},Tc={class:`tab-label`},Ec={class:`tab-label`},Dc={class:`rp-actions`},Oc={class:`preview-pane`},kc={class:`file-view-head`},Ac={class:`file-name`},jc={class:`muted`},Mc={key:0,class:`file-hint muted`},Nc={key:1,class:`file-hint muted`},Pc={class:`file-content`},Fc=k({__name:`RightPanel`,props:{panelState:{}},emits:[`expand`,`collapse`,`toggleIcons`,`resizeStart`],setup(e,{expose:t,emit:n}){let r=e,i=n,a=L(`files`),o=L(null),s=L(!1),c=L(!1),l=D(()=>o.value?.selected??null);function u(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(1)} MB`}function d(e){return Q.current?ns.rawFileUrl(Q.current,e):`#`}function f(){s.value=!0,a.value=`preview`,r.panelState!==`full`&&i(`expand`)}return ut(()=>r.panelState,e=>{e===`full`&&s.value&&(a.value=`preview`)}),t({openPreview:f}),(t,n)=>(F(),X(`aside`,{class:it([`right`,[`st-${e.panelState}`,{fullscreen:c.value}]])},[e.panelState===`full`?(F(),X(`div`,{key:0,class:`resize-handle`,onMousedown:n[0]||=wt(e=>i(`resizeStart`,e),[`prevent`])},null,32)):N(``,!0),e.panelState===`icons`?(F(),X(`div`,Cc,[P(W(R),{quaternary:``,circle:``,title:`展开文件面板`,onClick:n[1]||=e=>i(`expand`)},{icon:V(()=>[P(W(Fo),{size:18})]),_:1}),P(W(R),{quaternary:``,circle:``,title:`展开预览面板`,onClick:n[2]||=e=>{f(),i(`expand`)}},{icon:V(()=>[P(W(m),{size:18})]),_:1}),P(W(R),{quaternary:``,circle:``,title:`完全展开`,onClick:n[3]||=e=>i(`expand`)},{icon:V(()=>[P(W(Uo),{size:18})]),_:1})])):(F(),X(M,{key:2},[A(`div`,wc,[P(W(wo),{value:a.value,type:`line`,size:`small`,class:`rp-tabs`,"onUpdate:value":n[4]||=e=>a.value=e},{default:V(()=>[P(W(go),{name:`files`},{tab:V(()=>[A(`span`,Tc,[P(W(Fo),{size:15}),n[9]||=x(` 文件`,-1)])]),_:1}),P(W(go),{name:`preview`},{tab:V(()=>[A(`span`,Ec,[P(W(m),{size:15}),n[10]||=x(` 预览`,-1)])]),_:1})]),_:1},8,[`value`]),A(`div`,Dc,[P(W(R),{quaternary:``,circle:``,size:`small`,title:c.value?`退出全屏`:`全屏`,onClick:n[5]||=e=>c.value=!c.value},{icon:V(()=>[(F(),j(_(c.value?W(Bo):W(Ro)),{size:15}))]),_:1},8,[`title`]),P(W(R),{quaternary:``,circle:``,size:`small`,title:`收起到图标`,onClick:n[6]||=e=>i(`toggleIcons`)},{icon:V(()=>[P(W(Uo),{size:15})]),_:1}),P(W(R),{quaternary:``,circle:``,size:`small`,title:`收起面板`,onClick:n[7]||=e=>i(`collapse`)},{icon:V(()=>[P(W(Ho),{size:15})]),_:1})])]),Ht(P(Sc,{ref_key:`fileRef`,ref:o,onPreview:n[8]||=e=>{s.value=!0,a.value=`preview`}},null,512),[[Tt,a.value===`files`]]),Ht(A(`div`,Oc,[l.value?(F(),X(M,{key:0},[A(`div`,kc,[A(`span`,Ac,K(l.value.name),1),A(`span`,jc,K(u(l.value.size)),1),P(W(R),{quaternary:``,circle:``,size:`tiny`,tag:`a`,href:d(l.value.path),target:`_blank`,title:`下载`},{icon:V(()=>[P(W(No),{size:14})]),_:1},8,[`href`])]),l.value.binary?(F(),X(`div`,Mc,K(l.value.note||`二进制文件，无法直接预览，请下载。`),1)):l.value.truncated?(F(),X(`div`,Nc,K(l.value.note||`文件过大，仅显示部分内容。`),1)):(F(),j(W(so),{key:2,class:`preview-scroll`},{default:V(()=>[A(`pre`,Pc,K(l.value.content),1)]),_:1}))],64)):(F(),j(W(fi),{key:1,class:`preview-empty`,description:`在「文件」标签中点击一个文本文件即可在此预览`}))],512),[[Tt,a.value===`preview`]])],64))],2))}}),Ic={class:`confirm-list`},Lc={class:`confirm-head`},Rc={class:`confirm-name`},zc={class:`confirm-switch`},Bc={key:1,class:`args-err`},Vc={class:`modal-actions`},Hc=k({__name:`ToolConfirm`,props:{calls:{}},setup(e){let n=e;function r(e){return e.map(e=>({id:e.id,name:e.name,allow:!0,argsStr:JSON.stringify(e.args??{},null,2),error:``}))}let i=xt(r(n.calls)),a=L(!1);function o(){i.forEach(e=>e.allow=!0)}function s(){i.forEach(e=>e.allow=!1)}function c(){for(let e of i)if(e.error=``,e.allow&&e.argsStr.trim()!==``)try{JSON.parse(e.argsStr)}catch(t){e.error=`参数不是合法 JSON：`+t.message;return}let e=i.map(e=>{let t={id:e.id,action:e.allow?`approve`:`deny`};if(e.allow&&e.argsStr.trim()!==``)try{t.args=JSON.parse(e.argsStr)}catch{}return t});a.value=!0,us({action:`submit`,calls:e})}function l(){us({action:`cancel`})}return(e,n)=>(F(),j(W(ft),{show:!0,"mask-closable":!1,"onUpdate:show":()=>{}},{default:V(()=>[P(W(nn),{class:`confirm-card`,title:`工具调用需确认`,bordered:!1,style:{width:`580px`,"max-width":`94vw`}},{"header-extra":V(()=>[P(W(Xo),{size:18})]),footer:V(()=>[A(`div`,Vc,[P(W(R),{onClick:s},{default:V(()=>[...n[1]||=[x(`全部拒绝`,-1)]]),_:1}),P(W(R),{onClick:o},{default:V(()=>[...n[2]||=[x(`全部允许`,-1)]]),_:1}),P(W(R),{onClick:l},{default:V(()=>[...n[3]||=[x(`取消本轮`,-1)]]),_:1}),P(W(R),{type:`primary`,disabled:a.value,onClick:c},{default:V(()=>[...n[4]||=[x(`确认执行`,-1)]]),_:1},8,[`disabled`])])]),default:V(()=>[P(W(t),{type:`warning`,bordered:!1,class:`confirm-alert`},{default:V(()=>[...n[0]||=[x(` 当前为「确认模式」，下列工具将在你批准后执行。可逐条允许/拒绝，或编辑参数。 `,-1)]]),_:1}),A(`div`,Ic,[(F(!0),X(M,null,Ee(i,e=>(F(),X(`div`,{class:`confirm-row`,key:e.id},[A(`div`,Lc,[A(`span`,Rc,[P(W(es),{size:13}),x(` `+K(e.name),1)]),A(`span`,zc,[P(W(ma),{type:e.allow?`success`:`error`,size:`small`,bordered:!1},{default:V(()=>[x(K(e.allow?`允许`:`拒绝`),1)]),_:2},1032,[`type`]),P(W(po),{value:e.allow,"onUpdate:value":t=>e.allow=t,size:`small`},null,8,[`value`,`onUpdate:value`])])]),e.allow?(F(),j(W(p),{key:0,value:e.argsStr,"onUpdate:value":t=>e.argsStr=t,type:`textarea`,autosize:{minRows:3,maxRows:8},spellcheck:`false`,placeholder:`{}`,class:`args-input`},null,8,[`value`,`onUpdate:value`])):N(``,!0),e.error?(F(),X(`div`,Bc,K(e.error),1)):N(``,!0)]))),128))])]),_:1})]),_:1}))}}),Uc={class:`sidebar`},Wc={class:`sidebar-head`},Gc={class:`sidebar-foot`},Kc={class:`main`},qc={class:`topbar`},Jc={class:`tab-label`},Yc={class:`tab-label`},Xc={class:`topbar-right`},Zc={class:`uname`},Qc=k({__name:`Home`,setup(e){let t=ot(),n=Za(),r=Pt(),i=L(`chat`),a=L(!1),o=L(`full`),s=L(360),c=L(!1),l=D(()=>o.value===`collapsed`?`260px 1fr 0px`:o.value===`icons`?`260px 1fr 52px`:`260px 1fr ${s.value}px`);function u(){o.value=o.value===`collapsed`?`full`:`collapsed`}function d(e){if(o.value!==`full`)return;c.value=!0;let t=e.clientX,n=s.value,r=e=>{s.value=Math.min(760,Math.max(260,n+(t-e.clientX)))},i=()=>{c.value=!1,window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i),document.body.style.userSelect=``};document.body.style.userSelect=`none`,window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)}Ke(async()=>{await Promise.all([os(),ps()])}),ue(()=>{document.body.style.userSelect=``});async function f(e){let n=await _s(e);n.ok?(a.value=!1,t.success(`技能创建成功`)):t.error(`创建失败: `+(n.error||`未知错误`))}function p(e){ds(e).then(()=>t.success(`会话已删除`))}function m(){n.warning({title:`退出登录`,content:`确定要退出当前账号吗？`,positiveText:`退出`,negativeText:`取消`,onPositiveClick:async()=>{await yt(),r.replace(`/login`)}})}return(e,t)=>(F(),X(`div`,{class:it([`app-shell`,{resizing:c.value}]),style:B({gridTemplateColumns:l.value})},[A(`aside`,Uc,[A(`div`,Wc,[P(W(R),{type:`primary`,block:``,onClick:W(cs)},{icon:V(()=>[P(W(zo),{size:16})]),default:V(()=>[t[8]||=x(` 新建对话 `,-1)]),_:1},8,[`onClick`])]),P(xs,{convs:W(Q).convs,current:W(Q).current,onSelect:W(ss),onDelete:p},null,8,[`convs`,`current`,`onSelect`]),A(`div`,Gc,[P(W(R),{class:`skill-entry`,type:i.value===`skills`?`primary`:`default`,quaternary:i.value!==`skills`,block:``,onClick:t[0]||=e=>i.value=`skills`},{icon:V(()=>[P(W(Go),{size:16})]),default:V(()=>[t[9]||=x(` 技能管理 `,-1)]),_:1},8,[`type`,`quaternary`])])]),A(`section`,Kc,[A(`header`,qc,[P(W(wo),{class:`view-tabs`,value:i.value,type:`line`,size:`large`,"onUpdate:value":t[1]||=e=>i.value=e},{default:V(()=>[P(W(go),{name:`chat`},{tab:V(()=>[A(`span`,Jc,[P(W(zo),{size:16}),t[10]||=x(` 对话`,-1)])]),_:1}),P(W(go),{name:`skills`},{tab:V(()=>[A(`span`,Yc,[P(W(Go),{size:16}),t[11]||=x(` 技能管理`,-1)])]),_:1})]),_:1},8,[`value`]),A(`div`,Xc,[P(W(Xa),{value:W(Q).mode,size:`small`,"onUpdate:value":t[2]||=e=>W(ls)(e)},{default:V(()=>[P(W(Wa),{value:`auto`},{default:V(()=>[...t[12]||=[x(`自动`,-1)]]),_:1}),P(W(Wa),{value:`confirm`},{default:V(()=>[...t[13]||=[x(`确认`,-1)]]),_:1})]),_:1},8,[`value`]),A(`span`,{class:it([`status`,{on:W(Q).status.includes(`●`)}])},K(W(Q).status),3),W(jt).enabled?(F(),j(W(R),{key:0,quaternary:``,size:`small`,class:`user-btn`,title:`当前用户：${W(jt).username||`未知`}，点击退出登录`,onClick:m},{icon:V(()=>[P(W($o),{size:15})]),default:V(()=>[A(`span`,Zc,K(W(jt).username),1),P(W(Lo),{size:13,class:`logout-glyph`})]),_:1},8,[`title`])):N(``,!0),P(W(R),{quaternary:``,circle:``,size:`small`,title:o.value===`collapsed`?`展开右侧面板`:`收起右侧面板`,onClick:u},{icon:V(()=>[(F(),j(_(o.value===`collapsed`?W(jo):W(Mo)),{size:16}))]),_:1},8,[`title`])])]),Ht(P(zs,{onSend:W(fs)},null,8,[`onSend`]),[[Tt,i.value===`chat`]]),Ht(P(nc,{skills:W(Q).skills,onToggle:W(ms),onRemove:W(hs),onReload:W(gs),onAdd:t[3]||=e=>a.value=!0},null,8,[`skills`,`onToggle`,`onRemove`,`onReload`]),[[Tt,i.value===`skills`]])]),P(Fc,{"panel-state":o.value,onExpand:t[4]||=e=>o.value=`full`,onCollapse:t[5]||=e=>o.value=`collapsed`,onToggleIcons:t[6]||=e=>o.value=o.value===`icons`?`full`:`icons`,onResizeStart:d},null,8,[`panel-state`]),P(ic,{open:a.value,onClose:t[7]||=e=>a.value=!1,onSubmit:f},null,8,[`open`]),W(Q).pendingTool?(F(),j(Hc,{key:0,calls:W(Q).pendingTool},null,8,[`calls`])):N(``,!0)],6))}});export{Qc as default};