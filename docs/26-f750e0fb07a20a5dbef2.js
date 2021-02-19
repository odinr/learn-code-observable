(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{93:function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return l}));var c=n(14),r=n(0),o=n.p+"8ae4efadc6d2dd3f7d0c76858ad01e10.png",i=function(e,t,n,c){var r,o=arguments.length,i=o<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,n):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,c);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},s=function(e,t,n,c){return new(n||(n=Promise))((function(r,o){function i(e){try{d(c.next(e))}catch(e){o(e)}}function s(e){try{d(c.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}d((c=c.apply(e,t||[])).next())}))};const d=[[[4,6]],[[10]],[[11],[13],[15]],[[12,14]]];let a=class extends c.a{renderMain(){this.step===this.steps&&requestAnimationFrame(()=>this.CodeRunner.run());const e=d[this.step-1];return r.e`

<mdc-grid-cell span="12">
  <cwc-code-highlight src="./examples/rxjs/switch-map.ts" .highlight="${e}"></cwc-code-highlight>
  <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
</mdc-grid-cell>
        `}runCode(){return s(this,void 0,void 0,(function*(){const e=yield Promise.all([n.e(0),n.e(6)]).then(n.bind(null,83));yield e.default()}))}};i([Object(r.h)("cwc-code-runner")],a.prototype,"CodeRunner",void 0),a=i([Object(r.c)("cwc-learn-page-code-rxjs-switch-map")],a);const l=r.e`
<cwc-learn-page-code-rxjs-switch-map header="RxJS switch-map" steps="${d.length+1}">
  <img src="${o}" slot="header" />
</cwc-learn-page-code-rxjs-switch-map>`;t.default=l}}]);