import Vue from 'vue'
import Router from 'vue-router'
import vueRouter from 'vue-router'
import Home from '@/views/home/Home'
import Category from "@/views/category/Category"
import User from '@/views/user/User'
import Shopcar from '@/views/shopcar/Shopcar'
import OpgcMain from '@/views/opgcmain/OpgcMain'
Vue.use(Router)
Vue.use(vueRouter)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: "/home",
        redirect: {
            name: "home"
        }
    }, {
        path: "/category",
        name: "category",
        component: Category
    }, {
        path: "/user",
        name: "user",
        component: User
    }, {
        path: "/shopcar",
        name: "shopcar",
        component: Shopcar
    }, {
        path: "/opgcmain",
        name: "opgcmain",
        component: OpgcMain
    }]
});