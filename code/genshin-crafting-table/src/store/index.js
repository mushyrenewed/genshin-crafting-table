import Vue from 'vue'
import Vuex from 'vuex'

// Use store
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        page: "PageMain",
        mainSection: "Menu",
        characterSelected: ["Diluc", "Mona", "Venti", "Bennett"]
    },
    mutations: {
        changePage(state, name){
            state.page = name
        }
    }
})

export default store;