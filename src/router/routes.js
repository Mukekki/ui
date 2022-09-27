export default [
    {
        path: '/test-page',
        name: 'test-page',
        component: () => import(/* webpackChunkName: 'about' */ '../pages/test-page.vue'),
    }
]