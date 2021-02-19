import { customElement, html, queryAsync } from "lit-element";
import { PageElement } from "../../../components";

import ReactDOM from 'react-dom';

import {App} from '../../../examples/rxjs/react';

const highlights = [
  [[18,30]],
  [[25]],
  [[32,35]],
  [[37,41]],
  [[43,46]],
  [[48]],
  [[51]],
  [[52,55]],
  [[56,59]],
  [[68], [79]],
  [[69], [80]],
  [[93]],
];

@customElement('cwc-learn-page-code-rxjs-react')
class CodePageAsyncGenerators extends PageElement {

    @queryAsync('#react-demo')
    reactElement: Promise<HTMLDivElement>;

    renderMain() {
        const highlight = highlights[this.step - 1] as Array<[number, number]>;
        this.reactElement.then(el => ReactDOM.render(App, el));
        return html`
            <mdc-grid-cell span="12">
            <cwc-code-highlight src="./examples/rxjs/react.tsx" .highlight="${highlight}"></cwc-code-highlight>
            <div id="react-demo" />
            </mdc-grid-cell>
        `;
    }
}

export const render = html`<cwc-learn-page-code-rxjs-react header="RxJS React" steps="${highlights.length + 1}"></cwc-learn-page-code-rxjs-react>`;

export default render;