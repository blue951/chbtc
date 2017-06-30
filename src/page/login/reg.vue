<template>
	<section class="main-section" id="app">
	<!--主体框架-->
	<div class="mainpanel">
	    <!--头部-->
	    <div class="logo-top">
	     <div class="logo-center">
	      <a class="logo-a f-left " href="index.html"> </a>
	      <div class="login-have f-right">已有账号  <router-link to="/login" class="login-please">请登录</router-link></div>
	     	
	     </div>
	    	
	    </div>
		<!--end 头部-->
		<!--内容-->
		<div class="login-bg register margin-b20">
		 <div class="w">
		  <div class="reg-form">
		   <div class="reg-form-a f-left">
		   	<form id="data-form">
			     <div class="form-item">
			       <label>用　户　名</label>
			       <input id="userName" class="field" name="userName" tabindex="1" autocomplete="off" placeholder="您的账户名和登录名" type="text" v-on:focus="focusFun" v-on:blur="blurFun1">
			       <div class="form-prompt" style="display: none;" title="支持中文、字母、数字、“-”“_”的组合，4-20个字符">支持中文、字母、数字、“-”“_”的组合，4-20个字符</div>
			       <i class="icon-chenggong" style="display: none;"></i>
			     </div>
			     <div class="form-item margin-t30">
			       <label>设 置 密 码</label>
			       <input id="pwd1" class="field" type="password" name="password" tabindex="1" autocomplete="off" placeholder="建议至少使用两种字符组合" v-on:focus="focusFun" v-on:blur="blurFun2">
			       <div class="form-prompt" style="display: none" title="建议使用字母、数字和符号两种及以上的组合，6-20个字符">建议使用字母、数字和符号两种及以上的组合，6-20个字符</div>
			     	<i class="icon-chenggong" style="display: none;"></i>
			     </div>
			     <div class="form-item margin-t30">
			       <label>确 认 密 码</label>
			       <input id="pwd2" class="field" type="password" name="confirmPassword" tabindex="1" autocomplete="off" placeholder="请再次输入密码" v-on:focus="focusFun" v-on:blur="blurFun3">
			       <div class="form-prompt" style="display: none" title="请再次输入密码">请再次输入密码</div>
			       <i class="icon-chenggong" style="display: none;"></i>
			     	
			     </div>
			     <div class="form-item margin-t30" style="z-index: 1000;">
			       <label class="down-arrow-bor" style="position: relative; z-index: 1000;" @click="phSelect">
			       	    <span>中国 +86</span><a class="down-arrow icon-jiantouxia"></a>	
			       	    <ul>
			       	    	<li><a>中国 +86</a></li>
							<li><a>台湾 +886</a></li>
							<li><a>香港 +852</a></li>
			       	    </ul>
			       </label>
			       <input id="userPhone" class="field" name="mobile" tabindex="1" autocomplete="off" placeholder="建议使用常用手机" type="text" v-on:focus="focusFun" v-on:blur="blurFun4">
			       <div class="form-prompt" style="display: none" title="完成验证后，可以使用该手机登录和找回密码">完成验证后，可以使用该手机登录和找回密码</div>
			       <i class="icon-chenggong" style="display: none;"></i>
			     </div>
			    
			     <div class="form-item  margin-t30">
			       <label>手机验证码</label>
			       <input id="yzm" class="field" name="code" tabindex="1" autocomplete="off" placeholder="请输入手机输入验证码" type="text" v-on:focus="focusFun" v-on:blur="blurFun5">
			       <button class="btn-phonecode" type="button" @click="getCode">获取验证码</button>
			       <!--<button class="btn-phonecode cxfsbtn" type="button" style="display: none;">60秒后重新发送</button>-->
			       <div class="form-prompt" style="display: none" title="请输入短信验证">请输入短信验证</div>
			       <i class="icon-chenggong" style="display: none;"></i>	
			     </div>
			     <div class="form-agreen margin-t30">
		             <div><input name="agreen" checked="" type="checkbox">我已阅读并同意<a>《人人阀用户注册协议》</a></div>
		             <div class="input-tip"></div>
		         </div>
	       </form>
	         <button class="btn btn-orange btn-register margin-t30" @click="submitFun">立即注册</button>
		   </div>		  	
		  </div>		
		 </div>	
		</div>
		<!--end 内容-->
		  <indexFooterer></indexFooterer>
	</div>
	<!--end 主体框架-->
	</section>
</template>

<script>
// import "./index.less";
export default {

  name: 'index',
  components:{
  },

  data () {
    return {

    };
  }
};
</script>
<style type="text/less">
	.form-item {
	    z-index: 100;
	}

	.down-arrow-bor ul {
	    position: absolute;
	    left: -1px;
	    top: 51px;
	    width: 111px;
	    background: #0082B9;
	    z-index: 1000;
	    border: 1px solid #cccccc;
	    background: #fff;
	    border-top: 0;
	    display: none;
	    li a{
		    display: block;
		    height: 30px;
		    line-height: 30px;
		    padding: 0 0 0 10px;    	
	    }
	    li a:hover{
	    	background: #f6f6f6;    	
	    }
	}	
</style>