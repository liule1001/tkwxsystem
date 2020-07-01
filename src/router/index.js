import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>import('../views/Home.vue')
const Error = () =>import('../views/404.vue')
const dataStatistics = () =>import('../views/DataStatistics.vue')
const sessionBackup = () => import('../views/SessionBackup.vue')
const triggeSensitiveWords = () => import('../views/TriggeSensitiveWords.vue')
const sensitiveWordsManagement = () =>import('../views/SensitiveWordsManagement.vue')
const activeResponse = () =>import('../views/ActiveResponse.vue')
const passiveResponse = () =>import('../views/PassiveResponse.vue')

Vue.use(VueRouter)
// 在这里配置路由即可
const HomeArr = [
    {
        path: '/dataStatistics',
        component: dataStatistics
    },
    {
        path: "/sessionBackup",
        component: sessionBackup
    }, {
        path: "/triggeSensitiveWords",
        component: triggeSensitiveWords
    }, {
        path: "/sensitiveWordsManagement",
        component: sensitiveWordsManagement
    }, {
        path: "/activeResponse",
        component: activeResponse
    }, {
        path: "/passiveResponse",
        component: passiveResponse
    }]
// 配置路由
const routes = [{
    path: '/',
    component: Home
},
{
    path: '/Home',
    component: Home,
    children: HomeArr
},
{
    path: '/Error',
    component: Error
},
{
    path: '*',
    redirect: '/'
}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router