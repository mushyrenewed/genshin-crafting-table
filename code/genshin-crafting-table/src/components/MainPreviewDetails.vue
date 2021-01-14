<template>
  <div class="previewDetailsClass">
    <!-- Top Corner -->
    <div class="topCornerClass d-flex justify-content-between">
      <span> Preview </span>

      <span>{{ characterInfo.name }}</span>

      <span class="closeButtonClass ml-5" @click="closeHandler">
        <img src="../assets/images/close.svg" alt="close" />
      </span>
    </div>

    <!-- Character Traits -->
    <div class="characterTraitsClass d-flex justify-content-center">
      <small class="mr-2" :style="{ color: elementColor }" @click="traitFilterHandler"
        >&bullet; {{ characterInfo.element }}
      </small>
      <small @click="traitFilterHandler">&bullet; {{ characterInfo.weapon_type }}</small>
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
        <button-general label="Remove" :handler="buttonHandler" />
      </template>
      <template v-else>
        <button-general label="Add" :handler="buttonHandler" />
      </template>
    </div>
  </div>
</template>

<script>
import ButtonGeneral from "./ButtonGeneral.vue";
import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  components: {
    ButtonGeneral,
    Simplebar,
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
    closeHandler() {},
    buttonHandler() {},
    traitFilterHandler(){}
  },
};
</script>

<style scoped>
.previewDetailsClass {
  background-color: #d9cab4;
  background-image: url(../assets/images/MainPageBg.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  padding: 15px;
  position: relative;
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

.closeButtonClass:hover {
  cursor: pointer;
}

small:hover{
  cursor: pointer;
}
</style>