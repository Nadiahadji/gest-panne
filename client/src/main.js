import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@/assets/css/all.min.css'

import NavMenu from '@/components/menus/NavMenu.vue'
import AsideMenu from '@/components/menus/AsideMenu.vue'
import PaginationMenu from '@/components/pagination/PaginationMenu.vue'
import Modal from '@/components/modal/Modal.vue'

const app = createApp(App)

app.component("NavMenu", NavMenu)
app.component("AsideMenu", AsideMenu)
app.component("PaginationMenu", PaginationMenu)
app.component("Modal", Modal)
//app.use(bootstrap)
app.use(store)
app.use(router)
app.mount('#app')
