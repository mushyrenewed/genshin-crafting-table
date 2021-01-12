<template>
  <div class="buttonMenuClass" @click="handler">
      <span>{{label}}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    handler: Function,
  },
};
</script>

<style scoped>
.buttonMenuClass > span{
    color: white;
}
.buttonMenuClass{
    border-radius: 2.5px;
    padding: 10px;
    width:100%;
    cursor: pointer;
}

.buttonMenuClass:hover,
.buttonMenuClass:focus {
  background-color: white;
}

.buttonMenuClass:hover > span, 
.buttonMenuClass:focus > span{
    color:#04376E;
}
</style>