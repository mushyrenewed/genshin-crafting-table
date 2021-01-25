<template>
  <div class="previewClass">
    <main-background>
      <!-- Top Corner -->
      <div class="topCornerClass d-flex justify-content-between mb-2">
        <span> Preview </span>

        <span>{{ currentPreviewPage }}</span>

        <span class="closeButtonClass ml-5" @click="closeHandler">
          <img src="../assets/images/close.svg" alt="close" />
        </span>
      </div>

      <!-- Content -->
      <simplebar class="contentClass d-flex flex-wrap">
        <template v-for="(item, i) in currentPreviewItems">
          <button-genshin :key="i" :buttonHandler="previewItemHandler" class="m-2">
            <div
              class="characterButtonClass d-flex flex-column justify-content-center"
            >
              <img
                :src="require(`../assets/images/${item}.png`)"
                alt="character"
                height="67px"
                width="67px"
              />
              <p class="mt-1 text-center">{{ item }}</p>
            </div>
          </button-genshin>
        </template>
      </simplebar>
    </main-background>
  </div>
</template>

<script>
import ButtonGenshin from "./ButtonGenshin.vue";
import MainBackground from "./MainBackground.vue";

import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  components: {
    Simplebar,
    ButtonGenshin,
    MainBackground,
  },
  computed: {
    currentPreviewPage() {
      return this.$store.state.previewPage;
    },
    currentPreviewItems() {
      return this.$store.state.previewItems;
    },
  },
  methods: {
    closeHandler() {},
    previewItemHandler() {},
  },
};
</script>

<style scoped>
.previewClass {
  height: 100%;
}

.contentClass {
  height: calc(100% - 25px);
  width: 100%;
}

span {
  font-weight: bold;
  color: #1d1d1d;
  opacity: 0.64;
}

.closeButtonClass:hover {
  cursor: pointer;
}

.characterButtonClass {
  background-color: rgba(255, 255, 255, 0.54);
  border-radius: 5px;
  max-width: 80px;
  line-height: normal;
  padding: 5px;
  cursor: pointer;
}
.characterButtonClass:focus,
.characterButtonClass:hover {
  box-shadow: 0 0 5px rgb(81, 238, 133);
}

.characterButtonClass > p {
  margin: 0;
  font-size: 0.875rem;
}
</style>