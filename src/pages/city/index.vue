<template>
	<city-header :cityInfo="cityInfo" @isSarching="isSarching" @isAbroad="isAbroad"></city-header>
</template>

<script>
	import cityheader from './cityheader'

	export default {
		created: function() {
			this.$http.get("/static/city.json").then(response => {
				if(response.body.ret) {
					this.cityInfo = response.body.data.domestic;
					this.domesticCity = response.body.data.domestic;
					this.overseasCity = response.body.data.overseas;
					for(var i = 0; i < 17; i++) {
						this.cityHot.push(this.cityInfo[i])
					}
				} else {
					console.log("Invalid data!");
				}
			}, response => {
				console.log("get city data err!");
			});
		},
		data() {
			return {
				domesticCity: [],
				overseasCity: [],
				cityInfo: [],
				//				windowScrollTop:"",
				isShow: true,
				cityHot: []
			}
		},
		components: {
			"city-header": cityheader
},
methods: {
		isAbroad: function(value) {
				if(value) {//国内
					this.cityInfo = this.domesticCity;
					this.cityHot = [];
					for(var i = 0; i < 17; i++) {
						this.cityHot.push(this.cityInfo[i])
					};
				} else { //国外
					this.cityInfo = this.overseasCity;
					this.cityHot = [];
					for(var i = 0; i < 17; i++) {
						this.cityHot.push(this.cityInfo[i])
					};
				};
			},
			isSarching: function(isShow) { //点击是否展示
				if(isShow) {
					this.isShow = true;
				} else {
					this.isShow = false;
				}
			},

		}
	}
</script>

<style>

</style>