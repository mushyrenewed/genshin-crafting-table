<template>
  <div class="previewDetailsArtifactClass">
    <simplebar class="artifactDetail mt-2">
      <div class="d-flex flex-column align-items-center w-100">
        <img
          :src="require(`../assets/images/${artifact.filename}`)"
          alt="artifact"
          class="mb-1"
        />
        <small class="mb-2">+{{ artifactMaxLevel }}</small>
        <small class="mb-2">Main Status</small>
        <b-dropdown text="Select a stat" size="sm" class="mb-3">
          <!-- List of stats available -->
        </b-dropdown>
        <small class="mb-2">Bonus Stats</small>
        <div class="row mb-3">
          <div class="col">
            <div class="d-flex flex-column">
              <b-dropdown text="Select a stat" size="sm" class="mb-1">
                <!-- List of stats available -->
              </b-dropdown>
              <b-dropdown text="Select a stat" size="sm" class="mb-1">
                <!-- List of stats available -->
              </b-dropdown>
            </div>
          </div>
          <div class="col">
            <div class="d-flex flex-column">
              <b-dropdown text="Select a stat" size="sm" class="mb-1">
                <!-- List of stats available -->
              </b-dropdown>
              <b-dropdown text="Select a stat" size="sm" class="mb-1">
                <!-- List of stats available -->
              </b-dropdown>
            </div>
          </div>
        </div>

        <small class="mb-2">Rarity</small>
        <tool-artifact-rarity :artifact_id="123" class="mb-3" />

        <!-- Artifact Set details -->
        <div class="artifactSetDetails text-center" id="artifactSetDetails">
          <span :style="{ display: 'block' }" class="mb-2">Set Bonuses</span>
          <a href="">{{ artifact_set.name }}</a>
          <div class="row mb-2">
            <div class="col-4">
              <small>2-Piece Bonus</small>
            </div>
            <div class="col-8 text-left">
              <p>{{ artifact_set.two_piece_effect }}</p>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-4">
              <small>4-Piece Bonus</small>
            </div>
            <div class="col-8 text-left">
              <p>{{ artifact_set.four_piece_effect }}</p>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
    <div class="buttonClass mr-3 mb-3">
      <template v-if="isArtifactEquiped(artifact.artifact_type)">
        <button-genshin :buttonHandler="buttonHandler">
          <div class="buttonGeneralClass">
            <span>Unequip</span>
          </div>
        </button-genshin>
      </template>
      <template v-else>
        <button-genshin :buttonHandler="buttonHandler">
          <div class="buttonGeneralClass">
            <span>Equip</span>
          </div>
        </button-genshin>
      </template>
    </div>
  </div>
</template>

<script>
import ButtonGenshin from "./ButtonGenshin.vue";
import ToolArtifactRarity from "./ToolArtifactRarity.vue";

import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  data() {
    return {
      // This is temporary, should get id from props and search for info
      artifact: {
        artifact_id: 1234,
        name: "Witch's Ever-Burning Plum",
        artifact_set_id: 321,
        artifact_set_name: "Crimson Witch Flames",
        rarity: "5",
        artifact_type: "feather",
        filename: "witch_ever-burning_plum.png",
        main_attribute: {
          id: 2134,
          attribute_name: "",
          attribute_value: "",
        },
        bonus_attr_1: {
          id: 2134,
          attribute_name: "",
          attribute_value: "",
        },
        bonus_attr_2: {
          id: 2134,
          attribute_name: "",
          attribute_value: "",
        },
        bonus_attr_3: {
          id: 2134,
          attribute_name: "",
          attribute_value: "",
        },
        bonus_attr_4: {
          id: 2134,
          attribute_name: "",
          attribute_value: "",
        },
      },
      artifact_set: {
        name: "Crimson Witch Flames",
        two_piece_effect: "Pyro DMG Bonus +15%",
        four_piece_effect:
          "Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using an Elemental Skill increases 2-Piece Set effects by 50% for 10s. Max 3 stacks.",
      },
    };
  },
  props: {
    artifact_id: Number,
  },
  components: {
    ButtonGenshin,
    ToolArtifactRarity,
    Simplebar,
  },
  computed: {
    artifactMaxLevel() {
      let rarity = this.artifact.rarity;
      let maxLevel = 12;

      switch (rarity) {
        case "5":
          maxLevel = 20;
          break;
        case "4":
          maxLevel = 16;
          break;
      }

      return maxLevel;
    },
  },
  methods: {
    buttonHandler() {},
    isArtifactEquiped(type) {
      let char_artifact = "";

      switch (type) {
        case "flower":
          char_artifact = this.$store.state.character.artifact.flower;
          break;
        case "feather":
          char_artifact = this.$store.state.character.artifact.feather;
          break;
        case "time_piece":
          char_artifact = this.$store.state.character.artifact.time_piece;
          break;
        case "chalice":
          char_artifact = this.$store.state.character.artifact.chalice;
          break;
        case "hat":
          char_artifact = this.$store.state.character.artifact.hat;
          break;
      }

      return this.artifact.name === char_artifact.name;
    },
  },
};
</script>

<style scoped>
.previewDetailsArtifactClass {
  height: 100%;
}
.artifactDetail {
  /* Really wonky solution, but hey if there is a
       better solution I'm willing to change it :D 
     */
  height: calc(100% - 125px);
}

small {
  font-size: 0.75rem;
  font-weight: bold;
  color: #1d1d1d;
  opacity: 0.64;
}

span {
  font-size: 0.875rem;
  font-weight: bold;
  color: #1d1d1d;
  opacity: 0.64;
}

a {
  font-style: oblique;
  font-size: 0.75rem;
  font-weight: bold;
  color: #1d1d1d;
  opacity: 0.64;
}

p {
  font-size: 0.75rem;
  color: #1d1d1d;
  opacity: 0.64;
  margin: 0;
  margin-top: 5px;
}

.artifactSetDetails {
  overflow-x: hidden;
  padding: 3px;
}

.buttonClass {
  position: absolute;
  bottom: 0;
  right: 0;
}

.btn-sm {
  font-size: 0.75rem !important;
}

.buttonGeneralClass{
    border: 1px solid #8E8E8E;
    padding: 5px 10px;
}

.buttonGeneralClass > span{
    color: #444343;
    font-weight: 400;
    font-size: 1rem;
    opacity: 1;
}

.buttonGeneralClass:hover{
    cursor: pointer;
}
</style>

