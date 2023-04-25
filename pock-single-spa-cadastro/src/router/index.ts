import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CadastroView from '../views/CadastroView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard/cadastro',
    name: 'cadastro',
    component: CadastroView,
    children:[
      {
        path:'people',
        component: () => import('@/views/PeopleView.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)', redirect: { name: 'cadastro'}},  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
