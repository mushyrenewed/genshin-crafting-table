<template>
  <b-container class="bv-example-row">
    <sign-in-button v-b-modal.login-modal label="Sign In" :handler="signInHandler" class="mt-5 mx-auto" />
    
    <b-modal id="login-modal" centered hide-footer header-class="border-bottom-0">
      <h3 class="mb-4 pr-2">Save your progress with Google Account</h3>
      <google-sign-in-button class="mb-5"/>
    </b-modal>


    
  </b-container>
</template>

<script>
import SignInButton from "./ButtonSignIn.vue";

import GoogleSignInButton from "./ButtonGoogleSignIn.vue";


export default {
  components: {
    SignInButton,
    GoogleSignInButton,
  },
  methods: {
    signInHandler() {},
  },
};
</script>

<style scoped>

#login-modal h3{
    font-size: 1.5rem;
    font-weight: bold;
    color: #71779B;
    margin-top: -1rem;
}

</style>