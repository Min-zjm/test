<template>
	<div>
		<div id="box">
			<div class="head">
				  <input type="text" v-model='newOne.name'/>    <!--v-model-->
				  <button v-on:click='add'>添加</button>
			</div>
			<div class="content">
				  <ul>
				  	<li v-for='(i,n) in arr' v-on:mouseover="show(n)" v-on:mouseout="hide(n)">
				  		<input type="checkbox" v-model='i.check'/>
				  	    <span>{{i.name}}</span>
				  	    
				  	    <button v-show='i.hide2'>编辑</button>   <!--赋值:true/false-->
				  	    <button v-on:click='del(n)'>删除</button>
				  	</li>
				  </ul>
			</div>
		</div>
		
	</div>
</template>

<script>
	
	 export default{
			 name:'user',
			 data(){
			 	return{
			 	   newOne:{name:'',check:false,hide2:true},
		 	  	   arr:[{name:'小米1',check:false,hide2:true},
			 	  	    {name:'小米2',check:false,hide2:true},
			 	  	    {name:'小米3',check:false,hide2:true},
			 	  	    {name:'小米4',check:false,hide2:true}
		 	  	   ]
			 	}
			 	  	 
			  },
		 	  methods:{
		 	  	 add:function(){
		 	  	 	 this.arr.push(this.newOne);
		 	  	 	 this.newOne={};          //
		 	  	 },
		 	  	 del(index){
		 	  	 	if(this.arr[index].check==true){    //指定的check
		 	  	 		 this.arr.splice(index,1)
		 	  	 	}else{
		 	  	 		 alert(2)
		 	  	 	}
		 	  	 	
		 	  	 },
		 	  	 show(index){
		 	  	 	this.arr[index].hide2=true;
		 	  	 	 
		 	  	 },
		 	  	 hide(index){
		 	  	 	this.arr[index].hide2=false;
		 	  	 	 
		 	  	 }
		 	  }
		 }
</script>
       
<style>
	 .head{
		   width:100%;
	  	   height:100px;
	  	   background:rgba(205, 92, 92, 0.12) ;
	  	   line-height:100px;
	 }
	 .content{
	  	   width:100%;
	  	   height:300px;
	  }
	  ul{
	  	list-style: none;
	  }
	  li{
	  	width:100%;
	  	height:50px;
	  	border-bottom:1px solid red;
	  	line-height:72px;
	  }
	  li>button{
	  	 float:right;
	  	 margin-top: 26px;
	  }
</style>