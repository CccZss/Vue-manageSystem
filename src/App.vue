<template>
  <div id="app">
    <nav1></nav1>
    <div>
        <options class="option"></options>
        <transition name="slide-fade">
            <router-view class="view">
                <p>{{$route.params}}</p>   
            </router-view>
        </transition>
    </div>
    
  </div>
</template>

<script>
import nav1 from 'components/demo/nav1'
import options from 'components/demo/options'

export default {
    name: 'app',
    data: function(){
        return{

        }
    },
    components: {
        nav1,
        options,
    }
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
.option{
    float: left;
    height: 100%;
    width: 15%;
    background-color: white;
}
li{
    text-align: center;
    list-style:none;
    cursor: pointer;
}

/* .slide-fade-enter-active ,.slide-fade-leave-active {
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
} */
.view{
    float: left;
    width: 85%;
    height: 800px;
    padding-top: 20px;
}
</style>
