import { LitElement, html, customElement, property, eventOptions } from "lit-element";

import style from './style.scss';

@customElement('cwc-learn-link')
export class LinkElement extends LitElement {

    static styles = [style];

    @property()
    href: string;

    @property()
    component: string = "a";

    render() {
        const { href, onClick, component } = this;
        return html`<a href="${href}" @click="${onClick}"><slot></slot></a>`;
    }

    @eventOptions({})
    onClick(e: MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        history.pushState({}, "", this.href);
        dispatchEvent(new PopStateEvent('popstate', {}));
    }
}

export default LinkElement;