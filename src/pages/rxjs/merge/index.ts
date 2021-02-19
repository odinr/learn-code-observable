import { PageElement } from '../../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../../components/code-runner/code-runner';

import image from './merge.png';

const highlights = [
  [[6]],
  [[7]],
  [[8]],
  [[9]],
];

@customElement('cwc-learn-page-code-rxjs-merge')
class CodePageAsyncGenerators extends PageElement {

  @query('cwc-code-runner')
  CodeRunner: CodeRunner;

  renderMain() {
    if (this.step === this.steps) {
      requestAnimationFrame(() => this.CodeRunner.run());
    }
    const highlight = highlights[this.step - 1] as Array<[number, number]>;
    return html`

<mdc-grid-cell span="12">
  <cwc-code-highlight src="./examples/rxjs/merge.ts" .highlight="${highlight}"></cwc-code-highlight>
  <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
</mdc-grid-cell>
        `;
  }

  protected async runCode() {
    const code = await import('../../../examples/rxjs/merge');
    await code.default();
  }
}

export const render = html`
<cwc-learn-page-code-rxjs-merge header="RxJS merge" steps="${highlights.length + 1}">
  <img src="${image}" slot="header" />
</cwc-learn-page-code-rxjs-merge>`;

export default render;