import { LitElement, html, customElement, property } from "lit-element";

import style from './page.scss';
import { CustomPageEvent } from "../route/router";

@customElement('cwc-learn-page')
export class PageElement extends LitElement {

    static styles = [style];

    @property()
    header?: string;

    @property()
    image?: string;

    @property({ type: Number, reflect: true })
    step!: number;

    @property({ type: Number })
    steps: number = 1;

    initialize() {
        super.initialize();
        this.step = Number(window.location.hash.replace('#', '')) || 1;
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('keydown', this);
    }

    disconnectedCallback() {
        super.connectedCallback();
        window.removeEventListener('keydown', this);
    }

    handleEvent(e: Event) {
        e instanceof KeyboardEvent && this.handleKeyboard(e);
    }

    handleKeyboard(e: KeyboardEvent) {

        switch (e.keyCode) {
            case 38: // arrow-up
                if (this.step === 1) {
                    this.dispatchEvent(new CustomPageEvent(false));
                } else {
                    this.step--;
                }
                break;

            case 40: // arrow-down
                if (this.step === this.steps) {
                    this.dispatchEvent(new CustomPageEvent(true));
                } else {
                    this.step++;
                }
                break;


            case 37: // arrow left
                this.dispatchEvent(new CustomPageEvent(false));
                break;

            case 39: // arrow right
                this.dispatchEvent(new CustomPageEvent(true));
                break;
        }
    }

    attributeChangedCallback(name: string, old: string | null, value: string | null) {
        super.attributeChangedCallback(name, old, value);
        if (name === 'step' && this.steps > 1) {
            const url = window.location.toString().replace(/[#].*/, '');
            history.replaceState({}, '', [url, value].join('#'));
        }
    }

    render() {
        return html`
            <mdc-grid>
                ${this.renderHeader()}
                ${this.renderLead()}
                ${this.renderMain()}
            </mdc-grid>
        `;
    }

    renderHeader() {
        const { header } = this;
        return html`
            <mdc-grid-cell align="middle">
                <header>
                    <slot name="header">
                        <h1>${header}</h1>
                    </slot>
                </header>
            </mdc-grid-cell>
        `;
    }

    renderLead() {
        return html`
            <mdc-grid-cell class="lead">
                <slot name="lead"></slot>
            </mdc-grid-cell>
        `;
    }

    renderMain() {
        return html`
            <slot name="main">
                <mdc-grid-cell span="12">
                    <slot></slot>
                </mdc-grid-cell>
            </slot>
        `;
    }
}

export default PageElement;