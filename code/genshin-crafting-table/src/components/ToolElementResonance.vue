<template>
  <div class="elementalResoClass">
    <div class="d-flex">
        <template v-for="(element, i) in elemental_resonance"> 
            <img :src="require(`../assets/images/Element_${element}.png`)" :alt="element" :key="i" height="28px">
        </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elemental_resonance: Array,
  },
};
</script>

<style scoped>
.elementalResoClass {
  cursor: pointer;
}
</style>

