<template>
	<!--重点说明：swiperInfo里面存储的是页图片路径，需要在swiper-slide里面进行循环，还要给src绑定数据！切记？：需要在src前面加“：”号-->
	<!--数据加载时说明：1、这里接收由index.vue传过来swiperInfo的数据2、在swiper-slide标签中循环data数据-->
	<swiper :options="swiperOption" ref="mySwiper">
		<swiper-slide v-for="(item,index) in data" :key="index+'img_swiper_item'">
			<!--（2）-->
			<div class="img-wrapper"><img :src="item.imgURL" class="swiper-imgs" /></div>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'; //这里引用swiper
	export default {
		data() {
			return {
//				swiperInfo: [{ //这里是swiper图片地址(注释的这部分 是在原来写静态页面所需要的数据，现在改成json加载不需要了就注释掉)
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1709/4a/a1c0572b8270df02.jpg_640x200_d64eb752.jpg",
//						link: ''
//					},
//					{
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1708/11/664a8bec8e134202.jpg_640x200_d28d7f24.jpg",
//						link: ''
//					},
//					{
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1708/77/fc5d948fc7a5ec02.jpg_640x200_9c5a4cdf.jpg",
//						link: ''
//					}, {
//						imgURL: "https://img1.qunarzz.com/piao/fusion/1709/4a/a1c0572b8270df02.jpg_640x200_d64eb752.jpg",
//						link: ''
//					}
//				],
				swiperOption: {
					autoplay: 2000,
					direction: 'horizontal', //图片运动方向
					loop: true,
					autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true
				}
			}
		},
		props:['data']//这里接收由index.vue传过来swiperInfo的数据（1）
	}
</script>

<style scoped>
	.img-wrapper {
		/*这是一个知识点 防止图片抖动：轮播图宽度100%，高为0，利用图片高/宽*100=padding-bottom的值，作为容器的高*/
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	
	.swiper-imgs {
		width: 100%;
	}
</style>