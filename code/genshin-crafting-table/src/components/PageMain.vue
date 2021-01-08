<template>
  <div class="pageMainClass mt-3">
    <div class="teamNameClass">
      <p>
        {{ teamName }}
      </p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="charactersClass">
        <tool-character-selected />
      </div>
      <div class="resonanceClass"></div>
    </div>
    <div class="mainClass">
      <component :is="mainCurrentPage"> </component>
    </div>
  </div>
</template>

<script>
import ToolCharacterSelected from "./ToolCharacterSelected.vue";

export default {
  data() {
    return {
      teamName: "Team 1",
    };
  },
  computed: {
    mainCurrentPage() {
      return this.$store.state.mainSection;
    },
  },
  components: {
    ToolCharacterSelected,
  },
};
</script>

<style scoped>
.pageMainClass {
  text-align: left;
}

p {
  font-weight: bold;
}

.mainClass {
  width: 100%;
  height: calc((100vh) - 215px - 61px);
  overflow-y: auto;
  padding: 15px;
}
</style>

