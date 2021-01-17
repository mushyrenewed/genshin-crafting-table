<template>
    <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="tab">
        <a
          class="nav-link active"
          data-toggle="tab"
          href=""
          role="tab"
          aria-controls="20"
          aria-selected="true"
          >20</a
        >
      </li>
      <li class="nav-item" role="tab">
        <a
          class="nav-link"
          data-toggle="tab"
          href=""
          role="tab"
          aria-controls="40"
          aria-selected="false"
          >40</a
        >
      </li>
      <li class="nav-item" role="tab">
        <a
          class="nav-link"
          data-toggle="tab"
          href=""
          role="tab"
          aria-controls="50"
          aria-selected="false"
          >50</a
        >
      </li>
      <li class="nav-item" role="tab">
        <a
          class="nav-link"
          data-toggle="tab"
          href=""
          role="tab"
          aria-controls="60"
          aria-selected="false"
          >60</a
        >
      </li>
      <li class="nav-item" role="tab">
        <a
          class="nav-link"
          data-toggle="tab"
          href=""
          role="tab"
          aria-controls="70"
          aria-selected="false"
          >70</a
        >
      </li>
      <li class="nav-item" role="tab">
        <a
          class="nav-link"
          data-toggle="tab"
          href=""
          role="tab"
          aria-controls="80"
          aria-selected="false"
          >80</a
        >
      </li>
      <li class="nav-item" role="tab">
        <a
          class="nav-link"
          data-toggle="tab"
          href=""
          role="tab"
          aria-controls="90"
          aria-selected="false"
          >90</a
        >
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
    props:{
        weapon_id: Number
    }
}
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