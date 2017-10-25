import Vue from 'vue'
import App from './App'
import router from './router'
import VueExtend from './extend'//继承
import store from './store'//传递信息
//下面的代码是最初存放的地方 在安装vueExtend 和 store 后将其移到extend.js
//import VueAwesomeSwiper from 'vue-awesome-swiper' //因为swiper使用比较广泛，放到这里就是全局组件
//import FastClick from 'fastclick' //处理300ms的延迟
//import VueResource from 'vue-resource' //请求后台数据
//import Vuex from 'vuex'

//Vue.config.productionTip = false
//Vue.use(VueAwesomeSwiper) //这里表示Vue使用swiper
//FastClick.attach(document.body); //应用fastclcik处理300ms延迟
//Vue.use(VueResource); //这里调用VueResource
//Vue.use(Vuex)

new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: {
		App
	}
}) 