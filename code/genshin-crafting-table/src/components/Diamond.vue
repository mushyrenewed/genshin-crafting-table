<template>
    <div class="diamondOuterClass">
        <div class="diamondClass">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.diamondOuterClass{
    transform: rotate(45deg);
    border: 2px solid transparent;
    margin-top: 10px;
    height: 25px;
    width: 25px;
    padding: 5px;
}

.diamondClass{
    background-color: white;
    height: 10px;
    width: 10px;
}
</style>