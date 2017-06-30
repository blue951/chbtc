<template>
    <div class="apps">
        <div class="todo list-con">
            <input type="text" :value="inputVal" @keyup.enter="onEnter"/>
            <ul>
                <li v-for="(item,index) in items"> {{ item.title }}  <span @click="deleteLi(index)" class="pointer">删除</span></li>
            </ul>            
        </div>    

        <tab></tab>
        <cube></cube>   
        <test></test>
        <jdzoom></jdzoom>
        <!-- <zoom></zoom>     -->
    </div>
</template>
<script>
import tab from './tab.vue';
import cube from './cube.vue';
import test from './test.vue';
import jdzoom from './jdzoom.vue';
// import zoom from './zoom.vue'; //此组件有bug，页面跳转后报未注销错误

    export default {
        components:{
            tab,
            cube,
            test,
            jdzoom,
            // zoom,
        },
        data () {
            return {
                inputVal:'',
                items:[
                    {
                        title:'aaa'
                    },
                    {
                        title:'bbb'
                    },
                    {
                        title:'ccc'
                    },
                ]
            }
        },
        methods:{
            onEnter:function(e){
                this.items.push({
                    title: e.target.value
                });
                this.inputVal='';
            },
            deleteLi:function(index){
                var newArr=[];
                this.items.forEach(function(item,key){
                    if(key===index) return;
                    newArr.push(item);
                })
                this.items=newArr;
                console.log(index);
            },
        },
    }
</script>

<style type="text/less">
    .list-con{
        .pointer{
            cursor: pointer;
        }
        width:300px;
        margin:60px auto;
        input{
            font-size:14px;
            line-height: 30px;
            width: 100%;
        }
        ul{
            margin-top:10px;
        }
        ul li{
            padding:10px;
            border-bottom: 1px #777 solid;
            list-style:circle;
            display: flex;
            background: pink;
            justify-content: space-between;
        }
    }    
</style> 