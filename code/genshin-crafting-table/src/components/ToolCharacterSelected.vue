<template>
  <div class="characterSelectedClass d-flex">
    <template v-for="(character, i) in characterSelected">
      <div class="imageClass mr-2" :key="i">
        <img
          :src="require(`../assets/images/${character}.png`)"
          alt="character"
          height="28px"
          :style="{ marginBottom: '5px' }"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    characterSelected() {
      return this.$store.state.characterSelected;
    },
  },
};
</script>

<style scoped>
.imageClass {
  cursor: pointer;
  
}

.imageClass:focus,
.imageClass:hover {
  border-bottom: 2px solid #2cc5ff;
  margin-bottom: -2px;
}
</style>
