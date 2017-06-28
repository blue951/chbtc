<template>
   <div class="zoom">
      <v-zoom :img="bigimg" :width="width"></v-zoom>
   </div>

</template>

<script>
import vZoom from 'vue-zoom'
export default {
  components: {vZoom},
  data() {
     return {
        bigimg: require('../../style/img/2000x1200.jpg'),
        width: 500,
     }
  },
}
</script>

<style lang="css" scoped>
	.zoom:after{
		background: none;
	}
</style>