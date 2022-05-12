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
    component : () => import('../components/site/AllSites.vue')
  },
  {
    path : "/admin-dashboard/ajouter-site",
    name : "addSite",
    component : () => import('../components/site/SiteType')
  },
  {
    path : "/admin-dashboard/update-site/:id",
    name : "updateSite",
    component : () => import('../components/site/SiteUpdate')
  },
  {
    path : "/admin-dashboard/equipements",
    name : "equipements",
    component : () => import('../components/equipements/Equipement')
  },
  {
    path : "/admin-dashboard/ajouter-equipement",
    name : "addEquip",
    component : () => import('../components/equipements/EqType')
  },
  {
    path : "/admin-dashboard/editer-equipement/:id",
    name : "editEquip",
    component : () => import('../components/equipements/EqUpdate')
  },
  {
    path : "/admin-dashboard/pannes",
    name : "troubles",
    component : () => import('../components/trouble/TroubleList')
  },
  {
    path : "/admin-dashboard/ajouter-panne",
    name : "addPanne",
    component : () => import('../components/trouble/TroubleType')
  },
  {
    path : "/admin-dashboard/editer-panne/:id",
    name : "editPanne",
    component : () => import('../components/trouble/TroubleUpdate')
  },
  {
    path : "/admin-dashboard/Travaux",
    name : "jobs",
    component : () => import('../components/jobs/JobList')
  },
  {
    path : "/admin-dashboard/ajouter-travail",
    name : "addJob",
    component : () => import('../components/jobs/JobType')
  },
  {
    path : "/admin-dashboard/editer-travail/:id",
    name : "editJob",
    component : () => import('../components/jobs/JobUpdate')
  },
  {
    path : "/admin-dashboard/users",
    name : "users",
    component : () => import('../components/users/Users.vue')
  },
  {
    path : "/admin-dashboard/nouveau-utilisateur",
    name : "addUser",
    component : () => import('../components/users/userType.vue')
  },
  {
    path : "/admin-dashboard/update-user/:id",
    name : "updateUser",
    component : () => import('../components/users/userUpdate')
  },
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
