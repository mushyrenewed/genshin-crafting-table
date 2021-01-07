<template>
    <div class="naviButtonClass" @click="handler">     
        <div class="d-flex ">
            <div v-if="labelOrientation === 'right'" >
                <span class="mr-3">{{label}}</span>
                <img :src="logo" alt="arrow right">
            </div>
            <div v-else @click="buttonHandler">  
                <img :src="logo" alt="arrow right">
                <span class="ml-3">{{label}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        handler: Function,
        label: String,
        logo: String,
        labelOrientation: String
    }
}
</script>

<style scoped>
.naviButtonClass:hover{
   cursor: pointer; 
}
</style>