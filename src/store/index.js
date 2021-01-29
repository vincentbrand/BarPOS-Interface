import Vue from 'vue'
import Vuex from 'vuex'
import bills from './bills'
import app from './app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bills,
    app
  }
})
