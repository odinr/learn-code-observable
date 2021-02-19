import { PageElement } from '../../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../../components/code-runner/code-runner';

const highlights = [
    [[3]],
    [[6]],
    [[10]],
    [[12]],
    [[18,20]],
];

@customElement('cwc-learn-page-code-rxjs-observable')
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
            <cwc-code-highlight src="./examples/rxjs/observable.ts" .highlight="${highlight}"></cwc-code-highlight>
            <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `;
    }

    protected async runCode() {
      const code = await import('../../../examples/rxjs/observable');
      const result = await code.default();
      return html`<h2>${result}</h2>`;
    }
}

export const render = html`<cwc-learn-page-code-rxjs-observable header="RxJS Observable" steps="${highlights.length + 1}"></cwc-learn-page-code-rxjs-observable>`;

export default render;