<template>
  <div id="app" class="appClass">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->.
    <video
      poster="./assets/images/GenshinBGPic.jpg"
      loop="loop"
      muted="muted"
      playsInline
      autoPlay
      id="videoBG"
      src="./assets/videos/genshinBG.mp4"
      style="width: 1920px; height: 1080px"
    ></video>
    <genshin-header />
    <genshin-content />
    <genshin-footer />
  </div>
</template>

<script>
import GenshinHeader from "./components/Header.vue";
import GenshinContent from "./components/Content.vue";
import GenshinFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    GenshinHeader,
    GenshinContent,
    GenshinFooter,
  },
  mounted(){
    this.$router.push('/signIn').catch(()=>{});
  }
};
</script>

<style>
body,
html {
  height: 100%;
  overflow-x: hidden;
}

#app {
  font-family: Helvetica, Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

#videoBG {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
}

.simplebar-content,.simplebar-content::before{
    display: flex;
    flex-wrap: wrap;
}
</style>
