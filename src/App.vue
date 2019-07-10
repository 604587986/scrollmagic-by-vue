<template>
	<div id="app">
		<router-view></router-view>
    <div class="fix">
      <router-link v-for="item in this.routes" :key="item.path" :to="item.path">{{item.path}}</router-link>
    </div>
	</div>
</template>

<script>
export default {
  name: "app",
  computed:{
    routes(){
      return this.$router.options.routes
    }
  }
};
</script>

<style lang="less">
* {
	margin: 0;
	padding: 0;
}
html {
	height: 100%;
}
body {
	height: 100%;
}
#app {
	height: 100%;
}
.public-page-header {
	height: 100vh;
	line-height: 100vh;
	text-align: center;
	font-size: 60px;
}
.fix{
  position: fixed;
  left: 0;
  bottom: 0;
  a{
    margin-left: 10px;
    padding: 2px 10px;
  }
}
</style>
