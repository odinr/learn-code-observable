(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{93:function(e,n,t){"use strict";t.r(n),t.d(n,"render",(function(){return l}));var c=t(14),r=t(0),o=t.p+"f3ae55a00b6355226b2ef40dfb3c29ac.png",i=function(e,n,t,c){var r,o=arguments.length,i=o<3?n:null===c?c=Object.getOwnPropertyDescriptor(n,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,c);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(n,t,i):r(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},s=function(e,n,t,c){return new(t||(t=Promise))((function(r,o){function i(e){try{a(c.next(e))}catch(e){o(e)}}function s(e){try{a(c.throw(e))}catch(e){o(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}a((c=c.apply(e,n||[])).next())}))};const a=[[[6]],[[7]],[[8]],[[9]]];let d=class extends c.a{renderMain(){this.step===this.steps&&requestAnimationFrame(()=>this.CodeRunner.run());const e=a[this.step-1];return r.e`

<mdc-grid-cell span="12">
  <cwc-code-highlight src="./examples/rxjs/concat.ts" .highlight="${e}"></cwc-code-highlight>
  <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
</mdc-grid-cell>
        `}runCode(){return s(this,void 0,void 0,(function*(){const e=yield Promise.all([t.e(0),t.e(4)]).then(t.bind(null,87));yield e.default()}))}};i([Object(r.h)("cwc-code-runner")],d.prototype,"CodeRunner",void 0),d=i([Object(r.c)("cwc-learn-page-code-rxjs-concat")],d);const l=r.e`
<cwc-learn-page-code-rxjs-concat header="RxJS concat" steps="${a.length+1}">
  <img src="${o}" slot="header" />
</cwc-learn-page-code-rxjs-concat>`;n.default=l}}]);