<template>
	 <div>
	 	 <h2>使用</h2>
	 	 <h1>{{msg}}</h1>
	 	 <p>{{$store.state.count}}</p>     <!--store.js里state.数据-->
	 	 <p>hello{{$store.state.hi}}--{{how}}</p>
	 	 <p>{{$store.state.ha}}--{{plus}}</p>   <!--更改数据-->
	 	 <button @click='btn'>点击count*2</button>
	 	 <button @click='$store.commit("add",6)'>+6</button>  <!--commit:触发-->
	 	 <button @click='$store.commit("reduce",2)'>-2</button> 
	 	 <button @click='$store.commit("reduce2",{x:5,i:5})'>mutatiosns-5/+5</button> 
	 	 
	 </div>
</template>

<script>
	import store from '@/vuex/store';    //引入  
	import { mapState }from 'vuex'   //快速定义，获取数据--:A.方便计算computed
	export default{
	   data(){
	 	   return{
	 	   	  msg:'Vuex 1987',
	 	   	  a:100
	 	   }
	   },
	   methods:{
	   	   btn(){
		   	   this.$store.state.hi=this.$store.state.hi*2      //点击与计算
		   	   this.$store.state.count=this.$store.state.count+1
		   },
		   
	   },
	   
	   computed:{                            //1.计算属性-return this.--
	   	   how(){
	   	   	   return this.$store.state.ha+'--添加的数据'
	   	   },
	   	   plus(){
	   	   	   return this.a*2
	   	   },
	   	   
	   },
	   
//	   computed:mapState({
//	   	   ha:function(state){                 //1.ha:储存-获取到的-数据的名字
//	   	   	   return state.ha
//	   	   },
//	   	   how:state=>state.ha+'--箭头函数',      //1.how:储存-获取到的-数据的名字
//	   }),
//     computed:{...mapState(['ha'])},          //A.1.$store.state.ha
       
	   store                            //暴露store.js，就可以被访问了
	}
</script>

<style>
</style>