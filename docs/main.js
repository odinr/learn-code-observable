!function(t){function e(e){for(var i,r,o=e[0],a=e[1],s=0,d=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);for(c&&c(e);d.length;)d.shift()()}var i={},n={1:0};function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],i=n[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,r){i=n[t]=[e,r]}));e.push(i[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(t){return r.p+""+t+"-f750e0fb07a20a5dbef2.js"}(t);var c=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(d);var i=n[t];if(0!==i){if(i){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,i[1](c)}n[t]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/learn-code-observable/",r.oe=function(t){throw console.error(t),t};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var c=a;r(r.s=17)}([function(t,e,i){"use strict";i.d(e,"c",(function(){return w})),i.d(e,"g",(function(){return O})),i.d(e,"f",(function(){return S})),i.d(e,"h",(function(){return A})),i.d(e,"i",(function(){return j})),i.d(e,"d",(function(){return C})),i.d(e,"e",(function(){return p.f})),i.d(e,"b",(function(){return P})),i.d(e,"a",(function(){return D}));var n=i(6),r=i(3);function o(t,e){const{element:{content:i},parts:n}=t,r=document.createTreeWalker(i,133,null,!1);let o=s(n),a=n[o],c=-1,d=0;const l=[];let p=null;for(;r.nextNode();){c++;const t=r.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(l.push(t),null===p&&(p=t)),null!==p&&d++;void 0!==a&&a.index===c;)a.index=null!==p?-1:a.index-d,o=s(n,o),a=n[o]}l.forEach(t=>t.parentNode.removeChild(t))}const a=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},s=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(Object(r.d)(e))return i}return-1};var c=i(9),d=i(7),l=i(11),p=i(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=(t,e)=>`${t}--${e}`;let h=!0;void 0===window.ShadyCSS?h=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),h=!1);const m=t=>e=>{const i=u(e.type,t);let n=d.a.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},d.a.set(i,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(r.f);if(o=n.keyString.get(a),void 0===o){const i=e.getTemplateElement();h&&window.ShadyCSS.prepareTemplateDom(i,t),o=new r.a(e,i),n.keyString.set(a,o)}return n.stringsArray.set(e.strings,o),o},g=["html","svg"],f=new Set,b=(t,e,i)=>{f.add(t);const n=i?i.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:c}=r;if(0===c)return void window.ShadyCSS.prepareTemplateStyles(n,t);const l=document.createElement("style");for(let t=0;t<c;t++){const e=r[t];e.parentNode.removeChild(e),l.textContent+=e.textContent}(t=>{g.forEach(e=>{const i=d.a.get(u(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),o(t,i)})})})(t);const p=n.content;i?function(t,e,i=null){const{element:{content:n},parts:r}=t;if(null==i)return void n.appendChild(e);const o=document.createTreeWalker(n,133,null,!1);let c=s(r),d=0,l=-1;for(;o.nextNode();){for(l++,o.currentNode===i&&(d=a(e),i.parentNode.insertBefore(e,i));-1!==c&&r[c].index===l;){if(d>0){for(;-1!==c;)r[c].index+=d,c=s(r,c);return}c=s(r,c)}}}(i,l,p.firstChild):p.insertBefore(l,p.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const h=p.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(!0),e.firstChild);else if(i){p.insertBefore(l,p.firstChild);const t=new Set;t.add(l),o(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const v={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},y=(t,e)=>e!==t&&(e==e||t==t),x={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y};class _ extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=x){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||x}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=y){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||v,r="function"==typeof n?n:n.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||v.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=x){const n=this.constructor,r=n._attributeNameForProperty(t,i);if(void 0!==r){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const n=this.constructor,r=n.getPropertyOptions(t);n._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}_.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const w=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),k=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function O(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):k(t,e)}function S(t){return O({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}function A(t){return(e,i)=>{const n={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==i?E(n,e,i):I(n,e)}}function j(t){return(e,i)=>{const n={async get(){return await this.updateComplete,this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==i?E(n,e,i):I(n,e)}}const E=(t,e,i)=>{Object.defineProperty(e,i,t)},I=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function C(t){return(e,i)=>void 0!==i?((t,e,i)=>{Object.assign(e[i],t)})(t,e,i):((t,e)=>Object.assign(Object.assign({},e),{finisher(i){Object.assign(i.prototype[e.key],t)}}))(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const F="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol();class T{constructor(t,e){if(e!==R)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(F?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const P=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof T)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new T(i,R)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const N={};class D extends _{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),n=[];i.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?F?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==N&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return N}}D.finalized=!0,D.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,o=c.a.has(e),a=h&&11===e.nodeType&&!!e.host,s=a&&!f.has(r),d=s?document.createDocumentFragment():e;if(Object(c.b)(t,d,Object.assign({templateFactory:m(r)},i)),s){const t=c.a.get(d);c.a.delete(d);const i=t.value instanceof l.a?t.value.template:void 0;b(r,d,i),Object(n.b)(e,e.firstChild),e.appendChild(d),c.a.set(e,t)}!o&&a&&window.ShadyCSS.styleElement(e.host)}},function(t,e,i){"use strict";i.d(e,"d",(function(){return r})),i.d(e,"a",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"b",(function(){return s}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};function r(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}var o=function(){return(o=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function a(t,e,i,n){var r,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a}function s(t,e,i,n){return new(i||(i=Promise))((function(r,o){function a(t){try{c(n.next(t))}catch(t){o(t)}}function s(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))}},function(t,e,i){"use strict";i.d(e,"e",(function(){return a.a})),i.d(e,"g",(function(){return s.b})),i.d(e,"i",(function(){return s.c})),i.d(e,"a",(function(){return n.b})),i.d(e,"b",(function(){return n.e})),i.d(e,"c",(function(){return n.g})),i.d(e,"h",(function(){return c.b})),i.d(e,"d",(function(){return d.c})),i.d(e,"f",(function(){return l})),i.d(e,"j",(function(){return p}));var n=i(4);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const r=new class{handleAttributeExpressions(t,e,i,r){const o=e[0];if("."===o){return new n.f(t,e.slice(1),i).parts}return"@"===o?[new n.d(t,e.slice(1),r.eventContext)]:"?"===o?[new n.c(t,e.slice(1),i)]:new n.a(t,e,i).parts}handleTextExpression(t){return new n.e(t)}};var o=i(10),a=i(8),s=i(6),c=(i(5),i(9)),d=(i(7),i(11),i(3));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const l=(t,...e)=>new o.b(t,e,"html",r),p=(t,...e)=>new o.a(t,e,"svg",r)},function(t,e,i){"use strict";i.d(e,"f",(function(){return n})),i.d(e,"g",(function(){return r})),i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return s})),i.d(e,"d",(function(){return d})),i.d(e,"c",(function(){return l})),i.d(e,"e",(function(){return p}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${n}--\x3e`,o=new RegExp(`${n}|${r}`),a="$lit$";class s{constructor(t,e){this.parts=[],this.element=e;const i=[],r=[],s=document.createTreeWalker(e.content,133,null,!1);let d=0,u=-1,h=0;const{strings:m,values:{length:g}}=t;for(;h<g;){const t=s.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)c(e[t].name,a)&&n++;for(;n-- >0;){const e=m[h],i=p.exec(e)[2],n=i.toLowerCase()+a,r=t.getAttribute(n);t.removeAttribute(n);const s=r.split(o);this.parts.push({type:"attribute",index:u,name:i,strings:s}),h+=s.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,r=e.split(o),s=r.length-1;for(let e=0;e<s;e++){let i,o=r[e];if(""===o)i=l();else{const t=p.exec(o);null!==t&&c(t[2],a)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-a.length)+t[3]),i=document.createTextNode(o)}n.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===r[s]?(n.insertBefore(l(),t),i.push(t)):t.data=r[s],h+=s}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&u!==d||(u++,e.insertBefore(l(),t)),d=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=r.pop()}for(const t of i)t.parentNode.removeChild(t)}}const c=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},d=t=>-1!==t.index,l=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,i){"use strict";i.d(e,"h",(function(){return d})),i.d(e,"a",(function(){return p})),i.d(e,"b",(function(){return u})),i.d(e,"e",(function(){return h})),i.d(e,"c",(function(){return m})),i.d(e,"f",(function(){return g})),i.d(e,"g",(function(){return f})),i.d(e,"d",(function(){return v}));var n=i(8),r=i(6),o=i(5),a=i(11),s=i(10),c=i(3);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const d=t=>null===t||!("object"==typeof t||"function"==typeof t),l=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class p{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new u(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(d(t)||!l(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o.a||d(t)&&t===this.value||(this.value=t,Object(n.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(n.b)(this.value);){const t=this.value;this.value=o.a,t(this)}this.value!==o.a&&this.committer.commit()}}class h{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.c)()),this.endNode=t.appendChild(Object(c.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Object(c.c)()),t.__insert(this.endNode=Object(c.c)())}insertAfterPart(t){t.__insert(this.startNode=Object(c.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o.a,t(this)}const t=this.__pendingValue;t!==o.a&&(d(t)?t!==this.value&&this.__commitText(t):t instanceof s.b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):l(t)?this.__commitIterable(t):t===o.b?(this.value=o.b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof a.a&&this.value.template===e)this.value.update(t.values);else{const i=new a.a(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const r of t)i=e[n],void 0===i&&(i=new h(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(r),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){Object(r.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class m{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o.a,t(this)}if(this.__pendingValue===o.a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=o.a}}class g extends p{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new f(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class f extends u{}let b=!1;(()=>{try{const t={get capture(){return b=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class v{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o.a,t(this)}if(this.__pendingValue===o.a)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=y(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=o.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const y=t=>t&&(b?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n={},r={}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"b",(function(){return o}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,i=null,n=null)=>{for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,n),e=i}},o=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}}},function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return o}));var n=i(3);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function r(t){let e=o.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},o.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(n.f);return i=e.keyString.get(r),void 0===i&&(i=new n.a(t,t.getTemplateElement()),e.keyString.set(r,i)),e.stringsArray.set(t.strings,i),i}const o=new Map},function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return o}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,r=t=>(...e)=>{const i=t(...e);return n.set(i,!0),i},o=t=>"function"==typeof t&&n.has(t)},function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return s}));var n=i(6),r=i(4),o=i(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=new WeakMap,s=(t,e,i)=>{let s=a.get(e);void 0===s&&(Object(n.b)(e,e.firstChild),a.set(e,s=new r.e(Object.assign({templateFactory:o.b},i))),s.appendInto(e)),s.setValue(t),s.commit()}},function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return s}));var n=i(6),r=i(3);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=` ${r.f} `;class a{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],a=t.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===t.indexOf("--\x3e",a+1);const s=r.e.exec(t);e+=null===s?t+(i?o:r.g):t.substr(0,s.index)+s[1]+s[2]+r.b+s[3]+r.f}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class s extends a{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),Object(n.c)(e,i.firstChild),t}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(6),r=i(3);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class o{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let a,s=0,c=0,d=o.nextNode();for(;s<i.length;)if(a=i[s],Object(r.d)(a)){for(;c<a.index;)c++,"TEMPLATE"===d.nodeName&&(e.push(d),o.currentNode=d.content),null===(d=o.nextNode())&&(o.currentNode=e.pop(),d=o.nextNode());if("node"===a.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(d.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,a.name,a.strings,this.options));s++}else this.__parts.push(void 0),s++;return n.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,i){(function(e){var i=function(t){var e=/\blang(?:uage)?-([\w-]+)\b/i,i=0,n={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof r?new r(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++i}),t.__id},clone:function t(e,i){var r,o,a=n.util.type(e);switch(i=i||{},a){case"Object":if(o=n.util.objId(e),i[o])return i[o];for(var s in r={},i[o]=r,e)e.hasOwnProperty(s)&&(r[s]=t(e[s],i));return r;case"Array":return o=n.util.objId(e),i[o]?i[o]:(r=[],i[o]=r,e.forEach((function(e,n){r[n]=t(e,i)})),r);default:return e}},getLanguage:function(t){for(;t&&!e.test(t.className);)t=t.parentElement;return t?(t.className.match(e)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var i in e)if(e[i].src==t)return e[i]}return null}}},languages:{extend:function(t,e){var i=n.util.clone(n.languages[t]);for(var r in e)i[r]=e[r];return i},insertBefore:function(t,e,i,r){var o=(r=r||n.languages)[t],a={};for(var s in o)if(o.hasOwnProperty(s)){if(s==e)for(var c in i)i.hasOwnProperty(c)&&(a[c]=i[c]);i.hasOwnProperty(s)||(a[s]=o[s])}var d=r[t];return r[t]=a,n.languages.DFS(n.languages,(function(e,i){i===d&&e!=t&&(this[e]=a)})),a},DFS:function t(e,i,r,o){o=o||{};var a=n.util.objId;for(var s in e)if(e.hasOwnProperty(s)){i.call(e,s,e[s],r||s);var c=e[s],d=n.util.type(c);"Object"!==d||o[a(c)]?"Array"!==d||o[a(c)]||(o[a(c)]=!0,t(c,i,s,o)):(o[a(c)]=!0,t(c,i,null,o))}}},plugins:{},highlightAll:function(t,e){n.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,i){var r={callback:i,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),n.hooks.run("before-all-elements-highlight",r);for(var o,a=0;o=r.elements[a++];)n.highlightElement(o,!0===e,r.callback)},highlightElement:function(i,r,o){var a=n.util.getLanguage(i),s=n.languages[a];i.className=i.className.replace(e,"").replace(/\s+/g," ")+" language-"+a;var c=i.parentNode;c&&"pre"===c.nodeName.toLowerCase()&&(c.className=c.className.replace(e,"").replace(/\s+/g," ")+" language-"+a);var d={element:i,language:a,grammar:s,code:i.textContent};function l(t){d.highlightedCode=t,n.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,n.hooks.run("after-highlight",d),n.hooks.run("complete",d),o&&o.call(d.element)}if(n.hooks.run("before-sanity-check",d),!d.code)return n.hooks.run("complete",d),void(o&&o.call(d.element));if(n.hooks.run("before-highlight",d),d.grammar)if(r&&t.Worker){var p=new Worker(n.filename);p.onmessage=function(t){l(t.data)},p.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else l(n.highlight(d.code,d.grammar,d.language));else l(n.util.encode(d.code))},highlight:function(t,e,i){var o={code:t,grammar:e,language:i};return n.hooks.run("before-tokenize",o),o.tokens=n.tokenize(o.code,o.grammar),n.hooks.run("after-tokenize",o),r.stringify(n.util.encode(o.tokens),o.language)},tokenize:function(t,e){var i=e.rest;if(i){for(var c in i)e[c]=i[c];delete e.rest}var d=new o;return a(d,d.head,t),function t(e,i,o,c,d,l,p){for(var u in o)if(o.hasOwnProperty(u)&&o[u]){var h=o[u];h=Array.isArray(h)?h:[h];for(var m=0;m<h.length;++m){if(p&&p==u+","+m)return;var g=h[m],f=g.inside,b=!!g.lookbehind,v=!!g.greedy,y=0,x=g.alias;if(v&&!g.pattern.global){var _=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,_+"g")}g=g.pattern||g;for(var w=c.next,k=d;w!==i.tail;k+=w.value.length,w=w.next){var O=w.value;if(i.length>e.length)return;if(!(O instanceof r)){var S=1;if(v&&w!=i.tail.prev){if(g.lastIndex=k,!(C=g.exec(e)))break;var A=C.index+(b&&C[1]?C[1].length:0),j=C.index+C[0].length,E=k;for(E+=w.value.length;A>=E;)w=w.next,E+=w.value.length;if(E-=w.value.length,k=E,w.value instanceof r)continue;for(var I=w;I!==i.tail&&(E<j||"string"==typeof I.value&&!I.prev.value.greedy);I=I.next)S++,E+=I.value.length;S--,O=e.slice(k,E),C.index-=k}else{g.lastIndex=0;var C=g.exec(O)}if(C){b&&(y=C[1]?C[1].length:0);A=C.index+y,C=C[0].slice(y),j=A+C.length;var F=O.slice(0,A),R=O.slice(j),T=w.prev;F&&(T=a(i,T,F),k+=F.length),s(i,T,S);var P=new r(u,f?n.tokenize(C,f):C,x,C,v);if(w=a(i,T,P),R&&a(i,w,R),S>1&&t(e,i,o,w.prev,k,!0,u+","+m),l)break}else if(l)break}}}}}(t,d,e,d.head,0),function(t){var e=[],i=t.head.next;for(;i!==t.tail;)e.push(i.value),i=i.next;return e}(d)},hooks:{all:{},add:function(t,e){var i=n.hooks.all;i[t]=i[t]||[],i[t].push(e)},run:function(t,e){var i=n.hooks.all[t];if(i&&i.length)for(var r,o=0;r=i[o++];)r(e)}},Token:r};function r(t,e,i,n,r){this.type=t,this.content=e,this.alias=i,this.length=0|(n||"").length,this.greedy=!!r}function o(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function a(t,e,i){var n=e.next,r={value:i,prev:e,next:n};return e.next=r,n.prev=r,t.length++,r}function s(t,e,i){for(var n=e.next,r=0;r<i&&n!==t.tail;r++)n=n.next;e.next=n,n.prev=e,t.length-=r}if(t.Prism=n,r.stringify=function t(e,i){if("string"==typeof e)return e;if(Array.isArray(e)){var r="";return e.forEach((function(e){r+=t(e,i)})),r}var o={type:e.type,content:t(e.content,i),tag:"span",classes:["token",e.type],attributes:{},language:i},a=e.alias;a&&(Array.isArray(a)?Array.prototype.push.apply(o.classes,a):o.classes.push(a)),n.hooks.run("wrap",o);var s="";for(var c in o.attributes)s+=" "+c+'="'+(o.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+s+">"+o.content+"</"+o.tag+">"},!t.document)return t.addEventListener?(n.disableWorkerMessageHandler||t.addEventListener("message",(function(e){var i=JSON.parse(e.data),r=i.language,o=i.code,a=i.immediateClose;t.postMessage(n.highlight(o,n.languages[r],r)),a&&t.close()}),!1),n):n;var c=n.util.currentScript();function d(){n.manual||n.highlightAll()}if(c&&(n.filename=c.src,c.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){var l=document.readyState;"loading"===l||"interactive"===l&&c&&c.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});t.exports&&(t.exports=i),void 0!==e&&(e.Prism=i),i.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.hooks.add("wrap",(function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))})),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(t,e){var n={};n["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[e]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+e]={pattern:/[\s\S]+/,inside:i.languages[e]};var o={};o[t]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return t})),"i"),lookbehind:!0,greedy:!0,inside:r},i.languages.insertBefore("markup","cdata",o)}}),i.languages.xml=i.languages.extend("markup",{}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,function(t){var e=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+e.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+e.source+")*?(?=\\s*\\{)"),string:{pattern:e,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var i=t.languages.markup;i&&(i.tag.addInlined("style","css"),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:i.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},i.tag))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&i.languages.markup.tag.addInlined("script","javascript"),i.languages.js=i.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(t){t=t||document;var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(t.querySelectorAll("pre[data-src]")).forEach((function(t){if(!t.hasAttribute("data-src-loaded")){for(var n,r=t.getAttribute("data-src"),o=t,a=/\blang(?:uage)?-([\w-]+)\b/i;o&&!a.test(o.className);)o=o.parentNode;if(o&&(n=(t.className.match(a)||[,""])[1]),!n){var s=(r.match(/\.(\w+)$/)||[,""])[1];n=e[s]||s}var c=document.createElement("code");c.className="language-"+n,t.textContent="",c.textContent="Loading…",t.appendChild(c);var d=new XMLHttpRequest;d.open("GET",r,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(c.textContent=d.responseText,i.highlightElement(c),t.setAttribute("data-src-loaded","")):d.status>=400?c.textContent="✖ Error "+d.status+" while fetching file: "+d.statusText:c.textContent="✖ Error: File does not exist or is empty")},d.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,i(15))},function(t,e,i){"use strict";i.d(e,"a",(function(){return p}));var n=i(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const r=(t,e)=>{const i=t.startNode.parentNode,r=void 0===e?t.endNode:e.startNode,o=i.insertBefore(Object(n.d)(),r);i.insertBefore(Object(n.d)(),r);const a=new n.b(t.options);return a.insertAfterNode(o),a},o=(t,e)=>(t.setValue(e),t.commit(),t),a=(t,e,i)=>{const r=t.startNode.parentNode,o=i?i.startNode:t.endNode,a=e.endNode.nextSibling;a!==o&&Object(n.i)(r,e.startNode,a,o)},s=t=>{Object(n.g)(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},c=(t,e,i)=>{const n=new Map;for(let r=e;r<=i;r++)n.set(t[r],r);return n},d=new WeakMap,l=new WeakMap,p=Object(n.e)((t,e,i)=>{let p;return void 0===i?i=e:void 0!==e&&(p=e),e=>{if(!(e instanceof n.b))throw new Error("repeat can only be used in text bindings");const u=d.get(e)||[],h=l.get(e)||[],m=[],g=[],f=[];let b,v,y=0;for(const e of t)f[y]=p?p(e,y):y,g[y]=i(e,y),y++;let x=0,_=u.length-1,w=0,k=g.length-1;for(;x<=_&&w<=k;)if(null===u[x])x++;else if(null===u[_])_--;else if(h[x]===f[w])m[w]=o(u[x],g[w]),x++,w++;else if(h[_]===f[k])m[k]=o(u[_],g[k]),_--,k--;else if(h[x]===f[k])m[k]=o(u[x],g[k]),a(e,u[x],m[k+1]),x++,k--;else if(h[_]===f[w])m[w]=o(u[_],g[w]),a(e,u[_],u[x]),_--,w++;else if(void 0===b&&(b=c(f,w,k),v=c(h,x,_)),b.has(h[x]))if(b.has(h[_])){const t=v.get(f[w]),i=void 0!==t?u[t]:null;if(null===i){const t=r(e,u[x]);o(t,g[w]),m[w]=t}else m[w]=o(i,g[w]),a(e,i,u[x]),u[t]=null;w++}else s(u[_]),_--;else s(u[x]),x++;for(;w<=k;){const t=r(e,m[k+1]);o(t,g[w]),m[w++]=t}for(;x<=_;){const t=u[x++];null!==t&&s(t)}d.set(e,m),l.set(e,f)}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return At}));var n=i(0),r=i(13),o=i(2);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class a{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const s=new WeakMap,c=Object(o.e)(t=>e=>{if(!(e instanceof o.a)||e instanceof o.c||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:n}=i;let r=s.get(e);void 0===r&&(n.setAttribute("class",i.strings.join(" ")),s.set(e,r=new Set));const c=n.classList||new a(n);r.forEach(e=>{e in t||(c.remove(e),r.delete(e))});for(const e in t){const i=t[e];i!=r.has(e)&&(i?(c.add(e),r.add(e)):(c.remove(e),r.delete(e)))}"function"==typeof c.commit&&c.commit()});var d=i(4);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const l=new WeakMap,p=Object(o.e)((...t)=>e=>{let i=l.get(e);void 0===i&&(i={lastRenderedIndex:2147483647,values:[]},l.set(e,i));const n=i.values;let r=n.length;i.values=t;for(let o=0;o<t.length&&!(o>i.lastRenderedIndex);o++){const a=t[o];if(Object(d.h)(a)||"function"!=typeof a.then){e.setValue(a),i.lastRenderedIndex=o;break}o<r&&a===n[o]||(i.lastRenderedIndex=2147483647,r=0,Promise.resolve(a).then(t=>{const n=i.values.indexOf(a);n>-1&&n<i.lastRenderedIndex&&(i.lastRenderedIndex=n,e.setValue(t),e.commit())}))}});var u=i(1);
/**
 * @license
 * Copyright 2018 Google Inc.
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
 * THE SOFTWARE.
 */function h(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const m=t=>t.nodeType===Node.ELEMENT_NODE;let g=!1;const f=()=>{},b={get passive(){return g=!0,!1}};document.addEventListener("x",f,b),document.removeEventListener("x",f);const v=(t=window.document)=>{let e=t.activeElement;const i=[];if(!e)return i;for(;e&&(i.push(e),e.shadowRoot);)e=e.shadowRoot.activeElement;return i};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class y extends n.a{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}const x=t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,i)=>e.constructor._observers.set(i,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)})}}e.constructor._observers.set(i,t)}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,_=new WeakMap,w=Object(o.e)(t=>e=>{const i=_.get(e);if(void 0===t&&e instanceof o.a){if(void 0!==i||!_.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==i&&e.setValue(t);_.set(e,t)});
/**
 * @license
 * Copyright 2016 Google Inc.
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
 * THE SOFTWARE.
 */
var k=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),O="mdc-list-item",S={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+O+" button:not(:disabled),\n    ."+O+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+O+" button:not(:disabled),\n    ."+O+" a,\n    ."+O+' input[type="radio"]:not(:disabled),\n    .'+O+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'},A={UNSET_INDEX:-1};
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
const j=["input","button","textarea","select"];function E(t){return t instanceof Set}const I=t=>{const e=t===A.UNSET_INDEX?new Set:t;return E(e)?new Set(e):new Set([e])};class C extends k{constructor(t){super(Object.assign(Object.assign({},C.defaultAdapter),t)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=A.UNSET_INDEX,this.focusedItemIndex_=A.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return S}static get numbers(){return A}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(t){this.wrapFocus_=t}setMulti(t){this.isMulti_=t;const e=this.selectedIndex_;if(t){if(!E(e)){const t=e===A.UNSET_INDEX;this.selectedIndex_=t?new Set:new Set([e])}}else if(E(e))if(e.size){const t=Array.from(e).sort();this.selectedIndex_=t[0]}else this.selectedIndex_=A.UNSET_INDEX}setVerticalOrientation(t){this.isVertical_=t}setUseActivatedClass(t){this.useActivatedClass_=t}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(t){this.isIndexValid_(t)&&(this.isMulti_?this.setMultiSelectionAtIndex_(I(t)):this.setSingleSelectionAtIndex_(t))}handleFocusIn(t,e){e>=0&&this.adapter_.setTabIndexForElementIndex(e,0)}handleFocusOut(t,e){e>=0&&this.adapter_.setTabIndexForElementIndex(e,-1),setTimeout(()=>{this.adapter_.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()},0)}handleKeydown(t,e,i){const n="ArrowLeft"===t.key||37===t.keyCode,r="ArrowUp"===t.key||38===t.keyCode,o="ArrowRight"===t.key||39===t.keyCode,a="ArrowDown"===t.key||40===t.keyCode,s="Home"===t.key||36===t.keyCode,c="End"===t.key||35===t.keyCode,d="Enter"===t.key||13===t.keyCode,l="Space"===t.key||32===t.keyCode;if(this.adapter_.isRootFocused())return void(r||c?(t.preventDefault(),this.focusLastElement()):(a||s)&&(t.preventDefault(),this.focusFirstElement()));let p,u=this.adapter_.getFocusedElementIndex();if(!(-1===u&&(u=i,u<0))){if(this.isVertical_&&a||!this.isVertical_&&o)this.preventDefaultEvent_(t),p=this.focusNextElement(u);else if(this.isVertical_&&r||!this.isVertical_&&n)this.preventDefaultEvent_(t),p=this.focusPrevElement(u);else if(s)this.preventDefaultEvent_(t),p=this.focusFirstElement();else if(c)this.preventDefaultEvent_(t),p=this.focusLastElement();else if((d||l)&&e){const e=t.target;if(e&&"A"===e.tagName&&d)return;this.preventDefaultEvent_(t),this.setSelectedIndexOnAction_(u,!0)}this.focusedItemIndex_=u,void 0!==p&&(this.setTabindexAtIndex_(p),this.focusedItemIndex_=p)}}handleSingleSelection(t,e,i){t!==A.UNSET_INDEX&&(this.setSelectedIndexOnAction_(t,e,i),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)}focusNextElement(t){let e=t+1;if(e>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return t;e=0}return this.adapter_.focusItemAtIndex(e),e}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter_.getListItemCount()-1}return this.adapter_.focusItemAtIndex(e),e}focusFirstElement(){return this.adapter_.focusItemAtIndex(0),0}focusLastElement(){const t=this.adapter_.getListItemCount()-1;return this.adapter_.focusItemAtIndex(t),t}setEnabled(t,e){this.isIndexValid_(t)&&this.adapter_.setDisabledStateForElementIndex(t,!e)}preventDefaultEvent_(t){const e=(""+t.target.tagName).toLowerCase();-1===j.indexOf(e)&&t.preventDefault()}setSingleSelectionAtIndex_(t,e=!0){this.selectedIndex_!==t&&(this.selectedIndex_!==A.UNSET_INDEX&&(this.adapter_.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(this.selectedIndex_,!1)),e&&this.adapter_.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!0),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t,this.adapter_.notifySelected(t))}setMultiSelectionAtIndex_(t,e=!0){const i=((t,e)=>{const i=Array.from(t),n=Array.from(e),r={added:[],removed:[]},o=i.sort(),a=n.sort();let s=0,c=0;for(;s<o.length||c<a.length;){const t=o[s],e=a[c];t!==e?void 0!==t&&(void 0===e||t<e)?(r.removed.push(t),s++):void 0!==e&&(void 0===t||e<t)&&(r.added.push(e),c++):(s++,c++)}return r})(I(this.selectedIndex_),t);if(i.removed.length||i.added.length){for(const t of i.removed)e&&this.adapter_.setSelectedStateForElementIndex(t,!1),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!1);for(const t of i.added)e&&this.adapter_.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!0);this.selectedIndex_=t,this.adapter_.notifySelected(t,i)}}setAriaForSingleSelectionAtIndex_(t){this.selectedIndex_===A.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter_.getAttributeForElementIndex(t,S.ARIA_CURRENT));const e=null!==this.ariaCurrentAttrValue_,i=e?S.ARIA_CURRENT:S.ARIA_SELECTED;this.selectedIndex_!==A.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,i,"false");const n=e?this.ariaCurrentAttrValue_:"true";this.adapter_.setAttributeForElementIndex(t,i,n)}setTabindexAtIndex_(t){this.focusedItemIndex_===A.UNSET_INDEX&&0!==t?this.adapter_.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==t&&this.adapter_.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter_.setTabIndexForElementIndex(t,0)}setTabindexToFirstSelectedItem_(){let t=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==A.UNSET_INDEX?t=this.selectedIndex_:E(this.selectedIndex_)&&this.selectedIndex_.size>0&&(t=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(t)}isIndexValid_(t){if(t instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===t.size)return!0;{let e=!1;for(const i of t)if(e=this.isIndexInRange_(i),e)break;return e}}if("number"==typeof t){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return t===A.UNSET_INDEX||this.isIndexInRange_(t)}return!1}isIndexInRange_(t){const e=this.adapter_.getListItemCount();return t>=0&&t<e}setSelectedIndexOnAction_(t,e,i){if(this.adapter_.getDisabledStateForElementIndex(t))return;let n=t;if(this.isMulti_&&(n=new Set([t])),this.isIndexValid_(n)){if(this.isMulti_)this.toggleMultiAtIndex(t,i,e);else if(e||i)this.setSingleSelectionAtIndex_(t,e);else{this.selectedIndex_===t&&this.setSingleSelectionAtIndex_(A.UNSET_INDEX)}e&&this.adapter_.notifyAction(t)}}toggleMultiAtIndex(t,e,i=!0){let n=!1;n=void 0===e?!this.adapter_.getSelectedStateForElementIndex(t):e;const r=I(this.selectedIndex_);n?r.add(t):r.delete(t),this.setMultiSelectionAtIndex_(r,i)}}var F=C;
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const R=t=>t.hasAttribute("mwc-list-item");class T extends y{constructor(){super(...arguments),this.mdcAdapter=null,this.mdcFoundationClass=F,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.innerAriaLabel=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.items_=[]}get assignedElements(){const t=this.slotElement;return t?t.assignedNodes({flatten:!0}).filter(m):[]}get items(){return this.items_}updateItems(){const t=this.assignedElements,e=[];for(const i of t)R(i)&&e.push(i),i.hasAttribute("divider")&&!i.hasAttribute("role")&&i.setAttribute("role","separator");this.items_=e;const i=new Set;if(this.items_.forEach((t,e)=>{this.itemRoles?t.setAttribute("role",this.itemRoles):t.removeAttribute("role"),t.selected&&i.add(e)}),this.multi)this.select(i);else{const t=i.size?i.entries().next().value[1]:-1;this.select(t)}}get selected(){const t=this.index;if(!E(t))return-1===t?null:this.items[t];const e=[];for(const i of t)e.push(this.items[i]);return e}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const t=null===this.innerRole?void 0:this.innerRole,e=null===this.innerAriaLabel?void 0:this.innerAriaLabel,i=this.rootTabbable?"0":"-1";return n.e`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${w(t)}"
          aria-label="${w(e)}"
          class="mdc-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
      </ul>
    `}firstUpdated(){super.firstUpdated(),this.items.length||(this.mdcFoundation.setMulti(this.multi),this.layout())}onFocusIn(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusIn(t,e)}}onFocusOut(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusOut(t,e)}}onKeydown(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t),i=t.target,n=R(i);this.mdcFoundation.handleKeydown(t,n,e)}}onRequestSelected(t){if(this.mdcFoundation){const e=this.getIndexOfTarget(t);if(-1===e)return;if(this.items[e].disabled)return;const i=t.detail.selected,n=t.detail.source;this.mdcFoundation.handleSingleSelection(e,"interaction"===n,i),t.stopPropagation()}}getIndexOfTarget(t){const e=this.items,i=t.composedPath();for(const t of i){let i=-1;if(m(t)&&R(t)&&(i=e.indexOf(t)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:()=>{if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const t=v();if(!t.length)return-1;for(let e=t.length-1;e>=0;e--){const i=t[e];if(R(i))return this.items.indexOf(i)}return-1},getAttributeForElementIndex:(t,e)=>{if(!this.mdcRoot)return"";const i=this.items[t];return i?i.getAttribute(e):""},setAttributeForElementIndex:(t,e,i)=>{if(!this.mdcRoot)return;const n=this.items[t];n&&n.setAttribute(e,i)},focusItemAtIndex:t=>{const e=this.items[t];e&&e.focus()},setTabIndexForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.tabindex=e)},notifyAction:t=>{const e={bubbles:!0,composed:!0};e.detail={index:t};const i=new CustomEvent("action",e);this.dispatchEvent(i)},notifySelected:(t,e)=>{const i={bubbles:!0,composed:!0};i.detail={index:t,diff:e};const n=new CustomEvent("selected",i);this.dispatchEvent(n)},isFocusInsideList:()=>(t=>{const e=v();if(!e.length)return!1;const i=e[e.length-1],n=new Event("check-if-focused",{bubbles:!0,composed:!0});let r=[];const o=t=>{r=t.composedPath()};return document.body.addEventListener("check-if-focused",o),i.dispatchEvent(n),document.body.removeEventListener("check-if-focused",o),-1!==r.indexOf(t)})(this),isRootFocused:()=>{const t=this.mdcRoot;return t.getRootNode().activeElement===t},setDisabledStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.disabled=e)},getDisabledStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.disabled},setSelectedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.selected=e)},getSelectedStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.selected},setActivatedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.activated=e)}},this.mdcAdapter}selectUi(t,e=!1){const i=this.items[t];i&&(i.selected=!0,i.activated=e)}deselectUi(t){const e=this.items[t];e&&(e.selected=!1,e.activated=!1)}select(t){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(t)}toggle(t,e){this.multi&&this.mdcFoundation.toggleMultiAtIndex(t,e)}onListItemConnected(t){const e=t.target;this.layout(-1===this.items.indexOf(e))}layout(t=!0){t&&this.updateItems();const e=this.items[0];for(const t of this.items)t.tabindex=-1;e&&(this.noninteractive?this.previousTabindex||(this.previousTabindex=e):e.tabindex=0)}focus(){const t=this.mdcRoot;t&&t.focus()}blur(){const t=this.mdcRoot;t&&t.blur()}}Object(u.c)([Object(n.h)(".mdc-list")],T.prototype,"mdcRoot",void 0),Object(u.c)([Object(n.h)("slot")],T.prototype,"slotElement",void 0),Object(u.c)([Object(n.g)({type:Boolean}),x((function(t){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(t)}))],T.prototype,"activatable",void 0),Object(u.c)([Object(n.g)({type:Boolean}),x((function(t,e){this.mdcFoundation&&this.mdcFoundation.setMulti(t),void 0!==e&&this.layout()}))],T.prototype,"multi",void 0),Object(u.c)([Object(n.g)({type:Boolean}),x((function(t){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(t)}))],T.prototype,"wrapFocus",void 0),Object(u.c)([Object(n.g)({type:String}),x((function(t,e){void 0!==e&&this.updateItems()}))],T.prototype,"itemRoles",void 0),Object(u.c)([Object(n.g)({type:String})],T.prototype,"innerRole",void 0),Object(u.c)([Object(n.g)({type:String})],T.prototype,"innerAriaLabel",void 0),Object(u.c)([Object(n.g)({type:Boolean})],T.prototype,"rootTabbable",void 0),Object(u.c)([Object(n.g)({type:Boolean,reflect:!0}),x((function(t){const e=this.slotElement;if(t&&e){const t=function(t,e){for(const i of t.assignedNodes({flatten:!0}))if(m(i)){const t=i;if(h(t,e))return t}return null}(e,'[tabindex="0"]');this.previousTabindex=t,t&&t.setAttribute("tabindex","-1")}else!t&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],T.prototype,"noninteractive",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const P=n.b`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let N=class extends T{};N.styles=P,N=Object(u.c)([Object(n.c)("mwc-list")],N);
/**
 * @license
 * Copyright 2016 Google Inc.
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
 * THE SOFTWARE.
 */
var D={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},z={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},M={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
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
 * THE SOFTWARE.
 */
var H=["touchstart","pointerdown","mousedown","keydown"],L=["touchend","pointerup","mouseup","contextmenu"],$=[],V=function(t){function e(i){var n=t.call(this,Object(u.a)(Object(u.a)({},e.defaultAdapter),i))||this;return n.activationAnimationHasEnded_=!1,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.fgScale_="0",n.frame_={width:0,height:0},n.initialSize_=0,n.layoutFrame_=0,n.maxRadius_=0,n.unboundedCoords_={left:0,top:0},n.activationState_=n.defaultActivationState_(),n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.activateHandler_=function(t){return n.activate_(t)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n}return Object(u.d)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return D},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return z},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return M},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var n=e.cssClasses,r=n.ROOT,o=n.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.addClass(r),t.adapter_.isUnbounded()&&(t.adapter_.addClass(o),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,n=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.removeClass(n),t.adapter_.removeClass(r),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(i):this.adapter_.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(H.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):L.forEach((function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;H.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),L.forEach((function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,i=e.strings;Object.keys(i).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(i[e],null)}))},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var n=this.previousActivationEvent_;if(!(n&&void 0!==t&&n.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&$.length>0&&$.some((function(t){return e.adapter_.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&($.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){$=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive_(t),i.wasElementMadeActive&&e.animateActivation_()),i.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,i=e.strings,n=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var d="",l="";if(!this.adapter_.isUnbounded()){var p=this.getFgTranslationCoordinates_(),u=p.startPoint,h=p.endPoint;d=u.x+"px, "+u.y+"px",l=h.x+"px, "+h.y+"px"}this.adapter_.updateCssVariable(n,d),this.adapter_.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),c)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,i=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var n,r,o=e.x,a=e.y,s=o+i.left,c=a+i.top;if("touchstart"===t.type){var d=t;n=d.changedTouches[0].pageX-s,r=d.changedTouches[0].pageY-c}else{var l=t;n=l.pageX-s,r=l.pageY-c}return{x:n,y:r}}(i,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,n=this.activationState_,r=n.hasDeactivationUXRun,o=n.isActivated;(r||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter_.removeClass(i)}),M.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var i=Object(u.a)({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(i)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(i),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var i=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?i:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING;var n=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter_.isUnbounded()&&n%2!=0?this.initialSize_=n-1:this.initialSize_=n,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,i=t.VAR_FG_SIZE,n=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(i,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))},e}(k);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const U=new WeakMap,B=Object(o.e)(t=>e=>{if(!(e instanceof o.a)||e instanceof o.c||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:n}=i.element;let r=U.get(e);void 0===r&&(n.cssText=i.strings.join(" "),U.set(e,r=new Set)),r.forEach(e=>{e in t||(r.delete(e),-1===e.indexOf("-")?n[e]=null:n.removeProperty(e))});for(const e in t)r.add(e),-1===e.indexOf("-")?n[e]=t[e]:n.setProperty(e,t[e])});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class q extends y{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=V}get isActive(){return(this.parentElement||this).matches(":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation(()=>{this.mdcFoundation.activate(t)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}render(){const t={"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,hover:this.hovering,primary:this.primary,accent:this.accent,disabled:this.disabled,activated:this.activated,selected:this.selected};return n.e`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${c(t)}"
          style="${B({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}Object(u.c)([Object(n.h)(".mdc-ripple-surface")],q.prototype,"mdcRoot",void 0),Object(u.c)([Object(n.g)({type:Boolean})],q.prototype,"primary",void 0),Object(u.c)([Object(n.g)({type:Boolean})],q.prototype,"accent",void 0),Object(u.c)([Object(n.g)({type:Boolean})],q.prototype,"unbounded",void 0),Object(u.c)([Object(n.g)({type:Boolean})],q.prototype,"disabled",void 0),Object(u.c)([Object(n.g)({type:Boolean})],q.prototype,"activated",void 0),Object(u.c)([Object(n.g)({type:Boolean})],q.prototype,"selected",void 0),Object(u.c)([Object(n.f)()],q.prototype,"hovering",void 0),Object(u.c)([Object(n.f)()],q.prototype,"bgFocused",void 0),Object(u.c)([Object(n.f)()],q.prototype,"fgActivation",void 0),Object(u.c)([Object(n.f)()],q.prototype,"fgDeactivation",void 0),Object(u.c)([Object(n.f)()],q.prototype,"fgScale",void 0),Object(u.c)([Object(n.f)()],q.prototype,"fgSize",void 0),Object(u.c)([Object(n.f)()],q.prototype,"translateStart",void 0),Object(u.c)([Object(n.f)()],q.prototype,"translateEnd",void 0),Object(u.c)([Object(n.f)()],q.prototype,"leftPos",void 0),Object(u.c)([Object(n.f)()],q.prototype,"topPos",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const G=n.b`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block;position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none}.primary{--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}.accent{--mdc-ripple-color: var(--mdc-theme-secondary, #018786)}.mdc-ripple-surface{top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden;--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface.hover::before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{opacity:.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface.activated::before{opacity:.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface.activated.hover::before{opacity:.16;opacity:calc(var(--mdc-ripple-hover-opacity, 0.04) + var(--mdc-ripple-activated-opacity, 0.12))}.mdc-ripple-surface.activated.mdc-ripple-upgraded--background-focused::before{opacity:.24;opacity:calc(var(--mdc-ripple-focus-opacity, 0.12) + var(--mdc-ripple-activated-opacity, 0.12))}.mdc-ripple-surface.activated{--mdc-ripple-press-opacity: calc(var(--mdc-ripple-press-opacity, 0.12) + 0.12)}.mdc-ripple-surface.selected::before{opacity:.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface.selected.hover::before{opacity:.12;opacity:calc(var(--mdc-ripple-hover-opacity, 0.04) + var(--mdc-ripple-selected-opacity, 0.08))}.mdc-ripple-surface.selected.mdc-ripple-upgraded--background-focused::before{opacity:.2;opacity:calc(var(--mdc-ripple-focus-opacity, 0.12) + var(--mdc-ripple-selected-opacity, 0.08))}.mdc-ripple-surface.selected{--mdc-ripple-press-opacity: calc(var(--mdc-ripple-press-opacity, 0.12) + 0.08)}.mdc-ripple-surface.disabled{--mdc-ripple-color: transparent}`;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let W=class extends q{};W.styles=G,W=Object(u.c)([Object(n.c)("mwc-ripple")],W);
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class X{constructor(t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */class K extends n.a{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new X(()=>(this.shouldRenderRipple=!0,this.ripple)),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:this.rippleHandlers.startPress},{target:this,eventNames:["mouseup","touchend"],cb:this.rippleHandlers.endPress}]}get text(){const t=this.textContent;return t?t.trim():""}render(){const t=this.renderText(),e=this.graphic?this.renderGraphic():n.e``,i=this.hasMeta?this.renderMeta():n.e``;return n.e`
      ${this.renderRipple()}
      ${e}
      ${t}
      ${i}`}renderRipple(){return this.shouldRenderRipple?n.e`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`:this.activated?n.e`<div class="fake-activated-ripple"></div>`:n.e``}renderGraphic(){return n.e`
      <span class="mdc-list-item__graphic material-icons">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return n.e`
      <span class="mdc-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const t=this.twoline?this.renderTwoline():this.renderSingleLine();return n.e`
      <span class="mdc-list-item__text">
        ${t}
      </span>`}renderSingleLine(){return n.e`<slot></slot>`}renderTwoline(){return n.e`
      <span class="mdc-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}fireRequestSelected(t,e){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:e,selected:t}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const t of this.listeners)for(const e of t.eventNames)t.target.addEventListener(e,t.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const t of this.listeners)for(const e of t.eventNames)t.target.removeEventListener(e,t.cb)}firstUpdated(){this.dispatchEvent(new Event("list-item-rendered",{bubbles:!0,composed:!0}))}}Object(u.c)([Object(n.h)("slot")],K.prototype,"slotElement",void 0),Object(u.c)([Object(n.i)("mwc-ripple")],K.prototype,"ripple",void 0),Object(u.c)([Object(n.g)({type:String})],K.prototype,"value",void 0),Object(u.c)([Object(n.g)({type:String,reflect:!0})],K.prototype,"group",void 0),Object(u.c)([Object(n.g)({type:Number,reflect:!0})],K.prototype,"tabindex",void 0),Object(u.c)([Object(n.g)({type:Boolean,reflect:!0}),x((function(t){t?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],K.prototype,"disabled",void 0),Object(u.c)([Object(n.g)({type:Boolean,reflect:!0})],K.prototype,"twoline",void 0),Object(u.c)([Object(n.g)({type:Boolean,reflect:!0})],K.prototype,"activated",void 0),Object(u.c)([Object(n.g)({type:String,reflect:!0})],K.prototype,"graphic",void 0),Object(u.c)([Object(n.g)({type:Boolean})],K.prototype,"hasMeta",void 0),Object(u.c)([Object(n.g)({type:Boolean,reflect:!0}),x((function(t){t?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],K.prototype,"noninteractive",void 0),Object(u.c)([Object(n.g)({type:Boolean,reflect:!0}),x((function(t){t?this.setAttribute("aria-selected","true"):this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(t,"property")}))],K.prototype,"selected",void 0),Object(u.c)([Object(n.f)()],K.prototype,"shouldRenderRipple",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Z=n.b`:host{cursor:pointer;user-select:none;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;padding:0 16px;overflow:hidden;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}:host([activated]) .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:var(--mdc-theme-primary, #6200ee)}.mdc-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta ::slotted(*){line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-list-item__meta ::slotted(.material-icons),.mdc-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}:host[dir=rtl] .mdc-list-item__meta,[dir=rtl] :host .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text ::slotted([for]),.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-list-item__text ::slotted(*),:host([disabled]) .mdc-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item__secondary-text ::slotted(*){color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader ::slotted(*){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}:host[dir=rtl] :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}:host[dir=rtl] :host([graphic=icon]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=icon]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-list-item__graphic,:host([graphic=large]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let J=class extends K{};J.styles=Z,J=Object(u.c)([Object(n.c)("mwc-list-item")],J);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Y=n.b`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let Q=class extends n.a{render(){return n.e`<slot></slot>`}};Q.styles=Y,Q=Object(u.c)([Object(n.c)("mwc-icon")],Q);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class tt extends n.a{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.shouldRenderRipple=!1,this.rippleHandlers=new X(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){const t=this.raised||this.unelevated;return n.e`${this.shouldRenderRipple?n.e`<mwc-ripple .primary="${!t}" .disabled="${this.disabled}"></mwc-ripple>`:""}`}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}render(){const t={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense};return n.e`
      <button
          id="button"
          class="mdc-button ${c(t)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseup="${this.handleRippleDeactivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <slot></slot>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return n.e`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}Object(u.c)([Object(n.g)({type:Boolean})],tt.prototype,"raised",void 0),Object(u.c)([Object(n.g)({type:Boolean})],tt.prototype,"unelevated",void 0),Object(u.c)([Object(n.g)({type:Boolean})],tt.prototype,"outlined",void 0),Object(u.c)([Object(n.g)({type:Boolean})],tt.prototype,"dense",void 0),Object(u.c)([Object(n.g)({type:Boolean,reflect:!0})],tt.prototype,"disabled",void 0),Object(u.c)([Object(n.g)({type:Boolean,attribute:"trailingicon"})],tt.prototype,"trailingIcon",void 0),Object(u.c)([Object(n.g)({type:Boolean,reflect:!0})],tt.prototype,"fullwidth",void 0),Object(u.c)([Object(n.g)({type:String})],tt.prototype,"icon",void 0),Object(u.c)([Object(n.g)({type:String})],tt.prototype,"label",void 0),Object(u.c)([Object(n.h)("#button")],tt.prototype,"buttonElement",void 0),Object(u.c)([Object(n.i)("mwc-ripple")],tt.prototype,"ripple",void 0),Object(u.c)([Object(n.f)()],tt.prototype,"shouldRenderRipple",void 0),Object(u.c)([Object(n.d)({passive:!0})],tt.prototype,"handleRippleActivate",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const et=n.b`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0,0,0,.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0,0,0,.38)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0,0,0,.12)}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{height:36px}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.mdc-button--raised{box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}:host{display:inline-flex;outline:none;vertical-align:top}:host([disabled]){pointer-events:none}:host([fullwidth]){width:100%}.mdc-button{flex:auto;overflow:hidden;padding:0 var(--mdc-button-horizontal-padding, 8px) 0 var(--mdc-button-horizontal-padding, 8px);border-radius:var(--mdc-shape-small, 4px)}.mdc-button.mdc-button--raised,.mdc-button.mdc-button--unelevated{padding:0 var(--mdc-button-horizontal-padding, 16px) 0 var(--mdc-button-horizontal-padding, 16px)}.mdc-button.mdc-button--raised mwc-ripple,.mdc-button.mdc-button--unelevated mwc-ripple{--mdc-ripple-color: var(--mdc-theme-on-primary, #fff);--mdc-ripple-hover-opacity: .08;--mdc-ripple-press-opacity: .24;--mdc-ripple-focus-opacity: .24}.mdc-button.mdc-button--outlined{padding:0 calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px)) 0 calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));border-width:var(--mdc-button-outline-width, 1px);border-color:var(--mdc-button-outline-color, var(--mdc-theme-primary, #6200ee))}.mdc-button.mdc-button--outlined mwc-ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]) .mdc-button.mdc-button--raised,:host([disabled]) .mdc-button.mdc-button--unelevated{background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12));color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button:not(.mdc-button--raised):not(.mdc-button--unelevated){color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button.mdc-button--outlined{border-color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38));border-color:var(--mdc-button-disabled-outline-color, var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38)))}`;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let it=class extends tt{};it.styles=et,it=Object(u.c)([Object(n.c)("mwc-button")],it);var nt=o.j`<svg width="44" height="44" viewBox="0 0 44 44" 
    xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    <g fill="none" fill-rule="evenodd" stroke-width="2">
        <circle cx="22" cy="22" r="1">
            <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="22" r="1">
            <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
        </circle>
    </g>
</svg>`,rt=n.b`mwc-list-item,pre{font-family:var(--code-font-family, "Fira Code", "Ubuntu Mono", monospace)}mwc-list-item{margin:.5rem;border-radius:5px;box-shadow:1px 1px 5px 1px rgba(0,0,0,.1);background-color:#fff}.log mwc-icon{color:#690}.warn mwc-icon{color:#e90}.error mwc-icon{color:#dd4a68}.result{display:block;overflow:hidden;margin:.5rem;border-radius:5px;box-shadow:1px 1px 5px 1px rgba(0,0,0,.1);background-color:#fff}.result>div{margin:1rem;display:block}.result .error__stack{color:#dd4a68}#run{margin:.5rem;margin-top:2rem;float:right;background-color:#fff}`,ot=function(t,e,i,n){var r,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},at=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function a(t){try{c(n.next(t))}catch(t){o(t)}}function s(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))};const st=(t,e,i)=>({content:e,secondary:i.join(" ")}),ct=t=>{if(t instanceof Error){const{stack:e}=t;return n.e`<pre class="error__stack">${e}</pre>`}return t};let dt=class extends n.a{constructor(){super(...arguments),this.processMessage=st,this.processResult=ct,this.messages=[],this.log=["log","warn","error"],this.runtime=0}addMessage(t){return(e,...i)=>{const{content:n,secondary:r}=this.processMessage(t,e,i);return this.messages.push({type:t,content:n,secondary:r,time:Date.now()}),this.requestUpdate()}}connectedCallback(){super.connectedCallback()}render(){return n.e`
        <div id="messges">${this._renderMessages()}</div>
        ${p(this._renderResult(),nt)}
        <mwc-button 
            id="run"
            @click="${this.onClick}" 
            icon="play_circle_outline" 
            outlined 
            >Run code</mwc-button>
            
        `}_renderMessages(){return n.e`
            <mwc-list >
                ${Object(r.a)(this.messages,t=>t.time,this._renderMessage.bind(this))}
            </mwc-list>
        `}_renderMessage(t){const{type:e,content:i,secondary:r}=t,o=c({message:!0,[e]:e});return requestAnimationFrame(()=>this.renderRoot.querySelector("mwc-list-item").scrollIntoView()),n.e`
            <mwc-list-item .twoline="${!!r}" class="${o}" graphic="control" hasMeta>
                <span>${i}</span>
                <span slot="secondary">${r}</span>
                <mwc-icon slot="meta">${(()=>{switch(e){case"log":return"check_circle";case"warn":return"warning";case"error":return"error"}return""})()}</mwc-icon>
            </mwc-list-item>
        `}_renderResult(){return at(this,void 0,void 0,(function*(){const t=this.processResult(yield this.result);if(!t)return null;const e=c({result:!0,error:this.result instanceof Error});return n.e`<div class="${e}"><div>${t}</div></div>`}))}onClick(){this.run()}run(){return at(this,void 0,void 0,(function*(){(this.messages.length||this.result)&&(yield this.clear());const{debug:t,log:e,warn:i,error:n}=console;this.log.forEach(t=>{console[t]=this.addMessage(t).bind(this)});try{this.result=this.execute(),yield this.result}catch(t){this.result=Promise.reject(t)}console.debug(this.runtime),yield new Promise(t=>setTimeout(t,this.runtime)),Object.assign(console,{debug:t,log:e,warn:i,error:n}),requestAnimationFrame(()=>{var t;return null===(t=this.Result)||void 0===t?void 0:t.scrollIntoView()})}))}clear(){return at(this,void 0,void 0,(function*(){return this.result=void 0,this.messages=[],this.requestUpdate(),this.updateComplete}))}};dt.styles=[rt],ot([Object(n.g)({type:Function,attribute:!1})],dt.prototype,"execute",void 0),ot([Object(n.g)({type:Function,attribute:!1})],dt.prototype,"processMessage",void 0),ot([Object(n.g)({type:Function,attribute:!1})],dt.prototype,"processResult",void 0),ot([Object(n.g)({type:Array,attribute:!1})],dt.prototype,"messages",void 0),ot([Object(n.g)({type:Array,attribute:!1})],dt.prototype,"result",void 0),ot([Object(n.g)({type:Array,attribute:!1})],dt.prototype,"log",void 0),ot([Object(n.g)({type:Number})],dt.prototype,"runtime",void 0),ot([Object(n.h)(".result")],dt.prototype,"Result",void 0),ot([Object(n.h)("#messages")],dt.prototype,"List",void 0),ot([Object(n.d)({passive:!0})],dt.prototype,"onClick",null),dt=ot([Object(n.c)("cwc-code-runner")],dt);var lt=n.b`@media(min-width:840px){:host{display:flex;flex-flow:row wrap;align-items:stretch;margin:-12px;margin:calc(var(--mdc-layout-grid-gutter-desktop,24px)/ 2 * -1)}@supports(display:grid){:host{display:grid;margin:0;grid-gap:24px;grid-gap:var(--mdc-layout-grid-gutter-desktop,24px);grid-template-columns:repeat(12,minmax(0,1fr))}}}@media(min-width:600px)and (max-width:839px){:host{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-tablet,16px)/ 2 * -1)}@supports(display:grid){:host{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-tablet,16px);grid-template-columns:repeat(8,minmax(0,1fr))}}}@media(max-width:599px){:host{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-phone,16px)/ 2 * -1)}@supports(display:grid){:host{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-phone,16px);grid-template-columns:repeat(4,minmax(0,1fr))}}}`,pt=function(t,e,i,n){var r,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let ut=class extends n.a{render(){return n.e`<slot></slot>`}};ut.styles=[lt],ut=pt([Object(n.c)("mdc-grid-inner")],ut);var ht=n.b`:host{display:block;max-width:var(--max-width,1000px);--mdc-layout-grid-margin-desktop:24px;--mdc-layout-grid-gutter-desktop:24px;--mdc-layout-grid-column-width-desktop:72px;--mdc-layout-grid-margin-tablet:16px;--mdc-layout-grid-gutter-tablet:16px;--mdc-layout-grid-column-width-tablet:72px;--mdc-layout-grid-margin-phone:16px;--mdc-layout-grid-gutter-phone:16px;--mdc-layout-grid-column-width-phone:72px}@media(min-width:840px){:host{box-sizing:border-box;margin:0 auto;padding:24px;padding:var(--mdc-layout-grid-margin-desktop,24px)}}@media(min-width:600px)and (max-width:839px){:host{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-tablet,16px)}}@media(max-width:599px){:host{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-phone,16px)}}:host([align=left]){margin-right:auto;margin-left:0}:host([align=right]){margin-right:0;margin-left:auto}`,mt=n.b`@media(min-width:840px){:host{width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop,24px));box-sizing:border-box;margin:12px;margin:calc(var(--mdc-layout-grid-gutter-desktop,24px)/ 2)}@supports(display:grid){:host{width:auto;grid-column-end:span 4}}@supports(display:grid){:host{margin:0}}:host([desktop][desktop="1"]),:host([span="1"]){width:calc(8.3333333333% - 24px);width:calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop,24px))}@supports(display:grid){:host([desktop][desktop="1"]),:host([span="1"]){width:auto;grid-column-end:span 1}}:host([desktop][desktop="2"]),:host([span="2"]){width:calc(16.6666666667% - 24px);width:calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop,24px))}@supports(display:grid){:host([desktop][desktop="2"]),:host([span="2"]){width:auto;grid-column-end:span 2}}:host([desktop][desktop="3"]),:host([span="3"]){width:calc(25% - 24px);width:calc(25% - var(--mdc-layout-grid-gutter-desktop,24px))}@supports(display:grid){:host([desktop][desktop="3"]),:host([span="3"]){width:auto;grid-column-end:span 3}}:host([desktop][desktop="4"]),:host([span="4"]){width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop,24px))}@supports(display:grid){:host([desktop][desktop="4"]),:host([span="4"]){width:auto;grid-column-end:span 4}}:host([desktop][desktop="5"]),:host([span="5"]){width:calc(41.6666666667% - 24px);width:calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop,24px))}@supports(display:grid){:host([desktop][desktop="5"]),:host([span="5"]){width:auto;grid-column-end:span 5}}:host([desktop][desktop="6"]),:host([span="6"]){width:calc(50% - 24px);width:calc(50% - var(--mdc-layout-grid-gutter-desktop,24px))}@supports(display:grid){:host([desktop][desktop="6"]),:host([span="6"]){width:auto;grid-column-end:span 6}}:host([desktop][desktop="7"]),:host([span="7"]){width:calc(58.3333333333% - 24px);width:calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop,24px))}@supports(display:grid){:host([desktop][desktop="7"]),:host([span="7"]){width:auto;grid-column-end:span 7}}:host([desktop][desktop="8"]),:host([span="8"]){width:calc(66.6666666667% - 24px);width:calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop,24px))}@supports(display:grid){:host([desktop][desktop="8"]),:host([span="8"]){width:auto;grid-column-end:span 8}}:host([desktop][desktop="9"]),:host([span="9"]){width:calc(75% - 24px);width:calc(75% - var(--mdc-layout-grid-gutter-desktop,24px))}@supports(display:grid){:host([desktop][desktop="9"]),:host([span="9"]){width:auto;grid-column-end:span 9}}:host([desktop][desktop="10"]),:host([span="10"]){width:calc(83.3333333333% - 24px);width:calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop,24px))}@supports(display:grid){:host([desktop][desktop="10"]),:host([span="10"]){width:auto;grid-column-end:span 10}}:host([desktop][desktop="11"]),:host([span="11"]){width:calc(91.6666666667% - 24px);width:calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop,24px))}@supports(display:grid){:host([desktop][desktop="11"]),:host([span="11"]){width:auto;grid-column-end:span 11}}:host([desktop][desktop="12"]),:host([span="12"]){width:calc(100% - 24px);width:calc(100% - var(--mdc-layout-grid-gutter-desktop,24px))}@supports(display:grid){:host([desktop][desktop="12"]),:host([span="12"]){width:auto;grid-column-end:span 12}}}@media(min-width:600px)and (max-width:839px){:host{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet,16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-tablet,16px)/ 2)}@supports(display:grid){:host{width:auto;grid-column-end:span 4}}@supports(display:grid){:host{margin:0}}:host([span="1"]),:host([tablet][tablet="1"]){width:calc(12.5% - 16px);width:calc(12.5% - var(--mdc-layout-grid-gutter-tablet,16px))}@supports(display:grid){:host([span="1"]),:host([tablet][tablet="1"]){width:auto;grid-column-end:span 1}}:host([span="2"]),:host([tablet][tablet="2"]){width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-tablet,16px))}@supports(display:grid){:host([span="2"]),:host([tablet][tablet="2"]){width:auto;grid-column-end:span 2}}:host([span="3"]),:host([tablet][tablet="3"]){width:calc(37.5% - 16px);width:calc(37.5% - var(--mdc-layout-grid-gutter-tablet,16px))}@supports(display:grid){:host([span="3"]),:host([tablet][tablet="3"]){width:auto;grid-column-end:span 3}}:host([span="4"]),:host([tablet][tablet="4"]){width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet,16px))}@supports(display:grid){:host([span="4"]),:host([tablet][tablet="4"]){width:auto;grid-column-end:span 4}}:host([span="5"]),:host([tablet][tablet="5"]){width:calc(62.5% - 16px);width:calc(62.5% - var(--mdc-layout-grid-gutter-tablet,16px))}@supports(display:grid){:host([span="5"]),:host([tablet][tablet="5"]){width:auto;grid-column-end:span 5}}:host([span="6"]),:host([tablet][tablet="6"]){width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-tablet,16px))}@supports(display:grid){:host([span="6"]),:host([tablet][tablet="6"]){width:auto;grid-column-end:span 6}}:host([span="7"]),:host([tablet][tablet="7"]){width:calc(87.5% - 16px);width:calc(87.5% - var(--mdc-layout-grid-gutter-tablet,16px))}@supports(display:grid){:host([span="7"]),:host([tablet][tablet="7"]){width:auto;grid-column-end:span 7}}:host([span="8"]),:host([tablet][tablet="8"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet,16px))}@supports(display:grid){:host([span="8"]),:host([tablet][tablet="8"]){width:auto;grid-column-end:span 8}}:host([span="9"]),:host([tablet][tablet="9"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet,16px))}@supports(display:grid){:host([span="9"]),:host([tablet][tablet="9"]){width:auto;grid-column-end:span 8}}:host([span="10"]),:host([tablet][tablet="10"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet,16px))}@supports(display:grid){:host([span="10"]),:host([tablet][tablet="10"]){width:auto;grid-column-end:span 8}}:host([span="11"]),:host([tablet][tablet="11"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet,16px))}@supports(display:grid){:host([span="11"]),:host([tablet][tablet="11"]){width:auto;grid-column-end:span 8}}:host([span="12"]),:host([tablet][tablet="12"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet,16px))}@supports(display:grid){:host([span="12"]),:host([tablet][tablet="12"]){width:auto;grid-column-end:span 8}}}@media(max-width:599px){:host{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone,16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-phone,16px)/ 2)}@supports(display:grid){:host{width:auto;grid-column-end:span 4}}@supports(display:grid){:host{margin:0}}:host([phone][phone="1"]),:host([span="1"]){width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-phone,16px))}@supports(display:grid){:host([phone][phone="1"]),:host([span="1"]){width:auto;grid-column-end:span 1}}:host([phone][phone="2"]),:host([span="2"]){width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-phone,16px))}@supports(display:grid){:host([phone][phone="2"]),:host([span="2"]){width:auto;grid-column-end:span 2}}:host([phone][phone="3"]),:host([span="3"]){width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-phone,16px))}@supports(display:grid){:host([phone][phone="3"]),:host([span="3"]){width:auto;grid-column-end:span 3}}:host([phone][phone="4"]),:host([span="4"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone,16px))}@supports(display:grid){:host([phone][phone="4"]),:host([span="4"]){width:auto;grid-column-end:span 4}}:host([phone][phone="5"]),:host([span="5"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone,16px))}@supports(display:grid){:host([phone][phone="5"]),:host([span="5"]){width:auto;grid-column-end:span 4}}:host([phone][phone="6"]),:host([span="6"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone,16px))}@supports(display:grid){:host([phone][phone="6"]),:host([span="6"]){width:auto;grid-column-end:span 4}}:host([phone][phone="7"]),:host([span="7"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone,16px))}@supports(display:grid){:host([phone][phone="7"]),:host([span="7"]){width:auto;grid-column-end:span 4}}:host([phone][phone="8"]),:host([span="8"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone,16px))}@supports(display:grid){:host([phone][phone="8"]),:host([span="8"]){width:auto;grid-column-end:span 4}}:host([phone][phone="9"]),:host([span="9"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone,16px))}@supports(display:grid){:host([phone][phone="9"]),:host([span="9"]){width:auto;grid-column-end:span 4}}:host([phone][phone="10"]),:host([span="10"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone,16px))}@supports(display:grid){:host([phone][phone="10"]),:host([span="10"]){width:auto;grid-column-end:span 4}}:host([phone][phone="11"]),:host([span="11"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone,16px))}@supports(display:grid){:host([phone][phone="11"]),:host([span="11"]){width:auto;grid-column-end:span 4}}:host([phone][phone="12"]),:host([span="12"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone,16px))}@supports(display:grid){:host([phone][phone="12"]),:host([span="12"]){width:auto;grid-column-end:span 4}}}:host([order="1"]){order:1}:host([order="2"]){order:2}:host([order="3"]){order:3}:host([order="4"]){order:4}:host([order="5"]){order:5}:host([order="6"]){order:6}:host([order="7"]){order:7}:host([order="8"]){order:8}:host([order="9"]){order:9}:host([order="10"]){order:10}:host([order="11"]){order:11}:host([order="12"]){order:12}:host([align=top]){align-self:flex-start}@supports(display:grid){:host([align=top]){align-self:start}}:host([align=middle]){align-self:center}:host([align=bottom]){align-self:flex-end}@supports(display:grid){:host([align=bottom]){align-self:end}}`,gt=function(t,e,i,n){var r,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};console.log(mt);let ft=class extends n.a{constructor(){super(...arguments),this.span=12}render(){return n.e`<slot></slot>`}};ft.styles=[mt],gt([Object(n.g)({type:Number,reflect:!0})],ft.prototype,"span",void 0),gt([Object(n.g)({type:Number,reflect:!0})],ft.prototype,"mobile",void 0),gt([Object(n.g)({type:Number,reflect:!0})],ft.prototype,"tablet",void 0),gt([Object(n.g)({type:Number,reflect:!0})],ft.prototype,"desktop",void 0),gt([Object(n.g)({type:Number,reflect:!0})],ft.prototype,"order",void 0),gt([Object(n.g)({type:String,reflect:!0})],ft.prototype,"align",void 0),ft=gt([Object(n.c)("mdc-grid-cell")],ft);var bt=function(t,e,i,n){var r,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let vt=class extends n.a{render(){return n.e`<mdc-grid-inner><slot></slot></mdc-grid-inner>`}};vt.styles=[ht],bt([Object(n.g)({reflect:!0})],vt.prototype,"align",void 0),vt=bt([Object(n.c)("mdc-grid")],vt);var yt=n.b`cwc-code-highlight{border-radius:5px;box-shadow:0 0 2px 0 rgba(0,0,0,.25)}cwc-code-highlight,cwc-learn-code-container{font-size:1rem}mdc-grid{background:#fff;box-shadow:5px 10px 20px 0 rgba(0,0,0,.25);min-height:calc(100vh - 60px);margin-top:20px;margin-bottom:40px}.lead ::slotted(*){font-size:1.2em;background-color:rgba(0,0,0,.05);padding:10px 40px}`;const xt=t=>({get current(){const e=window.location.pathname;return console.log(e),t.find(t=>e.match((t=>t.pattern||new RegExp(t.path.replace("/","/")+"$"))(t)))},get next(){console.log(this.current);const e=t.indexOf(this.current)+1;return console.log(e),t[e]},get previous(){console.log(this.current);const e=t.indexOf(this.current)-1;return console.log(e),t[e]},go(t){history.pushState({},"",t.path),dispatchEvent(new PopStateEvent("popstate",{}))},goNext(){const{next:t}=this;t&&this.go(t)},goPrevious(){const{previous:t}=this;t&&this.go(t)}});var _t=function(t,e,i,n){var r,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};const wt=new WeakMap;class kt extends CustomEvent{constructor(t){super(kt.NAME,{bubbles:!0,detail:{next:t}})}}kt.NAME="page";let Ot=class extends n.a{constructor(){super(...arguments),this.routes=[],this.basePath="/learn-code-async"}get route(){window.location.pathname;return xt(this.routes).current}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this),this.addEventListener(kt.NAME,this)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this)}handleEvent(t){if("popstate"===t.type){window.location.pathname!==wt.get(this)&&this.requestUpdate(),wt.set(this,window.location.pathname)}if(t instanceof kt){const{next:e}=t.detail,i=this.routes.indexOf(this.route)+(e?1:-1),n=this.routes[i];n&&this.go(n)}}go(t){return history.pushState({},"","."+t.path),this.requestUpdate()}render(){const{route:t}=this;return t?p(t.render(),null):null}};_t([Object(n.g)({type:Array,attribute:!1})],Ot.prototype,"routes",void 0),_t([Object(n.g)()],Ot.prototype,"basePath",void 0),Ot=_t([Object(n.c)("cwc-learn-router")],Ot);var St=function(t,e,i,n){var r,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let At=class extends n.a{constructor(){super(...arguments),this.steps=1}initialize(){super.initialize(),this.step=Number(window.location.hash.replace("#",""))||1}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this)}disconnectedCallback(){super.connectedCallback(),window.removeEventListener("keydown",this)}handleEvent(t){t instanceof KeyboardEvent&&this.handleKeyboard(t)}handleKeyboard(t){switch(t.keyCode){case 38:1===this.step?this.dispatchEvent(new kt(!1)):this.step--;break;case 40:this.step===this.steps?this.dispatchEvent(new kt(!0)):this.step++;break;case 37:this.dispatchEvent(new kt(!1));break;case 39:this.dispatchEvent(new kt(!0))}}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"step"===t&&this.steps>1){const t=window.location.toString().replace(/[#].*/,"");history.replaceState({},"",[t,i].join("#"))}}render(){return n.e`
            <mdc-grid>
                ${this.renderHeader()}
                ${this.renderLead()}
                ${this.renderMain()}
            </mdc-grid>
        `}renderHeader(){const{header:t}=this;return n.e`
            <mdc-grid-cell align="middle">
                <header>
                    <slot name="header">
                        <h1>${t}</h1>
                    </slot>
                </header>
            </mdc-grid-cell>
        `}renderLead(){return n.e`
            <mdc-grid-cell class="lead">
                <slot name="lead"></slot>
            </mdc-grid-cell>
        `}renderMain(){return n.e`
            <slot name="main">
                <mdc-grid-cell span="12">
                    <slot></slot>
                </mdc-grid-cell>
            </slot>
        `}};At.styles=[yt],St([Object(n.g)()],At.prototype,"header",void 0),St([Object(n.g)()],At.prototype,"image",void 0),St([Object(n.g)({type:Number,reflect:!0})],At.prototype,"step",void 0),St([Object(n.g)({type:Number})],At.prototype,"steps",void 0),At=St([Object(n.c)("cwc-learn-page")],At);var jt=n.b`a{text-decoration:none;color:currentColor}`,Et=function(t,e,i,n){var r,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let It=class extends n.a{constructor(){super(...arguments),this.component="a"}render(){const{href:t,onClick:e,component:i}=this;return n.e`<a href="${t}" @click="${e}"><slot></slot></a>`}onClick(t){t.preventDefault(),t.stopPropagation(),history.pushState({},"",this.href),dispatchEvent(new PopStateEvent("popstate",{}))}};It.styles=[jt],Et([Object(n.g)()],It.prototype,"href",void 0),Et([Object(n.g)()],It.prototype,"component",void 0),Et([Object(n.d)({})],It.prototype,"onClick",null),It=Et([Object(n.c)("cwc-learn-link")],It)},function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),Prism.languages.ts=Prism.languages.typescript},function(t,e,i){"use strict";i.r(e);var n=i(2),r=i(1),o=i(0),a=i(4);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=new WeakMap,c=Object(n.e)(t=>e=>{if(!(e instanceof n.b))throw new Error("unsafeHTML can only be used in text bindings");const i=s.get(e);if(void 0!==i&&Object(a.h)(t)&&t===i.value&&e.value===i.fragment)return;const r=document.createElement("template");r.innerHTML=t;const o=document.importNode(r.content,!0);e.setValue(o),s.set(e,{value:t,fragment:o})});var d=i(12),l=i.n(d);i(16);const p={javascript:"clike",actionscript:"javascript",arduino:"cpp",aspnet:["markup","csharp"],bison:"c",c:"clike",csharp:"clike",cpp:"c",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",django:"markup-templating",ejs:["javascript","markup-templating"],etlua:["lua","markup-templating"],erb:["ruby","markup-templating"],fsharp:"clike","firestore-security-rules":"clike",flow:"javascript",ftl:"markup-templating",glsl:"clike",gml:"clike",go:"clike",groovy:"clike",haml:"ruby",handlebars:"markup-templating",haxe:"clike",java:"clike",javadoc:["markup","java","javadoclike"],jolie:"clike",jsdoc:["javascript","javadoclike"],"js-extras":"javascript","js-templates":"javascript",jsonp:"json",json5:"json",kotlin:"clike",latte:["clike","markup-templating","php"],less:"css",lilypond:"scheme",markdown:"markup","markup-templating":"markup",n4js:"javascript",nginx:"clike",objectivec:"c",opencl:"cpp",parser:"markup",php:["clike","markup-templating"],phpdoc:["php","javadoclike"],"php-extras":"php",plsql:"sql",processing:"clike",protobuf:"clike",pug:["markup","javascript"],qml:"javascript",qore:"clike",jsx:["markup","javascript"],tsx:["jsx","typescript"],reason:"clike",ruby:"clike",sass:"css",scss:"css",scala:"java","shell-session":"bash",smarty:"markup-templating",solidity:"clike",soy:"markup-templating",sparql:"turtle",sqf:"clike",swift:"clike",tap:"yaml",textile:"markup",tt2:["clike","markup-templating"],twig:"markup",typescript:"javascript","t4-cs":["t4-templating","csharp"],"t4-vb":["t4-templating","visual-basic"],vala:"clike",vbnet:"basic",velocity:"markup",wiki:"markup",xeora:"markup",xquery:"markup"},u=t=>h[t]||t,h={html:"markup",xml:"markup",svg:"markup",mathml:"markup",js:"javascript",g4:"antlr4",adoc:"asciidoc",shell:"bash",rbnf:"bnf",cs:"csharp",dotnet:"csharp",coffee:"coffeescript",jinja2:"django","dns-zone":"dns-zone-file",dockerfile:"docker",gamemakerlanguage:"gml",hs:"haskell",tex:"latex",context:"latex",ly:"lilypond",emacs:"lisp",elisp:"lisp","emacs-lisp":"lisp",md:"markdown",moon:"moonscript",n4jsd:"n4js",objectpascal:"pascal",px:"pcaxis",py:"python",robot:"robotframework",rb:"ruby",rq:"sparql",trig:"turtle",ts:"typescript",t4:"t4-cs",vb:"visual-basic",xeoracube:"xeora",yml:"yaml"};function m(t){const{cdn:e,attr:i}=Object.assign(Object.assign({},t),{cdn:"https://unpkg.com/prismjs",attr:"data-prism-language"});return t=>Object(r.b)(this,void 0,void 0,(function*(){const n=((t,e)=>i=>new Promise(n=>{const r=l.a.languages[i];if(r||document.head.querySelector(`[${e}="[${i}]"`))n(r);else{const r=document.createElement("script");r.setAttribute(e,i),r.setAttribute("src",`${t}/components/prism-${i}.min.js`),r.addEventListener("load",()=>n(l.a.languages[i])),document.head.appendChild(r)}}))(e,i);return yield Promise.all((t=>[t].concat(p[t]))(u(t)).filter(t=>!!t).map(n)),l.a.languages[t]}))}const g=new WeakMap,f=m({cdn:"https://unpkg.com/prismjs@1.20.0"}),b=Object(n.e)((t,e)=>i=>{const n=g.get(i);g.set(i,Object.assign(Object.assign({},n),{code:t,language:e})),n&&t===n.code&&e===n.language||f(e).then((t=>e=>{const{code:i,language:n}=g.get(t),r=l.a.highlight(i,e,n);t.setValue(c(r)),t.commit()})(i))});const v=[o.b`
  :host {
    display: block;
  }

  ::selection {
    text-shadow: none;
    background-color: var(--code-selection-background, rgba(179, 212, 252, 0.5));
  }

  pre {
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
  }

  pre, code {
    font-family: var(--code-font-family, "Fira Code", "Ubuntu Mono", monospace);
    line-height: var(--code-line-height, 1.4);
    z-index: 1;
  }

  code {
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    hyphens: none;

    overflow: scroll;
    
    color: var(--code-color, #555);
    tab-size: var(--code-tab-size, 4);
    white-space: var(--code-line-wrap, pre);
  }
`,o.b`

  :host([plain]) #index {
    flex: 0 0 0 !important;
    width: 0;
    margin: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  #index {
    color: var(--code-index-color, #777);
    background-color: var(--code-index-background, rgba(150, 150, 150, 0.1));
    padding: 0 .5rem;
  }

  #index {
    display: flex;
    flex-flow: column;
    margin-right: 1rem;
    counter-reset: linenumber;
    justify-content: space-evenly;
  }

  #index > span {
    counter-increment: linenumber;
    position: relative;
  }

  #index > span:before {
    content: counter(linenumber);
    display: block;
    text-align: right;
  }
`,o.b`
  :host {
    --code-t-text: rgba(0,0,0,.5);
    --code-t-number: #905;
    --code-t-selector: #690;
    --code-t-operator: #9a6e3a;
    --code-t-keyword: #c792ec;
    --code-t-variable: #e90;
    --code-t-function: #dd4a68;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.comment{
    color: var(--code-token-comment-color, var(--code-t-text));
  }
  .token.prolog {
    color: var(--code-token-prolog-color, var(--code-t-text));
  }
  .token.doctype {
    color: var(--code-token-doctype-color, var(--code-t-text));
  }
  .token.cdata {
    color: var(--code-token-cdata-color, var(--code-t-text));
  }
  .token.punctuation {
    color: var(--code-token-punctuation-color, #07a);
  }

  .token.property {
    color: var(--code-token-property-color, var(--code-t-number));
  }
  .token.tag {
    color: var(--code-token-tag-color, var(--code-t-number));
  }
  .token.boolean {
    color: var(--code-token-boolean-color, var(--code-t-number));
  }
  .token.property {
    color: var(--code-token-property-color, var(--code-t-number));
  }
  .token.number {
    color: var(--code-token-number-color, var(--code-t-number));
  }
  .token.constant {
    color: var(--code-token-constant-color, var(--code-t-number));
  }
  .token.symbol {
    color: var(--code-token-symbol-color, var(--code-t-number));
  }
  .token.deleted {
    color: var(--code-token-deleted-color, var(--code-t-number));
  }

  .token.selector {
    color: var(--code-token-selector-color, var(--code-t-selector));
  }
  .token.attr-name {
    color: var(--code-token-attr-name-color, var(--code-t-selector));
  }
  .token.string {
    color: var(--code-token-string-color, var(--code-t-selector));
  }
  .token.char {
    color: var(--code-token-char-color, var(--code-t-selector));
  }
  .token.inserted {
    color: var(--code-token-inserted-color, var(--code-t-selector));
  }
  .token.builtin {
    color: var(--code-token-builtin-color, #ecaa5a);
  }

  .token.operator {
    color: var(--code-token-operator-color, var(--code-t-operator));
  }
  .token.entity {
    color: var(--code-token-entity-color, var(--code-t-operator));
  }
  .token.url {
    color: var(--code-token-url-color, var(--code-t-operator));
  }

  .token.atrule {
    color: var(--code-token-atrule-color, var(--code-t-keyword));
  }
  .token.attr-value {
    color: var(--code-token-attr-value-color, var(--code-t-keyword));
  }
  .token.keyword {
    color: var(--code-token-function-color, var(--code-t-keyword));
  }

  .token.function {
    color: var(--code-token-function-color, var(--code-t-function));
  }
  .token.class-name {
    color: var(--code-token-class-name-color, var(--code-t-function));
  }

  .token.regex {
    color: var(--code-token-regex-color, var(--code-t-variable));
  }
  .token.important {
    color: var(--code-token-important-color, var(--code-t-variable));
  }
  .token.variable {
    color: var(--code-token-class-name-color, var(--code-t-variable));
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`,o.b`
  :host([theme='light']) {
    background: #fff;
  }

  :host([theme='dark']) {
    background: #212b31;
    --code-color: #eee;

    --code-t-text: rgba(255,255,255,.2);

    --code-highlight-background: rgba(0,200,200,.2);

    --code-token-builtin-color: #fcca5b;
    --code-token-string-color: #bce089;
    --code-token-punctuation-color: #bbb;
    --code-token-number-color: #1EA7FD;
  }
`,o.b`
    .highlight {
        position: absolute;
        width: 100%;
        background-color: var(--code-highlight-background, rgba(100, 200, 100, .25));
  }
`];const y={fromAttribute:u},x={fromAttribute:t=>t.split(",").map(t=>t.split("-").map(Number))};let _=class extends o.a{constructor(){super(...arguments),this.plain=!1}get codeElement(){let t=this.querySelector("code");return!t&&this.appendChild(t=document.createElement("code")),t}get source(){return this.codeElement.innerHTML.replace(/&nbsp;/gim," ").replace(/&amp;/gim,"&").replace(/&quot;/gim,'"').replace(/&lt;/gim,"<").replace(/&gt;/gim,">").replace(/<br>/gm,"\n")}connectedCallback(){super.connectedCallback(),new MutationObserver(t=>{const{codeElement:e}=this;!!t.find(t=>t.target===e)&&this.requestUpdate()}).observe(this,{attributes:!1,childList:!0,subtree:!0})}render(){var t;const{language:e="clike",source:i}=this;return o.e`
    <pre>
      <span id="index">${this._renderIndex()}</span>
      <code>${b(i,e)}</code>
      ${null===(t=this.highlight)||void 0===t?void 0:t.map(([t,e])=>this._renderHighlight(t,e))}
    </pre>
    `}_renderIndex(){const t=this.source.split(/\n/gm);return c(new Array(t.length+1).join("<span></span>"))}_renderHighlight(t,e=t){var i;const n=null===(i=this._index)||void 0===i?void 0:i.children;if(!n||n.length<e)return;const r=n[t-1];if(!(r instanceof HTMLElement))return;const a=n[e-1];if(!(a instanceof HTMLElement))return;const s=r.offsetTop,c=a.offsetTop+a.clientHeight;return o.e`<span class="highlight" style="top: ${s}px; height: ${c-s}px"></span>`}attributeChangedCallback(t,e,i){var n;super.attributeChangedCallback(t,e,i),"src"===t&&i&&(n=i,Object(r.b)(void 0,void 0,void 0,(function*(){const t=yield fetch(n);if(!t||!t.ok)throw new Error("bad response");const e=yield t.text();if(!e)throw new Error("bad content");return e.trim()}))).then(t=>{this.language=i.split(".").pop(),this.codeElement.innerText=t}).catch(console.error)}};_.styles=v,Object(r.c)([Object(o.g)()],_.prototype,"src",void 0),Object(r.c)([Object(o.g)({reflect:!0,converter:y})],_.prototype,"language",void 0),Object(r.c)([Object(o.g)({reflect:!0})],_.prototype,"theme",void 0),Object(r.c)([Object(o.g)({reflect:!0})],_.prototype,"cdn",void 0),Object(r.c)([Object(o.g)({type:Boolean,reflect:!0})],_.prototype,"plain",void 0),Object(r.c)([Object(o.g)({type:Array,converter:x})],_.prototype,"highlight",void 0),Object(r.c)([Object(o.h)("#index")],_.prototype,"_index",void 0),_=Object(r.c)([Object(o.c)("cwc-code-highlight")],_);var w=i(13),k=o.b`:host{font-size:20px;line-height:1.2}img{width:100%;max-width:100%}code,h1{font-family:"Fira code",Ubuntu,monospace}code{background-color:rgba(0,255,0,.15);padding:0 4px}em{font-weight:600}.box{box-shadow:0 0 2px 0 rgba(0,0,0,.25)}`,O=(i(14),function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function a(t){try{c(n.next(t))}catch(t){o(t)}}function s(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))});var S=[{path:"/intro/pubsub",render:()=>O(void 0,void 0,void 0,(function*(){return(yield i.e(14).then(i.bind(null,88))).render}))},{path:"/intro/async-generator",render:()=>O(void 0,void 0,void 0,(function*(){return(yield i.e(13).then(i.bind(null,70))).render}))}],A=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function a(t){try{c(n.next(t))}catch(t){o(t)}}function s(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))};var j=[{path:"/rxjs/intro",render:()=>A(void 0,void 0,void 0,(function*(){return(yield i.e(19).then(i.bind(null,89))).render}))},{path:"/rxjs/observables",render:()=>A(void 0,void 0,void 0,(function*(){return(yield i.e(21).then(i.bind(null,71))).render}))},{path:"/rxjs/operators",render:()=>A(void 0,void 0,void 0,(function*(){return(yield i.e(22).then(i.bind(null,72))).render}))},{path:"/rxjs/subscription",render:()=>A(void 0,void 0,void 0,(function*(){return(yield i.e(25).then(i.bind(null,73))).render}))},{path:"/rxjs/hot-cold",render:()=>A(void 0,void 0,void 0,(function*(){return(yield i.e(18).then(i.bind(null,90))).render}))},{path:"/rxjs/subject",render:()=>A(void 0,void 0,void 0,(function*(){return(yield i.e(24).then(i.bind(null,74))).render}))},{path:"/rxjs/merge",render:()=>A(void 0,void 0,void 0,(function*(){return(yield i.e(20).then(i.bind(null,91))).render}))},{path:"/rxjs/concat",render:()=>A(void 0,void 0,void 0,(function*(){return(yield i.e(16).then(i.bind(null,92))).render}))},{path:"/rxjs/switch-map",render:()=>A(void 0,void 0,void 0,(function*(){return(yield i.e(26).then(i.bind(null,93))).render}))},{path:"/rxjs/demo-input",render:()=>A(void 0,void 0,void 0,(function*(){return(yield Promise.all([i.e(0),i.e(3),i.e(17)]).then(i.bind(null,94))).render}))},{path:"/rxjs/react",render:()=>A(void 0,void 0,void 0,(function*(){return(yield Promise.all([i.e(2),i.e(23)]).then(i.bind(null,95))).render}))}],E=i.p+"a0f3a815fbdedb9cea8573c4bdca4296.png",I=function(t,e,i,n){var r,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},C=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function a(t){try{c(n.next(t))}catch(t){o(t)}}function s(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))};const F=[{pattern:/\/(home)?$/,path:"/home",render:()=>C(void 0,void 0,void 0,(function*(){return(yield i.e(12).then(i.bind(null,87))).render}))},...S,...j,{path:"/end",render:()=>C(void 0,void 0,void 0,(function*(){return(yield i.e(15).then(i.bind(null,85))).render}))},{pattern:/.*/,path:"/404",render:()=>C(void 0,void 0,void 0,(function*(){const t=t=>{t.preventDefault(),t.stopPropagation(),history.pushState({},"",t.target.href),dispatchEvent(new PopStateEvent("popstate",{}))},e=F.slice(0,F.length-1);return o.e`
                <cwc-learn-page> 
                    <div slot="header">
                        <h1>404</h1>
                        <img src="${E}"/>
                    </div>
                    ${Object(w.a)(e,t=>t.path,e=>o.e`<br/><a @click=${t} href=".${e.path}">${e.path}</a>`)}
                </cwc-learn-page>
            `}))}];let R=class extends o.a{render(){return o.e`<cwc-learn-router .routes="${F}"></cwc-learn-router>`}};R.styles=[k],R=I([Object(o.c)("cwc-learn-app")],R);const T=n.f`<cwc-learn-app></cwc-learn-app>`;Object(n.h)(T,document.getElementById("app"))}]);