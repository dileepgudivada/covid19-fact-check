function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function l(t){return null==t?"":t}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),p=u?t=>requestAnimationFrame(t):t;const d=new Set;function h(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&p(h)}function m(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function x(){return w(" ")}function E(){return w("")}function _(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function S(t){return function(e){return e.preventDefault(),t.call(this,e)}}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function R(t){return Array.from(t.childNodes)}function A(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?v(e):b(e)}function C(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return w(e)}function P(t){return C(t," ")}function L(t,e){e=""+e,t.data!==e&&(t.data=e)}function q(t,e){(null!=e||t.value)&&(t.value=e)}function N(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function O(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function j(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function U(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=document.createElement("object");let r;return n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.type="text/html",n.tabIndex=-1,n.onload=()=>{r=n.contentDocument.defaultView,r.addEventListener("resize",e)},/Trident/.test(navigator.userAgent)?(t.appendChild(n),n.data="about:blank"):(n.data="about:blank",t.appendChild(n)),{cancel:()=>{r&&r.removeEventListener&&r.removeEventListener("resize",e),t.removeChild(n)}}}function z(t,e,n){t.classList[n?"add":"remove"](e)}let D,M,T=0,I={};function B(t,e,n,r,o,s,a,c=0){const i=16.666/r;let l="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*s(t);l+=100*t+`%{${a(r,1-r)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`;if(!I[f]){if(!D){const t=b("style");document.head.appendChild(t),D=t.sheet}I[f]=!0,D.insertRule(`@keyframes ${f} ${u}`,D.cssRules.length)}const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${o}ms 1 both`,T+=1,f}function J(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--T&&p(()=>{if(T)return;let t=D.cssRules.length;for(;t--;)D.deleteRule(t);I={}})}function V(t){M=t}function K(){if(!M)throw new Error("Function called outside component initialization");return M}function F(t){K().$$.on_mount.push(t)}const H=[],G=[],W=[],X=[],Q=Promise.resolve();let Y=!1;function Z(t){W.push(t)}function tt(t){X.push(t)}let et=!1;const nt=new Set;function rt(){if(!et){et=!0;do{for(let t=0;t<H.length;t+=1){const e=H[t];V(e),ot(e.$$)}for(H.length=0;G.length;)G.pop()();for(let t=0;t<W.length;t+=1){const e=W[t];nt.has(e)||(nt.add(e),e())}W.length=0}while(H.length);for(;X.length;)X.pop()();Y=!1,et=!1,nt.clear()}}function ot(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}let st;function at(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const ct=new Set;let it;function lt(){it={r:0,c:[],p:it}}function ut(){it.r||s(it.c),it=it.p}function ft(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function pt(t,e,n,r){if(t&&t.o){if(ct.has(t))return;ct.add(t),it.c.push(()=>{ct.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const dt={duration:0};function ht(n,r,o,c){let i=r(n,o),l=c?0:1,u=null,m=null,g=null;function $(){g&&J(n,g)}function y(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(r){const{delay:o=0,duration:a=300,easing:c=e,tick:b=t,css:v}=i||dt,w={start:f()+o,b:r};r||(w.group=it,it.r+=1),u?m=w:(v&&($(),g=B(n,l,r,a,o,c,v)),r&&b(0,1),u=y(w,a),Z(()=>at(n,r,"start")),function(t){let e;0===d.size&&p(h),new Promise(n=>{d.add(e={c:t,f:n})})}(t=>{if(m&&t>m.start&&(u=y(m,a),m=null,at(n,u.b,"start"),v&&($(),g=B(n,l,u.b,u.duration,0,c,i.css))),u)if(t>=u.end)b(l=u.b,1-l),at(n,u.b,"end"),m||(u.b?$():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*c(e/u.duration),b(l,1-l)}return!(!u&&!m)}))}return{run(t){a(i)?(st||(st=Promise.resolve(),st.then(()=>{st=null})),st).then(()=>{i=i(),b(t)}):b(t)},end(){$(),u=m=null}}}function mt(t,e){pt(t,1,1,()=>{e.delete(t.key)})}function gt(t,e,n,r,o,s,a,c,i,l,u,f){let p=t.length,d=s.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,y=new Map;for(h=d;h--;){const t=f(o,s,h),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=l(c,t),i.c()),$.set(c,g[h]=i),c in m&&y.set(c,Math.abs(h-m[c]))}const b=new Set,v=new Set;function w(t){ft(t,1),t.m(c,u),a.set(t.key,t),u=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],r=e.key,o=n.key;e===n?(u=e.first,p--,d--):$.has(o)?!a.has(r)||b.has(r)?w(e):v.has(o)?p--:y.get(r)>y.get(o)?(v.add(r),w(e)):(b.add(o),p--):(i(n,a),p--)}for(;p--;){const e=t[p];$.has(e.key)||i(e,a)}for(;d;)w(g[d-1]);return g}function $t(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function yt(t){return"object"==typeof t&&null!==t?t:{}}function bt(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function vt(t){t&&t.c()}function wt(t,e){t&&t.l(e)}function xt(t,e,n){const{fragment:o,on_mount:c,on_destroy:i,after_update:l}=t.$$;o&&o.m(e,n),Z(()=>{const e=c.map(r).filter(a);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(Z)}function Et(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){-1===t.$$.dirty[0]&&(H.push(t),Y||(Y=!0,Q.then(rt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function St(e,n,r,a,c,i,l=[-1]){const u=M;V(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let d=!1;p.ctx=r?r(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&_t(e,t)),n}):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l(R(n.target)):p.fragment&&p.fragment.c(),n.intro&&ft(e.$$.fragment),xt(e,n.target,n.anchor),rt()),V(u)}class kt{$destroy(){Et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Rt=[];function At(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!Rt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Rt.push(n,e)}if(t){for(let t=0;t<Rt.length;t+=2)Rt[t][0](Rt[t+1]);Rt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const Ct={},Pt=()=>({});function Lt(t){let e;const n=t[1].default,r=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(n,t,t[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&1&e&&r.p(i(n,t,t[0],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(n,t[0],e,null))},i(t){e||(ft(r,t),e=!0)},o(t){pt(r,t),e=!1},d(t){r&&r.d(t)}}}function qt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class Nt extends kt{constructor(t){super(),St(this,t,qt,Lt,c,{})}}function Ot(t){let e,n,r=t[1].stack+"";return{c(){e=b("pre"),n=w(r)},l(t){e=A(t,"PRE",{});var o=R(e);n=C(o,r),o.forEach($)},m(t,r){g(t,e,r),m(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&L(n,r)},d(t){t&&$(e)}}}function jt(e){let n,r,o,s,a,c,i,l,u,f=e[1].message+"";document.title=n=e[0];let p=e[2]&&e[1].stack&&Ot(e);return{c(){r=x(),o=b("h1"),s=w(e[0]),a=x(),c=b("p"),i=w(f),l=x(),p&&p.c(),u=E()},l(t){(function(t,e=document.body){return Array.from(e.querySelectorAll(t))})('[data-svelte="svelte-1moakz"]',document.head).forEach($),r=P(t),o=A(t,"H1",{});var n=R(o);s=C(n,e[0]),n.forEach($),a=P(t),c=A(t,"P",{});var d=R(c);i=C(d,f),d.forEach($),l=P(t),p&&p.l(t),u=E()},m(t,e){g(t,r,e),g(t,o,e),m(o,s),g(t,a,e),g(t,c,e),m(c,i),g(t,l,e),p&&p.m(t,e),g(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&L(s,t[0]),2&e&&f!==(f=t[1].message+"")&&L(i,f),t[2]&&t[1].stack?p?p.p(t,e):(p=Ot(t),p.c(),p.m(u.parentNode,u)):p&&(p.d(1),p=null)},i:t,o:t,d(t){t&&$(r),t&&$(o),t&&$(a),t&&$(c),t&&$(l),p&&p.d(t),t&&$(u)}}}function Ut(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class zt extends kt{constructor(t){super(),St(this,t,Ut,jt,c,{status:0,error:1})}}function Dt(t){let e,r;const o=[t[4].props];var s=t[4].component;function a(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}if(s)var c=new s(a());return{c(){c&&vt(c.$$.fragment),e=E()},l(t){c&&wt(c.$$.fragment,t),e=E()},m(t,n){c&&xt(c,t,n),g(t,e,n),r=!0},p(t,n){const r=16&n?$t(o,[yt(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){lt();const t=c;pt(t.$$.fragment,1,0,()=>{Et(t,1)}),ut()}s?(vt((c=new s(a())).$$.fragment),ft(c.$$.fragment,1),xt(c,e.parentNode,e)):c=null}else s&&c.$set(r)},i(t){r||(c&&ft(c.$$.fragment,t),r=!0)},o(t){c&&pt(c.$$.fragment,t),r=!1},d(t){t&&$(e),c&&Et(c,t)}}}function Mt(t){let e;const n=new zt({props:{error:t[0],status:t[1]}});return{c(){vt(n.$$.fragment)},l(t){wt(n.$$.fragment,t)},m(t,r){xt(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(ft(n.$$.fragment,t),e=!0)},o(t){pt(n.$$.fragment,t),e=!1},d(t){Et(n,t)}}}function Tt(t){let e,n,r,o;const s=[Mt,Dt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=E()},l(t){n.l(t),r=E()},m(t,n){a[e].m(t,n),g(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(lt(),pt(a[i],1,1,()=>{a[i]=null}),ut(),n=a[e],n||(n=a[e]=s[e](t),n.c()),ft(n,1),n.m(r.parentNode,r))},i(t){o||(ft(n),o=!0)},o(t){pt(n),o=!1},d(t){a[e].d(t),t&&$(r)}}}function It(t){let e;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Tt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=n(o,r[t]);const s=new Nt({props:o});return{c(){vt(s.$$.fragment)},l(t){wt(s.$$.fragment,t)},m(t,n){xt(s,t,n),e=!0},p(t,[e]){const n=12&e?$t(r,[4&e&&{segment:t[2][0]},8&e&&yt(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){e||(ft(s.$$.fragment,t),e=!0)},o(t){pt(s.$$.fragment,t),e=!1},d(t){Et(s,t)}}}function Bt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=Ct,u=r,K().$$.context.set(l,u),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)},[o,s,a,c,i,r]}class Jt extends kt{constructor(t){super(),St(this,t,Bt,It,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Vt=[],Kt=[{js:()=>import("./index.20583c37.js"),css:["index.20583c37.css"]}],Ft=[{pattern:/^\/$/,parts:[{i:0}]}];const Ht="undefined"!=typeof __SAPPER__&&__SAPPER__;let Gt,Wt,Xt,Qt=!1,Yt=[],Zt="{}";const te={page:At({}),preloading:At(null),session:At(Ht&&Ht.session)};let ee,ne;te.session.subscribe(async t=>{if(ee=t,!Qt)return;ne=!0;const e=ue(new URL(location.href)),n=Wt={},{redirect:r,props:o,branch:s}=await he(e);n===Wt&&await de(r,s,o,e.page)});let re,oe=null;let se,ae=1;const ce="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},ie={};function le(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function ue(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ht.baseUrl))return null;let e=t.pathname.slice(Ht.baseUrl.length);if(""===e&&(e="/"),!Vt.some(t=>t.test(e)))for(let n=0;n<Ft.length;n+=1){const r=Ft[n],o=r.pattern.exec(e);if(o){const n=le(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function fe(){return{x:pageXOffset,y:pageYOffset}}async function pe(t,e,n,r){if(e)se=e;else{const t=fe();ie[se]=t,e=se=++ae,ie[se]=n?t:{x:0,y:0}}se=e,Gt&&te.preloading.set(!0);const o=oe&&oe.href===t.href?oe.promise:he(t);oe=null;const s=Wt={},{redirect:a,props:c,branch:i}=await o;if(s===Wt&&(await de(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=ie[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}ie[se]=t,t&&scrollTo(t.x,t.y)}}async function de(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=ue(new URL(t,document.baseURI));return n?(ce[e.replaceState?"replaceState":"pushState"]({id:se},"",t),pe(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(te.page.set(r),te.preloading.set(!1),Gt)Gt.$set(n);else{n.stores={page:{subscribe:te.page.subscribe},preloading:{subscribe:te.preloading.subscribe},session:te.session},n.level0={props:await Xt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ge(t.nextSibling);ge(t),ge(e)}Gt=new Jt({target:re,props:n,hydrate:!0})}Yt=e,Zt=JSON.stringify(r.query),Qt=!0,ne=!1}async function he(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Xt||(Xt=Ht.preloaded[0]||Pt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},ee));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Zt)return!0;const o=Yt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!ne&&!u&&Yt[c]&&Yt[c].part===e.i)return Yt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(me);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Kt[e.i]);let m;return m=Qt||!Ht.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ee):{}:Ht.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function me(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function ge(t){t.parentNode.removeChild(t)}function $e(t){const e=ue(new URL(t,document.baseURI));if(e)return oe&&t===oe.href||function(t,e){oe={href:t,promise:e}}(t,he(e)),oe.promise}let ye;function be(t){clearTimeout(ye),ye=setTimeout(()=>{ve(t)},20)}function ve(t){const e=xe(t.target);e&&"prefetch"===e.rel&&$e(e.href)}function we(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=xe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=ue(o);if(s){pe(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),ce.pushState({id:se},"",o.href)}}function xe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ee(t){if(ie[se]=fe(),t.state){const e=ue(new URL(location.href));e?pe(e,t.state.id):location.href=location.href}else ae=ae+1,function(t){se=t}(ae),ce.replaceState({id:se},"",location.href)}var _e;_e={target:document.querySelector("main")},"scrollRestoration"in ce&&(ce.scrollRestoration="manual"),function(t){re=t}(_e.target),addEventListener("click",we),addEventListener("popstate",Ee),addEventListener("touchstart",ve),addEventListener("mousemove",be),Promise.resolve().then(()=>{const{hash:t,href:e}=location;ce.replaceState({id:ae},"",e);const n=new URL(location.href);if(Ht.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Ht;Xt||(Xt=s&&s[0]),de(null,[],{error:c,status:a,session:o,level0:{props:Xt},level1:{props:{status:a,error:c},component:zt},segments:s},{host:e,path:n,query:le(r),params:{}})}();const r=ue(n);return r?pe(r,ae,!0,t):void 0});export{Et as A,lt as B,ut as C,gt as D,s as E,F,S as G,mt as H,Z as I,ht as J,$t as K,yt as L,U as M,a as N,n as O,G as P,j as Q,q as R,kt as S,z as T,O as U,bt as V,N as W,tt as X,St as a,g as b,b as c,$ as d,E as e,x as f,A as g,R as h,e as i,C as j,P as k,k as l,m,L as n,y as o,v as p,t as q,_ as r,c as s,w as t,ft as u,vt as v,wt as w,l as x,xt as y,pt as z};