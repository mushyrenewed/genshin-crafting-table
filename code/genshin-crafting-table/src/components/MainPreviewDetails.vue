<template>
  <div class="previewDetailsClass">
    <main-background>
      <tool-preview-header
        :label="previewHeaderTitle"
        :closeHandler="closeHandler"
      />
      <!-- TODO: previewType will be a prop -->
      <template v-if="previewType === 'Character'">
        <preview-details-character></preview-details-character>
      </template>

      <template v-else-if="previewType === 'Weapon'">
        <preview-details-weapon
          :weapon_id="12342"
          :filename="require('../assets/images/wolf_gravestone.png')"
        />
      </template>

      <template v-else-if="previewType === 'Artifact-Set'">
        <preview-details-artifact-set 
          :artifact_set_id="3214"
        />
      </template>
    </main-background>
  </div>
</template>

<script>
import MainBackground from "./MainBackground.vue";
import PreviewDetailsCharacter from "./PreviewDetailsCharacter.vue";
import PreviewDetailsWeapon from "./PreviewDetailsWeapon.vue";
import PreviewDetailsArtifactSet from "./PreviewDetailsArtifactSet.vue";
import ToolPreviewHeader from "./ToolPreviewHeader.vue";

export default {
  data() {
    return {
      previewType: "Artifact-Set", // This will be a prop
      previewHeaderTitle: "Crimson Witch Flames", // this will be a prop
    };
  },
  components: {
    MainBackground,
    PreviewDetailsCharacter,
    PreviewDetailsWeapon,
    PreviewDetailsArtifactSet,
    ToolPreviewHeader,
  },
  computed: {
    characterInfo() {
      return this.$store.state.character; // this will be a prop
    },
    weaponInfo() {
      return this.$store.state.character.weapon; // this will be under character prop
    },
  },
  methods: {
    closeHandler() {},
    buttonHandler() {},
    traitFilterHandler() {},
  },
};
</script>

<style scoped>
.previewDetailsClass {
  height: 100%;
}
</style>