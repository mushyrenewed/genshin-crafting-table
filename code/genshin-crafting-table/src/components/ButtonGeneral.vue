<template>
    <div class="buttonGeneralClass" @click="handler">
        <span>{{label}}</span>
    </div>
</template>

<script>
export default {
    props:{
        label: String,
        handler: Function
    }
}
</script>

<style scoped>
.buttonGeneralClass{
    border: 1px solid #8E8E8E;
    padding: 5px 10px;
}

.buttonGeneralClass > span{
    color: #444343;
}
</style>