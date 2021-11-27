<template>
  <div class="container">
      <div class="container-fluid inline-container">

           <h2 class="logout">Logout Really??</h2>
  <a href="/">  <button class="btn btn-danger" herf="http://127.0.0.1:8000/">Cancel</button></a>
  <a href="/">  <button class="btn btn-success" herf="http://127.0.0.1:8000/">Confirm</button></a>
      </div>
   
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("/api/accounts/logout/")
      .then((response) => {
        console.log(response);
        if (response.data.logout == true) {
          window.location.href("http://127.0.0.1:8000/");
        }
      })
      .catch((error) => console.log(error));
  },
  name: "Logout",
};
</script>

<style >
body {
  background: linear-gradient(rgb(1, 233, 20), rgb(33, 107, 55));
}
h2.logout {
  text-align: center;
  font-weight: bolder;
  margin: 15px;
  
}
div.container {
  height: 90vh;
}
div.inline-container{
    margin-top: 50px;
    border: solid black 5px;
    border-radius: 10px;
    width: 50%;
    padding: 50px;
    
    color: white;
    background: linear-gradient(rgb(46, 46, 46),rgb(146, 146, 146));
}
.btn{
    margin: 20px;
}
</style>