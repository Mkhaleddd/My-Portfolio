import{G as L,r as P,j as o}from"./index-CNsDLYlV.js";class l{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const R=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:R()},f=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},S=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=f(e);i.publicKey=r.publicKey,i.blockHeadless=r.blockHeadless,i.storageProvider=r.storageProvider,i.blockList=r.blockList,i.limitRate=r.limitRate,i.origin=r.origin||t},p=async(e,t,r={})=>{const s=await fetch(i.origin+e,{method:"POST",headers:r,body:t}),a=await s.text(),n=new l(s.status,a);if(s.ok)return n;throw n},g=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},T=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},y=e=>e.webdriver||!e.languages||e.languages.length===0,w=()=>new l(451,"Unavailable For Headless Browser"),H=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},F=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},E=(e,t)=>e instanceof FormData?e.get(t):e[t],v=(e,t)=>{if(F(e))return!1;H(e.list,e.watchVariable);const r=E(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},j=()=>new l(403,"Forbidden"),_=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},K=async(e,t,r)=>{const s=Number(await r.get(e)||0);return t-Date.now()+s},k=async(e,t,r)=>{if(!t.throttle||!r)return!1;_(t.throttle,t.id);const s=t.id||e;return await K(s,t.throttle,r)>0?!0:(await r.set(s,Date.now().toString()),!1)},x=()=>new l(429,"Too Many Requests"),V=async(e,t,r,s)=>{const a=f(s),n=a.publicKey||i.publicKey,d=a.blockHeadless||i.blockHeadless,m=i.storageProvider||a.storageProvider,u={...i.blockList,...a.blockList},b={...i.limitRate,...a.limitRate};return d&&y(navigator)?Promise.reject(w()):(g(n,e,t),T(r),r&&v(u,r)?Promise.reject(j()):await k(location.pathname,b,m)?Promise.reject(x()):p("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:n,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},q=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},B=e=>typeof e=="string"?document.querySelector(e):e,N=async(e,t,r,s)=>{const a=f(s),n=a.publicKey||i.publicKey,d=a.blockHeadless||i.blockHeadless,m=i.storageProvider||a.storageProvider,u={...i.blockList,...a.blockList},b={...i.limitRate,...a.limitRate};if(d&&y(navigator))return Promise.reject(w());const h=B(r);g(n,e,t),q(h);const c=new FormData(h);return v(u,c)?Promise.reject(j()):await k(location.pathname,b,m)?Promise.reject(x()):(c.append("lib_version","4.3.3"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n),p("/api/v1.0/email/send-form",c))},O={init:S,send:V,sendForm:N,EmailJSResponseStatus:l};function D(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"},child:[]}]})(e)}const I=()=>{const e=P.useRef(),t=r=>{r.preventDefault(),O.sendForm("service_8tan0jb","template_itrasqs",e.current,{publicKey:"Sy5KpsogNlOvR7R2s"}).then(s=>{console.log("success",s.text)},s=>{console.log("FAILED...",s.text)}),setDisable(s=>!s)};return o.jsx(o.Fragment,{children:o.jsxs("section",{id:"contacts","aria-labelledby":"contact",children:[o.jsx("h3",{id:"contact",children:"Got an idea on your mind,send it!"}),o.jsxs("form",{ref:e,onSubmit:t,className:"row-flex",children:[o.jsx("input",{type:"text",name:"name",placeholder:"Name",required:!0,"aria-describedby":"uidnote"}),o.jsx("input",{type:"email",name:"email",placeholder:"Email",required:!0}),o.jsx("textarea",{name:"message",placeholder:"Your Message",required:!0}),o.jsxs("button",{type:"submit",children:["Send ",o.jsx(D,{})]})]})]})})};export{I as default};