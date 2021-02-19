import { interval, concat } from 'rxjs';
import { map, take } from 'rxjs/operators';

export default () => new Promise((resolve) => {
  concat(
    interval(1000).pipe(map(x => `timer 1: ${x}`), take(5)), 
    interval(2000).pipe(map(x => `timer 2: ${x}`), take(3)), 
    interval(500).pipe(map(x => `timer 3: ${x}`), take(5)), 
  ).subscribe(console.log).add(resolve);
});