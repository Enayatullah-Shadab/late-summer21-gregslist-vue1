import { createRouter, createWebHashHistory } from 'vue-router'
import JobDetailsPage from '../pages/JobDetailsPage.vue'
import Home from '../pages/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    // required param ':id'
    path: '/job-details/:id',
    name: 'JobDetails',
    component: JobDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
