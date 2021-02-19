import { customElement, html } from "lit-element";
import { PageElement } from "../../../components";

import '../../../examples/rxjs/search-input';

const highlights = [
  [[7]],
  [[15,28]],
  [[15], [19], [26]],
  [[22], [9,13]],
  [[34,35]],
  [[36]],
  [[50,58]],
  [[51]],
  [[52]],
  [[53]],
  [[54]],
  [[55]],
  [[56]],
  [[44, 48]],
  [[45]],
  [[46]],
  [[47]],
  [[57]],
  [[62,65]],
  [[68,74]],
  [[70]],
  [[77,80]],
];

@customElement('cwc-learn-page-code-rxjs-demo-input')
class CodePageAsyncGenerators extends PageElement {

    renderMain() {
        const highlight = highlights[this.step - 1] as Array<[number, number]>;
        return html`
            <mdc-grid-cell span="12">
            <cwc-code-highlight src="./examples/rxjs/search-input.ts" .highlight="${highlight}"></cwc-code-highlight>
            <rxjs-demo-input />
            </mdc-grid-cell>
        `;
    }
}

export const render = html`<cwc-learn-page-code-rxjs-demo-input header="RxJS demo input" steps="${highlights.length + 1}"></cwc-learn-page-code-rxjs-demo-input>`;

export default render;