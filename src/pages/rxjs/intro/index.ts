import { html } from "lit-html";

import image from './rxjs.png';

export const render = html`   
<cwc-learn-page header="RxJS">
  <img src="${image}" />
  <ul>
    <li><strong>Observable:</strong> represents the idea of an invokable collection of future values or events.</li>
    <li><strong>Observer:</strong> is a collection of callbacks that knows how to listen to values delivered by the
      Observable.</li>
    <li><strong>Subscription:</strong> represents the execution of an Observable, is primarily useful for cancelling the
      execution.</li>
    <li><strong>Operators:</strong> are pure functions that enable a functional programming style of dealing with
      collections with operations like <code>map</code>, <code>filter</code>, <code>concat</code>, <code>reduce</code>,
      etc.</li>
    <li><strong>Subject:</strong> is the equivalent to an EventEmitter, and the only way of multicasting a value or
      event to multiple Observers.</li>
    <li><strong>Schedulers:</strong> are centralized dispatchers to control concurrency, allowing us to coordinate when
      computation happens on e.g. <code>setTimeout</code> or <code>requestAnimationFrame</code> or others.</li>
  </ul>
</cwc-learn-page>
`;

export default render;