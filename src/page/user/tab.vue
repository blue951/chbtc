<template>
	<div class="tab">
		<p>
			<span v-for="(item,index) in tabs" :class="{ active: active==index }" @click="clickHandle(index)">
				{{ item.title }}
			</span>
			<span class="more" @click="slideHandler"> MORE </span>
		</p>
		<div class="con">
			{{ contents[active].text }}
		</div>
		<div class="slide-con" v-show="slideFlag">
			toggle slider part<br/>
			other text<br/>
			var control<br/>
		</div>
	  	<div>
	  		<span @click="goBack">返回</span>
	  	</div>
	</div>
</template>

<script>

	import VueRouter from 'vue-router'

	export default {
	  name: 'tab',
	  data () {
	    return {
	    	active: 1,
	    	tabs:[
	    		{ 
	    			title:"选项一",
	    		},
	    		{ 
	    			title:"选项二",
	    		},
	    		{ 
	    			title:"选项三",
	    		}
	    	],
	    	contents:[
	    		{
	    			text:'11111'
	    		},
	    		{
	    			text:'222'
	    		},
	    		{
	    			text:'33333333'
	    		},
	    	],
	    	slideFlag: false,
	    };    
	  },
	  methods: {
	  	clickHandle: function(index) {
	  		this.active = index;
	  		console.log(index)
	  	},
	  	slideHandler: function(){
	  		this.slideFlag = !this.slideFlag;
	  	},
		goBack:function(event){
			 (new VueRouter()).go(-1);
		}
	  },

	};
</script>

<style lang="css" scoped>
.tab{
	width:300px;
	border:1px #ccc solid;
	margin:20px auto;
	padding:10px;
	background: 'gray';
	p{
		background: #ddd;	
		margin-bottom: 20px;
		span{
			cursor: pointer;
			display: inline-block;
			background: pink;
			padding:10px;
			border-right:1px red solid;
		}
		span.active{
			color:#fff;
			background: #711c2b;
		}
		span.more{
			padding:5px;
			float:right;
			margin-top: 5px;
			margin-right: 5px;
			border:0;
		}
	}
	.con{
		background: #fff;
	}
	.slide-con{
		color:#fff;
		padding:10px;
		margin-top:20px;
		background: #861;
	}
}


</style>