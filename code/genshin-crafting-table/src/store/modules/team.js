// initial state
const state = () => ({
    name: "",
    members: []
})

// Getters
const getter = {}

// Actions
const actions = {
    changeName({commit}, teamName){
        commit('setName', teamName)
    }
}

// Mutations
const mutations = {
    setName(state, teamName){
        state.name = teamName;
    }
}


export default {
    namespaced: true,
    state,
    getter,
    actions,
    mutations
}