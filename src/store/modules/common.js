//保存用户登录信息的公用模块
// import jsonp from 'jsonp'
// import querystring from 'querystring'
import * as types from '../constants/commonTypes'
// import { jsonpAjax,dataAjax,tradeAjax } from '../../common/jsonp.js';
// import reqwest from 'reqwest';
import axios from 'axios'

const state = { //state初始化
    hangqingData: {},
    marketData: [],
    historyData: [],
    klineData: [],
}

const getters = { //获取更新后的state
    getHangqingState: state => state.hangqingData,
    getMarketState: state => state.marketData,
    getHistoryState: state => state.historyData,
    getKlineState: state => state.klineData,
}

const mutations = { //各种变化修改state
    [types.SHOW_HANGQING](state, payload) {
        state.hangqingData = payload;
    },
    [types.SHOW_MARKET](state, payload) {
        state.marketData = payload;
    },
    [types.SHOW_HISTORY](state, payload) {
        state.historyData = payload;
    },
    [types.SHOW_KLINE](state, payload) {
        state.klineData = payload;
    },
}

const actions = { //异步请求触发变化

    //获取用户信息
    getHangqing({ commit, state }, coinType) {
        axios.get('/v1/ticker', {
            params: {
                currency: coinType
            }
        }).then(function(res) {
            commit(types.SHOW_HANGQING, res.data.ticker);
        }, function(res) {

        });
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
