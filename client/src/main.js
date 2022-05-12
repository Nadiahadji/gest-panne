import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/css/all.min.css'

import NavMenu from '@/components/menus/NavMenu.vue'
import AsideMenu from '@/components/menus/AsideMenu.vue'


const app = createApp(App)

app.component("NavMenu", NavMenu)
app.component("AsideMenu", AsideMenu)

app.use(store)
app.use(router)
app.mount('#app')
