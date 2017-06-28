<template>
    <div class="footer">
        <div class="ensure">
            <div class="w">
                <vueImg style="display:block;" src="../static/images/1300X70.jpg" usemap="#Crazy_zxerm" border="0">
                    <map name="Crazy_zxerm" id="Crazy_zxerm">
                        <area shape="rect" coords="4,1,215,67" href="/jingxuan.html?index=jingxuan" target="_blank" />
                        <area shape="rect" coords="327,1,574,69" href="/jingxuan.html?index=jiage" target="_blank" />
                        <area shape="rect" coords="697,1,929,69" href="/jingxuan.html?index=jizhifuwu" target="_blank" />
                        <area shape="rect" coords="1073,0,1105,30" href="" target="_blank" />
                        <area shape="rect" coords="1083,5,1301,68" href="/jingxuan.html?index=ziyuanbianxian" target="_blank" />
                    </map>
                </vueImg>
            </div>
        </div>
        <div class="desc">
            <div class="w">
                <div class="w1050">
                    <div class="desc-nav">
                        <h5>购物指南</h5>
                        <ul>
                            <li><a href="/static.html?index=gouwuliucheng">购物流程</a></li>
                            <li><a href="/static.html?index=changjianwenti">常见问题</a></li>
                            <li><a href="/static.html?index=lianxikefu">联系客服</a></li>
                        </ul>
                    </div>
                    <div class="desc-nav">
                        <h5>配送方式</h5>
                        <ul>
                            <li><a href="/static.html?index=shangmenziti">上门自提</a></li>
                            <li><a href="/static.html?index=songhuoshangmen">送货上门</a></li>
                            <li><a href="/static.html?index=peisongfei">配送费收取标准</a></li>
                        </ul>
                    </div>
                    <div class="desc-nav">
                        <h5>支付方式</h5>
                        <ul>
                            <li><a href="/static.html?index=zaixianzhifu">在线支付</a></li>
                            <li><a href="/static.html?index=youjuhuikuan">邮局汇款</a></li>
                            <li><a href="/static.html?index=gongsizhuanzhang">公司转账</a></li>
                        </ul>
                    </div>
                    <div class="desc-nav">
                        <h5>售后服务</h5>
                        <ul>
                            <li><a href="/static.html?index=shouhouzhengce">售后政策</a></li>
                            <li><a href="/static.html?index=fanxiuhuanhuo">返修/换货</a></li>
                            <li><a href="/static.html?index=quxiaodingdan">取消订单</a></li>
                        </ul>
                    </div>
                    <div class="desc-nav">
                        <h5>特色服务</h5>
                        <ul>
                            <li><a href="/static.html?index=zhuanjiazu">专家组</a></li>
                            <li><a href="/static.html?index=yanjiuyuan">研究院</a></li>
                            <li><a href="/static.html?index=shangxueyuan">商学院</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="w">
                <p class="copyright-info">
                    <div class="copyright-info-lk">
                        <a href="/about.html?index=about">关于人人阀</a>|
                        <a href="/about.html?index=pickout">新手学堂</a>|
                        <a href="/about.html?index=guide">联系我们</a>|
                        <a href="/help.html">帮助中心</a>
                    </div>
                    <span class="copyright-info-span"> Copyright © 2004 - 2016 人人阀 RRFAMEN.COM 版权所有</span>
                    <a href="http://www.miibeian.gov.cn/publish/query/indexFirst.action" target="_blank" class="copyright-info-p">渝ICP备14009591号-2</a>
                    <div class="copyright-auth">
                        <a href="http://www.cqgs12315.cn/" target="_blank">
                            <vueImg src="../static/images/fp1.jpg"></vueImg>
                        </a>
                        <a href="http://www.bj.cyberpolice.cn/index.do" target="_blank">
                            <vueImg src="../static/images/fp2.jpg"></vueImg>
                        </a>
                        <a href="http://t.knet.cn/index_new.jsp" target="_blank">
                            <vueImg src="../static/images/fp3.jpg"></vueImg>
                        </a>
                        <a href="http://www.12377.cn/" target="_blank">
                            <vueImg src="../static/images/fp5.jpg"></vueImg>
                        </a>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
import vueImg from './vueImg.vue'
export default {

    name: 'indexfooter',

    data() {
        return {
            srcPath: ''
        };
    },
    components: {
        vueImg
    }
};
</script>
<style lang="css" scoped>
</style>
