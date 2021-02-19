type RenderResult = import("lit-html").TemplateResult | HTMLElement | string;
declare interface Route {
    path: string;
    pattern?: RegExp;
    render: () => Promise<RenderResult>;
}