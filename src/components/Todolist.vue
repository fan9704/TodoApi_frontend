<template>
  <div class="container-fluid">
    <div class="container-fluid container" v-show="show">
      <h2 class="h2">What You Should DO</h2>
      <div class="row justify-content-center">
        <div class="col-3 todo_item">NAME</div>
        <div class="col-3 todo_item">COMPLETE?</div>
        <div class="col-3 todo_item">Operation</div>
      </div>
      <hr />
      <div class="row justify-content-center" :key="todo" v-for="todo in todos">
        <!-- <div class="col-3 todo_item">{{ todo.id }}</div> -->
        <div class="col-3 todo_item">{{ todo.name }}</div>
        <div class="col-3 todo_item">{{ todo.isComplete }}</div>
        <div class="col-3 todo_item">
          <button class="btn btn-warning" v-on:click="edittodo(todo.id)">
            Edit
          </button>
          <button class="btn btn-danger" v-on:click="deltodo(todo.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
    <div class="container-fluid form">
        <h2>Add todo</h2>
      <div class="row">
        <div class="col-12">
            <label for="">Name</label>
            <input type="text" v-model="name">
        </div>
      </div>
    </div>
    <button class="btn btn-success" v-on:click="addtodo">Add todo</button>
    <button class="btn btn-primary" v-on:click="gettodo">Show todo</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: [],
      show: true,
      id: "",
      name: "",
      isComplete: "",
    };
  },
  methods: {
    gettodo() {
      this.show = !this.show;
    },
    addtodo() {
      let config = {
        name: this.name,
        isComplete: false,
      };
      axios
        .post("/api/Products", config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
    edittodo(id) {
      let url = "/api/TodoItems/" + id;
      let config = null;
      axios
        .put(url, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
    deltodo(id) {
      let url = "/api/TodoItems/" + id;
      axios
        .delete(url)
        .then((response) => {
          console.log(response);
          window.location.href("/todoitems")
        })
        .catch((error) => console.log(error));
    },
  },
  beforeMount() {
    axios
      .get("/api/TodoItems")
      .then((response) => {
        console.log(response);
        this.todos = response.data;
      })
      .catch((error) => console.log(error));
  },
  name: "TodolistView",
};
</script>
    
<style scoped>
.container {
  margin: 0 auto;
}
h2.h2 {
  text-align: center;
  padding: 20px;
}
.todo_item {
  text-align: center;
}
.justify-content-center .col-3 {
  margin: 10px 0px;
}
</style>