<template>
  <div class="mainTalentClass">
    <main-background>
      <!-- Top Corner -->
      <div class="topCornerClass d-flex justify-content-between mb-3">
        <span> Talent </span>

        <span class="closeButtonClass ml-5" @click="closeHandler">
          <img src="../assets/images/close.svg" alt="close" />
        </span>
      </div>
      <simplebar class="talentListClass "> 
          <div class="d-flex flex-column w-100">
              <template v-for="(talent, i) in talents">
                  <div class="row mb-5" :key="i">
                      <div class="col-3">
                          <img :src="require(`../assets/images/talents/${talent.filename}`)" alt="talent">
                      </div>
                      <div class="col-6">
                          <a href="">{{talent.name}}</a>
                      </div>
                      <div class="col-3">
                          <div class="buttonClass d-flex float-right">
                              <div class="levelUp" @click="levelUpHandler">
                                <img src="../assets/images/level_up.svg" alt="level_up">
                              </div>
                              
                              <div class="levelDown" @click="levelDownHandler">
                                  <img src="../assets/images/level_down.svg" alt="level_down">
                              </div>
                          </div>
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
    data(){
        return{
            // this data is only temporary and only be use in view testing. Remove later.
            talents:[
                {
                  id: 1234,
                  character_id: 1234,
                  name: "Tempered Sword",
                  description: "",
                  filename: "tempered_sword.png"  
                },
                {
                  id: 1234,
                  character_id: 1234,
                  name: "Searing Onslaught",
                  description: "",
                  filename: "searing_onslaught.png"  
                },
                {
                  id: 1234,
                  character_id: 1234,
                  name: "Dawn",
                  description: "",
                  filename: "dawn.png"  
                },
                {
                  id: 1234,
                  character_id: 1234,
                  name: "Relentless",
                  description: "",
                  filename: "relentless.png"  
                },
                {
                  id: 1234,
                  character_id: 1234,
                  name: "Blessing of Phoenix",
                  description: "",
                  filename: "blessing_of_phoenix.png"  
                },
                {
                  id: 1234,
                  character_id: 1234,
                  name: "Tradition of the Dawn Knight",
                  description: "",
                  filename: "tradition_of_the_dawn_knight.png"  
                }
            ]
        }
    },
  components: {
    MainBackground,
    Simplebar,
  },
  props:{
      character_id:{
          type: Number,
          //required: true
      }
  },
  methods: {
    closeHandler() {},
    levelUpHandler(){},
    levelDownHandler(){}
  },
};
</script>

<style scoped>
.mainTalentClass {
  height: 100%;
}

.talentListClass {
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

.levelUp, .levelDown{
    cursor:pointer;
    height: 30px;
    width: 30px;
}

</style>