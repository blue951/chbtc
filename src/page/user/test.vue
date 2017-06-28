//一个组件对应一个modules里面的文件和一个constants里面的文件
//modules.js里包含state、getters、mutations和actions
//constants.js里包含常量表示的变化类型
<template>
    <div class="count">
        <p> Clicked: {{ getCount }} times, count is {{ evenOrOdd }}. </p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
        <p> {{ this.$store.state }}</p>        
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions,
    mapState
} from 'vuex'
export default {
    name: 'test',
    mounted () {
        this.getLoginInfo();
    },
    computed: {
        //合并getters,得到变化后的state值
        // 使用对象展开运算符将 getters 混入 computed 对象中
        // 映射 this.evenOrOdd 为 store.getters.evenOrOdd
        ...mapGetters({ 
            evenOrOdd: 'evenOrOdd',
            getCount: 'getCount',
            getAll: 'getAll',
        }),            
    },
    methods: {
        ...mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync',
            'getLoginInfo',
            'getProducts',
        ])
        //合并actions，逐一分发action,类似于下面代码
        // increment(){
        //     this.$store.dispatch('increment');
        // },
    }
};
</script>
<style lang="css" scoped>
.count {
    width: 600px;
    margin: 60px auto;
    font-size: 22px;
}
button{
    padding:0 10px;
}
</style>
