<template>
  <div class="pageCharacterSelectClass">
    <div
      class="intructionClass d-flex flex-column justify-content-center"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <h2>Build your team</h2>
      <h6>construct, experiment, and have fun</h6>
    </div>

    <simplebar class="characterSectionClass d-flex flex-wrap">
      <template v-for="(character, i) in characters">
          <character-button :imagePath="require(`../assets/images/${character}.png`)" :name="character" :key="i" class="m-3"/>
      </template>    
    </simplebar>
  </div>
</template>

<script>
import CharacterButton from "./ButtonCharacter.vue";
import Simplebar from "simplebar-vue";
import 'simplebar/dist/simplebar.min.css';

import background from "../assets/images/woodBlack.svg";
import Amber from "../assets/images/Amber.png";

export default {
  data() {
    return {
      image: background,
      amberLogo: Amber,
      characters: ["Amber", "Barbara", "Beidou", "Bennett", "Childe", "Chongyun", "Diluc", "Diona", "Fischl", "Jean", "Kaeya", "Keqing", "Klee", "Lisa", "Mona", "Ningguang", "Noelle", "Qiqi", "Razor", "Sucrose", "Traveler", "Venti", "Xiangling", "Xiao", "Xingqiu"],
    };
  },
  components: {
    CharacterButton,
    Simplebar
  },
};
</script>

<style scoped>
.intructionClass {
  background-repeat: no-repeat;
  background-size: contain;
  box-sizing: border-box;
  text-align: left;
  padding-left: 25px;
  margin-top: 50px;
  height: 60px;
}

h2 {
  margin: 0;
  font-weight: bold;
  color: #efd4a5;
}

h6 {
  margin: 0;
  color: #ffffff;
  opacity: 0.8;
}

.characterSectionClass {
  width: 100%;
  height: calc((100vh) - 244px - 61px);
  overflow-y: auto;
  padding: 15px;
}


</style>