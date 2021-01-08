<template>
  <div class="pagenationNaviClass">
    <div class="d-flex">
      <template v-for="i in size">
        <template v-if="currentPage == 'PageTeamName' && i == 1">
          <x-circle class="mr-2" :key="i" type="filled" />
        </template>

        <template v-else-if="currentPage == 'PageCharacterSelect' && i == 2">
          <x-circle class="mr-2" :key="i" type="filled" />
        </template>
        
        <template v-else>
          <x-circle class="mr-2" :key="i" />
        </template>
      </template>
    </div>
  </div>
</template>
<script>
import Circle from "./Circle.vue";

export default {
  props: {
    size: Number,
  },
  components: {
    xCircle: Circle,
  },
  computed: {
    currentPage() {
      return this.$store.state.page;
    },
  },
};
</script>