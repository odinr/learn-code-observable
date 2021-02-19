const basePath = 'rxjs'

export const routes: Route[] = [
    {
        path: `/${basePath}/intro`,
        render: async () => (await import('./intro')).render
    },
    {
        path: `/${basePath}/observables`,
        render: async () => (await import('./observables')).render
    },
    {
        path: `/${basePath}/operators`,
        render: async () => (await import('./operators')).render
    },
    {
        path: `/${basePath}/subscription`,
        render: async () => (await import('./subscription')).render
    },
    {
        path: `/${basePath}/hot-cold`,
        render: async () => (await import('./hot-cold')).render
    },
    {
        path: `/${basePath}/subject`,
        render: async () => (await import('./subject')).render
    },
    {
        path: `/${basePath}/merge`,
        render: async () => (await import('./merge')).render
    },
    {
        path: `/${basePath}/concat`,
        render: async () => (await import('./concat')).render
    },
    {
        path: `/${basePath}/switch-map`,
        render: async () => (await import('./switch-map')).render
    },
    {
        path: `/${basePath}/demo-input`,
        render: async () => (await import('./demo-input')).render
    },
    {
        path: `/${basePath}/react`,
        render: async () => (await import('./react')).render
    },

];

export default routes;