import store from 'store/'

/**
 * [judgeDevice 判断设备类型，返回设备类型]
 */
function judgeDevice() {
    if (store.getState().common.__DEVICE__ == 'PC') {
        return 'pc';
    } else {
        return 'mobile';
    }
}

/**
 * 获取设备类型    把状态保存到state里面
 */
export function getNavigator() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
    var flag = true;
    for (var i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) > 0) {
            flag = false;
            break;
        }
    }
    var dev = flag ? 'PC' : 'MOBILE';
    return {
        //type: TYPES.UPDATE_NAVIGATOR,
        dev: dev
    }
}

export function getUserInfo(call) {
    return function(dispatch) {
        // let token = sessionStorage.getItem('user_token');
        // if(token){
        // 令牌还有效
        ajax({
            url: `/qm/api/user_info?timeStamp=${Date.now()}`,
            success: function(userInfo) {
                let flag = call && call(userInfo);

                if (flag === false) {
                    return
                } //微信登录没有请求到数据的时候，就不走下面的逻辑了 false:没有请求到

                if (userInfo) {
                    dispatch({
                        type: TYPES.LOGIN_SUCCESS,
                        info: userInfo
                    })
                    dispatch(getNoticeCount());

                    var user_site = userInfo.site_domain_name;
                    var cur_site = location.host.substring(0, location.host.indexOf('.'));
                    if (cur_site != user_site) {
                        if (window.location.href.indexOf('/#/payment') == -1) {
                            window.location.href = window.location.href.replace(cur_site + '.', user_site + '.');
                            document.title = userInfo.site_name;
                        } else {
                            document.setTitle = function(t) {
                                document.title = t;
                                var i = document.createElement('iframe');
                                i.src = '/favicon.ico';
                                i.style.display = 'none';
                                i.onload = function() {
                                    setTimeout(function() {
                                        i.remove();
                                    }, 9);
                                }
                                document.body.appendChild(i);
                            }
                            setTimeout(function() {
                                document.setTitle(userInfo.site_name)
                            }, 1000);
                        }
                    }
                } else {
                    dispatch({
                        type: TYPES.LOGIN_SUCCESS
                    })
                }
            }
        })
            // }else{
            //     // 自动登录
            //     let username = localStorage.getItem('username')
            //     let password = localStorage.getItem('password')
            //     if(username && password){
            //         console.log("开始自动登录...")
            //         dispatch(login({
            //             username,
            //             password,
            //             auto_login: true
            //         }))
            //     }
            // }
    }
}
/**
 * [login 用户登录]
 * @param  {[type]} name [用户名]
 * @param  {[type]} psw  [密码]
 */
const needRedirectPath = ['/', '/login', '/course/market', '/course/business', '/regist/site', '/bind/login', '/bind/register'];
export function login(values, call, redirect) {
    return function(dispatch) {
        ajax({
            url: '/qm/api/login',
            data: values,
            success: function(userInfo, result) {

                dispatch(getNoticeCount());
                message.success(result.message);

                const sign = store.getState().common.sign || {};
                const opt = sign.opt || {};
                let login_success_call = opt.login_success_call || function() {};
                dispatch({
                    type: TYPES.LOGIN_SUCCESS,
                    info: userInfo
                })

                login_success_call();
                let curPath = location.hash.slice(1).split('?')[0];
                const targetUrl = getQueryString('targetUrl');
                if (targetUrl) {
                    History.push(targetUrl);
                } else if (redirect) {
                    History.push(redirect);
                } else if (needRedirectPath.indexOf(curPath) != -1) {
                    const defaultLoginUrl = userInfo.defaultLoginUrl || store.getState().common.site_logo.defaultLoginUrl;
                    if (defaultLoginUrl == 'home') {
                        History.push('/');
                    }

                    if (defaultLoginUrl == 'market') {
                        History.push('/course/market');
                    }

                    if (defaultLoginUrl == 'siteCourse') {
                        History.push('/course/business');
                    }

                    if (defaultLoginUrl == 'myCourse') {
                        document.body.setAttribute('style', '');
                        History.push('/user/course');
                    }
                }


                var user_site = userInfo.site_domain_name;
                var cur_site = location.host.substring(0, location.host.indexOf('.'));
                if (cur_site != user_site) {
                    window.location.href = window.location.href.replace(cur_site + '.', user_site + '.');
                }
                document.title = userInfo.site_name;

                call && call(result);
            },
            error: function(result) {
                dispatch({
                    type: TYPES.LOGIN_FAIL,
                    msg: result.message
                })
                call && call(result);
            }
        })
    }
}

/**
 * [logout 用户退出登录]
 */
export function logout(callback) {
    return function(dispatch) {
        ajax({
            url: '/qm/api/logout',
            success: function() {
                dispatch({
                    type: TYPES.LOG_OUT
                })

                dispatch({
                    type: CLEAR_CART_STATE
                })
                if (callback) {
                    callback()
                } else {
                    let isOpen = store.getState().common.site_logo.isOpenOutsideWorld == 'Y';
                    if (isOpen) {
                        History.replace({
                            pathname: '/'
                        })
                    } else {
                        History.replace({
                            pathname: '/login',
                            state: {
                                redirect: location.hash.substr(1).split('?')[0]
                            }
                        })
                    }
                }
            }
        })
    }
}