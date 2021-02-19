import { Observable } from 'rxjs';

const sleep = (t: number) => new Promise(resolve => setTimeout(resolve, t));

const observable = (count: number, timeout: number = 1000) =>
  new Observable<number>(subscriber => {
    (async () => {
      for (let i = 0; i < count; i++) {
        await sleep(timeout);
        subscriber.next(i);
      }
      subscriber.complete();
    })();
  });

export default () => new Promise((resolve, reject) => {
  observable(5).subscribe({
    next: value => console.log(`count: ${value}`),
    error: () => reject(Error("counter failed")),
    complete: () => resolve("counter complete")
  });
});
