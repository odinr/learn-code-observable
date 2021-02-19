

import { html } from "lit-html";

import image from './hot-vs-cold.jpg';

const highlights = [
  [[9]],
  [[10, 11]],
  [[13]],
  [[15, 17], [19, 21]],
  [[24]],
  [[27]],
];

export const render = html`   
<cwc-learn-page header="Cold VS Hot">
  <img src="${image}" />
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
`;

export default render;