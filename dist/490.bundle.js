(self.webpackChunkmobalytics_builds_widget=self.webpackChunkmobalytics_builds_widget||[]).push([[490],{3490:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>w}),n(6400);var t=n(8661),i=n(2914),a=n(9968),d=n(8761),l=n(4408),o=n(4357),s=n(6466),c=n(6584);const p=({index:e=0,data:r={},type:n="primary",loading:t=!0})=>{const i=(0,l.oV)(),a=i("div")((({topSpace:e=!1,justifyContentSpaceBetween:r=!1})=>(0,s.Cw)([{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center"},"normal"===e?{paddingTop:"0.625rem"}:{},"large"===e?{paddingTop:"1.25rem"}:{},"x-large"===e?{paddingTop:"2rem"}:{},!0===r?{justifyContent:"center"}:{}]))),p=i("div")((({leftSpace:e=!1})=>(0,s.Cw)([{paddingLeft:"0px",paddingRight:"0px"},"normal"===e?{paddingLeft:"0.625rem"}:{},"large"===e?{paddingLeft:"1.25rem"}:{},"x-large"===e?{paddingLeft:"2rem"}:{}]))),{hasCircle:m,runes:u}=r,g=0!==e&&("secondary"===n&&e>2?"x-large":"large"),h="secondary"===n&&0===e,f="secondary"===n&&e>2?"1px":"2px";return(0,c.tZ)(a,{topSpace:g,justifyContentSpaceBetween:h,children:u&&u.map(((r,i)=>{const{rune:a=!1,hasRune:l=!1}=r,s=0!==i&&("secondary"===n&&e>2?"x-large":"large"),u="secondary"===n&&e>2?24:"primary"===n&&0===e&&l?36:32,g=`${a||"rune"}-${i}`;return(0,c.tZ)(p,{leftSpace:s,children:(0,c.tZ)(o.Z,{by:"riotId",identifier:a,children:(0,c.tZ)(d.Z,{loading:t,cursor:"help",greyed:!l,id:a,wh:u,borderWidth:f,rounded:m,gold:l&&m},g)})})}))})};var m=n(2735);const u={display:"flex"};var g=n(8614);const h=(0,t.X$)((({children:e,...r})=>{const n=(0,l.oV)()("div")((({loading:e})=>(0,s.Cw)([u,e?g.Z:{}])));return(0,c.tZ)(n,{...r,children:e})})),f=(0,t.X$)((({mainId:e,iDs:r=[],type:n="primary",loading:t=!0})=>{const i=(0,l.oV)(),a=i(h)((({leftSpace:e=!1})=>(0,s.Cw)([{flexDirection:"column"},"normal"===e?{marginTop:"2.5rem","@media (min-width: 600px)":{marginTop:"0px",marginLeft:"4rem"}}:{}]))),u=i("div")((()=>(0,s.Cw)([{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}]))),g=i(m.Z)((()=>(0,s.Cw)([{color:"hsla(238, 24%, 76%, 1)",textTransform:"capitalize",fontSize:".875rem",fontWeight:"700",marginLeft:"0.5rem"}]))),f=i("div")((()=>(0,s.Cw)([{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"1.25rem"}]))),x=s.EW.filter((r=>{const{title:{icon:n=0}={}}=r;return n===e}))[0],{title:{label:y="xxxxxxx"}={},slots:w=[]}=x||{},Z=s.EW.filter((e=>{const{title:{label:r}={}}=e;return"Shards"===r}))[0].slots,C="secondary"===n?[...w.slice(1),...Z]:w,b=C?C.map(((e,t)=>({hasCircle:("secondary"===n||0!==t)&&"full",runes:e.map(((e,i)=>({rune:e,hasRune:"secondary"===n&&t>2?e===r[t+3]:r.includes(e)})))}))):[{runes:[{rune:!1},{rune:!1},{rune:!1},{rune:!1}],hasCircle:"primary"!==n&&"full"},{runes:[{rune:!1},{rune:!1},{rune:!1},{rune:!1}],hasCircle:"full"},{runes:[{rune:!1},{rune:!1},{rune:!1},{rune:!1}],hasCircle:"full"},{runes:[{rune:!1},{rune:!1},{rune:!1},{rune:!1}],hasCircle:"full"}],I="secondary"===n&&"normal",D=t||"xxxxxxx"===y;return(0,c.BX)(a,{leftSpace:I,children:[(0,c.BX)(u,{children:[(0,c.tZ)(o.Z,{by:"riotId",identifier:e,children:(0,c.tZ)(d.Z,{cursor:"help",id:e,wh:36,rounded:!1})}),(0,c.tZ)(g,{loading:D,children:y})]}),(0,c.tZ)(f,{children:b&&b.map(((e,r)=>{const t=b.length,i=`${r}-${t}`;return(0,c.tZ)(p,{index:r,totalItems:t,data:e,type:n,loading:D},i)}))})]})}));var x=n(3329),y=n(4669);const w=(0,t.X$)((()=>{const e=(0,l.oV)(),r=e(y.Z)((()=>(0,s.Cw)([{marginRight:"0px",width:"100%","@media (min-width: 740px)":{marginRight:"2.5rem",width:"75%"}}]))),n=e(m.Z)((()=>(0,s.Cw)([{textTransform:"uppercase"}]))),t=e(x.Z)((()=>(0,s.Cw)([{width:"100%","@media (min-width: 740px)":{minWidth:"32rem"}}]))),d=e(h)((()=>(0,s.Cw)([{display:"flex",textTransform:"uppercase",paddingTop:"0.625rem",flexDirection:"column",width:"100%",alignItems:"center","@media (min-width: 600px)":{flexDirection:"row",alignItems:"flex-start"}}]))),{daData:{data:{lol:{champion:{build:{perks:o={}}={}}={}}={}}={}}={}}=(0,i.kp)(),{loading:p=!0}=(0,a.r$)(),{IDs:u=[],style:g=!1,subStyle:w=!1}=o;return(0,c.BX)(r,{children:[(0,c.tZ)(n,{children:"Runes"}),(0,c.tZ)(t,{children:(0,c.BX)(d,{children:[(0,c.tZ)(f,{mainId:g,iDs:u,type:"primary",loading:p}),(0,c.tZ)(f,{mainId:w,iDs:u,type:"secondary",loading:p})]})})]})}))},8761:(e,r,n)=>{"use strict";n.d(r,{Z:()=>o}),n(6400);var t=n(6302),i=n(6566),a=n(6466),d=n(4408),l=n(6584);const o=({id:e=!1,wh:r=32,rounded:n=!1,gold:o=!1,leftSpace:s=!1,borderWidth:c=!1,greyed:p=!1,cursor:m="default",loading:u=!0})=>{const g=(0,d.oV)(),h={gold:g(t.Z)((()=>(0,a.Cw)([{}]))),none:g("div")((()=>(0,a.Cw)([{}])))},f=g(o?h.gold:h.none)((({leftSpace:e})=>(0,a.Cw)([{zIndex:"10"},"large"===e?{marginLeft:"1rem !important"}:{},"normal"===e?{marginLeft:"0.75rem !important"}:{},"small"===e?{marginLeft:"0.5rem !important"}:{},"smaller"===e?{marginLeft:"0.25rem !important"}:{},"smallest"===e?{marginLeft:"0.125rem !important"}:{},{width:`${r}px`,height:`${r}px`},!0===p?{opacity:"0.5","mix-blend-mode":"luminosity"}:{}]))),x=(0,a.IN)(e);return(0,l.tZ)(f,{leftSpace:s,borderWidth:c,greyed:p,loading:u,children:(0,l.tZ)(i.Z,{src:x,rounded:n,width:r,height:r,bgColor:!1,leftSpace:s,cursor:m})})}},4357:(e,r,n)=>{"use strict";n.d(r,{Z:()=>u}),n(6400);var t=n(8661),i=n(396),a=n(8529),d=n(6466),l=n(9212),o=n(8128),s=n(5730),c=n(6584);const p=(0,t.X$)((({by:e="riotId",identifier:r=!1})=>{const{ttData:n,setTtData:t}=(0,l.N)(),[p,m]=(0,i.eJ)(!1),u=(0,i.I4)((e=>{(e=>{e&&!p&&m(e)})(e)}),[]),g=(0,i.I4)((async()=>{if(r)return await(0,o.D5)("perk",e,r,n,t)}),[r]);return(0,a.Z)(g,u),p?(0,c.tZ)(s.V,{name:p.name,iconName:p.name,iconUrl:(0,d.IN)(r),description:p.longDescription||p.shortDescription||p.customDescription}):(0,c.tZ)(s.U,{})}));var m=n(8442);const u=(0,t.X$)((({by:e,identifier:r,children:n})=>{const t=(0,i.I4)((()=>(0,c.tZ)(p,{by:e,identifier:r})),[r]);return(0,c.BX)(c.HY,{children:[r&&(0,c.tZ)(m.j,{tooltipFn:t,children:(0,c.tZ)("span",{style:"z-index: 10;",children:n})}),!r&&n]})}))}}]);
//# sourceMappingURL=490.bundle.js.map