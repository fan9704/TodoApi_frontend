import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as Aos from 'aos'
import Chart from 'vue-chart-3'
const app = createApp(App);
app.use(router);
app.use(Aos); //Can use comment to seperate then and write only one line
app.use(VueAxios, axios);
app.use(Chart)
app.mount('#app')
    // createApp(App).use(router).mount('#app')