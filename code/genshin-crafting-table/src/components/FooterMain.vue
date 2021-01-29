<template>
  <div class="footerMainClass">
    <b-navbar type="light" class="d-flex justify-content-between">
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
export default {
  methods: {
    saveHandler() {},
    switchCharHandler() {},
  },
};
</script>
