!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/friends/",e(e.s=45)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(29)("wks"),o=n(30),i=n(0).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,e,n){"use strict";function r(t){return f[t]}function o(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}function i(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}function a(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}return d.test(t)?t.replace(p,r):t}function u(t){return!t&&0!==t||!(!m(t)||0!==t.length)}function s(t){var e=o({},t);return e._parent=t,e}function c(t,e){return t.path=e,t}function l(t,e){return(t?t+".":"")+e}e.__esModule=!0,e.extend=o,e.indexOf=i,e.escapeExpression=a,e.isEmpty=u,e.createFrame=s,e.blockParams=c,e.appendContextPath=l;var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},p=/[&<>"'`=]/g,d=/[&<>"'`=]/,v=Object.prototype.toString;e.toString=v;var h=function(t){return"function"==typeof t};h(/x/)&&(e.isFunction=h=function(t){return"function"==typeof t&&"[object Function]"===v.call(t)}),e.isFunction=h;var m=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===v.call(t)};e.isArray=m},function(t,e){var n=t.exports={version:"2.5.5"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(8),o=n(19);t.exports=n(10)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(0),o=n(3),i=n(7),a=n(5),u=n(14),s=function(t,e,n){var c,l,f,p=t&s.F,d=t&s.G,v=t&s.S,h=t&s.P,m=t&s.B,g=t&s.W,y=d?o:o[e]||(o[e]={}),_=y.prototype,x=d?r:v?r[e]:(r[e]||{}).prototype;d&&(n=e);for(c in n)(l=!p&&x&&void 0!==x[c])&&u(y,c)||(f=l?x[c]:n[c],y[c]=d&&"function"!=typeof x[c]?n[c]:m&&l?i(f,r):g&&x[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((y.virtual||(y.virtual={}))[c]=f,t&s.R&&_&&!_[c]&&a(_,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(13);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(4),o=n(53),i=n(54),a=Object.defineProperty;e.f=n(10)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(28)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports={}},function(t,e,n){"use strict";function r(t,e){var n=e&&e.loc,i=void 0,a=void 0;n&&(i=n.start.line,a=n.start.column,t+=" - "+i+":"+a);for(var u=Error.prototype.constructor.call(this,t),s=0;s<o.length;s++)this[o[s]]=u[o[s]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{n&&(this.lineNumber=i,Object.defineProperty?Object.defineProperty(this,"column",{value:a,enumerable:!0}):this.column=a)}catch(t){}}e.__esModule=!0;var o=["description","fileName","lineNumber","message","name","number","stack"];r.prototype=new Error,e.default=r,t.exports=e.default},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(9),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(61),o=n(17);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(16),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(29)("keys"),o=n(30);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(8).f,o=n(14),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=o(e),this.reject=o(n)}var o=n(13);t.exports.f=function(t){return new r(t)}},function(t,e,n){"use strict";var r=n(52)(!0);n(26)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(27),o=n(6),i=n(55),a=n(5),u=n(11),s=n(56),c=n(23),l=n(64),f=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,h,m,g){s(n,e,v);var y,_,x,w=function(t){if(!p&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},b=e+" Iterator",P="values"==h,S=!1,M=t.prototype,O=M[f]||M["@@iterator"]||h&&M[h],E=O||w(h),j=h?P?w("entries"):E:void 0,k="Array"==e?M.entries||O:O;if(k&&(x=l(k.call(new t)))!==Object.prototype&&x.next&&(c(x,b,!0),r||"function"==typeof x[f]||a(x,f,d)),P&&O&&"values"!==O.name&&(S=!0,E=function(){return O.call(this)}),r&&!g||!p&&!S&&M[f]||a(M,f,E),u[e]=E,u[b]=d,h)if(y={values:P?E:w("values"),keys:m?E:w("keys"),entries:j},g)for(_ in y)_ in M||i(M,_,y[_]);else o(o.P+o.F*(p||S),e,y);return y}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(17);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(11),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(37),o=n(1)("iterator"),i=n(11);t.exports=n(3).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(15),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},function(t,e,n){var r=n(4),o=n(13),i=n(1)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},function(t,e,n){var r,o,i,a=n(7),u=n(77),s=n(32),c=n(18),l=n(0),f=l.process,p=l.setImmediate,d=l.clearImmediate,v=l.MessageChannel,h=l.Dispatch,m=0,g={},y=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},_=function(t){y.call(t.data)};p&&d||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++m]=function(){u("function"==typeof t?t:Function(t),e)},r(m),m},d=function(t){delete g[t]},"process"==n(15)(f)?r=function(t){f.nextTick(a(y,t,1))}:h&&h.now?r=function(t){h.now(a(y,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=_,r=a(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+"","*")},l.addEventListener("message",_,!1)):r="onreadystatechange"in c("script")?function(t){s.appendChild(c("script")).onreadystatechange=function(){s.removeChild(this),y.call(t)}}:function(t){setTimeout(a(y,t,1),0)}),t.exports={set:p,clear:d}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(4),o=n(9),i=n(24);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){t.exports=n(84).default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},s.registerDefaultHelpers(this),c.registerDefaultDecorators(this)}e.__esModule=!0,e.HandlebarsEnvironment=o;var i=n(2),a=n(12),u=r(a),s=n(85),c=n(93),l=n(95),f=r(l);e.VERSION="4.1.2";e.COMPILER_REVISION=7;var p={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};e.REVISION_CHANGES=p;o.prototype={constructor:o,logger:f.default,log:f.default.log,registerHelper:function(t,e){if("[object Object]"===i.toString.call(t)){if(e)throw new u.default("Arg not supported with multiple helpers");i.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===i.toString.call(t))i.extend(this.partials,t);else{if(void 0===e)throw new u.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===i.toString.call(t)){if(e)throw new u.default("Arg not supported with multiple decorators");i.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var d=f.default.log;e.log=d,e.createFrame=i.createFrame,e.logger=f.default},function(t,e,n){"use strict";n(46),n(101),n(102),n(103),n(104)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return!!~t.querySelector(".name").textContent.toLowerCase().indexOf(e.toLowerCase())}function i(t,e){var n=t;do{if(n.classList.contains(e))return n}while(n=n.parentElement);return null}function a(t,e){for(var n=t;n=n.parentElement;)if(n.id===e)return n;return null}function u(t,e){return e.v="5.76",new h.default(function(n,r){VK.api(t,e,function(t){t.error?r(t.error):n(t.response)})})}function s(t,e){for(var n=0;n<t.length;n++)o(t[n],e.value)?t[n].style.display="":t[n].style.display="none"}function c(t,e,n){var r={items:t,open:e},o=m(r);n.innerHTML=o}var l=n(47),f=r(l),p=n(49),d=r(p),v=n(67),h=r(v),m=n(83),g=localStorage,y=document.querySelector("#filter-input-first"),_=document.querySelector("#filter-input-second"),x=document.querySelector(".close"),w=n(100);x.addEventListener("click",function(t){document.querySelector(".wrapper-content").style.display="none"}),VK.init({apiId:w.id}),function(){return new h.default(function(t,e){VK.Auth.login(function(n){n.session?t():e(new Error("Не удалось авторизоваться"))},2)})}().then(function(){return u("friends.get",{fields:"photo_100"})}).then(function(t){function e(t,e,n,r,o,i,a){o[t]=e[t],delete e[t],c(e,r,n),c(o,a,i),v=document.querySelectorAll("#left-list-wrap #first-list li"),h=document.querySelectorAll("#right-list-wrap #first-list li"),s(v,y),s(h,_)}for(var n=(0,d.default)(t.items),r=n.slice(0),o=0;o<r.length;o++)r[o].id=o;var u=[],l=document.querySelector("#left-list-wrap"),p=document.querySelector("#right-list-wrap");c(r,!0,l),(g.getItem("leftList")||g.getItem("rightList"))&&(r=JSON.parse(g.leftList),u=JSON.parse(g.rightList),r.forEach(function(t,e,n){t||delete n[e]}),u.forEach(function(t,e,n){t||delete n[e]}),c(r,!0,l),c(u,!1,p),v=document.querySelectorAll("#left-list-wrap #first-list li"),h=document.querySelectorAll("#right-list-wrap #first-list li"),s(v,y),s(h,_));var v=document.querySelectorAll("#left-list-wrap #first-list li"),h=document.querySelectorAll("#right-list-wrap #first-list li"),m=document.querySelector(".save");document.body.addEventListener("click",function(t){var n=i(t.target,"icon"),o=a(t.target,"left-list-wrap"),s=a(t.target,"right-list-wrap"),c=i(t.target,"list-elem"),f=void 0;c&&(f=c.id),n&&o?e(f,r,l,!0,u,p,!1):n&&s&&e(f,u,p,!1,r,l,!0)}),y.addEventListener("keyup",function(t){document.querySelectorAll("#first-list li");s(v,y)}),_.addEventListener("keyup",function(t){document.querySelectorAll("#list-second li");s(h,_)});var x=void 0;document.body.addEventListener("dragstart",function(t){var e=i(t.target,"list-elem"),n=i(t.target,"template-wrapper");e&&(x={startZone:n,node:e})}),document.body.addEventListener("dragover",function(t){t.preventDefault()}),document.body.addEventListener("drop",function(t){event.preventDefault();var n=i(t.target,"drag");i(t.target,"drop")&&"left-list-wrap"===x.startZone.id&&e(+x.node.id,r,l,!0,u,p,!1),n&&"right-list-wrap"===x.startZone.id&&e(+x.node.id,u,p,!1,r,l,!0),x={}}),m.addEventListener("click",function(t){g.leftList=(0,f.default)(r),g.rightList=(0,f.default)(u)})})},function(t,e,n){t.exports={default:n(48),__esModule:!0}},function(t,e,n){var r=n(3),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(50),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return Array.isArray(t)?t:(0,o.default)(t)}},function(t,e,n){t.exports={default:n(51),__esModule:!0}},function(t,e,n){n(25),n(65),t.exports=n(3).Array.from},function(t,e,n){var r=n(16),o=n(17);t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),s=r(n),c=u.length;return s<0||s>=c?t?"":void 0:(i=u.charCodeAt(s),i<55296||i>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):i:t?u.slice(s,s+2):a-56320+(i-55296<<10)+65536)}}},function(t,e,n){t.exports=!n(10)&&!n(28)(function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";var r=n(57),o=n(19),i=n(23),a={};n(5)(a,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(4),o=n(58),i=n(31),a=n(22)("IE_PROTO"),u=function(){},s=function(){var t,e=n(18)("iframe"),r=i.length;for(e.style.display="none",n(32).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[a]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(8),o=n(4),i=n(59);t.exports=n(10)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),u=a.length,s=0;u>s;)r.f(t,n=a[s++],e[n]);return t}},function(t,e,n){var r=n(60),o=n(31);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(14),o=n(20),i=n(62)(!1),a=n(22)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),s=0,c=[];for(n in u)n!=a&&r(u,n)&&c.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(20),o=n(21),i=n(63);t.exports=function(t){return function(e,n,a){var u,s=r(e),c=o(s.length),l=i(a,c);if(t&&n!=n){for(;c>l;)if((u=s[l++])!=u)return!0}else for(;c>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(16),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(14),o=n(33),i=n(22)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){"use strict";var r=n(7),o=n(6),i=n(33),a=n(34),u=n(35),s=n(21),c=n(66),l=n(36);o(o.S+o.F*!n(38)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,f,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,g=0,y=l(p);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==y||d==Array&&u(y))for(e=s(p.length),n=new d(e);e>g;g++)c(n,g,m?h(p[g],g):p[g]);else for(f=y.call(p),n=new d;!(o=f.next()).done;g++)c(n,g,m?a(f,h,[o.value,g],!0):o.value);return n.length=g,n}})},function(t,e,n){"use strict";var r=n(8),o=n(19);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){t.exports={default:n(68),__esModule:!0}},function(t,e,n){n(69),n(25),n(70),n(74),n(81),n(82),t.exports=n(3).Promise},function(t,e){},function(t,e,n){n(71);for(var r=n(0),o=n(5),i=n(11),a=n(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var c=u[s],l=r[c],f=l&&l.prototype;f&&!f[a]&&o(f,a,c),i[c]=i.Array}},function(t,e,n){"use strict";var r=n(72),o=n(73),i=n(11),a=n(20);t.exports=n(26)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r,o,i,a,u=n(27),s=n(0),c=n(7),l=n(37),f=n(6),p=n(9),d=n(13),v=n(75),h=n(76),m=n(39),g=n(40).set,y=n(78)(),_=n(24),x=n(41),w=n(42),b=s.TypeError,P=s.process,S=s.Promise,M="process"==l(P),O=function(){},E=o=_.f,j=!!function(){try{var t=S.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(O,O)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof e}catch(t){}}(),k=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},L=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,a,u=o?e.ok:e.fail,s=e.resolve,c=e.reject,l=e.domain;try{u?(o||(2==t._h&&C(t),t._h=1),!0===u?n=r:(l&&l.enter(),n=u(r),l&&(l.exit(),a=!0)),n===e.promise?c(b("Promise-chain cycle")):(i=k(n))?i.call(n,s,c):s(n)):c(r)}catch(t){l&&!a&&l.exit(),c(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&A(t)})}},A=function(t){g.call(s,function(){var e,n,r,o=t._v,i=T(t);if(i&&(e=x(function(){M?P.emit("unhandledRejection",o,t):(n=s.onunhandledrejection)?n({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=M||T(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},T=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){g.call(s,function(){var e;M?P.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},F=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),L(e,!0))},H=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw b("Promise can't be resolved itself");(e=k(t))?y(function(){var r={_w:n,_d:!1};try{e.call(t,c(H,r,1),c(F,r,1))}catch(t){F.call(r,t)}}):(n._v=t,n._s=1,L(n,!1))}catch(t){F.call({_w:n,_d:!1},t)}}};j||(S=function(t){v(this,S,"Promise","_h"),d(t),r.call(this);try{t(c(H,this,1),c(F,this,1))}catch(t){F.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(79)(S.prototype,{then:function(t,e){var n=E(m(this,S));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=M?P.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&L(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=c(H,t,1),this.reject=c(F,t,1)},_.f=E=function(t){return t===S||t===a?new i(t):o(t)}),f(f.G+f.W+f.F*!j,{Promise:S}),n(23)(S,"Promise"),n(80)("Promise"),a=n(3).Promise,f(f.S+f.F*!j,"Promise",{reject:function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(u||!j),"Promise",{resolve:function(t){return w(u&&this===a?S:this,t)}}),f(f.S+f.F*!(j&&n(38)(function(t){S.all(t).catch(O)})),"Promise",{all:function(t){var e=this,n=E(e),r=n.resolve,o=n.reject,i=x(function(){var n=[],i=0,a=1;h(t,!1,function(t){var u=i++,s=!1;n.push(void 0),a++,e.resolve(t).then(function(t){s||(s=!0,n[u]=t,--a||r(n))},o)}),--a||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=E(e),r=n.reject,o=x(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(7),o=n(34),i=n(35),a=n(4),u=n(21),s=n(36),c={},l={},e=t.exports=function(t,e,n,f,p){var d,v,h,m,g=p?function(){return t}:s(t),y=r(n,f,e?2:1),_=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(d=u(t.length);d>_;_++)if((m=e?y(a(v=t[_])[0],v[1]):y(t[_]))===c||m===l)return m}else for(h=g.call(t);!(v=h.next()).done;)if((m=o(h,y,v.value,e))===c||m===l)return m};e.BREAK=c,e.RETURN=l},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(0),o=n(40).set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,u=r.Promise,s="process"==n(15)(a);t.exports=function(){var t,e,n,c=function(){var r,o;for(s&&(r=a.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(s)n=function(){a.nextTick(c)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var l=u.resolve();n=function(){l.then(c)}}else n=function(){o.call(r,c)};else{var f=!0,p=document.createTextNode("");new i(c).observe(p,{characterData:!0}),n=function(){p.data=f=!f}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(5);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(0),o=n(3),i=n(8),a=n(10),u=n(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];a&&e&&!e[u]&&i.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict";var r=n(6),o=n(3),i=n(0),a=n(39),u=n(42);r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(6),o=n(24),i=n(41);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){var r=n(43);t.exports=(r.default||r).template({1:function(t,e,n,r,o,i,a){var u,s,c=null!=e?e:t.nullContext||{},l=n.helperMissing,f=t.escapeExpression;return'                   <li class="list-elem" draggable="true" id="'+f((s=null!=(s=n.id||(null!=e?e.id:e))?s:l,"function"==typeof s?s.call(c,{name:"id",hash:{},data:o}):s))+'">\r\n                       <div class="photo">\r\n                           <img src="'+f((s=null!=(s=n.photo_100||(null!=e?e.photo_100:e))?s:l,"function"==typeof s?s.call(c,{name:"photo_100",hash:{},data:o}):s))+'" alt="">   \r\n                       </div>\r\n                       <div class="name">'+f((s=null!=(s=n.first_name||(null!=e?e.first_name:e))?s:l,"function"==typeof s?s.call(c,{name:"first_name",hash:{},data:o}):s))+" "+f((s=null!=(s=n.last_name||(null!=e?e.last_name:e))?s:l,"function"==typeof s?s.call(c,{name:"last_name",hash:{},data:o}):s))+'</div>\r\n                       <div class="icon">\r\n                            <svg width="18" height="18">\r\n'+(null!=(u=n.if.call(c,null!=a[1]?a[1].open:a[1],{name:"if",hash:{},fn:t.program(2,o,0,i,a),inverse:t.program(4,o,0,i,a),data:o}))?u:"")+"                            </svg>\r\n                       </div>\r\n                   </li>\r\n"},2:function(t,e,n,r,o){return'                                    <use xlink:href="img/sprite.svg#add"></use>\r\n'},4:function(t,e,n,r,o){return'                                    <use xlink:href="img/sprite.svg#close"></use>\r\n'},compiler:[7,">= 4.0.0"],main:function(t,e,n,r,o,i,a){var u;return'        <ul id="first-list" class="friends-list">\r\n'+(null!=(u=n.each.call(null!=e?e:t.nullContext||{},null!=e?e.items:e,{name:"each",hash:{},fn:t.program(1,o,0,i,a),inverse:t.noop,data:o}))?u:"")+"        </ul>"},useData:!0,useDepths:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(){var t=new u.HandlebarsEnvironment;return d.extend(t,u),t.SafeString=c.default,t.Exception=f.default,t.Utils=d,t.escapeExpression=d.escapeExpression,t.VM=h,t.template=function(e){return h.template(e,t)},t}e.__esModule=!0;var a=n(44),u=o(a),s=n(96),c=r(s),l=n(12),f=r(l),p=n(2),d=o(p),v=n(97),h=o(v),m=n(98),g=r(m),y=i();y.create=i,g.default(y),y.default=y,e.default=y,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){a.default(t),s.default(t),l.default(t),p.default(t),v.default(t),m.default(t),y.default(t)}e.__esModule=!0,e.registerDefaultHelpers=o;var i=n(86),a=r(i),u=n(87),s=r(u),c=n(88),l=r(c),f=n(89),p=r(f),d=n(90),v=r(d),h=n(91),m=r(h),g=n(92),y=r(g)},function(t,e,n){"use strict";e.__esModule=!0;var r=n(2);e.default=function(t){t.registerHelper("blockHelperMissing",function(e,n){var o=n.inverse,i=n.fn;if(!0===e)return i(this);if(!1===e||null==e)return o(this);if(r.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):o(this);if(n.data&&n.ids){var a=r.createFrame(n.data);a.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:a}}return i(e,n)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(2),o=n(12),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(t){t.registerHelper("each",function(t,e){function n(e,n,i){c&&(c.key=e,c.index=n,c.first=0===n,c.last=!!i,l&&(c.contextPath=l+e)),s+=o(t[e],{data:c,blockParams:r.blockParams([t[e],e],[l+e,null])})}if(!e)throw new i.default("Must pass iterator to #each");var o=e.fn,a=e.inverse,u=0,s="",c=void 0,l=void 0;if(e.data&&e.ids&&(l=r.appendContextPath(e.data.contextPath,e.ids[0])+"."),r.isFunction(t)&&(t=t.call(this)),e.data&&(c=r.createFrame(e.data)),t&&"object"==typeof t)if(r.isArray(t))for(var f=t.length;u<f;u++)u in t&&n(u,u,u===t.length-1);else{var p=void 0;for(var d in t)t.hasOwnProperty(d)&&(void 0!==p&&n(p,u-1),p=d,u++);void 0!==p&&n(p,u-1,!0)}return 0===u&&(s=a(this)),s})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(12),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(2);e.default=function(t){t.registerHelper("if",function(t,e){return r.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||r.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),e[0]=o,t.log.apply(t,e)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",function(t,e){if(!t)return t;if("constructor"!==e||t.propertyIsEnumerable(e))return t[e]})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(2);e.default=function(t){t.registerHelper("with",function(t,e){r.isFunction(t)&&(t=t.call(this));var n=e.fn;if(r.isEmpty(t))return e.inverse(this);var o=e.data;return e.data&&e.ids&&(o=r.createFrame(e.data),o.contextPath=r.appendContextPath(e.data.contextPath,e.ids[0])),n(t,{data:o,blockParams:r.blockParams([t],[o&&o.contextPath])})})},t.exports=e.default},function(t,e,n){"use strict";function r(t){i.default(t)}e.__esModule=!0,e.registerDefaultDecorators=r;var o=n(94),i=function(t){return t&&t.__esModule?t:{default:t}}(o)},function(t,e,n){"use strict";e.__esModule=!0;var r=n(2);e.default=function(t){t.registerDecorator("inline",function(t,e,n,o){var i=t;return e.partials||(e.partials={},i=function(o,i){var a=n.partials;n.partials=r.extend({},a,e.partials);var u=t(o,i);return n.partials=a,u}),e.partials[o.args[0]]=o.fn,i})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(2),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=r.indexOf(o.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=o.lookupLevel(t),"undefined"!=typeof console&&o.lookupLevel(o.level)<=t){var e=o.methodMap[t];console[e]||(e="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[e].apply(console,r)}}};e.default=o,t.exports=e.default},function(t,e,n){"use strict";function r(t){this.string=t}e.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e.default=r,t.exports=e.default},function(t,e,n){"use strict";function r(t){var e=t&&t[0]||1,n=h.COMPILER_REVISION;if(e!==n){if(e<n){var r=h.REVISION_CHANGES[n],o=h.REVISION_CHANGES[e];throw new v.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new v.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}}function o(t,e){function n(n,r,o){o.hash&&(r=p.extend({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=e.VM.resolvePartial.call(this,n,r,o);var i=e.VM.invokePartial.call(this,n,r,o);if(null==i&&e.compile&&(o.partials[o.name]=e.compile(n,t.compilerOptions,e),i=o.partials[o.name](r,o)),null!=i){if(o.indent){for(var a=i.split("\n"),u=0,s=a.length;u<s&&(a[u]||u+1!==s);u++)a[u]=o.indent+a[u];i=a.join("\n")}return i}throw new v.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")}function r(e){function n(e){return""+t.main(o,e,o.helpers,o.partials,a,s,u)}var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=i.data;r._setup(i),!i.partial&&t.useData&&(a=c(e,a));var u=void 0,s=t.useBlockParams?[]:void 0;return t.useDepths&&(u=i.depths?e!=i.depths[0]?[e].concat(i.depths):i.depths:[e]),(n=l(t.main,n,o,i.depths||[],a,s))(e,i)}if(!e)throw new v.default("No environment passed to template");if(!t||!t.main)throw new v.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var o={strict:function(t,e){if(!(e in t))throw new v.default('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var n=t.length,r=0;r<n;r++)if(t[r]&&null!=t[r][e])return t[r][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:p.escapeExpression,invokePartial:n,fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,r,o){var a=this.programs[t],u=this.fn(t);return e||o||r||n?a=i(this,t,u,e,n,r,o):a||(a=this.programs[t]=i(this,t,u)),a},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=p.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};return r.isTop=!0,r._setup=function(n){n.partial?(o.helpers=n.helpers,o.partials=n.partials,o.decorators=n.decorators):(o.helpers=o.merge(n.helpers,e.helpers),t.usePartial&&(o.partials=o.merge(n.partials,e.partials)),(t.usePartial||t.useDecorators)&&(o.decorators=o.merge(n.decorators,e.decorators)))},r._child=function(e,n,r,a){if(t.useBlockParams&&!r)throw new v.default("must pass block params");if(t.useDepths&&!a)throw new v.default("must pass parent depths");return i(o,e,t[e],n,0,r,a)},r}function i(t,e,n,r,o,i,a){function u(e){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],u=a;return!a||e==a[0]||e===t.nullContext&&null===a[0]||(u=[e].concat(a)),n(t,e,t.helpers,t.partials,o.data||r,i&&[o.blockParams].concat(i),u)}return u=l(n,u,t,a,r,i),u.program=e,u.depth=a?a.length:0,u.blockParams=o||0,u}function a(t,e,n){return t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],t}function u(t,e,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var o=void 0;if(n.fn&&n.fn!==s&&function(){n.data=h.createFrame(n.data);var t=n.fn;o=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=h.createFrame(n.data),n.data["partial-block"]=r,t(e,n)},t.partials&&(n.partials=p.extend({},n.partials,t.partials))}(),void 0===t&&o&&(t=o),void 0===t)throw new v.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)}function s(){return""}function c(t,e){return e&&"root"in e||(e=e?h.createFrame(e):{},e.root=t),e}function l(t,e,n,r,o,i){if(t.decorator){var a={};e=t.decorator(e,a,n,r&&r[0],o,i,r),p.extend(e,a)}return e}e.__esModule=!0,e.checkRevision=r,e.template=o,e.wrapProgram=i,e.resolvePartial=a,e.invokePartial=u,e.noop=s;var f=n(2),p=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(f),d=n(12),v=function(t){return t&&t.__esModule?t:{default:t}}(d),h=n(44)},function(t,e,n){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e=void 0!==n?n:window,r=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=r),t}},t.exports=e.default}).call(e,n(99))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports={id:"7001532"}},function(t,e){},function(t,e,n){t.exports=n.p+"img/sprite.svg"},function(t,e,n){t.exports=n.p+"img/title.png"},function(t,e,n){var r=n(43);t.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,r,o){return'<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset="UTF-8">\r\n  <title></title>\r\n  <script src="http://vk.com/js/api/openapi.js"><\/script>\r\n  <link rel="stylesheet" href="./style.css">\r\n</head>\r\n<body>\r\n    <div class="friends-container">\r\n        <img src="./img/title.png" alt="image">\r\n\r\n        <div class="wrapper-content">\r\n            <header class="header">\r\n                <div class="header-title"><p>Выберите друзей</p></div>\r\n                <div class="close">\r\n                    <svg width="30" height="30">\r\n                        <use xlink:href="img/sprite.svg#close"></use>\r\n                    </svg>\r\n                </div>\r\n            </header>\r\n\r\n            <div class="maincontent">\r\n            <div class="drag">\r\n                <div class="friend-input">\r\n                    <div class="input-wrap">\r\n                        <svg width="15" height="15">\r\n                            <use xlink:href="img/sprite.svg#loupe"></use>\r\n                        </svg>\r\n                        <input id="filter-input-first" type="text" placeholder="Начните вводить имя друга">\r\n                    </div>\r\n                </div>\r\n                <p class="content-title">Ваши друзья</p>\r\n                <div id="left-list-wrap" class="template-wrapper">\r\n                </div>\r\n            </div>\r\n\r\n            <div class="drop">\r\n                <div class="friend-input">\r\n                    <div class="input-wrap">\r\n                        <input  id="filter-input-second" class="input-field--margin" type="text" placeholder="Начните вводить имя друга">\r\n                    </div>\r\n                </div>\r\n\r\n                <p class="content-title">Друзья в списке</p>\r\n                <div id="right-list-wrap" class="template-wrapper">\r\n                </div>\r\n            </div>\r\n            </div>\r\n\r\n            <footer class="footer">\r\n                <button class="save">Сохранить</button>\r\n            </footer>\r\n        </div>\r\n    </div>\r\n\r\n    <script src="./friendsFilter.js"><\/script>\r\n</body>\r\n</html>\r\n'},useData:!0})}]);