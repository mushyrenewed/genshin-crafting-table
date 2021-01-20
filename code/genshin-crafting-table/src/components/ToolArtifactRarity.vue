<template>
  <div class="toolArtifactRarityClass d-flex">
    <template v-for="(artifact, i) in artifacts">
      <genshin-circle 
      class="mx-1"
      :id="i === artifacts.length - 1 ? 'artifactend' : 'artifact'+i"
      :selected="selected"
      :key="i" 
      :color="artifact.rarity === '4' ? '#65648D': '#A37533' "
      @update-selected="updateActiveArtifact"/>
    </template>
  </div>
</template>

<script>
import GenshinCircle from "./Circle.vue";

export default {
  data() {
    // This is a temporary data, for view testing
    return {
      selected: "artifactend",
      artifacts: [
        {
          rarity: "4",
        },
        {
          rarity: "5",
        },
      ],
    };
  },
  components: {
    GenshinCircle,
  },
  props: {
    artifact_id: Number,
  },
  methods: {
    findArtifact() {},
    updateActiveArtifact(payload){
        this.selected = payload;
    }
  },
};
</script>