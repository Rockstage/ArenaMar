/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
;(function($) {

"use strict";

var $body = $('body');
// var $head = $('head');
// var $mainWrapper = $('#main-wrapper');

$(document).ready(function () {

	/* -------------------------------------------------------------------------
    SELECT BOX 
  ------------------------------------------------------------------------- */
  $.fn.uouSelectBox = function() {

    var self = $(this),
      select = self.find('select');
    self.prepend('<ul class="select-clone custom-list"></ul>');

    var placeholder = select.data('placeholder') ? select.data('placeholder') : select.find('option:eq(0)').text(),
      clone = self.find('.select-clone');
    self.prepend('<input class="value-holder" type="text" disabled="disabled" placeholder="' + placeholder + '"><i class="fa fa-sort arrow-down"></i>');
    var value_holder = self.find('.value-holder');

    // INPUT PLACEHOLDER FIX FOR IE
    if ($.fn.placeholder) {
      self.find('input, textarea').placeholder();
    }

    // CREATE CLONE LIST
    select.find('option').each(function() {
      if ($(this).attr('value')) {
        clone.append('<li data-value="' + $(this).val() + '">' + $(this).text() + '</li>');
      }
    });

    // TOGGLE LIST
    self.click(function() {
      var media_query_breakpoint = uouMediaQueryBreakpoint();
      if (media_query_breakpoint > 991) {
        clone.slideToggle(100);
        self.toggleClass('active');
      }
    });

    // CLICK
    clone.find('li').click(function() {

      value_holder.val($(this).text());
      select.find('option[value="' + $(this).attr('data-value') + '"]').attr('selected', 'selected');

      // IF LIST OF LINKS
      if (self.hasClass('links')) {
        window.location.href = select.val();
      }

    });

    // HIDE LIST
    self.bind('clickoutside', function(event) {
      clone.slideUp(100);
    });

    // LIST OF LINKS
    if (self.hasClass('links')) {
      select.change(function() {
        window.location.href = select.val();
      });
    }

  };

  /* -------------------------------------------------------------------------
    MEDIA QUERY BREAKPOINT
  ------------------------------------------------------------------------- */
  var uouMediaQueryBreakpoint = function() {

    if ($('#media-query-breakpoint').length < 1) {
      $('body').append('<var id="media-query-breakpoint"><span></span></var>');
    }
    var value = $('#media-query-breakpoint').css('content');
    if (typeof value !== 'undefined') {
      value = value.replace("\"", "").replace("\"", "").replace("\'", "").replace("\'", "");
      if (isNaN(parseInt(value, 10))) {
        $('#media-query-breakpoint span').each(function() {
          value = window.getComputedStyle(this, ':before').content;
        });
        value = value.replace("\"", "").replace("\"", "").replace("\'", "").replace("\'", "");
      }
      if (isNaN(parseInt(value, 10))) {
        value = 1199;
      }
    } else {
      value = 1199;
    }
    return value;

  };

  /* -------------------------------------------------------------------------
    PRICE FILTER
  ------------------------------------------------------------------------- */
  $( '.slider-range-container' ).each(function(){
    if ( $.fn.slider ) {

      var self = $(this),
      slider = self.find( '.slider-range' ),
      min = slider.data( 'min' ) ? slider.data( 'min' ) : 100,
      max = slider.data( 'max' ) ? slider.data( 'max' ) : 2000,
      step = slider.data( 'step' ) ? slider.data( 'step' ) : 100,
      default_min = slider.data( 'default-min' ) ? slider.data( 'default-min' ) : 100,
      default_max = slider.data( 'default-max' ) ? slider.data( 'default-max' ) : 500,
      currency = slider.data( 'currency' ) ? slider.data( 'currency' ) : '$',
      input_from = self.find( '.range-from' ),
      input_to = self.find( '.range-to' );

      input_from.val( currency + ' ' + default_min );
      input_to.val( currency + ' ' + default_max );

      slider.slider({
        range: true,
        min: min,
        max: max,
        step: step,
        values: [ default_min, default_max ],
        slide: function( event, ui ) {
          input_from.val( currency + ' ' + ui.values[0] );
          input_to.val( currency + ' ' + ui.values[1] );
        }
      });

    }
  });

  /* -------------------------------------------------------------------------
    DATEPICKER 
  ------------------------------------------------------------------------- */
  $('.calendar').each(function() {

    var input = $(this).find('input'),
      dateformat = input.data('dateformat') ? input.data('dateformat') : 'm/d/y',
      icon = $(this).find('.fa'),
      widget = input.datepicker('widget');

    input.datepicker({
      dateFormat: dateformat,
      minDate: 0,
      beforeShow: function() {
        input.addClass('active');
      },
      onClose: function() {
        input.removeClass('active');
        // TRANSPLANT WIDGET BACK TO THE END OF BODY IF NEEDED
        widget.hide();
        if (!widget.parent().is('body')) {
          widget.detach().appendTo($('body'));
        }
      }
    });
    icon.click(function() {
      input.focus();
    });

  });

  /* -------------------------------------------------------------------------
		HEADER LOGIN
	------------------------------------------------------------------------- */

	$( '.header-login' ).each(function(){

		var self = $(this),
		form_holder = self.find( '.header-form' ),
		btn = self.find( '.header-btn' );

		// HOVER
		self.hover(function(){
			if ( media_query_breakpoint > 991 ) {
				self.find( '.header-btn' ).addClass( 'hover' );
				form_holder.stop( true, true ).slideDown(200);
			}
		}, function(){
			if ( media_query_breakpoint > 991 ) {
				self.find( '.header-btn' ).removeClass( 'hover' );
				form_holder.stop( true, true ).delay(10).slideUp(200);
			}
		});

		// VALIDATE FORM
		form_holder.find( 'form' ).submit(function(){

			var form = $(this);
			if ( form.uouFormValid() ) {
				form.find( '.alert-message.warning:visible' ).slideUp(300);
			}
			else {
				form.find( '.alert-message.warning' ).slideDown(300);
				return false;
			}

		});

		// TOGGLE
		btn.click(function(){
			if ( media_query_breakpoint <= 991 ) {
				self.find( '.header-btn' ).toggleClass( 'hover' );
				form_holder.stop( true, true ).slideToggle(200);
			}
		});

	});

	/* -------------------------------------------------------------------------
    TOGGLE
  ------------------------------------------------------------------------- */
  $.fn.uouToggle = function(){
    var self = $(this),
    title = self.find( '.toggle-title' ),
    content = self.find( '.toggle-content' );
    title.click(function(){
      self.toggleClass( 'closed' );
      content.slideToggle(400);
    });
  };
  
  // NAVBAR TOGGLE
  $( '#header-toggle' ).click(function(){
    $( '#header' ).slideToggle(300);
  });

	/* -------------------------------------------------------------------------
    HEADER MENU
  ------------------------------------------------------------------------- */
  $('.navbar-nav').each(function() {

    var self = $(this);

    // HOVER SUBMENU
    self.find('li.has-submenu').hover(function() {
      if (media_query_breakpoint > 991) {
        $(this).addClass('hover');
        $(this).find('> ul').stop(true, true).fadeIn(200);
      }
    }, function() {
      if (media_query_breakpoint > 991) {
        $(this).removeClass('hover');
        $(this).find('> ul').stop(true, true).delay(10).fadeOut(200);
      }
    });

    // CREATE TOGGLE BUTTONS

    self.find('li.has-submenu>ul>li.has-submenu>a').each(function() {
      $(this).append('<button class="submenu-toggle"><i class="fa fa-angle-right"></i></button>');
    });

    self.find( 'li.has-submenu' ).each(function(){
      $(this).append( '<button class="submenu-toggle"><i class="fa fa-chevron-down"></i></button>' );
    });

    // TOGGLE SUBMENU
    self.find('.submenu-toggle').each(function() {
      $(this).click(function() {
        $(this).parent().find('> .sub-menu').slideToggle(200);
        $(this).find('.fa').toggleClass('fa-chevron-up fa-chevron-down');
      });
    });

  });

/* -------------------------------------------------------------------------
    CHECKBOX INPUT
  ------------------------------------------------------------------------- */
  $.fn.uouCheckboxInput = function(){

    var self = $(this),
    input = self.find( 'input' );

    // INITIAL STATE
    if ( input.is( ':checked' ) ) {
      self.addClass( 'active' );
    }
    else {
      self.removeClass( 'active' );
    }

    // CHANGE STATE
    input.change(function(){
      if ( input.is( ':checked' ) ) {
        self.addClass( 'active' );
      }
      else {
        self.removeClass( 'active' );
      }
    });

  };

	/* -------------------------------------------------------------------------
		HEADER LANGUAGE
	------------------------------------------------------------------------- */

	$( '.header-language' ).each(function(){

		var self = $(this);
		var form_holder = self.find( '.header-nav' );
		var btn = self.find( '.header-btn' );

		// HOVER
		self.hover(function(){
			if ( media_query_breakpoint > 991 ) {
				self.find( '.header-btn' ).addClass( 'hover' );
				self.find( '.header-nav' ).show();
				self.find( '.header-nav ul' ).stop( true, true ).slideDown(200);
			}
		}, function(){
			if ( media_query_breakpoint > 991 ) {
				self.find( '.header-btn' ).removeClass( 'hover' );
				self.find( '.header-nav ul' ).stop( true, true ).delay(10).slideUp(200, function(){
					self.find( '.header-nav' ).hide();
				});
			}
		});

		// TOGGLE
		btn.click(function(){
			if ( media_query_breakpoint <= 991 ) {
				self.find( '.header-btn' ).toggleClass( 'hover' );
				form_holder.stop( true, true ).slideToggle(200);
			}
		});

	});

	/* -------------------------------------------------------------------------
    BANNER
  ------------------------------------------------------------------------- */

  $('#banner .banner-bg').each(function() {

    var self = $(this),
      images = self.find('.banner-bg-item');

    // SET BG IMAGES
    images.each(function() {
      var img = $(this).find('img');
      if (img.length > 0) {
        $(this).css('background-image', 'url(' + img.attr('src') + ')');
        img.hide();
      }
    });

    // INIT SLIDER
    if ($.fn.owlCarousel) {
      self.owlCarousel({
        slideSpeed: 300,
        autoPlay: 6000,
        pagination: true,
        navigation: true,
        paginationSpeed: 1500,
        singleItem: true,
        navigationText: [
	      "<i class='fa fa-angle-left'></i>",
	      "<i class='fa fa-angle-right'></i>"
	      ],
        addClassActive: true,
        afterMove: function() {
          // ACTIVATE TAB
          var active_index = self.find('.owl-item.active').index();
          $('.banner-search-inner .tab-title:eq(' + active_index + ')').trigger('click');
        }
      });
    }

    // SET DEFAULT IF NEEDED
    var active_tab_index = $('.banner-bg-item.active, .banner-search-inner .tab-title.active').index();
    if (active_tab_index !== 0) {
      self.trigger('owl.jumpTo', active_tab_index);
    }

  });

  $('.banner-search-inner').each(function() {

    var self = $(this),
      tabs = self.find('.tab-title'),
      contents = self.find('.tab-content');

    // TAB CLICK
    tabs.click(function() {
      if (!$(this).hasClass('active')) {
        var index = $(this).index();
        tabs.filter('.active').removeClass('active');
        $(this).addClass('active');
        contents.filter('.active').hide().removeClass('active');
        contents.filter(':eq(' + index + ')').fadeToggle().addClass('active');

        // CHANGE BG
        if ($.fn.owlCarousel) {
          $('#banner .banner-bg').trigger('owl.goTo', index);
        }

      }
    });

  });


  /* -------------------------------------------------------------------------
    MAPS
  ------------------------------------------------------------------------- */

  // MAP ROOM
  $("#map").gmap3({
    marker: {
      values: [{
        latLng: [43.280971, 28.041037],
        options: {
            icon: "/assets/marker-ef137243e8343530e782147fd6a44ab4b15daa7a947bf4eaefb52d13c682a6e2.png"
        }
    }, ],
    },
    map:{
      options:{
        zoom:6,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControl: true,
        scrollwheel: true,
        streetViewControl: true
      }
    }
  });

  // MAP LOCATIONS
  $("#location-map").gmap3({
    marker: {
      values: [{
        latLng: [43.280971, 28.041037],
        options: {
            icon: "/assets/marker-ef137243e8343530e782147fd6a44ab4b15daa7a947bf4eaefb52d13c682a6e2.png"
        }
    }, ],
    },
    map:{
      options:{
        zoom:6,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControl: false,
        scrollwheel: true,
        streetViewControl: true,
        styles: [{
          featureType: "all",
          elementType: "all",
          stylers: [
            {"saturation":-800},{"lightness":25},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#0068d6"},{"lightness":-25},{"saturation":80}
          ]
        }]
      }
    }
  });

  // MAP CONTACT
  $("#contact-map").gmap3({
    marker: {
      values: [{
        latLng: [43.280971, 28.041037],
        options: {
            icon: "/assets/marker-ef137243e8343530e782147fd6a44ab4b15daa7a947bf4eaefb52d13c682a6e2.png"
        }
    }, ],
    },
    map:{
      options:{
        zoom:6,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: true,
        styles: [{
          featureType: "all",
          elementType: "all",
          stylers: [
            {"saturation":-800},{"lightness":25},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}
          ]
        }]
      }
    }
  });

  $('.contact-box, #contact-map').matchHeight();

  /* -------------------------------------------------------------------------
    TABS
  ------------------------------------------------------------------------- */
  $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
  });

  /* -------------------------------------------------------------------------
    GENERAL
  ------------------------------------------------------------------------- */
  // GET ACTUAL MEDIA QUERY BREAKPOINT
  var media_query_breakpoint = uouMediaQueryBreakpoint();

  // SELECT BOX
  $( '.select-box' ).each(function(){
    $(this).uouSelectBox();
  });

  // TOGGLES
  $( '.toggle-container' ).each(function(){
    $(this).uouToggle();
  });

  // CHECKBOX INPUT
  $( '.checkbox-input' ).each(function(){
    $(this).uouCheckboxInput();
  });

  $('#room .sidebar, #room .room-content').matchHeight();

  // TESTIMONIALS SLIDER
  $("#owl-testimonials").owlCarousel({
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true
  });

  // TESTIMONIALS SLIDER
  $(".thumbnail-slider").owlCarousel({
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    navigation: true,
    navigationText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
    ]
  });

  // HEADER BG SLIDER
  $(".background-slider").owlCarousel({
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    navigation: true,
    navigationText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
    ]
  });

  // HEADER BG SLIDER HEIGHT
  $(".background-slider .owl-item").each(function(){
    $(this).css("height",  $(".header-slider .background-slider").height());
  });

  $("#clients-slider").owlCarousel({
		items: 5,
		navigation: false,
    autoPlay: true
	});

  // BACKGROUND FOR EACH SLIDE
  $( '.background-slider' ).each(function(){

    var self = $(this),
    images = self.find( '.owl-item' );

    // SET BG IMAGES
    images.each(function(){
      var img =  $(this).find( 'img' );
      if ( img.length > 0 ) {
        $(this).css( 'background-image', 'url(' + img.attr( 'src' ) + ')' );
        img.hide();
      }
    });
  });

  // BACKGROUND FOR EACH SLIDE
  $( '.supertabs .tab-content' ).each(function(){

    var self = $(this),
    images = self.find( '.tab-pane' );

    // SET BG IMAGES
    images.each(function(){
      var img =  $(this).find( 'img' );
      if ( img.length > 0 ) {
        $(this).css( 'background-image', 'url(' + img.attr( 'src' ) + ')' );
        img.hide();
      }
    });
  });
  
  // SUPERTABS
  $(".supertabs .tab-content, .supertabs .tab-navigation ul, .supertabs .tab-pane").each(function(){
    $(this).css("height",  $(".supertabs .tab-navigation").height());
  });

  $(window).resize(function(){
    if ( uouMediaQueryBreakpoint() !== media_query_breakpoint ) {
      media_query_breakpoint = uouMediaQueryBreakpoint();
      $('#header').removeAttr( 'style' );
    }
  });


});


// Touch
// ---------------------------------------------------------
var dragging = false;

$body.on('touchmove', function() {
	dragging = true;
});

$body.on('touchstart', function() {
	dragging = false;
});



}(jQuery));
"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);


// $(document).ready(function() {
 
//   $("#owl-demo").owlCarousel({
 
//     autoPlay: 3000, //Set AutoPlay to 3 seconds
//     items : 4,
//     itemsDesktop : [1199,3],
//     itemsDesktopSmall : [979,3],
//  	// Custom Navigation Events

//   });
 
// });

$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
  	// autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 2,
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile: [500,1] // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not(form button), button[data-confirm]:not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      element.data('ujs:enable-with', element[method]());
      if (replacement !== undefined) {
        element[method](replacement);
      }

      element.prop('disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (typeof element.data('ujs:enable-with') !== 'undefined') element[method](element.data('ujs:enable-with'));
      element.prop('disabled', false);
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
        if (valueToCheck === nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      element.data('ujs:enable-with', element.html()); // store enabled state
      if (replacement !== undefined) {
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:enable-with')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:enable-with')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
        if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
          return rails.stopEverything(e);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/*! jQuery UI - v1.10.4 - 2014-01-23
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.datepicker.js, jquery.ui.slider.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */


(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),k=t.position.getScrollInfo(y),w=(e.collision||"flip").split(" "),D={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=h.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=h.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),D[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),a=i(D.at,p,g),v.left+=a[0],v.top+=a[1],this.each(function(){var n,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),x=u+f+s(this,"marginRight")+k.width,C=d+_+s(this,"marginBottom")+k.height,M=t.extend({},v),T=i(D.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?M.left-=u:"center"===e.my[0]&&(M.left-=u/2),"bottom"===e.my[1]?M.top-=d:"center"===e.my[1]&&(M.top-=d/2),M.left+=T[0],M.top+=T[1],t.support.offsetFractions||(M.left=l(M.left),M.top=l(M.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[w[i]]&&t.ui.position[w[i]][s](M,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:x,collisionHeight:C,offset:[a[0]+T[0],a[1]+T[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(h=function(t){var i=m.left-M.left,s=i+p-u,n=m.top-M.top,a=n+g-d,l={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:M.left,top:M.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(l.horizontal="center"),d>g&&g>r(n+a)&&(l.vertical="middle"),l.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,l)}),c.offset(t.extend(M,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-o-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-o-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-o-a,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e,t){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){e.datepicker._isDisabledDatepicker(n.inline?t.parent()[0]:n.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))})}function s(t,i){e.extend(t,i);for(var a in i)null==i[a]&&(t[a]=i[a]);return t}e.extend(e.ui,{datepicker:{version:"1.10.4"}});var n,r="datepicker";e.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return s(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var a,s,n;a=t.nodeName.toLowerCase(),s="div"===a||"span"===a,t.id||(this.uuid+=1,t.id="dp"+this.uuid),n=this._newInst(e(t),s),n.settings=e.extend({},i||{}),"input"===a?this._connectDatepicker(t,n):s&&this._inlineDatepicker(t,n)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var a=e(t);i.append=e([]),i.trigger=e([]),a.hasClass(this.markerClassName)||(this._attachments(a,i),a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,r,i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var a,s,n,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=e("<span class='"+this._appendClass+"'>"+r+"</span>"),t[o?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),a=this._get(i,"showOn"),("focus"===a||"both"===a)&&t.focus(this._showDatepicker),("button"===a||"both"===a)&&(s=this._get(i,"buttonText"),n=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:n,alt:s,title:s}):e("<button type='button'></button>").addClass(this._triggerClass).html(n?e("<img/>").attr({src:n,alt:s,title:s}):s)),t[o?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,a,s,n=new Date(2009,11,20),r=this._get(e,"dateFormat");r.match(/[DM]/)&&(t=function(e){for(i=0,a=0,s=0;e.length>s;s++)e[s].length>i&&(i=e[s].length,a=s);return a},n.setMonth(t(this._get(e,r.match(/MM/)?"monthNames":"monthNamesShort"))),n.setDate(t(this._get(e,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-n.getDay())),e.input.attr("size",this._formatDate(e,n).length)}},_inlineDatepicker:function(t,i){var a=e(t);a.hasClass(this.markerClassName)||(a.addClass(this.markerClassName).append(i.dpDiv),e.data(t,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,a,n,o){var u,c,h,l,d,p=this._dialogInst;return p||(this.uuid+=1,u="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+u+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},e.data(this._dialogInput[0],r,p)),s(p.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(c=document.documentElement.clientWidth,h=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[c/2-100+l,h/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=a,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(t){var i,a=e(t),s=e.data(t,r);a.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,r),"input"===i?(s.append.remove(),s.trigger.remove(),a.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&a.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var i,a,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(a=s.children("."+this._inlineClass),a.children().removeClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,a,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(a=s.children("."+this._inlineClass),a.children().addClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,a,n){var r,o,u,c,h=this._getInst(i);return 2===arguments.length&&"string"==typeof a?"defaults"===a?e.extend({},e.datepicker._defaults):h?"all"===a?e.extend({},h.settings):this._get(h,a):null:(r=a||{},"string"==typeof a&&(r={},r[a]=n),h&&(this._curInst===h&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),u=this._getMinMaxDate(h,"min"),c=this._getMinMaxDate(h,"max"),s(h.settings,r),null!==u&&r.dateFormat!==t&&r.minDate===t&&(h.settings.minDate=this._formatDate(h,u)),null!==c&&r.dateFormat!==t&&r.maxDate===t&&(h.settings.maxDate=this._formatDate(h,c)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(e(i),h),this._autoSize(h),this._setDate(h,o),this._updateAlternate(h),this._updateDatepicker(h)),t)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,a,s,n=e.datepicker._getInst(t.target),r=!0,o=n.dpDiv.is(".ui-datepicker-rtl");if(n._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),r=!1;break;case 13:return s=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",n.dpDiv),s[0]&&e.datepicker._selectDay(t.target,n.selectedMonth,n.selectedYear,s[0]),i=e.datepicker._get(n,"onSelect"),i?(a=e.datepicker._formatDate(n),i.apply(n.input?n.input[0]:null,[a,n])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),r=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),r=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?1:-1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),r=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?-1:1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),r=t.ctrlKey||t.metaKey;break;default:r=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):r=!1;r&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(i){var a,s,n=e.datepicker._getInst(i.target);return e.datepicker._get(n,"constrainInput")?(a=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">s||!a||a.indexOf(s)>-1):t},_doKeyUp:function(t){var i,a=e.datepicker._getInst(t.target);if(a.input.val()!==a.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,e.datepicker._getFormatConfig(a)),i&&(e.datepicker._setDateFromField(a),e.datepicker._updateAlternate(a),e.datepicker._updateDatepicker(a))}catch(s){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,a,n,r,o,u,c;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),a=e.datepicker._get(i,"beforeShow"),n=a?a.apply(t,[t,i]):{},n!==!1&&(s(i.settings,n),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),r=!1,e(t).parents().each(function(){return r|="fixed"===e(this).css("position"),!r}),o={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),o=e.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(u=e.datepicker._get(i,"showAnim"),c=e.datepicker._get(i,"duration"),i.dpDiv.zIndex(e(t).zIndex()+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[u]?i.dpDiv.show(u,e.datepicker._get(i,"showOptions"),c):i.dpDiv[u||"show"](u?c:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,n=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t),t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,a=this._getNumberOfMonths(t),s=a[1],r=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",r*s+"em"),t.dpDiv[(1!==a[0]||1!==a[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,a){var s=t.dpDiv.outerWidth(),n=t.dpDiv.outerHeight(),r=t.input?t.input.outerWidth():0,o=t.input?t.input.outerHeight():0,u=document.documentElement.clientWidth+(a?0:e(document).scrollLeft()),c=document.documentElement.clientHeight+(a?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?s-r:0,i.left-=a&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=a&&i.top===t.input.offset().top+o?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+s>u&&u>s?Math.abs(i.left+s-u):0),i.top-=Math.min(i.top,i.top+n>c&&c>n?Math.abs(n+o):0),i},_findPos:function(t){for(var i,a=this._getInst(t),s=this._get(a,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[s?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,a,s,n,o=this._curInst;!o||t&&o!==e.data(t,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),a=this._get(o,"duration"),s=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),a,s):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?a:null,s),i||s(),this._datepickerShowing=!1,n=this._get(o,"onClose"),n&&n.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),a=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==a)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,a){var s=e(t),n=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(n,i+("M"===a?this._get(n,"showCurrentAtPos"):0),a),this._updateDatepicker(n))},_gotoToday:function(t){var i,a=e(t),s=this._getInst(a[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(i=new Date,s.selectedDay=i.getDate(),s.drawMonth=s.selectedMonth=i.getMonth(),s.drawYear=s.selectedYear=i.getFullYear()),this._notifyChange(s),this._adjustDate(a)},_selectMonthYear:function(t,i,a){var s=e(t),n=this._getInst(s[0]);n["selected"+("M"===a?"Month":"Year")]=n["draw"+("M"===a?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(n),this._adjustDate(s)},_selectDay:function(t,i,a,s){var n,r=e(t);e(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(n=this._getInst(r[0]),n.selectedDay=n.currentDay=e("a",s).html(),n.selectedMonth=n.currentMonth=i,n.selectedYear=n.currentYear=a,this._selectDate(t,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var a,s=e(t),n=this._getInst(s[0]);i=null!=i?i:this._formatDate(n),n.input&&n.input.val(i),this._updateAlternate(n),a=this._get(n,"onSelect"),a?a.apply(n.input?n.input[0]:null,[i,n]):n.input&&n.input.trigger("change"),n.inline?this._updateDatepicker(n):(this._hideDatepicker(),this._lastInput=n.input[0],"object"!=typeof n.input[0]&&n.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,a,s,n=this._get(t,"altField");n&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),a=this._getDate(t),s=this.formatDate(i,a,this._getFormatConfig(t)),e(n).each(function(){e(this).val(s)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(i,a,s){if(null==i||null==a)throw"Invalid arguments";if(a="object"==typeof a?""+a:a+"",""===a)return null;var n,r,o,u,c=0,h=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,l="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,p=(s?s.dayNames:null)||this._defaults.dayNames,g=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,m=(s?s.monthNames:null)||this._defaults.monthNames,f=-1,_=-1,v=-1,k=-1,y=!1,b=function(e){var t=i.length>n+1&&i.charAt(n+1)===e;return t&&n++,t},D=function(e){var t=b(e),i="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,s=RegExp("^\\d{1,"+i+"}"),n=a.substring(c).match(s);if(!n)throw"Missing number at position "+c;return c+=n[0].length,parseInt(n[0],10)},w=function(i,s,n){var r=-1,o=e.map(b(i)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,i){var s=i[1];return a.substr(c,s.length).toLowerCase()===s.toLowerCase()?(r=i[0],c+=s.length,!1):t}),-1!==r)return r+1;throw"Unknown name at position "+c},M=function(){if(a.charAt(c)!==i.charAt(n))throw"Unexpected literal at position "+c;c++};for(n=0;i.length>n;n++)if(y)"'"!==i.charAt(n)||b("'")?M():y=!1;else switch(i.charAt(n)){case"d":v=D("d");break;case"D":w("D",d,p);break;case"o":k=D("o");break;case"m":_=D("m");break;case"M":_=w("M",g,m);break;case"y":f=D("y");break;case"@":u=new Date(D("@")),f=u.getFullYear(),_=u.getMonth()+1,v=u.getDate();break;case"!":u=new Date((D("!")-this._ticksTo1970)/1e4),f=u.getFullYear(),_=u.getMonth()+1,v=u.getDate();break;case"'":b("'")?M():y=!0;break;default:M()}if(a.length>c&&(o=a.substr(c),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===f?f=(new Date).getFullYear():100>f&&(f+=(new Date).getFullYear()-(new Date).getFullYear()%100+(l>=f?0:-100)),k>-1)for(_=1,v=k;;){if(r=this._getDaysInMonth(f,_-1),r>=v)break;_++,v-=r}if(u=this._daylightSavingAdjust(new Date(f,_-1,v)),u.getFullYear()!==f||u.getMonth()+1!==_||u.getDate()!==v)throw"Invalid date";return u},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var a,s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,n=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,u=function(t){var i=e.length>a+1&&e.charAt(a+1)===t;return i&&a++,i},c=function(e,t,i){var a=""+t;if(u(e))for(;i>a.length;)a="0"+a;return a},h=function(e,t,i,a){return u(e)?a[t]:i[t]},l="",d=!1;if(t)for(a=0;e.length>a;a++)if(d)"'"!==e.charAt(a)||u("'")?l+=e.charAt(a):d=!1;else switch(e.charAt(a)){case"d":l+=c("d",t.getDate(),2);break;case"D":l+=h("D",t.getDay(),s,n);break;case"o":l+=c("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=c("m",t.getMonth()+1,2);break;case"M":l+=h("M",t.getMonth(),r,o);break;case"y":l+=u("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":l+=t.getTime();break;case"!":l+=1e4*t.getTime()+this._ticksTo1970;break;case"'":u("'")?l+="'":d=!0;break;default:l+=e.charAt(a)}return l},_possibleChars:function(e){var t,i="",a=!1,s=function(i){var a=e.length>t+1&&e.charAt(t+1)===i;return a&&t++,a};for(t=0;e.length>t;t++)if(a)"'"!==e.charAt(t)||s("'")?i+=e.charAt(t):a=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":s("'")?i+="'":a=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,i){return e.settings[i]!==t?e.settings[i]:this._defaults[i]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),a=e.lastVal=e.input?e.input.val():null,s=this._getDefaultDate(e),n=s,r=this._getFormatConfig(e);try{n=this.parseDate(i,a,r)||s}catch(o){a=t?"":a}e.selectedDay=n.getDate(),e.drawMonth=e.selectedMonth=n.getMonth(),e.drawYear=e.selectedYear=n.getFullYear(),e.currentDay=a?n.getDate():0,e.currentMonth=a?n.getMonth():0,e.currentYear=a?n.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,a){var s=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},n=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(a){}for(var s=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,n=s.getFullYear(),r=s.getMonth(),o=s.getDate(),u=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,c=u.exec(i);c;){switch(c[2]||"d"){case"d":case"D":o+=parseInt(c[1],10);break;case"w":case"W":o+=7*parseInt(c[1],10);break;case"m":case"M":r+=parseInt(c[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r));break;case"y":case"Y":n+=parseInt(c[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r))}c=u.exec(i)}return new Date(n,r,o)},r=null==i||""===i?a:"string"==typeof i?n(i):"number"==typeof i?isNaN(i)?a:s(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?a:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var a=!t,s=e.selectedMonth,n=e.selectedYear,r=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=r.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=r.getMonth(),e.drawYear=e.selectedYear=e.currentYear=r.getFullYear(),s===e.selectedMonth&&n===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(a?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),a="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(a,-i,"M")},next:function(){e.datepicker._adjustDate(a,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(a)},selectDay:function(){return e.datepicker._selectDay(a,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(a,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(a,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,a,s,n,r,o,u,c,h,l,d,p,g,m,f,_,v,k,y,b,D,w,M,C,x,I,N,T,A,E,S,Y,F,P,O,j,K,R,H=new Date,W=this._daylightSavingAdjust(new Date(H.getFullYear(),H.getMonth(),H.getDate())),L=this._get(e,"isRTL"),U=this._get(e,"showButtonPanel"),B=this._get(e,"hideIfNoPrevNext"),z=this._get(e,"navigationAsDateFormat"),q=this._getNumberOfMonths(e),G=this._get(e,"showCurrentAtPos"),J=this._get(e,"stepMonths"),Q=1!==q[0]||1!==q[1],V=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),$=this._getMinMaxDate(e,"min"),X=this._getMinMaxDate(e,"max"),Z=e.drawMonth-G,et=e.drawYear;if(0>Z&&(Z+=12,et--),X)for(t=this._daylightSavingAdjust(new Date(X.getFullYear(),X.getMonth()-q[0]*q[1]+1,X.getDate())),t=$&&$>t?$:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=z?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-J,1)),this._getFormatConfig(e)):i,a=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"e":"w")+"'>"+i+"</span></a>":B?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"e":"w")+"'>"+i+"</span></a>",s=this._get(e,"nextText"),s=z?this.formatDate(s,this._daylightSavingAdjust(new Date(et,Z+J,1)),this._getFormatConfig(e)):s,n=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"w":"e")+"'>"+s+"</span></a>":B?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"w":"e")+"'>"+s+"</span></a>",r=this._get(e,"currentText"),o=this._get(e,"gotoCurrent")&&e.currentDay?V:W,r=z?this.formatDate(r,o,this._getFormatConfig(e)):r,u=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",c=U?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(L?u:"")+(this._isInRange(e,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(L?"":u)+"</div>":"",h=parseInt(this._get(e,"firstDay"),10),h=isNaN(h)?0:h,l=this._get(e,"showWeek"),d=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),g=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),f=this._get(e,"beforeShowDay"),_=this._get(e,"showOtherMonths"),v=this._get(e,"selectOtherMonths"),k=this._getDefaultDate(e),y="",D=0;q[0]>D;D++){for(w="",this.maxRows=4,M=0;q[1]>M;M++){if(C=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),x=" ui-corner-all",I="",Q){if(I+="<div class='ui-datepicker-group",q[1]>1)switch(M){case 0:I+=" ui-datepicker-group-first",x=" ui-corner-"+(L?"right":"left");break;case q[1]-1:I+=" ui-datepicker-group-last",x=" ui-corner-"+(L?"left":"right");break;default:I+=" ui-datepicker-group-middle",x=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+x+"'>"+(/all|left/.test(x)&&0===D?L?n:a:"")+(/all|right/.test(x)&&0===D?L?a:n:"")+this._generateMonthYearHeader(e,Z,et,$,X,D>0||M>0,g,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",N=l?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",b=0;7>b;b++)T=(b+h)%7,N+="<th"+((b+h+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[T]+"'>"+p[T]+"</span></th>";for(I+=N+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),E=(this._getFirstDayOfMonth(et,Z)-h+7)%7,S=Math.ceil((E+A)/7),Y=Q?this.maxRows>S?this.maxRows:S:S,this.maxRows=Y,F=this._daylightSavingAdjust(new Date(et,Z,1-E)),P=0;Y>P;P++){for(I+="<tr>",O=l?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(F)+"</td>":"",b=0;7>b;b++)j=f?f.apply(e.input?e.input[0]:null,[F]):[!0,""],K=F.getMonth()!==Z,R=K&&!v||!j[0]||$&&$>F||X&&F>X,O+="<td class='"+((b+h+6)%7>=5?" ui-datepicker-week-end":"")+(K?" ui-datepicker-other-month":"")+(F.getTime()===C.getTime()&&Z===e.selectedMonth&&e._keyEvent||k.getTime()===F.getTime()&&k.getTime()===C.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(K&&!_?"":" "+j[1]+(F.getTime()===V.getTime()?" "+this._currentClass:"")+(F.getTime()===W.getTime()?" ui-datepicker-today":""))+"'"+(K&&!_||!j[2]?"":" title='"+j[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+F.getMonth()+"' data-year='"+F.getFullYear()+"'")+">"+(K&&!_?"&#xa0;":R?"<span class='ui-state-default'>"+F.getDate()+"</span>":"<a class='ui-state-default"+(F.getTime()===W.getTime()?" ui-state-highlight":"")+(F.getTime()===V.getTime()?" ui-state-active":"")+(K?" ui-priority-secondary":"")+"' href='#'>"+F.getDate()+"</a>")+"</td>",F.setDate(F.getDate()+1),F=this._daylightSavingAdjust(F);I+=O+"</tr>"}Z++,Z>11&&(Z=0,et++),I+="</tbody></table>"+(Q?"</div>"+(q[0]>0&&M===q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),w+=I}y+=w}return y+=c,e._keyEvent=!1,y},_generateMonthYearHeader:function(e,t,i,a,s,n,r,o){var u,c,h,l,d,p,g,m,f=this._get(e,"changeMonth"),_=this._get(e,"changeYear"),v=this._get(e,"showMonthAfterYear"),k="<div class='ui-datepicker-title'>",y="";if(n||!f)y+="<span class='ui-datepicker-month'>"+r[t]+"</span>";else{for(u=a&&a.getFullYear()===i,c=s&&s.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",h=0;12>h;h++)(!u||h>=a.getMonth())&&(!c||s.getMonth()>=h)&&(y+="<option value='"+h+"'"+(h===t?" selected='selected'":"")+">"+o[h]+"</option>");y+="</select>"}if(v||(k+=y+(!n&&f&&_?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",n||!_)k+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(l=this._get(e,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?d+parseInt(e,10):parseInt(e,10);
return isNaN(t)?d:t},g=p(l[0]),m=Math.max(g,p(l[1]||"")),g=a?Math.max(g,a.getFullYear()):g,m=s?Math.min(m,s.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=g;g++)e.yearshtml+="<option value='"+g+"'"+(g===i?" selected='selected'":"")+">"+g+"</option>";e.yearshtml+="</select>",k+=e.yearshtml,e.yearshtml=null}return k+=this._get(e,"yearSuffix"),v&&(k+=(!n&&f&&_?"":"&#xa0;")+y),k+="</div>"},_adjustInstDate:function(e,t,i){var a=e.drawYear+("Y"===i?t:0),s=e.drawMonth+("M"===i?t:0),n=Math.min(e.selectedDay,this._getDaysInMonth(a,s))+("D"===i?t:0),r=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(a,s,n)));e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),s=i&&i>t?i:t;return a&&s>a?a:s},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,a){var s=this._getNumberOfMonths(e),n=this._daylightSavingAdjust(new Date(i,a+(0>t?t:s[0]*s[1]),1));return 0>t&&n.setDate(this._getDaysInMonth(n.getFullYear(),n.getMonth())),this._isInRange(e,n)},_isInRange:function(e,t){var i,a,s=this._getMinMaxDate(e,"min"),n=this._getMinMaxDate(e,"max"),r=null,o=null,u=this._get(e,"yearRange");return u&&(i=u.split(":"),a=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=a),i[1].match(/[+\-].*/)&&(o+=a)),(!s||t.getTime()>=s.getTime())&&(!n||t.getTime()<=n.getTime())&&(!r||t.getFullYear()>=r)&&(!o||o>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,a){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var s=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(a,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),s,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new i,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.10.4"})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,l,h,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),l=a.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-a.width()/2,top:e.pageY-l.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),u["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](u,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);
/*
 * jQuery outside events - v1.1 - 3/16/2010
 * http://benalman.com/projects/jquery-outside-events-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($,c,b){$.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(" "),function(d){a(d)});a("focusin","focus"+b);a("focusout","blur"+b);$.addOutsideEvent=a;function a(g,e){e=e||g+b;var d=$(),h=g+"."+e+"-special-event";$.event.special[e]={setup:function(){d=d.add(this);if(d.length===1){$(c).bind(h,f)}},teardown:function(){d=d.not(this);if(d.length===0){$(c).unbind(h)}},add:function(i){var j=i.handler;i.handler=function(l,k){l.target=k;j.apply(this,arguments)}}};function f(i){$(d).each(function(){var j=$(this);if(this!==i.target&&!j.has(i.target).length){j.triggerHandler(e,[i.target])}})}}})(jQuery,document,"outside");
/*! jQuery UI - v1.10.4 - 2014-01-23
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.datepicker.js, jquery.ui.slider.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */


(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),k=t.position.getScrollInfo(y),w=(e.collision||"flip").split(" "),D={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=h.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=h.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),D[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),a=i(D.at,p,g),v.left+=a[0],v.top+=a[1],this.each(function(){var n,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),x=u+f+s(this,"marginRight")+k.width,C=d+_+s(this,"marginBottom")+k.height,M=t.extend({},v),T=i(D.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?M.left-=u:"center"===e.my[0]&&(M.left-=u/2),"bottom"===e.my[1]?M.top-=d:"center"===e.my[1]&&(M.top-=d/2),M.left+=T[0],M.top+=T[1],t.support.offsetFractions||(M.left=l(M.left),M.top=l(M.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[w[i]]&&t.ui.position[w[i]][s](M,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:x,collisionHeight:C,offset:[a[0]+T[0],a[1]+T[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(h=function(t){var i=m.left-M.left,s=i+p-u,n=m.top-M.top,a=n+g-d,l={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:M.left,top:M.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(l.horizontal="center"),d>g&&g>r(n+a)&&(l.vertical="middle"),l.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,l)}),c.offset(t.extend(M,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-o-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-o-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-o-a,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e,t){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){e.datepicker._isDisabledDatepicker(n.inline?t.parent()[0]:n.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))})}function s(t,i){e.extend(t,i);for(var a in i)null==i[a]&&(t[a]=i[a]);return t}e.extend(e.ui,{datepicker:{version:"1.10.4"}});var n,r="datepicker";e.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return s(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var a,s,n;a=t.nodeName.toLowerCase(),s="div"===a||"span"===a,t.id||(this.uuid+=1,t.id="dp"+this.uuid),n=this._newInst(e(t),s),n.settings=e.extend({},i||{}),"input"===a?this._connectDatepicker(t,n):s&&this._inlineDatepicker(t,n)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var a=e(t);i.append=e([]),i.trigger=e([]),a.hasClass(this.markerClassName)||(this._attachments(a,i),a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,r,i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var a,s,n,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=e("<span class='"+this._appendClass+"'>"+r+"</span>"),t[o?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),a=this._get(i,"showOn"),("focus"===a||"both"===a)&&t.focus(this._showDatepicker),("button"===a||"both"===a)&&(s=this._get(i,"buttonText"),n=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:n,alt:s,title:s}):e("<button type='button'></button>").addClass(this._triggerClass).html(n?e("<img/>").attr({src:n,alt:s,title:s}):s)),t[o?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,a,s,n=new Date(2009,11,20),r=this._get(e,"dateFormat");r.match(/[DM]/)&&(t=function(e){for(i=0,a=0,s=0;e.length>s;s++)e[s].length>i&&(i=e[s].length,a=s);return a},n.setMonth(t(this._get(e,r.match(/MM/)?"monthNames":"monthNamesShort"))),n.setDate(t(this._get(e,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-n.getDay())),e.input.attr("size",this._formatDate(e,n).length)}},_inlineDatepicker:function(t,i){var a=e(t);a.hasClass(this.markerClassName)||(a.addClass(this.markerClassName).append(i.dpDiv),e.data(t,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,a,n,o){var u,c,h,l,d,p=this._dialogInst;return p||(this.uuid+=1,u="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+u+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},e.data(this._dialogInput[0],r,p)),s(p.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(c=document.documentElement.clientWidth,h=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[c/2-100+l,h/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=a,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(t){var i,a=e(t),s=e.data(t,r);a.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,r),"input"===i?(s.append.remove(),s.trigger.remove(),a.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&a.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var i,a,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(a=s.children("."+this._inlineClass),a.children().removeClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,a,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(a=s.children("."+this._inlineClass),a.children().addClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,a,n){var r,o,u,c,h=this._getInst(i);return 2===arguments.length&&"string"==typeof a?"defaults"===a?e.extend({},e.datepicker._defaults):h?"all"===a?e.extend({},h.settings):this._get(h,a):null:(r=a||{},"string"==typeof a&&(r={},r[a]=n),h&&(this._curInst===h&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),u=this._getMinMaxDate(h,"min"),c=this._getMinMaxDate(h,"max"),s(h.settings,r),null!==u&&r.dateFormat!==t&&r.minDate===t&&(h.settings.minDate=this._formatDate(h,u)),null!==c&&r.dateFormat!==t&&r.maxDate===t&&(h.settings.maxDate=this._formatDate(h,c)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(e(i),h),this._autoSize(h),this._setDate(h,o),this._updateAlternate(h),this._updateDatepicker(h)),t)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,a,s,n=e.datepicker._getInst(t.target),r=!0,o=n.dpDiv.is(".ui-datepicker-rtl");if(n._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),r=!1;break;case 13:return s=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",n.dpDiv),s[0]&&e.datepicker._selectDay(t.target,n.selectedMonth,n.selectedYear,s[0]),i=e.datepicker._get(n,"onSelect"),i?(a=e.datepicker._formatDate(n),i.apply(n.input?n.input[0]:null,[a,n])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),r=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),r=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?1:-1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),r=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?-1:1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),r=t.ctrlKey||t.metaKey;break;default:r=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):r=!1;r&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(i){var a,s,n=e.datepicker._getInst(i.target);return e.datepicker._get(n,"constrainInput")?(a=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">s||!a||a.indexOf(s)>-1):t},_doKeyUp:function(t){var i,a=e.datepicker._getInst(t.target);if(a.input.val()!==a.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,e.datepicker._getFormatConfig(a)),i&&(e.datepicker._setDateFromField(a),e.datepicker._updateAlternate(a),e.datepicker._updateDatepicker(a))}catch(s){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,a,n,r,o,u,c;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),a=e.datepicker._get(i,"beforeShow"),n=a?a.apply(t,[t,i]):{},n!==!1&&(s(i.settings,n),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),r=!1,e(t).parents().each(function(){return r|="fixed"===e(this).css("position"),!r}),o={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),o=e.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(u=e.datepicker._get(i,"showAnim"),c=e.datepicker._get(i,"duration"),i.dpDiv.zIndex(e(t).zIndex()+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[u]?i.dpDiv.show(u,e.datepicker._get(i,"showOptions"),c):i.dpDiv[u||"show"](u?c:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,n=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t),t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,a=this._getNumberOfMonths(t),s=a[1],r=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",r*s+"em"),t.dpDiv[(1!==a[0]||1!==a[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,a){var s=t.dpDiv.outerWidth(),n=t.dpDiv.outerHeight(),r=t.input?t.input.outerWidth():0,o=t.input?t.input.outerHeight():0,u=document.documentElement.clientWidth+(a?0:e(document).scrollLeft()),c=document.documentElement.clientHeight+(a?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?s-r:0,i.left-=a&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=a&&i.top===t.input.offset().top+o?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+s>u&&u>s?Math.abs(i.left+s-u):0),i.top-=Math.min(i.top,i.top+n>c&&c>n?Math.abs(n+o):0),i},_findPos:function(t){for(var i,a=this._getInst(t),s=this._get(a,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[s?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,a,s,n,o=this._curInst;!o||t&&o!==e.data(t,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),a=this._get(o,"duration"),s=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),a,s):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?a:null,s),i||s(),this._datepickerShowing=!1,n=this._get(o,"onClose"),n&&n.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),a=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==a)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,a){var s=e(t),n=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(n,i+("M"===a?this._get(n,"showCurrentAtPos"):0),a),this._updateDatepicker(n))},_gotoToday:function(t){var i,a=e(t),s=this._getInst(a[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(i=new Date,s.selectedDay=i.getDate(),s.drawMonth=s.selectedMonth=i.getMonth(),s.drawYear=s.selectedYear=i.getFullYear()),this._notifyChange(s),this._adjustDate(a)},_selectMonthYear:function(t,i,a){var s=e(t),n=this._getInst(s[0]);n["selected"+("M"===a?"Month":"Year")]=n["draw"+("M"===a?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(n),this._adjustDate(s)},_selectDay:function(t,i,a,s){var n,r=e(t);e(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(n=this._getInst(r[0]),n.selectedDay=n.currentDay=e("a",s).html(),n.selectedMonth=n.currentMonth=i,n.selectedYear=n.currentYear=a,this._selectDate(t,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var a,s=e(t),n=this._getInst(s[0]);i=null!=i?i:this._formatDate(n),n.input&&n.input.val(i),this._updateAlternate(n),a=this._get(n,"onSelect"),a?a.apply(n.input?n.input[0]:null,[i,n]):n.input&&n.input.trigger("change"),n.inline?this._updateDatepicker(n):(this._hideDatepicker(),this._lastInput=n.input[0],"object"!=typeof n.input[0]&&n.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,a,s,n=this._get(t,"altField");n&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),a=this._getDate(t),s=this.formatDate(i,a,this._getFormatConfig(t)),e(n).each(function(){e(this).val(s)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(i,a,s){if(null==i||null==a)throw"Invalid arguments";if(a="object"==typeof a?""+a:a+"",""===a)return null;var n,r,o,u,c=0,h=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,l="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,p=(s?s.dayNames:null)||this._defaults.dayNames,g=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,m=(s?s.monthNames:null)||this._defaults.monthNames,f=-1,_=-1,v=-1,k=-1,y=!1,b=function(e){var t=i.length>n+1&&i.charAt(n+1)===e;return t&&n++,t},D=function(e){var t=b(e),i="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,s=RegExp("^\\d{1,"+i+"}"),n=a.substring(c).match(s);if(!n)throw"Missing number at position "+c;return c+=n[0].length,parseInt(n[0],10)},w=function(i,s,n){var r=-1,o=e.map(b(i)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,i){var s=i[1];return a.substr(c,s.length).toLowerCase()===s.toLowerCase()?(r=i[0],c+=s.length,!1):t}),-1!==r)return r+1;throw"Unknown name at position "+c},M=function(){if(a.charAt(c)!==i.charAt(n))throw"Unexpected literal at position "+c;c++};for(n=0;i.length>n;n++)if(y)"'"!==i.charAt(n)||b("'")?M():y=!1;else switch(i.charAt(n)){case"d":v=D("d");break;case"D":w("D",d,p);break;case"o":k=D("o");break;case"m":_=D("m");break;case"M":_=w("M",g,m);break;case"y":f=D("y");break;case"@":u=new Date(D("@")),f=u.getFullYear(),_=u.getMonth()+1,v=u.getDate();break;case"!":u=new Date((D("!")-this._ticksTo1970)/1e4),f=u.getFullYear(),_=u.getMonth()+1,v=u.getDate();break;case"'":b("'")?M():y=!0;break;default:M()}if(a.length>c&&(o=a.substr(c),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===f?f=(new Date).getFullYear():100>f&&(f+=(new Date).getFullYear()-(new Date).getFullYear()%100+(l>=f?0:-100)),k>-1)for(_=1,v=k;;){if(r=this._getDaysInMonth(f,_-1),r>=v)break;_++,v-=r}if(u=this._daylightSavingAdjust(new Date(f,_-1,v)),u.getFullYear()!==f||u.getMonth()+1!==_||u.getDate()!==v)throw"Invalid date";return u},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var a,s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,n=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,u=function(t){var i=e.length>a+1&&e.charAt(a+1)===t;return i&&a++,i},c=function(e,t,i){var a=""+t;if(u(e))for(;i>a.length;)a="0"+a;return a},h=function(e,t,i,a){return u(e)?a[t]:i[t]},l="",d=!1;if(t)for(a=0;e.length>a;a++)if(d)"'"!==e.charAt(a)||u("'")?l+=e.charAt(a):d=!1;else switch(e.charAt(a)){case"d":l+=c("d",t.getDate(),2);break;case"D":l+=h("D",t.getDay(),s,n);break;case"o":l+=c("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=c("m",t.getMonth()+1,2);break;case"M":l+=h("M",t.getMonth(),r,o);break;case"y":l+=u("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":l+=t.getTime();break;case"!":l+=1e4*t.getTime()+this._ticksTo1970;break;case"'":u("'")?l+="'":d=!0;break;default:l+=e.charAt(a)}return l},_possibleChars:function(e){var t,i="",a=!1,s=function(i){var a=e.length>t+1&&e.charAt(t+1)===i;return a&&t++,a};for(t=0;e.length>t;t++)if(a)"'"!==e.charAt(t)||s("'")?i+=e.charAt(t):a=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":s("'")?i+="'":a=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,i){return e.settings[i]!==t?e.settings[i]:this._defaults[i]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),a=e.lastVal=e.input?e.input.val():null,s=this._getDefaultDate(e),n=s,r=this._getFormatConfig(e);try{n=this.parseDate(i,a,r)||s}catch(o){a=t?"":a}e.selectedDay=n.getDate(),e.drawMonth=e.selectedMonth=n.getMonth(),e.drawYear=e.selectedYear=n.getFullYear(),e.currentDay=a?n.getDate():0,e.currentMonth=a?n.getMonth():0,e.currentYear=a?n.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,a){var s=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},n=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(a){}for(var s=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,n=s.getFullYear(),r=s.getMonth(),o=s.getDate(),u=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,c=u.exec(i);c;){switch(c[2]||"d"){case"d":case"D":o+=parseInt(c[1],10);break;case"w":case"W":o+=7*parseInt(c[1],10);break;case"m":case"M":r+=parseInt(c[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r));break;case"y":case"Y":n+=parseInt(c[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r))}c=u.exec(i)}return new Date(n,r,o)},r=null==i||""===i?a:"string"==typeof i?n(i):"number"==typeof i?isNaN(i)?a:s(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?a:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var a=!t,s=e.selectedMonth,n=e.selectedYear,r=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=r.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=r.getMonth(),e.drawYear=e.selectedYear=e.currentYear=r.getFullYear(),s===e.selectedMonth&&n===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(a?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),a="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(a,-i,"M")},next:function(){e.datepicker._adjustDate(a,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(a)},selectDay:function(){return e.datepicker._selectDay(a,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(a,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(a,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,a,s,n,r,o,u,c,h,l,d,p,g,m,f,_,v,k,y,b,D,w,M,C,x,I,N,T,A,E,S,Y,F,P,O,j,K,R,H=new Date,W=this._daylightSavingAdjust(new Date(H.getFullYear(),H.getMonth(),H.getDate())),L=this._get(e,"isRTL"),U=this._get(e,"showButtonPanel"),B=this._get(e,"hideIfNoPrevNext"),z=this._get(e,"navigationAsDateFormat"),q=this._getNumberOfMonths(e),G=this._get(e,"showCurrentAtPos"),J=this._get(e,"stepMonths"),Q=1!==q[0]||1!==q[1],V=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),$=this._getMinMaxDate(e,"min"),X=this._getMinMaxDate(e,"max"),Z=e.drawMonth-G,et=e.drawYear;if(0>Z&&(Z+=12,et--),X)for(t=this._daylightSavingAdjust(new Date(X.getFullYear(),X.getMonth()-q[0]*q[1]+1,X.getDate())),t=$&&$>t?$:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=z?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-J,1)),this._getFormatConfig(e)):i,a=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"e":"w")+"'>"+i+"</span></a>":B?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"e":"w")+"'>"+i+"</span></a>",s=this._get(e,"nextText"),s=z?this.formatDate(s,this._daylightSavingAdjust(new Date(et,Z+J,1)),this._getFormatConfig(e)):s,n=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"w":"e")+"'>"+s+"</span></a>":B?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"w":"e")+"'>"+s+"</span></a>",r=this._get(e,"currentText"),o=this._get(e,"gotoCurrent")&&e.currentDay?V:W,r=z?this.formatDate(r,o,this._getFormatConfig(e)):r,u=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",c=U?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(L?u:"")+(this._isInRange(e,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(L?"":u)+"</div>":"",h=parseInt(this._get(e,"firstDay"),10),h=isNaN(h)?0:h,l=this._get(e,"showWeek"),d=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),g=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),f=this._get(e,"beforeShowDay"),_=this._get(e,"showOtherMonths"),v=this._get(e,"selectOtherMonths"),k=this._getDefaultDate(e),y="",D=0;q[0]>D;D++){for(w="",this.maxRows=4,M=0;q[1]>M;M++){if(C=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),x=" ui-corner-all",I="",Q){if(I+="<div class='ui-datepicker-group",q[1]>1)switch(M){case 0:I+=" ui-datepicker-group-first",x=" ui-corner-"+(L?"right":"left");break;case q[1]-1:I+=" ui-datepicker-group-last",x=" ui-corner-"+(L?"left":"right");break;default:I+=" ui-datepicker-group-middle",x=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+x+"'>"+(/all|left/.test(x)&&0===D?L?n:a:"")+(/all|right/.test(x)&&0===D?L?a:n:"")+this._generateMonthYearHeader(e,Z,et,$,X,D>0||M>0,g,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",N=l?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",b=0;7>b;b++)T=(b+h)%7,N+="<th"+((b+h+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[T]+"'>"+p[T]+"</span></th>";for(I+=N+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),E=(this._getFirstDayOfMonth(et,Z)-h+7)%7,S=Math.ceil((E+A)/7),Y=Q?this.maxRows>S?this.maxRows:S:S,this.maxRows=Y,F=this._daylightSavingAdjust(new Date(et,Z,1-E)),P=0;Y>P;P++){for(I+="<tr>",O=l?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(F)+"</td>":"",b=0;7>b;b++)j=f?f.apply(e.input?e.input[0]:null,[F]):[!0,""],K=F.getMonth()!==Z,R=K&&!v||!j[0]||$&&$>F||X&&F>X,O+="<td class='"+((b+h+6)%7>=5?" ui-datepicker-week-end":"")+(K?" ui-datepicker-other-month":"")+(F.getTime()===C.getTime()&&Z===e.selectedMonth&&e._keyEvent||k.getTime()===F.getTime()&&k.getTime()===C.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(K&&!_?"":" "+j[1]+(F.getTime()===V.getTime()?" "+this._currentClass:"")+(F.getTime()===W.getTime()?" ui-datepicker-today":""))+"'"+(K&&!_||!j[2]?"":" title='"+j[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+F.getMonth()+"' data-year='"+F.getFullYear()+"'")+">"+(K&&!_?"&#xa0;":R?"<span class='ui-state-default'>"+F.getDate()+"</span>":"<a class='ui-state-default"+(F.getTime()===W.getTime()?" ui-state-highlight":"")+(F.getTime()===V.getTime()?" ui-state-active":"")+(K?" ui-priority-secondary":"")+"' href='#'>"+F.getDate()+"</a>")+"</td>",F.setDate(F.getDate()+1),F=this._daylightSavingAdjust(F);I+=O+"</tr>"}Z++,Z>11&&(Z=0,et++),I+="</tbody></table>"+(Q?"</div>"+(q[0]>0&&M===q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),w+=I}y+=w}return y+=c,e._keyEvent=!1,y},_generateMonthYearHeader:function(e,t,i,a,s,n,r,o){var u,c,h,l,d,p,g,m,f=this._get(e,"changeMonth"),_=this._get(e,"changeYear"),v=this._get(e,"showMonthAfterYear"),k="<div class='ui-datepicker-title'>",y="";if(n||!f)y+="<span class='ui-datepicker-month'>"+r[t]+"</span>";else{for(u=a&&a.getFullYear()===i,c=s&&s.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",h=0;12>h;h++)(!u||h>=a.getMonth())&&(!c||s.getMonth()>=h)&&(y+="<option value='"+h+"'"+(h===t?" selected='selected'":"")+">"+o[h]+"</option>");y+="</select>"}if(v||(k+=y+(!n&&f&&_?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",n||!_)k+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(l=this._get(e,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?d+parseInt(e,10):parseInt(e,10);
return isNaN(t)?d:t},g=p(l[0]),m=Math.max(g,p(l[1]||"")),g=a?Math.max(g,a.getFullYear()):g,m=s?Math.min(m,s.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=g;g++)e.yearshtml+="<option value='"+g+"'"+(g===i?" selected='selected'":"")+">"+g+"</option>";e.yearshtml+="</select>",k+=e.yearshtml,e.yearshtml=null}return k+=this._get(e,"yearSuffix"),v&&(k+=(!n&&f&&_?"":"&#xa0;")+y),k+="</div>"},_adjustInstDate:function(e,t,i){var a=e.drawYear+("Y"===i?t:0),s=e.drawMonth+("M"===i?t:0),n=Math.min(e.selectedDay,this._getDaysInMonth(a,s))+("D"===i?t:0),r=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(a,s,n)));e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),s=i&&i>t?i:t;return a&&s>a?a:s},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,a){var s=this._getNumberOfMonths(e),n=this._daylightSavingAdjust(new Date(i,a+(0>t?t:s[0]*s[1]),1));return 0>t&&n.setDate(this._getDaysInMonth(n.getFullYear(),n.getMonth())),this._isInRange(e,n)},_isInRange:function(e,t){var i,a,s=this._getMinMaxDate(e,"min"),n=this._getMinMaxDate(e,"max"),r=null,o=null,u=this._get(e,"yearRange");return u&&(i=u.split(":"),a=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=a),i[1].match(/[+\-].*/)&&(o+=a)),(!s||t.getTime()>=s.getTime())&&(!n||t.getTime()<=n.getTime())&&(!r||t.getFullYear()>=r)&&(!o||o>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,a){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var s=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(a,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),s,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new i,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.10.4"})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,l,h,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),l=a.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-a.width()/2,top:e.pageY-l.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),u["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](u,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);
/*
 *  Vide - v0.1.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

!function(a,b,c,d){"use strict";function e(b,c,d){this.element=a(b),this._defaults=g,this._name=f,c=c.replace(/\.\w*$/,""),this.settings=a.extend({},g,d),this.path=c,this.init()}var f="vide",g={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%"},h=/iPad|iPhone|iPod/i.test(d.userAgent),i=/Android/i.test(d.userAgent);a[f]={lookup:[]};var j=function(a){var b,c,d={};b=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),c=b.split(",");var e,f,g;for(e=0,f=c.length;f>e;e++)c[e]=c[e].split(":"),g=c[e][1],g||(g=void 0),("string"==typeof g||g instanceof String)&&(g="true"===g||("false"===g?!1:g)),("string"==typeof g||g instanceof String)&&(g=isNaN(g)?g:+g),d[c[e][0]]=g;return d},k=function(a){a=""+a;for(var b,c=a.split(/\s+/),d="50%",e="50%",f=0,g=c.length;g>f;f++)b=c[f],"left"===b?d="0%":"right"===b?d="100%":"top"===b?e="0%":"bottom"===b?e="100%":"center"===b?0===f?d="50%":e="50%":0===f?d=b:e=b;return{x:d,y:e}},l=function(b,c){var d=function(){c(this.src)};a("<img src='"+b+".gif'>").load(d),a("<img src='"+b+".jpg'>").load(d),a("<img src='"+b+".jpeg'>").load(d),a("<img src='"+b+".png'>").load(d)};e.prototype.init=function(){var b=this;this.wrapper=a("<div>");var c=k(this.settings.position);this.wrapper.css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-repeat":"no-repeat","background-position":c.x+" "+c.y}),l(this.path,function(a){b.wrapper.css("background-image","url("+a+")")}),"static"===this.element.css("position")&&this.element.css("position","relative"),this.element.prepend(this.wrapper),h||i||(this.video=a("<video><source src='"+this.path+".mp4' type='video/mp4'><source src='"+this.path+".webm' type='video/webm'><source src='"+this.path+".ogv' type='video/ogg'></video>"),this.video.css("visibility","hidden"),this.video.prop({autoplay:this.settings.autoplay,loop:this.settings.loop,volume:this.settings.volume,muted:this.settings.muted,playbackRate:this.settings.playbackRate}),this.wrapper.append(this.video),this.video.css({margin:"auto",position:"absolute","z-index":-1,top:c.y,left:c.x,"-webkit-transform":"translate(-"+c.x+", -"+c.y+")","-ms-transform":"translate(-"+c.x+", -"+c.y+")",transform:"translate(-"+c.x+", -"+c.y+")"}),this.video.bind("loadedmetadata."+f,function(){b.video.css("visibility","visible"),b.resize()}),a(this.element).bind("resize."+f,function(){b.resize()}))},e.prototype.getVideoObject=function(){return this.video?this.video[0]:null},e.prototype.resize=function(){if(this.video){var a=this.video[0].videoHeight,b=this.video[0].videoWidth,c=this.wrapper.height(),d=this.wrapper.width();this.video.css(d/b>c/a?{width:d+2,height:"auto"}:{width:"auto",height:c+2})}},e.prototype.destroy=function(){this.element.unbind(f),this.video&&this.video.unbind(f),delete a[f].lookup[this.index],this.element.removeData(f),this.wrapper.remove()},a.fn[f]=function(b,c){var d;return this.each(function(){d=a.data(this,f),d&&d.destroy(),d=new e(this,b,c),d.index=a[f].lookup.push(d)-1,a.data(this,f,d)}),this},a(c).ready(function(){a(b).bind("resize."+f,function(){for(var b,c=a[f].lookup.length,d=0;c>d;d++)b=a[f].lookup[d],b&&b.resize()}),a(c).find("[data-"+f+"-bg]").each(function(b,c){var d=a(c),e=d.data(f+"-options"),g=d.data(f+"-bg");e=e?j(e):{},d[f](g,e)})})}(window.jQuery,window,document,navigator);
/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);
/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);
/**
* jquery.matchHeight-min.js master
* http://brm.io/jquery-match-height/
* License: MIT
*/

(function(c){var n=-1,f=-1,g=function(a){return parseFloat(a)||0},r=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),k=a.offset().top-g(a.css("margin-top")),l=0<d.length?d[d.length-1]:null;null===l?d.push(a):1>=Math.floor(Math.abs(b-k))?d[d.length-1]=l.add(a):d.push(a);b=k});return d},p=function(a){var b={byRow:!0,property:"height",target:null,remove:!1};if("object"===typeof a)return c.extend(b,a);"boolean"===typeof a?b.byRow=a:"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=
function(a){a=p(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length&&!a.target)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=p(e),h=c(a),k=[h],l=c(window).scrollTop(),f=c("html").outerHeight(!0),m=h.parents().filter(":hidden");m.each(function(){var a=c(this);
a.data("style-cache",a.attr("style"))});m.css("display","block");d.byRow&&!d.target&&(h.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),k=r(h),h.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"")}));c.each(k,function(a,b){var e=c(b),
f=0;if(d.target)f=d.target.outerHeight(!1);else{if(d.byRow&&1>=e.length){e.css(d.property,"");return}e.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");b={display:b};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")})}e.each(function(){var a=c(this),b=0;d.target&&a.is(d.target)||("border-box"!==a.css("box-sizing")&&(b+=g(a.css("border-top-width"))+g(a.css("border-bottom-width")),b+=g(a.css("padding-top"))+g(a.css("padding-bottom"))),
a.css(d.property,f-b+"px"))})});m.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||null)});b._maintainScroll&&c(window).scrollTop(l/f*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=c(this),d=b.attr("data-mh")||b.attr("data-match-height");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var q=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,
this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===e.type){var d=c(window).width();if(d===n)return;n=d}a?-1===f&&(f=setTimeout(function(){q(e);f=-1},b._throttle)):q(e)};c(b._applyDataApi);c(window).bind("load",function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.3.4
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.4'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);
/*!
 *  GMAP3 Plugin for jQuery
 *  Version   : 6.0.0
 *  Date      : 2014-04-25
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
 *  
 *  Copyright (c) 2010-2014 Jean-Baptiste DEMONTE
 *  All rights reserved.
 */

!function(t,n){function e(t){return"object"==typeof t}function o(t){return"string"==typeof t}function i(t){return"number"==typeof t}function a(t){return t===n}function r(){q=google.maps,A||(A={verbose:!1,queryLimit:{attempt:5,delay:250,random:250},classes:function(){var n={};return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "),function(t,e){n[e]=q[e]}),n}(),map:{mapTypeId:q.MapTypeId.ROADMAP,center:[46.578498,2.457275],zoom:2},overlay:{pane:"floatPane",content:"",offset:{x:0,y:0}},geoloc:{getCurrentPosition:{maximumAge:6e4,timeout:5e3}}})}function s(t,n){return a(t)?"gmap3_"+(n?Z+1:++Z):t}function u(t){var n,e=q.version.split(".");for(t=t.split("."),n=0;n<e.length;n++)e[n]=parseInt(e[n],10);for(n=0;n<t.length;n++){if(t[n]=parseInt(t[n],10),!e.hasOwnProperty(n))return!1;if(e[n]<t[n])return!1}return!0}function l(n,e,o,i,a){function r(e,i){e&&t.each(e,function(t,e){var r=n,s=e;R(e)&&(r=e[0],s=e[1]),i(o,t,function(t){s.apply(r,[a||o,t,u])})})}var s=e.td||{},u={id:i,data:s.data,tag:s.tag};r(s.events,q.event.addListener),r(s.onces,q.event.addListenerOnce)}function d(t){var n,e=[];for(n in t)t.hasOwnProperty(n)&&e.push(n);return e}function c(t,n){var e,o=arguments;for(e=2;e<o.length;e++)if(n in o[e]&&o[e].hasOwnProperty(n))return void(t[n]=o[e][n])}function p(n,e){var o,i,a=["data","tag","id","events","onces"],r={};if(n.td)for(o in n.td)n.td.hasOwnProperty(o)&&"options"!==o&&"values"!==o&&(r[o]=n.td[o]);for(i=0;i<a.length;i++)c(r,a[i],e,n.td);return r.options=t.extend({},n.opts||{},e.options||{}),r}function f(){if(A.verbose){var t,n=[];if(window.console&&z(console.error)){for(t=0;t<arguments.length;t++)n.push(arguments[t]);console.error.apply(console,n)}else{for(n="",t=0;t<arguments.length;t++)n+=arguments[t].toString()+" ";alert(n)}}}function g(t){return(i(t)||o(t))&&""!==t&&!isNaN(t)}function h(t){var n,o=[];if(!a(t))if(e(t))if(i(t.length))o=t;else for(n in t)o.push(t[n]);else o.push(t);return o}function v(n){return n?z(n)?n:(n=h(n),function(o){var i;if(a(o))return!1;if(e(o)){for(i=0;i<o.length;i++)if(t.inArray(o[i],n)>=0)return!0;return!1}return t.inArray(o,n)>=0}):void 0}function m(t,n,e){var i=n?t:null;return!t||o(t)?i:t.latLng?m(t.latLng):t instanceof q.LatLng?t:g(t.lat)?new q.LatLng(t.lat,t.lng):!e&&R(t)&&g(t[0])&&g(t[1])?new q.LatLng(t[0],t[1]):i}function y(t){var n,e;return!t||t instanceof q.LatLngBounds?t||null:(R(t)?2===t.length?(n=m(t[0]),e=m(t[1])):4===t.length&&(n=m([t[0],t[1]]),e=m([t[2],t[3]])):"ne"in t&&"sw"in t?(n=m(t.ne),e=m(t.sw)):"n"in t&&"e"in t&&"s"in t&&"w"in t&&(n=m([t.n,t.e]),e=m([t.s,t.w])),n&&e?new q.LatLngBounds(e,n):null)}function w(t,n,e,i,a){var r=e?m(i.td,!1,!0):!1,s=r?{latLng:r}:i.td.address?o(i.td.address)?{address:i.td.address}:i.td.address:!1,u=s?G.get(s):!1,l=this;s?(a=a||0,u?(i.latLng=u.results[0].geometry.location,i.results=u.results,i.status=u.status,n.apply(t,[i])):(s.location&&(s.location=m(s.location)),s.bounds&&(s.bounds=y(s.bounds)),M().geocode(s,function(o,r){r===q.GeocoderStatus.OK?(G.store(s,{results:o,status:r}),i.latLng=o[0].geometry.location,i.results=o,i.status=r,n.apply(t,[i])):r===q.GeocoderStatus.OVER_QUERY_LIMIT&&a<A.queryLimit.attempt?setTimeout(function(){w.apply(l,[t,n,e,i,a+1])},A.queryLimit.delay+Math.floor(Math.random()*A.queryLimit.random)):(f("geocode failed",r,s),i.latLng=i.results=!1,i.status=r,n.apply(t,[i]))}))):(i.latLng=m(i.td,!1,!0),n.apply(t,[i]))}function L(n,e,o,i){function a(){do s++;while(s<n.length&&!("address"in n[s]));return s>=n.length?void o.apply(e,[i]):void w(r,function(e){delete e.td,t.extend(n[s],e),a.apply(r,[])},!0,{td:n[s]})}var r=this,s=-1;a()}function b(t,n,e){var o=!1;navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(function(i){o||(o=!0,e.latLng=new q.LatLng(i.coords.latitude,i.coords.longitude),n.apply(t,[e]))},function(){o||(o=!0,e.latLng=!1,n.apply(t,[e]))},e.opts.getCurrentPosition):(e.latLng=!1,n.apply(t,[e]))}function x(t){var n,o=!1;if(e(t)&&t.hasOwnProperty("get")){for(n in t)if("get"!==n)return!1;o=!t.get.hasOwnProperty("callback")}return o}function M(){return V.geocoder||(V.geocoder=new q.Geocoder),V.geocoder}function I(){var t=[];this.get=function(n){if(t.length){var o,i,a,r,s,u=d(n);for(o=0;o<t.length;o++){for(r=t[o],s=u.length===r.keys.length,i=0;i<u.length&&s;i++)a=u[i],s=a in r.request,s&&(s=e(n[a])&&"equals"in n[a]&&z(n[a])?n[a].equals(r.request[a]):n[a]===r.request[a]);if(s)return r.results}}},this.store=function(n,e){t.push({request:n,keys:d(n),results:e})}}function P(){var t=[],n=this;n.empty=function(){return!t.length},n.add=function(n){t.push(n)},n.get=function(){return t.length?t[0]:!1},n.ack=function(){t.shift()}}function k(){function n(t){return{id:t.id,name:t.name,object:t.obj,tag:t.tag,data:t.data}}function e(t){z(t.setMap)&&t.setMap(null),z(t.remove)&&t.remove(),z(t.free)&&t.free(),t=null}var o={},i={},r=this;r.add=function(t,n,e,a){var u=t.td||{},l=s(u.id);return o[n]||(o[n]=[]),l in i&&r.clearById(l),i[l]={obj:e,sub:a,name:n,id:l,tag:u.tag,data:u.data},o[n].push(l),l},r.getById=function(t,e,o){var a=!1;return t in i&&(a=e?i[t].sub:o?n(i[t]):i[t].obj),a},r.get=function(t,e,a,r){var s,u,l=v(a);if(!o[t]||!o[t].length)return null;for(s=o[t].length;s;)if(s--,u=o[t][e?s:o[t].length-s-1],u&&i[u]){if(l&&!l(i[u].tag))continue;return r?n(i[u]):i[u].obj}return null},r.all=function(t,e,r){var s=[],u=v(e),l=function(t){var e,a;for(e=0;e<o[t].length;e++)if(a=o[t][e],a&&i[a]){if(u&&!u(i[a].tag))continue;s.push(r?n(i[a]):i[a].obj)}};if(t in o)l(t);else if(a(t))for(t in o)l(t);return s},r.rm=function(t,n,e){var a,s;if(!o[t])return!1;if(n)if(e)for(a=o[t].length-1;a>=0&&(s=o[t][a],!n(i[s].tag));a--);else for(a=0;a<o[t].length&&(s=o[t][a],!n(i[s].tag));a++);else a=e?o[t].length-1:0;return a in o[t]?r.clearById(o[t][a],a):!1},r.clearById=function(t,n){if(t in i){var r,s=i[t].name;for(r=0;a(n)&&r<o[s].length;r++)t===o[s][r]&&(n=r);return e(i[t].obj),i[t].sub&&e(i[t].sub),delete i[t],o[s].splice(n,1),!0}return!1},r.objGetById=function(t){var n,e;if(o.clusterer)for(e in o.clusterer)if((n=i[o.clusterer[e]].obj.getById(t))!==!1)return n;return!1},r.objClearById=function(t){var n;if(o.clusterer)for(n in o.clusterer)if(i[o.clusterer[n]].obj.clearById(t))return!0;return null},r.clear=function(t,n,e,i){var a,s,u,l=v(i);if(t&&t.length)t=h(t);else{t=[];for(a in o)t.push(a)}for(s=0;s<t.length;s++)if(u=t[s],n)r.rm(u,l,!0);else if(e)r.rm(u,l,!1);else for(;r.rm(u,l,!1););},r.objClear=function(n,e,a,r){var s;if(o.clusterer&&(t.inArray("marker",n)>=0||!n.length))for(s in o.clusterer)i[o.clusterer[s]].obj.clear(e,a,r)}}function B(n,e,i){function a(t){var n={};return n[t]={},n}function r(){var t;for(t in i)if(i.hasOwnProperty(t)&&!u.hasOwnProperty(t))return t}var s,u={},l=this,d={latLng:{map:!1,marker:!1,infowindow:!1,circle:!1,overlay:!1,getlatlng:!1,getmaxzoom:!1,getelevation:!1,streetviewpanorama:!1,getaddress:!0},geoloc:{getgeoloc:!0}};o(i)&&(i=a(i)),l.run=function(){for(var o,a;o=r();){if(z(n[o]))return s=o,a=t.extend(!0,{},A[o]||{},i[o].options||{}),void(o in d.latLng?i[o].values?L(i[o].values,n,n[o],{td:i[o],opts:a,session:u}):w(n,n[o],d.latLng[o],{td:i[o],opts:a,session:u}):o in d.geoloc?b(n,n[o],{td:i[o],opts:a,session:u}):n[o].apply(n,[{td:i[o],opts:a,session:u}]));u[o]=null}e.apply(n,[i,u])},l.ack=function(t){u[s]=t,l.run.apply(l,[])}}function j(){return V.ds||(V.ds=new q.DirectionsService),V.ds}function O(){return V.dms||(V.dms=new q.DistanceMatrixService),V.dms}function C(){return V.mzs||(V.mzs=new q.MaxZoomService),V.mzs}function E(){return V.es||(V.es=new q.ElevationService),V.es}function S(t){function n(){var t=this;return t.onAdd=function(){},t.onRemove=function(){},t.draw=function(){},A.classes.OverlayView.apply(t,[])}n.prototype=A.classes.OverlayView.prototype;var e=new n;return e.setMap(t),e}function T(n,o,i){function a(t){T[t]||(delete _[t].options.map,T[t]=new A.classes.Marker(_[t].options),l(n,{td:_[t]},T[t],_[t].id))}function r(){return(y=U.getProjection())?(P=!0,j.push(q.event.addListener(o,"zoom_changed",f)),j.push(q.event.addListener(o,"bounds_changed",f)),void h()):void setTimeout(function(){r.apply(B,[])},25)}function u(t){e(O[t])?(z(O[t].obj.setMap)&&O[t].obj.setMap(null),z(O[t].obj.remove)&&O[t].obj.remove(),z(O[t].shadow.remove)&&O[t].obj.remove(),z(O[t].shadow.setMap)&&O[t].shadow.setMap(null),delete O[t].obj,delete O[t].shadow):T[t]&&T[t].setMap(null),delete O[t]}function d(){var t,n,e,o,i,a,r,s,u=Math.cos,l=Math.sin,d=arguments;return d[0]instanceof q.LatLng?(t=d[0].lat(),e=d[0].lng(),d[1]instanceof q.LatLng?(n=d[1].lat(),o=d[1].lng()):(n=d[1],o=d[2])):(t=d[0],e=d[1],d[2]instanceof q.LatLng?(n=d[2].lat(),o=d[2].lng()):(n=d[2],o=d[3])),i=Math.PI*t/180,a=Math.PI*e/180,r=Math.PI*n/180,s=Math.PI*o/180,6371e3*Math.acos(Math.min(u(i)*u(r)*u(a)*u(s)+u(i)*l(a)*u(r)*l(s)+l(i)*l(r),1))}function c(){var t=d(o.getCenter(),o.getBounds().getNorthEast()),n=new q.Circle({center:o.getCenter(),radius:1.25*t});return n.getBounds()}function p(){var t,n={};for(t in O)n[t]=!0;return n}function f(){clearTimeout(m),m=setTimeout(h,25)}function g(t){var n=y.fromLatLngToDivPixel(t),e=y.fromDivPixelToLatLng(new q.Point(n.x+i.radius,n.y-i.radius)),o=y.fromDivPixelToLatLng(new q.Point(n.x-i.radius,n.y+i.radius));return new q.LatLngBounds(o,e)}function h(){if(!x&&!I&&P){var n,e,a,r,s,l,d,f,h,v,m,y=!1,b=[],B={},j=o.getZoom(),C="maxZoom"in i&&j>i.maxZoom,E=p();for(M=!1,j>3&&(s=c(),y=s.getSouthWest().lng()<s.getNorthEast().lng()),n=0;n<_.length;n++)!_[n]||y&&!s.contains(_[n].options.position)||w&&!w(D[n])||b.push(n);for(;;){for(n=0;B[n]&&n<b.length;)n++;if(n===b.length)break;if(r=[],k&&!C){m=10;do for(f=r,r=[],m--,d=f.length?s.getCenter():_[b[n]].options.position,s=g(d),e=n;e<b.length;e++)B[e]||s.contains(_[b[e]].options.position)&&r.push(e);while(f.length<r.length&&r.length>1&&m)}else for(e=n;e<b.length;e++)if(!B[e]){r.push(e);break}for(l={indexes:[],ref:[]},h=v=0,a=0;a<r.length;a++)B[r[a]]=!0,l.indexes.push(b[r[a]]),l.ref.push(b[r[a]]),h+=_[b[r[a]]].options.position.lat(),v+=_[b[r[a]]].options.position.lng();h/=r.length,v/=r.length,l.latLng=new q.LatLng(h,v),l.ref=l.ref.join("-"),l.ref in E?delete E[l.ref]:(1===r.length&&(O[l.ref]=!0),L(l))}t.each(E,function(t){u(t)}),I=!1}}var m,y,w,L,b,x=!1,M=!1,I=!1,P=!1,k=!0,B=this,j=[],O={},C={},E={},T=[],_=[],D=[],U=S(o,i.radius);r(),B.getById=function(t){return t in C?(a(C[t]),T[C[t]]):!1},B.rm=function(t){var n=C[t];T[n]&&T[n].setMap(null),delete T[n],T[n]=!1,delete _[n],_[n]=!1,delete D[n],D[n]=!1,delete C[t],delete E[n],M=!0},B.clearById=function(t){return t in C?(B.rm(t),!0):void 0},B.clear=function(t,n,e){var o,i,a,r,s,u=[],l=v(e);for(t?(o=_.length-1,i=-1,a=-1):(o=0,i=_.length,a=1),r=o;r!==i&&(!_[r]||l&&!l(_[r].tag)||(u.push(E[r]),!n&&!t));r+=a);for(s=0;s<u.length;s++)B.rm(u[s])},B.add=function(t,n){t.id=s(t.id),B.clearById(t.id),C[t.id]=T.length,E[T.length]=t.id,T.push(null),_.push(t),D.push(n),M=!0},B.addMarker=function(t,e){e=e||{},e.id=s(e.id),B.clearById(e.id),e.options||(e.options={}),e.options.position=t.getPosition(),l(n,{td:e},t,e.id),C[e.id]=T.length,E[T.length]=e.id,T.push(t),_.push(e),D.push(e.data||{}),M=!0},B.td=function(t){return _[t]},B.value=function(t){return D[t]},B.marker=function(t){return t in T?(a(t),T[t]):!1},B.markerIsSet=function(t){return Boolean(T[t])},B.setMarker=function(t,n){T[t]=n},B.store=function(t,n,e){O[t.ref]={obj:n,shadow:e}},B.free=function(){var n;for(n=0;n<j.length;n++)q.event.removeListener(j[n]);j=[],t.each(O,function(t){u(t)}),O={},t.each(_,function(t){_[t]=null}),_=[],t.each(T,function(t){T[t]&&(T[t].setMap(null),delete T[t])}),T=[],t.each(D,function(t){delete D[t]}),D=[],C={},E={}},B.filter=function(t){w=t,h()},B.enable=function(t){k!==t&&(k=t,h())},B.display=function(t){L=t},B.error=function(t){b=t},B.beginUpdate=function(){x=!0},B.endUpdate=function(){x=!1,M&&h()},B.autofit=function(t){var n;for(n=0;n<_.length;n++)_[n]&&t.extend(_[n].options.position)}}function _(t,n){var e=this;e.id=function(){return t},e.filter=function(t){n.filter(t)},e.enable=function(){n.enable(!0)},e.disable=function(){n.enable(!1)},e.add=function(t,e,o){o||n.beginUpdate(),n.addMarker(t,e),o||n.endUpdate()},e.getById=function(t){return n.getById(t)},e.clearById=function(t,e){var o;return e||n.beginUpdate(),o=n.clearById(t),e||n.endUpdate(),o},e.clear=function(t,e,o,i){i||n.beginUpdate(),n.clear(t,e,o),i||n.endUpdate()}}function D(n,e,o,i){var a=this,r=[];A.classes.OverlayView.call(a),a.setMap(n),a.onAdd=function(){var n=a.getPanes();e.pane in n&&t(n[e.pane]).append(i),t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "),function(n,e){r.push(q.event.addDomListener(i[0],e,function(n){t.Event(n).stopPropagation(),q.event.trigger(a,e,[n]),a.draw()}))}),r.push(q.event.addDomListener(i[0],"contextmenu",function(n){t.Event(n).stopPropagation(),q.event.trigger(a,"rightclick",[n]),a.draw()}))},a.getPosition=function(){return o},a.setPosition=function(t){o=t,a.draw()},a.draw=function(){var t=a.getProjection().fromLatLngToDivPixel(o);i.css("left",t.x+e.offset.x+"px").css("top",t.y+e.offset.y+"px")},a.onRemove=function(){var t;for(t=0;t<r.length;t++)q.event.removeListener(r[t]);i.remove()},a.hide=function(){i.hide()},a.show=function(){i.show()},a.toggle=function(){i&&(i.is(":visible")?a.show():a.hide())},a.toggleDOM=function(){a.setMap(a.getMap()?null:n)},a.getDOMElement=function(){return i[0]}}function U(i){function r(){!b&&(b=M.get())&&b.run()}function d(){b=null,M.ack(),r.call(x)}function c(t){var n,e=t.td.callback;e&&(n=Array.prototype.slice.call(arguments,1),z(e)?e.apply(i,n):R(e)&&z(e[1])&&e[1].apply(e[0],n))}function g(t,n,e){e&&l(i,t,n,e),c(t,n),b.ack(n)}function v(n,e){e=e||{};var o=e.td&&e.td.options?e.td.options:0;S?o&&(o.center&&(o.center=m(o.center)),S.setOptions(o)):(o=e.opts||t.extend(!0,{},A.map,o||{}),o.center=n||m(o.center),S=new A.classes.Map(i.get(0),o))}function w(e){var o,a,r=new T(i,S,e),s={},u={},d=[],c=/^[0-9]+$/;for(a in e)c.test(a)?(d.push(1*a),u[a]=e[a],u[a].width=u[a].width||0,u[a].height=u[a].height||0):s[a]=e[a];return d.sort(function(t,n){return t>n}),o=s.calculator?function(n){var e=[];return t.each(n,function(t,n){e.push(r.value(n))}),s.calculator.apply(i,[e])}:function(t){return t.length},r.error(function(){f.apply(x,arguments)}),r.display(function(a){var c,p,f,g,h,v,y=o(a.indexes);if(e.force||y>1)for(c=0;c<d.length;c++)d[c]<=y&&(p=u[d[c]]);p?(h=p.offset||[-p.width/2,-p.height/2],f=t.extend({},s),f.options=t.extend({pane:"overlayLayer",content:p.content?p.content.replace("CLUSTER_COUNT",y):"",offset:{x:("x"in h?h.x:h[0])||0,y:("y"in h?h.y:h[1])||0}},s.options||{}),g=x.overlay({td:f,opts:f.options,latLng:m(a)},!0),f.options.pane="floatShadow",f.options.content=t(document.createElement("div")).width(p.width+"px").height(p.height+"px").css({cursor:"pointer"}),v=x.overlay({td:f,opts:f.options,latLng:m(a)},!0),s.data={latLng:m(a),markers:[]},t.each(a.indexes,function(t,n){s.data.markers.push(r.value(n)),r.markerIsSet(n)&&r.marker(n).setMap(null)}),l(i,{td:s},v,n,{main:g,shadow:v}),r.store(a,g,v)):t.each(a.indexes,function(t,n){r.marker(n).setMap(S)})}),r}function L(n,e,o){var a=[],r="values"in n.td;return r||(n.td.values=[{options:n.opts}]),n.td.values.length?(v(),t.each(n.td.values,function(t,r){var s,u,d,c,f=p(n,r);if(f.options[o])if(f.options[o][0][0]&&R(f.options[o][0][0]))for(u=0;u<f.options[o].length;u++)for(d=0;d<f.options[o][u].length;d++)f.options[o][u][d]=m(f.options[o][u][d]);else for(u=0;u<f.options[o].length;u++)f.options[o][u]=m(f.options[o][u]);f.options.map=S,c=new q[e](f.options),a.push(c),s=I.add({td:f},e.toLowerCase(),c),l(i,{td:f},c,s)}),void g(n,r?a:a[0])):void g(n,!1)}var b,x=this,M=new P,I=new k,S=null;x._plan=function(t){var n;for(n=0;n<t.length;n++)M.add(new B(x,d,t[n]));r()},x.map=function(t){v(t.latLng,t),l(i,t,S),g(t,S)},x.destroy=function(t){I.clear(),i.empty(),S&&(S=null),g(t,!0)},x.overlay=function(n,e){var o=[],a="values"in n.td;return a||(n.td.values=[{latLng:n.latLng,options:n.opts}]),n.td.values.length?(D.__initialised||(D.prototype=new A.classes.OverlayView,D.__initialised=!0),t.each(n.td.values,function(a,r){var s,u,d=p(n,r),c=t(document.createElement("div")).css({border:"none",borderWidth:0,position:"absolute"});c.append(d.options.content),u=new D(S,d.options,m(d)||m(r),c),o.push(u),c=null,e||(s=I.add(n,"overlay",u),l(i,{td:d},u,s))}),e?o[0]:void g(n,a?o:o[0])):void g(n,!1)},x.marker=function(n){var e,o,a,r="values"in n.td,u=!S;return r||(n.opts.position=n.latLng||m(n.opts.position),n.td.values=[{options:n.opts}]),n.td.values.length?(u&&v(),n.td.cluster&&!S.getBounds()?void q.event.addListenerOnce(S,"bounds_changed",function(){x.marker.apply(x,[n])}):void(n.td.cluster?(n.td.cluster instanceof _?(o=n.td.cluster,a=I.getById(o.id(),!0)):(a=w(n.td.cluster),o=new _(s(n.td.id,!0),a),I.add(n,"clusterer",o,a)),a.beginUpdate(),t.each(n.td.values,function(t,e){var o=p(n,e);o.options.position=m(o.options.position?o.options.position:e),o.options.position&&(o.options.map=S,u&&(S.setCenter(o.options.position),u=!1),a.add(o,e))}),a.endUpdate(),g(n,o)):(e=[],t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.position=m(s.options.position?s.options.position:o),s.options.position&&(s.options.map=S,u&&(S.setCenter(s.options.position),u=!1),r=new A.classes.Marker(s.options),e.push(r),a=I.add({td:s},"marker",r),l(i,{td:s},r,a))}),g(n,r?e:e[0])))):void g(n,!1)},x.getroute=function(t){t.opts.origin=m(t.opts.origin,!0),t.opts.destination=m(t.opts.destination,!0),j().route(t.opts,function(n,e){c(t,e===q.DirectionsStatus.OK?n:!1,e),b.ack()})},x.getdistance=function(t){var n;for(t.opts.origins=h(t.opts.origins),n=0;n<t.opts.origins.length;n++)t.opts.origins[n]=m(t.opts.origins[n],!0);for(t.opts.destinations=h(t.opts.destinations),n=0;n<t.opts.destinations.length;n++)t.opts.destinations[n]=m(t.opts.destinations[n],!0);O().getDistanceMatrix(t.opts,function(n,e){c(t,e===q.DistanceMatrixStatus.OK?n:!1,e),b.ack()})},x.infowindow=function(e){var o=[],r="values"in e.td;r||(e.latLng&&(e.opts.position=e.latLng),e.td.values=[{options:e.opts}]),t.each(e.td.values,function(t,s){var u,d,c=p(e,s);c.options.position=m(c.options.position?c.options.position:s.latLng),S||v(c.options.position),d=new A.classes.InfoWindow(c.options),d&&(a(c.open)||c.open)&&(r?d.open(S,c.anchor||n):d.open(S,c.anchor||(e.latLng?n:e.session.marker?e.session.marker:n))),o.push(d),u=I.add({td:c},"infowindow",d),l(i,{td:c},d,u)}),g(e,r?o:o[0])},x.circle=function(n){var e=[],o="values"in n.td;return o||(n.opts.center=n.latLng||m(n.opts.center),n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.center=m(s.options.center?s.options.center:o),S||v(s.options.center),s.options.map=S,r=new A.classes.Circle(s.options),e.push(r),a=I.add({td:s},"circle",r),l(i,{td:s},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.getaddress=function(t){c(t,t.results,t.status),b.ack()},x.getlatlng=function(t){c(t,t.results,t.status),b.ack()},x.getmaxzoom=function(t){C().getMaxZoomAtLatLng(t.latLng,function(n){c(t,n.status===q.MaxZoomStatus.OK?n.zoom:!1,status),b.ack()})},x.getelevation=function(t){var n,e=[],o=function(n,e){c(t,e===q.ElevationStatus.OK?n:!1,e),b.ack()};if(t.latLng)e.push(t.latLng);else for(e=h(t.td.locations||[]),n=0;n<e.length;n++)e[n]=m(e[n]);if(e.length)E().getElevationForLocations({locations:e},o);else{if(t.td.path&&t.td.path.length)for(n=0;n<t.td.path.length;n++)e.push(m(t.td.path[n]));e.length?E().getElevationAlongPath({path:e,samples:t.td.samples},o):b.ack()}},x.defaults=function(n){t.each(n.td,function(n,o){A[n]=e(A[n])?t.extend({},A[n],o):o}),b.ack(!0)},x.rectangle=function(n){var e=[],o="values"in n.td;return o||(n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.bounds=y(s.options.bounds?s.options.bounds:o),S||v(s.options.bounds.getCenter()),s.options.map=S,r=new A.classes.Rectangle(s.options),e.push(r),a=I.add({td:s},"rectangle",r),l(i,{td:s},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.polyline=function(t){L(t,"Polyline","path")},x.polygon=function(t){L(t,"Polygon","paths")},x.trafficlayer=function(t){v();var n=I.get("trafficlayer");n||(n=new A.classes.TrafficLayer,n.setMap(S),I.add(t,"trafficlayer",n)),g(t,n)},x.bicyclinglayer=function(t){v();var n=I.get("bicyclinglayer");n||(n=new A.classes.BicyclingLayer,n.setMap(S),I.add(t,"bicyclinglayer",n)),g(t,n)},x.groundoverlay=function(t){t.opts.bounds=y(t.opts.bounds),t.opts.bounds&&v(t.opts.bounds.getCenter());var n,e=new A.classes.GroundOverlay(t.opts.url,t.opts.bounds,t.opts.opts);e.setMap(S),n=I.add(t,"groundoverlay",e),g(t,e,n)},x.streetviewpanorama=function(n){n.opts.opts||(n.opts.opts={}),n.latLng?n.opts.opts.position=n.latLng:n.opts.opts.position&&(n.opts.opts.position=m(n.opts.opts.position)),n.td.divId?n.opts.container=document.getElementById(n.td.divId):n.opts.container&&(n.opts.container=t(n.opts.container).get(0));var e,o=new A.classes.StreetViewPanorama(n.opts.container,n.opts.opts);o&&S.setStreetView(o),e=I.add(n,"streetviewpanorama",o),g(n,o,e)},x.kmllayer=function(n){var e=[],o="values"in n.td;return o||(n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s,d=p(n,o);S||v(),s=d.options,d.options.opts&&(s=d.options.opts,d.options.url&&(s.url=d.options.url)),s.map=S,r=u("3.10")?new A.classes.KmlLayer(s):new A.classes.KmlLayer(s.url,s),e.push(r),a=I.add({td:d},"kmllayer",r),l(i,{td:d},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.panel=function(n){v();var e,o,r=0,s=0,u=t(document.createElement("div"));u.css({position:"absolute",zIndex:1e3,visibility:"hidden"}),n.opts.content&&(o=t(n.opts.content),u.append(o),i.first().prepend(u),a(n.opts.left)?a(n.opts.right)?n.opts.center&&(r=(i.width()-o.width())/2):r=i.width()-o.width()-n.opts.right:r=n.opts.left,a(n.opts.top)?a(n.opts.bottom)?n.opts.middle&&(s=(i.height()-o.height())/2):s=i.height()-o.height()-n.opts.bottom:s=n.opts.top,u.css({top:s,left:r,visibility:"visible"})),e=I.add(n,"panel",u),g(n,u,e),u=null},x.directionsrenderer=function(n){n.opts.map=S;var e,o=new q.DirectionsRenderer(n.opts);n.td.divId?o.setPanel(document.getElementById(n.td.divId)):n.td.container&&o.setPanel(t(n.td.container).get(0)),e=I.add(n,"directionsrenderer",o),g(n,o,e)},x.getgeoloc=function(t){g(t,t.latLng)},x.styledmaptype=function(t){v();var n=new A.classes.StyledMapType(t.td.styles,t.opts);S.mapTypes.set(t.td.id,n),g(t,n)},x.imagemaptype=function(t){v();var n=new A.classes.ImageMapType(t.opts);S.mapTypes.set(t.td.id,n),g(t,n)},x.autofit=function(n){var e=new q.LatLngBounds;t.each(I.all(),function(t,n){n.getPosition?e.extend(n.getPosition()):n.getBounds?(e.extend(n.getBounds().getNorthEast()),e.extend(n.getBounds().getSouthWest())):n.getPaths?n.getPaths().forEach(function(t){t.forEach(function(t){e.extend(t)})}):n.getPath?n.getPath().forEach(function(t){e.extend(t)}):n.getCenter?e.extend(n.getCenter()):"function"==typeof _&&n instanceof _&&(n=I.getById(n.id(),!0),n&&n.autofit(e))}),e.isEmpty()||S.getBounds()&&S.getBounds().equals(e)||("maxZoom"in n.td&&q.event.addListenerOnce(S,"bounds_changed",function(){this.getZoom()>n.td.maxZoom&&this.setZoom(n.td.maxZoom)}),S.fitBounds(e)),g(n,!0)},x.clear=function(n){if(o(n.td)){if(I.clearById(n.td)||I.objClearById(n.td))return void g(n,!0);n.td={name:n.td}}n.td.id?t.each(h(n.td.id),function(t,n){I.clearById(n)||I.objClearById(n)}):(I.clear(h(n.td.name),n.td.last,n.td.first,n.td.tag),I.objClear(h(n.td.name),n.td.last,n.td.first,n.td.tag)),g(n,!0)},x.get=function(e,i,a){var r,s,u=i?e:e.td;return i||(a=u.full),o(u)?(s=I.getById(u,!1,a)||I.objGetById(u),s===!1&&(r=u,u={})):r=u.name,"map"===r&&(s=S),s||(s=[],u.id?(t.each(h(u.id),function(t,n){s.push(I.getById(n,!1,a)||I.objGetById(n))}),R(u.id)||(s=s[0])):(t.each(r?h(r):[n],function(n,e){var o;u.first?(o=I.get(e,!1,u.tag,a),o&&s.push(o)):u.all?t.each(I.all(e,u.tag,a),function(t,n){s.push(n)}):(o=I.get(e,!0,u.tag,a),o&&s.push(o))}),u.all||R(r)||(s=s[0]))),s=R(s)||!u.all?s:[s],i?s:void g(e,s)},x.exec=function(n){t.each(h(n.td.func),function(e,o){t.each(x.get(n.td,!0,n.td.hasOwnProperty("full")?n.td.full:!0),function(t,n){o.call(i,n)})}),g(n,!0)},x.trigger=function(n){if(o(n.td))q.event.trigger(S,n.td);else{var e=[S,n.td.eventName];n.td.var_args&&t.each(n.td.var_args,function(t,n){e.push(n)}),q.event.trigger.apply(q.event,e)}c(n),b.ack()}}var A,q,Z=0,z=t.isFunction,R=t.isArray,V={},G=new I;t.fn.gmap3=function(){var n,e=[],o=!0,i=[];for(r(),n=0;n<arguments.length;n++)arguments[n]&&e.push(arguments[n]);return e.length||e.push("map"),t.each(this,function(){var n=t(this),a=n.data("gmap3");o=!1,a||(a=new U(n),n.data("gmap3",a)),1!==e.length||"get"!==e[0]&&!x(e[0])?a._plan(e):i.push("get"===e[0]?a.get("map",!0):a.get(e[0].get,!0,e[0].get.full))}),i.length?1===i.length?i[0]:i:this}}(jQuery);
(function() {
  var CSRFToken, Click, ComponentUrl, EVENTS, Link, ProgressBar, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, clone, constrainPageCacheTo, createDocument, crossOriginRedirect, currentState, enableProgressBar, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, manuallyTriggerHashChangeForFirefox, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, progressBar, recallScrollPosition, ref, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, setAutofocusElement, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  progressBar = null;

  currentState = null;

  loadedAssets = null;

  referer = null;

  xhr = null;

  EVENTS = {
    BEFORE_CHANGE: 'page:before-change',
    FETCH: 'page:fetch',
    RECEIVE: 'page:receive',
    CHANGE: 'page:change',
    UPDATE: 'page:update',
    LOAD: 'page:load',
    RESTORE: 'page:restore',
    BEFORE_UNLOAD: 'page:before-unload',
    EXPIRE: 'page:expire'
  };

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    if (progressBar != null) {
      progressBar.start();
    }
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url, null, false);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  enableProgressBar = function(enable) {
    if (enable == null) {
      enable = true;
    }
    if (!browserSupportsTurbolinks) {
      return;
    }
    if (enable) {
      return progressBar != null ? progressBar : progressBar = new ProgressBar('html');
    } else {
      if (progressBar != null) {
        progressBar.uninstall();
      }
      return progressBar = null;
    }
  };

  fetchReplacement = function(url, onLoadFunction, showProgressBar) {
    if (showProgressBar == null) {
      showProgressBar = true;
    }
    triggerEvent(EVENTS.FETCH, {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent(EVENTS.RECEIVE, {
        url: url.absolute
      });
      if (doc = processResponse()) {
        reflectNewUrl(url);
        reflectRedirectedUrl();
        changePage.apply(null, extractTitleAndBody(doc));
        manuallyTriggerHashChangeForFirefox();
        if (typeof onLoadFunction === "function") {
          onLoadFunction();
        }
        return triggerEvent(EVENTS.LOAD);
      } else {
        return document.location.href = crossOriginRedirect() || url.absolute;
      }
    };
    if (progressBar && showProgressBar) {
      xhr.onprogress = (function(_this) {
        return function(event) {
          var percent;
          percent = event.lengthComputable ? event.loaded / event.total * 100 : progressBar.value + (100 - progressBar.value) / 10;
          return progressBar.advanceTo(percent);
        };
      })(this);
    }
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent(EVENTS.RESTORE);
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, i, key, len, pageCacheKeys, results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    results = [];
    for (i = 0, len = pageCacheKeys.length; i < len; i++) {
      key = pageCacheKeys[i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent(EVENTS.EXPIRE, pageCache[key]);
      results.push(delete pageCache[key]);
    }
    return results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    triggerEvent(EVENTS.BEFORE_UNLOAD);
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    setAutofocusElement();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    if (progressBar != null) {
      progressBar.done();
    }
    triggerEvent(EVENTS.CHANGE);
    return triggerEvent(EVENTS.UPDATE);
  };

  executeScriptTags = function() {
    var attr, copy, i, j, len, len1, nextSibling, parentNode, ref, ref1, script, scripts;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (i = 0, len = scripts.length; i < len; i++) {
      script = scripts[i];
      if (!((ref = script.type) === '' || ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      ref1 = script.attributes;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        attr = ref1[j];
        copy.setAttribute(attr.name, attr.value);
      }
      if (!script.hasAttribute('async')) {
        copy.async = false;
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  setAutofocusElement = function() {
    var autofocusElement, list;
    autofocusElement = (list = document.querySelectorAll('input[autofocus], textarea[autofocus]'))[list.length - 1];
    if (autofocusElement && document.activeElement !== autofocusElement) {
      return autofocusElement.focus();
    }
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(window.history.state, '', location.href + preservedHash);
    }
  };

  crossOriginRedirect = function() {
    var redirect;
    if (((redirect = xhr.getResponseHeader('Location')) != null) && (new ComponentUrl(redirect)).crossOrigin()) {
      return redirect;
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  manuallyTriggerHashChangeForFirefox = function() {
    var url;
    if (navigator.userAgent.match(/Firefox/) && !(url = new ComponentUrl).hasNoHash()) {
      window.history.replaceState(currentState, '', url.withoutHash());
      return document.location.hash = url.hash;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  clone = function(original) {
    var copy, key, value;
    if ((original == null) || typeof original !== 'object') {
      return original;
    }
    copy = new original.constructor();
    for (key in original) {
      value = original[key];
      copy[key] = clone(value);
    }
    return copy;
  };

  popCookie = function(name) {
    var ref, value;
    value = ((ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    if (typeof Prototype !== 'undefined') {
      Event.fire(document, name, data, true);
    }
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function(url) {
    return !triggerEvent(EVENTS.BEFORE_CHANGE, {
      url: url
    });
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var ref;
      return (400 <= (ref = xhr.status) && ref < 600);
    };
    validContent = function() {
      var contentType;
      return ((contentType = xhr.getResponseHeader('Content-Type')) != null) && contentType.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var i, len, node, ref, results;
      ref = doc.querySelector('head').childNodes;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        node = ref[i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var i, len, ref, results, value;
      if (a.length > b.length) {
        ref = [b, a], a = ref[0], b = ref[1];
      }
      results = [];
      for (i = 0, len = a.length; i < len; i++) {
        value = a[i];
        if (indexOf.call(b, value) >= 0) {
          results.push(value);
        }
      }
      return results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.querySelector('body')), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  createDocument = function(html) {
    var doc;
    doc = document.documentElement.cloneNode();
    doc.innerHTML = html;
    doc.head = doc.querySelector('head');
    doc.body = doc.querySelector('body');
    return doc;
  };

  ComponentUrl = (function() {
    function ComponentUrl(original1) {
      this.original = original1 != null ? original1 : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '').replace('#', '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype.crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    ComponentUrl.prototype._parse = function() {
      var ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      ref = this.link, this.href = ref.href, this.protocol = ref.protocol, this.host = ref.host, this.hostname = ref.hostname, this.port = ref.port, this.pathname = ref.pathname, this.search = ref.search, this.hash = ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(superClass) {
    extend(Link, superClass);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, i, len;
      extensions = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      for (i = 0, len = extensions.length; i < len; i++) {
        extension = extensions[i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link1) {
      this.link = link1;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      this.originalElement = this.link;
      this.link = this.link.cloneNode(false);
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._anchored = function() {
      return (this.hash.length > 0 || this.href.charAt(this.href.length - 1) === '#') && (this.withoutHash() === (new ComponentUrl).withoutHash());
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.originalElement;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event1) {
      this.event = event1;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented(this.link.absolute)) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  ProgressBar = (function() {
    var className;

    className = 'turbolinks-progress-bar';

    function ProgressBar(elementSelector) {
      this.elementSelector = elementSelector;
      this._trickle = bind(this._trickle, this);
      this.value = 0;
      this.content = '';
      this.speed = 300;
      this.opacity = 0.99;
      this.install();
    }

    ProgressBar.prototype.install = function() {
      this.element = document.querySelector(this.elementSelector);
      this.element.classList.add(className);
      this.styleElement = document.createElement('style');
      document.head.appendChild(this.styleElement);
      return this._updateStyle();
    };

    ProgressBar.prototype.uninstall = function() {
      this.element.classList.remove(className);
      return document.head.removeChild(this.styleElement);
    };

    ProgressBar.prototype.start = function() {
      return this.advanceTo(5);
    };

    ProgressBar.prototype.advanceTo = function(value) {
      var ref;
      if ((value > (ref = this.value) && ref <= 100)) {
        this.value = value;
        this._updateStyle();
        if (this.value === 100) {
          return this._stopTrickle();
        } else if (this.value > 0) {
          return this._startTrickle();
        }
      }
    };

    ProgressBar.prototype.done = function() {
      if (this.value > 0) {
        this.advanceTo(100);
        return this._reset();
      }
    };

    ProgressBar.prototype._reset = function() {
      var originalOpacity;
      originalOpacity = this.opacity;
      setTimeout((function(_this) {
        return function() {
          _this.opacity = 0;
          return _this._updateStyle();
        };
      })(this), this.speed / 2);
      return setTimeout((function(_this) {
        return function() {
          _this.value = 0;
          _this.opacity = originalOpacity;
          return _this._withSpeed(0, function() {
            return _this._updateStyle(true);
          });
        };
      })(this), this.speed);
    };

    ProgressBar.prototype._startTrickle = function() {
      if (this.trickling) {
        return;
      }
      this.trickling = true;
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._stopTrickle = function() {
      return delete this.trickling;
    };

    ProgressBar.prototype._trickle = function() {
      if (!this.trickling) {
        return;
      }
      this.advanceTo(this.value + Math.random() / 2);
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._withSpeed = function(speed, fn) {
      var originalSpeed, result;
      originalSpeed = this.speed;
      this.speed = speed;
      result = fn();
      this.speed = originalSpeed;
      return result;
    };

    ProgressBar.prototype._updateStyle = function(forceRepaint) {
      if (forceRepaint == null) {
        forceRepaint = false;
      }
      if (forceRepaint) {
        this._changeContentToForceRepaint();
      }
      return this.styleElement.textContent = this._createCSSRule();
    };

    ProgressBar.prototype._changeContentToForceRepaint = function() {
      return this.content = this.content === '' ? ' ' : '';
    };

    ProgressBar.prototype._createCSSRule = function() {
      return this.elementSelector + "." + className + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + (this.speed / 2) + "ms ease-in;\n  transform: translate3d(0,0,0);\n}";
    };

    return ProgressBar;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent(EVENTS.CHANGE);
      return triggerEvent(EVENTS.UPDATE);
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent(EVENTS.UPDATE);
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, ref;
    if ((ref = event.state) != null ? ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    document.addEventListener('click', Click.installHandlerLast, true);
    window.addEventListener('hashchange', function(event) {
      rememberCurrentUrl();
      return rememberCurrentState();
    }, false);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (ref = popCookie('request_method')) === 'GET' || ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    enableProgressBar: enableProgressBar,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks,
    EVENTS: clone(EVENTS)
  };

}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
















