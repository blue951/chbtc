<template>
    <div class="echarts">
        <IEcharts :option="bar" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
        <button @click="doRandom">Random</button>
    </div>
</template>
<script>
import Vue from 'vue';
import IEcharts from 'vue-echarts-v3/src/full.vue';
export default {

    name: 'zhexian',

    data() {
        return {
            // loading: true,
            bar: {
                title: {
                    text: 'ECharts Hello World'
                },
                tooltip: {},
                xAxis: {
                    data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
                },
                yAxis: {},
                series: [{
                    name: 'Sales',
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            },
        }
    },
    components: {
        IEcharts
    },
    props: {},
    methods: {
        doRandom() {
            const that = this;
            let data = [];
            for (let i = 0, min = 5, max = 99; i < 6; i++) {
                data.push(Math.floor(Math.random() * (max + 1 - min) + min));
            }
            that.bar.series[0].data = data;
        },
    }
};
</script>
<style lang="css" scoped>
  .echarts {
    width: 400px;
    height: 400px;
    background: pink;
    margin:30px auto;
  }
</style>
