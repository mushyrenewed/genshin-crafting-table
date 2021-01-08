<template>
    <div v-if="type == 'filled'" class="circleFilledClass">

    </div>
    <div v-else class="circleClass">

    </div>
</template>

<script>
export default {
    props: {
        type: String
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
}
</style>