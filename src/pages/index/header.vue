<template>
	<!--重点说明：路由跳转，新建标签<router-link>,to='/list'表示跳转的页面-->
	<header class="header">
		<a class="header-left">&lt;</a>
		<div class="header-title">
			<router-link to='/list'>
				<span class="single-line">输入城市/景点/游玩主题</span>
			</router-link>	
		</div>
		<div class="header-right" @click="handleRightClick" >
			<!--获取state的数据-->
			<!--<span class="header-city">{{$store.state.defaultCity}}<i class="header-city-option"></i></span>-->
			<!--获取getters的数据-->
			<router-link to="./city">
				<span class="header-city">{{$store.getters.getCity}}<i class="header-city-option"></i></span>
			</router-link>
			
			
			<!--获取mutations的数据-->
			<!--<span class="header-city">{{$store.getters.getCity}}<i class="header-city-option"></i></span>-->
			<!--获取actions的数据-->
			<!--<span class="header-city">{{$store.actions.getCity}}<i class="header-city-option"></i></span>-->
		</div>
	</header>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			handleRightClick:function(){
				//这里对应的是mutations
				//this.$store.commit("changeCity","上海");//接收传递过来的参数 commit是固定写法
				//这里对应的是action
				this.$store.dispatch("changeCity")
			}
		}
	}
</script>
<!--scoped：只作用于当前的style文件-->
<style scoped>
	.header {
		position: relative;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		text-align: center;
		color: #fff;
	}
	
	.header-left {
		display: inline-block;
		width: .4rem;
		line-height: .88rem;
		padding: 0 .2rem;
		color: #fff;
		font-size: .36rem;
		text-align: left;
	}
	
	.header-title {
		padding: 0 .6rem 0 .2rem;
	}
	
	.header-title {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		flex: 1;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		position: relative;
		height: .6rem;
		margin: .14rem 0;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
	}
	.single-line {
		display: inline-block;
		overflow: hidden;
		position: absolute;
		left: .3rem;
		top: 0;
		width: 3.6rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #ccc;
	}
	
	.header-city {
		line-height: .88rem;
		padding:  0 .22rem;
		color: #fff;
		text-align: center;
	}
	.header-city-option{
		height: 0rem;
		width: 0rem;
		border:0.13rem solid transparent;
		border-top: 0.13rem solid #fff;
		position: absolute;
		top: .37rem;
	}
</style>