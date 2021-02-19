import { interval, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

const isEven = (n: number) => !(n & 1);
const isOdd = (n: number) => !isEven(n);

const execute = () =>
  new Promise((resolve) => {
    const counter$ = interval(1000);
    const even$ = counter$.pipe(filter(isEven));
    const odd$ = counter$.pipe(filter(isOdd));

    const subscription = new Subscription();

    subscription.add(even$.subscribe(
      x => console.log(`the number ${x} is even`)
    ));

    subscription.add(odd$.subscribe(
      x => console.log(`the number ${x} is odd`)
    ));

    // subscription also allows adding an callback which is called when closed
    subscription.add(() => console.log('🤗 subscription ended'));
    subscription.add(() => resolve('counter complete'));

    setTimeout(() => subscription.unsubscribe(), 10000);
  });

export default execute;