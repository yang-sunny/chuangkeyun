!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="//pub.idqqimg.com/qqun/xiaoqu/mobile/js/",b(0)}([function(a,b){"use strict";var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d=function(){function a(a){return null==a?String(a):V[W.call(a)]||"object"}function b(b){return"function"==a(b)}function d(a){return null!=a&&a==a.window}function e(a){return null!=a&&a.nodeType==a.DOCUMENT_NODE}function f(b){return"object"==a(b)}function g(a){return f(a)&&!d(a)&&Object.getPrototypeOf(a)==Object.prototype}function h(a){return"number"==typeof a.length}function i(a){return E.call(a,function(a){return null!=a})}function j(a){return a.length>0?y.fn.concat.apply([],a):a}function k(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(a){return a in H?H[a]:H[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function m(a,b){return"number"!=typeof b||I[k(a)]?b:b+"px"}function n(a){var b,c;return G[a]||(b=F.createElement(a),F.body.appendChild(b),c=getComputedStyle(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),"none"==c&&(c="block"),G[a]=c),G[a]}function o(a){return"children"in a?D.call(a.children):y.map(a.childNodes,function(a){if(1==a.nodeType)return a})}function p(a,b,c){for(x in b)c&&(g(b[x])||$(b[x]))?(g(b[x])&&!g(a[x])&&(a[x]={}),$(b[x])&&!$(a[x])&&(a[x]=[]),p(a[x],b[x],c)):b[x]!==w&&(a[x]=b[x])}function q(a,b){return null==b?y(a):y(a).filter(b)}function r(a,c,d,e){return b(c)?c.call(a,d,e):c}function s(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)}function t(a,b){var c=a.className,d=c&&c.baseVal!==w;return b===w?d?c.baseVal:c:void(d?c.baseVal=b:a.className=b)}function u(a){var b;try{return a?"true"==a||"false"!=a&&("null"==a?null:/^0/.test(a)||isNaN(b=Number(a))?/^[\[\{]/.test(a)?y.parseJSON(a):a:b):a}catch(c){return a}}function v(a,b){b(a);for(var c in a.childNodes)v(a.childNodes[c],b)}var w,x,y,z,A,B,C=[],D=C.slice,E=C.filter,F=window.document,G={},H={},I={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},J=/^\s*<(\w+|!)[^>]*>/,K=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,L=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,M=/^(?:body|html)$/i,N=/([A-Z])/g,O=["val","css","html","text","data","width","height","offset"],P=["after","prepend","before","append"],Q=F.createElement("table"),R=F.createElement("tr"),S={tr:F.createElement("tbody"),tbody:Q,thead:Q,tfoot:Q,td:R,th:R,"*":F.createElement("div")},T=/complete|loaded|interactive/,U=/^[\w-]*$/,V={},W=V.toString,X={},Y=F.createElement("div"),Z={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},$=Array.isArray||function(a){return a instanceof Array};return X.matches=function(a,b){if(!b||!a||1!==a.nodeType)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=Y).appendChild(a),d=~X.qsa(e,b).indexOf(a),f&&Y.removeChild(a),d},A=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},B=function(a){return E.call(a,function(b,c){return a.indexOf(b)==c})},X.fragment=function(a,b,c){var d,e,f;return K.test(a)&&(d=y(F.createElement(RegExp.$1))),d||(a.replace&&(a=a.replace(L,"<$1></$2>")),b===w&&(b=J.test(a)&&RegExp.$1),b in S||(b="*"),f=S[b],f.innerHTML=""+a,d=y.each(D.call(f.childNodes),function(){f.removeChild(this)})),g(c)&&(e=y(d),y.each(c,function(a,b){O.indexOf(a)>-1?e[a](b):e.attr(a,b)})),d},X.Z=function(a,b){return a=a||[],a.__proto__=y.fn,a.selector=b||"",a},X.isZ=function(a){return a instanceof X.Z},X.init=function(a,c){var d;if(!a)return X.Z();if("string"==typeof a)if(a=a.trim(),"<"==a[0]&&J.test(a))d=X.fragment(a,RegExp.$1,c),a=null;else{if(c!==w)return y(c).find(a);d=X.qsa(F,a)}else{if(b(a))return y(F).ready(a);if(X.isZ(a))return a;if($(a))d=i(a);else if(f(a))d=[a],a=null;else if(J.test(a))d=X.fragment(a.trim(),RegExp.$1,c),a=null;else{if(c!==w)return y(c).find(a);d=X.qsa(F,a)}}return X.Z(d,a)},y=function(a,b){return X.init(a,b)},y.extend=function(a){var b,c=D.call(arguments,1);return"boolean"==typeof a&&(b=a,a=c.shift()),c.forEach(function(c){p(a,c,b)}),a},X.qsa=function(a,b){var c,d="#"==b[0],f=!d&&"."==b[0],g=d||f?b.slice(1):b,h=U.test(g);return e(a)&&h&&d?(c=a.getElementById(g))?[c]:[]:1!==a.nodeType&&9!==a.nodeType?[]:D.call(h&&!d?f?a.getElementsByClassName(g):a.getElementsByTagName(b):a.querySelectorAll(b))},y.contains=function(a,b){return a!==b&&a.contains(b)},y.type=a,y.isFunction=b,y.isWindow=d,y.isArray=$,y.isPlainObject=g,y.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},y.inArray=function(a,b,c){return C.indexOf.call(b,a,c)},y.camelCase=A,y.trim=function(a){return null==a?"":String.prototype.trim.call(a)},y.uuid=0,y.support={},y.expr={},y.map=function(a,b){var c,d,e,f=[];if(h(a))for(d=0;d<a.length;d++)c=b(a[d],d),null!=c&&f.push(c);else for(e in a)c=b(a[e],e),null!=c&&f.push(c);return j(f)},y.each=function(a,b){var c,d;if(h(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},y.grep=function(a,b){return E.call(a,b)},window.JSON&&(y.parseJSON=JSON.parse),y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()}),y.fn={forEach:C.forEach,reduce:C.reduce,push:C.push,sort:C.sort,indexOf:C.indexOf,concat:C.concat,map:function(a){return y(y.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return y(D.apply(this,arguments))},ready:function(a){return T.test(F.readyState)&&F.body?a(y):F.addEventListener("DOMContentLoaded",function(){a(y)},!1),this},get:function(a){return a===w?D.call(this):this[a>=0?a:a+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(a){return C.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return b(a)?this.not(this.not(a)):y(E.call(this,function(b){return X.matches(b,a)}))},add:function(a,b){return y(B(this.concat(y(a,b))))},is:function(a){return this.length>0&&X.matches(this[0],a)},not:function(a){var c=[];if(b(a)&&a.call!==w)this.each(function(b){a.call(this,b)||c.push(this)});else{var d="string"==typeof a?this.filter(a):h(a)&&b(a.item)?D.call(a):y(a);this.forEach(function(a){d.indexOf(a)<0&&c.push(a)})}return y(c)},has:function(a){return this.filter(function(){return f(a)?y.contains(this,a):y(this).find(a).size()})},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!f(a)?a:y(a)},last:function(){var a=this[this.length-1];return a&&!f(a)?a:y(a)},find:function(a){var b,d=this;return b="object"==("undefined"==typeof a?"undefined":c(a))?y(a).filter(function(){var a=this;return C.some.call(d,function(b){return y.contains(b,a)})}):1==this.length?y(X.qsa(this[0],a)):this.map(function(){return X.qsa(this,a)})},closest:function(a,b){var d=this[0],f=!1;for("object"==("undefined"==typeof a?"undefined":c(a))&&(f=y(a));d&&!(f?f.indexOf(d)>=0:X.matches(d,a));)d=d!==b&&!e(d)&&d.parentNode;return y(d)},parents:function(a){for(var b=[],c=this;c.length>0;)c=y.map(c,function(a){if((a=a.parentNode)&&!e(a)&&b.indexOf(a)<0)return b.push(a),a});return q(b,a)},parent:function(a){return q(B(this.pluck("parentNode")),a)},children:function(a){return q(this.map(function(){return o(this)}),a)},contents:function(){return this.map(function(){return D.call(this.childNodes)})},siblings:function(a){return q(this.map(function(a,b){return E.call(o(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return y.map(this,function(b){return b[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=n(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var c=b(a);if(this[0]&&!c)var d=y(a).get(0),e=d.parentNode||this.length>1;return this.each(function(b){y(this).wrapAll(c?a.call(this,b):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){y(this[0]).before(a=y(a));for(var b;(b=a.children()).length;)a=b.first();y(a).append(this)}return this},wrapInner:function(a){var c=b(a);return this.each(function(b){var d=y(this),e=d.contents(),f=c?a.call(this,b):a;e.length?e.wrapAll(f):d.append(f)})},unwrap:function(){return this.parent().each(function(){y(this).replaceWith(y(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(a){return this.each(function(){var b=y(this);(a===w?"none"==b.css("display"):a)?b.show():b.hide()})},prev:function(a){return y(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return y(this.pluck("nextElementSibling")).filter(a||"*")},html:function(a){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(b){var c=this.innerHTML;y(this).empty().append(r(this,a,b,c))})},text:function(a){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=a===w?"":""+a})},attr:function(a,b){var c;return"string"==typeof a&&b===w?0==this.length||1!==this[0].nodeType?w:"value"==a&&"INPUT"==this[0].nodeName?this.val():!(c=this[0].getAttribute(a))&&a in this[0]?this[0][a]:c:this.each(function(c){if(1===this.nodeType)if(f(a))for(x in a)s(this,x,a[x]);else s(this,a,r(this,b,c,this.getAttribute(a)))})},removeAttr:function(a){return this.each(function(){1===this.nodeType&&s(this,a)})},prop:function(a,b){return a=Z[a]||a,b===w?this[0]&&this[0][a]:this.each(function(c){this[a]=r(this,b,c,this[a])})},data:function _(a,b){var _=this.attr("data-"+a.replace(N,"-$1").toLowerCase(),b);return null!==_?u(_):w},val:function(a){return 0===arguments.length?this[0]&&(this[0].multiple?y(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(b){this.value=r(this,a,b,this.value)})},offset:function(a){if(a)return this.each(function(b){var c=y(this),d=r(this,a,b,c.offset()),e=c.offsetParent().offset(),f={top:d.top-e.top,left:d.left-e.left};"static"==c.css("position")&&(f.position="relative"),c.css(f)});if(0==this.length)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function aa(b,c){if(arguments.length<2){var d=this[0],e=getComputedStyle(d,"");if(!d)return;if("string"==typeof b)return d.style[A(b)]||e.getPropertyValue(b);if($(b)){var f={};return y.each($(b)?b:[b],function(a,b){f[b]=d.style[A(b)]||e.getPropertyValue(b)}),f}}var aa="";if("string"==a(b))c||0===c?aa=k(b)+":"+m(b,c):this.each(function(){this.style.removeProperty(k(b))});else for(x in b)b[x]||0===b[x]?aa+=k(x)+":"+m(x,b[x])+";":this.each(function(){this.style.removeProperty(k(x))});return this.each(function(){this.style.cssText+=";"+aa})},index:function(a){return a?this.indexOf(y(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return!!a&&C.some.call(this,function(a){return this.test(t(a))},l(a))},addClass:function(a){return a?this.each(function(b){z=[];var c=t(this),d=r(this,a,b,c);d.split(/\s+/g).forEach(function(a){y(this).hasClass(a)||z.push(a)},this),z.length&&t(this,c+(c?" ":"")+z.join(" "))}):this},removeClass:function(a){return this.each(function(b){return a===w?t(this,""):(z=t(this),r(this,a,b,z).split(/\s+/g).forEach(function(a){z=z.replace(l(a)," ")}),void t(this,z.trim()))})},toggleClass:function(a,b){return a?this.each(function(c){var d=y(this),e=r(this,a,c,t(this));e.split(/\s+/g).forEach(function(a){(b===w?!d.hasClass(a):b)?d.addClass(a):d.removeClass(a)})}):this},scrollTop:function(a){if(this.length){var b="scrollTop"in this[0];return a===w?b?this[0].scrollTop:this[0].pageYOffset:this.each(b?function(){this.scrollTop=a}:function(){this.scrollTo(this.scrollX,a)})}},scrollLeft:function(a){if(this.length){var b="scrollLeft"in this[0];return a===w?b?this[0].scrollLeft:this[0].pageXOffset:this.each(b?function(){this.scrollLeft=a}:function(){this.scrollTo(a,this.scrollY)})}},position:function(){if(this.length){var a=this[0],b=this.offsetParent(),c=this.offset(),d=M.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(y(a).css("margin-top"))||0,c.left-=parseFloat(y(a).css("margin-left"))||0,d.top+=parseFloat(y(b[0]).css("border-top-width"))||0,d.left+=parseFloat(y(b[0]).css("border-left-width"))||0,{top:c.top-d.top,left:c.left-d.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||F.body;a&&!M.test(a.nodeName)&&"static"==y(a).css("position");)a=a.offsetParent;return a})}},y.fn.detach=y.fn.remove,["width","height"].forEach(function(a){var b=a.replace(/./,function(a){return a[0].toUpperCase()});y.fn[a]=function(c){var f,g=this[0];return c===w?d(g)?g["inner"+b]:e(g)?g.documentElement["scroll"+b]:(f=this.offset())&&f[a]:this.each(function(b){g=y(this),g.css(a,r(this,c,b,g[a]()))})}}),P.forEach(function(b,c){var d=c%2;y.fn[b]=function(){var b,e,f=y.map(arguments,function(c){return b=a(c),"object"==b||"array"==b||null==c?c:X.fragment(c)}),g=this.length>1;return f.length<1?this:this.each(function(a,b){e=d?b:b.parentNode,b=0==c?b.nextSibling:1==c?b.firstChild:2==c?b:null,f.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!e)return y(a).remove();v(e.insertBefore(a,b),function(a){null==a.nodeName||"SCRIPT"!==a.nodeName.toUpperCase()||a.type&&"text/javascript"!==a.type||a.src||window.eval.call(window,a.innerHTML)})})})},y.fn[d?b+"To":"insert"+(c?"Before":"After")]=function(a){return y(a)[b](this),this}}),X.Z.prototype=y.fn,X.uniq=B,X.deserializeValue=u,y.zepto=X,y}();window.Zepto=d,void 0===window.$&&(window.$=d),function(a){function b(a){return a._zid||(a._zid=m++)}function c(a,c,f,g){if(c=d(c),c.ns)var h=e(c.ns);return(q[b(a)]||[]).filter(function(a){return a&&(!c.e||a.e==c.e)&&(!c.ns||h.test(a.ns))&&(!f||b(a.fn)===b(f))&&(!g||a.sel==g)})}function d(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function e(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function f(a,b){return a.del&&!s&&a.e in t||!!b}function g(a){return u[a]||s&&t[a]||a}function h(c,e,h,i,k,m,n){var o=b(c),p=q[o]||(q[o]=[]);e.split(/\s/).forEach(function(b){if("ready"==b)return a(document).ready(h);var e=d(b);e.fn=h,e.sel=k,e.e in u&&(h=function(b){var c=b.relatedTarget;if(!c||c!==this&&!a.contains(this,c))return e.fn.apply(this,arguments)}),e.del=m;var o=m||h;e.proxy=function(a){if(a=j(a),!a.isImmediatePropagationStopped()){a.data=i;var b=o.apply(c,a._args==l?[a]:[a].concat(a._args));return b===!1&&(a.preventDefault(),a.stopPropagation()),b}},e.i=p.length,p.push(e),"addEventListener"in c&&c.addEventListener(g(e.e),e.proxy,f(e,n))})}function i(a,d,e,h,i){var j=b(a);(d||"").split(/\s/).forEach(function(b){c(a,b,e,h).forEach(function(b){delete q[j][b.i],"removeEventListener"in a&&a.removeEventListener(g(b.e),b.proxy,f(b,i))})})}function j(b,c){return!c&&b.isDefaultPrevented||(c||(c=b),a.each(y,function(a,d){var e=c[a];b[a]=function(){return this[d]=v,e&&e.apply(c,arguments)},b[d]=w}),(c.defaultPrevented!==l?c.defaultPrevented:"returnValue"in c?c.returnValue===!1:c.getPreventDefault&&c.getPreventDefault())&&(b.isDefaultPrevented=v)),b}function k(a){var b,c={originalEvent:a};for(b in a)x.test(b)||a[b]===l||(c[b]=a[b]);return j(c,a)}var l,m=1,n=Array.prototype.slice,o=a.isFunction,p=function(a){return"string"==typeof a},q={},r={},s="onfocusin"in window,t={focus:"focusin",blur:"focusout"},u={mouseenter:"mouseover",mouseleave:"mouseout"};r.click=r.mousedown=r.mouseup=r.mousemove="MouseEvents",a.event={add:h,remove:i},a.proxy=function(c,d){if(o(c)){var e=function(){return c.apply(d,arguments)};return e._zid=b(c),e}if(p(d))return a.proxy(c[d],c);throw new TypeError("expected function")},a.fn.bind=function(a,b,c){return this.on(a,b,c)},a.fn.unbind=function(a,b){return this.off(a,b)},a.fn.one=function(a,b,c,d){return this.on(a,b,c,d,1)};var v=function(){return!0},w=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(a,b,c){return this.on(b,a,c)},a.fn.undelegate=function(a,b,c){return this.off(b,a,c)},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d,e,f){var g,j,m=this;return b&&!p(b)?(a.each(b,function(a,b){m.on(a,c,d,b,f)}),m):(p(c)||o(e)||e===!1||(e=d,d=c,c=l),(o(d)||d===!1)&&(e=d,d=l),e===!1&&(e=w),m.each(function(l,m){f&&(g=function(a){return i(m,a.type,e),e.apply(this,arguments)}),c&&(j=function(b){var d,f=a(b.target).closest(c,m).get(0);if(f&&f!==m)return d=a.extend(k(b),{currentTarget:f,liveFired:m}),(g||e).apply(f,[d].concat(n.call(arguments,1)))}),h(m,b,e,d,c,j||g)}))},a.fn.off=function(b,c,d){var e=this;return b&&!p(b)?(a.each(b,function(a,b){e.off(a,c,b)}),e):(p(c)||o(d)||d===!1||(d=c,c=l),d===!1&&(d=w),e.each(function(){i(this,b,d,c)}))},a.fn.trigger=function(b,c){return b=p(b)||a.isPlainObject(b)?a.Event(b):j(b),b._args=c,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(b):a(this).triggerHandler(b,c)})},a.fn.triggerHandler=function(b,d){var e,f;return this.each(function(g,h){e=k(p(b)?a.Event(b):b),e._args=d,e.target=h,a.each(c(h,b.type||b),function(a,b){if(f=b.proxy(e),e.isImmediatePropagationStopped())return!1})}),f},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){p(a)||(b=a,a=b.type);var c=document.createEvent(r[a]||"Events"),d=!0;if(b)for(var e in b)"bubbles"==e?d=!!b[e]:c[e]=b[e];return c.initEvent(a,d,!0),j(c)}}(d),function(a){var b=navigator.userAgent,c={},d={},e=b.match(/WebKit\/([\d.]+)/),f=b.match(/MicroMessenger\/([\d\.]+)/i),g=b.match(/(Android)\s+([\d.]+)/),h=b.match(/(iPad).*OS\s([\d_]+)/),i=!h&&b.match(/(iPhone\sOS)\s([\d_]+)/),j=b.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),k=j&&b.match(/TouchPad/),l=b.match(/Kindle\/([\d.]+)/),m=b.match(/Silk\/([\d._]+)/),n=b.match(/(BlackBerry).*Version\/([\d.]+)/),o=b.match(/(BB10).*Version\/([\d.]+)/),p=b.match(/(RIM\sTablet\sOS)\s([\d.]+)/),q=b.match(/PlayBook/),r=b.match(/Chrome\/([\d.]+)/)||b.match(/CriOS\/([\d.]+)/),s=b.match(/Firefox\/([\d.]+)/);(d.webkit=!!e)&&(d.version=e[1]),(d.wx=!!f)&&(d.version=f[1]),g&&(c.android=!0,c.version=g[2]),i&&(c.ios=c.iphone=!0,c.version=i[2].replace(/_/g,".")),h&&(c.ios=c.ipad=!0,c.version=h[2].replace(/_/g,".")),j&&(c.webos=!0,c.version=j[2]),k&&(c.touchpad=!0),n&&(c.blackberry=!0,c.version=n[2]),o&&(c.bb10=!0,c.version=o[2]),p&&(c.rimtabletos=!0,c.version=p[2]),q&&(d.playbook=!0),l&&(c.kindle=!0,c.version=l[1]),m&&(d.silk=!0,d.version=m[1]),!m&&c.android&&b.match(/Kindle Fire/)&&(d.silk=!0),r&&(d.chrome=!0,d.version=r[1]),s&&(d.firefox=!0,d.version=s[1]),c.tablet=!!(h||q||g&&!b.match(/Mobile/)||s&&b.match(/Tablet/)),c.phone=!(c.tablet||!(g||i||j||n||o||r&&b.match(/Android/)||r&&b.match(/CriOS\/([\d.]+)/)||s&&b.match(/Mobile/))),a.os=c,a.browser=d}(d),function(a){function b(a,b,c,d){return Math.abs(a-b)>=Math.abs(c-d)?a-b>0?"Left":"Right":c-d>0?"Up":"Down"}function c(){k=null,n.last&&n.el.trigger("longTap")}function d(){k&&clearTimeout(k),k=null}function e(){h&&clearTimeout(h),i&&clearTimeout(i),j&&clearTimeout(j),k&&clearTimeout(k),h=i=j=k=null,n={}}function f(a){return("touch"==a.pointerType||a.pointerType==a.MSPOINTER_TYPE_TOUCH)&&a.isPrimary}function g(a,b){return a.type=="pointer"+b||a.type.toLowerCase()=="mspointer"+b}var h,i,j,k,l,m,n={},o=750,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w={scrollDom:null},x={},y={};a(document).ready(function(){var z,A,B,C,D=0,E=0;"MSGesture"in window&&(l=new MSGesture,l.target=document.body),a(document).bind("MSGestureEnd",function(a){var b=a.velocityX>1?"Right":a.velocityX<-1?"Left":a.velocityY>1?"Down":a.velocityY<-1?"Up":null;b&&(n.el.trigger("swipe"),n.el.trigger("swipe"+b))}).on("touchstart MSPointerDown pointerdown",function(b){if(a.os.ios){v=Math.random(),clearInterval(m),w.scrollDom&&(r=w.scrollDom.scrollTop());var d=b.target,e=d;for(y={};e;)e.id||(e.id="d_"+ +new Date),y[e.id]=a(e).scrollTop(),e=e.parentNode}(C=g(b,"down"))&&!f(b)||(B=C?b:b.touches[0],b.touches&&1===b.touches.length&&n.x2&&(n.x2=void 0,n.y2=void 0),z=Date.now(),A=z-(n.last||z),n.el=a("tagName"in B.target?B.target:B.target.parentNode),h&&clearTimeout(h),n.x1=B.pageX,n.y1=B.pageY,A>0&&A<=500&&(n.isDoubleTap=!0),n.last=z,k=setTimeout(c,o),l&&C&&l.addPointer(b.pointerId))}).on("touchmove MSPointerMove pointermove",function(b){if((!(C=g(b,"move"))||f(b))&&(B=C?b:b.touches[0],d(),n.x2=B.pageX,n.y2=B.pageY,D+=Math.abs(n.x1-n.x2),E+=Math.abs(n.y1-n.y2),a.os.ios)){if(x[v]);else for(var c=b.target,e=c;e;){if(Math.abs(a(e).scrollTop()-y[e.id||" "])>0){x[v]=e;break}e=e.parentNode}if(x[v]){var h=x[v];t=a(h).scrollTop(),u=+new Date}}}).on("touchend MSPointerUp pointerup",function(c){if(!(C=g(c,"up"))||f(c)){if(d(),n.x2&&Math.abs(n.x1-n.x2)>30||n.y2&&Math.abs(n.y1-n.y2)>30){if(j=setTimeout(function(){try{n.el.trigger("swipe"),n.el.trigger("swipe"+b(n.x1,n.x2,n.y1,n.y2)),n={}}catch(a){}},0),a.os.ios&&x[v]){var k=x[v];q=a(k).scrollTop();var l=+new Date,r=l-u;s=(q-t)/r,Math.abs(s)>.5?m=setInterval(function(){var b=a(k).scrollTop();q==b?p=1:(p=0,clearInterval(m))},20):p=0}}else if("last"in n)var w=+new Date-n.last;if(D<30&&E<30)if(w<=o)i=setTimeout(function(){var b=a.Event("tap");b.cancelTouch=e,n.el&&n.el.trigger(b),n.isDoubleTap?(n.el&&n.el.trigger("doubleTap",[c]),n={}):h=setTimeout(function(){h=null,n.el&&n.el.trigger("singleTap"),n={}},250)},0);else{if(a.os.ios&&p,!1)return void(p=0);var y=a.Event("press");y.cancelTouch=e,n.el&&n.el.trigger(y)}else n={};D=E=0}}).on("touchcancel MSPointerCancel pointercancel",function(){D=E=0,e()}),a(window).on("scroll",e)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(b){a.fn[b]=function(a){return this.on(b,a)}})}(d),a.exports=d}]);
//# sourceMappingURL=zepto.min.da61d250.js.map