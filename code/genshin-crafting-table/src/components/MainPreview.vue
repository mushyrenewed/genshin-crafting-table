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
          <button-item
            :name="item"
            :imagePath="require(`../assets/images/${item}.png`)"
            :key="i"
            class="m-2"
            :style="{ textAlign: 'center' }"
            :handler="previewItemHandler"
          />
        </template>
      </simplebar>
    </main-background>
  </div>
</template>

<script>
import ButtonItem from "./ButtonItem.vue";
import MainBackground from "./MainBackground.vue";

import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  components: {
    Simplebar,
    ButtonItem,
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
</style>