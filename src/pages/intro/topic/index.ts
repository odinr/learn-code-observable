// import { html } from 'lit-html';
// import { PageElement } from '../../../components';
// import { customElement, query } from 'lit-element';
// import CodeRunner from '../../../components/code-runner/code-runner';

// const highlights = [
//     [[1, 4]],
//     [[6, 9]],
//     [[12, 15]],
//     [[16, 20]],
// ]

// @customElement('cwc-learn-page-code-basic')
// class CodePageBasic extends PageElement {

//     @query('cwc-code-runner')
//     CodeRunner: CodeRunner;

//     renderMain() {
//         const highlight = highlights[this.step - 1] as Array<[number, number]>;
//         if (this.step === this.steps) {
//             requestAnimationFrame(() => this.CodeRunner.run())
//         }
//         const runCode = async () => {
//             const code = await import('../../../examples/basic');
//             const result = code.default();
//             const content = result.ingredients.map(i => html`<span>${i} </span>`);
//             return html`<h2>${result.name}</h2>${content}`;
//         }
//         return html`
//             <mdc-grid-cell span="12">
//             <cwc-code-highlight theme="light" src="./examples/basic.ts" .highlight="${highlight}"></cwc-code-highlight>
//             <cwc-code-runner .execute="${runCode}"></cwc-code-runner>
//             </mdc-grid-cell>
//         `;
//     }
// }

// export const render = html`<cwc-learn-page-code-basic steps="${highlights.length + 1}">
//     <div slot="header">
//         <h1>Topic of today</h1>
//         <h2>🍔 Making a hamburger 🍔</h2>
//     </div>
// </cwc-learn-page-code-basic>`;

// export default render;