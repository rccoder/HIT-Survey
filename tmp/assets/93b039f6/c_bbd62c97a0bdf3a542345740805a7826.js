/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*!
 * Bootstrap.js by @fat & @mdo
 * Copyright 2012 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()},e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")},e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=n,this.options.slide&&this.slide(this.options.slide),this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},to:function(t){var n=this.$element.find(".item.active"),r=n.parent().children(),i=r.index(n),s=this;if(t>r.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){s.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",e(r[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle()),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0]});if(i.hasClass("active"))return;if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}},e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e(document).on("click.carousel.data-api","[data-slide]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data());i.carousel(s),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning)return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning)return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=typeof n=="object"&&n;i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;return n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=e(n),r.length||(r=t.parent()),r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||(s.toggleClass("open"),n.focus()),!1},keydown:function(t){var n,r,s,o,u,a;if(!/(38|40|27)/.test(t.keyCode))return;n=e(this),t.preventDefault(),t.stopPropagation();if(n.is(".disabled, :disabled"))return;o=i(n),u=o.hasClass("open");if(!u||u&&t.keyCode==27)return n.click();r=e("[role=menu] li:not(.divider) a",o);if(!r.length)return;a=r.index(r.filter(":focus")),t.keyCode==38&&a>0&&a--,t.keyCode==40&&a<r.length-1&&a++,~a||(a=0),r.eq(a).focus()}},e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e(document).on("click.dropdown.data-api touchstart.dropdown.data-api",r).on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api touchstart.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(e){this.$element.hide().trigger("hidden"),this.backdrop()},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,e.proxy(this.removeBackdrop,this)):this.removeBackdrop()):t&&t()}},e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,this.options.trigger=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):this.options.trigger!="manual"&&(i=this.options.trigger=="hover"?"mouseenter":"focus",s=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this))),this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,t,this.$element.data()),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);if(!n.options.delay||!n.options.delay.show)return n.show();clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){n.hoverState=="in"&&n.show()},n.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var e,t,n,r,i,s,o;if(this.hasContent()&&this.enabled){e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,t=/in/.test(s),e.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element),n=this.getPosition(t),r=e[0].offsetWidth,i=e[0].offsetHeight;switch(t?s.split(" ")[1]:s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}e.offset(o).addClass(s).addClass("in")}},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function r(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip();return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?r():n.detach(),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(t){return e.extend({},t?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);n[n.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}},e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!1}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content > *")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-content")||(typeof n.content=="function"?n.content.call(t[0]):n.content),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}}),e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var t=e(this),n=t.data("target")||t.attr("href"),r=/^#\w/.test(n)&&e(n);return r&&r.length&&[[r.position().top,n]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}},e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}},e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=e(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:t.top+t.height,left:t.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=!~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},blur:function(e){var t=this;setTimeout(function(){t.hide()},150)},click:function(e){e.stopPropagation(),e.preventDefault(),this.select()},mouseenter:function(t){this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")}},e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;t.preventDefault(),n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))},e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);/* 
* jqGrid  4.4.4 - jQuery Grid 
* Copyright (c) 2008, Tony Tomov, tony@trirand.com 
* Dual licensed under the MIT and GPL licenses 
* http://www.opensource.org/licenses/mit-license.php 
* http://www.gnu.org/licenses/gpl-2.0.html 
* Date:2013-01-30 
* Modules: grid.base.js; jquery.fmatter.js; grid.custom.js; grid.common.js; grid.formedit.js; grid.filter.js; grid.inlinedit.js; grid.celledit.js; jqModal.js; jqDnR.js; grid.subgrid.js; grid.grouping.js; grid.treegrid.js; grid.import.js; JsonXml.js; grid.tbltogrid.js; grid.jqueryui.js; 
*/
(function(b){b.jgrid=b.jgrid||{};b.extend(b.jgrid,{version:"4.4.4",htmlDecode:function(b){return b&&("&nbsp;"==b||"&#160;"==b||1===b.length&&160===b.charCodeAt(0))?"":!b?b:(""+b).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&")},htmlEncode:function(b){return!b?b:(""+b).replace(/&/g,"&amp;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},format:function(f){var d=b.makeArray(arguments).slice(1);null==f&&(f="");return f.replace(/\{(\d+)\}/g,function(b,
e){return d[e]})},msie:"Microsoft Internet Explorer"==navigator.appName,msiever:function(){var b=-1;null!=/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)&&(b=parseFloat(RegExp.$1));return b},getCellIndex:function(f){f=b(f);if(f.is("tr"))return-1;f=(!f.is("td")&&!f.is("th")?f.closest("td,th"):f)[0];return b.jgrid.msie?b.inArray(f,f.parentNode.cells):f.cellIndex},stripHtml:function(b){var b=""+b,d=/<("[^"]*"|'[^']*'|[^'">])*>/gi;return b?(b=b.replace(d,""))&&"&nbsp;"!==b&&"&#160;"!==b?b.replace(/\"/g,
"'"):"":b},stripPref:function(f,d){var c=b.type(f);if("string"==c||"number"==c)f=""+f,d=""!==f?(""+d).replace(""+f,""):d;return d},stringToDoc:function(b){var d;if("string"!==typeof b)return b;try{d=(new DOMParser).parseFromString(b,"text/xml")}catch(c){d=new ActiveXObject("Microsoft.XMLDOM"),d.async=!1,d.loadXML(b)}return d&&d.documentElement&&"parsererror"!=d.documentElement.tagName?d:null},parse:function(f){"while(1);"==f.substr(0,9)&&(f=f.substr(9));"/*"==f.substr(0,2)&&(f=f.substr(2,f.length-
4));f||(f="{}");return!0===b.jgrid.useJSON&&"object"===typeof JSON&&"function"===typeof JSON.parse?JSON.parse(f):eval("("+f+")")},parseDate:function(f,d){var c={m:1,d:1,y:1970,h:0,i:0,s:0,u:0},e,a,i;e=/[\\\/:_;.,\t\T\s-]/;if(d&&null!=d){d=b.trim(d);d=d.split(e);void 0!==b.jgrid.formatter.date.masks[f]&&(f=b.jgrid.formatter.date.masks[f]);var f=f.split(e),h=b.jgrid.formatter.date.monthNames,g=b.jgrid.formatter.date.AmPm,j=function(a,b){0===a?12===b&&(b=0):12!==b&&(b+=12);return b};e=0;for(a=f.length;e<
a;e++)"M"==f[e]&&(i=b.inArray(d[e],h),-1!==i&&12>i&&(d[e]=i+1,c.m=d[e])),"F"==f[e]&&(i=b.inArray(d[e],h),-1!==i&&11<i&&(d[e]=i+1-12,c.m=d[e])),"a"==f[e]&&(i=b.inArray(d[e],g),-1!==i&&2>i&&d[e]==g[i]&&(d[e]=i,c.h=j(d[e],c.h))),"A"==f[e]&&(i=b.inArray(d[e],g),-1!==i&&1<i&&d[e]==g[i]&&(d[e]=i-2,c.h=j(d[e],c.h))),"g"===f[e]&&(c.h=parseInt(d[e],10)),void 0!==d[e]&&(c[f[e].toLowerCase()]=parseInt(d[e],10));c.m=parseInt(c.m,10)-1;e=c.y;70<=e&&99>=e?c.y=1900+c.y:0<=e&&69>=e&&(c.y=2E3+c.y);void 0!==c.j&&(c.d=
c.j);void 0!==c.n&&(c.m=parseInt(c.n,10)-1)}return new Date(c.y,c.m,c.d,c.h,c.i,c.s,c.u)},jqID:function(b){return(""+b).replace(/[!"#$%&'()*+,.\/:; <=>?@\[\\\]\^`{|}~]/g,"\\$&")},guid:1,uidPref:"jqg",randId:function(f){return(f||b.jgrid.uidPref)+b.jgrid.guid++},getAccessor:function(b,d){var c,e,a=[],i;if("function"===typeof d)return d(b);c=b[d];if(void 0===c)try{if("string"===typeof d&&(a=d.split(".")),i=a.length)for(c=b;c&&i--;)e=a.shift(),c=c[e]}catch(h){}return c},getXmlData:function(f,d,c){var e=
"string"===typeof d?d.match(/^(.*)\[(\w+)\]$/):null;if("function"===typeof d)return d(f);if(e&&e[2])return e[1]?b(e[1],f).attr(e[2]):b(f).attr(e[2]);f=b(d,f);return c?f:0<f.length?b(f).text():void 0},cellWidth:function(){var f=b("<div class='ui-jqgrid' style='left:10000px'><table class='ui-jqgrid-btable' style='width:5px;'><tr class='jqgrow'><td style='width:5px;'></td></tr></table></div>"),d=f.appendTo("body").find("td").width();f.remove();return 5!==d},cell_width:!0,ajaxOptions:{},from:function(f){return new function(d,
c){"string"===typeof d&&(d=b.data(d));var e=this,a=d,i=!0,f=!1,g=c,j=/[\$,%]/g,k=null,l=null,n=0,s=!1,m="",v=[],E=!0;if("object"===typeof d&&d.push)0<d.length&&(E="object"!==typeof d[0]?!1:!0);else throw"data provides is not an array";this._hasData=function(){return null===a?!1:0===a.length?!1:!0};this._getStr=function(a){var b=[];f&&b.push("jQuery.trim(");b.push("String("+a+")");f&&b.push(")");i||b.push(".toLowerCase()");return b.join("")};this._strComp=function(a){return"string"===typeof a?".toString()":
""};this._group=function(a,b){return{field:a.toString(),unique:b,items:[]}};this._toStr=function(a){f&&(a=b.trim(a));a=a.toString().replace(/\\/g,"\\\\").replace(/\"/g,'\\"');return i?a:a.toLowerCase()};this._funcLoop=function(e){var c=[];b.each(a,function(a,b){c.push(e(b))});return c};this._append=function(a){var b;g=null===g?"":g+(""===m?" && ":m);for(b=0;b<n;b++)g+="(";s&&(g+="!");g+="("+a+")";s=!1;m="";n=0};this._setCommand=function(a,b){k=a;l=b};this._resetNegate=function(){s=!1};this._repeatCommand=
function(a,b){return null===k?e:null!==a&&null!==b?k(a,b):null===l||!E?k(a):k(l,a)};this._equals=function(a,b){return 0===e._compare(a,b,1)};this._compare=function(a,b,e){var c=Object.prototype.toString;void 0===e&&(e=1);void 0===a&&(a=null);void 0===b&&(b=null);if(null===a&&null===b)return 0;if(null===a&&null!==b)return 1;if(null!==a&&null===b)return-1;if("[object Date]"===c.call(a)&&"[object Date]"===c.call(b))return a<b?-e:a>b?e:0;!i&&"number"!==typeof a&&"number"!==typeof b&&(a=""+a,b=""+b);return a<
b?-e:a>b?e:0};this._performSort=function(){0!==v.length&&(a=e._doSort(a,0))};this._doSort=function(a,b){var c=v[b].by,f=v[b].dir,i=v[b].type,d=v[b].datefmt;if(b==v.length-1)return e._getOrder(a,c,f,i,d);b++;for(var c=e._getGroup(a,c,f,i,d),f=[],h,i=0;i<c.length;i++){h=e._doSort(c[i].items,b);for(d=0;d<h.length;d++)f.push(h[d])}return f};this._getOrder=function(a,c,f,d,h){var g=[],k=[],l="a"==f?1:-1,n,s;void 0===d&&(d="text");s="float"==d||"number"==d||"currency"==d||"numeric"==d?function(a){a=parseFloat((""+
a).replace(j,""));return isNaN(a)?0:a}:"int"==d||"integer"==d?function(a){return a?parseFloat((""+a).replace(j,"")):0}:"date"==d||"datetime"==d?function(a){return b.jgrid.parseDate(h,a).getTime()}:b.isFunction(d)?d:function(a){a=a?b.trim(""+a):"";return i?a:a.toLowerCase()};b.each(a,function(a,e){n=""!==c?b.jgrid.getAccessor(e,c):e;void 0===n&&(n="");n=s(n,e);k.push({vSort:n,index:a})});k.sort(function(a,b){a=a.vSort;b=b.vSort;return e._compare(a,b,l)});for(var d=0,m=a.length;d<m;)f=k[d].index,g.push(a[f]),
d++;return g};this._getGroup=function(a,c,d,f,i){var h=[],g=null,j=null,k;b.each(e._getOrder(a,c,d,f,i),function(a,d){k=b.jgrid.getAccessor(d,c);null==k&&(k="");e._equals(j,k)||(j=k,null!==g&&h.push(g),g=e._group(c,k));g.items.push(d)});null!==g&&h.push(g);return h};this.ignoreCase=function(){i=!1;return e};this.useCase=function(){i=!0;return e};this.trim=function(){f=!0;return e};this.noTrim=function(){f=!1;return e};this.execute=function(){var c=g,d=[];if(null===c)return e;b.each(a,function(){eval(c)&&
d.push(this)});a=d;return e};this.data=function(){return a};this.select=function(c){e._performSort();if(!e._hasData())return[];e.execute();if(b.isFunction(c)){var d=[];b.each(a,function(a,b){d.push(c(b))});return d}return a};this.hasMatch=function(){if(!e._hasData())return!1;e.execute();return 0<a.length};this.andNot=function(a,b,c){s=!s;return e.and(a,b,c)};this.orNot=function(a,b,c){s=!s;return e.or(a,b,c)};this.not=function(a,b,c){return e.andNot(a,b,c)};this.and=function(a,b,c){m=" && ";return void 0===
a?e:e._repeatCommand(a,b,c)};this.or=function(a,b,c){m=" || ";return void 0===a?e:e._repeatCommand(a,b,c)};this.orBegin=function(){n++;return e};this.orEnd=function(){null!==g&&(g+=")");return e};this.isNot=function(a){s=!s;return e.is(a)};this.is=function(a){e._append("this."+a);e._resetNegate();return e};this._compareValues=function(a,c,d,f,i){var h;h=E?"jQuery.jgrid.getAccessor(this,'"+c+"')":"this";void 0===d&&(d=null);var g=d,k=void 0===i.stype?"text":i.stype;if(null!==d)switch(k){case "int":case "integer":g=
isNaN(Number(g))||""===g?"0":g;h="parseInt("+h+",10)";g="parseInt("+g+",10)";break;case "float":case "number":case "numeric":g=(""+g).replace(j,"");g=isNaN(Number(g))||""===g?"0":g;h="parseFloat("+h+")";g="parseFloat("+g+")";break;case "date":case "datetime":g=""+b.jgrid.parseDate(i.newfmt||"Y-m-d",g).getTime();h='jQuery.jgrid.parseDate("'+i.srcfmt+'",'+h+").getTime()";break;default:h=e._getStr(h),g=e._getStr('"'+e._toStr(g)+'"')}e._append(h+" "+f+" "+g);e._setCommand(a,c);e._resetNegate();return e};
this.equals=function(a,b,c){return e._compareValues(e.equals,a,b,"==",c)};this.notEquals=function(a,b,c){return e._compareValues(e.equals,a,b,"!==",c)};this.isNull=function(a,b,c){return e._compareValues(e.equals,a,null,"===",c)};this.greater=function(a,b,c){return e._compareValues(e.greater,a,b,">",c)};this.less=function(a,b,c){return e._compareValues(e.less,a,b,"<",c)};this.greaterOrEquals=function(a,b,c){return e._compareValues(e.greaterOrEquals,a,b,">=",c)};this.lessOrEquals=function(a,b,c){return e._compareValues(e.lessOrEquals,
a,b,"<=",c)};this.startsWith=function(a,c){var d=null==c?a:c,d=f?b.trim(d.toString()).length:d.toString().length;E?e._append(e._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".substr(0,"+d+") == "+e._getStr('"'+e._toStr(c)+'"')):(d=f?b.trim(c.toString()).length:c.toString().length,e._append(e._getStr("this")+".substr(0,"+d+") == "+e._getStr('"'+e._toStr(a)+'"')));e._setCommand(e.startsWith,a);e._resetNegate();return e};this.endsWith=function(a,c){var d=null==c?a:c,d=f?b.trim(d.toString()).length:
d.toString().length;E?e._append(e._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".substr("+e._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".length-"+d+","+d+') == "'+e._toStr(c)+'"'):e._append(e._getStr("this")+".substr("+e._getStr("this")+'.length-"'+e._toStr(a)+'".length,"'+e._toStr(a)+'".length) == "'+e._toStr(a)+'"');e._setCommand(e.endsWith,a);e._resetNegate();return e};this.contains=function(a,b){E?e._append(e._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+'.indexOf("'+e._toStr(b)+
'",0) > -1'):e._append(e._getStr("this")+'.indexOf("'+e._toStr(a)+'",0) > -1');e._setCommand(e.contains,a);e._resetNegate();return e};this.groupBy=function(b,c,d,f){return!e._hasData()?null:e._getGroup(a,b,c,d,f)};this.orderBy=function(a,c,d,f){c=null==c?"a":b.trim(c.toString().toLowerCase());null==d&&(d="text");null==f&&(f="Y-m-d");if("desc"==c||"descending"==c)c="d";if("asc"==c||"ascending"==c)c="a";v.push({by:a,dir:c,type:d,datefmt:f});return e};return e}(f,null)},getMethod:function(f){return this.getAccessor(b.fn.jqGrid,
f)},extend:function(f){b.extend(b.fn.jqGrid,f);this.no_legacy_api||b.fn.extend(f)}});b.fn.jqGrid=function(f){if("string"===typeof f){var d=b.jgrid.getMethod(f);if(!d)throw"jqGrid - No such method: "+f;var c=b.makeArray(arguments).slice(1);return d.apply(this,c)}return this.each(function(){if(!this.grid){var e=b.extend(!0,{url:"",height:150,page:1,rowNum:20,rowTotal:null,records:0,pager:"",pgbuttons:!0,pginput:!0,colModel:[],rowList:[],colNames:[],sortorder:"asc",sortname:"",datatype:"xml",mtype:"GET",
altRows:!1,selarrrow:[],savedRow:[],shrinkToFit:!0,xmlReader:{},jsonReader:{},subGrid:!1,subGridModel:[],reccount:0,lastpage:0,lastsort:0,selrow:null,beforeSelectRow:null,onSelectRow:null,onSortCol:null,ondblClickRow:null,onRightClickRow:null,onPaging:null,onSelectAll:null,onInitGrid:null,loadComplete:null,gridComplete:null,loadError:null,loadBeforeSend:null,afterInsertRow:null,beforeRequest:null,beforeProcessing:null,onHeaderClick:null,viewrecords:!1,loadonce:!1,multiselect:!1,multikey:!1,editurl:null,
search:!1,caption:"",hidegrid:!0,hiddengrid:!1,postData:{},userData:{},treeGrid:!1,treeGridModel:"nested",treeReader:{},treeANode:-1,ExpandColumn:null,tree_root_level:0,prmNames:{page:"page",rows:"rows",sort:"sidx",order:"sord",search:"_search",nd:"nd",id:"id",oper:"oper",editoper:"edit",addoper:"add",deloper:"del",subgridid:"id",npage:null,totalrows:"totalrows"},forceFit:!1,gridstate:"visible",cellEdit:!1,cellsubmit:"remote",nv:0,loadui:"enable",toolbar:[!1,""],scroll:!1,multiboxonly:!1,deselectAfterSort:!0,
scrollrows:!1,autowidth:!1,scrollOffset:18,cellLayout:5,subGridWidth:20,multiselectWidth:20,gridview:!1,rownumWidth:25,rownumbers:!1,pagerpos:"center",recordpos:"right",footerrow:!1,userDataOnFooter:!1,hoverrows:!0,altclass:"ui-priority-secondary",viewsortcols:[!1,"vertical",!0],resizeclass:"",autoencode:!1,remapColumns:[],ajaxGridOptions:{},direction:"ltr",toppager:!1,headertitles:!1,scrollTimeout:40,data:[],_index:{},grouping:!1,groupingView:{groupField:[],groupOrder:[],groupText:[],groupColumnShow:[],
groupSummary:[],showSummaryOnHide:!1,sortitems:[],sortnames:[],summary:[],summaryval:[],plusicon:"ui-icon-circlesmall-plus",minusicon:"ui-icon-circlesmall-minus",displayField:[]},ignoreCase:!1,cmTemplate:{},idPrefix:""},b.jgrid.defaults,f||{}),a=this,c={headers:[],cols:[],footers:[],dragStart:function(c,d,f){this.resizing={idx:c,startX:d.clientX,sOL:f[0]};this.hDiv.style.cursor="col-resize";this.curGbox=b("#rs_m"+b.jgrid.jqID(e.id),"#gbox_"+b.jgrid.jqID(e.id));this.curGbox.css({display:"block",left:f[0],
top:f[1],height:f[2]});b(a).triggerHandler("jqGridResizeStart",[d,c]);b.isFunction(e.resizeStart)&&e.resizeStart.call(this,d,c);document.onselectstart=function(){return!1}},dragMove:function(a){if(this.resizing){var b=a.clientX-this.resizing.startX,a=this.headers[this.resizing.idx],c="ltr"===e.direction?a.width+b:a.width-b,d;33<c&&(this.curGbox.css({left:this.resizing.sOL+b}),!0===e.forceFit?(d=this.headers[this.resizing.idx+e.nv],b="ltr"===e.direction?d.width-b:d.width+b,33<b&&(a.newWidth=c,d.newWidth=
b)):(this.newWidth="ltr"===e.direction?e.tblwidth+b:e.tblwidth-b,a.newWidth=c))}},dragEnd:function(){this.hDiv.style.cursor="default";if(this.resizing){var c=this.resizing.idx,d=this.headers[c].newWidth||this.headers[c].width,d=parseInt(d,10);this.resizing=!1;b("#rs_m"+b.jgrid.jqID(e.id)).css("display","none");e.colModel[c].width=d;this.headers[c].width=d;this.headers[c].el.style.width=d+"px";this.cols[c].style.width=d+"px";0<this.footers.length&&(this.footers[c].style.width=d+"px");!0===e.forceFit?
(d=this.headers[c+e.nv].newWidth||this.headers[c+e.nv].width,this.headers[c+e.nv].width=d,this.headers[c+e.nv].el.style.width=d+"px",this.cols[c+e.nv].style.width=d+"px",0<this.footers.length&&(this.footers[c+e.nv].style.width=d+"px"),e.colModel[c+e.nv].width=d):(e.tblwidth=this.newWidth||e.tblwidth,b("table:first",this.bDiv).css("width",e.tblwidth+"px"),b("table:first",this.hDiv).css("width",e.tblwidth+"px"),this.hDiv.scrollLeft=this.bDiv.scrollLeft,e.footerrow&&(b("table:first",this.sDiv).css("width",
e.tblwidth+"px"),this.sDiv.scrollLeft=this.bDiv.scrollLeft));b(a).triggerHandler("jqGridResizeStop",[d,c]);b.isFunction(e.resizeStop)&&e.resizeStop.call(this,d,c)}this.curGbox=null;document.onselectstart=function(){return!0}},populateVisible:function(){c.timer&&clearTimeout(c.timer);c.timer=null;var a=b(c.bDiv).height();if(a){var d=b("table:first",c.bDiv),f,L;if(d[0].rows.length)try{L=(f=d[0].rows[1])?b(f).outerHeight()||c.prevRowHeight:c.prevRowHeight}catch(h){L=c.prevRowHeight}if(L){c.prevRowHeight=
L;var g=e.rowNum;f=c.scrollTop=c.bDiv.scrollTop;var j=Math.round(d.position().top)-f,k=j+d.height();L*=g;var y,F,q;if(k<a&&0>=j&&(void 0===e.lastpage||parseInt((k+f+L-1)/L,10)<=e.lastpage))F=parseInt((a-k+L-1)/L,10),0<=k||2>F||!0===e.scroll?(y=Math.round((k+f)/L)+1,j=-1):j=1;0<j&&(y=parseInt(f/L,10)+1,F=parseInt((f+a)/L,10)+2-y,q=!0);if(F&&(!e.lastpage||!(y>e.lastpage||1==e.lastpage||y===e.page&&y===e.lastpage)))c.hDiv.loading?c.timer=setTimeout(c.populateVisible,e.scrollTimeout):(e.page=y,q&&(c.selectionPreserver(d[0]),
c.emptyRows.call(d[0],!1,!1)),c.populate(F))}}},scrollGrid:function(a){if(e.scroll){var b=c.bDiv.scrollTop;void 0===c.scrollTop&&(c.scrollTop=0);b!=c.scrollTop&&(c.scrollTop=b,c.timer&&clearTimeout(c.timer),c.timer=setTimeout(c.populateVisible,e.scrollTimeout))}c.hDiv.scrollLeft=c.bDiv.scrollLeft;e.footerrow&&(c.sDiv.scrollLeft=c.bDiv.scrollLeft);a&&a.stopPropagation()},selectionPreserver:function(a){var c=a.p,d=c.selrow,e=c.selarrrow?b.makeArray(c.selarrrow):null,f=a.grid.bDiv.scrollLeft,h=function(){var g;
c.selrow=null;c.selarrrow=[];if(c.multiselect&&e&&0<e.length)for(g=0;g<e.length;g++)e[g]!=d&&b(a).jqGrid("setSelection",e[g],!1,null);d&&b(a).jqGrid("setSelection",d,!1,null);a.grid.bDiv.scrollLeft=f;b(a).unbind(".selectionPreserver",h)};b(a).bind("jqGridGridComplete.selectionPreserver",h)}};if("TABLE"!=this.tagName.toUpperCase())alert("Element is not a table");else if(void 0!==document.documentMode&&5>=document.documentMode)alert("Grid can not be used in this ('quirks') mode!");else{b(this).empty().attr("tabindex",
"0");this.p=e;this.p.useProp=!!b.fn.prop;var d,g;if(0===this.p.colNames.length)for(d=0;d<this.p.colModel.length;d++)this.p.colNames[d]=this.p.colModel[d].label||this.p.colModel[d].name;if(this.p.colNames.length!==this.p.colModel.length)alert(b.jgrid.errors.model);else{var j=b("<div class='ui-jqgrid-view'></div>"),k=b.jgrid.msie;a.p.direction=b.trim(a.p.direction.toLowerCase());-1==b.inArray(a.p.direction,["ltr","rtl"])&&(a.p.direction="ltr");g=a.p.direction;b(j).insertBefore(this);b(this).removeClass("scroll").appendTo(j);
var l=b("<div class='ui-jqgrid ui-widget ui-widget-content ui-corner-all'></div>");b(l).attr({id:"gbox_"+this.id,dir:g}).insertBefore(j);b(j).attr("id","gview_"+this.id).appendTo(l);b("<div class='ui-widget-overlay jqgrid-overlay' id='lui_"+this.id+"'></div>").insertBefore(j);b("<div class='loading ui-state-default ui-state-active' id='load_"+this.id+"'>"+this.p.loadtext+"</div>").insertBefore(j);b(this).attr({cellspacing:"0",cellpadding:"0",border:"0",role:"grid","aria-multiselectable":!!this.p.multiselect,
"aria-labelledby":"gbox_"+this.id});var n=function(a,b){a=parseInt(a,10);return isNaN(a)?b||0:a},s=function(d,e,f,h,g,j){var P=a.p.colModel[d],k=P.align,y='style="',F=P.classes,q=P.name,o=[];k&&(y=y+("text-align:"+k+";"));P.hidden===true&&(y=y+"display:none;");if(e===0)y=y+("width: "+c.headers[d].width+"px;");else if(P.cellattr&&b.isFunction(P.cellattr))if((d=P.cellattr.call(a,g,f,h,P,j))&&typeof d==="string"){d=d.replace(/style/i,"style").replace(/title/i,"title");if(d.indexOf("title")>-1)P.title=
false;d.indexOf("class")>-1&&(F=void 0);o=d.split("style");if(o.length===2){o[1]=b.trim(o[1].replace("=",""));if(o[1].indexOf("'")===0||o[1].indexOf('"')===0)o[1]=o[1].substring(1);y=y+o[1].replace(/'/gi,'"')}else y=y+'"'}if(!o.length){o[0]="";y=y+'"'}y=y+((F!==void 0?' class="'+F+'"':"")+(P.title&&f?' title="'+b.jgrid.stripHtml(f)+'"':""));y=y+(' aria-describedby="'+a.p.id+"_"+q+'"');return y+o[0]},m=function(c){return c==null||c===""?"&#160;":a.p.autoencode?b.jgrid.htmlEncode(c):""+c},v=function(c,
d,e,f,h){var g=a.p.colModel[e];if(g.formatter!==void 0){c=""+a.p.idPrefix!==""?b.jgrid.stripPref(a.p.idPrefix,c):c;c={rowId:c,colModel:g,gid:a.p.id,pos:e};d=b.isFunction(g.formatter)?g.formatter.call(a,d,c,f,h):b.fmatter?b.fn.fmatter.call(a,g.formatter,d,c,f,h):m(d)}else d=m(d);return d},E=function(a,b,c,d,e,f){b=v(a,b,c,e,"add");return'<td role="gridcell" '+s(c,d,b,e,a,f)+">"+b+"</td>"},T=function(b,c,d,e){e='<input role="checkbox" type="checkbox" id="jqg_'+a.p.id+"_"+b+'" class="cbox" name="jqg_'+
a.p.id+"_"+b+'"'+(e?'checked="checked"':"")+"/>";return'<td role="gridcell" '+s(c,d,"",null,b,true)+">"+e+"</td>"},K=function(a,b,c,d){c=(parseInt(c,10)-1)*parseInt(d,10)+1+b;return'<td role="gridcell" class="ui-state-default jqgrid-rownum" '+s(a,b,c,null,b,true)+">"+c+"</td>"},aa=function(b){var c,d=[],e=0,f;for(f=0;f<a.p.colModel.length;f++){c=a.p.colModel[f];if(c.name!=="cb"&&c.name!=="subgrid"&&c.name!=="rn"){d[e]=b=="local"?c.name:b=="xml"||b==="xmlstring"?c.xmlmap||c.name:c.jsonmap||c.name;
e++}}return d},U=function(c){var d=a.p.remapColumns;if(!d||!d.length)d=b.map(a.p.colModel,function(a,b){return b});c&&(d=b.map(d,function(a){return a<c?null:a-c}));return d},W=function(a,c){var d;if(this.p.deepempty)b(this.rows).slice(1).remove();else{d=this.rows.length>0?this.rows[0]:null;b(this.firstChild).empty().append(d)}if(a&&this.p.scroll){b(this.grid.bDiv.firstChild).css({height:"auto"});b(this.grid.bDiv.firstChild.firstChild).css({height:0,display:"none"});if(this.grid.bDiv.scrollTop!==0)this.grid.bDiv.scrollTop=
0}if(c===true&&this.p.treeGrid){this.p.data=[];this.p._index={}}},M=function(){var c=a.p.data.length,d,e,f;d=a.p.rownumbers===true?1:0;e=a.p.multiselect===true?1:0;f=a.p.subGrid===true?1:0;d=a.p.keyIndex===false||a.p.loadonce===true?a.p.localReader.id:a.p.colModel[a.p.keyIndex+e+f+d].name;for(e=0;e<c;e++){f=b.jgrid.getAccessor(a.p.data[e],d);f===void 0&&(f=""+(e+1));a.p._index[f]=e}},X=function(c,d,e,f,g,h){var i="-1",j="",k,d=d?"display:none;":"",e="ui-widget-content jqgrow ui-row-"+a.p.direction+
e+(h?" ui-state-highlight":""),f=b.isFunction(a.p.rowattr)?a.p.rowattr.call(a,f,g):{};if(!b.isEmptyObject(f)){if(f.hasOwnProperty("id")){c=f.id;delete f.id}if(f.hasOwnProperty("tabindex")){i=f.tabindex;delete f.tabindex}if(f.hasOwnProperty("style")){d=d+f.style;delete f.style}if(f.hasOwnProperty("class")){e=e+(" "+f["class"]);delete f["class"]}try{delete f.role}catch(F){}for(k in f)f.hasOwnProperty(k)&&(j=j+(" "+k+"="+f[k]))}return'<tr role="row" id="'+c+'" tabindex="'+i+'" class="'+e+'"'+(d===""?
"":' style="'+d+'"')+j+">"},H=function(c,d,e,f,g){var h=new Date,i=a.p.datatype!="local"&&a.p.loadonce||a.p.datatype=="xmlstring",j=a.p.xmlReader,k=a.p.datatype=="local"?"local":"xml";if(i){a.p.data=[];a.p._index={};a.p.localReader.id="_id_"}a.p.reccount=0;if(b.isXMLDoc(c)){if(a.p.treeANode===-1&&!a.p.scroll){W.call(a,false,true);e=1}else e=e>1?e:1;var F=b(a),q,o,l=0,u,C=a.p.multiselect===true?1:0,n=0,s,m=a.p.rownumbers===true?1:0,Q,p=[],x,B={},t,w,G=[],v=a.p.altRows===true?" "+a.p.altclass:"",A;
if(a.p.subGrid===true){n=1;s=b.jgrid.getMethod("addSubGridCell")}j.repeatitems||(p=aa(k));Q=a.p.keyIndex===false?b.isFunction(j.id)?j.id.call(a,c):j.id:a.p.keyIndex;if(p.length>0&&!isNaN(Q)){a.p.remapColumns&&a.p.remapColumns.length&&(Q=b.inArray(Q,a.p.remapColumns));Q=p[Q]}k=(""+Q).indexOf("[")===-1?p.length?function(a,c){return b(Q,a).text()||c}:function(a,c){return b(j.cell,a).eq(Q).text()||c}:function(a,b){return a.getAttribute(Q.replace(/[\[\]]/g,""))||b};a.p.userData={};a.p.page=b.jgrid.getXmlData(c,
j.page)||a.p.page||0;a.p.lastpage=b.jgrid.getXmlData(c,j.total);if(a.p.lastpage===void 0)a.p.lastpage=1;a.p.records=b.jgrid.getXmlData(c,j.records)||0;b.isFunction(j.userdata)?a.p.userData=j.userdata.call(a,c)||{}:b.jgrid.getXmlData(c,j.userdata,true).each(function(){a.p.userData[this.getAttribute("name")]=b(this).text()});c=b.jgrid.getXmlData(c,j.root,true);(c=b.jgrid.getXmlData(c,j.row,true))||(c=[]);var R=c.length,r=0,z=[],D=parseInt(a.p.rowNum,10),H=a.p.scroll?b.jgrid.randId():1;if(R>0&&a.p.page<=
0)a.p.page=1;if(c&&R){g&&(D=D*(g+1));var g=b.isFunction(a.p.afterInsertRow),J=false,I;if(a.p.grouping){J=a.p.groupingView.groupCollapse===true;I=b.jgrid.getMethod("groupingPrepare")}for(;r<R;){t=c[r];w=k(t,H+r);w=a.p.idPrefix+w;q=e===0?0:e+1;A=(q+r)%2==1?v:"";var M=G.length;G.push("");m&&G.push(K(0,r,a.p.page,a.p.rowNum));C&&G.push(T(w,m,r,false));n&&G.push(s.call(F,C+m,r+e));if(j.repeatitems){x||(x=U(C+n+m));var N=b.jgrid.getXmlData(t,j.cell,true);b.each(x,function(b){var c=N[this];if(!c)return false;
u=c.textContent||c.text;B[a.p.colModel[b+C+n+m].name]=u;G.push(E(w,u,b+C+n+m,r+e,t,B))})}else for(q=0;q<p.length;q++){u=b.jgrid.getXmlData(t,p[q]);B[a.p.colModel[q+C+n+m].name]=u;G.push(E(w,u,q+C+n+m,r+e,t,B))}G[M]=X(w,J,A,B,t,false);G.push("</tr>");if(a.p.grouping){z=I.call(F,G,z,B,r);G=[]}if(i||a.p.treeGrid===true){B._id_=w;a.p.data.push(B);a.p._index[w]=a.p.data.length-1}if(a.p.gridview===false){b("tbody:first",d).append(G.join(""));F.triggerHandler("jqGridAfterInsertRow",[w,B,t]);g&&a.p.afterInsertRow.call(a,
w,B,t);G=[]}B={};l++;r++;if(l==D)break}}if(a.p.gridview===true){o=a.p.treeANode>-1?a.p.treeANode:0;if(a.p.grouping){F.jqGrid("groupingRender",z,a.p.colModel.length);z=null}else a.p.treeGrid===true&&o>0?b(a.rows[o]).after(G.join("")):b("tbody:first",d).append(G.join(""))}if(a.p.subGrid===true)try{F.jqGrid("addSubGrid",C+m)}catch(S){}a.p.totaltime=new Date-h;if(l>0&&a.p.records===0)a.p.records=R;G=null;if(a.p.treeGrid===true)try{F.jqGrid("setTreeNode",o+1,l+o+1)}catch(V){}if(!a.p.treeGrid&&!a.p.scroll)a.grid.bDiv.scrollTop=
0;a.p.reccount=l;a.p.treeANode=-1;a.p.userDataOnFooter&&F.jqGrid("footerData","set",a.p.userData,true);if(i){a.p.records=R;a.p.lastpage=Math.ceil(R/D)}f||a.updatepager(false,true);if(i)for(;l<R;){t=c[l];w=k(t,l+H);w=a.p.idPrefix+w;if(j.repeatitems){x||(x=U(C+n+m));var O=b.jgrid.getXmlData(t,j.cell,true);b.each(x,function(b){var c=O[this];if(!c)return false;u=c.textContent||c.text;B[a.p.colModel[b+C+n+m].name]=u})}else for(q=0;q<p.length;q++){u=b.jgrid.getXmlData(t,p[q]);B[a.p.colModel[q+C+n+m].name]=
u}B._id_=w;a.p.data.push(B);a.p._index[w]=a.p.data.length-1;B={};l++}}},V=function(c,d,e,f,g){d=new Date;if(c){if(a.p.treeANode===-1&&!a.p.scroll){W.call(a,false,true);e=1}else e=e>1?e:1;var h,i,j=a.p.datatype!="local"&&a.p.loadonce||a.p.datatype=="jsonstring";if(j){a.p.data=[];a.p._index={};a.p.localReader.id="_id_"}a.p.reccount=0;if(a.p.datatype=="local"){h=a.p.localReader;i="local"}else{h=a.p.jsonReader;i="json"}var k=b(a),l=0,q,o,n=[],u,C=a.p.multiselect?1:0,m=0,s,p=a.p.rownumbers===true?1:0,
r,v,x={},B,t,w=[],G=a.p.altRows===true?" "+a.p.altclass:"",A;a.p.page=b.jgrid.getAccessor(c,h.page)||a.p.page||0;r=b.jgrid.getAccessor(c,h.total);if(a.p.subGrid===true){m=1;s=b.jgrid.getMethod("addSubGridCell")}a.p.lastpage=r===void 0?1:r;a.p.records=b.jgrid.getAccessor(c,h.records)||0;a.p.userData=b.jgrid.getAccessor(c,h.userdata)||{};h.repeatitems||(u=n=aa(i));i=a.p.keyIndex===false?b.isFunction(h.id)?h.id.call(a,c):h.id:a.p.keyIndex;if(n.length>0&&!isNaN(i)){a.p.remapColumns&&a.p.remapColumns.length&&
(i=b.inArray(i,a.p.remapColumns));i=n[i]}(v=b.jgrid.getAccessor(c,h.root))||(v=[]);r=v.length;c=0;if(r>0&&a.p.page<=0)a.p.page=1;var z=parseInt(a.p.rowNum,10),R=a.p.scroll?b.jgrid.randId():1,D=false,H;g&&(z=z*(g+1));a.p.datatype==="local"&&!a.p.deselectAfterSort&&(D=true);var J=b.isFunction(a.p.afterInsertRow),I=[],M=false,N;if(a.p.grouping){M=a.p.groupingView.groupCollapse===true;N=b.jgrid.getMethod("groupingPrepare")}for(;c<r;){g=v[c];t=b.jgrid.getAccessor(g,i);if(t===void 0){t=R+c;if(n.length===
0&&h.cell){q=b.jgrid.getAccessor(g,h.cell);t=q!==void 0?q[i]||t:t}}t=a.p.idPrefix+t;q=e===1?0:e;A=(q+c)%2==1?G:"";D&&(H=a.p.multiselect?b.inArray(t,a.p.selarrrow)!==-1:t===a.p.selrow);var O=w.length;w.push("");p&&w.push(K(0,c,a.p.page,a.p.rowNum));C&&w.push(T(t,p,c,H));m&&w.push(s.call(k,C+p,c+e));if(h.repeatitems){h.cell&&(g=b.jgrid.getAccessor(g,h.cell));u||(u=U(C+m+p))}for(o=0;o<u.length;o++){q=b.jgrid.getAccessor(g,u[o]);x[a.p.colModel[o+C+m+p].name]=q;w.push(E(t,q,o+C+m+p,c+e,g,x))}w[O]=X(t,
M,A,x,g,H);w.push("</tr>");if(a.p.grouping){I=N.call(k,w,I,x,c);w=[]}if(j||a.p.treeGrid===true){x._id_=t;a.p.data.push(x);a.p._index[t]=a.p.data.length-1}if(a.p.gridview===false){b("#"+b.jgrid.jqID(a.p.id)+" tbody:first").append(w.join(""));k.triggerHandler("jqGridAfterInsertRow",[t,x,g]);J&&a.p.afterInsertRow.call(a,t,x,g);w=[]}x={};l++;c++;if(l==z)break}if(a.p.gridview===true){B=a.p.treeANode>-1?a.p.treeANode:0;a.p.grouping?k.jqGrid("groupingRender",I,a.p.colModel.length):a.p.treeGrid===true&&B>
0?b(a.rows[B]).after(w.join("")):b("#"+b.jgrid.jqID(a.p.id)+" tbody:first").append(w.join(""))}if(a.p.subGrid===true)try{k.jqGrid("addSubGrid",C+p)}catch(S){}a.p.totaltime=new Date-d;if(l>0&&a.p.records===0)a.p.records=r;if(a.p.treeGrid===true)try{k.jqGrid("setTreeNode",B+1,l+B+1)}catch(V){}if(!a.p.treeGrid&&!a.p.scroll)a.grid.bDiv.scrollTop=0;a.p.reccount=l;a.p.treeANode=-1;a.p.userDataOnFooter&&k.jqGrid("footerData","set",a.p.userData,true);if(j){a.p.records=r;a.p.lastpage=Math.ceil(r/z)}f||a.updatepager(false,
true);if(j)for(;l<r&&v[l];){g=v[l];t=b.jgrid.getAccessor(g,i);if(t===void 0){t=R+l;n.length===0&&h.cell&&(t=b.jgrid.getAccessor(g,h.cell)[i]||t)}if(g){t=a.p.idPrefix+t;if(h.repeatitems){h.cell&&(g=b.jgrid.getAccessor(g,h.cell));u||(u=U(C+m+p))}for(o=0;o<u.length;o++){q=b.jgrid.getAccessor(g,u[o]);x[a.p.colModel[o+C+m+p].name]=q}x._id_=t;a.p.data.push(x);a.p._index[t]=a.p.data.length-1;x={}}l++}}},ja=function(){function c(a){var b=0,d,e,g,h,i;if(a.groups!=null){(e=a.groups.length&&a.groupOp.toString().toUpperCase()===
"OR")&&u.orBegin();for(d=0;d<a.groups.length;d++){b>0&&e&&u.or();try{c(a.groups[d])}catch(j){alert(j)}b++}e&&u.orEnd()}if(a.rules!=null)try{(g=a.rules.length&&a.groupOp.toString().toUpperCase()==="OR")&&u.orBegin();for(d=0;d<a.rules.length;d++){i=a.rules[d];h=a.groupOp.toString().toUpperCase();if(n[i.op]&&i.field){b>0&&h&&h==="OR"&&(u=u.or());u=n[i.op](u,h)(i.field,i.data,f[i.field])}b++}g&&u.orEnd()}catch(oa){alert(oa)}}var d,e=false,f={},g=[],h=[],i,j,k;if(b.isArray(a.p.data)){var l=a.p.grouping?
a.p.groupingView:false,q,o;b.each(a.p.colModel,function(){j=this.sorttype||"text";if(j=="date"||j=="datetime"){if(this.formatter&&typeof this.formatter==="string"&&this.formatter=="date"){i=this.formatoptions&&this.formatoptions.srcformat?this.formatoptions.srcformat:b.jgrid.formatter.date.srcformat;k=this.formatoptions&&this.formatoptions.newformat?this.formatoptions.newformat:b.jgrid.formatter.date.newformat}else i=k=this.datefmt||"Y-m-d";f[this.name]={stype:j,srcfmt:i,newfmt:k}}else f[this.name]=
{stype:j,srcfmt:"",newfmt:""};if(a.p.grouping){o=0;for(q=l.groupField.length;o<q;o++)if(this.name==l.groupField[o]){var c=this.name;if(this.index)c=this.index;g[o]=f[c];h[o]=c}}if(!e&&(this.index==a.p.sortname||this.name==a.p.sortname)){d=this.name;e=true}});if(a.p.treeGrid)b(a).jqGrid("SortTree",d,a.p.sortorder,f[d].stype,f[d].srcfmt);else{var n={eq:function(a){return a.equals},ne:function(a){return a.notEquals},lt:function(a){return a.less},le:function(a){return a.lessOrEquals},gt:function(a){return a.greater},
ge:function(a){return a.greaterOrEquals},cn:function(a){return a.contains},nc:function(a,b){return b==="OR"?a.orNot().contains:a.andNot().contains},bw:function(a){return a.startsWith},bn:function(a,b){return b==="OR"?a.orNot().startsWith:a.andNot().startsWith},en:function(a,b){return b==="OR"?a.orNot().endsWith:a.andNot().endsWith},ew:function(a){return a.endsWith},ni:function(a,b){return b==="OR"?a.orNot().equals:a.andNot().equals},"in":function(a){return a.equals},nu:function(a){return a.isNull},
nn:function(a,b){return b==="OR"?a.orNot().isNull:a.andNot().isNull}},u=b.jgrid.from(a.p.data);a.p.ignoreCase&&(u=u.ignoreCase());if(a.p.search===true){var m=a.p.postData.filters;if(m){typeof m==="string"&&(m=b.jgrid.parse(m));c(m)}else try{u=n[a.p.postData.searchOper](u)(a.p.postData.searchField,a.p.postData.searchString,f[a.p.postData.searchField])}catch(p){}}if(a.p.grouping)for(o=0;o<q;o++)u.orderBy(h[o],l.groupOrder[o],g[o].stype,g[o].srcfmt);d&&a.p.sortorder&&e&&(a.p.sortorder.toUpperCase()==
"DESC"?u.orderBy(a.p.sortname,"d",f[d].stype,f[d].srcfmt):u.orderBy(a.p.sortname,"a",f[d].stype,f[d].srcfmt));var m=u.select(),r=parseInt(a.p.rowNum,10),s=m.length,v=parseInt(a.p.page,10),E=Math.ceil(s/r),x={},m=m.slice((v-1)*r,v*r),f=u=null;x[a.p.localReader.total]=E;x[a.p.localReader.page]=v;x[a.p.localReader.records]=s;x[a.p.localReader.root]=m;x[a.p.localReader.userdata]=a.p.userData;m=null;return x}}},ba=function(){a.grid.hDiv.loading=true;if(!a.p.hiddengrid)switch(a.p.loadui){case "enable":b("#load_"+
b.jgrid.jqID(a.p.id)).show();break;case "block":b("#lui_"+b.jgrid.jqID(a.p.id)).show();b("#load_"+b.jgrid.jqID(a.p.id)).show()}},O=function(){a.grid.hDiv.loading=false;switch(a.p.loadui){case "enable":b("#load_"+b.jgrid.jqID(a.p.id)).hide();break;case "block":b("#lui_"+b.jgrid.jqID(a.p.id)).hide();b("#load_"+b.jgrid.jqID(a.p.id)).hide()}},I=function(c){if(!a.grid.hDiv.loading){var d=a.p.scroll&&c===false,e={},f,g=a.p.prmNames;if(a.p.page<=0)a.p.page=1;if(g.search!==null)e[g.search]=a.p.search;g.nd!==
null&&(e[g.nd]=(new Date).getTime());if(g.rows!==null)e[g.rows]=a.p.rowNum;if(g.page!==null)e[g.page]=a.p.page;if(g.sort!==null)e[g.sort]=a.p.sortname;if(g.order!==null)e[g.order]=a.p.sortorder;if(a.p.rowTotal!==null&&g.totalrows!==null)e[g.totalrows]=a.p.rowTotal;var h=b.isFunction(a.p.loadComplete),i=h?a.p.loadComplete:null,j=0,c=c||1;if(c>1)if(g.npage!==null){e[g.npage]=c;j=c-1;c=1}else i=function(b){a.p.page++;a.grid.hDiv.loading=false;h&&a.p.loadComplete.call(a,b);I(c-1)};else g.npage!==null&&
delete a.p.postData[g.npage];if(a.p.grouping){b(a).jqGrid("groupingSetup");var k=a.p.groupingView,l,q="";for(l=0;l<k.groupField.length;l++){var o=k.groupField[l];b.each(a.p.colModel,function(a,b){if(b.name==o&&b.index)o=b.index});q=q+(o+" "+k.groupOrder[l]+", ")}e[g.sort]=q+e[g.sort]}b.extend(a.p.postData,e);var n=!a.p.scroll?1:a.rows.length-1,e=b(a).triggerHandler("jqGridBeforeRequest");if(!(e===false||e==="stop"))if(b.isFunction(a.p.datatype))a.p.datatype.call(a,a.p.postData,"load_"+a.p.id);else{if(b.isFunction(a.p.beforeRequest)){e=
a.p.beforeRequest.call(a);e===void 0&&(e=true);if(e===false)return}f=a.p.datatype.toLowerCase();switch(f){case "json":case "jsonp":case "xml":case "script":b.ajax(b.extend({url:a.p.url,type:a.p.mtype,dataType:f,data:b.isFunction(a.p.serializeGridData)?a.p.serializeGridData.call(a,a.p.postData):a.p.postData,success:function(e,g,h){if(b.isFunction(a.p.beforeProcessing)&&a.p.beforeProcessing.call(a,e,g,h)===false)O();else{f==="xml"?H(e,a.grid.bDiv,n,c>1,j):V(e,a.grid.bDiv,n,c>1,j);b(a).triggerHandler("jqGridLoadComplete",
[e]);i&&i.call(a,e);b(a).triggerHandler("jqGridAfterLoadComplete",[e]);d&&a.grid.populateVisible();if(a.p.loadonce||a.p.treeGrid)a.p.datatype="local";c===1&&O()}},error:function(e,d,f){b.isFunction(a.p.loadError)&&a.p.loadError.call(a,e,d,f);c===1&&O()},beforeSend:function(c,e){var d=true;b.isFunction(a.p.loadBeforeSend)&&(d=a.p.loadBeforeSend.call(a,c,e));d===void 0&&(d=true);if(d===false)return false;ba()}},b.jgrid.ajaxOptions,a.p.ajaxGridOptions));break;case "xmlstring":ba();e=b.jgrid.stringToDoc(a.p.datastr);
H(e,a.grid.bDiv);b(a).triggerHandler("jqGridLoadComplete",[e]);h&&a.p.loadComplete.call(a,e);b(a).triggerHandler("jqGridAfterLoadComplete",[e]);a.p.datatype="local";a.p.datastr=null;O();break;case "jsonstring":ba();e=typeof a.p.datastr==="string"?b.jgrid.parse(a.p.datastr):a.p.datastr;V(e,a.grid.bDiv);b(a).triggerHandler("jqGridLoadComplete",[e]);h&&a.p.loadComplete.call(a,e);b(a).triggerHandler("jqGridAfterLoadComplete",[e]);a.p.datatype="local";a.p.datastr=null;O();break;case "local":case "clientside":ba();
a.p.datatype="local";e=ja();V(e,a.grid.bDiv,n,c>1,j);b(a).triggerHandler("jqGridLoadComplete",[e]);i&&i.call(a,e);b(a).triggerHandler("jqGridAfterLoadComplete",[e]);d&&a.grid.populateVisible();O()}}}},ca=function(c){b("#cb_"+b.jgrid.jqID(a.p.id),a.grid.hDiv)[a.p.useProp?"prop":"attr"]("checked",c);if(a.p.frozenColumns&&a.p.id+"_frozen")b("#cb_"+b.jgrid.jqID(a.p.id),a.grid.fhDiv)[a.p.useProp?"prop":"attr"]("checked",c)},ka=function(c,d){var e="",f="<table cellspacing='0' cellpadding='0' border='0' style='table-layout:auto;' class='ui-pg-table'><tbody><tr>",
h="",i,j,k,l,m=function(c){var d;b.isFunction(a.p.onPaging)&&(d=a.p.onPaging.call(a,c));a.p.selrow=null;if(a.p.multiselect){a.p.selarrrow=[];ca(false)}a.p.savedRow=[];return d=="stop"?false:true},c=c.substr(1),d=d+("_"+c);i="pg_"+c;j=c+"_left";k=c+"_center";l=c+"_right";b("#"+b.jgrid.jqID(c)).append("<div id='"+i+"' class='ui-pager-control' role='group'><table cellspacing='0' cellpadding='0' border='0' class='ui-pg-table' style='width:100%;table-layout:fixed;height:100%;' role='row'><tbody><tr><td id='"+
j+"' align='left'></td><td id='"+k+"' align='center' style='white-space:pre;'></td><td id='"+l+"' align='right'></td></tr></tbody></table></div>").attr("dir","ltr");if(a.p.rowList.length>0){h="<td dir='"+g+"'>";h=h+"<select class='ui-pg-selbox' role='listbox'>";for(j=0;j<a.p.rowList.length;j++)h=h+('<option role="option" value="'+a.p.rowList[j]+'"'+(a.p.rowNum==a.p.rowList[j]?' selected="selected"':"")+">"+a.p.rowList[j]+"</option>");h=h+"</select></td>"}g=="rtl"&&(f=f+h);a.p.pginput===true&&(e="<td dir='"+
g+"'>"+b.jgrid.format(a.p.pgtext||"","<input class='ui-pg-input' type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+b.jgrid.jqID(c)+"'></span>")+"</td>");if(a.p.pgbuttons===true){j=["first"+d,"prev"+d,"next"+d,"last"+d];g=="rtl"&&j.reverse();f=f+("<td id='"+j[0]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-first'></span></td>");f=f+("<td id='"+j[1]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-prev'></span></td>");
f=f+(e!==""?"<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'></span></td>"+e+"<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'></span></td>":"")+("<td id='"+j[2]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-next'></span></td>");f=f+("<td id='"+j[3]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-end'></span></td>")}else e!==""&&(f=f+e);g=="ltr"&&(f=f+h);f=f+"</tr></tbody></table>";
a.p.viewrecords===true&&b("td#"+c+"_"+a.p.recordpos,"#"+i).append("<div dir='"+g+"' style='text-align:"+a.p.recordpos+"' class='ui-paging-info'></div>");b("td#"+c+"_"+a.p.pagerpos,"#"+i).append(f);h=b(".ui-jqgrid").css("font-size")||"11px";b(document.body).append("<div id='testpg' class='ui-jqgrid ui-widget ui-widget-content' style='font-size:"+h+";visibility:hidden;' ></div>");f=b(f).clone().appendTo("#testpg").width();b("#testpg").remove();if(f>0){e!==""&&(f=f+50);b("td#"+c+"_"+a.p.pagerpos,"#"+
i).width(f)}a.p._nvtd=[];a.p._nvtd[0]=f?Math.floor((a.p.width-f)/2):Math.floor(a.p.width/3);a.p._nvtd[1]=0;f=null;b(".ui-pg-selbox","#"+i).bind("change",function(){if(!m("records"))return false;a.p.page=Math.round(a.p.rowNum*(a.p.page-1)/this.value-0.5)+1;a.p.rowNum=this.value;a.p.pager&&b(".ui-pg-selbox",a.p.pager).val(this.value);a.p.toppager&&b(".ui-pg-selbox",a.p.toppager).val(this.value);I();return false});if(a.p.pgbuttons===true){b(".ui-pg-button","#"+i).hover(function(){if(b(this).hasClass("ui-state-disabled"))this.style.cursor=
"default";else{b(this).addClass("ui-state-hover");this.style.cursor="pointer"}},function(){if(!b(this).hasClass("ui-state-disabled")){b(this).removeClass("ui-state-hover");this.style.cursor="default"}});b("#first"+b.jgrid.jqID(d)+", #prev"+b.jgrid.jqID(d)+", #next"+b.jgrid.jqID(d)+", #last"+b.jgrid.jqID(d)).click(function(){var b=n(a.p.page,1),c=n(a.p.lastpage,1),e=false,f=true,g=true,h=true,i=true;if(c===0||c===1)i=h=g=f=false;else if(c>1&&b>=1)if(b===1)g=f=false;else{if(b===c)i=h=false}else if(c>
1&&b===0){i=h=false;b=c-1}if(!m(this.id))return false;if(this.id==="first"+d&&f){a.p.page=1;e=true}if(this.id==="prev"+d&&g){a.p.page=b-1;e=true}if(this.id==="next"+d&&h){a.p.page=b+1;e=true}if(this.id==="last"+d&&i){a.p.page=c;e=true}e&&I();return false})}a.p.pginput===true&&b("input.ui-pg-input","#"+i).keypress(function(c){if((c.charCode||c.keyCode||0)==13){if(!m("user"))return false;a.p.page=b(this).val()>0?b(this).val():a.p.page;I();return false}return this})},la=function(c,d,e,f){if(a.p.colModel[d].sortable&&
!(a.p.savedRow.length>0)){if(!e){if(a.p.lastsort==d)if(a.p.sortorder=="asc")a.p.sortorder="desc";else{if(a.p.sortorder=="desc")a.p.sortorder="asc"}else a.p.sortorder=a.p.colModel[d].firstsortorder||"asc";a.p.page=1}if(f){if(a.p.lastsort==d&&a.p.sortorder==f&&!e)return;a.p.sortorder=f}e=a.grid.headers[a.p.lastsort].el;f=a.grid.headers[d].el;b("span.ui-grid-ico-sort",e).addClass("ui-state-disabled");b(e).attr("aria-selected","false");b("span.ui-icon-"+a.p.sortorder,f).removeClass("ui-state-disabled");
b(f).attr("aria-selected","true");if(!a.p.viewsortcols[0]&&a.p.lastsort!=d){b("span.s-ico",e).hide();b("span.s-ico",f).show()}c=c.substring(5+a.p.id.length+1);a.p.sortname=a.p.colModel[d].index||c;e=a.p.sortorder;if(b(a).triggerHandler("jqGridSortCol",[c,d,e])==="stop")a.p.lastsort=d;else if(b.isFunction(a.p.onSortCol)&&a.p.onSortCol.call(a,c,d,e)=="stop")a.p.lastsort=d;else{if(a.p.datatype=="local")a.p.deselectAfterSort&&b(a).jqGrid("resetSelection");else{a.p.selrow=null;a.p.multiselect&&ca(false);
a.p.selarrrow=[];a.p.savedRow=[]}if(a.p.scroll){e=a.grid.bDiv.scrollLeft;W.call(a,true,false);a.grid.hDiv.scrollLeft=e}a.p.subGrid&&a.p.datatype=="local"&&b("td.sgexpanded","#"+b.jgrid.jqID(a.p.id)).each(function(){b(this).trigger("click")});I();a.p.lastsort=d;if(a.p.sortname!=c&&d)a.p.lastsort=d}}},pa=function(c){var d,e=[0],f=b.jgrid.cell_width?0:a.p.cellLayout;for(d=0;d<=c;d++)a.p.colModel[d].hidden===false&&(e[0]=e[0]+(a.p.colModel[d].width+f));a.p.direction=="rtl"&&(e[0]=a.p.width-e[0]);e[0]=
e[0]-a.grid.bDiv.scrollLeft;e.push(b(a.grid.hDiv).position().top);e.push(b(a.grid.bDiv).offset().top-b(a.grid.hDiv).offset().top+b(a.grid.bDiv).height());return e},ma=function(c){var d,e=a.grid.headers,f=b.jgrid.getCellIndex(c);for(d=0;d<e.length;d++)if(c===e[d].el){f=d;break}return f};this.p.id=this.id;-1==b.inArray(a.p.multikey,["shiftKey","altKey","ctrlKey"])&&(a.p.multikey=!1);a.p.keyIndex=!1;for(d=0;d<a.p.colModel.length;d++)a.p.colModel[d]=b.extend(!0,{},a.p.cmTemplate,a.p.colModel[d].template||
{},a.p.colModel[d]),!1===a.p.keyIndex&&!0===a.p.colModel[d].key&&(a.p.keyIndex=d);a.p.sortorder=a.p.sortorder.toLowerCase();b.jgrid.cell_width=b.jgrid.cellWidth();!0===a.p.grouping&&(a.p.scroll=!1,a.p.rownumbers=!1,a.p.treeGrid=!1,a.p.gridview=!0);if(!0===this.p.treeGrid){try{b(this).jqGrid("setTreeGrid")}catch(ra){}"local"!=a.p.datatype&&(a.p.localReader={id:"_id_"})}if(this.p.subGrid)try{b(a).jqGrid("setSubGrid")}catch(sa){}this.p.multiselect&&(this.p.colNames.unshift("<input role='checkbox' id='cb_"+
this.p.id+"' class='cbox' type='checkbox'/>"),this.p.colModel.unshift({name:"cb",width:b.jgrid.cell_width?a.p.multiselectWidth+a.p.cellLayout:a.p.multiselectWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,align:"center",fixed:!0}));this.p.rownumbers&&(this.p.colNames.unshift(""),this.p.colModel.unshift({name:"rn",width:a.p.rownumWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,align:"center",fixed:!0}));a.p.xmlReader=b.extend(!0,{root:"rows",row:"row",page:"rows>page",total:"rows>total",records:"rows>records",
repeatitems:!0,cell:"cell",id:"[id]",userdata:"userdata",subgrid:{root:"rows",row:"row",repeatitems:!0,cell:"cell"}},a.p.xmlReader);a.p.jsonReader=b.extend(!0,{root:"rows",page:"page",total:"total",records:"records",repeatitems:!0,cell:"cell",id:"id",userdata:"userdata",subgrid:{root:"rows",repeatitems:!0,cell:"cell"}},a.p.jsonReader);a.p.localReader=b.extend(!0,{root:"rows",page:"page",total:"total",records:"records",repeatitems:!1,cell:"cell",id:"id",userdata:"userdata",subgrid:{root:"rows",repeatitems:!0,
cell:"cell"}},a.p.localReader);a.p.scroll&&(a.p.pgbuttons=!1,a.p.pginput=!1,a.p.rowList=[]);a.p.data.length&&M();var z="<thead><tr class='ui-jqgrid-labels' role='rowheader'>",na,N,da,ea,fa,A,p,Y;N=Y="";if(!0===a.p.shrinkToFit&&!0===a.p.forceFit)for(d=a.p.colModel.length-1;0<=d;d--)if(!a.p.colModel[d].hidden){a.p.colModel[d].resizable=!1;break}"horizontal"==a.p.viewsortcols[1]&&(Y=" ui-i-asc",N=" ui-i-desc");na=k?"class='ui-th-div-ie'":"";Y="<span class='s-ico' style='display:none'><span sort='asc' class='ui-grid-ico-sort ui-icon-asc"+
Y+" ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-"+g+"'></span>"+("<span sort='desc' class='ui-grid-ico-sort ui-icon-desc"+N+" ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-"+g+"'></span></span>");for(d=0;d<this.p.colNames.length;d++)N=a.p.headertitles?' title="'+b.jgrid.stripHtml(a.p.colNames[d])+'"':"",z+="<th id='"+a.p.id+"_"+a.p.colModel[d].name+"' role='columnheader' class='ui-state-default ui-th-column ui-th-"+g+"'"+N+">",N=a.p.colModel[d].index||a.p.colModel[d].name,z+="<div id='jqgh_"+
a.p.id+"_"+a.p.colModel[d].name+"' "+na+">"+a.p.colNames[d],a.p.colModel[d].width=a.p.colModel[d].width?parseInt(a.p.colModel[d].width,10):150,"boolean"!==typeof a.p.colModel[d].title&&(a.p.colModel[d].title=!0),N==a.p.sortname&&(a.p.lastsort=d),z+=Y+"</div></th>";Y=null;b(this).append(z+"</tr></thead>");b("thead tr:first th",this).hover(function(){b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")});if(this.p.multiselect){var ga=[],Z;b("#cb_"+b.jgrid.jqID(a.p.id),
this).bind("click",function(){a.p.selarrrow=[];var c=a.p.frozenColumns===true?a.p.id+"_frozen":"";if(this.checked){b(a.rows).each(function(d){if(d>0&&!b(this).hasClass("ui-subgrid")&&!b(this).hasClass("jqgroup")&&!b(this).hasClass("ui-state-disabled")){b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+b.jgrid.jqID(this.id))[a.p.useProp?"prop":"attr"]("checked",true);b(this).addClass("ui-state-highlight").attr("aria-selected","true");a.p.selarrrow.push(this.id);a.p.selrow=this.id;if(c){b("#jqg_"+b.jgrid.jqID(a.p.id)+
"_"+b.jgrid.jqID(this.id),a.grid.fbDiv)[a.p.useProp?"prop":"attr"]("checked",true);b("#"+b.jgrid.jqID(this.id),a.grid.fbDiv).addClass("ui-state-highlight")}}});Z=true;ga=[]}else{b(a.rows).each(function(d){if(d>0&&!b(this).hasClass("ui-subgrid")&&!b(this).hasClass("ui-state-disabled")){b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+b.jgrid.jqID(this.id))[a.p.useProp?"prop":"attr"]("checked",false);b(this).removeClass("ui-state-highlight").attr("aria-selected","false");ga.push(this.id);if(c){b("#jqg_"+b.jgrid.jqID(a.p.id)+
"_"+b.jgrid.jqID(this.id),a.grid.fbDiv)[a.p.useProp?"prop":"attr"]("checked",false);b("#"+b.jgrid.jqID(this.id),a.grid.fbDiv).removeClass("ui-state-highlight")}}});a.p.selrow=null;Z=false}b(a).triggerHandler("jqGridSelectAll",[Z?a.p.selarrrow:ga,Z]);b.isFunction(a.p.onSelectAll)&&a.p.onSelectAll.call(a,Z?a.p.selarrrow:ga,Z)})}!0===a.p.autowidth&&(z=b(l).innerWidth(),a.p.width=0<z?z:"nw");(function(){var d=0,e=b.jgrid.cell_width?0:n(a.p.cellLayout,0),f=0,g,h=n(a.p.scrollOffset,0),j,k=false,l,m=0,p=
0,q;b.each(a.p.colModel,function(){if(this.hidden===void 0)this.hidden=false;if(a.p.grouping&&a.p.autowidth){var c=b.inArray(this.name,a.p.groupingView.groupField);if(c!==-1)this.hidden=!a.p.groupingView.groupColumnShow[c]}this.widthOrg=j=n(this.width,0);if(this.hidden===false){d=d+(j+e);this.fixed?m=m+(j+e):f++;p++}});if(isNaN(a.p.width))a.p.width=d+(a.p.shrinkToFit===false&&!isNaN(a.p.height)?h:0);c.width=a.p.width;a.p.tblwidth=d;if(a.p.shrinkToFit===false&&a.p.forceFit===true)a.p.forceFit=false;
if(a.p.shrinkToFit===true&&f>0){l=c.width-e*f-m;if(!isNaN(a.p.height)){l=l-h;k=true}d=0;b.each(a.p.colModel,function(b){if(this.hidden===false&&!this.fixed){this.width=j=Math.round(l*this.width/(a.p.tblwidth-e*f-m));d=d+j;g=b}});q=0;k?c.width-m-(d+e*f)!==h&&(q=c.width-m-(d+e*f)-h):!k&&Math.abs(c.width-m-(d+e*f))!==1&&(q=c.width-m-(d+e*f));a.p.colModel[g].width=a.p.colModel[g].width+q;a.p.tblwidth=d+q+e*f+m;if(a.p.tblwidth>a.p.width){a.p.colModel[g].width=a.p.colModel[g].width-(a.p.tblwidth-parseInt(a.p.width,
10));a.p.tblwidth=a.p.width}}})();b(l).css("width",c.width+"px").append("<div class='ui-jqgrid-resize-mark' id='rs_m"+a.p.id+"'>&#160;</div>");b(j).css("width",c.width+"px");var z=b("thead:first",a).get(0),S="";a.p.footerrow&&(S+="<table role='grid' style='width:"+a.p.tblwidth+"px' class='ui-jqgrid-ftable' cellspacing='0' cellpadding='0' border='0'><tbody><tr role='row' class='ui-widget-content footrow footrow-"+g+"'>");var j=b("tr:first",z),$="<tr class='jqgfirstrow' role='row' style='height:auto'>";
a.p.disableClick=!1;b("th",j).each(function(d){da=a.p.colModel[d].width;if(a.p.colModel[d].resizable===void 0)a.p.colModel[d].resizable=true;if(a.p.colModel[d].resizable){ea=document.createElement("span");b(ea).html("&#160;").addClass("ui-jqgrid-resize ui-jqgrid-resize-"+g).css("cursor","col-resize");b(this).addClass(a.p.resizeclass)}else ea="";b(this).css("width",da+"px").prepend(ea);var e="";if(a.p.colModel[d].hidden){b(this).css("display","none");e="display:none;"}$=$+("<td role='gridcell' style='height:0px;width:"+
da+"px;"+e+"'></td>");c.headers[d]={width:da,el:this};fa=a.p.colModel[d].sortable;if(typeof fa!=="boolean")fa=a.p.colModel[d].sortable=true;e=a.p.colModel[d].name;e=="cb"||e=="subgrid"||e=="rn"||a.p.viewsortcols[2]&&b(">div",this).addClass("ui-jqgrid-sortable");if(fa)if(a.p.viewsortcols[0]){b("div span.s-ico",this).show();d==a.p.lastsort&&b("div span.ui-icon-"+a.p.sortorder,this).removeClass("ui-state-disabled")}else if(d==a.p.lastsort){b("div span.s-ico",this).show();b("div span.ui-icon-"+a.p.sortorder,
this).removeClass("ui-state-disabled")}a.p.footerrow&&(S=S+("<td role='gridcell' "+s(d,0,"",null,"",false)+">&#160;</td>"))}).mousedown(function(d){if(b(d.target).closest("th>span.ui-jqgrid-resize").length==1){var e=ma(this);if(a.p.forceFit===true){var f=a.p,g=e,h;for(h=e+1;h<a.p.colModel.length;h++)if(a.p.colModel[h].hidden!==true){g=h;break}f.nv=g-e}c.dragStart(e,d,pa(e));return false}}).click(function(c){if(a.p.disableClick)return a.p.disableClick=false;var d="th>div.ui-jqgrid-sortable",e,f;a.p.viewsortcols[2]||
(d="th>div>span>span.ui-grid-ico-sort");c=b(c.target).closest(d);if(c.length==1){d=ma(this);if(!a.p.viewsortcols[2]){e=true;f=c.attr("sort")}la(b("div",this)[0].id,d,e,f);return false}});if(a.p.sortable&&b.fn.sortable)try{b(a).jqGrid("sortableColumns",j)}catch(ta){}a.p.footerrow&&(S+="</tr></tbody></table>");$+="</tr>";this.appendChild(document.createElement("tbody"));b(this).addClass("ui-jqgrid-btable").append($);var $=null,j=b("<table class='ui-jqgrid-htable' style='width:"+a.p.tblwidth+"px' role='grid' aria-labelledby='gbox_"+
this.id+"' cellspacing='0' cellpadding='0' border='0'></table>").append(z),D=a.p.caption&&!0===a.p.hiddengrid?!0:!1;d=b("<div class='ui-jqgrid-hbox"+("rtl"==g?"-rtl":"")+"'></div>");z=null;c.hDiv=document.createElement("div");b(c.hDiv).css({width:c.width+"px"}).addClass("ui-state-default ui-jqgrid-hdiv").append(d);b(d).append(j);j=null;D&&b(c.hDiv).hide();a.p.pager&&("string"===typeof a.p.pager?"#"!=a.p.pager.substr(0,1)&&(a.p.pager="#"+a.p.pager):a.p.pager="#"+b(a.p.pager).attr("id"),b(a.p.pager).css({width:c.width+
"px"}).addClass("ui-state-default ui-jqgrid-pager ui-corner-bottom").appendTo(l),D&&b(a.p.pager).hide(),ka(a.p.pager,""));!1===a.p.cellEdit&&!0===a.p.hoverrows&&b(a).bind("mouseover",function(a){p=b(a.target).closest("tr.jqgrow");b(p).attr("class")!=="ui-subgrid"&&b(p).addClass("ui-state-hover")}).bind("mouseout",function(a){p=b(a.target).closest("tr.jqgrow");b(p).removeClass("ui-state-hover")});var r,J,ha;b(a).before(c.hDiv).click(function(c){A=c.target;p=b(A,a.rows).closest("tr.jqgrow");if(b(p).length===
0||p[0].className.indexOf("ui-state-disabled")>-1||(b(A,a).closest("table.ui-jqgrid-btable").attr("id")||"").replace("_frozen","")!==a.id)return this;var d=b(A).hasClass("cbox"),e=b(a).triggerHandler("jqGridBeforeSelectRow",[p[0].id,c]);(e=e===false||e==="stop"?false:true)&&b.isFunction(a.p.beforeSelectRow)&&(e=a.p.beforeSelectRow.call(a,p[0].id,c));if(!(A.tagName=="A"||(A.tagName=="INPUT"||A.tagName=="TEXTAREA"||A.tagName=="OPTION"||A.tagName=="SELECT")&&!d)&&e===true){r=p[0].id;J=b.jgrid.getCellIndex(A);
ha=b(A).closest("td,th").html();b(a).triggerHandler("jqGridCellSelect",[r,J,ha,c]);b.isFunction(a.p.onCellSelect)&&a.p.onCellSelect.call(a,r,J,ha,c);if(a.p.cellEdit===true)if(a.p.multiselect&&d)b(a).jqGrid("setSelection",r,true,c);else{r=p[0].rowIndex;try{b(a).jqGrid("editCell",r,J,true)}catch(f){}}else if(a.p.multikey)if(c[a.p.multikey])b(a).jqGrid("setSelection",r,true,c);else{if(a.p.multiselect&&d){d=b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+r).is(":checked");b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+r)[a.p.useProp?
"prop":"attr"]("checked",d)}}else{if(a.p.multiselect&&a.p.multiboxonly&&!d){var g=a.p.frozenColumns?a.p.id+"_frozen":"";b(a.p.selarrrow).each(function(c,d){var e=a.rows.namedItem(d);b(e).removeClass("ui-state-highlight");b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+b.jgrid.jqID(d))[a.p.useProp?"prop":"attr"]("checked",false);if(g){b("#"+b.jgrid.jqID(d),"#"+b.jgrid.jqID(g)).removeClass("ui-state-highlight");b("#jqg_"+b.jgrid.jqID(a.p.id)+"_"+b.jgrid.jqID(d),"#"+b.jgrid.jqID(g))[a.p.useProp?"prop":"attr"]("checked",
false)}});a.p.selarrrow=[]}b(a).jqGrid("setSelection",r,true,c)}}}).bind("reloadGrid",function(c,d){if(a.p.treeGrid===true)a.p.datatype=a.p.treedatatype;d&&d.current&&a.grid.selectionPreserver(a);if(a.p.datatype=="local"){b(a).jqGrid("resetSelection");a.p.data.length&&M()}else if(!a.p.treeGrid){a.p.selrow=null;if(a.p.multiselect){a.p.selarrrow=[];ca(false)}a.p.savedRow=[]}a.p.scroll&&W.call(a,true,false);if(d&&d.page){var e=d.page;if(e>a.p.lastpage)e=a.p.lastpage;e<1&&(e=1);a.p.page=e;a.grid.bDiv.scrollTop=
a.grid.prevRowHeight?(e-1)*a.grid.prevRowHeight*a.p.rowNum:0}if(a.grid.prevRowHeight&&a.p.scroll){delete a.p.lastpage;a.grid.populateVisible()}else a.grid.populate();a.p._inlinenav===true&&b(a).jqGrid("showAddEditButtons");return false}).dblclick(function(c){A=c.target;p=b(A,a.rows).closest("tr.jqgrow");if(b(p).length!==0){r=p[0].rowIndex;J=b.jgrid.getCellIndex(A);b(a).triggerHandler("jqGridDblClickRow",[b(p).attr("id"),r,J,c]);b.isFunction(this.p.ondblClickRow)&&a.p.ondblClickRow.call(a,b(p).attr("id"),
r,J,c)}}).bind("contextmenu",function(c){A=c.target;p=b(A,a.rows).closest("tr.jqgrow");if(b(p).length!==0){a.p.multiselect||b(a).jqGrid("setSelection",p[0].id,true,c);r=p[0].rowIndex;J=b.jgrid.getCellIndex(A);b(a).triggerHandler("jqGridRightClickRow",[b(p).attr("id"),r,J,c]);b.isFunction(this.p.onRightClickRow)&&a.p.onRightClickRow.call(a,b(p).attr("id"),r,J,c)}});c.bDiv=document.createElement("div");k&&"auto"===(""+a.p.height).toLowerCase()&&(a.p.height="100%");b(c.bDiv).append(b('<div style="position:relative;'+
(k&&8>b.jgrid.msiever()?"height:0.01%;":"")+'"></div>').append("<div></div>").append(this)).addClass("ui-jqgrid-bdiv").css({height:a.p.height+(isNaN(a.p.height)?"":"px"),width:c.width+"px"}).scroll(c.scrollGrid);b("table:first",c.bDiv).css({width:a.p.tblwidth+"px"});b.support.tbody||2==b("tbody",this).length&&b("tbody:gt(0)",this).remove();a.p.multikey&&(b.jgrid.msie?b(c.bDiv).bind("selectstart",function(){return false}):b(c.bDiv).bind("mousedown",function(){return false}));D&&b(c.bDiv).hide();c.cDiv=
document.createElement("div");var ia=!0===a.p.hidegrid?b("<a role='link' href='javascript:void(0)'/>").addClass("ui-jqgrid-titlebar-close HeaderButton").hover(function(){ia.addClass("ui-state-hover")},function(){ia.removeClass("ui-state-hover")}).append("<span class='ui-icon ui-icon-circle-triangle-n'></span>").css("rtl"==g?"left":"right","0px"):"";b(c.cDiv).append(ia).append("<span class='ui-jqgrid-title"+("rtl"==g?"-rtl":"")+"'>"+a.p.caption+"</span>").addClass("ui-jqgrid-titlebar ui-widget-header ui-corner-top ui-helper-clearfix");
b(c.cDiv).insertBefore(c.hDiv);a.p.toolbar[0]&&(c.uDiv=document.createElement("div"),"top"==a.p.toolbar[1]?b(c.uDiv).insertBefore(c.hDiv):"bottom"==a.p.toolbar[1]&&b(c.uDiv).insertAfter(c.hDiv),"both"==a.p.toolbar[1]?(c.ubDiv=document.createElement("div"),b(c.uDiv).addClass("ui-userdata ui-state-default").attr("id","t_"+this.id).insertBefore(c.hDiv),b(c.ubDiv).addClass("ui-userdata ui-state-default").attr("id","tb_"+this.id).insertAfter(c.hDiv),D&&b(c.ubDiv).hide()):b(c.uDiv).width(c.width).addClass("ui-userdata ui-state-default").attr("id",
"t_"+this.id),D&&b(c.uDiv).hide());a.p.toppager&&(a.p.toppager=b.jgrid.jqID(a.p.id)+"_toppager",c.topDiv=b("<div id='"+a.p.toppager+"'></div>")[0],a.p.toppager="#"+a.p.toppager,b(c.topDiv).addClass("ui-state-default ui-jqgrid-toppager").width(c.width).insertBefore(c.hDiv),ka(a.p.toppager,"_t"));a.p.footerrow&&(c.sDiv=b("<div class='ui-jqgrid-sdiv'></div>")[0],d=b("<div class='ui-jqgrid-hbox"+("rtl"==g?"-rtl":"")+"'></div>"),b(c.sDiv).append(d).width(c.width).insertAfter(c.hDiv),b(d).append(S),c.footers=
b(".ui-jqgrid-ftable",c.sDiv)[0].rows[0].cells,a.p.rownumbers&&(c.footers[0].className="ui-state-default jqgrid-rownum"),D&&b(c.sDiv).hide());d=null;if(a.p.caption){var qa=a.p.datatype;!0===a.p.hidegrid&&(b(".ui-jqgrid-titlebar-close",c.cDiv).click(function(d){var e=b.isFunction(a.p.onHeaderClick),f=".ui-jqgrid-bdiv, .ui-jqgrid-hdiv, .ui-jqgrid-pager, .ui-jqgrid-sdiv",g,h=this;if(a.p.toolbar[0]===true){a.p.toolbar[1]=="both"&&(f=f+(", #"+b(c.ubDiv).attr("id")));f=f+(", #"+b(c.uDiv).attr("id"))}g=
b(f,"#gview_"+b.jgrid.jqID(a.p.id)).length;a.p.gridstate=="visible"?b(f,"#gbox_"+b.jgrid.jqID(a.p.id)).slideUp("fast",function(){g--;if(g===0){b("span",h).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s");a.p.gridstate="hidden";b("#gbox_"+b.jgrid.jqID(a.p.id)).hasClass("ui-resizable")&&b(".ui-resizable-handle","#gbox_"+b.jgrid.jqID(a.p.id)).hide();b(a).triggerHandler("jqGridHeaderClick",[a.p.gridstate,d]);e&&(D||a.p.onHeaderClick.call(a,a.p.gridstate,d))}}):a.p.gridstate==
"hidden"&&b(f,"#gbox_"+b.jgrid.jqID(a.p.id)).slideDown("fast",function(){g--;if(g===0){b("span",h).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n");if(D){a.p.datatype=qa;I();D=false}a.p.gridstate="visible";b("#gbox_"+b.jgrid.jqID(a.p.id)).hasClass("ui-resizable")&&b(".ui-resizable-handle","#gbox_"+b.jgrid.jqID(a.p.id)).show();b(a).triggerHandler("jqGridHeaderClick",[a.p.gridstate,d]);e&&(D||a.p.onHeaderClick.call(a,a.p.gridstate,d))}});return false}),D&&(a.p.datatype=
"local",b(".ui-jqgrid-titlebar-close",c.cDiv).trigger("click")))}else b(c.cDiv).hide();b(c.hDiv).after(c.bDiv).mousemove(function(a){if(c.resizing){c.dragMove(a);return false}});b(".ui-jqgrid-labels",c.hDiv).bind("selectstart",function(){return false});b(document).mouseup(function(){if(c.resizing){c.dragEnd();return false}return true});a.formatCol=s;a.sortData=la;a.updatepager=function(c,d){var e,f,g,h,i,j,k,l="",m=a.p.pager?"_"+b.jgrid.jqID(a.p.pager.substr(1)):"",o=a.p.toppager?"_"+a.p.toppager.substr(1):
"";g=parseInt(a.p.page,10)-1;g<0&&(g=0);g=g*parseInt(a.p.rowNum,10);i=g+a.p.reccount;if(a.p.scroll){e=b("tbody:first > tr:gt(0)",a.grid.bDiv);g=i-e.length;a.p.reccount=e.length;if(f=e.outerHeight()||a.grid.prevRowHeight){e=g*f;f=parseInt(a.p.records,10)*f;b(">div:first",a.grid.bDiv).css({height:f}).children("div:first").css({height:e,display:e?"":"none"})}a.grid.bDiv.scrollLeft=a.grid.hDiv.scrollLeft}l=a.p.pager||"";if(l=l+(a.p.toppager?l?","+a.p.toppager:a.p.toppager:"")){k=b.jgrid.formatter.integer||
{};e=n(a.p.page);f=n(a.p.lastpage);b(".selbox",l)[this.p.useProp?"prop":"attr"]("disabled",false);if(a.p.pginput===true){b(".ui-pg-input",l).val(a.p.page);h=a.p.toppager?"#sp_1"+m+",#sp_1"+o:"#sp_1"+m;b(h).html(b.fmatter?b.fmatter.util.NumberFormat(a.p.lastpage,k):a.p.lastpage)}if(a.p.viewrecords)if(a.p.reccount===0)b(".ui-paging-info",l).html(a.p.emptyrecords);else{h=g+1;j=a.p.records;if(b.fmatter){h=b.fmatter.util.NumberFormat(h,k);i=b.fmatter.util.NumberFormat(i,k);j=b.fmatter.util.NumberFormat(j,
k)}b(".ui-paging-info",l).html(b.jgrid.format(a.p.recordtext,h,i,j))}if(a.p.pgbuttons===true){e<=0&&(e=f=0);if(e==1||e===0){b("#first"+m+", #prev"+m).addClass("ui-state-disabled").removeClass("ui-state-hover");a.p.toppager&&b("#first_t"+o+", #prev_t"+o).addClass("ui-state-disabled").removeClass("ui-state-hover")}else{b("#first"+m+", #prev"+m).removeClass("ui-state-disabled");a.p.toppager&&b("#first_t"+o+", #prev_t"+o).removeClass("ui-state-disabled")}if(e==f||e===0){b("#next"+m+", #last"+m).addClass("ui-state-disabled").removeClass("ui-state-hover");
a.p.toppager&&b("#next_t"+o+", #last_t"+o).addClass("ui-state-disabled").removeClass("ui-state-hover")}else{b("#next"+m+", #last"+m).removeClass("ui-state-disabled");a.p.toppager&&b("#next_t"+o+", #last_t"+o).removeClass("ui-state-disabled")}}}c===true&&a.p.rownumbers===true&&b("td.jqgrid-rownum",a.rows).each(function(a){b(this).html(g+1+a)});d&&a.p.jqgdnd&&b(a).jqGrid("gridDnD","updateDnD");b(a).triggerHandler("jqGridGridComplete");b.isFunction(a.p.gridComplete)&&a.p.gridComplete.call(a);b(a).triggerHandler("jqGridAfterGridComplete")};
a.refreshIndex=M;a.setHeadCheckBox=ca;a.constructTr=X;a.formatter=function(a,b,c,d,e){return v(a,b,c,d,e)};b.extend(c,{populate:I,emptyRows:W});this.grid=c;a.addXmlData=function(b){H(b,a.grid.bDiv)};a.addJSONData=function(b){V(b,a.grid.bDiv)};this.grid.cols=this.rows[0].cells;b(a).triggerHandler("jqGridInitGrid");b.isFunction(a.p.onInitGrid)&&a.p.onInitGrid.call(a);I();a.p.hiddengrid=!1}}}})};b.jgrid.extend({getGridParam:function(b){var d=this[0];return!d||!d.grid?void 0:!b?d.p:void 0!==d.p[b]?d.p[b]:
null},setGridParam:function(f){return this.each(function(){this.grid&&"object"===typeof f&&b.extend(!0,this.p,f)})},getDataIDs:function(){var f=[],d=0,c,e=0;this.each(function(){if((c=this.rows.length)&&0<c)for(;d<c;)b(this.rows[d]).hasClass("jqgrow")&&(f[e]=this.rows[d].id,e++),d++});return f},setSelection:function(f,d,c){return this.each(function(){var e,a,i,h,g,j;if(void 0!==f&&(d=!1===d?!1:!0,(a=this.rows.namedItem(""+f))&&a.className&&!(-1<a.className.indexOf("ui-state-disabled"))))(!0===this.p.scrollrows&&
(i=this.rows.namedItem(f).rowIndex,0<=i&&(e=b(this.grid.bDiv)[0].clientHeight,h=b(this.grid.bDiv)[0].scrollTop,g=b(this.rows[i]).position().top,i=this.rows[i].clientHeight,g+i>=e+h?b(this.grid.bDiv)[0].scrollTop=g-(e+h)+i+h:g<e+h&&g<h&&(b(this.grid.bDiv)[0].scrollTop=g))),!0===this.p.frozenColumns&&(j=this.p.id+"_frozen"),this.p.multiselect)?(this.setHeadCheckBox(!1),this.p.selrow=a.id,h=b.inArray(this.p.selrow,this.p.selarrrow),-1===h?("ui-subgrid"!==a.className&&b(a).addClass("ui-state-highlight").attr("aria-selected",
"true"),e=!0,this.p.selarrrow.push(this.p.selrow)):("ui-subgrid"!==a.className&&b(a).removeClass("ui-state-highlight").attr("aria-selected","false"),e=!1,this.p.selarrrow.splice(h,1),g=this.p.selarrrow[0],this.p.selrow=void 0===g?null:g),b("#jqg_"+b.jgrid.jqID(this.p.id)+"_"+b.jgrid.jqID(a.id))[this.p.useProp?"prop":"attr"]("checked",e),j&&(-1===h?b("#"+b.jgrid.jqID(f),"#"+b.jgrid.jqID(j)).addClass("ui-state-highlight"):b("#"+b.jgrid.jqID(f),"#"+b.jgrid.jqID(j)).removeClass("ui-state-highlight"),
b("#jqg_"+b.jgrid.jqID(this.p.id)+"_"+b.jgrid.jqID(f),"#"+b.jgrid.jqID(j))[this.p.useProp?"prop":"attr"]("checked",e)),b(this).triggerHandler("jqGridSelectRow",[a.id,e,c]),this.p.onSelectRow&&d&&this.p.onSelectRow.call(this,a.id,e,c)):"ui-subgrid"!==a.className&&(this.p.selrow!=a.id?(b(this.rows.namedItem(this.p.selrow)).removeClass("ui-state-highlight").attr({"aria-selected":"false",tabindex:"-1"}),b(a).addClass("ui-state-highlight").attr({"aria-selected":"true",tabindex:"0"}),j&&(b("#"+b.jgrid.jqID(this.p.selrow),
"#"+b.jgrid.jqID(j)).removeClass("ui-state-highlight"),b("#"+b.jgrid.jqID(f),"#"+b.jgrid.jqID(j)).addClass("ui-state-highlight")),e=!0):e=!1,this.p.selrow=a.id,b(this).triggerHandler("jqGridSelectRow",[a.id,e,c]),this.p.onSelectRow&&d&&this.p.onSelectRow.call(this,a.id,e,c))})},resetSelection:function(f){return this.each(function(){var d=this,c,e,a;!0===d.p.frozenColumns&&(a=d.p.id+"_frozen");if(void 0!==f){e=f===d.p.selrow?d.p.selrow:f;b("#"+b.jgrid.jqID(d.p.id)+" tbody:first tr#"+b.jgrid.jqID(e)).removeClass("ui-state-highlight").attr("aria-selected",
"false");a&&b("#"+b.jgrid.jqID(e),"#"+b.jgrid.jqID(a)).removeClass("ui-state-highlight");if(d.p.multiselect){b("#jqg_"+b.jgrid.jqID(d.p.id)+"_"+b.jgrid.jqID(e),"#"+b.jgrid.jqID(d.p.id))[d.p.useProp?"prop":"attr"]("checked",!1);if(a)b("#jqg_"+b.jgrid.jqID(d.p.id)+"_"+b.jgrid.jqID(e),"#"+b.jgrid.jqID(a))[d.p.useProp?"prop":"attr"]("checked",!1);d.setHeadCheckBox(!1)}e=null}else d.p.multiselect?(b(d.p.selarrrow).each(function(e,f){c=d.rows.namedItem(f);b(c).removeClass("ui-state-highlight").attr("aria-selected",
"false");b("#jqg_"+b.jgrid.jqID(d.p.id)+"_"+b.jgrid.jqID(f))[d.p.useProp?"prop":"attr"]("checked",!1);a&&(b("#"+b.jgrid.jqID(f),"#"+b.jgrid.jqID(a)).removeClass("ui-state-highlight"),b("#jqg_"+b.jgrid.jqID(d.p.id)+"_"+b.jgrid.jqID(f),"#"+b.jgrid.jqID(a))[d.p.useProp?"prop":"attr"]("checked",!1))}),d.setHeadCheckBox(!1),d.p.selarrrow=[]):d.p.selrow&&(b("#"+b.jgrid.jqID(d.p.id)+" tbody:first tr#"+b.jgrid.jqID(d.p.selrow)).removeClass("ui-state-highlight").attr("aria-selected","false"),a&&b("#"+b.jgrid.jqID(d.p.selrow),
"#"+b.jgrid.jqID(a)).removeClass("ui-state-highlight"),d.p.selrow=null);!0===d.p.cellEdit&&0<=parseInt(d.p.iCol,10)&&0<=parseInt(d.p.iRow,10)&&(b("td:eq("+d.p.iCol+")",d.rows[d.p.iRow]).removeClass("edit-cell ui-state-highlight"),b(d.rows[d.p.iRow]).removeClass("selected-row ui-state-hover"));d.p.savedRow=[]})},getRowData:function(f){var d={},c,e=!1,a,i=0;this.each(function(){var h=this,g,j;if(void 0===f)e=!0,c=[],a=h.rows.length;else{j=h.rows.namedItem(f);if(!j)return d;a=2}for(;i<a;)e&&(j=h.rows[i]),
b(j).hasClass("jqgrow")&&(b('td[role="gridcell"]',j).each(function(a){g=h.p.colModel[a].name;if("cb"!==g&&"subgrid"!==g&&"rn"!==g)if(!0===h.p.treeGrid&&g==h.p.ExpandColumn)d[g]=b.jgrid.htmlDecode(b("span:first",this).html());else try{d[g]=b.unformat.call(h,this,{rowId:j.id,colModel:h.p.colModel[a]},a)}catch(c){d[g]=b.jgrid.htmlDecode(b(this).html())}}),e&&(c.push(d),d={})),i++});return c||d},delRowData:function(f){var d=!1,c,e;this.each(function(){c=this.rows.namedItem(f);if(!c)return!1;b(c).remove();
this.p.records--;this.p.reccount--;this.updatepager(!0,!1);d=!0;this.p.multiselect&&(e=b.inArray(f,this.p.selarrrow),-1!=e&&this.p.selarrrow.splice(e,1));this.p.selrow=this.p.multiselect&&0<this.p.selarrrow.length?this.p.selarrrow[this.p.selarrrow.length-1]:null;if("local"==this.p.datatype){var a=this.p._index[b.jgrid.stripPref(this.p.idPrefix,f)];void 0!==a&&(this.p.data.splice(a,1),this.refreshIndex())}if(!0===this.p.altRows&&d){var i=this.p.altclass;b(this.rows).each(function(a){a%2==1?b(this).addClass(i):
b(this).removeClass(i)})}});return d},setRowData:function(f,d,c){var e,a=!0,i;this.each(function(){if(!this.grid)return!1;var h=this,g,j,k=typeof c,l={};j=h.rows.namedItem(f);if(!j)return!1;if(d)try{if(b(this.p.colModel).each(function(a){e=this.name;void 0!==d[e]&&(l[e]=this.formatter&&"string"===typeof this.formatter&&"date"==this.formatter?b.unformat.date.call(h,d[e],this):d[e],g=h.formatter(f,d[e],a,d,"edit"),i=this.title?{title:b.jgrid.stripHtml(g)}:{},!0===h.p.treeGrid&&e==h.p.ExpandColumn?b("td[role='gridcell']:eq("+
a+") > span:first",j).html(g).attr(i):b("td[role='gridcell']:eq("+a+")",j).html(g).attr(i))}),"local"==h.p.datatype){var n=b.jgrid.stripPref(h.p.idPrefix,f),s=h.p._index[n],m;if(h.p.treeGrid)for(m in h.p.treeReader)h.p.treeReader.hasOwnProperty(m)&&delete l[h.p.treeReader[m]];void 0!==s&&(h.p.data[s]=b.extend(!0,h.p.data[s],l));l=null}}catch(v){a=!1}a&&("string"===k?b(j).addClass(c):"object"===k&&b(j).css(c),b(h).triggerHandler("jqGridAfterGridComplete"))});return a},addRowData:function(f,d,c,e){c||
(c="last");var a=!1,i,h,g,j,k,l,n,s,m="",v,E,T,K,aa,U;d&&(b.isArray(d)?(v=!0,c="last",E=f):(d=[d],v=!1),this.each(function(){var W=d.length;k=this.p.rownumbers===true?1:0;g=this.p.multiselect===true?1:0;j=this.p.subGrid===true?1:0;if(!v)if(f!==void 0)f=""+f;else{f=b.jgrid.randId();if(this.p.keyIndex!==false){E=this.p.colModel[this.p.keyIndex+g+j+k].name;d[0][E]!==void 0&&(f=d[0][E])}}T=this.p.altclass;for(var M=0,X="",H={},V=b.isFunction(this.p.afterInsertRow)?true:false;M<W;){K=d[M];h=[];if(v){try{f=
K[E];f===void 0&&(f=b.jgrid.randId())}catch(ja){f=b.jgrid.randId()}X=this.p.altRows===true?(this.rows.length-1)%2===0?T:"":""}U=f;f=this.p.idPrefix+f;if(k){m=this.formatCol(0,1,"",null,f,true);h[h.length]='<td role="gridcell" class="ui-state-default jqgrid-rownum" '+m+">0</td>"}if(g){s='<input role="checkbox" type="checkbox" id="jqg_'+this.p.id+"_"+f+'" class="cbox"/>';m=this.formatCol(k,1,"",null,f,true);h[h.length]='<td role="gridcell" '+m+">"+s+"</td>"}j&&(h[h.length]=b(this).jqGrid("addSubGridCell",
g+k,1));for(n=g+j+k;n<this.p.colModel.length;n++){aa=this.p.colModel[n];i=aa.name;H[i]=K[i];s=this.formatter(f,b.jgrid.getAccessor(K,i),n,K);m=this.formatCol(n,1,s,K,f,H);h[h.length]='<td role="gridcell" '+m+">"+s+"</td>"}h.unshift(this.constructTr(f,false,X,H,K,false));h[h.length]="</tr>";if(this.rows.length===0)b("table:first",this.grid.bDiv).append(h.join(""));else switch(c){case "last":b(this.rows[this.rows.length-1]).after(h.join(""));l=this.rows.length-1;break;case "first":b(this.rows[0]).after(h.join(""));
l=1;break;case "after":(l=this.rows.namedItem(e))&&(b(this.rows[l.rowIndex+1]).hasClass("ui-subgrid")?b(this.rows[l.rowIndex+1]).after(h):b(l).after(h.join("")));l++;break;case "before":if(l=this.rows.namedItem(e)){b(l).before(h.join(""));l=l.rowIndex}l--}this.p.subGrid===true&&b(this).jqGrid("addSubGrid",g+k,l);this.p.records++;this.p.reccount++;b(this).triggerHandler("jqGridAfterInsertRow",[f,K,K]);V&&this.p.afterInsertRow.call(this,f,K,K);M++;if(this.p.datatype=="local"){H[this.p.localReader.id]=
U;this.p._index[U]=this.p.data.length;this.p.data.push(H);H={}}}this.p.altRows===true&&!v&&(c=="last"?(this.rows.length-1)%2==1&&b(this.rows[this.rows.length-1]).addClass(T):b(this.rows).each(function(a){a%2==1?b(this).addClass(T):b(this).removeClass(T)}));this.updatepager(true,true);a=true}));return a},footerData:function(f,d,c){function e(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var a,i=!1,h={},g;void 0===f&&(f="get");"boolean"!==typeof c&&(c=!0);f=f.toLowerCase();this.each(function(){var j=
this,k;if(!j.grid||!j.p.footerrow||"set"==f&&e(d))return!1;i=!0;b(this.p.colModel).each(function(e){a=this.name;"set"==f?void 0!==d[a]&&(k=c?j.formatter("",d[a],e,d,"edit"):d[a],g=this.title?{title:b.jgrid.stripHtml(k)}:{},b("tr.footrow td:eq("+e+")",j.grid.sDiv).html(k).attr(g),i=!0):"get"==f&&(h[a]=b("tr.footrow td:eq("+e+")",j.grid.sDiv).html())})});return"get"==f?h:i},showHideCol:function(f,d){return this.each(function(){var c=this,e=!1,a=b.jgrid.cell_width?0:c.p.cellLayout,i;if(c.grid){"string"===
typeof f&&(f=[f]);d="none"!=d?"":"none";var h=""===d?!0:!1,g=c.p.groupHeader&&("object"===typeof c.p.groupHeader||b.isFunction(c.p.groupHeader));g&&b(c).jqGrid("destroyGroupHeader",!1);b(this.p.colModel).each(function(g){if(-1!==b.inArray(this.name,f)&&this.hidden===h){if(!0===c.p.frozenColumns&&!0===this.frozen)return!0;b("tr",c.grid.hDiv).each(function(){b(this.cells[g]).css("display",d)});b(c.rows).each(function(){b(this).hasClass("jqgroup")||b(this.cells[g]).css("display",d)});c.p.footerrow&&
b("tr.footrow td:eq("+g+")",c.grid.sDiv).css("display",d);i=parseInt(this.width,10);c.p.tblwidth="none"===d?c.p.tblwidth-(i+a):c.p.tblwidth+(i+a);this.hidden=!h;e=!0;b(c).triggerHandler("jqGridShowHideCol",[h,this.name,g])}});!0===e&&(!0===c.p.shrinkToFit&&!isNaN(c.p.height)&&(c.p.tblwidth+=parseInt(c.p.scrollOffset,10)),b(c).jqGrid("setGridWidth",!0===c.p.shrinkToFit?c.p.tblwidth:c.p.width));g&&b(c).jqGrid("setGroupHeaders",c.p.groupHeader)}})},hideCol:function(f){return this.each(function(){b(this).jqGrid("showHideCol",
f,"none")})},showCol:function(f){return this.each(function(){b(this).jqGrid("showHideCol",f,"")})},remapColumns:function(f,d,c){function e(a){var c;c=a.length?b.makeArray(a):b.extend({},a);b.each(f,function(b){a[b]=c[this]})}function a(a,c){b(">tr"+(c||""),a).each(function(){var a=this,c=b.makeArray(a.cells);b.each(f,function(){var b=c[this];b&&a.appendChild(b)})})}var i=this.get(0);e(i.p.colModel);e(i.p.colNames);e(i.grid.headers);a(b("thead:first",i.grid.hDiv),c&&":not(.ui-jqgrid-labels)");d&&a(b("#"+
b.jgrid.jqID(i.p.id)+" tbody:first"),".jqgfirstrow, tr.jqgrow, tr.jqfoot");i.p.footerrow&&a(b("tbody:first",i.grid.sDiv));i.p.remapColumns&&(i.p.remapColumns.length?e(i.p.remapColumns):i.p.remapColumns=b.makeArray(f));i.p.lastsort=b.inArray(i.p.lastsort,f);i.p.treeGrid&&(i.p.expColInd=b.inArray(i.p.expColInd,f));b(i).triggerHandler("jqGridRemapColumns",[f,d,c])},setGridWidth:function(f,d){return this.each(function(){if(this.grid){var c=this,e,a=0,i=b.jgrid.cell_width?0:c.p.cellLayout,h,g=0,j=!1,k=
c.p.scrollOffset,l,n=0,s=0,m;"boolean"!==typeof d&&(d=c.p.shrinkToFit);if(!isNaN(f)){f=parseInt(f,10);c.grid.width=c.p.width=f;b("#gbox_"+b.jgrid.jqID(c.p.id)).css("width",f+"px");b("#gview_"+b.jgrid.jqID(c.p.id)).css("width",f+"px");b(c.grid.bDiv).css("width",f+"px");b(c.grid.hDiv).css("width",f+"px");c.p.pager&&b(c.p.pager).css("width",f+"px");c.p.toppager&&b(c.p.toppager).css("width",f+"px");!0===c.p.toolbar[0]&&(b(c.grid.uDiv).css("width",f+"px"),"both"==c.p.toolbar[1]&&b(c.grid.ubDiv).css("width",
f+"px"));c.p.footerrow&&b(c.grid.sDiv).css("width",f+"px");!1===d&&!0===c.p.forceFit&&(c.p.forceFit=!1);if(!0===d){b.each(c.p.colModel,function(){if(this.hidden===false){e=this.widthOrg;a=a+(e+i);this.fixed?n=n+(e+i):g++;s++}});if(0===g)return;c.p.tblwidth=a;l=f-i*g-n;if(!isNaN(c.p.height)&&(b(c.grid.bDiv)[0].clientHeight<b(c.grid.bDiv)[0].scrollHeight||1===c.rows.length))j=!0,l-=k;var a=0,v=0<c.grid.cols.length;b.each(c.p.colModel,function(b){if(this.hidden===false&&!this.fixed){e=this.widthOrg;
e=Math.round(l*e/(c.p.tblwidth-i*g-n));if(!(e<0)){this.width=e;a=a+e;c.grid.headers[b].width=e;c.grid.headers[b].el.style.width=e+"px";if(c.p.footerrow)c.grid.footers[b].style.width=e+"px";if(v)c.grid.cols[b].style.width=e+"px";h=b}}});if(!h)return;m=0;j?f-n-(a+i*g)!==k&&(m=f-n-(a+i*g)-k):1!==Math.abs(f-n-(a+i*g))&&(m=f-n-(a+i*g));c.p.colModel[h].width+=m;c.p.tblwidth=a+m+i*g+n;c.p.tblwidth>f?(j=c.p.tblwidth-parseInt(f,10),c.p.tblwidth=f,e=c.p.colModel[h].width-=j):e=c.p.colModel[h].width;c.grid.headers[h].width=
e;c.grid.headers[h].el.style.width=e+"px";v&&(c.grid.cols[h].style.width=e+"px");c.p.footerrow&&(c.grid.footers[h].style.width=e+"px")}c.p.tblwidth&&(b("table:first",c.grid.bDiv).css("width",c.p.tblwidth+"px"),b("table:first",c.grid.hDiv).css("width",c.p.tblwidth+"px"),c.grid.hDiv.scrollLeft=c.grid.bDiv.scrollLeft,c.p.footerrow&&b("table:first",c.grid.sDiv).css("width",c.p.tblwidth+"px"))}}})},setGridHeight:function(f){return this.each(function(){if(this.grid){var d=b(this.grid.bDiv);d.css({height:f+
(isNaN(f)?"":"px")});!0===this.p.frozenColumns&&b("#"+b.jgrid.jqID(this.p.id)+"_frozen").parent().height(d.height()-16);this.p.height=f;this.p.scroll&&this.grid.populateVisible()}})},setCaption:function(f){return this.each(function(){this.p.caption=f;b("span.ui-jqgrid-title, span.ui-jqgrid-title-rtl",this.grid.cDiv).html(f);b(this.grid.cDiv).show()})},setLabel:function(f,d,c,e){return this.each(function(){var a=-1;if(this.grid&&void 0!==f&&(b(this.p.colModel).each(function(b){if(this.name==f)return a=
b,!1}),0<=a)){var i=b("tr.ui-jqgrid-labels th:eq("+a+")",this.grid.hDiv);if(d){var h=b(".s-ico",i);b("[id^=jqgh_]",i).empty().html(d).append(h);this.p.colNames[a]=d}c&&("string"===typeof c?b(i).addClass(c):b(i).css(c));"object"===typeof e&&b(i).attr(e)}})},setCell:function(f,d,c,e,a,i){return this.each(function(){var h=-1,g,j;if(this.grid&&(isNaN(d)?b(this.p.colModel).each(function(a){if(this.name==d)return h=a,!1}):h=parseInt(d,10),0<=h&&(g=this.rows.namedItem(f)))){var k=b("td:eq("+h+")",g);if(""!==
c||!0===i)g=this.formatter(f,c,h,g,"edit"),j=this.p.colModel[h].title?{title:b.jgrid.stripHtml(g)}:{},this.p.treeGrid&&0<b(".tree-wrap",b(k)).length?b("span",b(k)).html(g).attr(j):b(k).html(g).attr(j),"local"==this.p.datatype&&(g=this.p.colModel[h],c=g.formatter&&"string"===typeof g.formatter&&"date"==g.formatter?b.unformat.date.call(this,c,g):c,j=this.p._index[f],void 0!==j&&(this.p.data[j][g.name]=c));"string"===typeof e?b(k).addClass(e):e&&b(k).css(e);"object"===typeof a&&b(k).attr(a)}})},getCell:function(f,
d){var c=!1;this.each(function(){var e=-1;if(this.grid&&(isNaN(d)?b(this.p.colModel).each(function(a){if(this.name===d)return e=a,!1}):e=parseInt(d,10),0<=e)){var a=this.rows.namedItem(f);if(a)try{c=b.unformat.call(this,b("td:eq("+e+")",a),{rowId:a.id,colModel:this.p.colModel[e]},e)}catch(i){c=b.jgrid.htmlDecode(b("td:eq("+e+")",a).html())}}});return c},getCol:function(f,d,c){var e=[],a,i=0,h,g,j,d="boolean"!==typeof d?!1:d;void 0===c&&(c=!1);this.each(function(){var k=-1;if(this.grid&&(isNaN(f)?
b(this.p.colModel).each(function(a){if(this.name===f)return k=a,!1}):k=parseInt(f,10),0<=k)){var l=this.rows.length,n=0;if(l&&0<l){for(;n<l;){if(b(this.rows[n]).hasClass("jqgrow")){try{a=b.unformat.call(this,b(this.rows[n].cells[k]),{rowId:this.rows[n].id,colModel:this.p.colModel[k]},k)}catch(s){a=b.jgrid.htmlDecode(this.rows[n].cells[k].innerHTML)}c?(j=parseFloat(a),i+=j,void 0===g&&(g=h=j),h=Math.min(h,j),g=Math.max(g,j)):d?e.push({id:this.rows[n].id,value:a}):e.push(a)}n++}if(c)switch(c.toLowerCase()){case "sum":e=
i;break;case "avg":e=i/l;break;case "count":e=l;break;case "min":e=h;break;case "max":e=g}}}});return e},clearGridData:function(f){return this.each(function(){if(this.grid){"boolean"!==typeof f&&(f=!1);if(this.p.deepempty)b("#"+b.jgrid.jqID(this.p.id)+" tbody:first tr:gt(0)").remove();else{var d=b("#"+b.jgrid.jqID(this.p.id)+" tbody:first tr:first")[0];b("#"+b.jgrid.jqID(this.p.id)+" tbody:first").empty().append(d)}this.p.footerrow&&f&&b(".ui-jqgrid-ftable td",this.grid.sDiv).html("&#160;");this.p.selrow=
null;this.p.selarrrow=[];this.p.savedRow=[];this.p.records=0;this.p.page=1;this.p.lastpage=0;this.p.reccount=0;this.p.data=[];this.p._index={};this.updatepager(!0,!1)}})},getInd:function(b,d){var c=!1,e;this.each(function(){(e=this.rows.namedItem(b))&&(c=!0===d?e:e.rowIndex)});return c},bindKeys:function(f){var d=b.extend({onEnter:null,onSpace:null,onLeftKey:null,onRightKey:null,scrollingRows:!0},f||{});return this.each(function(){var c=this;b("body").is("[role]")||b("body").attr("role","application");
c.p.scrollrows=d.scrollingRows;b(c).keydown(function(e){var a=b(c).find("tr[tabindex=0]")[0],f,h,g,j=c.p.treeReader.expanded_field;if(a)if(g=c.p._index[a.id],37===e.keyCode||38===e.keyCode||39===e.keyCode||40===e.keyCode){if(38===e.keyCode){h=a.previousSibling;f="";if(h)if(b(h).is(":hidden"))for(;h;){if(h=h.previousSibling,!b(h).is(":hidden")&&b(h).hasClass("jqgrow")){f=h.id;break}}else f=h.id;b(c).jqGrid("setSelection",f,!0,e);e.preventDefault()}if(40===e.keyCode){h=a.nextSibling;f="";if(h)if(b(h).is(":hidden"))for(;h;){if(h=
h.nextSibling,!b(h).is(":hidden")&&b(h).hasClass("jqgrow")){f=h.id;break}}else f=h.id;b(c).jqGrid("setSelection",f,!0,e);e.preventDefault()}37===e.keyCode&&(c.p.treeGrid&&c.p.data[g][j]&&b(a).find("div.treeclick").trigger("click"),b(c).triggerHandler("jqGridKeyLeft",[c.p.selrow]),b.isFunction(d.onLeftKey)&&d.onLeftKey.call(c,c.p.selrow));39===e.keyCode&&(c.p.treeGrid&&!c.p.data[g][j]&&b(a).find("div.treeclick").trigger("click"),b(c).triggerHandler("jqGridKeyRight",[c.p.selrow]),b.isFunction(d.onRightKey)&&
d.onRightKey.call(c,c.p.selrow))}else 13===e.keyCode?(b(c).triggerHandler("jqGridKeyEnter",[c.p.selrow]),b.isFunction(d.onEnter)&&d.onEnter.call(c,c.p.selrow)):32===e.keyCode&&(b(c).triggerHandler("jqGridKeySpace",[c.p.selrow]),b.isFunction(d.onSpace)&&d.onSpace.call(c,c.p.selrow))})})},unbindKeys:function(){return this.each(function(){b(this).unbind("keydown")})},getLocalRow:function(b){var d=!1,c;this.each(function(){void 0!==b&&(c=this.p._index[b],0<=c&&(d=this.p.data[c]))});return d}})})(jQuery);
(function(a){a.fmatter={};a.extend(a.fmatter,{isBoolean:function(a){return"boolean"===typeof a},isObject:function(c){return c&&("object"===typeof c||a.isFunction(c))||!1},isString:function(a){return"string"===typeof a},isNumber:function(a){return"number"===typeof a&&isFinite(a)},isNull:function(a){return null===a},isUndefined:function(a){return void 0===a},isValue:function(a){return this.isObject(a)||this.isString(a)||this.isNumber(a)||this.isBoolean(a)},isEmpty:function(c){if(!this.isString(c)&&
this.isValue(c))return!1;if(!this.isValue(c))return!0;c=a.trim(c).replace(/\&nbsp\;/ig,"").replace(/\&#160\;/ig,"");return""===c}});a.fn.fmatter=function(c,b,d,e,f){var h=b,d=a.extend({},a.jgrid.formatter,d);try{h=a.fn.fmatter[c].call(this,b,d,e,f)}catch(g){}return h};a.fmatter.util={NumberFormat:function(c,b){a.fmatter.isNumber(c)||(c*=1);if(a.fmatter.isNumber(c)){var d=0>c,e=""+c,f=b.decimalSeparator||".",h;if(a.fmatter.isNumber(b.decimalPlaces)){var g=b.decimalPlaces,e=Math.pow(10,g),e=""+Math.round(c*
e)/e;h=e.lastIndexOf(".");if(0<g){0>h?(e+=f,h=e.length-1):"."!==f&&(e=e.replace(".",f));for(;e.length-1-h<g;)e+="0"}}if(b.thousandsSeparator){g=b.thousandsSeparator;h=e.lastIndexOf(f);h=-1<h?h:e.length;var f=e.substring(h),i=-1,j;for(j=h;0<j;j--){i++;if(0===i%3&&j!==h&&(!d||1<j))f=g+f;f=e.charAt(j-1)+f}e=f}e=b.prefix?b.prefix+e:e;return e=b.suffix?e+b.suffix:e}return c},DateFormat:function(c,b,d,e){var f=/^\/Date\((([-+])?[0-9]+)(([-+])([0-9]{2})([0-9]{2}))?\)\/$/,h="string"===typeof b?b.match(f):
null,f=function(a,b){a=""+a;for(b=parseInt(b,10)||2;a.length<b;)a="0"+a;return a},g={m:1,d:1,y:1970,h:0,i:0,s:0,u:0},i=0,j,k=["i18n"];k.i18n={dayNames:e.dayNames,monthNames:e.monthNames};e.masks.hasOwnProperty(c)&&(c=e.masks[c]);if(!isNaN(b-0)&&"u"==(""+c).toLowerCase())i=new Date(1E3*parseFloat(b));else if(b.constructor===Date)i=b;else if(null!==h)i=new Date(parseInt(h[1],10)),h[3]&&(c=60*Number(h[5])+Number(h[6]),c*="-"==h[4]?1:-1,c-=i.getTimezoneOffset(),i.setTime(Number(Number(i)+6E4*c)));else{b=
(""+b).split(/[\\\/:_;.,\t\T\s-]/);c=c.split(/[\\\/:_;.,\t\T\s-]/);h=0;for(j=c.length;h<j;h++)"M"==c[h]&&(i=a.inArray(b[h],k.i18n.monthNames),-1!==i&&12>i&&(b[h]=i+1)),"F"==c[h]&&(i=a.inArray(b[h],k.i18n.monthNames),-1!==i&&11<i&&(b[h]=i+1-12)),b[h]&&(g[c[h].toLowerCase()]=parseInt(b[h],10));g.f&&(g.m=g.f);if(0===g.m&&0===g.y&&0===g.d)return"&#160;";g.m=parseInt(g.m,10)-1;i=g.y;70<=i&&99>=i?g.y=1900+g.y:0<=i&&69>=i&&(g.y=2E3+g.y);i=new Date(g.y,g.m,g.d,g.h,g.i,g.s,g.u)}e.masks.hasOwnProperty(d)?d=
e.masks[d]:d||(d="Y-m-d");c=i.getHours();b=i.getMinutes();g=i.getDate();h=i.getMonth()+1;j=i.getTimezoneOffset();var l=i.getSeconds(),r=i.getMilliseconds(),n=i.getDay(),m=i.getFullYear(),o=(n+6)%7+1,p=(new Date(m,h-1,g)-new Date(m,0,1))/864E5,q={d:f(g),D:k.i18n.dayNames[n],j:g,l:k.i18n.dayNames[n+7],N:o,S:e.S(g),w:n,z:p,W:5>o?Math.floor((p+o-1)/7)+1:Math.floor((p+o-1)/7)||(4>((new Date(m-1,0,1)).getDay()+6)%7?53:52),F:k.i18n.monthNames[h-1+12],m:f(h),M:k.i18n.monthNames[h-1],n:h,t:"?",L:"?",o:"?",
Y:m,y:(""+m).substring(2),a:12>c?e.AmPm[0]:e.AmPm[1],A:12>c?e.AmPm[2]:e.AmPm[3],B:"?",g:c%12||12,G:c,h:f(c%12||12),H:f(c),i:f(b),s:f(l),u:r,e:"?",I:"?",O:(0<j?"-":"+")+f(100*Math.floor(Math.abs(j)/60)+Math.abs(j)%60,4),P:"?",T:((""+i).match(/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g)||[""]).pop().replace(/[^-+\dA-Z]/g,""),Z:"?",c:"?",r:"?",U:Math.floor(i/1E3)};return d.replace(/\\.|[dDjlNSwzWFmMntLoYyaABgGhHisueIOPTZcrU]/g,
function(a){return q.hasOwnProperty(a)?q[a]:a.substring(1)})}};a.fn.fmatter.defaultFormat=function(c,b){return a.fmatter.isValue(c)&&""!==c?c:b.defaultValue||"&#160;"};a.fn.fmatter.email=function(c,b){return!a.fmatter.isEmpty(c)?'<a href="mailto:'+c+'">'+c+"</a>":a.fn.fmatter.defaultFormat(c,b)};a.fn.fmatter.checkbox=function(c,b){var d=a.extend({},b.checkbox),e;void 0!==b.colModel&&!a.fmatter.isUndefined(b.colModel.formatoptions)&&(d=a.extend({},d,b.colModel.formatoptions));e=!0===d.disabled?'disabled="disabled"':
"";if(a.fmatter.isEmpty(c)||a.fmatter.isUndefined(c))c=a.fn.fmatter.defaultFormat(c,d);c=(""+c).toLowerCase();return'<input type="checkbox" '+(0>c.search(/(false|0|no|n|off)/i)?" checked='checked' ":"")+' value="'+c+'" offval="no" '+e+"/>"};a.fn.fmatter.link=function(c,b){var d={target:b.target},e="";void 0!==b.colModel&&!a.fmatter.isUndefined(b.colModel.formatoptions)&&(d=a.extend({},d,b.colModel.formatoptions));d.target&&(e="target="+d.target);return!a.fmatter.isEmpty(c)?"<a "+e+' href="'+c+'">'+
c+"</a>":a.fn.fmatter.defaultFormat(c,b)};a.fn.fmatter.showlink=function(c,b){var d={baseLinkUrl:b.baseLinkUrl,showAction:b.showAction,addParam:b.addParam||"",target:b.target,idName:b.idName},e="";void 0!==b.colModel&&!a.fmatter.isUndefined(b.colModel.formatoptions)&&(d=a.extend({},d,b.colModel.formatoptions));d.target&&(e="target="+d.target);d=d.baseLinkUrl+d.showAction+"?"+d.idName+"="+b.rowId+d.addParam;return a.fmatter.isString(c)||a.fmatter.isNumber(c)?"<a "+e+' href="'+d+'">'+c+"</a>":a.fn.fmatter.defaultFormat(c,
b)};a.fn.fmatter.integer=function(c,b){var d=a.extend({},b.integer);void 0!==b.colModel&&!a.fmatter.isUndefined(b.colModel.formatoptions)&&(d=a.extend({},d,b.colModel.formatoptions));return a.fmatter.isEmpty(c)?d.defaultValue:a.fmatter.util.NumberFormat(c,d)};a.fn.fmatter.number=function(c,b){var d=a.extend({},b.number);void 0!==b.colModel&&!a.fmatter.isUndefined(b.colModel.formatoptions)&&(d=a.extend({},d,b.colModel.formatoptions));return a.fmatter.isEmpty(c)?d.defaultValue:a.fmatter.util.NumberFormat(c,
d)};a.fn.fmatter.currency=function(c,b){var d=a.extend({},b.currency);void 0!==b.colModel&&!a.fmatter.isUndefined(b.colModel.formatoptions)&&(d=a.extend({},d,b.colModel.formatoptions));return a.fmatter.isEmpty(c)?d.defaultValue:a.fmatter.util.NumberFormat(c,d)};a.fn.fmatter.date=function(c,b,d,e){d=a.extend({},b.date);void 0!==b.colModel&&!a.fmatter.isUndefined(b.colModel.formatoptions)&&(d=a.extend({},d,b.colModel.formatoptions));return!d.reformatAfterEdit&&"edit"==e?a.fn.fmatter.defaultFormat(c,
b):!a.fmatter.isEmpty(c)?a.fmatter.util.DateFormat(d.srcformat,c,d.newformat,d):a.fn.fmatter.defaultFormat(c,b)};a.fn.fmatter.select=function(c,b){var c=""+c,d=!1,e=[],f,h;a.fmatter.isUndefined(b.colModel.formatoptions)?a.fmatter.isUndefined(b.colModel.editoptions)||(d=b.colModel.editoptions.value,f=void 0===b.colModel.editoptions.separator?":":b.colModel.editoptions.separator,h=void 0===b.colModel.editoptions.delimiter?";":b.colModel.editoptions.delimiter):(d=b.colModel.formatoptions.value,f=void 0===
b.colModel.formatoptions.separator?":":b.colModel.formatoptions.separator,h=void 0===b.colModel.formatoptions.delimiter?";":b.colModel.formatoptions.delimiter);if(d){var g=!0===b.colModel.editoptions.multiple?!0:!1,i=[];g&&(i=c.split(","),i=a.map(i,function(b){return a.trim(b)}));if(a.fmatter.isString(d)){var j=d.split(h),k=0,l;for(l=0;l<j.length;l++)if(h=j[l].split(f),2<h.length&&(h[1]=a.map(h,function(a,b){if(b>0)return a}).join(f)),g)-1<a.inArray(h[0],i)&&(e[k]=h[1],k++);else if(a.trim(h[0])==
a.trim(c)){e[0]=h[1];break}}else a.fmatter.isObject(d)&&(g?e=a.map(i,function(a){return d[a]}):e[0]=d[c]||"")}c=e.join(", ");return""===c?a.fn.fmatter.defaultFormat(c,b):c};a.fn.fmatter.rowactions=function(c){var b=a(this).closest("tr.jqgrow"),d=a(this).parent(),e=b.attr("id"),f=a(this).closest("table.ui-jqgrid-btable"),h=f[0],g=h.p,i=g.colModel[a.jgrid.getCellIndex(this)],j={keys:!1,onEdit:null,onSuccess:null,afterSave:null,onError:null,afterRestore:null,extraparam:{},url:null,restoreAfterError:!0,
mtype:"POST",delOptions:{},editOptions:{}},k=function(b){a.isFunction(j.afterRestore)&&j.afterRestore.call(h,b);d.find("div.ui-inline-edit,div.ui-inline-del").show();d.find("div.ui-inline-save,div.ui-inline-cancel").hide()};a.fmatter.isUndefined(i.formatoptions)||(j=a.extend(j,i.formatoptions));a.fmatter.isUndefined(g.editOptions)||(j.editOptions=g.editOptions);a.fmatter.isUndefined(g.delOptions)||(j.delOptions=g.delOptions);b.hasClass("jqgrid-new-row")&&(j.extraparam[g.prmNames.oper]=g.prmNames.addoper);
b={keys:j.keys,oneditfunc:j.onEdit,successfunc:j.onSuccess,url:j.url,extraparam:j.extraparam,aftersavefunc:function(b,c){a.isFunction(j.afterSave)&&j.afterSave.call(h,b,c);d.find("div.ui-inline-edit,div.ui-inline-del").show();d.find("div.ui-inline-save,div.ui-inline-cancel").hide()},errorfunc:j.onError,afterrestorefunc:k,restoreAfterError:j.restoreAfterError,mtype:j.mtype};switch(c){case "edit":f.jqGrid("editRow",e,b);d.find("div.ui-inline-edit,div.ui-inline-del").hide();d.find("div.ui-inline-save,div.ui-inline-cancel").show();
f.triggerHandler("jqGridAfterGridComplete");break;case "save":f.jqGrid("saveRow",e,b)&&(d.find("div.ui-inline-edit,div.ui-inline-del").show(),d.find("div.ui-inline-save,div.ui-inline-cancel").hide(),f.triggerHandler("jqGridAfterGridComplete"));break;case "cancel":f.jqGrid("restoreRow",e,k);d.find("div.ui-inline-edit,div.ui-inline-del").show();d.find("div.ui-inline-save,div.ui-inline-cancel").hide();f.triggerHandler("jqGridAfterGridComplete");break;case "del":f.jqGrid("delGridRow",e,j.delOptions);
break;case "formedit":f.jqGrid("setSelection",e),f.jqGrid("editGridRow",e,j.editOptions)}};a.fn.fmatter.actions=function(c,b){var d={keys:!1,editbutton:!0,delbutton:!0,editformbutton:!1},e=b.rowId,f="";a.fmatter.isUndefined(b.colModel.formatoptions)||(d=a.extend(d,b.colModel.formatoptions));if(void 0===e||a.fmatter.isEmpty(e))return"";d.editformbutton?f+="<div title='"+a.jgrid.nav.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' onclick=jQuery.fn.fmatter.rowactions.call(this,'formedit'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ><span class='ui-icon ui-icon-pencil'></span></div>":
d.editbutton&&(f+="<div title='"+a.jgrid.nav.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' onclick=jQuery.fn.fmatter.rowactions.call(this,'edit'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover') ><span class='ui-icon ui-icon-pencil'></span></div>");d.delbutton&&(f+="<div title='"+a.jgrid.nav.deltitle+"' style='float:left;margin-left:5px;' class='ui-pg-div ui-inline-del' onclick=jQuery.fn.fmatter.rowactions.call(this,'del'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ><span class='ui-icon ui-icon-trash'></span></div>");
f+="<div title='"+a.jgrid.edit.bSubmit+"' style='float:left;display:none' class='ui-pg-div ui-inline-save' onclick=jQuery.fn.fmatter.rowactions.call(this,'save'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ><span class='ui-icon ui-icon-disk'></span></div>";f+="<div title='"+a.jgrid.edit.bCancel+"' style='float:left;display:none;margin-left:5px;' class='ui-pg-div ui-inline-cancel' onclick=jQuery.fn.fmatter.rowactions.call(this,'cancel'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ><span class='ui-icon ui-icon-cancel'></span></div>";
return"<div style='margin-left:8px;'>"+f+"</div>"};a.unformat=function(c,b,d,e){var f,h=b.colModel.formatter,g=b.colModel.formatoptions||{},i=/([\.\*\_\'\(\)\{\}\+\?\\])/g,j=b.colModel.unformat||a.fn.fmatter[h]&&a.fn.fmatter[h].unformat;if(void 0!==j&&a.isFunction(j))f=j.call(this,a(c).text(),b,c);else if(!a.fmatter.isUndefined(h)&&a.fmatter.isString(h))switch(f=a.jgrid.formatter||{},h){case "integer":g=a.extend({},f.integer,g);b=g.thousandsSeparator.replace(i,"\\$1");f=a(c).text().replace(RegExp(b,
"g"),"");break;case "number":g=a.extend({},f.number,g);b=g.thousandsSeparator.replace(i,"\\$1");f=a(c).text().replace(RegExp(b,"g"),"").replace(g.decimalSeparator,".");break;case "currency":g=a.extend({},f.currency,g);b=g.thousandsSeparator.replace(i,"\\$1");b=RegExp(b,"g");f=a(c).text();g.prefix&&g.prefix.length&&(f=f.substr(g.prefix.length));g.suffix&&g.suffix.length&&(f=f.substr(0,f.length-g.suffix.length));f=f.replace(b,"").replace(g.decimalSeparator,".");break;case "checkbox":g=b.colModel.editoptions?
b.colModel.editoptions.value.split(":"):["Yes","No"];f=a("input",c).is(":checked")?g[0]:g[1];break;case "select":f=a.unformat.select(c,b,d,e);break;case "actions":return"";default:f=a(c).text()}return void 0!==f?f:!0===e?a(c).text():a.jgrid.htmlDecode(a(c).html())};a.unformat.select=function(c,b,d,e){d=[];c=a(c).text();if(!0===e)return c;var e=a.extend({},!a.fmatter.isUndefined(b.colModel.formatoptions)?b.colModel.formatoptions:b.colModel.editoptions),b=void 0===e.separator?":":e.separator,f=void 0===
e.delimiter?";":e.delimiter;if(e.value){var h=e.value,e=!0===e.multiple?!0:!1,g=[];e&&(g=c.split(","),g=a.map(g,function(b){return a.trim(b)}));if(a.fmatter.isString(h)){var i=h.split(f),j=0,k;for(k=0;k<i.length;k++)if(f=i[k].split(b),2<f.length&&(f[1]=a.map(f,function(a,b){if(b>0)return a}).join(b)),e)-1<a.inArray(f[1],g)&&(d[j]=f[0],j++);else if(a.trim(f[1])==a.trim(c)){d[0]=f[0];break}}else if(a.fmatter.isObject(h)||a.isArray(h))e||(g[0]=c),d=a.map(g,function(b){var c;a.each(h,function(a,d){if(d==
b){c=a;return false}});if(c!==void 0)return c});return d.join(", ")}return c||""};a.unformat.date=function(c,b){var d=a.jgrid.formatter.date||{};a.fmatter.isUndefined(b.formatoptions)||(d=a.extend({},d,b.formatoptions));return!a.fmatter.isEmpty(c)?a.fmatter.util.DateFormat(d.newformat,c,d.srcformat,d):a.fn.fmatter.defaultFormat(c,b)}})(jQuery);
(function(a){a.jgrid.extend({getColProp:function(a){var c={},d=this[0];if(!d.grid)return!1;var d=d.p.colModel,g;for(g=0;g<d.length;g++)if(d[g].name==a){c=d[g];break}return c},setColProp:function(b,c){return this.each(function(){if(this.grid&&c){var d=this.p.colModel,g;for(g=0;g<d.length;g++)if(d[g].name==b){a.extend(!0,this.p.colModel[g],c);break}}})},sortGrid:function(a,c,d){return this.each(function(){var g=-1,f;if(this.grid){a||(a=this.p.sortname);for(f=0;f<this.p.colModel.length;f++)if(this.p.colModel[f].index==
a||this.p.colModel[f].name==a){g=f;break}-1!=g&&(f=this.p.colModel[g].sortable,"boolean"!==typeof f&&(f=!0),"boolean"!==typeof c&&(c=!1),f&&this.sortData("jqgh_"+this.p.id+"_"+a,g,c,d))}})},clearBeforeUnload:function(){return this.each(function(){var b=this.grid;b.emptyRows.call(this,!0,!0);a(b.hDiv).unbind("mousemove");a(this).unbind();b.dragEnd=null;b.dragMove=null;b.dragStart=null;b.emptyRows=null;b.populate=null;b.populateVisible=null;b.scrollGrid=null;b.selectionPreserver=null;b.bDiv=null;b.cDiv=
null;b.hDiv=null;b.cols=null;var c,d=b.headers.length;for(c=0;c<d;c++)b.headers[c].el=null;this.addJSONData=this.addXmlData=this.formatter=this.constructTr=this.setHeadCheckBox=this.refreshIndex=this.updatepager=this.sortData=this.formatCol=null})},GridDestroy:function(){return this.each(function(){if(this.grid){this.p.pager&&a(this.p.pager).remove();try{a(this).jqGrid("clearBeforeUnload"),a("#gbox_"+a.jgrid.jqID(this.id)).remove()}catch(b){}}})},GridUnload:function(){return this.each(function(){if(this.grid){var b=
a(this).attr("id"),c=a(this).attr("class");this.p.pager&&a(this.p.pager).empty().removeClass("ui-state-default ui-jqgrid-pager corner-bottom");var d=document.createElement("table");a(d).attr({id:b});d.className=c;b=a.jgrid.jqID(this.id);a(d).removeClass("ui-jqgrid-btable");1===a(this.p.pager).parents("#gbox_"+b).length?(a(d).insertBefore("#gbox_"+b).show(),a(this.p.pager).insertBefore("#gbox_"+b)):a(d).insertBefore("#gbox_"+b).show();a(this).jqGrid("clearBeforeUnload");a("#gbox_"+b).remove()}})},
setGridState:function(b){return this.each(function(){this.grid&&("hidden"==b?(a(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv","#gview_"+a.jgrid.jqID(this.p.id)).slideUp("fast"),this.p.pager&&a(this.p.pager).slideUp("fast"),this.p.toppager&&a(this.p.toppager).slideUp("fast"),!0===this.p.toolbar[0]&&("both"==this.p.toolbar[1]&&a(this.grid.ubDiv).slideUp("fast"),a(this.grid.uDiv).slideUp("fast")),this.p.footerrow&&a(".ui-jqgrid-sdiv","#gbox_"+a.jgrid.jqID(this.p.id)).slideUp("fast"),a(".ui-jqgrid-titlebar-close span",
this.grid.cDiv).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s"),this.p.gridstate="hidden"):"visible"==b&&(a(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv","#gview_"+a.jgrid.jqID(this.p.id)).slideDown("fast"),this.p.pager&&a(this.p.pager).slideDown("fast"),this.p.toppager&&a(this.p.toppager).slideDown("fast"),!0===this.p.toolbar[0]&&("both"==this.p.toolbar[1]&&a(this.grid.ubDiv).slideDown("fast"),a(this.grid.uDiv).slideDown("fast")),this.p.footerrow&&a(".ui-jqgrid-sdiv","#gbox_"+
a.jgrid.jqID(this.p.id)).slideDown("fast"),a(".ui-jqgrid-titlebar-close span",this.grid.cDiv).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n"),this.p.gridstate="visible"))})},filterToolbar:function(b){b=a.extend({autosearch:!0,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw"},b||{});return this.each(function(){var c=this;if(!this.ftoolbar){var d=function(){var e={},d=0,f,
h,l={},k;a.each(c.p.colModel,function(){h=this.index||this.name;k=this.searchoptions&&this.searchoptions.sopt?this.searchoptions.sopt[0]:"select"==this.stype?"eq":b.defaultSearch;if(f=a("#gs_"+a.jgrid.jqID(this.name),!0===this.frozen&&!0===c.p.frozenColumns?c.grid.fhDiv:c.grid.hDiv).val())e[h]=f,l[h]=k,d++;else try{delete c.p.postData[h]}catch(i){}});var g=0<d?!0:!1;if(!0===b.stringResult||"local"==c.p.datatype){var i='{"groupOp":"'+b.groupOp+'","rules":[',n=0;a.each(e,function(a,b){0<n&&(i+=",");
i+='{"field":"'+a+'",';i+='"op":"'+l[a]+'",';i+='"data":"'+(b+"").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';n++});i+="]}";a.extend(c.p.postData,{filters:i});a.each(["searchField","searchString","searchOper"],function(a,b){c.p.postData.hasOwnProperty(b)&&delete c.p.postData[b]})}else a.extend(c.p.postData,e);var o;c.p.searchurl&&(o=c.p.url,a(c).jqGrid("setGridParam",{url:c.p.searchurl}));var q="stop"===a(c).triggerHandler("jqGridToolbarBeforeSearch")?!0:!1;!q&&a.isFunction(b.beforeSearch)&&(q=
b.beforeSearch.call(c));q||a(c).jqGrid("setGridParam",{search:g}).trigger("reloadGrid",[{page:1}]);o&&a(c).jqGrid("setGridParam",{url:o});a(c).triggerHandler("jqGridToolbarAfterSearch");a.isFunction(b.afterSearch)&&b.afterSearch.call(c)},g=a("<tr class='ui-search-toolbar' role='rowheader'></tr>"),f;a.each(c.p.colModel,function(){var e=this,j,m,h,l;m=a("<th role='columnheader' class='ui-state-default ui-th-column ui-th-"+c.p.direction+"'></th>");j=a("<div style='position:relative;height:100%;padding-right:0.3em;'></div>");
!0===this.hidden&&a(m).css("display","none");this.search=!1===this.search?!1:!0;void 0===this.stype&&(this.stype="text");h=a.extend({},this.searchoptions||{});if(this.search)switch(this.stype){case "select":if(l=this.surl||h.dataUrl)a.ajax(a.extend({url:l,dataType:"html",success:function(f){if(h.buildSelect!==void 0)(f=h.buildSelect(f))&&a(j).append(f);else a(j).append(f);h.defaultValue!==void 0&&a("select",j).val(h.defaultValue);a("select",j).attr({name:e.index||e.name,id:"gs_"+e.name});h.attr&&
a("select",j).attr(h.attr);a("select",j).css({width:"100%"});a.jgrid.bindEv(a("select",j)[0],h,c);b.autosearch===true&&a("select",j).change(function(){d();return false});f=null}},a.jgrid.ajaxOptions,c.p.ajaxSelectOptions||{}));else{var k,p,i;e.searchoptions?(k=void 0===e.searchoptions.value?"":e.searchoptions.value,p=void 0===e.searchoptions.separator?":":e.searchoptions.separator,i=void 0===e.searchoptions.delimiter?";":e.searchoptions.delimiter):e.editoptions&&(k=void 0===e.editoptions.value?"":
e.editoptions.value,p=void 0===e.editoptions.separator?":":e.editoptions.separator,i=void 0===e.editoptions.delimiter?";":e.editoptions.delimiter);if(k){l=document.createElement("select");l.style.width="100%";a(l).attr({name:e.index||e.name,id:"gs_"+e.name});var n,o;if("string"===typeof k){k=k.split(i);for(o=0;o<k.length;o++)n=k[o].split(p),i=document.createElement("option"),i.value=n[0],i.innerHTML=n[1],l.appendChild(i)}else if("object"===typeof k)for(n in k)k.hasOwnProperty(n)&&(i=document.createElement("option"),
i.value=n,i.innerHTML=k[n],l.appendChild(i));void 0!==h.defaultValue&&a(l).val(h.defaultValue);h.attr&&a(l).attr(h.attr);a.jgrid.bindEv(l,h,c);a(j).append(l);!0===b.autosearch&&a(l).change(function(){d();return false})}}break;case "text":p=void 0!==h.defaultValue?h.defaultValue:"",a(j).append("<input type='text' style='width:95%;padding:0px;' name='"+(e.index||e.name)+"' id='gs_"+e.name+"' value='"+p+"'/>"),h.attr&&a("input",j).attr(h.attr),a.jgrid.bindEv(a("input",j)[0],h,c),!0===b.autosearch&&(b.searchOnEnter?
a("input",j).keypress(function(a){if((a.charCode||a.keyCode||0)==13){d();return false}return this}):a("input",j).keydown(function(a){switch(a.which){case 13:return false;case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:f&&clearTimeout(f);f=setTimeout(function(){d()},500)}}))}a(m).append(j);a(g).append(m)});a("table thead",c.grid.hDiv).append(g);this.ftoolbar=!0;this.triggerToolbar=d;this.clearToolbar=function(e){var d={},f=0,h,e="boolean"!==typeof e?!0:e;a.each(c.p.colModel,function(){var b;
this.searchoptions&&void 0!==this.searchoptions.defaultValue&&(b=this.searchoptions.defaultValue);h=this.index||this.name;switch(this.stype){case "select":a("#gs_"+a.jgrid.jqID(this.name)+" option",!0===this.frozen&&!0===c.p.frozenColumns?c.grid.fhDiv:c.grid.hDiv).each(function(c){if(c===0)this.selected=true;if(a(this).val()==b){this.selected=true;return false}});if(void 0!==b)d[h]=b,f++;else try{delete c.p.postData[h]}catch(e){}break;case "text":if(a("#gs_"+a.jgrid.jqID(this.name),!0===this.frozen&&
!0===c.p.frozenColumns?c.grid.fhDiv:c.grid.hDiv).val(b),void 0!==b)d[h]=b,f++;else try{delete c.p.postData[h]}catch(k){}}});var g=0<f?!0:!1;if(!0===b.stringResult||"local"==c.p.datatype){var k='{"groupOp":"'+b.groupOp+'","rules":[',p=0;a.each(d,function(a,b){0<p&&(k+=",");k+='{"field":"'+a+'",';k+='"op":"eq",';k+='"data":"'+(b+"").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';p++});k+="]}";a.extend(c.p.postData,{filters:k});a.each(["searchField","searchString","searchOper"],function(a,b){c.p.postData.hasOwnProperty(b)&&
delete c.p.postData[b]})}else a.extend(c.p.postData,d);var i;c.p.searchurl&&(i=c.p.url,a(c).jqGrid("setGridParam",{url:c.p.searchurl}));var n="stop"===a(c).triggerHandler("jqGridToolbarBeforeClear")?!0:!1;!n&&a.isFunction(b.beforeClear)&&(n=b.beforeClear.call(c));n||e&&a(c).jqGrid("setGridParam",{search:g}).trigger("reloadGrid",[{page:1}]);i&&a(c).jqGrid("setGridParam",{url:i});a(c).triggerHandler("jqGridToolbarAfterClear");a.isFunction(b.afterClear)&&b.afterClear()};this.toggleToolbar=function(){var b=
a("tr.ui-search-toolbar",c.grid.hDiv),d=!0===c.p.frozenColumns?a("tr.ui-search-toolbar",c.grid.fhDiv):!1;"none"==b.css("display")?(b.show(),d&&d.show()):(b.hide(),d&&d.hide())}}})},destroyFilterToolbar:function(){return this.each(function(){this.ftoolbar&&(this.toggleToolbar=this.clearToolbar=this.triggerToolbar=null,this.ftoolbar=!1,a(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove())})},destroyGroupHeader:function(b){void 0===b&&(b=!0);return this.each(function(){var c,d,g,f,e,j;
d=this.grid;var m=a("table.ui-jqgrid-htable thead",d.hDiv),h=this.p.colModel;if(d){a(this).unbind(".setGroupHeaders");c=a("<tr>",{role:"rowheader"}).addClass("ui-jqgrid-labels");f=d.headers;d=0;for(g=f.length;d<g;d++){e=h[d].hidden?"none":"";e=a(f[d].el).width(f[d].width).css("display",e);try{e.removeAttr("rowSpan")}catch(l){e.attr("rowSpan",1)}c.append(e);j=e.children("span.ui-jqgrid-resize");0<j.length&&(j[0].style.height="");e.children("div")[0].style.top=""}a(m).children("tr.ui-jqgrid-labels").remove();
a(m).prepend(c);!0===b&&a(this).jqGrid("setGridParam",{groupHeader:null})}})},setGroupHeaders:function(b){b=a.extend({useColSpanStyle:!1,groupHeaders:[]},b||{});return this.each(function(){this.p.groupHeader=b;var c,d,g=0,f,e,j,m,h,l=this.p.colModel,k=l.length,p=this.grid.headers,i=a("table.ui-jqgrid-htable",this.grid.hDiv),n=i.children("thead").children("tr.ui-jqgrid-labels:last").addClass("jqg-second-row-header");f=i.children("thead");var o=i.find(".jqg-first-row-header");void 0===o[0]?o=a("<tr>",
{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height","auto"):o.empty();var q,r=function(a,b){var c=b.length,d;for(d=0;d<c;d++)if(b[d].startColumnName===a)return d;return-1};a(this).prepend(f);f=a("<tr>",{role:"rowheader"}).addClass("ui-jqgrid-labels jqg-third-row-header");for(c=0;c<k;c++)if(j=p[c].el,m=a(j),d=l[c],e={height:"0px",width:p[c].width+"px",display:d.hidden?"none":""},a("<th>",{role:"gridcell"}).css(e).addClass("ui-first-th-"+this.p.direction).appendTo(o),j.style.width=
"",e=r(d.name,b.groupHeaders),0<=e){e=b.groupHeaders[e];g=e.numberOfColumns;h=e.titleText;for(e=d=0;e<g&&c+e<k;e++)l[c+e].hidden||d++;e=a("<th>").attr({role:"columnheader"}).addClass("ui-state-default ui-th-column-header ui-th-"+this.p.direction).css({height:"22px","border-top":"0px none"}).html(h);0<d&&e.attr("colspan",""+d);this.p.headertitles&&e.attr("title",e.text());0===d&&e.hide();m.before(e);f.append(j);g-=1}else 0===g?b.useColSpanStyle?m.attr("rowspan","2"):(a("<th>",{role:"columnheader"}).addClass("ui-state-default ui-th-column-header ui-th-"+
this.p.direction).css({display:d.hidden?"none":"","border-top":"0px none"}).insertBefore(m),f.append(j)):(f.append(j),g--);l=a(this).children("thead");l.prepend(o);f.insertAfter(n);i.append(l);b.useColSpanStyle&&(i.find("span.ui-jqgrid-resize").each(function(){var b=a(this).parent();b.is(":visible")&&(this.style.cssText="height: "+b.height()+"px !important; cursor: col-resize;")}),i.find("div.ui-jqgrid-sortable").each(function(){var b=a(this),c=b.parent();c.is(":visible")&&c.is(":has(span.ui-jqgrid-resize)")&&
b.css("top",(c.height()-b.outerHeight())/2+"px")}));q=l.find("tr.jqg-first-row-header");a(this).bind("jqGridResizeStop.setGroupHeaders",function(a,b,c){q.find("th").eq(c).width(b)})})},setFrozenColumns:function(){return this.each(function(){if(this.grid){var b=this,c=b.p.colModel,d=0,g=c.length,f=-1,e=!1;if(!(!0===b.p.subGrid||!0===b.p.treeGrid||!0===b.p.cellEdit||b.p.sortable||b.p.scroll||b.p.grouping)){b.p.rownumbers&&d++;for(b.p.multiselect&&d++;d<g;){if(!0===c[d].frozen)e=!0,f=d;else break;d++}if(0<=
f&&e){c=b.p.caption?a(b.grid.cDiv).outerHeight():0;d=a(".ui-jqgrid-htable","#gview_"+a.jgrid.jqID(b.p.id)).height();b.p.toppager&&(c+=a(b.grid.topDiv).outerHeight());!0===b.p.toolbar[0]&&"bottom"!=b.p.toolbar[1]&&(c+=a(b.grid.uDiv).outerHeight());b.grid.fhDiv=a('<div style="position:absolute;left:0px;top:'+c+"px;height:"+d+'px;" class="frozen-div ui-state-default ui-jqgrid-hdiv"></div>');b.grid.fbDiv=a('<div style="position:absolute;left:0px;top:'+(parseInt(c,10)+parseInt(d,10)+1)+'px;overflow-y:hidden" class="frozen-bdiv ui-jqgrid-bdiv"></div>');
a("#gview_"+a.jgrid.jqID(b.p.id)).append(b.grid.fhDiv);c=a(".ui-jqgrid-htable","#gview_"+a.jgrid.jqID(b.p.id)).clone(!0);if(b.p.groupHeader){a("tr.jqg-first-row-header, tr.jqg-third-row-header",c).each(function(){a("th:gt("+f+")",this).remove()});var j=-1,m=-1;a("tr.jqg-second-row-header th",c).each(function(){var b=parseInt(a(this).attr("colspan"),10);b&&(j+=b,m++);if(j===f)return!1});j!==f&&(m=f);a("tr.jqg-second-row-header",c).each(function(){a("th:gt("+m+")",this).remove()})}else a("tr",c).each(function(){a("th:gt("+
f+")",this).remove()});a(c).width(1);a(b.grid.fhDiv).append(c).mousemove(function(a){if(b.grid.resizing)return b.grid.dragMove(a),!1});a(b).bind("jqGridResizeStop.setFrozenColumns",function(c,d,e){c=a(".ui-jqgrid-htable",b.grid.fhDiv);a("th:eq("+e+")",c).width(d);c=a(".ui-jqgrid-btable",b.grid.fbDiv);a("tr:first td:eq("+e+")",c).width(d)});a(b).bind("jqGridOnSortCol.setFrozenColumns",function(c,d){var e=a("tr.ui-jqgrid-labels:last th:eq("+b.p.lastsort+")",b.grid.fhDiv),f=a("tr.ui-jqgrid-labels:last th:eq("+
d+")",b.grid.fhDiv);a("span.ui-grid-ico-sort",e).addClass("ui-state-disabled");a(e).attr("aria-selected","false");a("span.ui-icon-"+b.p.sortorder,f).removeClass("ui-state-disabled");a(f).attr("aria-selected","true");!b.p.viewsortcols[0]&&b.p.lastsort!=d&&(a("span.s-ico",e).hide(),a("span.s-ico",f).show())});a("#gview_"+a.jgrid.jqID(b.p.id)).append(b.grid.fbDiv);a(b.grid.bDiv).scroll(function(){a(b.grid.fbDiv).scrollTop(a(this).scrollTop())});!0===b.p.hoverrows&&a("#"+a.jgrid.jqID(b.p.id)).unbind("mouseover").unbind("mouseout");
a(b).bind("jqGridAfterGridComplete.setFrozenColumns",function(){a("#"+a.jgrid.jqID(b.p.id)+"_frozen").remove();a(b.grid.fbDiv).height(a(b.grid.bDiv).height()-16);var c=a("#"+a.jgrid.jqID(b.p.id)).clone(!0);a("tr",c).each(function(){a("td:gt("+f+")",this).remove()});a(c).width(1).attr("id",b.p.id+"_frozen");a(b.grid.fbDiv).append(c);!0===b.p.hoverrows&&(a("tr.jqgrow",c).hover(function(){a(this).addClass("ui-state-hover");a("#"+a.jgrid.jqID(this.id),"#"+a.jgrid.jqID(b.p.id)).addClass("ui-state-hover")},
function(){a(this).removeClass("ui-state-hover");a("#"+a.jgrid.jqID(this.id),"#"+a.jgrid.jqID(b.p.id)).removeClass("ui-state-hover")}),a("tr.jqgrow","#"+a.jgrid.jqID(b.p.id)).hover(function(){a(this).addClass("ui-state-hover");a("#"+a.jgrid.jqID(this.id),"#"+a.jgrid.jqID(b.p.id)+"_frozen").addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover");a("#"+a.jgrid.jqID(this.id),"#"+a.jgrid.jqID(b.p.id)+"_frozen").removeClass("ui-state-hover")}));c=null});b.p.frozenColumns=!0}}}})},
destroyFrozenColumns:function(){return this.each(function(){if(this.grid&&!0===this.p.frozenColumns){a(this.grid.fhDiv).remove();a(this.grid.fbDiv).remove();this.grid.fhDiv=null;this.grid.fbDiv=null;a(this).unbind(".setFrozenColumns");if(!0===this.p.hoverrows){var b;a("#"+a.jgrid.jqID(this.p.id)).bind("mouseover",function(c){b=a(c.target).closest("tr.jqgrow");"ui-subgrid"!==a(b).attr("class")&&a(b).addClass("ui-state-hover")}).bind("mouseout",function(c){b=a(c.target).closest("tr.jqgrow");a(b).removeClass("ui-state-hover")})}this.p.frozenColumns=
!1}})}})})(jQuery);
(function(a){a.extend(a.jgrid,{showModal:function(a){a.w.show()},closeModal:function(a){a.w.hide().attr("aria-hidden","true");a.o&&a.o.remove()},hideModal:function(d,b){b=a.extend({jqm:!0,gb:""},b||{});if(b.onClose){var c=b.gb&&"string"===typeof b.gb&&"#gbox_"===b.gb.substr(0,6)?b.onClose.call(a("#"+b.gb.substr(6))[0],d):b.onClose(d);if("boolean"===typeof c&&!c)return}if(a.fn.jqm&&!0===b.jqm)a(d).attr("aria-hidden","true").jqmHide();else{if(""!==b.gb)try{a(".jqgrid-overlay:first",b.gb).hide()}catch(e){}a(d).hide().attr("aria-hidden",
"true")}},findPos:function(a){var b=0,c=0;if(a.offsetParent){do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent)}return[b,c]},createModal:function(d,b,c,e,g,h,f){var c=a.extend(!0,{},a.jgrid.jqModal||{},c),i=document.createElement("div"),j,n=this,f=a.extend({},f||{});j="rtl"==a(c.gbox).attr("dir")?!0:!1;i.className="ui-widget ui-widget-content ui-corner-all ui-jqdialog";i.id=d.themodal;var k=document.createElement("div");k.className="ui-jqdialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix";
k.id=d.modalhead;a(k).append("<span class='ui-jqdialog-title'>"+c.caption+"</span>");var l=a("<a href='javascript:void(0)' class='ui-jqdialog-titlebar-close ui-corner-all'></a>").hover(function(){l.addClass("ui-state-hover")},function(){l.removeClass("ui-state-hover")}).append("<span class='ui-icon ui-icon-closethick'></span>");a(k).append(l);j?(i.dir="rtl",a(".ui-jqdialog-title",k).css("float","right"),a(".ui-jqdialog-titlebar-close",k).css("left","0.3em")):(i.dir="ltr",a(".ui-jqdialog-title",k).css("float",
"left"),a(".ui-jqdialog-titlebar-close",k).css("right","0.3em"));var m=document.createElement("div");a(m).addClass("ui-jqdialog-content ui-widget-content").attr("id",d.modalcontent);a(m).append(b);i.appendChild(m);a(i).prepend(k);!0===h?a("body").append(i):"string"===typeof h?a(h).append(i):a(i).insertBefore(e);a(i).css(f);void 0===c.jqModal&&(c.jqModal=!0);b={};if(a.fn.jqm&&!0===c.jqModal)0===c.left&&0===c.top&&c.overlay&&(f=[],f=a.jgrid.findPos(g),c.left=f[0]+4,c.top=f[1]+4),b.top=c.top+"px",b.left=
c.left;else if(0!==c.left||0!==c.top)b.left=c.left,b.top=c.top+"px";a("a.ui-jqdialog-titlebar-close",k).click(function(){var b=a("#"+a.jgrid.jqID(d.themodal)).data("onClose")||c.onClose,e=a("#"+a.jgrid.jqID(d.themodal)).data("gbox")||c.gbox;n.hideModal("#"+a.jgrid.jqID(d.themodal),{gb:e,jqm:c.jqModal,onClose:b});return false});if(0===c.width||!c.width)c.width=300;if(0===c.height||!c.height)c.height=200;c.zIndex||(e=a(e).parents("*[role=dialog]").filter(":first").css("z-index"),c.zIndex=e?parseInt(e,
10)+2:950);e=0;j&&b.left&&!h&&(e=a(c.gbox).width()-(!isNaN(c.width)?parseInt(c.width,10):0)-8,b.left=parseInt(b.left,10)+parseInt(e,10));b.left&&(b.left+="px");a(i).css(a.extend({width:isNaN(c.width)?"auto":c.width+"px",height:isNaN(c.height)?"auto":c.height+"px",zIndex:c.zIndex,overflow:"hidden"},b)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":d.modalhead,"aria-hidden":"true"});void 0===c.drag&&(c.drag=!0);void 0===c.resize&&(c.resize=!0);if(c.drag)if(a(k).css("cursor","move"),a.fn.jqDrag)a(i).jqDrag(k);
else try{a(i).draggable({handle:a("#"+a.jgrid.jqID(k.id))})}catch(o){}if(c.resize)if(a.fn.jqResize)a(i).append("<div class='jqResize ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se'></div>"),a("#"+a.jgrid.jqID(d.themodal)).jqResize(".jqResize",d.scrollelm?"#"+a.jgrid.jqID(d.scrollelm):!1);else try{a(i).resizable({handles:"se, sw",alsoResize:d.scrollelm?"#"+a.jgrid.jqID(d.scrollelm):!1})}catch(p){}!0===c.closeOnEscape&&a(i).keydown(function(b){if(b.which==27){b=a("#"+a.jgrid.jqID(d.themodal)).data("onClose")||
c.onClose;n.hideModal("#"+a.jgrid.jqID(d.themodal),{gb:c.gbox,jqm:c.jqModal,onClose:b})}})},viewModal:function(d,b){b=a.extend({toTop:!0,overlay:10,modal:!1,overlayClass:"ui-widget-overlay",onShow:a.jgrid.showModal,onHide:a.jgrid.closeModal,gbox:"",jqm:!0,jqM:!0},b||{});if(a.fn.jqm&&!0===b.jqm)b.jqM?a(d).attr("aria-hidden","false").jqm(b).jqmShow():a(d).attr("aria-hidden","false").jqmShow();else{""!==b.gbox&&(a(".jqgrid-overlay:first",b.gbox).show(),a(d).data("gbox",b.gbox));a(d).show().attr("aria-hidden",
"false");try{a(":input:visible",d)[0].focus()}catch(c){}}},info_dialog:function(d,b,c,e){var g={width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1E3,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]};a.extend(!0,g,a.jgrid.jqModal||{},{caption:"<b>"+d+"</b>"},e||{});var h=g.jqModal,f=this;a.fn.jqm&&!h&&(h=!1);d="";if(0<g.buttons.length)for(e=0;e<g.buttons.length;e++)void 0===g.buttons[e].id&&(g.buttons[e].id="info_button_"+e),d+=
"<a href='javascript:void(0)' id='"+g.buttons[e].id+"' class='fm-button ui-state-default ui-corner-all'>"+g.buttons[e].text+"</a>";e=isNaN(g.dataheight)?g.dataheight:g.dataheight+"px";b="<div id='info_id'>"+("<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+e+";"+("text-align:"+g.align+";")+"'>"+b+"</div>");b+=c?"<div class='ui-widget-content ui-helper-clearfix' style='text-align:"+g.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'><a href='javascript:void(0)' id='closedialog' class='fm-button ui-state-default ui-corner-all'>"+
c+"</a>"+d+"</div>":""!==d?"<div class='ui-widget-content ui-helper-clearfix' style='text-align:"+g.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'>"+d+"</div>":"";b+="</div>";try{"false"==a("#info_dialog").attr("aria-hidden")&&a.jgrid.hideModal("#info_dialog",{jqm:h}),a("#info_dialog").remove()}catch(i){}a.jgrid.createModal({themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",scrollelm:"infocnt"},b,g,"","",!0);d&&a.each(g.buttons,
function(d){a("#"+a.jgrid.jqID(this.id),"#info_id").bind("click",function(){g.buttons[d].onClick.call(a("#info_dialog"));return!1})});a("#closedialog","#info_id").click(function(){f.hideModal("#info_dialog",{jqm:h});return!1});a(".fm-button","#info_dialog").hover(function(){a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")});a.isFunction(g.beforeOpen)&&g.beforeOpen();a.jgrid.viewModal("#info_dialog",{onHide:function(a){a.w.hide().remove();a.o&&a.o.remove()},modal:g.modal,
jqm:h});a.isFunction(g.afterOpen)&&g.afterOpen();try{a("#info_dialog").focus()}catch(j){}},bindEv:function(d,b,c){a.isFunction(b.dataInit)&&b.dataInit.call(c,d);b.dataEvents&&a.each(b.dataEvents,function(){void 0!==this.data?a(d).bind(this.type,this.data,this.fn):a(d).bind(this.type,this.fn)})},createEl:function(d,b,c,e,g){function h(d,b,c){var e="dataInit,dataEvents,dataUrl,buildSelect,sopt,searchhidden,defaultValue,attr,custom_element,custom_value".split(",");void 0!==c&&a.isArray(c)&&a.merge(e,
c);a.each(b,function(b,c){-1===a.inArray(b,e)&&a(d).attr(b,c)});b.hasOwnProperty("id")||a(d).attr("id",a.jgrid.randId())}var f="",i=this;switch(d){case "textarea":f=document.createElement("textarea");e?b.cols||a(f).css({width:"98%"}):b.cols||(b.cols=20);b.rows||(b.rows=2);if("&nbsp;"==c||"&#160;"==c||1==c.length&&160==c.charCodeAt(0))c="";f.value=c;h(f,b);a(f).attr({role:"textbox",multiline:"true"});break;case "checkbox":f=document.createElement("input");f.type="checkbox";b.value?(d=b.value.split(":"),
c===d[0]&&(f.checked=!0,f.defaultChecked=!0),f.value=d[0],a(f).attr("offval",d[1])):(d=c.toLowerCase(),0>d.search(/(false|0|no|off|undefined)/i)&&""!==d?(f.checked=!0,f.defaultChecked=!0,f.value=c):f.value="on",a(f).attr("offval","off"));h(f,b,["value"]);a(f).attr("role","checkbox");break;case "select":f=document.createElement("select");f.setAttribute("role","select");e=[];!0===b.multiple?(d=!0,f.multiple="multiple",a(f).attr("aria-multiselectable","true")):d=!1;if(void 0!==b.dataUrl)d=b.name?(""+
b.id).substring(0,(""+b.id).length-(""+b.name).length-1):""+b.id,e=b.postData||g.postData,i.p&&i.p.idPrefix?d=a.jgrid.stripPref(i.p.idPrefix,d):e=void 0,a.ajax(a.extend({url:b.dataUrl,type:"GET",dataType:"html",data:a.isFunction(e)?e.call(i,d,c,""+b.name):e,context:{elem:f,options:b,vl:c},success:function(b){var d=[],c=this.elem,e=this.vl,f=a.extend({},this.options),g=f.multiple===true;a.isFunction(f.buildSelect)&&(b=f.buildSelect.call(i,b));if(b=a(b).html()){a(c).append(b);h(c,f);if(f.size===void 0)f.size=
g?3:1;if(g){d=e.split(",");d=a.map(d,function(d){return a.trim(d)})}else d[0]=a.trim(e);setTimeout(function(){a("option",c).each(function(b){if(b===0&&c.multiple)this.selected=false;a(this).attr("role","option");if(a.inArray(a.trim(a(this).text()),d)>-1||a.inArray(a.trim(a(this).val()),d)>-1)this.selected="selected"})},0)}}},g||{}));else if(b.value){var j;void 0===b.size&&(b.size=d?3:1);d&&(e=c.split(","),e=a.map(e,function(d){return a.trim(d)}));"function"===typeof b.value&&(b.value=b.value());var n,
k,l=void 0===b.separator?":":b.separator,g=void 0===b.delimiter?";":b.delimiter;if("string"===typeof b.value){n=b.value.split(g);for(j=0;j<n.length;j++){k=n[j].split(l);2<k.length&&(k[1]=a.map(k,function(a,d){if(d>0)return a}).join(l));g=document.createElement("option");g.setAttribute("role","option");g.value=k[0];g.innerHTML=k[1];f.appendChild(g);if(!d&&(a.trim(k[0])==a.trim(c)||a.trim(k[1])==a.trim(c)))g.selected="selected";if(d&&(-1<a.inArray(a.trim(k[1]),e)||-1<a.inArray(a.trim(k[0]),e)))g.selected=
"selected"}}else if("object"===typeof b.value)for(j in l=b.value,l)if(l.hasOwnProperty(j)){g=document.createElement("option");g.setAttribute("role","option");g.value=j;g.innerHTML=l[j];f.appendChild(g);if(!d&&(a.trim(j)==a.trim(c)||a.trim(l[j])==a.trim(c)))g.selected="selected";if(d&&(-1<a.inArray(a.trim(l[j]),e)||-1<a.inArray(a.trim(j),e)))g.selected="selected"}h(f,b,["value"])}break;case "text":case "password":case "button":j="button"==d?"button":"textbox";f=document.createElement("input");f.type=
d;f.value=c;h(f,b);"button"!=d&&(e?b.size||a(f).css({width:"98%"}):b.size||(b.size=20));a(f).attr("role",j);break;case "image":case "file":f=document.createElement("input");f.type=d;h(f,b);break;case "custom":f=document.createElement("span");try{if(a.isFunction(b.custom_element))if(l=b.custom_element.call(i,c,b))l=a(l).addClass("customelement").attr({id:b.id,name:b.name}),a(f).empty().append(l);else throw"e2";else throw"e1";}catch(m){"e1"==m&&a.jgrid.info_dialog(a.jgrid.errors.errcap,"function 'custom_element' "+
a.jgrid.edit.msg.nodefined,a.jgrid.edit.bClose),"e2"==m?a.jgrid.info_dialog(a.jgrid.errors.errcap,"function 'custom_element' "+a.jgrid.edit.msg.novalue,a.jgrid.edit.bClose):a.jgrid.info_dialog(a.jgrid.errors.errcap,"string"===typeof m?m:m.message,a.jgrid.edit.bClose)}}return f},checkDate:function(a,b){var c={},e,a=a.toLowerCase();e=-1!=a.indexOf("/")?"/":-1!=a.indexOf("-")?"-":-1!=a.indexOf(".")?".":"/";a=a.split(e);b=b.split(e);if(3!=b.length)return!1;e=-1;var g,h=-1,f=-1,i;for(i=0;i<a.length;i++)g=
isNaN(b[i])?0:parseInt(b[i],10),c[a[i]]=g,g=a[i],-1!=g.indexOf("y")&&(e=i),-1!=g.indexOf("m")&&(f=i),-1!=g.indexOf("d")&&(h=i);g="y"==a[e]||"yyyy"==a[e]?4:"yy"==a[e]?2:-1;i=function(a){var b;for(b=1;b<=a;b++){this[b]=31;if(4==b||6==b||9==b||11==b)this[b]=30;2==b&&(this[b]=29)}return this}(12);var j;if(-1===e)return!1;j=c[a[e]].toString();2==g&&1==j.length&&(g=1);if(j.length!=g||0===c[a[e]]&&"00"!=b[e]||-1===f)return!1;j=c[a[f]].toString();if(1>j.length||1>c[a[f]]||12<c[a[f]]||-1===h)return!1;j=c[a[h]].toString();
return 1>j.length||1>c[a[h]]||31<c[a[h]]||2==c[a[f]]&&c[a[h]]>(0===c[a[e]]%4&&(0!==c[a[e]]%100||0===c[a[e]]%400)?29:28)||c[a[h]]>i[c[a[f]]]?!1:!0},isEmpty:function(a){return a.match(/^\s+$/)||""===a?!0:!1},checkTime:function(d){var b=/^(\d{1,2}):(\d{2})([ap]m)?$/;if(!a.jgrid.isEmpty(d))if(d=d.match(b)){if(d[3]){if(1>d[1]||12<d[1])return!1}else if(23<d[1])return!1;if(59<d[2])return!1}else return!1;return!0},checkValues:function(d,b,c,e,g){var h,f;if(void 0===e)if("string"===typeof b){e=0;for(g=c.p.colModel.length;e<
g;e++)if(c.p.colModel[e].name==b){h=c.p.colModel[e].editrules;b=e;try{f=c.p.colModel[e].formoptions.label}catch(i){}break}}else 0<=b&&(h=c.p.colModel[b].editrules);else h=e,f=void 0===g?"_":g;if(h){f||(f=c.p.colNames[b]);if(!0===h.required&&a.jgrid.isEmpty(d))return[!1,f+": "+a.jgrid.edit.msg.required,""];e=!1===h.required?!1:!0;if(!0===h.number&&!(!1===e&&a.jgrid.isEmpty(d))&&isNaN(d))return[!1,f+": "+a.jgrid.edit.msg.number,""];if(void 0!==h.minValue&&!isNaN(h.minValue)&&parseFloat(d)<parseFloat(h.minValue))return[!1,
f+": "+a.jgrid.edit.msg.minValue+" "+h.minValue,""];if(void 0!==h.maxValue&&!isNaN(h.maxValue)&&parseFloat(d)>parseFloat(h.maxValue))return[!1,f+": "+a.jgrid.edit.msg.maxValue+" "+h.maxValue,""];if(!0===h.email&&!(!1===e&&a.jgrid.isEmpty(d))&&(g=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
!g.test(d)))return[!1,f+": "+a.jgrid.edit.msg.email,""];if(!0===h.integer&&!(!1===e&&a.jgrid.isEmpty(d))&&(isNaN(d)||0!==d%1||-1!=d.indexOf(".")))return[!1,f+": "+a.jgrid.edit.msg.integer,""];if(!0===h.date&&!(!1===e&&a.jgrid.isEmpty(d))&&(b=c.p.colModel[b].formatoptions&&c.p.colModel[b].formatoptions.newformat?c.p.colModel[b].formatoptions.newformat:c.p.colModel[b].datefmt||"Y-m-d",!a.jgrid.checkDate(b,d)))return[!1,f+": "+a.jgrid.edit.msg.date+" - "+b,""];if(!0===h.time&&!(!1===e&&a.jgrid.isEmpty(d))&&
!a.jgrid.checkTime(d))return[!1,f+": "+a.jgrid.edit.msg.date+" - hh:mm (am/pm)",""];if(!0===h.url&&!(!1===e&&a.jgrid.isEmpty(d))&&(g=/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i,!g.test(d)))return[!1,f+": "+a.jgrid.edit.msg.url,""];if(!0===h.custom&&!(!1===e&&a.jgrid.isEmpty(d)))return a.isFunction(h.custom_func)?(d=h.custom_func.call(c,d,f),a.isArray(d)?d:[!1,a.jgrid.edit.msg.customarray,""]):[!1,a.jgrid.edit.msg.customfcheck,
""]}return[!0,"",""]}})})(jQuery);
(function(a){var b={};a.jgrid.extend({searchGrid:function(b){b=a.extend(!0,{recreateFilter:!1,drag:!0,sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:"filters",loadDefaults:!0,beforeShowSearch:null,afterShowSearch:null,onInitializeSearch:null,afterRedraw:null,afterChange:null,closeAfterSearch:!1,closeAfterReset:!1,closeOnEscape:!1,searchOnEnter:!1,multipleSearch:!1,multipleGroup:!1,top:0,left:0,jqModal:!0,modal:!1,resize:!0,width:450,height:"auto",dataheight:"auto",showQuery:!1,
errorcheck:!0,sopt:null,stringResult:void 0,onClose:null,onSearch:null,onReset:null,toTop:!0,overlay:30,columns:[],tmplNames:null,tmplFilters:null,tmplLabel:" Template: ",showOnLoad:!1,layer:null},a.jgrid.search,b||{});return this.each(function(){function c(d){s=a(e).triggerHandler("jqGridFilterBeforeShow",[d]);void 0===s&&(s=!0);s&&a.isFunction(b.beforeShowSearch)&&(s=b.beforeShowSearch.call(e,d));s&&(a.jgrid.viewModal("#"+a.jgrid.jqID(t.themodal),{gbox:"#gbox_"+a.jgrid.jqID(h),jqm:b.jqModal,modal:b.modal,
overlay:b.overlay,toTop:b.toTop}),a(e).triggerHandler("jqGridFilterAfterShow",[d]),a.isFunction(b.afterShowSearch)&&b.afterShowSearch.call(e,d))}var e=this;if(e.grid){var h="fbox_"+e.p.id,s=!0,t={themodal:"searchmod"+h,modalhead:"searchhd"+h,modalcontent:"searchcnt"+h,scrollelm:h},r=e.p.postData[b.sFilter];"string"===typeof r&&(r=a.jgrid.parse(r));!0===b.recreateFilter&&a("#"+a.jgrid.jqID(t.themodal)).remove();if(void 0!==a("#"+a.jgrid.jqID(t.themodal))[0])c(a("#fbox_"+a.jgrid.jqID(+e.p.id)));else{var p=
a("<div><div id='"+h+"' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_"+a.jgrid.jqID(e.p.id)),f="left",i="";"rtl"==e.p.direction&&(f="right",i=" style='text-align:left'",p.attr("dir","rtl"));var m=a.extend([],e.p.colModel),w="<a href='javascript:void(0)' id='"+h+"_search' class='fm-button ui-state-default ui-corner-all fm-button-icon-right ui-reset'><span class='ui-icon ui-icon-search'></span>"+b.Find+"</a>",d="<a href='javascript:void(0)' id='"+h+"_reset' class='fm-button ui-state-default ui-corner-all fm-button-icon-left ui-search'><span class='ui-icon ui-icon-arrowreturnthick-1-w'></span>"+
b.Reset+"</a>",n="",g="",o,l=!1,q=-1;b.showQuery&&(n="<a href='javascript:void(0)' id='"+h+"_query' class='fm-button ui-state-default ui-corner-all fm-button-icon-left'><span class='ui-icon ui-icon-comment'></span>Query</a>");b.columns.length?m=b.columns:a.each(m,function(a,b){if(!b.label)b.label=e.p.colNames[a];if(!l){var d=b.search===void 0?true:b.search,c=b.hidden===true;if(b.searchoptions&&b.searchoptions.searchhidden===true&&d||d&&!c){l=true;o=b.index||b.name;q=a}}});if(!r&&o||!1===b.multipleSearch){var x=
"eq";0<=q&&m[q].searchoptions&&m[q].searchoptions.sopt?x=m[q].searchoptions.sopt[0]:b.sopt&&b.sopt.length&&(x=b.sopt[0]);r={groupOp:"AND",rules:[{field:o,op:x,data:""}]}}l=!1;b.tmplNames&&b.tmplNames.length&&(l=!0,g=b.tmplLabel,g+="<select class='ui-template'>",g+="<option value='default'>Default</option>",a.each(b.tmplNames,function(a,b){g=g+("<option value='"+a+"'>"+b+"</option>")}),g+="</select>");f="<table class='EditTable' style='border:0px none;margin-top:5px' id='"+h+"_2'><tbody><tr><td colspan='2'><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr><td class='EditButton' style='text-align:"+
f+"'>"+d+g+"</td><td class='EditButton' "+i+">"+n+w+"</td></tr></tbody></table>";h=a.jgrid.jqID(h);a("#"+h).jqFilter({columns:m,filter:b.loadDefaults?r:null,showQuery:b.showQuery,errorcheck:b.errorcheck,sopt:b.sopt,groupButton:b.multipleGroup,ruleButtons:b.multipleSearch,afterRedraw:b.afterRedraw,_gridsopt:a.jgrid.search.odata,ajaxSelectOptions:e.p.ajaxSelectOptions,groupOps:b.groupOps,onChange:function(){this.p.showQuery&&a(".query",this).html(this.toUserFriendlyString());a.isFunction(b.afterChange)&&
b.afterChange.call(e,a("#"+h),b)},direction:e.p.direction});p.append(f);l&&b.tmplFilters&&b.tmplFilters.length&&a(".ui-template",p).bind("change",function(){var d=a(this).val();d=="default"?a("#"+h).jqFilter("addFilter",r):a("#"+h).jqFilter("addFilter",b.tmplFilters[parseInt(d,10)]);return false});!0===b.multipleGroup&&(b.multipleSearch=!0);a(e).triggerHandler("jqGridFilterInitialize",[a("#"+h)]);a.isFunction(b.onInitializeSearch)&&b.onInitializeSearch.call(e,a("#"+h));b.gbox="#gbox_"+h;b.layer?a.jgrid.createModal(t,
p,b,"#gview_"+a.jgrid.jqID(e.p.id),a("#gbox_"+a.jgrid.jqID(e.p.id))[0],"#"+a.jgrid.jqID(b.layer),{position:"relative"}):a.jgrid.createModal(t,p,b,"#gview_"+a.jgrid.jqID(e.p.id),a("#gbox_"+a.jgrid.jqID(e.p.id))[0]);(b.searchOnEnter||b.closeOnEscape)&&a("#"+a.jgrid.jqID(t.themodal)).keydown(function(d){var c=a(d.target);if(b.searchOnEnter&&d.which===13&&!c.hasClass("add-group")&&!c.hasClass("add-rule")&&!c.hasClass("delete-group")&&!c.hasClass("delete-rule")&&(!c.hasClass("fm-button")||!c.is("[id$=_query]"))){a("#"+
h+"_search").focus().click();return false}if(b.closeOnEscape&&d.which===27){a("#"+a.jgrid.jqID(t.modalhead)).find(".ui-jqdialog-titlebar-close").focus().click();return false}});n&&a("#"+h+"_query").bind("click",function(){a(".queryresult",p).toggle();return false});void 0===b.stringResult&&(b.stringResult=b.multipleSearch);a("#"+h+"_search").bind("click",function(){var d=a("#"+h),c={},g,k=d.jqFilter("filterData");if(b.errorcheck){d[0].hideError();b.showQuery||d.jqFilter("toSQLString");if(d[0].p.error){d[0].showError();
return false}}if(b.stringResult){try{g=xmlJsonClass.toJson(k,"","",false)}catch(i){try{g=JSON.stringify(k)}catch(f){}}if(typeof g==="string"){c[b.sFilter]=g;a.each([b.sField,b.sValue,b.sOper],function(){c[this]=""})}}else if(b.multipleSearch){c[b.sFilter]=k;a.each([b.sField,b.sValue,b.sOper],function(){c[this]=""})}else{c[b.sField]=k.rules[0].field;c[b.sValue]=k.rules[0].data;c[b.sOper]=k.rules[0].op;c[b.sFilter]=""}e.p.search=true;a.extend(e.p.postData,c);a(e).triggerHandler("jqGridFilterSearch");
a.isFunction(b.onSearch)&&b.onSearch.call(e);a(e).trigger("reloadGrid",[{page:1}]);b.closeAfterSearch&&a.jgrid.hideModal("#"+a.jgrid.jqID(t.themodal),{gb:"#gbox_"+a.jgrid.jqID(e.p.id),jqm:b.jqModal,onClose:b.onClose});return false});a("#"+h+"_reset").bind("click",function(){var d={},c=a("#"+h);e.p.search=false;b.multipleSearch===false?d[b.sField]=d[b.sValue]=d[b.sOper]="":d[b.sFilter]="";c[0].resetFilter();l&&a(".ui-template",p).val("default");a.extend(e.p.postData,d);a(e).triggerHandler("jqGridFilterReset");
a.isFunction(b.onReset)&&b.onReset.call(e);a(e).trigger("reloadGrid",[{page:1}]);return false});c(a("#"+h));a(".fm-button:not(.ui-state-disabled)",p).hover(function(){a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")})}}})},editGridRow:function(u,c){c=a.extend(!0,{top:0,left:0,width:300,datawidth:"auto",height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,url:null,mtype:"POST",clearAfterAdd:!0,closeAfterEdit:!1,reloadAfterSubmit:!0,onInitializeForm:null,
beforeInitData:null,beforeShowForm:null,afterShowForm:null,beforeSubmit:null,afterSubmit:null,onclickSubmit:null,afterComplete:null,onclickPgButtons:null,afterclickPgButtons:null,editData:{},recreateForm:!1,jqModal:!0,closeOnEscape:!1,addedrow:"first",topinfo:"",bottominfo:"",saveicon:[],closeicon:[],savekey:[!1,13],navkeys:[!1,38,40],checkOnSubmit:!1,checkOnUpdate:!1,_savedData:{},processing:!1,onClose:null,ajaxEditOptions:{},serializeEditData:null,viewPagerButtons:!0},a.jgrid.edit,c||{});b[a(this)[0].p.id]=
c;return this.each(function(){function e(){a(l+" > tbody > tr > td > .FormElement").each(function(){var b=a(".customelement",this);if(b.length){var c=a(b[0]).attr("name");a.each(d.p.colModel,function(){if(this.name===c&&this.editoptions&&a.isFunction(this.editoptions.custom_value)){try{if(j[c]=this.editoptions.custom_value.call(d,a("#"+a.jgrid.jqID(c),l),"get"),void 0===j[c])throw"e1";}catch(b){"e1"===b?a.jgrid.info_dialog(a.jgrid.errors.errcap,"function 'custom_value' "+a.jgrid.edit.msg.novalue,
a.jgrid.edit.bClose):a.jgrid.info_dialog(a.jgrid.errors.errcap,b.message,a.jgrid.edit.bClose)}return!0}})}else{switch(a(this).get(0).type){case "checkbox":a(this).is(":checked")?j[this.name]=a(this).val():(b=a(this).attr("offval"),j[this.name]=b);break;case "select-one":j[this.name]=a("option:selected",this).val();B[this.name]=a("option:selected",this).text();break;case "select-multiple":j[this.name]=a(this).val();j[this.name]=j[this.name]?j[this.name].join(","):"";var e=[];a("option:selected",this).each(function(d,
b){e[d]=a(b).text()});B[this.name]=e.join(",");break;case "password":case "text":case "textarea":case "button":j[this.name]=a(this).val()}d.p.autoencode&&(j[this.name]=a.jgrid.htmlEncode(j[this.name]))}});return!0}function h(c,e,k,j){var i,f,l,q=0,h,p,o,m=[],y=!1,u="",n;for(n=1;n<=j;n++)u+="<td class='CaptionTD'>&#160;</td><td class='DataTD'>&#160;</td>";"_empty"!=c&&(y=a(e).jqGrid("getInd",c));a(e.p.colModel).each(function(n){i=this.name;p=(f=this.editrules&&!0===this.editrules.edithidden?!1:!0===
this.hidden?!0:!1)?"style='display:none'":"";if("cb"!==i&&"subgrid"!==i&&!0===this.editable&&"rn"!==i){if(!1===y)h="";else if(i==e.p.ExpandColumn&&!0===e.p.treeGrid)h=a("td[role='gridcell']:eq("+n+")",e.rows[y]).text();else{try{h=a.unformat.call(e,a("td[role='gridcell']:eq("+n+")",e.rows[y]),{rowId:c,colModel:this},n)}catch(s){h=this.edittype&&"textarea"==this.edittype?a("td[role='gridcell']:eq("+n+")",e.rows[y]).text():a("td[role='gridcell']:eq("+n+")",e.rows[y]).html()}if(!h||"&nbsp;"==h||"&#160;"==
h||1==h.length&&160==h.charCodeAt(0))h=""}var r=a.extend({},this.editoptions||{},{id:i,name:i}),v=a.extend({},{elmprefix:"",elmsuffix:"",rowabove:!1,rowcontent:""},this.formoptions||{}),t=parseInt(v.rowpos,10)||q+1,x=parseInt(2*(parseInt(v.colpos,10)||1),10);"_empty"==c&&r.defaultValue&&(h=a.isFunction(r.defaultValue)?r.defaultValue.call(d):r.defaultValue);this.edittype||(this.edittype="text");d.p.autoencode&&(h=a.jgrid.htmlDecode(h));o=a.jgrid.createEl.call(d,this.edittype,r,h,!1,a.extend({},a.jgrid.ajaxOptions,
e.p.ajaxSelectOptions||{}));""===h&&"checkbox"==this.edittype&&(h=a(o).attr("offval"));""===h&&"select"==this.edittype&&(h=a("option:eq(0)",o).text());if(b[d.p.id].checkOnSubmit||b[d.p.id].checkOnUpdate)b[d.p.id]._savedData[i]=h;a(o).addClass("FormElement");-1<a.inArray(this.edittype,["text","textarea","password","select"])&&a(o).addClass("ui-widget-content ui-corner-all");l=a(k).find("tr[rowpos="+t+"]");if(v.rowabove){var z=a("<tr><td class='contentinfo' colspan='"+2*j+"'>"+v.rowcontent+"</td></tr>");
a(k).append(z);z[0].rp=t}0===l.length&&(l=a("<tr "+p+" rowpos='"+t+"'></tr>").addClass("FormData").attr("id","tr_"+i),a(l).append(u),a(k).append(l),l[0].rp=t);a("td:eq("+(x-2)+")",l[0]).html(void 0===v.label?e.p.colNames[n]:v.label);a("td:eq("+(x-1)+")",l[0]).append(v.elmprefix).append(o).append(v.elmsuffix);a.isFunction(r.custom_value)&&"_empty"!==c&&r.custom_value.call(d,a("#"+i,"#"+g),"set",h);a.jgrid.bindEv(o,r,d);m[q]=n;q++}});if(0<q&&(n=a("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+
(2*j-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='"+e.p.id+"_id' value='"+c+"'/></td></tr>"),n[0].rp=q+999,a(k).append(n),b[d.p.id].checkOnSubmit||b[d.p.id].checkOnUpdate))b[d.p.id]._savedData[e.p.id+"_id"]=c;return m}function s(c,e,g){var k,i=0,j,f,h,q,p;if(b[d.p.id].checkOnSubmit||b[d.p.id].checkOnUpdate)b[d.p.id]._savedData={},b[d.p.id]._savedData[e.p.id+"_id"]=c;var n=e.p.colModel;if("_empty"==c)a(n).each(function(){k=this.name;h=a.extend({},this.editoptions||{});
if((f=a("#"+a.jgrid.jqID(k),"#"+g))&&f.length&&null!==f[0])if(q="",h.defaultValue?(q=a.isFunction(h.defaultValue)?h.defaultValue.call(d):h.defaultValue,"checkbox"==f[0].type?(p=q.toLowerCase(),0>p.search(/(false|0|no|off|undefined)/i)&&""!==p?(f[0].checked=!0,f[0].defaultChecked=!0,f[0].value=q):(f[0].checked=!1,f[0].defaultChecked=!1)):f.val(q)):"checkbox"==f[0].type?(f[0].checked=!1,f[0].defaultChecked=!1,q=a(f).attr("offval")):f[0].type&&"select"==f[0].type.substr(0,6)?f[0].selectedIndex=0:f.val(q),
!0===b[d.p.id].checkOnSubmit||b[d.p.id].checkOnUpdate)b[d.p.id]._savedData[k]=q}),a("#id_g","#"+g).val(c);else{var o=a(e).jqGrid("getInd",c,!0);o&&(a('td[role="gridcell"]',o).each(function(f){k=n[f].name;if("cb"!==k&&"subgrid"!==k&&"rn"!==k&&!0===n[f].editable){if(k==e.p.ExpandColumn&&!0===e.p.treeGrid)j=a(this).text();else try{j=a.unformat.call(e,a(this),{rowId:c,colModel:n[f]},f)}catch(h){j="textarea"==n[f].edittype?a(this).text():a(this).html()}d.p.autoencode&&(j=a.jgrid.htmlDecode(j));if(!0===
b[d.p.id].checkOnSubmit||b[d.p.id].checkOnUpdate)b[d.p.id]._savedData[k]=j;k=a.jgrid.jqID(k);switch(n[f].edittype){case "password":case "text":case "button":case "image":case "textarea":if("&nbsp;"==j||"&#160;"==j||1==j.length&&160==j.charCodeAt(0))j="";a("#"+k,"#"+g).val(j);break;case "select":var l=j.split(","),l=a.map(l,function(c){return a.trim(c)});a("#"+k+" option","#"+g).each(function(){this.selected=!n[f].editoptions.multiple&&(a.trim(j)==a.trim(a(this).text())||l[0]==a.trim(a(this).text())||
l[0]==a.trim(a(this).val()))?!0:n[f].editoptions.multiple?-1<a.inArray(a.trim(a(this).text()),l)||-1<a.inArray(a.trim(a(this).val()),l)?!0:!1:!1});break;case "checkbox":j=""+j;n[f].editoptions&&n[f].editoptions.value?n[f].editoptions.value.split(":")[0]==j?(a("#"+k,"#"+g)[d.p.useProp?"prop":"attr"]("checked",!0),a("#"+k,"#"+g)[d.p.useProp?"prop":"attr"]("defaultChecked",!0)):(a("#"+k,"#"+g)[d.p.useProp?"prop":"attr"]("checked",!1),a("#"+k,"#"+g)[d.p.useProp?"prop":"attr"]("defaultChecked",!1)):(j=
j.toLowerCase(),0>j.search(/(false|0|no|off|undefined)/i)&&""!==j?(a("#"+k,"#"+g)[d.p.useProp?"prop":"attr"]("checked",!0),a("#"+k,"#"+g)[d.p.useProp?"prop":"attr"]("defaultChecked",!0)):(a("#"+k,"#"+g)[d.p.useProp?"prop":"attr"]("checked",!1),a("#"+k,"#"+g)[d.p.useProp?"prop":"attr"]("defaultChecked",!1)));break;case "custom":try{if(n[f].editoptions&&a.isFunction(n[f].editoptions.custom_value))n[f].editoptions.custom_value.call(d,a("#"+k,"#"+g),"set",j);else throw"e1";}catch(q){"e1"==q?a.jgrid.info_dialog(a.jgrid.errors.errcap,
"function 'custom_value' "+a.jgrid.edit.msg.nodefined,a.jgrid.edit.bClose):a.jgrid.info_dialog(a.jgrid.errors.errcap,q.message,a.jgrid.edit.bClose)}}i++}}),0<i&&a("#id_g",l).val(c))}}function t(){a.each(d.p.colModel,function(a,c){c.editoptions&&!0===c.editoptions.NullIfEmpty&&j.hasOwnProperty(c.name)&&""===j[c.name]&&(j[c.name]="null")})}function r(){var e,k=[!0,"",""],f={},i=d.p.prmNames,h,p,o,y,m,u=a(d).triggerHandler("jqGridAddEditBeforeCheckValues",[a("#"+g),z]);u&&"object"===typeof u&&(j=u);
a.isFunction(b[d.p.id].beforeCheckValues)&&(u=b[d.p.id].beforeCheckValues.call(d,j,a("#"+g),"_empty"==j[d.p.id+"_id"]?i.addoper:i.editoper))&&"object"===typeof u&&(j=u);for(o in j)if(j.hasOwnProperty(o)&&(k=a.jgrid.checkValues.call(d,j[o],o,d),!1===k[0]))break;t();k[0]&&(f=a(d).triggerHandler("jqGridAddEditClickSubmit",[b[d.p.id],j,z]),void 0===f&&a.isFunction(b[d.p.id].onclickSubmit)&&(f=b[d.p.id].onclickSubmit.call(d,b[d.p.id],j)||{}),k=a(d).triggerHandler("jqGridAddEditBeforeSubmit",[j,a("#"+g),
z]),void 0===k&&(k=[!0,"",""]),k[0]&&a.isFunction(b[d.p.id].beforeSubmit)&&(k=b[d.p.id].beforeSubmit.call(d,j,a("#"+g))));if(k[0]&&!b[d.p.id].processing){b[d.p.id].processing=!0;a("#sData",l+"_2").addClass("ui-state-active");p=i.oper;h=i.id;j[p]="_empty"==a.trim(j[d.p.id+"_id"])?i.addoper:i.editoper;j[p]!=i.addoper?j[h]=j[d.p.id+"_id"]:void 0===j[h]&&(j[h]=j[d.p.id+"_id"]);delete j[d.p.id+"_id"];j=a.extend(j,b[d.p.id].editData,f);if(!0===d.p.treeGrid)for(m in j[p]==i.addoper&&(y=a(d).jqGrid("getGridParam",
"selrow"),j["adjacency"==d.p.treeGridModel?d.p.treeReader.parent_id_field:"parent_id"]=y),d.p.treeReader)d.p.treeReader.hasOwnProperty(m)&&(f=d.p.treeReader[m],j.hasOwnProperty(f)&&!(j[p]==i.addoper&&"parent_id_field"===m)&&delete j[f]);j[h]=a.jgrid.stripPref(d.p.idPrefix,j[h]);m=a.extend({url:b[d.p.id].url||a(d).jqGrid("getGridParam","editurl"),type:b[d.p.id].mtype,data:a.isFunction(b[d.p.id].serializeEditData)?b[d.p.id].serializeEditData.call(d,j):j,complete:function(f,o){var m;j[h]=d.p.idPrefix+
j[h];if(o!="success"){k[0]=false;k[1]=a(d).triggerHandler("jqGridAddEditErrorTextFormat",[f,z]);k[1]=a.isFunction(b[d.p.id].errorTextFormat)?b[d.p.id].errorTextFormat.call(d,f):o+" Status: '"+f.statusText+"'. Error code: "+f.status}else{k=a(d).triggerHandler("jqGridAddEditAfterSubmit",[f,j,z]);k===void 0&&(k=[true,"",""]);k[0]&&a.isFunction(b[d.p.id].afterSubmit)&&(k=b[d.p.id].afterSubmit.call(d,f,j))}if(k[0]===false){a("#FormError>td",l).html(k[1]);a("#FormError",l).show()}else{a.each(d.p.colModel,
function(){if(B[this.name]&&this.formatter&&this.formatter=="select")try{delete B[this.name]}catch(a){}});j=a.extend(j,B);d.p.autoencode&&a.each(j,function(c,d){j[c]=a.jgrid.htmlDecode(d)});if(j[p]==i.addoper){k[2]||(k[2]=a.jgrid.randId());j[h]=k[2];if(b[d.p.id].closeAfterAdd){if(b[d.p.id].reloadAfterSubmit)a(d).trigger("reloadGrid");else if(d.p.treeGrid===true)a(d).jqGrid("addChildNode",k[2],y,j);else{a(d).jqGrid("addRowData",k[2],j,c.addedrow);a(d).jqGrid("setSelection",k[2])}a.jgrid.hideModal("#"+
a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(n),jqm:c.jqModal,onClose:b[d.p.id].onClose})}else if(b[d.p.id].clearAfterAdd){b[d.p.id].reloadAfterSubmit?a(d).trigger("reloadGrid"):d.p.treeGrid===true?a(d).jqGrid("addChildNode",k[2],y,j):a(d).jqGrid("addRowData",k[2],j,c.addedrow);s("_empty",d,g)}else b[d.p.id].reloadAfterSubmit?a(d).trigger("reloadGrid"):d.p.treeGrid===true?a(d).jqGrid("addChildNode",k[2],y,j):a(d).jqGrid("addRowData",k[2],j,c.addedrow)}else{if(b[d.p.id].reloadAfterSubmit){a(d).trigger("reloadGrid");
b[d.p.id].closeAfterEdit||setTimeout(function(){a(d).jqGrid("setSelection",j[h])},1E3)}else d.p.treeGrid===true?a(d).jqGrid("setTreeRow",j[h],j):a(d).jqGrid("setRowData",j[h],j);b[d.p.id].closeAfterEdit&&a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(n),jqm:c.jqModal,onClose:b[d.p.id].onClose})}if(a.isFunction(b[d.p.id].afterComplete)){e=f;setTimeout(function(){a(d).triggerHandler("jqGridAddEditAfterComplete",[e,j,a("#"+g),z]);b[d.p.id].afterComplete.call(d,e,j,a("#"+g));
e=null},500)}if(b[d.p.id].checkOnSubmit||b[d.p.id].checkOnUpdate){a("#"+g).data("disabled",false);if(b[d.p.id]._savedData[d.p.id+"_id"]!="_empty")for(m in b[d.p.id]._savedData)b[d.p.id]._savedData.hasOwnProperty(m)&&j[m]&&(b[d.p.id]._savedData[m]=j[m])}}b[d.p.id].processing=false;a("#sData",l+"_2").removeClass("ui-state-active");try{a(":input:visible","#"+g)[0].focus()}catch(u){}}},a.jgrid.ajaxOptions,b[d.p.id].ajaxEditOptions);!m.url&&!b[d.p.id].useDataProxy&&(a.isFunction(d.p.dataProxy)?b[d.p.id].useDataProxy=
!0:(k[0]=!1,k[1]+=" "+a.jgrid.errors.nourl));k[0]&&(b[d.p.id].useDataProxy?(f=d.p.dataProxy.call(d,m,"set_"+d.p.id),void 0===f&&(f=[!0,""]),!1===f[0]?(k[0]=!1,k[1]=f[1]||"Error deleting the selected row!"):(m.data.oper==i.addoper&&b[d.p.id].closeAfterAdd&&a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(n),jqm:c.jqModal,onClose:b[d.p.id].onClose}),m.data.oper==i.editoper&&b[d.p.id].closeAfterEdit&&a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(n),
jqm:c.jqModal,onClose:b[d.p.id].onClose}))):a.ajax(m))}!1===k[0]&&(a("#FormError>td",l).html(k[1]),a("#FormError",l).show())}function p(a,c){var d=!1,b;for(b in a)if(a.hasOwnProperty(b)&&a[b]!=c[b]){d=!0;break}return d}function f(){var c=!0;a("#FormError",l).hide();if(b[d.p.id].checkOnUpdate&&(j={},B={},e(),F=a.extend({},j,B),M=p(F,b[d.p.id]._savedData)))a("#"+g).data("disabled",!0),a(".confirm","#"+q.themodal).show(),c=!1;return c}function i(){var c;if("_empty"!==u&&void 0!==d.p.savedRow&&0<d.p.savedRow.length&&
a.isFunction(a.fn.jqGrid.restoreRow))for(c=0;c<d.p.savedRow.length;c++)if(d.p.savedRow[c].id==u){a(d).jqGrid("restoreRow",u);break}}function m(c,d){var b=d[1].length-1;0===c?a("#pData",l+"_2").addClass("ui-state-disabled"):void 0!==d[1][c-1]&&a("#"+a.jgrid.jqID(d[1][c-1])).hasClass("ui-state-disabled")?a("#pData",l+"_2").addClass("ui-state-disabled"):a("#pData",l+"_2").removeClass("ui-state-disabled");c==b?a("#nData",l+"_2").addClass("ui-state-disabled"):void 0!==d[1][c+1]&&a("#"+a.jgrid.jqID(d[1][c+
1])).hasClass("ui-state-disabled")?a("#nData",l+"_2").addClass("ui-state-disabled"):a("#nData",l+"_2").removeClass("ui-state-disabled")}function w(){var c=a(d).jqGrid("getDataIDs"),b=a("#id_g",l).val();return[a.inArray(b,c),c]}var d=this;if(d.grid&&u){var n=d.p.id,g="FrmGrid_"+n,o="TblGrid_"+n,l="#"+a.jgrid.jqID(o),q={themodal:"editmod"+n,modalhead:"edithd"+n,modalcontent:"editcnt"+n,scrollelm:g},x=a.isFunction(b[d.p.id].beforeShowForm)?b[d.p.id].beforeShowForm:!1,A=a.isFunction(b[d.p.id].afterShowForm)?
b[d.p.id].afterShowForm:!1,v=a.isFunction(b[d.p.id].beforeInitData)?b[d.p.id].beforeInitData:!1,C=a.isFunction(b[d.p.id].onInitializeForm)?b[d.p.id].onInitializeForm:!1,k=!0,y=1,H=0,j,B,F,M,z,g=a.jgrid.jqID(g);"new"===u?(u="_empty",z="add",c.caption=b[d.p.id].addCaption):(c.caption=b[d.p.id].editCaption,z="edit");!0===c.recreateForm&&void 0!==a("#"+a.jgrid.jqID(q.themodal))[0]&&a("#"+a.jgrid.jqID(q.themodal)).remove();var I=!0;c.checkOnUpdate&&c.jqModal&&!c.modal&&(I=!1);if(void 0!==a("#"+a.jgrid.jqID(q.themodal))[0]){k=
a(d).triggerHandler("jqGridAddEditBeforeInitData",[a("#"+a.jgrid.jqID(g)),z]);void 0===k&&(k=!0);k&&v&&(k=v.call(d,a("#"+g)));if(!1===k)return;i();a(".ui-jqdialog-title","#"+a.jgrid.jqID(q.modalhead)).html(c.caption);a("#FormError",l).hide();b[d.p.id].topinfo?(a(".topinfo",l).html(b[d.p.id].topinfo),a(".tinfo",l).show()):a(".tinfo",l).hide();b[d.p.id].bottominfo?(a(".bottominfo",l+"_2").html(b[d.p.id].bottominfo),a(".binfo",l+"_2").show()):a(".binfo",l+"_2").hide();s(u,d,g);"_empty"==u||!b[d.p.id].viewPagerButtons?
a("#pData, #nData",l+"_2").hide():a("#pData, #nData",l+"_2").show();!0===b[d.p.id].processing&&(b[d.p.id].processing=!1,a("#sData",l+"_2").removeClass("ui-state-active"));!0===a("#"+g).data("disabled")&&(a(".confirm","#"+a.jgrid.jqID(q.themodal)).hide(),a("#"+g).data("disabled",!1));a(d).triggerHandler("jqGridAddEditBeforeShowForm",[a("#"+g),z]);x&&x.call(d,a("#"+g));a("#"+a.jgrid.jqID(q.themodal)).data("onClose",b[d.p.id].onClose);a.jgrid.viewModal("#"+a.jgrid.jqID(q.themodal),{gbox:"#gbox_"+a.jgrid.jqID(n),
jqm:c.jqModal,jqM:!1,overlay:c.overlay,modal:c.modal});I||a(".jqmOverlay").click(function(){if(!f())return false;a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(n),jqm:c.jqModal,onClose:b[d.p.id].onClose});return false});a(d).triggerHandler("jqGridAddEditAfterShowForm",[a("#"+g),z]);A&&A.call(d,a("#"+g))}else{var G=isNaN(c.dataheight)?c.dataheight:c.dataheight+"px",k=isNaN(c.datawidth)?c.datawidth:c.datawidth+"px",G=a("<form name='FormPost' id='"+g+"' class='FormGrid' onSubmit='return false;' style='width:"+
k+";overflow:auto;position:relative;height:"+G+";'></form>").data("disabled",!1),D=a("<table id='"+o+"' class='EditTable' cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),k=a(d).triggerHandler("jqGridAddEditBeforeInitData",[a("#"+g),z]);void 0===k&&(k=!0);k&&v&&(k=v.call(d,a("#"+g)));if(!1===k)return;i();a(d.p.colModel).each(function(){var a=this.formoptions;y=Math.max(y,a?a.colpos||0:0);H=Math.max(H,a?a.rowpos||0:0)});a(G).append(D);v=a("<tr id='FormError' style='display:none'><td class='ui-state-error' colspan='"+
2*y+"'></td></tr>");v[0].rp=0;a(D).append(v);v=a("<tr style='display:none' class='tinfo'><td class='topinfo' colspan='"+2*y+"'>"+b[d.p.id].topinfo+"</td></tr>");v[0].rp=0;a(D).append(v);var k=(v="rtl"==d.p.direction?!0:!1)?"nData":"pData",E=v?"pData":"nData";h(u,d,D,y);var k="<a href='javascript:void(0)' id='"+k+"' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'></span></a>",E="<a href='javascript:void(0)' id='"+E+"' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'></span></a>",
J="<a href='javascript:void(0)' id='sData' class='fm-button ui-state-default ui-corner-all'>"+c.bSubmit+"</a>",K="<a href='javascript:void(0)' id='cData' class='fm-button ui-state-default ui-corner-all'>"+c.bCancel+"</a>",o="<table border='0' cellspacing='0' cellpadding='0' class='EditTable' id='"+o+"_2'><tbody><tr><td colspan='2'><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr id='Act_Buttons'><td class='navButton'>"+(v?E+k:k+E)+"</td><td class='EditButton'>"+J+K+"</td></tr>"+("<tr style='display:none' class='binfo'><td class='bottominfo' colspan='2'>"+
b[d.p.id].bottominfo+"</td></tr>"),o=o+"</tbody></table>";if(0<H){var L=[];a.each(a(D)[0].rows,function(a,c){L[a]=c});L.sort(function(a,c){return a.rp>c.rp?1:a.rp<c.rp?-1:0});a.each(L,function(c,d){a("tbody",D).append(d)})}c.gbox="#gbox_"+a.jgrid.jqID(n);var N=!1;!0===c.closeOnEscape&&(c.closeOnEscape=!1,N=!0);o=a("<div></div>").append(G).append(o);a.jgrid.createModal(q,o,c,"#gview_"+a.jgrid.jqID(d.p.id),a("#gbox_"+a.jgrid.jqID(d.p.id))[0]);v&&(a("#pData, #nData",l+"_2").css("float","right"),a(".EditButton",
l+"_2").css("text-align","left"));b[d.p.id].topinfo&&a(".tinfo",l).show();b[d.p.id].bottominfo&&a(".binfo",l+"_2").show();o=o=null;a("#"+a.jgrid.jqID(q.themodal)).keydown(function(e){var k=e.target;if(a("#"+g).data("disabled")===true)return false;if(b[d.p.id].savekey[0]===true&&e.which==b[d.p.id].savekey[1]&&k.tagName!="TEXTAREA"){a("#sData",l+"_2").trigger("click");return false}if(e.which===27){if(!f())return false;N&&a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:c.gbox,jqm:c.jqModal,onClose:b[d.p.id].onClose});
return false}if(b[d.p.id].navkeys[0]===true){if(a("#id_g",l).val()=="_empty")return true;if(e.which==b[d.p.id].navkeys[1]){a("#pData",l+"_2").trigger("click");return false}if(e.which==b[d.p.id].navkeys[2]){a("#nData",l+"_2").trigger("click");return false}}});c.checkOnUpdate&&(a("a.ui-jqdialog-titlebar-close span","#"+a.jgrid.jqID(q.themodal)).removeClass("jqmClose"),a("a.ui-jqdialog-titlebar-close","#"+a.jgrid.jqID(q.themodal)).unbind("click").click(function(){if(!f())return false;a.jgrid.hideModal("#"+
a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(n),jqm:c.jqModal,onClose:b[d.p.id].onClose});return false}));c.saveicon=a.extend([!0,"left","ui-icon-disk"],c.saveicon);c.closeicon=a.extend([!0,"left","ui-icon-close"],c.closeicon);!0===c.saveicon[0]&&a("#sData",l+"_2").addClass("right"==c.saveicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+c.saveicon[2]+"'></span>");!0===c.closeicon[0]&&a("#cData",l+"_2").addClass("right"==c.closeicon[1]?"fm-button-icon-right":
"fm-button-icon-left").append("<span class='ui-icon "+c.closeicon[2]+"'></span>");if(b[d.p.id].checkOnSubmit||b[d.p.id].checkOnUpdate)J="<a href='javascript:void(0)' id='sNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+c.bYes+"</a>",E="<a href='javascript:void(0)' id='nNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+c.bNo+"</a>",K="<a href='javascript:void(0)' id='cNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+
c.bExit+"</a>",o=c.zIndex||999,o++,a("<div class='ui-widget-overlay jqgrid-overlay confirm' style='z-index:"+o+";display:none;'>&#160;</div><div class='confirm ui-widget-content ui-jqconfirm' style='z-index:"+(o+1)+"'>"+c.saveData+"<br/><br/>"+J+E+K+"</div>").insertAfter("#"+g),a("#sNew","#"+a.jgrid.jqID(q.themodal)).click(function(){r();a("#"+g).data("disabled",false);a(".confirm","#"+a.jgrid.jqID(q.themodal)).hide();return false}),a("#nNew","#"+a.jgrid.jqID(q.themodal)).click(function(){a(".confirm",
"#"+a.jgrid.jqID(q.themodal)).hide();a("#"+g).data("disabled",false);setTimeout(function(){a(":input","#"+g)[0].focus()},0);return false}),a("#cNew","#"+a.jgrid.jqID(q.themodal)).click(function(){a(".confirm","#"+a.jgrid.jqID(q.themodal)).hide();a("#"+g).data("disabled",false);a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(n),jqm:c.jqModal,onClose:b[d.p.id].onClose});return false});a(d).triggerHandler("jqGridAddEditInitializeForm",[a("#"+g),z]);C&&C.call(d,a("#"+g));"_empty"==
u||!b[d.p.id].viewPagerButtons?a("#pData,#nData",l+"_2").hide():a("#pData,#nData",l+"_2").show();a(d).triggerHandler("jqGridAddEditBeforeShowForm",[a("#"+g),z]);x&&x.call(d,a("#"+g));a("#"+a.jgrid.jqID(q.themodal)).data("onClose",b[d.p.id].onClose);a.jgrid.viewModal("#"+a.jgrid.jqID(q.themodal),{gbox:"#gbox_"+a.jgrid.jqID(n),jqm:c.jqModal,overlay:c.overlay,modal:c.modal});I||a(".jqmOverlay").click(function(){if(!f())return false;a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(n),
jqm:c.jqModal,onClose:b[d.p.id].onClose});return false});a(d).triggerHandler("jqGridAddEditAfterShowForm",[a("#"+g),z]);A&&A.call(d,a("#"+g));a(".fm-button","#"+a.jgrid.jqID(q.themodal)).hover(function(){a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")});a("#sData",l+"_2").click(function(){j={};B={};a("#FormError",l).hide();e();if(j[d.p.id+"_id"]=="_empty")r();else if(c.checkOnSubmit===true){F=a.extend({},j,B);if(M=p(F,b[d.p.id]._savedData)){a("#"+g).data("disabled",
true);a(".confirm","#"+a.jgrid.jqID(q.themodal)).show()}else r()}else r();return false});a("#cData",l+"_2").click(function(){if(!f())return false;a.jgrid.hideModal("#"+a.jgrid.jqID(q.themodal),{gb:"#gbox_"+a.jgrid.jqID(n),jqm:c.jqModal,onClose:b[d.p.id].onClose});return false});a("#nData",l+"_2").click(function(){if(!f())return false;a("#FormError",l).hide();var b=w();b[0]=parseInt(b[0],10);if(b[0]!=-1&&b[1][b[0]+1]){a(d).triggerHandler("jqGridAddEditClickPgButtons",["next",a("#"+g),b[1][b[0]]]);
var e;if(a.isFunction(c.onclickPgButtons)){e=c.onclickPgButtons.call(d,"next",a("#"+g),b[1][b[0]]);if(e!==void 0&&e===false)return false}if(a("#"+a.jgrid.jqID(b[1][b[0]+1])).hasClass("ui-state-disabled"))return false;s(b[1][b[0]+1],d,g);a(d).jqGrid("setSelection",b[1][b[0]+1]);a(d).triggerHandler("jqGridAddEditAfterClickPgButtons",["next",a("#"+g),b[1][b[0]]]);a.isFunction(c.afterclickPgButtons)&&c.afterclickPgButtons.call(d,"next",a("#"+g),b[1][b[0]+1]);m(b[0]+1,b)}return false});a("#pData",l+"_2").click(function(){if(!f())return false;
a("#FormError",l).hide();var b=w();if(b[0]!=-1&&b[1][b[0]-1]){a(d).triggerHandler("jqGridAddEditClickPgButtons",["prev",a("#"+g),b[1][b[0]]]);var e;if(a.isFunction(c.onclickPgButtons)){e=c.onclickPgButtons.call(d,"prev",a("#"+g),b[1][b[0]]);if(e!==void 0&&e===false)return false}if(a("#"+a.jgrid.jqID(b[1][b[0]-1])).hasClass("ui-state-disabled"))return false;s(b[1][b[0]-1],d,g);a(d).jqGrid("setSelection",b[1][b[0]-1]);a(d).triggerHandler("jqGridAddEditAfterClickPgButtons",["prev",a("#"+g),b[1][b[0]]]);
a.isFunction(c.afterclickPgButtons)&&c.afterclickPgButtons.call(d,"prev",a("#"+g),b[1][b[0]-1]);m(b[0]-1,b)}return false})}x=w();m(x[0],x)}})},viewGridRow:function(u,c){c=a.extend(!0,{top:0,left:0,width:0,datawidth:"auto",height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,jqModal:!0,closeOnEscape:!1,labelswidth:"30%",closeicon:[],navkeys:[!1,38,40],onClose:null,beforeShowForm:null,beforeInitData:null,viewPagerButtons:!0},a.jgrid.view,c||{});b[a(this)[0].p.id]=c;return this.each(function(){function e(){(!0===
b[p.p.id].closeOnEscape||!0===b[p.p.id].navkeys[0])&&setTimeout(function(){a(".ui-jqdialog-titlebar-close","#"+a.jgrid.jqID(n.modalhead)).focus()},0)}function h(b,d,e,f){var g,i,h,l=0,q,n,p=[],o=!1,m,u="<td class='CaptionTD form-view-label ui-widget-content' width='"+c.labelswidth+"'>&#160;</td><td class='DataTD form-view-data ui-helper-reset ui-widget-content'>&#160;</td>",r="",v=["integer","number","currency"],s=0,t=0,x,w,A;for(m=1;m<=f;m++)r+=1==m?u:"<td class='CaptionTD form-view-label ui-widget-content'>&#160;</td><td class='DataTD form-view-data ui-widget-content'>&#160;</td>";
a(d.p.colModel).each(function(){i=this.editrules&&!0===this.editrules.edithidden?!1:!0===this.hidden?!0:!1;!i&&"right"===this.align&&(this.formatter&&-1!==a.inArray(this.formatter,v)?s=Math.max(s,parseInt(this.width,10)):t=Math.max(t,parseInt(this.width,10)))});x=0!==s?s:0!==t?t:0;o=a(d).jqGrid("getInd",b);a(d.p.colModel).each(function(b){g=this.name;w=!1;n=(i=this.editrules&&!0===this.editrules.edithidden?!1:!0===this.hidden?!0:!1)?"style='display:none'":"";A="boolean"!==typeof this.viewable?!0:
this.viewable;if("cb"!==g&&"subgrid"!==g&&"rn"!==g&&A){q=!1===o?"":g==d.p.ExpandColumn&&!0===d.p.treeGrid?a("td:eq("+b+")",d.rows[o]).text():a("td:eq("+b+")",d.rows[o]).html();w="right"===this.align&&0!==x?!0:!1;var c=a.extend({},{rowabove:!1,rowcontent:""},this.formoptions||{}),k=parseInt(c.rowpos,10)||l+1,m=parseInt(2*(parseInt(c.colpos,10)||1),10);if(c.rowabove){var u=a("<tr><td class='contentinfo' colspan='"+2*f+"'>"+c.rowcontent+"</td></tr>");a(e).append(u);u[0].rp=k}h=a(e).find("tr[rowpos="+
k+"]");0===h.length&&(h=a("<tr "+n+" rowpos='"+k+"'></tr>").addClass("FormData").attr("id","trv_"+g),a(h).append(r),a(e).append(h),h[0].rp=k);a("td:eq("+(m-2)+")",h[0]).html("<b>"+(void 0===c.label?d.p.colNames[b]:c.label)+"</b>");a("td:eq("+(m-1)+")",h[0]).append("<span>"+q+"</span>").attr("id","v_"+g);w&&a("td:eq("+(m-1)+") span",h[0]).css({"text-align":"right",width:x+"px"});p[l]=b;l++}});0<l&&(b=a("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(2*f-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='id' value='"+
b+"'/></td></tr>"),b[0].rp=l+99,a(e).append(b));return p}function s(b,c){var d,e,f=0,g,i;if(i=a(c).jqGrid("getInd",b,!0))a("td",i).each(function(b){d=c.p.colModel[b].name;e=c.p.colModel[b].editrules&&!0===c.p.colModel[b].editrules.edithidden?!1:!0===c.p.colModel[b].hidden?!0:!1;"cb"!==d&&"subgrid"!==d&&"rn"!==d&&(g=d==c.p.ExpandColumn&&!0===c.p.treeGrid?a(this).text():a(this).html(),a.extend({},c.p.colModel[b].editoptions||{}),d=a.jgrid.jqID("v_"+d),a("#"+d+" span","#"+m).html(g),e&&a("#"+d,"#"+m).parents("tr:first").hide(),
f++)}),0<f&&a("#id_g","#"+m).val(b)}function t(b,c){var d=c[1].length-1;0===b?a("#pData","#"+m+"_2").addClass("ui-state-disabled"):void 0!==c[1][b-1]&&a("#"+a.jgrid.jqID(c[1][b-1])).hasClass("ui-state-disabled")?a("#pData",m+"_2").addClass("ui-state-disabled"):a("#pData","#"+m+"_2").removeClass("ui-state-disabled");b==d?a("#nData","#"+m+"_2").addClass("ui-state-disabled"):void 0!==c[1][b+1]&&a("#"+a.jgrid.jqID(c[1][b+1])).hasClass("ui-state-disabled")?a("#nData",m+"_2").addClass("ui-state-disabled"):
a("#nData","#"+m+"_2").removeClass("ui-state-disabled")}function r(){var b=a(p).jqGrid("getDataIDs"),c=a("#id_g","#"+m).val();return[a.inArray(c,b),b]}var p=this;if(p.grid&&u){var f=p.p.id,i="ViewGrid_"+a.jgrid.jqID(f),m="ViewTbl_"+a.jgrid.jqID(f),w="ViewGrid_"+f,d="ViewTbl_"+f,n={themodal:"viewmod"+f,modalhead:"viewhd"+f,modalcontent:"viewcnt"+f,scrollelm:i},g=a.isFunction(b[p.p.id].beforeInitData)?b[p.p.id].beforeInitData:!1,o=!0,l=1,q=0;if(void 0!==a("#"+a.jgrid.jqID(n.themodal))[0]){g&&(o=g.call(p,
a("#"+i)),void 0===o&&(o=!0));if(!1===o)return;a(".ui-jqdialog-title","#"+a.jgrid.jqID(n.modalhead)).html(c.caption);a("#FormError","#"+m).hide();s(u,p);a.isFunction(b[p.p.id].beforeShowForm)&&b[p.p.id].beforeShowForm.call(p,a("#"+i));a.jgrid.viewModal("#"+a.jgrid.jqID(n.themodal),{gbox:"#gbox_"+a.jgrid.jqID(f),jqm:c.jqModal,jqM:!1,overlay:c.overlay,modal:c.modal});e()}else{var x=isNaN(c.dataheight)?c.dataheight:c.dataheight+"px",A=isNaN(c.datawidth)?c.datawidth:c.datawidth+"px",w=a("<form name='FormPost' id='"+
w+"' class='FormGrid' style='width:"+A+";overflow:auto;position:relative;height:"+x+";'></form>"),v=a("<table id='"+d+"' class='EditTable' cellspacing='1' cellpadding='2' border='0' style='table-layout:fixed'><tbody></tbody></table>");g&&(o=g.call(p,a("#"+i)),void 0===o&&(o=!0));if(!1===o)return;a(p.p.colModel).each(function(){var a=this.formoptions;l=Math.max(l,a?a.colpos||0:0);q=Math.max(q,a?a.rowpos||0:0)});a(w).append(v);h(u,p,v,l);d="rtl"==p.p.direction?!0:!1;g="<a href='javascript:void(0)' id='"+
(d?"nData":"pData")+"' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'></span></a>";o="<a href='javascript:void(0)' id='"+(d?"pData":"nData")+"' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'></span></a>";x="<a href='javascript:void(0)' id='cData' class='fm-button ui-state-default ui-corner-all'>"+c.bClose+"</a>";if(0<q){var C=[];a.each(a(v)[0].rows,function(a,b){C[a]=b});C.sort(function(a,b){return a.rp>b.rp?
1:a.rp<b.rp?-1:0});a.each(C,function(b,c){a("tbody",v).append(c)})}c.gbox="#gbox_"+a.jgrid.jqID(f);w=a("<div></div>").append(w).append("<table border='0' class='EditTable' id='"+m+"_2'><tbody><tr id='Act_Buttons'><td class='navButton' width='"+c.labelswidth+"'>"+(d?o+g:g+o)+"</td><td class='EditButton'>"+x+"</td></tr></tbody></table>");a.jgrid.createModal(n,w,c,"#gview_"+a.jgrid.jqID(p.p.id),a("#gview_"+a.jgrid.jqID(p.p.id))[0]);d&&(a("#pData, #nData","#"+m+"_2").css("float","right"),a(".EditButton",
"#"+m+"_2").css("text-align","left"));c.viewPagerButtons||a("#pData, #nData","#"+m+"_2").hide();w=null;a("#"+n.themodal).keydown(function(d){if(d.which===27){b[p.p.id].closeOnEscape&&a.jgrid.hideModal("#"+a.jgrid.jqID(n.themodal),{gb:c.gbox,jqm:c.jqModal,onClose:c.onClose});return false}if(c.navkeys[0]===true){if(d.which===c.navkeys[1]){a("#pData","#"+m+"_2").trigger("click");return false}if(d.which===c.navkeys[2]){a("#nData","#"+m+"_2").trigger("click");return false}}});c.closeicon=a.extend([!0,
"left","ui-icon-close"],c.closeicon);!0===c.closeicon[0]&&a("#cData","#"+m+"_2").addClass("right"==c.closeicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+c.closeicon[2]+"'></span>");a.isFunction(c.beforeShowForm)&&c.beforeShowForm.call(p,a("#"+i));a.jgrid.viewModal("#"+a.jgrid.jqID(n.themodal),{gbox:"#gbox_"+a.jgrid.jqID(f),jqm:c.jqModal,overlay:c.overlay,modal:c.modal});a(".fm-button:not(.ui-state-disabled)","#"+m+"_2").hover(function(){a(this).addClass("ui-state-hover")},
function(){a(this).removeClass("ui-state-hover")});e();a("#cData","#"+m+"_2").click(function(){a.jgrid.hideModal("#"+a.jgrid.jqID(n.themodal),{gb:"#gbox_"+a.jgrid.jqID(f),jqm:c.jqModal,onClose:c.onClose});return false});a("#nData","#"+m+"_2").click(function(){a("#FormError","#"+m).hide();var b=r();b[0]=parseInt(b[0],10);if(b[0]!=-1&&b[1][b[0]+1]){a.isFunction(c.onclickPgButtons)&&c.onclickPgButtons.call(p,"next",a("#"+i),b[1][b[0]]);s(b[1][b[0]+1],p);a(p).jqGrid("setSelection",b[1][b[0]+1]);a.isFunction(c.afterclickPgButtons)&&
c.afterclickPgButtons.call(p,"next",a("#"+i),b[1][b[0]+1]);t(b[0]+1,b)}e();return false});a("#pData","#"+m+"_2").click(function(){a("#FormError","#"+m).hide();var b=r();if(b[0]!=-1&&b[1][b[0]-1]){a.isFunction(c.onclickPgButtons)&&c.onclickPgButtons.call(p,"prev",a("#"+i),b[1][b[0]]);s(b[1][b[0]-1],p);a(p).jqGrid("setSelection",b[1][b[0]-1]);a.isFunction(c.afterclickPgButtons)&&c.afterclickPgButtons.call(p,"prev",a("#"+i),b[1][b[0]-1]);t(b[0]-1,b)}e();return false})}w=r();t(w[0],w)}})},delGridRow:function(u,
c){c=a.extend(!0,{top:0,left:0,width:240,height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,url:"",mtype:"POST",reloadAfterSubmit:!0,beforeShowForm:null,beforeInitData:null,afterShowForm:null,beforeSubmit:null,onclickSubmit:null,afterSubmit:null,jqModal:!0,closeOnEscape:!1,delData:{},delicon:[],cancelicon:[],onClose:null,ajaxDelOptions:{},processing:!1,serializeDelData:null,useDataProxy:!1},a.jgrid.del,c||{});b[a(this)[0].p.id]=c;return this.each(function(){var e=this;if(e.grid&&
u){var h=a.isFunction(b[e.p.id].beforeShowForm),s=a.isFunction(b[e.p.id].afterShowForm),t=a.isFunction(b[e.p.id].beforeInitData)?b[e.p.id].beforeInitData:!1,r=e.p.id,p={},f=!0,i="DelTbl_"+a.jgrid.jqID(r),m,w,d,n,g="DelTbl_"+r,o={themodal:"delmod"+r,modalhead:"delhd"+r,modalcontent:"delcnt"+r,scrollelm:i};a.isArray(u)&&(u=u.join());if(void 0!==a("#"+a.jgrid.jqID(o.themodal))[0]){t&&(f=t.call(e,a("#"+i)),void 0===f&&(f=!0));if(!1===f)return;a("#DelData>td","#"+i).text(u);a("#DelError","#"+i).hide();
!0===b[e.p.id].processing&&(b[e.p.id].processing=!1,a("#dData","#"+i).removeClass("ui-state-active"));h&&b[e.p.id].beforeShowForm.call(e,a("#"+i));a.jgrid.viewModal("#"+a.jgrid.jqID(o.themodal),{gbox:"#gbox_"+a.jgrid.jqID(r),jqm:b[e.p.id].jqModal,jqM:!1,overlay:b[e.p.id].overlay,modal:b[e.p.id].modal})}else{var l=isNaN(b[e.p.id].dataheight)?b[e.p.id].dataheight:b[e.p.id].dataheight+"px",q=isNaN(c.datawidth)?c.datawidth:c.datawidth+"px",g="<div id='"+g+"' class='formdata' style='width:"+q+";overflow:auto;position:relative;height:"+
l+";'><table class='DelTable'><tbody><tr id='DelError' style='display:none'><td class='ui-state-error'></td></tr>"+("<tr id='DelData' style='display:none'><td >"+u+"</td></tr>"),g=g+('<tr><td class="delmsg" style="white-space:pre;">'+b[e.p.id].msg+"</td></tr><tr><td >&#160;</td></tr>"),g=g+"</tbody></table></div>"+("<table cellspacing='0' cellpadding='0' border='0' class='EditTable' id='"+i+"_2'><tbody><tr><td><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr><td class='DelButton EditButton'>"+
("<a href='javascript:void(0)' id='dData' class='fm-button ui-state-default ui-corner-all'>"+c.bSubmit+"</a>")+"&#160;"+("<a href='javascript:void(0)' id='eData' class='fm-button ui-state-default ui-corner-all'>"+c.bCancel+"</a>")+"</td></tr></tbody></table>");c.gbox="#gbox_"+a.jgrid.jqID(r);a.jgrid.createModal(o,g,c,"#gview_"+a.jgrid.jqID(e.p.id),a("#gview_"+a.jgrid.jqID(e.p.id))[0]);t&&(f=t.call(e,a("#"+i)),void 0===f&&(f=!0));if(!1===f)return;a(".fm-button","#"+i+"_2").hover(function(){a(this).addClass("ui-state-hover")},
function(){a(this).removeClass("ui-state-hover")});c.delicon=a.extend([!0,"left","ui-icon-scissors"],b[e.p.id].delicon);c.cancelicon=a.extend([!0,"left","ui-icon-cancel"],b[e.p.id].cancelicon);!0===c.delicon[0]&&a("#dData","#"+i+"_2").addClass("right"==c.delicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+c.delicon[2]+"'></span>");!0===c.cancelicon[0]&&a("#eData","#"+i+"_2").addClass("right"==c.cancelicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+
c.cancelicon[2]+"'></span>");a("#dData","#"+i+"_2").click(function(){var f=[true,""],g,h=a("#DelData>td","#"+i).text();p={};a.isFunction(b[e.p.id].onclickSubmit)&&(p=b[e.p.id].onclickSubmit.call(e,b[e.p.id],h)||{});a.isFunction(b[e.p.id].beforeSubmit)&&(f=b[e.p.id].beforeSubmit.call(e,h));if(f[0]&&!b[e.p.id].processing){b[e.p.id].processing=true;d=e.p.prmNames;m=a.extend({},b[e.p.id].delData,p);n=d.oper;m[n]=d.deloper;w=d.id;h=(""+h).split(",");if(!h.length)return false;for(g in h)h.hasOwnProperty(g)&&
(h[g]=a.jgrid.stripPref(e.p.idPrefix,h[g]));m[w]=h.join();a(this).addClass("ui-state-active");g=a.extend({url:b[e.p.id].url||a(e).jqGrid("getGridParam","editurl"),type:b[e.p.id].mtype,data:a.isFunction(b[e.p.id].serializeDelData)?b[e.p.id].serializeDelData.call(e,m):m,complete:function(d,g){var l;if(g!="success"){f[0]=false;f[1]=a.isFunction(b[e.p.id].errorTextFormat)?b[e.p.id].errorTextFormat.call(e,d):g+" Status: '"+d.statusText+"'. Error code: "+d.status}else a.isFunction(b[e.p.id].afterSubmit)&&
(f=b[e.p.id].afterSubmit.call(e,d,m));if(f[0]===false){a("#DelError>td","#"+i).html(f[1]);a("#DelError","#"+i).show()}else{if(b[e.p.id].reloadAfterSubmit&&e.p.datatype!="local")a(e).trigger("reloadGrid");else{if(e.p.treeGrid===true)try{a(e).jqGrid("delTreeNode",e.p.idPrefix+h[0])}catch(q){}else for(l=0;l<h.length;l++)a(e).jqGrid("delRowData",e.p.idPrefix+h[l]);e.p.selrow=null;e.p.selarrrow=[]}a.isFunction(b[e.p.id].afterComplete)&&setTimeout(function(){b[e.p.id].afterComplete.call(e,d,h)},500)}b[e.p.id].processing=
false;a("#dData","#"+i+"_2").removeClass("ui-state-active");f[0]&&a.jgrid.hideModal("#"+a.jgrid.jqID(o.themodal),{gb:"#gbox_"+a.jgrid.jqID(r),jqm:c.jqModal,onClose:b[e.p.id].onClose})}},a.jgrid.ajaxOptions,b[e.p.id].ajaxDelOptions);if(!g.url&&!b[e.p.id].useDataProxy)if(a.isFunction(e.p.dataProxy))b[e.p.id].useDataProxy=true;else{f[0]=false;f[1]=f[1]+(" "+a.jgrid.errors.nourl)}if(f[0])if(b[e.p.id].useDataProxy){g=e.p.dataProxy.call(e,g,"del_"+e.p.id);g===void 0&&(g=[true,""]);if(g[0]===false){f[0]=
false;f[1]=g[1]||"Error deleting the selected row!"}else a.jgrid.hideModal("#"+a.jgrid.jqID(o.themodal),{gb:"#gbox_"+a.jgrid.jqID(r),jqm:c.jqModal,onClose:b[e.p.id].onClose})}else a.ajax(g)}if(f[0]===false){a("#DelError>td","#"+i).html(f[1]);a("#DelError","#"+i).show()}return false});a("#eData","#"+i+"_2").click(function(){a.jgrid.hideModal("#"+a.jgrid.jqID(o.themodal),{gb:"#gbox_"+a.jgrid.jqID(r),jqm:b[e.p.id].jqModal,onClose:b[e.p.id].onClose});return false});h&&b[e.p.id].beforeShowForm.call(e,
a("#"+i));a.jgrid.viewModal("#"+a.jgrid.jqID(o.themodal),{gbox:"#gbox_"+a.jgrid.jqID(r),jqm:b[e.p.id].jqModal,overlay:b[e.p.id].overlay,modal:b[e.p.id].modal})}s&&b[e.p.id].afterShowForm.call(e,a("#"+i));!0===b[e.p.id].closeOnEscape&&setTimeout(function(){a(".ui-jqdialog-titlebar-close","#"+a.jgrid.jqID(o.modalhead)).focus()},0)}})},navGrid:function(b,c,e,h,s,t,r){c=a.extend({edit:!0,editicon:"ui-icon-pencil",add:!0,addicon:"ui-icon-plus",del:!0,delicon:"ui-icon-trash",search:!0,searchicon:"ui-icon-search",
refresh:!0,refreshicon:"ui-icon-refresh",refreshstate:"firstpage",view:!1,viewicon:"ui-icon-document",position:"left",closeOnEscape:!0,beforeRefresh:null,afterRefresh:null,cloneToTop:!1,alertwidth:200,alertheight:"auto",alerttop:null,alertleft:null,alertzIndex:null},a.jgrid.nav,c||{});return this.each(function(){if(!this.nav){var p={themodal:"alertmod_"+this.p.id,modalhead:"alerthd_"+this.p.id,modalcontent:"alertcnt_"+this.p.id},f=this,i;if(f.grid&&"string"===typeof b){void 0===a("#"+p.themodal)[0]&&
(!c.alerttop&&!c.alertleft&&(void 0!==window.innerWidth?(c.alertleft=window.innerWidth,c.alerttop=window.innerHeight):void 0!==document.documentElement&&void 0!==document.documentElement.clientWidth&&0!==document.documentElement.clientWidth?(c.alertleft=document.documentElement.clientWidth,c.alerttop=document.documentElement.clientHeight):(c.alertleft=1024,c.alerttop=768),c.alertleft=c.alertleft/2-parseInt(c.alertwidth,10)/2,c.alerttop=c.alerttop/2-25),a.jgrid.createModal(p,"<div>"+c.alerttext+"</div><span tabindex='0'><span tabindex='-1' id='jqg_alrt'></span></span>",
{gbox:"#gbox_"+a.jgrid.jqID(f.p.id),jqModal:!0,drag:!0,resize:!0,caption:c.alertcap,top:c.alerttop,left:c.alertleft,width:c.alertwidth,height:c.alertheight,closeOnEscape:c.closeOnEscape,zIndex:c.alertzIndex},"#gview_"+a.jgrid.jqID(f.p.id),a("#gbox_"+a.jgrid.jqID(f.p.id))[0],!0));var m=1,w,d=function(){a(this).hasClass("ui-state-disabled")||a(this).addClass("ui-state-hover")},n=function(){a(this).removeClass("ui-state-hover")};c.cloneToTop&&f.p.toppager&&(m=2);for(w=0;w<m;w++){var g=a("<table cellspacing='0' cellpadding='0' border='0' class='ui-pg-table navtable' style='float:left;table-layout:auto;'><tbody><tr></tr></tbody></table>"),
o,l;0===w?(o=b,l=f.p.id,o==f.p.toppager&&(l+="_top",m=1)):(o=f.p.toppager,l=f.p.id+"_top");"rtl"==f.p.direction&&a(g).attr("dir","rtl").css("float","right");c.add&&(h=h||{},i=a("<td class='ui-pg-button ui-corner-all'></td>"),a(i).append("<div class='ui-pg-div'><span class='ui-icon "+c.addicon+"'></span>"+c.addtext+"</div>"),a("tr",g).append(i),a(i,g).attr({title:c.addtitle||"",id:h.id||"add_"+l}).click(function(){a(this).hasClass("ui-state-disabled")||(a.isFunction(c.addfunc)?c.addfunc.call(f):a(f).jqGrid("editGridRow",
"new",h));return false}).hover(d,n),i=null);c.edit&&(i=a("<td class='ui-pg-button ui-corner-all'></td>"),e=e||{},a(i).append("<div class='ui-pg-div'><span class='ui-icon "+c.editicon+"'></span>"+c.edittext+"</div>"),a("tr",g).append(i),a(i,g).attr({title:c.edittitle||"",id:e.id||"edit_"+l}).click(function(){if(!a(this).hasClass("ui-state-disabled")){var b=f.p.selrow;if(b)a.isFunction(c.editfunc)?c.editfunc.call(f,b):a(f).jqGrid("editGridRow",b,e);else{a.jgrid.viewModal("#"+p.themodal,{gbox:"#gbox_"+
a.jgrid.jqID(f.p.id),jqm:true});a("#jqg_alrt").focus()}}return false}).hover(d,n),i=null);c.view&&(i=a("<td class='ui-pg-button ui-corner-all'></td>"),r=r||{},a(i).append("<div class='ui-pg-div'><span class='ui-icon "+c.viewicon+"'></span>"+c.viewtext+"</div>"),a("tr",g).append(i),a(i,g).attr({title:c.viewtitle||"",id:r.id||"view_"+l}).click(function(){if(!a(this).hasClass("ui-state-disabled")){var b=f.p.selrow;if(b)a.isFunction(c.viewfunc)?c.viewfunc.call(f,b):a(f).jqGrid("viewGridRow",b,r);else{a.jgrid.viewModal("#"+
p.themodal,{gbox:"#gbox_"+a.jgrid.jqID(f.p.id),jqm:true});a("#jqg_alrt").focus()}}return false}).hover(d,n),i=null);c.del&&(i=a("<td class='ui-pg-button ui-corner-all'></td>"),s=s||{},a(i).append("<div class='ui-pg-div'><span class='ui-icon "+c.delicon+"'></span>"+c.deltext+"</div>"),a("tr",g).append(i),a(i,g).attr({title:c.deltitle||"",id:s.id||"del_"+l}).click(function(){if(!a(this).hasClass("ui-state-disabled")){var b;if(f.p.multiselect){b=f.p.selarrrow;b.length===0&&(b=null)}else b=f.p.selrow;
if(b)a.isFunction(c.delfunc)?c.delfunc.call(f,b):a(f).jqGrid("delGridRow",b,s);else{a.jgrid.viewModal("#"+p.themodal,{gbox:"#gbox_"+a.jgrid.jqID(f.p.id),jqm:true});a("#jqg_alrt").focus()}}return false}).hover(d,n),i=null);(c.add||c.edit||c.del||c.view)&&a("tr",g).append("<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'></span></td>");c.search&&(i=a("<td class='ui-pg-button ui-corner-all'></td>"),t=t||{},a(i).append("<div class='ui-pg-div'><span class='ui-icon "+
c.searchicon+"'></span>"+c.searchtext+"</div>"),a("tr",g).append(i),a(i,g).attr({title:c.searchtitle||"",id:t.id||"search_"+l}).click(function(){a(this).hasClass("ui-state-disabled")||(a.isFunction(c.searchfunc)?c.searchfunc.call(f,t):a(f).jqGrid("searchGrid",t));return false}).hover(d,n),t.showOnLoad&&!0===t.showOnLoad&&a(i,g).click(),i=null);c.refresh&&(i=a("<td class='ui-pg-button ui-corner-all'></td>"),a(i).append("<div class='ui-pg-div'><span class='ui-icon "+c.refreshicon+"'></span>"+c.refreshtext+
"</div>"),a("tr",g).append(i),a(i,g).attr({title:c.refreshtitle||"",id:"refresh_"+l}).click(function(){if(!a(this).hasClass("ui-state-disabled")){a.isFunction(c.beforeRefresh)&&c.beforeRefresh.call(f);f.p.search=false;try{var b=f.p.id;f.p.postData.filters="";a("#fbox_"+a.jgrid.jqID(b)).jqFilter("resetFilter");a.isFunction(f.clearToolbar)&&f.clearToolbar.call(f,false)}catch(d){}switch(c.refreshstate){case "firstpage":a(f).trigger("reloadGrid",[{page:1}]);break;case "current":a(f).trigger("reloadGrid",
[{current:true}])}a.isFunction(c.afterRefresh)&&c.afterRefresh.call(f)}return false}).hover(d,n),i=null);i=a(".ui-jqgrid").css("font-size")||"11px";a("body").append("<div id='testpg2' class='ui-jqgrid ui-widget ui-widget-content' style='font-size:"+i+";visibility:hidden;' ></div>");i=a(g).clone().appendTo("#testpg2").width();a("#testpg2").remove();a(o+"_"+c.position,o).append(g);f.p._nvtd&&(i>f.p._nvtd[0]&&(a(o+"_"+c.position,o).width(i),f.p._nvtd[0]=i),f.p._nvtd[1]=i);g=i=i=null;this.nav=!0}}}})},
navButtonAdd:function(b,c){c=a.extend({caption:"newButton",title:"",buttonicon:"ui-icon-newwin",onClickButton:null,position:"last",cursor:"pointer"},c||{});return this.each(function(){if(this.grid){"string"===typeof b&&0!==b.indexOf("#")&&(b="#"+a.jgrid.jqID(b));var e=a(".navtable",b)[0],h=this;if(e&&!(c.id&&void 0!==a("#"+a.jgrid.jqID(c.id),e)[0])){var s=a("<td></td>");"NONE"==c.buttonicon.toString().toUpperCase()?a(s).addClass("ui-pg-button ui-corner-all").append("<div class='ui-pg-div'>"+c.caption+
"</div>"):a(s).addClass("ui-pg-button ui-corner-all").append("<div class='ui-pg-div'><span class='ui-icon "+c.buttonicon+"'></span>"+c.caption+"</div>");c.id&&a(s).attr("id",c.id);"first"==c.position?0===e.rows[0].cells.length?a("tr",e).append(s):a("tr td:eq(0)",e).before(s):a("tr",e).append(s);a(s,e).attr("title",c.title||"").click(function(b){a(this).hasClass("ui-state-disabled")||a.isFunction(c.onClickButton)&&c.onClickButton.call(h,b);return!1}).hover(function(){a(this).hasClass("ui-state-disabled")||
a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")})}}})},navSeparatorAdd:function(b,c){c=a.extend({sepclass:"ui-separator",sepcontent:"",position:"last"},c||{});return this.each(function(){if(this.grid){"string"===typeof b&&0!==b.indexOf("#")&&(b="#"+a.jgrid.jqID(b));var e=a(".navtable",b)[0];if(e){var h="<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='"+c.sepclass+"'></span>"+c.sepcontent+"</td>";"first"===c.position?0===e.rows[0].cells.length?
a("tr",e).append(h):a("tr td:eq(0)",e).before(h):a("tr",e).append(h)}}})},GridToForm:function(b,c){return this.each(function(){var e=this,h;if(e.grid){var s=a(e).jqGrid("getRowData",b);if(s)for(h in s)s.hasOwnProperty(h)&&(a("[name="+a.jgrid.jqID(h)+"]",c).is("input:radio")||a("[name="+a.jgrid.jqID(h)+"]",c).is("input:checkbox")?a("[name="+a.jgrid.jqID(h)+"]",c).each(function(){if(a(this).val()==s[h])a(this)[e.p.useProp?"prop":"attr"]("checked",!0);else a(this)[e.p.useProp?"prop":"attr"]("checked",
!1)}):a("[name="+a.jgrid.jqID(h)+"]",c).val(s[h]))}})},FormToGrid:function(b,c,e,h){return this.each(function(){if(this.grid){e||(e="set");h||(h="first");var s=a(c).serializeArray(),t={};a.each(s,function(a,b){t[b.name]=b.value});"add"==e?a(this).jqGrid("addRowData",b,t,h):"set"==e&&a(this).jqGrid("setRowData",b,t)}})}})})(jQuery);
(function(a){a.fn.jqFilter=function(d){if("string"===typeof d){var n=a.fn.jqFilter[d];if(!n)throw"jqFilter - No such method: "+d;var u=a.makeArray(arguments).slice(1);return n.apply(this,u)}var p=a.extend(!0,{filter:null,columns:[],onChange:null,afterRedraw:null,checkValues:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,sopt:null,ops:[{name:"eq",description:"equal",operator:"="},{name:"ne",description:"not equal",operator:"<>"},{name:"lt",description:"less",operator:"<"},{name:"le",description:"less or equal",
operator:"<="},{name:"gt",description:"greater",operator:">"},{name:"ge",description:"greater or equal",operator:">="},{name:"bw",description:"begins with",operator:"LIKE"},{name:"bn",description:"does not begin with",operator:"NOT LIKE"},{name:"in",description:"in",operator:"IN"},{name:"ni",description:"not in",operator:"NOT IN"},{name:"ew",description:"ends with",operator:"LIKE"},{name:"en",description:"does not end with",operator:"NOT LIKE"},{name:"cn",description:"contains",operator:"LIKE"},{name:"nc",
description:"does not contain",operator:"NOT LIKE"},{name:"nu",description:"is null",operator:"IS NULL"},{name:"nn",description:"is not null",operator:"IS NOT NULL"}],numopts:"eq,ne,lt,le,gt,ge,nu,nn,in,ni".split(","),stropts:"eq,ne,bw,bn,ew,en,cn,nc,nu,nn,in,ni".split(","),strarr:["text","string","blob"],_gridsopt:[],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,direction:"ltr"},a.jgrid.filter,d||{});return this.each(function(){if(!this.filter){this.p=p;if(null===
this.p.filter||void 0===this.p.filter)this.p.filter={groupOp:this.p.groupOps[0].op,rules:[],groups:[]};var d,n=this.p.columns.length,f,t=/msie/i.test(navigator.userAgent)&&!window.opera;if(this.p._gridsopt.length)for(d=0;d<this.p._gridsopt.length;d++)this.p.ops[d].description=this.p._gridsopt[d];this.p.initFilter=a.extend(!0,{},this.p.filter);if(n){for(d=0;d<n;d++)if(f=this.p.columns[d],f.stype?f.inputtype=f.stype:f.inputtype||(f.inputtype="text"),f.sorttype?f.searchtype=f.sorttype:f.searchtype||
(f.searchtype="string"),void 0===f.hidden&&(f.hidden=!1),f.label||(f.label=f.name),f.index&&(f.name=f.index),f.hasOwnProperty("searchoptions")||(f.searchoptions={}),!f.hasOwnProperty("searchrules"))f.searchrules={};this.p.showQuery&&a(this).append("<table class='queryresult ui-widget ui-widget-content' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var r=function(g,k){var b=[!0,""];if(a.isFunction(k.searchrules))b=
k.searchrules(g,k);else if(a.jgrid&&a.jgrid.checkValues)try{b=a.jgrid.checkValues(g,-1,null,k.searchrules,k.label)}catch(c){}b&&b.length&&!1===b[0]&&(p.error=!b[0],p.errmsg=b[1])};this.onchange=function(){this.p.error=!1;this.p.errmsg="";return a.isFunction(this.p.onChange)?this.p.onChange.call(this,this.p):!1};this.reDraw=function(){a("table.group:first",this).remove();var g=this.createTableForGroup(p.filter,null);a(this).append(g);a.isFunction(this.p.afterRedraw)&&this.p.afterRedraw.call(this,this.p)};
this.createTableForGroup=function(g,k){var b=this,c,e=a("<table class='group ui-widget ui-widget-content' style='border:0px none;'><tbody></tbody></table>"),d="left";"rtl"==this.p.direction&&(d="right",e.attr("dir","rtl"));null===k&&e.append("<tr class='error' style='display:none;'><th colspan='5' class='ui-state-error' align='"+d+"'></th></tr>");var h=a("<tr></tr>");e.append(h);d=a("<th colspan='5' align='"+d+"'></th>");h.append(d);if(!0===this.p.ruleButtons){var i=a("<select class='opsel'></select>");
d.append(i);var h="",f;for(c=0;c<p.groupOps.length;c++)f=g.groupOp===b.p.groupOps[c].op?" selected='selected'":"",h+="<option value='"+b.p.groupOps[c].op+"'"+f+">"+b.p.groupOps[c].text+"</option>";i.append(h).bind("change",function(){g.groupOp=a(i).val();b.onchange()})}h="<span></span>";this.p.groupButton&&(h=a("<input type='button' value='+ {}' title='Add subgroup' class='add-group'/>"),h.bind("click",function(){if(g.groups===void 0)g.groups=[];g.groups.push({groupOp:p.groupOps[0].op,rules:[],groups:[]});
b.reDraw();b.onchange();return false}));d.append(h);if(!0===this.p.ruleButtons){var h=a("<input type='button' value='+' title='Add rule' class='add-rule ui-add'/>"),l;h.bind("click",function(){if(g.rules===void 0)g.rules=[];for(c=0;c<b.p.columns.length;c++){var e=b.p.columns[c].search===void 0?true:b.p.columns[c].search,d=b.p.columns[c].hidden===true;if(b.p.columns[c].searchoptions.searchhidden===true&&e||e&&!d){l=b.p.columns[c];break}}e=l.searchoptions.sopt?l.searchoptions.sopt:b.p.sopt?b.p.sopt:
a.inArray(l.searchtype,b.p.strarr)!==-1?b.p.stropts:b.p.numopts;g.rules.push({field:l.name,op:e[0],data:""});b.reDraw();return false});d.append(h)}null!==k&&(h=a("<input type='button' value='-' title='Delete group' class='delete-group'/>"),d.append(h),h.bind("click",function(){for(c=0;c<k.groups.length;c++)if(k.groups[c]===g){k.groups.splice(c,1);break}b.reDraw();b.onchange();return false}));if(void 0!==g.groups)for(c=0;c<g.groups.length;c++)d=a("<tr></tr>"),e.append(d),h=a("<td class='first'></td>"),
d.append(h),h=a("<td colspan='4'></td>"),h.append(this.createTableForGroup(g.groups[c],g)),d.append(h);void 0===g.groupOp&&(g.groupOp=b.p.groupOps[0].op);if(void 0!==g.rules)for(c=0;c<g.rules.length;c++)e.append(this.createTableRowForRule(g.rules[c],g));return e};this.createTableRowForRule=function(g,d){var b=this,c=a("<tr></tr>"),e,f,h,i,j="",l;c.append("<td class='first'></td>");var m=a("<td class='columns'></td>");c.append(m);var n=a("<select></select>"),o,q=[];m.append(n);n.bind("change",function(){g.field=
a(n).val();h=a(this).parents("tr:first");for(e=0;e<b.p.columns.length;e++)if(b.p.columns[e].name===g.field){i=b.p.columns[e];break}if(i){i.searchoptions.id=a.jgrid.randId();t&&"text"===i.inputtype&&!i.searchoptions.size&&(i.searchoptions.size=10);var c=a.jgrid.createEl(i.inputtype,i.searchoptions,"",!0,b.p.ajaxSelectOptions,!0);a(c).addClass("input-elm");f=i.searchoptions.sopt?i.searchoptions.sopt:b.p.sopt?b.p.sopt:-1!==a.inArray(i.searchtype,b.p.strarr)?b.p.stropts:b.p.numopts;var d="",k=0;q=[];
a.each(b.p.ops,function(){q.push(this.name)});for(e=0;e<f.length;e++)o=a.inArray(f[e],q),-1!==o&&(0===k&&(g.op=b.p.ops[o].name),d+="<option value='"+b.p.ops[o].name+"'>"+b.p.ops[o].description+"</option>",k++);a(".selectopts",h).empty().append(d);a(".selectopts",h)[0].selectedIndex=0;a.jgrid.msie&&9>a.jgrid.msiever()&&(d=parseInt(a("select.selectopts",h)[0].offsetWidth,10)+1,a(".selectopts",h).width(d),a(".selectopts",h).css("width","auto"));a(".data",h).empty().append(c);a.jgrid.bindEv(c,i.searchoptions,
b);a(".input-elm",h).bind("change",function(c){var e=a(this).hasClass("ui-autocomplete-input")?200:0;setTimeout(function(){var e=c.target;g.data=e.nodeName.toUpperCase()==="SPAN"&&i.searchoptions&&a.isFunction(i.searchoptions.custom_value)?i.searchoptions.custom_value(a(e).children(".customelement:first"),"get"):e.value;b.onchange()},e)});setTimeout(function(){g.data=a(c).val();b.onchange()},0)}});for(e=m=0;e<b.p.columns.length;e++){l=void 0===b.p.columns[e].search?!0:b.p.columns[e].search;var r=
!0===b.p.columns[e].hidden;if(!0===b.p.columns[e].searchoptions.searchhidden&&l||l&&!r)l="",g.field===b.p.columns[e].name&&(l=" selected='selected'",m=e),j+="<option value='"+b.p.columns[e].name+"'"+l+">"+b.p.columns[e].label+"</option>"}n.append(j);j=a("<td class='operators'></td>");c.append(j);i=p.columns[m];i.searchoptions.id=a.jgrid.randId();t&&"text"===i.inputtype&&!i.searchoptions.size&&(i.searchoptions.size=10);m=a.jgrid.createEl(i.inputtype,i.searchoptions,g.data,!0,b.p.ajaxSelectOptions,
!0);if("nu"==g.op||"nn"==g.op)a(m).attr("readonly","true"),a(m).attr("disabled","true");var s=a("<select class='selectopts'></select>");j.append(s);s.bind("change",function(){g.op=a(s).val();h=a(this).parents("tr:first");var c=a(".input-elm",h)[0];if(g.op==="nu"||g.op==="nn"){g.data="";c.value="";c.setAttribute("readonly","true");c.setAttribute("disabled","true")}else{c.removeAttribute("readonly");c.removeAttribute("disabled")}b.onchange()});f=i.searchoptions.sopt?i.searchoptions.sopt:b.p.sopt?b.p.sopt:
-1!==a.inArray(i.searchtype,b.p.strarr)?b.p.stropts:b.p.numopts;j="";a.each(b.p.ops,function(){q.push(this.name)});for(e=0;e<f.length;e++)o=a.inArray(f[e],q),-1!==o&&(l=g.op===b.p.ops[o].name?" selected='selected'":"",j+="<option value='"+b.p.ops[o].name+"'"+l+">"+b.p.ops[o].description+"</option>");s.append(j);j=a("<td class='data'></td>");c.append(j);j.append(m);a.jgrid.bindEv(m,i.searchoptions,b);a(m).addClass("input-elm").bind("change",function(){g.data=i.inputtype==="custom"?i.searchoptions.custom_value(a(this).children(".customelement:first"),
"get"):a(this).val();b.onchange()});j=a("<td></td>");c.append(j);!0===this.p.ruleButtons&&(m=a("<input type='button' value='-' title='Delete rule' class='delete-rule ui-del'/>"),j.append(m),m.bind("click",function(){for(e=0;e<d.rules.length;e++)if(d.rules[e]===g){d.rules.splice(e,1);break}b.reDraw();b.onchange();return false}));return c};this.getStringForGroup=function(a){var d="(",b;if(void 0!==a.groups)for(b=0;b<a.groups.length;b++){1<d.length&&(d+=" "+a.groupOp+" ");try{d+=this.getStringForGroup(a.groups[b])}catch(c){alert(c)}}if(void 0!==
a.rules)try{for(b=0;b<a.rules.length;b++)1<d.length&&(d+=" "+a.groupOp+" "),d+=this.getStringForRule(a.rules[b])}catch(e){alert(e)}d+=")";return"()"===d?"":d};this.getStringForRule=function(d){var f="",b="",c,e;for(c=0;c<this.p.ops.length;c++)if(this.p.ops[c].name===d.op){f=this.p.ops[c].operator;b=this.p.ops[c].name;break}for(c=0;c<this.p.columns.length;c++)if(this.p.columns[c].name===d.field){e=this.p.columns[c];break}if(null==e)return"";c=d.data;if("bw"===b||"bn"===b)c+="%";if("ew"===b||"en"===
b)c="%"+c;if("cn"===b||"nc"===b)c="%"+c+"%";if("in"===b||"ni"===b)c=" ("+c+")";p.errorcheck&&r(d.data,e);return-1!==a.inArray(e.searchtype,["int","integer","float","number","currency"])||"nn"===b||"nu"===b?d.field+" "+f+" "+c:d.field+" "+f+' "'+c+'"'};this.resetFilter=function(){this.p.filter=a.extend(!0,{},this.p.initFilter);this.reDraw();this.onchange()};this.hideError=function(){a("th.ui-state-error",this).html("");a("tr.error",this).hide()};this.showError=function(){a("th.ui-state-error",this).html(this.p.errmsg);
a("tr.error",this).show()};this.toUserFriendlyString=function(){return this.getStringForGroup(p.filter)};this.toString=function(){function a(b){var c="(",e;if(void 0!==b.groups)for(e=0;e<b.groups.length;e++)1<c.length&&(c="OR"===b.groupOp?c+" || ":c+" && "),c+=a(b.groups[e]);if(void 0!==b.rules)for(e=0;e<b.rules.length;e++){1<c.length&&(c="OR"===b.groupOp?c+" || ":c+" && ");var f=b.rules[e];if(d.p.errorcheck){for(var h=void 0,i=void 0,h=0;h<d.p.columns.length;h++)if(d.p.columns[h].name===f.field){i=
d.p.columns[h];break}i&&r(f.data,i)}c+=f.op+"(item."+f.field+",'"+f.data+"')"}c+=")";return"()"===c?"":c}var d=this;return a(this.p.filter)};this.reDraw();if(this.p.showQuery)this.onchange();this.filter=!0}}})};a.extend(a.fn.jqFilter,{toSQLString:function(){var a="";this.each(function(){a=this.toUserFriendlyString()});return a},filterData:function(){var a;this.each(function(){a=this.p.filter});return a},getParameter:function(a){return void 0!==a&&this.p.hasOwnProperty(a)?this.p[a]:this.p},resetFilter:function(){return this.each(function(){this.resetFilter()})},
addFilter:function(d){"string"===typeof d&&(d=a.jgrid.parse(d));this.each(function(){this.p.filter=d;this.reDraw();this.onchange()})}})})(jQuery);
(function(a){a.jgrid.inlineEdit=a.jgrid.inlineEdit||{};a.jgrid.extend({editRow:function(b,c,e,o,l,g,n,i,f){var j={},d=a.makeArray(arguments).slice(1);if("object"===a.type(d[0]))j=d[0];else if(void 0!==c&&(j.keys=c),a.isFunction(e)&&(j.oneditfunc=e),a.isFunction(o)&&(j.successfunc=o),void 0!==l&&(j.url=l),void 0!==g&&(j.extraparam=g),a.isFunction(n)&&(j.aftersavefunc=n),a.isFunction(i)&&(j.errorfunc=i),a.isFunction(f))j.afterrestorefunc=f;j=a.extend(!0,{keys:!1,oneditfunc:null,successfunc:null,url:null,
extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST"},a.jgrid.inlineEdit,j);return this.each(function(){var d=this,c,f,e=0,i=null,l={},g,k;if(d.grid&&(g=a(d).jqGrid("getInd",b,!0),!1!==g&&"0"==(a(g).attr("editable")||"0")&&!a(g).hasClass("not-editable-row")))k=d.p.colModel,a('td[role="gridcell"]',g).each(function(g){c=k[g].name;var j=!0===d.p.treeGrid&&c==d.p.ExpandColumn;if(j)f=a("span:first",this).html();else try{f=a.unformat.call(d,this,{rowId:b,
colModel:k[g]},g)}catch(o){f=k[g].edittype&&"textarea"==k[g].edittype?a(this).text():a(this).html()}if("cb"!=c&&"subgrid"!=c&&"rn"!=c&&(d.p.autoencode&&(f=a.jgrid.htmlDecode(f)),l[c]=f,!0===k[g].editable)){null===i&&(i=g);j?a("span:first",this).html(""):a(this).html("");var x=a.extend({},k[g].editoptions||{},{id:b+"_"+c,name:c});k[g].edittype||(k[g].edittype="text");if("&nbsp;"==f||"&#160;"==f||1==f.length&&160==f.charCodeAt(0))f="";var v=a.jgrid.createEl.call(d,k[g].edittype,x,f,!0,a.extend({},a.jgrid.ajaxOptions,
d.p.ajaxSelectOptions||{}));a(v).addClass("editable");j?a("span:first",this).append(v):a(this).append(v);a.jgrid.bindEv(v,x,d);"select"==k[g].edittype&&void 0!==k[g].editoptions&&!0===k[g].editoptions.multiple&&void 0===k[g].editoptions.dataUrl&&a.jgrid.msie&&a(v).width(a(v).width());e++}}),0<e&&(l.id=b,d.p.savedRow.push(l),a(g).attr("editable","1"),a("td:eq("+i+") input",g).focus(),!0===j.keys&&a(g).bind("keydown",function(f){if(27===f.keyCode){a(d).jqGrid("restoreRow",b,j.afterrestorefunc);if(d.p._inlinenav)try{a(d).jqGrid("showAddEditButtons")}catch(c){}return!1}if(13===
f.keyCode){if("TEXTAREA"==f.target.tagName)return!0;if(a(d).jqGrid("saveRow",b,j)&&d.p._inlinenav)try{a(d).jqGrid("showAddEditButtons")}catch(g){}return!1}}),a(d).triggerHandler("jqGridInlineEditRow",[b,j]),a.isFunction(j.oneditfunc)&&j.oneditfunc.call(d,b))})},saveRow:function(b,c,e,o,l,g,n){var i=a.makeArray(arguments).slice(1),f={};if("object"===a.type(i[0]))f=i[0];else if(a.isFunction(c)&&(f.successfunc=c),void 0!==e&&(f.url=e),void 0!==o&&(f.extraparam=o),a.isFunction(l)&&(f.aftersavefunc=l),
a.isFunction(g)&&(f.errorfunc=g),a.isFunction(n))f.afterrestorefunc=n;var f=a.extend(!0,{successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST"},a.jgrid.inlineEdit,f),j=!1,d=this[0],m,h={},w={},r={},t,s,q;if(!d.grid)return j;q=a(d).jqGrid("getInd",b,!0);if(!1===q)return j;i=a(q).attr("editable");f.url=f.url||d.p.editurl;if("1"===i){var k;a('td[role="gridcell"]',q).each(function(b){k=d.p.colModel[b];m=k.name;if("cb"!=m&&"subgrid"!=
m&&!0===k.editable&&"rn"!=m&&!a(this).hasClass("not-editable-cell")){switch(k.edittype){case "checkbox":var c=["Yes","No"];k.editoptions&&(c=k.editoptions.value.split(":"));h[m]=a("input",this).is(":checked")?c[0]:c[1];break;case "text":case "password":case "textarea":case "button":h[m]=a("input, textarea",this).val();break;case "select":if(k.editoptions.multiple){var c=a("select",this),g=[];h[m]=a(c).val();h[m]=h[m]?h[m].join(","):"";a("select option:selected",this).each(function(d,b){g[d]=a(b).text()});
w[m]=g.join(",")}else h[m]=a("select option:selected",this).val(),w[m]=a("select option:selected",this).text();k.formatter&&"select"==k.formatter&&(w={});break;case "custom":try{if(k.editoptions&&a.isFunction(k.editoptions.custom_value)){if(h[m]=k.editoptions.custom_value.call(d,a(".customelement",this),"get"),void 0===h[m])throw"e2";}else throw"e1";}catch(e){"e1"==e&&a.jgrid.info_dialog(a.jgrid.errors.errcap,"function 'custom_value' "+a.jgrid.edit.msg.nodefined,a.jgrid.edit.bClose),"e2"==e?a.jgrid.info_dialog(a.jgrid.errors.errcap,
"function 'custom_value' "+a.jgrid.edit.msg.novalue,a.jgrid.edit.bClose):a.jgrid.info_dialog(a.jgrid.errors.errcap,e.message,a.jgrid.edit.bClose)}}s=a.jgrid.checkValues(h[m],b,d);if(!1===s[0])return s[1]=h[m]+" "+s[1],!1;d.p.autoencode&&(h[m]=a.jgrid.htmlEncode(h[m]));"clientArray"!==f.url&&k.editoptions&&!0===k.editoptions.NullIfEmpty&&""===h[m]&&(r[m]="null")}});if(!1===s[0]){try{var u=a.jgrid.findPos(a("#"+a.jgrid.jqID(b),d.grid.bDiv)[0]);a.jgrid.info_dialog(a.jgrid.errors.errcap,s[1],a.jgrid.edit.bClose,
{left:u[0],top:u[1]})}catch(y){alert(s[1])}return j}var p=d.p.prmNames,u=b,i=!1===d.p.keyIndex?p.id:d.p.colModel[d.p.keyIndex+(!0===d.p.rownumbers?1:0)+(!0===d.p.multiselect?1:0)+(!0===d.p.subGrid?1:0)].name;if(h){h[p.oper]=p.editoper;if(void 0===h[i])h[i]=b;else if(q.id!==d.p.idPrefix+h[i]&&(p=a.jgrid.stripPref(d.p.idPrefix,b),void 0!==d.p._index[p]&&(d.p._index[h[i]]=d.p._index[p],delete d.p._index[p]),b=d.p.idPrefix+h[i],a(q).attr("id",b),d.p.selrow===u&&(d.p.selrow=b),a.isArray(d.p.selarrrow)&&
(p=a.inArray(u,d.p.selarrrow),0<=p&&(d.p.selarrrow[p]=b)),d.p.multiselect))p="jqg_"+d.p.id+"_"+b,a("input.cbox",q).attr("id",p).attr("name",p);void 0===d.p.inlineData&&(d.p.inlineData={});h=a.extend({},h,d.p.inlineData,f.extraparam)}if("clientArray"==f.url){h=a.extend({},h,w);d.p.autoencode&&a.each(h,function(d,b){h[d]=a.jgrid.htmlDecode(b)});p=a(d).jqGrid("setRowData",b,h);a(q).attr("editable","0");for(i=0;i<d.p.savedRow.length;i++)if(d.p.savedRow[i].id==u){t=i;break}0<=t&&d.p.savedRow.splice(t,
1);a(d).triggerHandler("jqGridInlineAfterSaveRow",[b,p,h,f]);a.isFunction(f.aftersavefunc)&&f.aftersavefunc.call(d,b,p,f);j=!0;a(q).unbind("keydown")}else a("#lui_"+a.jgrid.jqID(d.p.id)).show(),r=a.extend({},h,r),r[i]=a.jgrid.stripPref(d.p.idPrefix,r[i]),a.ajax(a.extend({url:f.url,data:a.isFunction(d.p.serializeRowData)?d.p.serializeRowData.call(d,r):r,type:f.mtype,async:!1,complete:function(c,g){a("#lui_"+a.jgrid.jqID(d.p.id)).hide();if("success"===g){var e=!0,i;i=a(d).triggerHandler("jqGridInlineSuccessSaveRow",
[c,b,f]);a.isArray(i)||(i=[!0,h]);i[0]&&a.isFunction(f.successfunc)&&(i=f.successfunc.call(d,c));a.isArray(i)?(e=i[0],h=i[1]||h):e=i;if(!0===e){d.p.autoencode&&a.each(h,function(d,b){h[d]=a.jgrid.htmlDecode(b)});h=a.extend({},h,w);a(d).jqGrid("setRowData",b,h);a(q).attr("editable","0");for(e=0;e<d.p.savedRow.length;e++)if(d.p.savedRow[e].id==b){t=e;break}0<=t&&d.p.savedRow.splice(t,1);a(d).triggerHandler("jqGridInlineAfterSaveRow",[b,c,h,f]);a.isFunction(f.aftersavefunc)&&f.aftersavefunc.call(d,b,
c);j=!0;a(q).unbind("keydown")}else a(d).triggerHandler("jqGridInlineErrorSaveRow",[b,c,g,null,f]),a.isFunction(f.errorfunc)&&f.errorfunc.call(d,b,c,g,null),!0===f.restoreAfterError&&a(d).jqGrid("restoreRow",b,f.afterrestorefunc)}},error:function(c,e,g){a("#lui_"+a.jgrid.jqID(d.p.id)).hide();a(d).triggerHandler("jqGridInlineErrorSaveRow",[b,c,e,g,f]);if(a.isFunction(f.errorfunc))f.errorfunc.call(d,b,c,e,g);else{c=c.responseText||c.statusText;try{a.jgrid.info_dialog(a.jgrid.errors.errcap,'<div class="ui-state-error">'+
c+"</div>",a.jgrid.edit.bClose,{buttonalign:"right"})}catch(i){alert(c)}}!0===f.restoreAfterError&&a(d).jqGrid("restoreRow",b,f.afterrestorefunc)}},a.jgrid.ajaxOptions,d.p.ajaxRowOptions||{}))}return j},restoreRow:function(b,c){var e=a.makeArray(arguments).slice(1),o={};"object"===a.type(e[0])?o=e[0]:a.isFunction(c)&&(o.afterrestorefunc=c);o=a.extend(!0,a.jgrid.inlineEdit,o);return this.each(function(){var c=this,e,n,i={},f;if(c.grid){n=a(c).jqGrid("getInd",b,true);if(n!==false){for(f=0;f<c.p.savedRow.length;f++)if(c.p.savedRow[f].id==
b){e=f;break}if(e>=0){if(a.isFunction(a.fn.datepicker))try{a("input.hasDatepicker","#"+a.jgrid.jqID(n.id)).datepicker("hide")}catch(j){}a.each(c.p.colModel,function(){this.editable===true&&c.p.savedRow[e].hasOwnProperty(this.name)&&(i[this.name]=c.p.savedRow[e][this.name])});a(c).jqGrid("setRowData",b,i);a(n).attr("editable","0").unbind("keydown");c.p.savedRow.splice(e,1);a("#"+a.jgrid.jqID(b),"#"+a.jgrid.jqID(c.p.id)).hasClass("jqgrid-new-row")&&setTimeout(function(){a(c).jqGrid("delRowData",b)},
0)}a(c).triggerHandler("jqGridInlineAfterRestoreRow",[b]);a.isFunction(o.afterrestorefunc)&&o.afterrestorefunc.call(c,b)}}})},addRow:function(b){b=a.extend(!0,{rowID:null,initdata:{},position:"first",useDefValues:!0,useFormatter:!1,addRowParams:{extraparam:{}}},b||{});return this.each(function(){if(this.grid){var c=this;b.rowID=a.isFunction(b.rowID)?b.rowID.call(c,b):null!=b.rowID?b.rowID:a.jgrid.randId();!0===b.useDefValues&&a(c.p.colModel).each(function(){if(this.editoptions&&this.editoptions.defaultValue){var e=
this.editoptions.defaultValue,e=a.isFunction(e)?e.call(c):e;b.initdata[this.name]=e}});a(c).jqGrid("addRowData",b.rowID,b.initdata,b.position);b.rowID=c.p.idPrefix+b.rowID;a("#"+a.jgrid.jqID(b.rowID),"#"+a.jgrid.jqID(c.p.id)).addClass("jqgrid-new-row");if(b.useFormatter)a("#"+a.jgrid.jqID(b.rowID)+" .ui-inline-edit","#"+a.jgrid.jqID(c.p.id)).click();else{var e=c.p.prmNames;b.addRowParams.extraparam[e.oper]=e.addoper;a(c).jqGrid("editRow",b.rowID,b.addRowParams);a(c).jqGrid("setSelection",b.rowID)}}})},
inlineNav:function(b,c){c=a.extend({edit:!0,editicon:"ui-icon-pencil",add:!0,addicon:"ui-icon-plus",save:!0,saveicon:"ui-icon-disk",cancel:!0,cancelicon:"ui-icon-cancel",addParams:{},editParams:{},restoreAfterSelect:!0},a.jgrid.nav,c||{});return this.each(function(){if(this.grid){var e=this,o,l=a.jgrid.jqID(e.p.id);e.p._inlinenav=!0;if(!0===c.addParams.useFormatter){var g=e.p.colModel,n;for(n=0;n<g.length;n++)if(g[n].formatter&&"actions"===g[n].formatter){g[n].formatoptions&&(g=a.extend({keys:!1,
onEdit:null,onSuccess:null,afterSave:null,onError:null,afterRestore:null,extraparam:{},url:null},g[n].formatoptions),c.addParams.addRowParams={keys:g.keys,oneditfunc:g.onEdit,successfunc:g.onSuccess,url:g.url,extraparam:g.extraparam,aftersavefunc:g.afterSavef,errorfunc:g.onError,afterrestorefunc:g.afterRestore});break}}c.add&&a(e).jqGrid("navButtonAdd",b,{caption:c.addtext,title:c.addtitle,buttonicon:c.addicon,id:e.p.id+"_iladd",onClickButton:function(){a(e).jqGrid("addRow",c.addParams);c.addParams.useFormatter||
(a("#"+l+"_ilsave").removeClass("ui-state-disabled"),a("#"+l+"_ilcancel").removeClass("ui-state-disabled"),a("#"+l+"_iladd").addClass("ui-state-disabled"),a("#"+l+"_iledit").addClass("ui-state-disabled"))}});c.edit&&a(e).jqGrid("navButtonAdd",b,{caption:c.edittext,title:c.edittitle,buttonicon:c.editicon,id:e.p.id+"_iledit",onClickButton:function(){var b=a(e).jqGrid("getGridParam","selrow");b?(a(e).jqGrid("editRow",b,c.editParams),a("#"+l+"_ilsave").removeClass("ui-state-disabled"),a("#"+l+"_ilcancel").removeClass("ui-state-disabled"),
a("#"+l+"_iladd").addClass("ui-state-disabled"),a("#"+l+"_iledit").addClass("ui-state-disabled")):(a.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+l,jqm:!0}),a("#jqg_alrt").focus())}});c.save&&(a(e).jqGrid("navButtonAdd",b,{caption:c.savetext||"",title:c.savetitle||"Save row",buttonicon:c.saveicon,id:e.p.id+"_ilsave",onClickButton:function(){var b=e.p.savedRow[0].id;if(b){var f=e.p.prmNames,g=f.oper;c.editParams.extraparam||(c.editParams.extraparam={});c.editParams.extraparam[g]=a("#"+a.jgrid.jqID(b),
"#"+l).hasClass("jqgrid-new-row")?f.addoper:f.editoper;a(e).jqGrid("saveRow",b,c.editParams)&&a(e).jqGrid("showAddEditButtons")}else a.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+l,jqm:!0}),a("#jqg_alrt").focus()}}),a("#"+l+"_ilsave").addClass("ui-state-disabled"));c.cancel&&(a(e).jqGrid("navButtonAdd",b,{caption:c.canceltext||"",title:c.canceltitle||"Cancel row editing",buttonicon:c.cancelicon,id:e.p.id+"_ilcancel",onClickButton:function(){var b=e.p.savedRow[0].id;if(b){a(e).jqGrid("restoreRow",b,
c.editParams);a(e).jqGrid("showAddEditButtons")}else{a.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+l,jqm:true});a("#jqg_alrt").focus()}}}),a("#"+l+"_ilcancel").addClass("ui-state-disabled"));!0===c.restoreAfterSelect&&(o=a.isFunction(e.p.beforeSelectRow)?e.p.beforeSelectRow:!1,e.p.beforeSelectRow=function(b,f){var g=true;if(e.p.savedRow.length>0&&e.p._inlinenav===true&&b!==e.p.selrow&&e.p.selrow!==null){e.p.selrow==c.addParams.rowID?a(e).jqGrid("delRowData",e.p.selrow):a(e).jqGrid("restoreRow",e.p.selrow,
c.editParams);a(e).jqGrid("showAddEditButtons")}o&&(g=o.call(e,b,f));return g})}})},showAddEditButtons:function(){return this.each(function(){if(this.grid){var b=a.jgrid.jqID(this.p.id);a("#"+b+"_ilsave").addClass("ui-state-disabled");a("#"+b+"_ilcancel").addClass("ui-state-disabled");a("#"+b+"_iladd").removeClass("ui-state-disabled");a("#"+b+"_iledit").removeClass("ui-state-disabled")}})}})})(jQuery);
(function(b){b.jgrid.extend({editCell:function(d,f,a){return this.each(function(){var c=this,g,e,h,i;if(c.grid&&!0===c.p.cellEdit){f=parseInt(f,10);c.p.selrow=c.rows[d].id;c.p.knv||b(c).jqGrid("GridNav");if(0<c.p.savedRow.length){if(!0===a&&d==c.p.iRow&&f==c.p.iCol)return;b(c).jqGrid("saveCell",c.p.savedRow[0].id,c.p.savedRow[0].ic)}else window.setTimeout(function(){b("#"+b.jgrid.jqID(c.p.knv)).attr("tabindex","-1").focus()},0);i=c.p.colModel[f];g=i.name;if(!("subgrid"==g||"cb"==g||"rn"==g)){h=b("td:eq("+
f+")",c.rows[d]);if(!0===i.editable&&!0===a&&!h.hasClass("not-editable-cell")){0<=parseInt(c.p.iCol,10)&&0<=parseInt(c.p.iRow,10)&&(b("td:eq("+c.p.iCol+")",c.rows[c.p.iRow]).removeClass("edit-cell ui-state-highlight"),b(c.rows[c.p.iRow]).removeClass("selected-row ui-state-hover"));b(h).addClass("edit-cell ui-state-highlight");b(c.rows[d]).addClass("selected-row ui-state-hover");try{e=b.unformat.call(c,h,{rowId:c.rows[d].id,colModel:i},f)}catch(k){e=i.edittype&&"textarea"==i.edittype?b(h).text():b(h).html()}c.p.autoencode&&
(e=b.jgrid.htmlDecode(e));i.edittype||(i.edittype="text");c.p.savedRow.push({id:d,ic:f,name:g,v:e});if("&nbsp;"===e||"&#160;"===e||1===e.length&&160===e.charCodeAt(0))e="";if(b.isFunction(c.p.formatCell)){var j=c.p.formatCell.call(c,c.rows[d].id,g,e,d,f);void 0!==j&&(e=j)}var j=b.extend({},i.editoptions||{},{id:d+"_"+g,name:g}),n=b.jgrid.createEl.call(c,i.edittype,j,e,!0,b.extend({},b.jgrid.ajaxOptions,c.p.ajaxSelectOptions||{}));b(c).triggerHandler("jqGridBeforeEditCell",[c.rows[d].id,g,e,d,f]);
b.isFunction(c.p.beforeEditCell)&&c.p.beforeEditCell.call(c,c.rows[d].id,g,e,d,f);b(h).html("").append(n).attr("tabindex","0");b.jgrid.bindEv(n,j,c);window.setTimeout(function(){b(n).focus()},0);b("input, select, textarea",h).bind("keydown",function(a){a.keyCode===27&&(b("input.hasDatepicker",h).length>0?b(".ui-datepicker").is(":hidden")?b(c).jqGrid("restoreCell",d,f):b("input.hasDatepicker",h).datepicker("hide"):b(c).jqGrid("restoreCell",d,f));if(a.keyCode===13){b(c).jqGrid("saveCell",d,f);return false}if(a.keyCode===
9){if(c.grid.hDiv.loading)return false;a.shiftKey?b(c).jqGrid("prevCell",d,f):b(c).jqGrid("nextCell",d,f)}a.stopPropagation()});b(c).triggerHandler("jqGridAfterEditCell",[c.rows[d].id,g,e,d,f]);b.isFunction(c.p.afterEditCell)&&c.p.afterEditCell.call(c,c.rows[d].id,g,e,d,f)}else 0<=parseInt(c.p.iCol,10)&&0<=parseInt(c.p.iRow,10)&&(b("td:eq("+c.p.iCol+")",c.rows[c.p.iRow]).removeClass("edit-cell ui-state-highlight"),b(c.rows[c.p.iRow]).removeClass("selected-row ui-state-hover")),h.addClass("edit-cell ui-state-highlight"),
b(c.rows[d]).addClass("selected-row ui-state-hover"),e=h.html().replace(/\&#160\;/ig,""),b(c).triggerHandler("jqGridSelectCell",[c.rows[d].id,g,e,d,f]),b.isFunction(c.p.onSelectCell)&&c.p.onSelectCell.call(c,c.rows[d].id,g,e,d,f);c.p.iCol=f;c.p.iRow=d}}})},saveCell:function(d,f){return this.each(function(){var a=this,c;if(a.grid&&!0===a.p.cellEdit){c=1<=a.p.savedRow.length?0:null;if(null!==c){var g=b("td:eq("+f+")",a.rows[d]),e,h,i=a.p.colModel[f],k=i.name,j=b.jgrid.jqID(k);switch(i.edittype){case "select":if(i.editoptions.multiple){var j=
b("#"+d+"_"+j,a.rows[d]),n=[];(e=b(j).val())?e.join(","):e="";b("option:selected",j).each(function(a,c){n[a]=b(c).text()});h=n.join(",")}else e=b("#"+d+"_"+j+" option:selected",a.rows[d]).val(),h=b("#"+d+"_"+j+" option:selected",a.rows[d]).text();i.formatter&&(h=e);break;case "checkbox":var l=["Yes","No"];i.editoptions&&(l=i.editoptions.value.split(":"));h=e=b("#"+d+"_"+j,a.rows[d]).is(":checked")?l[0]:l[1];break;case "password":case "text":case "textarea":case "button":h=e=b("#"+d+"_"+j,a.rows[d]).val();
break;case "custom":try{if(i.editoptions&&b.isFunction(i.editoptions.custom_value)){e=i.editoptions.custom_value.call(a,b(".customelement",g),"get");if(void 0===e)throw"e2";h=e}else throw"e1";}catch(o){"e1"==o&&b.jgrid.info_dialog(b.jgrid.errors.errcap,"function 'custom_value' "+b.jgrid.edit.msg.nodefined,b.jgrid.edit.bClose),"e2"==o?b.jgrid.info_dialog(b.jgrid.errors.errcap,"function 'custom_value' "+b.jgrid.edit.msg.novalue,b.jgrid.edit.bClose):b.jgrid.info_dialog(b.jgrid.errors.errcap,o.message,
b.jgrid.edit.bClose)}}if(h!==a.p.savedRow[c].v){if(c=b(a).triggerHandler("jqGridBeforeSaveCell",[a.rows[d].id,k,e,d,f]))h=e=c;if(b.isFunction(a.p.beforeSaveCell)&&(c=a.p.beforeSaveCell.call(a,a.rows[d].id,k,e,d,f)))h=e=c;var p=b.jgrid.checkValues(e,f,a);if(!0===p[0]){c=b(a).triggerHandler("jqGridBeforeSubmitCell",[a.rows[d].id,k,e,d,f])||{};b.isFunction(a.p.beforeSubmitCell)&&((c=a.p.beforeSubmitCell.call(a,a.rows[d].id,k,e,d,f))||(c={}));0<b("input.hasDatepicker",g).length&&b("input.hasDatepicker",
g).datepicker("hide");if("remote"==a.p.cellsubmit)if(a.p.cellurl){var m={};a.p.autoencode&&(e=b.jgrid.htmlEncode(e));m[k]=e;l=a.p.prmNames;i=l.id;j=l.oper;m[i]=b.jgrid.stripPref(a.p.idPrefix,a.rows[d].id);m[j]=l.editoper;m=b.extend(c,m);b("#lui_"+b.jgrid.jqID(a.p.id)).show();a.grid.hDiv.loading=!0;b.ajax(b.extend({url:a.p.cellurl,data:b.isFunction(a.p.serializeCellData)?a.p.serializeCellData.call(a,m):m,type:"POST",complete:function(c,i){b("#lui_"+a.p.id).hide();a.grid.hDiv.loading=false;if(i=="success"){var j=
b(a).triggerHandler("jqGridAfterSubmitCell",[a,c,m.id,k,e,d,f])||[true,""];j[0]===true&&b.isFunction(a.p.afterSubmitCell)&&(j=a.p.afterSubmitCell.call(a,c,m.id,k,e,d,f));if(j[0]===true){b(g).empty();b(a).jqGrid("setCell",a.rows[d].id,f,h,false,false,true);b(g).addClass("dirty-cell");b(a.rows[d]).addClass("edited");b(a).triggerHandler("jqGridAfterSaveCell",[a.rows[d].id,k,e,d,f]);b.isFunction(a.p.afterSaveCell)&&a.p.afterSaveCell.call(a,a.rows[d].id,k,e,d,f);a.p.savedRow.splice(0,1)}else{b.jgrid.info_dialog(b.jgrid.errors.errcap,
j[1],b.jgrid.edit.bClose);b(a).jqGrid("restoreCell",d,f)}}},error:function(c,e,h){b("#lui_"+b.jgrid.jqID(a.p.id)).hide();a.grid.hDiv.loading=false;b(a).triggerHandler("jqGridErrorCell",[c,e,h]);b.isFunction(a.p.errorCell)?a.p.errorCell.call(a,c,e,h):b.jgrid.info_dialog(b.jgrid.errors.errcap,c.status+" : "+c.statusText+"<br/>"+e,b.jgrid.edit.bClose);b(a).jqGrid("restoreCell",d,f)}},b.jgrid.ajaxOptions,a.p.ajaxCellOptions||{}))}else try{b.jgrid.info_dialog(b.jgrid.errors.errcap,b.jgrid.errors.nourl,
b.jgrid.edit.bClose),b(a).jqGrid("restoreCell",d,f)}catch(q){}"clientArray"==a.p.cellsubmit&&(b(g).empty(),b(a).jqGrid("setCell",a.rows[d].id,f,h,!1,!1,!0),b(g).addClass("dirty-cell"),b(a.rows[d]).addClass("edited"),b(a).triggerHandler("jqGridAfterSaveCell",[a.rows[d].id,k,e,d,f]),b.isFunction(a.p.afterSaveCell)&&a.p.afterSaveCell.call(a,a.rows[d].id,k,e,d,f),a.p.savedRow.splice(0,1))}else try{window.setTimeout(function(){b.jgrid.info_dialog(b.jgrid.errors.errcap,e+" "+p[1],b.jgrid.edit.bClose)},
100),b(a).jqGrid("restoreCell",d,f)}catch(r){}}else b(a).jqGrid("restoreCell",d,f)}window.setTimeout(function(){b("#"+b.jgrid.jqID(a.p.knv)).attr("tabindex","-1").focus()},0)}})},restoreCell:function(d,f){return this.each(function(){var a=this,c;if(a.grid&&!0===a.p.cellEdit){c=1<=a.p.savedRow.length?0:null;if(null!==c){var g=b("td:eq("+f+")",a.rows[d]);if(b.isFunction(b.fn.datepicker))try{b("input.hasDatepicker",g).datepicker("hide")}catch(e){}b(g).empty().attr("tabindex","-1");b(a).jqGrid("setCell",
a.rows[d].id,f,a.p.savedRow[c].v,!1,!1,!0);b(a).triggerHandler("jqGridAfterRestoreCell",[a.rows[d].id,a.p.savedRow[c].v,d,f]);b.isFunction(a.p.afterRestoreCell)&&a.p.afterRestoreCell.call(a,a.rows[d].id,a.p.savedRow[c].v,d,f);a.p.savedRow.splice(0,1)}window.setTimeout(function(){b("#"+a.p.knv).attr("tabindex","-1").focus()},0)}})},nextCell:function(d,f){return this.each(function(){var a=!1,c;if(this.grid&&!0===this.p.cellEdit){for(c=f+1;c<this.p.colModel.length;c++)if(!0===this.p.colModel[c].editable){a=
c;break}!1!==a?b(this).jqGrid("editCell",d,a,!0):0<this.p.savedRow.length&&b(this).jqGrid("saveCell",d,f)}})},prevCell:function(d,f){return this.each(function(){var a=!1,c;if(this.grid&&!0===this.p.cellEdit){for(c=f-1;0<=c;c--)if(!0===this.p.colModel[c].editable){a=c;break}!1!==a?b(this).jqGrid("editCell",d,a,!0):0<this.p.savedRow.length&&b(this).jqGrid("saveCell",d,f)}})},GridNav:function(){return this.each(function(){function d(c,d,e){if("v"==e.substr(0,1)){var f=b(a.grid.bDiv)[0].clientHeight,
g=b(a.grid.bDiv)[0].scrollTop,l=a.rows[c].offsetTop+a.rows[c].clientHeight,o=a.rows[c].offsetTop;"vd"==e&&l>=f&&(b(a.grid.bDiv)[0].scrollTop=b(a.grid.bDiv)[0].scrollTop+a.rows[c].clientHeight);"vu"==e&&o<g&&(b(a.grid.bDiv)[0].scrollTop=b(a.grid.bDiv)[0].scrollTop-a.rows[c].clientHeight)}"h"==e&&(e=b(a.grid.bDiv)[0].clientWidth,f=b(a.grid.bDiv)[0].scrollLeft,g=a.rows[c].cells[d].offsetLeft,a.rows[c].cells[d].offsetLeft+a.rows[c].cells[d].clientWidth>=e+parseInt(f,10)?b(a.grid.bDiv)[0].scrollLeft=b(a.grid.bDiv)[0].scrollLeft+
a.rows[c].cells[d].clientWidth:g<f&&(b(a.grid.bDiv)[0].scrollLeft=b(a.grid.bDiv)[0].scrollLeft-a.rows[c].cells[d].clientWidth))}function f(b,c){var d,e;if("lft"==c){d=b+1;for(e=b;0<=e;e--)if(!0!==a.p.colModel[e].hidden){d=e;break}}if("rgt"==c){d=b-1;for(e=b;e<a.p.colModel.length;e++)if(!0!==a.p.colModel[e].hidden){d=e;break}}return d}var a=this;if(a.grid&&!0===a.p.cellEdit){a.p.knv=a.p.id+"_kn";var c=b("<div style='position:fixed;top:-1000000px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='"+
a.p.knv+"'></div></div>"),g,e;b(c).insertBefore(a.grid.cDiv);b("#"+a.p.knv).focus().keydown(function(c){e=c.keyCode;"rtl"==a.p.direction&&(37===e?e=39:39===e&&(e=37));switch(e){case 38:0<a.p.iRow-1&&(d(a.p.iRow-1,a.p.iCol,"vu"),b(a).jqGrid("editCell",a.p.iRow-1,a.p.iCol,!1));break;case 40:a.p.iRow+1<=a.rows.length-1&&(d(a.p.iRow+1,a.p.iCol,"vd"),b(a).jqGrid("editCell",a.p.iRow+1,a.p.iCol,!1));break;case 37:0<=a.p.iCol-1&&(g=f(a.p.iCol-1,"lft"),d(a.p.iRow,g,"h"),b(a).jqGrid("editCell",a.p.iRow,g,!1));
break;case 39:a.p.iCol+1<=a.p.colModel.length-1&&(g=f(a.p.iCol+1,"rgt"),d(a.p.iRow,g,"h"),b(a).jqGrid("editCell",a.p.iRow,g,!1));break;case 13:0<=parseInt(a.p.iCol,10)&&0<=parseInt(a.p.iRow,10)&&b(a).jqGrid("editCell",a.p.iRow,a.p.iCol,!0);break;default:return!0}return!1})}})},getChangedCells:function(d){var f=[];d||(d="all");this.each(function(){var a=this,c;a.grid&&!0===a.p.cellEdit&&b(a.rows).each(function(g){var e={};b(this).hasClass("edited")&&(b("td",this).each(function(f){c=a.p.colModel[f].name;
if("cb"!==c&&"subgrid"!==c)if("dirty"==d){if(b(this).hasClass("dirty-cell"))try{e[c]=b.unformat.call(a,this,{rowId:a.rows[g].id,colModel:a.p.colModel[f]},f)}catch(i){e[c]=b.jgrid.htmlDecode(b(this).html())}}else try{e[c]=b.unformat.call(a,this,{rowId:a.rows[g].id,colModel:a.p.colModel[f]},f)}catch(k){e[c]=b.jgrid.htmlDecode(b(this).html())}}),e.id=this.id,f.push(e))})});return f}})})(jQuery);
(function(c){c.fn.jqm=function(a){var h={overlay:50,closeoverlay:!0,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:d,ajaxText:"",target:d,modal:d,toTop:d,onShow:d,onHide:d,onLoad:d};return this.each(function(){if(this._jqm)return i[this._jqm].c=c.extend({},i[this._jqm].c,a);k++;this._jqm=k;i[k]={c:c.extend(h,c.jqm.params,a),a:d,w:c(this).addClass("jqmID"+k),s:k};h.trigger&&c(this).jqmAddTrigger(h.trigger)})};c.fn.jqmAddClose=function(a){return o(this,a,"jqmHide")};c.fn.jqmAddTrigger=
function(a){return o(this,a,"jqmShow")};c.fn.jqmShow=function(a){return this.each(function(){c.jqm.open(this._jqm,a)})};c.fn.jqmHide=function(a){return this.each(function(){c.jqm.close(this._jqm,a)})};c.jqm={hash:{},open:function(a,h){var b=i[a],e=b.c,l="."+e.closeClass,f=parseInt(b.w.css("z-index")),f=0<f?f:3E3,g=c("<div></div>").css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":f-1,opacity:e.overlay/100});if(b.a)return d;b.t=h;b.a=!0;b.w.css("z-index",f);e.modal?(j[0]||setTimeout(function(){p("bind")},
1),j.push(a)):0<e.overlay?e.closeoverlay&&b.w.jqmAddClose(g):g=d;b.o=g?g.addClass(e.overlayClass).prependTo("body"):d;e.ajax?(f=e.target||b.w,g=e.ajax,f="string"==typeof f?c(f,b.w):c(f),g="@"==g.substr(0,1)?c(h).attr(g.substring(1)):g,f.html(e.ajaxText).load(g,function(){e.onLoad&&e.onLoad.call(this,b);l&&b.w.jqmAddClose(c(l,b.w));m(b)})):l&&b.w.jqmAddClose(c(l,b.w));e.toTop&&b.o&&b.w.before('<span id="jqmP'+b.w[0]._jqm+'"></span>').insertAfter(b.o);e.onShow?e.onShow(b):b.w.show();m(b);return d},
close:function(a){a=i[a];if(!a.a)return d;a.a=d;j[0]&&(j.pop(),j[0]||p("unbind"));a.c.toTop&&a.o&&c("#jqmP"+a.w[0]._jqm).after(a.w).remove();if(a.c.onHide)a.c.onHide(a);else a.w.hide(),a.o&&a.o.remove();return d},params:{}};var k=0,i=c.jqm.hash,j=[],d=!1,m=function(a){try{c(":input:visible",a.w)[0].focus()}catch(d){}},p=function(a){c(document)[a]("keypress",n)[a]("keydown",n)[a]("mousedown",n)},n=function(a){var d=i[j[j.length-1]];(a=!c(a.target).parents(".jqmID"+d.s)[0])&&m(d);return!a},o=function(a,
h,b){return a.each(function(){var a=this._jqm;c(h).each(function(){this[b]||(this[b]=[],c(this).click(function(){for(var a in{jqmShow:1,jqmHide:1})for(var b in this[a])if(i[this[a][b]])i[this[a][b]].w[a](this);return d}));this[b].push(a)})})}})(jQuery);
(function(b){b.fn.jqDrag=function(a){return h(this,a,"d")};b.fn.jqResize=function(a,b){return h(this,a,"r",b)};b.jqDnR={dnr:{},e:0,drag:function(a){"d"==d.k?e.css({left:d.X+a.pageX-d.pX,top:d.Y+a.pageY-d.pY}):(e.css({width:Math.max(a.pageX-d.pX+d.W,0),height:Math.max(a.pageY-d.pY+d.H,0)}),f&&g.css({width:Math.max(a.pageX-f.pX+f.W,0),height:Math.max(a.pageY-f.pY+f.H,0)}));return!1},stop:function(){b(document).unbind("mousemove",c.drag).unbind("mouseup",c.stop)}};var c=b.jqDnR,d=c.dnr,e=c.e,g,f,h=function(a,
c,h,l){return a.each(function(){c=c?b(c,a):a;c.bind("mousedown",{e:a,k:h},function(a){var c=a.data,i={};e=c.e;g=l?b(l):!1;if("relative"!=e.css("position"))try{e.position(i)}catch(h){}d={X:i.left||j("left")||0,Y:i.top||j("top")||0,W:j("width")||e[0].scrollWidth||0,H:j("height")||e[0].scrollHeight||0,pX:a.pageX,pY:a.pageY,k:c.k};f=g&&"d"!=c.k?{X:i.left||k("left")||0,Y:i.top||k("top")||0,W:g[0].offsetWidth||k("width")||0,H:g[0].offsetHeight||k("height")||0,pX:a.pageX,pY:a.pageY,k:c.k}:!1;if(b("input.hasDatepicker",
e[0])[0])try{b("input.hasDatepicker",e[0]).datepicker("hide")}catch(m){}b(document).mousemove(b.jqDnR.drag).mouseup(b.jqDnR.stop);return!1})})},j=function(a){return parseInt(e.css(a),10)||!1},k=function(a){return parseInt(g.css(a),10)||!1}})(jQuery);
(function(b){b.jgrid.extend({setSubGrid:function(){return this.each(function(){var e,c;this.p.subGridOptions=b.extend({plusicon:"ui-icon-plus",minusicon:"ui-icon-minus",openicon:"ui-icon-carat-1-sw",expandOnLoad:!1,delayOnLoad:50,selectOnExpand:!1,reloadOnExpand:!0},this.p.subGridOptions||{});this.p.colNames.unshift("");this.p.colModel.unshift({name:"subgrid",width:b.jgrid.cell_width?this.p.subGridWidth+this.p.cellLayout:this.p.subGridWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,fixed:!0});
e=this.p.subGridModel;if(e[0]){e[0].align=b.extend([],e[0].align||[]);for(c=0;c<e[0].name.length;c++)e[0].align[c]=e[0].align[c]||"left"}})},addSubGridCell:function(b,c){var a="",m,l;this.each(function(){a=this.formatCol(b,c);l=this.p.id;m=this.p.subGridOptions.plusicon});return'<td role="gridcell" aria-describedby="'+l+'_subgrid" class="ui-sgcollapsed sgcollapsed" '+a+"><a href='javascript:void(0);'><span class='ui-icon "+m+"'></span></a></td>"},addSubGrid:function(e,c){return this.each(function(){var a=
this;if(a.grid){var m=function(c,e,h){e=b("<td align='"+a.p.subGridModel[0].align[h]+"'></td>").html(e);b(c).append(e)},l=function(c,e){var h,f,n,d=b("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),i=b("<tr></tr>");for(f=0;f<a.p.subGridModel[0].name.length;f++)h=b("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-"+a.p.direction+"'></th>"),b(h).html(a.p.subGridModel[0].name[f]),b(h).width(a.p.subGridModel[0].width[f]),b(i).append(h);b(d).append(i);c&&(n=a.p.xmlReader.subgrid,
b(n.root+" "+n.row,c).each(function(){i=b("<tr class='ui-widget-content ui-subtblcell'></tr>");if(!0===n.repeatitems)b(n.cell,this).each(function(a){m(i,b(this).text()||"&#160;",a)});else{var c=a.p.subGridModel[0].mapping||a.p.subGridModel[0].name;if(c)for(f=0;f<c.length;f++)m(i,b(c[f],this).text()||"&#160;",f)}b(d).append(i)}));h=b("table:first",a.grid.bDiv).attr("id")+"_";b("#"+b.jgrid.jqID(h+e)).append(d);a.grid.hDiv.loading=!1;b("#load_"+b.jgrid.jqID(a.p.id)).hide();return!1},p=function(c,e){var h,
f,d,g,i,k=b("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),j=b("<tr></tr>");for(f=0;f<a.p.subGridModel[0].name.length;f++)h=b("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-"+a.p.direction+"'></th>"),b(h).html(a.p.subGridModel[0].name[f]),b(h).width(a.p.subGridModel[0].width[f]),b(j).append(h);b(k).append(j);if(c&&(g=a.p.jsonReader.subgrid,h=b.jgrid.getAccessor(c,g.root),void 0!==h))for(f=0;f<h.length;f++){d=h[f];j=b("<tr class='ui-widget-content ui-subtblcell'></tr>");
if(!0===g.repeatitems){g.cell&&(d=d[g.cell]);for(i=0;i<d.length;i++)m(j,d[i]||"&#160;",i)}else{var l=a.p.subGridModel[0].mapping||a.p.subGridModel[0].name;if(l.length)for(i=0;i<l.length;i++)m(j,d[l[i]]||"&#160;",i)}b(k).append(j)}f=b("table:first",a.grid.bDiv).attr("id")+"_";b("#"+b.jgrid.jqID(f+e)).append(k);a.grid.hDiv.loading=!1;b("#load_"+b.jgrid.jqID(a.p.id)).hide();return!1},t=function(c){var e,d,f,g;e=b(c).attr("id");d={nd_:(new Date).getTime()};d[a.p.prmNames.subgridid]=e;if(!a.p.subGridModel[0])return!1;
if(a.p.subGridModel[0].params)for(g=0;g<a.p.subGridModel[0].params.length;g++)for(f=0;f<a.p.colModel.length;f++)a.p.colModel[f].name===a.p.subGridModel[0].params[g]&&(d[a.p.colModel[f].name]=b("td:eq("+f+")",c).text().replace(/\&#160\;/ig,""));if(!a.grid.hDiv.loading)switch(a.grid.hDiv.loading=!0,b("#load_"+b.jgrid.jqID(a.p.id)).show(),a.p.subgridtype||(a.p.subgridtype=a.p.datatype),b.isFunction(a.p.subgridtype)?a.p.subgridtype.call(a,d):a.p.subgridtype=a.p.subgridtype.toLowerCase(),a.p.subgridtype){case "xml":case "json":b.ajax(b.extend({type:a.p.mtype,
url:a.p.subGridUrl,dataType:a.p.subgridtype,data:b.isFunction(a.p.serializeSubGridData)?a.p.serializeSubGridData.call(a,d):d,complete:function(c){a.p.subgridtype==="xml"?l(c.responseXML,e):p(b.jgrid.parse(c.responseText),e)}},b.jgrid.ajaxOptions,a.p.ajaxSubgridOptions||{}))}return!1},d,k,q,r=0,g,j;b.each(a.p.colModel,function(){(!0===this.hidden||"rn"===this.name||"cb"===this.name)&&r++});var s=a.rows.length,o=1;void 0!==c&&0<c&&(o=c,s=c+1);for(;o<s;)b(a.rows[o]).hasClass("jqgrow")&&b(a.rows[o].cells[e]).bind("click",
function(){var c=b(this).parent("tr")[0];j=c.nextSibling;if(b(this).hasClass("sgcollapsed")){k=a.p.id;d=c.id;if(a.p.subGridOptions.reloadOnExpand===true||a.p.subGridOptions.reloadOnExpand===false&&!b(j).hasClass("ui-subgrid")){q=e>=1?"<td colspan='"+e+"'>&#160;</td>":"";g=b(a).triggerHandler("jqGridSubGridBeforeExpand",[k+"_"+d,d]);(g=g===false||g==="stop"?false:true)&&b.isFunction(a.p.subGridBeforeExpand)&&(g=a.p.subGridBeforeExpand.call(a,k+"_"+d,d));if(g===false)return false;b(c).after("<tr role='row' class='ui-subgrid'>"+
q+"<td class='ui-widget-content subgrid-cell'><span class='ui-icon "+a.p.subGridOptions.openicon+"'></span></td><td colspan='"+parseInt(a.p.colNames.length-1-r,10)+"' class='ui-widget-content subgrid-data'><div id="+k+"_"+d+" class='tablediv'></div></td></tr>");b(a).triggerHandler("jqGridSubGridRowExpanded",[k+"_"+d,d]);b.isFunction(a.p.subGridRowExpanded)?a.p.subGridRowExpanded.call(a,k+"_"+d,d):t(c)}else b(j).show();b(this).html("<a href='javascript:void(0);'><span class='ui-icon "+a.p.subGridOptions.minusicon+
"'></span></a>").removeClass("sgcollapsed").addClass("sgexpanded");a.p.subGridOptions.selectOnExpand&&b(a).jqGrid("setSelection",d)}else if(b(this).hasClass("sgexpanded")){g=b(a).triggerHandler("jqGridSubGridRowColapsed",[k+"_"+d,d]);if((g=g===false||g==="stop"?false:true)&&b.isFunction(a.p.subGridRowColapsed)){d=c.id;g=a.p.subGridRowColapsed.call(a,k+"_"+d,d)}if(g===false)return false;a.p.subGridOptions.reloadOnExpand===true?b(j).remove(".ui-subgrid"):b(j).hasClass("ui-subgrid")&&b(j).hide();b(this).html("<a href='javascript:void(0);'><span class='ui-icon "+
a.p.subGridOptions.plusicon+"'></span></a>").removeClass("sgexpanded").addClass("sgcollapsed")}return false}),o++;!0===a.p.subGridOptions.expandOnLoad&&b(a.rows).filter(".jqgrow").each(function(a,c){b(c.cells[0]).click()});a.subGridXml=function(a,b){l(a,b)};a.subGridJson=function(a,b){p(a,b)}}})},expandSubGridRow:function(e){return this.each(function(){if((this.grid||e)&&!0===this.p.subGrid){var c=b(this).jqGrid("getInd",e,!0);c&&(c=b("td.sgcollapsed",c)[0])&&b(c).trigger("click")}})},collapseSubGridRow:function(e){return this.each(function(){if((this.grid||
e)&&!0===this.p.subGrid){var c=b(this).jqGrid("getInd",e,!0);c&&(c=b("td.sgexpanded",c)[0])&&b(c).trigger("click")}})},toggleSubGridRow:function(e){return this.each(function(){if((this.grid||e)&&!0===this.p.subGrid){var c=b(this).jqGrid("getInd",e,!0);if(c){var a=b("td.sgcollapsed",c)[0];a?b(a).trigger("click"):(a=b("td.sgexpanded",c)[0])&&b(a).trigger("click")}}})}})})(jQuery);
(function(c){c.extend(c.jgrid,{template:function(d){var h=c.makeArray(arguments).slice(1),e,a=h.length;null==d&&(d="");return d.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,function(d,g){if(!isNaN(parseInt(g,10)))return h[parseInt(g,10)];for(e=0;e<a;e++)if(c.isArray(h[e]))for(var b=h[e],j=b.length;j--;)if(g===b[j].nm)return b[j].v})}});c.jgrid.extend({groupingSetup:function(){return this.each(function(){var d,h,e=this.p.colModel,a=this.p.groupingView;if(null!==a&&("object"===typeof a||
c.isFunction(a)))if(a.groupField.length){void 0===a.visibiltyOnNextGrouping&&(a.visibiltyOnNextGrouping=[]);a.lastvalues=[];a.groups=[];a.counters=[];for(d=0;d<a.groupField.length;d++)a.groupOrder[d]||(a.groupOrder[d]="asc"),a.groupText[d]||(a.groupText[d]="{0}"),"boolean"!==typeof a.groupColumnShow[d]&&(a.groupColumnShow[d]=!0),"boolean"!==typeof a.groupSummary[d]&&(a.groupSummary[d]=!1),!0===a.groupColumnShow[d]?(a.visibiltyOnNextGrouping[d]=!0,c(this).jqGrid("showCol",a.groupField[d])):(a.visibiltyOnNextGrouping[d]=
c("#"+c.jgrid.jqID(this.p.id+"_"+a.groupField[d])).is(":visible"),c(this).jqGrid("hideCol",a.groupField[d]));a.summary=[];d=0;for(h=e.length;d<h;d++)e[d].summaryType&&a.summary.push({nm:e[d].name,st:e[d].summaryType,v:"",sr:e[d].summaryRound,srt:e[d].summaryRoundType||"round"})}else this.p.grouping=!1;else this.p.grouping=!1})},groupingPrepare:function(d,h,e,a){this.each(function(){var f=this.p.groupingView,g=this,b,j=f.groupField.length,k,i,l,r=0;for(b=0;b<j;b++)k=f.groupField[b],l=f.displayField[b],
i=e[k],l=null==l?null:e[l],null==l&&(l=i),void 0!==i&&(0===a?(f.groups.push({idx:b,dataIndex:k,value:i,displayValue:l,startRow:a,cnt:1,summary:[]}),f.lastvalues[b]=i,f.counters[b]={cnt:1,pos:f.groups.length-1,summary:c.extend(!0,[],f.summary)}):"object"!==typeof i&&f.lastvalues[b]!==i?(f.groups.push({idx:b,dataIndex:k,value:i,displayValue:l,startRow:a,cnt:1,summary:[]}),f.lastvalues[b]=i,r=1,f.counters[b]={cnt:1,pos:f.groups.length-1,summary:c.extend(!0,[],f.summary)}):1===r?(f.groups.push({idx:b,
dataIndex:k,value:i,displayValue:l,startRow:a,cnt:1,summary:[]}),f.lastvalues[b]=i,f.counters[b]={cnt:1,pos:f.groups.length-1,summary:c.extend(!0,[],f.summary)}):(f.counters[b].cnt+=1,f.groups[f.counters[b].pos].cnt=f.counters[b].cnt),c.each(f.counters[b].summary,function(){this.v=c.isFunction(this.st)?this.st.call(g,this.v,this.nm,e):c(g).jqGrid("groupingCalculations.handler",this.st,this.v,this.nm,this.sr,this.srt,e)}),f.groups[f.counters[b].pos].summary=f.counters[b].summary);h.push(d)});return h},
groupingToggle:function(d){this.each(function(){var h=this.p.groupingView,e=d.split("_"),a=parseInt(e[e.length-2],10);e.splice(e.length-2,2);var e=e.join("_"),f=h.minusicon,g=h.plusicon,b=c("#"+c.jgrid.jqID(d)),b=b.length?b[0].nextSibling:null,j=c("#"+c.jgrid.jqID(d)+" span.tree-wrap-"+this.p.direction),k=!1;if(j.hasClass(f)){if(h.showSummaryOnHide){if(b)for(;b&&!(c(b).hasClass("jqfoot")&&parseInt(c(b).attr("jqfootlevel"),10)<=a);)c(b).hide(),b=b.nextSibling}else if(b)for(;b&&!c(b).hasClass(e+"_"+
(""+a))&&!c(b).hasClass(e+"_"+(""+(a-1)));)c(b).hide(),b=b.nextSibling;j.removeClass(f).addClass(g);k=!0}else{if(b)for(;b&&!c(b).hasClass(e+"_"+(""+a))&&!c(b).hasClass(e+"_"+(""+(a-1)));)c(b).show(),(h=c(b).find("span.tree-wrap-"+this.p.direction))&&c(h).hasClass(g)&&c(h).removeClass(g).addClass(f),b=b.nextSibling;j.removeClass(g).addClass(f)}c(this).triggerHandler("jqGridGroupingClickGroup",[d,k]);c.isFunction(this.p.onClickGroup)&&this.p.onClickGroup.call(this,d,k)});return!1},groupingRender:function(d,
h){return this.each(function(){function e(a,d,b){var c=!1;if(0===d)c=b[a];else{var e=b[a].idx;if(0===e)c=b[a];else for(;0<=a;a--)if(b[a].idx===e-d){c=b[a];break}}return c}var a=this,f=a.p.groupingView,g="",b="",j,k,i=f.groupCollapse?f.plusicon:f.minusicon,l,r=[],w=f.groupField.length,i=i+(" tree-wrap-"+a.p.direction);c.each(a.p.colModel,function(a,d){var b;for(b=0;b<w;b++)if(f.groupField[b]===d.name){r[b]=a;break}});var t=0,x=c.makeArray(f.groupSummary);x.reverse();c.each(f.groups,function(s,m){t++;
k=a.p.id+"ghead_"+m.idx;j=k+"_"+s;b="<span style='cursor:pointer;' class='ui-icon "+i+"' onclick=\"jQuery('#"+c.jgrid.jqID(a.p.id)+"').jqGrid('groupingToggle','"+j+"');return false;\"></span>";try{l=a.formatter(j,m.displayValue,r[m.idx],m.value)}catch(C){l=m.displayValue}g+='<tr id="'+j+'" role="row" class= "ui-widget-content jqgroup ui-row-'+a.p.direction+" "+k+'"><td style="padding-left:'+12*m.idx+'px;" colspan="'+h+'">'+b+c.jgrid.template(f.groupText[m.idx],l,m.cnt,m.summary)+"</td></tr>";if(w-
1===m.idx){var o=f.groups[s+1],p,n,B=void 0!==o?f.groups[s+1].startRow:d.length;for(n=m.startRow;n<B;n++)g+=d[n].join("");var q;if(void 0!==o){for(q=0;q<f.groupField.length&&o.dataIndex!==f.groupField[q];q++);t=f.groupField.length-q}for(o=0;o<t;o++)if(x[o]){n="";f.groupCollapse&&!f.showSummaryOnHide&&(n=' style="display:none;"');g+="<tr"+n+' jqfootlevel="'+(m.idx-o)+'" role="row" class="ui-widget-content jqfoot ui-row-'+a.p.direction+'">';n=e(s,o,f.groups);var u=a.p.colModel,v,y=n.cnt;for(p=0;p<h;p++){var z=
"<td "+a.formatCol(p,1,"")+">&#160;</td>",A="{0}";c.each(n.summary,function(){if(this.nm===u[p].name){u[p].summaryTpl&&(A=u[p].summaryTpl);"string"===typeof this.st&&"avg"===this.st.toLowerCase()&&this.v&&0<y&&(this.v/=y);try{v=a.formatter("",this.v,p,this)}catch(b){v=this.v}z="<td "+a.formatCol(p,1,"")+">"+c.jgrid.format(A,v)+"</td>";return!1}});g+=z}g+="</tr>"}t=q}});c("#"+c.jgrid.jqID(a.p.id)+" tbody:first").append(g);g=null})},groupingGroupBy:function(d,h){return this.each(function(){"string"===
typeof d&&(d=[d]);var e=this.p.groupingView;this.p.grouping=!0;void 0===e.visibiltyOnNextGrouping&&(e.visibiltyOnNextGrouping=[]);var a;for(a=0;a<e.groupField.length;a++)!e.groupColumnShow[a]&&e.visibiltyOnNextGrouping[a]&&c(this).jqGrid("showCol",e.groupField[a]);for(a=0;a<d.length;a++)e.visibiltyOnNextGrouping[a]=c("#"+c.jgrid.jqID(this.p.id)+"_"+c.jgrid.jqID(d[a])).is(":visible");this.p.groupingView=c.extend(this.p.groupingView,h||{});e.groupField=d;c(this).trigger("reloadGrid")})},groupingRemove:function(d){return this.each(function(){void 0===
d&&(d=!0);this.p.grouping=!1;if(!0===d){var h=this.p.groupingView,e;for(e=0;e<h.groupField.length;e++)!h.groupColumnShow[e]&&h.visibiltyOnNextGrouping[e]&&c(this).jqGrid("showCol",h.groupField);c("tr.jqgroup, tr.jqfoot","#"+c.jgrid.jqID(this.p.id)+" tbody:first").remove();c("tr.jqgrow:hidden","#"+c.jgrid.jqID(this.p.id)+" tbody:first").show()}else c(this).trigger("reloadGrid")})},groupingCalculations:{handler:function(d,c,e,a,f,g){var b={sum:function(){return parseFloat(c||0)+parseFloat(g[e]||0)},
min:function(){return""===c?parseFloat(g[e]||0):Math.min(parseFloat(c),parseFloat(g[e]||0))},max:function(){return""===c?parseFloat(g[e]||0):Math.max(parseFloat(c),parseFloat(g[e]||0))},count:function(){""===c&&(c=0);return g.hasOwnProperty(e)?c+1:0},avg:function(){return b.sum()}};if(!b[d])throw"jqGrid Grouping No such method: "+d;d=b[d]();null!=a&&("fixed"==f?d=d.toFixed(a):(a=Math.pow(10,a),d=Math.round(d*a)/a));return d}}})})(jQuery);
(function(d){d.jgrid.extend({setTreeNode:function(a,c){return this.each(function(){var b=this;if(b.grid&&b.p.treeGrid)for(var h=b.p.expColInd,e=b.p.treeReader.expanded_field,i=b.p.treeReader.leaf_field,g=b.p.treeReader.level_field,f=b.p.treeReader.icon_field,l=b.p.treeReader.loaded,k,m,n,j;a<c;)j=b.p.data[b.p._index[b.rows[a].id]],"nested"==b.p.treeGridModel&&!j[i]&&(k=parseInt(j[b.p.treeReader.left_field],10),m=parseInt(j[b.p.treeReader.right_field],10),j[i]=m===k+1?"true":"false",b.rows[a].cells[b.p._treeleafpos].innerHTML=
j[i]),k=parseInt(j[g],10),0===b.p.tree_root_level?(n=k+1,m=k):(n=k,m=k-1),n="<div class='tree-wrap tree-wrap-"+b.p.direction+"' style='width:"+18*n+"px;'>",n+="<div style='"+("rtl"==b.p.direction?"right:":"left:")+18*m+"px;' class='ui-icon ",void 0!==j[l]&&(j[l]="true"==j[l]||!0===j[l]?!0:!1),"true"==j[i]||!0===j[i]?(n+=(void 0!==j[f]&&""!==j[f]?j[f]:b.p.treeIcons.leaf)+" tree-leaf treeclick",j[i]=!0,m="leaf"):(j[i]=!1,m=""),j[e]=("true"==j[e]||!0===j[e]?!0:!1)&&(j[l]||void 0===j[l]),n=!1===j[e]?
n+(!0===j[i]?"'":b.p.treeIcons.plus+" tree-plus treeclick'"):n+(!0===j[i]?"'":b.p.treeIcons.minus+" tree-minus treeclick'"),n+="></div></div>",d(b.rows[a].cells[h]).wrapInner("<span class='cell-wrapper"+m+"'></span>").prepend(n),k!==parseInt(b.p.tree_root_level,10)&&((j=(j=d(b).jqGrid("getNodeParent",j))&&j.hasOwnProperty(e)?j[e]:!0)||d(b.rows[a]).css("display","none")),d(b.rows[a].cells[h]).find("div.treeclick").bind("click",function(a){a=d(a.target||a.srcElement,b.rows).closest("tr.jqgrow")[0].id;
a=b.p._index[a];if(!b.p.data[a][i])if(b.p.data[a][e]){d(b).jqGrid("collapseRow",b.p.data[a]);d(b).jqGrid("collapseNode",b.p.data[a])}else{d(b).jqGrid("expandRow",b.p.data[a]);d(b).jqGrid("expandNode",b.p.data[a])}return false}),!0===b.p.ExpandColClick&&d(b.rows[a].cells[h]).find("span.cell-wrapper").css("cursor","pointer").bind("click",function(a){var a=d(a.target||a.srcElement,b.rows).closest("tr.jqgrow")[0].id,c=b.p._index[a];if(!b.p.data[c][i])if(b.p.data[c][e]){d(b).jqGrid("collapseRow",b.p.data[c]);
d(b).jqGrid("collapseNode",b.p.data[c])}else{d(b).jqGrid("expandRow",b.p.data[c]);d(b).jqGrid("expandNode",b.p.data[c])}d(b).jqGrid("setSelection",a);return false}),a++})},setTreeGrid:function(){return this.each(function(){var a=this,c=0,b=!1,h,e,i,g=[];if(a.p.treeGrid){a.p.treedatatype||d.extend(a.p,{treedatatype:a.p.datatype});a.p.subGrid=!1;a.p.altRows=!1;a.p.pgbuttons=!1;a.p.pginput=!1;a.p.gridview=!0;null===a.p.rowTotal&&(a.p.rowNum=1E4);a.p.multiselect=!1;a.p.rowList=[];a.p.expColInd=0;a.p.treeIcons=
d.extend({plus:"ui-icon-triangle-1-"+("rtl"==a.p.direction?"w":"e"),minus:"ui-icon-triangle-1-s",leaf:"ui-icon-radio-off"},a.p.treeIcons||{});"nested"==a.p.treeGridModel?a.p.treeReader=d.extend({level_field:"level",left_field:"lft",right_field:"rgt",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},a.p.treeReader):"adjacency"==a.p.treeGridModel&&(a.p.treeReader=d.extend({level_field:"level",parent_id_field:"parent",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",
icon_field:"icon"},a.p.treeReader));for(e in a.p.colModel)if(a.p.colModel.hasOwnProperty(e))for(i in h=a.p.colModel[e].name,h==a.p.ExpandColumn&&!b&&(b=!0,a.p.expColInd=c),c++,a.p.treeReader)a.p.treeReader.hasOwnProperty(i)&&a.p.treeReader[i]==h&&g.push(h);d.each(a.p.treeReader,function(b,e){if(e&&d.inArray(e,g)===-1){if(b==="leaf_field")a.p._treeleafpos=c;c++;a.p.colNames.push(e);a.p.colModel.push({name:e,width:1,hidden:true,sortable:false,resizable:false,hidedlg:true,editable:true,search:false})}})}})},
expandRow:function(a){this.each(function(){var c=this;if(c.grid&&c.p.treeGrid){var b=d(c).jqGrid("getNodeChildren",a),h=c.p.treeReader.expanded_field,e=c.rows;d(b).each(function(){var a=d.jgrid.getAccessor(this,c.p.localReader.id);d(e.namedItem(a)).css("display","");this[h]&&d(c).jqGrid("expandRow",this)})}})},collapseRow:function(a){this.each(function(){var c=this;if(c.grid&&c.p.treeGrid){var b=d(c).jqGrid("getNodeChildren",a),h=c.p.treeReader.expanded_field,e=c.rows;d(b).each(function(){var a=d.jgrid.getAccessor(this,
c.p.localReader.id);d(e.namedItem(a)).css("display","none");this[h]&&d(c).jqGrid("collapseRow",this)})}})},getRootNodes:function(){var a=[];this.each(function(){var c=this;if(c.grid&&c.p.treeGrid)switch(c.p.treeGridModel){case "nested":var b=c.p.treeReader.level_field;d(c.p.data).each(function(){parseInt(this[b],10)===parseInt(c.p.tree_root_level,10)&&a.push(this)});break;case "adjacency":var h=c.p.treeReader.parent_id_field;d(c.p.data).each(function(){(null===this[h]||"null"==(""+this[h]).toLowerCase())&&
a.push(this)})}});return a},getNodeDepth:function(a){var c=null;this.each(function(){if(this.grid&&this.p.treeGrid)switch(this.p.treeGridModel){case "nested":c=parseInt(a[this.p.treeReader.level_field],10)-parseInt(this.p.tree_root_level,10);break;case "adjacency":c=d(this).jqGrid("getNodeAncestors",a).length}});return c},getNodeParent:function(a){var c=null;this.each(function(){if(this.grid&&this.p.treeGrid)switch(this.p.treeGridModel){case "nested":var b=this.p.treeReader.left_field,h=this.p.treeReader.right_field,
e=this.p.treeReader.level_field,i=parseInt(a[b],10),g=parseInt(a[h],10),f=parseInt(a[e],10);d(this.p.data).each(function(){if(parseInt(this[e],10)===f-1&&parseInt(this[b],10)<i&&parseInt(this[h],10)>g)return c=this,!1});break;case "adjacency":var l=this.p.treeReader.parent_id_field,k=this.p.localReader.id;d(this.p.data).each(function(){if(this[k]==a[l])return c=this,!1})}});return c},getNodeChildren:function(a){var c=[];this.each(function(){if(this.grid&&this.p.treeGrid)switch(this.p.treeGridModel){case "nested":var b=
this.p.treeReader.left_field,h=this.p.treeReader.right_field,e=this.p.treeReader.level_field,i=parseInt(a[b],10),g=parseInt(a[h],10),f=parseInt(a[e],10);d(this.p.data).each(function(){parseInt(this[e],10)===f+1&&parseInt(this[b],10)>i&&parseInt(this[h],10)<g&&c.push(this)});break;case "adjacency":var l=this.p.treeReader.parent_id_field,k=this.p.localReader.id;d(this.p.data).each(function(){this[l]==a[k]&&c.push(this)})}});return c},getFullTreeNode:function(a){var c=[];this.each(function(){var b;if(this.grid&&
this.p.treeGrid)switch(this.p.treeGridModel){case "nested":var h=this.p.treeReader.left_field,e=this.p.treeReader.right_field,i=this.p.treeReader.level_field,g=parseInt(a[h],10),f=parseInt(a[e],10),l=parseInt(a[i],10);d(this.p.data).each(function(){parseInt(this[i],10)>=l&&parseInt(this[h],10)>=g&&parseInt(this[h],10)<=f&&c.push(this)});break;case "adjacency":if(a){c.push(a);var k=this.p.treeReader.parent_id_field,m=this.p.localReader.id;d(this.p.data).each(function(a){b=c.length;for(a=0;a<b;a++)if(c[a][m]==
this[k]){c.push(this);break}})}}});return c},getNodeAncestors:function(a){var c=[];this.each(function(){if(this.grid&&this.p.treeGrid)for(var b=d(this).jqGrid("getNodeParent",a);b;)c.push(b),b=d(this).jqGrid("getNodeParent",b)});return c},isVisibleNode:function(a){var c=!0;this.each(function(){if(this.grid&&this.p.treeGrid){var b=d(this).jqGrid("getNodeAncestors",a),h=this.p.treeReader.expanded_field;d(b).each(function(){c=c&&this[h];if(!c)return!1})}});return c},isNodeLoaded:function(a){var c;this.each(function(){if(this.grid&&
this.p.treeGrid){var b=this.p.treeReader.leaf_field;c=void 0!==a?void 0!==a.loaded?a.loaded:a[b]||0<d(this).jqGrid("getNodeChildren",a).length?!0:!1:!1}});return c},expandNode:function(a){return this.each(function(){if(this.grid&&this.p.treeGrid){var c=this.p.treeReader.expanded_field,b=this.p.treeReader.parent_id_field,h=this.p.treeReader.loaded,e=this.p.treeReader.level_field,i=this.p.treeReader.left_field,g=this.p.treeReader.right_field;if(!a[c]){var f=d.jgrid.getAccessor(a,this.p.localReader.id),
l=d("#"+d.jgrid.jqID(f),this.grid.bDiv)[0],k=this.p._index[f];d(this).jqGrid("isNodeLoaded",this.p.data[k])?(a[c]=!0,d("div.treeclick",l).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus")):this.grid.hDiv.loading||(a[c]=!0,d("div.treeclick",l).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus"),this.p.treeANode=l.rowIndex,this.p.datatype=this.p.treedatatype,"nested"==this.p.treeGridModel?d(this).jqGrid("setGridParam",
{postData:{nodeid:f,n_left:a[i],n_right:a[g],n_level:a[e]}}):d(this).jqGrid("setGridParam",{postData:{nodeid:f,parentid:a[b],n_level:a[e]}}),d(this).trigger("reloadGrid"),a[h]=!0,"nested"==this.p.treeGridModel?d(this).jqGrid("setGridParam",{postData:{nodeid:"",n_left:"",n_right:"",n_level:""}}):d(this).jqGrid("setGridParam",{postData:{nodeid:"",parentid:"",n_level:""}}))}}})},collapseNode:function(a){return this.each(function(){if(this.grid&&this.p.treeGrid){var c=this.p.treeReader.expanded_field;
a[c]&&(a[c]=!1,c=d.jgrid.getAccessor(a,this.p.localReader.id),c=d("#"+d.jgrid.jqID(c),this.grid.bDiv)[0],d("div.treeclick",c).removeClass(this.p.treeIcons.minus+" tree-minus").addClass(this.p.treeIcons.plus+" tree-plus"))}})},SortTree:function(a,c,b,h){return this.each(function(){if(this.grid&&this.p.treeGrid){var e,i,g,f=[],l=this,k;e=d(this).jqGrid("getRootNodes");e=d.jgrid.from(e);e.orderBy(a,c,b,h);k=e.select();e=0;for(i=k.length;e<i;e++)g=k[e],f.push(g),d(this).jqGrid("collectChildrenSortTree",
f,g,a,c,b,h);d.each(f,function(a){var b=d.jgrid.getAccessor(this,l.p.localReader.id);d("#"+d.jgrid.jqID(l.p.id)+" tbody tr:eq("+a+")").after(d("tr#"+d.jgrid.jqID(b),l.grid.bDiv))});f=k=e=null}})},collectChildrenSortTree:function(a,c,b,h,e,i){return this.each(function(){if(this.grid&&this.p.treeGrid){var g,f,l,k;g=d(this).jqGrid("getNodeChildren",c);g=d.jgrid.from(g);g.orderBy(b,h,e,i);k=g.select();g=0;for(f=k.length;g<f;g++)l=k[g],a.push(l),d(this).jqGrid("collectChildrenSortTree",a,l,b,h,e,i)}})},
setTreeRow:function(a,c){var b=!1;this.each(function(){this.grid&&this.p.treeGrid&&(b=d(this).jqGrid("setRowData",a,c))});return b},delTreeNode:function(a){return this.each(function(){var c=this.p.localReader.id,b,h=this.p.treeReader.left_field,e=this.p.treeReader.right_field,i,g,f;if(this.grid&&this.p.treeGrid&&(b=this.p._index[a],void 0!==b)){i=parseInt(this.p.data[b][e],10);g=i-parseInt(this.p.data[b][h],10)+1;var l=d(this).jqGrid("getFullTreeNode",this.p.data[b]);if(0<l.length)for(b=0;b<l.length;b++)d(this).jqGrid("delRowData",
l[b][c]);if("nested"===this.p.treeGridModel){c=d.jgrid.from(this.p.data).greater(h,i,{stype:"integer"}).select();if(c.length)for(f in c)c.hasOwnProperty(f)&&(c[f][h]=parseInt(c[f][h],10)-g);c=d.jgrid.from(this.p.data).greater(e,i,{stype:"integer"}).select();if(c.length)for(f in c)c.hasOwnProperty(f)&&(c[f][e]=parseInt(c[f][e],10)-g)}}})},addChildNode:function(a,c,b,h){var e=this[0];if(b){var i=e.p.treeReader.expanded_field,g=e.p.treeReader.leaf_field,f=e.p.treeReader.level_field,l=e.p.treeReader.parent_id_field,
k=e.p.treeReader.left_field,m=e.p.treeReader.right_field,n=e.p.treeReader.loaded,j,r,q,t,p;j=0;var s=c,u;void 0===h&&(h=!1);if(void 0===a||null===a){p=e.p.data.length-1;if(0<=p)for(;0<=p;)j=Math.max(j,parseInt(e.p.data[p][e.p.localReader.id],10)),p--;a=j+1}var v=d(e).jqGrid("getInd",c);u=!1;if(void 0===c||null===c||""===c)s=c=null,j="last",t=e.p.tree_root_level,p=e.p.data.length+1;else if(j="after",r=e.p._index[c],q=e.p.data[r],c=q[e.p.localReader.id],t=parseInt(q[f],10)+1,p=d(e).jqGrid("getFullTreeNode",
q),p.length?(s=p=p[p.length-1][e.p.localReader.id],p=d(e).jqGrid("getInd",s)+1):p=d(e).jqGrid("getInd",c)+1,q[g])u=!0,q[i]=!0,d(e.rows[v]).find("span.cell-wrapperleaf").removeClass("cell-wrapperleaf").addClass("cell-wrapper").end().find("div.tree-leaf").removeClass(e.p.treeIcons.leaf+" tree-leaf").addClass(e.p.treeIcons.minus+" tree-minus"),e.p.data[r][g]=!1,q[n]=!0;r=p+1;void 0===b[i]&&(b[i]=!1);void 0===b[n]&&(b[n]=!1);b[f]=t;void 0===b[g]&&(b[g]=!0);"adjacency"===e.p.treeGridModel&&(b[l]=c);if("nested"===
e.p.treeGridModel){var o;if(null!==c){g=parseInt(q[m],10);f=d.jgrid.from(e.p.data);f=f.greaterOrEquals(m,g,{stype:"integer"});f=f.select();if(f.length)for(o in f)f.hasOwnProperty(o)&&(f[o][k]=f[o][k]>g?parseInt(f[o][k],10)+2:f[o][k],f[o][m]=f[o][m]>=g?parseInt(f[o][m],10)+2:f[o][m]);b[k]=g;b[m]=g+1}else{g=parseInt(d(e).jqGrid("getCol",m,!1,"max"),10);f=d.jgrid.from(e.p.data).greater(k,g,{stype:"integer"}).select();if(f.length)for(o in f)f.hasOwnProperty(o)&&(f[o][k]=parseInt(f[o][k],10)+2);f=d.jgrid.from(e.p.data).greater(m,
g,{stype:"integer"}).select();if(f.length)for(o in f)f.hasOwnProperty(o)&&(f[o][m]=parseInt(f[o][m],10)+2);b[k]=g+1;b[m]=g+2}}if(null===c||d(e).jqGrid("isNodeLoaded",q)||u)d(e).jqGrid("addRowData",a,b,j,s),d(e).jqGrid("setTreeNode",p,r);q&&!q[i]&&h&&d(e.rows[v]).find("div.treeclick").click()}}})})(jQuery);
(function(c){c.jgrid.extend({jqGridImport:function(a){a=c.extend({imptype:"xml",impstring:"",impurl:"",mtype:"GET",impData:{},xmlGrid:{config:"roots>grid",data:"roots>rows"},jsonGrid:{config:"grid",data:"data"},ajaxOptions:{}},a||{});return this.each(function(){var d=this,f=function(a,b){var e=c(b.xmlGrid.config,a)[0],h=c(b.xmlGrid.data,a)[0],f,g;if(xmlJsonClass.xml2json&&c.jgrid.parse){e=xmlJsonClass.xml2json(e," ");e=c.jgrid.parse(e);for(g in e)e.hasOwnProperty(g)&&(f=e[g]);h?(h=e.grid.datatype,
e.grid.datatype="xmlstring",e.grid.datastr=a,c(d).jqGrid(f).jqGrid("setGridParam",{datatype:h})):c(d).jqGrid(f)}else alert("xml2json or parse are not present")},b=function(a,b){if(a&&"string"==typeof a){var e=!1;c.jgrid.useJSON&&(c.jgrid.useJSON=!1,e=!0);var f=c.jgrid.parse(a);e&&(c.jgrid.useJSON=!0);e=f[b.jsonGrid.config];if(f=f[b.jsonGrid.data]){var g=e.datatype;e.datatype="jsonstring";e.datastr=f;c(d).jqGrid(e).jqGrid("setGridParam",{datatype:g})}else c(d).jqGrid(e)}};switch(a.imptype){case "xml":c.ajax(c.extend({url:a.impurl,
type:a.mtype,data:a.impData,dataType:"xml",complete:function(b,g){"success"==g&&(f(b.responseXML,a),c(d).triggerHandler("jqGridImportComplete",[b,a]),c.isFunction(a.importComplete)&&a.importComplete(b))}},a.ajaxOptions));break;case "xmlstring":if(a.impstring&&"string"==typeof a.impstring){var g=c.jgrid.stringToDoc(a.impstring);g&&(f(g,a),c(d).triggerHandler("jqGridImportComplete",[g,a]),c.isFunction(a.importComplete)&&a.importComplete(g),a.impstring=null);g=null}break;case "json":c.ajax(c.extend({url:a.impurl,
type:a.mtype,data:a.impData,dataType:"json",complete:function(f){try{b(f.responseText,a),c(d).triggerHandler("jqGridImportComplete",[f,a]),c.isFunction(a.importComplete)&&a.importComplete(f)}catch(g){}}},a.ajaxOptions));break;case "jsonstring":a.impstring&&"string"==typeof a.impstring&&(b(a.impstring,a),c(d).triggerHandler("jqGridImportComplete",[a.impstring,a]),c.isFunction(a.importComplete)&&a.importComplete(a.impstring),a.impstring=null)}})},jqGridExport:function(a){var a=c.extend({exptype:"xmlstring",
root:"grid",ident:"\t"},a||{}),d=null;this.each(function(){if(this.grid){var f,b=c.extend(!0,{},c(this).jqGrid("getGridParam"));b.rownumbers&&(b.colNames.splice(0,1),b.colModel.splice(0,1));b.multiselect&&(b.colNames.splice(0,1),b.colModel.splice(0,1));b.subGrid&&(b.colNames.splice(0,1),b.colModel.splice(0,1));b.knv=null;if(b.treeGrid)for(f in b.treeReader)b.treeReader.hasOwnProperty(f)&&(b.colNames.splice(b.colNames.length-1),b.colModel.splice(b.colModel.length-1));switch(a.exptype){case "xmlstring":d=
"<"+a.root+">"+xmlJsonClass.json2xml(b,a.ident)+"</"+a.root+">";break;case "jsonstring":d="{"+xmlJsonClass.toJson(b,a.root,a.ident,!1)+"}",void 0!==b.postData.filters&&(d=d.replace(/filters":"/,'filters":'),d=d.replace(/}]}"/,"}]}"))}}});return d},excelExport:function(a){a=c.extend({exptype:"remote",url:null,oper:"oper",tag:"excel",exportOptions:{}},a||{});return this.each(function(){if(this.grid){var d;"remote"==a.exptype&&(d=c.extend({},this.p.postData),d[a.oper]=a.tag,d=jQuery.param(d),d=-1!=a.url.indexOf("?")?
a.url+"&"+d:a.url+"?"+d,window.location=d)}})}})})(jQuery);
var xmlJsonClass={xml2json:function(a,b){if(9===a.nodeType)a=a.documentElement;var g=this.toJson(this.toObj(this.removeWhite(a)),a.nodeName,"\t");return"{\n"+b+(b?g.replace(/\t/g,b):g.replace(/\t|\n/g,""))+"\n}"},json2xml:function(a,b){var g=function(a,b,e){var d="",f,i;if(a instanceof Array)if(0===a.length)d+=e+"<"+b+">__EMPTY_ARRAY_</"+b+">\n";else for(f=0,i=a.length;f<i;f+=1)var l=e+g(a[f],b,e+"\t")+"\n",d=d+l;else if("object"===typeof a){f=!1;d+=e+"<"+b;for(i in a)a.hasOwnProperty(i)&&("@"===
i.charAt(0)?d+=" "+i.substr(1)+'="'+a[i].toString()+'"':f=!0);d+=f?">":"/>";if(f){for(i in a)a.hasOwnProperty(i)&&("#text"===i?d+=a[i]:"#cdata"===i?d+="<![CDATA["+a[i]+"]]\>":"@"!==i.charAt(0)&&(d+=g(a[i],i,e+"\t")));d+=("\n"===d.charAt(d.length-1)?e:"")+"</"+b+">"}}else"function"===typeof a?d+=e+"<"+b+"><![CDATA["+a+"]]\></"+b+">":(void 0===a&&(a=""),d='""'===a.toString()||0===a.toString().length?d+(e+"<"+b+">__EMPTY_STRING_</"+b+">"):d+(e+"<"+b+">"+a.toString()+"</"+b+">"));return d},f="",e;for(e in a)a.hasOwnProperty(e)&&
(f+=g(a[e],e,""));return b?f.replace(/\t/g,b):f.replace(/\t|\n/g,"")},toObj:function(a){var b={},g=/function/i;if(1===a.nodeType){if(a.attributes.length){var f;for(f=0;f<a.attributes.length;f+=1)b["@"+a.attributes[f].nodeName]=(a.attributes[f].nodeValue||"").toString()}if(a.firstChild){var e=f=0,h=!1,c;for(c=a.firstChild;c;c=c.nextSibling)1===c.nodeType?h=!0:3===c.nodeType&&c.nodeValue.match(/[^ \f\n\r\t\v]/)?f+=1:4===c.nodeType&&(e+=1);if(h)if(2>f&&2>e){this.removeWhite(a);for(c=a.firstChild;c;c=
c.nextSibling)3===c.nodeType?b["#text"]=this.escape(c.nodeValue):4===c.nodeType?g.test(c.nodeValue)?b[c.nodeName]=[b[c.nodeName],c.nodeValue]:b["#cdata"]=this.escape(c.nodeValue):b[c.nodeName]?b[c.nodeName]instanceof Array?b[c.nodeName][b[c.nodeName].length]=this.toObj(c):b[c.nodeName]=[b[c.nodeName],this.toObj(c)]:b[c.nodeName]=this.toObj(c)}else a.attributes.length?b["#text"]=this.escape(this.innerXml(a)):b=this.escape(this.innerXml(a));else if(f)a.attributes.length?b["#text"]=this.escape(this.innerXml(a)):
(b=this.escape(this.innerXml(a)),"__EMPTY_ARRAY_"===b?b="[]":"__EMPTY_STRING_"===b&&(b=""));else if(e)if(1<e)b=this.escape(this.innerXml(a));else for(c=a.firstChild;c;c=c.nextSibling)if(g.test(a.firstChild.nodeValue)){b=a.firstChild.nodeValue;break}else b["#cdata"]=this.escape(c.nodeValue)}!a.attributes.length&&!a.firstChild&&(b=null)}else 9===a.nodeType?b=this.toObj(a.documentElement):alert("unhandled node type: "+a.nodeType);return b},toJson:function(a,b,g,f){void 0===f&&(f=!0);var e=b?'"'+b+'"':
"",h="\t",c="\n";f||(c=h="");if("[]"===a)e+=b?":[]":"[]";else if(a instanceof Array){var j,d,k=[];for(d=0,j=a.length;d<j;d+=1)k[d]=this.toJson(a[d],"",g+h,f);e+=(b?":[":"[")+(1<k.length?c+g+h+k.join(","+c+g+h)+c+g:k.join(""))+"]"}else if(null===a)e+=(b&&":")+"null";else if("object"===typeof a){j=[];for(d in a)a.hasOwnProperty(d)&&(j[j.length]=this.toJson(a[d],d,g+h,f));e+=(b?":{":"{")+(1<j.length?c+g+h+j.join(","+c+g+h)+c+g:j.join(""))+"}"}else e="string"===typeof a?e+((b&&":")+'"'+a.replace(/\\/g,
"\\\\").replace(/\"/g,'\\"')+'"'):e+((b&&":")+a.toString());return e},innerXml:function(a){var b="";if("innerHTML"in a)b=a.innerHTML;else for(var g=function(a){var b="",h;if(1===a.nodeType){b+="<"+a.nodeName;for(h=0;h<a.attributes.length;h+=1)b+=" "+a.attributes[h].nodeName+'="'+(a.attributes[h].nodeValue||"").toString()+'"';if(a.firstChild){b+=">";for(h=a.firstChild;h;h=h.nextSibling)b+=g(h);b+="</"+a.nodeName+">"}else b+="/>"}else 3===a.nodeType?b+=a.nodeValue:4===a.nodeType&&(b+="<![CDATA["+a.nodeValue+
"]]\>");return b},a=a.firstChild;a;a=a.nextSibling)b+=g(a);return b},escape:function(a){return a.replace(/[\\]/g,"\\\\").replace(/[\"]/g,'\\"').replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r")},removeWhite:function(a){a.normalize();var b;for(b=a.firstChild;b;)if(3===b.nodeType)if(b.nodeValue.match(/[^ \f\n\r\t\v]/))b=b.nextSibling;else{var g=b.nextSibling;a.removeChild(b);b=g}else 1===b.nodeType&&this.removeWhite(b),b=b.nextSibling;return a}};
function tableToGrid(j,k){jQuery(j).each(function(){if(!this.grid){jQuery(this).width("99%");var b=jQuery(this).width(),c=jQuery("tr td:first-child input[type=checkbox]:first",jQuery(this)),a=jQuery("tr td:first-child input[type=radio]:first",jQuery(this)),c=0<c.length,a=!c&&0<a.length,i=c||a,d=[],e=[];jQuery("th",jQuery(this)).each(function(){0===d.length&&i?(d.push({name:"__selection__",index:"__selection__",width:0,hidden:!0}),e.push("__selection__")):(d.push({name:jQuery(this).attr("id")||jQuery.trim(jQuery.jgrid.stripHtml(jQuery(this).html())).split(" ").join("_"),
index:jQuery(this).attr("id")||jQuery.trim(jQuery.jgrid.stripHtml(jQuery(this).html())).split(" ").join("_"),width:jQuery(this).width()||150}),e.push(jQuery(this).html()))});var f=[],g=[],h=[];jQuery("tbody > tr",jQuery(this)).each(function(){var b={},a=0;jQuery("td",jQuery(this)).each(function(){if(0===a&&i){var c=jQuery("input",jQuery(this)),e=c.attr("value");g.push(e||f.length);c.is(":checked")&&h.push(e);b[d[a].name]=c.attr("value")}else b[d[a].name]=jQuery(this).html();a++});0<a&&f.push(b)});
jQuery(this).empty();jQuery(this).addClass("scroll");jQuery(this).jqGrid(jQuery.extend({datatype:"local",width:b,colNames:e,colModel:d,multiselect:c},k||{}));for(b=0;b<f.length;b++)a=null,0<g.length&&(a=g[b])&&a.replace&&(a=encodeURIComponent(a).replace(/[.\-%]/g,"_")),null===a&&(a=b+1),jQuery(this).jqGrid("addRowData",a,f[b]);for(b=0;b<h.length;b++)jQuery(this).jqGrid("setSelection",h[b])}})};
(function(b){b.jgrid.msie&&8==b.jgrid.msiever()&&(b.expr[":"].hidden=function(b){return 0===b.offsetWidth||0===b.offsetHeight||"none"==b.style.display});b.jgrid._multiselect=!1;if(b.ui&&b.ui.multiselect){if(b.ui.multiselect.prototype._setSelected){var o=b.ui.multiselect.prototype._setSelected;b.ui.multiselect.prototype._setSelected=function(a,d){var c=o.call(this,a,d);if(d&&this.selectedList){var e=this.element;this.selectedList.find("li").each(function(){b(this).data("optionLink")&&b(this).data("optionLink").remove().appendTo(e)})}return c}}b.ui.multiselect.prototype.destroy&&
(b.ui.multiselect.prototype.destroy=function(){this.element.show();this.container.remove();b.Widget===void 0?b.widget.prototype.destroy.apply(this,arguments):b.Widget.prototype.destroy.apply(this,arguments)});b.jgrid._multiselect=!0}b.jgrid.extend({sortableColumns:function(a){return this.each(function(){function d(){c.p.disableClick=true}var c=this,e=b.jgrid.jqID(c.p.id),e={tolerance:"pointer",axis:"x",scrollSensitivity:"1",items:">th:not(:has(#jqgh_"+e+"_cb,#jqgh_"+e+"_rn,#jqgh_"+e+"_subgrid),:hidden)",
placeholder:{element:function(a){return b(document.createElement(a[0].nodeName)).addClass(a[0].className+" ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0]},update:function(b,a){a.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));a.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}},update:function(a,
e){var d=b(e.item).parent(),d=b(">th",d),f={},g=c.p.id+"_";b.each(c.p.colModel,function(b){f[this.name]=b});var j=[];d.each(function(){var a=b(">div",this).get(0).id.replace(/^jqgh_/,"").replace(g,"");f.hasOwnProperty(a)&&j.push(f[a])});b(c).jqGrid("remapColumns",j,true,true);b.isFunction(c.p.sortable.update)&&c.p.sortable.update(j);setTimeout(function(){c.p.disableClick=false},50)}};if(c.p.sortable.options)b.extend(e,c.p.sortable.options);else if(b.isFunction(c.p.sortable))c.p.sortable={update:c.p.sortable};
if(e.start){var g=e.start;e.start=function(b,a){d();g.call(this,b,a)}}else e.start=d;if(c.p.sortable.exclude)e.items=e.items+(":not("+c.p.sortable.exclude+")");a.sortable(e).data("sortable").floating=true})},columnChooser:function(a){function d(a,c){a&&(typeof a=="string"?b.fn[a]&&b.fn[a].apply(c,b.makeArray(arguments).slice(2)):b.isFunction(a)&&a.apply(c,b.makeArray(arguments).slice(2)))}var c=this;if(!b("#colchooser_"+b.jgrid.jqID(c[0].p.id)).length){var e=b('<div id="colchooser_'+c[0].p.id+'" style="position:relative;overflow:hidden"><div><select multiple="multiple"></select></div></div>'),
g=b("select",e),a=b.extend({width:420,height:240,classname:null,done:function(b){b&&c.jqGrid("remapColumns",b,true)},msel:"multiselect",dlog:"dialog",dialog_opts:{minWidth:470},dlog_opts:function(a){var c={};c[a.bSubmit]=function(){a.apply_perm();a.cleanup(false)};c[a.bCancel]=function(){a.cleanup(true)};return b.extend(true,{buttons:c,close:function(){a.cleanup(true)},modal:a.modal||false,resizable:a.resizable||true,width:a.width+20},a.dialog_opts||{})},apply_perm:function(){b("option",g).each(function(){this.selected?
c.jqGrid("showCol",i[this.value].name):c.jqGrid("hideCol",i[this.value].name)});var e=[];b("option:selected",g).each(function(){e.push(parseInt(this.value,10))});b.each(e,function(){delete m[i[parseInt(this,10)].name]});b.each(m,function(){var b=parseInt(this,10);var a=e,c=b;if(c>=0){var d=a.slice(),i=d.splice(c,Math.max(a.length-c,c));if(c>a.length)c=a.length;d[c]=b;e=d.concat(i)}else e=void 0});a.done&&a.done.call(c,e)},cleanup:function(b){d(a.dlog,e,"destroy");d(a.msel,g,"destroy");e.remove();
b&&a.done&&a.done.call(c)},msel_opts:{}},b.jgrid.col,a||{});if(b.ui&&b.ui.multiselect&&a.msel=="multiselect"){if(!b.jgrid._multiselect){alert("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");return}a.msel_opts=b.extend(b.ui.multiselect.defaults,a.msel_opts)}a.caption&&e.attr("title",a.caption);if(a.classname){e.addClass(a.classname);g.addClass(a.classname)}if(a.width){b(">div",e).css({width:a.width,margin:"0 auto"});g.css("width",a.width)}if(a.height){b(">div",
e).css("height",a.height);g.css("height",a.height-10)}var i=c.jqGrid("getGridParam","colModel"),q=c.jqGrid("getGridParam","colNames"),m={},f=[];g.empty();b.each(i,function(a){m[this.name]=a;this.hidedlg?this.hidden||f.push(a):g.append("<option value='"+a+"' "+(this.hidden?"":"selected='selected'")+">"+b.jgrid.stripHtml(q[a])+"</option>")});var n=b.isFunction(a.dlog_opts)?a.dlog_opts.call(c,a):a.dlog_opts;d(a.dlog,e,n);n=b.isFunction(a.msel_opts)?a.msel_opts.call(c,a):a.msel_opts;d(a.msel,g,n)}},sortableRows:function(a){return this.each(function(){var d=
this;if(d.grid&&!d.p.treeGrid&&b.fn.sortable){a=b.extend({cursor:"move",axis:"y",items:".jqgrow"},a||{});if(a.start&&b.isFunction(a.start)){a._start_=a.start;delete a.start}else a._start_=false;if(a.update&&b.isFunction(a.update)){a._update_=a.update;delete a.update}else a._update_=false;a.start=function(c,e){b(e.item).css("border-width","0px");b("td",e.item).each(function(b){this.style.width=d.grid.cols[b].style.width});if(d.p.subGrid){var g=b(e.item).attr("id");try{b(d).jqGrid("collapseSubGridRow",
g)}catch(i){}}a._start_&&a._start_.apply(this,[c,e])};a.update=function(c,e){b(e.item).css("border-width","");d.p.rownumbers===true&&b("td.jqgrid-rownum",d.rows).each(function(a){b(this).html(a+1+(parseInt(d.p.page,10)-1)*parseInt(d.p.rowNum,10))});a._update_&&a._update_.apply(this,[c,e])};b("tbody:first",d).sortable(a);b("tbody:first",d).disableSelection()}})},gridDnD:function(a){return this.each(function(){function d(){var a=b.data(c,"dnd");b("tr.jqgrow:not(.ui-draggable)",c).draggable(b.isFunction(a.drag)?
a.drag.call(b(c),a):a.drag)}var c=this,e,g;if(c.grid&&!c.p.treeGrid&&b.fn.draggable&&b.fn.droppable){b("#jqgrid_dnd")[0]===void 0&&b("body").append("<table id='jqgrid_dnd' class='ui-jqgrid-dnd'></table>");if(typeof a=="string"&&a=="updateDnD"&&c.p.jqgdnd===true)d();else{a=b.extend({drag:function(a){return b.extend({start:function(e,d){var f;if(c.p.subGrid){f=b(d.helper).attr("id");try{b(c).jqGrid("collapseSubGridRow",f)}catch(g){}}for(f=0;f<b.data(c,"dnd").connectWith.length;f++)b(b.data(c,"dnd").connectWith[f]).jqGrid("getGridParam",
"reccount")=="0"&&b(b.data(c,"dnd").connectWith[f]).jqGrid("addRowData","jqg_empty_row",{});d.helper.addClass("ui-state-highlight");b("td",d.helper).each(function(b){this.style.width=c.grid.headers[b].width+"px"});a.onstart&&b.isFunction(a.onstart)&&a.onstart.call(b(c),e,d)},stop:function(e,d){var f;if(d.helper.dropped&&!a.dragcopy){f=b(d.helper).attr("id");f===void 0&&(f=b(this).attr("id"));b(c).jqGrid("delRowData",f)}for(f=0;f<b.data(c,"dnd").connectWith.length;f++)b(b.data(c,"dnd").connectWith[f]).jqGrid("delRowData",
"jqg_empty_row");a.onstop&&b.isFunction(a.onstop)&&a.onstop.call(b(c),e,d)}},a.drag_opts||{})},drop:function(a){return b.extend({accept:function(a){if(!b(a).hasClass("jqgrow"))return a;a=b(a).closest("table.ui-jqgrid-btable");if(a.length>0&&b.data(a[0],"dnd")!==void 0){a=b.data(a[0],"dnd").connectWith;return b.inArray("#"+b.jgrid.jqID(this.id),a)!=-1?true:false}return false},drop:function(e,d){if(b(d.draggable).hasClass("jqgrow")){var f=b(d.draggable).attr("id"),f=d.draggable.parent().parent().jqGrid("getRowData",
f);if(!a.dropbyname){var g=0,j={},h,l,p=b("#"+b.jgrid.jqID(this.id)).jqGrid("getGridParam","colModel");try{for(l in f)if(f.hasOwnProperty(l)){h=p[g].name;h=="cb"||h=="rn"||h=="subgrid"||f.hasOwnProperty(l)&&p[g]&&(j[h]=f[l]);g++}f=j}catch(o){}}d.helper.dropped=true;if(a.beforedrop&&b.isFunction(a.beforedrop)){h=a.beforedrop.call(this,e,d,f,b("#"+b.jgrid.jqID(c.p.id)),b(this));h!==void 0&&h!==null&&typeof h=="object"&&(f=h)}if(d.helper.dropped){var k;if(a.autoid)if(b.isFunction(a.autoid))k=a.autoid.call(this,
f);else{k=Math.ceil(Math.random()*1E3);k=a.autoidprefix+k}b("#"+b.jgrid.jqID(this.id)).jqGrid("addRowData",k,f,a.droppos)}a.ondrop&&b.isFunction(a.ondrop)&&a.ondrop.call(this,e,d,f)}}},a.drop_opts||{})},onstart:null,onstop:null,beforedrop:null,ondrop:null,drop_opts:{activeClass:"ui-state-active",hoverClass:"ui-state-hover"},drag_opts:{revert:"invalid",helper:"clone",cursor:"move",appendTo:"#jqgrid_dnd",zIndex:5E3},dragcopy:false,dropbyname:false,droppos:"first",autoid:true,autoidprefix:"dnd_"},a||
{});if(a.connectWith){a.connectWith=a.connectWith.split(",");a.connectWith=b.map(a.connectWith,function(a){return b.trim(a)});b.data(c,"dnd",a);c.p.reccount!="0"&&!c.p.jqgdnd&&d();c.p.jqgdnd=true;for(e=0;e<a.connectWith.length;e++){g=a.connectWith[e];b(g).droppable(b.isFunction(a.drop)?a.drop.call(b(c),a):a.drop)}}}}})},gridResize:function(a){return this.each(function(){var d=this,c=b.jgrid.jqID(d.p.id);if(d.grid&&b.fn.resizable){a=b.extend({},a||{});if(a.alsoResize){a._alsoResize_=a.alsoResize;delete a.alsoResize}else a._alsoResize_=
false;if(a.stop&&b.isFunction(a.stop)){a._stop_=a.stop;delete a.stop}else a._stop_=false;a.stop=function(e,g){b(d).jqGrid("setGridParam",{height:b("#gview_"+c+" .ui-jqgrid-bdiv").height()});b(d).jqGrid("setGridWidth",g.size.width,a.shrinkToFit);a._stop_&&a._stop_.call(d,e,g)};a.alsoResize=a._alsoResize_?eval("("+("{'#gview_"+c+" .ui-jqgrid-bdiv':true,'"+a._alsoResize_+"':true}")+")"):b(".ui-jqgrid-bdiv","#gview_"+c);delete a._alsoResize_;b("#gbox_"+c).resizable(a)}})}})})(jQuery);
;(function($){
/**
 * jqGrid English Translation
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "View {0} - {1} of {2}",
		emptyrecords: "No records to view",
		loadtext: "Loading...",
		pgtext : "Page {0} of {1}"
	},
	search : {
		caption: "Search...",
		Find: "Find",
		Reset: "Reset",
		odata : ['equal', 'not equal', 'less', 'less or equal','greater','greater or equal', 'begins with','does not begin with','is in','is not in','ends with','does not end with','contains','does not contain'],
		groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
		matchText: " match",
		rulesText: " rules"
	},
	edit : {
		addCaption: "Add Record",
		editCaption: "Edit Record",
		bSubmit: "Submit",
		bCancel: "Cancel",
		bClose: "Close",
		saveData: "Data has been changed! Save changes?",
		bYes : "Yes",
		bNo : "No",
		bExit : "Cancel",
		msg: {
			required:"Field is required",
			number:"Please, enter valid number",
			minValue:"value must be greater than or equal to ",
			maxValue:"value must be less than or equal to",
			email: "is not a valid e-mail",
			integer: "Please, enter valid integer value",
			date: "Please, enter valid date value",
			url: "is not a valid URL. Prefix required ('http://' or 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "View Record",
		bClose: "Close"
	},
	del : {
		caption: "Delete",
		msg: "Delete selected record(s)?",
		bSubmit: "Delete",
		bCancel: "Cancel"
	},
	nav : {
		edittext: "",
		edittitle: "Edit selected row",
		addtext:"",
		addtitle: "Add new row",
		deltext: "",
		deltitle: "Delete selected row",
		searchtext: "",
		searchtitle: "Find records",
		refreshtext: "",
		refreshtitle: "Reload Grid",
		alertcap: "Warning",
		alerttext: "Please, select row",
		viewtext: "",
		viewtitle: "View selected row"
	},
	col : {
		caption: "Select columns",
		bSubmit: "Ok",
		bCancel: "Cancel"
	},
	errors : {
		errcap : "Error",
		nourl : "No url is set",
		norecords: "No records to process",
		model : "Length of colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: ",", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
				"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
				"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
			srcformat: 'Y-m-d',
			newformat: 'n/j/Y',
			masks : {
				// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
				// and see http://docs.jquery.com/UI/Datepicker/formatDate
				// and https://github.com/jquery/globalize#dates for alternative formats used frequently
				// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
				// information about date, time, numbers and currency formats used in different countries
				// one should just convert the information in PHP format
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				// short date:
				//    n - Numeric representation of a month, without leading zeros
				//    j - Day of the month without leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				// example: 3/1/2012 which means 1 March 2012
				ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
				// long date:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
				// long date with long time:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
				// month day:
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
				// short time (without seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
				// long time (with seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				// month with year
				//    Y - A full numeric representation of a year, 4 digits
				//    F - A full textual representation of a month
				YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
			},
			reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
		target: '',
		checkbox : {disabled:true},
		idName : 'id'
	}
});
})(jQuery);
/* Plugin:      searchFilter v1.2.9
 * Author:      Kasey Speakman (kasey@cornerspeed.com)
 * License:     Dual Licensed, MIT and GPL v2 (http://www.gnu.org/licenses/gpl-2.0.html)
 *
 * REQUIREMENTS:
 *    jQuery 1.3+           (http://jquery.com/)
 *    A Themeroller Theme   (http://jqueryui.com/themeroller/)
 *
 * SECURITY WARNING
 *    You should always implement server-side checking to ensure that
 *    the query will fail when forged/invalid data is received.
 *    Clever users can send any value they want through JavaScript and HTTP POST/GET.
 *
 * THEMES
 *    Simply include the CSS file for your Themeroller theme.
 *
 * DESCRIPTION
 *     This plugin creates a new searchFilter object in the specified container
 *
 * INPUT TYPE
 *     fields:  an array of field objects. each object has the following properties:
 *              text: a string containing the display name of the field (e.g. "Field 1")
 *              itemval: a string containing the actual field name (e.g. "field1")
 *              optional properties:
 *                  ops: an array of operators in the same format as jQuery.fn.searchFilter.defaults.operators
 *                       that is: [ { op: 'gt', text: 'greater than'}, { op:'lt', text: 'less than'}, ... ]
 *                       if not specified, the passed-in options used, and failting that, jQuery.fn.searchFilter.defaults.operators will be used
 *                  *** NOTE ***
 *                  Specifying a dataUrl or dataValues property means that a <select ...> (drop-down-list) will be generated
 *                  instead of a text input <input type='text'.../> where the user would normally type in their search data
 *                  ************
 *                  dataUrl: a url that will return the html select for this field, this url will only be called once for this field
 *                  dataValues: the possible values for this field in the form [ { text: 'Data Display Text', value: 'data_actual_value' }, { ... } ]
 *                  dataInit: a function that you can use to initialize the data field. this function is passed the jQuery-fied data element
 *                  dataEvents: list of events to apply to the data element. uses $("#id").bind(type, [data], fn) to bind events to data element
 *              *** JSON of this object could look like this: ***
 *               var fields = [
 *                 {
 *                   text: 'Field Display Name',
 *                   itemval: 'field_actual_name',
 *                   // below this are optional values
 *                   ops: [ // this format is the same as jQuery.fn.searchFilter.defaults.operators
 *                     { op: 'gt', text: 'greater than' },
 *                     { op: 'lt', text: 'less than' }
 *                   ],
 *                   dataUrl: 'http://server/path/script.php?propName=propValue', // using this creates a select for the data input instead of an input type='text'
 *                   dataValues: [ // using this creates a select for the data input instead of an input type='text'
 *                     { text: 'Data Value Display Name', value: 'data_actual_value' },
 *                     { ... }
 *                   ],
 *                   dataInit: function(jElem) { jElem.datepicker(options); },
 *                   dataEvents: [ // these are the same options that you pass to $("#id").bind(type, [data], fn)
 *                     { type: 'click', data: { i: 7 }, fn: function(e) { console.log(e.data.i); } },
 *                     { type: 'keypress', fn: function(e) { console.log('keypress'); } }
 *                   ]
 *                 },
 *                 { ... }
 *               ]
 *     options: name:value properties containing various creation options
 *              see jQuery.fn.searchFilter.defaults for the overridable options
 *
 * RETURN TYPE: This plugin returns a SearchFilter object, which has additional SearchFilter methods:
 *     Methods
 *         add:    Adds a filter. added to the end of the list unless a jQuery event object or valid row number is passed.
 *         del:    Removes a filter. removed from the end of the list unless a jQuery event object or valid row number is passed.
 *         reset:  resets filters back to original state (only one blank filter), and calls onReset
 *         search: puts the search rules into an object and calls onSearch with it
 *         close:  calls the onClose event handler
 *
 * USAGE
 *     HTML
 *         <head>
 *             ...
 *             <script src="path/to/jquery.min.js" type="text/javascript"></script>
 *             <link href="path/to/themeroller.css" rel="Stylesheet" type="text/css" />
 *             <script src="path/to/jquery.searchFilter.js" type="text/javascript"></script>
 *             <link href="path/to/jquery.searchFilter.css" rel="Stylesheet" type="text/css" />
 *             ...
 *         </head>
 *         <body>
 *             ...
 *             <div id='mySearch'></div>
 *             ...
 *         </body>
 *     JQUERY
 *         Methods
 *             initializing: $("#mySearch").searchFilter([{text: "Field 1", value: "field1"},{text: "Field 2", value: "field2"}], {onSearch: myFilterRuleReceiverFn, onReset: myFilterResetFn });
 *         Manual Methods (there's no need to call these methods unless you are trying to manipulate searchFilter with script)
 *             add:          $("#mySearch").searchFilter().add();     // appends a blank filter
 *                           $("#mySearch").searchFilter().add(0);    // copies the first filter as second
 *             del:          $("#mySearch").searchFilter().del();     // removes the bottom filter
 *                           $("#mySearch").searchFilter().del(1);    // removes the second filter
 *             search:       $("#mySearch").searchFilter().search();  // invokes onSearch, passing it a ruleGroup object
 *             reset:        $("#mySearch").searchFilter().reset();   // resets rules and invokes onReset
 *             close:        $("#mySearch").searchFilter().close();   // without an onClose handler, equivalent to $("#mySearch").hide();
 * 
 * NOTE: You can get the jQuery object back from the SearchFilter object by chaining .$
 *     Example
 *         $("#mySearch").searchFilter().add().add().reset().$.hide();
 *     Verbose Example
 *         $("#mySearch")      // gets jQuery object for the HTML element with id="mySearch"
 *             .searchFilter() // gets the SearchFilter object for an existing search filter
 *             .add()          // adds a new filter to the end of the list
 *             .add()          // adds another new filter to the end of the list
 *             .reset()        // resets filters back to original state, triggers onReset
 *             .$              // returns jQuery object for $("#mySearch")
 *             .hide();        // equivalent to $("#mySearch").hide();
 */

jQuery.fn.searchFilter = function(fields, options) {

    function SearchFilter(jQ, fields, options) {


        //---------------------------------------------------------------
        // PUBLIC VARS
        //---------------------------------------------------------------

        this.$ = jQ; // makes the jQuery object available as .$ from the return value


        //---------------------------------------------------------------
        // PUBLIC FUNCTIONS
        //---------------------------------------------------------------

        this.add = function(i) {
            if (i == null) jQ.find(".ui-add-last").click();
            else jQ.find(".sf:eq(" + i + ") .ui-add").click();
            return this;
        };

        this.del = function(i) {
            if (i == null) jQ.find(".sf:last .ui-del").click();
            else jQ.find(".sf:eq(" + i + ") .ui-del").click();
            return this;
        };

        this.search = function(e) {
            jQ.find(".ui-search").click();
            return this;
        };

        this.reset = function(o) {
            if(o===undefined) o = false;
            jQ.find(".ui-reset").trigger('click',[o]);
            return this;
        };

        this.close = function() {
            jQ.find(".ui-closer").click();
            return this;
        };



        //---------------------------------------------------------------
        // "CONSTRUCTOR" (in air quotes)
        //---------------------------------------------------------------

        if (fields != null) { // type coercion matches undefined as well as null


            //---------------------------------------------------------------
            // UTILITY FUNCTIONS
            //---------------------------------------------------------------

            function hover() {
                jQuery(this).toggleClass("ui-state-hover");
                return false;
            }

            function active(e) {
                jQuery(this).toggleClass("ui-state-active", (e.type == "mousedown"));
                return false;
            }

            function buildOpt(value, text) {
                return "<option value='" + value + "'>" + text + "</option>";
            }

            function buildSel(className, options, isHidden) {
                return "<select class='" + className + "'" + (isHidden ? " style='display:none;'" : "") + ">" + options + "</select>";
            }

            function initData(selector, fn) {
                var jElem = jQ.find("tr.sf td.data " + selector);
                if (jElem[0] != null)
                    fn(jElem);
            }

            function bindDataEvents(selector, events) {
                var jElem = jQ.find("tr.sf td.data " + selector);
                if (jElem[0] != null) {
                    jQuery.each(events, function() {
                        if (this.data != null)
                            jElem.bind(this.type, this.data, this.fn);
                        else
                            jElem.bind(this.type, this.fn);
                    });
                }
            }


            //---------------------------------------------------------------
            // SUPER IMPORTANT PRIVATE VARS
            //---------------------------------------------------------------

            // copies jQuery.fn.searchFilter.defaults.options properties onto an empty object, then options onto that
            var opts = jQuery.extend({}, jQuery.fn.searchFilter.defaults, options);

            // this is keeps track of the last asynchronous setup
            var highest_late_setup = -1;


            //---------------------------------------------------------------
            // CREATION PROCESS STARTS
            //---------------------------------------------------------------

            // generate the global ops
            var gOps_html = "";
            jQuery.each(opts.groupOps, function() { gOps_html += buildOpt(this.op, this.text); });
            gOps_html = "<select name='groupOp'>" + gOps_html + "</select>";

            /* original content - doesn't minify very well
            jQ
            .html("") // clear any old content
            .addClass("ui-searchFilter") // add classes
            .append( // add content
            "\
            <div class='ui-widget-overlay' style='z-index: -1'>&nbsp;</div>\
            <table class='ui-widget-content ui-corner-all'>\
            <thead>\
            <tr>\
            <td colspan='5' class='ui-widget-header ui-corner-all' style='line-height: 18px;'>\
            <div class='ui-closer ui-state-default ui-corner-all ui-helper-clearfix' style='float: right;'>\
            <span class='ui-icon ui-icon-close'></span>\
            </div>\
            " + opts.windowTitle + "\
            </td>\
            </tr>\
            </thead>\
            <tbody>\
            <tr class='sf'>\
            <td class='fields'></td>\
            <td class='ops'></td>\
            <td class='data'></td>\
            <td><div class='ui-del ui-state-default ui-corner-all'><span class='ui-icon ui-icon-minus'></span></div></td>\
            <td><div class='ui-add ui-state-default ui-corner-all'><span class='ui-icon ui-icon-plus'></span></div></td>\
            </tr>\
            <tr>\
            <td colspan='5' class='divider'><div>&nbsp;</div></td>\
            </tr>\
            </tbody>\
            <tfoot>\
            <tr>\
            <td colspan='3'>\
            <span class='ui-reset ui-state-default ui-corner-all' style='display: inline-block; float: left;'><span class='ui-icon ui-icon-arrowreturnthick-1-w' style='float: left;'></span><span style='line-height: 18px; padding: 0 7px 0 3px;'>" + opts.resetText + "</span></span>\
            <span class='ui-search ui-state-default ui-corner-all' style='display: inline-block; float: right;'><span class='ui-icon ui-icon-search' style='float: left;'></span><span style='line-height: 18px; padding: 0 7px 0 3px;'>" + opts.searchText + "</span></span>\
            <span class='matchText'>" + opts.matchText + "</span> \
            " + gOps_html + " \
            <span class='rulesText'>" + opts.rulesText + "</span>\
            </td>\
            <td>&nbsp;</td>\
            <td><div class='ui-add-last ui-state-default ui-corner-all'><span class='ui-icon ui-icon-plusthick'></span></div></td>\
            </tr>\
            </tfoot>\
            </table>\
            ");
            /* end hard-to-minify code */
            /* begin easier to minify code */
            jQ.html("").addClass("ui-searchFilter").append("<div class='ui-widget-overlay' style='z-index: -1'>&#160;</div><table class='ui-widget-content ui-corner-all'><thead><tr><td colspan='5' class='ui-widget-header ui-corner-all' style='line-height: 18px;'><div class='ui-closer ui-state-default ui-corner-all ui-helper-clearfix' style='float: right;'><span class='ui-icon ui-icon-close'></span></div>" + opts.windowTitle + "</td></tr></thead><tbody><tr class='sf'><td class='fields'></td><td class='ops'></td><td class='data'></td><td><div class='ui-del ui-state-default ui-corner-all'><span class='ui-icon ui-icon-minus'></span></div></td><td><div class='ui-add ui-state-default ui-corner-all'><span class='ui-icon ui-icon-plus'></span></div></td></tr><tr><td colspan='5' class='divider'><hr class='ui-widget-content' style='margin:1px'/></td></tr></tbody><tfoot><tr><td colspan='3'><span class='ui-reset ui-state-default ui-corner-all' style='display: inline-block; float: left;'><span class='ui-icon ui-icon-arrowreturnthick-1-w' style='float: left;'></span><span style='line-height: 18px; padding: 0 7px 0 3px;'>" + opts.resetText + "</span></span><span class='ui-search ui-state-default ui-corner-all' style='display: inline-block; float: right;'><span class='ui-icon ui-icon-search' style='float: left;'></span><span style='line-height: 18px; padding: 0 7px 0 3px;'>" + opts.searchText + "</span></span><span class='matchText'>" + opts.matchText + "</span> " + gOps_html + " <span class='rulesText'>" + opts.rulesText + "</span></td><td>&#160;</td><td><div class='ui-add-last ui-state-default ui-corner-all'><span class='ui-icon ui-icon-plusthick'></span></div></td></tr></tfoot></table>");
            /* end easier-to-minify code */

            var jRow = jQ.find("tr.sf");
            var jFields = jRow.find("td.fields");
            var jOps = jRow.find("td.ops");
            var jData = jRow.find("td.data");

            // generate the defaults
            var default_ops_html = "";
            jQuery.each(opts.operators, function() { default_ops_html += buildOpt(this.op, this.text); });
            default_ops_html = buildSel("default", default_ops_html, true);
            jOps.append(default_ops_html);
            var default_data_html = "<input type='text' class='default' style='display:none;' />";
            jData.append(default_data_html);

            // generate the field list as a string
            var fields_html = "";
            var has_custom_ops = false;
            var has_custom_data = false;
            jQuery.each(fields, function(i) {
                var field_num = i;
                fields_html += buildOpt(this.itemval, this.text);
                // add custom ops if they exist
                if (this.ops != null) {
                    has_custom_ops = true;
                    var custom_ops = "";
                    jQuery.each(this.ops, function() { custom_ops += buildOpt(this.op, this.text); });
                    custom_ops = buildSel("field" + field_num, custom_ops, true);
                    jOps.append(custom_ops);
                }
                // add custom data if it is given
                if (this.dataUrl != null) {
                    if (i > highest_late_setup) highest_late_setup = i;
                    has_custom_data = true;
                    var dEvents = this.dataEvents;
                    var iEvent = this.dataInit;
                    var bs = this.buildSelect;
                    jQuery.ajax(jQuery.extend({
                        url : this.dataUrl,
                        complete: function(data) {
                            var $d;
                            if(bs != null) $d =jQuery("<div />").append(bs(data));
                            else $d = jQuery("<div />").append(data.responseText);
                            $d.find("select").addClass("field" + field_num).hide();
                            jData.append($d.html());
                            if (iEvent) initData(".field" + i, iEvent);
                            if (dEvents) bindDataEvents(".field" + i, dEvents);
                            if (i == highest_late_setup) { // change should get called no more than twice when this searchFilter is constructed
                                jQ.find("tr.sf td.fields select[name='field']").change();
                            }
                        }
                    },opts.ajaxSelectOptions));
                } else if (this.dataValues != null) {
                    has_custom_data = true;
                    var custom_data = "";
                    jQuery.each(this.dataValues, function() { custom_data += buildOpt(this.value, this.text); });
                    custom_data = buildSel("field" + field_num, custom_data, true);
                    jData.append(custom_data);
                } else if (this.dataEvents != null || this.dataInit != null) {
                    has_custom_data = true;
                    var custom_data = "<input type='text' class='field" + field_num + "' />";
                    jData.append(custom_data);
                }
                // attach events to data if they exist
                if (this.dataInit != null && i != highest_late_setup)
                    initData(".field" + i, this.dataInit);
                if (this.dataEvents != null && i != highest_late_setup)
                    bindDataEvents(".field" + i, this.dataEvents);
            });
            fields_html = "<select name='field'>" + fields_html + "</select>";
            jFields.append(fields_html);

            // setup the field select with an on-change event if there are custom ops or data
            var jFSelect = jFields.find("select[name='field']");
            if (has_custom_ops) jFSelect.change(function(e) {
                var index = e.target.selectedIndex;
                var td = jQuery(e.target).parents("tr.sf").find("td.ops");
                td.find("select").removeAttr("name").hide(); // disown and hide all elements
                var jElem = td.find(".field" + index);
                if (jElem[0] == null) jElem = td.find(".default"); // if there's not an element for that field, use the default one
                jElem.attr("name", "op").show();
                return false;
            });
            else jOps.find(".default").attr("name", "op").show();
            if (has_custom_data) jFSelect.change(function(e) {
                var index = e.target.selectedIndex;
                var td = jQuery(e.target).parents("tr.sf").find("td.data");
                td.find("select,input").removeClass("vdata").hide(); // disown and hide all elements
                var jElem = td.find(".field" + index);
                if (jElem[0] == null) jElem = td.find(".default"); // if there's not an element for that field, use the default one
                jElem.show().addClass("vdata");
                return false;
            });
            else jData.find(".default").show().addClass("vdata");
            // go ahead and call the change event and setup the ops and data values
            if (has_custom_ops || has_custom_data) jFSelect.change();

            // bind events
            jQ.find(".ui-state-default").hover(hover, hover).mousedown(active).mouseup(active); // add hover/active effects to all buttons
            jQ.find(".ui-closer").click(function(e) {
                opts.onClose(jQuery(jQ.selector));
                return false;
            });
            jQ.find(".ui-del").click(function(e) {
                var row = jQuery(e.target).parents(".sf");
                if (row.siblings(".sf").length > 0) { // doesn't remove if there's only one filter left
                    if (opts.datepickerFix === true && jQuery.fn.datepicker !== undefined)
                        row.find(".hasDatepicker").datepicker("destroy"); // clean up datepicker's $.data mess
                    row.remove(); // also unbinds
                } else { // resets the filter if it's the last one
                    row.find("select[name='field']")[0].selectedIndex = 0;
                    row.find("select[name='op']")[0].selectedIndex = 0;
                    row.find(".data input").val(""); // blank all input values
                    row.find(".data select").each(function() { this.selectedIndex = 0; }); // select first option on all selects
                    row.find("select[name='field']").change(function(event){event.stopPropagation();}); // trigger any change events
                }
                return false;
            });
            jQ.find(".ui-add").click(function(e) {
                var row = jQuery(e.target).parents(".sf");
                var newRow = row.clone(true).insertAfter(row);
                newRow.find(".ui-state-default").removeClass("ui-state-hover ui-state-active");
                if (opts.clone) {
                    newRow.find("select[name='field']")[0].selectedIndex = row.find("select[name='field']")[0].selectedIndex;
                    var stupid_browser = (newRow.find("select[name='op']")[0] == null); // true for IE6
                    if (!stupid_browser)
                        newRow.find("select[name='op']").focus()[0].selectedIndex = row.find("select[name='op']")[0].selectedIndex;
                    var jElem = newRow.find("select.vdata");
                    if (jElem[0] != null) // select doesn't copy it's selected index when cloned
                        jElem[0].selectedIndex = row.find("select.vdata")[0].selectedIndex;
                } else {
                    newRow.find(".data input").val(""); // blank all input values
                    newRow.find("select[name='field']").focus();
                }
                if (opts.datepickerFix === true && jQuery.fn.datepicker !== undefined) { // using $.data to associate data with document elements is Not Good
                    row.find(".hasDatepicker").each(function() {
                        var settings = jQuery.data(this, "datepicker").settings;
                        newRow.find("#" + this.id).unbind().removeAttr("id").removeClass("hasDatepicker").datepicker(settings);
                    });
                }
                newRow.find("select[name='field']").change(function(event){event.stopPropagation();} );
                return false;
            });
            jQ.find(".ui-search").click(function(e) {
                var ui = jQuery(jQ.selector); // pointer to search box wrapper element
                var ruleGroup;
                var group_op = ui.find("select[name='groupOp'] :selected").val(); // puls "AND" or "OR"
                if (!opts.stringResult) {
                    ruleGroup = {
                        groupOp: group_op,
                        rules: []
                    };
                } else {
                    ruleGroup = "{\"groupOp\":\"" + group_op + "\",\"rules\":[";
                }
                ui.find(".sf").each(function(i) {
                    var tField = jQuery(this).find("select[name='field'] :selected").val();
                    var tOp = jQuery(this).find("select[name='op'] :selected").val();
                    var tData = jQuery(this).find("input.vdata,select.vdata :selected").val();
                    tData += "";
                    if (!opts.stringResult) {
                        ruleGroup.rules.push({
                            field: tField,
                            op: tOp,
                            data: tData
                        });
                    } else {
						tData = tData.replace(/\\/g,'\\\\').replace(/\"/g,'\\"');
                        if (i > 0) ruleGroup += ",";
                        ruleGroup += "{\"field\":\"" + tField + "\",";
                        ruleGroup += "\"op\":\"" + tOp + "\",";
                        ruleGroup += "\"data\":\"" + tData + "\"}";
                    }
                });
                if (opts.stringResult) ruleGroup += "]}";
                opts.onSearch(ruleGroup);
                return false;
            });
            jQ.find(".ui-reset").click(function(e,op) {
                var ui = jQuery(jQ.selector);
                ui.find(".ui-del").click(); // removes all filters, resets the last one
                ui.find("select[name='groupOp']")[0].selectedIndex = 0; // changes the op back to the default one
                opts.onReset(op);
                return false;
            });
            jQ.find(".ui-add-last").click(function() {
                var row = jQuery(jQ.selector + " .sf:last");
                var newRow = row.clone(true).insertAfter(row);
                newRow.find(".ui-state-default").removeClass("ui-state-hover ui-state-active");
                newRow.find(".data input").val(""); // blank all input values
                newRow.find("select[name='field']").focus();
                if (opts.datepickerFix === true && jQuery.fn.datepicker !== undefined) { // using $.data to associate data with document elements is Not Good
                    row.find(".hasDatepicker").each(function() {
                        var settings = jQuery.data(this, "datepicker").settings;
                        newRow.find("#" + this.id).unbind().removeAttr("id").removeClass("hasDatepicker").datepicker(settings);
                    });
                }
                newRow.find("select[name='field']").change(function(event){event.stopPropagation();});
                return false;
            });

            this.setGroupOp = function(setting) {
                /* a "setter" for groupping argument.
                 *  ("AND" or "OR")
                 *
                 * Inputs:
                 *  setting - a string
                 *
                 * Returns:
                 *  Does not return anything. May add success / failure reporting in future versions.
                 *
                 *  author: Daniel Dotsenko (dotsa@hotmail.com)
                 */
                selDOMobj = jQ.find("select[name='groupOp']")[0];
                var indexmap = {}, l = selDOMobj.options.length, i;
                for (i=0; i<l; i++) {
                    indexmap[selDOMobj.options[i].value] = i;
                }
                selDOMobj.selectedIndex = indexmap[setting];
                jQuery(selDOMobj).change(function(event){event.stopPropagation();});
            };

            this.setFilter = function(settings) {
                /* a "setter" for an arbitrary SearchFilter's filter line.
                 * designed to abstract the DOM manipulations required to infer
                 * a particular filter is a fit to the search box.
                 *
                 * Inputs:
                 *  settings - an "object" (dictionary)
                 *   index (optional*) (to be implemented in the future) : signed integer index (from top to bottom per DOM) of the filter line to fill.
                 *           Negative integers (rooted in -1 and lower) denote position of the line from the bottom.
                 *   sfref (optional*) : DOM object referencing individual '.sf' (normally a TR element) to be populated. (optional)
                 *   filter (mandatory) : object (dictionary) of form {'field':'field_value','op':'op_value','data':'data value'}
                 *
                 * * It is mandatory to have either index or sfref defined.
                 *
                 * Returns:
                 *  Does not return anything. May add success / failure reporting in future versions.
                 *
                 *  author: Daniel Dotsenko (dotsa@hotmail.com)
                 */

                var o = settings['sfref'], filter = settings['filter'];
                
                // setting up valueindexmap that we will need to manipulate SELECT elements.
                var fields = [], i, j , l, lj, li,
                    valueindexmap = {};
                    // example of valueindexmap:
                    // {'field1':{'index':0,'ops':{'eq':0,'ne':1}},'fieldX':{'index':1,'ops':{'eq':0,'ne':1},'data':{'true':0,'false':1}}},
                    // if data is undefined it's a INPUT field. If defined, it's SELECT
                selDOMobj = o.find("select[name='field']")[0];
                for (i=0, l=selDOMobj.options.length; i<l; i++) {
                    valueindexmap[selDOMobj.options[i].value] = {'index':i,'ops':{}};
                    fields.push(selDOMobj.options[i].value);
                }
                for (i=0, li=fields.length; i < li; i++) {
                    selDOMobj = o.find(".ops > select[class='field"+i+"']")[0];
                    if (selDOMobj) {
                        for (j=0, lj=selDOMobj.options.length; j<lj; j++) {
                            valueindexmap[fields[i]]['ops'][selDOMobj.options[j].value] = j;
                        }
                    }
                    selDOMobj = o.find(".data > select[class='field"+i+"']")[0];
                    if (selDOMobj) {
                        valueindexmap[fields[i]]['data'] = {}; // this setting is the flag that 'data' is contained in a SELECT
                        for (j=0, lj=selDOMobj.options.length; j<lj; j++) {
                            valueindexmap[fields[i]]['data'][selDOMobj.options[j].value] = j;
                        }
                    }
                } // done populating valueindexmap

                // preparsing the index values for SELECT elements.
                var fieldvalue, fieldindex, opindex, datavalue, dataindex;
                fieldvalue = filter['field'];
				if (valueindexmap[fieldvalue]) {
					fieldindex = valueindexmap[fieldvalue]['index'];
				}
                if (fieldindex != null) {
                    opindex = valueindexmap[fieldvalue]['ops'][filter['op']];
                    if(opindex === undefined) {
                        for(i=0,li=options.operators.length; i<li;i++) {
                            if(options.operators[i].op == filter.op ){
                                opindex = i;
                                break;
                            }
                        }
                    }
                    datavalue = filter['data'];
                    if (valueindexmap[fieldvalue]['data'] == null) {
                        dataindex = -1; // 'data' is not SELECT, Making the var 'defined'
                    } else {
                        dataindex = valueindexmap[fieldvalue]['data'][datavalue]; // 'undefined' may come from here.
                    }
                }
                // only if values for 'field' and 'op' and 'data' are 'found' in mapping...
                if (fieldindex != null && opindex != null && dataindex != null) {
                    o.find("select[name='field']")[0].selectedIndex = fieldindex;
                    o.find("select[name='field']").change();
                    o.find("select[name='op']")[0].selectedIndex = opindex;
                    o.find("input.vdata").val(datavalue); // if jquery does not find any INPUT, it does not set any. This means we deal with SELECT
                    o = o.find("select.vdata")[0];
                    if (o) {
                        o.selectedIndex = dataindex;
                    }
					return true
                } else {
					return false
				}
            }; // end of this.setFilter fn
        } // end of if fields != null
    }
    return new SearchFilter(this, fields, options);
};

jQuery.fn.searchFilter.version = '1.2.9';

/* This property contains the default options */
jQuery.fn.searchFilter.defaults = {

    /*
     * PROPERTY
     * TYPE:        boolean 
     * DESCRIPTION: clone a row if it is added from an existing row
     *              when false, any new added rows will be blank.
     */
    clone: true,

    /*
     * PROPERTY
     * TYPE:        boolean 
     * DESCRIPTION: current version of datepicker uses a data store,
     *              which is incompatible with $().clone(true)
     */
    datepickerFix: true,

    /*
     * FUNCTION
     * DESCRIPTION: the function that will be called when the user clicks Reset
     * INPUT TYPE:  JS object if stringResult is false, otherwise is JSON string
     */
    onReset: function(data) { alert("Reset Clicked. Data Returned: " + data) },

    /*
     * FUNCTION
     * DESCRIPTION: the function that will be called when the user clicks Search
     * INPUT TYPE:  JS object if stringResult is false, otherwise is JSON string
     */
    onSearch: function(data) { alert("Search Clicked. Data Returned: " + data) },

    /*
     * FUNCTION
     * DESCRIPTION: the function that will be called when the user clicks the Closer icon
     *              or the close() function is called
     *              if left null, it simply does a .hide() on the searchFilter
     * INPUT TYPE:  a jQuery object for the searchFilter
     */
    onClose: function(jElem) { jElem.hide(); },

    /* 
     * PROPERTY
     * TYPE:        array of objects, each object has the properties op and text 
     * DESCRIPTION: the selectable operators that are applied between rules
     *              e.g. for {op:"AND", text:"all"}
     *                  the search filter box will say: match all rules
     *                  the server should interpret this as putting the AND op between each rule:
     *                      rule1 AND rule2 AND rule3
     *              text will be the option text, and op will be the option value
     */
    groupOps: [
        { op: "AND", text: "all" },
        { op: "OR",  text: "any" }
    ],


    /* 
     * PROPERTY
     * TYPE:        array of objects, each object has the properties op and text 
     * DESCRIPTION: the operators that will appear as drop-down options
     *              text will be the option text, and op will be the option value
     */
    operators: [
        { op: "eq", text: "is equal to" },
        { op: "ne", text: "is not equal to" },
        { op: "lt", text: "is less than" },
        { op: "le", text: "is less or equal to" },
        { op: "gt", text: "is greater than" },
        { op: "ge", text: "is greater or equal to" },
        { op: "in", text: "is in" },
        { op: "ni", text: "is not in" },
        { op: "bw", text: "begins with" },
        { op: "bn", text: "does not begin with" },
        { op: "ew", text: "ends with" },
        { op: "en", text: "does not end with" },
        { op: "cn", text: "contains" },
        { op: "nc", text: "does not contain" }
    ],

    /*
     * PROPERTY
     * TYPE:        string
     * DESCRIPTION: part of the phrase: _match_ ANY/ALL rules
     */
    matchText: "match",

    /*
     * PROPERTY
     * TYPE:        string
     * DESCRIPTION: part of the phrase: match ANY/ALL _rules_
     */
    rulesText: "rules",

    /*
     * PROPERTY
     * TYPE:        string
     * DESCRIPTION: the text that will be displayed in the reset button
     */
    resetText: "Reset",
    
    /*
     * PROPERTY
     * TYPE:        string
     * DESCRIPTION: the text that will be displayed in the search button
     */
    searchText: "Search",
    
    /*
     * PROPERTY
     * TYPE:        boolean
     * DESCRIPTION: a flag that, when set, will make the onSearch and onReset return strings instead of objects
     */
    stringResult: true,    
    
    /*
     * PROPERTY
     * TYPE:        string
     * DESCRIPTION: the title of the searchFilter window
     */
    windowTitle: "Search Rules",
    /*
     * PROPERTY
     * TYPE:        object
     * DESCRIPTION: options to extend the ajax request
     */
    ajaxSelectOptions : {}
}; /* end of searchFilter *//*! jQuery UI - v1.10.3 - 2013-07-22
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,b,_=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return b=n(_),_[0].preventDefault&&(e.at="left top"),p=b.width,m=b.height,g=b.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),b=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+b+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:b},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:_,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=t.pageX,l=t.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,b=i.offset.top,y=b+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,r-m>v||g>h+m||l-m>y||b>u+m||!e.contains(p.snapElements[c].item.ownerDocument,p.snapElements[c].item)?(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(e){function t(e,t,i){return e>t&&t+i>e}e.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,i=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(i)?i:function(e){return e.is(i)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,i=e.ui.ddmanager.droppables[this.options.scope];i.length>t;t++)i[t]===this&&i.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){"accept"===t&&(this.accept=e.isFunction(i)?i:function(e){return e.is(i)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope===s.options.scope&&t.accept.call(t.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,i,s){if(!i.offset)return!1;var n,a,o=(e.positionAbs||e.position.absolute).left,r=o+e.helperProportions.width,h=(e.positionAbs||e.position.absolute).top,l=h+e.helperProportions.height,u=i.offset.left,c=u+i.proportions.width,d=i.offset.top,p=d+i.proportions.height;switch(s){case"fit":return o>=u&&c>=r&&h>=d&&p>=l;case"intersect":return o+e.helperProportions.width/2>u&&c>r-e.helperProportions.width/2&&h+e.helperProportions.height/2>d&&p>l-e.helperProportions.height/2;case"pointer":return n=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,a=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,t(a,d,i.proportions.height)&&t(n,u,i.proportions.width);case"touch":return(h>=d&&p>=h||l>=d&&p>=l||d>h&&l>p)&&(o>=u&&c>=o||r>=u&&c>=r||u>o&&r>c);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions.height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions={width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight})}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===n}),a.length&&(s=e.data(a[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}}})(jQuery);(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=t(this.helper.css("left")),n=t(this.helper.css("top")),o.containment&&(s+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,c=t.pageX-a.left||0,d=t.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[t,c,d]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==u&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,s=this.size,n=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,n=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,a=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=i(e.width)&&t.minWidth&&t.minWidth>e.width,r=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),c=/nw|ne|n/.test(s);return o&&(e.width=t.minWidth),r&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),a&&(e.height=t.maxHeight),o&&u&&(e.left=h-t.minWidth),n&&u&&(e.left=h-t.maxWidth),r&&c&&(e.top=l-t.minHeight),a&&c&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,n,a=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(n=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&e.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=e(this).data("ui-resizable"),u=l.options,c=l.element,d=u.containment,p=d instanceof e?d.get(0):/parent/.test(d)?c.parent().get(0):d;p&&(l.containerElement=e(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){s[e]=t(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=e.ui.hasScroll(p,"left")?p.scrollWidth:o,h=e.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(t){var i,s,n,a,o=e(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=o.parentData.left),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,n=t.originalSize,a=t.originalPosition,o=t.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,u=Math.round((s.width-n.width)/h)*h,c=Math.round((s.height-n.height)/l)*l,d=n.width+u,p=n.height+c,f=i.maxWidth&&d>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(o)?(t.size.width=d,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.top=a.top-c):/^(sw)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.left=a.left-u):(t.size.width=d,t.size.height=p,t.position.top=a.top-c,t.position.left=a.left-u)}})})(jQuery);(function(e){e.widget("ui.selectable",e.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):undefined}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);(function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,a.widgetName+"-item")===a?(s=t(this),!1):undefined}),t.data(e.target,a.widgetName+"-item")===a&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=t("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:e.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:e.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(e.pageY-t(document).scrollTop()<o.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<o.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+o.scrollSpeed)),e.pageX-t(document).scrollLeft()<o.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<o.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+o.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=t.left,o=a+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>a&&o>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,a=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return n?this.floating?o&&"right"===o||"down"===a?2:1:a&&("down"===a?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return this.floating&&a?"right"===a&&s||"left"===a&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){var i,s,n,a,o=[],r=[],h=this._connectWith();if(h&&e)for(i=h.length-1;i>=0;i--)for(n=t(h[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&r.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(r.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=r.length-1;i>=0;i--)r[i][0].each(function(){o.push(this)});return t(o)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(u.push([t.isFunction(a.options.items)?a.options.items.call(a.element[0],e,{item:this.currentItem}):t(a.options.items,a.element),a]),this.containers.push(a));for(i=u.length-1;i>=0;i--)for(o=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",o),c.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?e.currentItem.children().each(function(){t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,a,o,r,h,l,c,u,d,p,f=null,m=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],m=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1);else{for(o=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],a=this.items.length-1;a>=0;a--)t.contains(this.containers[m].element[0],this.items[a].item[0])&&this.items[a].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[a].top,this.items[a].height))&&(u=this.items[a].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[a][l]-c)&&(d=!0,u+=this.items[a][l]),o>Math.abs(u-c)&&(o=Math.abs(u-c),r=this.items[a],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[m])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[m].element,!0),this._trigger("change",s,this._uiHash()),this.containers[m]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,a=e.pageX,o=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){this.reverting=!1;var i,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)("auto"===this._storedCSS[i]||"static"===this._storedCSS[i])&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)e||s.push(function(t){return function(e){t._trigger("deactivate",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(function(t){return function(e){t._trigger("out",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})})(jQuery);(function(t){var e=0,i={},s={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",s.height=s.paddingTop=s.paddingBottom=s.borderTopWidth=s.borderBottomWidth="show",t.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t(),content:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),undefined):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),"disabled"===t&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e),undefined)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),a=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(t(e.target).attr("tabIndex",-1),t(a).attr("tabIndex",0),a.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,s=this.options,n=s.heightStyle,a=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++e);this.active=this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(e){var i=t(this),s=i.attr("id"),n=i.next(),a=n.attr("id");s||(s=o+"-header-"+e,i.attr("id",s)),a||(a=o+"-panel-"+e,n.attr("id",a)),i.attr("aria-controls",a),n.attr("aria-labelledby",s)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(s.event),"fill"===n?(i=a.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(i=0,this.headers.next().each(function(){i=Math.max(i,t(this).css("height","").height())}).height(i))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?t():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?t():n,newPanel:r};e.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",e,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?t():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-expanded":"false","aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr("tabIndex",-1):i.length&&this.headers.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(t,e,n){var a,o,r,h=this,l=0,c=t.length&&(!e.length||t.index()<e.index()),u=this.options.animate||{},d=c&&u.down||u,p=function(){h._toggleComplete(n)};return"number"==typeof d&&(r=d),"string"==typeof d&&(o=d),o=o||d.easing||u.easing,r=r||d.duration||u.duration,e.length?t.length?(a=t.show().outerHeight(),e.animate(i,{duration:r,easing:o,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(s,{duration:r,easing:o,complete:p,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(a-e.outerHeight()-l),l=0)}}),undefined):e.animate(i,r,o,p):t.animate(s,r,o,p)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})})(jQuery);(function(t){var e=0;t.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,undefined;e=!1,s=!1,i=!1;var a=t.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:e=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case a.UP:e=!0,this._keyEvent("previous",n);break;case a.DOWN:e=!0,this._keyEvent("next",n);break;case a.ENTER:case a.NUMPAD_ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),undefined):(this._searchTimeout(t),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(t),this._change(t),undefined)}}),this._initSource(),this.menu=t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];t(e.target).closest(".ui-menu-item").length||this._delay(function(){var e=this;this.document.one("mousedown",function(s){s.target===e.element[0]||s.target===i||t.contains(i,s.target)||e.close()})})},menufocus:function(e,i){if(this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",e,{item:s})?e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=t("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):undefined},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var t=this,i=++e;return function(s){i===e&&t.__response(s),t.pending--,t.pending||t.element.removeClass("ui-autocomplete-loading")}},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<a>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[t](e),undefined):(this.search(null,e),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e;this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.text(e))}})})(jQuery);(function(t){var e,i,s,n,a="ui-button ui-widget ui-state-default ui-corner-all",o="ui-state-hover ui-state-active ",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",h=function(){var e=t(this);setTimeout(function(){e.find(":ui-button").button("refresh")},1)},l=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,h),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var o=this,r=this.options,c="checkbox"===this.type||"radio"===this.type,u=c?"":"ui-state-active",d="ui-state-focus";null===r.label&&(r.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(a).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){r.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){r.disabled||t(this).removeClass(u)}).bind("click"+this.eventNamespace,function(t){r.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(d)}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(d)}),c&&(this.element.bind("change"+this.eventNamespace,function(){n||o.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(t){r.disabled||(n=!1,i=t.pageX,s=t.pageY)}).bind("mouseup"+this.eventNamespace,function(t){r.disabled||(i!==t.pageX||s!==t.pageY)&&(n=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return r.disabled||n?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(r.disabled||n)return!1;t(this).addClass("ui-state-active"),o.buttonElement.attr("aria-pressed","true");var e=o.element[0];l(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return r.disabled?!1:(t(this).addClass("ui-state-active"),e=this,o.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return r.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return r.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",r.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(a+" "+o+" "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(e?this.element.prop("disabled",!0):this.element.prop("disabled",!1),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?l(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(r),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):a.push("ui-button-text-only"),e.addClass(a.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(a.inline?e.parent()[0]:a.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.3"}});var a,r="datepicker";t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,a;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),a=this._newInst(t(e),n),a.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,a):n&&this._inlineDatepicker(e,a)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,r,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,a,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=t("<span class='"+this._appendClass+"'>"+r+"</span>"),e[o?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(a?t("<img/>").attr({src:a,alt:n,title:n}):n)),e[o?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,a=new Date(2009,11,20),r=this._get(t,"dateFormat");r.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},a.setMonth(e(this._get(t,r.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(e(this._get(t,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),t.input.attr("size",this._formatDate(t,a).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,a,o){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],r,p)),n(p.settings,a||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,r);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,r),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,a){var r,o,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(r=s||{},"string"==typeof s&&(r={},r[s]=a),c&&(this._curInst===c&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,r),null!==h&&r.dateFormat!==e&&r.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&r.dateFormat!==e&&r.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,o),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,a=t.datepicker._getInst(e.target),r=!0,o=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),r=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",a.dpDiv),n[0]&&t.datepicker._selectDay(e.target,a.selectedMonth,a.selectedYear,n[0]),i=t.datepicker._get(a,"onSelect"),i?(s=t.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),r=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),r=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?1:-1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),r=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?-1:1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),r=e.ctrlKey||e.metaKey;break;default:r=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):r=!1;r&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,a=t.datepicker._getInst(i.target);return t.datepicker._get(a,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(a,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,a,r,o,h,l;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),a=s?s.apply(e,[e,i]):{},a!==!1&&(n(i.settings,a),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),o={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),o=t.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(t(e).zIndex()+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,a=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],r=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",r*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),a=e.dpDiv.outerHeight(),r=e.input?e.input.outerWidth():0,o=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-r:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+o?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+o):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,a,o=this._curInst;!o||e&&o!==t.data(e,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[i]||t.effects[i])?o.dpDiv.hide(i,t.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(e,i,s,n){var a,r=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(a=this._getInst(r[0]),a.selectedDay=a.currentDay=t("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(e,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,a=this._get(e,"altField");a&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(a).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var a,r,o,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,m=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,v=-1,_=-1,b=-1,y=!1,x=function(t){var e=i.length>a+1&&i.charAt(a+1)===t;return e&&a++,e},k=function(t){var e=x(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),a=s.substring(l).match(n);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},w=function(i,n,a){var r=-1,o=t.map(x(i)?a:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(o,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(r=i[0],l+=n.length,!1):e}),-1!==r)return r+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(a))throw"Unexpected literal at position "+l;l++};for(a=0;i.length>a;a++)if(y)"'"!==i.charAt(a)||x("'")?D():y=!1;else switch(i.charAt(a)){case"d":_=k("d");break;case"D":w("D",d,p);break;case"o":b=k("o");break;case"m":v=k("m");break;case"M":v=w("M",f,m);break;case"y":g=k("y");break;case"@":h=new Date(k("@")),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"!":h=new Date((k("!")-this._ticksTo1970)/1e4),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"'":x("'")?D():y=!0;break;default:D()}if(s.length>l&&(o=s.substr(l),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=g?0:-100)),b>-1)for(v=1,_=b;;){if(r=this._getDaysInMonth(g,v-1),r>=_)break;v++,_-=r}if(h=this._daylightSavingAdjust(new Date(g,v-1,_)),h.getFullYear()!==g||h.getMonth()+1!==v||h.getDate()!==_)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,a);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),r,o);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),a=n,r=this._getFormatConfig(t);try{a=this.parseDate(i,s,r)||n}catch(o){s=e?"":s}t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),t.currentDay=s?a.getDate():0,t.currentMonth=s?a.getMonth():0,t.currentYear=s?a.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},a=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,a=n.getFullYear(),r=n.getMonth(),o=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":o+=parseInt(l[1],10);break;case"w":case"W":o+=7*parseInt(l[1],10);break;case"m":case"M":r+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r));break;case"y":case"Y":a+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r))}l=h.exec(i)}return new Date(a,r,o)},r=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?s:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,a=t.selectedYear,r=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=r.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=r.getMonth(),t.drawYear=t.selectedYear=t.currentYear=r.getFullYear(),n===t.selectedMonth&&a===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,a,r,o,h,l,c,u,d,p,f,m,g,v,_,b,y,x,k,w,D,T,C,M,S,N,I,P,A,z,H,E,F,O,W,j,R=new Date,L=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),J=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),Q=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),U=this._get(t,"stepMonths"),q=1!==Q[0]||1!==Q[1],X=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(t,"min"),$=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),$)for(e=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-Q[0]*Q[1]+1,$.getDate())),e=G&&G>e?G:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-U,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+U,1)),this._getFormatConfig(t)):n,a=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",r=this._get(t,"currentText"),o=this._get(t,"gotoCurrent")&&t.currentDay?X:L,r=K?this.formatDate(r,o,this._getFormatConfig(t)):r,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),m=this._get(t,"monthNamesShort"),g=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;Q[0]>k;k++){for(w="",this.maxRows=4,D=0;Q[1]>D;D++){if(T=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),C=" ui-corner-all",M="",q){if(M+="<div class='ui-datepicker-group",Q[1]>1)switch(D){case 0:M+=" ui-datepicker-group-first",C=" ui-corner-"+(Y?"right":"left");break;case Q[1]-1:M+=" ui-datepicker-group-last",C=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",C=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&0===k?Y?a:s:"")+(/all|right/.test(C)&&0===k?Y?s:a:"")+this._generateMonthYearHeader(t,Z,te,G,$,k>0||D>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",S=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+c)%7,S+="<th"+((x+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[N]+"'>"+p[N]+"</span></th>";for(M+=S+"</tr></thead><tbody>",I=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,I)),P=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((P+I)/7),z=q?this.maxRows>A?this.maxRows:A:A,this.maxRows=z,H=this._daylightSavingAdjust(new Date(te,Z,1-P)),E=0;z>E;E++){for(M+="<tr>",F=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",x=0;7>x;x++)O=g?g.apply(t.input?t.input[0]:null,[H]):[!0,""],W=H.getMonth()!==Z,j=W&&!_||!O[0]||G&&G>H||$&&H>$,F+="<td class='"+((x+c+6)%7>=5?" ui-datepicker-week-end":"")+(W?" ui-datepicker-other-month":"")+(H.getTime()===T.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===H.getTime()&&b.getTime()===T.getTime()?" "+this._dayOverClass:"")+(j?" "+this._unselectableClass+" ui-state-disabled":"")+(W&&!v?"":" "+O[1]+(H.getTime()===X.getTime()?" "+this._currentClass:"")+(H.getTime()===L.getTime()?" ui-datepicker-today":""))+"'"+(W&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(j?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(W&&!v?"&#xa0;":j?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===L.getTime()?" ui-state-highlight":"")+(H.getTime()===X.getTime()?" ui-state-active":"")+(W?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);M+=F+"</tr>"}Z++,Z>11&&(Z=0,te++),M+="</tbody></table>"+(q?"</div>"+(Q[0]>0&&D===Q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),w+=M}y+=w}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,a,r,o){var h,l,c,u,d,p,f,m,g=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(a||!g)y+="<span class='ui-datepicker-month'>"+r[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+o[c]+"</option>");y+="</select>"}if(_||(b+=y+(!a&&g&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);
return isNaN(e)?d:e},f=p(u[0]),m=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!a&&g&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),a=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),r=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,a)));t.selectedDay=r.getDate(),t.drawMonth=t.selectedMonth=r.getMonth(),t.drawYear=t.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),a=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(t,a)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),a=this._getMinMaxDate(t,"max"),r=null,o=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=s),i[1].match(/[+\-].*/)&&(o+=s)),(!n||e.getTime()>=n.getTime())&&(!a||e.getTime()<=a.getTime())&&(!r||e.getFullYear()>=r)&&(!o||o>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.3"})(jQuery);(function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||t(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,a;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(a).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,a){s.position=[a.position.left-i.document.scrollLeft(),a.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(a))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,a){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(a))}}).css("position",a)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,a=!1,o={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(a=!0),t in i&&(o[t]=s)}),a&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})})(jQuery);(function(t){t.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(e),i.has(".ui-menu").length?this.expand(e):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,a,o,r,h=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:h=!1,n=this.previousFilter||"",a=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),a===n?o=!0:a=n+a,r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=o&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(a=String.fromCharCode(e.keyCode),r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=a,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})})(jQuery);(function(t,e){t.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){return t===e?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),e)},_constrainedValue:function(t){return t===e&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}})})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):this.range=t([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i,!0))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);(function(t){function e(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e={},i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);void 0!==n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var t=this.element[0]===this.document[0].activeElement;t||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,this.element.val(this._format(i)),void 0}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(e?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:e(function(t){this._super(t),this._value(this.element.val())}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:e(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:e(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:e(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:e(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(e(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})})(jQuery);(function(t,e){function i(){return++n}function s(t){return t.hash.length>1&&decodeURIComponent(t.href.replace(a,""))===decodeURIComponent(location.href.replace(a,""))}var n=0,a=/#.*$/;t.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,a){return t(a).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),a=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:a=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,a),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var a,o,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),u=l.attr("aria-controls");s(n)?(a=n.hash,o=e.element.find(e._sanitizeSelector(a))):(r=e._tabId(l),a="#"+r,o=e.element.find(a),o.length||(o=e._createPanel(r),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),u&&l.data("ui-tabs-aria-controls",u),l.attr({"aria-controls":a.substring(1),"aria-labelledby":h}),o.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?t():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):t(),u={oldTab:s,oldPanel:l,newTab:r?t():a,newPanel:h};e.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",e,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?t():a,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),e),this._toggle(e,u))},_toggle:function(e,i){function s(){a.running=!1,a._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,a=this.tabs.eq(e),o=a.find(".ui-tabs-anchor"),r=this._getPanelForTab(a),h={tab:a,panel:r};s(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(a.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),a.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,a){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:a},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery);(function(t){function e(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")}var s=0;t.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,a=e?e.type:null;return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=a),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,s,n){function a(t){l.of=t,o.is(":hidden")||o.position(l)}var o,r,h,l=t.extend({},this.options.position);if(n){if(o=this._find(s),o.length)return o.find(".ui-tooltip-content").html(n),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),o=this._tooltip(s),e(s,o.attr("id")),o.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:a}),a(i)):o.position(t.extend({of:s},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){o.is(":visible")&&(a(l.of),clearInterval(h))},t.fx.interval)),this._trigger("open",i,{tooltip:o}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(o)}},i&&"mouseover"!==i.type||(r.mouseleave="close"),i&&"focusin"!==i.type||(r.focusout="close"),this._on(!0,s,r)}},close:function(e){var s=this,n=t(e?e.currentTarget:this.element),a=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),a.stop(!0),this._hide(a,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:a}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+s++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})})(jQuery);(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[c[l].cache]=o[c[l].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,o,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,h],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),a=c[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],l=s[a],c=u[n.type]||{};null!==l&&(null===o?h[a]=l:(c.mod&&(l-o>c.mod/2?o+=c.mod:o-l>c.mod/2&&(o-=c.mod)),h[a]=i((l-o)*e+o,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[o]=d,n):l(d)},f(a,function(e,i){l.fn[e]||(l.fn[e]=function(n){var a,o=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=l(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var h=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.3",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);(function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(s,n){var a,o,r,h=t(this),l=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(h,s.mode||"hide"),u=s.direction||"up",d=e.test(u),p=d?"height":"width",f=d?"top":"left",m=i.test(u),g={},v="show"===c;h.parent().is(".ui-effects-wrapper")?t.effects.save(h.parent(),l):t.effects.save(h,l),h.show(),a=t.effects.createWrapper(h).css({overflow:"hidden"}),o=a[p](),r=parseFloat(a.css(f))||0,g[p]=v?o:0,m||(h.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),g[f]=v?r:o+r),v&&(a.css(p,0),m||a.css(f,r+o)),a.animate(g,{duration:s.duration,easing:s.easing,queue:!1,complete:function(){"hide"===c&&h.hide(),t.effects.restore(h,l),t.effects.removeWrapper(h),n()}})}})(jQuery);(function(t){t.effects.effect.bounce=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(o,e.mode||"effect"),l="hide"===h,c="show"===h,u=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(c||l?1:0),m=e.duration/f,g=e.easing,v="up"===u||"down"===u?"top":"left",_="up"===u||"left"===u,b=o.queue(),y=b.length;for((c||l)&&r.push("opacity"),t.effects.save(o,r),o.show(),t.effects.createWrapper(o),d||(d=o["top"===v?"outerHeight":"outerWidth"]()/3),c&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,_?2*-d:2*d).animate(a,m,g)),l&&(d/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+d,o.animate(n,m,g).animate(a,m,g),d=l?2*d:d/2;l&&(n={opacity:0},n[v]=(_?"-=":"+=")+d,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),o.dequeue()}})(jQuery);(function(t){t.effects.effect.clip=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(o,e.mode||"hide"),l="show"===h,c=e.direction||"vertical",u="vertical"===c,d=u?"height":"width",p=u?"top":"left",f={};t.effects.save(o,r),o.show(),s=t.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[d](),l&&(n.css(d,0),n.css(p,a/2)),f[d]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){l||o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}})}})(jQuery);(function(t){t.effects.effect.drop=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","opacity","height","width"],o=t.effects.setMode(n,e.mode||"hide"),r="show"===o,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h?"pos":"neg",u={opacity:r?1:0};t.effects.save(n,a),n.show(),t.effects.createWrapper(n),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===c?-s:s),u[l]=(r?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);(function(t){t.effects.effect.explode=function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),m||p.hide(),i()}var a,o,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/u),b=[];for(a=0;u>a;a++)for(h=g.top+a*_,c=a-(u-1)/2,o=0;d>o;o++)r=g.left+o*v,l=o-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(m?l*v:0),top:h+(m?c*_:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:c*_),opacity:m?1:0},e.duration||500,e.easing,s)}})(jQuery);(function(t){t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}})(jQuery);(function(t){t.effects.effect.fold=function(e,i){var s,n,a=t(this),o=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(a,e.mode||"hide"),h="show"===r,l="hide"===r,c=e.size||15,u=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=h!==d,f=p?["width","height"]:["height","width"],m=e.duration/2,g={},v={};t.effects.save(a,o),a.show(),s=t.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],u&&(c=parseInt(u[1],10)/100*n[l?0:1]),h&&s.css(d?{height:0,width:c}:{height:c,width:0}),g[f[0]]=h?n[0]:c,v[f[1]]=h?n[1]:0,s.animate(g,m,e.easing).animate(v,m,e.easing,function(){l&&a.hide(),t.effects.restore(a,o),t.effects.removeWrapper(a),i()})}})(jQuery);(function(t){t.effects.effect.highlight=function(e,i){var s=t(this),n=["backgroundImage","backgroundColor","opacity"],a=t.effects.setMode(s,e.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(o,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&s.hide(),t.effects.restore(s,n),i()}})}})(jQuery);(function(t){t.effects.effect.pulsate=function(e,i){var s,n=t(this),a=t.effects.setMode(n,e.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(e.times||5)+(h?1:0),c=e.duration/l,u=0,d=n.queue(),p=d.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),u=1),s=1;l>s;s++)n.animate({opacity:u},c,e.easing),u=1-u;n.animate({opacity:u},c,e.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,l+1))),n.dequeue()}})(jQuery);(function(t){t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"hide"),a="hide"===n,o=parseInt(e.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(e)},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),a=t.effects.setMode(s,e.mode||"effect"),o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===a?0:100),r=e.direction||"both",h=e.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},c={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=e.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*c.y,width:l.width*c.x,outerHeight:l.outerHeight*c.y,outerWidth:l.outerWidth*c.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.size=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],c=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(o,e.mode||"effect"),f=e.restore||"effect"!==p,m=e.scale||"both",g=e.origin||["middle","center"],v=o.css("position"),_=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===e.mode&&"show"===p?(o.from=e.to||b,o.to=e.from||s):(o.from=e.from||("show"===p?b:s),o.to=e.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(_=_.concat(u),o.from=t.effects.setTransition(o,u,a.from.y,o.from),o.to=t.effects.setTransition(o,u,a.to.y,o.to)),a.from.x!==a.to.x&&(_=_.concat(d),o.from=t.effects.setTransition(o,d,a.from.x,o.from),o.to=t.effects.setTransition(o,d,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(_=_.concat(c).concat(l),o.from=t.effects.setTransition(o,c,a.from.y,o.from),o.to=t.effects.setTransition(o,c,a.to.y,o.to)),t.effects.save(o,_),o.show(),t.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=t.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(u=u.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),l=r.concat(u).concat(d),o.find("*[width]").each(function(){var i=t(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=t.effects.setTransition(i,u,a.from.y,i.from),i.to=t.effects.setTransition(i,u,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=t.effects.setTransition(i,d,a.from.x,i.from),i.to=t.effects.setTransition(i,d,a.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),t.effects.restore(o,_),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):t.each(["top","left"],function(t,e){o.css(e,function(e,i){var s=parseInt(i,10),n=t?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),t.effects.removeWrapper(o),i()}})}})(jQuery);(function(t){t.effects.effect.shake=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","height","width"],o=t.effects.setMode(n,e.mode||"effect"),r=e.direction||"left",h=e.distance||20,l=e.times||3,c=2*l+1,u=Math.round(e.duration/c),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),_=v.length;for(t.effects.save(n,a),n.show(),t.effects.createWrapper(n),f[d]=(p?"-=":"+=")+h,m[d]=(p?"+=":"-=")+2*h,g[d]=(p?"-=":"+=")+2*h,n.animate(f,u,e.easing),s=1;l>s;s++)n.animate(m,u,e.easing).animate(g,u,e.easing);n.animate(m,u,e.easing).animate(f,u/2,e.easing).queue(function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,c+1))),n.dequeue()}})(jQuery);(function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","width","height"],o=t.effects.setMode(n,e.mode||"show"),r="show"===o,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,a),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);(function(t){t.effects.effect.transfer=function(e,i){var s=t(this),n=t(e.to),a="fixed"===n.css("position"),o=t("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),i()})}})(jQuery);/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			$.cookie(key, '', $.extend(options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));

/*
 * Superfish v1.5.13 - jQuery menu widget
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $('<span class="'+c.arrowClass+'"> &#187;</span>'),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(e){
				var $$ = $(this), menu = getMenu($$), o = sf.op;

				var close = function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents('li.'+o.hoverClass).length<1){
						o.onIdle.call();
						$.proxy(over,o.$path,e)();
					}
				};
				if (e.type === 'click'){
					close();
				} else {
					clearTimeout(menu.sfTimer);
					menu.sfTimer=setTimeout(close,o.delay);
				}
			},
			getMenu = function($child){
				if ($child.hasClass(c.menuClass)){
					$.error('Superfish requires you to update to a version of hoverIntent that supports event-delegation, such as this one: https://github.com/joeldbirch/onHoverIntent');
				}
				var menu = $child.closest('.'+c.menuClass)[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			applyTouchAction = function($menu){
       //needed by MS pointer events
				$menu.css('ms-touch-action','none');
			},
			applyHandlers = function($menu){
				var targets = 'li:has(ul)';
				if (!sf.op.useClick){
					if ($.fn.hoverIntent && !sf.op.disableHI){
						$menu.hoverIntent(over, out, targets);
					} else {
						$menu
							.on('mouseenter', targets, over)
							.on('mouseleave', targets, out);
					}
				}
				var touchstart = 'MSPointerDown';
				//Sorry, but avoiding weird glitches with touchstart. iOS doesn't need it, anyway.
				if ( !navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/) ){
					touchstart += ' touchstart';
				}
				$menu
					.on('focusin', 'li', over)
					.on('focusout', 'li', out)
					.on('click', 'a', clickHandler)
					.on(touchstart, 'a', touchHandler);
			},
			touchHandler = function(e){
        var $$ = $(this),
          $ul = $$.siblings('ul');
        if ($ul.length > 0 && !$ul.is(':visible')){
          $$.data('follow', false);
          if (e.type === 'MSPointerDown'){
						$$.trigger('focus');
						return false;
					}
        }
      },
			clickHandler = function(e){
				var $a = $(this),
						$submenu = $a.siblings('ul'),
						follow = ($a.data('follow') === false) ? false : true;

				if ( $submenu.length && (sf.op.useClick || !follow) ){
					e.preventDefault();
					if (!$submenu.is(':visible')){
						$.proxy(over,$a.parent('li'))();
					} else if (sf.op.useClick && follow) {
						$.proxy(out,$a.parent('li'),e)();
					}
				}
			},
			addArrows = function($li,o){
				if (o.autoArrows) {
					$li.children('a').each(function() {
						addArrow( $(this) );
					});
				}
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.addClass(c.menuClass).each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			var $$ = $(this);
			var $liHasUl = $$.find('li:has(ul)');
			o.$path = $$.find('li.'+o.pathClass).slice(0,o.pathLevels).each(function(){
				$(this).addClass(o.hoverClass+' '+c.bcClass)
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			addArrows($liHasUl,o);
			applyTouchAction($$);
			applyHandlers($$);

			$liHasUl.not('.'+c.bcClass).children('ul').show().hide();
			
			o.onInit.call(this);
			
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};

	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		animationOut: {opacity:'hide'},
		speed		: 'normal',
		speedOut : 'fast',
		autoArrows	: true,
		disableHI	: false,		// true disables hoverIntent detection
		useClick : false,
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){},
		onIdle		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				$$ = this,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			$('li.'+o.hoverClass,this).add(this).not(not)
				.children('ul').stop(true,true).animate(o.animationOut,o.speedOut,function(){
					$ul = $(this);
					$ul.parent().removeClass(o.hoverClass);
					o.onHide.call($ul);
					if (sf.op.useClick){
						$$.children('a').data('follow', false);
					}
				});
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				$$ = this,
				$ul = this.children('ul');
			$$.addClass(o.hoverClass);
			o.onBeforeShow.call($ul);
			$ul.stop(true,true).animate(o.animation,o.speed,function(){
				o.onShow.call($ul);
				$$.children('a').data('follow', true);
			});
			return this;
		}
	});

})(jQuery);
/**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 **/
(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);/*! qTip2 v2.0.1-35- (includes: svg ajax tips modal viewport imagemap ie6 / basic css3) | qtip2.com | Licensed MIT, GPL | Sun Mar 10 2013 15:07:36 */
(function(e,t,n){(function(e){"use strict";typeof define=="function"&&define.amd?define(["jquery"],e):jQuery&&!jQuery.fn.qtip&&e(jQuery)})(function(r){function P(n){S={pageX:n.pageX,pageY:n.pageY,type:"mousemove",scrollX:e.pageXOffset||t.body.scrollLeft||t.documentElement.scrollLeft,scrollY:e.pageYOffset||t.body.scrollTop||t.documentElement.scrollTop}}function H(e){var t=function(e){return e===o||"object"!=typeof e},n=function(e){return!r.isFunction(e)&&(!e&&!e.attr||e.length<1||"object"==typeof e&&!e.jquery&&!e.then)};if(!e||"object"!=typeof e)return s;t(e.metadata)&&(e.metadata={type:e.metadata});if("content"in e){if(t(e.content)||e.content.jquery)e.content={text:e.content};n(e.content.text||s)&&(e.content.text=s),"title"in e.content&&(t(e.content.title)&&(e.content.title={text:e.content.title}),n(e.content.title.text||s)&&(e.content.title.text=s))}return"position"in e&&t(e.position)&&(e.position={my:e.position,at:e.position}),"show"in e&&t(e.show)&&(e.show=e.show.jquery?{target:e.show}:e.show===i?{ready:i}:{event:e.show}),"hide"in e&&t(e.hide)&&(e.hide=e.hide.jquery?{target:e.hide}:{event:e.hide}),"style"in e&&t(e.style)&&(e.style={classes:e.style}),r.each(E,function(){this.sanitize&&this.sanitize(e)}),e}function B(n,u,a,f){function R(e){var t=0,n,r=u,i=e.split(".");while(r=r[i[t++]])t<i.length&&(n=r);return[n||u,i.pop()]}function U(e){return C.concat("").join(e?"-"+e+" ":" ")}function z(){var e=u.style.widget,t=B.hasClass(F);B.removeClass(F),F=e?"ui-state-disabled":"qtip-disabled",B.toggleClass(F,t),B.toggleClass("ui-helper-reset "+U(),e).toggleClass(L,u.style.def&&!e),I.content&&I.content.toggleClass(U("content"),e),I.titlebar&&I.titlebar.toggleClass(U("header"),e),I.button&&I.button.toggleClass(x+"-icon",!e)}function W(e){I.title&&(I.titlebar.remove(),I.titlebar=I.title=I.button=o,e!==s&&l.reposition())}function X(){var e=u.content.title.button,t=typeof e=="string",n=t?e:"Close tooltip";I.button&&I.button.remove(),e.jquery?I.button=e:I.button=r("<a />",{"class":"qtip-close "+(u.style.widget?"":x+"-icon"),title:n,"aria-label":n}).prepend(r("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),I.button.appendTo(I.titlebar||B).attr("role","button").click(function(e){return B.hasClass(F)||l.hide(e),s})}function V(){var e=g+"-title";I.titlebar&&W(),I.titlebar=r("<div />",{"class":x+"-titlebar "+(u.style.widget?U("header"):"")}).append(I.title=r("<div />",{id:e,"class":x+"-title","aria-atomic":i})).insertBefore(I.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(e){r(this).toggleClass("ui-state-active ui-state-focus",e.type.substr(-4)==="down")}).delegate(".qtip-close","mouseover mouseout",function(e){r(this).toggleClass("ui-state-hover",e.type==="mouseover")}),u.content.title.button&&X()}function $(e){var t=I.button;if(!l.rendered)return s;e?X():t.remove()}function J(e,t){var i=I.title;if(!l.rendered||!e)return s;r.isFunction(e)&&(e=e.call(n,q.event,l));if(e===s||!e&&e!=="")return W(s);e.jquery&&e.length>0?i.empty().append(e.css({display:"block"})):i.html(e),t!==s&&l.rendered&&B[0].offsetWidth>0&&l.reposition(q.event)}function K(e){e&&r.isFunction(e.done)&&e.done(function(e){Q(e,null,s)})}function Q(e,t,i){function a(e){function s(t){if(t.src===b||r.inArray(t,i)!==-1)return;i.push(t),r.data(t,"imagesLoaded",{src:t.src}),n.length===i.length&&(setTimeout(e),n.unbind(".imagesLoaded"))}var t=r(this),n=t.find("img").add(t.filter("img")),i=[];if(!n.length)return e();n.bind("load.imagesLoaded error.imagesLoaded",function(e){s(e.target)}).each(function(e,t){var n=t.src,i=r.data(t,"imagesLoaded");if(i&&i.src===n||t.complete&&t.naturalWidth)s(t);else if(t.readyState||t.complete)t.src=b,t.src=n})}var o=I.content;return!l.rendered||!e?s:(r.isFunction(e)&&(e=e.call(n,q.event,l)||""),i!==s&&K(u.content.deferred),e.jquery&&e.length>0?o.empty().append(e.css({display:"block"})):o.html(e),l.rendered<0?B.queue("fx",a):(M=0,a.call(B[0],r.noop)),l)}function G(){function p(e){if(B.hasClass(F))return s;clearTimeout(l.timers.show),clearTimeout(l.timers.hide);var t=function(){l.toggle(i,e)};u.show.delay>0?l.timers.show=setTimeout(t,u.show.delay):t()}function d(e){if(B.hasClass(F)||y||M)return s;var t=r(e.relatedTarget),n=t.closest(k)[0]===B[0],i=t[0]===f.show[0];clearTimeout(l.timers.show),clearTimeout(l.timers.hide);if(this!==t[0]&&o.target==="mouse"&&n||u.hide.fixed&&/mouse(out|leave|move)/.test(e.type)&&(n||i)){try{e.preventDefault(),e.stopImmediatePropagation()}catch(a){}return}u.hide.delay>0?l.timers.hide=setTimeout(function(){l.hide(e)},u.hide.delay):l.hide(e)}function v(e){if(B.hasClass(F))return s;clearTimeout(l.timers.inactive),l.timers.inactive=setTimeout(function(){l.hide(e)},u.hide.inactive)}function m(e){l.rendered&&B[0].offsetWidth>0&&l.reposition(e)}var o=u.position,f={show:u.show.target,hide:u.hide.target,viewport:r(o.viewport),document:r(t),body:r(t.body),window:r(e)},c={show:r.trim(""+u.show.event).split(" "),hide:r.trim(""+u.hide.event).split(" ")},h=E.ie===6;B.bind("mouseenter"+j+" mouseleave"+j,function(e){var t=e.type==="mouseenter";t&&l.focus(e),B.toggleClass(O,t)}),/mouse(out|leave)/i.test(u.hide.event)&&u.hide.leave==="window"&&f.document.bind("mouseout"+j+" blur"+j,function(e){!/select|option/.test(e.target.nodeName)&&!e.relatedTarget&&l.hide(e)}),u.hide.fixed?(f.hide=f.hide.add(B),B.bind("mouseover"+j,function(){B.hasClass(F)||clearTimeout(l.timers.hide)})):/mouse(over|enter)/i.test(u.show.event)&&f.hide.bind("mouseleave"+j,function(e){clearTimeout(l.timers.show)}),(""+u.hide.event).indexOf("unfocus")>-1&&o.container.closest("html").bind("mousedown"+j+" touchstart"+j,function(e){var t=r(e.target),i=l.rendered&&!B.hasClass(F)&&B[0].offsetWidth>0,s=t.parents(k).filter(B[0]).length>0;t[0]!==n[0]&&t[0]!==B[0]&&!s&&!n.has(t[0]).length&&i&&l.hide(e)}),"number"==typeof u.hide.inactive&&(f.show.bind("qtip-"+a+"-inactive",v),r.each(w.inactiveEvents,function(e,t){f.hide.add(I.tooltip).bind(t+j+"-inactive",v)})),r.each(c.hide,function(e,t){var n=r.inArray(t,c.show),i=r(f.hide);n>-1&&i.add(f.show).length===i.length||t==="unfocus"?(f.show.bind(t+j,function(e){B[0].offsetWidth>0?d(e):p(e)}),delete c.show[n]):f.hide.bind(t+j,d)}),r.each(c.show,function(e,t){f.show.bind(t+j,p)}),"number"==typeof u.hide.distance&&f.show.add(B).bind("mousemove"+j,function(e){var t=q.origin||{},n=u.hide.distance,r=Math.abs;(r(e.pageX-t.pageX)>=n||r(e.pageY-t.pageY)>=n)&&l.hide(e)}),o.target==="mouse"&&(f.show.bind("mousemove"+j,P),o.adjust.mouse&&(u.hide.event&&(B.bind("mouseleave"+j,function(e){(e.relatedTarget||e.target)!==f.show[0]&&l.hide(e)}),I.target.bind("mouseenter"+j+" mouseleave"+j,function(e){q.onTarget=e.type==="mouseenter"})),f.document.bind("mousemove"+j,function(e){l.rendered&&q.onTarget&&!B.hasClass(F)&&B[0].offsetWidth>0&&l.reposition(e||S)}))),(o.adjust.resize||f.viewport.length)&&(r.event.special.resize?f.viewport:f.window).bind("resize"+j,m),o.adjust.scroll&&f.window.add(o.container).bind("scroll"+j,m)}function Y(){var n=[u.show.target[0],u.hide.target[0],l.rendered&&I.tooltip[0],u.position.container[0],u.position.viewport[0],u.position.container.closest("html")[0],e,t];l.rendered?r([]).pushStack(r.grep(n,function(e){return typeof e=="object"})).unbind(j):u.show.target.unbind(j+"-create")}var l=this,m=t.body,g=x+"-"+a,y=0,M=0,B=r(),j=".qtip-"+a,F="qtip-disabled",I,q;l.id=a,l.rendered=s,l.destroyed=s,l.elements=I={target:n},l.timers={img:{}},l.options=u,l.checks={},l.plugins={},l.cache=q={event:{},target:r(),disabled:s,attr:f,onTarget:s,lastClass:""},l.checks.builtin={"^id$":function(e,t,n){var o=n===i?w.nextid:n,u=x+"-"+o;o!==s&&o.length>0&&!r("#"+u).length&&(B[0].id=u,I.content[0].id=u+"-content",I.title[0].id=u+"-title")},"^content.text$":function(e,t,n){Q(u.content.text)},"^content.deferred$":function(e,t,n){K(u.content.deferred)},"^content.title.text$":function(e,t,n){if(!n)return W();!I.title&&n&&V(),J(n)},"^content.title.button$":function(e,t,n){$(n)},"^position.(my|at)$":function(e,t,n){"string"==typeof n&&(e[t]=new E.Corner(n))},"^position.container$":function(e,t,n){l.rendered&&B.appendTo(n)},"^show.ready$":function(){l.rendered?l.toggle(i):l.render(1)},"^style.classes$":function(e,t,n){B.attr("class",x+" qtip "+n)},"^style.width|height":function(e,t,n){B.css(t,n)},"^style.widget|content.title":z,"^events.(render|show|move|hide|focus|blur)$":function(e,t,n){B[(r.isFunction(n)?"":"un")+"bind"]("tooltip"+t,n)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var e=u.position;B.attr("tracking",e.target==="mouse"&&e.adjust.mouse),Y(),G()}},r.extend(l,{_triggerEvent:function(e,t,n){var i=r.Event("tooltip"+e);return i.originalEvent=(n?r.extend({},n):o)||q.event||o,B.trigger(i,[l].concat(t||[])),!i.isDefaultPrevented()},render:function(e){if(l.rendered)return l;var t=u.content.text,o=u.content.title,a=u.position;return r.attr(n[0],"aria-describedby",g),B=I.tooltip=r("<div/>",{id:g,"class":[x,L,u.style.classes,x+"-pos-"+u.position.my.abbrev()].join(" "),width:u.style.width||"",height:u.style.height||"",tracking:a.target==="mouse"&&a.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":s,"aria-describedby":g+"-content","aria-hidden":i}).toggleClass(F,q.disabled).data("qtip",l).appendTo(u.position.container).append(I.content=r("<div />",{"class":x+"-content",id:g+"-content","aria-atomic":i})),l.rendered=-1,y=1,o.text?(V(),r.isFunction(o.text)||J(o.text,s)):o.button&&X(),(!r.isFunction(t)||t.then)&&Q(t,s),l.rendered=i,z(),r.each(u.events,function(e,t){r.isFunction(t)&&B.bind(e==="toggle"?"tooltipshow tooltiphide":"tooltip"+e,t)}),r.each(E,function(){this.initialize==="render"&&this(l)}),G(),B.queue("fx",function(t){l._triggerEvent("render"),y=0,(u.show.ready||e)&&l.toggle(i,q.event,s),t()}),l},get:function(e){var t,n;switch(e.toLowerCase()){case"dimensions":t={height:B.outerHeight(s),width:B.outerWidth(s)};break;case"offset":t=E.offset(B,u.position.container);break;default:n=R(e.toLowerCase()),t=n[0][n[1]],t=t.precedance?t.string():t}return t},set:function(e,t){function p(e,t){var n,r,i;for(n in c)for(r in c[n])if(i=(new RegExp(r,"i")).exec(e))t.push(i),c[n][r].apply(l,t)}var n=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,a=/^content\.(title|attr)|style/i,f=s,c=l.checks,h;return"string"==typeof e?(h=e,e={},e[h]=t):e=r.extend(i,{},e),r.each(e,function(t,i){var s=R(t.toLowerCase()),o;o=s[0][s[1]],s[0][s[1]]="object"==typeof i&&i.nodeType?r(i):i,e[t]=[s[0],s[1],i,o],f=n.test(t)||f}),H(u),y=1,r.each(e,p),y=0,l.rendered&&B[0].offsetWidth>0&&f&&l.reposition(u.position.target==="mouse"?o:q.event),l},toggle:function(e,n){function w(){e?(E.ie&&B[0].style.removeAttribute("filter"),B.css("overflow",""),"string"==typeof f.autofocus&&r(f.autofocus,B).focus(),f.target.trigger("qtip-"+a+"-inactive")):B.css({display:"",visibility:"",opacity:"",left:"",top:""}),l._triggerEvent(e?"visible":"hidden")}if(n){if(/over|enter/.test(n.type)&&/out|leave/.test(q.event.type)&&u.show.target.add(n.target).length===u.show.target.length&&B.has(n.relatedTarget).length)return l;q.event=r.extend({},n)}if(!l.rendered)return e?l.render(1):l;var o=e?"show":"hide",f=u[o],c=u[e?"hide":"show"],h=u.position,p=u.content,d=B.css("width"),v=B[0].offsetWidth>0,m=e||f.target.length===1,g=!n||f.target.length<2||q.target[0]===n.target,y,b;return(typeof e).search("boolean|number")&&(e=!v),!B.is(":animated")&&v===e&&g?l:!l._triggerEvent(o,[90])&&!l.destroyed?l:(r.attr(B[0],"aria-hidden",!e),e?(q.origin=r.extend({},S),l.focus(n),r.isFunction(p.text)&&Q(p.text,s),r.isFunction(p.title.text)&&J(p.title.text,s),!D&&h.target==="mouse"&&h.adjust.mouse&&(r(t).bind("mousemove.qtip",P),D=i),d||B.css("width",B.outerWidth()),l.reposition(n,arguments[2]),d||B.css("width",""),!f.solo||(typeof f.solo=="string"?r(f.solo):r(k,f.solo)).not(B).not(f.target).qtip("hide",r.Event("tooltipsolo"))):(clearTimeout(l.timers.show),delete q.origin,D&&!r(k+'[tracking="true"]:visible',f.solo).not(B).length&&(r(t).unbind("mousemove.qtip"),D=s),l.blur(n)),f.effect===s||m===s?(B[o](),w.call(B)):r.isFunction(f.effect)?(B.stop(1,1),f.effect.call(B,l),B.queue("fx",function(e){w(),e()})):B.fadeTo(90,e?1:0,w),e&&f.target.trigger("qtip-"+a+"-inactive"),l)},show:function(e){return l.toggle(i,e)},hide:function(e){return l.toggle(s,e)},focus:function(e){if(!l.rendered)return l;var t=r(k),n=parseInt(B[0].style.zIndex,10),i=w.zindex+t.length,s=r.extend({},e),o;return B.hasClass(A)||l._triggerEvent("focus",[i],s)&&(n!==i&&(t.each(function(){this.style.zIndex>n&&(this.style.zIndex=this.style.zIndex-1)}),t.filter("."+A).qtip("blur",s)),B.addClass(A)[0].style.zIndex=i),l},blur:function(e){return B.removeClass(A),l._triggerEvent("blur",[B.css("zIndex")],e),l},reposition:function(n,i){if(!l.rendered||y)return l;y=1;var o=u.position.target,a=u.position,f=a.my,m=a.at,g=a.adjust,b=g.method.split(" "),w=B.outerWidth(s),x=B.outerHeight(s),T=0,N=0,C=B.css("position"),k=a.viewport,L={left:0,top:0},A=a.container,O=B[0].offsetWidth>0,M=n&&n.type==="scroll",_=r(e),D,P;if(r.isArray(o)&&o.length===2)m={x:h,y:c},L={left:o[0],top:o[1]};else if(o==="mouse"&&(n&&n.pageX||q.event.pageX))m={x:h,y:c},n=S&&S.pageX&&(g.mouse||!n||!n.pageX)?{pageX:S.pageX,pageY:S.pageY}:(!n||n.type!=="resize"&&n.type!=="scroll"?n&&n.pageX&&n.type==="mousemove"?n:(!g.mouse||u.show.distance)&&q.origin&&q.origin.pageX?q.origin:n:q.event)||n||q.event||S||{},C!=="static"&&(L=A.offset()),L={left:n.pageX-L.left,top:n.pageY-L.top},g.mouse&&M&&(L.left-=S.scrollX-_.scrollLeft(),L.top-=S.scrollY-_.scrollTop());else{o==="event"&&n&&n.target&&n.type!=="scroll"&&n.type!=="resize"?q.target=r(n.target):o!=="event"&&(q.target=r(o.jquery?o:I.target)),o=q.target,o=r(o).eq(0);if(o.length===0)return l;o[0]===t||o[0]===e?(T=E.iOS?e.innerWidth:o.width(),N=E.iOS?e.innerHeight:o.height(),o[0]===e&&(L={top:(k||o).scrollTop(),left:(k||o).scrollLeft()})):E.imagemap&&o.is("area")?D=E.imagemap(l,o,m,E.viewport?b:s):E.svg&&o[0].ownerSVGElement?D=E.svg(l,o,m,E.viewport?b:s):(T=o.outerWidth(s),N=o.outerHeight(s),L=o.offset()),D&&(T=D.width,N=D.height,P=D.offset,L=D.position),L=E.offset(o,L,A);if(E.iOS>3.1&&E.iOS<4.1||E.iOS>=4.3&&E.iOS<4.33||!E.iOS&&C==="fixed")L.left-=_.scrollLeft(),L.top-=_.scrollTop();L.left+=m.x===d?T:m.x===v?T/2:0,L.top+=m.y===p?N:m.y===v?N/2:0}return L.left+=g.x+(f.x===d?-w:f.x===v?-w/2:0),L.top+=g.y+(f.y===p?-x:f.y===v?-x/2:0),E.viewport?(L.adjusted=E.viewport(l,L,a,T,N,w,x),P&&L.adjusted.left&&(L.left+=P.left),P&&L.adjusted.top&&(L.top+=P.top)):L.adjusted={left:0,top:0},l._triggerEvent("move",[L,k.elem||k],n)?(delete L.adjusted,i===s||!O||isNaN(L.left)||isNaN(L.top)||o==="mouse"||!r.isFunction(a.effect)?B.css(L):r.isFunction(a.effect)&&(a.effect.call(B,l,r.extend({},L)),B.queue(function(e){r(this).css({opacity:"",height:""}),E.ie&&this.style.removeAttribute("filter"),e()})),y=0,l):l},disable:function(e){return"boolean"!=typeof e&&(e=!B.hasClass(F)&&!q.disabled),l.rendered?(B.toggleClass(F,e),r.attr(B[0],"aria-disabled",e)):q.disabled=!!e,l},enable:function(){return l.disable(s)},destroy:function(e){function t(){var e=n[0],t=r.attr(e,_),i=n.data("qtip");l.rendered&&(r.each(l.plugins,function(e){this.destroy&&this.destroy(),delete l.plugins[e]}),B.stop(1,0).find("*").remove().end().remove(),l.rendered=s),clearTimeout(l.timers.show),clearTimeout(l.timers.hide),Y();if(!i||l===i)n.removeData("qtip").removeAttr(T),u.suppress&&t&&(n.attr("title",t),n.removeAttr(_)),n.removeAttr("aria-describedby");n.unbind(".qtip-"+a),delete N[l.id],delete l.options,delete l.elements,delete l.cache,delete l.timers,delete l.checks}if(l.destroyed)return;l.destroyed=i;var o=s;return e!==i&&(B.bind("tooltiphide",function(){o=i,B.bind("tooltiphidden",t)}),l.hide()),o||t(),n}})}function j(e,n,u){var a,f,l,c,h,p=r(t.body),d=e[0]===t?p:e,v=e.metadata?e.metadata(u.metadata):o,m=u.metadata.type==="html5"&&v?v[u.metadata.name]:o,g=e.data(u.metadata.name||"qtipopts");try{g=typeof g=="string"?r.parseJSON(g):g}catch(y){}c=r.extend(i,{},w.defaults,u,typeof g=="object"?H(g):o,H(m||v)),f=c.position,c.id=n;if("boolean"==typeof c.content.text){l=e.attr(c.content.attr);if(c.content.attr===s||!l)return s;c.content.text=l}f.container.length||(f.container=p),f.target===s&&(f.target=d),c.show.target===s&&(c.show.target=d),c.show.solo===i&&(c.show.solo=f.container.closest("body")),c.hide.target===s&&(c.hide.target=d),c.position.viewport===i&&(c.position.viewport=f.container),f.container=f.container.eq(0),f.at=new E.Corner(f.at),f.my=new E.Corner(f.my);if(e.data("qtip"))if(c.overwrite)e.qtip("destroy");else if(c.overwrite===s)return s;return e.attr(T,!0),c.suppress&&(h=e.attr("title"))&&e.removeAttr("title").attr(_,h).attr("title",""),a=new B(e,c,n,!!l),e.data("qtip",a),e.one("remove.qtip-"+n+" removeqtip.qtip-"+n,function(){var e;(e=r(this).data("qtip"))&&e.destroy()}),a}function R(e){var t=this,n=e.elements.tooltip,o=e.options.content.ajax,u=w.defaults.content.ajax,a=i,f=s,l;e.checks.ajax={"^content.ajax":function(e,r,i){r==="ajax"&&(o=i),r==="once"?t.init():o&&o.url?t.load():n.unbind(I)}},r.extend(t,{init:function(){return o&&o.url&&n.unbind(I)[o.once?"one":"bind"]("tooltipshow"+I,t.load),t},load:function(n){function m(){var t;if(e.destroyed)return;a=s,d&&(f=i,e.show(n.originalEvent)),(t=u.complete||o.complete)&&r.isFunction(t)&&t.apply(o.context||e,arguments)}function g(t,n,i){var s;if(e.destroyed)return;p&&"string"==typeof t&&(t=r("<div/>").append(t.replace(q,"")).find(p)),(s=u.success||o.success)&&r.isFunction(s)?s.call(o.context||e,t,n,i):e.set("content.text",t)}function y(t,n,r){if(e.destroyed||t.status===0)return;e.set("content.text",n+": "+r)}if(f){f=s;return}var c=o.url.lastIndexOf(" "),h=o.url,p,d=!o.loading&&a;if(d)try{n.preventDefault()}catch(v){}else if(n&&n.isDefaultPrevented())return t;l&&l.abort&&l.abort(),c>-1&&(p=h.substr(c),h=h.substr(0,c)),l=r.ajax(r.extend({error:u.error||y,context:e},o,{url:h,success:g,complete:m}))},destroy:function(){l&&l.abort&&l.abort(),e.destroyed=i}}),t.init()}function X(e,t,n){var r=Math.ceil(t/2),i=Math.ceil(n/2),s={bottomright:[[0,0],[t,n],[t,0]],bottomleft:[[0,0],[t,0],[0,n]],topright:[[0,n],[t,0],[t,n]],topleft:[[0,0],[0,n],[t,n]],topcenter:[[0,n],[r,0],[t,n]],bottomcenter:[[0,0],[t,0],[r,n]],rightcenter:[[0,0],[t,i],[0,n]],leftcenter:[[t,0],[t,n],[0,i]]};return s.lefttop=s.bottomright,s.righttop=s.bottomleft,s.leftbottom=s.topright,s.rightbottom=s.topleft,s[e.string()]}function V(e,t){function k(e){var t=w.is(":visible");w.show(),e(),w.toggle(t)}function L(){x.width=g.height,x.height=g.width}function A(){x.width=g.width,x.height=g.height}function O(t,r,o,f){if(!b.tip)return;var l=m.corner.clone(),w=o.adjusted,E=e.options.position.adjust.method.split(" "),x=E[0],T=E[1]||E[0],N={left:s,top:s,x:0,y:0},C,k={},L;m.corner.fixed!==i&&(x===y&&l.precedance===u&&w.left&&l.y!==v?l.precedance=l.precedance===u?a:u:x!==y&&w.left&&(l.x=l.x===v?w.left>0?h:d:l.x===h?d:h),T===y&&l.precedance===a&&w.top&&l.x!==v?l.precedance=l.precedance===a?u:a:T!==y&&w.top&&(l.y=l.y===v?w.top>0?c:p:l.y===c?p:c),l.string()!==S.corner.string()&&(S.top!==w.top||S.left!==w.left)&&m.update(l,s)),C=m.position(l,w),C[l.x]+=_(l,l.x),C[l.y]+=_(l,l.y),C.right!==n&&(C.left=-C.right),C.bottom!==n&&(C.top=-C.bottom),C.user=Math.max(0,g.offset);if(N.left=x===y&&!!w.left)l.x===v?k["margin-left"]=N.x=C["margin-left"]-w.left:(L=C.right!==n?[w.left,-C.left]:[-w.left,C.left],(N.x=Math.max(L[0],L[1]))>L[0]&&(o.left-=w.left,N.left=s),k[C.right!==n?d:h]=N.x);if(N.top=T===y&&!!w.top)l.y===v?k["margin-top"]=N.y=C["margin-top"]-w.top:(L=C.bottom!==n?[w.top,-C.top]:[-w.top,C.top],(N.y=Math.max(L[0],L[1]))>L[0]&&(o.top-=w.top,N.top=s),k[C.bottom!==n?p:c]=N.y);b.tip.css(k).toggle(!(N.x&&N.y||l.x===v&&N.y||l.y===v&&N.x)),o.left-=C.left.charAt?C.user:x!==y||N.top||!N.left&&!N.top?C.left:0,o.top-=C.top.charAt?C.user:T!==y||N.left||!N.left&&!N.top?C.top:0,S.left=w.left,S.top=w.top,S.corner=l.clone()}function M(){var t=g.corner,n=e.options.position,r=n.at,o=n.my.string?n.my.string():n.my;return t===s||o===s&&r===s?s:(t===i?m.corner=new E.Corner(o):t.string||(m.corner=new E.Corner(t),m.corner.fixed=i),S.corner=new E.Corner(m.corner.string()),m.corner.string()!=="centercenter")}function _(e,t,n){t=t?t:e[e.precedance];var r=b.titlebar&&e.y===c,i=r?b.titlebar:w,s="border-"+t+"-width",o=function(e){return parseInt(e.css(s),10)},u;return k(function(){u=(n?o(n):o(b.content)||o(i)||o(w))||0}),u}function D(e){var t=b.titlebar&&e.y===c,n=t?b.titlebar:b.content,r="-moz-",i="-webkit-",s="border-radius-"+e.y+e.x,o="border-"+e.y+"-"+e.x+"-radius",u=function(e){return parseInt(n.css(e),10)||parseInt(w.css(e),10)},a;return k(function(){a=u(o)||u(s)||u(r+o)||u(r+s)||u(i+o)||u(i+s)||0}),a}function P(e){function N(e,t,n){var r=e.css(t)||p;return n&&r===e.css(n)?s:f.test(r)?s:r}var t,n,o,u=b.tip.css("cssText",""),a=e||m.corner,f=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,l="border-"+a[a.precedance]+"-color",h="background-color",p="transparent",d=" !important",y=b.titlebar,E=y&&(a.y===c||a.y===v&&u.position().top+x.height/2+g.offset<y.outerHeight(i)),S=E?y:b.content;k(function(){T.fill=N(u,h)||N(S,h)||N(b.content,h)||N(w,h)||u.css(h),T.border=N(u,l,"color")||N(S,l,"color")||N(b.content,l,"color")||N(w,l,"color")||w.css(l),r("*",u).add(u).css("cssText",h+":"+p+d+";border:0"+d+";")})}function H(e){var t=e.precedance===a,n=x[t?f:l],r=x[t?l:f],i=e.string().indexOf(v)>-1,s=n*(i?.5:1),o=Math.pow,u=Math.round,c,h,p,d=Math.sqrt(o(s,2)+o(r,2)),m=[N/s*d,N/r*d];return m[2]=Math.sqrt(o(m[0],2)-o(N,2)),m[3]=Math.sqrt(o(m[1],2)-o(N,2)),c=d+m[2]+m[3]+(i?0:m[0]),h=c/d,p=[u(h*r),u(h*n)],{height:p[t?0:1],width:p[t?1:0]}}function B(e,t,n){return"<qvml:"+e+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(t||"")+' style="behavior: url(#default#VML); '+(n||"")+'" />'}var m=this,g=e.options.style.tip,b=e.elements,w=b.tooltip,S={top:0,left:0},x={width:g.width,height:g.height},T={},N=g.border||0,C;m.corner=o,m.mimic=o,m.border=N,m.offset=g.offset,m.size=x,e.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){m.init()||m.destroy(),e.reposition()},"^style.tip.(height|width)$":function(){x={width:g.width,height:g.height},m.create(),m.update(),e.reposition()},"^content.title.text|style.(classes|widget)$":function(){b.tip&&b.tip.length&&m.update()}},r.extend(m,{init:function(){var e=M()&&(W||E.ie);return e&&(m.create(),m.update(),w.unbind(z).bind("tooltipmove"+z,O)),e},create:function(){var e=x.width,t=x.height,n;b.tip&&b.tip.remove(),b.tip=r("<div />",{"class":"qtip-tip"}).css({width:e,height:t}).prependTo(w),W?r("<canvas />").appendTo(b.tip)[0].getContext("2d").save():(n=B("shape",'coordorigin="0,0"',"position:absolute;"),b.tip.html(n+n),r("*",b.tip).bind("click"+z+" mousedown"+z,function(e){e.stopPropagation()}))},update:function(e,t){var n=b.tip,f=n.children(),l=x.width,y=x.height,C=g.mimic,k=Math.round,O,M,D,j,F;e||(e=S.corner||m.corner),C===s?C=e:(C=new E.Corner(C),C.precedance=e.precedance,C.x==="inherit"?C.x=e.x:C.y==="inherit"?C.y=e.y:C.x===C.y&&(C[e.precedance]=e[e.precedance])),O=C.precedance,e.precedance===u?L():A(),b.tip.css({width:l=x.width,height:y=x.height}),P(e),T.border!=="transparent"?(N=_(e,o),g.border===0&&N>0&&(T.fill=T.border),m.border=N=g.border!==i?g.border:N):m.border=N=0,D=X(C,l,y),m.size=F=H(e),n.css(F).css("line-height",F.height+"px"),e.precedance===a?j=[k(C.x===h?N:C.x===d?F.width-l-N:(F.width-l)/2),k(C.y===c?F.height-y:0)]:j=[k(C.x===h?F.width-l:0),k(C.y===c?N:C.y===p?F.height-y-N:(F.height-y)/2)],W?(f.attr(F),M=f[0].getContext("2d"),M.restore(),M.save(),M.clearRect(0,0,3e3,3e3),M.fillStyle=T.fill,M.strokeStyle=T.border,M.lineWidth=N*2,M.lineJoin="miter",M.miterLimit=100,M.translate(j[0],j[1]),M.beginPath(),M.moveTo(D[0][0],D[0][1]),M.lineTo(D[1][0],D[1][1]),M.lineTo(D[2][0],D[2][1]),M.closePath(),N&&(w.css("background-clip")==="border-box"&&(M.strokeStyle=T.fill,M.stroke()),M.strokeStyle=T.border,M.stroke()),M.fill()):(D="m"+D[0][0]+","+D[0][1]+" l"+D[1][0]+","+D[1][1]+" "+D[2][0]+","+D[2][1]+" xe",j[2]=N&&/^(r|b)/i.test(e.string())?E.ie===8?2:1:0,f.css({coordsize:l+N+" "+(y+N),antialias:""+(C.string().indexOf(v)>-1),left:j[0],top:j[1],width:l+N,height:y+N}).each(function(e){var t=r(this);t[t.prop?"prop":"attr"]({coordsize:l+N+" "+(y+N),path:D,fillcolor:T.fill,filled:!!e,stroked:!e}).toggle(!!N||!!e),!e&&t.html()===""&&t.html(B("stroke",'weight="'+N*2+'px" color="'+T.border+'" miterlimit="1000" joinstyle="miter"'))})),setTimeout(function(){b.tip.css({display:"inline-block",visibility:"visible"})},1),t!==s&&m.position(e)},position:function(e){var t=b.tip,n={},i=Math.max(0,g.offset),o,p,d;return g.corner===s||!t?s:(e=e||m.corner,o=e.precedance,p=H(e),d=[e.x,e.y],o===u&&d.reverse(),r.each(d,function(t,r){var s,u,d;r===v?(s=o===a?h:c,n[s]="50%",n["margin-"+s]=-Math.round(p[o===a?f:l]/2)+i):(s=_(e,r),u=_(e,r,b.content),d=D(e),n[r]=t?u:i+(d>s?d:-s))}),n[e[o]]-=p[o===u?f:l],t.css({top:"",bottom:"",left:"",right:"",margin:""}).css(n),n)},destroy:function(){w.unbind(z),b.tip&&b.tip.find("*").remove().end().remove(),delete m.corner,delete m.mimic,delete m.size}}),m.init()}function Y(e){var n=this,o=e.options.show.modal,u=e.elements,a=u.tooltip,f=G+e.id,l;e.checks.modal={"^show.modal.(on|blur)$":function(){n.destroy(),n.init(),l.toggle(a.is(":visible"))}},r.extend(n,{init:function(){return o.on?(l=u.overlay=J.elem,a.attr(K,i).css("z-index",E.modal.zindex+r(Q).length).bind("tooltipshow"+f+" tooltiphide"+f,function(e,t,i){var s=e.originalEvent;if(e.target===a[0])if(s&&e.type==="tooltiphide"&&/mouse(leave|enter)/.test(s.type)&&r(s.relatedTarget).closest(l[0]).length)try{e.preventDefault()}catch(o){}else(!s||s&&!s.solo)&&n.toggle(e,e.type==="tooltipshow",i)}).bind("tooltipfocus"+f,function(e,t){if(e.isDefaultPrevented()||e.target!==a[0])return;var n=r(Q),i=E.modal.zindex+n.length,s=parseInt(a[0].style.zIndex,10);l[0].style.zIndex=i-1,n.each(function(){this.style.zIndex>s&&(this.style.zIndex-=1)}),n.filter("."+A).qtip("blur",e.originalEvent),a.addClass(A)[0].style.zIndex=i,J.update(t);try{e.preventDefault()}catch(o){}}).bind("tooltiphide"+f,function(e){e.target===a[0]&&r(Q).filter(":visible").not(a).last().qtip("focus",e)}),n):n},toggle:function(t,r,i){return t&&t.isDefaultPrevented()?n:(J.toggle(e,!!r,i),n)},destroy:function(){r([t,a]).removeAttr(K).unbind(f),J.toggle(e,s),delete u.overlay}}),n.init()}function et(n){var o=this,u=n.elements,a=n.options,c=u.tooltip,h=".ie6-"+n.id,p=r("select, object").length<1,d=0,v=s,m;n.checks.ie6={"^content|style$":function(e,t,n){redraw()}},r.extend(o,{init:function(){var n=r(e),s;p&&(u.bgiframe=r('<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>'),u.bgiframe.appendTo(c),c.bind("tooltipmove"+h,o.adjustBGIFrame)),m=r("<div/>",{id:"qtip-rcontainer"}).appendTo(t.body),o.redraw(),u.overlay&&!v&&(s=function(){u.overlay[0].style.top=n.scrollTop()+"px"},n.bind("scroll.qtip-ie6, resize.qtip-ie6",s),s(),u.overlay.addClass("qtipmodal-ie6fix"),v=i)},adjustBGIFrame:function(){var e=n.get("dimensions"),t=n.plugins.tip,r=u.tip,i,s;s=parseInt(c.css("border-left-width"),10)||0,s={left:-s,top:-s},t&&r&&(i=t.corner.precedance==="x"?["width","left"]:["height","top"],s[i[1]]-=r[i[0]]()),u.bgiframe.css(s).css(e)},redraw:function(){if(n.rendered<1||d)return o;var e=a.style,t=a.position.container,r,i,s,u;return d=1,e.height&&c.css(l,e.height),e.width?c.css(f,e.width):(c.css(f,"").appendTo(m),i=c.width(),i%2<1&&(i+=1),s=c.css("max-width")||"",u=c.css("min-width")||"",r=(s+u).indexOf("%")>-1?t.width()/100:0,s=(s.indexOf("%")>-1?r:1)*parseInt(s,10)||i,u=(u.indexOf("%")>-1?r:1)*parseInt(u,10)||0,i=s+u?Math.min(Math.max(i,u),s):i,c.css(f,Math.round(i)).appendTo(t)),d=0,o},destroy:function(){p&&u.bgiframe.remove(),c.unbind(h)}}),o.init()}var i=!0,s=!1,o=null,u="x",a="y",f="width",l="height",c="top",h="left",p="bottom",d="right",v="center",m="flip",g="flipinvert",y="shift",b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",w,E,S,x="qtip",T="data-hasqtip",N={},C=["ui-widget","ui-tooltip"],k="div.qtip."+x,L=x+"-default",A=x+"-focus",O=x+"-hover",M="_replacedByqTip",_="oldtitle",D;w=r.fn.qtip=function(e,t,u){var a=(""+e).toLowerCase(),f=o,l=r.makeArray(arguments).slice(1),c=l[l.length-1],h=this[0]?r.data(this[0],"qtip"):o;if(!arguments.length&&h||a==="api")return h;if("string"==typeof e)return this.each(function(){var e=r.data(this,"qtip");if(!e)return i;c&&c.timeStamp&&(e.cache.event=c);if(a!=="option"&&a!=="options"||!t)e[a]&&e[a].apply(e[a],l);else{if(!r.isPlainObject(t)&&u===n)return f=e.get(t),s;e.set(t,u)}}),f!==o?f:this;if("object"==typeof e||!arguments.length)return h=H(r.extend(i,{},e)),w.bind.call(this,h,c)},w.bind=function(e,t){return this.each(function(o){function p(e){function t(){c.render(typeof e=="object"||u.show.ready),a.show.add(a.hide).unbind(l)}if(c.cache.disabled)return s;c.cache.event=r.extend({},e),c.cache.target=e?r(e.target):[n],u.show.delay>0?(clearTimeout(c.timers.show),c.timers.show=setTimeout(t,u.show.delay),f.show!==f.hide&&a.hide.bind(f.hide,function(){clearTimeout(c.timers.show)})):t()}var u,a,f,l,c,h;h=r.isArray(e.id)?e.id[o]:e.id,h=!h||h===s||h.length<1||N[h]?w.nextid++:N[h]=h,l=".qtip-"+h+"-create",c=j(r(this),h,e);if(c===s)return i;u=c.options,r.each(E,function(){this.initialize==="initialize"&&this(c)}),a={show:u.show.target,hide:u.hide.target},f={show:r.trim(""+u.show.event).replace(/ /g,l+" ")+l,hide:r.trim(""+u.hide.event).replace(/ /g,l+" ")+l},/mouse(over|enter)/i.test(f.show)&&!/mouse(out|leave)/i.test(f.hide)&&(f.hide+=" mouseleave"+l),a.show.bind("mousemove"+l,function(e){P(e),c.cache.onTarget=i}),a.show.bind(f.show,p),(u.show.ready||u.prerender)&&p(t)})},E=w.plugins={Corner:function(e){e=(""+e).replace(/([A-Z])/," $1").replace(/middle/gi,v).toLowerCase(),this.x=(e.match(/left|right/i)||e.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(e.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var t=e.charAt(0);this.precedance=t==="t"||t==="b"?a:u,this.string=function(){return this.precedance===a?this.y+this.x:this.x+this.y},this.abbrev=function(){var e=this.x.substr(0,1),t=this.y.substr(0,1);return e===t?e:this.precedance===a?t+e:e+t},this.invertx=function(e){this.x=this.x===h?d:this.x===d?h:e||this.x},this.inverty=function(e){this.y=this.y===c?p:this.y===p?c:e||this.y},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(e,n,i){function c(e,t){n.left+=t*e.scrollLeft(),n.top+=t*e.scrollTop()}var s=e.closest("body"),o=E.ie&&t.compatMode!=="CSS1Compat",u=i,a,f,l;if(u){do u.css("position")!=="static"&&(f=u.position(),n.left-=f.left+(parseInt(u.css("borderLeftWidth"),10)||0)+(parseInt(u.css("marginLeft"),10)||0),n.top-=f.top+(parseInt(u.css("borderTopWidth"),10)||0)+(parseInt(u.css("marginTop"),10)||0),!a&&(l=u.css("overflow"))!=="hidden"&&l!=="visible"&&(a=u));while((u=r(u[0].offsetParent)).length);(a&&a[0]!==s[0]||o)&&c(a||s,1)}return n},ie:function(){var e=3,n=t.createElement("div");while(n.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")if(!n.getElementsByTagName("i")[0])break;return e>4?e:s}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||s,fn:{attr:function(e,t){if(this.length){var n=this[0],i="title",s=r.data(n,"qtip");if(e===i&&s&&"object"==typeof s&&s.options.suppress)return arguments.length<2?r.attr(n,_):(s&&s.options.content.attr===i&&s.cache.attr&&s.set("content.text",t),this.attr(_,t))}return r.fn["attr"+M].apply(this,arguments)},clone:function(e){var t=r([]),n="title",i=r.fn["clone"+M].apply(this,arguments);return e||i.filter("["+_+"]").attr("title",function(){return r.attr(this,_)}).removeAttr(_),i}}},r.each(E.fn,function(e,t){if(!t||r.fn[e+M])return i;var n=r.fn[e+M]=r.fn[e];r.fn[e]=function(){return t.apply(this,arguments)||n.apply(this,arguments)}}),r.ui||(r["cleanData"+M]=r.cleanData,r.cleanData=function(e){for(var t=0,n;(n=r(e[t])).length&&n.attr(T);t++)try{n.triggerHandler("removeqtip")}catch(i){}r["cleanData"+M](e)}),w.version="2.0.1-35-",w.nextid=0,w.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),w.zindex=15e3,w.defaults={prerender:s,id:s,overwrite:i,suppress:i,content:{text:i,attr:"title",deferred:s,title:{text:s,button:s}},position:{my:"top left",at:"bottom right",target:s,container:s,viewport:s,adjust:{x:0,y:0,mouse:i,scroll:i,resize:i,method:"flipinvert flipinvert"},effect:function(e,t,n){r(this).animate(t,{duration:200,queue:s})}},show:{target:s,event:"mouseenter",effect:i,delay:90,solo:s,ready:s,autofocus:s},hide:{target:s,event:"mouseleave",effect:i,delay:0,fixed:s,inactive:s,leave:"window",distance:s},style:{classes:"",widget:s,width:s,height:s,def:i},events:{render:o,move:o,show:o,hide:o,toggle:o,visible:o,hidden:o,focus:o,blur:o}},E.svg=function(e,n,i,s){var o=r(t),u=n[0],a={width:0,height:0,position:{top:1e10,left:1e10}},f,l,c,h,p;while(!u.getBBox)u=u.parentNode;if(u.getBBox&&u.parentNode){f=u.getBBox(),l=u.getScreenCTM(),c=u.farthestViewportElement||u;if(!c.createSVGPoint)return a;h=c.createSVGPoint(),h.x=f.x,h.y=f.y,p=h.matrixTransform(l),a.position.left=p.x,a.position.top=p.y,h.x+=f.width,h.y+=f.height,p=h.matrixTransform(l),a.width=p.x-a.position.left,a.height=p.y-a.position.top,a.position.left+=o.scrollLeft(),a.position.top+=o.scrollTop()}return a};var F,I=".qtip-ajax",q=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;F=E.ajax=function(e){var t=e.plugins.ajax;return"object"==typeof t?t:e.plugins.ajax=new R(e)},F.initialize="render",F.sanitize=function(e){var t=e.content,n;t&&"ajax"in t&&(n=t.ajax,typeof n!="object"&&(n=e.content.ajax={url:n}),"boolean"!=typeof n.once&&n.once&&(n.once=!!n.once))},r.extend(i,w.defaults,{content:{ajax:{loading:i,once:i}}});var U,z=".qtip-tip",W=!!t.createElement("canvas").getContext;U=E.tip=function(e){var t=e.plugins.tip;return"object"==typeof t?t:e.plugins.tip=new V(e)},U.initialize="render",U.sanitize=function(e){var t=e.style,n;t&&"tip"in t&&(n=e.style.tip,typeof n!="object"&&(e.style.tip={corner:n}),/string|boolean/i.test(typeof n.corner)||(n.corner=i),typeof n.width!="number"&&delete n.width,typeof n.height!="number"&&delete n.height,typeof n.border!="number"&&n.border!==i&&delete n.border,typeof n.offset!="number"&&delete n.offset)},r.extend(i,w.defaults,{style:{tip:{corner:i,mimic:s,width:6,height:6,border:i,offset:0}}});var $,J,K="is-modal-qtip",Q=k+"["+K+"]",G=".qtipmodal";J=function(){function h(e){if(r.expr[":"].focusable)return r.expr[":"].focusable;var t=!isNaN(r.attr(e,"tabindex")),n=e.nodeName&&e.nodeName.toLowerCase(),i,s,o;return"area"===n?(i=e.parentNode,s=i.name,!e.href||!s||i.nodeName.toLowerCase()!=="map"?!1:(o=r("img[usemap=#"+s+"]")[0],!!o&&o.is(":visible"))):/input|select|textarea|button|object/.test(n)?!e.disabled:"a"===n?e.href||t:t}function p(e){u.length<1&&e.length?e.not("body").blur():u.first().focus()}function d(e){if(!c.is(":visible"))return;var t=r(e.target),n=a.elements.tooltip,i=t.closest(k),o;o=i.length<1?s:parseInt(i[0].style.zIndex,10)>parseInt(n[0].style.zIndex,10),!o&&t.closest(k)[0]!==n[0]&&p(t),f=e.target===u[u.length-1]}var n=this,u={},a,f,l,c;r.extend(n,{init:function(){function i(){var e=r(this);c.css({height:e.height(),width:e.width()})}return c=n.elem=r("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return s}}).hide(),r(e).bind("resize"+G,i),i(),r(t.body).bind("focusin"+G,d),r(t).bind("keydown"+G,function(e){a&&a.options.show.modal.escape&&e.keyCode===27&&a.hide(e)}),c.bind("click"+G,function(e){a&&a.options.show.modal.blur&&a.hide(e)}),n},update:function(e){a=e,e.options.show.modal.stealfocus!==s?u=e.elements.tooltip.find("*").filter(function(){return h(this)}):u=[]},toggle:function(e,u,f){var h=r(t.body),d=e.elements.tooltip,v=e.options.show.modal,m=v.effect,g=u?"show":"hide",y=c.is(":visible"),b=r(Q).filter(":visible:not(:animated)").not(d),w;return n.update(e),u&&v.stealfocus!==s&&p(r(":focus")),c.toggleClass("blurs",v.blur),u&&c.css({left:0,top:0}).appendTo(t.body),c.is(":animated")&&y===u&&l!==s||!u&&b.length?n:(c.stop(i,s),r.isFunction(m)?m.call(c,u):m===s?c[g]():c.fadeTo(parseInt(f,10)||90,u?1:0,function(){u||c.hide()}),u||c.queue(function(e){c.css({left:"",top:""}),b.length||c.detach(),e()}),l=u,a.destroyed&&(a=o),n)}}),n.init()},J=new J,$=E.modal=function(e){var t=e.plugins.modal;return"object"==typeof t?t:e.plugins.modal=new Y(e)},$.sanitize=function(e){e.show&&(typeof e.show.modal!="object"?e.show.modal={on:!!e.show.modal}:typeof e.show.modal.on=="undefined"&&(e.show.modal.on=i))},$.zindex=w.zindex-200,$.initialize="render",r.extend(i,w.defaults,{show:{modal:{on:s,effect:i,blur:i,stealfocus:i,escape:i}}}),E.viewport=function(n,r,i,s,o,m,b){function j(e,t,n,i,s,o,u,a,f){var l=r[s],c=S[e],h=T[e],p=n===y,d=-O.offset[s]+A.offset[s]+A["scroll"+s],m=c===s?f:c===o?-f:-f/2,b=h===s?a:h===o?-a:-a/2,w=_&&_.size?_.size[u]||0:0,E=_&&_.corner&&_.corner.precedance===e&&!p?w:0,x=d-l+E,N=l+f-A[u]-d+E,C=m-(S.precedance===e||c===S[t]?b:0)-(h===v?a/2:0);return p?(E=_&&_.corner&&_.corner.precedance===t?w:0,C=(c===s?1:-1)*m-E,r[s]+=x>0?x:N>0?-N:0,r[s]=Math.max(-O.offset[s]+A.offset[s]+(E&&_.corner[e]===v?_.offset:0),l-C,Math.min(Math.max(-O.offset[s]+A.offset[s]+A[u],l+C),r[s]))):(i*=n===g?2:0,x>0&&(c!==s||N>0)?(r[s]-=C+i,H["invert"+e](s)):N>0&&(c!==o||x>0)&&(r[s]-=(c===v?-C:C)+i,H["invert"+e](o)),r[s]<d&&-r[s]>N&&(r[s]=l,H=S.clone())),r[s]-l}var w=i.target,E=n.elements.tooltip,S=i.my,T=i.at,N=i.adjust,C=N.method.split(" "),k=C[0],L=C[1]||C[0],A=i.viewport,O=i.container,M=n.cache,_=n.plugins.tip,D={left:0,top:0},P,H,B;if(!A.jquery||w[0]===e||w[0]===t.body||N.method==="none")return D;P=E.css("position")==="fixed",A={elem:A,height:A[(A[0]===e?"h":"outerH")+"eight"](),width:A[(A[0]===e?"w":"outerW")+"idth"](),scrollleft:P?0:A.scrollLeft(),scrolltop:P?0:A.scrollTop(),offset:A.offset()||{left:0,top:0}},O={elem:O,scrollLeft:O.scrollLeft(),scrollTop:O.scrollTop(),offset:O.offset()||{left:0,top:0}};if(k!=="shift"||L!=="shift")H=S.clone();return D={left:k!=="none"?j(u,a,k,N.x,h,d,f,s,m):0,top:L!=="none"?j(a,u,L,N.y,c,p,l,o,b):0},H&&M.lastClass!==(B=x+"-pos-"+H.abbrev())&&E.removeClass(n.cache.lastClass).addClass(n.cache.lastClass=B),D},E.imagemap=function(e,t,n,i){function E(e,t,n){var r=0,i=1,s=1,o=0,u=0,a=e.width,f=e.height;while(a>0&&f>0&&i>0&&s>0){a=Math.floor(a/2),f=Math.floor(f/2),n.x===h?i=a:n.x===d?i=e.width-a:i+=Math.floor(a/2),n.y===c?s=f:n.y===p?s=e.height-f:s+=Math.floor(f/2),r=t.length;while(r--){if(t.length<2)break;o=t[r][0]-e.position.left,u=t[r][1]-e.position.top,(n.x===h&&o>=i||n.x===d&&o<=i||n.x===v&&(o<i||o>e.width-i)||n.y===c&&u>=s||n.y===p&&u<=s||n.y===v&&(u<s||u>e.height-s))&&t.splice(r,1)}}return{left:t[0][0],top:t[0][1]}}t.jquery||(t=r(t));var s=e.cache.areas={},o=(t[0].shape||t.attr("shape")).toLowerCase(),u=t[0].coords||t.attr("coords"),a=u.split(","),f=[],l=r('img[usemap="#'+t.parent("map").attr("name")+'"]'),m=l.offset(),g={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10}},y=0,b=0,w;m.left+=Math.ceil((l.outerWidth()-l.width())/2),m.top+=Math.ceil((l.outerHeight()-l.height())/2);if(o==="poly"){y=a.length;while(y--)b=[parseInt(a[--y],10),parseInt(a[y+1],10)],b[0]>g.position.right&&(g.position.right=b[0]),b[0]<g.position.left&&(g.position.left=b[0]),b[1]>g.position.bottom&&(g.position.bottom=b[1]),b[1]<g.position.top&&(g.position.top=b[1]),f.push(b)}else{y=-1;while(y++<a.length)f.push(parseInt(a[y],10))}switch(o){case"rect":g={width:Math.abs(f[2]-f[0]),height:Math.abs(f[3]-f[1]),position:{left:Math.min(f[0],f[2]),top:Math.min(f[1],f[3])}};break;case"circle":g={width:f[2]+2,height:f[2]+2,position:{left:f[0],top:f[1]}};break;case"poly":g.width=Math.abs(g.position.right-g.position.left),g.height=Math.abs(g.position.bottom-g.position.top),n.abbrev()==="c"?g.position={left:g.position.left+g.width/2,top:g.position.top+g.height/2}:(s[n+u]||(g.position=E(g,f.slice(),n),i&&(i[0]==="flip"||i[1]==="flip")&&(g.offset=E(g,f.slice(),{x:n.x===h?d:n.x===d?h:v,y:n.y===c?p:n.y===p?c:v}),g.offset.left-=g.position.left,g.offset.top-=g.position.top),s[n+u]=g),g=s[n+u]),g.width=g.height=0}return g.position.left+=m.left,g.position.top+=m.top,g};var Z;Z=E.ie6=function(e){var t=e.plugins.ie6;return E.ie!==6?s:"object"==typeof t?t:e.plugins.ie6=new et(e)},Z.initialize="render"})})(window,document);/* jQuery Notify UI Widget 1.5 by Eric Hynds
 * http://www.erichynds.com/jquery/a-jquery-ui-growl-ubuntu-notification-widget/
 *
 * Depends:
 *   - jQuery 1.4
 *   - jQuery UI 1.8 widget factory
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
*/
(function(d){d.widget("ech.notify",{options:{speed:500,expires:5E3,stack:"below",custom:!1,queue:!1},_create:function(){var a=this;this.templates={};this.keys=[];this.element.addClass("ui-notify").children().addClass("ui-notify-message ui-notify-message-style").each(function(b){b=this.id||b;a.keys.push(b);a.templates[b]=d(this).removeAttr("id").wrap("<div></div>").parent().html()}).end().empty().show()},create:function(a,b,c){"object"===typeof a&&(c=b,b=a,a=null);a=this.templates[a||this.keys[0]];c&&c.custom&&(a=d(a).removeClass("ui-notify-message-style").wrap("<div></div>").parent().html());this.openNotifications=this.openNotifications||0;return(new d.ech.notify.instance(this))._create(b,d.extend({},this.options,c),a)}});d.extend(d.ech.notify,{instance:function(a){this.__super=a;this.isOpen=!1}});d.extend(d.ech.notify.instance.prototype,{_create:function(a,b,c){this.options=b;var e=this,c=c.replace(/#(?:\{|%7B)(.*?)(?:\}|%7D)/g,function(b,c){return c in a?a[c]:""}),c=this.element=d(c),f=c.find(".ui-notify-close");"function"===typeof this.options.click&&c.addClass("ui-notify-click").bind("click",function(a){e._trigger("click",a,e)});f.length&&f.bind("click",function(){e.close();return!1});this.__super.element.queue("notify",function(){e.open();"number"===typeof b.expires&&0<b.expires&&setTimeout(d.proxy(e.close,e),b.expires)});(!this.options.queue||this.__super.openNotifications<=this.options.queue-1)&&this.__super.element.dequeue("notify");return this},close:function(){var a=this.options.speed;this.element.fadeTo(a,0).slideUp(a,d.proxy(function(){this._trigger("close");this.isOpen=!1;this.element.remove();this.__super.openNotifications-=1;this.__super.element.dequeue("notify")},this));return this},open:function(){if(this.isOpen||!1===this._trigger("beforeopen"))return this;var a=this;this.__super.openNotifications+=1;this.element["above"===this.options.stack?"prependTo":"appendTo"](this.__super.element).css({display:"none",opacity:""}).fadeIn(this.options.speed,function(){a._trigger("open");a.isOpen=!0});return this},widget:function(){return this.element},_trigger:function(a,b,c){return this.__super._trigger.call(this,a,b,c)}})})(jQuery);
/*! jQuery Timepicker Addon - v1.4.3 - 2013-11-30
* http://trentrichardson.com/examples/timepicker
* Copyright (c) 2013 Trent Richardson; Licensed MIT */
(function ($) {

	/*
	* Lets not redefine timepicker, Prevent "Uncaught RangeError: Maximum call stack size exceeded"
	*/
	$.ui.timepicker = $.ui.timepicker || {};
	if ($.ui.timepicker.version) {
		return;
	}

	/*
	* Extend jQueryUI, get it started with our version number
	*/
	$.extend($.ui, {
		timepicker: {
			version: "1.4.3"
		}
	});

	/* 
	* Timepicker manager.
	* Use the singleton instance of this class, $.timepicker, to interact with the time picker.
	* Settings for (groups of) time pickers are maintained in an instance object,
	* allowing multiple different settings on the same page.
	*/
	var Timepicker = function () {
		this.regional = []; // Available regional settings, indexed by language code
		this.regional[''] = { // Default regional settings
			currentText: 'Now',
			closeText: 'Done',
			amNames: ['AM', 'A'],
			pmNames: ['PM', 'P'],
			timeFormat: 'HH:mm',
			timeSuffix: '',
			timeOnlyTitle: 'Choose Time',
			timeText: 'Time',
			hourText: 'Hour',
			minuteText: 'Minute',
			secondText: 'Second',
			millisecText: 'Millisecond',
			microsecText: 'Microsecond',
			timezoneText: 'Time Zone',
			isRTL: false
		};
		this._defaults = { // Global defaults for all the datetime picker instances
			showButtonPanel: true,
			timeOnly: false,
			showHour: null,
			showMinute: null,
			showSecond: null,
			showMillisec: null,
			showMicrosec: null,
			showTimezone: null,
			showTime: true,
			stepHour: 1,
			stepMinute: 1,
			stepSecond: 1,
			stepMillisec: 1,
			stepMicrosec: 1,
			hour: 0,
			minute: 0,
			second: 0,
			millisec: 0,
			microsec: 0,
			timezone: null,
			hourMin: 0,
			minuteMin: 0,
			secondMin: 0,
			millisecMin: 0,
			microsecMin: 0,
			hourMax: 23,
			minuteMax: 59,
			secondMax: 59,
			millisecMax: 999,
			microsecMax: 999,
			minDateTime: null,
			maxDateTime: null,
			onSelect: null,
			hourGrid: 0,
			minuteGrid: 0,
			secondGrid: 0,
			millisecGrid: 0,
			microsecGrid: 0,
			alwaysSetTime: true,
			separator: ' ',
			altFieldTimeOnly: true,
			altTimeFormat: null,
			altSeparator: null,
			altTimeSuffix: null,
			pickerTimeFormat: null,
			pickerTimeSuffix: null,
			showTimepicker: true,
			timezoneList: null,
			addSliderAccess: false,
			sliderAccessArgs: null,
			controlType: 'slider',
			defaultValue: null,
			parse: 'strict'
		};
		$.extend(this._defaults, this.regional['']);
	};

	$.extend(Timepicker.prototype, {
		$input: null,
		$altInput: null,
		$timeObj: null,
		inst: null,
		hour_slider: null,
		minute_slider: null,
		second_slider: null,
		millisec_slider: null,
		microsec_slider: null,
		timezone_select: null,
		hour: 0,
		minute: 0,
		second: 0,
		millisec: 0,
		microsec: 0,
		timezone: null,
		hourMinOriginal: null,
		minuteMinOriginal: null,
		secondMinOriginal: null,
		millisecMinOriginal: null,
		microsecMinOriginal: null,
		hourMaxOriginal: null,
		minuteMaxOriginal: null,
		secondMaxOriginal: null,
		millisecMaxOriginal: null,
		microsecMaxOriginal: null,
		ampm: '',
		formattedDate: '',
		formattedTime: '',
		formattedDateTime: '',
		timezoneList: null,
		units: ['hour', 'minute', 'second', 'millisec', 'microsec'],
		support: {},
		control: null,

		/* 
		* Override the default settings for all instances of the time picker.
		* @param  {Object} settings  object - the new settings to use as defaults (anonymous object)
		* @return {Object} the manager object
		*/
		setDefaults: function (settings) {
			extendRemove(this._defaults, settings || {});
			return this;
		},

		/*
		* Create a new Timepicker instance
		*/
		_newInst: function ($input, opts) {
			var tp_inst = new Timepicker(),
				inlineSettings = {},
				fns = {},
				overrides, i;

			for (var attrName in this._defaults) {
				if (this._defaults.hasOwnProperty(attrName)) {
					var attrValue = $input.attr('time:' + attrName);
					if (attrValue) {
						try {
							inlineSettings[attrName] = eval(attrValue);
						} catch (err) {
							inlineSettings[attrName] = attrValue;
						}
					}
				}
			}

			overrides = {
				beforeShow: function (input, dp_inst) {
					if ($.isFunction(tp_inst._defaults.evnts.beforeShow)) {
						return tp_inst._defaults.evnts.beforeShow.call($input[0], input, dp_inst, tp_inst);
					}
				},
				onChangeMonthYear: function (year, month, dp_inst) {
					// Update the time as well : this prevents the time from disappearing from the $input field.
					tp_inst._updateDateTime(dp_inst);
					if ($.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)) {
						tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
					}
				},
				onClose: function (dateText, dp_inst) {
					if (tp_inst.timeDefined === true && $input.val() !== '') {
						tp_inst._updateDateTime(dp_inst);
					}
					if ($.isFunction(tp_inst._defaults.evnts.onClose)) {
						tp_inst._defaults.evnts.onClose.call($input[0], dateText, dp_inst, tp_inst);
					}
				}
			};
			for (i in overrides) {
				if (overrides.hasOwnProperty(i)) {
					fns[i] = opts[i] || null;
				}
			}

			tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, {
				evnts: fns,
				timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
			});
			tp_inst.amNames = $.map(tp_inst._defaults.amNames, function (val) {
				return val.toUpperCase();
			});
			tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function (val) {
				return val.toUpperCase();
			});

			// detect which units are supported
			tp_inst.support = detectSupport(
					tp_inst._defaults.timeFormat + 
					(tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : '') +
					(tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : ''));

			// controlType is string - key to our this._controls
			if (typeof(tp_inst._defaults.controlType) === 'string') {
				if (tp_inst._defaults.controlType === 'slider' && typeof($.ui.slider) === 'undefined') {
					tp_inst._defaults.controlType = 'select';
				}
				tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType];
			}
			// controlType is an object and must implement create, options, value methods
			else {
				tp_inst.control = tp_inst._defaults.controlType;
			}

			// prep the timezone options
			var timezoneList = [-720, -660, -600, -570, -540, -480, -420, -360, -300, -270, -240, -210, -180, -120, -60,
					0, 60, 120, 180, 210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 525, 540, 570, 600, 630, 660, 690, 720, 765, 780, 840];
			if (tp_inst._defaults.timezoneList !== null) {
				timezoneList = tp_inst._defaults.timezoneList;
			}
			var tzl = timezoneList.length, tzi = 0, tzv = null;
			if (tzl > 0 && typeof timezoneList[0] !== 'object') {
				for (; tzi < tzl; tzi++) {
					tzv = timezoneList[tzi];
					timezoneList[tzi] = { value: tzv, label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601) };
				}
			}
			tp_inst._defaults.timezoneList = timezoneList;

			// set the default units
			tp_inst.timezone = tp_inst._defaults.timezone !== null ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) :
							((new Date()).getTimezoneOffset() * -1);
			tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin :
							tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour;
			tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin :
							tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute;
			tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin :
							tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second;
			tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin :
							tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec;
			tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin :
							tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec;
			tp_inst.ampm = '';
			tp_inst.$input = $input;

			if (tp_inst._defaults.altField) {
				tp_inst.$altInput = $(tp_inst._defaults.altField).css({
					cursor: 'pointer'
				}).focus(function () {
					$input.trigger("focus");
				});
			}

			if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) {
				tp_inst._defaults.minDate = new Date();
			}
			if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) {
				tp_inst._defaults.maxDate = new Date();
			}

			// datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
			if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
				tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
			}
			if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
				tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
			}
			if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
				tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
			}
			if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
				tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
			}
			tp_inst.$input.bind('focus', function () {
				tp_inst._onFocus();
			});

			return tp_inst;
		},

		/*
		* add our sliders to the calendar
		*/
		_addTimePicker: function (dp_inst) {
			var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ? this.$input.val() + ' ' + this.$altInput.val() : this.$input.val();

			this.timeDefined = this._parseTime(currDT);
			this._limitMinMaxDateTime(dp_inst, false);
			this._injectTimePicker();
		},

		/*
		* parse the time string from input value or _setTime
		*/
		_parseTime: function (timeString, withDate) {
			if (!this.inst) {
				this.inst = $.datepicker._getInst(this.$input[0]);
			}

			if (withDate || !this._defaults.timeOnly) {
				var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
				try {
					var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
					if (!parseRes.timeObj) {
						return false;
					}
					$.extend(this, parseRes.timeObj);
				} catch (err) {
					$.timepicker.log("Error parsing the date/time string: " + err +
									"\ndate/time string = " + timeString +
									"\ntimeFormat = " + this._defaults.timeFormat +
									"\ndateFormat = " + dp_dateFormat);
					return false;
				}
				return true;
			} else {
				var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
				if (!timeObj) {
					return false;
				}
				$.extend(this, timeObj);
				return true;
			}
		},

		/*
		* generate and inject html for timepicker into ui datepicker
		*/
		_injectTimePicker: function () {
			var $dp = this.inst.dpDiv,
				o = this.inst.settings,
				tp_inst = this,
				litem = '',
				uitem = '',
				show = null,
				max = {},
				gridSize = {},
				size = null,
				i = 0,
				l = 0;

			// Prevent displaying twice
			if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) {
				var noDisplay = ' style="display:none;"',
					html = '<div class="ui-timepicker-div' + (o.isRTL ? ' ui-timepicker-rtl' : '') + '"><dl>' + '<dt class="ui_tpicker_time_label"' + ((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' +
								'<dd class="ui_tpicker_time"' + ((o.showTime) ? '' : noDisplay) + '></dd>';

				// Create the markup
				for (i = 0, l = this.units.length; i < l; i++) {
					litem = this.units[i];
					uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
					show = o['show' + uitem] !== null ? o['show' + uitem] : this.support[litem];

					// Added by Peter Medeiros:
					// - Figure out what the hour/minute/second max should be based on the step values.
					// - Example: if stepMinute is 15, then minMax is 45.
					max[litem] = parseInt((o[litem + 'Max'] - ((o[litem + 'Max'] - o[litem + 'Min']) % o['step' + uitem])), 10);
					gridSize[litem] = 0;

					html += '<dt class="ui_tpicker_' + litem + '_label"' + (show ? '' : noDisplay) + '>' + o[litem + 'Text'] + '</dt>' +
								'<dd class="ui_tpicker_' + litem + '"><div class="ui_tpicker_' + litem + '_slider"' + (show ? '' : noDisplay) + '></div>';

					if (show && o[litem + 'Grid'] > 0) {
						html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

						if (litem === 'hour') {
							for (var h = o[litem + 'Min']; h <= max[litem]; h += parseInt(o[litem + 'Grid'], 10)) {
								gridSize[litem]++;
								var tmph = $.datepicker.formatTime(this.support.ampm ? 'hht' : 'HH', {hour: h}, o);
								html += '<td data-for="' + litem + '">' + tmph + '</td>';
							}
						}
						else {
							for (var m = o[litem + 'Min']; m <= max[litem]; m += parseInt(o[litem + 'Grid'], 10)) {
								gridSize[litem]++;
								html += '<td data-for="' + litem + '">' + ((m < 10) ? '0' : '') + m + '</td>';
							}
						}

						html += '</tr></table></div>';
					}
					html += '</dd>';
				}
				
				// Timezone
				var showTz = o.showTimezone !== null ? o.showTimezone : this.support.timezone;
				html += '<dt class="ui_tpicker_timezone_label"' + (showTz ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
				html += '<dd class="ui_tpicker_timezone" ' + (showTz ? '' : noDisplay) + '></dd>';

				// Create the elements from string
				html += '</dl></div>';
				var $tp = $(html);

				// if we only want time picker...
				if (o.timeOnly === true) {
					$tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' + '<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' + '</div>');
					$dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
				}
				
				// add sliders, adjust grids, add events
				for (i = 0, l = tp_inst.units.length; i < l; i++) {
					litem = tp_inst.units[i];
					uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
					show = o['show' + uitem] !== null ? o['show' + uitem] : this.support[litem];

					// add the slider
					tp_inst[litem + '_slider'] = tp_inst.control.create(tp_inst, $tp.find('.ui_tpicker_' + litem + '_slider'), litem, tp_inst[litem], o[litem + 'Min'], max[litem], o['step' + uitem]);

					// adjust the grid and add click event
					if (show && o[litem + 'Grid'] > 0) {
						size = 100 * gridSize[litem] * o[litem + 'Grid'] / (max[litem] - o[litem + 'Min']);
						$tp.find('.ui_tpicker_' + litem + ' table').css({
							width: size + "%",
							marginLeft: o.isRTL ? '0' : ((size / (-2 * gridSize[litem])) + "%"),
							marginRight: o.isRTL ? ((size / (-2 * gridSize[litem])) + "%") : '0',
							borderCollapse: 'collapse'
						}).find("td").click(function (e) {
								var $t = $(this),
									h = $t.html(),
									n = parseInt(h.replace(/[^0-9]/g), 10),
									ap = h.replace(/[^apm]/ig),
									f = $t.data('for'); // loses scope, so we use data-for

								if (f === 'hour') {
									if (ap.indexOf('p') !== -1 && n < 12) {
										n += 12;
									}
									else {
										if (ap.indexOf('a') !== -1 && n === 12) {
											n = 0;
										}
									}
								}
								
								tp_inst.control.value(tp_inst, tp_inst[f + '_slider'], litem, n);

								tp_inst._onTimeChange();
								tp_inst._onSelectHandler();
							}).css({
								cursor: 'pointer',
								width: (100 / gridSize[litem]) + '%',
								textAlign: 'center',
								overflow: 'hidden'
							});
					} // end if grid > 0
				} // end for loop

				// Add timezone options
				this.timezone_select = $tp.find('.ui_tpicker_timezone').append('<select></select>').find("select");
				$.fn.append.apply(this.timezone_select,
				$.map(o.timezoneList, function (val, idx) {
					return $("<option />").val(typeof val === "object" ? val.value : val).text(typeof val === "object" ? val.label : val);
				}));
				if (typeof(this.timezone) !== "undefined" && this.timezone !== null && this.timezone !== "") {
					var local_timezone = (new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12)).getTimezoneOffset() * -1;
					if (local_timezone === this.timezone) {
						selectLocalTimezone(tp_inst);
					} else {
						this.timezone_select.val(this.timezone);
					}
				} else {
					if (typeof(this.hour) !== "undefined" && this.hour !== null && this.hour !== "") {
						this.timezone_select.val(o.timezone);
					} else {
						selectLocalTimezone(tp_inst);
					}
				}
				this.timezone_select.change(function () {
					tp_inst._onTimeChange();
					tp_inst._onSelectHandler();
				});
				// End timezone options
				
				// inject timepicker into datepicker
				var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
				if ($buttonPanel.length) {
					$buttonPanel.before($tp);
				} else {
					$dp.append($tp);
				}

				this.$timeObj = $tp.find('.ui_tpicker_time');

				if (this.inst !== null) {
					var timeDefined = this.timeDefined;
					this._onTimeChange();
					this.timeDefined = timeDefined;
				}

				// slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/
				if (this._defaults.addSliderAccess) {
					var sliderAccessArgs = this._defaults.sliderAccessArgs,
						rtl = this._defaults.isRTL;
					sliderAccessArgs.isRTL = rtl;
						
					setTimeout(function () { // fix for inline mode
						if ($tp.find('.ui-slider-access').length === 0) {
							$tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

							// fix any grids since sliders are shorter
							var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
							if (sliderAccessWidth) {
								$tp.find('table:visible').each(function () {
									var $g = $(this),
										oldWidth = $g.outerWidth(),
										oldMarginLeft = $g.css(rtl ? 'marginRight' : 'marginLeft').toString().replace('%', ''),
										newWidth = oldWidth - sliderAccessWidth,
										newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + '%',
										css = { width: newWidth, marginRight: 0, marginLeft: 0 };
									css[rtl ? 'marginRight' : 'marginLeft'] = newMarginLeft;
									$g.css(css);
								});
							}
						}
					}, 10);
				}
				// end slideAccess integration

				tp_inst._limitMinMaxDateTime(this.inst, true);
			}
		},

		/*
		* This function tries to limit the ability to go outside the
		* min/max date range
		*/
		_limitMinMaxDateTime: function (dp_inst, adjustSliders) {
			var o = this._defaults,
				dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

			if (!this._defaults.showTimepicker) {
				return;
			} // No time so nothing to check here

			if ($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date) {
				var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
					minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

				if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null || this.microsecMinOriginal === null) {
					this.hourMinOriginal = o.hourMin;
					this.minuteMinOriginal = o.minuteMin;
					this.secondMinOriginal = o.secondMin;
					this.millisecMinOriginal = o.millisecMin;
					this.microsecMinOriginal = o.microsecMin;
				}

				if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() === dp_date.getTime()) {
					this._defaults.hourMin = minDateTime.getHours();
					if (this.hour <= this._defaults.hourMin) {
						this.hour = this._defaults.hourMin;
						this._defaults.minuteMin = minDateTime.getMinutes();
						if (this.minute <= this._defaults.minuteMin) {
							this.minute = this._defaults.minuteMin;
							this._defaults.secondMin = minDateTime.getSeconds();
							if (this.second <= this._defaults.secondMin) {
								this.second = this._defaults.secondMin;
								this._defaults.millisecMin = minDateTime.getMilliseconds();
								if (this.millisec <= this._defaults.millisecMin) {
									this.millisec = this._defaults.millisecMin;
									this._defaults.microsecMin = minDateTime.getMicroseconds();
								} else {
									if (this.microsec < this._defaults.microsecMin) {
										this.microsec = this._defaults.microsecMin;
									}
									this._defaults.microsecMin = this.microsecMinOriginal;
								}
							} else {
								this._defaults.millisecMin = this.millisecMinOriginal;
								this._defaults.microsecMin = this.microsecMinOriginal;
							}
						} else {
							this._defaults.secondMin = this.secondMinOriginal;
							this._defaults.millisecMin = this.millisecMinOriginal;
							this._defaults.microsecMin = this.microsecMinOriginal;
						}
					} else {
						this._defaults.minuteMin = this.minuteMinOriginal;
						this._defaults.secondMin = this.secondMinOriginal;
						this._defaults.millisecMin = this.millisecMinOriginal;
						this._defaults.microsecMin = this.microsecMinOriginal;
					}
				} else {
					this._defaults.hourMin = this.hourMinOriginal;
					this._defaults.minuteMin = this.minuteMinOriginal;
					this._defaults.secondMin = this.secondMinOriginal;
					this._defaults.millisecMin = this.millisecMinOriginal;
					this._defaults.microsecMin = this.microsecMinOriginal;
				}
			}

			if ($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date) {
				var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
					maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

				if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null || this.millisecMaxOriginal === null) {
					this.hourMaxOriginal = o.hourMax;
					this.minuteMaxOriginal = o.minuteMax;
					this.secondMaxOriginal = o.secondMax;
					this.millisecMaxOriginal = o.millisecMax;
					this.microsecMaxOriginal = o.microsecMax;
				}

				if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() === dp_date.getTime()) {
					this._defaults.hourMax = maxDateTime.getHours();
					if (this.hour >= this._defaults.hourMax) {
						this.hour = this._defaults.hourMax;
						this._defaults.minuteMax = maxDateTime.getMinutes();
						if (this.minute >= this._defaults.minuteMax) {
							this.minute = this._defaults.minuteMax;
							this._defaults.secondMax = maxDateTime.getSeconds();
							if (this.second >= this._defaults.secondMax) {
								this.second = this._defaults.secondMax;
								this._defaults.millisecMax = maxDateTime.getMilliseconds();
								if (this.millisec >= this._defaults.millisecMax) {
									this.millisec = this._defaults.millisecMax;
									this._defaults.microsecMax = maxDateTime.getMicroseconds();
								} else {
									if (this.microsec > this._defaults.microsecMax) {
										this.microsec = this._defaults.microsecMax;
									}
									this._defaults.microsecMax = this.microsecMaxOriginal;
								}
							} else {
								this._defaults.millisecMax = this.millisecMaxOriginal;
								this._defaults.microsecMax = this.microsecMaxOriginal;
							}
						} else {
							this._defaults.secondMax = this.secondMaxOriginal;
							this._defaults.millisecMax = this.millisecMaxOriginal;
							this._defaults.microsecMax = this.microsecMaxOriginal;
						}
					} else {
						this._defaults.minuteMax = this.minuteMaxOriginal;
						this._defaults.secondMax = this.secondMaxOriginal;
						this._defaults.millisecMax = this.millisecMaxOriginal;
						this._defaults.microsecMax = this.microsecMaxOriginal;
					}
				} else {
					this._defaults.hourMax = this.hourMaxOriginal;
					this._defaults.minuteMax = this.minuteMaxOriginal;
					this._defaults.secondMax = this.secondMaxOriginal;
					this._defaults.millisecMax = this.millisecMaxOriginal;
					this._defaults.microsecMax = this.microsecMaxOriginal;
				}
			}

			if (adjustSliders !== undefined && adjustSliders === true) {
				var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
					minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
					secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
					millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10),
					microsecMax = parseInt((this._defaults.microsecMax - ((this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec)), 10);

				if (this.hour_slider) {
					this.control.options(this, this.hour_slider, 'hour', { min: this._defaults.hourMin, max: hourMax });
					this.control.value(this, this.hour_slider, 'hour', this.hour - (this.hour % this._defaults.stepHour));
				}
				if (this.minute_slider) {
					this.control.options(this, this.minute_slider, 'minute', { min: this._defaults.minuteMin, max: minMax });
					this.control.value(this, this.minute_slider, 'minute', this.minute - (this.minute % this._defaults.stepMinute));
				}
				if (this.second_slider) {
					this.control.options(this, this.second_slider, 'second', { min: this._defaults.secondMin, max: secMax });
					this.control.value(this, this.second_slider, 'second', this.second - (this.second % this._defaults.stepSecond));
				}
				if (this.millisec_slider) {
					this.control.options(this, this.millisec_slider, 'millisec', { min: this._defaults.millisecMin, max: millisecMax });
					this.control.value(this, this.millisec_slider, 'millisec', this.millisec - (this.millisec % this._defaults.stepMillisec));
				}
				if (this.microsec_slider) {
					this.control.options(this, this.microsec_slider, 'microsec', { min: this._defaults.microsecMin, max: microsecMax });
					this.control.value(this, this.microsec_slider, 'microsec', this.microsec - (this.microsec % this._defaults.stepMicrosec));
				}
			}

		},

		/*
		* when a slider moves, set the internal time...
		* on time change is also called when the time is updated in the text field
		*/
		_onTimeChange: function () {
			if (!this._defaults.showTimepicker) {
                                return;
			}
			var hour = (this.hour_slider) ? this.control.value(this, this.hour_slider, 'hour') : false,
				minute = (this.minute_slider) ? this.control.value(this, this.minute_slider, 'minute') : false,
				second = (this.second_slider) ? this.control.value(this, this.second_slider, 'second') : false,
				millisec = (this.millisec_slider) ? this.control.value(this, this.millisec_slider, 'millisec') : false,
				microsec = (this.microsec_slider) ? this.control.value(this, this.microsec_slider, 'microsec') : false,
				timezone = (this.timezone_select) ? this.timezone_select.val() : false,
				o = this._defaults,
				pickerTimeFormat = o.pickerTimeFormat || o.timeFormat,
				pickerTimeSuffix = o.pickerTimeSuffix || o.timeSuffix;

			if (typeof(hour) === 'object') {
				hour = false;
			}
			if (typeof(minute) === 'object') {
				minute = false;
			}
			if (typeof(second) === 'object') {
				second = false;
			}
			if (typeof(millisec) === 'object') {
				millisec = false;
			}
			if (typeof(microsec) === 'object') {
				microsec = false;
			}
			if (typeof(timezone) === 'object') {
				timezone = false;
			}

			if (hour !== false) {
				hour = parseInt(hour, 10);
			}
			if (minute !== false) {
				minute = parseInt(minute, 10);
			}
			if (second !== false) {
				second = parseInt(second, 10);
			}
			if (millisec !== false) {
				millisec = parseInt(millisec, 10);
			}
			if (microsec !== false) {
				microsec = parseInt(microsec, 10);
			}
			if (timezone !== false) {
				timezone = timezone.toString();
			}

			var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

			// If the update was done in the input field, the input field should not be updated.
			// If the update was done using the sliders, update the input field.
			var hasChanged = (
						hour !== parseInt(this.hour,10) || // sliders should all be numeric
						minute !== parseInt(this.minute,10) || 
						second !== parseInt(this.second,10) || 
						millisec !== parseInt(this.millisec,10) || 
						microsec !== parseInt(this.microsec,10) || 
						(this.ampm.length > 0 && (hour < 12) !== ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) || 
						(this.timezone !== null && timezone !== this.timezone.toString()) // could be numeric or "EST" format, so use toString()
					);

			if (hasChanged) {

				if (hour !== false) {
					this.hour = hour;
				}
				if (minute !== false) {
					this.minute = minute;
				}
				if (second !== false) {
					this.second = second;
				}
				if (millisec !== false) {
					this.millisec = millisec;
				}
				if (microsec !== false) {
					this.microsec = microsec;
				}
				if (timezone !== false) {
					this.timezone = timezone;
				}

				if (!this.inst) {
					this.inst = $.datepicker._getInst(this.$input[0]);
				}

				this._limitMinMaxDateTime(this.inst, true);
			}
			if (this.support.ampm) {
				this.ampm = ampm;
			}

			// Updates the time within the timepicker
			this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o);
			if (this.$timeObj) {
				if (pickerTimeFormat === o.timeFormat) {
					this.$timeObj.text(this.formattedTime + pickerTimeSuffix);
				}
				else {
					this.$timeObj.text($.datepicker.formatTime(pickerTimeFormat, this, o) + pickerTimeSuffix);
				}
			}

			this.timeDefined = true;
			if (hasChanged) {
				this._updateDateTime();
				this.$input.focus();
			}
		},

		/*
		* call custom onSelect.
		* bind to sliders slidestop, and grid click.
		*/
		_onSelectHandler: function () {
			var onSelect = this._defaults.onSelect || this.inst.settings.onSelect;
			var inputEl = this.$input ? this.$input[0] : null;
			if (onSelect && inputEl) {
				onSelect.apply(inputEl, [this.formattedDateTime, this]);
			}
		},

		/*
		* update our input with the new date time..
		*/
		_updateDateTime: function (dp_inst) {
			dp_inst = this.inst || dp_inst;
			var dtTmp = (dp_inst.currentYear > 0? 
							new Date(dp_inst.currentYear, dp_inst.currentMonth, dp_inst.currentDay) : 
							new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
				dt = $.datepicker._daylightSavingAdjust(dtTmp),
				//dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
				//dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.currentYear, dp_inst.currentMonth, dp_inst.currentDay)),
				dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
				formatCfg = $.datepicker._getFormatConfig(dp_inst),
				timeAvailable = dt !== null && this.timeDefined;
			this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
			var formattedDateTime = this.formattedDate;
			
			// if a slider was changed but datepicker doesn't have a value yet, set it
			if (dp_inst.lastVal === "") {
                dp_inst.currentYear = dp_inst.selectedYear;
                dp_inst.currentMonth = dp_inst.selectedMonth;
                dp_inst.currentDay = dp_inst.selectedDay;
            }

			/*
			* remove following lines to force every changes in date picker to change the input value
			* Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
			* If the user manually empty the value in the input field, the date picker will never change selected value.
			*/
			//if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
			//	return;
			//}

			if (this._defaults.timeOnly === true) {
				formattedDateTime = this.formattedTime;
			} else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
				formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
			}

			this.formattedDateTime = formattedDateTime;

			if (!this._defaults.showTimepicker) {
				this.$input.val(this.formattedDate);
			} else if (this.$altInput && this._defaults.timeOnly === false && this._defaults.altFieldTimeOnly === true) {
				this.$altInput.val(this.formattedTime);
				this.$input.val(this.formattedDate);
			} else if (this.$altInput) {
				this.$input.val(formattedDateTime);
				var altFormattedDateTime = '',
					altSeparator = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
					altTimeSuffix = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
				
				if (!this._defaults.timeOnly) {
					if (this._defaults.altFormat) {
						altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg);
					}
					else {
						altFormattedDateTime = this.formattedDate;
					}

					if (altFormattedDateTime) {
						altFormattedDateTime += altSeparator;
					}
				}

				if (this._defaults.altTimeFormat) {
					altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix;
				}
				else {
					altFormattedDateTime += this.formattedTime + altTimeSuffix;
				}
				this.$altInput.val(altFormattedDateTime);
			} else {
				this.$input.val(formattedDateTime);
			}

			this.$input.trigger("change");
		},

		_onFocus: function () {
			if (!this.$input.val() && this._defaults.defaultValue) {
				this.$input.val(this._defaults.defaultValue);
				var inst = $.datepicker._getInst(this.$input.get(0)),
					tp_inst = $.datepicker._get(inst, 'timepicker');
				if (tp_inst) {
					if (tp_inst._defaults.timeOnly && (inst.input.val() !== inst.lastVal)) {
						try {
							$.datepicker._updateDatepicker(inst);
						} catch (err) {
							$.timepicker.log(err);
						}
					}
				}
			}
		},

		/*
		* Small abstraction to control types
		* We can add more, just be sure to follow the pattern: create, options, value
		*/
		_controls: {
			// slider methods
			slider: {
				create: function (tp_inst, obj, unit, val, min, max, step) {
					var rtl = tp_inst._defaults.isRTL; // if rtl go -60->0 instead of 0->60
					return obj.prop('slide', null).slider({
						orientation: "horizontal",
						value: rtl ? val * -1 : val,
						min: rtl ? max * -1 : min,
						max: rtl ? min * -1 : max,
						step: step,
						slide: function (event, ui) {
							tp_inst.control.value(tp_inst, $(this), unit, rtl ? ui.value * -1 : ui.value);
							tp_inst._onTimeChange();
						},
						stop: function (event, ui) {
							tp_inst._onSelectHandler();
						}
					});	
				},
				options: function (tp_inst, obj, unit, opts, val) {
					if (tp_inst._defaults.isRTL) {
						if (typeof(opts) === 'string') {
							if (opts === 'min' || opts === 'max') {
								if (val !== undefined) {
									return obj.slider(opts, val * -1);
								}
								return Math.abs(obj.slider(opts));
							}
							return obj.slider(opts);
						}
						var min = opts.min, 
							max = opts.max;
						opts.min = opts.max = null;
						if (min !== undefined) {
							opts.max = min * -1;
						}
						if (max !== undefined) {
							opts.min = max * -1;
						}
						return obj.slider(opts);
					}
					if (typeof(opts) === 'string' && val !== undefined) {
						return obj.slider(opts, val);
					}
					return obj.slider(opts);
				},
				value: function (tp_inst, obj, unit, val) {
					if (tp_inst._defaults.isRTL) {
						if (val !== undefined) {
							return obj.slider('value', val * -1);
						}
						return Math.abs(obj.slider('value'));
					}
					if (val !== undefined) {
						return obj.slider('value', val);
					}
					return obj.slider('value');
				}
			},
			// select methods
			select: {
				create: function (tp_inst, obj, unit, val, min, max, step) {
					var sel = '<select class="ui-timepicker-select" data-unit="' + unit + '" data-min="' + min + '" data-max="' + max + '" data-step="' + step + '">',
						format = tp_inst._defaults.pickerTimeFormat || tp_inst._defaults.timeFormat;

					for (var i = min; i <= max; i += step) {
						sel += '<option value="' + i + '"' + (i === val ? ' selected' : '') + '>';
						if (unit === 'hour') {
							sel += $.datepicker.formatTime($.trim(format.replace(/[^ht ]/ig, '')), {hour: i}, tp_inst._defaults);
						}
						else if (unit === 'millisec' || unit === 'microsec' || i >= 10) { sel += i; }
						else {sel += '0' + i.toString(); }
						sel += '</option>';
					}
					sel += '</select>';

					obj.children('select').remove();

					$(sel).appendTo(obj).change(function (e) {
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					});

					return obj;
				},
				options: function (tp_inst, obj, unit, opts, val) {
					var o = {},
						$t = obj.children('select');
					if (typeof(opts) === 'string') {
						if (val === undefined) {
							return $t.data(opts);
						}
						o[opts] = val;	
					}
					else { o = opts; }
					return tp_inst.control.create(tp_inst, obj, $t.data('unit'), $t.val(), o.min || $t.data('min'), o.max || $t.data('max'), o.step || $t.data('step'));
				},
				value: function (tp_inst, obj, unit, val) {
					var $t = obj.children('select');
					if (val !== undefined) {
						return $t.val(val);
					}
					return $t.val();
				}
			}
		} // end _controls

	});

	$.fn.extend({
		/*
		* shorthand just to use timepicker.
		*/
		timepicker: function (o) {
			o = o || {};
			var tmp_args = Array.prototype.slice.call(arguments);

			if (typeof o === 'object') {
				tmp_args[0] = $.extend(o, {
					timeOnly: true
				});
			}

			return $(this).each(function () {
				$.fn.datetimepicker.apply($(this), tmp_args);
			});
		},

		/*
		* extend timepicker to datepicker
		*/
		datetimepicker: function (o) {
			o = o || {};
			var tmp_args = arguments;

			if (typeof(o) === 'string') {
				if (o === 'getDate') {
					return $.fn.datepicker.apply($(this[0]), tmp_args);
				} else {
					return this.each(function () {
						var $t = $(this);
						$t.datepicker.apply($t, tmp_args);
					});
				}
			} else {
				return this.each(function () {
					var $t = $(this);
					$t.datepicker($.timepicker._newInst($t, o)._defaults);
				});
			}
		}
	});

	/*
	* Public Utility to parse date and time
	*/
	$.datepicker.parseDateTime = function (dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
		if (parseRes.timeObj) {
			var t = parseRes.timeObj;
			parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
			parseRes.date.setMicroseconds(t.microsec);
		}

		return parseRes.date;
	};

	/*
	* Public utility to parse time
	*/
	$.datepicker.parseTime = function (timeFormat, timeString, options) {
		var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {}),
			iso8601 = (timeFormat.replace(/\'.*?\'/g, '').indexOf('Z') !== -1);

		// Strict parse requires the timeString to match the timeFormat exactly
		var strictParse = function (f, s, o) {

			// pattern for standard and localized AM/PM markers
			var getPatternAmpm = function (amNames, pmNames) {
				var markers = [];
				if (amNames) {
					$.merge(markers, amNames);
				}
				if (pmNames) {
					$.merge(markers, pmNames);
				}
				markers = $.map(markers, function (val) {
					return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&');
				});
				return '(' + markers.join('|') + ')?';
			};

			// figure out position of time elements.. cause js cant do named captures
			var getFormatPositions = function (timeFormat) {
				var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),
					orders = {
						h: -1,
						m: -1,
						s: -1,
						l: -1,
						c: -1,
						t: -1,
						z: -1
					};

				if (finds) {
					for (var i = 0; i < finds.length; i++) {
						if (orders[finds[i].toString().charAt(0)] === -1) {
							orders[finds[i].toString().charAt(0)] = i + 1;
						}
					}
				}
				return orders;
			};

			var regstr = '^' + f.toString()
					.replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (match) {
							var ml = match.length;
							switch (match.charAt(0).toLowerCase()) {
							case 'h':
								return ml === 1 ? '(\\d?\\d)' : '(\\d{' + ml + '})';
							case 'm':
								return ml === 1 ? '(\\d?\\d)' : '(\\d{' + ml + '})';
							case 's':
								return ml === 1 ? '(\\d?\\d)' : '(\\d{' + ml + '})';
							case 'l':
								return '(\\d?\\d?\\d)';
							case 'c':
								return '(\\d?\\d?\\d)';
							case 'z':
								return '(z|[-+]\\d\\d:?\\d\\d|\\S+)?';
							case 't':
								return getPatternAmpm(o.amNames, o.pmNames);
							default:    // literal escaped in quotes
								return '(' + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (m) { return "\\" + m; }) + ')?';
							}
						})
					.replace(/\s/g, '\\s?') +
					o.timeSuffix + '$',
				order = getFormatPositions(f),
				ampm = '',
				treg;

			treg = s.match(new RegExp(regstr, 'i'));

			var resTime = {
				hour: 0,
				minute: 0,
				second: 0,
				millisec: 0,
				microsec: 0
			};

			if (treg) {
				if (order.t !== -1) {
					if (treg[order.t] === undefined || treg[order.t].length === 0) {
						ampm = '';
						resTime.ampm = '';
					} else {
						ampm = $.inArray(treg[order.t].toUpperCase(), o.amNames) !== -1 ? 'AM' : 'PM';
						resTime.ampm = o[ampm === 'AM' ? 'amNames' : 'pmNames'][0];
					}
				}

				if (order.h !== -1) {
					if (ampm === 'AM' && treg[order.h] === '12') {
						resTime.hour = 0; // 12am = 0 hour
					} else {
						if (ampm === 'PM' && treg[order.h] !== '12') {
							resTime.hour = parseInt(treg[order.h], 10) + 12; // 12pm = 12 hour, any other pm = hour + 12
						} else {
							resTime.hour = Number(treg[order.h]);
						}
					}
				}

				if (order.m !== -1) {
					resTime.minute = Number(treg[order.m]);
				}
				if (order.s !== -1) {
					resTime.second = Number(treg[order.s]);
				}
				if (order.l !== -1) {
					resTime.millisec = Number(treg[order.l]);
				}
				if (order.c !== -1) {
					resTime.microsec = Number(treg[order.c]);
				}
				if (order.z !== -1 && treg[order.z] !== undefined) {
					resTime.timezone = $.timepicker.timezoneOffsetNumber(treg[order.z]);
				}


				return resTime;
			}
			return false;
		};// end strictParse

		// First try JS Date, if that fails, use strictParse
		var looseParse = function (f, s, o) {
			try {
				var d = new Date('2012-01-01 ' + s);
				if (isNaN(d.getTime())) {
					d = new Date('2012-01-01T' + s);
					if (isNaN(d.getTime())) {
						d = new Date('01/01/2012 ' + s);
						if (isNaN(d.getTime())) {
							throw "Unable to parse time with native Date: " + s;
						}
					}
				}

				return {
					hour: d.getHours(),
					minute: d.getMinutes(),
					second: d.getSeconds(),
					millisec: d.getMilliseconds(),
					microsec: d.getMicroseconds(),
					timezone: d.getTimezoneOffset() * -1
				};
			}
			catch (err) {
				try {
					return strictParse(f, s, o);
				}
				catch (err2) {
					$.timepicker.log("Unable to parse \ntimeString: " + s + "\ntimeFormat: " + f);
				}				
			}
			return false;
		}; // end looseParse
		
		if (typeof o.parse === "function") {
			return o.parse(timeFormat, timeString, o);
		}
		if (o.parse === 'loose') {
			return looseParse(timeFormat, timeString, o);
		}
		return strictParse(timeFormat, timeString, o);
	};

	/**
	 * Public utility to format the time
	 * @param {string} format format of the time
	 * @param {Object} time Object not a Date for timezones
	 * @param {Object} [options] essentially the regional[].. amNames, pmNames, ampm
	 * @returns {string} the formatted time
	 */
	$.datepicker.formatTime = function (format, time, options) {
		options = options || {};
		options = $.extend({}, $.timepicker._defaults, options);
		time = $.extend({
			hour: 0,
			minute: 0,
			second: 0,
			millisec: 0,
			microsec: 0,
			timezone: null
		}, time);

		var tmptime = format,
			ampmName = options.amNames[0],
			hour = parseInt(time.hour, 10);

		if (hour > 11) {
			ampmName = options.pmNames[0];
		}

		tmptime = tmptime.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (match) {
			switch (match) {
			case 'HH':
				return ('0' + hour).slice(-2);
			case 'H':
				return hour;
			case 'hh':
				return ('0' + convert24to12(hour)).slice(-2);
			case 'h':
				return convert24to12(hour);
			case 'mm':
				return ('0' + time.minute).slice(-2);
			case 'm':
				return time.minute;
			case 'ss':
				return ('0' + time.second).slice(-2);
			case 's':
				return time.second;
			case 'l':
				return ('00' + time.millisec).slice(-3);
			case 'c':
				return ('00' + time.microsec).slice(-3);
			case 'z':
				return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, false);
			case 'Z':
				return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, true);
			case 'T':
				return ampmName.charAt(0).toUpperCase();
			case 'TT':
				return ampmName.toUpperCase();
			case 't':
				return ampmName.charAt(0).toLowerCase();
			case 'tt':
				return ampmName.toLowerCase();
			default:
				return match.replace(/'/g, "");
			}
		});

		return tmptime;
	};

	/*
	* the bad hack :/ override datepicker so it doesn't close on select
	// inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
	*/
	$.datepicker._base_selectDate = $.datepicker._selectDate;
	$.datepicker._selectDate = function (id, dateStr) {
		var inst = this._getInst($(id)[0]),
			tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			tp_inst._limitMinMaxDateTime(inst, true);
			inst.inline = inst.stay_open = true;
			//This way the onSelect handler called from calendarpicker get the full dateTime
			this._base_selectDate(id, dateStr);
			inst.inline = inst.stay_open = false;
			this._notifyChange(inst);
			this._updateDatepicker(inst);
		} else {
			this._base_selectDate(id, dateStr);
		}
	};

	/*
	* second bad hack :/ override datepicker so it triggers an event when changing the input field
	* and does not redraw the datepicker on every selectDate event
	*/
	$.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
	$.datepicker._updateDatepicker = function (inst) {

		// don't popup the datepicker if there is another instance already opened
		var input = inst.input[0];
		if ($.datepicker._curInst && $.datepicker._curInst !== inst && $.datepicker._datepickerShowing && $.datepicker._lastInput !== input) {
			return;
		}

		if (typeof(inst.stay_open) !== 'boolean' || inst.stay_open === false) {

			this._base_updateDatepicker(inst);

			// Reload the time control when changing something in the input text field.
			var tp_inst = this._get(inst, 'timepicker');
			if (tp_inst) {
				tp_inst._addTimePicker(inst);
			}
		}
	};

	/*
	* third bad hack :/ override datepicker so it allows spaces and colon in the input field
	*/
	$.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
	$.datepicker._doKeyPress = function (event) {
		var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

		if (tp_inst) {
			if ($.datepicker._get(inst, 'constrainInput')) {
				var ampm = tp_inst.support.ampm,
					tz = tp_inst._defaults.showTimezone !== null ? tp_inst._defaults.showTimezone : tp_inst.support.timezone,
					dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
					datetimeChars = tp_inst._defaults.timeFormat.toString()
											.replace(/[hms]/g, '')
											.replace(/TT/g, ampm ? 'APM' : '')
											.replace(/Tt/g, ampm ? 'AaPpMm' : '')
											.replace(/tT/g, ampm ? 'AaPpMm' : '')
											.replace(/T/g, ampm ? 'AP' : '')
											.replace(/tt/g, ampm ? 'apm' : '')
											.replace(/t/g, ampm ? 'ap' : '') + 
											" " + tp_inst._defaults.separator + 
											tp_inst._defaults.timeSuffix + 
											(tz ? tp_inst._defaults.timezoneList.join('') : '') + 
											(tp_inst._defaults.amNames.join('')) + (tp_inst._defaults.pmNames.join('')) + 
											dateChars,
					chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
				return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
			}
		}

		return $.datepicker._base_doKeyPress(event);
	};

	/*
	* Fourth bad hack :/ override _updateAlternate function used in inline mode to init altField
	* Update any alternate field to synchronise with the main field.
	*/
	$.datepicker._base_updateAlternate = $.datepicker._updateAlternate;
	$.datepicker._updateAlternate = function (inst) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var altField = tp_inst._defaults.altField;
			if (altField) { // update alternate field too
				var altFormat = tp_inst._defaults.altFormat || tp_inst._defaults.dateFormat,
					date = this._getDate(inst),
					formatCfg = $.datepicker._getFormatConfig(inst),
					altFormattedDateTime = '', 
					altSeparator = tp_inst._defaults.altSeparator ? tp_inst._defaults.altSeparator : tp_inst._defaults.separator, 
					altTimeSuffix = tp_inst._defaults.altTimeSuffix ? tp_inst._defaults.altTimeSuffix : tp_inst._defaults.timeSuffix,
					altTimeFormat = tp_inst._defaults.altTimeFormat !== null ? tp_inst._defaults.altTimeFormat : tp_inst._defaults.timeFormat;
				
				altFormattedDateTime += $.datepicker.formatTime(altTimeFormat, tp_inst, tp_inst._defaults) + altTimeSuffix;
				if (!tp_inst._defaults.timeOnly && !tp_inst._defaults.altFieldTimeOnly && date !== null) {
					if (tp_inst._defaults.altFormat) {
						altFormattedDateTime = $.datepicker.formatDate(tp_inst._defaults.altFormat, date, formatCfg) + altSeparator + altFormattedDateTime;
					}
					else {
						altFormattedDateTime = tp_inst.formattedDate + altSeparator + altFormattedDateTime;
					}
				}
				$(altField).val(altFormattedDateTime);
			}
		}
		else {
			$.datepicker._base_updateAlternate(inst);
		}
	};

	/*
	* Override key up event to sync manual input changes.
	*/
	$.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
	$.datepicker._doKeyUp = function (event) {
		var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

		if (tp_inst) {
			if (tp_inst._defaults.timeOnly && (inst.input.val() !== inst.lastVal)) {
				try {
					$.datepicker._updateDatepicker(inst);
				} catch (err) {
					$.timepicker.log(err);
				}
			}
		}

		return $.datepicker._base_doKeyUp(event);
	};

	/*
	* override "Today" button to also grab the time.
	*/
	$.datepicker._base_gotoToday = $.datepicker._gotoToday;
	$.datepicker._gotoToday = function (id) {
		var inst = this._getInst($(id)[0]),
			$dp = inst.dpDiv;
		this._base_gotoToday(id);
		var tp_inst = this._get(inst, 'timepicker');
		selectLocalTimezone(tp_inst);
		var now = new Date();
		this._setTime(inst, now);
		$('.ui-datepicker-today', $dp).click();
	};

	/*
	* Disable & enable the Time in the datetimepicker
	*/
	$.datepicker._disableTimepickerDatepicker = function (target) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');
		$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
		if (tp_inst) {
			inst.settings.showTimepicker = false;
			tp_inst._defaults.showTimepicker = false;
			tp_inst._updateDateTime(inst);
		}
	};

	$.datepicker._enableTimepickerDatepicker = function (target) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');
		$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
		if (tp_inst) {
			inst.settings.showTimepicker = true;
			tp_inst._defaults.showTimepicker = true;
			tp_inst._addTimePicker(inst); // Could be disabled on page load
			tp_inst._updateDateTime(inst);
		}
	};

	/*
	* Create our own set time function
	*/
	$.datepicker._setTime = function (inst, date) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var defaults = tp_inst._defaults;

			// calling _setTime with no date sets time to defaults
			tp_inst.hour = date ? date.getHours() : defaults.hour;
			tp_inst.minute = date ? date.getMinutes() : defaults.minute;
			tp_inst.second = date ? date.getSeconds() : defaults.second;
			tp_inst.millisec = date ? date.getMilliseconds() : defaults.millisec;
			tp_inst.microsec = date ? date.getMicroseconds() : defaults.microsec;

			//check if within min/max times.. 
			tp_inst._limitMinMaxDateTime(inst, true);

			tp_inst._onTimeChange();
			tp_inst._updateDateTime(inst);
		}
	};

	/*
	* Create new public method to set only time, callable as $().datepicker('setTime', date)
	*/
	$.datepicker._setTimeDatepicker = function (target, date, withDate) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			this._setDateFromField(inst);
			var tp_date;
			if (date) {
				if (typeof date === "string") {
					tp_inst._parseTime(date, withDate);
					tp_date = new Date();
					tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
					tp_date.setMicroseconds(tp_inst.microsec);
				} else {
					tp_date = new Date(date.getTime());
					tp_date.setMicroseconds(date.getMicroseconds());
				}
				if (tp_date.toString() === 'Invalid Date') {
					tp_date = undefined;
				}
				this._setTime(inst, tp_date);
			}
		}

	};

	/*
	* override setDate() to allow setting time too within Date object
	*/
	$.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
	$.datepicker._setDateDatepicker = function (target, date) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		if (typeof(date) === 'string') {
			date = new Date(date);
			if (!date.getTime()) {
				$.timepicker.log("Error creating Date object from string.");
			}
		}

		var tp_inst = this._get(inst, 'timepicker');
		var tp_date;
		if (date instanceof Date) {
			tp_date = new Date(date.getTime());
			tp_date.setMicroseconds(date.getMicroseconds());
		} else {
			tp_date = date;
		}
		
		// This is important if you are using the timezone option, javascript's Date 
		// object will only return the timezone offset for the current locale, so we 
		// adjust it accordingly.  If not using timezone option this won't matter..
		// If a timezone is different in tp, keep the timezone as is
		if (tp_inst && tp_date) {
			// look out for DST if tz wasn't specified
			if (!tp_inst.support.timezone && tp_inst._defaults.timezone === null) {
				tp_inst.timezone = tp_date.getTimezoneOffset() * -1;
			}
			date = $.timepicker.timezoneAdjust(date, tp_inst.timezone);
			tp_date = $.timepicker.timezoneAdjust(tp_date, tp_inst.timezone);
		}

		this._updateDatepicker(inst);
		this._base_setDateDatepicker.apply(this, arguments);
		this._setTimeDatepicker(target, tp_date, true);
	};

	/*
	* override getDate() to allow getting time too within Date object
	*/
	$.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
	$.datepicker._getDateDatepicker = function (target, noDefault) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			// if it hasn't yet been defined, grab from field
			if (inst.lastVal === undefined) {
				this._setDateFromField(inst, noDefault);
			}

			var date = this._getDate(inst);
			if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) {
				date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
				date.setMicroseconds(tp_inst.microsec);

				// This is important if you are using the timezone option, javascript's Date 
				// object will only return the timezone offset for the current locale, so we 
				// adjust it accordingly.  If not using timezone option this won't matter..
				if (tp_inst.timezone != null) {
					// look out for DST if tz wasn't specified
					if (!tp_inst.support.timezone && tp_inst._defaults.timezone === null) {
						tp_inst.timezone = date.getTimezoneOffset() * -1;
					}
					date = $.timepicker.timezoneAdjust(date, tp_inst.timezone);
				}
			}
			return date;
		}
		return this._base_getDateDatepicker(target, noDefault);
	};

	/*
	* override parseDate() because UI 1.8.14 throws an error about "Extra characters"
	* An option in datapicker to ignore extra format characters would be nicer.
	*/
	$.datepicker._base_parseDate = $.datepicker.parseDate;
	$.datepicker.parseDate = function (format, value, settings) {
		var date;
		try {
			date = this._base_parseDate(format, value, settings);
		} catch (err) {
			// Hack!  The error message ends with a colon, a space, and
			// the "extra" characters.  We rely on that instead of
			// attempting to perfectly reproduce the parsing algorithm.
			if (err.indexOf(":") >= 0) {
				date = this._base_parseDate(format, value.substring(0, value.length - (err.length - err.indexOf(':') - 2)), settings);
				$.timepicker.log("Error parsing the date string: " + err + "\ndate string = " + value + "\ndate format = " + format);
			} else {
				throw err;
			}
		}
		return date;
	};

	/*
	* override formatDate to set date with time to the input
	*/
	$.datepicker._base_formatDate = $.datepicker._formatDate;
	$.datepicker._formatDate = function (inst, day, month, year) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			tp_inst._updateDateTime(inst);
			return tp_inst.$input.val();
		}
		return this._base_formatDate(inst);
	};

	/*
	* override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
	*/
	$.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
	$.datepicker._optionDatepicker = function (target, name, value) {
		var inst = this._getInst(target),
			name_clone;
		if (!inst) {
			return null;
		}

		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var min = null,
				max = null,
				onselect = null,
				overrides = tp_inst._defaults.evnts,
				fns = {},
				prop;
			if (typeof name === 'string') { // if min/max was set with the string
				if (name === 'minDate' || name === 'minDateTime') {
					min = value;
				} else if (name === 'maxDate' || name === 'maxDateTime') {
					max = value;
				} else if (name === 'onSelect') {
					onselect = value;
				} else if (overrides.hasOwnProperty(name)) {
					if (typeof (value) === 'undefined') {
						return overrides[name];
					}
					fns[name] = value;
					name_clone = {}; //empty results in exiting function after overrides updated
				}
			} else if (typeof name === 'object') { //if min/max was set with the JSON
				if (name.minDate) {
					min = name.minDate;
				} else if (name.minDateTime) {
					min = name.minDateTime;
				} else if (name.maxDate) {
					max = name.maxDate;
				} else if (name.maxDateTime) {
					max = name.maxDateTime;
				}
				for (prop in overrides) {
					if (overrides.hasOwnProperty(prop) && name[prop]) {
						fns[prop] = name[prop];
					}
				}
			}
			for (prop in fns) {
				if (fns.hasOwnProperty(prop)) {
					overrides[prop] = fns[prop];
					if (!name_clone) { name_clone = $.extend({}, name); }
					delete name_clone[prop];
				}
			}
			if (name_clone && isEmptyObject(name_clone)) { return; }
			if (min) { //if min was set
				if (min === 0) {
					min = new Date();
				} else {
					min = new Date(min);
				}
				tp_inst._defaults.minDate = min;
				tp_inst._defaults.minDateTime = min;
			} else if (max) { //if max was set
				if (max === 0) {
					max = new Date();
				} else {
					max = new Date(max);
				}
				tp_inst._defaults.maxDate = max;
				tp_inst._defaults.maxDateTime = max;
			} else if (onselect) {
				tp_inst._defaults.onSelect = onselect;
			}
		}
		if (value === undefined) {
			return this._base_optionDatepicker.call($.datepicker, target, name);
		}
		return this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value);
	};
	
	/*
	* jQuery isEmptyObject does not check hasOwnProperty - if someone has added to the object prototype,
	* it will return false for all objects
	*/
	var isEmptyObject = function (obj) {
		var prop;
		for (prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				return false;
			}
		}
		return true;
	};

	/*
	* jQuery extend now ignores nulls!
	*/
	var extendRemove = function (target, props) {
		$.extend(target, props);
		for (var name in props) {
			if (props[name] === null || props[name] === undefined) {
				target[name] = props[name];
			}
		}
		return target;
	};

	/*
	* Determine by the time format which units are supported
	* Returns an object of booleans for each unit
	*/
	var detectSupport = function (timeFormat) {
		var tf = timeFormat.replace(/'.*?'/g, '').toLowerCase(), // removes literals
			isIn = function (f, t) { // does the format contain the token?
					return f.indexOf(t) !== -1 ? true : false;
				};
		return {
				hour: isIn(tf, 'h'),
				minute: isIn(tf, 'm'),
				second: isIn(tf, 's'),
				millisec: isIn(tf, 'l'),
				microsec: isIn(tf, 'c'),
				timezone: isIn(tf, 'z'),
				ampm: isIn(tf, 't') && isIn(timeFormat, 'h'),
				iso8601: isIn(timeFormat, 'Z')
			};
	};

	/*
	* Converts 24 hour format into 12 hour
	* Returns 12 hour without leading 0
	*/
	var convert24to12 = function (hour) {
		hour %= 12;

		if (hour === 0) {
			hour = 12;
		}

		return String(hour);
	};

	var computeEffectiveSetting = function (settings, property) {
		return settings && settings[property] ? settings[property] : $.timepicker._defaults[property];
	};

	/*
	* Splits datetime string into date and time substrings.
	* Throws exception when date can't be parsed
	* Returns {dateString: dateString, timeString: timeString}
	*/
	var splitDateTime = function (dateTimeString, timeSettings) {
		// The idea is to get the number separator occurrences in datetime and the time format requested (since time has
		// fewer unknowns, mostly numbers and am/pm). We will use the time pattern to split.
		var separator = computeEffectiveSetting(timeSettings, 'separator'),
			format = computeEffectiveSetting(timeSettings, 'timeFormat'),
			timeParts = format.split(separator), // how many occurrences of separator may be in our format?
			timePartsLen = timeParts.length,
			allParts = dateTimeString.split(separator),
			allPartsLen = allParts.length;

		if (allPartsLen > 1) {
			return {
				dateString: allParts.splice(0, allPartsLen - timePartsLen).join(separator),
				timeString: allParts.splice(0, timePartsLen).join(separator)
			};
		}

		return {
			dateString: dateTimeString,
			timeString: ''
		};
	};

	/*
	* Internal function to parse datetime interval
	* Returns: {date: Date, timeObj: Object}, where
	*   date - parsed date without time (type Date)
	*   timeObj = {hour: , minute: , second: , millisec: , microsec: } - parsed time. Optional
	*/
	var parseDateTimeInternal = function (dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var date,
			parts,
			parsedTime;

		parts = splitDateTime(dateTimeString, timeSettings);
		date = $.datepicker._base_parseDate(dateFormat, parts.dateString, dateSettings);

		if (parts.timeString === '') {
			return {
				date: date
			};
		}

		parsedTime = $.datepicker.parseTime(timeFormat, parts.timeString, timeSettings);

		if (!parsedTime) {
			throw 'Wrong time format';
		}

		return {
			date: date,
			timeObj: parsedTime
		};
	};

	/*
	* Internal function to set timezone_select to the local timezone
	*/
	var selectLocalTimezone = function (tp_inst, date) {
		if (tp_inst && tp_inst.timezone_select) {
			var now = date || new Date();
			tp_inst.timezone_select.val(-now.getTimezoneOffset());
		}
	};

	/*
	* Create a Singleton Instance
	*/
	$.timepicker = new Timepicker();

	/**
	 * Get the timezone offset as string from a date object (eg '+0530' for UTC+5.5)
	 * @param {number} tzMinutes if not a number, less than -720 (-1200), or greater than 840 (+1400) this value is returned
	 * @param {boolean} iso8601 if true formats in accordance to iso8601 "+12:45"
	 * @return {string}
	 */
	$.timepicker.timezoneOffsetString = function (tzMinutes, iso8601) {
		if (isNaN(tzMinutes) || tzMinutes > 840 || tzMinutes < -720) {
			return tzMinutes;
		}

		var off = tzMinutes,
			minutes = off % 60,
			hours = (off - minutes) / 60,
			iso = iso8601 ? ':' : '',
			tz = (off >= 0 ? '+' : '-') + ('0' + Math.abs(hours)).slice(-2) + iso + ('0' + Math.abs(minutes)).slice(-2);
		
		if (tz === '+00:00') {
			return 'Z';
		}
		return tz;
	};

	/**
	 * Get the number in minutes that represents a timezone string
	 * @param  {string} tzString formatted like "+0500", "-1245", "Z"
	 * @return {number} the offset minutes or the original string if it doesn't match expectations
	 */
	$.timepicker.timezoneOffsetNumber = function (tzString) {
		var normalized = tzString.toString().replace(':', ''); // excuse any iso8601, end up with "+1245"

		if (normalized.toUpperCase() === 'Z') { // if iso8601 with Z, its 0 minute offset
			return 0;
		}

		if (!/^(\-|\+)\d{4}$/.test(normalized)) { // possibly a user defined tz, so just give it back
			return tzString;
		}

		return ((normalized.substr(0, 1) === '-' ? -1 : 1) * // plus or minus
					((parseInt(normalized.substr(1, 2), 10) * 60) + // hours (converted to minutes)
					parseInt(normalized.substr(3, 2), 10))); // minutes
	};

	/**
	 * No way to set timezone in js Date, so we must adjust the minutes to compensate. (think setDate, getDate)
	 * @param  {Date} date
	 * @param  {string} toTimezone formatted like "+0500", "-1245"
	 * @return {Date}
	 */
	$.timepicker.timezoneAdjust = function (date, toTimezone) {
		var toTz = $.timepicker.timezoneOffsetNumber(toTimezone);
		if (!isNaN(toTz)) {
			date.setMinutes(date.getMinutes() + -date.getTimezoneOffset() - toTz);
		}
		return date;
	};

	/**
	 * Calls `timepicker()` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * n.b. The input value must be correctly formatted (reformatting is not supported)
	 * @param  {Element} startTime
	 * @param  {Element} endTime
	 * @param  {Object} options Options for the timepicker() call
	 * @return {jQuery}
	 */
	$.timepicker.timeRange = function (startTime, endTime, options) {
		return $.timepicker.handleRange('timepicker', startTime, endTime, options);
	};

	/**
	 * Calls `datetimepicker` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  {Element} startTime
	 * @param  {Element} endTime
	 * @param  {Object} options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @param  {string} method Can be used to specify the type of picker to be added
	 * @return {jQuery}
	 */
	$.timepicker.datetimeRange = function (startTime, endTime, options) {
		$.timepicker.handleRange('datetimepicker', startTime, endTime, options);
	};

	/**
	 * Calls `datepicker` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  {Element} startTime
	 * @param  {Element} endTime
	 * @param  {Object} options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @return {jQuery}
	 */
	$.timepicker.dateRange = function (startTime, endTime, options) {
		$.timepicker.handleRange('datepicker', startTime, endTime, options);
	};

	/**
	 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  {string} method Can be used to specify the type of picker to be added
	 * @param  {Element} startTime
	 * @param  {Element} endTime
	 * @param  {Object} options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @return {jQuery}
	 */
	$.timepicker.handleRange = function (method, startTime, endTime, options) {
		options = $.extend({}, {
			minInterval: 0, // min allowed interval in milliseconds
			maxInterval: 0, // max allowed interval in milliseconds
			start: {},      // options for start picker
			end: {}         // options for end picker
		}, options);

		function checkDates(changed, other) {
			var startdt = startTime[method]('getDate'),
				enddt = endTime[method]('getDate'),
				changeddt = changed[method]('getDate');

			if (startdt !== null) {
				var minDate = new Date(startdt.getTime()),
					maxDate = new Date(startdt.getTime());

				minDate.setMilliseconds(minDate.getMilliseconds() + options.minInterval);
				maxDate.setMilliseconds(maxDate.getMilliseconds() + options.maxInterval);

				if (options.minInterval > 0 && minDate > enddt) { // minInterval check
					endTime[method]('setDate', minDate);
				}
				else if (options.maxInterval > 0 && maxDate < enddt) { // max interval check
					endTime[method]('setDate', maxDate);
				}
				else if (startdt > enddt) {
					other[method]('setDate', changeddt);
				}
			}
		}

		function selected(changed, other, option) {
			if (!changed.val()) {
				return;
			}
			var date = changed[method].call(changed, 'getDate');
			if (date !== null && options.minInterval > 0) {
				if (option === 'minDate') {
					date.setMilliseconds(date.getMilliseconds() + options.minInterval);
				}
				if (option === 'maxDate') {
					date.setMilliseconds(date.getMilliseconds() - options.minInterval);
				}
			}
			if (date.getTime) {
				other[method].call(other, 'option', option, date);
			}
		}

		$.fn[method].call(startTime, $.extend({
			onClose: function (dateText, inst) {
				checkDates($(this), endTime);
			},
			onSelect: function (selectedDateTime) {
				selected($(this), endTime, 'minDate');
			}
		}, options, options.start));
		$.fn[method].call(endTime, $.extend({
			onClose: function (dateText, inst) {
				checkDates($(this), startTime);
			},
			onSelect: function (selectedDateTime) {
				selected($(this), startTime, 'maxDate');
			}
		}, options, options.end));

		checkDates(startTime, endTime);
		selected(startTime, endTime, 'minDate');
		selected(endTime, startTime, 'maxDate');
		return $([startTime.get(0), endTime.get(0)]);
	};

	/**
	 * Log error or data to the console during error or debugging
	 * @param  {Object} err pass any type object to log to the console during error or debugging
	 * @return {void}
	 */
	$.timepicker.log = function (err) {
		if (window.console) {
			window.console.log(err);
		}
	};

	/*
	 * Add util object to allow access to private methods for testability.
	 */
	$.timepicker._util = {
		_extendRemove: extendRemove,
		_isEmptyObject: isEmptyObject,
		_convert24to12: convert24to12,
		_detectSupport: detectSupport,
		_selectLocalTimezone: selectLocalTimezone,
		_computeEffectiveSetting: computeEffectiveSetting,
		_splitDateTime: splitDateTime,
		_parseDateTimeInternal: parseDateTimeInternal
	};

	/*
	* Microsecond support
	*/
	if (!Date.prototype.getMicroseconds) {
		Date.prototype.microseconds = 0;
		Date.prototype.getMicroseconds = function () { return this.microseconds; };
		Date.prototype.setMicroseconds = function (m) {
			this.setMilliseconds(this.getMilliseconds() + Math.floor(m / 1000));
			this.microseconds = m % 1000;
			return this;
		};
	}

	/*
	* Keep up with the version
	*/
	$.timepicker.version = "1.4.3";

})(jQuery);
/*
bindWithDelay jQuery plugin
Author: Brian Grinstead
MIT license: http://www.opensource.org/licenses/mit-license.php

http://github.com/bgrins/bindWithDelay
http://briangrinstead.com/files/bindWithDelay

Usage:
    See http://api.jquery.com/bind/
    .bindWithDelay( eventType, [ eventData ], handler(eventObject), timeout, throttle )

Examples:
    $("#foo").bindWithDelay("click", function(e) { }, 100);
    $(window).bindWithDelay("resize", { optional: "eventData" }, callback, 1000);
    $(window).bindWithDelay("resize", callback, 1000, true);
*/

(function($) {

$.fn.bindWithDelay = function( type, data, fn, timeout, throttle ) {

    if ( $.isFunction( data ) ) {
        throttle = timeout;
        timeout = fn;
        fn = data;
        data = undefined;
    }

    // Allow delayed function to be removed with fn in unbind function
    fn.guid = fn.guid || ($.guid && $.guid++);

    // Bind each separately so that each element has its own delay
    return this.each(function() {

        var wait = null;

        function cb() {
            var e = $.extend(true, { }, arguments[0]);
            var ctx = this;
            var throttler = function() {
                wait = null;
                fn.apply(ctx, [e]);
            };

            if (!throttle) { clearTimeout(wait); wait = null; }
            if (!wait) { wait = setTimeout(throttler, timeout); }
        }

        cb.guid = fn.guid;

        $(this).bind(type, data, cb);
    });
};

})(jQuery);
(function($){
/*
 * jqGrid methods without support. Use as you wish
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * This list of deprecated methods.
 * If you instead want to use them, please include this file after the grid main file.
 * Some methods will be then overwritten.
 *
 */
/*global jQuery, $ */

$.jgrid.extend({
// This is the ols search Filter method used in navigator.
	searchGrid : function (p) {
		p = $.extend({
			recreateFilter: false,
			drag: true,
			sField:'searchField',
			sValue:'searchString',
			sOper: 'searchOper',
			sFilter: 'filters',
            loadDefaults: true, // this options activates loading of default filters from grid's postData for Multipe Search only.
			beforeShowSearch: null,
			afterShowSearch : null,
			onInitializeSearch: null,
			closeAfterSearch : false,
			closeAfterReset: false,
			closeOnEscape : false,
			multipleSearch : false,
			cloneSearchRowOnAdd: true,
			// translation
			// if you want to change or remove the order change it in sopt
			// ['bw','eq','ne','lt','le','gt','ge','ew','cn']
			sopt: null,
			// Note: stringResult is intentionally declared "undefined by default".
			//  you are velcome to define stringResult expressly in the options you pass to searchGrid()
			//  stringResult is a "safeguard" measure to insure we post sensible data when communicated as form-encoded
			//  see http://github.com/tonytomov/jqGrid/issues/#issue/36
			//
			//  If this value is not expressly defined in the incoming options,
			// lower in the code we will infer the value based on value of multipleSearch
			stringResult: undefined,
			onClose : null,
			// useDataProxy allows ADD, EDIT and DEL code to bypass calling $.ajax
			// directly when grid's 'dataProxy' property (grid.p.dataProxy) is a function.
			// Used for "editGridRow" and "delGridRow" below and automatically flipped to TRUE
			// when ajax setting's 'url' (grid's 'editurl') property is undefined.
			// When 'useDataProxy' is true, instead of calling $.ajax.call(gridDOMobj, o, i) we call
			// gridDOMobj.p.dataProxy.call(gridDOMobj, o, i)
			//
			// Behavior is extremely similar to when 'datatype' is a function, but arguments are slightly different.
			// Normally the following is fed to datatype.call(a, b, c):
			//   a = Pointer to grid's table DOM element, b = grid.p.postdata, c = "load_"+grid's ID
			// In cases of "edit" and "del" the following is fed:
			//   a = Pointer to grid's table DOM element (same),
			//   b = extended Ajax Options including postdata in "data" property. (different object type)
			//   c = "set_"+grid's ID in case of "edit" and "del_"+grid's ID in case of "del" (same type, different content)
			// The major difference is that complete ajax options object, with attached "complete" and "error"
			// callback functions is fed instead of only post data.
			// This allows you to emulate a $.ajax call (including calling "complete"/"error"),
			// while retrieving the data locally in the browser.
			useDataProxy: false,
			overlay : true
		}, $.jgrid.search, p || {});
		return this.each(function() {
			var $t = this;
			if(!$t.grid) {return;}
			var fid = "fbox_"+$t.p.id,
			showFrm = true;
            function applyDefaultFilters(gridDOMobj, filterSettings) {
				/*
                gridDOMobj = ointer to grid DOM object ( $(#list)[0] )
                What we need from gridDOMobj:
                gridDOMobj.SearchFilter is the pointer to the Search box, once it's created.
                gridDOMobj.p.postData - dictionary of post settings. These can be overriden at grid creation to
                contain default filter settings. We will parse these and will populate the search with defaults.
                filterSettings - same settings object you (would) pass to $().jqGrid('searchGrid', filterSettings);
                */

                // Pulling default filter settings out of postData property of grid's properties.:
                var defaultFilters = gridDOMobj.p.postData[filterSettings.sFilter];
                // example of what we might get: {"groupOp":"and","rules":[{"field":"amount","op":"eq","data":"100"}]}
				// suppose we have imported this with grid import, the this is a string.
				if(typeof(defaultFilters) == "string") {
					defaultFilters = $.jgrid.parse(defaultFilters);
				}
                if (defaultFilters) {
                    if (defaultFilters.groupOp) {
                        gridDOMobj.SearchFilter.setGroupOp(defaultFilters.groupOp);
                    }
                    if (defaultFilters.rules) {
                        var f, i = 0, li = defaultFilters.rules.length, success = false;
                        for (; i < li; i++) {
                            f = defaultFilters.rules[i];
                            // we are not trying to counter all issues with filter declaration here. Just the basics to avoid lookup exceptions.
                            if (f.field !== undefined && f.op !== undefined && f.data !== undefined) {
                                success = gridDOMobj.SearchFilter.setFilter({
                                    'sfref':gridDOMobj.SearchFilter.$.find(".sf:last"),
                                    'filter':$.extend({},f)
                                });
								if (success) { gridDOMobj.SearchFilter.add(); }
                            }
                        }
                    }
				}
            } // end of applyDefaultFilters
			function hideFilter(selector) {
				if(p.onClose){
					var fclm = p.onClose(selector);
					if(typeof fclm == 'boolean' && !fclm) { return; }
				}
				selector.hide();
				if(p.overlay === true) {
					$(".jqgrid-overlay:first","#gbox_"+$t.p.id).hide();
				}
			}
			function showFilter(){
				var fl = $(".ui-searchFilter").length;
				if(fl > 1) {
					var zI = $("#"+fid).css("zIndex");
					$("#"+fid).css({zIndex:parseInt(zI,10)+fl});
				}
				$("#"+fid).show();
				if(p.overlay === true) {
					$(".jqgrid-overlay:first","#gbox_"+$t.p.id).show();
				}
				try{$(':input:visible',"#"+fid)[0].focus();}catch(_){}
			}
			function searchFilters(filters) {
				var hasFilters = (filters !== undefined),
				grid = $("#"+$t.p.id),
				sdata={};
				if(p.multipleSearch===false) {
					sdata[p.sField] = filters.rules[0].field;
					sdata[p.sValue] = filters.rules[0].data;
					sdata[p.sOper] = filters.rules[0].op;
					if(sdata.hasOwnProperty(p.sFilter) ) {
						delete sdata[p.sFilter];
					}
				} else {
					sdata[p.sFilter] = filters;
					$.each([p.sField, p.sValue, p.sOper], function(i, n){
						if(sdata.hasOwnProperty(n)) { delete sdata[n];}
					});
				}
				grid[0].p.search = hasFilters;
				$.extend(grid[0].p.postData,sdata);
				grid.trigger("reloadGrid",[{page:1}]);
				if(p.closeAfterSearch) { hideFilter($("#"+fid)); }
			}
			function resetFilters(op) {
				var reload = op && op.hasOwnProperty("reload") ? op.reload : true,
				grid = $("#"+$t.p.id),
				sdata={};
				grid[0].p.search = false;
				if(p.multipleSearch===false) {
					sdata[p.sField] = sdata[p.sValue] = sdata[p.sOper] = "";
				} else {
					sdata[p.sFilter] = "";
				}
				$.extend(grid[0].p.postData,sdata);
				if(reload) {
					grid.trigger("reloadGrid",[{page:1}]);
				}
				if(p.closeAfterReset) { hideFilter($("#"+fid)); }
			}
			if($.fn.searchFilter) {
				if(p.recreateFilter===true) {$("#"+fid).remove();}
				if( $("#"+fid).html() !== null ) {
					if ( $.isFunction(p.beforeShowSearch) ) {
						showFrm = p.beforeShowSearch($("#"+fid));
						if(typeof(showFrm) == "undefined") {
							showFrm = true;
						}
					}
					if(showFrm === false) { return; }
					showFilter();
					if( $.isFunction(p.afterShowSearch) ) { p.afterShowSearch($("#"+fid)); }
				} else {
					var fields = [],
					colNames = $("#"+$t.p.id).jqGrid("getGridParam","colNames"),
					colModel = $("#"+$t.p.id).jqGrid("getGridParam","colModel"),
					stempl = ['eq','ne','lt','le','gt','ge','bw','bn','in','ni','ew','en','cn','nc'],
					j,pos,k,oprtr=[];
					if (p.sopt !==null) {
						k=0;
						for(j=0;j<p.sopt.length;j++) {
							if( (pos= $.inArray(p.sopt[j],stempl)) != -1 ){
								oprtr[k] = {op:p.sopt[j],text: p.odata[pos]};
								k++;
							}
						}
					} else {
						for(j=0;j<stempl.length;j++) {
							oprtr[j] = {op:stempl[j],text: p.odata[j]};
						}
					}
				    $.each(colModel, function(i, v) {
				        var searchable = (typeof v.search === 'undefined') ?  true: v.search ,
				        hidden = (v.hidden === true),
						soptions = $.extend({}, {text: colNames[i], itemval: v.index || v.name}, this.searchoptions),
						ignoreHiding = (soptions.searchhidden === true);
						if(typeof soptions.sopt !== 'undefined') {
							k=0;
							soptions.ops =[];
							if(soptions.sopt.length>0) {
								for(j=0;j<soptions.sopt.length;j++) {
									if( (pos= $.inArray(soptions.sopt[j],stempl)) != -1 ){
										soptions.ops[k] = {op:soptions.sopt[j],text: p.odata[pos]};
										k++;
									}
								}
							}
						}
						if(typeof(this.stype) === 'undefined') { this.stype='text'; }
						if(this.stype == 'select') {
							if ( soptions.dataUrl !== undefined) {}
							else {
								var eov;
								if(soptions.value) {
									eov = soptions.value;
								} else if(this.editoptions) {
									eov = this.editoptions.value;
								}
								if(eov) {
									soptions.dataValues =[];
									if(typeof(eov) === 'string') {
										var so = eov.split(";"),sv;
										for(j=0;j<so.length;j++) {
											sv = so[j].split(":");
											soptions.dataValues[j] ={value:sv[0],text:sv[1]};
										}
									} else if (typeof(eov) === 'object') {
										j=0;
										for (var key in eov) {
											if(eov.hasOwnProperty(key)) {
												soptions.dataValues[j] ={value:key,text:eov[key]};
												j++;
											}
										}
									}
								}
							}
						}
				        if ((ignoreHiding && searchable) || (searchable && !hidden)) {
							fields.push(soptions);
						}
					});
					if(fields.length>0){
						$("<div id='"+fid+"' role='dialog' tabindex='-1'></div>").insertBefore("#gview_"+$t.p.id);
						// Before we create searchFilter we need to decide if we want to get back a string or a JS object.
						//  see http://github.com/tonytomov/jqGrid/issues/#issue/36 for background on the issue.
						// If p.stringResult is defined, it was explisitly passed to us by user. Honor the choice, whatever it is.
						if (p.stringResult===undefined) {
							// to provide backward compatibility, inferring stringResult value from multipleSearch
							p.stringResult = p.multipleSearch;
						}
						// we preserve the return value here to retain access to .add() and other good methods of search form.
						$t.SearchFilter = $("#"+fid).searchFilter(fields, { groupOps: p.groupOps, operators: oprtr, onClose:hideFilter, resetText: p.Reset, searchText: p.Find, windowTitle: p.caption,  rulesText:p.rulesText, matchText:p.matchText, onSearch: searchFilters, onReset: resetFilters,stringResult:p.stringResult, ajaxSelectOptions: $.extend({},$.jgrid.ajaxOptions,$t.p.ajaxSelectOptions ||{}), clone: p.cloneSearchRowOnAdd });
						$(".ui-widget-overlay","#"+fid).remove();
						if($t.p.direction=="rtl") { $(".ui-closer","#"+fid).css("float","left"); }
						if (p.drag===true) {
							$("#"+fid+" table thead tr:first td:first").css('cursor','move');
							if(jQuery.fn.jqDrag) {
								$("#"+fid).jqDrag($("#"+fid+" table thead tr:first td:first"));
							} else {
								try {
									$("#"+fid).draggable({handle: $("#"+fid+" table thead tr:first td:first")});
								} catch (e) {}
							}
						}
						if(p.multipleSearch === false) {
							$(".ui-del, .ui-add, .ui-del, .ui-add-last, .matchText, .rulesText", "#"+fid).hide();
							$("select[name='groupOp']","#"+fid).hide();
						}
                        if (p.multipleSearch === true && p.loadDefaults === true) {
                            applyDefaultFilters($t, p);
                        }
						if ( $.isFunction(p.onInitializeSearch) ) { p.onInitializeSearch( $("#"+fid) ); }
						if ( $.isFunction(p.beforeShowSearch) ) {
							showFrm = p.beforeShowSearch($("#"+fid));
							if(typeof(showFrm) == "undefined") {
								showFrm = true;
							}
						}
						if(showFrm === false) { return; }
						showFilter();
						if( $.isFunction(p.afterShowSearch) ) { p.afterShowSearch($("#"+fid)); }
						if(p.closeOnEscape===true){
							$("#"+fid).keydown( function( e ) {
								if( e.which == 27 ) {
									hideFilter($("#"+fid));
								}
								if (e.which == 13) {
									$(".ui-search", this).click();
								}
							});
						}
					}
				}
			}
		});
	},
	// methods taken from grid.custom.
	updateGridRows : function (data, rowidname, jsonreader) {
		var nm, success=false, title;
		this.each(function(){
			var t = this, vl, ind, srow, sid;
			if(!t.grid) {return false;}
			if(!rowidname) { rowidname = "id"; }
			if( data  && data.length >0 ) {
				$(data).each(function(j){
					srow = this;
					ind = t.rows.namedItem(srow[rowidname]);
					if(ind) {
						sid = srow[rowidname];
						if(jsonreader === true){
							if(t.p.jsonReader.repeatitems === true) {
								if(t.p.jsonReader.cell) {srow = srow[t.p.jsonReader.cell];}
								for (var k=0;k<srow.length;k++) {
									vl = t.formatter( sid, srow[k], k, srow, 'edit');
									title = t.p.colModel[k].title ? {"title":$.jgrid.stripHtml(vl)} : {};
									if(t.p.treeGrid===true && nm == t.p.ExpandColumn) {
										$("td:eq("+k+") > span:first",ind).html(vl).attr(title);
									} else {
										$("td:eq("+k+")",ind).html(vl).attr(title);
									}
								}
								success = true;
								return true;
							}
						}
						$(t.p.colModel).each(function(i){
							nm = jsonreader===true ? this.jsonmap || this.name :this.name;
							if( srow[nm] !== undefined) {
								vl = t.formatter( sid, srow[nm], i, srow, 'edit');
								title = this.title ? {"title":$.jgrid.stripHtml(vl)} : {};
								if(t.p.treeGrid===true && nm == t.p.ExpandColumn) {
									$("td:eq("+i+") > span:first",ind).html(vl).attr(title);
								} else {
									$("td:eq("+i+")",ind).html(vl).attr(title);
								}
								success = true;
							}
						});
					}
				});
			}
		});
		return success;
	},
	// Form search - sorry for this method. Instead use ne jqFilter method.
	filterGrid : function(gridid,p){
		p = $.extend({
			gridModel : false,
			gridNames : false,
			gridToolbar : false,
			filterModel: [], // label/name/stype/defval/surl/sopt
			formtype : "horizontal", // horizontal/vertical
			autosearch: true, // if set to false a serch button should be enabled.
			formclass: "filterform",
			tableclass: "filtertable",
			buttonclass: "filterbutton",
			searchButton: "Search",
			clearButton: "Clear",
			enableSearch : false,
			enableClear: false,
			beforeSearch: null,
			afterSearch: null,
			beforeClear: null,
			afterClear: null,
			url : '',
			marksearched: true
		},p  || {});
		return this.each(function(){
			var self = this;
			this.p = p;
			if(this.p.filterModel.length === 0 && this.p.gridModel===false) { alert("No filter is set"); return;}
			if( !gridid) {alert("No target grid is set!"); return;}
			this.p.gridid = gridid.indexOf("#") != -1 ? gridid : "#"+gridid;
			var gcolMod = $(this.p.gridid).jqGrid("getGridParam",'colModel');
			if(gcolMod) {
				if( this.p.gridModel === true) {
					var thegrid = $(this.p.gridid)[0];
					var sh;
					// we should use the options search, edittype, editoptions
					// additionally surl and defval can be added in grid colModel
					$.each(gcolMod, function (i,n) {
						var tmpFil = [];
						this.search = this.search === false ? false : true;
						if(this.editrules && this.editrules.searchhidden === true) {
							sh = true;
						} else {
							if(this.hidden === true ) {
								sh = false;
							} else {
								sh = true;
							}
						}
						if( this.search === true && sh === true) {
							if(self.p.gridNames===true) {
								tmpFil.label = thegrid.p.colNames[i];
							} else {
								tmpFil.label = '';
							}
							tmpFil.name = this.name;
							tmpFil.index = this.index || this.name;
							// we support only text and selects, so all other to text
							tmpFil.stype = this.edittype || 'text';
							if(tmpFil.stype != 'select' ) {
								tmpFil.stype = 'text';
							}
							tmpFil.defval = this.defval || '';
							tmpFil.surl = this.surl || '';
							tmpFil.sopt = this.editoptions || {};
							tmpFil.width = this.width;
							self.p.filterModel.push(tmpFil);
						}
					});
				} else {
					$.each(self.p.filterModel,function(i,n) {
						for(var j=0;j<gcolMod.length;j++) {
							if(this.name == gcolMod[j].name) {
								this.index = gcolMod[j].index || this.name;
								break;
							}
						}
						if(!this.index) {
							this.index = this.name;
						}
					});
				}
			} else {
				alert("Could not get grid colModel"); return;
			}
			var triggerSearch = function() {
				var sdata={}, j=0, v;
				var gr = $(self.p.gridid)[0], nm;
                gr.p.searchdata = {};
				if($.isFunction(self.p.beforeSearch)){self.p.beforeSearch();}
				$.each(self.p.filterModel,function(i,n){
                    nm = this.index;
					if(this.stype === 'select') {
						v = $("select[name="+nm+"]",self).val();
						if(v) {
							sdata[nm] = v;
							if(self.p.marksearched){
								$("#jqgh_"+this.name,gr.grid.hDiv).addClass("dirty-cell");
							}
							j++;
						} else {
							if(self.p.marksearched){
								$("#jqgh_"+this.name,gr.grid.hDiv).removeClass("dirty-cell");
							}
                               try {
                                   delete gr.p.postData[this.index];
                               } catch (e) {}
						}
					} else {
						v = $("input[name="+nm+"]",self).val();
						if(v) {
							sdata[nm] = v;
							if(self.p.marksearched){
								$("#jqgh_"+this.name,gr.grid.hDiv).addClass("dirty-cell");
							}
							j++;
						} else {
							if(self.p.marksearched){
								$("#jqgh_"+this.name,gr.grid.hDiv).removeClass("dirty-cell");
							}
								try {
									delete gr.p.postData[this.index];
                            } catch(x) {}
						}
					}
				});
				var sd =  j>0 ? true : false;
                $.extend(gr.p.postData,sdata);
				var saveurl;
				if(self.p.url) {
					saveurl = $(gr).jqGrid("getGridParam",'url');
					$(gr).jqGrid("setGridParam",{url:self.p.url});
				}
			    $(gr).jqGrid("setGridParam",{search:sd}).trigger("reloadGrid",[{page:1}]);
				if(saveurl) {$(gr).jqGrid("setGridParam",{url:saveurl});}
				if($.isFunction(self.p.afterSearch)){self.p.afterSearch();}
			};
			var clearSearch = function(){
				var sdata={}, v, j=0;
				var gr = $(self.p.gridid)[0], nm;
				if($.isFunction(self.p.beforeClear)){self.p.beforeClear();}
				$.each(self.p.filterModel,function(i,n){
                    nm = this.index;
					v = (this.defval) ? this.defval : "";
					if(!this.stype){this.stype='text';}
					switch (this.stype) {
						case 'select' :
							var v1;
							$("select[name="+nm+"] option",self).each(function (i){
                                if(i===0) { this.selected = true; }
								if ($(this).text() == v) {
									this.selected = true;
									v1 = $(this).val();
									return false;
								}
							});
							if(v1) {
								// post the key and not the text
								sdata[nm] = v1;
								if(self.p.marksearched){
									$("#jqgh_"+this.name,gr.grid.hDiv).addClass("dirty-cell");
								}
								j++;
							} else {
								if(self.p.marksearched){
									$("#jqgh_"+this.name,gr.grid.hDiv).removeClass("dirty-cell");
								}
                                try {
                                    delete gr.p.postData[this.index];
                                } catch (e) {}
							}
							break;
						case 'text':
							$("input[name="+nm+"]",self).val(v);
							if(v) {
								sdata[nm] = v;
								if(self.p.marksearched){
									$("#jqgh_"+this.name,gr.grid.hDiv).addClass("dirty-cell");
								}
								j++;
							} else {
								if(self.p.marksearched){
									$("#jqgh_"+this.name,gr.grid.hDiv).removeClass("dirty-cell");
								}
                                try {
                                    delete gr.p.postData[this.index];
                                } catch (k) {}
							}
                            break;
					}
				});
				var sd =  j>0 ? true : false;
                $.extend(gr.p.postData,sdata);
				var saveurl;
				if(self.p.url) {
					saveurl = $(gr).jqGrid("getGridParam",'url');
					$(gr).jqGrid("setGridParam",{url:self.p.url});
				}
				$(gr).jqGrid("setGridParam",{search:sd}).trigger("reloadGrid",[{page:1}]);
				if(saveurl) {$(gr).jqGrid("setGridParam",{url:saveurl});}
				if($.isFunction(self.p.afterClear)){self.p.afterClear();}
			};
			var tbl;
			var formFill = function(){
				var tr = document.createElement("tr");
				var tr1, sb, cb,tl,td;
				if(self.p.formtype=='horizontal'){
					$(tbl).append(tr);
				}
				$.each(self.p.filterModel,function(i,n){
					tl = document.createElement("td");
					$(tl).append("<label for='"+this.name+"'>"+this.label+"</label>");
					td = document.createElement("td");
					var $t=this;
					if(!this.stype) { this.stype='text';}
					switch (this.stype)
					{
					case "select":
						if(this.surl) {
							// data returned should have already constructed html select
							$(td).load(this.surl,function(){
								if($t.defval) { $("select",this).val($t.defval); }
								$("select",this).attr({name:$t.index || $t.name, id: "sg_"+$t.name});
								if($t.sopt) { $("select",this).attr($t.sopt); }
								if(self.p.gridToolbar===true && $t.width) {
									$("select",this).width($t.width);
								}
								if(self.p.autosearch===true){
									$("select",this).change(function(e){
										triggerSearch();
										return false;
									});
								}
							});
						} else {
							// sopt to construct the values
							if($t.sopt.value) {
								var oSv = $t.sopt.value;
								var elem = document.createElement("select");
								$(elem).attr({name:$t.index || $t.name, id: "sg_"+$t.name}).attr($t.sopt);
								var so, sv, ov;
								if(typeof oSv === "string") {
									so = oSv.split(";");
									for(var k=0; k<so.length;k++){
										sv = so[k].split(":");
										ov = document.createElement("option");
										ov.value = sv[0]; ov.innerHTML = sv[1];
										if (sv[1]==$t.defval) { ov.selected ="selected"; }
										elem.appendChild(ov);
									}
								} else if(typeof oSv === "object" ) {
									for ( var key in oSv) {
										if(oSv.hasOwnProperty(key)) {
											i++;
											ov = document.createElement("option");
											ov.value = key; ov.innerHTML = oSv[key];
											if (oSv[key]==$t.defval) { ov.selected ="selected"; }
											elem.appendChild(ov);
										}
									}
								}
								if(self.p.gridToolbar===true && $t.width) {
									$(elem).width($t.width);
								}
								$(td).append(elem);
								if(self.p.autosearch===true){
									$(elem).change(function(e){
										triggerSearch();
										return false;
									});
								}
							}
						}
						break;
					case 'text':
						var df = this.defval ? this.defval: "";
						$(td).append("<input type='text' name='"+(this.index || this.name)+"' id='sg_"+this.name+"' value='"+df+"'/>");
						if($t.sopt) { $("input",td).attr($t.sopt); }
						if(self.p.gridToolbar===true && $t.width) {
							if($.browser.msie) {
								$("input",td).width($t.width-4);
							} else {
								$("input",td).width($t.width-2);
							}
						}
						if(self.p.autosearch===true){
							$("input",td).keypress(function(e){
								var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
								if(key == 13){
									triggerSearch();
									return false;
								}
								return this;
							});
						}
						break;
					}
					if(self.p.formtype=='horizontal'){
						if(self.p.gridToolbar===true && self.p.gridNames===false) {
							$(tr).append(td);
						} else {
							$(tr).append(tl).append(td);
						}
						$(tr).append(td);
					} else {
						tr1 = document.createElement("tr");
						$(tr1).append(tl).append(td);
						$(tbl).append(tr1);
					}
				});
				td = document.createElement("td");
				if(self.p.enableSearch === true){
					sb = "<input type='button' id='sButton' class='"+self.p.buttonclass+"' value='"+self.p.searchButton+"'/>";
					$(td).append(sb);
					$("input#sButton",td).click(function(){
						triggerSearch();
						return false;
					});
				}
				if(self.p.enableClear === true) {
					cb = "<input type='button' id='cButton' class='"+self.p.buttonclass+"' value='"+self.p.clearButton+"'/>";
					$(td).append(cb);
					$("input#cButton",td).click(function(){
						clearSearch();
						return false;
					});
				}
				if(self.p.enableClear === true || self.p.enableSearch === true) {
					if(self.p.formtype=='horizontal') {
						$(tr).append(td);
					} else {
						tr1 = document.createElement("tr");
						$(tr1).append("<td>&#160;</td>").append(td);
						$(tbl).append(tr1);
					}
				}
			};
			var frm = $("<form name='SearchForm' style=display:inline;' class='"+this.p.formclass+"'></form>");
			tbl =$("<table class='"+this.p.tableclass+"' cellspacing='0' cellpading='0' border='0'><tbody></tbody></table>");
			$(frm).append(tbl);
			formFill();
			$(this).append(frm);
			this.triggerSearch = triggerSearch;
			this.clearSearch = clearSearch;
		});
	}

});
})(jQuery);
/**
 * bootbox.js v2.3.2
 *
 * The MIT License
 *
 * Copyright (C) 2011-2012 by Nick Payne <nick@kurai.co.uk>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE
 */
var bootbox=window.bootbox||function(k){function j(b,a){null==a&&(a=l);return"string"==typeof h[a][b]?h[a][b]:a!=m?j(b,m):b}var l="en",m="en",p=!0,g={},f={},h={en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},ru:{OK:"OK",CANCEL:"\u041e\u0442\u043c\u0435\u043d\u0430",
CONFIRM:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"}};f.setLocale=function(b){for(var a in h)if(a==b){l=b;return}throw Error("Invalid locale: "+b);};f.addLocale=function(b,a){"undefined"==typeof h[b]&&(h[b]={});for(var c in a)h[b][c]=a[c]};f.setIcons=function(b){g=b;if("object"!==typeof g||null==g)g={}};f.alert=function(){var b="",a=j("OK"),c=null;switch(arguments.length){case 1:b=arguments[0];break;case 2:b=arguments[0];"function"==typeof arguments[1]?
c=arguments[1]:a=arguments[1];break;case 3:b=arguments[0];a=arguments[1];c=arguments[2];break;default:throw Error("Incorrect number of arguments: expected 1-3");}return f.dialog(b,{label:a,icon:g.OK,callback:c},{onEscape:c})};f.confirm=function(){var b="",a=j("CANCEL"),c=j("CONFIRM"),e=null;switch(arguments.length){case 1:b=arguments[0];break;case 2:b=arguments[0];"function"==typeof arguments[1]?e=arguments[1]:a=arguments[1];break;case 3:b=arguments[0];a=arguments[1];"function"==typeof arguments[2]?
e=arguments[2]:c=arguments[2];break;case 4:b=arguments[0];a=arguments[1];c=arguments[2];e=arguments[3];break;default:throw Error("Incorrect number of arguments: expected 1-4");}return f.dialog(b,[{label:a,icon:g.CANCEL,callback:function(){"function"==typeof e&&e(!1)}},{label:c,icon:g.CONFIRM,callback:function(){"function"==typeof e&&e(!0)}}])};f.prompt=function(){var b="",a=j("CANCEL"),c=j("CONFIRM"),e=null;switch(arguments.length){case 1:b=arguments[0];break;case 2:b=arguments[0];"function"==typeof arguments[1]?
e=arguments[1]:a=arguments[1];break;case 3:b=arguments[0];a=arguments[1];"function"==typeof arguments[2]?e=arguments[2]:c=arguments[2];break;case 4:b=arguments[0];a=arguments[1];c=arguments[2];e=arguments[3];break;default:throw Error("Incorrect number of arguments: expected 1-4");}var n=k("<form></form>");n.append("<input autocomplete=off type=text />");var h=f.dialog(n,[{label:a,icon:g.CANCEL,callback:function(){"function"==typeof e&&e(null)}},{label:c,icon:g.CONFIRM,callback:function(){"function"==
typeof e&&e(n.find("input[type=text]").val())}}],{header:b});h.on("shown",function(){n.find("input[type=text]").focus();n.on("submit",function(a){a.preventDefault();h.find(".btn-primary").click()})});return h};f.modal=function(){var b,a,c,e={onEscape:null,keyboard:!0,backdrop:!0};switch(arguments.length){case 1:b=arguments[0];break;case 2:b=arguments[0];"object"==typeof arguments[1]?c=arguments[1]:a=arguments[1];break;case 3:b=arguments[0];a=arguments[1];c=arguments[2];break;default:throw Error("Incorrect number of arguments: expected 1-3");
}e.header=a;c="object"==typeof c?k.extend(e,c):e;return f.dialog(b,[],c)};f.dialog=function(b,a,c){var e=null,f="",h=[],c=c||{};null==a?a=[]:"undefined"==typeof a.length&&(a=[a]);for(var d=a.length;d--;){var g=null,j=null,l="",m=null;if("undefined"==typeof a[d].label&&"undefined"==typeof a[d]["class"]&&"undefined"==typeof a[d].callback){var g=0,q=null,o;for(o in a[d])if(q=o,1<++g)break;1==g&&"function"==typeof a[d][o]&&(a[d].label=q,a[d].callback=a[d][o])}"function"==typeof a[d].callback&&(m=a[d].callback);
a[d]["class"]?j=a[d]["class"]:d==a.length-1&&2>=a.length&&(j="btn-primary");g=a[d].label?a[d].label:"Option "+(d+1);a[d].icon&&(l="<i class='"+a[d].icon+"'></i> ");f+="<a data-handler='"+d+"' class='btn "+j+"' href='javascript:;'>"+l+""+g+"</a>";h[d]=m}a=["<div class='bootbox modal'>"];if(c.header){d="";if("undefined"==typeof c.headerCloseButton||c.headerCloseButton)d="<a href='javascript:;' class='close'>&times;</a>";a.push("<div class='modal-header'>"+d+"<h3>"+c.header+"</h3></div>")}a.push("<div class='modal-body'></div>");
f&&a.push("<div class='modal-footer'>"+f+"</div>");a.push("</div>");var i=k(a.join("\n"));("undefined"===typeof c.animate?p:c.animate)&&i.addClass("fade");k(".modal-body",i).html(b);i.bind("hidden",function(){i.remove()});i.bind("hide",function(){if("escape"==e&&"function"==typeof c.onEscape)c.onEscape()});k(document).bind("keyup.modal",function(a){27==a.which&&(e="escape")});i.bind("shown",function(){k("a.btn-primary:last",i).focus()});i.on("click",".modal-footer a, a.close",function(a){var b=k(this).data("handler"),
b=h[b],c=null;"function"==typeof b&&(c=b());!1!==c&&(a.preventDefault(),e="button",i.modal("hide"))});null==c.keyboard&&(c.keyboard="function"==typeof c.onEscape);k("body").append(i);i.modal({backdrop:c.backdrop||!0,keyboard:c.keyboard});return i};f.hideAll=function(){k(".bootbox").modal("hide")};f.animate=function(b){p=b};return f}(window.jQuery);
/*
 * JavaScript functions for LimeSurvey administrator
 *
 * This file is part of LimeSurvey
 * Copyright (C) 2007-2013 The LimeSurvey Project Team / Carsten Schmitz
 * All rights reserved.
 * License: GNU/GPL License v2 or later, see LICENSE.php
 * LimeSurvey is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 * See COPYRIGHT.php for copyright notices and details.
 */

// @license magnet:?xt=urn:btih:cf05388f2679ee054f2beb29a391d25f4e673ac3&dn=gpl-2.0.txt  GNU/GPL License v2 or later

/* Set a variable to test if browser have HTML5 form ability
 * Need to be replaced by some polyfills see #8009
 */
hasFormValidation= typeof document.createElement( 'input' ).checkValidity == 'function';
linksInDialog();
$(document).ready(function(){
    initializeAjaxProgress();
    tableCellAdapters();
    if(typeof(userdateformat) !== 'undefined')
        {
        $(".popupdate").each(function(i,e) {
            format=$('#dateformat'+e.name).val();
            if(!format) format = userdateformat;
            $(e).datepicker({ dateFormat: format,
                showOn: 'button',
                changeYear: true,
                changeMonth: true,
                duration: 'fast'
            }, $.datepicker.regional[LS.data.language]);
        });
        $(".popupdatetime").datepicker({ dateFormat: userdateformat+' 00:00',
            showOn: 'button',
            changeYear: true,
            changeMonth: true,
            duration: 'fast'
        }, $.datepicker.regional[LS.data.language]);
    }
    $(".sf-menu").superfish({speed: 'fast'});
    doToolTip();
    $('button,input[type=submit],input[type=button],input[type=reset],.button').button();
    $('button,input[type=submit],input[type=button],input[type=reset],.button').addClass("limebutton");

    $(".progressbar").each(function(){
        var pValue = parseInt($(this).attr('name'));

        $(this).progressbar({
            value: pValue
        });

        if (pValue > 85){
            $("div",$(this)).css({ 'background': 'Red' });
        }

        $("div",this).html(pValue + "%");
    });


    if ($('#showadvancedattributes').length>0) updatequestionattributes();

    $('#showadvancedattributes').click(function(){
        $('#showadvancedattributes').hide();
        $('#hideadvancedattributes').show();
        $('#advancedquestionsettingswrapper').animate({
            "height": "toggle", "opacity": "toggle"
        });

    })
    $('#hideadvancedattributes').click(function(){
        $('#showadvancedattributes').show();
        $('#hideadvancedattributes').hide();
        $('#advancedquestionsettingswrapper').animate({
            "height": "toggle", "opacity": "toggle"
        });

    })
    $('#question_type').change(updatequestionattributes);

    $('#MinimizeGroupWindow').click(function(){
        $('#groupdetails').hide();
    });
    $('#MaximizeGroupWindow').click(function(){
        $('#groupdetails').show();
    });
    $('#tabs').tabs({
        activate: function(event, ui) {
            if(history.pushState) {
                history.pushState(null, null, '#'+ui.newPanel.attr('id'));
            }
            else {
                location.hash = ui.newPanel.attr('id');
            }
        }
    });
    $('.tab-nav').tabs();
    $(".flashmessage").each(function() {
        $(this).notify().notify('create','themeroller',{},{custom:true,
        speed: 500,
        expires: 5000
        });
    });
    if ($("#question_type").not('.none').length > 0 && $("#question_type").attr('type')!='hidden'){

        /*
        $("#question_type").msDropDown({
            'on' : {
                'create' :qTypeDropdownInit
            }
        });
        */
       qTypeDropdownInit();
        $("#question_type").change(function(event){
            OtherSelection(this.value);
        });
        $("#question_type").change();
    }
    else
    {
        $("#question_type.none").change(function(event){
            OtherSelection(this.value);
        });
        $("#question_type.none").change();
    }
});

function qTypeDropdownInit()
{
    $(document).ready(function () {
        $("#question_type option").each(function(index,element){
            $(element).qtip({
                style: {
                    classes: 'qtip-questiontype'
                },
                content: getToolTip($(element).text()),
                position: {
                    my : 'top left',
                    at: 'top right',
                    target: $('label[for=question_type]'),
                    viewport: $(window),
                    adjust: {
                        x: 20
                    }

                }
            });

        });
    });
    $(document).ready(function() {
        $('body').on('mouseenter mouseleave', 'li.questionType', function(e) {
            if (e.type == 'mouseenter')
            {
				// Hide all others if we show a new one.
                $('#question_type option').qtip('hide');
                $($(e.currentTarget).data().select2Data.element).qtip('option', 'position.target', $(e.currentTarget)).qtip('show');
            }
            else
            {
                $($(e.currentTarget).data().select2Data.element).qtip('hide');
            }
            
            
        });
        $('#question_type').on('close', function(e) {
            $('#question_type option').qtip('hide');
        });
    });
}


var aToolTipData = {

};

var qDescToCode;
var qCodeToInfo;

function getToolTip(type){
    var code = qDescToCode[''+type];
    var multiple = 0;
    if (code=='S') multiple = 2;

    if (code == ":") code = "COLON";
    else if(code == "|") code = "PIPE";
    else if(code == "*") code = "EQUATION";

    if (multiple > 0){
        returnval = '';
        for(i=1;i<=multiple;i++){
            returnval = returnval + "<img src='" + imgurl + "/screenshots/"+code+i+".png' /><br /><br />";
        }
        return returnval;
    }
    return "<img src='" + imgurl + "/screenshots/"+code+".png' />";
}

//We have form validation and other stuff..

function updatequestionattributes()
{
    $('.loader').show();
    $('#advancedquestionsettings').html('');
    var selected_value = qDescToCode[''+$("#question_type_child .selected").text()];
    if (selected_value==undefined) selected_value = $("#question_type").val();
    $('#advancedquestionsettings').load(attr_url,{qid:$('#qid').val(),
        question_type:selected_value,
        sid:$('#sid').val()
    }, function(){
        // Loads the tooltips for the toolbars

        // Loads the tooltips for the toolbars
        $('.loader').hide();
        $('label[title]').qtip({
            style: {name: 'cream',
                tip: true,
                color:'#111111',
                border: {
                    width: 1,
                    radius: 5,
                    color: '#EADF95'}
            },
            position: {adjust: {
                    screen: true, scroll:true},
                corner: {
                    target: 'bottomRight'}
            },
            show: {effect: {length:50}}
        });}
    );
}

function validatefilename (form, strmessage )
{
    if (form.the_file.value == "") {
        alert( strmessage );
        form.the_file.focus();
        return false ;
    }
    return true ;
}

function doToolTip()
{
    // ToolTip on menu
    $(".sf-menu li").each(function() {
        tipcontent=$(this).children("a").children("img").attr('alt');
        if(tipcontent && tipcontent!=""){
            $(this).qtip({
                content: {
                    text: tipcontent
                },
                style: {
                    classes: "qtip-light qtip-rounded"
                },
                position: {
                    my: 'bottom left',
                    at: "top right"
                }
            });
            $(this).children("a").children("img").removeAttr('title');
        }
    });
    $(".sf-menu a > img[alt]").data("hasqtip", true ).parent("a").data("hasqtip", true );
    $("a").each(function() {
        if(!$(this).data("hasqtip"))// data-hasqtip not in DOM, then need to be tested directly (:not([data-hasqtip]) don't work)
        {
            tipcontent=$(this).children("img").attr('alt');
            if(!tipcontent){tipcontent=htmlEncode($(this).attr('title'));}
            if(tipcontent && tipcontent!=""){
                $(this).qtip({
                    content: {
                        text: tipcontent
                    },
                    style: {
                        classes: "qtip-light qtip-rounded"
                    },
                    position: {
                        viewport: $(window),
                        at: 'bottom right'
                    }
                });
            }
            $(this).removeAttr('title');
        }
    });
    $("a > img[alt]").data("hasqtip", true ).removeAttr('title');
    
    // Call the popuptip hover rel attribute
    $('.popuptip').each(function(){
        if($(this).attr('rel')){
            htmlcontent=$(this).html();
            tiptarget=$("#"+$(this).attr('rel'));
            //if($("#"+$(this).attr('rel')).find('img').length==1){ tiptarget=$("#"+$(this).attr('rel')).find('img');}
            tiptarget.qtip({
                content: {
                    text: htmlcontent
                },
                style: {
                    classes: "qtip-light qtip-rounded"
                },
                position: {
                    at: "bottom center",
                    my: "top center"
                },
                hide: {
                    fixed: true,
                    delay: 500,
                    event: "mouseout"
                }
            });
            $("#"+$(this).attr('rel')).find("img").data("hasqtip", true ).removeAttr('title');
        }
    });
    // On label
    $('label[title]').each(function() {
        if($(this).attr('title') != '')
        {
            $(this).qtip({
                style: {
                    classes: "qtip-cream qtip-rounded"
                },
                position: {
                    viewport: $(window),
                    at: "bottom right"
                }
            });
        }
    });
    // Loads the tooltips on image
    $('img[title]').each(function() {
        if($(this).attr('title') != '')
        {
            $(this).qtip({
                style: {
                    classes: "qtip-light qtip-rounded"
                },
                position: {
                    viewport: $(window),
                    at: "bottom right"
                }
            });
        }
    });
    $('img[alt]:not([title]),input[src]').each(function() {
        if($(this).attr('alt') != '' && !$(this).data("hasqtip")){
            $(this).qtip({
                content: {
                    attr: "alt"
                },
                style: {
                    classes: "qtip-light qtip-rounded"
                },
                position: {
                    viewport: $(window),
                    at: "bottom right"
                },
                hide: {
                    event: "mouseout"
                }
            });
        }
    });

    //Still used ?
    $('.tipme').each(function() {
        if($(this).attr('alt') != '')
            {
            $(this).qtip(
            {
                content: {
                    attr: 'alt'
                },
                style: {
                    classes: "qtip-cream qtip-rounded"
                },
                position: {
                        viewport: $(window),
                        at: 'top right',
                        tooltip: 'bottom left'
                    }
            });
        }
    });
}
// A function to encode any HTML for qtip
function htmlEncode(html){
  return $('<div/>').text(html).html();
}
// If the length of the element's string is 0 then display helper message
function isEmpty(elem, helperMsg)
{
    if($.trim(elem.value).length == 0){
        alert(helperMsg);
        elem.focus(); // set the focus to this input
        return false;
    }
    return true;
}


function arrHasDupes( A ) {                          // finds any duplicate array elements using the fewest possible comparison
    var i, j, n;
    n=A.length;
    // to ensure the fewest possible comparisons
    for (i=0; i<n; i++) {                        // outer loop uses each item i at 0 through n
        for (j=i+1; j<n; j++) {              // inner loop only compares items j at i+1 to n
            if (A[i]==A[j]) return true;
    }}
    return false;
}


// (c) 2006 Simon Wunderlin, License: GPL, hacks want to be free ;)
// This fix forces Firefox to fire the onchange event if someone changes select box with cursor keys
function ev_gecko_select_keyup_ev(Ev) {
    // prevent tab, alt, ctrl keys from fireing the event
    if (Ev.keyCode && (Ev.keyCode == 1 || Ev.keyCode == 9 ||
    Ev.keyCode == 16 || Ev.altKey || Ev.ctrlKey))
        return true;
    Ev.target.onchange();
    return true;
}

function init_gecko_select_hack() {
    return true;
    var selects = document.getElementsByTagName("SELECT");
    for(i=0; i<selects.length; i++)
        selects.item(i).addEventListener("keyup", ev_gecko_select_keyup_ev, false);
    return true;
}


function getkey(e)
{
    if (window.event) return window.event.keyCode;
    else
        if (e) return e.which;
    else return null;
}

function goodchars(e, goods)
{
    var key, keychar;
    key = getkey(e);
    if (key == null) return true;

    // get character
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    goods = goods.toLowerCase();

    // check goodkeys
    if (goods.indexOf(keychar) != -1)
        return true;

    // control keys
    if ( key==null || key==0 || key==8 || key==9  || key==27 )
        return true;

    // else return false
    return false;
}


function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g,"");
}

function AddItem(objListBox, strText, strId)
{
    var newOpt;
    newOpt = document.createElement("OPTION");
    newOpt = new Option(strText,strId);
    newOpt.id = strId;
    objListBox.options[objListBox.length]=newOpt;
}

function RemoveItem(objListBox, strId)
{
    if (strId > -1)
        objListBox.options[strId]=null;
}

function GetItemIndex(objListBox, strId)
{
    for (var i = 0; i < objListBox.children.length; i++)
        {
        var strCurrentValueId = objListBox.children[i].id;
        if (strId == strCurrentValueId)
            {
            return i;
        }
    }
    return -1;
}

function compareText (option1, option2) {
    return option1.text < option2.text ? -1 :
    option1.text > option2.text ? 1 : 0;
}

function compareValue (option1, option2) {
    return option1.value < option2.value ? -1 :
    option1.value > option2.value ? 1 : 0;
}

function compareTextAsFloat (option1, option2) {
    var value1 = parseFloat(option1.text);
    var value2 = parseFloat(option2.text);
    return value1 < value2 ? -1 :
    value1 > value2 ? 1 : 0;
}

function compareValueAsFloat (option1, option2) {
    var value1 = parseFloat(option1.value);
    var value2 = parseFloat(option2.value);
    return value1 < value2 ? -1 :
    value1 > value2 ? 1 : 0;
}

function sortSelect (select, compareFunction) {
    if (!compareFunction)
        compareFunction = compareText;
    var options = new Array (select.options.length);
    for (var i = 0; i < options.length; i++)
        options[i] =
    new Option (
    select.options[i].text,
    select.options[i].value,
    select.options[i].defaultSelected,
    select.options[i].selected
    );
    options.sort(compareFunction);
    select.options.length = 0;
    for (var i = 0; i < options.length; i++)
        select.options[i] = options[i];
}

function checklangs(mylangs)
{
    selObject=document.getElementById("additional_languages");
    var found;

    for (x = 0; x < mylangs.length; x++)
        {
        found = 0;
        for (i=0;i<selObject.options.length;i++)
            {
            if(selObject.options[i].value == mylangs[x])
                {
                found = 1;
                break;
            }
        }
        if (found == 0) {return false;}
    }
    return true;
}

function isset( variable )
{
    return( typeof( variable ) != 'undefined' );
}

String.prototype.splitCSV = function(sep) {
    for (var foo = this.split(sep = sep || ","), x = foo.length - 1, tl; x >= 0; x--) {
        if (foo[x].replace(/"\s+$/, '"').charAt(foo[x].length - 1) == '"') {
            if ((tl = foo[x].replace(/^\s+"/, '"')).length > 1 && tl.charAt(0) == '"') {
                foo[x] = foo[x].replace(/^\s*"|"\s*$/g, '').replace(/""/g, '"');
            } else if (x) {
                foo.splice(x - 1, 2, [foo[x - 1], foo[x]].join(sep));
            } else foo = foo.shift().split(sep).concat(foo);
        } else foo[x].replace(/""/g, '"');
    }return foo;
};

// This is a helper function to extract the question ID from a DOM ID element
function removechars(strtoconvert){
    return strtoconvert.replace(/[-a-zA-Z_]/g,"");
}


function htmlspecialchars (string, quote_style, charset, double_encode) {
    // Convert special characters to HTML entities
    //
    // version: 1109.2015
    // discuss at: http://phpjs.org/functions/htmlspecialchars    // +   original by: Mirek Slugen
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Nathan
    // +   bugfixed by: Arno
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Ratheous
    // +      input by: Mailfaker (http://www.weedem.fr/)
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +      input by: felix    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: charset argument not supported
    // *     example 1: htmlspecialchars("<a href='test'>Test</a>", 'ENT_QUOTES');
    // *     returns 1: '&lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;'
    // *     example 2: htmlspecialchars("ab\"c'd", ['ENT_NOQUOTES', 'ENT_QUOTES']);    // *     returns 2: 'ab"c&#039;d'
    // *     example 3: htmlspecialchars("my "&entity;" is still here", null, null, false);
    // *     returns 3: 'my &quot;&entity;&quot; is still here'
    var optTemp = 0,
    i = 0,        noquotes = false;
    if (typeof quote_style === 'undefined' || quote_style === null) {
        quote_style = 2;
    }
    // Not form phpjs: added because in some condition : subquestion can send null for string
    // subquestion js use inline javascript function
    if (typeof string === 'undefined' || string === null) {
        string="";
    }
    string = string.toString();    if (double_encode !== false) { // Put this first to avoid double-encoding
        string = string.replace(/&/g, '&amp;');
    }
    string = string.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    var OPTS = {
        'ENT_NOQUOTES': 0,
        'ENT_HTML_QUOTE_SINGLE': 1,
        'ENT_HTML_QUOTE_DOUBLE': 2,
        'ENT_COMPAT': 2,        'ENT_QUOTES': 3,
        'ENT_IGNORE': 4
    };
    if (quote_style === 0) {
        noquotes = true;    }
    if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
        quote_style = [].concat(quote_style);
        for (i = 0; i < quote_style.length; i++) {
            // Resolve string input to bitwise e.g. 'ENT_IGNORE' becomes 4
            if (OPTS[quote_style[i]] === 0) {
                noquotes = true;
            }
            else if (OPTS[quote_style[i]]) {
                optTemp = optTemp | OPTS[quote_style[i]];            }
        }
        quote_style = optTemp;
    }
    if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {        string = string.replace(/'/g, '&#039;');
    }
    if (!noquotes) {
        string = string.replace(/"/g, '&quot;');
    }
    return string;
}

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
    return this;
}

// Fix broken substr function with negative start value (in older IE)
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
if ('ab'.substr(-1) != 'b') {
	String.prototype.substr = function(substr) {
		return function(start, length) {
			if (start < 0) start = this.length + start;
			return substr.call(this, start, length);
		}
	}(String.prototype.substr);
}

/**
* Yii CSRF protection divs breaks this script so this function moves the 
* hidden CSRF field out of the div and remove it if needed
* 140207 : Why this function is needed ? Where is the script broken ?
*/
function removeCSRFDivs()
{
    $('input[name=YII_CSRF_TOKEN]').each(function(){
       var parent = $(this).parent();
       var grandfather = $(parent).parent();
       $(grandfather).append(this);
       $(parent).remove();
    });
}

function linksInDialog()
{
    $(function () {
        var iframe = $('<iframe id="dialog" allowfullscreen></iframe>');
        var dialog = $("<div></div>").append(iframe).appendTo("body").dialog({
            autoOpen: false,
            modal: false,
            resizable: true,
            width: "60%",
            height: $(window).height()*0.6,
            close: function () {
                iframe.attr("src", "");
            }
        });
        $(document).on('click','a[target=dialog]',function(event){
            event.preventDefault();
            var src = $(this).attr("href");
            var title = $(this).attr("title");
            if(!title && $(this).children("img[alt]"))
                title = $(this).children("img[alt]").attr("alt");
            iframe.attr({
                src: src,
            });
            dialog.dialog("option", "title", title).dialog("open");
        });
    });
}
function initializeAjaxProgress()
{
    $('#ajaxprogress').dialog({
            'modal' : true,
            'closeOnEscape' : false,
            'title' : $('#ajaxprogress').attr('title'),
            'autoOpen' : false,
            'minHeight': 0,
            'resizable': false
        });
    $('#ajaxprogress').bind('ajaxStart', function()
    {
        $(this).dialog('open');
    });
    $('#ajaxprogress').bind('ajaxStop', function()
    {
        
        $(this).dialog('close');
    });
}

/**
 * Adapt cell to have a click on cell do a click on input:radio or input:checkbox (if unique)
 * Using delegate the can be outside document.ready
 */
function tableCellAdapters()
{
    $('table.activecell').delegate('tbody td input:checkbox,tbody td input:radio,tbody td label,tbody th input:checkbox,tbody th input:radio,tbody th label',"click", function(e) {
        e.stopPropagation();
    });
    $('table.activecell').delegate('tbody td,tbody th',"click", function() {
        if($(this).find("input:radio,input:checkbox").length==1)
        {
          $(this).find("input:radio").click();
          $(this).find("input:radio").triggerHandler("click");
          $(this).find("input:checkbox").click();
          $(this).find("input:checkbox").triggerHandler("click");
        }
    });
}

/**
 * sendPost : create a form, fill with param and submit
 *
 * @param {string} action
 * @param {} checkcode : deprecated
 * @param {array} arrayparam
 * @param {array} arrayval
 *
 */
function sendPost(myaction,checkcode,arrayparam,arrayval)
{
    var $form = $("<form method='POST'>").attr("action", myaction);
    for (var i = 0; i < arrayparam.length; i++)
        $("<input type='hidden'>").attr("name", arrayparam[i]).attr("value", arrayval[i]).appendTo($form);
    $("<input type='hidden'>").attr("name", 'YII_CSRF_TOKEN').attr("value", LS.data.csrfToken).appendTo($form);
    $form.appendTo("body");
    $form.submit();
}
function addHiddenElement(theform,thename,thevalue)
{
    var myel = document.createElement('input');
    myel.type = 'hidden';
    myel.name = thename;
    theform.appendChild(myel);
    myel.value = thevalue;
    return myel;
}
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

// @license-end
/*
* Scroll the pager when scrolling horizontally
*/
$(window).scroll(function(){
    $('.ui-jqgrid-pager').css({
        'left': $(this).scrollLeft()
    });
});

var conditionid=1;
function checkbounces() {
    $("#dialog-modal").dialog('open');
    $('#dialog-modal').html('<p><img style="margin-top:42px" src="'+imageurl+'ajax-loader.gif" /></p>');
    $('#dialog-modal').load(sBounceProcessingURL);
}

function addcondition()
{
    // Seems unused
    conditionid++;
    html = "<tr name='joincondition_"+conditionid+"' id='joincondition_"+conditionid+"'><td><select name='join_"+conditionid+"' id='join_"+conditionid+"'>\n\
    <option value='and'>"+andTxt+"</option><option value='or'>"+orTxt+"</option></td></tr>";
    html2 = "<tr><td><select name='field_"+conditionid+"' \n\ id='field_"+conditionid+"'>";
    for(col in colInformation){
        if(colInformation[col]['search'])
            html2 += "<option value='"+col+"'>"+colInformation[col]['description']+"</option>";
    }
    html2 += "</select></td><td>\n\
    <select name='condition_"+conditionid+"' id='condition_"+conditionid+"'><option value='equal'>"+searchtypes[0]+"</option><option value='contains'>"+searchtypes[1]+"</option>\n\
    <option value='notequal'>"+searchtypes[2]+"</option><option value='notcontains'>"+searchtypes[3]+"</option><option value='greaterthan'>"+searchtypes[4]+"</option>\n\
    <option value='lessthan'>"+searchtypes[5]+"</option></select></td>\n\<td><input type='text' id='conditiontext_"+conditionid+"' style='margin-left:10px;' /></td>\n\
    <td><img src="+minusbutton+" onClick= $(this).parent().parent().remove();$('#joincondition_"+conditionid+"').remove() id='removebutton'"+conditionid+">\n\
    <img src="+addbutton+" class='addcondition-button' style='margin-bottom:4px'></td></tr>";
    //$('#searchtable > tbody > tr').eq(id).after(html);
    $('#searchtable > tbody > tr').eq(conditionid).after(html);
    conditionid++;
    $('#searchtable > tbody > tr').eq(conditionid).after(html2);
    //idexternal++;
}


function addSelectedParticipantsToCPDB()
{
    var dialog_buttons={};
    var token = [];

    var token = jQuery('#displaytokens').jqGrid('getGridParam','selarrrow');

    if(token.length==0)
    {        /* build an array containing the various button functions */
        /* Needed because it's the only way to label a button with a variable */

        dialog_buttons[okBtn]=function(){
            $( this ).dialog( "close" );
        };
        /* End of building array for button functions */
        $('#norowselected').dialog({
            modal: true,
            buttons: dialog_buttons
        });
    }
    else
    {
        $("#addcpdb").load(postUrl, {
            participantid:token},function(){
                $(location).attr('href',attMapUrl+'/'+survey_id);
        });
    }

    /*$(":checked").each(function() {
    token.push($(this).attr('name'));
    });*/
}


$(document).ready(function() {

    // Code for AJAX download
    jQuery.download = function(url, data, method){
        //url and data options required
        if( url && data ){
            //data can be string of parameters or array/object
            data = typeof data == 'string' ? data : jQuery.param(data);
            //split params into form inputs
            var inputs = '';
            jQuery.each(data.split('&'), function(){
                var pair = this.split('=');
                inputs+='<input type="hidden" name="'+ pair[0] +'" value="'+ pair[1] +'" />';
            });
            //send request
            jQuery('<form action="'+ url +'" method="'+ (method||'post') +'">'+inputs+'</form>')
            .appendTo('body').submit().remove();
        };
    };
    // Code for AJAX download
    $(document).on("click",".addcondition-button",function(){
        conditionid++;
        html = "<tr name='joincondition_"+conditionid+"' id='joincondition_"+conditionid+"'><td><select name='join_"+conditionid+"' id='join_"+conditionid+"'><option value='and'>"+andTxt+"</option><option value='or'>"+orTxt+"</option></td><td></td></tr><tr><td><select name='field_"+conditionid+"' id='field_"+conditionid+"'>\n";
        for(col in colInformation){
            if(colInformation[col]['search'])
                html += "<option value='"+col+"'>"+colInformation[col]['description']+"</option>";
        }
        html += "</select>\n\</td>\n\<td>\n\
        <select name='condition_"+conditionid+"' id='condition_"+conditionid+"'>\n\
        <option value='equal'>"+searchtypes[0]+"</option>\n\
        <option value='contains'>"+searchtypes[1]+"</option>\n\
        <option value='notequal'>"+searchtypes[2]+"</option>\n\
        <option value='notcontains'>"+searchtypes[3]+"</option>\n\
        <option value='greaterthan'>"+searchtypes[4]+"</option>\n\
        <option value='lessthan'>"+searchtypes[5]+"</option>\n\
        </select></td>\n\<td><input type='text' id='conditiontext_"+conditionid+"' style='margin-left:10px;' /></td>\n\
        <td><img src="+minusbutton+" onClick= $(this).parent().parent().remove();$('#joincondition_"+conditionid+"').remove() id='removebutton'"+conditionid+">\n\
        <img src="+addbutton+" class='addcondition-button' style='margin-bottom:4px'></td></tr><tr></tr>";
        $('#searchtable tr:last').after(html);
    });
    if(typeof searchconditions === "undefined") {
        searchconditions = {};
    }
    var field;
    $('#searchbutton').click(function(){

    });

    oGrid=jQuery("#displaytokens").jqGrid({
        loadtext : sLoadText,
        recordtext: sRecordText,
        emptyrecords: sEmptyRecords,
        pgtext: sPageText,
        align:"center",
        headertitles: true,
        url: jsonUrl,
        editurl: editUrl,
        direction: $('html').attr('dir'),
        datatype: "json",
        mtype: "post",
        colNames : colNames,
        colModel: colModels,
        height: "100%",
        rowNum: 25,
        editable:true,
        scrollOffset:0,
        sortable : true,
        sortname: 'tid',
        sortorder: 'asc',
        viewrecords : true,
        rowList: [25,50,100,250,500,1000,2500,5000],
        multiselect: true,
        beforeRequest : function(){
            $(this).addClass('load');
        },
        loadonce : false,
        loadComplete: function()
        {
            $(this).removeClass('load');
            /* Sneaky way of adding custom icons to jqGrid pager buttons */
            $("#pager").find(".ui-add-to-cpdb-link").css({"background-image":"url("+imageurl+"addtocpdb_12.png)", "background-position":"0", "color":"black"});
            $("#pager").find(".ui-participant-link").css({"background-image":"url("+imageurl+"cpdb_12.png)", "background-position":"0", "color":"black"});
            $("#pager").find(".ui-bounceprocessing").css({"background-image":"url("+imageurl+"bounce_12.png)", "background-position":"0", "color":"black"});
            window.editing = false;
            jQuery(".token_edit").unbind('click').bind('click', function(e)
            {
                e.preventDefault();
                if (window.editing)
                    return true;
                var row = jQuery(this).closest('.jqgrow');
                var func = function()
                {
                    jQuery('#displaytokens').restoreRow(row.attr('id'));
                    row.find('.inputbuttons').show();
                    row.find('.drop_editing').remove();
                    row.find('.save').remove();
                    window.editing = false;
                }

                jQuery('#displaytokens').editRow(row.attr('id'), true, null, null, null, null, func);
                row.find('.inputbuttons').hide();
                window.editing = true;
                var validfrom = row.find('[aria-describedby="displaytokens_validfrom"]');
                validfrom.find('input').css('width', '119px').datetimepicker({
                    showOn: 'button',
                    dateFormat: userdateformat
                });
                var validuntil = row.find('[aria-describedby="displaytokens_validuntil"]');
                validuntil.find('input').css('width', '119px').datetimepicker({
                    showOn: 'button',
                    dateFormat: userdateformat
                });

                jQuery('<input type="image" class="drop_editing" title="'+cancelBtn+'" src="' + imageurl + 'token_delete.png" />')
                .appendTo(jQuery(this).parent().parent())
                .click(func);
                jQuery('<input type="image" class="save" title="'+saveBtn+'" src="' + imageurl + 'ok.png" width="16" />')
                .appendTo(jQuery(this).parent().parent())
                .click(function()
                {
                    jQuery('#displaytokens').saveRow(row.attr('id'), null, null, {}, function(){func();});
                });
            });
            updatePageAfterGrid();
        },
        ondblClickRow: function(id)
        {
            var row = jQuery('#' + id);
            row.find('.token_edit').click();
        },
        pager: "#pager",
        caption: sCaption
    });
    jQuery("#displaytokens").jqGrid('navGrid','#pager',{
        alertcap: sWarningMsg,
        alerttext: sSelectRowMsg,
        deltitle: sDelTitle,
        refreshtitle: sRefreshTitle,
        add:false,
        del:showDelButton,
        edit:false,
        refresh: true,
        search: false
    },
    {},
    {
        width : 400
    },
    {
        msg:delmsg,
        width : 700,
        afterShowForm: function($form) {
            var dialog = $form.closest('div.ui-jqdialog'),
            selRowId = jQuery("#displaytokens").jqGrid('getGridParam', 'selrow'),
            selRowCoordinates = $('#'+selRowId).offset();
            dialog.offset(selRowCoordinates);
        },
        beforeSubmit : function(postdata, formid) {
            $.post(delUrl, {
                tid : postdata
            },
            function(data) {}
            );
            success = "dummy";
            message = "dummy";
            return[success,message];
        },
        beforeShowForm:function(form) {
            $('#selectable').bind("mousedown", function (e) {
                e.metaKey = false;
            }).selectable({
                tolerance: 'fit'
            })
        }
    },{
        multipleSearch:true,
        multipleGroup:true
    });
    $("#displaytokens").navButtonAdd('#pager',{
        caption:"",
        title: sFind,
        buttonicon:'ui-icon-search',
        onClickButton:function(){
            var dialog_buttons={};
            dialog_buttons[searchBtn]=function(){
                searchconditions="";
                var dialog_buttons={};
                if($('#field_1').val() == '') {
                    dialog_buttons[okBtn]=function(){
                        $( this ).dialog( "close" );
                    };
                    /* End of building array for button functions */
                    $('#fieldnotselected').dialog({
                        modal: true,
                        title: error,
                        buttons: dialog_buttons
                    });
                }
                else if($('#condition_1').val()=="") {
                    dialog_buttons[okBtn]=function(){
                        $( this ).dialog( "close" );
                    };
                    /* End of building array for button functions */
                    $('#conditionnotselected').dialog({
                        modal: true,
                        title: error,
                        buttons: dialog_buttons
                    });
                } else {
                    searchconditions = searchconditions + $('#field_1').val()+"||"+$('#condition_1').val()+"||"+$('#conditiontext_1').val();
                    if(conditionid > 1) {
                        for( i=2 ; i<=conditionid; i++) {
                            if($('#field_'+i).val()) {
                                searchconditions = searchconditions + "||"+ $('#join_'+(i)).val()+"||"+$('#field_'+i).val()+"||"+$('#condition_'+i).val()+"||"+$('#conditiontext_'+i).val();
                            }
                        }
                        //jQuery("#displaytokens").jqGrid('setGridParam',{ url:jsonSearchUrl+'/'+searchconditions}).trigger("reloadGrid");
                    }
                    jQuery("#displaytokens").jqGrid('setGridParam',{
                        url:jsonSearchUrl+'/'+searchconditions,
                        datatype: "json",
                        gridComplete: function(){
                            if(jQuery("#displayparticipants").jqGrid('getGridParam', 'records') == 0) {
                                var dialog_buttons={};
                                dialog_buttons[okBtn]=function(){
                                    $( this ).dialog( "close" );
                                };
                                $("<p>"+noSearchResultsTxt+"</p>").dialog({
                                    modal: true,
                                    buttons: dialog_buttons,
                                    resizable: false
                                });
                            }
                        }
                    }).trigger("reloadGrid");
                    $(this).dialog("close");
                }
            };
            dialog_buttons[cancelBtn]=function(){
                $(this).dialog("close");
            };
            dialog_buttons[resetBtn]=function(){
                $("#displaytokens").jqGrid('setGridParam', { url:jsonUrl, search: false, postData: { "filters": ""} }).trigger("reloadGrid");
                $(this).dialog("close");
            };
            /* End of building array for button functions */
            $("#search").dialog({
                height: 300,
                width: 750,
                modal: true,
                title : sFind,
                buttons: dialog_buttons
            });
        }
    });
    if(showInviteButton) {
        $("#displaytokens").navButtonAdd('#pager',{
            caption:"",
            title:invitemsg,
            buttonicon:'ui-icon-mail-closed',
            onClickButton:function(){
                if ($('#displaytokens').jqGrid('getGridParam', 'selarrrow').length==0)
                {
                    alert(sSelectRowMsg );
                }
                else
                {
                    var newForm = jQuery('<form>', {
                        'action': inviteurl,
                        'method': 'POST',
                        'target': '_blank',
                    }).append(jQuery('<input>', {
                        'name': 'YII_CSRF_TOKEN',
                        'value': LS.data.csrfToken,
                        'type': 'hidden'
                    })).append(jQuery('<input>', {
                        'name': 'tokenids',
                        'value': $("#displaytokens").getGridParam("selarrrow").join("|"),
                        'type': 'hidden'
                    })).appendTo('body');
                    newForm.submit();
                }
            }
        });
    }
    if(showRemindButton) {
        $("#displaytokens").navButtonAdd('#pager',{
            caption:"",
            title:remindmsg,
            buttonicon:'ui-icon-mail-open',
            onClickButton:function(){
                if ($('#displaytokens').jqGrid('getGridParam', 'selarrrow').length==0)
                {
                    alert(sSelectRowMsg );
                }
                else
                {
                    var newForm = jQuery('<form>', {
                        'action': remindurl,
                        'method': 'POST',
                        'target': '_blank'
                    }).append(jQuery('<input>', {
                        'name': 'YII_CSRF_TOKEN',
                        'value': LS.data.csrfToken,
                        'type': 'hidden'
                    })).append(jQuery('<input>', {
                        'name': 'tokenids',
                        'value': $("#displaytokens").getGridParam("selarrrow").join("|"),
                        'type': 'hidden'
                    })).appendTo('body');
                    newForm.submit();
                }
            }
        });
    }
    if(showBounceButton) {
        $("#displaytokens").navButtonAdd('#pager', {
            caption:"",
            title:sBounceProcessing,
            buttonicon:'ui-bounceprocessing',
            onClickButton:function(){
                $("#dialog-modal").dialog({
                    title: sSummary,
                    modal: true,
                    autoOpen: false,
                    height: 200,
                    width: 400,
                    show: 'blind',
                    hide: 'blind'
                });
                checkbounces();
            }
        });
    }
    if (bParticipantPanelPermission==true)
    {
        $("#displaytokens").navSeparatorAdd("#pager",{});
        $("#displaytokens").navButtonAdd('#pager', {
            caption:"",
            title:viewParticipantsLink,
            buttonicon:'ui-participant-link',
            onClickButton:function(){sendPost(participantlinkUrl,'',['searchcondition'],["surveyid||equal||" + survey_id]);}
        });
        $("#displaytokens").navButtonAdd('#pager', {
            caption:"",
            title:sAddParticipantToCPDBText,
            buttonicon:'ui-add-to-cpdb-link',
            onClickButton:addSelectedParticipantsToCPDB
        });
    }
    $(".gridsearch").bindWithDelay("keyup", function(e) {
        var sSearchString=$.trim($(this).val());
        if(sSearchString != ""){
            var aSearchConditions=new Array;
            for(col in colInformation){
                if(colInformation[col]['quickfilter']){
                    aSearchConditions.push(col);aSearchConditions.push('contains');aSearchConditions.push(sSearchString);aSearchConditions.push("or");
                }
            }
            aSearchConditions.pop();// remove last 'or'
            oGrid.jqGrid('setGridParam', {url: jsonUrl, postData: { searcharray: aSearchConditions} }).trigger('reloadGrid', [{current: true, page: 1}]);
        }else{
            oGrid.jqGrid('setGridParam', {url: jsonUrl, postData: { }}).trigger('reloadGrid', [{current: true, page: 1}]);
        }
    }, 500);

    $.extend(jQuery.jgrid.edit,{
        closeAfterAdd: true,
        reloadAfterSubmit: true,
        closeOnEspace:true
    });
	// Center modal dialogs
    $.jgrid.jqModal = $.extend($.jgrid.jqModal || {}, {
        beforeOpen: centerInfoDialog
    });
});

function centerInfoDialog() {
    var infoDialog = $("#info_dialog");
    var dialogparent = infoDialog.parent();
    infoDialog.css({ 'left': Math.round((dialogparent.width() - infoDialog.width()) / 2)+'px' });
}

function updatePageAfterGrid(){
    var oGrid=$("#displaytokens");
    var iLastPage=parseInt(oGrid.jqGrid('getGridParam', 'lastpage'));
    var iPage=parseInt(oGrid.jqGrid('getGridParam', 'page'));
    if(iPage>1)
    {
        iPrevPage=iPage-1;
        $(".databegin").click(function(){
            oGrid.setGridParam({page:1}).trigger("reloadGrid");
        });
        $(".gridcontrol.databegin").removeClass("disabled");
        $(".databack").click(function(){
            oGrid.setGridParam({page:iPrevPage}).trigger("reloadGrid");
        });
        $(".gridcontrol.databack").removeClass("disabled");
    }
    else
    {
        $(".databegin").click(function(){});
        $(".gridcontrol.databegin").addClass("disabled");
        $(".databack").click(function(){});
        $(".gridcontrol.databack").addClass("disabled");
    }
    if(iPage<iLastPage)
    {
        iNextPage=iPage+1;
        $(".dataend").click(function(){
            oGrid.setGridParam({page:iLastPage}).trigger("reloadGrid");
        });
        $(".gridcontrol.dataend").removeClass("disabled");
        $(".dataforward").click(function(){
            oGrid.setGridParam({page:iNextPage}).trigger("reloadGrid");
        });
        $(".gridcontrol.dataforward").removeClass("disabled");
    }
    else
    {
        $(".dataend").click(function(){});
        $(".gridcontrol.dataend").addClass("disabled");
        $(".dataforward").click(function(){});
        $(".gridcontrol.dataforward").addClass("disabled");
    }
}
// Initial definition of Limesurvey javascript object.
var LS = {};

LS.createUrl = function (route, params)
{
    if (typeof params === 'undefined') {
        params = {};
    }
    var result = LS.data.baseUrl;

    if (result.indexOf('/', result.length - 1) === -1)
    {
        result = result + '/';
    }

    if (LS.data.showScriptName)
    {
        result = result + 'index.php';
    }


    if (LS.data.urlFormat == 'get')
    {
        // Configure route.
        result += '?r=' + route;

        // Configure params.
        for (var key in params)
        {
            result = result + '&' + key+ '=' + params[key];
        }
    }
    else
    {
        if (LS.data.showScriptName)
        {
            result = result + '/';
        }
        // Configure route.
        result += route;

        // Configure params.
        for (var key in params)
        {
            result = result + '/' + key + '/' + params[key];
        }
    }

    return result;
};