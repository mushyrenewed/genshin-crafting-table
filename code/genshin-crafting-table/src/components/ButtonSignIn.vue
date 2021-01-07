<template>
  <div class="signInButtonClass" @click="handler" :style="{ backgroundImage: `url(${image})`}">
    <p>{{ label }}</p>
  </div>
</template>

<script>
import background from '../assets/images/woodBlack.png';

export default {
  data() {
    return {
        image: background
    };
  },
  props: {
    label: String,
    handler: Function,
  },
};
</script>

<style scoped>
.signInButtonClass{
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    width: 255px;
}

.signInButtonClass:focus{
  outline: none;
}

p {
  color: #efd4a5;
  font-size: 1.5rem;
}
</style>