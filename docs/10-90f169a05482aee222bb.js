(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{47:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(1),o=e(19),u=function(){function t(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return t.prototype=Object.create(Error.prototype),t}(),i=e(18),c=new i.a((function(t){return t.complete()}));function s(t){return t?function(t){return new i.a((function(n){return t.schedule((function(){return n.complete()}))}))}(t):c}function a(t){return function(n){return 0===t?s():n.lift(new f(t))}}var f=function(){function t(t){if(this.total=t,this.total<0)throw new u}return t.prototype.call=function(t,n){return n.subscribe(new l(t,this.total))},t}(),l=function(t){function n(n,e){var r=t.call(this,n)||this;return r.total=e,r.count=0,r}return r.d(n,t),n.prototype._next=function(t){var n=this.total,e=++this.count;e<=n&&(this.destination.next(t),e===n&&(this.destination.complete(),this.unsubscribe()))},n}(o.a)},65:function(t,n,e){"use strict";e.r(n);var r=e(84),o=e(47);n.default=(t,n=1e3)=>new Promise((e,u)=>{Object(r.a)(n).pipe(Object(o.a)(t)).subscribe({next:t=>console.log("count: "+t),error:()=>u(Error("counter failed")),complete:()=>e("counter complete")})})}}]);