//路由：引入组件相对应的--路径:
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import first from '@/components/first'
import user from '@/components/user'
import vuex1 from '@/components/vuex1'
import vuex2 from '@/components/vuex2'
import text1 from '@/components/text1'
import text2 from '@/components/text2'
import iView1 from '@/components/iView1'                 //iView框架1.************
 


Vue.use(Router)                   //让vue使用路由:

export default new Router({      //暴露组件=model.exports
mode:'history',	                 //开启历史记录
base:__dirname+'/',              
routes: [
    {
      path: '/',                 //路径  http://localhost:8080
      name: 'hello',             //export:name --vue文件     
      component: Hello,          //src/hello.vue
    },
    {
      path: '/first',           //http://localhost:8080/first      
      name: 'first',           
      component: first,
      children:[               
          {path:'user',component:user}     //子路径：''
      ]
    },
    {
      path: '/vuex1',                 //路径  http://localhost:8080
      name: 'vuex1',             //export:name --vue文件     
      component: vuex1,          //src/hello.vue
      
    },
    {
      path: '/vuex2',
      component: vuex2,
    },
    {
      path: '/text1',
      component: text1, 
    },
    {
      path: '/iView1',                                 //iView框架2.
      component: iView1, 
    },
    
    
]

})


//ES6-箭头函数：res => res.json() :  function dd(res){res.json()}
