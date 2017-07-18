<template>
	<div>
        <h3>{{msg}}</h3>
        <button>{{btn_msg}}</button>
        <p>{{$store.state.message}}</p>
        <p>{{ha}}</p>
        <hr>
        <text2 v-bind:want='ha'></text2>    <!--向子组件传递消息-->
        
	</div>
</template>

<script>
	//父组件-1
	//子组件-2
	import store from '@/vuex/store'
	import text2 from './text2.vue'
	export default{
		 data(){
		 	return{
		 		msg:'父组件的数据',
		 		btn_msg:'父组件按钮'
		 	}
		 },
		 computed:{
		 	ha(){
		 		return this.$store.state.message+'--是仓库里的数据'
		 	}
		 },
		 store,
		 components:{text2}             //组件2
	} 
</script>

<style>
</style>