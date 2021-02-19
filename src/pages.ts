import { LitElement, customElement } from "lit-element";

export abstract class PageElement extends LitElement {
    static BASE_NAME = "learn-codin";
    public static register = (name: string) => customElement(`${PageElement.BASE_NAME}-${name}`);
}

export default PageElement