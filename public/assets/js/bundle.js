(()=>{"use strict";var n={122:(n,t,e)=>{e.d(t,{Z:()=>A});var o=e(15),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap);"]),i.push([n.id,"* {\n  box-sizing: border-box;\n}\n\nhtml, body {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Lato';\n  background: #F2F2F2;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 30pt;\n  color: #2F4858;\n  margin: 0px;\n  margin-top: 20px;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 20pt;\n  color: #2F4858;\n}\n\n.container {\n  display: block;\n  max-width: 700px;\n  padding: 20px 15px;\n  margin: auto;\n  text-align: center;\n}\n\n.pass-generator, .pass-options {\n  border-radius: 10px;\n  background: white;\n  border: 1px solid #EEE;\n  box-shadow: 0px 15px 15px -10px rgba(0,0,0,0.05);\n  margin-bottom: 20px;\n}\n\n.controls {\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n}\n\n.controls .pass {\n  font-size: 25pt;\n  display: block;\n  text-align: left;\n  flex-grow: 1;\n}\n\n.controls a {\n  padding: 10px;\n}\n\n.controls img {\n  max-width: 25px;\n}\n\n.security-range {\n  display: block;\n  width: 100%;\n  height: 10px;\n  border-radius: 30px;\n  background: #F7F7F7;\n  position: relative;\n}\n\n.pass-security {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  height: 100%;\n  width: 0%;\n  background: #2ecc71;\n  border-radius: 30px;\n  transition: all 0.5s;\n}\n\n.pass-security.alert {\n  background-color: #f1c40f;\n}\n\n.pass-security.danger {\n  background-color: #c0392b;\n}\n\n.pass-options .options {\n  padding: 20px;\n}\n\n.controls .refresh {\n  transition: transform 0.1s;\n}\n\n.controls .refresh.active {\n  animation: rotating 0.5s ease-in-out;\n}\n\n.controls .copy {\n  transition: transform 0.5s;\n}\n\n.controls .copy:active {\n  transform: scale(0.8);\n}\n\n@keyframes rotating {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.character-limit input {\n  font-size: 14pt;\n  padding: 10px;\n}\n\n.two-columns {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.two-columns label {\n  flex-grow: 1;\n  min-width: 50%;\n  padding: 15px;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-size: 12pt;\n}\n\n.two-columns input[type=\"checkbox\"] {\n  height: 20px;\n  width: 20px;\n  margin-right: 10px;\n}\n\n.notification {\n  position: fixed;\n  bottom: -100%;\n  left: 50%;\n  background: white;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #EEE;\n  font-size: 14pt;\n  font-weight: bold;\n  transform: translate(-50%,0);\n  box-shadow: 0px 15px 15px -10px rgba(0,0,0,0.05);\n  border-bottom: 2px solid #2ecc71;\n  opacity: 0;\n  transform: all 0.5s;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,sBAAsB;EACtB,gDAAgD;EAChD,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,YAAY;EACZ,SAAS;EACT,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,SAAS;EACT,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,iBAAiB;EACjB,4BAA4B;EAC5B,gDAAgD;EAChD,gCAAgC;EAChC,UAAU;EACV,mBAAmB;AACrB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');\n\n* {\n  box-sizing: border-box;\n}\n\nhtml, body {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Lato';\n  background: #F2F2F2;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 30pt;\n  color: #2F4858;\n  margin: 0px;\n  margin-top: 20px;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 20pt;\n  color: #2F4858;\n}\n\n.container {\n  display: block;\n  max-width: 700px;\n  padding: 20px 15px;\n  margin: auto;\n  text-align: center;\n}\n\n.pass-generator, .pass-options {\n  border-radius: 10px;\n  background: white;\n  border: 1px solid #EEE;\n  box-shadow: 0px 15px 15px -10px rgba(0,0,0,0.05);\n  margin-bottom: 20px;\n}\n\n.controls {\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n}\n\n.controls .pass {\n  font-size: 25pt;\n  display: block;\n  text-align: left;\n  flex-grow: 1;\n}\n\n.controls a {\n  padding: 10px;\n}\n\n.controls img {\n  max-width: 25px;\n}\n\n.security-range {\n  display: block;\n  width: 100%;\n  height: 10px;\n  border-radius: 30px;\n  background: #F7F7F7;\n  position: relative;\n}\n\n.pass-security {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  height: 100%;\n  width: 0%;\n  background: #2ecc71;\n  border-radius: 30px;\n  transition: all 0.5s;\n}\n\n.pass-security.alert {\n  background-color: #f1c40f;\n}\n\n.pass-security.danger {\n  background-color: #c0392b;\n}\n\n.pass-options .options {\n  padding: 20px;\n}\n\n.controls .refresh {\n  transition: transform 0.1s;\n}\n\n.controls .refresh.active {\n  animation: rotating 0.5s ease-in-out;\n}\n\n.controls .copy {\n  transition: transform 0.5s;\n}\n\n.controls .copy:active {\n  transform: scale(0.8);\n}\n\n@keyframes rotating {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.character-limit input {\n  font-size: 14pt;\n  padding: 10px;\n}\n\n.two-columns {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.two-columns label {\n  flex-grow: 1;\n  min-width: 50%;\n  padding: 15px;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-size: 12pt;\n}\n\n.two-columns input[type=\"checkbox\"] {\n  height: 20px;\n  width: 20px;\n  margin-right: 10px;\n}\n\n.notification {\n  position: fixed;\n  bottom: -100%;\n  left: 50%;\n  background: white;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #EEE;\n  font-size: 14pt;\n  font-weight: bold;\n  transform: translate(-50%,0);\n  box-shadow: 0px 15px 15px -10px rgba(0,0,0,0.05);\n  border-bottom: 2px solid #2ecc71;\n  opacity: 0;\n  transform: all 0.5s;\n}"],sourceRoot:""}]);const A=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var A=0;A<n.length;A++){var s=[].concat(n[A]);o&&r[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},15:n=>{function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}n.exports=function(n){var e,o,r=(o=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],o=!0,r=!1,a=void 0;try{for(var i,A=n[Symbol.iterator]();!(o=(i=A.next()).done)&&(e.push(i.value),!t||e.length!==t);o=!0);}catch(n){r=!0,a=n}finally{try{o||null==A.return||A.return()}finally{if(r)throw a}}return e}}(e,o)||function(n,e){if(n){if("string"==typeof n)return t(n,e);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(n,e):void 0}}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[1],i=r[3];if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),c="/*# ".concat(s," */"),l=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(l).concat([c]).join("\n")}return[a].join("\n")}},379:(n,t,e)=>{var o,r=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function i(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function A(n,t){for(var e={},o=[],r=0;r<n.length;r++){var A=n[r],s=t.base?A[0]+t.base:A[0],c=e[s]||0,l="".concat(s," ").concat(c);e[s]=c+1;var p=i(l),d={css:A[1],media:A[2],sourceMap:A[3]};-1!==p?(a[p].references++,a[p].updater(d)):a.push({identifier:l,updater:m(d,t),references:1}),o.push(l)}return o}function s(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var a=e.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var i=r(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,l=(c=[],function(n,t){return c[n]=t,c.filter(Boolean).join("\n")});function p(n,t,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(t,r);else{var a=document.createTextNode(r),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(a,i[t]):n.appendChild(a)}}function d(n,t,e){var o=e.css,r=e.media,a=e.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var u=null,f=0;function m(n,t){var e,o,r;if(t.singleton){var a=f++;e=u||(u=s(t)),o=p.bind(null,e,a,!1),r=p.bind(null,e,a,!0)}else e=s(t),o=d.bind(null,e,t),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=A(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var r=i(e[o]);a[r].references--}for(var s=A(n,t),c=0;c<e.length;c++){var l=i(e[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=s}}}}},t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return n[o](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=e(379),t=e.n(n),o=e(122);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var r=function(n,t){return Math.floor(Math.random()*(t-n)+n)},a=".+-*/,@#$%&()=/?{}[]",i=function(){return a[r(0,a.length)]};var A=document.querySelector(".pass"),s=document.querySelector(".length-pass"),c=document.querySelector(".chkUpperCase"),l=document.querySelector(".chkLowerCase"),p=document.querySelector(".chkNumbers"),d=document.querySelector(".chkSimbols"),u=document.querySelector(".pass-security"),f=document.querySelector(".refresh"),m=document.querySelector(".copy"),E=document.querySelector(".notification");function g(){var n=function(n,t,e,o,a){for(var A=[],s=0;s<n;s++)t&&A.push(String.fromCharCode(r(65,91))),e&&A.push(String.fromCharCode(r(97,123))),o&&A.push(String.fromCharCode(r(48,58))),a&&A.push(i());return A.sort((function(){return Math.random()-.5})).join("").slice(0,n)}(s.value,c.checked,l.checked,p.checked,d.checked);return function(n){if(n<10){var t=n/100*1e3;u.style.width=t+"%",n<4?(u.classList.add("danger"),u.classList.remove("alert")):n<8?(u.classList.add("alert"),u.classList.remove("danger")):(u.classList.remove("alert"),u.classList.remove("danger"))}else u.style.width="100%"}(s.value),n}A.innerHTML=g(),document.addEventListener("change",(function(n){"checkbox"===n.target.type&&(A.innerHTML=g())})),s.addEventListener("change",(function(n){n.preventDefault(),A.innerHTML=g()})),f.addEventListener("click",(function(n){n.preventDefault(),f.classList.add("active"),setTimeout((function(){f.classList.remove("active")}),500),A.innerHTML=g()})),m.addEventListener("click",(function(n){n.preventDefault();var t=window.getSelection(),e=document.createRange();e.selectNodeContents(A),t.removeAllRanges(),t.addRange(e),document.execCommand("copy"),clearTimeout(o),E.style.bottom="20px",E.style.opacity="1";var o=setTimeout((function(){E.style.bottom="-100%",E.style.opacity="0"}),5e3)}))})()})();
//# sourceMappingURL=bundle.js.map