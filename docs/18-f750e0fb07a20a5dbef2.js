(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{90:function(e,r,c){"use strict";c.r(r),c.d(r,"render",(function(){return s}));var o=c(2),n=c.p+"6bdc6e1732f21c02216f59e8bf35a269.jpg";const s=o.f`   
<cwc-learn-page header="Cold VS Hot">
  <img src="${n}" />
  <mdc-grid-cell span="12">
    <cwc-code-highlight language="ts">
      <code>// COLD
const cold = new Observable((observer) => {
  const producer = new Producer();
  // have observer listen to producer here
});

// HOT
const producer = new Producer();
const hot = new Observable((observer) => {
  // have observer listen to producer here
});</code>
    </cwc-code-highlight>
    <p>When observing a hot subscription, <strong>ALWAYS</strong> unsubscribe, since it may over time cause memory leakage</p>
  </mdc-grid-cell>
</cwc-learn-page>
`;r.default=s}}]);