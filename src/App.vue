<template>
  <div>
    <!-- <indexHeader></indexHeader> -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div> 
</template>

<script>
  import 'iview/dist/styles/iview.css'; 
  import "./style/less/common.css";
  import "./style/less/style.less";
  import indexHeader from './components/head.vue'
  // import vueImg from './components/vueImg.vue'  //在其他组件中公用此组件失效
  //require('./style/less/index.less'); //也可以

  export default {
    components: {
      indexHeader,
      // vueImg,
    },
  }

</script>

<style type="text/less">
  html body {
    font-size: 14px;
  }
  .logo {color: red;}
  .list {
    background: blue;
      line-height: 20px;
      li {
        color:pink;
        list-style: none;
        border-bottom: 5px solid #ddd;
      }
  }
</style>