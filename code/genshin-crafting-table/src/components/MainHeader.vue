<template>
    <div class="mainHeaderClass d-flex justify-content-between">
        <span>{{page_name}}</span>
        <span v-if="additional_name !== ''">{{additional_name}}</span>
        <span class="closeButtonClass ml-5" @click="close_handler">
          <img src="../assets/images/close.svg" alt="close" />
        </span>
    </div>
</template>

<script>
export default {
    props:{
        page_name: String,
        additional_name: String,
        close_handler: Function
    }
}
</script>


<style scoped>
.closeButtonClass {
  cursor: pointer;
}

span {
  font-weight: bold;
  color: #1d1d1d;
  opacity: 0.64;
  font-size: 0.875rem;
}
</style>