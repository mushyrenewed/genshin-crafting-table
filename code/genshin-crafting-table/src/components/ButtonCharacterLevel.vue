<template>
    <div class="buttonCharacterLevelClass" @click="handler">
        <span class="mr-2">{{label}}</span>
        <img :src="imagePath" alt="arrow">
    </div>
</template>

<script>
export default {
    props:{
        label: String,
        imagePath: String,
        handler: Function
    }
}
</script>

<style scoped>
.buttonCharacterLevelClass{
    border: 1px solid #8E8E8E;
    padding: 2.5px 10px;
    cursor: pointer;
}
</style>