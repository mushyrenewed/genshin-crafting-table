<template>
  <div class="footerCharacterSelectClass">
    <b-navbar type="light" class="d-flex justify-content-between">
      <b-navbar-nav>
        <div class="naviButtonClass" @click="goBack">
          <div class="d-flex">
            <img src="../assets/images/prevLogo.png" alt="arrow left" />
          </div>
        </div>
      </b-navbar-nav>
      <b-navbar-nav>
        <pagenation-navi :size="2" />
      </b-navbar-nav>
      <b-navbar-nav>
        <router-link to="/home">
          <div class="naviButtonClass">
            <div class="d-flex">
              <img src="../assets/images/nextLogo.png" alt="arrow right" />
            </div>
          </div>
        </router-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import PagenationNavi from "./PagenationNavigation.vue";

export default {
  components: {
    PagenationNavi,
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>
