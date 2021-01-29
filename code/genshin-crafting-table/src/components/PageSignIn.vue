<template>
  <b-container class="bv-example-row">
    <button-genshin :buttonHandler="signInHandler" 
    v-b-modal.login-modal
    >
      <div
        class="signInButtonClass mt-5 mx-auto"
        :style="{ backgroundImage: `url(${require('../assets/images/woodBlack.png')})` }"
      >
        <p>Sign In</p>
      </div>
    </button-genshin>

    <b-modal
      id="login-modal"
      centered
      hide-footer
      header-class="border-bottom-0"
      size="sm"
    >
      <h3 class="mb-4 pr-2">Save your progress with Google Account</h3>
      <button-genshin class="mb-5" :buttonHandler="googleSignInHandler">
        <div class="googleButton d-flex">
          <div
            class="googleLogoClass d-flex justify-content-center align-items-center"
          >
            <img src="../assets/images/googleLogo.png" alt="" height="29px" />
          </div>
          <div class="d-flex align-items-center h-100 ml-3">
            <span>Sign in with Google</span>
          </div>
        </div>
      </button-genshin>
    </b-modal>
  </b-container>
</template>

<script>
import ButtonGenshin from "./ButtonGenshin.vue";

export default {
  components: {
    ButtonGenshin,
  },
  methods: {
    signInHandler() {},
    googleSignInHandler() {},
  },
};
</script>

<style scoped>
#login-modal h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #71779b;
  margin-top: -1rem;
}

.googleButton {
  cursor: pointer;
  background-color: #04376e;
  border-radius: 5px;
  height: 49px;
}

.googleLogoClass {
  background-color: #ffffff;
  margin: 2px;
  border-radius: 2.5px;
  height: 46px;
  width: 47px;
}
span {
  color: #ffffff;
}

.signInButtonClass {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  width: 255px;
}

.signInButtonClass:focus {
  outline: none;
}

.signInButtonClass > p {
  color: #efd4a5;
  font-size: 1.5rem;
}
</style>