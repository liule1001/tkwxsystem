import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from './api/ajax'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/reset.scss'

Vue.use(ElementUI);
Vue.prototype.$http = Axios
Vue.config.productionTip = false
// Vue.http.options.root = process.env.VUE_APP_API_URL;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
