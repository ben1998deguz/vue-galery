import Vue from 'vue'
import Vuex from 'vuex'
import HomeModule from './modules/HomeModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home: HomeModule
  }
})
