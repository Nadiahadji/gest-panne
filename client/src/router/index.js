import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminDashboard from '../views/AdminDashboard.vue'

const routes = [
  {
    path: '/', redirect : '/admin-dashboard' ,
    name: '/'
  },
  {
    path: '/login' ,
    meta : {requiresUnauth : true},
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
    redirect : "/admin-dashboard/",
    meta : {requiresAuth : true},
    name: 'admin',
    component: AdminDashboard,
    children : [
      {
        path : "",
        name : "statistic",
        component : () => import('../components/statistic/DashBoard.vue')
      },
      {
        path : "tous-les-sites",
        name : "allSites",
        component : () => import('../components/site/AllSites.vue')
      },
      {
        path : "ajouter-site",
        name : "addSite",
        component : () => import('../components/site/SiteType')
      },
      {
        path : "update-site/:id",
        name : "updateSite",
        component : () => import('../components/site/SiteUpdate')
      },
      {
        path : "equipements",
        name : "equipements",
        component : () => import('../components/equipements/Equipement')
      },
      {
        path : "/admin-dashboard/ajouter-equipement",
        name : "addEquip",
        component : () => import('../components/equipements/EqType')
      },
      {
        path : "editer-equipement/:id",
        name : "editEquip",
        component : () => import('../components/equipements/EqUpdate')
      },
      {
        path : "/admin-dashboard/pannes",
        name : "troubles",
        component : () => import('../components/trouble/TroubleList')
      },
      {
        path : "ajouter-panne",
        name : "addPanne",
        component : () => import('../components/trouble/TroubleType')
      },
      {
        path : "detail-panne/:id",
        name : "detailPanne",
        component : () => import('../components/trouble/TroubleDetail')
      },
      {
        path : "editer-panne/:id",
        name : "editPanne",
        component : () => import('../components/trouble/TroubleUpdate')
      },
      {
        path : "Travaux",
        name : "jobs",
        component : () => import('../components/jobs/JobList')
      },
      {
        path : "ajouter-travail",
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
        path : "nouveau-utilisateur",
        name : "addUser",
        component : () => import('../components/users/userType.vue')
      },
      {
        path : "update-user/:id",
        name : "updateUser",
        component : () => import('../components/users/userUpdate')
      },
    ]
  },
  {
    path: '/:notfound(.*)',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token")
  if(!token && to.meta.requiresAuth) {
    next('/login')
  }else if (token && to.meta.requiresUnauth){
    next('/admin-dashboard/')
  }else {
    
    next()
  }
})

export default router
