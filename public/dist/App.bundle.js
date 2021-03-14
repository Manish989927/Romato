/*! For license information please see App.bundle.js.LICENSE.txt */
!function(){var e={856:function(e){e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,o=Object.getPrototypeOf,r=Object.getOwnPropertyDescriptor,i=Object.freeze,a=Object.seal,s=Object.create,c="undefined"!=typeof Reflect&&Reflect,l=c.apply,u=c.construct;l||(l=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var d,f=k(Array.prototype.forEach),m=k(Array.prototype.pop),p=k(Array.prototype.push),h=k(String.prototype.toLowerCase),g=k(String.prototype.match),v=k(String.prototype.replace),y=k(String.prototype.indexOf),b=k(String.prototype.trim),T=k(RegExp.prototype.test),w=(d=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(d,t)});function k(e){return function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return l(e,t,o)}}function A(e,o){t&&t(e,null);for(var r=o.length;r--;){var i=o[r];if("string"==typeof i){var a=h(i);a!==i&&(n(o)||(o[r]=a),i=a)}e[i]=!0}return e}function L(t){var n=s(null),o=void 0;for(o in t)l(e,t,[o])&&(n[o]=t[o]);return n}function S(e,t){for(;null!==e;){var n=r(e,t);if(n){if(n.get)return k(n.get);if("function"==typeof n.value)return k(n.value)}e=o(e)}return null}var _=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),E=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),x=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),R=i(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),D=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),N=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),O=i(["#text"]),I=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),M=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),F=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),C=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),U=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),j=a(/<%[\s\S]*|[\s\S]*%>/gm),z=a(/^data-[\-\w.\u00B7-\uFFFF]/),H=a(/^aria-[\-\w]+$/),q=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),B=a(/^(?:\w+script|data):/i),P=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function W(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var K=function(){return"undefined"==typeof window?null:window},X=function(e,t){if("object"!==(void 0===e?"undefined":G(e))||"function"!=typeof e.createPolicy)return null;var n=null,o="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(o)&&(n=t.currentScript.getAttribute(o));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K(),n=function(t){return e(t)};if(n.version="2.2.6",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var o=t.document,r=t.document,a=t.DocumentFragment,s=t.HTMLTemplateElement,c=t.Node,l=t.Element,u=t.NodeFilter,d=t.NamedNodeMap,k=void 0===d?t.NamedNodeMap||t.MozNamedAttrMap:d,V=t.Text,J=t.Comment,Y=t.DOMParser,Q=t.trustedTypes,$=l.prototype,Z=S($,"cloneNode"),ee=S($,"nextSibling"),te=S($,"childNodes"),ne=S($,"parentNode");if("function"==typeof s){var oe=r.createElement("template");oe.content&&oe.content.ownerDocument&&(r=oe.content.ownerDocument)}var re=X(Q,o),ie=re&&Ue?re.createHTML(""):"",ae=r,se=ae.implementation,ce=ae.createNodeIterator,le=ae.getElementsByTagName,ue=ae.createDocumentFragment,de=o.importNode,fe={};try{fe=L(r).documentMode?r.documentMode:{}}catch(e){}var me={};n.isSupported=se&&void 0!==se.createHTMLDocument&&9!==fe;var pe=U,he=j,ge=z,ve=H,ye=B,be=P,Te=q,we=null,ke=A({},[].concat(W(_),W(E),W(x),W(D),W(O))),Ae=null,Le=A({},[].concat(W(I),W(M),W(F),W(C))),Se=null,_e=null,Ee=!0,xe=!0,Re=!1,De=!1,Ne=!1,Oe=!1,Ie=!1,Me=!1,Fe=!1,Ce=!0,Ue=!1,je=!0,ze=!0,He=!1,qe={},Be=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Pe=null,Ge=A({},["audio","video","img","source","image","track"]),We=null,Ke=A({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Xe=null,Ve=r.createElement("form"),Je=function(e){Xe&&Xe===e||(e&&"object"===(void 0===e?"undefined":G(e))||(e={}),e=L(e),we="ALLOWED_TAGS"in e?A({},e.ALLOWED_TAGS):ke,Ae="ALLOWED_ATTR"in e?A({},e.ALLOWED_ATTR):Le,We="ADD_URI_SAFE_ATTR"in e?A(L(Ke),e.ADD_URI_SAFE_ATTR):Ke,Pe="ADD_DATA_URI_TAGS"in e?A(L(Ge),e.ADD_DATA_URI_TAGS):Ge,Se="FORBID_TAGS"in e?A({},e.FORBID_TAGS):{},_e="FORBID_ATTR"in e?A({},e.FORBID_ATTR):{},qe="USE_PROFILES"in e&&e.USE_PROFILES,Ee=!1!==e.ALLOW_ARIA_ATTR,xe=!1!==e.ALLOW_DATA_ATTR,Re=e.ALLOW_UNKNOWN_PROTOCOLS||!1,De=e.SAFE_FOR_TEMPLATES||!1,Ne=e.WHOLE_DOCUMENT||!1,Me=e.RETURN_DOM||!1,Fe=e.RETURN_DOM_FRAGMENT||!1,Ce=!1!==e.RETURN_DOM_IMPORT,Ue=e.RETURN_TRUSTED_TYPE||!1,Ie=e.FORCE_BODY||!1,je=!1!==e.SANITIZE_DOM,ze=!1!==e.KEEP_CONTENT,He=e.IN_PLACE||!1,Te=e.ALLOWED_URI_REGEXP||Te,De&&(xe=!1),Fe&&(Me=!0),qe&&(we=A({},[].concat(W(O))),Ae=[],!0===qe.html&&(A(we,_),A(Ae,I)),!0===qe.svg&&(A(we,E),A(Ae,M),A(Ae,C)),!0===qe.svgFilters&&(A(we,x),A(Ae,M),A(Ae,C)),!0===qe.mathMl&&(A(we,D),A(Ae,F),A(Ae,C))),e.ADD_TAGS&&(we===ke&&(we=L(we)),A(we,e.ADD_TAGS)),e.ADD_ATTR&&(Ae===Le&&(Ae=L(Ae)),A(Ae,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&A(We,e.ADD_URI_SAFE_ATTR),ze&&(we["#text"]=!0),Ne&&A(we,["html","head","body"]),we.table&&(A(we,["tbody"]),delete Se.tbody),i&&i(e),Xe=e)},Ye=A({},["mi","mo","mn","ms","mtext"]),Qe=A({},["foreignobject","desc","title","annotation-xml"]),$e=A({},E);A($e,x),A($e,R);var Ze=A({},D);A(Ze,N);var et="http://www.w3.org/1998/Math/MathML",tt="http://www.w3.org/2000/svg",nt="http://www.w3.org/1999/xhtml",ot=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:nt,tagName:"template"});var n=h(e.tagName),o=h(t.tagName);if(e.namespaceURI===tt)return t.namespaceURI===nt?"svg"===n:t.namespaceURI===et?"svg"===n&&("annotation-xml"===o||Ye[o]):Boolean($e[n]);if(e.namespaceURI===et)return t.namespaceURI===nt?"math"===n:t.namespaceURI===tt?"math"===n&&Qe[o]:Boolean(Ze[n]);if(e.namespaceURI===nt){if(t.namespaceURI===tt&&!Qe[o])return!1;if(t.namespaceURI===et&&!Ye[o])return!1;var r=A({},["title","style","font","a","script"]);return!Ze[n]&&(r[n]||!$e[n])}return!1},rt=function(e){p(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},it=function(e,t){try{p(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(n.removed,{attribute:null,from:t})}t.removeAttribute(e)},at=function(e){var t=void 0,n=void 0;if(Ie)e="<remove></remove>"+e;else{var o=g(e,/^[\r\n\t ]+/);n=o&&o[0]}var i=re?re.createHTML(e):e;try{t=(new Y).parseFromString(i,"text/html")}catch(e){}if(!t||!t.documentElement){var a=(t=se.createHTMLDocument("")).body;a.parentNode.removeChild(a.parentNode.firstElementChild),a.outerHTML=i}return e&&n&&t.body.insertBefore(r.createTextNode(n),t.body.childNodes[0]||null),le.call(t,Ne?"html":"body")[0]},st=function(e){return ce.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,(function(){return u.FILTER_ACCEPT}),!1)},ct=function(e){return!(e instanceof V||e instanceof J||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof k&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},lt=function(e){return"object"===(void 0===c?"undefined":G(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":G(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ut=function(e,t,o){me[e]&&f(me[e],(function(e){e.call(n,t,o,Xe)}))},dt=function(e){var t=void 0;if(ut("beforeSanitizeElements",e,null),ct(e))return rt(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return rt(e),!0;var o=h(e.nodeName);if(ut("uponSanitizeElement",e,{tagName:o,allowedTags:we}),!lt(e.firstElementChild)&&(!lt(e.content)||!lt(e.content.firstElementChild))&&T(/<[/\w]/g,e.innerHTML)&&T(/<[/\w]/g,e.textContent))return rt(e),!0;if(!we[o]||Se[o]){if(ze&&!Be[o])for(var r=ne(e),i=te(e),a=i.length-1;a>=0;--a)r.insertBefore(Z(i[a],!0),ee(e));return rt(e),!0}return e instanceof l&&!ot(e)?(rt(e),!0):"noscript"!==o&&"noembed"!==o||!T(/<\/no(script|embed)/i,e.innerHTML)?(De&&3===e.nodeType&&(t=e.textContent,t=v(t,pe," "),t=v(t,he," "),e.textContent!==t&&(p(n.removed,{element:e.cloneNode()}),e.textContent=t)),ut("afterSanitizeElements",e,null),!1):(rt(e),!0)},ft=function(e,t,n){if(je&&("id"===t||"name"===t)&&(n in r||n in Ve))return!1;if(xe&&T(ge,t));else if(Ee&&T(ve,t));else{if(!Ae[t]||_e[t])return!1;if(We[t]);else if(T(Te,v(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==y(n,"data:")||!Pe[e])if(Re&&!T(ye,v(n,be,"")));else if(n)return!1}return!0},mt=function(e){var t=void 0,o=void 0,r=void 0,i=void 0;ut("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ae};for(i=a.length;i--;){var c=t=a[i],l=c.name,u=c.namespaceURI;if(o=b(t.value),r=h(l),s.attrName=r,s.attrValue=o,s.keepAttr=!0,s.forceKeepAttr=void 0,ut("uponSanitizeAttribute",e,s),o=s.attrValue,!s.forceKeepAttr&&(it(l,e),s.keepAttr))if(T(/\/>/i,o))it(l,e);else{De&&(o=v(o,pe," "),o=v(o,he," "));var d=e.nodeName.toLowerCase();if(ft(d,r,o))try{u?e.setAttributeNS(u,l,o):e.setAttribute(l,o),m(n.removed)}catch(e){}}}ut("afterSanitizeAttributes",e,null)}},pt=function e(t){var n=void 0,o=st(t);for(ut("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)ut("uponSanitizeShadowNode",n,null),dt(n)||(n.content instanceof a&&e(n.content),mt(n));ut("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,r){var i=void 0,s=void 0,l=void 0,u=void 0,d=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!lt(e)){if("function"!=typeof e.toString)throw w("toString is not a function");if("string"!=typeof(e=e.toString()))throw w("dirty is not a string, aborting")}if(!n.isSupported){if("object"===G(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(lt(e))return t.toStaticHTML(e.outerHTML)}return e}if(Oe||Je(r),n.removed=[],"string"==typeof e&&(He=!1),He);else if(e instanceof c)1===(s=(i=at("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?i=s:i.appendChild(s);else{if(!Me&&!De&&!Ne&&-1===e.indexOf("<"))return re&&Ue?re.createHTML(e):e;if(!(i=at(e)))return Me?null:ie}i&&Ie&&rt(i.firstChild);for(var f=st(He?e:i);l=f.nextNode();)3===l.nodeType&&l===u||dt(l)||(l.content instanceof a&&pt(l.content),mt(l),u=l);if(u=null,He)return e;if(Me){if(Fe)for(d=ue.call(i.ownerDocument);i.firstChild;)d.appendChild(i.firstChild);else d=i;return Ce&&(d=de.call(o,d,!0)),d}var m=Ne?i.outerHTML:i.innerHTML;return De&&(m=v(m,pe," "),m=v(m,he," ")),re&&Ue?re.createHTML(m):m},n.setConfig=function(e){Je(e),Oe=!0},n.clearConfig=function(){Xe=null,Oe=!1},n.isValidAttribute=function(e,t,n){Xe||Je({});var o=h(e),r=h(t);return ft(o,r,n)},n.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],p(me[e],t))},n.removeHook=function(e){me[e]&&m(me[e])},n.removeHooks=function(e){me[e]&&(me[e]=[])},n.removeAllHooks=function(){me={}},n}()}()}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=document.querySelector.bind(document),t=document.querySelectorAll.bind(document);Node.prototype.on=window.on=function(e,t){this.addEventListener(e,t)},NodeList.prototype.__proto__=Array.prototype,NodeList.prototype.on=NodeList.prototype.addEventListener=function(e,t){this.forEach((function(n){n.on(e,t)}))};var o={init:function(){this.reviewButton=e(".store__action--feedback"),this.feedbackForm=e(".feedback"),this.closeButton=e(".close-feedback"),this.reviewButton&&this.feedbackForm&&this.setupEventListeners()},setupEventListeners:function(){var e=this.showForm.bind(this),t=this.hideForm.bind(this);this.reviewButton.on("click",e),this.closeButton.on("click",t)},showForm:function(){this.feedbackForm.classList.remove("hide"),document.body.classList.add("unscroll")},hideForm:function(){this.feedbackForm.classList.add("hide"),document.body.classList.remove("unscroll")}},r={init:function(){this.buttons=t(".toggle-form"),this.forms=t(".container--form"),this.buttons&&this.forms&&this.setupEventListeners()},setupEventListeners:function(){var e=this.toggleForm.bind(this);this.buttons.forEach((function(t){return t.addEventListener("click",e)}))},toggleForm:function(){this.forms.forEach((function(e){return e.classList.contains("hide")?e.classList.remove("hide"):e.classList.add("hide")}))}},i={init:function(){this.bookmarkForms=t(".bookmark"),this.bookmarkForms&&this.setupEventListeners()},setupEventListeners:function(){var e=this;this.bookmarkForms.forEach((function(t){return t.on("submit",e.toggleBookmark)}))},toggleBookmark:function(e){var t=this;e.preventDefault();var n=this.action;fetch(n,{method:"POST"}).then((function(e){t.querySelector(".icon").classList.toggle("icon--red")})).catch(console.error)}},a={init:function(){e(".form--restaurant")&&(this.addressInput=e(".form--restaurant")["location[address]"],this.longitudeInput=e(".form--restaurant")["location[coordinates][0]"],this.latitudeInput=e(".form--restaurant")["location[coordinates][1]"],this.addressInput&&this.longitudeInput&&this.setupEventListeners())},setupEventListeners:function(){var e=this.fetchCoords.bind(this);this.addressInput.on("blur",e)},fetchCoords:function(e){var t=this,n=e.target.value,o="https://geocode.search.hereapi.com/v1/geocode?q=".concat(n,"&apiKey=_xnhwmiBDL1j8TXuF5iJ0UNj91j4OzqrLKXtswUDeI8");fetch(o).then((function(e){return e.json()})).then((function(e){t.coords=e.items[0].position,t.fillCoords(t.coords)})).catch((function(e){return console.log(e)}))},fillCoords:function(e){var t=e.lat,n=e.lng;this.latitudeInput.value=t,this.longitudeInput.value=n}},s=n(856),c=n.n(s),l={init:function(){this.searchInput=e("#search"),this.searchResults=e(".search__results-box"),this.searchInput&&this.searchResults&&(this.searchResultsUl=this.searchResults.querySelector(".search__results"),this.setupEventListeners())},setupEventListeners:function(){var e=this.fetchResults.bind(this),t=this.handleKeyboardInputs.bind(this);this.searchInput.on("input",e),this.searchInput.on("keyup",t)},fetchResults:function(e){var t=this;e.target.value?(this.searchResults.style.display="block",fetch("/api/v1/search?q=".concat(e.target.value)).then((function(e){return e.json()})).then((function(n){n.length?t.searchResultsUl.innerHTML=c().sanitize(t.searchResultsHTML(n)):t.searchResultsUl.innerHTML=c().sanitize('<li class="search__result" style="padding: .25em .5em">No results for '.concat(e.target.value,"</li>"))})).catch((function(e){console.error(e)}))):this.searchResults.style.display="none"},searchResultsHTML:function(e){return e.map((function(e){return'\n      <li class="search__result">\n        <a class="search__link" href="/store/'.concat(e.slug,'" class="search__result">\n          <strong>').concat(e.name,"</strong>\n        </a>\n       </li>\n      ")})).join("")},handleKeyboardInputs:function(e){if([38,40,13].includes(e.keyCode)){var t,n="search__result--active",o=this.searchResults.querySelector(".".concat(n)),r=this.searchResults.querySelectorAll(".search__result");if(40===e.keyCode&&o)t=o.nextElementSibling||r[0];else if(40===e.keyCode)t=r[0];else if(38===e.keyCode&&o)t=o.previousElementSibling||r[r.length-1];else if(38===e.keyCode)t=r[r.length-1];else if(13===e.keyCode&&o.querySelector(".search__link").href)return void(window.location=o.querySelector(".search__link").href);o&&o.classList.remove(n),t.classList.add(n)}}},u={init:function(){this.deleteIcons=document.querySelectorAll(".icon--delete"),this.setUpEventListeners()},setUpEventListeners:function(){var e=this;this.deleteIcons.forEach((function(t){return t.onclick=e.deleteReview}))},deleteReview:function(){var e=this,t="/api/v1/review/".concat(this.dataset.id,"/delete");fetch(t,{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){e.closest(".review").remove()})).catch(console.error)}},d={init:function(){this.store=document.querySelector(".store__details"),this.store&&this.store.dataset&&(this.storeId=this.store.dataset.id,this.registerView())},registerView:function(){var e="/api/v1/store/".concat(this.storeId,"/views");fetch(e,{method:"POST"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch(console.error)}},f={init:function(){this.coordinates={},this.query="",this.url="#",this.locationInput=document.querySelector("#location-input"),this.locationSubmit=document.querySelector("#location-submit"),this.window=window,this.locationInput&&this.locationSubmit&&this.setUpEventListeners()},setUpEventListeners:function(){var e=this.fetchResults.bind(this),t=this.getGeolocation.bind(this);this.locationSubmit.addEventListener("click",e),this.locationInput.addEventListener("keydown",e),this.window.addEventListener("load",t)},fillAddress:function(e){this.locationInput.value=e},setQuery:function(){this.query=this.locationInput.value.trim()},setCoords:function(){var e=this;if(!this.query)return this.url="#",this.locationSubmit.href=this.url,!1;var t="https://geocode.search.hereapi.com/v1/geocode?q=".concat(this.query,"&apiKey=_xnhwmiBDL1j8TXuF5iJ0UNj91j4OzqrLKXtswUDeI8");fetch(t).then((function(e){return e.json()})).then((function(t){e.coordinates=t.items[0].position,e.url="/results/stores/near?lat=".concat(e.coordinates.lat,"&lng=").concat(e.coordinates.lng),e.locationSubmit.href=e.url,window.location.href=e.locationSubmit.href})).catch(console.error)},fetchResults:function(e){e.target===this.locationInput&&13!==e.keyCode||(e.target===this.locationSubmit&&e.preventDefault(),this.setQuery(),this.setCoords())},getGeolocation:function(){var e=this.fillAddress.bind(this),t=this.setCoords.bind(this),n=new H.service.Platform({apikey:"_xnhwmiBDL1j8TXuF5iJ0UNj91j4OzqrLKXtswUDeI8"}).getSearchService();navigator.geolocation?navigator.geolocation.getCurrentPosition((function(o){n.reverseGeocode({limit:1,at:o.coords.latitude+","+o.coords.longitude},(function(n){e(n.items[0].address.label),t()}),(function(e){console.error(e)}))})):console.error("Geolocation is not supported by this browser!")}};o.init(),r.init(),i.init(),a.init(),l.init(),u.init(),d.init(),f.init()}()}();
//# sourceMappingURL=App.bundle.js.map