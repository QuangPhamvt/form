import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import dashboardApi from "../api/dashboard.jsx";
import { updateToken } from "../store/tokenSlice.jsx"



const Dashboard = ()=> {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const [isLogOut, setIsLogOut] = useState(false)
  useEffect(()=>{
    const data = async()=>{
      try {
        if (isLogOut){
          dispatch(updateToken(""))
        }
        const test = await dashboardApi.getApi()
        console.log(test.data.message);
      } catch (error) {
        console.log(error.response.data);
        return navigate("/")
      }
    }
    data()
  }, [isLogOut])

  //logOut
  return(
    <>
      <div className="grid grid-cols-1 justify-items-end">
        <button onClick={()=>setIsLogOut(!isLogOut)}  className="w-[90px] mt-12 bg-red-300">LogOut</button>
      </div>
    </>
  )
}


export default Dashboard
