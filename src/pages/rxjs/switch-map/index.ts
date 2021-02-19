import { PageElement } from '../../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../../components/code-runner/code-runner';

import image from './switchMap.png';

const highlights = [
  [[4,6]],
  [[10]],
  [[11],[13],[15]],
  [[12,14]],
];

@customElement('cwc-learn-page-code-rxjs-switch-map')
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
  <cwc-code-highlight src="./examples/rxjs/switch-map.ts" .highlight="${highlight}"></cwc-code-highlight>
  <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
</mdc-grid-cell>
        `;
  }

  protected async runCode() {
    const code = await import('../../../examples/rxjs/switch-map');
    await code.default();
  }
}

export const render = html`
<cwc-learn-page-code-rxjs-switch-map header="RxJS switch-map" steps="${highlights.length + 1}">
  <img src="${image}" slot="header" />
</cwc-learn-page-code-rxjs-switch-map>`;

export default render;