<template>
  <div class="container-fluid productbody">
    <h2 class="title">Product Purchase Infromation</h2>
    <button class="btn btn-primary" v-on:click="addform">Purchase</button>
    <div class="row">
      <div class="col-2 todo_item">名稱</div>
      <div class="col-2 todo_item">類型</div>
      <div class="col-2 todo_item">數量</div>
      <div class="col-2 todo_item">進貨日期</div>
      <div class="col-2 todo_item">成本</div>
      <div class="col-2 todo_item">操作</div>
    </div>
    <div
      class="row justify-content-center"
      :key="product"
      v-for="product in products"
    >
      <div class="col-2 todo_item">{{ product.name }}</div>
      <div class="col-2 todo_item">{{ product.type }}</div>
      <div class="col-2 todo_item">{{ product.quantity }}</div>
      <div class="col-2 todo_item">{{ product.purchaseDate }}</div>
      <div class="col-2 todo_item">{{ product.cost }}</div>
      <div class="col-2 todo_item">
        <button class="btn btn-warning" v-on:click="detail(product.id)">
          Edit
        </button>
        <button class="btn btn-danger" v-on:click="deltodo(product.id)">
          Delete
        </button>
      </div>
    </div>
  </div>
  <!-- editbox -->
  <div class="container-fluid editbox justify-content-center" v-show="edit">
    <h2 class="edittitle">編輯庫存<button class="btn btn-danger" v-on:click="close">X</button></h2>
    <div class="mb-3 row">
      <label for="detail_name" class="col-sm-2 col-form-label badge bg-dark"
        >產品名稱</label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="detail_name"
          v-model="detail_name"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="detail_type" class="col-sm-2 col-form-label badge bg-dark"
        >類型</label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="detail_type"
          v-model="detail_type"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="detail_quantity" class="col-sm-2 col-form-label badge bg-dark"
        >數量</label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="detail_quantity"
          v-model="detail_quantity"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label
        for="detail_purchasedate"
        class="col-sm-2 col-form-label badge bg-dark"
        >購買日期</label
      >
      <div class="col-sm-10">
        <input
          type="date"
          class="form-control"
          id="detail_purchasedate"
          v-model="detail_purchaseDate"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="detail_cost" class="col-sm-2 col-form-label badge bg-dark"
        >成本</label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="detail_cost"
          v-model="detail_cost"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <div class="col-sm-12">
        <button class="btn btn-success" v-on:click="close">確認</button>
        <button class="btn btn-danger" v-on:click="close">取消</button>
      </div>
    </div>
  </div>
  <!-- addbox -->
  <div class="container-fluid addbox justify-content-center" v-show="add">
    <h2 class="edittitle">Purchase New Product <button class="btn btn-danger" v-on:click="close">X</button></h2>
    <div class="mb-3 row">
      <label for="add_name" class="col-sm-2 col-form-label badge bg-dark"
        >產品名稱</label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="add_name"
          v-model="add_name"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="add_type" class="col-sm-2 col-form-label badge bg-dark"
        >類型</label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="add_type"
          v-model="add_type"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="add_quantity" class="col-sm-2 col-form-label badge bg-dark"
        >數量</label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="add_quantity"
          v-model="add_quantity"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label
        for="add_purchasedate"
        class="col-sm-2 col-form-label badge bg-dark"
        >購買日期</label
      >
      <div class="col-sm-10">
        <input
          type="date"
          class="form-control"
          id="add_purchasedate"
          v-model="add_purchaseDate"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="add_cost" class="col-sm-2 col-form-label badge bg-dark"
        >成本</label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="add_cost"
          v-model="add_cost"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <div class="col-sm-12">
        <button class="btn btn-success" v-on:click="edittodo(id)">確認</button>
        <button class="btn btn-danger" v-on:click="close">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      edit: false,
      detail_name: "",
      detail_type: "",
      detail_quantity: "",
      detail_purchaseDate: "",
      detail_cost: "",
      add_name: "",
      add_type: "",
      add_quantity: "",
      add_purchaseDate: "",
      add_cost: "",
      add: false,
    };
  },
  methods: {
    detail(id) {
      this.edit = !this.edit;
      let url = "/api/Products/" + id;
      axios
        .get(url)
        .then((response) => {
          console.log(response.data.purchaseDate);
          this.detail_name = response.data.name;
          this.detail_type = response.data.type;
          this.detail_quantity = response.data.quantity;
          this.detail_purchaseDate = new Date(response.data.purchaseDate);
          this.detail_cost = response.data.cost;
        })
        .catch((error) => console.log(error));
    },
    addform() {
      this.add = !this.add;
    },
    close() {
      this.edit = false;
      this.add = false;
    },
    addtodo() {
      let config = {
        name: this.add_name,
        type: this.add_type,
        quantity: parseInt(this.add_quantity),
        purchaseDate: this.add_purchaseDate,
        cost:parseInt(this.add_cost),
      };
    
      axios
        .post("/api/Products", config)
        .then((response) => {
          console.log(response);
          if(response.statusText=="Created"){
              alert("Create Successed");
              this.add=false;
          }
        })
        .catch((error) => console.log(error));
    },
    edittodo(id) {
      let url = "/api/Products/" + id;
      let config = {
        name: this.detail_name,
        type: this.detail_type,
        quantity: parseInt(this.detail_quantity),
        purchaseDate: this.detail_purchaseDate,
        cost:parseInt(this.detail_cost),
      };
      axios
        .put(url, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
    deltodo(id) {
      let url = "/api/Products/" + id;
      axios
        .delete(url)
        .then((response) => {
          console.log(response);
          window.location.href("/api/Products");
        })
        .catch((error) => console.log(error));
    },
  },
  beforeMount() {
    axios
      .get("/api/Products")
      .then((response) => {
        //console.log(response);
        this.products = response.data;
      })
      .catch((error) => console.log(error));
  },
  name: "ProductView",
};
</script>

<style scoped>
h2.title {
  text-align: center;
  padding: 20px;
}
h2.edittitle{
  text-align: center;
  padding: 20px;
  position: relative;
}
h2.edittitle .btn{
  position: absolute;
  top: 0;
  right: -50px;
}
.row {
  margin: 20px 0px;
}
.editbox,
.addbox {
  border-radius: 20px;
  padding: 0 50px;
  position: fixed;
  top: 10%;
  width: 70%;
  left: 15%;
  right: 15%;
  background: linear-gradient(rgb(72, 163, 223), rgb(57, 207, 218));
}
.col-sm-12 .btn {
  padding: 6px 20px;
  margin: 5px;
}
.productbody{
  background: linear-gradient(white,rgb(127, 255, 255));
  padding: 20px;
}
</style>