(self.webpackChunkmobalytics_builds_widget=self.webpackChunkmobalytics_builds_widget||[]).push([[870,207],{418:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n}),i(400);var l=i(269),a=i(514),o=i(584);const r=(0,l.zo)("span")({display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}),n=({letter:t=!1,wh:e=16,children:i,loading:l=!0,noBg:n=!1,...s})=>(0,o.tZ)(a.Z,{letter:t,wh:e,loading:l,noBg:n,...s,children:(0,o.tZ)(r,{children:i})})},207:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>h}),i(400);var l=i(269),a=i(418),o=i(329),r=i(669),n=i(919),s=i(584);const d=(0,l.zo)(o.Z)({}),m=(0,l.zo)(r.Z)((({leftSpace:t,keyHeight:e=0})=>[{alignItems:"center",marginLeft:"0.625rem",position:"relative","&:before":{position:"absolute",zIndex:"0",top:"33.333333%",right:"33.333333%",bottom:"33.333333%",left:"49%",content:'""',display:"block",width:"0.0625rem",height:"100%",backgroundColor:"hsla(245, 14%, 47%, 1)","--tw-bg-opacity":"0.05"}},0===e?{alignItems:"center",marginLeft:"0.625rem",position:"relative","&:before":{position:"absolute",zIndex:"0",top:"36%",right:"36%",bottom:"36%",left:"49%",content:'""',display:"block",width:"0.0625rem",height:"22.24%",backgroundColor:"hsla(245, 14%, 47%, 0.25)","--tw-bg-opacity":"0.05"}}:{},1===e?{alignItems:"center",marginLeft:"0.625rem",position:"relative","&:before":{position:"absolute",zIndex:"0",top:"36%",right:"36%",bottom:"36%",left:"49%",content:'""',display:"block",width:"0.0625rem",height:"111.15%",backgroundColor:"hsla(245, 14%, 47%, 0.25)","--tw-bg-opacity":"0.05"}}:{},2===e?{alignItems:"center",marginLeft:"0.625rem",position:"relative","&:before":{position:"absolute",zIndex:"0",top:"36%",right:"36%",bottom:"36%",left:"49%",content:'""',display:"block",width:"0.0625rem",height:"200%",backgroundColor:"hsla(245, 14%, 47%, 0.25)","--tw-bg-opacity":"0.05"}}:{},3===e?{alignItems:"center",marginLeft:"0.625rem",position:"relative","&:before":{position:"absolute",zIndex:"0",top:"36%",right:"36%",bottom:"36%",left:"49%",content:'""',display:"block",width:"0.0625rem",height:"289%",backgroundColor:"hsla(245, 14%, 47%, 0.25)","--tw-bg-opacity":"0.05"}}:{},"large"===t?{"@media (min-width: 560px)":{marginLeft:"0.75rem"}}:{},"normal"===t?{"@media (min-width: 560px)":{marginLeft:"0.625rem"}}:{},"small"===t?{"@media (min-width: 560px)":{marginLeft:"0.5rem"}}:{},"very-small"===t?{"@media (min-width: 560px)":{marginLeft:"0.19rem"}}:{}])),p=(0,l.zo)(o.Z)({marginBottom:"0.25rem"}),c=(0,l.zo)(o.Z)((({keyHeight:t=0})=>[{position:"relative"},0===t?{top:"0.4rem"}:{},1===t?{top:"2.4rem"}:{},2===t?{top:"4.4rem"}:{},3===t?{top:"6.4rem"}:{}])),g=(0,l.zo)(n.Z)({textTransform:"capitalize",fontSize:".75rem",lineHeight:"1"}),h=({skillOrder:t,skillMap:e,loading:i=!0})=>(0,s.tZ)(d,{children:t.map(((t,l)=>{const o=l+1,r=e[t-1],n=0!==l?"very-small":"small";return(0,s.BX)(m,{keyHeight:t-1,leftSpace:n,children:[(0,s.tZ)(p,{children:(0,s.tZ)(g,{children:o})}),(0,s.tZ)(c,{keyHeight:t-1,children:(0,s.tZ)(a.Z,{letter:r,wh:20,loading:i,children:r})})]},o)}))})},870:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>v}),i(400);var l=i(269),a=i(418),o=i(145),r=i(329),n=i(584);const s=(0,l.zo)(r.Z)({marginLeft:"0.5rem"}),d=(0,l.zo)(a.Z)((({leftSpace:t=!1,rightSpace:e=!1})=>["normal"===t?{marginLeft:"0.5rem"}:{},"normal"===e?{marginRight:"0.5rem"}:{}])),m=({skillMap:t=[],loading:e=!0})=>{const i=t.length>0?t.filter((t=>"R"!==t)):[0,1,2];return(0,n.tZ)(s,{children:i&&i.map(((t,l)=>{const a=l!==i.length-1&&(0,n.tZ)(o.Z,{}),r=0!==l&&"normal",s=l!==i.length-1&&"normal";return(0,n.BX)(n.HY,{children:[(0,n.tZ)(d,{leftSpace:r,rightSpace:s,letter:t,wh:16,loading:e,noBg:!0,children:t},t),a]})}))})};var p=i(397),c=i(669);const g=(0,l.zo)(c.Z)({}),h=({loading:t=!0,abilities:e=[]})=>(0,n.BX)(g,{children:[t&&(0,n.BX)(n.HY,{children:[(0,n.tZ)(p.Z,{slug:!1,wh:24,topSpace:"large",bottomSpace:"small",type:"skill"}),(0,n.tZ)(p.Z,{slug:!1,wh:24,bottomSpace:"small",type:"skill"}),(0,n.tZ)(p.Z,{slug:!1,wh:24,bottomSpace:"small",type:"skill"}),(0,n.tZ)(p.Z,{slug:!1,wh:24,bottomSpace:"small",type:"skill"})]}),!t&&e.map(((t,e)=>{const{flatData:i}=t,{activationKey:l=!1,slug:a=!1}=i,o=0===e&&"large";return(0,n.tZ)(n.HY,{children:(0,n.tZ)(p.Z,{slug:a,wh:24,topSpace:o,bottomSpace:"small",type:"skill"},l)})}))]});var b=i(207);const Z=(0,l.zo)(r.Z)({alignItems:"flex-start"}),f=({abilities:t,skillOrder:e,skillMap:i,loading:l=!0})=>(0,n.BX)(Z,{children:[(0,n.tZ)(h,{abilities:t,loading:l}),(0,n.tZ)(b.default,{skillOrder:e,skillMap:i,loading:l})]});var u=i(396),k=i(200),w=i(735);const y=(0,l.zo)(c.Z)({display:"none","@media (min-width: 560px)":{display:"flex",paddingTop:"1rem"},"@media (min-width: 600px)":{paddingTop:"1.25rem"},"@media (min-width: 740px)":{paddingTop:"0px"}}),x=(0,l.zo)(w.Z)({textTransform:"uppercase"}),z=(0,l.zo)(r.Z)((({pt:t=!1})=>[{},"normal"===t?{paddingTop:"0.75rem"}:{}])),v=()=>{const{dataApiBuildData:{data:{lol:{champion:{build:{skillOrder:t=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}={}}={}}={}}={}}={},squidexApiBuildData:{data:{championCommonInfo:[{flatData:{abilities:e=[]}={}}={}]=[]}={}}={},loading:i=!0}=(0,u.qp)(k.Z),l=e.filter((t=>"PASSIVE"!==t.flatData.activationKey))||[],a=l.length>0?l.reduce(((t,e)=>(t.push(e.flatData.activationKey),t)),[]):[],o=i||0===a.length;return(0,n.BX)(y,{children:[(0,n.BX)(z,{children:[(0,n.tZ)(x,{children:"Skill order"}),(0,n.tZ)(m,{skillMap:a,loading:o})]}),(0,n.tZ)(z,{pt:"normal",children:(0,n.tZ)(f,{abilities:l,skillOrder:t,skillMap:a,loading:o})})]})}},145:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o}),i(400);var l=i(175),a=i(584);const o=({className:t})=>(0,a.tZ)(l.Z,{name:"right-arrow",className:t})},514:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var l=i(269),a=i(614);const o=(0,l.zo)("div")((({wh:t=16,letter:e=!1,loading:i=!0,noBg:l=!1})=>[{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700",fontSize:".75rem",backgroundColor:"hsla(251, 29%, 36%, 1)",borderRadius:"0.19rem"},"W"===e?{color:"hsla(195, 90%, 59%, 1) !important"}:{},"Q"===e?{color:"hsla(46, 100%, 51%, 1) !important"}:{},"E"===e?{color:"hsla(118, 58%, 53%, 1) !important"}:{},"R"===e?{color:"hsla(338, 100%, 57%, 1) !important"}:{},!0===l?{backgroundColor:"transparent"}:{},i&&a.Z,{width:`${t}px`,height:`${t}px`}]))}}]);
//# sourceMappingURL=870.bundle.js.map