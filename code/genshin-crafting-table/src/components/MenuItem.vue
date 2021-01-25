<template>
  <div class="menuItemClass d-flex">
    <diamond />
    <button-genshin :buttonHandler="handler" class="ml-4 w-100">
      <div class="buttonMenuClass">
        <span>{{ label }}</span>
      </div>
    </button-genshin>
    
  </div>
</template>

<script>
import diamond from "./Diamond.vue";
import ButtonGenshin from "./ButtonGenshin.vue";


export default {
  props: {
    label: String,
    handler: Function,
  },
  components: {
    diamond,
    ButtonGenshin,
  },
};
</script>

<style scoped>
.menuItemClass:hover > .diamondOuterClass {
  border-color: white;
}

.buttonMenuClass > span {
  color: white;
}
.buttonMenuClass {
  border-radius: 2.5px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}

.buttonMenuClass:hover,
.buttonMenuClass:focus {
  background-color: white;
}

.buttonMenuClass:hover > span,
.buttonMenuClass:focus > span {
  color: #04376e;
}
</style>

