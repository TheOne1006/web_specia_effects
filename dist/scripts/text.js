function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function stripOld(){for(var t=Date.now(),n=0,e=ACTIVE_ELECTRONS.length;n<e;n++){ACTIVE_ELECTRONS[n].expireAt-t<1e3&&(ACTIVE_ELECTRONS.splice(n,1),n--,e--)}}function createRandomCell(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];if(!(ACTIVE_ELECTRONS.length>=MAX_ELECTRONS)){var n=mainLayer.width,e=mainLayer.height;new Cell(_.random(n/CELL_DISTANCE),_.random(e/CELL_DISTANCE),t).paintNextTo(mainLayer)}}function drawGrid(){var t=arguments.length<=0||void 0===arguments[0]?bgLayer.context:arguments[0],n=arguments.length<=1||void 0===arguments[1]?bgLayer:arguments[1],e=n.width,r=n.height;t.fillStyle=BG_COLOR,t.fillRect(0,0,e,r),t.fillStyle=BORDER_COLOR;for(var i=CELL_SIZE;i<r;i+=CELL_DISTANCE)t.fillRect(0,i,e,BORDER_WIDTH);for(var o=CELL_SIZE;o<e;o+=CELL_DISTANCE)t.fillRect(o,0,BORDER_WIDTH,r)}function iterateItemsIn(t){for(var n=Date.now(),e=0,r=t.length;e<r;e++){var i=t[e];n>=i.expireAt?(t.splice(e,1),e--,r--):i.paintNextTo(mainLayer)}}function drawMain(){iterateItemsIn(PINNED_CELLS),iterateItemsIn(ACTIVE_ELECTRONS)}function activateRandom(){var t=Date.now();t<nextRandomAt||(nextRandomAt=t+_.random(300,1e3),createRandomCell())}function render(){mainLayer.blendBackground(bgLayer.canvas),drawMain(),activateRandom(),shape.renderID=requestAnimationFrame(render)}function handleClick(){function t(t){var n=t.clientX,e=t.clientY;new Cell(Math.floor(n/CELL_DISTANCE),Math.floor(e/CELL_DISTANCE),{background:CELL_HIGHLIGHT,forceElectrons:!0,electronCount:4,electronOptions:{speed:3,lifeTime:1500,color:CELL_HIGHLIGHT}}).paintNextTo(mainLayer)}function n(n){n.touches?Array.from(n.touches).forEach(t):t(n)}return["mousedown","touchstart"].forEach(function(t){document.addEventListener(t,n)}),function(){["mousedown","touchstart"].forEach(function(t){document.removeEventListener(t,n)})}}function queue(t){t.split("").reduce(function(t,n,e){var r=t+n;return setTimeout(function(){shape.print(r)},500*e),r},"")}(function(){function t(t){function n(n,e,r,i,o,a){for(;o>=0&&o<a;o+=t){var u=i?i[o]:o;r=e(r,n[u],u,n)}return r}return function(e,r,i,o){r=E(r,o,4);var a=!x(e)&&g.keys(e),u=(a||e).length,c=t>0?0:u-1;return arguments.length<3&&(i=e[a?a[c]:c],c+=t),n(e,r,i,a,c,u)}}function n(t){return function(n,e,r){e=_(e,r);for(var i=b(n),o=t>0?0:i-1;o>=0&&o<i;o+=t)if(e(n[o],o,n))return o;return-1}}function e(t,n,e){return function(r,i,o){var a=0,u=b(r);if("number"==typeof o)t>0?a=o>=0?o:Math.max(o+u,a):u=o>=0?Math.min(o+1,u):o+u+1;else if(e&&o&&u)return o=e(r,i),r[o]===i?o:-1;if(i!==i)return o=n(s.call(r,a,u),g.isNaN),o>=0?o+a:-1;for(o=t>0?a:u-1;o>=0&&o<u;o+=t)if(r[o]===i)return o;return-1}}function r(t,n){var e=N.length,r=t.constructor,i=g.isFunction(r)&&r.prototype||u,o="constructor";for(g.has(t,o)&&!g.contains(n,o)&&n.push(o);e--;)(o=N[e])in t&&t[o]!==i[o]&&!g.contains(n,o)&&n.push(o)}var i=this,o=i._,a=Array.prototype,u=Object.prototype,c=Function.prototype,l=a.push,s=a.slice,f=u.toString,h=u.hasOwnProperty,p=Array.isArray,d=Object.keys,v=c.bind,y=Object.create,m=function(){},g=function(t){return t instanceof g?t:this instanceof g?void(this._wrapped=t):new g(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=g),exports._=g):i._=g,g.VERSION="1.8.3";var E=function(t,n,e){if(void 0===n)return t;switch(null==e?3:e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)};case 4:return function(e,r,i,o){return t.call(n,e,r,i,o)}}return function(){return t.apply(n,arguments)}},_=function(t,n,e){return null==t?g.identity:g.isFunction(t)?E(t,n,e):g.isObject(t)?g.matcher(t):g.property(t)};g.iteratee=function(t,n){return _(t,n,1/0)};var L=function(t,n){return function(e){var r=arguments.length;if(r<2||null==e)return e;for(var i=1;i<r;i++)for(var o=arguments[i],a=t(o),u=a.length,c=0;c<u;c++){var l=a[c];n&&void 0!==e[l]||(e[l]=o[l])}return e}},C=function(t){if(!g.isObject(t))return{};if(y)return y(t);m.prototype=t;var n=new m;return m.prototype=null,n},T=function(t){return function(n){return null==n?void 0:n[t]}},O=Math.pow(2,53)-1,b=T("length"),x=function(t){var n=b(t);return"number"==typeof n&&n>=0&&n<=O};g.each=g.forEach=function(t,n,e){n=E(n,e);var r,i;if(x(t))for(r=0,i=t.length;r<i;r++)n(t[r],r,t);else{var o=g.keys(t);for(r=0,i=o.length;r<i;r++)n(t[o[r]],o[r],t)}return t},g.map=g.collect=function(t,n,e){n=_(n,e);for(var r=!x(t)&&g.keys(t),i=(r||t).length,o=Array(i),a=0;a<i;a++){var u=r?r[a]:a;o[a]=n(t[u],u,t)}return o},g.reduce=g.foldl=g.inject=t(1),g.reduceRight=g.foldr=t(-1),g.find=g.detect=function(t,n,e){var r;if(void 0!==(r=x(t)?g.findIndex(t,n,e):g.findKey(t,n,e))&&r!==-1)return t[r]},g.filter=g.select=function(t,n,e){var r=[];return n=_(n,e),g.each(t,function(t,e,i){n(t,e,i)&&r.push(t)}),r},g.reject=function(t,n,e){return g.filter(t,g.negate(_(n)),e)},g.every=g.all=function(t,n,e){n=_(n,e);for(var r=!x(t)&&g.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(!n(t[a],a,t))return!1}return!0},g.some=g.any=function(t,n,e){n=_(n,e);for(var r=!x(t)&&g.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(n(t[a],a,t))return!0}return!1},g.contains=g.includes=g.include=function(t,n,e,r){return x(t)||(t=g.values(t)),("number"!=typeof e||r)&&(e=0),g.indexOf(t,n,e)>=0},g.invoke=function(t,n){var e=s.call(arguments,2),r=g.isFunction(n);return g.map(t,function(t){var i=r?n:t[n];return null==i?i:i.apply(t,e)})},g.pluck=function(t,n){return g.map(t,g.property(n))},g.where=function(t,n){return g.filter(t,g.matcher(n))},g.findWhere=function(t,n){return g.find(t,g.matcher(n))},g.max=function(t,n,e){var r,i,o=-(1/0),a=-(1/0);if(null==n&&null!=t){t=x(t)?t:g.values(t);for(var u=0,c=t.length;u<c;u++)(r=t[u])>o&&(o=r)}else n=_(n,e),g.each(t,function(t,e,r){((i=n(t,e,r))>a||i===-(1/0)&&o===-(1/0))&&(o=t,a=i)});return o},g.min=function(t,n,e){var r,i,o=1/0,a=1/0;if(null==n&&null!=t){t=x(t)?t:g.values(t);for(var u=0,c=t.length;u<c;u++)(r=t[u])<o&&(o=r)}else n=_(n,e),g.each(t,function(t,e,r){((i=n(t,e,r))<a||i===1/0&&o===1/0)&&(o=t,a=i)});return o},g.shuffle=function(t){for(var n,e=x(t)?t:g.values(t),r=e.length,i=Array(r),o=0;o<r;o++)n=g.random(0,o),n!==o&&(i[o]=i[n]),i[n]=e[o];return i},g.sample=function(t,n,e){return null==n||e?(x(t)||(t=g.values(t)),t[g.random(t.length-1)]):g.shuffle(t).slice(0,Math.max(0,n))},g.sortBy=function(t,n,e){return n=_(n,e),g.pluck(g.map(t,function(t,e,r){return{value:t,index:e,criteria:n(t,e,r)}}).sort(function(t,n){var e=t.criteria,r=n.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(e<r||void 0===r)return-1}return t.index-n.index}),"value")};var I=function(t){return function(n,e,r){var i={};return e=_(e,r),g.each(n,function(r,o){t(i,r,e(r,o,n))}),i}};g.groupBy=I(function(t,n,e){g.has(t,e)?t[e].push(n):t[e]=[n]}),g.indexBy=I(function(t,n,e){t[e]=n}),g.countBy=I(function(t,n,e){g.has(t,e)?t[e]++:t[e]=1}),g.toArray=function(t){return t?g.isArray(t)?s.call(t):x(t)?g.map(t,g.identity):g.values(t):[]},g.size=function(t){return null==t?0:x(t)?t.length:g.keys(t).length},g.partition=function(t,n,e){n=_(n,e);var r=[],i=[];return g.each(t,function(t,e,o){(n(t,e,o)?r:i).push(t)}),[r,i]},g.first=g.head=g.take=function(t,n,e){if(null!=t)return null==n||e?t[0]:g.initial(t,t.length-n)},g.initial=function(t,n,e){return s.call(t,0,Math.max(0,t.length-(null==n||e?1:n)))},g.last=function(t,n,e){if(null!=t)return null==n||e?t[t.length-1]:g.rest(t,Math.max(0,t.length-n))},g.rest=g.tail=g.drop=function(t,n,e){return s.call(t,null==n||e?1:n)},g.compact=function(t){return g.filter(t,g.identity)};var w=function(t,n,e,r){for(var i=[],o=0,a=r||0,u=b(t);a<u;a++){var c=t[a];if(x(c)&&(g.isArray(c)||g.isArguments(c))){n||(c=w(c,n,e));var l=0,s=c.length;for(i.length+=s;l<s;)i[o++]=c[l++]}else e||(i[o++]=c)}return i};g.flatten=function(t,n){return w(t,n,!1)},g.without=function(t){return g.difference(t,s.call(arguments,1))},g.uniq=g.unique=function(t,n,e,r){g.isBoolean(n)||(r=e,e=n,n=!1),null!=e&&(e=_(e,r));for(var i=[],o=[],a=0,u=b(t);a<u;a++){var c=t[a],l=e?e(c,a,t):c;n?(a&&o===l||i.push(c),o=l):e?g.contains(o,l)||(o.push(l),i.push(c)):g.contains(i,c)||i.push(c)}return i},g.union=function(){return g.uniq(w(arguments,!0,!0))},g.intersection=function(t){for(var n=[],e=arguments.length,r=0,i=b(t);r<i;r++){var o=t[r];if(!g.contains(n,o)){for(var a=1;a<e&&g.contains(arguments[a],o);a++);a===e&&n.push(o)}}return n},g.difference=function(t){var n=w(arguments,!0,!0,1);return g.filter(t,function(t){return!g.contains(n,t)})},g.zip=function(){return g.unzip(arguments)},g.unzip=function(t){for(var n=t&&g.max(t,b).length||0,e=Array(n),r=0;r<n;r++)e[r]=g.pluck(t,r);return e},g.object=function(t,n){for(var e={},r=0,i=b(t);r<i;r++)n?e[t[r]]=n[r]:e[t[r][0]]=t[r][1];return e},g.findIndex=n(1),g.findLastIndex=n(-1),g.sortedIndex=function(t,n,e,r){e=_(e,r,1);for(var i=e(n),o=0,a=b(t);o<a;){var u=Math.floor((o+a)/2);e(t[u])<i?o=u+1:a=u}return o},g.indexOf=e(1,g.findIndex,g.sortedIndex),g.lastIndexOf=e(-1,g.findLastIndex),g.range=function(t,n,e){null==n&&(n=t||0,t=0),e=e||1;for(var r=Math.max(Math.ceil((n-t)/e),0),i=Array(r),o=0;o<r;o++,t+=e)i[o]=t;return i};var A=function(t,n,e,r,i){if(!(r instanceof n))return t.apply(e,i);var o=C(t.prototype),a=t.apply(o,i);return g.isObject(a)?a:o};g.bind=function(t,n){if(v&&t.bind===v)return v.apply(t,s.call(arguments,1));if(!g.isFunction(t))throw new TypeError("Bind must be called on a function");var e=s.call(arguments,2),r=function(){return A(t,r,n,this,e.concat(s.call(arguments)))};return r},g.partial=function(t){var n=s.call(arguments,1),e=function(){for(var r=0,i=n.length,o=Array(i),a=0;a<i;a++)o[a]=n[a]===g?arguments[r++]:n[a];for(;r<arguments.length;)o.push(arguments[r++]);return A(t,e,this,this,o)};return e},g.bindAll=function(t){var n,e,r=arguments.length;if(r<=1)throw new Error("bindAll must be passed function names");for(n=1;n<r;n++)e=arguments[n],t[e]=g.bind(t[e],t);return t},g.memoize=function(t,n){var e=function(r){var i=e.cache,o=""+(n?n.apply(this,arguments):r);return g.has(i,o)||(i[o]=t.apply(this,arguments)),i[o]};return e.cache={},e},g.delay=function(t,n){var e=s.call(arguments,2);return setTimeout(function(){return t.apply(null,e)},n)},g.defer=g.partial(g.delay,g,1),g.throttle=function(t,n,e){var r,i,o,a=null,u=0;e||(e={});var c=function(){u=e.leading===!1?0:g.now(),a=null,o=t.apply(r,i),a||(r=i=null)};return function(){var l=g.now();u||e.leading!==!1||(u=l);var s=n-(l-u);return r=this,i=arguments,s<=0||s>n?(a&&(clearTimeout(a),a=null),u=l,o=t.apply(r,i),a||(r=i=null)):a||e.trailing===!1||(a=setTimeout(c,s)),o}},g.debounce=function(t,n,e){var r,i,o,a,u,c=function(){var l=g.now()-a;l<n&&l>=0?r=setTimeout(c,n-l):(r=null,e||(u=t.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,a=g.now();var l=e&&!r;return r||(r=setTimeout(c,n)),l&&(u=t.apply(o,i),o=i=null),u}},g.wrap=function(t,n){return g.partial(n,t)},g.negate=function(t){return function(){return!t.apply(this,arguments)}},g.compose=function(){var t=arguments,n=t.length-1;return function(){for(var e=n,r=t[n].apply(this,arguments);e--;)r=t[e].call(this,r);return r}},g.after=function(t,n){return function(){if(--t<1)return n.apply(this,arguments)}},g.before=function(t,n){var e;return function(){return--t>0&&(e=n.apply(this,arguments)),t<=1&&(n=null),e}},g.once=g.partial(g.before,2);var R=!{toString:null}.propertyIsEnumerable("toString"),N=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];g.keys=function(t){if(!g.isObject(t))return[];if(d)return d(t);var n=[];for(var e in t)g.has(t,e)&&n.push(e);return R&&r(t,n),n},g.allKeys=function(t){if(!g.isObject(t))return[];var n=[];for(var e in t)n.push(e);return R&&r(t,n),n},g.values=function(t){for(var n=g.keys(t),e=n.length,r=Array(e),i=0;i<e;i++)r[i]=t[n[i]];return r},g.mapObject=function(t,n,e){n=_(n,e);for(var r,i=g.keys(t),o=i.length,a={},u=0;u<o;u++)r=i[u],a[r]=n(t[r],r,t);return a},g.pairs=function(t){for(var n=g.keys(t),e=n.length,r=Array(e),i=0;i<e;i++)r[i]=[n[i],t[n[i]]];return r},g.invert=function(t){for(var n={},e=g.keys(t),r=0,i=e.length;r<i;r++)n[t[e[r]]]=e[r];return n},g.functions=g.methods=function(t){var n=[];for(var e in t)g.isFunction(t[e])&&n.push(e);return n.sort()},g.extend=L(g.allKeys),g.extendOwn=g.assign=L(g.keys),g.findKey=function(t,n,e){n=_(n,e);for(var r,i=g.keys(t),o=0,a=i.length;o<a;o++)if(r=i[o],n(t[r],r,t))return r},g.pick=function(t,n,e){var r,i,o={},a=t;if(null==a)return o;g.isFunction(n)?(i=g.allKeys(a),r=E(n,e)):(i=w(arguments,!1,!1,1),r=function(t,n,e){return n in e},a=Object(a));for(var u=0,c=i.length;u<c;u++){var l=i[u],s=a[l];r(s,l,a)&&(o[l]=s)}return o},g.omit=function(t,n,e){if(g.isFunction(n))n=g.negate(n);else{var r=g.map(w(arguments,!1,!1,1),String);n=function(t,n){return!g.contains(r,n)}}return g.pick(t,n,e)},g.defaults=L(g.allKeys,!0),g.create=function(t,n){var e=C(t);return n&&g.extendOwn(e,n),e},g.clone=function(t){return g.isObject(t)?g.isArray(t)?t.slice():g.extend({},t):t},g.tap=function(t,n){return n(t),t},g.isMatch=function(t,n){var e=g.keys(n),r=e.length;if(null==t)return!r;for(var i=Object(t),o=0;o<r;o++){var a=e[o];if(n[a]!==i[a]||!(a in i))return!1}return!0};var S=function(t,n,e,r){if(t===n)return 0!==t||1/t==1/n;if(null==t||null==n)return t===n;t instanceof g&&(t=t._wrapped),n instanceof g&&(n=n._wrapped);var i=f.call(t);if(i!==f.call(n))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+n;case"[object Number]":return+t!=+t?+n!=+n:0==+t?1/+t==1/n:+t==+n;case"[object Date]":case"[object Boolean]":return+t==+n}var o="[object Array]"===i;if(!o){if("object"!=typeof t||"object"!=typeof n)return!1;var a=t.constructor,u=n.constructor;if(a!==u&&!(g.isFunction(a)&&a instanceof a&&g.isFunction(u)&&u instanceof u)&&"constructor"in t&&"constructor"in n)return!1}e=e||[],r=r||[];for(var c=e.length;c--;)if(e[c]===t)return r[c]===n;if(e.push(t),r.push(n),o){if((c=t.length)!==n.length)return!1;for(;c--;)if(!S(t[c],n[c],e,r))return!1}else{var l,s=g.keys(t);if(c=s.length,g.keys(n).length!==c)return!1;for(;c--;)if(l=s[c],!g.has(n,l)||!S(t[l],n[l],e,r))return!1}return e.pop(),r.pop(),!0};g.isEqual=function(t,n){return S(t,n)},g.isEmpty=function(t){return null==t||(x(t)&&(g.isArray(t)||g.isString(t)||g.isArguments(t))?0===t.length:0===g.keys(t).length)},g.isElement=function(t){return!(!t||1!==t.nodeType)},g.isArray=p||function(t){return"[object Array]"===f.call(t)},g.isObject=function(t){var n=typeof t;return"function"===n||"object"===n&&!!t},g.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){g["is"+t]=function(n){return f.call(n)==="[object "+t+"]"}}),g.isArguments(arguments)||(g.isArguments=function(t){return g.has(t,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(g.isFunction=function(t){return"function"==typeof t||!1}),g.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},g.isNaN=function(t){return g.isNumber(t)&&t!==+t},g.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"===f.call(t)},g.isNull=function(t){return null===t},g.isUndefined=function(t){return void 0===t},g.has=function(t,n){return null!=t&&h.call(t,n)},g.noConflict=function(){return i._=o,this},g.identity=function(t){return t},g.constant=function(t){return function(){return t}},g.noop=function(){},g.property=T,g.propertyOf=function(t){return null==t?function(){}:function(n){return t[n]}},g.matcher=g.matches=function(t){return t=g.extendOwn({},t),function(n){return g.isMatch(n,t)}},g.times=function(t,n,e){var r=Array(Math.max(0,t));n=E(n,e,1);for(var i=0;i<t;i++)r[i]=n(i);return r},g.random=function(t,n){return null==n&&(n=t,t=0),t+Math.floor(Math.random()*(n-t+1))},g.now=Date.now||function(){return(new Date).getTime()};var D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},M=g.invert(D),k=function(t){var n=function(n){return t[n]},e="(?:"+g.keys(t).join("|")+")",r=RegExp(e),i=RegExp(e,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,n):t}};g.escape=k(D),g.unescape=k(M),g.result=function(t,n,e){var r=null==t?void 0:t[n];return void 0===r&&(r=e),g.isFunction(r)?r.call(t):r};var j=0;g.uniqueId=function(t){var n=++j+"";return t?t+n:n},g.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var F={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},H=function(t){return"\\"+F[t]};g.template=function(t,n,e){!n&&e&&(n=e),n=g.defaults({},n,g.templateSettings);var r=RegExp([(n.escape||/(.)^/).source,(n.interpolate||/(.)^/).source,(n.evaluate||/(.)^/).source].join("|")+"|$","g"),i=0,o="__p+='";t.replace(r,function(n,e,r,a,u){return o+=t.slice(i,u).replace(/\\|'|\r|\n|\u2028|\u2029/g,H),i=u+n.length,e?o+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(o+="';\n"+a+"\n__p+='"),n}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var a=new Function(n.variable||"obj","_",o)}catch(t){throw t.source=o,t}var u=function(t){return a.call(this,t,g)},c=n.variable||"obj";return u.source="function("+c+"){\n"+o+"}",u},g.chain=function(t){var n=g(t);return n._chain=!0,n};var B=function(t,n){return t._chain?g(n).chain():n};g.mixin=function(t){g.each(g.functions(t),function(n){var e=g[n]=t[n];g.prototype[n]=function(){var t=[this._wrapped];return l.apply(t,arguments),B(this,e.apply(g,t))}})},g.mixin(g),g.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var n=a[t];g.prototype[t]=function(){var e=this._wrapped;return n.apply(e,arguments),"shift"!==t&&"splice"!==t||0!==e.length||delete e[0],B(this,e)}}),g.each(["concat","join","slice"],function(t){var n=a[t];g.prototype[t]=function(){return B(this,n.apply(this._wrapped,arguments))}}),g.prototype.value=function(){return this._wrapped},g.prototype.valueOf=g.prototype.toJSON=g.prototype.value,g.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return g})}).call(this);var getQueryParams=function(t){var n=(t||window.location.search).substring(1);return!!n&&_.chain(n.split("&")).map(function(t){var n=t.split("=");return[n[0],decodeURIComponent(n[1])]}).object().value()},STEP_LENGTH=2,CELL_SIZE=5,BORDER_WIDTH=1,MAX_FONT_SIZE=150,MAX_ELECTRONS=100,CELL_DISTANCE=CELL_SIZE+BORDER_WIDTH,CELL_REPAINT_DURATION=[300,500],BG_COLOR="#1d2227",BORDER_COLOR="#13191f",CELL_HIGHLIGHT="#328bf6",ELECTRON_COLOR="#00b07c",FONT_COLOR="#0090ff",FONT_FAMILY='Helvetica, Arial, "Hiragino Sans GB", "Microsoft YaHei", "WenQuan Yi Micro Hei", sans-serif',DPR=window.devicePixelRatio||1,ACTIVE_ELECTRONS=[],PINNED_CELLS=[],MOVE_TRAILS=[[0,1],[0,-1],[1,0],[-1,0]].map(function(t){return[t[0]*CELL_DISTANCE,t[1]*CELL_DISTANCE]}),END_POINTS_OFFSET=[[0,0],[0,1],[1,0],[1,1]].map(function(t){return[t[0]*CELL_DISTANCE-BORDER_WIDTH/2,t[1]*CELL_DISTANCE-BORDER_WIDTH/2]}),FullscreenCanvas=function(){function t(){var n=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];_classCallCheck(this,t);var e=document.createElement("canvas"),r=e.getContext("2d");this.canvas=e,this.context=r,this.disableScale=n,this.resizeHandlers=[],this.handleResize=_.debounce(this.handleResize.bind(this),100),this.adjust(),window.addEventListener("resize",this.handleResize)}return t.prototype.adjust=function(){var t=this.canvas,n=this.context,e=this.disableScale,r=window,i=r.innerWidth,o=r.innerHeight;this.width=i,this.height=o;var a=e?1:DPR;this.realWidth=t.width=i*a,this.realHeight=t.height=o*a,t.style.width=i+"px",t.style.height=o+"px",n.scale(a,a)},t.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},t.prototype.makeCallback=function(t){t(this.context,this)},t.prototype.blendBackground=function(t){var n=arguments.length<=1||void 0===arguments[1]?.1:arguments[1];return this.paint(function(e,r){var i=r.realWidth,o=r.realHeight,a=r.width,u=r.height;e.save(),e.globalCompositeOperation="source-over",e.globalAlpha=n,e.drawImage(t,0,0,i,o,0,0,a,u),e.restore()})},t.prototype.paint=function(t){if(_.isFunction(t))return this.makeCallback(t),this},t.prototype.repaint=function(t){if(_.isFunction(t))return this.clear(),this.paint(t)},t.prototype.onResize=function(t){_.isFunction(t)&&this.resizeHandlers.push(t)},t.prototype.handleResize=function(){var t=this.resizeHandlers;t.length&&(this.adjust(),t.forEach(this.makeCallback.bind(this)))},t.prototype.renderIntoView=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?window.document.body:arguments[1],e=this.canvas;this.container=n;window.location.href.substr(0,19),window.location.href.substr(0,4);e.style.position="absolute",e.style.left="0px",e.style.top="0px",e.style.zIndex=t,n.appendChild(e)},t.prototype.remove=function(){if(this.container)try{this.container.removeChild(this.canvas)}catch(t){}},t}(),Electron=function(){function t(){var n=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],i=r.lifeTime,o=void 0===i?3e3:i,a=r.speed,u=void 0===a?STEP_LENGTH:a,c=r.color,l=void 0===c?ELECTRON_COLOR:c;_classCallCheck(this,t),4===l.length&&(l=l.replace(/[0-9a-f]/g,function(t){return""+t+t})),this.lifeTime=o,this.expireAt=Date.now()+o,this.speed=u,this.color=l,this.shadowColor=this.buildShadowColor(l),this.radius=BORDER_WIDTH/2,this.current=[n,e],this.visited={},this.setDest(this.randomPath())}return t.prototype.buildShadowColor=function(t){return"rgba("+t.match(/[0-9a-f]{2}/gi).map(function(t){return parseInt(t,16)}).join(", ")+", 0.8)"},t.prototype.randomPath=function(){var t=this.current,n=t[0],e=t[1],r=MOVE_TRAILS.length,i=MOVE_TRAILS[_.random(r-1)];return[n+i[0],e+i[1]]},t.prototype.composeCoord=function(t){return t.join(",")},t.prototype.hasVisited=function(t){var n=this.composeCoord(t);return this.visited[n]},t.prototype.setDest=function(t){this.destination=t,this.visited[this.composeCoord(t)]=!0},t.prototype.next=function(){var t=this.speed,n=this.current,e=this.destination;if(Math.abs(n[0]-e[0])<=t/2&&Math.abs(n[1]-e[1])<=t/2){e=this.randomPath();for(var r=1;this.hasVisited(e)&&r<=4;)r++,e=this.randomPath();this.setDest(e)}var i=e[0]-n[0],o=e[1]-n[1];return i&&(n[0]+=i/Math.abs(i)*t),o&&(n[1]+=o/Math.abs(o)*t),[].concat(this.current)},t.prototype.paintNextTo=function(){var t=arguments.length<=0||void 0===arguments[0]?new FullscreenCanvas:arguments[0],n=t.context,e=this.radius,r=this.color,i=this.shadowColor,o=this.expireAt,a=this.lifeTime,u=this.next(),c=u[0],l=u[1];n.save(),n.globalAlpha=Math.max(0,o-Date.now())/a,n.fillStyle=r,n.shadowBlur=5*e,n.shadowColor=i,n.globalCompositeOperation="lighter",n.beginPath(),n.arc(c,l,e,0,2*Math.PI),n.closePath(),n.fill(),n.restore()},t}(),Cell=function(){function t(){var n=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],i=r.electronCount,o=void 0===i?_.random(1,4):i,a=r.background,u=void 0===a?ELECTRON_COLOR:a,c=r.forceElectrons,l=void 0!==c&&c,s=r.electronOptions,f=void 0===s?{}:s;_classCallCheck(this,t),this.background=u,this.electronOptions=f,this.forceElectrons=l,this.electronCount=Math.min(o,4),this.startX=n*CELL_DISTANCE,this.startY=e*CELL_DISTANCE}return t.prototype.pin=function(){var t=arguments.length<=0||void 0===arguments[0]?-1>>>1:arguments[0];this.expireAt=Date.now()+t,PINNED_CELLS.push(this)},t.prototype.scheduleUpdate=function(){var t;this.nextUpdate=Date.now()+(t=_).random.apply(t,CELL_REPAINT_DURATION)},t.prototype.paintNextTo=function(){var t=arguments.length<=0||void 0===arguments[0]?new FullscreenCanvas:arguments[0],n=t.context,e=this.startX,r=this.startY,i=this.background,o=this.nextUpdate;o&&Date.now()<o||(this.scheduleUpdate(),this.createElectrons(),n.save(),n.globalCompositeOperation="lighter",n.fillStyle=i,n.fillRect(e,r,CELL_SIZE,CELL_SIZE),n.restore())},t.prototype.popRandom=function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=_.random(t.length-1);return t.splice(n,1)[0]},t.prototype.createElectrons=function(){var t=this.startX,n=this.startY,e=this.electronCount,r=this.electronOptions,i=this.forceElectrons;if(e)for(var o=[].concat(END_POINTS_OFFSET),a=i?e:Math.min(e,MAX_ELECTRONS-ACTIVE_ELECTRONS.length),u=0;u<a;u++){var c=this.popRandom(o),l=c[0],s=c[1];ACTIVE_ELECTRONS.push(new Electron(t+l,n+s,r))}},t}(),bgLayer=new FullscreenCanvas,mainLayer=new FullscreenCanvas,shapeLayer=new FullscreenCanvas(!0),nextRandomAt=void 0,shape={lastText:"",lastMatrix:null,renderID:void 0,appendQueueTimer:void 0,isAlive:!1,get cellOptions(){return{electronCount:_.random(1,4),background:FONT_COLOR,electronOptions:{speed:2,lifeTime:_.random(300,1500),color:FONT_COLOR}}},init:function(){var t=this,n=arguments.length<=0||void 0===arguments[0]?document.body:arguments[0];this.isAlive||(bgLayer.paint(drawGrid),bgLayer.onResize(drawGrid),mainLayer.paint(drawMain),mainLayer.onResize(drawMain),bgLayer.renderIntoView(0,n),mainLayer.renderIntoView(1,n),shapeLayer.onResize(function(){t.lastText&&t.print(t.lastText)}),render(),activateRandom(),this.unbindEvents=handleClick(),this.isAlive=!0)},clear:function(){this.lastMatrix&&this.explode(this.lastMatrix),clearTimeout(this.appendQueueTimer),this.lastText="",this.lastMatrix=null,PINNED_CELLS.length=0},destroy:function(){this.isAlive&&(bgLayer.remove(),mainLayer.remove(),shapeLayer.remove(),this.unbindEvents(),clearTimeout(this.appendQueueTimer),cancelAnimationFrame(this.renderID),ACTIVE_ELECTRONS.length=PINNED_CELLS.length=0,this.lastMatrix=null,this.lastText="",this.isAlive=!1)},getTextMatrix:function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],e=n.fontWeight,r=void 0===e?"bold":e,i=n.fontFamily,o=void 0===i?FONT_FAMILY:i,a=shapeLayer.width,u=shapeLayer.height;shapeLayer.repaint(function(n){n.textAlign="center",n.textBaseline="middle",n.font=r+" "+MAX_FONT_SIZE+"px "+o;var e=a/n.measureText(t).width,i=Math.min(MAX_FONT_SIZE,MAX_FONT_SIZE*e*.8);n.font=r+" "+i+"px "+o,n.fillText(t,a/2,u/2)});for(var c=shapeLayer.context.getImageData(0,0,a,u).data,l=[],s=0;s<u;s+=CELL_DISTANCE)for(var f=0;f<a;f+=CELL_DISTANCE){var h=c[4*(f+s*a)+3];h>0&&l.push([Math.floor(f/CELL_DISTANCE),Math.floor(s/CELL_DISTANCE)])}return l},print:function(t,n){var e=this;this.clear(),this.lastText=t;var r=this.lastMatrix=_.shuffle(this.getTextMatrix(t,n)),i=0,o=r.length;!function t(){for(var n=_.random(Math.floor(o/10),Math.floor(o/5)),a=0;a<n&&i<o;){var u=r[i],c=u[0],l=u[1],s=new Cell(c,l,e.cellOptions);s.paintNextTo(mainLayer),s.pin(),i++,a++}i<o&&(e.appendQueueTimer=setTimeout(t,_.random(50,100)))}()},explode:function(t){if(stripOld(),t)for(var n=t.length,e=Math.min(50,_.random(Math.floor(n/40),Math.floor(n/20))),r=0;r<e;r++){var i=t[r],o=i[0],a=i[1],u=new Cell(o,a,this.cellOptions);u.paintNextTo(mainLayer)}else for(var e=_.random(10,20),r=0;r<e;r++)this.randomCell(this.cellOptions)}};document.getElementById("input").addEventListener("keypress",function(t){var n=t.keyCode,e=t.target;if(13===n){var r=e.value.trim();switch(e.value="",r){case"#destroy":return shape.destroy();case"#init":return shape.init();case"#clear":return mainLayer.clear();case"#reset":return PINNED_CELLS.length=ACTIVE_ELECTRONS.length=0,mainLayer.clear();case"#queue":return queue();case"":return shape.clear();default:return shape.print(r)}}});