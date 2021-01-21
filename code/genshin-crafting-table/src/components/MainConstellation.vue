<template>
  <div class="mainConstellationClass">
    <main-background>
      <!-- Top Corner -->
      <div class="topCornerClass d-flex justify-content-between mb-3">
        <span> Constellation </span>

        <span class="closeButtonClass ml-5" @click="closeHandler">
          <img src="../assets/images/close.svg" alt="close" />
        </span>
      </div>
      <simplebar class="constellationListClass">
        <div class="d-flex flex-column">
          <template v-for="(constellation, i) in constellations">
            <div class="row mb-5" :key="i">
              <div class="col-4">
                <img
                  :src="
                    require(`../assets/images/constellations/${constellation.filename}`)
                  "
                  alt=""
                />
              </div>
              <div class="col-8">
                <a href="">{{ constellation.name }}</a>
              </div>
            </div>
          </template>
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
      // This data is temporary and should be only use for view testing.
      // This data should be retrieve by a function
      constellations: [
        {
          id: 1234,
          character_id: 321,
          name: "Conviction",
          description: "",
          level: 1,
          filename: "conviction.png",
        },
        {
          id: 12345,
          character_id: 321,
          name: "Searing Ember",
          description: "",
          level: 2,
          filename: "searing_ember.png",
        },
        {
          id: 1234,
          character_id: 321,
          name: "Fire and Steel",
          description: "",
          level: 3,
          filename: "fire_and_steel.png",
        },
        {
          id: 1234,
          character_id: 321,
          name: "Flowing Flame",
          description: "",
          level: 4,
          filename: "flowing_flame.png",
        },
        {
          id: 1234,
          character_id: 321,
          name: "Phoenix, Harbringer of Dawn",
          description: "",
          level: 5,
          filename: "phoenix_harbinger_of_dawn.png",
        },
        {
          id: 1234,
          character_id: 321,
          name: "Flaming Sword, Nemesis of Dark",
          description: "",
          level: 6,
          filename: "flaming_sword_nemesis_of_dark.png",
        },
      ],
    };
  },
  props: {
    characterId: {
      type: Number,
      //required: true,
    },
  },
  components: {
    MainBackground,
    Simplebar,
  },
  methods: {
    getConstellations() {},
    closeHandler() {},
  },
};
</script>

<style scoped>
.mainConstellationClass {
  height: 100%;
}

.constellationListClass {
  height: calc(100% - 40px);
  overflow-x: hidden;
}

span {
  font-weight: bold;
  font-size: 0.875rem;
  color: #1d1d1d;
  opacity: 0.64;
}

a {
  font-weight: bold;
  color: #1d1d1d;
  opacity: 0.64;
  text-decoration: underline;
}
</style>