<template>
  <div class="mainSearchClass">
    <main-background>
      <!-- Top Corner -->
      <div class="topCornerClass d-flex justify-content-between mb-2">
        <span> {{ previewType }} </span>

        <span class="closeButtonClass ml-5" @click="closeHandler">
          <img src="../assets/images/close.svg" alt="close" />
        </span>
      </div>

      <!-- Search Bar -->
      <div class="input-group input-group-sm mb-2 w-75">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
        <span
          class="input-group-text filterClass"
          id="inputGroup-sizing-sm"
          @click="filterHandler"
        >
          <img src="../assets/images/filter.svg" alt="filter" />
        </span>
      </div>

      <!-- Filter Section -->
      <b-form-radio-group
        v-model="filterSelected"
        :options="options"
        class="mb-3"
        id="radioGroup"
        value-field="item"
        text-field="name"
        disabled-field="notEnabled"
        size="sm"
      ></b-form-radio-group>

      <!-- Result Section -->
      <simplebar class="resultSectionClass d-flex flex-wrap"> 
          <template v-for="(item, i) in items">
              <button-item :name="item.name" :imagePath="require(`../assets/images/${item.filename}`)" :handler="itemHandler" :key="i">

              </button-item>
          </template>
      </simplebar>
    </main-background>
  </div>
</template>

<script>
import MainBackground from "./MainBackground.vue";
import ButtonItem from "./ButtonItem.vue";

import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  data() {
    return {
      filterSelected: "",
      options: [
        { name: "5 Stars", item: "5 Stars" },
        { name: "4 Stars", item: "4 Stars" },
        { name: "3 Stars", item: "3 Stars" },
      ],
      items: [{name:"Wolf Gravestone", filename:"wolf_gravestone.png"}],
    };
  },
  components: {
    MainBackground,
    Simplebar,
    ButtonItem
  },
  computed: {
    previewType() {
      return this.$store.state.previewSearchType;
    },
  },
  methods: {
    closeHandler() {},
    filterHandler() {
      let radioG = document.getElementById("radioGroup");

      radioG.style.display = radioG.style.display === "block" ? "none" : "block";
    },
    itemHandler(){}
  },
};
</script>

<style scoped>
.mainSearchClass {
  height: 100%;
}

.topCornerClass {
  font-weight: bold;
  color: #1d1d1d;
  opacity: 0.64;
}

.filterClass:hover {
  cursor: pointer;
}

#radioGroup {
  display: none;
}

.resultSectionClass {
  width: 100%;
  height: calc(100% - 105px);
}
</style>