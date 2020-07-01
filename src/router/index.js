import Vue from 'vue'
import VueRouter from 'vue-router'
const Dashbord = () =>import('../views/Dashbord.vue')
const Home = () =>import('../views/Home.vue')
const Error = () =>import('../views/404.vue')
const MonitorEmphasis = () => import('../views/MonitorEmphasis.vue')
const MonitorDetails = () => import('../views/MonitorDetails.vue')
const ParameterAdd = () =>import('../views/ParameterAdd.vue')
const ParameterManagement = () =>import('../views/ParameterManagement.vue')
const RoleManagement = () =>import('../views/RoleManagement.vue')
const EventSearch = () =>import('../views/EventSearch.vue')
const TransactionSearch = () =>import('../views/TransactionSearch.vue')
const WarningList = () =>import('../views/WarningList.vue')
const WarningSet = () =>import('../views/WarningSet.vue')

Vue.use(VueRouter)
// 在这里配置路由即可
const HomeArr = [
    {
        path: "/MonitorEmphasis",
        component: MonitorEmphasis
    }, {
        path: "/MonitorDetails",
        component: MonitorDetails
    }, {
        path: "/ParameterAdd",
        component: ParameterAdd
    }, {
        path: "/ParameterManagement",
        component: ParameterManagement
    }, {
        path: "/RoleManagement",
        component: RoleManagement
    }, {
        path: "/EventSearch",
        component: EventSearch
    }, {
        path: "/TransactionSearch",
        component: TransactionSearch
    }, {
        path: "/WarningList",
        component: WarningList
    }, {
        path: "/WarningSet",
        component: WarningSet
    }]
// 配置路由 首页为仪表盘页面
const routes = [{
    path: '/',
    component: Home
},
{
    path: '/Dashbord',
    component: Dashbord
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