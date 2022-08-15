import axios from 'axios'

// 创建axios实例。统一配置
const service = axios.create({
    baseURL: "http://localhost:8080/",
    timeout: 7200000
})


service.interceptors.request.use(config => {
    //... 获取token，存储token 等操作
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})


// respone拦截器
service.interceptors.response.use(
    response => {
        // ....
        return response.data
    },
    error => {
        // ....
        // return Promise.reject(error)
        return new Promise(() => { })
    }
)

export default service