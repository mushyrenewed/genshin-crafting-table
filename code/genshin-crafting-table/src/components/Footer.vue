<template>
  <div class="footerClass">
    <b-navbar type="light" class="d-flex" v-if="currentPage == 'PageSignIn'">
      <b-navbar-nav class="ml-auto">
        <button-genshin :buttonHandler="nextHandler" class="nextButtonClass">
          <div class="naviButtonClass">
            <div class="d-flex">
              <span class="mr-3 mt-1">Proceed without logging in</span>
              <img :src="NextLogoPath" alt="arrow right" />
            </div>
          </div>
        </button-genshin>
      </b-navbar-nav>
    </b-navbar>

    <b-navbar
      type="light"
      class="d-flex justify-content-between"
      v-else-if="currentPage == 'PageTeamName'"
    >
      <b-navbar-nav :style="{ width: '41px' }"> </b-navbar-nav>
      <b-navbar-nav>
        <pagenation-navi :size="2" />
      </b-navbar-nav>
      <b-navbar-nav>
        <button-genshin :buttonHandler="nextHandler">
          <div class="naviButtonClass">
            <div class="d-flex">
              <img :src="NextLogoPath" alt="arrow right" />
            </div>
          </div>
        </button-genshin>
      </b-navbar-nav>
    </b-navbar>

    <b-navbar
      type="light"
      class="d-flex justify-content-between"
      v-else-if="currentPage == 'PageCharacterSelect'"
    >
      <b-navbar-nav>
        <button-genshin :buttonHandler="prevHandler">
          <div class="naviButtonClass">
            <div class="d-flex">
              <img :src="PrevLogoPath" alt="arrow right" />
            </div>
          </div>
        </button-genshin>
      </b-navbar-nav>
      <b-navbar-nav>
        <pagenation-navi :size="2" />
      </b-navbar-nav>
      <b-navbar-nav>
        <button-genshin :buttonHandler="nextHandler">
          <div class="naviButtonClass">
            <div class="d-flex">
              <img :src="NextLogoPath" alt="arrow right" />
            </div>
          </div>
        </button-genshin>
      </b-navbar-nav>
    </b-navbar>

    <b-navbar type="light" class="d-flex justify-content-between" v-else>
      <b-navbar-nav>
        <button-genshin :buttonHandler="switchCharHandler">
          <div
            class="buttonWithBGClass d-flex flex-column justify-content-center"
            :style="{
              backgroundImage: `url(${require('../assets/images/buttonBG.png')})`,
              height: `29px`,
              width: `122px`,
            }"
          >
            <span>Switch Team</span>
          </div>
        </button-genshin>
        
      </b-navbar-nav>
      <b-navbar-nav>
        <button-genshin :buttonHandler="saveHandler">
          <div
            class="buttonWithBGClass d-flex flex-column justify-content-center"
            :style="{
              backgroundImage: `url(${require('../assets/images/buttonBG.png')})`,
              height: `29px`,
              width: `82px`,
            }"
          >
            <span>Save</span>
          </div>
        </button-genshin>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import ButtonGenshin from "./ButtonGenshin.vue";
import PagenationNavi from "./PagenationNavigation.vue";

import NextLogo from "../assets/images/nextLogo.png";
import PrevLogo from "../assets/images/prevLogo.png";

export default {
  data() {
    return {
      NextLogoPath: NextLogo,
      PrevLogoPath: PrevLogo,
    };
  },
  components: {
    PagenationNavi,
    ButtonGenshin,
  },
  computed: {
    currentPage() {
      return this.$store.state.page;
    },
  },
  methods: {
    nextHandler() {},
    prevHandler() {},
    switchCharHandler() {},
    saveHandler() {},
  },
};
</script>

<style scoped>
.footerClass {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.nextButtonClass {
  color: white;
  margin-bottom: 10px;
}

.naviButtonClass:hover {
  cursor: pointer;
}

.buttonWithBGClass{
    text-align: left;
    padding-left: 25px;
}

.buttonWithBGClass:hover{
    cursor: pointer;
}

.buttonWithBGClass > span{
    font-size: 0.875rem;
}
</style>