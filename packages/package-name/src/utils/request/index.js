import Axios from 'axios';

const instance = Axios.create({
  baseURL: '',
  timeout: 10000,
})

const requestInterceptor = (config) => {
  return config
}

const requestInterceptorId = instance.interceptors.request.use(requestInterceptor);

const responseInterceptor = (response) => {
  return response
}

const responseInterceptorId = instance.interceptors.response.use(responseInterceptor)

export {
  instance,
  requestInterceptorId,
  requestInterceptor,
  responseInterceptorId,
  responseInterceptor
}