<template>
  <div class="previewClass">
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
        <button-character
          :name="item"
          :imagePath="require(`../assets/images/${item}.png`)"
          :key="i"
          class="m-2"
          :style="{textAlign:'center'}"
        />
      </template>
    </simplebar>
  </div>
</template>

<script>
import ButtonCharacter from "./ButtonCharacter.vue";
import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  components: {
    Simplebar,
    ButtonCharacter,
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
  background-color: #d9cab4;
  background-image: url(../assets/images/MainPageBg.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  padding: 15px;
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
</style>