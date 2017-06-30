<template>
    <div class="category-type-item" v-if="staticShow">
        <div class="category-type" style="z-index: 10000;">
            <i class="icon icon-shangpinfenlei"></i>全部阀门分类
        </div>
        <ul class="normal-nav" v-show="ifShow"> 
            <li :class="{ active:liIndex==index }" @mousemove="showSlider(index)" @mouseout="hideSlider" v-for="(item,index) in getCataState">
                <h3>
                	<i :class="item.iconStyle"></i>
                	<a>{{ item.name }}</a>
                </h3>
                <div class="menu-nav-a">
                	<span v-for="seconItem in item.children">
                		<a>{{ seconItem.name }}</a>
                	</span>
                </div>
                <div class="cate-pop">
                    <div class="cate-pop-box">
                        <div class="cate-detail">
                            <div class="cate-detail-line" v-for="seconItem in item.children">
                                <div class="line-title">
                                	<a id="26" class="line-title-text">{{ seconItem.name }}</a>
                                </div>
                                <div class="line-con" v-for="thirdItem in seconItem.categories">
                                	<a id="10">{{ thirdItem.name }}</a>
                                </div>
                                <div class="line-xian"></div>
                            </div>
                            
                            <div style="margin-top:20px;" class="cate-detail-line">
                                <div class="line-title">
                                	<a class="line-title-text">热门搜索</a>
                                </div>
                                <div class="line-con">
                                	<a href="search.html?title=球阀" target="_blank">球阀</a>
                                	<a href="search.html?title=止回阀" target="_blank">止回阀</a>
                                	<a href="search.html?title=过滤器" target="_blank">过滤器</a>
								</div>
                            </div>
                            <div class="cate-promotion">
                                <a target="_blank">
                                	<img src="http://192.168.1.202:8888/group1/M00/00/05/wKgByliBnBiAG1BZAAAvxhxo2C4224.jpg" width="186" height="105"></a>
                                <a target="_blank">
                                	<img src="http://192.168.1.202:8888/group1/M00/00/05/wKgByliBnDuALDC9AABWkcFTKT8309.jpg" width="186" height="105"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <div class="category-type-item" v-else @mouseover="showHandle" @mouseout="hideHandle">
        <div class="category-type" style="z-index: 10000;">
            <i class="icon icon-shangpinfenlei"></i>全部阀门分类
        </div>
        <ul class="normal-nav" v-show="ifShow"> 
            <li :class="{ active:liIndex==index }" @mousemove="showSlider(index)" @mouseout="hideSlider" v-for="(item,index) in getCataState">
                <h3>
                    <i :class="item.iconStyle"></i>
                    <a>{{ item.name }}</a>
                </h3>
                <div class="menu-nav-a">
                    <span v-for="seconItem in item.children">
                        <a>{{ seconItem.name }}</a>
                    </span>
                </div>
                <div class="cate-pop">
                    <div class="cate-pop-box">
                        <div class="cate-detail">
                            <div class="cate-detail-line" v-for="seconItem in item.children">
                                <div class="line-title">
                                    <a id="26" class="line-title-text">{{ seconItem.name }}</a>
                                </div>
                                <div class="line-con" v-for="thirdItem in seconItem.categories">
                                    <a id="10">{{ thirdItem.name }}</a>
                                </div>
                                <div class="line-xian"></div>
                            </div>
                            
                            <div style="margin-top:20px;" class="cate-detail-line">
                                <div class="line-title">
                                    <a class="line-title-text">热门搜索</a>
                                </div>
                                <div class="line-con">
                                    <a href="search.html?title=球阀" target="_blank">球阀</a>
                                    <a href="search.html?title=止回阀" target="_blank">止回阀</a>
                                    <a href="search.html?title=过滤器" target="_blank">过滤器</a>
                                </div>
                            </div>
                            <div class="cate-promotion">
                                <a target="_blank">
                                    <img src="http://192.168.1.202:8888/group1/M00/00/05/wKgByliBnBiAG1BZAAAvxhxo2C4224.jpg" width="186" height="105"></a>
                                <a target="_blank">
                                    <img src="http://192.168.1.202:8888/group1/M00/00/05/wKgByliBnDuALDC9AABWkcFTKT8309.jpg" width="186" height="105"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>

</template>
<script>

import { mapGetters, mapActions, mapState } from 'vuex'
export default {
    name: 'indexMenu',
    props:{
        show2: {
            type: [ Object ],
        }
    },
    data() {
        return {
        	liIndex: 100,
            staticShow: this.show2.show1,
            ifShow: this.show2.show1,
        };
    }, 
  computed: {
        ...mapGetters({
            getCataState: 'getCataState',
        }),
    },
    methods: {
        ...mapActions([
            'getCata',
        ]),
        showSlider(index){
        	this.liIndex = index;
        },
        hideSlider(){
        	this.liIndex = -1;        	
        },
        showHandle() {
            this.ifShow = true;
        },
        hideHandle() {
            this.ifShow = false;
        },
    },
    mounted(){
        this.getCata();
    },
};
</script>
<style lang="css" scoped>
    .normal-nav li h3{
        font-size: 14px;
    }
    .menu-nav-a span a{
        font-size: 12px;
    }
</style>
