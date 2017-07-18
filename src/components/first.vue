<template>
	 <!-- 模板 布局-->
<div>
 	<div class="head">
 		<div class="headwrap">
 			 <img src="../../img/1.jpg"/>
 			 <h3>翡翠后台</h3>
 			 <p>the sysmaster</p>
 		</div>
 		<ul>
 			<li v-for='i in msg'>{{i.title}}</li>
 		</ul>
 	</div>
 	<div class="manage">
 		<ul>
 			<!--<li v-for='n in msg2' v-on:mouserover='over' v-on:mouserout='out' v-on:click='show(n)'>{{n.title}}</li>-->
 		    <li v-on:click='show1'>用户管理</li>
 		    <li v-on:click='show2'>课程管理</li>
 		</ul>
 		<div class="user">
 			<img src="../../img/7.jpg"/>
 		</div>
 	</div>
 	<div class="manageList manageList3" v-show='hide1'>
 		<ul>
 			<li v-for='n in msg3'>{{n.title}}</li>
 		</ul>
 	</div>
 	<div class="manageList manageList4" v-show='hide2'>
 		<ul>
 			<li v-for='n in msg4'>{{n.title}}</li>
 		</ul>
 	</div>
 	
	<router-view></router-view>                <!--加载组件-->
	    	
</div>
</template>

<script>
export default{
	 name:'first',
	 data(){
	 	return{
	 		hide1:false,
	 		hide2:false,
	 		msg:[
	 		{title:'卓新思创'},{title:'在线客服'},{title:'常见问题'},{title:'安全中心'}
	 		],
//	 		msg2:[
//	 		{title:'用户管理'},{title:'课程管理'}
//	 		],
            msg3:[
	 		{title:'添加用户'},{title:'编辑用户'}
	 		],
	 		msg4:[
	 		{title:'课程列表'},{title:'添加课程'},{title:'视屏管理'}
	 		],
	 	}
	 },
	 methods:{
	 	 over(){
			   this.hide1=true
	 	 },
	 	 out(){
			  this.hide1=false
	 	 },
//点击同一个按钮,点击第二次,显示数据2:
	 	 show1(){
	 	 	//alert(1);
//	 	 	//if(this.hide1){
//					this.hide1=false
//					this.hide2=true
//				}else{
					this.hide1=true
					this.hide2=false
//			}
	 	 },
	 	 show2(){
//	 	 //	if(this.hide2){
//					this.hide2=false
//					this.hide1=true
//				}else{
					this.hide2=true
					this.hide1=false
//			}
	 	 }
	}
}
</script>

<style>
*{
	margin:0;
	padding:0;
}
.head{
	min-width:1100px;
	height:80px;
	background:rgba(205, 92, 92, 0.81);
	color:white;
}
.head ul{
	list-style: none;
	float:right;
}
.head li{
	float:left;
	margin-right:30px;
	line-height: 80px;
	color:white;
}
.headwrap{
	width:210px;
	height:80px;
	float:left;
}
.headwrap img{
	width: 99px;
    height: 50px;
    margin-top:13px;
    float:left;
}
.headwrap h3,p{
	float:right;
}
.headwrap h3{
	margin-top:13px;
	margin-right:15px;
}
.manage{
	width: 100%;
    height: 70px;
    background:blueviolet;
    cursor:pointer;
}
.manage .user{
	width:120px;
	height:70px;
	border:1px solid red;
	float:right;
	margin-top: -72px;
}
.manage .user img{
	width:60px;
	height:60px;
	margin-top: 5px;
}
.manage ul{
	list-style: none;
	height:70px;
	margin-left:200px;
}
.manage li{
	float:left;
	margin-left:50px;
	line-height: 60px;
	color:white;
}
.manageList{
	width: 100%;
    height: 150px;
    border:1px solid blueviolet;
    cursor:pointer;
}
.manageList ul{
	list-style: none;
	margin-left:200px;
	
}
.manageList li{
	float:left;
	height:50px;
	width:200px;
	border:1px solid lightgray;
	margin-left:20px;
	line-height:50px;
	margin-top:45px;
	text-align: center;
}
</style>