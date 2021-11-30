<template >
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
    v-vue-aos="{ animationClass: 'fadeIn animated' }"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/BG1.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Welcome to Shopping mall</h5>
          <p>Sell the most fashionable clothes</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/BG2.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block" style="color: black">
          <h5>Everything you want!</h5>
          <p>What,s more we offer 20% off in toy department</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/BG3.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block" style="color: black">
          <h5>20th anniversary</h5>
          <p>buy 2000 response you 200</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- Nav Menu -->
  <ul class="nav bg-dark justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#nav-bar"
        >Navigation</a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#aboutus">About us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#comment">Comment</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#contact">Contact us</a>
    </li>
  </ul>
  <!-- Card -->
  <div class="container-fluid card-container" id="aboutus">
    <h2 class="card-container-title">About us</h2>
    <div class="row">
      <div class="col-6">
        <div class="card">
          <img
            src="https://picsum.photos/200/150"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <img
            src="https://picsum.photos/200/150"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="card">
          <img
            src="https://picsum.photos/200/150"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <img
            src="https://picsum.photos/200/150"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Comment -->
  <div class="container-fluid comment-container" id="comment">
    <h2 class="card-container-title">Comment</h2>
  </div>
  <!-- Contact -->
  <div class="container-fluid contact-container" id="contact">
    <h2 class="card-container-title">Contact us</h2>
    <div class="row mb-3">
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          placeholder="First name"
          aria-label="First name"
        />
      </div>
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          placeholder="Last name"
          aria-label="Last name"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Your Comment</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
    <div class="mb-3 btn-group justify-content-ends">
      <a class="btn btn-primary">Reset</a>
      <a class="btn btn-primary">Submit</a>
    </div>
  </div>
  <!-- footer -->
  <div class="container-fluid footer row">
      <hr>
    <div class="col-6 img-container">
      <img
        href="##"
        src="../assets/fb.png"
        alt=""
        width="30"
        height="30"
        class="d-inline-block align-text-bottom"
      />FaceBook
      <img
        href="##"
        src="../assets/ig.png"
        alt=""
        width="30"
        height="30"
        class="d-inline-block align-text-bottom"
      />Instagram
    </div>
    <div class="col-6 copyright d-inline-block align-text-bottom">&copy; Copyright 2021, Tim Shoping Mall Corporation</div>
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
  beforeMount() {},
  name: "IndexView",
};
</script>

<style scoped>
.nav-link {
  color: rgb(0, 240, 200);
  margin: 10px 0;
}
.card-container-title {
  text-align: center;
  background: #000;
  color: rgb(0, 240, 200);
  padding: 5px;
  border-radius: 5px;
}
.card {
  border: outset;
  border-radius: 5px;
  display: flex;
  margin: 0 10%;
}
.card-img-top {
  padding: 2%;
}
.card-container {
  padding: 2% 10%;
  background: linear-gradient(rgb(0, 240, 200), white);
}
.comment-container {
  padding: 2% 10%;
  background: linear-gradient(white, rgb(0, 240, 200));
}
.contact-container {
  padding: 2% 10%;
  background: linear-gradient(rgb(0, 240, 200), white);
}
.btn-group {
  float: right;
}
.btn-group a {
  background: linear-gradient(rgb(0, 132, 240), rgb(69, 30, 241));
  border: none;
}
.footer {
  padding: 0px 3%;
  margin-top: 1%;
}
.img-container {
  font-size: 20px;
}
.copyright{
  float: right;
  text-align: right;
}
</style>