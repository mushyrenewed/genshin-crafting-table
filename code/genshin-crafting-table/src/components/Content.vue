<template>
    <b-container class="genshinContentClass">
        <component :is="currentPage">

        </component>
    </b-container>
</template>

<script>
import PageSignIn from './PageSignIn.vue'
import PageTeamName from './PageTeamName.vue'

export default {
    components: {
        PageSignIn,
        PageTeamName
    },
    computed: {
        currentPage(){
            return this.$store.state.page;
        }
    }
}
</script>