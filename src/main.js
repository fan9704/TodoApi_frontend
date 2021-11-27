import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import * as VueAos from 'vue-aos'
const app = createApp(App);
app.use(router);
app.use(VueAos);
app.mount('#app')
    // createApp(App).use(router).mount('#app')