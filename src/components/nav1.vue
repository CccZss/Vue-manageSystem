<template>
	<div @click="stopP" id="nav">
		<span class="page-logo" @click="toHomePage"></span>
		<ul>
			<li class="border-left"><i class="bell-logo logo" @click="bind"></i></li>
			<li class="border-left"><img class="head_img logo" :src="headImg"><span class="username">{{userName}}</span></li>
			<li class="border-left"><i class="close-logo logo" @click="close"></i></li>
		</ul>
	</div>
</template>

<script>
import router from '../router.js'
export default {
  	name: 'nav1',
	data: function(){
		return {
			userName: '131',
            headImg: require("assets/logo.png"),
		}
	},
	methods: {
		bind: function(){
			 my_alert('该功能尚未完成!')
		},
		close: function(){
			$.get("/anywork/user/signout",function(data){
				window.location.href="login.html";
			},'json');
		},
		toHomePage: function(){
			router.push({ path: 'home' })
		},
		stopP: function(e){
			e.stopPropagation();
		}
	}
}
</script>	
	
<style scoped>
    ul{
        list-style-type: none;
        float: right;
        margin-top: 0.5rem
    }
    li{
        text-align: center;
        display: inline-block;
    }
    #nav{
        /*position: fixed;*/
        z-index: 5;
        width: 100%;
        height: 5.8rem;
        background-color: white;
        border-bottom: 1rem solid #195fa0;
        text-align: left;
    }
    #nav .logo{
        display: inline-block;
        margin: 1rem 1rem 1rem 1.6rem;
        width: 2.7rem;
        height: 2.7rem;
    }
    #nav .page-logo{
        display: inline-block;
        width: 30.5rem;
        height: 5.8rem;
        background: url(~assets/logo.png) no-repeat;
        background-position-x: 1.7rem;
        cursor: pointer;
        background-color: #2283c8;
    }
    #nav .bell-logo{
        background: url(~assets/logo.png) no-repeat center center;
        background-size: contain;
        cursor: pointer;
    }
    #nav .close-logo{
        background: url(../assets/logo.png) no-repeat center center;
        background-size: contain;
        cursor: pointer;
    }
    #nav .back-logo{
        background: url(../assets/logo.png) no-repeat center center;
        background-size: contain;
        cursor: pointer;
    }
    #nav .head_img{
        border: 0.2rem solid #6c9aa8;
        border-radius: 50%;
    }
    #nav .username{
        display: inline-block;
        position: relative;
        bottom: 1.5rem;
        font-size: 2.5rem;
        color: #6c9aa8;
    }
    #nav .at{
        position: relative;
        top: 0.4rem;
        height: 4.9rem;
    }

    #nav .border-left{
        border-left: 2px solid #2283c8;
    }
</style>