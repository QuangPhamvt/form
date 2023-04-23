import { useEffect, useState} from "react"
import loginApi from "../../api/user/loginApi.jsx"
import { useNavigate } from "react-router-dom"
import {useDispatch } from "react-redux"
import { updateToken } from "../../store/tokenSlice.jsx"


const Login = () => {
  const disptach = useDispatch()
  const navigate = useNavigate()


  useEffect(()=>{
    const isToken = localStorage.getItem(`token`) ? true : false
    if (isToken){
      navigate("/dashboard")
    }
  },[navigate])

  const [user, setUser] = useState({
    username: "",
    password: "",
  })
  const { username, password } = user


  // Handle Change
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setUser(values =>({...values, [name]:value}))
  }


  //Handle Submit
  const handleSubmit = event => {
    event.preventDefault()
    async function postApi(user){
      try {
        const { data } = await loginApi.postApi(user)
        console.log(data);
        if(data.success){
          disptach(updateToken(data.authToken))
          navigate("/dashboard")
        }
      } catch (error) {
        console.log(error.response.data);
      }
    }
    postApi(user)
  }

  return(
    <div className="absolute left-0 top-0 right-0 bottom-0 bg-opacity-60 bg-black flex justify-center items-center">
      <div className="w-[600px] rounded-lg bg-white overflow-hidden">
        <div className="h-10 bg-cyan-300 "></div>

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col justify-self-center justify-center px-10 gap-5 py-24"
        >
           {/* USERNAME */}
          <div>
            <div className="mb-2">USERNAME</div>
            <input
              name="username"
              value={ username }
              className="w-full h-10 rounded-md bg-gray-100 pl-6"
              type="text" 
              placeholder="username"
              onChange={handleChange}
            />
          </div>


          {/* PASSWORD */}
          <div>
            <div className="mb-2">PASSWORD</div>
            <input 
              name="password"
              value={ password }
              className="w-full h-10 rounded-md bg-gray-100 pl-6"
              type="password" 
              placeholder="password"
              onChange={handleChange}
            />
          </div>


          {/* Login */}
          <button
            type="submit"
            className="bg-green-100 h-[40px]"
          >
            Login
          </button>
          <button
            onClick={()=>{navigate("/register")}}
          >
            Register
          </button>
          
        </form>
      </div>
    </div>
  )
}


export default Login
