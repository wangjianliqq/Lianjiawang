import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Ershoufang from '@/pages/ershoufang/Ershoufang.vue'
import Homedetail from '@/pages/homedetail/Homedetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/ershoufang',
      name: 'Ershoufang',
      component: Ershoufang
    }, {
      path: '/homedetail',
      name: 'Homedetail',
      component: Homedetail
    }
  ]
})
