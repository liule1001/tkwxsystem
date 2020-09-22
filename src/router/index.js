import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import {getQueryVariable} from "@/assets/js/common.js"
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
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})
//访问每个页面的时候判断是否登录了
router.afterEach(()=>{
    const tempToken = getQueryVariable("tempToken");
    // 判断用户是否登录
    axios({
        method: 'get',
        url: "/login/loginin", // 本地
      //   url: 'http://wxsit.pension.taikang.com/search/login/loginin',  //测试
        headers:{
            tempToken: tempToken
        }
    }).then((data)=>{
        if(data.data.flag !== 200){
            window.location.href = "http://10.130.226.35:8301/tkp-op/#/login"
        }
    })
})
// 解决多次点击相同的导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router