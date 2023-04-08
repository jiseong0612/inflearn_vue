import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations';
export default createStore({
  state: {
    news : [],
    ask : [],
    jobs : [],
  },
  getters: {
    fetchedNews(state){
      return state.news;
    },
    fetchedAsk(state){
      return state.ask;
    },
    fetchedJobs(state){
      return state.jobs;
    }
  },
  //2.호출된 값을 state에 반영
  mutations,
  //1.API 호출
  actions,
  modules: {

  }
})
