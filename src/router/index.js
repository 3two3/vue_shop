import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/login', component: Login},
    {path: '/home', component: Home},
    {path: '/', redirect: 'login'}
  ]
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to代表将要访问的路径
  //from代表从哪个路径跳转来的
  //next是一个函数，表示放行
  //next()  放行   next('/login')  强制跳转

  if (to.path === '/login') return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login');
  next()

})

export default router
