import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "",
        name: "Index",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "home" */ "@/views/index.vue"),
        meta: { requiresAuth: true },
    }
];

const router = createRouter({
    history: createWebHistory("/wallet/"),
    routes,
});

export default router;