<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-bar">
  <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img src="./assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Shopping Mall!
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
       <div class="navbar-nav">
         <router-link class="nav-link" to="/">Home</router-link> 
         <router-link class="nav-link" to="/todoitems">TodoItems</router-link> 
         <router-link class="nav-link" to="/products">Products</router-link> 
         <router-link class="nav-link" to="/Sell">Sell</router-link> 
         <router-link class="nav-link" to="/Report">Report</router-link> 
      </div>
    </div>
  </div>
</nav>

  <router-view/>
</template>

<style>

</style>
