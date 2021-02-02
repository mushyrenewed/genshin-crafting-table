import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PageTeamName from "@/components/PageTeamName.vue"
import team from "../../src/store/modules/team"

import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('PageTeamName.vue', () => {
    let actions
    let state
    let store
    let mockRouter
    let router

    beforeEach(()=>{
        actions = {
            changeName: jest.fn()
        }

        store = new Vuex.Store({
            modules:{
                team: {
                    state,
                    actions,
                    getters: team.getter,
                    namespaced: true
                }
            }
        })

        router = new VueRouter()

        mockRouter = {
            push: jest.fn()
        }
    })

    it('calls changeName when change is trigger', () =>{
        const wrapper = shallowMount(PageTeamName, {store, localVue})
        const input = wrapper.find('input');
        input.trigger('change');

        expect(actions.changeName).toHaveBeenCalled()
    })

    it('calls enterKeyHandler when enter is pressed', async() =>{       
        const wrapper = shallowMount(PageTeamName, {
            store,
            localVue,
            router
        })

        
        const input = wrapper.find('input');
        await input.trigger('keypress.enter');

        expect(router.history.current.path).toBe('/characterSelect')
        
    })
})