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
    sheetId: '13MhaHGGizfcp8BAYj8wUCcqJ3Wt9xkprj9Im8necf8k',
    name: null,
    date: null,
    pos: null,
    nameExist: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setRefreshToken (state, rtoken) {
      state.refreshToken = rtoken
    },
    setName (state, name) {
      state.name = name
    },
    setDate(state, date) {
      state.date = date
    },
    setCellPos(state, pos) {
      state.pos = pos
    },
    setNameExist(state, nameExist) {
      state.nameExist = nameExist
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setRefreshToken ({commit}, rtoken) {
      commit('setRefreshToken', rtoken)
    },
    setName ({commit}, name) {
      commit('setName', name)
    },
    setDate({commit}, date) {
      commit('setDate', date)
    },
    setCellPos({commit}, pos) {
      commit('setCellPos', pos)
    },
    setNameExist({commit}, nameExist) {
      commit('setNameExist', nameExist)
    }
  }
})