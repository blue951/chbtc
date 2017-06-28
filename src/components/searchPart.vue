<template>
<div class="w header-box">
    <a slot="logo" class="logo" href="index.html"></a>
    <div class="mall-search">
        <div class="mall-search-form">
            <input id="keywords" class="mall-search-form-input" type="text" name="" placeholder="球阀">
            <button class="mall-search-form-button" @click="search">搜索</button>
        </div>
        <ul class="hot-query">
            <li v-for="(dt,i) in getKeyWordsState">
                <a :class="{selected:i==0}" v-if="i<9" @click="searchA" :title="dt">{{dt}}</a>
            </li>
        </ul>
    </div>
	<div slot="linkStyle" class="header-prompt">
	    <span class="header-prompt-sss"></span>
	</div>
</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  name: 'searchPart',
  data () {
    return {

    };
  }, 
  computed: {
        ...mapGetters({
            getKeyWordsState: 'getKeyWordsState',
        }),
    },
    methods: {
        ...mapActions([
            'getKeyWords',
        ]),
        search () {
        	//暂未实现   需要构建搜索页面，然后配置路由，传递参数
        },
        searchA () {

        }
    },
    mounted(){
        this.getKeyWords();
    }
};
</script>

<style lang="css" scoped>
</style>