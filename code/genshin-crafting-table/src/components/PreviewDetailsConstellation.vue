<template>
  <simplebar class="previewDetailsConstellationClass">
    <p class="mt-2">{{ constellation.description }}</p>
  </simplebar>
</template>
<script>
import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  data() {
    return {
      // This data is temporary and only be use for view testing, remove later
      constellation: {
        id: 1234,
        character_id: 321,
        name: "Conviction",
        description:
          "Diluc deals 15% more DMG to enemies whose HP is above 50%.",
        level: 1,
        filename: "conviction.png",
      },
    };
  },
  components: {
    Simplebar,
  },
  props: {
    constellation_id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    findConstellation() {},
  },
};
</script>

<style scoped>
.previewDetailsConstellationClass {
  height: calc(100% - 30px);
  overflow-x: hidden;
}

p {
  font-size: 0.75rem;
}
</style>