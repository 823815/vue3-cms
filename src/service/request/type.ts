import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HttpRequsetInterceptors {
  requestInterceptor?: (value: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (value: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
export interface HttpRequsetConfig extends AxiosRequestConfig {
  interceptors?: HttpRequsetInterceptors
}
