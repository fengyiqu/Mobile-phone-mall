import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/tabbar/Home.vue"
import newsList from "./components/home/newsList.vue"
import goodList from "./components/goodList/goodList.vue"
import newsInfo from "./components/home/newsInfo.vue"
import goodInfo from "./components/goods/goodInfo.vue"
import login from "./components/home/login.vue"
import register from "./components/home/register.vue"
import shopCart from "./components/home/shopCart.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/Home"},
    {path:'/Home',component:Home},
    {path:'/newsList',component:newsList},
    {path:'/goodList',component:goodList},
    {path:'/newsInfo',component:newsInfo},
    {path:'/goodInfo',component:goodInfo},
    {path:'/login',component:login},
    {path:'/register',component:register},
    {path:'/shopCart',component:shopCart}
  ]
})
