import axios from 'axios'
import { Loading } from 'element-ui'
import TokenService from './token';

axios.interceptors.request.use((config) => {
  Loading.service({ text: "Loading..." })
  console.log("🎉🎉您发出了一个请求...")
  console.log("--------------------------------")
  return config;
},(error) => {
  console.error("请求出了一点小小的差错...")
  console.error("请检查一下你的api是否正确...")
  console.error("系统得到的一些错误信息:")
  console.error(error)
})

axios.interceptors.response.use((response) => {
  const loading = Loading.service({ text: "Loading..." })
  loading.close()
  console.log("🎉🎉请求已经成功响应...")
  console.log("--------------------------------")
  return response
},(error) => {
  const loading = Loading.service({ text: "Loading..." })
  loading.close()
  console.error("请求已成功发出，但是得到了一些错误的响应！")
  if (error.response) {
    console.error("错误响应的状态码为: " + error.response.status)
    console.error("系统得到的一些错误信息: ")
    console.error(error.response)
  }
})

const PortName = '/api/tenant/v1'
export default {
    init(baseUrl = process.env.VUE_APP_API_DOMAIN) {
      axios.defaults.baseURL = `${baseUrl}${PortName}`
    },
  
    setHeader(tokenType = 'Bearer') {
      axios.defaults.headers.Authorization = `${tokenType} ${TokenService.getToken()}`
    },
  
    request(data) {
      return axios(data)
    }
}