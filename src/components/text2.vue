<template>
	 <div>
	 	<h3>子组件，所要的数据来至:{{want}}</h3>
	 </div>
</template>

<script>
	export default{
		 name:'text2',
		 props:['want']       //子组件接收
	}
</script>

<style>
</style>