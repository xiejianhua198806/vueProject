<template>
	<!--重点说明 ：分页如何实现，1、使用计算属性computed，每页显示八个.2、则需要在swiper-slide上循环pages，在icon-warp上循环page-->
	<swiper :options="swiperOption" ref="mySwiper">
		<swiper-slide v-for="(page,index) in pages" :key="index+'_icon_swiper_item'">
			<div class="icon-div">
				<div class="icon-warp" v-for="items in page">
					<!--<div class="icon-warp" v-for="items in swiperInfo">-->
					<!--这是一个页面需要循环好多图表的页面-->
					<img class="icon-img" :src="items.imgURL" />
					<p class="icon-title">{{items.title}}</p>
				</div>
			</div>
		</swiper-slide>
		<div class="swiper-pagination icon-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'; //这里引用swiper
	export default {
		data() {
			return {
//				swiperInfo: [{ //这里是swiper图片地址
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
//						title: '景点门票',
//						link: ''
//					},
//					{
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
//						title: '动植物园',
//						link: ''
//					},
//					{
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
//						title: '故宫',
//						link: ''
//					}, {
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
//						title: '一日游',
//						link: ''
//					}, {
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
//						title: '必有榜单',
//						link: ''
//					},
//					{
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png",
//						title: '秋色美',
//						link: ''
//					},
//					{
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
//						title: '游乐场',
//						link: ''
//					}, {
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/ea/10024e1e382b7e02.png",
//						title: '泡温泉',
//						link: ''
//					}, { //这里是swiper图片地址
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
//						title: '景点门票1',
//						link: ''
//					},
//					{
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
//						title: '动植物园1',
//						link: ''
//					},
//					{
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
//						title: '故宫1',
//						link: ''
//					}, {
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
//						title: '一日游1',
//						link: ''
//					}, {
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
//						title: '必有榜单1',
//						link: ''
//					},
//					{
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png",
//						title: '秋色美1',
//						link: ''
//					},
//					{
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
//						title: '游乐场1',
//						link: ''
//					}, {
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/ea/10024e1e382b7e02.png",
//						title: '泡温泉1',
//						link: ''
//					}, {
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
//						title: '景点门票2',
//						link: ''
//					},
//					{
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
//						title: '动植物园2',
//						link: ''
//					},
//					{
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
//						title: '故宫2',
//						link: ''
//					}, {
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
//						title: '一日游2',
//						link: ''
//					}
//				],
				swiperOption: {
					autoplay: false,
					direction: 'horizontal', //图片运动方向
					autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true
				}
			};
		},
		computed: { //1、计算属性使用：每页显示8个图标
			pages: function() {
				var pages = [];
				for(var i = 0; i < this.icons.length; i++) {
					var page = Math.floor(i / 8); //图标个数除以8，
					if(!pages[page]) { //如果个数不存在  则是空的
						pages[page] = [];
					};
					pages[page].push(this.icons[i]);
				};
				return pages;
			}
		},
		props:["icons"]
	}
</script>

<style scoped>
	.img-wrapper {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	
	.icon-warp {
		padding-top: .3rem;
		overflow: hidden;
		width: 25%;
		float: left;
	}
	
	.icon-img {
		width: .66rem;
		display: block;
		margin: 0 auto;
	}
	
	.icon-title {
		text-align: center;
		color: #212121;
		font-size: .28rem;
		margin-top: .2rem;
	}
	
	.icon-div {
		overflow: hidden;
		height: 2.88rem;
		padding-bottom: .4rem;
	}
	
	.icon-pagination {
		bottom: 4px;
	}
</style>