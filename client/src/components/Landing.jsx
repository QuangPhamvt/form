import { Navigate } from "react-router-dom"

const Landing = ()=>{
  const isToken = localStorage.getItem('token') ? true : false
  return(
    <>
      {isToken ? <Navigate to="/dashboard"/> : <Navigate to="/login"/>}
    </>
  )
}

export default Landing

