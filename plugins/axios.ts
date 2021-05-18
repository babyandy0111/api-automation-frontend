import {AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios'
import {initializeAxios, initializeCookies} from '~/utils/api'

export const accessor: ({error, app: {$axios, $cookies}}: {error: any; app: { $axios: any; $cookies: any }}) => void = ({error, app: {$axios, $cookies}}) => {

  initializeAxios($axios)
  initializeCookies($cookies)

  const config = {
    baseURL: 'https://api-development.indochat.net',
    headers: { Accept: 'application/json' }
  }
  
  const axios = $axios.create(config)

  axios.onRequest((config: AxiosRequestConfig) => {
    config.headers.Token = "xxxxxxxx"
    return config
  })
  axios.onError((err: AxiosError) => {
    console.log(err.message)
  })
  // response攔截器，資料返回後，可以先在這裡進行一些簡單的判斷
  axios.interceptors.response.use((response: AxiosResponse) => {
      const res = response
      if (res.status === 200) {
        return res
      } else {
        error({statusCode: res.status, message: res.data.msg})
        return Promise.reject(res)
      }
    },
    (err: any) => {
      const {status, data} = err.response
      error({statusCode: status, message: data.msg})
      return Promise.reject(err)
    })
}

export default accessor
