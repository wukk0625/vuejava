import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import My from '@/components/My'
import MyContent from '@/components/MyContent'
import We from '@/components/We'
import User from '@/components/User'
import PingLun from '@/components/PingLun'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Header',
        component: Header
    }, {
        path: '/my',
        name: 'My',
        component: My,
        children: [{
            path: '/Content', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
            name: 'MyContent',
            component: MyContent
        }, {
            path: '/We', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
            name: 'We',
            component: We
        }]
    }, {
        path: '/user',
        name: 'User',
        component: User
    }, {
        path: '/pinglun',
        name: 'PingLun',
        component: PingLun
    }]
})