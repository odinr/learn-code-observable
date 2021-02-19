const basePath = 'intro'

export const routes: Route[] = [
    {
        path: `/${basePath}/pubsub`,
        render: async () => (await import('./thesaurus')).render
    },
    {
        path: `/${basePath}/async-generator`,
        render: async () => (await import('./async-generator')).render
    },
];

export default routes;