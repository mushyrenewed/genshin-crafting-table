<template>
  <div class="footerClass">
    <b-navbar type="light" class="d-flex" v-if="currentPage == 'PageSignIn'">
      <b-navbar-nav class="ml-auto">
          <navi-button
            class="nextButtonClass"
            label="Proceed without logging in"
            :logo="NextLogoPath"
            :handler="nextHandler"
            labelOrientation="right"
          />
      </b-navbar-nav>
    </b-navbar>

    <b-navbar type="light" class="d-flex justify-content-between" v-else-if="currentPage == 'PageTeamName'">
      <b-navbar-nav :style="{width:'41px'}">

      </b-navbar-nav>
      <b-navbar-nav>
        <pagenation-navi :size="2" />
      </b-navbar-nav>
      <b-navbar-nav>
        <navi-button
            class="nextButtonClass"
            :logo="NextLogoPath"
            :handler="nextHandler"
            labelOrientation="right"
          />
      </b-navbar-nav>
    </b-navbar>

    <b-navbar type="light" class="d-flex justify-content-between" v-else-if="currentPage == 'PageCharacterSelect'">
      <b-navbar-nav >
        <navi-button
            class="nextButtonClass"
            :logo="PrevLogoPath"
            :handler="prevHandler"
            labelOrientation="right"
          />
      </b-navbar-nav>
      <b-navbar-nav>
        <pagenation-navi :size="2" />
      </b-navbar-nav>
      <b-navbar-nav>
        <navi-button
            class="nextButtonClass"
            :logo="NextLogoPath"
            :handler="nextHandler"
            labelOrientation="right"
          />
      </b-navbar-nav>
    </b-navbar>

     <b-navbar type="light" class="d-flex justify-content-between" v-else>
       <b-navbar-nav>
         <ButtonWithBG label="Switch Team" :imagePath="require('../assets/images/buttonBG.png')" :width="122" :height="29" :handler="switchCharHandler"/>
         
       </b-navbar-nav>
       <b-navbar-nav>
         <ButtonWithBG label="Save" :imagePath="require('../assets/images/buttonBG.png')" :width="82" :height="29" :handler="saveHandler"/>
       </b-navbar-nav>
     </b-navbar>
  </div>
</template>

<script>
import NaviButton from "./ButtonNavigation.vue";
import PagenationNavi from "./PagenationNavigation.vue";
import ButtonWithBG from "./ButtonWithBG.vue";

import NextLogo from "../assets/images/nextLogo.png";
import PrevLogo from "../assets/images/prevLogo.png";


export default {
  data() {
    return {
      NextLogoPath: NextLogo,
      PrevLogoPath: PrevLogo
    };
  },
  components: {
    NaviButton,
    PagenationNavi,
    ButtonWithBG
  },
  computed: {
    currentPage() {
      return this.$store.state.page;
    }
  },
  methods:{
      nextHandler() {},
      prevHandler() {},
      switchCharHandler(){},
      saveHandler(){}
  }
};
</script>

<style scoped>
.footerClass{
    position: fixed;
    bottom: 0;
    width: 100%;
}

.nextButtonClass{
    color: white;
    margin-bottom: 10px;
}
</style>