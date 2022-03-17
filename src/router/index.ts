import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LoginView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/login/LoginView.vue')
  },
  {
    path: '/home',
    name: 'HomeView',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home/HomeView.vue'),
    
    children: [
      {
        path: 'love',
        components: {CommonView:() => import(/* webpackChunkName: "about" */ '../views/CommonView.vue')},
      },
      {
        path: 'AnimeDone',
        components: {AnimeDone:() => import(/* webpackChunkName: "about" */ '../views/anime/AnimeDone.vue')},
      },

    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorView',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home/error.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
