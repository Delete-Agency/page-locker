!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("page-locker",[],t):"object"==typeof exports?exports["page-locker"]=t():e["page-locker"]=t()}(this,(function(){return function(){"use strict";var e={809:function(e,t,o){function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var n;o.r(t),o.d(t,{lockClasses:function(){return n},PageLocker:function(){return r}}),function(e){e.simple="is-blocked",e.ios="is-blocked-touch"}(n||(n={}));var r=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_initialScrollPosition",0),i(this,"_retainers",{}),i(this,"_isLocked",!1),i(this,"_target",document.documentElement),i(this,"_isIOS",void 0),i(this,"_lockedClass",void 0),i(this,"lock",(function(e){t._retainers[e]=!0;var o=t._target,i=t._isIOS,n=t._lockedClass;t._isLocked||(i&&(t._initialScrollPosition=window.pageYOffset,o.style.top=-t._initialScrollPosition+"px"),o.classList.add(n),t._isLocked=!0)})),i(this,"unlock",(function(e){if(t._retainers[e]=!1,t._isUnlocked()&&t._isLocked){var o=t._target,i=t._isIOS,n=t._lockedClass;o.classList.remove(n),i&&(o.style.top="",o.scrollTo(0,t._initialScrollPosition)),t._isLocked=!1}})),i(this,"_isUnlocked",(function(){return Object.keys(t._retainers).every((function(e){return!1===t._retainers[e]}))})),this._isIOS=!!navigator.platform.match(/iPhone|iPod|iPad/),this._lockedClass=this._isIOS?n.ios:n.simple}}},t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={exports:{}};return e[i](n,n.exports,o),n.exports}return o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(809)}()}));
//# sourceMappingURL=index.js.map