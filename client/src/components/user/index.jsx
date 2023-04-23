import React from "react"
import Login from "./login.jsx"
import Register from "./register.jsx"

export default function User({isLogin}) {
  const isCheck = isLogin
  return(
    <>
      {isCheck ? <Login/> : <Register/>}
    </>
  )
}
