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
        <button-genshin :key="i" :buttonHandler="characterSelectHandler" class="m-2">
            <div
              class="characterButtonClass d-flex flex-column justify-content-center"
            >
              <img
                :src="require(`../assets/images/${character}.png`)"
                alt="character"
                height="67px"
                width="67px"
              />
              <p class="mt-1 text-center">{{ character }}</p>
            </div>
          </button-genshin>
      </template>    
    </simplebar>
  </div>
</template>

<script>
import ButtonGenshin from "./ButtonGenshin.vue";
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
    ButtonGenshin,
    Simplebar
  },
  methods:{
    characterSelectHandler(){}
  }
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

.characterButtonClass {
  background-color: rgba(255, 255, 255, 0.54);
  border-radius: 5px;
  max-width: 80px;
  line-height: normal;
  padding: 5px;
  cursor: pointer;
}
.characterButtonClass:focus,
.characterButtonClass:hover {
  box-shadow: 0 0 5px rgb(81, 238, 133);
}

.characterButtonClass > p {
  margin: 0;
  font-size: 0.875rem;
}

</style>