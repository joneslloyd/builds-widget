(self.webpackChunkmobalytics_builds_widget=self.webpackChunkmobalytics_builds_widget||[]).push([[490],{3490:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>L}),t(6400);var n=t(8269),i=t(8761),a=t(6584);const l=(0,n.zo)("div")((({topSpace:e=!1,justifyContentSpaceBetween:r=!1})=>[{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center"},"normal"===e?{paddingTop:"0.625rem"}:{},"large"===e?{paddingTop:"1.25rem"}:{},"x-large"===e?{paddingTop:"2rem"}:{},!0===r?{justifyContent:"space-between"}:{}])),d=(0,n.zo)("div")((({leftSpace:e=!1})=>[{paddingLeft:"0px",paddingRight:"0px"},"normal"===e?{paddingLeft:"0.625rem"}:{},"large"===e?{paddingLeft:"1.25rem"}:{},"x-large"===e?{paddingLeft:"2rem"}:{}])),o=({index:e=0,data:r={},totalItems:t=0,type:n="primary"})=>{const{hasCircle:o,runes:s}=r,p="primary"===n?0===e?48:36:e===t-1?24:36,c=0!==e&&("secondary"===n&&e===t-1?"x-large":"large"),m="secondary"===n&&0===e,u=e===("secondary"===n&&e===t-1)?"1px":"2px";return(0,a.tZ)(l,{topSpace:c,justifyContentSpaceBetween:m,children:s&&s.map(((r,l)=>{const{rune:s,hasRune:c}=r,m=0!==l&&(0===e?"normal":"secondary"===n&&e===t-1?"x-large":"large");return(0,a.tZ)(d,{leftSpace:m,children:(0,a.tZ)(i.Z,{greyed:!c,id:s,wh:p,borderWidth:u,rounded:o,gold:c&&o},s)})}))},e)};var s=t(214),p=t(2735);const c={display:"flex"};var m=t(8614);const u=(0,n.zo)("div")((({loading:e})=>[c,e&&m.Z])),g=(0,n.zo)(u)((({leftSpace:e=!1})=>[{flexDirection:"column"},"normal"===e?{marginTop:"2.5rem","@media (min-width: 600px)":{marginTop:"0px",marginLeft:"4rem"}}:{}])),f=(0,n.zo)("div")({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}),h=(0,n.zo)(p.Z)({color:"hsla(238, 24%, 76%, 1)",textTransform:"capitalize",fontSize:".875rem",fontWeight:"900",marginLeft:"0.5rem"}),x=(0,n.zo)("div")({display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"1.25rem"}),y=({mainId:e,iDs:r=[],type:t="primary",loading:n=!0})=>{const l=s.EW.filter((r=>{const{title:{icon:t=0}={}}=r;return t===e}))[0],{title:{label:d="xxxxxxx"}={},slots:p}=l||{},c=p?p.map(((e,t)=>({hasCircle:0!==t&&"full",runes:e.map((e=>({rune:e,hasRune:r.includes(e)})))}))):[{runes:[{rune:!1},{rune:!1},{rune:!1},{rune:!1}],hasCircle:"primary"!==t&&"full"},{runes:[{rune:!1},{rune:!1},{rune:!1},{rune:!1}],hasCircle:"full"},{runes:[{rune:!1},{rune:!1},{rune:!1},{rune:!1}],hasCircle:"full"},{runes:[{rune:!1},{rune:!1},{rune:!1},{rune:!1}],hasCircle:"full"}],m="secondary"===t&&"normal",u=n||"xxxxxxx"===d;return(0,a.BX)(g,{leftSpace:m,children:[(0,a.BX)(f,{children:[(0,a.tZ)(i.Z,{id:e,wh:36,rounded:!1}),(0,a.tZ)(h,{loading:u,children:d})]}),(0,a.tZ)(x,{children:c&&c.map(((e,r)=>{const n=c.length,i=`${r}-${n}`;return(0,a.tZ)(o,{index:r,totalItems:n,data:e,type:t},i)}))})]})};var Z=t(396),w=t(9328),z=t(3329),b=t(4669),v=t(8443);const C=(0,n.zo)(b.Z)({marginRight:"0px",width:"100%","@media (min-width: 740px)":{marginRight:"2.5rem",width:"75%"}}),S=(0,n.zo)(p.Z)({textTransform:"uppercase"}),I=(0,n.zo)(z.Z)({width:"100%"}),D=(0,n.zo)(v.Z)({display:"flex",textTransform:"uppercase",paddingTop:"0.625rem",flexDirection:"column",width:"100%",alignItems:"center","@media (min-width: 600px)":{flexDirection:"row",alignItems:"flex-start"}}),L=()=>{const{dataApiBuildData:{data:{lol:{champion:{build:{perks:e={}}={}}={}}={}}={}}={},loading:r=!0}=(0,Z.qp)(w.Z),{IDs:t=[],style:n=!1,subStyle:i=!1}=e;return(0,a.BX)(C,{children:[(0,a.tZ)(S,{children:"Runes"}),(0,a.tZ)(I,{children:(0,a.BX)(D,{children:[(0,a.tZ)(y,{mainId:n,iDs:t,type:"primary",loading:r}),(0,a.tZ)(y,{mainId:i,iDs:t,type:"secondary",loading:r})]})})]})}},8761:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p}),t(6400);var n=t(8269),i=t(6302),a=t(6566),l=t(214),d=t(6584);const o=(0,n.zo)(i.Z)({}),s=(0,n.zo)("div")({}),p=({id:e,wh:r=32,rounded:t=!1,gold:i=!1,leftSpace:p=!1,borderWidth:c=!1,greyed:m=!1})=>{const u={gold:o,none:s},g=i?u.gold:u.none,f=(0,n.zo)(g)((({leftSpace:e})=>[{zIndex:"10"},"large"===e?{marginLeft:"1rem !important"}:{},"normal"===e?{marginLeft:"0.75rem !important"}:{},"small"===e?{marginLeft:"0.5rem !important"}:{},"smaller"===e?{marginLeft:"0.25rem !important"}:{},"smallest"===e?{marginLeft:"0.125rem !important"}:{},{width:`${r}px`,height:`${r}px`},!0===m&&{opacity:"0.5","mix-blend-mode":"luminosity"}])),h=(0,l.IN)(e);return(0,d.tZ)(f,{leftSpace:p,borderWidth:c,greyed:m,children:(0,d.tZ)(a.Z,{src:h,rounded:t,width:r,height:r,bgColor:!1,leftSpace:p})})}},8443:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var n=t(8269);const i={display:"flex"};var a=t(8614);const l=(0,n.zo)("div")((({loading:e})=>[i,e&&a.Z]))}}]);
//# sourceMappingURL=490.bundle.js.map