<template>
	<div class="love blank-div">
		  <div>{{ love }}</div>
		  <ul>
		  	<li v-for="item in items">{{ item.title }}</li>
		  </ul>
	  	  <p>
	  		<span @click="goBack">返回</span>
	  	  </p>
	</div>
</template>

<script>
	 import VueRouter from 'vue-router'

	export default {
		data() {	
			return {
				love: '组件化开发----这是user的love页面。',
				items: [
					{'title':'1111'},
					{'title':'2222'},
					{'title':'33333'}
				]
			}	
		},
		components:{
		},
		methods:{
			goBack:function(event){
				 (new VueRouter()).go(-1);
			}
		}
	}
</script>

<style type="text/less">
	.love.blank-div{
		padding:20px;
		text-align: left;
		line-height: 30px;
		ul li{
			border-bottom: 1px #777 dashed;
			line-height: 30px;
		}
	}
</style>