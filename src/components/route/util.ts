export const pattern = (r: Route) => r.pattern || new RegExp(`${r.path.replace('/', '\/')}$`);

export const util = (routes: Route[]) => ({
    get current() {
        const path = window.location.pathname;
        console.log(path);
        return routes.find(r => path.match(pattern(r)));
    },
    get next() {
        console.log(this.current);
        const i = routes.indexOf(this.current) + 1;
        console.log(i);
        return routes[i];
    },
    get previous() {
        console.log(this.current);
        const i = routes.indexOf(this.current) - 1;
        console.log(i);
        return routes[i];
    },
    go(route: Route) {
        history.pushState({}, "", route.path);
        dispatchEvent(new PopStateEvent('popstate', {}));
    },
    goNext() {
        const { next } = this;
        next && this.go(next);
    },
    goPrevious() {
        const { previous } = this;
        previous && this.go(previous);
    }
});

export default util;