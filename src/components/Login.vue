<template>
  <div class="container-fluid form-body">
    <transition name="slide">
    <div class="container-fluid login-form" v-show="isShow">
      <h2 class="title">Login Now!</h2>
      <div class="form-floating row form-border">
        <input
          type="text"
          class="form-control"
          id="floatingInput2"
          placeholder="Username"
          v-model="username"
        />
        <label for="floatingInput2">Username</label>
      </div>
      <div class="form-floating row form-border">
        <input
          type="password"
          class="form-control"
          id="floatingInput"
          placeholder="password"
          v-model="password"
        />
        <label for="floatingInput">Password</label>
      </div>
      <div class="row form-border">
        <button class="col-6 btn btn-info" v-on:click="reset">Reset</button>
        <button class="col-6 btn btn-info" v-on:click="login">Login</button>
      </div>
      <div class="row" style="text-align: center">
        <div class="col-12" v-on:click="slidetoggle">Hasn,t Account <a href="#"> Register Now!!</a></div>
      </div>
    </div>
    </transition>
    <!-- register form -->
    <transition name="slide">
    <div class="container-fluid register-form" v-show="!isShow">
      <h2 class="title">Register Now!</h2>
      <div class="form-floating row form-border">
        <input
          type="text"
          class="form-control"
          id="floatingInput2"
          placeholder="Username"
          v-model="username"
        />
        <label for="floatingInput2">Username</label>
      </div>
      <div class="form-floating row form-border">
        <input
          type="password"
          class="form-control"
          id="floatingInput"
          placeholder="Psassword"
          v-model="password"
        />
        <label for="floatingInput">Password</label>
      </div>
      <div class="row form-border">
        <button class="col-6 btn btn-info" v-on:click="reset">Reset</button>
        <button class="col-6 btn btn-info" v-on:click="register">
          Register
        </button>
      </div>
      <div class="row" style="text-align: center">
        <div class="col-12" v-on:click="slidetoggle">Has Account<a href="#"> Login Now!!</a></div>
      </div>
    </div>
    </transition>
  </div>
</template>

<style scoped>
.form-body {
  background: linear-gradient(rgb(127, 255, 255), white,rgb(127, 255, 255));
  padding: 20px;
  height: 90vh;
}
h2.title {
  text-align: center;
  color: rgb(83, 83, 83);
}
.login-form {
  width: 70%; 
  margin: auto;
  border-radius: 5px;
  border: 3px solid aqua;
  padding: 10px;
  background: linear-gradient(rgb(129, 236, 236), rgb(42, 191, 236));
  position: absolute; 
   left: 10%;
  right: 10%; 
}
.register-form {
  width: 70%; 
  margin: auto;
  border-radius: 5px;
  border: 3px solid aqua;
  padding: 10px;
  background: linear-gradient(rgb(129, 236, 236), rgb(42, 191, 236));
  position: absolute; 
   left: 10%;
  right: 10%; 
}
.col-12 a{
  text-decoration: none;
  color:rgb(68, 104, 221);
}
.slide-leave-active,
.slide-enter-active {
  transition: all 0.7s ease;
  transform: opacity;
}
.slide-enter-from {
  transform: translateY(100%);
  opacity:0;
}
.slide-enter-to {
  /* transform: translateY(-50%); */
  opacity:1;
}
.slide-leave-from {
  /* transform: translateY(-50%); */
   opacity:1;
}
.slide-leave-to {
  transform: translateY(100%);
   opacity:0;
}

</style>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      isShow:true,
    };
  },
  methods: {
    reset() {
      this.username = "";
      this.password = "";
    },
    login() {
      let config = {
        username: this.username,
        password: this.password,
      };
      this.axios
        .post("/api/Account/Login", config)
        .then((response) => {
          if (response.data == true) {
            alert("Login Success");
          }else{
             alert("Login Fail");
          }
        })

        .catch((error) => console.log(error));
    },
    register(){
      let config = {
        username: this.username,
        password: this.password,
      };
      this.axios
        .post("/api/Users", config)
        .then((response) => {
          console.log(response.status);
          if (response.status == 201) {
            this.isShow=!this.isShow;
            alert("Register Success");
          }else{
             alert("Register Fail");
          }
        })

        .catch((error) => console.log(error));
    },
    slidetoggle(){
      this.isShow=!this.isShow;
    }
  },
  name: "LoginView",
};
</script>