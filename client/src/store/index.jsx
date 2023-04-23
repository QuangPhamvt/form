import {configureStore} from "@reduxjs/toolkit";
import tokenReducer from './tokenSlice.jsx'
import authReducer from './authSlice.jsx'




export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
  },
})



