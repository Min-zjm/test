<template>
  <div class="hello">
	    <h1>{{ msg }}</h1>
	    <h2>Essential Links</h2>
	    <h3 @click='show'>我的地盘我做主</h3>
	    <!--<ul>
	      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
	      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
	      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
	      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
	      <br>
	      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
	    </ul>
	    <h2>Ecosystem</h2>
	    <ul>
	      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
	      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
	      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
	      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
	    </ul>-->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	   show(){
  	   	  alert('没有任何信息')
  	   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	 text-align: center;
	 cursor:pointer;
}
h1, h2,h3 {
  font-weight: normal;
}
h3{
	color: darkred;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
