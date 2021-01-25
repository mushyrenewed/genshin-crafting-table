<template>
  <div class="previewDetailsCharacterClass">
    <!-- Character Traits -->
    <div class="characterTraitsClass d-flex justify-content-center">
      <small
        class="mr-2"
        :style="{ color: elementColor }"
        @click="traitFilterHandler"
        >&bullet; {{ characterInfo.element }}
      </small>
      <small @click="traitFilterHandler"
        >&bullet; {{ characterInfo.weapon_type }}</small
      >
    </div>

    <!-- Character Image -->
    <div :style="{ textAlign: 'center' }" class="mt-2">
      <img
        :src="require(`../assets/images/${characterInfo.name}.png`)"
        alt=""
      />
    </div>

    <!-- Details -->
    <simplebar class="detailsClass d-flex flex-column mt-2">
      <div :style="{ width: '100%' }">
        <span>Introduction</span>
        <p class="mt-3">{{ characterInfo.introduction }}</p>

        <span>Personality</span>
        <p class="mt-3">
          {{ characterInfo.personality }}
        </p>
      </div>
    </simplebar>

    <!-- Button -->
    <div class="buttonClass mr-3 mb-3">
      <template v-if="isCharacterInTeam">
        <button-genshin :buttonHandler="buttonHandler">
          <div class="buttonGeneralClass">
            <span>Remove</span>
          </div>
        </button-genshin>
      </template>
      <template v-else>
        <button-genshin :buttonHandler="buttonHandler">
          <div class="buttonGeneralClass">
            <span>Add</span>
          </div>
        </button-genshin>
      </template>
    </div>
  </div>
</template>

<script>
import ButtonGenshin from "./ButtonGenshin.vue";
import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  components: {
    Simplebar,
    ButtonGenshin
  },
  computed: {
    characterInfo() {
      return this.$store.state.character;
    },
    elementColor() {
      let element = this.$store.state.character.element;

      if (element === "Pyro") {
        return "#D57373";
      } else if (element === "Electro") {
        return "#8A2CAC";
      } else if (element === "Cryo") {
        return "#6AB5CC";
      } else if (element === "Hydro") {
        return "#3B91DA";
      } else if (element === "Geo") {
        return "#CDA574";
      } else {
        return "#41A33A";
      }
    },
    isCharacterInTeam() {
      let team = this.$store.state.characterSelected;

      return team.includes(this.$store.state.previewCharacter);
    },
  },
  methods: {
    buttonHandler() {},
    traitFilterHandler(){}
  },
};
</script>

<style scoped>
.previewDetailsCharacterClass{
    height: calc(100% - 12px);
}

.detailsClass {
  height: calc(100% - 165px);
}

.buttonClass {
  position: absolute;
  bottom: 0;
  right: 0;
}

span {
  font-weight: bold;
  color: #1d1d1d;
  opacity: 0.64;
}

small:hover{
  cursor: pointer;
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