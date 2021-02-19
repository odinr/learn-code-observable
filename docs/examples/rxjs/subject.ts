import { Subject, interval } from 'rxjs';
import { take } from 'rxjs/operators';

const logger = (n: string) => (v: number) => console.log(`observer ${n}: ${v}`);

export default () => new Promise((resolve) => {
  const subject = new Subject<number>();
  const source$ = interval(1000).pipe(take(3));

  subject.subscribe(logger('A'));
  subject.subscribe(logger('B'));

  setTimeout(() => subject.subscribe(logger('C')), 2000);

  source$.subscribe(subject).add(resolve);
});