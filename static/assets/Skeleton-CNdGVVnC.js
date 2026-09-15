import{$n as e,B as t,Gt as n,Hn as r,In as i,Ln as a,Lt as o,Sr as s,Vt as c,Zt as l,fr as u,l as d,mr as f,nn as p,rr as m,sr as h,ur as g}from"./index-vAIOlw3Q.js";var _=!1;function v(){if(t&&window.CSS&&!_&&(_=!0,`registerProperty`in window?.CSS))try{CSS.registerProperty({name:`--n-color-start`,syntax:`<color>`,inherits:!1,initialValue:`#0000`}),CSS.registerProperty({name:`--n-color-end`,syntax:`<color>`,inherits:!1,initialValue:`#0000`})}catch{}}var y=i([a(`skeleton`,`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),i(`@keyframes skeleton-loading`,`
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
 `)]),b={...o.props,text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}},x=g({name:`Skeleton`,inheritAttrs:!1,props:b,setup(e){v();let{mergedClsPrefixRef:t,mergedComponentPropsRef:i}=p(e),a=m(()=>e.size||i?.value?.Skeleton?.size),s=o(`Skeleton`,`-skeleton`,y,d,e,t);return{mergedClsPrefix:t,style:m(()=>{let t=s.value,{common:{cubicBezierEaseInOut:i}}=t,o=t.self,{color:c,colorEnd:l,borderRadius:u}=o,d,{circle:f,sharp:p,round:m,width:h,height:g,text:_,animated:v}=e,y=a.value;y!==void 0&&(d=o[r(`height`,y)]);let b=f?h??g??d:h,x=(f?h??g:g)??d;return{display:_?`inline-block`:``,verticalAlign:_?`-0.125em`:``,borderRadius:f?`50%`:m?`4096px`:p?``:u,width:typeof b==`number`?n(b):b,height:typeof x==`number`?n(x):x,animation:v?``:`none`,"--n-bezier":i,"--n-color-start":c,"--n-color-end":l}})}},render(){let{repeat:t,style:n,mergedClsPrefix:r,$attrs:i}=this,a=u(`div`,f({class:`${r}-skeleton`,style:n},i));return t>1?(s(),h(e,{key:1},[l(()=>c(t,null).map(e=>[a,`
`]))],64)):a}});export{x as t};