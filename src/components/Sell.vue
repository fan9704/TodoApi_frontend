<template>
  <div class="container-fluid SellBody">
    <h2 class="title">Product Infromation</h2>
    <label for="">Search By name:</label>
    <select name="type" id="type" v-model="seleted" @change="getProducts()">
      <option value="All" selected>All</option>
      <option
        v-bind:value="product.id"
        :key="product"
        v-for="product in selection"
      >
        {{ product.name }}
      </option>
    </select>
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
      :key="index"
      v-for="(product, index) in products"
    >
      <div class="col-2 todo_item">{{ product.name }}</div>
      <div class="col-2 todo_item">{{ product.type }}</div>
      <div class="col-2 todo_item">{{ product.quantity }}</div>
      <div class="col-2 todo_item">{{ product.purchaseDate }}</div>
      <div class="col-2 todo_item">{{ product.cost }}</div>
      <div class="col-2 todo_item">
        <button
          class="btn btn-outline-secondary"
          v-on:click="detail(product.id)"
        >
          Detail
        </button>
        <button class="btn btn-outline-warning" v-on:click="sell(product.id)">
          Sell
        </button>
      </div>
    </div>
  </div>
  <!-- Detail Form -->
  <div class="container-fluid sellform" v-show="show">
    <h2 class="title" style="color: white">Sell Product</h2>
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
          disabled
          readonly
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
          disabled
          readonly
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="detail_quantity" class="col-sm-2 col-form-label badge bg-dark"
        >現有數量</label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="detail_quantity"
          v-model="detail_quantity"
          disabled
          readonly
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
          disabled
          readonly
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
          disabled
          readonly
        />
      </div>
    </div>
    <div class="mb-3 row">
      <div class="col-sm-12">
        <button class="btn btn-success" v-on:click="edittodo(id)">
          確認
        </button>
        <button class="btn btn-danger" v-on:click="close">取消</button>
      </div>
    </div>
  </div>
  <!-- Sell Form -->
  <div class="container-fluid sellform" v-show="show2">
    <h2 class="title" style="color: white">Sell Product</h2>
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
          disabled
          readonly
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="detail_quantity" class="col-sm-2 col-form-label badge bg-dark">現有數量</label>
      <div class="col-sm-4">
        <input
          type="text"
          class="form-control"
          id="detail_quantity"
          v-model="detail_quantity"
          disabled
          readonly
        />
        </div>
            <label
          for="detail_quantity"
          class="col-sm-2 col-form-label badge bg-dark"
          >賣出數量</label>
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            id="detail_quantity"
            v-model="Sell_quantity"
          />
      </div>
    </div>
    <div class="mb-3 row">
      <div class="col-sm-12">
        <button class="btn btn-success" v-on:click="edittodo(id)">
          確認
        </button>
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
      selection: [],
      seleted: "",
      detail_name: "",
      detail_type: "",
      detail_quantity: "",
      detail_purchaseDate: "",
      detail_cost: "",
      detail_price: "",
      detail_sellDate: "",
      show: false,
      show2: false,
      sell_quantity:"",
    };
  },
  methods: {
    async getProducts() {
      let url = "/api/Products/" + this.seleted;
      if (this.seleted == "All") {
        url = "/api/Products";
        const { data } = await axios.get(url);
        this.products = data;
      } else {
        const { data } = await axios.get(url);
        this.products = [data];
      }
    },
    getSingle(id) {
      let url = "/api/Products/" + id;
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          this.products = response.data;
          //window.location.reload(true);
        })
        .catch((error) => console.log(error));
    },
    detail(id) {
      this.show = !this.show;
      let url = "/api/Products/" + id;
      axios
        .get(url)
        .then((response) => {
          //console.log(response.data.purchaseDate);
          this.detail_name = response.data.name;
          this.detail_type = response.data.type;
          this.detail_quantity = response.data.quantity;
          this.detail_purchaseDate = new Date(response.data.purchaseDate);
          this.detail_cost = response.data.cost;
        })
        .catch((error) => console.log(error));
    },
    close() {
      this.show = false;
      this.show2 = false;
    },
    sell(id) {
      this.show2 = !this.show2;
      let url = "/api/Products/" + id;
      axios
        .get(url)
        .then((response) => {
          //console.log(response.data.purchaseDate);
          this.detail_name = response.data.name;
          this.detail_quantity = response.data.quantity;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("/api/Products")
      .then((response) => {
        this.products = response.data;
        this.selection = response.data;
      })
      .catch((error) => console.log(error));
  },
  name: "SellView",
};
</script>

<style>
h2.title {
  text-align: center;
  padding: 20px;
}
.row {
  margin: 20px 0px;
}
.sellform {
  background: linear-gradient(rgb(72, 163, 223), rgb(57, 207, 218));
  /* border: solid 5px rgb(3, 88, 3); */
  border-radius: 20px;
  position: fixed;
  right: 15%;
  left: 15%;
  top: 15%;
  width: 70%;
  padding: 40px;
}
.SellBody{
  background: linear-gradient(white,rgb(127, 255, 255));
  padding: 20px;
}
</style>