import { interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';

export default () => new Promise((resolve) => {
  merge(
    interval(1000).pipe(map(x => `timer 1: ${x}`), take(5)), 
    interval(2000).pipe(map(x => `timer 2: ${x}`), take(3)), 
    interval(500).pipe(map(x => `timer 3: ${x}`), take(5)), 
    2 // max concurrently
  ).subscribe(console.log).add(resolve);
});