import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import * as VueAos from 'vue-aos'
const app = createApp(App);
app.use(router);
app.use(VueAos); //Can use comment to seperate then and write only one line
// app.use(VueAxios);
// app.use(axios);
app.mount('#app')
    // createApp(App).use(router).mount('#app')