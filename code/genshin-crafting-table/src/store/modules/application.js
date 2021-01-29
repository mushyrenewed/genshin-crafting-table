// initial state
const state = () => ({
    page: "PageSignIn",
    main_section: "MainMenu",
    preview:{
        search_type:"",
        topic: "",
        topic_results:[]
    },
    history:[],
    loading: false
})

// Getters
const getter = {}

// Actions
const actions = {
    setPage({ commit }, page){
        commit('changePage', page)
    }
}

// Mutations
const mutations = {
    appendHistory(state, pageName){
        state.history.push(pageName);
    },

    removeHistory(state){
        state.history.pop();
    },

    setLoading(state, status){
        state.loading = status;
    },

    changePage(state, whichPage){
        state.page = whichPage
    }
}


export default{
    namespaced: true,
    state,
    getter,
    actions,
    mutations
}