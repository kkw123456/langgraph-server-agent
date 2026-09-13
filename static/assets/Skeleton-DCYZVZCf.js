import{Ft as e,Gt as t,Mt as n,N as r,Ot as i,Rn as a,Vt as o,Wn as s,er as c,fr as l,l as u,mr as d,rr as f,sr as p,ur as m,xr as h,zn as g}from"./index-BKnoSBpI.js";var _=!1;function v(){if(r&&window.CSS&&!_&&(_=!0,`registerProperty`in window?.CSS))try{CSS.registerProperty({name:`--n-color-start`,syntax:`<color>`,inherits:!1,initialValue:`#0000`}),CSS.registerProperty({name:`--n-color-end`,syntax:`<color>`,inherits:!1,initialValue:`#0000`})}catch{}}var y=a([g(`skeleton`,`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),a(`@keyframes skeleton-loading`,`
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
 `)]),b={...i.props,text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}},x=m({name:`Skeleton`,inheritAttrs:!1,props:b,setup(n){v();let{mergedClsPrefixRef:r,mergedComponentPropsRef:a}=t(n),o=f(()=>n.size||a?.value?.Skeleton?.size),c=i(`Skeleton`,`-skeleton`,y,u,n,r);return{mergedClsPrefix:r,style:f(()=>{let t=c.value,{common:{cubicBezierEaseInOut:r}}=t,i=t.self,{color:a,colorEnd:l,borderRadius:u}=i,d,{circle:f,sharp:p,round:m,width:h,height:g,text:_,animated:v}=n,y=o.value;y!==void 0&&(d=i[s(`height`,y)]);let b=f?h??g??d:h,x=(f?h??g:g)??d;return{display:_?`inline-block`:``,verticalAlign:_?`-0.125em`:``,borderRadius:f?`50%`:m?`4096px`:p?``:u,width:typeof b==`number`?e(b):b,height:typeof x==`number`?e(x):x,animation:v?``:`none`,"--n-bezier":r,"--n-color-start":a,"--n-color-end":l}})}},render(){let{repeat:e,style:t,mergedClsPrefix:r,$attrs:i}=this,a=l(`div`,d({class:`${r}-skeleton`,style:t},i));return e>1?(h(),p(c,{key:1},[o(()=>n(e,null).map(e=>[a,`
`]))],64)):a}});export{x as t};