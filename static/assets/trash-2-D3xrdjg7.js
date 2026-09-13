import{t as e}from"./createLucideIcon-SGZexfXm.js";import{An as t,Bn as n,Ft as r,Gt as i,Mt as a,N as o,Ot as s,Qn as c,Tn as l,Un as u,Vt as d,Xn as f,er as p,l as m,qn as h,sr as g,wn as _}from"./index-Q0kdHZPm.js";var v=!1;function y(){if(o&&window.CSS&&!v&&(v=!0,`registerProperty`in window?.CSS))try{CSS.registerProperty({name:`--n-color-start`,syntax:`<color>`,inherits:!1,initialValue:`#0000`}),CSS.registerProperty({name:`--n-color-end`,syntax:`<color>`,inherits:!1,initialValue:`#0000`})}catch{}}var b=_([l(`skeleton`,`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),_(`@keyframes skeleton-loading`,`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),x={...s.props,text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}},S=f({name:`Skeleton`,inheritAttrs:!1,props:x,setup(e){y();let{mergedClsPrefixRef:n,mergedComponentPropsRef:a}=i(e),o=u(()=>e.size||a?.value?.Skeleton?.size),c=s(`Skeleton`,`-skeleton`,b,m,e,n);return{mergedClsPrefix:n,style:u(()=>{let n=c.value,{common:{cubicBezierEaseInOut:i}}=n,a=n.self,{color:s,colorEnd:l,borderRadius:u}=a,d,{circle:f,sharp:p,round:m,width:h,height:g,text:_,animated:v}=e,y=o.value;y!==void 0&&(d=a[t(`height`,y)]);let b=f?h??g??d:h,x=(f?h??g:g)??d;return{display:_?`inline-block`:``,verticalAlign:_?`-0.125em`:``,borderRadius:f?`50%`:m?`4096px`:p?``:u,width:typeof b==`number`?r(b):b,height:typeof x==`number`?r(x):x,animation:v?``:`none`,"--n-bezier":i,"--n-color-start":s,"--n-color-end":l}})}},render(){let{repeat:e,style:t,mergedClsPrefix:r,$attrs:i}=this,o=c(`div`,p({class:`${r}-skeleton`,style:t},i));return e>1?(g(),h(n,{key:1},[d(()=>a(e,null).map(e=>[o,`
`]))],64)):o}}),C=e(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]);export{S as n,C as t};