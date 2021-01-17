<template>
    <div class="characterButtonClass d-flex flex-column justify-content-center" @click="handler">
        <img :src="imagePath" alt="character" height="67px" width="67px">
        <p class="mt-1">{{name}}</p>
    </div>
</template>

<script>
export default {
    props:{
        imagePath: String,
        name: String,
        handler: Function
    }
}
</script>

<style scoped>
    .characterButtonClass{
        background-color: rgba(255, 255, 255, 0.54);
        border-radius: 5px;
        max-width: 80px;
        line-height: normal;
        padding: 5px;
        cursor: pointer;
    }
    .characterButtonClass:focus, .characterButtonClass:hover{
        box-shadow: 0 0 5px rgb(81, 238, 133);
    }

    p{
        margin: 0;
        font-size: 0.875rem;
    }
</style>