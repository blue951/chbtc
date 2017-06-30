<template>
	<div class="login">
		<section class="main-section">
		    <!--主体框架-->
		    <div class="mainpanel">
		        <!--头部-->
		        <div class="logo-top">
		            <div class="logo-center">
		                <a href="/"><div class="logo-a"></div></a>
		            </div>

		        </div>
		        <!--end 头部-->
		        <!--内容-->
		        <div class="login-bg  margin-b20">
		            <div class="w login-bg-a">
		                <div class="login-form">
		                    <div class="login-title">
		                        账户登录
		                    </div>
		                    <div class="login-box">
		                        <div id="errors" class="error"></div>
		                        <div class="username margin-b20">
		                            <i class="icon icon-dengluyonghu username-icon" title="用户名"></i>
		                            <input class="itxt" name="account" autofocus="autofocus" autocomplete="off" placeholder="用户名/已验证手机" type="text">
		                            <span id="btn-4-clear" class="clear-btn hover icon-shanchu3" style="cursor: pointer;"></span>
		                        </div>
		                        <div class="username">
		                            <i class="icon icon-denglumima username-icon" title="密码"></i>
		                            <input class="itxt" name="password" autocomplete="off" placeholder="密码" type="password">
		                            <span class="clear-btn icon-shanchu" style="display: none"></span>
		                        </div>
		                        <div class="xx-span">
		                            <label><input class="checkbox" type="checkbox" name="rememberMe">自动登录</label>
		                            <a class="forget-pw" href="input-nick.html">忘记密码</a>
		                        </div>
		                        <div class="login-btn">
		                            <a id="btn-4-login" class="login-entry">登&nbsp;&nbsp;&nbsp;&nbsp;录</a>
		                        </div>

		                    </div>
		                    <a class="login-register" href="reg.html">没有账号，立即注册</a>
		                </div>
		            </div>
		        </div>
		        <!--end 内容-->
		    </div>
		    <!--end 主体框架-->
		</section>
	</div>
</template>

<script>
export default {

  name: 'login',

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>