import { createApp, h } from 'vue'
import App from './App.vue'
import './index.css'
import { createPinia } from "pinia"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faSearch, faTimesCircle, faMusic, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlay, faSearch, faTimesCircle, faMusic, faChevronDown)

// import VueRouter from 'vue-router'
// import Vue from 'vue'
// // Vue.use(VueRouter)
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "./components/pages/Home.vue"
import CategoriesComponent from "./components/pages/Categories.vue"
import NotFoundComponent from "./components/pages/NotFound.vue"

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/category/:id',
        component: CategoriesComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).component('fa', FontAwesomeIcon ).use(router).use(createPinia()).mount("#app")