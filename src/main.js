import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n';
import { get as CookieGet } from 'js-cookie'


// Websocket
// import * as socketApi from '../src/Websocket/socket'
// Vue.prototype.socketApi = socketApi

// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// use
Vue.use(ElementUI);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// axios init
import ApiServices from './Http/index';
ApiServices.init()
if (CookieGet("POS_TOKEN")) {
  ApiServices.setHeader()
}


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')
