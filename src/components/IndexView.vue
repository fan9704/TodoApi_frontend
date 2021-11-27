<template >
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/BG1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome to Shopping mall</h5>
        <p>Sell the most fashionable clothes</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/BG2.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block" style="color:black;">
        <h5>Everything you want!</h5>
        <p>What,s more we offer 20% off in toy department</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/BG3.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block" style="color:black;">
        <h5>20th anniversary</h5>
        <p>buy 2000 response you 200</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="container-fluid">
    <!-- <h2>Product Catalogs</h2>
    <div class="row">
      <div v-for="todo in todos" :key="todo" class="col-3">
        {{ todo }}
      </div>
    </div> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      todos: [],
      show2: true,
    };
  },
  methods: {},
  beforeMount() {
  
  },
  name: "IndexView",
};
</script>

<style scoped>

</style>