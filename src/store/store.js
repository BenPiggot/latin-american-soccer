import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    mexicanData: []
  },
  getters: {
    mexicanData: state => {
      return state.mexicanData
    }
  },
  mutations: {
    'SET_MEXICAN_DATA' (state, data) {
      state.mexicanData = data
    }
  },
  actions: {
    fetchMexicanData: ({commit}, data) => {
      Vue.http.get('')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          commit('SET_MEXICAN_DATA', data)
        })
    }
  }
})