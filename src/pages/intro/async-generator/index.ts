import { PageElement } from '../../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../../components/code-runner/code-runner';

const highlights = [
    [[1]],
    [[3]],
    [[10,12]],
];

@customElement('cwc-learn-page-code-async-generators')
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
            <cwc-code-highlight src="./examples/async-generator.ts" .highlight="${highlight}"></cwc-code-highlight>
            <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `;
    }

    protected async runCode() {
      const code = await import('../../../examples/async-generator');
      const result = await code.default();
      return html`<h2>${result}</h2>`;
    }
}

export const render = html`<cwc-learn-page-code-async-generators header="Async generator" steps="${highlights.length + 1}"></cwc-learn-page-code-async-generators>`;

export default render;