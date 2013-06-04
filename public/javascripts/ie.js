
/*! HTML5 Shiv pre3.5 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 Uncompressed source: https://github.com/aFarkas/html5shiv  */
(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
/*! Copyright (c) 2009, 280 North Inc. http://280north.com/ MIT License. */
(function(n){"function"==typeof define?define(n):n()})(function(){function n(a){try{return Object.defineProperty(a,"sentinel",{}),"sentinel"in a}catch(d){}}if(!Function.prototype.bind)Function.prototype.bind=function(a){var d=this;if("function"!=typeof d)throw new TypeError;var b=p.call(arguments,1),c=function(){if(this instanceof c){var e=function(){};e.prototype=d.prototype;var e=new e,g=d.apply(e,b.concat(p.call(arguments)));return null!==g&&Object(g)===g?g:e}return d.apply(a,b.concat(p.call(arguments)))};
    return c};var l=Function.prototype.call,f=Object.prototype,p=Array.prototype.slice,m=l.bind(f.toString),h=l.bind(f.hasOwnProperty),t,u,q,r,o;if(o=h(f,"__defineGetter__"))t=l.bind(f.__defineGetter__),u=l.bind(f.__defineSetter__),q=l.bind(f.__lookupGetter__),r=l.bind(f.__lookupSetter__);if(!Array.isArray)Array.isArray=function(a){return"[object Array]"==m(a)};if(!Array.prototype.forEach)Array.prototype.forEach=function(a,d){var b=i(this),c=0,e=b.length>>>0;if("[object Function]"!=m(a))throw new TypeError;
    for(;c<e;)c in b&&a.call(d,b[c],c,b),c++};if(!Array.prototype.map)Array.prototype.map=function(a,d){var b=i(this),c=b.length>>>0,e=Array(c);if("[object Function]"!=m(a))throw new TypeError;for(var g=0;g<c;g++)g in b&&(e[g]=a.call(d,b[g],g,b));return e};if(!Array.prototype.filter)Array.prototype.filter=function(a,d){var b=i(this),c=b.length>>>0,e=[];if("[object Function]"!=m(a))throw new TypeError;for(var g=0;g<c;g++)g in b&&a.call(d,b[g],g,b)&&e.push(b[g]);return e};if(!Array.prototype.every)Array.prototype.every=
    function(a,d){var b=i(this),c=b.length>>>0;if("[object Function]"!=m(a))throw new TypeError;for(var e=0;e<c;e++)if(e in b&&!a.call(d,b[e],e,b))return!1;return!0};if(!Array.prototype.some)Array.prototype.some=function(a,d){var b=i(this),c=b.length>>>0;if("[object Function]"!=m(a))throw new TypeError;for(var e=0;e<c;e++)if(e in b&&a.call(d,b[e],e,b))return!0;return!1};if(!Array.prototype.reduce)Array.prototype.reduce=function(a){var d=i(this),b=d.length>>>0;if("[object Function]"!=m(a))throw new TypeError;
    if(!b&&1==arguments.length)throw new TypeError;var c=0,e;if(2<=arguments.length)e=arguments[1];else{do{if(c in d){e=d[c++];break}if(++c>=b)throw new TypeError;}while(1)}for(;c<b;c++)c in d&&(e=a.call(void 0,e,d[c],c,d));return e};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(a){var d=i(this),b=d.length>>>0;if("[object Function]"!=m(a))throw new TypeError;if(!b&&1==arguments.length)throw new TypeError;var c,b=b-1;if(2<=arguments.length)c=arguments[1];else{do{if(b in d){c=d[b--];
    break}if(0>--b)throw new TypeError;}while(1)}do b in this&&(c=a.call(void 0,c,d[b],b,d));while(b--);return c};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(a){var d=i(this),b=d.length>>>0;if(!b)return-1;var c=0;1<arguments.length&&(c=v(arguments[1]));for(c=0<=c?c:Math.max(0,b+c);c<b;c++)if(c in d&&d[c]===a)return c;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(a){var d=i(this),b=d.length>>>0;if(!b)return-1;var c=b-1;1<arguments.length&&(c=Math.min(c,
    v(arguments[1])));for(c=0<=c?c:b-Math.abs(c);0<=c;c--)if(c in d&&a===d[c])return c;return-1};if(!Object.getPrototypeOf)Object.getPrototypeOf=function(a){return a.__proto__||(a.constructor?a.constructor.prototype:f)};if(!Object.getOwnPropertyDescriptor)Object.getOwnPropertyDescriptor=function(a,d){if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+a);if(h(a,d)){var b,c,e;b={enumerable:!0,configurable:!0};if(o){var g=
    a.__proto__;a.__proto__=f;c=q(a,d);e=r(a,d);a.__proto__=g;if(c||e){if(c)b.get=c;if(e)b.set=e;return b}}b.value=a[d];return b}};if(!Object.getOwnPropertyNames)Object.getOwnPropertyNames=function(a){return Object.keys(a)};if(!Object.create)Object.create=function(a,d){var b;if(null===a)b={__proto__:null};else{if("object"!=typeof a)throw new TypeError("typeof prototype["+typeof a+"] != 'object'");b=function(){};b.prototype=a;b=new b;b.__proto__=a}void 0!==d&&Object.defineProperties(b,d);return b};if(Object.defineProperty){var l=
    n({}),y="undefined"==typeof document||n(document.createElement("div"));if(!l||!y)var s=Object.defineProperty}if(!Object.defineProperty||s)Object.defineProperty=function(a,d,b){if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError("Object.defineProperty called on non-object: "+a);if("object"!=typeof b&&"function"!=typeof b||null===b)throw new TypeError("Property description must be an object: "+b);if(s)try{return s.call(Object,a,d,b)}catch(c){}if(h(b,"value"))if(o&&(q(a,d)||r(a,
    d))){var e=a.__proto__;a.__proto__=f;delete a[d];a[d]=b.value;a.__proto__=e}else a[d]=b.value;else{if(!o)throw new TypeError("getters & setters can not be defined on this javascript engine");h(b,"get")&&t(a,d,b.get);h(b,"set")&&u(a,d,b.set)}return a};if(!Object.defineProperties)Object.defineProperties=function(a,d){for(var b in d)h(d,b)&&Object.defineProperty(a,b,d[b]);return a};if(!Object.seal)Object.seal=function(a){return a};if(!Object.freeze)Object.freeze=function(a){return a};try{Object.freeze(function(){})}catch(D){Object.freeze=
    function(a){return function(d){return"function"==typeof d?d:a(d)}}(Object.freeze)}if(!Object.preventExtensions)Object.preventExtensions=function(a){return a};if(!Object.isSealed)Object.isSealed=function(){return!1};if(!Object.isFrozen)Object.isFrozen=function(){return!1};if(!Object.isExtensible)Object.isExtensible=function(a){if(Object(a)!==a)throw new TypeError;for(var d="";h(a,d);)d+="?";a[d]=!0;var b=h(a,d);delete a[d];return b};if(!Object.keys){var w=!0,x="toString,toLocaleString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,constructor".split(","),
    z=x.length,j;for(j in{toString:null})w=!1;Object.keys=function(a){if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError("Object.keys called on a non-object");var d=[],b;for(b in a)h(a,b)&&d.push(b);if(w)for(b=0;b<z;b++){var c=x[b];h(a,c)&&d.push(c)}return d}}if(!Date.prototype.toISOString||-1===(new Date(-621987552E5)).toISOString().indexOf("-000001"))Date.prototype.toISOString=function(){var a,d,b,c;if(!isFinite(this))throw new RangeError;a=[this.getUTCMonth()+1,this.getUTCDate(),
    this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];c=this.getUTCFullYear();c=(0>c?"-":9999<c?"+":"")+("00000"+Math.abs(c)).slice(0<=c&&9999>=c?-4:-6);for(d=a.length;d--;)b=a[d],10>b&&(a[d]="0"+b);return c+"-"+a.slice(0,2).join("-")+"T"+a.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()};
    if(!Date.parse||864E13!==Date.parse("+275760-09-13T00:00:00.000Z"))Date=function(a){var d=function g(b,d,c,f,h,i,j){var k=arguments.length;return this instanceof a?(k=1==k&&""+b===b?new a(g.parse(b)):7<=k?new a(b,d,c,f,h,i,j):6<=k?new a(b,d,c,f,h,i):5<=k?new a(b,d,c,f,h):4<=k?new a(b,d,c,f):3<=k?new a(b,d,c):2<=k?new a(b,d):1<=k?new a(b):new a,k.constructor=g,k):a.apply(this,arguments)},b=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(?:Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
        c;for(c in a)d[c]=a[c];d.now=a.now;d.UTC=a.UTC;d.prototype=a.prototype;d.prototype.constructor=d;d.parse=function(d){var c=b.exec(d);if(c){c.shift();for(var f=1;7>f;f++)c[f]=+(c[f]||(3>f?1:0)),1==f&&c[f]--;var h=+c.pop(),i=+c.pop(),j=c.pop(),f=0;if(j){if(23<i||59<h)return NaN;f=6E4*(60*i+h)*("+"==j?-1:1)}h=+c[0];return 0<=h&&99>=h?(c[0]=h+400,a.UTC.apply(this,c)+f-126227808E5):a.UTC.apply(this,c)+f}return a.parse.apply(this,arguments)};return d}(Date);j="\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
    if(!String.prototype.trim||j.trim()){j="["+j+"]";var A=RegExp("^"+j+j+"*"),B=RegExp(j+j+"*$");String.prototype.trim=function(){return(""+this).replace(A,"").replace(B,"")}}var v=function(a){a=+a;a!==a?a=0:0!==a&&a!==1/0&&a!==-(1/0)&&(a=(0<a||-1)*Math.floor(Math.abs(a)));return a},C="a"!="a"[0],i=function(a){if(null==a)throw new TypeError;return C&&"string"==typeof a&&a?a.split(""):Object(a)}});
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if(typeof document!=="undefined"&&!("classList" in document.createElement("a"))){(function(j){var a="classList",f="prototype",m=(j.HTMLElement||j.Element)[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.className),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.className=this.toString()}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(o){o+="";if(g(this,o)===-1){this.push(o);this._updateClassName()}};e.remove=function(p){p+="";var o=g(this,p);if(o!==-1){this.splice(o,1);this._updateClassName()}};e.toggle=function(o){o+="";if(g(this,o)===-1){this.add(o)}else{this.remove(o)}};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))};
/*! createElementNS workaround (IE<9) */
crElNS = ('createElementNS' in document) ? document.createElementNS : function(m,n) { return document.createElement(n); };
/*! outerHTML - https://gist.github.com/1044128 */
"undefined"!==typeof document&&!("outerHTML"in crElNS("http://www.w3.org/1999/xhtml","_"))&&function(a){var c=crElNS("http://www.w3.org/1999/xhtml","_"),a=(a.HTMLElement||a.Element).prototype,e=new XMLSerializer,b=function(){var a;if(document.xmlVersion)return e.serializeToString(this);c.appendChild(this.cloneNode(!1));a=c.innerHTML.replace("><",">"+this.innerHTML+"<");c.innerHTML="";return a},d=function(a){var b=this.parentNode;if(null===b)throw DOMException.code=
    DOMException.NOT_FOUND_ERR,DOMException;for(c.innerHTML=a;a=c.firstChild;)b.insertBefore(a,this);b.removeChild(this)};if(Object.defineProperty){b={get:b,set:d,enumerable:!0,configurable:!0};try{Object.defineProperty(a,"outerHTML",b)}catch(f){-2146823252===f.number&&(b.enumerable=!1,Object.defineProperty(a,"outerHTML",b))}}else Object.prototype.__defineGetter__&&Object.prototype.__defineSetter__&&(a.__defineGetter__("outerHTML",b),a.__defineSetter__("outerHTML",d))}(self);