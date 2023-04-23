import axiosClient from '../axiosClient.jsx'


const registerApi = {
  postApi:( user )=>{
    const { username, password } = user
    return axiosClient.post("/user/register", { username, password })
  }
}


export default registerApi


