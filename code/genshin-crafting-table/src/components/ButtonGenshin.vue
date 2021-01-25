<template>
    <div class="buttonGenshinClass" @click="buttonHandler">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        buttonHandler: Function
    }
}
</script>
