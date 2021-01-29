<template>
  <div class="footerClass">
    <router-view name="footer"></router-view>
  </div>
</template>

<style>
.footerClass {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.nextButtonClass {
  color: white;
  margin-bottom: 10px;
}

.naviButtonClass:hover {
  cursor: pointer;
}

.buttonWithBGClass{
    text-align: left;
    padding-left: 25px;
}

.buttonWithBGClass:hover{
    cursor: pointer;
}

.buttonWithBGClass > span{
    font-size: 0.875rem;
}
</style>