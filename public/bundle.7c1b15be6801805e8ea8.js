(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"/**\r\n * Body CSS\r\n */\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nhtml,\r\nbody,\r\ninput,\r\ntextarea,\r\nbutton {\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n}\r\n\r\n/**\r\n * Sidebar CSS\r\n */\r\n\r\n#sidebar {\r\n  background-color: #2196F3;\r\n  padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  #sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 180px;\r\n    height: 100%;\r\n    padding-top: 30px;\r\n  }\r\n}\r\n\r\n\r\n/**\r\n * Content CSS\r\n */\r\n@media (min-width: 768px) {\r\n  #content {\r\n    margin-left: 180px;\r\n  }\r\n}\r\n\r\n.author {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.floating-btn {\r\n  position: fixed;\r\n  bottom: 50px;\r\n  right: 50px;\r\n}\r\n\r\n.modal{\r\n  max-width: 600px;\r\n  max-height: 300px;\r\n  margin: 100px auto;\r\n  overflow-y: auto;\r\n  background: #fff;\r\n}\r\n\r\n.modal > h1 {\r\n  text-align: center;\r\n}\r\n\r\n.modal .modal-content {\r\n  padding: 1rem;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}\r\n\r\n.side-font {\r\n  font-size: 1rem;\r\n}\r\n",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],u=r.base?d[0]+r.base:d[0],l=a[u]||0,c="".concat(u," ").concat(l);a[u]=l+1;var p=n(c),f={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:c,updater:o(f,r),references:1}),i.push(c)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{class e{static create(n){return fetch("https://faq-js-app-default-rtdb.europe-west1.firebasedatabase.app/question.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}}).then((e=>e.json())).then((e=>(n.id=e.name,n))).then(t).then(e.renderList)}static fetch(e){return e?fetch(`https://faq-js-app-default-rtdb.europe-west1.firebasedatabase.app/question.json?auth=${e}`).then((e=>e.json())).then((e=>e&&e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((t=>({...e[t],id:t}))):[])):Promise.resolve('<p class="error">У вас нет токена</p>')}static renderList(){const e=r(),t=e.length?e.map(o).join(""):'<div class="mui--text-headline">У вас пока нет вопросов</div>';document.getElementById("list").innerHTML=t}static listToHTML(e){return e.length?`<ol>${e.map((e=>`<li>${e.text}</li>`)).join("")}</ol>`:"<p>У вас нет вопросов</p>"}}function t(e){const t=r();t.push(e),localStorage.setItem("questions",JSON.stringify(t))}function r(){return JSON.parse(localStorage.getItem("questions")||"[]")}function o(e){return`\n    <div class="mui--text-black-54">\n      ${new Date(e.date).toLocaleDateString()}\n      ${new Date(e.date).toLocaleTimeString()}\n     </div>\n      <div>${e.text}</div>\n      <br>\n  `}function a(e){return e.length>=10}function i(e,t){const n=document.createElement("div");n.classList.add("modal");const r=`\n     <h1>${e}</h1>\n     <div class="modal-content">${t}</div>`;n.innerHTML=r,mui.overlay("on",n)}var s=n(379),d=n.n(s),u=n(795),l=n.n(u),c=n(569),p=n.n(c),f=n(565),m=n.n(f),h=n(216),v=n.n(h),b=n(589),g=n.n(b),y=n(28),x={};x.styleTagTransform=g(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=v(),d()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;const S=document.getElementById("form"),w=document.getElementById("modal-btn"),T=S.querySelector("#question-input"),E=S.querySelector("#submit");function L(t){t.preventDefault();const n=t.target.querySelector("button"),r=t.target.querySelector("#email").value,o=t.target.querySelector("#password").value;n.disabled=!0,function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3l0L8UIm4Fk-0SvM3Mhp_Cjcz1ERO_5E\n",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(r,o).then(e.fetch).then(j).then((()=>n.disabled=!1))}function j(t){"string"==typeof t?i("Ошибка",t):i("Список вопросов",e.listToHTML(t))}window.addEventListener("load",e.renderList),S.addEventListener("submit",(function(t){if(t.preventDefault(),a(T.value)){const t={text:T.value.trim(),date:(new Date).toJSON()};E.disabled=!0,e.create(t).then((()=>{T.value="",T.className="",E.disabled=!1}))}})),w.addEventListener("click",(function(){i("Авторизация",'\n    <form class="mui-form" id="auth-form">\n        <div class="mui-textfield mui-textfield--float-label">\n          <input type="email" id="email" required>\n          <label for="email">Email</label>\n        </div>\n        <div class="mui-textfield mui-textfield--float-label">\n          <input type="password" id="password" required>\n          <label for="password">Пароль</label>\n        </div>\n        <button\n          type="submit"\n          class="mui-btn mui-btn--raised mui-btn--primary"\n          >\n          Войти\n        </button>\n      </form>\n  '),document.getElementById("auth-form").addEventListener("submit",L,{once:!0})})),T.addEventListener("input",(()=>{E.disabled=!a(T.value)}))})()})();