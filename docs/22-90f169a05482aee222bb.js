(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return u}));var r=n(14),c=n(0),o=function(e,t,n,r){var c,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(s=(o<3?c(s):o>3?c(t,n,s):c(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},s=function(e,t,n,r){return new(n||(n=Promise))((function(c,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function i(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((r=r.apply(e,t||[])).next())}))};const i=[[[7]]];let a=class extends r.a{renderMain(){this.step===this.steps&&requestAnimationFrame(()=>this.CodeRunner.run());const e=i[this.step-1];return c.e`
            <mdc-grid-cell span="12">
                <p>A Pipeable Operator is essentially a pure function which takes one Observable as input and generates another Observable as output. Subscribing to the output Observable will also subscribe to the input Observable.</p>
                <cwc-code-highlight src="./examples/rxjs/operators.ts" .highlight="${e}"></cwc-code-highlight>
                <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `}runCode(){return s(this,void 0,void 0,(function*(){const e=yield Promise.all([n.e(0),n.e(10)]).then(n.bind(null,65)),t=yield e.default(5);return c.e`<h2>${t}</h2>`}))}};o([Object(c.h)("cwc-code-runner")],a.prototype,"CodeRunner",void 0),a=o([Object(c.c)("cwc-learn-page-code-rxjs-operators")],a);const u=c.e`<cwc-learn-page-code-rxjs-operators header="RxJS operators" steps="${i.length+1}"></cwc-learn-page-code-rxjs-operators>`;t.default=u}}]);