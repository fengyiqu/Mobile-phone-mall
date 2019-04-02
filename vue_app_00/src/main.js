import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
var store=new Vuex.Store({
  state:{
    carCount:sessionStorage.getItem("cartCount")||0
  },//保存全局数据
  mutations:{
    increment(state){
      state.carCount++;
    },
    updateCount(state,count){
      state.carCount=count;
      sessionStorage.setItem("cartCount",count)
    }
  },
  getters:{
    optCartCount:function(state){
      return state.carCount;
    }
  }
})
//引入mint-ui样式文件
import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//引入mui库样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//引入mint-ui组件Header
import {Header} from 'mint-ui'
//引入mint-ui组件Swipe swipeItem
import{Swipe,SwipeItem} from 'mint-ui'
// 引入mint-ui组件button
import{Button}from 'mint-ui'
//注册组件
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
//引入axios库
import axios from "axios"
// 配置跨域访问保存session
axios.defaults.withCredentials=true;
// 将axios库配置vue实例对象中
Vue.prototype.axios=axios;
//引入qs模块
import qs from "qs";
//将qs库配置Vue实例对象
Vue.prototype.qs=qs;
// 创建过滤器
Vue.filter("time",function(val){
  var data=new Date(val);
  var y=data.getFullYear();
  var m=data.getMonth()+1;
  var d=data.getDate();
  var h=data.getHours();
  var mi=data.getMinutes();
  var s=data.getSeconds();
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d} ${h}:${mi}:${s}`
})
Vue.filter("time1",function(val){
  var data=new Date(val);
  var y=data.getFullYear();
  var m=data.getMonth()+1;
  var d=data.getDate();
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d} `
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
