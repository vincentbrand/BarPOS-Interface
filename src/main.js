import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n';
import { get as CookieGet } from 'js-cookie'

// Websocket
// import * as socketApi from '../src/Websocket/socket'
// Vue.prototype.socketApi = socketApi

import VueHead from 'vue-head'
Vue.use(VueHead)

// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// use
Vue.use(ElementUI);

// axios init
import ApiServices from './Http/index';
ApiServices.init()
if (CookieGet("POS_TOKEN")) {
  ApiServices.setHeader()
}

/** Vue Filters Start */
Vue.filter('truncate', function (text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text;
  }
});
/** Vue Filters End */

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
