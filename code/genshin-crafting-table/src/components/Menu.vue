<template>
    <div class="menuClass d-flex flex-column">
        <menu-item label="Attribute" />
        <menu-item label="Weapons" />
        <menu-item label="Artifacts" />
        <menu-item label="Constellation" />
        <menu-item label="Talent" />
        <menu-item label="Team" />
        <menu-item label="Estimation" />
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
    components:{
        MenuItem
    }
}
</script>

<style scoped>
</style>