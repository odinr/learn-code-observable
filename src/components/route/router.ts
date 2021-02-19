import { LitElement, property, TemplateResult, customElement, html } from "lit-element";
import { until } from 'lit-html/directives/until';

export const pattern = (r: Route) => r.pattern || new RegExp(`${r.path.replace('/', '\/')}`);
import { util } from './util';

const previousPath = new WeakMap<HTMLElement, string>();

export class CustomPageEvent extends CustomEvent<{ next: boolean }>{
    static NAME: string = 'page';
    constructor(next?: boolean) {
        super(CustomPageEvent.NAME, { bubbles: true, detail: { next } });
    }
}

@customElement('cwc-learn-router')
export class RouterElement extends LitElement {

    @property({ type: Array, attribute: false })
    public routes: Array<Route> = [];

    @property()
    basePath: string = '/learn-code-async'

    get route() {
        const path = window.location.pathname;
        return util(this.routes).current;
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('popstate', this);
        this.addEventListener(CustomPageEvent.NAME, this);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('popstate', this);
    }

    handleEvent(evt: Event) {
        if (evt.type === 'popstate') {
            const current = window.location.pathname;
            const previous = previousPath.get(this);
            current !== previous && this.requestUpdate();
            previousPath.set(this, window.location.pathname);
        }
        if (evt instanceof CustomPageEvent) {
            const { next } = evt.detail;
            const i = this.routes.indexOf(this.route) + (next ? 1 : -1);
            const route = this.routes[i];
            route && this.go(route);
        }
    }

    go(route: Route) {
        history.pushState({}, "", "." + route.path);
        return this.requestUpdate();
    }

    render() {
        const { route } = this;
        return route ? until(route.render(), null) : null;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'cwc-learn-router': RouterElement;
    }
}

export { util as routerUtil };

export default RouterElement;