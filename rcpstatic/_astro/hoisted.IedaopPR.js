function _(){var e=0,t=0;const n=document.querySelector(".header");function o(){var r=window.scrollY;Math.abs(e-r)>=t&&(r>e?(n.classList.add("scroll-direction-down"),n.classList.remove("scroll-direction-up")):(n.classList.remove("scroll-direction-down"),n.classList.add("scroll-direction-up")),e=r,r>t?(n.classList.add("scroll-scrolled"),n.classList.remove("scroll-on-the-top")):(n.classList.remove("scroll-scrolled"),n.classList.add("scroll-on-the-top")))}window.addEventListener("scroll",o)}function Z(e,t){e?(t.classList.add("active"),document.querySelector(".mobile-nav").classList.add("active")):(t.classList.remove("active"),document.querySelector(".mobile-nav").classList.remove("active"))}function $(){let e=document.querySelector(".hamburger"),t=!1;e.addEventListener("click",function(){t=!t,Z(t,e)})}_();$();document.addEventListener("astro:after-swap",()=>window.scrollTo({left:0,top:0,behavior:"instant"}));document.addEventListener("astro:after-swap",_);document.addEventListener("astro:after-swap",$);const b="data-astro-transition-persist";function ee(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function te(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function ne(e){for(const t of Array.from(document.head.children)){const n=ie(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function oe(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${b}]`)){const o=n.getAttribute(b),r=e.querySelector(`[${b}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&se(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const re=()=>{const e=document.activeElement;if(e?.closest(`[${b}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>R({activeElement:e,start:t,end:n})}return()=>R({activeElement:e})}else return()=>R({activeElement:null})},R=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},ie=(e,t)=>{const n=e.getAttribute(b),o=n&&t.head.querySelector(`[${b}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},se=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},ae=e=>{ee(e),te(e),ne(e);const t=re();oe(e.body,document.body),t()},ce="astro:before-preparation",le="astro:after-preparation",ue="astro:before-swap",de="astro:after-swap",fe=e=>document.dispatchEvent(new Event(e));class U extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,s,u,a,l,d,c){super(t,n),this.from=o,this.to=r,this.direction=s,this.navigationType=u,this.sourceElement=a,this.info=l,this.newDocument=d,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class me extends U{formData;loader;constructor(t,n,o,r,s,u,a,l,d,c){super(ce,{cancelable:!0},t,n,o,r,s,u,a,l),this.formData=d,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class he extends U{direction;viewTransition;swap;constructor(t,n){super(ue,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>ae(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function we(e,t,n,o,r,s,u,a,l){const d=new me(e,t,n,o,r,s,window.document,u,a,l);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(fe(le),d.navigationType!=="traverse"&&D({scrollX,scrollY}))),d}function pe(e,t){const n=new he(e,t);return document.dispatchEvent(n),n.swap(),n}const ve=history.pushState.bind(history),T=history.replaceState.bind(history),D=e=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...e},""))},x=!!document.startViewTransition,I=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),B=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let f,p,A;const V=e=>document.dispatchEvent(new Event(e)),W=()=>V("astro:page-load"),be=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},H="data-astro-transition-persist",M="data-astro-transition",k="data-astro-transition-fallback";let O,g=0;history.state?(g=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):I()&&(T({index:g,scrollX,scrollY},""),history.scrollRestoration="manual");async function ge(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function j(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ye(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const s=new Promise(u=>{o.onload=o.onerror=u});e=e.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const K=(e,t,n,o,r)=>{const s=B(t,e),u=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const l=history.state;T({...n.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else ve({...n.state,index:++g,scrollX:0,scrollY:0},"",e.href);if(document.title=u,A=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const l=history.state;location.href=e.href,history.state||(T(l,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Te(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${H}="${n.getAttribute(H)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return t}async function C(e,t,n,o,r){async function s(l){function d(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(k,l);const w=document.getAnimations().filter(h=>!c.includes(h)&&!d(h));return Promise.allSettled(w.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await s("old")}catch{}const u=document.title,a=pe(e,n.viewTransition);K(a.to,a.from,t,u,o),V(de),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Ee(){return f?.controller.abort(),f={controller:new AbortController}}async function G(e,t,n,o,r){const s=Ee();if(!I()||location.origin!==n.origin){s===f&&(f=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&D({scrollX,scrollY}),B(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){K(n,t,o,document.title,r),s===f&&(f=void 0);return}const a=await we(t,n,e,u,o.sourceElement,o.info,s.controller.signal,o.formData,l);if(a.defaultPrevented||a.signal.aborted){s===f&&(f=void 0),a.signal.aborted||(location.href=n.href);return}async function l(i){const w=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const v=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=v?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await ge(w,h);if(m===null){i.preventDefault();return}if(m.redirected){const v=new URL(m.redirected);if(v.origin!==i.to.origin){i.preventDefault();return}i.to=v}if(O??=new DOMParser,i.newDocument=O.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(v=>v.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const L=Te(i.newDocument);L.length&&!i.signal.aborted&&await Promise.all(L)}async function d(){if(p&&p.viewTransition){try{p.viewTransition.skipTransition()}catch{}try{await p.viewTransition.updateCallbackDone}catch{}}return p={transitionSkipped:!1}}const c=await d();if(a.signal.aborted){s===f&&(f=void 0);return}if(document.documentElement.setAttribute(M,a.direction),x)c.viewTransition=document.startViewTransition(async()=>await C(a,o,c,r));else{const i=(async()=>{await Promise.resolve(),await C(a,o,c,r,j())})();c.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(w=>c.viewTransitionFinished=w),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(k)}}}c.viewTransition.updateCallbackDone.finally(async()=>{await ye(),W(),be()}),c.viewTransition.finished.finally(()=>{c.viewTransition=void 0,c===p&&(p=void 0),s===f&&(f=void 0),document.documentElement.removeAttribute(M),document.documentElement.removeAttribute(k)});try{await c.viewTransition.updateCallbackDone}catch(i){const w=i;console.log("[astro]",w.name,w.message,w.stack)}}async function F(e,t){await G("forward",A,new URL(e,location.href),t??{})}function Ae(e){if(!I()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>g?"forward":"back";g=n,G(o,A,new URL(location.href),{},t)}const q=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&D({scrollX,scrollY})};{if(x||j()!=="none")if(A=new URL(location.href),addEventListener("popstate",Ae),addEventListener("load",W),"onscrollend"in window)addEventListener("scrollend",q);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,q();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const z=new Set,E=new WeakSet;let P,J,Y=!1;function Se(e){Y||(Y=!0,P??=e?.prefetchAll,J??=e?.defaultStrategy??"hover",Le(),Re(),ke(),De())}function Le(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{y(t.target,"tap")&&S(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Re(){let e;document.body.addEventListener("focusin",o=>{y(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),N(()=>{for(const o of document.getElementsByTagName("a"))E.has(o)||y(o,"hover")&&(E.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{S(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function ke(){let e;N(()=>{for(const t of document.getElementsByTagName("a"))E.has(t)||y(t,"viewport")&&(E.add(t),e??=Pe(),e.observe(t))})}function Pe(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,s=e.get(r);o.isIntersecting?(s&&clearTimeout(s),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),S(r.href)},300))):s&&(clearTimeout(s),e.delete(r))}})}function De(){N(()=>{for(const e of document.getElementsByTagName("a"))y(e,"load")&&S(e.href)})}function S(e,t){const n=t?.ignoreSlowConnection??!1;if(xe(e,n))if(z.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function xe(e,t){if(!navigator.onLine||!t&&Q())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!z.has(e)}catch{}return!1}function y(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||P)&&Q()?!0:n==null&&P||n===""?t===J:n===t}function Q(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function N(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Ie(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function X(e){return e.dataset.astroReload!==void 0}(x||Ie()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;X(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),F(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||X(t))return;const n=t,o=e.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??s??location.pathname;const l=o?.getAttribute("formmethod")??u??"get";if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:o??n};if(l==="get"){const c=new URLSearchParams(r),i=new URL(a);i.search=c.toString(),a=i.toString()}else d.formData=r;e.preventDefault(),F(a,d)}),Se({prefetchAll:!0}));
