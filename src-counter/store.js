import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  count: 0
}

const mutations={
  ADD(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  }
}

const actions={
  add({commit}){
    commit('ADD')
  },
  decrement({commit}){
    commit('DECREMENT')
  },
  addIfOdd({commit,state}){
    state.count%2 === 0 || commit('ADD')
  },
  addAsync({commit}){
    setTimeout(()=>{
      commit('ADD')
    },2000)
  }
}

const getters={
  eventOrOdd(state) {
    return state.count % 2 === 0 ? 'Event' : 'Odd'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
