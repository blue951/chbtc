<template>
	<div class="swiper-container">
        <!-- <img :src="img1" alt=""> -->
        <div class="swiper-wrapper">        
            <div class="swiper-slide" :style="{backgroundImage: 'url(' + img1 + ')'}"></div>
            <div class="swiper-slide" :style="{backgroundImage: 'url(' + img2 + ')'}"></div>
            <div class="swiper-slide" :style="{backgroundImage: 'url(' + img3 + ')'}"></div>
            <div class="swiper-slide" :style="{backgroundImage: 'url(' + img4 + ')'}"></div>
            <div class="swiper-slide" :style="{backgroundImage: 'url(' + img5 + ')'}"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import swiper from '../../../static/swiper/swiper.js'
import '../../../static/swiper/swiper.css'

export default {
  name: 'cube',
  data(){
    return {
        img1: require('../../style/img/cube/nature1.jpg'),
        img2: require('../../style/img/cube/nature2.jpg'),
        img3: require('../../style/img/cube/nature3.jpg'),
        img4: require('../../style/img/cube/nature4.jpg'),
        img5: require('../../style/img/cube/nature5.jpg'),
    }
  },
  mounted() {console.log(this)
  	var mySwiper = new swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    })
  }
};
</script>

<style lang="css" scoped>
 html, body {
        position: relative;
        height: 100%;
    }
    body {
        background: #fff;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
    }
    .swiper-container {
        width: 300px;
        height: 300px;
        margin:60px auto;
/*        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -150px;
        margin-top: -150px;*/
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
    }
    .swiper-pagination.swiper-pagination-bullets{
        display: none;
    }
</style>