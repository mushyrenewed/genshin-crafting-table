<template>
  <div class="footerTeamNameClass">
      <b-navbar type="light" class="d-flex justify-content-between">
        <b-navbar-nav :style="{ width: '25px' }"> </b-navbar-nav>
        <b-navbar-nav>
          <pagenation-navi :size="2" />
        </b-navbar-nav>
        <b-navbar-nav>
          <router-link to="/characterSelect">
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
  components:{
        PagenationNavi
    }
}
</script>
