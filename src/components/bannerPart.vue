<template>
    <div class="category-type-con">
        <div class="category-type-con-box">
            <div class="w category-type-s" id="ctyboxs">            	
                <div class="category-type-fs">
                    <!--登录后 -->
                    <div class="vip-login-info vip-login-info2" v-if="getLoginState">
                        <div class="vip-login-info-s">
                            <a class="vip-login-info-portrait" href="/userHome.html">
                            	<vueImg :src="getUserinfoState.avatar?getUserinfoState.avatar:'../static/images/portrait.png'"></vueImg>
                            </a>
                            <div class="vip-login-info-name">
                                <p class="vip-login-info-name-p">{{getUserinfoState.nick}}</p>
                                <p><a class="vip-login-info-a" @click="logout">退出</a></p>
                            </div>
                        </div>
                        <div class="info2-s">
                            <a class="info2-a" href="myOrder.html?status=1"><i class="icon icon-daifukuan"></i>待付款</a>
                            <a class="info2-a" href="myOrder.html?status=2"><i class="icon icon-daishouhuo"></i>待收货</a>
                        </div>
                    </div>
                    <!-- end 登录后-->
                    <div v-else class="vip-login-info">
                        <div class="vip-login-info-s">
                            <a class="vip-login-info-portrait">
                            	<vueImg src="../static/images/portrait.png"></vueImg>
                            </a>
                            <div class="vip-login-info-name">
                                <p class="vip-login-info-name-p">欢迎来到人人阀平台</p>
                                <p>
                                	<a class="vip-login-info-a" href="reg.html">免费注册</a></p>
                            </div>
                        </div>
                        <router-link to="/login">
                            <button class="btn btn-orange-border">Hi，请登录</button>
                        </router-link>
                    </div>
                    <div class="category-type-otice">
                        <h3 class="category-type-h3">
                        	<span>昨日成交</span>
                            <span class="category-type-span">{{getdealNumState.orderSum}}</span>
                            <span>单</span>
                        </h3>
                        <h3 class="category-type-h3">
                        	<span>昨日服务人数</span>
                            <span class="category-type-span">{{getdealNumState.serviceUser}}</span>
                            <span>位</span>
                        </h3>
                    </div>
                    <div class="category-type-dynamic">
                        <a><vueImg src="../static/images/huanying.png"></vueImg></a>
                    </div>
                </div>
            </div>
            <div  @mouseover="overHandle" @mouseout="outHandle">
                <Carousel :autoplay="ifAuto"  v-model="value1">
    		        <Carousel-item>
    		            <div class="demo-carousel">
    		            	<vueImg src="../static/images/banner/banner1.jpg"></vueImg>
    		            </div>
    		        </Carousel-item>
    		        <Carousel-item>
    		            <div class="demo-carousel">
    		            	<vueImg src="../static/images/banner/banner-4s.jpg"></vueImg>
    		            </div>
    		        </Carousel-item>
    		    </Carousel>
            </div>
<!--             <div class="carousel-banner" style="z-index: 1;" id="carousel-banner">
                <a style="display: block; height: 500px;" class="carousel-banner1" href="/rrfServiceStatic.html" target="_blank">
                	<vueImg src="../static/images/banner/banner1.jpg"></vueImg>
                </a>
                <a style="display: block; height: 500px;" class="carousel-banner1" href="/shangye.html" target="_blank">
                	<vueImg src="../static/images/banner/banner-4s.jpg"></vueImg>
                </a>
            </div> -->
        </div>
    </div>
</template>
<script>
import vueImg from './vueImg.vue'
import { mapGetters, mapActions, mapState } from 'vuex'
export default {

    name: 'bannerPart',

    data() {
        return {
        	userName: false,
    	    value1: 0,
            ifAuto: true,
        };
    }, 
    computed: {
        ...mapGetters({
            getLoginState: 'getLoginState',
            getUserinfoState: 'getUserinfoState',
            getdealNumState: 'getdealNumState',
        }),
    },
    methods: {
        ...mapActions([
            'getDealNum',
            'login',
            'logout',
        ]),
        overHandle() {
            this.ifAuto = false;
        },
        outHandle() {
            this.ifAuto = true;
        }
        
    },
    mounted(){
        this.getDealNum();
    },
    components:{
        vueImg,
    }
};
</script>
<style lang="css" scoped>
.category-type-con{
    position: relative;
    z-index: 1;
	.ivu-carousel{
		width: 100%;
		height:500px;
		text-align: center;
		color: #f33;
	}
}

</style>
