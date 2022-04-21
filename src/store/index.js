import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    role: null,
    token: null,
  },
  mutations: {
    setAuthenticated(state, status){
      state.isAuthenticated = status;
    },
    setRole(state, status){
      state.role = status;
    },
    setToken(state, status){
      state.token = status;
    }
  },
  actions: {},
  modules: {},
})
