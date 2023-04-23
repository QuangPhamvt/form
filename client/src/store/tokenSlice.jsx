import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  token: "",
}

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    updateToken: (state, action)=>{
      localStorage.setItem('token', action.payload)
      return { ...state, token: action.payload }
    }
  },
})

//export actions
export const { updateToken } = tokenSlice.actions


//export state 
export const tokenSelector = state => state.token


//export reducer
export default tokenSlice.reducer
