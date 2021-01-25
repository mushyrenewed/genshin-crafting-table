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

      <template v-else-if="previewType === 'Artifact'">
        <preview-details-artifact 
          :artifact_id="21321"
        />
      </template>
      <template v-else-if="previewType === 'Constellation'">
        <preview-details-constellation 
        :constellation_id="1234"
        />
      </template>
      <template v-else-if="previewType === 'Talent'">
        <preview-details-talent
        :talent_id="1234" />
      </template>
    </main-background>
  </div>
</template>

<script>
import MainBackground from "./MainBackground.vue";
import PreviewDetailsCharacter from "./PreviewDetailsCharacter.vue";
import PreviewDetailsWeapon from "./PreviewDetailsWeapon.vue";
import PreviewDetailsArtifactSet from "./PreviewDetailsArtifactSet.vue";
import PreviewDetailsArtifact from "./PreviewDetailsArtifact.vue";
import PreviewDetailsConstellation from "./PreviewDetailsConstellation.vue";
import PreviewDetailsTalent from "./PreviewDetailsTalent.vue";

import ToolPreviewHeader from "./ToolPreviewHeader.vue";

export default {
  data() {
    return {
      previewType: "Talent", // This will be a prop
      previewHeaderTitle: "Tempered Sword", // this will be a prop
    };
  },
  components: {
    MainBackground,
    PreviewDetailsCharacter,
    PreviewDetailsWeapon,
    PreviewDetailsArtifactSet,
    PreviewDetailsArtifact,
    PreviewDetailsConstellation,
    PreviewDetailsTalent,
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