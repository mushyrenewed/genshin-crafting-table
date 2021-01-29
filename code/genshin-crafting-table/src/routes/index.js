import Vue from 'vue'
import VueRouter from 'vue-router'

import PageSignIn from "../components/PageSignIn.vue"
import PageTeamName from "../components/PageTeamName.vue"
import PageCharacterSelect from "../components/PageCharacterSelect.vue"
import PageMain from "../components/PageMain.vue"
import FooterSignIn from "../components/FooterSignIn.vue"
import FooterTeamName from "../components/FooterTeamName.vue"
import FooterCharacterSelect from "../components/FooterCharacterSelect.vue"
import FooterMain from "../components/FooterMain.vue"

// install vue router
Vue.use(VueRouter)

const routes = [
    {
        path: '/signIn',
        components: {
            default: PageSignIn,
            footer: FooterSignIn
        }
    },
    {
        path: '/teamName', components: {
            default: PageTeamName,
            footer: FooterTeamName
        }
    },
    {
        path: '/characterSelect', components: {
            default: PageCharacterSelect,
            footer: FooterCharacterSelect
        }
    },
    {
        path: '/home', components: {
            default: PageMain,
            footer: FooterMain
        }
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;