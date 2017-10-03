import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Mexico from '@/components/countries/Mexico.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/mexico',
      component: Mexico
    }
  ],
  mode: 'history'
})

// 4739824f78e7323bcc48aa5dfd3e51c98dcb2125baf43ef70041635c73bf1f7b