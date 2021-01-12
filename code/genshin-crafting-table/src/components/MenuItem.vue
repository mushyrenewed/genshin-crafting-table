<template>
  <div class="menuItemClass d-flex">
    <diamond />
    <menu-button :label="label" class="ml-4" :handler="handler"/>
  </div>
</template>

<script>
import diamond from "./Diamond.vue";
import MenuButton from "./ButtonMenu.vue";

export default {
    props:{
        label: String,
        handler: Function
    },
  components: {
    diamond,
    MenuButton,
  },
};
</script>

<style scoped>
.menuItemClass:hover > .diamondOuterClass{
    border-color: white;
}
</style>

