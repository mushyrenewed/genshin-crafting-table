<template>
    <!-- Top Corner -->
    <div class="topCornerClass d-flex justify-content-between">
      <span> Preview </span>

      <span>{{ label }}</span>

      <span class="closeButtonClass ml-5" @click="closeHandler">
        <img src="../assets/images/close.svg" alt="close" />
      </span>
    </div>
</template>

<script>
export default {
    props:{
        label: String,
        closeHandler: Function
    }
}
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