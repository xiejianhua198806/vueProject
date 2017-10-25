import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper' //因为swiper使用比较广泛，放到这里就是全局组件
import FastClick from 'fastclick' //处理300ms的延迟
import VueResource from 'vue-resource' //请求后台数据
import Vuex from 'vuex'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper) //这里表示Vue使用swiper
Vue.use(VueResource); //这里调用VueResource
Vue.use(Vuex)

Vue.use(VueResource); //这里调用VueResource

export default{}
