import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import IndexView from "../components/IndexView.vue"
import TodolistView from "../components/Todolist.vue"
import ProductView from "../components/Product.vue"
import SellView from "../components/Sell.vue"
const routes = [{
        path: '/',
        name: 'IndexView',
        component: IndexView
    },
    {
        path: '/todoitems',
        name: 'TodolistView',

        component: TodolistView

    },
    {
        path: "/products",
        name: "ProductView",
        component: ProductView
    },
    {
        path: "/Sell",
        name: "SellView",
        component: SellView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router