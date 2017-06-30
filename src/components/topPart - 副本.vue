<template>
    <div class="shortcut" style="position:relative;z-index:3;">
        <!-- 图钉 -->
        <Affix v-show="ifShow">
            <div class="search-fix" style="z-index: 10009; display: block;">
                <div class="w">
                    <a href="javascript:void(0)" class="search-fix-logo"></a>
                    <div class="form">
                        <div class="mall-search-form">
                            <input id="scTopKeywords" name="" placeholder="球阀" type="text" class="mall-search-form-input">
                            <button class="mall-search-form-button">搜索</button>
                        </div>
                    </div>
                </div>
            </div>
        </Affix>
        <div class="w shortcut-box">
            <p class="login-info">
                <em>您好，欢迎来到人人阀！</em>
                <span v-if="getLoginState">
                    <a class="register-info" href="/userHome.html">{{ getUserinfoState.nick }}</a>
                    <a class="register-info" @click="logout">退出</a>
                </span>
                <span v-else>
                    <a href="javascript:;" @click="modal6 = true">请登录</a>
                    <Modal 
                        v-model="modal6" 
                        title="用户登录" 
                        :loading="loading" 
                        @on-ok="handleSubmit('formValidate')" 
                        @on-cancel="handleReset('formValidate')">
                            <Form ref="formValidate" :model="formValidate" :rules="loginRules" :label-width="80">
                                <Form-item label="姓名" prop="name">
                                    <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
                                </Form-item>
                                <Form-item label="密码" prop="passwd">
                                    <Input type="password" v-model="formValidate.passwd"></Input>
                                </Form-item>
                                <Form-item label="" prop="interest">
                                    <Checkbox-group v-model="formValidate.interest">
                                        <Checkbox label="自动登录"></Checkbox>
                                    </Checkbox-group>
                                </Form-item>
                            </Form>
                    </Modal>                    
                    <a class="register-info" @click="showReg">免费注册</a>
                    <Modal
                        v-model="ifShowReg"
                        @on-ok="regSubmit('regForm')" 
                        @on-cancel="regReset('regForm')"
                        title="欢迎注册">
                            <Form ref="regForm" :model="regForm" :rules="regRules" :label-width="80">
                                <Form-item label="姓名" prop="name">
                                    <Input v-model="regForm.name" placeholder="您的账户名或登录名"></Input>
                                </Form-item>
                                <Form-item label="密码" prop="passwd">
                                    <Input type="password" v-model="regForm.passwd" placeholder="需要包含字母和数字"></Input>
                                </Form-item>
                                <Form-item label="确认密码" prop="passwdCheck">
                                    <Input type="password" v-model="regForm.passwdCheck" placeholder="再次输入密码"></Input>
                                </Form-item>
                                <Form-item label="手机号" prop="phoneNum">
                                    <Input v-model="regForm.phoneNum" placeholder="建议输入常用手机号">
                                        <Select v-model="phoneSelect" slot="prepend" style="width: 80px">
                                            <Option value="china">+86</Option>
                                            <Option value="taiwan">+886</Option>
                                            <Option value="honghong">+852</Option>
                                        </Select>
                                    </Input>
                                </Form-item>
                                <Form-item label="手机验证码" prop="checkCode">
                                    <Input type="text" v-model="regForm.checkCode" placeholder="请输入手机验证码">                                        
                                        <Button slot="append" @click="getCode" :disabled="ifForbidden">{{ checkCodeCon }}</Button>
                                    </Input>
                                </Form-item>
                                <Form-item label="" prop="readFirst">
                                    <Checkbox label="吃饭" v-model="regForm.regAgree">
                                    我已阅读并同意<router-link to="/">《人人阀用户注册协议》</router-link></Checkbox>
                                </Form-item>
                            </Form>
                    </Modal>
                </span>
            </p>
            <ul class="quick-menu">
                <li><a href="/userInfor.html">我的人人阀</a></li>
                <li>
                    <a href="/help.html">
                        <vueImg src="../static/images/help-meniu.png" style="padding-bottom: 3px;"></vueImg> 帮助中心
                    </a>
                </li>
                <li><a href="javascript:void(0)"><span>全国热线: </span><span style="color:#cf000e;"><strong>023-67489320</strong></span></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import vueImg from './vueImg.vue'
import assist from '../common/assist'
import {
    jsonpAjax
} from '../common/jsonp.js';
import {
    mapGetters,
    mapActions,
    mapState
} from 'vuex'

export default {
    name: 'topPart',
    data() {
        //验证账户名非空和4个字符以上
        const validateName = (rule, value, callback) => {            
            if (value === '') {
                callback(new Error('账户名不能为空'));
            }
            if (value.split('').length<4) {
                callback(new Error('账户名不能少于4位'));
            } else {
                callback();
            } 
        };
        //验证密码的函数
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.regForm.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.regForm.validateField('passwdCheck');
                }
                callback();
            }
        };
        //验证密码一致性
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.regForm.passwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        //手机号验证
        const validatePhoneNum =  (rule, value, callback) => {
            if(!/^\d{11}$/.test(value)){
                callback(new Error('请输入正确的手机号'));
            }else {
                callback();
            } 
        };
        //验证码长度必须大于4
        const validateCodeNumCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('验证码不能为空'));
            }
            if (value.split('').length<4) {
                callback(new Error('验证码不能少于4位'));
            } else {
                callback();
            } 
        };
        return {
            topPx: 0,
            modal6: false,
            loading: true,
            //showFooter: true, //模态框底部不显示
            formValidate: {
                name: '',
                passwd: '',
            },
            loginRules: {
                name: [{
                    required: true,
                    message: '用户名不能为空',
                    trigger: 'blur'
                }],
                passwd: [{
                    required: true,
                    message: '密码不能为空',
                    trigger: 'blur'
                }],
            },
            ifShowReg: false,
            //注册框用到的数据
            regForm: {
                    name: '',
                    passwd: '',
                    passwdCheck: '',
                    phoneNum: '',
                    checkCode: '',
                    regAgree: false,
            },
            regRules: {
                name: [
                    { validator: validateName, trigger: 'blur' }
                ],
                passwd: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { validator: validatePassCheck, trigger: 'blur' }
                ],
                phoneNum: [
                    { validator: validatePhoneNum, trigger: 'blur' }
                ],
                checkCode: [
                    { validator: validateCodeNumCheck, trigger: 'blur' }
                ],

            },
            //电话国籍选择
            phoneVal:'',
            phoneSelect: 'china',
            checkCodeCon: '获取验证码',
            ifForbidden: false,
        }
    },
    computed: {
        ...mapGetters({
            getLoginState: 'getLoginState',
            getUserinfoState: 'getUserinfoState',
        }),
        ifShow() {
            if (this.topPx > 100) {
                return true;
            } else {
                return false
            }
        }
    },
    methods: {
        ...mapActions([
            'getUserInfo',
            'login',
            'getKeyWords',
            'getCata',
            'getFloors',
            'logout',
            'getProducts',
        ]),
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.login( //此处无法给login方法传递第二个参数当作回调
                        {
                            account: this.formValidate.name,
                            password: this.formValidate.passwd,
                            rememberMe: false,
                            fn: this.getUserInfo,
                            call: this.$Message,
                            getProdNum: this.getProducts,
                        });
                } else {
                    this.$Message.error('表单验证失败!');
                    this.loading = false;
                };
            })
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        },
        handleScroll() {
            this.topPx = window.pageYOffset;
        },
        //弹出注册页面
        showReg() {
            this.ifShowReg = true;
        },
        //注册表单的按钮事件
        regSubmit (name) {
            this.$refs[name].validate((valid) => { 
                if(!this.regForm.regAgree) this.$Message.error('请先阅读协议!');
                if (valid && this.regForm.regAgree) {
                    jsonpAjax('/portal/portal/reg',{
                        params:{
                            userName: this.regForm.name,
                            password: this.regForm.passwd,
                            confirmPassword: this.regForm.passwdCheck,
                            mobile: this.regForm.phoneNum,
                            code: this.regForm.checkCode,
                            agreen: this.regForm.regAgree,                         
                        }
                    }).then(
                        response => {
                            console.log('注册成功')
                        },
                        response => {
                            console.log('注册失败')
                        }
                    );
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        regReset (name) {
            this.$refs[name].resetFields();
        },
        //获取验证码
        getCode () {
            let reg = /^\d{11}$/;
            if(/^\d{11}$/.test(this.regForm.phoneNum)){//可以发送请求了
                jsonpAjax('/portal/code/registerCODE',
                    { 
                        params: { mobile: this.regForm.phoneNum } 
                    }).then(response => {
                        this.ifForbidden = true;
                        this.checkCodeCon = 6;
                        let timer = setInterval(()=>{
                            if(this.checkCodeCon>0){
                                this.checkCodeCon--;
                            }
                            if(this.checkCodeCon==0){
                                this.checkCodeCon = '获取验证码';
                                this.ifForbidden = false;
                                clearInterval(timer);
                            }                            
                        },1000)
                    },response => {
                    });
                }else{//输入错误的手机号
                    this.$Message.error('请输入正确的手机号！');
                }     
        }  
    },
    mounted() {
        this.getUserInfo();
        window.addEventListener('scroll', this.handleScroll, false);
        window.addEventListener('resize', this.handleScroll, false);
    },
    components: {
        vueImg,
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
