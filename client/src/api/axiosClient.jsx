import axios from 'axios'


const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": 'application/json',
  },
  paramsSerializer: (params) => {
    var result = ""
    Object.keys(params).forEach((key)=>{
      const value = params[key]
      if(value !== undefined && value !== null  && value !== ''){
        result += `&${key}=${encodeURIComponent(value)}`
      }
    })
    return result ? result.substring(1) : ""
  },
})


axiosClient.interceptors.request.use(async(config)=>{
  try {
    const token = localStorage.getItem(`token`)
    config.headers['Authorization'] = token ? `Bearer ${token}`: ''
    return config
  } catch (error) {
    console.log(error.message);
  }
})

axiosClient.interceptors.response.use(async(config)=>{
  return config
})


export default axiosClient
