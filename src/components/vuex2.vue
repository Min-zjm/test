<template>
	<div>
		 <h2>使用</h2>
	 	 <h1>{{msg}}</h1>
	 	 <p>{{$store.state.count}}</p>     <!--store.js里state.数据-->
	 	 <p>{{$store.state.hi}}</p>
	 	 <button @click='$store.commit("reduce2",{x:5,i:5})'>mutatiosns-5/+5</button> 
	     <button @click='jplus'>jplus</button>
	     
	</div>
</template>

<script>
	import store from '@/vuex/store';    //引入  
	import { mapState,mapMutations,mapGetters,mapActions }from 'vuex'
	
	export default{
	   data(){
	 	   return{
	 	   	  msg:'加法  1987',
	 	   	  
	 	   }
	   },
	   
	   store,
	   computed:{
	   	   ...mapState(['ha']),
	       ...mapState(['count']),
	       ...mapGetters(['count'])
	   },
	   methods:{      //计算--两者相似
		   ...mapMutations(['reduce2']), 
		   ...mapActions(['jplus'])
	   },
	}   
</script>

<style>
</style>