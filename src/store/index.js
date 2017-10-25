//存储公共数据
import Vuex from 'vuex'
//import actions from './actions'
//import getters from './getters'
//import mutations from './mutations'
export default new Vuex.Store({
	state: { //实现全局共享
		defaultCity: "大连"
	},
	getters: { //获取state数据
		getCity: function(state) { //这里state参数是获取上面的state 
			return state.defaultCity;
		}
	},
	mutations: {//帮助我们修改state里面的数据（同步操作）--------这里对应使用commit
		//当规则被触发时将defaultCity改成北京 然后在header里面进行调用
		changeCity(state, city) {
			state.defaultCity = city;
		}
	}
	
//	actions:{//异步操作--------这里对应使用dispatch
//		changeCity:function(context){//context这里你是代表state而是代表store
//			setTimeout(function(){
//				context.commit("setCity","南京");
//			},2000)
//		}
//	}

})