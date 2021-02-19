import { PageElement } from '../../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../../components/code-runner/code-runner';

const highlights = [
    [[7]],
];

@customElement('cwc-learn-page-code-rxjs-operators')
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
                <p>A Pipeable Operator is essentially a pure function which takes one Observable as input and generates another Observable as output. Subscribing to the output Observable will also subscribe to the input Observable.</p>
                <cwc-code-highlight src="./examples/rxjs/operators.ts" .highlight="${highlight}"></cwc-code-highlight>
                <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `;
    }

    protected async runCode() {
      const code = await import('../../../examples/rxjs/operators');
      const result = await code.default(5);
      return html`<h2>${result}</h2>`;
    }
}

export const render = html`<cwc-learn-page-code-rxjs-operators header="RxJS operators" steps="${highlights.length + 1}"></cwc-learn-page-code-rxjs-operators>`;

export default render;