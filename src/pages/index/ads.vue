<template>
	<div class="ads">
		<div class="ads-item border-right-1px" v-for="(item,index) in adsInfo" :key="index+'ads_item'" :class="{'border-right-1px':index==0}">
			<img class="ads-item-img" :src="item.imgUrl" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				adsInfo: [{//这里是swiper图片地址(注释的这部分 是在原来写静态页面所需要的数据，现在改成json加载不需要了就注释掉)
						imgUrl: 'https://img1.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png',
						link: ''
					},
					{
						imgUrl: 'https://img1.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png',
						link: ''
					}
				]
			}
		}
	}
</script>

<style scoped>
	.ads {
		display: flex;
		background: #fff;
		margin-top: .2rem;
	}
	
	.ads-item {
		flex: 1;
		height: 0;
		padding-bottom: 21.5625%;
		overflow: hidden;
	}
	
	.ads-item-img {
		display: block;
		width: 100%;
	}
</style>