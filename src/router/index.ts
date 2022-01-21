import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "../components/pages/Home.vue"
import CategoriesComponent from "../components/pages/Categories.vue"
import CategoryDetailComponent from "../components/pages/CategoryDetail.vue"
import NotFoundComponent from "../components/pages/NotFound.vue"

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/category/:category_id',
        component: CategoriesComponent
    },
    {
        path: '/category/:category_id/:id',
        component: CategoryDetailComponent
    },
    {
        path: '/*',
        component: NotFoundComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router