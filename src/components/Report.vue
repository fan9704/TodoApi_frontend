<template>
  <div class="container-fluid ExpectedReportBody">
    <h2 class="title">Variable Cost for the period</h2>
    <div class="row">
      <div class="col-2">Product</div>
      <div class="col-2">Cost</div>
      <div class="col-2">Price</div>
      <div class="col-2">Quantity</div>
      <div class="col-2">Cost</div>
    </div>
    <div
      class="container-fluid"
      :key="index"
      v-for="(product, index) in products"
    >
      <div class="row">
        <div class="col-2">{{ product.Name }}</div>
        <div class="col-2">{{ product.Cost }}</div>
        <div class="col-2">{{ product.Price }}</div>
        <div class="col-2">{{ product.Quantity }}</div>
        <input
          class="col-2"
          v-bind:value="product.Cost * product.Quantity"
          readonly
          disabled
        />

        <div class="col-0" v-show="false">
          {{ (total[index] = product.Cost * product.Quantity) }}
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
          class="col-2 totalcost"
          readonly
          disabled
          v-bind:value="calculate"
        />
        <div class="col-2"></div>
      </div>
    </div>
    <hr />
    <!-- <div class="container-fluid FixCostBody">
      <h2 class="title">Fixed Cost for the period</h2>
      <div class="row">
        <div class="col-2">Name</div>
        <div class="col-2">Type</div>
        <div class="col-2">BeginDate</div>
        <div class="col-2">EndDate</div>
        <div class="col-2">Cost</div>
      </div>
      <div
        class="container-fluid"
        :key="index"
        v-for="(fixedcost, index) in Fixed"
      >
        <div class="row">
          <div class="col-2">{{ fixedcost.name }}</div>
          <div class="col-2">{{ fixedcost.type }}</div>
          <div class="col-2">{{ fixedcost.beginDate.split("T")[0] }}</div>
          <div class="col-2">{{ fixedcost.endDate.split("T")[0] }}</div>
          <input class="col-2" v-bind:value="fixedcost.cost" readonly disabled />

          <div class="col-0" v-show="false">
            {{ (totalfixed[index] = fixedcost.cost) }}
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
            class="col-2 totalcost"
            readonly
            disabled
            v-bind:value="calculatefixedcost"
          />
          <div class="col-2"></div>
        </div>
      </div>
    </div> -->
  </div>
  <!-- Report -->
  <div class="container-fluid ReportBody">
    <h2 class="title">Net profit for the period</h2>
    <div class="row">
      <div class="col-6">
        <canvas id="singleprofit" width="400" height="200"></canvas>
      </div>
      <div class="col-6">
        <canvas id="example" width="400" height="200"></canvas>
      </div>
    </div>
    <div class="row">
      <div class="col-2">ID</div>
      <div class="col-2">Product</div>
      <div class="col-2">Quantity</div>
      <div class="col-2">Sell Date</div>
      <div class="col-2">Profit</div>
      <div class="col-2">Operation</div>
    </div>
    <div
      class="container-fluid"
      :key="index"
      v-for="(product, index) in Records"
    >
      <div class="row">
        <div class="col-2">{{ product.Id }}</div>
        <div class="col-2">{{ product.name }}</div>
        <div class="col-2">{{ product.sell_quantity }}</div>
        <div class="col-2">{{ product.SellDate }}</div>
        <input class="col-2" v-bind:value="product.Profit" readonly disabled />
        <div class="col-2 btn-group">
          <button
            type="button"
            class="btn btn-edit"
            v-on:click="showedit(product.Id)"
          >
            Edit
          </button>
          <button
            type="button"
            class="btn btn-delete"
            v-on:click="showdelete(product.Id)"
          >
            Delete
          </button>
        </div>
        <div class="col-0" v-show="false">
          {{ (totalrecord[index] = product.Profit) }}
          {{ (totalrecordname[index] = product.name) }}
          {{ (singlerecord[index] = product.Profit / product.sell_quantity) }}
        </div>
      </div>
    </div>
    <div class="container-fluid totalprofit">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2">This Period Net Profit</div>
        <input
          class="col-2 totalexpectedprofit"
          readonly
          disabled
          v-bind:value="calculateprofit"
        />
        <div class="col-2"></div>
      </div>
    </div>
    <hr />
  </div>
  <div class="container-fluid RateBody"></div>
  <!-- Form -->
  <div class="container-fluid FormBody">
    <div class="container-fluid editform" v-show="showedi">
      <h2>Edit Sell Record</h2>
    </div>
    <div class="container-fluid delform" v-show="showdel">
      <h2>Delete Sell Record</h2>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import Chart from "chart.js/dist/chart.js";
export default {
  data() {
    return {
      products: [],
      total: [],
      totalname: [],
      Records: [],
      totalrecord: [],
      totalrecordname: [],
      totalfixed: [],
      singlerecord: [],
      Fixed: [],
      detail_sell_quantity: "",
      detail_sellDate: "",
      detail_profit: "",
      detail_name: "",
      detail_id: "",
      showdel: false,
      showedi: false,
    };
  },
  methods: {
    showedit(id) {
      this.showedi = !this.showedi;
      console.log(this.showedi);
      let url = "/api/SellRecords/" + id;
      console.log(url);
      this.axios
        .get(url)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    },
    showdelete(id) {
      this.showdel = !this.showdel;
      this.detail_id = id;
    },
    editrecord(id) {
      let url = "/api/SellRecords/" + id;
      let config = {
        id: id,
        sell_quantity: this.detail_sell_quantity,
        name: this.detail_sell_quantity,
        sellDate: this.detail_sellDate,
        profit: this.detail_profit,
      };
      this.axios
        .put(url, config)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    },
    deleterecord(id) {
      let url = "/api/SellRecords/" + id;
      this.axios
        .delete(url)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    },
  },
  computed: {
    //calculate sum record
    calculate() {
      let sum = 0;
      for (let i = 0; i < this.total.length; i++) {
        sum += parseInt(this.total[i]);
      }
      return sum;
    },
    calculateprofit() {
      let sum = 0;
      for (let i = 0; i < this.totalrecord.length; i++) {
        sum += parseInt(this.totalrecord[i]);
      }
      return sum;
    },
    // calculatefixedcost() {
    //   let sum = 0;
    //   for (let i = 0; i < this.totalfixed.length; i++) {
    //     sum += parseInt(this.totalfixed[i]);
    //   }
    //   return sum;
    // },
  },
  watch: {
    //watch chartdata 只要 chartData 改變，就要重新渲染圖表
    chartData() {
      this.$data._chart.destroy(); /* 官方文件 api 提供的 destroy() 方法 */
      this.renderChart(
        this.chartData,
        this.options
      ); /* 重新渲染圖表的 function */
    },
    deep: true,
  },
  created() {
    //get products and sellrecords
    this.axios
      .get("/api/Products")
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => console.log(error));

    this.axios
      .get("/api/SellRecords")
      .then((response) => {
        this.Records = response.data;
      })
      .catch((error) => console.log(error));
    // this.axios
    //   .get("/api/FixCosts")
    //   .then((response) => {
    //     this.Fixed = response.data;
    //   })
    //   .catch((error) => console.log(error));
  },
  updated() {
    //chart
    let ctx = document.getElementById("example");
    new Chart(ctx, {
      type: "bar", // 圖表類型
      data: {
        labels: this.totalrecordname, // 標題
        datasets: [
          {
            label: "Per Type of Revenue", // 標籤
            data: this.totalrecord, // 資料
            backgroundColor: ["rgb(0, 255, 170)"],
            borderWidth: 5,
          },
          {
            label: "Per Product of Revenue", // 標籤
            data: this.singlerecord, // 資料
            backgroundColor: ["rgb(190, 233, 72)"],
            borderWidth: 5,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Per type Product profit",
          },
        },
      },
    });
    let ctx2 = document.getElementById("singleprofit");
    new Chart(ctx2, {
      type: "line", // 圖表類型
      data: {
        labels: this.totalrecordname, // 標題
        datasets: [
          {
            label: "# of Revenue", // 標籤
            data: this.singlerecord, // 資料
            backgroundColor: [
              // 背景色
              "rgb(190, 233, 72)",
            ],
            borderWidth: 5, // 外框寬度
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Per Product profit",
          },
        },
      },
    });
  },
  name: "ReportView",
};
</script>
<style scoped>
h2.title {
  text-align: center;
  margin: 20px;
  /* color: rgb(190, 233, 72); */
}
input.totalexpectedprofit {
  background: linear-gradient(rgb(30, 255, 30), rgb(0, 255, 13));
}
input.totalcost {
  background: linear-gradient(rgb(255, 89, 89), rgb(248, 134, 134));
}
.ExpectedReportBody {
  background: linear-gradient(white, rgb(127, 255, 255));
  padding: 20px;
}
.ReportBody {
  background: linear-gradient(rgb(127, 255, 255), white);
  padding: 20px;
}

.btn-group .btn {
  background: linear-gradient(rgb(0, 255, 170), rgb(127, 255, 255));
  margin: 0px 5px;
}

.RateBody {
  background: linear-gradient(white, rgb(127, 255, 255));
  padding: 20px;
}
.FormBody {
  background: linear-gradient(rgb(127, 255, 255), white);
  position: relative;
}
.editform,
.delform {
  padding: 20px;
  position: absolute;
  top: 20%;
}
</style>