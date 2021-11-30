<template>
  <form action="" class="form" id="form">
    <div class="container-fluid form_container form_container2 register-form">
      <h2>Edit Your Profile</h2>

      <div class="mb-3 row">
        <label for="email" class="col-sm-2 col-form-label">email</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="email" v-model="email" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="first_name" class="col-sm-2 col-form-label"
          >first_name</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="first_name"
            v-model="first_name"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="last_name" class="col-sm-2 col-form-label">last_name</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="last_name"
            v-model="last_name"
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
          for="check_password"
          class="col-sm-2 col-form-label badge-dark badge text-wrap"
          >check <br />
          password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="check_password"
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
            value="edit complete!"
            class="form-control"
            id="submit"
            v-on:click="edit"
          />
        </div>
      </div>
      <p class="message" v-on:click="get_profile">
        No need to edit? <a href="#" class="message2" v-on:click="show">See your setting now</a>
      </p>
    </div>
    <div class="container-fluid form_container form_container1 login-form">
      <h2>Your Profile</h2>
      <div class="mb-3 row">
        <label for="username" class="col-sm-2 col-form-label">Username</label>
        <div class="col-sm-1"></div>
        <div class="col-sm-9 profile">
          {{ username }}
        </div>
      </div>
      <div class="mb-3 row">
        <label for="email" class="col-sm-2 col-form-label">email</label>
        <div class="col-sm-1"></div>
        <div class="col-sm-9 profile">
          {{ email }}
        </div>
      </div>
      <div class="mb-3 row">
        <label for="first_name" class="col-sm-2 col-form-label"
          >first_name</label
        >
        <div class="col-sm-1"></div>
        <div class="col-sm-9 profile">
          {{ first_name }}
        </div>
      </div>
      <div class="mb-3 row">
        <label for="last_name" class="col-sm-2 col-form-label">last_name</label>
        <div class="col-sm-1"></div>
        <div class="col-sm-9 profile">
          {{ last_name }}
        </div>
        <hr />
        <p class="message">
          need to edit? <a href="#" class="message2" v-on:click="show">Edit your setting now!</a>
        </p>
      </div>
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
    };
  },
  methods: {
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
    edit() {
      if (this.password != this.check_password) {
        alert("password and check_password not same");
      } else {
        axios
          .post("http://127.0.0.1:8000/accounts/edit/", {
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.edit == true) {
              alert("Edit success");
            } else {
              if(response.data.error != null)alert("Edit Failed\n"+response.data.error);
            }
          })
          .catch((error) => {
            console.log(error);
            alert("Edit failed Has Unexpected Error");
          });
      }
    },
    get_profile() {
      axios
        .get("http://127.0.0.1:8000/accounts/get_profile/")
        .then((response) => {
          console.log(response.data);
          this.username=response.data.username;
          this.email=response.data.email;
          this.first_name=response.data.first_name;
          this.last_name=response.data.last_name;
        }).catch((error) => {
            console.log(error);
          });
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
  name: "Editprofile",
};
</script>


<style>
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

.login-form {
  display: none;
}

.profile {
  /* background-color: rgb(104, 99, 99); */
  border: rgb(0, 0, 0) solid 3px;
  border-radius: 5px;
  color: white;
  background-color: rgb(77, 70, 70);
}
</style>