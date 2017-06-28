import Vue from 'vue'
import Router from 'vue-router'

//vue组件
import index from '../page/home/index.vue'

import NotFound from '../page/NotFound.vue'
import Frame from '../frame/subroute.vue'
import reg from '../page/login/reg.vue'
import login from '../page/login/login.vue'
import steps from '../page/login/steps.vue'
import userIndex from '../page/user/index.vue'
import userInfo from '../page/user/info.vue'
import userLove from '../page/user/love.vue'
import tab from '../page/user/tab.vue'
import cube from '../page/user/cube.vue'
import zoom from '../page/user/zoom.vue'
import jdzoom from '../page/user/jdzoom.vue'
import test from '../page/user/test.vue'
import topics from '../page/user/topics.vue'
import demo from '../page/user/demo.vue'

//图标的组件
import pie from '../page/echarts/pie.vue'
import zhexian from '../page/echarts/zhexian.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: index
    },
    {
        path: '/pie',
        component: pie
    }, 
    {
        path: '/zhexian',
        component: zhexian
    }, {
        path: '/login',
        component: Frame,
        children: [
            { path: '/', component: login },
            { path: 'reg', component: reg },
            { path: 'steps', component: steps },
        ],
    }, {
        path: '/user',
        component: Frame,
        children: [
            { path: '/', component: userIndex },
            { path: 'info', component: userInfo },
            { path: 'love', component: userLove },
            { path: 'demo', component: demo },
            { path: 'test', component: test },
            { path: 'topics', component: topics },
            { path: 'tab', component: tab },
            { path: 'cube', component: cube },
            { path: 'zoom', component: zoom },
            { path: 'jdzoom', component: jdzoom },
        ],
    }, {
        path: '/404',
        component: NotFound
    }, {
        path: '*',
        redirect: '/404'
    },  ]
})
