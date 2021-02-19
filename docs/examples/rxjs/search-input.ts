import { customElement, eventOptions, html, LitElement, property } from "lit-element";
import { directive, NodePart } from "lit-html";
import { interval, Observable, of, Subject, Subscription } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { catchError, debounce, distinctUntilChanged, filter, mergeMap, switchMap, takeUntil, tap } from "rxjs/operators";

const endpoint = 'https://baconipsum.com/api/?type=all-meat&paras=3&make-it-spicy=1&format=html';

const unsafeHtml = (content: string) => {
  const template = document.createElement('template');
  template.innerHTML = content;
  return document.importNode(template.content, true);
}

const streamWriterMap = new WeakMap();
const streamWriter = directive((stream: Observable<string>) =>
  (part: NodePart) => {

    if (streamWriterMap.has(part)) return;

    const subscription = stream.subscribe(content => {
      part.setValue(unsafeHtml(content));
      part.commit();
    });

    streamWriterMap.set(part, subscription);
  }
);


@customElement('rxjs-demo-input')
export class RxJsDemoInput extends LitElement {

  private input$: Subject<string> = new Subject();
  private content$: Subject<string> = new Subject();
  private subscription!: Subscription;

  @property({})
  loading?: boolean;

  connectedCallback() {
    super.connectedCallback();

    const search = () => fromFetch(endpoint).pipe(
      mergeMap(response => response.text()),
      takeUntil(this.input$),
      catchError(() => of('caught an error :(')),
    );

    this.subscription = this.input$.pipe(
      tap(() => this.loading = false),
      debounce(() => interval(500)),
      distinctUntilChanged(),
      filter(x => x.length > 2),
      tap(() => this.loading = true),
      switchMap(search),
      tap(() => this.loading = false),
    ).subscribe(this.content$);

  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.subscription.unsubscribe();
  }


  render() {
    return html`
      <input @input=${this.onInpput}>
      ${this.loading ? html`Loading data...` : ''}
      <div>${streamWriter(this.content$)}</div>
    `;
  }

  @eventOptions({ passive: true })
  onInpput(e: InputEvent) {
    const { value } = e.target as HTMLInputElement
    this.input$.next(value);
  }
}