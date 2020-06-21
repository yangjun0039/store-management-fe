import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },

  mutations: {
    CHANGE_TOKEN(state, token: string) {
      state.token = token
    }
  },

  actions: {
    init({ commit }) {
      const token = localStorage.getItem('token')

      if (token) {
        commit('CHANGE_TOKEN', token)
      }
    },

    changeToken({ commit }, token: string) {
      commit('CHANGE_TOKEN', token)
      localStorage.setItem('token', token)
    },
  },

  modules: {
  }
})
