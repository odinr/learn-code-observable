import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const execute = (count: number, timeout: number = 1000) =>
  new Promise((resolve, reject) => {
    const counter$ = interval(timeout).pipe(
      take(count)
    );
    counter$.subscribe({
      next: value => console.log(`count: ${value}`),
      error: () => reject(Error("counter failed")),
      complete: () => resolve("counter complete")
    });
  });

export default execute;