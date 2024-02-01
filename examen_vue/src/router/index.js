import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../components/Principal.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [


    {
      path: '/',
      component: Principal
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../components/Principal.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../components/Formulario.vue')
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: () => import('../components/Pagination.vue')
    },

  
    
    
    
  ]
})

export default router
