//入口文件-main.js:
import Vue from 'vue'                  //引入文件
import router from './router'            //配置路由2
//import router from './router1'         //配置路由1
import iView from 'iview'                //iview 框架--cnpm install iview  1.************
import 'iview/dist/styles/iview.css'     //iview 框架--css                 2.


Vue.use(iView)                                                          //3.


new Vue({
  el: '#app',   //index.html  #app                     
  router,                             //挂载实例《--入口文件里
  
})
