import Vue from 'vue'
import Vuex from 'vuex'

// Use store
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        page: "PageCharacterSelect"
    },
    mutations: {
        changePage(state, name){
            state.page = name
        }
    }
})

export default store;