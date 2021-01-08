<template>
    <b-container class="genshinContentClass">
        <component :is="currentPage">

        </component>
    </b-container>
</template>

<script>
import PageSignIn from './PageSignIn.vue'
import PageTeamName from './PageTeamName.vue'
import PageCharacterSelect from './PageCharacterSelect.vue'

export default {
    components: {
        PageSignIn,
        PageTeamName,
        PageCharacterSelect
    },
    computed: {
        currentPage(){
            return this.$store.state.page;
        }
    }
}
</script>