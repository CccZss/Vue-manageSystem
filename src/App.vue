<template>
  <div id="app">
    <nav1></nav1>
    <Home></Home>
    <ul>
      <router-link :to="One" tag="li" exact>One</router-link>
      <router-link :to="Home" tag="li" exact>Home</router-link>
    </ul>
    <p>{{$route.params}}</p>
    <transition name="slide-fade">
        <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import nav1 from './components/nav1'
import Home from './components/Home'

export default {
    name: 'app',
    data: function(){
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
    components: {
        nav1,
        Home
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
li{
  display: inline-block;
  margin: 0 20px;
  cursor: pointer;
}
.u-link--Active{
  font-size: 30px;
}

.slide-fade-enter-active ,.slide-fade-leave-active {
    position: absolute;
    left: 0;
    right: 0;
    transition: all 2s ease;
}
.slide-fade-leave-active {
    left: -2200px;
    opacity: 0;
}
.slide-fade-enter{
    position: inherit;
    right: 2200px;
    opacity: 0;
}
.view{
    margin-top: 50px;
}
</style>
