<template>
  <div class="previewDetailsClass">
    <main-background>
      <!-- TODO: previewType will be a prop -->
      <template v-if="previewType === 'Character'">
        <tool-preview-header
          :label="characterInfo.name"
          :closeHandler="closeHandler"
        />
        <preview-details-character></preview-details-character>
      </template>

      <template v-else-if="previewType === 'Weapon'">
        <tool-preview-header
          :label="weaponInfo.name"
          :closeHandler="closeHandler"
        />
        <preview-details-weapon :weapon="weaponDetail" :filename="require('../assets/images/wolf_gravestone.png')"/>
      </template>
    </main-background>
  </div>
</template>

<script>
import MainBackground from "./MainBackground.vue";
import PreviewDetailsCharacter from "./PreviewDetailsCharacter.vue";
import PreviewDetailsWeapon from "./PreviewDetailsWeapon.vue";
import ToolPreviewHeader from "./ToolPreviewHeader.vue";

export default {
  data() {
    return {
      previewType: "Weapon", // This will be a prop
      weaponDetail: { // temporary, just testing the view. Remove this later
                id: 41231,
                name: "Wolf Gravestone",
                weapon_type: "Claymore",
                rarity: "5",
                how_to_obtain: "Gatcha",
                refine: {
                    level: "1",
                    effect: "Increases ATK by 20%. On hit, attacks against enemies with less than 30% HP increase all party members' ATK by 40% for 12s. Can only occur once every 30s.",
                },
                weapon_attribute: {
                    level: "20",
                    base_attack: "122",
                    secondary_stat_name: "ATK",
                    secondary_stat_value: "19.1%",
                    ascension:{
                        level: "1",
                        base_attack: "153",
                    }
                }
            }
    };
  },
  components: {
    MainBackground,
    PreviewDetailsCharacter,
    PreviewDetailsWeapon,
    ToolPreviewHeader,
  },
  computed: {
    characterInfo() {
      return this.$store.state.character; // this will be a prop
    },
    weaponInfo(){
      return this.$store.state.character.weapon; // this will be under character prop 
    }
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