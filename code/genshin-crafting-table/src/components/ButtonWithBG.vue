<template>
    <div class="buttonWithBGClass d-flex flex-column justify-content-center" :style="{ backgroundImage: `url(${imagePath})`, height:`${height}px`, width:`${width}px` }" @click="handler">
        <span>{{label}}</span>
    </div>
</template>

<script>
export default {
    props:{
        imagePath: String,
        label: String,
        width: Number,
        height: Number,
        handler: Function
    }
}
</script>

<style scoped>
.buttonWithBGClass{
    text-align: left;
    padding-left: 25px;
}

.buttonWithBGClass:hover{
    cursor: pointer;
}

span{
    font-size: 0.875rem;
}
</style>