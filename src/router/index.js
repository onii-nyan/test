import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../components/MovieDetail.vue'
import Movies from '../components/Movies.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/movie/:id',
    component:MovieDetail,
    name: "MovieDetail",
    props:true
  },
  {
    path:'/movie/s=:keyword',
    component:Movies,
    name: "Movies",
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
