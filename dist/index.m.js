var e;function t(e,t,r){var n,i,a,l=arguments,s={};for(a in t)"key"==a?n=t[a]:"ref"==a?i=t[a]:s[a]=t[a];if(arguments.length>3)for(r=[r],a=3;a<arguments.length;a++)r.push(l[a]);if(null!=r&&(s.children=r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===s[a]&&(s[a]=e.defaultProps[a]);return o(e,s,n,i,null)}function o(t,o,r,n,i){var a={type:t,props:o,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++e.__v:i};return null!=e.vnode&&e.vnode(a),a}e={__e:function(e,t){for(var o,r,n;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(e)),n=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e),n=o.__d),n)return o.__E=o}catch(t){e=t}throw e},__v:0},"function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout;let r,n,i,a={data:""},l=e=>{if("undefined"!=typeof window){let t=e?e.querySelector("#_goober"):window._goober;return t||(t=(e||document.head).appendChild(document.createElement("style")),t.innerHTML=" ",t.id="_goober"),t.firstChild}return e||a},s=/(?:([A-Z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,c=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,d=(e,t)=>{let o,r="",n="",i="";for(let a in e){let l=e[a];"object"==typeof l?(o=t?t.replace(/([^,])+/g,e=>a.replace(/([^,])+/g,t=>/&/g.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a,n+="@"==a[0]?"f"==a[1]?d(l,a):a+"{"+d(l,"k"==a[1]?"":t)+"}":d(l,o)):"@"==a[0]&&"i"==a[1]?r=a+" "+l+";":i+=d.p?d.p(a.replace(/[A-Z]/g,"-$&").toLowerCase(),l):a.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+l+";"}return i[0]?(o=t?t+"{"+i+"}":i,r+o+n):r+n},p={},u=e=>{let t="";for(let o in e)t+=o+("object"==typeof e[o]?u(e[o]):e[o]);return t},f=(e,t,o,r,n)=>{let i="object"==typeof e?u(e):e,a=p[i]||(p[i]="go"+i.split("").reduce((e,t)=>101*e+t.charCodeAt(0)>>>0,11));if(!p[a]){let t="object"==typeof e?e:(e=>{let t,o=[{}];for(;t=s.exec(e.replace(c,""));)t[4]&&o.shift(),t[3]?o.unshift(o[0][t[3]]=o[0][t[3]]||{}):t[4]||(o[0][t[1]]=t[2]);return o[0]})(e);p[a]=d(n?{["@keyframes "+a]:t}:t,o?"":"."+a)}return((e,t,o)=>{-1==t.data.indexOf(e)&&(t.data=o?e+t.data:t.data+e)})(p[a],t,r),a},g=(e,t,o)=>e.reduce((e,r,n)=>{let i=t[n];if(i&&i.call){let e=i(o),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):e}return e+r+(null==i?"":i)},"");function m(e){let t=this||{},o=e.call?e(t.p):e;return f(o.unshift?o.raw?g(o,[].slice.call(arguments,1),t.p):o.reduce((e,o)=>o?Object.assign(e,o.call?o(t.p):o):e,{}):o,l(t.target),t.g,t.o,t.k)}function b(e,t){let o=this||{};return function(){let a=arguments;function l(s,c){let d=Object.assign({},s),p=d.className||l.className;o.p=Object.assign({theme:n&&n()},d),o.o=/ *go\d+/g.test(p),d.className=m.apply(o,a)+(p?" "+p:""),t&&(d.ref=c);let u=d.as||e;return i&&u[0]&&i(d),r(u,d)}return t?t(l):l}}function h(){const e=b.call({g:1},"div").apply(null,arguments);return function(t){return e(t),null}}var w,y;m.bind({g:1}),m.bind({k:1}),m.bind({g:1});const v=h`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  :root {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  body {
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  }

  hr {
    height: 0;
    color: inherit;
  }

  abbr[title] {
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    text-indent: 0;
    border-color: inherit;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  legend {
    padding: 0;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  summary {
    display: list-item;
  }


  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  button {
    background-color: transparent;
    background-image: none;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    line-height: 1.5;
  }

  body {
    font-family: inherit;
    line-height: inherit;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }

  hr {
    border-top-width: 1px;
  }

  img {
    border-style: solid;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: #9ca3af;
  }

  button,
  [role="button"] {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }


      @keyframes spin {
          to { 
            transform: rotate(360deg);
          }
        }
      @keyframes ping {
          75%, 100% { 
            transform: scale(2); opacity: 0;
          }
        }
      @keyframes pulse {
          50% { 
            opacity: .5;
          }
        }
      @keyframes bounce {
          0%, 100% { 
            transform: translateY(-25%); animationTimingFunction: cubic-bezier(0.8,0,1,1);
          }
        
          50% { 
            transform: none; animationTimingFunction: cubic-bezier(0,0,0.2,1);
          }
        }
* {
    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
  }
* {
  --tw-shadow: 0 0 #0000; }
`,x=h`
  body {
    -webkit-tap-highlight-color: ${"#8b5cf6"};
    ${{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}}
  }
`,k=()=>t(Fragment,null,w||(w=t(v,null)),y||(y=t(x,null))),_=b("button")(({variant:e,isSmall:t})=>[{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",borderRadius:"0.25rem","&:focus":{outline:"2px solid transparent",outlineOffset:"2px"},"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1",transform:"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",transitionDuration:"75ms"},{"&:hover, &:focus":{"--tw-scale-x":"1.05","--tw-scale-y":"1.05","--tw-text-opacity":"1",color:"rgba(251, 191, 36, var(--tw-text-opacity))"}},"primary"===e&&{"--tw-bg-opacity":"1",backgroundColor:"rgba(0, 0, 0, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-border-opacity":"1",borderColor:"rgba(0, 0, 0, var(--tw-border-opacity))"},"secondary"===e&&{borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(217, 119, 6, var(--tw-border-opacity))",boxShadow:"0 0.1em 0 0 rgba(0, 0, 0, 0.25)"},t?{fontSize:"0.875rem",lineHeight:"1.25rem"}:{fontSize:"1.125rem",lineHeight:"1.75rem"},{color:"#fff"}]);var z,S;const C=b("a")(()=>[{width:"8rem",marginBottom:"2.5rem",padding:"1.25rem",display:"block",opacity:"0.5","&:hover":{opacity:"1"}}]),j=()=>z||(z=t(C,{href:"https://github.com/ben-rogerson/twin.macro",target:"_blank",rel:"noopener noreferrer"},t(F,null))),F=()=>S||(S=t("svg",{fill:"black",viewBox:"0 0 100 35",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"m31.839 11.667c0-6.2223-3.3515-10.111-10.054-11.667 3.3514 2.3333 4.6082 5.0556 3.7704 8.1667-0.4781 1.7751-1.8653 3.0438-3.4009 4.4481-2.5016 2.2877-5.3968 4.9354-5.3968 10.718 0 6.2223 3.3515 10.111 10.054 11.667-3.3515-2.3333-4.6083-5.0556-3.7704-8.1667 0.478-1.775 1.8653-3.0438 3.4009-4.4481 2.5015-2.2877 5.3967-4.9354 5.3967-10.718z"}),t("path",{d:"m-2.7803e-7 11.667c1.4828e-7 -6.2223 3.3515-10.111 10.055-11.667-3.3515 2.3333-4.6083 5.0556-3.7705 8.1667 0.47806 1.7751 1.8653 3.0438 3.4009 4.4481 2.5016 2.2877 5.3968 4.9354 5.3968 10.718 0 6.2223-3.3515 10.111-10.054 11.667 3.3515-2.3333 4.6083-5.0556 3.7704-8.1667-0.47805-1.775-1.8653-3.0438-3.4009-4.4481-2.5015-2.2877-5.3967-4.9354-5.3967-10.718z"}),t("path",{d:"m50.594 15.872h-3.9481v7.6c0 2.0267 1.3373 1.995 3.9481 1.8683v3.0717c-5.2853 0.6333-7.3867-0.8233-7.3867-4.94v-7.6h-2.9292v-3.2933h2.9292v-4.2534l3.4386-1.0133v5.2667h3.9481v3.2933zm21.324-3.2933h3.6297l-4.9988 15.833h-3.3749l-3.3113-10.672-3.3431 10.672h-3.375l-4.9987-15.833h3.6297l3.0884 10.925 3.3431-10.925h3.2794l3.3113 10.925 3.1202-10.925zm7.8961-2.375c-1.2099 0-2.1969-1.0134-2.1969-2.185 0-1.2033 0.987-2.185 2.1969-2.185s2.1969 0.98167 2.1969 2.185c0 1.1717-0.987 2.185-2.1969 2.185zm-1.7193 18.208v-15.833h3.4386v15.833h-3.4386zm15.792-16.245c3.566 0 6.1131 2.4067 6.1131 6.5233v9.7217h-3.4386v-9.3733c0-2.4067-1.401-3.6734-3.566-3.6734-2.2606 0-4.0436 1.33-4.0436 4.56v8.4867h-3.4386v-15.833h3.4386v2.0266c1.0507-1.6466 2.77-2.4383 4.9351-2.4383z"})));var M,E;const A=b("div")({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",backgroundImage:"linear-gradient(to bottom, var(--tw-gradient-stops))","--tw-gradient-from":"#db00ff","--tw-gradient-stops":"var(--tw-gradient-from), var(--tw-gradient-to, rgba(219, 0, 255, 0))","--tw-gradient-to":"#0047ff"}),N=b("div")({display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",rowGap:"1.25rem"}),D=e=>{const{color:o}=e;return t(A,null,M||(M=t(N,null,t(_,{variant:"primary"},"Submit"),t(_,{variant:"secondary"},"Cancel"),t(_,{isSmall:!0},"Close"))),E||(E=t(j,null)),t("p",null,"You've selected ",o))};var I;!function(e,t,o,a){d.p=void 0,r=e,n=void 0,i=void 0}(t);export default e=>t(Fragment,null,I||(I=t(k,null)),t(D,e));
//# sourceMappingURL=index.m.js.map
