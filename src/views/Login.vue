<template>
  <form action="" class="form" id="form">
    <div class="container-fluid form_container form_container2 register-form" style="display:block;">
      <h2>Login Now</h2>
      <div class="mb-3 row">
        <label for="username" class="col-sm-2 col-form-label">Username</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="login_username"
            v-model="login_username"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="password" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="login_password"
            v-model="login_password"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-sm-6">
          <input
            type="reset"
            value="reset"
            class="form-control"
            id="login_reset"
            v-on:click="reset"
          />
        </div>
        <div class="col-sm-6">
          <input
            type="submit"
            value="login"
            class="form-control"
            id="login_submit"
            v-on:click="login"
          />
        </div>
      </div>
      <p class="message">
        Not registered?
        <a href="#" class="message1" v-on:click="show">Create an account</a>
      </p>
    </div>
    <div class="container-fluid form_container form_container1 login-form" style="display:none;">
      <h2>Register Now</h2>
      <div class="mb-3 row">
        <label for="username" class="col-sm-2 col-form-label">Username</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="username"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="first_name" class="col-sm-2 col-form-label">email</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="first_name"
            v-model="email"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="password" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label
          for="last_name"
          class="col-sm-2 col-form-label badge-dark badge text-wrap"
          >check <br />
          password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="last_name"
            v-model="check_password"
          />
        </div>
      </div>
      <!-- register -->
      <hr />
      <div class="mb-3 row">
        <div class="col-sm-6">
          <input
            type="reset"
            value="reset"
            class="form-control"
            id="reset"
            v-on:click="reset"
          />
        </div>
        <div class="col-sm-6">
          <input
            type="submit"
            value="register"
            class="form-control"
            id="submit"
            v-on:click="register"
          />
        </div>
      </div>
      <p class="message">
        Have Account?
        <a href="#" class="message1" v-on:click="show">Login now</a>
      </p>
    </div>
  </form>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      login_username: "",
      login_password: "",
      email: "",
      check_password: "",
      show2: false,
    };
  },
  methods: {
    login() {
      let obj ={
          "username":this.login_username ,
          "password": this.login_password,
        };
        console.log(obj);
      axios
        .post("http://127.0.0.1:8080/api/accounts/login/",obj)
        .then((response) => {
          console.log(response.data);
          if (response.data.login == true) {
            alert("login success");
            window.location.href = "http://127.0.0.1:8080/";
          } else {
            alert(response.data.error);
          }
        })
        .catch((error) => console.log(error));
    },
    register() {
      if (this.password != this.check_password) {
        alert("password and check_password not same");
      } else {
        axios
          .post("../api/accounts/register/", JSON.stringify({
            "username": this.username,
            "password": this.password,
            "email": this.email,
          }))
          .then((response) => {
            console.log(response.data);
            if (response.data.register == true) {
              alert("register success");
              let container1 = document.querySelector(".form_container1");
              let container2 = document.querySelector(".form_container2");
              container1.style.display = "none";
              container2.style.display = "block";
            } else {
              alert("register fail");
            }
          })
          .catch((error) => {
            console.log(error);
            alert("register failed");
          });
      }
    },
    reset() {
      this.username = "";
      this.password = "";
      this.first_name = "";
      this.last_name = "";
      this.login_username = "";
      this.login_password = "";
      this.email = "";
      this.check_password = "";
    },
   
    show() {
      let container1 = document.querySelector(".form_container1");
      let container2 = document.querySelector(".form_container2");
      this.show2 = !this.show2;
      if (this.show2) {
        container1.style.display = "block";
        container2.style.display = "none";
      } else {
        container1.style.display = "none";
        container2.style.display = "block";
      }
    },
  },
  name: "Login",
};
</script>

<style >
.form {
  padding: 10px;
  background-color: #000;
}

.form_container {
  padding: 20px;
  padding-top: 40px;
  height: 90vh;
  background: linear-gradient(rgb(236, 167, 17), rgb(250, 233, 0));
  color: white;
  transition: 0.5s;
  transform: display;
}

.form_container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.mb-3.row {
  padding: 0px 30%;
}

.row label {
  padding: 5px;
  background-color: #000;
  border-radius: 5px;
  text-align: center;
}

#reset,
#submit {
  background-color: #000;
  color: white;
  transition: 0.3s;
}

#reset:hover,
#submit:hover {
  background-color: rgb(73, 69, 69);
}

p.message {
  text-align: center;
}

p.message a {
  text-decoration: none;
  color: #000;
}

.form_container1 {
   transition-property:display;
  transition-timing-function: linear;
  transition-duration: 0.5s;
}
.form_container2 {
  transition-property:display;
  transition-timing-function: linear;
  transition-duration: 0.5s;
}
.profile {
  /* background-color: rgb(104, 99, 99); */
  border: rgb(0, 0, 0) solid 3px;
  border-radius: 5px;
  color: white;
}
</style>