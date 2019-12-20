<template>
  <div id="app">
  	<Header />
    <router-view />
  </div>
</template>
<script>
	import Header from "@/components/HeaderModule/Header.vue";
	export default {
		name: "App",
		components: { Header }
	};
</script>
<style lang="scss">
@import "./assets/style";
</style>
