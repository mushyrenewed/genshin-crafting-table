<template>
    <b-container class="genshinContentClass">
        <router-view></router-view>
    </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    components: {

    },
    computed: mapState({
        page: state => state.application.page
    })
}
</script>