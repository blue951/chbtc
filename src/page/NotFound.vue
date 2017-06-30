<template>
	<div class="notfount">
		<span>404--</span>您访问的页面不存在！
	</div>
</template>

<script>
export default {

  name: 'NotFound',

  data () {
    return {

    };
  }
};
</script>

<style type="text/less">
	.notfount{
		font-size: 20px;
		min-height: 300px;
		line-height: 300px;
		padding:20px 0;
		margin:60px;
		text-align: center;
		border-radius: 5px;
		background: #eee;
		text-shadow: 3px 3px 5px;
	}
</style>