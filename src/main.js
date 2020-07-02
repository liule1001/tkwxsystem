import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from './api/ajax'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/reset.scss'

Vue.use(ElementUI);
Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
