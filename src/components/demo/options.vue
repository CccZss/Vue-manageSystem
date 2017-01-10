<template>
	<div>
		<ul class="options">
	      <i @click="select(One)"><router-link :to="One" tag="li" exact  >One</router-link></i>
	      <i @click="select(Home)"><router-link :to="Home" tag="li" exact >Home</router-link></i>
	    </ul>
	</div>
</template>

<script>
import{ mapState,mapActions } from 'vuex'

export default {
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
	methods: {
		select(tag){
			this.addTag(tag)
		},
		...mapActions(['addTag'])
	}
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