import api from '../api/index'
export default{
    FETCH_NEWS(context) {
        api.fetchNewsList()
            .then(res => context.commit('SET_NEWS', res.data))
            .catch(error => console.log(error));
    },
    FETCH_ITEM(context, id){
        api.fetchItem(id)
        .then(({data}) => {context.commit('SET_ITEM', data); console.log(data)})
        .catch(error => console.log(error));
    },
    FETCH_USER(context, userName){
        api.fetchUser(userName)
        .then(({data}) => {context.commit('SET_USER', data); console.log(data)})
        .catch(error => console.log(error));
    },
    FETCH_ASK(context){
        api.fetchNewsList()
        .then(({data}) => context.commit('SET_ASK', data))
        .catch(error => console.log(error));
    },
    FETCH_JOBS(context){
        api.fetchJobsList()
        .then(({data}) => context.commit('SET_JOBS', data))
        .catch(error => console.log(error));
    }
}