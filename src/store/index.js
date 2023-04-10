import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
//, fetchAsk, fetchJobs, fetchItem

export default createStore({
  state: {
    news : [],
    ask : [],
    jobs : [],
    user : {},
    item : {},
  },
  getters: {
    fetchedAsk(state){
      return state.ask;
    }
  },
  mutations,
  actions,
  modules: {
  }
})
