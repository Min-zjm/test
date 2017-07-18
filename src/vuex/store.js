//使用vuex:状态，数据的储存 

import Vue from 'vue'
import Vuex from 'vuex'
//使用
Vue.use(Vuex);
const state={                       //存放 数据 的位置
	  count:3,
	  hi:2,
	  ha:'皮皮虾',
	  message:'父组件的数据:'
//	  class:{
//	  	 background:red;
//	  }
}
const mutations={                 //修改函数：存放-计算-方法-->需要暴露在实例里
	  add(state,n){                 //第一个参数是默认的数据，第二个是自己传入的--数字
	  	 state.count+=n;
	  },
	  reduce(state,n){
	  	  state.count-=n;
	  },
	  reduce2(state,n){
	  	  state.count-=n.x,
	  	  state.hi+=n.i
	  },
	  jian(state,n){                //actions
			  state.count-=n.n
			 
		}
}

//vuex2.vue:
const getters={              //计算方面：不能使用-箭头函数
	  count:function(state){
	  	 return state.count-=100
	  }
}

const actions={            //不改变状态 提交commit 把mutations里面的方法组织起来,形成新的逻辑，支持同步、异步事件 --
	  jplus(context){        //整个仓库-参数   ,
	  	  context.commit('jian',{n:20});
	  	  setTimeout(function(){
	  	  	   context.commit('add',13);      //1秒后  +13
	  	  },1000)
	  	  console.log('同步事件？？')
	  }
}
//创建一个vuex(状态管理/数据储存 ) --实例
export default new Vuex.Store({      //暴露state
      state,
      mutations,
	    getters,
	    actions,
})
