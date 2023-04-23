import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  username: "",
}


const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    updateAuth: (state, action)=>{
      return {...state, username : action.payload}
    },
  },
})



//export actions
export const { updateAuth } = authSlice.actions

//export selector
export const authSelector = state => state.auth.username


//export reducer
export default authSlice.reducer


