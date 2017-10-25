<template>
	<!--重点说明：1、在static中建立index.json,2、然后通过created获取json里面的数据3、在data里定义数据，4、将数据传递给组件-->
	<div class="mian">
		<index-header></index-header>
		<img-swiper :data="swiperInfo"></img-swiper>
		<icon-swiper :icons="iconInfo"></icon-swiper>
		<recommend :recommends="recommendInfo"></recommend>
		<ads></ads>
	</div>
</template>
<!--父组件引用子组件：1、先在script标签中引用2、在父组件中建立子组件3、在html中实现-->
<script>
	import header from './header';
	import imgswiper from './imgswiper';
	import iconswiper from './iconswiper';
	import recommend from './recommend';
	import ads from './ads';

	export default {
		created: function() {//（2）
			this.$http.get('/static/index.json').then(response => { //获取数据成功
				this.swiperInfo=response.body.data.swiperInfo;
				this.iconInfo=response.body.data.iconInfo;
				this.recommendInfo=response.body.data.recommendInfo;
			}, response => { //获取数据失败
				alert('获取数据失败')
			});
		},
		data() {//（3）：因为刚开始数据还没有进来先设置成空数组
			return {
				 swiperInfo: [],
				 iconInfo:[],
				 recommendInfo:[]
			}
		},
		components: {
			"index-header": header,
			"img-swiper": imgswiper,
			"icon-swiper": iconswiper,
			"recommend": recommend,
			"ads": ads
		}
	}
</script>

<style scoped>
	/*设置首页的背景色*/
	
	.mian {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		background: #F5F5F5;
	}
	
	.ad {
		display: flex;
		margin-top: .2rem;
		background: #fff;
	}
	
	.ad_item {
		flex: 1;
	}
	
	.ad_item_img {
		display: block;
		width: 80%;
		margin: 0 auto;
	}
</style>