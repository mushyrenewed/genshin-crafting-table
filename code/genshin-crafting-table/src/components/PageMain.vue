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
      <div class="resonanceClass">
        <tool-element-resonance :elemental_resonance="['Pyro', 'Pyro']" />
      </div>
    </div>
    <div class="mainClass">
      <component :is="mainCurrentPage"> </component>
    </div>
  </div>
</template>

<script>
import ToolCharacterSelected from "./ToolCharacterSelected.vue";
import ToolElementResonance from "./ToolElementResonance.vue";
import MainMenu from './MainMenu.vue';
import MainAttribute from './MainAttribute.vue';
import MainPreview from './MainPreview.vue';
import MainPreviewDetails from './MainPreviewDetails.vue';
import MainSearchItems from './MainSearchItems.vue';

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
    ToolElementResonance,
    MainMenu,
    MainAttribute,
    MainPreview,
    MainPreviewDetails,
    MainSearchItems
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
  padding-top: 10px;
}
</style>

