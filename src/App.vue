<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-bar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="./assets/logo.png"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Shopping Mall!
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <!-- <router-link class="nav-link" to="/todoitems">TodoItems</router-link>  -->
          <router-link class="nav-link" to="/products">Products</router-link>
          <router-link class="nav-link" to="/Sell">Sell</router-link>
          <router-link class="nav-link" to="/Report">Report</router-link>
        </div>
        <div class="navbar-nav nav-right">
          <router-link class="nav-link" to="/Login" v-if="!login"
            >Login!</router-link
          >
          <div class="dropdown" v-else>
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hello {{ username }}!
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end"
              width="auto"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <router-link to="/Login" class="dropdown-item" href="#"
                  >Setting</router-link
                >
              </li>
              <li>
                <a class="dropdown-item" href="#" v-on:click="logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<style>
@media (min-width: 1000px) {
  .nav-right {
    position: absolute;
    right: 0px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      username: "",
      login: false,
    };
  },
  methods: {
    getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    logout() {
      this.axios.get("/api/Account/Logout")
      .then((response)=>{
        console.log(response)
        this.login = false;
        alert("Logout Success");
      })
      .catch((error)=>{
        console.log(error)
      })
        
      
    },
  },

  beforeMount() {
    this.username = this.getCookie("User");
    if (this.username !== undefined) {
      this.login = true;
    } else {
      this.login = false;
    }
    
  },
  created(){
    if(!this.login && !String(window.location.href).split("/").includes("Login")){
         window.location.href="/Login"
    }
  },
};
</script>
