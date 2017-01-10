<template>
	<div class='home'>
		<h1>这里是HOME</h1>
		<p><slot></slot></p>
	</div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
	.home{
		background-color: #bcdaf7;
	}
</style>