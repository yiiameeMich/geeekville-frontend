import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const defaultToken = localStorage.getItem('token') || null
const defaultUsername = localStorage.getItem('username') || null
const defaultUserBonuses = localStorage.getItem('bonuses') || null
const defaultUserVerification = localStorage.getItem('isVerified') || null
const defaultUserRole = localStorage.getItem('userRole') || null

const store = new Vuex.Store({
  state: {
    token: defaultToken,
    username: defaultUsername,
    bonuses: defaultUserBonuses,
    isVerified: defaultUserVerification,
    role: defaultUserRole,
  },
  getters: {

  },
  actions: {

  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
    },
    setUsername (state, payload) {
      state.username = payload
    },
    setBonuses (state, payload) {
      state.bonuses = payload
    },
    setVerification (state, payload) {
      state.isVerified = payload
    },
    setUserRole (state, payload) {
      state.role = payload
    },
  },
})

export default store;