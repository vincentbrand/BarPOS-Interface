import Vue from 'vue'
import Vuex from 'vuex'
import bills from './bills'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bills,
  }
})
