import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const first={template:'<div>first</div>'};        //配置路由
const firstF={template:'<div>first的子路由1</div>'};
const sec={template:'<div>first的子路由2</div>'};
const Home={template:'<div><h3>home页</h3></div>'};
const fa={
	 template:`
	    <div>
	        <h2>一级路由:</h2>
	        <router-view></router-view> 
	    </div>
	 `
};
export default new VueRouter({     //路由实例
	mode:'history',
	baes:'__dirname',
	routes:[       
	    {path:'/',component:Home},
	    {path:'/b',component:fa,                
	           children:[                       //二级路由
	              {path:'/',component:first},     //http://localhost:8080/b
	              {path:'twice',component:firstF} //http://localhost:8080/b/twice
	           ]
	    
	   },
	   {path:'/twice2',component:sec}
	]
})

