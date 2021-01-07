<template>
    <div class="headerClass">
        <img :src="Logo" alt="genshin-crafting-table">
    </div>
</template>

<script>
import GenshinLogo from '../assets/images/headerLogo.png'
export default {
    data(){
        return{
            Logo: GenshinLogo
        }
    }
}
</script>

<style scoped>

</style>