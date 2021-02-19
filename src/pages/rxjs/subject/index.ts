import { PageElement } from '../../../components';
import { customElement, query, html } from 'lit-element';
import CodeRunner from '../../../components/code-runner/code-runner';

const highlights = [
    [[4]],
    [[7]],
    [[10,11]],
    [[13]],
];

@customElement('cwc-learn-page-code-rxjs-subject')
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
                <p>A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.</p>
            <cwc-code-highlight src="./examples/rxjs/subject.ts" .highlight="${highlight}"></cwc-code-highlight>
            <cwc-code-runner .execute="${this.runCode.bind(this)}"></cwc-code-runner>
            </mdc-grid-cell>
        `;
    }

    protected async runCode() {
      const code = await import('../../../examples/rxjs/subject');
      await code.default();
    }
}

export const render = html`<cwc-learn-page-code-rxjs-subject header="RxJS subject" steps="${highlights.length + 1}"></cwc-learn-page-code-rxjs-subject>`;

export default render;