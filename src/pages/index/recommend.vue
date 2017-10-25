<template>
	<!--重点说明：对于模块的分配，建议每个模块最少有两百行代码，数据除外-->
	<!--重点说明：利用表达式来实现 class名的添加，1、利用循环的数组的下标，然后绑定class也就是，:class="{'border-right-1px':index==0}"-->
	<div class="recommend border-topbottom">
		<div class="recommend-item " v-for="(item,index) in recommends" :class="{'border-right':index==0}">{{item.title}}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
	props: ['recommends']
	}
</script>

<style scoped>
	.recommend {
		display: flex;
		background: #fff;
	}
	
	.recommend-item {
		flex: 1;
		line-height: 1rem;
		text-align: center;
	}
</style>