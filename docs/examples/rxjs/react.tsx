import { BehaviorSubject, Observable } from "rxjs";
import {
  distinctUntilKeyChanged,
  pairwise,
  pluck,
} from "rxjs/operators";

import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const useSelector = <T extends Record<any, unknown>, K extends keyof T>(
  data$: Observable<T>,
  key: K
): T[K] => {
  const [data, setData] = useState<T[K]>();
  useEffect(() => {
    const sub = data$
      .pipe(distinctUntilKeyChanged(key), pluck(key))
      .subscribe(setData);
    return () => sub.unsubscribe();
  }, [data$, key]);
  return data;
};

type State = {
  name: string;
  title: string;
};

type Context = {
  state$: Observable<State>;
  setName: (name: string) => void;
  setTitle: (title: string) => void;
};

const initial: State = {
  name: "",
  title: "",
};

const context = createContext<Context>(null);

const AppContext: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  const state$ = new BehaviorSubject<State>(initial);
  const setName = useCallback(
    (name: string) => state$.next({ ...state$.value, name }),
    [state$]
  );
  const setTitle = useCallback(
    (title: string) => state$.next({ ...state$.value, title }),
    [state$]
  );
  return (
    <context.Provider value={{ state$, setName, setTitle }}>
      {children}
    </context.Provider>
  );
};

const Name: FunctionComponent = () => {
  const { state$, setName } = useContext(context);
  const name = useSelector(state$, "name");
  return (
    <div>
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

const Title: FunctionComponent = () => {
  const { state$, setTitle } = useContext(context);
  const title = useSelector(state$, "title");
  return (
    <div>
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
};

const Debugger: FunctionComponent = () => {
  const [data, setData] = useState<[State, State]>();
  const { state$ } = useContext(context);
  useEffect(() => {
    const sub = state$.pipe(pairwise()).subscribe(setData);
    return () => sub.unsubscribe();
  }, [state$]);
  const [previous, current] = data || [initial, initial];
  return (
    <div>
      <p>previous: {JSON.stringify(previous)}</p>
      <p>current: {JSON.stringify(current)}</p>
    </div>
  );
};

export const App = (
  <AppContext>
    <Name />
    <Title />
    <Debugger />
  </AppContext>
);

export default App;
