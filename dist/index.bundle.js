!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(self,(function(){return(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var t,n,o,r,i={},l=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(e,t){for(var n in t)e[n]=t[n];return e}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function c(e,t,n){var o,r,i,l=arguments,a={};for(i in t)"key"==i?o=t[i]:"ref"==i?r=t[i]:a[i]=t[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(l[i]);if(null!=n&&(a.children=n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===a[i]&&(a[i]=e.defaultProps[i]);return u(e,a,o,r,null)}function u(e,n,o,r,i){var l={type:e,props:n,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++t.__v:i};return null!=t.vnode&&t.vnode(l),l}function p(e){return e.children}function d(e,t){this.props=e,this.context=t}function f(e,t){if(null==t)return e.__?f(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?f(e):null}function h(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return h(e)}}function m(e){(!e.__d&&(e.__d=!0)&&n.push(e)&&!v.__r++||r!==t.debounceRendering)&&((r=t.debounceRendering)||o)(v)}function v(){for(var e;v.__r=n.length;)e=n.sort((function(e,t){return e.__v.__b-t.__v.__b})),n=[],e.some((function(e){var t,n,o,r,i,l;e.__d&&(i=(r=(t=e).__v).__e,(l=t.__P)&&(n=[],(o=s({},r)).__v=r.__v+1,C(l,r,o,t.__n,void 0!==l.ownerSVGElement,null!=r.__h?[i]:null,n,null==i?f(r):i,r.__h),z(n,r),r.__e!=i&&h(r)))}))}function g(e,t,n,o,r,a,s,_,c,d){var h,m,v,g,w,k,x,S=o&&o.__k||l,z=S.length;for(n.__k=[],h=0;h<t.length;h++)if(null!=(g=n.__k[h]=null==(g=t[h])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?u(null,g,null,null,g):Array.isArray(g)?u(p,{children:g},null,null,null):g.__b>0?u(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(v=S[h])||v&&g.key==v.key&&g.type===v.type)S[h]=void 0;else for(m=0;m<z;m++){if((v=S[m])&&g.key==v.key&&g.type===v.type){S[m]=void 0;break}v=null}C(e,g,v=v||i,r,a,s,_,c,d),w=g.__e,(m=g.ref)&&v.ref!=m&&(x||(x=[]),v.ref&&x.push(v.ref,null,g),x.push(m,g.__c||w,g)),null!=w?(null==k&&(k=w),"function"==typeof g.type&&null!=g.__k&&g.__k===v.__k?g.__d=c=b(g,c,e):c=y(e,g,v,S,w,c),d||"option"!==n.type?"function"==typeof n.type&&(n.__d=c):e.value=""):c&&v.__e==c&&c.parentNode!=e&&(c=f(v))}for(n.__e=k,h=z;h--;)null!=S[h]&&("function"==typeof n.type&&null!=S[h].__e&&S[h].__e==n.__d&&(n.__d=f(o,h+1)),M(S[h],S[h]));if(x)for(h=0;h<x.length;h++)E(x[h],x[++h],x[++h])}function b(e,t,n){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,t="function"==typeof r.type?b(r,t,n):y(n,r,r,e.__k,r.__e,t));return t}function y(e,t,n,o,r,i){var l,a,s;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),l=null;else{for(a=i,s=0;(a=a.nextSibling)&&s<o.length;s+=2)if(a==r)break e;e.insertBefore(r,i),l=i}return void 0!==l?l:r.nextSibling}function w(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||a.test(t)?n:n+"px"}function k(e,t,n,o,r){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||w(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||w(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o||e.addEventListener(t,i?S:x,i):e.removeEventListener(t,i?S:x,i);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function x(e){this.l[e.type+!1](t.event?t.event(e):e)}function S(e){this.l[e.type+!0](t.event?t.event(e):e)}function C(e,n,o,r,i,l,a,_,c){var u,f,h,m,v,b,y,w,k,x,S,C=n.type;if(void 0!==n.constructor)return null;null!=o.__h&&(c=o.__h,_=n.__e=o.__e,n.__h=null,l=[_]),(u=t.__b)&&u(n);try{e:if("function"==typeof C){if(w=n.props,k=(u=C.contextType)&&r[u.__c],x=u?k?k.props.value:u.__:r,o.__c?y=(f=n.__c=o.__c).__=f.__E:("prototype"in C&&C.prototype.render?n.__c=f=new C(w,x):(n.__c=f=new d(w,x),f.constructor=C,f.render=N),k&&k.sub(f),f.props=w,f.state||(f.state={}),f.context=x,f.__n=r,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=C.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=s({},f.__s)),s(f.__s,C.getDerivedStateFromProps(w,f.__s))),m=f.props,v=f.state,h)null==C.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==C.getDerivedStateFromProps&&w!==m&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(w,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(w,f.__s,x)||n.__v===o.__v){f.props=w,f.state=f.__s,n.__v!==o.__v&&(f.__d=!1),f.__v=n,n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),f.__h.length&&a.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(w,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(m,v,b)}))}f.context=x,f.props=w,f.state=f.__s,(u=t.__r)&&u(n),f.__d=!1,f.__v=n,f.__P=e,u=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(r=s(s({},r),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(b=f.getSnapshotBeforeUpdate(m,v)),S=null!=u&&u.type===p&&null==u.key?u.props.children:u,g(e,Array.isArray(S)?S:[S],n,o,r,i,l,a,_,c),f.base=n.__e,n.__h=null,f.__h.length&&a.push(f),y&&(f.__E=f.__=null),f.__e=!1}else null==l&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=j(o.__e,n,o,r,i,l,a,c);(u=t.diffed)&&u(n)}catch(e){n.__v=null,(c||null!=l)&&(n.__e=_,n.__h=!!c,l[l.indexOf(_)]=null),t.__e(e,n,o)}}function z(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function j(e,t,n,o,r,a,s,c){var u,p,d,f,h=n.props,m=t.props,v=t.type,b=0;if("svg"===v&&(r=!0),null!=a)for(;b<a.length;b++)if((u=a[b])&&(u===e||(v?u.localName==v:3==u.nodeType))){e=u,a[b]=null;break}if(null==e){if(null===v)return document.createTextNode(m);e=r?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,m.is&&m),a=null,c=!1}if(null===v)h===m||c&&e.data===m||(e.data=m);else{if(a=a&&l.slice.call(e.childNodes),p=(h=n.props||i).dangerouslySetInnerHTML,d=m.dangerouslySetInnerHTML,!c){if(null!=a)for(h={},f=0;f<e.attributes.length;f++)h[e.attributes[f].name]=e.attributes[f].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(function(e,t,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in t||k(e,i,null,n[i],o);for(i in t)r&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||k(e,i,t[i],n[i],o)}(e,m,h,r,c),d)t.__k=[];else if(b=t.props.children,g(e,Array.isArray(b)?b:[b],t,n,o,r&&"foreignObject"!==v,a,s,e.firstChild,c),null!=a)for(b=a.length;b--;)null!=a[b]&&_(a[b]);c||("value"in m&&void 0!==(b=m.value)&&(b!==e.value||"progress"===v&&!b)&&k(e,"value",b,h.value,!1),"checked"in m&&void 0!==(b=m.checked)&&b!==e.checked&&k(e,"checked",b,h.checked,!1))}return e}function E(e,n,o){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,o)}}function M(e,n,o){var r,i,l;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||E(r,null,n)),o||"function"==typeof e.type||(o=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&M(r[l],n,o);null!=i&&_(i)}function N(e,t,n){return this.constructor(e,n)}t={__e:function(e,t){for(var n,o,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return n.__E=n}catch(t){e=t}throw e},__v:0},d.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(s({},n),this.props)),e&&s(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},d.prototype.render=p,n=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v.__r=0;var P=function(e){var t,n=e.selector,o=e.inline,r=e.clientSpecified,i=[],l=document.currentScript||(t=document.getElementsByTagName("script"))[t.length-1];if(!0===o){var a=l.parentNode;i.push(a)}return!0!==r||n||(n=function(e){var t=e.attributes,n=null;return Object.keys(t).forEach((function(e){t.hasOwnProperty(e)&&"data-mount-in"===t[e].name&&(n=t[e].nodeValue)})),n}(l)),n&&[].forEach.call(document.querySelectorAll(n),(function(e){i.push(e)})),i},T=function(e,n,o,r,a){n.forEach((function(n){var s=n;if(!s._habitat){s._habitat=!0;var _=function(e,t){void 0===t&&(t={});var n=e.attributes,o=Object.assign({},t);return Object.keys(n).forEach((function(e){if(n.hasOwnProperty(e)){var t=n[e].name;if(!t||"string"!=typeof t)return!1;var r=t.split(/(data-props?-)/).pop()||"";if(t!==(r=r.replace(/-([a-z])/gi,(function(e,t){return t.toUpperCase()})))){var i=n[e].nodeValue;o[r]=i}}})),[].forEach.call(e.getElementsByTagName("script"),(function(e){var t={};if(e.hasAttribute("type")){if("text/props"!==e.getAttribute("type")&&"application/json"!==e.getAttribute("type"))return;try{t=JSON.parse(e.innerHTML)}catch(e){throw new Error(e)}Object.assign(o,t)}})),o}(n,a)||a;return r&&(s.innerHTML=""),function(e,n,o){var r,a,s;t.__&&t.__(e,n),a=(r="function"==typeof o)?null:o&&o.__k||n.__k,s=[],C(n,e=(!r&&o||n).__k=c(p,null,[e]),a||i,i,void 0!==n.ownerSVGElement,!r&&o?[o]:a?null:n.firstChild?l.slice.call(n.childNodes):null,s,!r&&o?o:a?a.__e:n.firstChild,r),z(s,e)}(c(e,_),s,o)}}))};let A,L,O,U={data:""},D=e=>{if("undefined"!=typeof window){let t=e?e.querySelector("#_goober"):window._goober;return t||(t=(e||document.head).appendChild(document.createElement("style")),t.innerHTML=" ",t.id="_goober"),t.firstChild}return e||U},F=/(?:([A-Z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,H=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,I=(e,t)=>{let n,o="",r="",i="";for(let l in e){let a=e[l];"object"==typeof a?(n=t?t.replace(/([^,])+/g,(e=>l.replace(/([^,])+/g,(t=>/&/g.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):l,r+="@"==l[0]?"f"==l[1]?I(a,l):l+"{"+I(a,"k"==l[1]?"":t)+"}":I(a,n)):"@"==l[0]&&"i"==l[1]?o=l+" "+a+";":i+=I.p?I.p(l.replace(/[A-Z]/g,"-$&").toLowerCase(),a):l.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+a+";"}return i[0]?(n=t?t+"{"+i+"}":i,o+n+r):o+r},B={},R=e=>{let t="";for(let n in e)t+=n+("object"==typeof e[n]?R(e[n]):e[n]);return t},W=(e,t,n,o,r)=>{let i="object"==typeof e?R(e):e,l=B[i]||(B[i]="go"+i.split("").reduce(((e,t)=>101*e+t.charCodeAt(0)>>>0),11));if(!B[l]){let t="object"==typeof e?e:(e=>{let t,n=[{}];for(;t=F.exec(e.replace(H,""));)t[4]&&n.shift(),t[3]?n.unshift(n[0][t[3]]=n[0][t[3]]||{}):t[4]||(n[0][t[1]]=t[2]);return n[0]})(e);B[l]=I(r?{["@keyframes "+l]:t}:t,n?"":"."+l)}return((e,t,n)=>{-1==t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(B[l],t,o),l},$=(e,t,n)=>e.reduce(((e,o,r)=>{let i=t[r];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":I(e,""):e}return e+o+(null==i?"":i)}),"");function Y(e){let t=this||{},n=e.call?e(t.p):e;return W(n.unshift?n.raw?$(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>n?Object.assign(e,n.call?n(t.p):n):e),{}):n,D(t.target),t.g,t.o,t.k)}function V(e,t){let n=this||{};return function(){let o=arguments;function r(i,l){let a=Object.assign({},i),s=a.className||r.className;n.p=Object.assign({theme:L&&L()},a),n.o=/ *go\d+/g.test(s),a.className=Y.apply(n,o)+(s?" "+s:""),t&&(a.ref=l);let _=a.as||e;return O&&_[0]&&O(a),A(_,a)}return t?t(r):r}}function q(){const e=V.call({g:1},"div").apply(null,arguments);return function(t){return e(t),null}}function G(e,n,o,r,i){var l={};for(var a in n)"ref"!=a&&(l[a]=n[a]);var s,_,c={type:e,props:l,key:o,ref:n&&n.ref,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:++t.__v,__source:r,__self:i};if("function"==typeof e&&(s=e.defaultProps))for(_ in s)void 0===l[_]&&(l[_]=s[_]);return t.vnode&&t.vnode(c),c}Y.bind({g:1}),Y.bind({k:1}),Y.bind({g:1});const X=q`
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
`,Z=q`
  body {
    -webkit-tap-highlight-color: ${"#8b5cf6"};
    ${{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}}
  }
`,J=()=>G(p,{children:[G(X,{}),G(Z,{})]}),K=V("button")((({variant:e,isSmall:t})=>[{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",borderRadius:"0.25rem","&:focus":{outline:"2px solid transparent",outlineOffset:"2px"},"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1",transform:"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",transitionDuration:"75ms"},{"&:hover, &:focus":{"--tw-scale-x":"1.05","--tw-scale-y":"1.05","--tw-text-opacity":"1",color:"rgba(251, 191, 36, var(--tw-text-opacity))"}},"primary"===e&&{"--tw-bg-opacity":"1",backgroundColor:"rgba(0, 0, 0, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-border-opacity":"1",borderColor:"rgba(0, 0, 0, var(--tw-border-opacity))"},"secondary"===e&&{borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(217, 119, 6, var(--tw-border-opacity))",boxShadow:"0 0.1em 0 0 rgba(0, 0, 0, 0.25)"},t?{fontSize:"0.875rem",lineHeight:"1.25rem"}:{fontSize:"1.125rem",lineHeight:"1.75rem"},{color:"#fff"}])),Q=V("a")((()=>[{width:"8rem",marginBottom:"2.5rem",padding:"1.25rem",display:"block",opacity:"0.5","&:hover":{opacity:"1"}}])),ee=()=>G("svg",{fill:"black",viewBox:"0 0 100 35",xmlns:"http://www.w3.org/2000/svg",children:[G("path",{d:"m31.839 11.667c0-6.2223-3.3515-10.111-10.054-11.667 3.3514 2.3333 4.6082 5.0556 3.7704 8.1667-0.4781 1.7751-1.8653 3.0438-3.4009 4.4481-2.5016 2.2877-5.3968 4.9354-5.3968 10.718 0 6.2223 3.3515 10.111 10.054 11.667-3.3515-2.3333-4.6083-5.0556-3.7704-8.1667 0.478-1.775 1.8653-3.0438 3.4009-4.4481 2.5015-2.2877 5.3967-4.9354 5.3967-10.718z"}),G("path",{d:"m-2.7803e-7 11.667c1.4828e-7 -6.2223 3.3515-10.111 10.055-11.667-3.3515 2.3333-4.6083 5.0556-3.7705 8.1667 0.47806 1.7751 1.8653 3.0438 3.4009 4.4481 2.5016 2.2877 5.3968 4.9354 5.3968 10.718 0 6.2223-3.3515 10.111-10.054 11.667 3.3515-2.3333 4.6083-5.0556 3.7704-8.1667-0.47805-1.775-1.8653-3.0438-3.4009-4.4481-2.5015-2.2877-5.3967-4.9354-5.3967-10.718z"}),G("path",{d:"m50.594 15.872h-3.9481v7.6c0 2.0267 1.3373 1.995 3.9481 1.8683v3.0717c-5.2853 0.6333-7.3867-0.8233-7.3867-4.94v-7.6h-2.9292v-3.2933h2.9292v-4.2534l3.4386-1.0133v5.2667h3.9481v3.2933zm21.324-3.2933h3.6297l-4.9988 15.833h-3.3749l-3.3113-10.672-3.3431 10.672h-3.375l-4.9987-15.833h3.6297l3.0884 10.925 3.3431-10.925h3.2794l3.3113 10.925 3.1202-10.925zm7.8961-2.375c-1.2099 0-2.1969-1.0134-2.1969-2.185 0-1.2033 0.987-2.185 2.1969-2.185s2.1969 0.98167 2.1969 2.185c0 1.1717-0.987 2.185-2.1969 2.185zm-1.7193 18.208v-15.833h3.4386v15.833h-3.4386zm15.792-16.245c3.566 0 6.1131 2.4067 6.1131 6.5233v9.7217h-3.4386v-9.3733c0-2.4067-1.401-3.6734-3.566-3.6734-2.2606 0-4.0436 1.33-4.0436 4.56v8.4867h-3.4386v-15.833h3.4386v2.0266c1.0507-1.6466 2.77-2.4383 4.9351-2.4383z"})]}),te=()=>G(Q,{href:"https://github.com/ben-rogerson/twin.macro",target:"_blank",rel:"noopener noreferrer",children:G(ee,{})}),ne=V("div")({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",backgroundImage:"linear-gradient(to bottom, var(--tw-gradient-stops))","--tw-gradient-from":"hsl(253, 54%, 25%)","--tw-gradient-stops":"var(--tw-gradient-from), var(--tw-gradient-to, rgba(44.24249999999995, 29.325, 98.175, 0))","--tw-gradient-to":"hsl(253, 54%, 15%)","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}),oe=V("div")({display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",rowGap:"1.25rem"}),re=e=>{const{champion:t}=e;return G(ne,{children:[G(oe,{children:[G(K,{variant:"primary",children:"Submit"}),G(K,{variant:"secondary",children:"Cancel"}),G(K,{isSmall:!0,children:"Close"})]}),G(te,{}),G("p",{children:["You've selected ",t]})]})};!function(e,t,n,o){I.p=void 0,A=e,L=void 0,O=void 0}(c);const{render:ie}=(le=e=>G(p,{children:[G(J,{}),G(re,{...e})]}),{render:function(e){void 0===e&&(e={});var t=e.selector;void 0===t&&(t=null);var n=e.inline;void 0===n&&(n=!1);var o=e.clean;void 0===o&&(o=!1);var r=e.clientSpecified;void 0===r&&(r=!1);var i=e.defaultProps;void 0===i&&(i={});var l=P({selector:t,inline:n,clientSpecified:r}),a=function(){if(l.length>0){var e=P({selector:t,inline:n,clientSpecified:r});return T(le,e,null,o,i)}};a(),document.addEventListener("DOMContentLoaded",a),document.addEventListener("load",a)}});var le;return ie({selector:'[data-moba-widget="build"]',clean:!0}),e})()}));
//# sourceMappingURL=index.bundle.js.map