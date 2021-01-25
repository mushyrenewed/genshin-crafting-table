<template>
  <div class="mainEstimationClass">
    <main-background>
      <!-- Top Corner -->
      <div class="topCornerClass d-flex justify-content-between mb-3">
        <span> Estimation </span>

        <span class="closeButtonClass ml-5" @click="closeHandler">
          <img src="../assets/images/close.svg" alt="close" />
        </span>
      </div>
      <simplebar class="mainEstimationDetails">
        <div class="w-100">
          <h5 class="mb-2">Enemy</h5>
          <img
            :src="require(`../assets/images/enemy/${enemy.image_filename}`)"
            alt="enemy"
            class="mx-auto d-block mb-2"
          />
          <h5 class="text-center mb-2">{{enemy.name}}</h5>
          <h5>Enemy Debuffs</h5>
          <div class="px-2 mb-4">
              <template v-for="(debuff, i) in enemy_debuffs">
                  <a href="#" :key="i" class="mr-2">{{debuff}}</a>
              </template>
          </div>
          <h5>Character Buffs</h5>
          <div class="px-2 mb-4">
              <template v-for="(buff, i) in character_buffs">
                  <a href="#" :key="i" class="mr-2">{{buff}}</a>
              </template>
          </div>
          <h5 class="text-center ">Character Estimation</h5>
          <p class="text-center">{{character.name}}</p>

          <div class="row">
              <div class="col">
                  <h5>Auto Attack:</h5>
                  <h5>Elemental Skill Attack:</h5>
                  <h5>Elemental Burst Attack:</h5>
              </div>
              <div class="col text-right font-weight-normal">
                  <h5>{{estimation.auto_attack}}</h5>
                  <h5>{{estimation.elemental_skill_attack}}</h5>
                  <h5>{{estimation.elemental_burst_attack}}</h5>
              </div>
          </div>

        </div>
      </simplebar>
    </main-background>
  </div>
</template>

<script>
import MainBackground from "./MainBackground.vue";

import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  data() {
    return {
      // temporary and only used for view testing
      enemy: {
        id: 1234,
        name: "Dvalin",
        physical_res: 20,
        elemental_res: 0,
        additional_res: 0,
        image_filename: "dvalin.jpg",
      },
      character:{
          name: "Diluc"
      },
      enemy_debuffs:["Veridescent Debuff", "Breeze of Reminiscence", "Storm of Defiance", "Prophecy of Submersion"],
      character_buffs:["Conviction", "Searing Ember", "Fire and Steel", "Flowing Flame", "Phoenix, Harbringer of Dawn", "Flaming Sword", "Nemesis of Dark", "Stellaris Phantasm", "Prophecy of Oblivion", "Fantastic Voyage", "Grand Expectation", "Fire Ventures with Me"],
      estimation: {
        auto_attack: 3125,
        elemental_skill_attack: 5025,
        elemental_burst_attack: 125013,
      },
    };
  },
  components: {
    MainBackground,
    Simplebar,
  },
  methods: {
    closeHandler() {},
  },
};
</script>

<style scoped>
.mainEstimationClass {
  height: 100%;
}
.mainEstimationDetails {
  height: calc(100% - 40px);
  overflow-x: hidden;
}
span {
  font-weight: bold;
  font-size: 0.875rem;
  color: #1d1d1d;
  opacity: 0.64;
}

h5 {
  font-weight: bold;
  font-size: 0.625rem;
  color: #1d1d1d;
  opacity: 0.64;
}

a{
  font-size: 0.625rem;
  color: #1d1d1d;
  opacity: 0.64;  
  text-decoration: underline;
}

p{
  font-size: 0.625rem;
  color: #1d1d1d;
  opacity: 0.64;  
}
</style>