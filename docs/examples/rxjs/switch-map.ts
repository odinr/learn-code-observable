import { from, interval } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';

const request = (s: number) => new Promise(resolve => {
  setTimeout(() => resolve(s), 1000);
});

export default () => new Promise((resolve) => {
  interval(500).pipe(
    take(5),
    tap(x => console.log(`request [${x}] started`)),
    switchMap(x => from(request(x)).pipe(
      tap(x => console.log(`request [${x}] complete`))
    )),
    tap(x => console.log(`response [${x}]`)),
  )
    .subscribe(x => console.log(`result [${x}]`))
    .add(() => resolve('complete'));
});