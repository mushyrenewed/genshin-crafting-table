<template>
  <div class="mainTeamClass">
    <main-background>
        <!-- Top Corner -->
        <div class="topCornerClass d-flex justify-content-between mb-3">
          <span> Team </span>
    
          <span class="closeButtonClass ml-5" @click="closeHandler">
            <img src="../assets/images/close.svg" alt="close" />
          </span>
        </div>
    
        <!-- Characters -->
        <div class="d-flex mb-5">
            <template v-for="(character, i) in characterSelected">
                <img :src="require(`../assets/images/${character}.png`)" 
                alt="character"
                :key="i"
                class="mr-2">
            </template>
        </div>

        <span>
            Elemental Resonance
        </span>
        <tool-element-resonance 
        :elemental_resonance="['Pyro', 'Pyro']" 
        size="40px"
        class="mt-2 mb-3"
        />
        <small>{{elemental_resonance.name}}</small>
        <p>{{elemental_resonance.description}}</p>
    </main-background>
  </div>
</template>

<script>
import MainBackground from "./MainBackground.vue";
import ToolElementResonance from "./ToolElementResonance.vue";

export default {
    data(){
        return{
            // This should be calculated would the component is loaded
            elemental_resonance:{
                id: 1234,
                name: "Fervent Flames",
                description: "Affected by Cryo for 40% less time. Increases ATK by 25%.",
                effect: ""
            }
        }
    },
  components:{
      MainBackground,
      ToolElementResonance
  },
  computed:{
      characterSelected() {
        return this.$store.state.characterSelected;
      }
  },
  methods: {
    closeHandler() {},
  },
};
</script>

<style scoped>
.mainTeamClass{
    height: 100%;
}

img{
    border-radius: 50%;
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
  color: #1d1d1d;
  opacity: 0.64;
  margin: 0;
  margin-top: 5px;
}
</style>