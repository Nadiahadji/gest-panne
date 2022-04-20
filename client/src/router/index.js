import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminDashboard from '../views/AdminDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin-dashboard',
    name: 'admin',
    component: AdminDashboard
  },
  {
    path : "/tous-les-sites",
    name : "allSites",
    component : () => import('../components/AllSites.vue')
  },
  {
    path : "/admin-dashboard/ajouter-site",
    name : "addSite",
    component : () => import('../components/SiteType')
  },
  {
    path : "/admin-dashboard/update-site/:id",
    name : "updateSite",
    component : () => import('../components/SiteUpdate')
  },
  {
    path : "/admin-dashboard/ajouter-equipement",
    name : "addEquip",
    component : () => import('../components/EquipType')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token")
//   if(!token && (to.path !== '/' && to.path !== '/about')) {
//     next('/')
//   }else {
//     next()
//   }
// })

export default router
