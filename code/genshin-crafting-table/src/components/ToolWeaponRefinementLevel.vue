<template>
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="tab">
        <a
          class="nav-link active"
          data-toggle="tab"
          href=""
          role="tab"
          aria-controls="1"
          aria-selected="true"
          >1</a
        >
      </li>
      <li class="nav-item" role="tab">
        <a
          class="nav-link"
          data-toggle="tab"
          href=""
          role="tab"
          aria-controls="2"
          aria-selected="false"
          >2</a
        >
      </li>
      <li class="nav-item" role="tab">
        <a
          class="nav-link"
          data-toggle="tab"
          href=""
          role="tab"
          aria-controls="3"
          aria-selected="false"
          >3</a
        >
      </li>
      <li class="nav-item" role="tab">
        <a
          class="nav-link"
          data-toggle="tab"
          href=""
          role="tab"
          aria-controls="4"
          aria-selected="false"
          >4</a
        >
      </li>
      <li class="nav-item" role="tab">
        <a
          class="nav-link"
          data-toggle="tab"
          href=""
          role="tab"
          aria-controls="5"
          aria-selected="false"
          >5</a
        >
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
    props: {
        weapon_id: Number
    }
};
</script>

<style scoped>

.nav-tabs{
    border: none;
}

.nav-tabs .nav-link{
    border: none;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
    color: #245785;
  background-color: transparent;
  border:none;
  border-bottom: 2px solid #3b91da;
}

.nav-tabs .nav-link:hover{
    border:none;
}

.nav-tabs .nav-link:focus{
    border: none;
    border-bottom: 2px solid #3b91da;
}

.nav-link {
  font-size: 0.75rem;
}

.nav-link.active {
  border-bottom: 2px solid #3b91da;
}
</style>