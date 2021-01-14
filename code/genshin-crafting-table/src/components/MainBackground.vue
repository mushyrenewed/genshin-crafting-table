<template>
  <div class="mainBackgroundClass">
    <img src="../assets/images/tape.png" alt="" class="genshinTapeClass" />
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mainBackgroundClass {
  background-color: #d9cab4;
  background-image: url(../assets/images/MainPageBg.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  padding: 15px;
  position: relative;
}
.genshinTapeClass {
  position: absolute;
  right: 50%;
  margin-top: -25px;
}
</style>