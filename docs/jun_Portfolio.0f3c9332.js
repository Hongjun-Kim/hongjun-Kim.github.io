parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"YvtQ":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./scss/index.scss");var e=function(){console.log("Yo i am runnin")};document.addEventListener("readystatechange",function(e){"complete"===e.target.readyState&&t()});var t=function(){n()},n=function(){var e=document.querySelector(".burger"),t=document.querySelector(".nav-links"),n=document.querySelectorAll(".nav-links li");e.style.display||(t.classList.remove("open"),e.classList.remove("toggle"),n.forEach(function(e){e.classList.remove("fade")})),window.addEventListener("resize",function(){window.innerWidth>=768&&(t.classList.remove("open"),e.classList.remove("toggle"),n.forEach(function(e){e.classList.remove("fade")}))}),e.addEventListener("click",function(){t.classList.toggle("open"),n.forEach(function(e){e.classList.toggle("fade")}),e.classList.toggle("toggle")})};
},{"./scss/index.scss":"YvtQ"}]},{},["Focm"], null)
//# sourceMappingURL=jun_Portfolio.0f3c9332.js.map