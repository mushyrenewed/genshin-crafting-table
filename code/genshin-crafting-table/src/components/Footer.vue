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
  </div>
</template>

<script>
import NaviButton from "./ButtonNavigation.vue";
import NextLogo from "../assets/images/nextLogo.png";

export default {
  data() {
    return {
      NextLogoPath: NextLogo,
    };
  },
  components: {
    NaviButton,
  },
  computed: {
    currentPage() {
      return this.$store.state.page;
    }
  },
  methods:{
      nextHandler() {},
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