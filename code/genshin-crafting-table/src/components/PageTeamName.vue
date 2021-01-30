<template>
  <div class="teamPageClass">
    <div
      class="intructionClass d-flex flex-column justify-content-center"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <h2>Let's start</h2>
      <h6>by choosing your team name</h6>
    </div>

    <div class="input-group input-group-lg mt-4 mb-3">
      <span class="input-group-text" id="basic-addon1">
          <img src="../assets/images/feather.svg" alt="">
      </span>
      <input
        type="text"
        class="form-control"
        :placeholder="teamName !== '' ? teamName : 'Team Name'"
        :value="teamName !== '' ? teamName : ''"
        aria-label="Team Name"
        aria-describedby="basic-addon1"
        @change="update($event.target.value)"
        @keypress.enter="enterKeyHander"
      />
    </div>
  </div>
</template>

<script>
import background from "../assets/images/woodBlack.svg";
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      image: background
    };
  },
  computed:{
    ...mapState('team', {
      teamName: state => state.name
    })
  },
  methods:{
    ...mapActions('team',{
      update: 'changeName'
    }),
    enterKeyHander(){
      this.$router.push('/characterSelect')
    }
  }
};
</script>

<style scoped>
.intructionClass {
  background-repeat: no-repeat;
  background-size: contain;
  box-sizing: border-box;
  text-align: left;
  padding-left: 25px;
  margin-top: 50px;
  height: 60px;
}

/* Bootstrap overwrites */
::placeholder{
    color: white!important;
}

:focus::placeholder{
    color: #2c3e50!important;
}

.input-group-text{
    background-color: transparent;
    border: none;   
}

.input-group-lg > .form-control, .input-group-lg > .custom-select, .input-group-lg > .input-group-prepend > .input-group-text, .input-group-lg > .input-group-append > .input-group-text, .input-group-lg > .input-group-prepend > .btn, .input-group-lg > .input-group-append > .btn{
    border-radius: 0;
}

.form-control{
    background-color: transparent;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid black;
    color:#efd4a5;
}

h2 {
  margin: 0;
  font-weight: bold;
  color: #efd4a5;
}

h6 {
  margin: 0;
  color: #ffffff;
  opacity: 0.8;
}
</style>