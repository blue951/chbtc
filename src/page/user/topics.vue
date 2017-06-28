<template>
    <div class="topics">
        <h1>查询文章列表如下：</h1>
        <ul>
        	<li>题目------查看次数</li>
            <li v-for="item in getData">{{ item.title }}-----{{  item.visit_count }}</li>
        </ul>
        <div class="pagation">
        	<a @click="goto(index)" :class="{current:getIndex==index}" href="javascript:;" v-for="(item,index) in [1,2,3,4]"> {{ item }} </a>
        </div>
        <button type="button" @click="getProducts">获取商品</button>
        <button type="button" @click="handleClick">递减</button>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions,
    mapState
} from 'vuex'
export default {

    name: 'topics',
    computed:{
		 ...mapGetters({ 
	            getData: 'getData',
	            getIndex: 'getIndex',
	        }),          	
    },
    methods:{
        ...mapActions({
            selectList:'getList', 
            goto:'goto',
            getLoginInfo:'getLoginInfo',
            getProducts:'getProducts',
        }),
        handleClick(){       
        	setTimeout(()=>{
        		this.$Message.success('这是一条成功的提示');
        	},500);       
        	setTimeout(()=>{
				this.$Message.warning('这是一条警告的提示');
        	},1000);       
        	setTimeout(()=>{
				this.$Message.error('对方不想说话，并且向你抛出了一个异常');
        	},1500); 
        }
    },
    mounted(){
    	this.selectList();
    	//this.getLoginInfo();  //用户自动登录
    }
};
</script>
<style lang="css" scoped>
	.topics{
		padding:20px;
			font-size: 16px;
		h1{
			font-size: 16px;
		}
		ul li{
			padding:10px 0;
			border-bottom: 1px #ccc dashed;
		}
		.pagation{
			margin-top: 10px;
			a{
				margin-right:3px;
				background: #ccc;
				padding:5px 10px;
				display: inline-block;
			}
			a.current{
				background: pink;
			}
		}
	}
</style>
