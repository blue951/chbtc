import Vue from 'vue'
// import VueResource from 'vue-resource';
// Vue.use(VueResource);
// import axios from 'axios';
// var v = new Vue({});



var HTTP_SERVER = "http://192.168.1.191:8080/portal"; //生产环境需要
//行情api
var dataUrl = "http://api.chbtc.com/data/v1";
//交易api
var tradeUrl = "http://api.chbtc.com/data/v1";

//使用vue-resource的jsonp实现
export function jsonpAjax(url, params) {
    return v.$http.jsonp(HTTP_SERVER + url, {
        ...params
    })
};
export function dataAjax(url, params) {
    return axios.get(dataUrl + url, {
        ...params
    })
};
export function tradeAjax(url, params) {
    return v.$http.jsonp(tradeUrl + url, {
        ...params
    })
};


// export default {  //这种方式必须用 import JSOP from ...
//   jsonpAjax: function(url,params){
//       return v.$http.jsonp(root + url,{
//         ...params
//       })
//   }
// }

//使用jquery的jsonp实现
// export function myAjax(options) {
//     var defaults = {
//         data: "",
//         url: "",
//         success: $.noop
//     };
//     var settings = $.extend(defaults, options);
//     $.ajax({
//         type: "GET",
//         data: settings.data,
//         dataType: "jsonp",
//         jsonp: "callback",
//         cache: false,
//         ifModified: true,
//         jsonpCallback: "callBack_" + getRandom(5),
//         url: root + settings.url, //HTTP_SERVER + 
//         async: false,
//         success: function (data) {
//             if (data.status == -3) {
//             	console.log(data)
//                 //location.href = 'login.html?redirect=' + encodeURIComponent(location.href);
//                 //settings.success(data);
//             } else if (settings.success) {
//                 settings.success(data);
//             }
//         }
//     });
// };

// export function getRandom(n) {
//     var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     var res = "";
//     var r = /^\+?[1-9]*$/;
//     if (!r.test(n))
//         n = 3;
//     for (var i = 0; i < n; i++) {
//         var id = Math.ceil(Math.random() * 35);
//         res += chars[id];
//     }
//     return res;
// };
