import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Store from '../pages/Store.vue'
import Car from '../pages/Car.vue'
import Mine from '../pages/Mine.vue'
import Main from '../pages/Main.vue'
import Detail from '../pages/Detail.vue'
import DetailShop from '../pages/DetailShop.vue'
import DetailShow from '../pages/DetailShow.vue'
import DetailEvaluate from '../pages/DetailEvaluate.vue'
import Login from '../pages/Login.vue'
import LoginInput from '../pages/LoginInput.vue'
import RegInput from '../pages/RegInput.vue'
const routes = [
    {
        path: '/main',
        name: 'main',
        component: Main,
        children: [{
            path: 'home',
            name: 'home',
            component: Home
        },
        {
            path: 'store',
            name: 'store',
            component: Store
        },
        {
            path: 'car',
            name: 'car',
            component: Car
        },
        {
            path: 'mine',
            name: 'mine',
            component: Mine
        }]
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail,
        children: [{
            path: 'detailShop',
            name: 'detailShop',
            component: DetailShop
        },
        {
            path: 'detailShow',
            name: 'detailShow',
            component: DetailShow
        },
        {
            path: 'detailEvaluate',
            name: 'detailEvaluate',
            component: DetailEvaluate
        },
        {
            path: '/',
            redirect: '/detail/:id/detailShop'
        }]
    }, {
        path: '/login',
        name: 'login',
        component: Login,
        children: [{
            path: 'loginInput',
            name: 'loginInput',
            component: LoginInput
        }, {
            path: 'regInput',
            name: 'regInput',
            component: RegInput
        },
        {
            path: '/',
            redirect: '/login/loginInput'
        }]
    },
    {
        path: '/',
        redirect: '/main/home'
    },

]

const router = new VueRouter({
    routes
})

export default router
