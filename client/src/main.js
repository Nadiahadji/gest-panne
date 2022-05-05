import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/css/all.min.css'

createApp(App).use(store).use(router).mount('#app')
