import { useState, } from "react"
import {useDispatch } from "react-redux"
import {Navigate, useNavigate} from "react-router-dom"
import registerApi from "../../api/user/register.jsx"
import { updateAuth} from "../../store/authSlice.jsx"
import { updateToken } from "../../store/tokenSlice.jsx"





const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordAgain: "",
  })
  const { username, password, passwordAgain } = user
  //check login


  //handleChange
  const handleChange = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setUser(state=>({
      ...state,
      [name] : value
    }))
  }

  //handleSubmit
  const handleSubmit = async (event)=>{
    try {
      event.preventDefault()
      if(password === passwordAgain && password !== "" && passwordAgain !=="") {
        const user = await registerApi.postApi({ username, password })
        dispatch(updateAuth(username))
        dispatch(updateToken(user.data.authToken))
        navigate("/dashboard")
      }
      else
        console.log({sucess: false});
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 bg-opacity-60 bg-black flex justify-center items-center">
      { localStorage.getItem('token') ? <Navigate to="/dashboard"/> :"" }
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
              value={username}
              onChange={handleChange}
              className="w-full h-10 rounded-md bg-gray-100 pl-6"
              type="text" 
              placeholder="username"
            />
          </div>


          {/* PASSWORD */}
          <div>
            <div className="mb-2">PASSWORD</div>
            <input 
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full h-10 rounded-md bg-gray-100 pl-6"
              type="password" 
              placeholder="password"
            />
          </div>

          {/* PASSWORD (AGAIN) */}
          <div>
            <div className="mb-2">PASSWORD (AGAIN)</div>
            <input 
              name="passwordAgain"
              value={passwordAgain}
              onChange={handleChange}
              className="w-full h-10 rounded-md bg-gray-100 pl-6"
              type="password" 
              placeholder="password"
            />
          </div>


          {/* Login */}
          <button
            type="submit"
            className="bg-green-100 h-[40px]"
          >
            Register
          </button>
          <button
            onClick={()=>{navigate("/register")}}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
