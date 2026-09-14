import{$n as e,An as t,Bn as n,Ft as r,Gt as i,Jn as a,Mt as o,N as s,Ot as c,Tn as l,Vt as u,Wn as d,Zn as f,cr as p,l as m,tr as h,wn as g}from"./index-CRZeUnv2.js";var _=!1;function v(){if(s&&window.CSS&&!_&&(_=!0,`registerProperty`in window?.CSS))try{CSS.registerProperty({name:`--n-color-start`,syntax:`<color>`,inherits:!1,initialValue:`#0000`}),CSS.registerProperty({name:`--n-color-end`,syntax:`<color>`,inherits:!1,initialValue:`#0000`})}catch{}}var y=g([l(`skeleton`,`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),g(`@keyframes skeleton-loading`,`
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
 `)]),b={...c.props,text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}},x=f({name:`Skeleton`,inheritAttrs:!1,props:b,setup(e){v();let{mergedClsPrefixRef:n,mergedComponentPropsRef:a}=i(e),o=d(()=>e.size||a?.value?.Skeleton?.size),s=c(`Skeleton`,`-skeleton`,y,m,e,n);return{mergedClsPrefix:n,style:d(()=>{let n=s.value,{common:{cubicBezierEaseInOut:i}}=n,a=n.self,{color:c,colorEnd:l,borderRadius:u}=a,d,{circle:f,sharp:p,round:m,width:h,height:g,text:_,animated:v}=e,y=o.value;y!==void 0&&(d=a[t(`height`,y)]);let b=f?h??g??d:h,x=(f?h??g:g)??d;return{display:_?`inline-block`:``,verticalAlign:_?`-0.125em`:``,borderRadius:f?`50%`:m?`4096px`:p?``:u,width:typeof b==`number`?r(b):b,height:typeof x==`number`?r(x):x,animation:v?``:`none`,"--n-bezier":i,"--n-color-start":c,"--n-color-end":l}})}},render(){let{repeat:t,style:r,mergedClsPrefix:i,$attrs:s}=this,c=e(`div`,h({class:`${i}-skeleton`,style:r},s));return t>1?(p(),a(n,{key:1},[u(()=>o(t,null).map(e=>[c,`
`]))],64)):c}});export{x as t};