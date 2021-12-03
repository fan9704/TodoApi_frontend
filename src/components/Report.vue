<template>
  <div class="container-fluid ExpectedReportBody">
    <h2 class="title">Cost for the period</h2>
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
        <div class="col-2">{{ product.name }}</div>
        <div class="col-2">{{ product.cost }}</div>
        <div class="col-2">{{ product.price }}</div>
        <div class="col-2">{{ product.quantity }}</div>
        <input
          class="col-2"
          v-bind:value="(product.cost) * product.quantity"
          readonly
          disabled
        />
        <div class="col-2" v-show="false">
          {{
            (total[index] = ( product.cost) * product.quantity)
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
          class="col-2 totalcost"
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
    </div>
    <div
      class="container-fluid"
      :key="index"
      v-for="(product, index) in Records"
    >
      <div class="row">
        <div class="col-2">{{ product.id }}</div>
        <div class="col-2">{{ product.name }}</div>
        <div class="col-2">{{ product.sell_quantity }}</div>
        <div class="col-2">{{ product.sellDate }}</div>
        <input class="col-2" v-bind:value="product.profit" readonly disabled />
        <div class="col-2" v-show="false">
          {{ (totalrecord[index] = product.profit) }}
          {{ (totalrecordname[index] = product.name) }}
          {{ (singlerecord[index] = product.profit / product.sell_quantity) }}
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
  <div class="container-fluid RateBody">

  </div>
</template>

<script>
import axios from "axios";
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
      singlerecord:[],
    };
  },
  computed: {//calculate sum record
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
  },
  watch: {//watch chartdata 只要 chartData 改變，就要重新渲染圖表 
    chartData() {
      this.$data._chart.destroy(); /* 官方文件 api 提供的 destroy() 方法 */
      this.renderChart(
        this.chartData,
        this.options
      ); /* 重新渲染圖表的 function */
    },
    deep: true,
  },
  created() {//get products and sellrecords
    axios
      .get("/api/Products")
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => console.log(error));

    axios
      .get("/api/SellRecords")
      .then((response) => {
        this.Records = response.data;
      })
      .catch((error) => console.log(error));
  },
  updated() {//chart
    let ctx = document.getElementById("example");
    new Chart(ctx, {
      type: "bar", // 圖表類型
      data: {
        labels: this.totalrecordname, // 標題
        datasets: [
          {
            label: "Per Type of Revenue", // 標籤
            data: this.totalrecord, // 資料
            backgroundColor: [
              "rgb(0, 255, 170)",
            ],
            borderWidth: 5,
          },
            {
            label: "Per Product of Revenue", // 標籤
            data: this.singlerecord, // 資料
            backgroundColor: [
              "rgb(190, 233, 72)",
            ],
            borderWidth: 5, 
          },
        ],
      },
       options: {
          plugins: {
                title: {
                  display: true,
                  text: 'Per type Product profit',
                },
        }
       }
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
                  text: 'Per Product profit',
                },
        }
       }
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
.RateBody{
  background: linear-gradient(white, rgb(127, 255, 255));
  padding: 20px;
}
</style>