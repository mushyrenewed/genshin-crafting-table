<template>
    <div class="attributeItemClass row">
        <span class="col-7">{{stat_name}}</span>
        
        <span class="col ml-auto" :style="{textAlign:'end'}">{{stat_value}}</span>
        <span class="col" :style="{color:'#69B161'}">{{adds_stat_value}}</span>
        
    </div>
</template>

<script>
export default {
    props:{
        stat_name: String,
        stat_value: String,
        adds_stat_value: String
    }
}
</script>
<style scoped>
.attributeItemClass{
    font-size: 	0.75rem;
    font-weight: bold;
    margin-bottom: 5px;
}


</style>
