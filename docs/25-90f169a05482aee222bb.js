(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{73:function(e,n,t){"use strict";t.r(n),t.d(n,"render",(function(){return d}));var c=t(14),r=t(0),o=function(e,n,t,c){var r,o=arguments.length,i=o<3?n:null===c?c=Object.getOwnPropertyDescriptor(n,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,c);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(n,t,i):r(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},i=function(e,n,t,c){return new(t||(t=Promise))((function(r,o){function i(e){try{u(c.next(e))}catch(e){o(e)}}function s(e){try{u(c.throw(e))}catch(e){o(e)}}function u(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}u((c=c.apply(e,n||[])).next())}))};const s=[[[9]],[[10,11]],[[13]],[[15,17],[19,21]],[[24]],[[27]]];let u=class extends c.a{renderMain(){this.step===this.steps&&requestAnimationFrame(()=>this.CodeRunner.run());const e=s[this.step-1];return r.e`
            <mdc-grid-cell span="12">
                <cwc-code-highlight src="./examples/rxjs/subscription.ts" .highlight="${e}"></cwc-code-highlight>
                <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `}runCode(){return i(this,void 0,void 0,(function*(){const e=yield Promise.all([t.e(0),t.e(9)]).then(t.bind(null,66)),n=yield e.default();return r.e`<h2>${n}</h2>`}))}};o([Object(r.h)("cwc-code-runner")],u.prototype,"CodeRunner",void 0),u=o([Object(r.c)("cwc-learn-page-code-rxjs-subscription")],u);const d=r.e`<cwc-learn-page-code-rxjs-subscription header="RxJS subscription" steps="${s.length+1}"></cwc-learn-page-code-rxjs-subscription>`;n.default=d}}]);