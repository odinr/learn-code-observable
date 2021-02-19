import { customElement, LitElement, property, eventOptions, html, TemplateResult, query } from "lit-element";
import { repeat } from "lit-html/directives/repeat"
import { classMap } from "lit-html/directives/class-map"
import { until } from "lit-html/directives/until"

import '@material/mwc-list/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-icon';
import '@material/mwc-button';

import loader from '../../icons/puff.svg';

import style from './code-runner.scss';

type LogType = 'debug' | 'log' | 'warn' | 'error';
interface LogMessage {
    type: LogType;
    content: string | TemplateResult;
    secondary?: string | TemplateResult;
    time: number;
}

interface ProcessMessage {
    (type: LogType, message?: any, ...optionalParams: any[]): Pick<LogMessage, 'content' | 'secondary'>;
}

const processMessage: ProcessMessage = (_, content, opt) => {
    return { content, secondary: opt.join(" ") }
};

interface ProcessResult {
    (result: any): string | TemplateResult;
}

const processResult: ProcessResult = (result: any) => {
    if (result instanceof Error) {
        const { stack } = result;
        return html`<pre class="error__stack">${stack}</pre>`;
    }
    return result;
};


@customElement('cwc-code-runner')
class CodeRunner extends LitElement {

    static styles = [style];

    @property({ type: Function, attribute: false })
    execute: () => Promise<TemplateResult | string | void>;

    @property({ type: Function, attribute: false })
    processMessage: ProcessMessage = processMessage;

    @property({ type: Function, attribute: false })
    processResult: ProcessResult = processResult;

    @property({ type: Array, attribute: false })
    messages: LogMessage[] = [];

    @property({ type: Array, attribute: false })
    result?: Promise<TemplateResult | string | void>;

    @property({ type: Array, attribute: false })
    log: LogType[] = ['log', 'warn', 'error'];

    @property({ type: Number })
    runtime: number = 0;

    @query('.result')
    Result?: HTMLElement;

    @query('#messages')
    List!: HTMLElement;

    protected addMessage(type: LogType) {
        return (message?: any, ...optionalParams: any[]) => {
            const { content, secondary } = this.processMessage(type, message, optionalParams);
            this.messages.push({ type, content, secondary, time: Date.now() });
            return this.requestUpdate();
        }
    }

    connectedCallback() {
        super.connectedCallback();
        // @todo
        // document.addEventListener('keydown', this.onClick.bind(this));
    }

    render() {
        return html`
        <div id="messges">${this._renderMessages()}</div>
        ${until(this._renderResult(), loader)}
        <mwc-button 
            id="run"
            @click="${this.onClick}" 
            icon="play_circle_outline" 
            outlined 
            >Run code</mwc-button>
            
        `;
    }

    protected _renderMessages() {
        return html`
            <mwc-list >
                ${repeat(this.messages, (m) => m.time, this._renderMessage.bind(this))}
            </mwc-list>
        `;
    }

    protected _renderMessage(message: LogMessage) {
        const { type, content, secondary } = message;
        const classes = classMap({
            message: true,
            [type]: type,
        });
        const metaIcon = () => {
            switch (type) {
                case 'log':
                    return 'check_circle';
                case 'warn':
                    return 'warning';
                case 'error':
                    return 'error';
            }
            return "";
        };
        requestAnimationFrame(() => this.renderRoot.querySelector('mwc-list-item').scrollIntoView());
        return html`
            <mwc-list-item .twoline="${!!secondary}" class="${classes}" graphic="control" hasMeta>
                <span>${content}</span>
                <span slot="secondary">${secondary}</span>
                <mwc-icon slot="meta">${metaIcon()}</mwc-icon>
            </mwc-list-item>
        `;
    }

    protected async _renderResult() {
        const result = this.processResult(await this.result);
        if (!result) return null;

        const classes = classMap({
            result: true,
            error: (this.result as any) instanceof Error
        });

        return html`<div class="${classes}"><div>${result}</div></div>`;
    }

    @eventOptions({ passive: true })
    onClick() {
        this.run();
    }

    async run() {
        if (this.messages.length || this.result) {
            await this.clear();
        }

        // extract original log
        const { debug, log, warn, error } = console;

        // rebind console logs
        this.log.forEach((p) => {
            console[p] = this.addMessage(p).bind(this);
        });

        // execute
        try {
            this.result = this.execute();
            await this.result;
        } catch (err) {
            this.result = Promise.reject(err);
        }

        console.debug(this.runtime);
        await new Promise(r => setTimeout(r, this.runtime));

        // reattach original log
        Object.assign(console, { debug, log, warn, error });


        requestAnimationFrame(() => this.Result?.scrollIntoView());
    }

    async clear() {
        this.result = undefined;
        this.messages = [];
        this.requestUpdate();
        return this.updateComplete;
    }
}

export default CodeRunner;