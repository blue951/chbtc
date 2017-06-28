<template>
    <div class="w main-nav">    
        <indexMenu :show2="{show1}"></indexMenu>
        <div class="main-nav-a">
            <a :class="{selected:index==1}" href="/index.html" target="_blank">首页</a>
            <a :class="{selected:index==3}" href="/solution.html" target="_blank">系统解决方案<vueImg src="../static/images/nav-hot.gif"></vueImg></a>
            <a :class="{selected:index==4}" href="/guide.html" target="_blank">导购服务</a>
            <a :class="{selected:index==5}" href="/service.html" target="_blank">4S售后服务</a>
        </div>
        <a class="shopping-cart" href="/cart.html">
            <Icon type="ios-cart"></Icon>购物车
            <span>（{{ getProdNumState }}）</span>件
        </a>
    </div>
</template>
<script>
import vueImg from './vueImg.vue'
import indexMenu from './indexMenu.vue'
import {
    mapGetters,
    mapActions,
    mapState
} from 'vuex'
export default {
    name: 'cataPart',
    props:{
        showUl: {
            type: [ String ],
        }
    },
    data() {
        return {
            index: 1,
            show1: this.showUl=='yes' ? true : false,
        };
    },
    computed: {
        ...mapGetters({
            // getLoginState: 'getLoginState',
            // getUserinfoState: 'getUserinfoState',
            getProdNumState: 'getProdNumState',
        }),
    },
    methods: {
        ...mapActions([
            // 'getCata',
            'getProducts',
        ])
    },
    mounted() {
        // this.getCata();
        this.getProducts();
    },
    components: {
        vueImg,
        indexMenu,
    }
};
</script>
<style lang="css" scoped>
.main-nav{
    z-index: 2;
}
.main-nav-a {
    margin: 0 auto;
    padding-left: 220px;
}
</style>
