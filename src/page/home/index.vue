<template>
    <div class="index">
        <form class="commonField">
            <fieldset>
                <legend>交易行情</legend>
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
            </fieldset>
        </form>
        <Form ref="formInline" class="commonField" :model="formInline" :rules="ruleInline" inline>
            <fieldset>
                <legend>市场深度</legend>
                <Form-item prop="currencyType" style="width:100px;">
                    <Select v-model="formInline.currencyType" placeholder="请输入currency种类">
                        <Option value="btc_cny">btc_cny</Option>
                        <Option value="ltc_cny">ltc_cny</Option>
                        <Option value="eth_cny">eth_cny</Option>
                        <Option value="etc_cny">etc_cny</Option>
                        <Option value="bts_cny">bts_cny </Option>
                    </Select>
                </Form-item>
                <Form-item prop="size">
                    <Input v-model="formInline.size" placeholder="请输入size 1-50"></Input>
                </Form-item>
                <Form-item prop="merge">
                    <Input v-model="formInline.merge" placeholder="请输入merge 0.1-1"></Input>
                </Form-item>
                <Form-item prop="buyOrSell">
                    <Select v-model="formInline.buyOrSell" placeholder="请选择买/卖方">
                        <Option value="bids">买方深度</Option>
                        <Option value="asks">卖方深度</Option>
                    </Select>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="queryDeepth('formInline')">查询</Button>
                </Form-item>
                <IEcharts class="deepthCharts" :option="deepth" :loading="chartLoading"></IEcharts>
            </fieldset>
        </Form>
        <Form ref="historyForm" class="commonField" :model="historyForm" :rules="historyFormRule" inline>
            <fieldset>
                <legend>历史成交</legend>
                <Form-item>
                    <Select v-model="historyForm.currencyType" placeholder="请输入currency种类">
                        <Option value="btc_cny">btc_cny</Option>
                        <Option value="ltc_cny">ltc_cny</Option>
                        <Option value="eth_cny">eth_cny</Option>
                        <Option value="etc_cny">etc_cny</Option>
                        <Option value="bts_cny">bts_cny </Option>
                    </Select>
                </Form-item>
                <Form-item prop="id">
                    <Input v-model="historyForm.id" placeholder="请输入查数据条数"></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="queryHistory('historyForm')">查询</Button>
                </Form-item>
                <Table highlight-row :columns="historyTitle" :data="historyTabData"></Table>
            </fieldset>
        </Form>
        <Form ref="klineForm" class="commonField" :model="klineForm" :rules="klineFormRule" inline>
            <fieldset>
                <legend>K线</legend>
                <Form-item>
                    <Select v-model="klineForm.currencyType" placeholder="请输入currency种类">
                        <Option value="btc_cny">btc_cny</Option>
                        <Option value="ltc_cny">ltc_cny</Option>
                        <Option value="eth_cny">eth_cny</Option>
                        <Option value="etc_cny">etc_cny</Option>
                        <Option value="bts_cny">bts_cny </Option>
                    </Select>
                </Form-item>
                <Form-item>
                    <Select v-model="klineForm.type" placeholder="请输入查询种类">
                        <Option value="1min">1分钟</Option>
                        <Option value="3min">3分钟</Option>
                        <Option value="5min">5分钟</Option>
                        <Option value="15min">15分钟</Option>
                        <Option value="30min">30分钟</Option>
                        <Option value="1day">1日</Option>
                        <Option value="3day">3日</Option>
                        <Option value="1week">1周</Option>
                        <Option value="1hour">1小时</Option>
                        <Option value="2hour">2小时</Option>
                        <Option value="4hour">4小时</Option>
                        <Option value="6hour">6小时</Option>
                        <Option value="12hour">12小时</Option>
                    </Select>
                </Form-item>
                <Form-item prop="since">
                    <Input v-model="klineForm.since" placeholder="请输入时间戳"></Input>
                </Form-item>
                <Form-item prop="size">
                    <Input v-model="klineForm.size" placeholder="请输入查数据条数"></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="queryKline('klineForm')">查询</Button>
                </Form-item>
            </fieldset>
        </Form>        
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions,
    mapState
} from 'vuex';
import IEcharts from 'vue-echarts-v3/src/full.vue';
export default {
    data() {
            return {
                //行情
                hangqing: {},
                formInline: {
                    currencyType: 'btc_cny', //默认查比特比市场深度
                    size: '3',
                    merge: '0.1',
                    buyOrSell: 'asks'
                },
                ruleInline: {
                    currencyType: [{
                        required: true,
                        message: '请填写货币种类',
                        trigger: 'change'
                    }],
                    size: [{
                        required: true,
                        message: '请填写档位1-50可选',
                        trigger: 'blur'
                    }],
                    merge: [{
                        required: true,
                        message: '请填写merge',
                        trigger: 'blur'
                    }, {
                        type: 'string',
                        min: 1,
                        message: 'merge长度不能小于1位',
                        trigger: 'blur'
                    }]
                },
                //市场深度
                chartLoading: false,
                deepth: {
                    title: {
                        text: '市场深度'
                    },
                    tooltip: {},
                    xAxis: {
                        data: []
                    },
                    yAxis: {

                    },
                    series: [{
                        name: '数值',
                        type: 'bar',
                        data: []
                    }]
                },
                //历史成交
                historyForm: {
                    currencyType: 'btc_cny',
                    id: 395383997, //指定id后50条数据
                },
                //table
                historyTitle: [{
                    type: 'index',
                    width: 60,
                    align: 'center'
                }, {
                    title: '交易数量',
                    key: 'amount'
                }, {
                    title: '交易价格',
                    key: 'price'
                }, {
                    title: '交易生成ID号',
                    key: 'tid'
                }, {
                    title: '交易日期',
                    key: 'date'
                }, {
                    title: '交易类型',
                    key: 'type'
                }, {
                    title: '委托类型<br>asks卖bids买',
                    key: 'trade_type'
                }],
                historyTabData: [{
                    amount: 0.15,
                    price: 18,
                    tid: '55545',
                    date:22,
                    type:222,
                    trade_type:222
                },
                ],
                //k线
                klineForm:{
                    currencyType: 'btc_cny',
                    type: '1min',
                    since: 1498708978704,
                    size: 2
                }
            }
        },
        computed: {
            ...mapGetters({
                getHangqingState: 'getHangqingState',
            }),
        },
        components: {
            IEcharts,
        },
        methods: {
            //获取商品详情和城市数据
            ...mapActions([
                'getHangqing',
            ]),
            toLoading(type) {
                let _this = this;
                this.$http.get('/v1/ticker', {
                    params: {
                        currency: type
                    }
                }).then(
                    function(res) {
                        _this.hangqing = res.data.ticker;
                    });
            },
            queryDeepth(form) {
                let _this = this;
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        _this.$http.get('/v1/depth', {
                            params: {
                                currency: _this.formInline.currency,
                                size: _this.formInline.size,
                                merge: _this.formInline.merge,
                            }
                        }).then(function(res) {
                            //生成横轴的50个数据
                            let arr = [];
                            for (let i = 0; i < res.data.asks.length; i++) {
                                arr.push(i);
                            }
                            // console.log(arr);
                            //纵轴只显示asks里面的数组元素第一个值
                            let arrY = [];
                            //查询买/卖方深度
                            let deepData = [];
                            if (_this.formInline.buyOrSell == 'asks') {
                                deepData = res.data.asks;
                            }
                            if (_this.formInline.buyOrSell == 'bids') {
                                deepData = res.data.bids;
                            }
                            deepData.forEach(function(item) {
                                    arrY = arrY.concat(item[0]);
                                })
                                // console.log(arrY);
                            _this.deepth.xAxis.data = arr;
                            _this.deepth.series[0].data = arrY;
                        }, function(res) {

                        });
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                });
            },
            queryHistory(form) {
                let _this = this;
                this.$http.get('/v1/trades', {
                    params: {
                        currency: this.historyForm.currencyType,
                        since: this.historyForm.id,
                    }
                }).then(function(res) {
                    console.log(res)
                    _this.historyTabData = res.data;
                    console.log(_this.historyTabData)
                });
            },
            queryKline(form) {
                this.$http.get('/v1/kline', {
                    params: {
                        currency: this.klineForm.currencyType,
                        type: this.klineForm.type,
                        since: this.klineForm.since,
                        size: this.klineForm.size
                    }
                }).then(function(res) {
                    console.log(res)
                });
            },
        },
        mounted() {
            // this.getHangqing('btc_cny');
            this.toLoading('btc_cny');
        }
}
</script>
<style lang="css" scoped>
.index {
    width: 1190px;
    margin: 30px auto;
    .deepthCharts {
        width: 800px;
        height: 400px;
        background: pink;
        margin: 30px auto;
    }
    h1 {
        margin: 10px 0;
        line-height: 60px;
    }
    .mb5 {
        margin-bottom: 5px;
    }
    .hangqing>span {
        padding-right: 20px;
    }
    .ivu-table-cell{  /* fwf */
      white-space: nowrap;
    }
}

.commonField {
    margin-bottom: 5px;
    fieldSet {
        padding: 10px;
    }
    legend {
        padding: 0 10px;
    }
}
</style>
