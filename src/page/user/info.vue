<template>
  <div class="info blank-div">{{info}}
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
				info: '这是user的info页面。'
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
	.info{

	}

</style>