<template>
    <div>
        <topPart></topPart>
        <searchPart></searchPart> 
        <cataPart showUl='yes'></cataPart>
        <bannerPart></bannerPart>
    </div>
</template>
<script>
import { mapGetters,mapActions,mapState } from 'vuex'
import topPart from './topPart.vue'
import searchPart from './searchPart.vue'
import cataPart from './cataPart.vue'
import bannerPart from './bannerPart.vue'
export default {

    name: 'indexheader',
    computed: {
        ...mapGetters({
            getLogState: 'getLogState',
        }),
    },
    methods: {
        ...mapActions([
            'getLoginInfo',
        ])
    },
    components:{
        topPart,
        searchPart,
        cataPart,
        bannerPart
    }
};
</script>
<style lang="css" scoped>
.commonHeader {
    padding: 20px;
    text-align: center;
    background: pink;
    border: 1px #666 solid;
    /* margin-bottom: 10px; */
}
</style>
