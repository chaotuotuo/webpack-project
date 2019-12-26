'use strict'

import Vue from 'vue'
import axios from 'axios'
import { Message, Loading, MessageBox } from 'element-ui'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


let config = {
    // baseURL: process.env.BASE_API || window.location.origin,
    withCredentials: true,
    timeout: 60 * 1000
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)
let loadinginstace

_axios.interceptors.request.use(
    config => {

        let _loading = config.loading,
            _isLoading = _loading != undefined || _loading != null ? _loading : true;

        // Do something before request is sent
        if(_isLoading){
            loadinginstace = Loading.service({
                fullscreen: true,
                background: 'rgba(0, 0, 0, .6)',
                text: '拼命加载中...'
            })
        }

        if (config.method === 'post' && typeof config.data === 'object') {
            const _data = Object.keys(config.data)
            config.data = _data.map(name => `${name}=${config.data[name]}`).join('&')
        }

        return config
    },
    error => {
        // Do something with request error
        loadinginstace && loadinginstace.close()
        return Promise.reject(error)
    }
)

// Add a response interceptor
_axios.interceptors.response.use(
    response => {
        // Do something with response data
        // loadinginstace && loadinginstace.close()

        const res = response.data
        if (res.code !== undefined && res.code !== 0) {
            switch (res.code) {
                case '0000':
                    // Message({
                    //     message: res.msg,
                    //     type: 'success',
                    //     duration: 2000
                    // })
                    break
                case '0010':
                    Message({
                        message: res.msg,
                        type: 'error',
                        duration: 2000
                    })
                    break
                case '0040':
                    Message({
                        message: res.msg,
                        type: 'error',
                        duration: 2000
                    })
                    break
            }
        }

        loadinginstace && loadinginstace.close()

        return res
    },
    err => {
        // Do something with response error
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误'
                    break

                case 401:
                    err.message = '未授权，请登录'
                    break

                case 403:
                    err.message = '拒绝访问'
                    break

                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`
                    break

                case 408:
                    err.message = '请求超时'
                    break

                case 500:
                    err.message = '服务器内部错误'
                    break

                case 501:
                    err.message = '服务未实现'
                    break

                case 502:
                    err.message = '网关错误'
                    break

                case 503:
                    err.message = '服务不可用'
                    break

                case 504:
                    err.message = '网关超时'
                    break

                case 505:
                    err.message = 'HTTP版本不受支持'
                    break

                default:
            }
        }

        Message({
            message: err.message,
            type: 'error',
            duration: 5000
        })
        loadinginstace && loadinginstace.close()
        return Promise.reject(err)
    }
)

Plugin.install = Vue => {
    Vue.axios = _axios
    window.axios = _axios
    Object.defineProperties(Vue.prototype, {
        axios: { get: () => _axios },
        $axios: { get: () => _axios }
    })
}

Vue.use(Plugin)

export default Plugin