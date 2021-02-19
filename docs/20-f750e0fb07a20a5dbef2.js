(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{91:function(e,n,t){"use strict";t.r(n),t.d(n,"render",(function(){return l}));var c=t(14),r=t(0),o=t.p+"ee144515a90725cd04a37ca6a2a62694.png",i=function(e,n,t,c){var r,o=arguments.length,i=o<3?n:null===c?c=Object.getOwnPropertyDescriptor(n,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,c);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(n,t,i):r(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},s=function(e,n,t,c){return new(t||(t=Promise))((function(r,o){function i(e){try{d(c.next(e))}catch(e){o(e)}}function s(e){try{d(c.throw(e))}catch(e){o(e)}}function d(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}d((c=c.apply(e,n||[])).next())}))};const d=[[[6]],[[7]],[[8]],[[9]]];let a=class extends c.a{renderMain(){this.step===this.steps&&requestAnimationFrame(()=>this.CodeRunner.run());const e=d[this.step-1];return r.e`

<mdc-grid-cell span="12">
  <cwc-code-highlight src="./examples/rxjs/merge.ts" .highlight="${e}"></cwc-code-highlight>
  <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
</mdc-grid-cell>
        `}runCode(){return s(this,void 0,void 0,(function*(){const e=yield Promise.all([t.e(0),t.e(5)]).then(t.bind(null,96));yield e.default()}))}};i([Object(r.h)("cwc-code-runner")],a.prototype,"CodeRunner",void 0),a=i([Object(r.c)("cwc-learn-page-code-rxjs-merge")],a);const l=r.e`
<cwc-learn-page-code-rxjs-merge header="RxJS merge" steps="${d.length+1}">
  <img src="${o}" slot="header" />
</cwc-learn-page-code-rxjs-merge>`;n.default=l}}]);