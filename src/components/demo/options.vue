<template>
	<div>
		<ul class="options">
	      <router-link :to="One" tag="li" exact>One</router-link>
	      <router-link :to="Home" tag="li" exact>Home</router-link>
	    </ul>
	</div>
</template>

<script>
export default {
	name: 'option',
	data(){
        return{
            Home:{
                name:'home',
                params: { 
                    userId: 123,
                },
            },
            One:{
                name:"one",
                params: { 
                    oneId: 123 
                },
            },
        }
    },
}
</script>

<style scoped>
	.u-link--Active{
		background-color: #d7ffe8;;
	    border-bottom: 3px solid #e6e6fb;
	}
	ul{
		padding-left: 0;
	}
	li{
		padding: 15px;
	}
</style>