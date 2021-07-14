import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Solution from '../views/Solution.vue'
import Contact from '../views/Contact.vue'
import Software from '../views/SoftwareDev.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: '關於聖煒'
    }
  },
  {
    path: '/solution',
    component: Solution,
    meta: {
      title: '產業方案'
    }
  },
  {
    path: '/software',
    component: Software,
    meta: {
      title: '軟體開發'
    }
  },
  {
    path: '/contact',
    component: Contact,
    meta: {
      title: '聯絡我們'
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    next()
  }
})

export default router
