import {
    createRouter,
    createWebHashHistory
} from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'manage',
        component: () => import('../pages/manage.vue'),
        children: [{
            path: '',
            name: 'home',
            component: () => import('../pages/home.vue')
        }, {
            path: 'about',
            name: 'about',
            component: () => import('../pages/about.vue')
        },
        {
            path: 'article',
            name: 'article',
            component: () => import('../pages/article.vue')
        },
        {
            path: 'books',
            name: 'books',
            component: () => import('../pages/books.vue')
        },
        {
            path: 'technology',
            name: 'technology',
            component: () => import('../pages/technology.vue'),
        },
        {
            path: 'technologyNews/:id',
            name: 'technologyNews',
            component: () => import('../pages/technologyNews.vue'),
        },
        {
            path: 'search',
            name: 'search',
            component: () => import('../pages/search.vue'),
        }
        ]
    },
    {
        path: '/:pathMatch(.*)',
        name: 'bad-not-found',
        component: () => import('../pages/404.vue')
    }
    ]
})
export default router