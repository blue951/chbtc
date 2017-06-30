<template>
  <div class="user"> 
  		<div class="con">
  			<p class="pd60"> {{ index }} </p>
  			<div class="jump">
	  			<p>
	  				<router-link to="/user/info"> 跳转到info页面 </router-link>
	  			</p>
	  			<p>
	  				<router-link to="/user/love"> 跳转到love页面 </router-link> 
	  			</p> 
	  			<p>
	  				<router-link to="/user/tab"> 跳转到tab页面 </router-link> 
	  			</p>  				
  			</div>
  		</div>  		
  </div>
</template>

<script>

	export default {
		data() {	
			return {
				index: '这是user的首页'
			}	
		},
		components:{
		},
	}
</script>
<style type="text/less">

	.user{
		font-size: 14px;
		.con{
			padding:10px;		
		}
		.pd60{
			background: #fff;
		}
		.jump{
			background: #ddd;	
			padding:60px 0;
			min-height: 300px;
		}
		.jump p{
			padding-left: 10px;
			margin-bottom: 10px;
		}		
	}
</style>
