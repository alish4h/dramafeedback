import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    refreshToken: null,
    sheetId: '13MhaHGGizfcp8BAYj8wUCcqJ3Wt9xkprj9Im8necf8k'
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setRefreshToken (state, rtoken) {
      state.refreshToken = rtoken
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setRefreshToken ({commit}, rtoken) {
      commit('setRefreshToken', rtoken)
    }
  }
})