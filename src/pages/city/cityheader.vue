<template>
	<div>
		<div class="city-header">
			<div class="city-back">
				<div class="city-key" @click="handleBackFront"></div>
			</div>
			<h1 class="cityheader-title">
				<div class="city-tab" >
					<span class="header-city" @click="handleInternal" :class="{'header-internal':internal==true}" >国内</span>
					<span class="header-city" @click="handleExternal" :class="{'header-internal':internal==false}" >海外</span>
				</div>			
			</h1>
		</div>
		<div class="header-keyword">
			<input type="text" @focus="handleInputFocus" @blur="handleInputBlur" :placeholder="placeholder" class="city-keyword" :class="{text:textalign}">
		</div>
		<ul class="key-city-ul">
			<li class="key-city-list border-bottom"></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: "", //传输用的值
				internal: true, //控制切换的开关
				placeholder: "输入城市名或拼音",
				textalign: true
			}
		},
		props: ["cityInfo"],
		methods: {
			handleBackFront: function() { //点击返回方法
				window.history.go(-1);
			},
			handleInternal: function() {
				this.value = "";
				this.internal = true;
				this.$emit("isAbroad", true);
			},
			handleExternal: function() {
				this.value = "";
				this.internal = false;
				this.$emit("isAbroad", false);
			},
			handleInputFocus: function() {
				this.placeholder = "";
				this.textalign = false;
			},
			handleInputBlur: function() {
				this.placeholder = "输入城市名或拼音";
				this.textalign = true;
			}
		}
	}
</script>

<style scoped>
	.city-header {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		height: .88rem;
		width: 100%;
		background: #00afc7;
		color: #fff;
		z-index: 100;
	}
	
	.city-back {
		width: .88rem;
		height: .88rem;
	}
	
	.city-key {
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem;
		transform: rotateZ(45deg);
	}
	
	.cityheader-title {
		box-sizing: border-box;
		flex: 1;
		position: relative;
		text-align: center;
	}
	
	.header-city {
		display: inline-block;
		width: 2rem;
		height: .56rem;
		line-height: .56rem;
		margin-top: .15rem;
		background: #00afc7;
		font-size: .28rem;
		border: .02rem solid #fff;
	}
	
	.header-city:first-of-type {
		border-radius: .06rem 0 0 .06rem;
		border-right: none;
	}
	
	.header-city:last-of-type {
		border-radius: 0 .06rem .06rem 0;
		border-left: none;
	}
	
	.city-tab {
		display: inline-block;
		margin-left: -.42rem;
		font-size: 0;
	}
	
	.header-keyword {
		margin-top: .88rem;
		padding: 0 .2rem .1rem .2rem;
		background: #00afc7;
		font-size: .26rem;
		color: #9e9e9e;
	}
	
	.city-keyword {
		display: block;
		width: 100%;
		height: .3rem;
		line-height: .3rem;
		padding: .16rem 0 .16rem .1rem;
		background: #fff;
		border: 0;
		-webkit-border-radius: .06rem;
		-moz-border-radius: .06rem;
		border-radius: .06rem;
	}
	
	.text {
		text-align: center;
	}
	
	.header-internal {
		background: #fff;
		color: #00afc7;
	}
	
	.key-city-ul {
		width: 100%;
		min-height: 100%;
		background: #212121;
	}
	
	.key-city-list {
		line-height: .76rem;
		padding-left: .2rem;
		font-size: .28rem;
		color: #212121;
		background: #fff;
	}
</style>