<template>
  <div class="index">
    <h1>交易行情</h1>
    <p class="hangqing mb5">
      <span>最高价：{{ hangqing.high}}</span>
      <span>最低价：{{ hangqing.low}}</span>
      <span>买一价：{{ hangqing.buy}}</span>
      <span>卖一价：{{ hangqing.sell}}</span>
      <span>最新成交价：{{ hangqing.last}}</span>
      <span>成交量{{ hangqing.vol}}</span>
    </p>  
    <p class="mb5">
      <Button type="primary" @click="toLoading('btc_cny')">btc_cny</Button>
      <Button type="primary" @click="toLoading('ltc_cny')">ltc_cny</Button>      
      <Button type="primary" @click="toLoading('eth_cny')">eth_cny</Button>      
      <Button type="primary" @click="toLoading('etc_cny')">etc_cny</Button>      
      <Button type="primary" @click="toLoading('bts_cny')">bts_cny</Button>      
    </p>  
    <Table highlight-row :columns="columns3" :data="data1"></Table>
  </div>
</template>
<script>
import {
    mapGetters,
    mapActions,
    mapState
} from 'vuex';
    export default {
        data () {
            return {
                hangqing: {},
                columns3: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                ],
            }
        },
        computed: {
            ...mapGetters({
                getHangqingState: 'getHangqingState',
            }),
        },
        components: {
        },
        methods: {
            //获取商品详情和城市数据
            ...mapActions([
                'getHangqing',
            ]),
            toLoading(type) {
              let _this = this;
              this.$http.get('/v1/ticker',{params:{currency:type}}).then(
                function(res){
                  _this.hangqing = res.data.ticker;
                  console.log(_this.hangqing);
                });
            },
        },        
        mounted () {
          // this.getHangqing('btc_cny');
          this.toLoading('btc_cny');
          // currency有下列参数类型可选
          // btc_cny:BTC/CNY
          // ltc_cny :LTC/CNY
          // eth_cny :以太币/CNY
          // etc_cny :ETC币/CNY
          // bts_cny :BTS币/BTS币
        }
    }
</script>

<style lang="css" scoped>
  .index{
    width:1190px;
    margin:0 auto;
    h1{
      margin:10px 0;
      line-height: 60px;
    }
    .mb5{
      margin-bottom: 5px;
    }
    .hangqing>span{
      padding-right:20px;
    }
  }
</style>