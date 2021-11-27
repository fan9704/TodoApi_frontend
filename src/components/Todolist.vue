<template>
  <div class="container-fluid addtodo row">
    <div class="col-6"></div>
    <div class="col-6">
    <label for="" class="todoname">Name?</label>
    <input type="text"  v-model="name" />
    <button class="btn btn-success " v-on:click="addtodo">Add todo</button>
    <button class="btn btn-primary  " v-on:click="gettodo">Show todo</button></div>
    
  </div>
  <div class="container-fluid todobody" v-show="show">
    <h2 class="h2">What You Should DO</h2>
    <div class="row justify-content-center">
      <div class="col-4 todo_item">NAME</div>
      <div class="col-4 todo_item">COMPLETE?</div>
      <div class="col-4 todo_item">Operation</div>
    </div>
    <hr />
    <div class="row justify-content-center" :key="todo" v-for="todo in todos">
      <!-- <div class="col-3 todo_item">{{ todo.id }}</div> -->
      <div class="col-4 todo_item">{{ todo.name }}</div>
      <div class="col-4 todo_item">{{ todo.isComplete }}</div>
      <div class="col-4 todo_item">
        <button class="btn btn-warning" v-on:click="edittodo(todo.id)">
          Edit
        </button>
        <button class="btn btn-danger" v-on:click="deltodo(todo.id)">
          Delete
        </button>
      </div>
    </div>
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
        .post("/api/TodoItems", config)
        .then((response) => {
          console.log(response.data);
          alert("Create Succeed");
          this.window.location.href("/todoitems");
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
          window.location.href("/todoitems");
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
label.todoname{
  margin: auto 20px;
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
.addtodo{
  margin: 20px auto;
  width: 100%;
}
.todobody{
  background: linear-gradient(white,rgb(127, 255, 255));
  padding: 20px;
}
</style>