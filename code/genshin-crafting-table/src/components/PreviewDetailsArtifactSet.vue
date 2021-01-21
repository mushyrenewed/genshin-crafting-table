<template>
  <div class="previewDetailsArtifactSetClass">
    <simplebar class="artifactList" id="artifactList">
        <template v-for="(item, i) in result">
            <button-item :name="item.name" :imagePath="require(`../assets/images/${item.filename}`)" :handler="itemHandler" :key="i" class="m-2"/>
        </template>     
    </simplebar>
    <div class="artifactSetDetails text-center" id="artifactSetDetails">
      <span class="mb-2">Set Bonuses</span>
      <div class="row mb-2">
        <div class="col-4">
          <small>2-Piece Bonus</small>
        </div>
        <div class="col-8 text-left">
          <p>{{ artifactSetDetails.two_piece_effect }}</p>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-4">
          <small>4-Piece Bonus</small>
        </div>
        <div class="col-8 text-left">
          <p>{{ artifactSetDetails.four_piece_effect }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonItem from "./ButtonItem.vue";

import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  data() {
    return {
      // this is temporary, for view testing purpose. Should pass artiSetID
      // let the component search for the set
      artifactSetDetails: {
        id: 12321,
        name: "Crimsone Witch Flame",
        two_piece_effect: "Pyro DMG Bonus +15%",
        four_piece_effect:
          "Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using an Elemental Skill increases 2-Piece Set effects by 50% for 10s. Max 3 stacks.",
      },
      result:[
          {name:"Witch's End Time", filename:"witch_end_time.png"},
          {name:"Witch's Ever-Burning Plum", filename:"witch_ever-burning_plum.png"},
          {name:"Witch's Flower of Blaze", filename: "witch_flower_of_blaze.png"},
          {name:"Witch's Heart Flames", filename: "witch_heart_flames.png"},
          {name: "Witch's Schorching Flames", filename: "witch_schorching_flames.png"}
          ]
    };
  },
  mounted() {
    let artiDetailDiv = document.getElementById("artifactSetDetails").clientHeight || 200;

    let artifactListDiv = document.getElementById("artifactList");
    artifactListDiv.style.height = `calc(100% - ${artiDetailDiv}px)`;   
  },
  props: {
    artifact_set_id: Number,
  },
  components: {
    Simplebar,
    ButtonItem
  },
  methods:{
      itemHandler(){}
  }
};
</script>

<style scoped>
.previewDetailsArtifactSetClass {
  height: calc(100% - 12px);
}

span {
  font-weight: bold;
  font-size: 0.875rem;
  color: #1d1d1d;
  opacity: 0.64;
}

small {
  font-weight: bold;
  font-size: 0.75rem;
  color: #1d1d1d;
  opacity: 0.64;
}

p {
  font-size: 0.75rem;
}

.artifactSetDetails {
  position: absolute;
  bottom: 0;
  padding: 10px;
}
</style>