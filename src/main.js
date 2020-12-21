import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Axios from './api/ajax'
import ElementUI from 'element-ui';
import envObj from './config/env.js'

import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/reset.scss'

Vue.use(ElementUI);
axios.defaults.baseURL =  envObj[process.env.NODE_ENV].axiosUrl;
Vue.prototype.$http = Axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
