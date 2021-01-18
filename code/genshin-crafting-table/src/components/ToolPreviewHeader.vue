<template>
  <!-- Top Corner -->
  <div class="topCornerClass row">
    <div class="col-3">
      <span> Preview </span>
    </div>

    <div class="col-6 text-center">
      <span>{{ label }}</span>
    </div>

    <div class="col-3 text-right">
      <span class="closeButtonClass" @click="closeHandler">
        <img src="../assets/images/close.svg" alt="close" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    closeHandler: Function,
  },
};
</script>

<style scoped>
.closeButtonClass:hover {
  cursor: pointer;
}

span {
  font-size: 0.875rem;
  font-weight: bold;
  color: #1d1d1d;
  opacity: 0.64;
}
</style>