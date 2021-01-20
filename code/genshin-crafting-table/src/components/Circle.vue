<template>
    <div v-if="id === selected" 
    class="outerCircle"  
    @click="updateSelected"
    > 
        <div class="innerCircle" 
        :style="{backgroundColor: this.color}"
        ></div>
    </div>
    <div v-else class="circleFilledClass"
    :style="{backgroundColor: this.color}"
    @click="updateSelected">

    </div>
</template>

<script>
export default {
    props: {
        color: String,
        id: String,
        selected: String
    },
    methods:{
        updateSelected(){
            this.$emit('update-selected', this.id)
        }
    }
}
</script>

<style scoped>
.circleClass{
    border: 2px solid white;
    border-radius: 50%;
    height: 15px;
    width: 15px;
}

.circleFilledClass{
    border-radius: 50%;
    height: 15px;
    width: 15px;
    background-color: white;
    cursor: pointer;
}

.outerCircle{
    border-radius: 50%;
    height: 17px;
    width: 17px;
    border: 1px solid #707070;
    margin-top: -1px;
    cursor: pointer;
}

.innerCircle{
    border-radius: 50%;
    height: 11px;
    width: 11px;
    background-color: white;
    margin-left: 2px;
    margin-top: 2px;
}
</style>