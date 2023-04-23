import axiosClient from "./axiosClient"



const dashboardApi = {
  getApi: ()=>{
    const url = `/dashboard`
    return axiosClient.get(url)
  }
}


export default dashboardApi
