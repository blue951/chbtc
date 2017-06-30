<template>
    <div class="con">
        <div id="preview" class="spec-preview">
            <span class="jqzoom"><img :jqimg="b1" :src="s1" /></span>
        </div>
        <div class="spec-scroll"> <a class="prev">&lt;</a> <a class="next">&gt;</a>
            <div class="items">
                <ul>
                    <li><img :bimg="b1" :src="s1"></li>
                    <li><img :bimg="b2" :src="s2"></li>
                    <li><img :bimg="b3" :src="s3"></li>
                    <li><img :bimg="b1" :src="s1"></li>
                    <li><img :bimg="b3" :src="s3"></li>
                    <li><img :bimg="b2" :src="s2"></li>
                    <li><img :bimg="b2" :src="s2"></li>
                    <li><img :bimg="b3" :src="s3"></li>
                    <li><img :bimg="b3" :src="s3"></li>
                    <li><img :bimg="b1" :src="s1"></li>
                    <li><img :bimg="b1" :src="s1"></li>
                    <li><img :bimg="b2" :src="s2"></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
require('../../../static/jqzoom/jquery.min.js');
require('../../../static/jqzoom/jqzoom.js');
require('../../../static/jqzoom/use.jqzoom.js');
require('../../../static/jqzoom/jqzoom.css');
export default {
    name: 'jdzoom',
    data() {
        return {
            b1: require('../../../static/jqzoom/images/b1.jpg'),
            b2: require('../../../static/jqzoom/images/b2.jpg'),
            b3: require('../../../static/jqzoom/images/b3.jpg'),
            s1: require('../../../static/jqzoom/images/s1.jpg'),
            s2: require('../../../static/jqzoom/images/s2.jpg'),
            s3: require('../../../static/jqzoom/images/s3.jpg'),
        };
    },
    methods: {

    },
    mounted() {},
}
</script>

<style type="text/less">
.con {
    margin: 20px auto;
}

.spec-preview {
    margin: 0 auto;
    overflow: hidden;
}

.spec-preview,
.spec-scroll {
    margin: 5px auto;
    overflow: hidden;
}
</style>
