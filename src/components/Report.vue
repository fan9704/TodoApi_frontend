<template>
  <div class="container-fluid ExpectedReportBody">
    <h2 class="title">Net profit Expected for the period</h2>
    <div class="row">
      <div class="col-2">Product</div>
      <div class="col-2">Cost</div>
      <div class="col-2">Price</div>
      <div class="col-2">Quantity</div>
      <div class="col-2">Profit</div>
    </div>
    <div
      class="container-fluid"
      :key="index"
      v-for="(product, index) in products"
    >
      <div class="row">
        <div class="col-2">{{ product.name }}</div>
        <div class="col-2">{{ product.cost }}</div>
        <div class="col-2">{{ product.price }}</div>
        <div class="col-2">{{ product.quantity }}</div>
        <input
          class="col-2"
          v-bind:value="(product.price - product.cost) * product.quantity"
          readonly
          disabled
        />
        <div class="col-2" v-show="false">
          {{
            (total[index] = (product.price - product.cost) * product.quantity)
          }}
        </div>
      </div>
    </div>
    <div class="container-fluid totalprofit">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2">Expected Net Profit</div>
        <input
          class="col-2 totalexpectedprofit"
          readonly
          disabled
          v-bind:value="calculate"
        />
        <div class="col-2"></div>
      </div>
    </div>
    <hr />
  </div>
  <div class="container-fluid ReportBody">
    <h2 class="title">Net profit for the period</h2>
    <div class="row">
      <div class="col-2">Product</div>
      <div class="col-2">Cost</div>
      <div class="col-2">Price</div>
      <div class="col-2">Quantity</div>
      <div class="col-2">Profit</div>
    </div>
    <div
      class="container-fluid"
      :key="index"
      v-for="(product, index) in products"
    >
      <div class="row">
        <div class="col-2">{{ product.name }}</div>
        <div class="col-2">{{ product.cost }}</div>
        <div class="col-2">{{ product.price }}</div>
        <div class="col-2">{{ product.quantity }}</div>
        <input
          class="col-2"
          v-bind:value="(product.price - product.cost) * product.quantity"
          readonly
          disabled
        />
        <div class="col-2" v-show="false">
          {{
            (total[index] = (product.price - product.cost) * product.quantity)
          }}
        </div>
      </div>
    </div>
    <div class="container-fluid totalprofit">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2">Expected Net Profit</div>
        <input
          class="col-2 totalexpectedprofit"
          readonly
          disabled
          v-bind:value="calculate"
        />
        <div class="col-2"></div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import axios from "axios";

export default {
  
  data() {
    return {
      products: [],
      total: [],
    };
  },
  computed: {
    calculate() {
      let sum = 0;
      for (let i = 0; i < this.total.length; i++) {
        sum += parseInt(this.total[i]);
      }
      return sum;
    },
  },
  watch: { /* 只要 chartData 改變，就要重新渲染圖表 */
  chartData() {
    this.$data._chart.destroy();  /* 官方文件 api 提供的 destroy() 方法 */
    this.renderChart(this.chartData, this.options); /* 重新渲染圖表的 function */
  },
  deep: true,
},
  created() {
    axios
      .get("/api/Products")
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => console.log(error));
  },
  mounted() {},
  name: "ReportView",
};
</script>
<style scoped>
h2.title {
  text-align: center;
  margin: 20px;
}
input.totalexpectedprofit {
  background: linear-gradient(rgb(30, 255, 30), rgb(0, 255, 13));
}
.ExpectedReportBody {
  background: linear-gradient(white, rgb(127, 255, 255));
  padding: 20px;
}
.ReportBody {
  background: linear-gradient(rgb(127, 255, 255), white);
  padding: 20px;
}
</style>