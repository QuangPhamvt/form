import axiosClient from '../axiosClient.jsx'



const loginApi ={
  postApi : (user)=>{
    const url = '/user/login'
    return axiosClient.post(url, user)
  },
}


export default loginApi
