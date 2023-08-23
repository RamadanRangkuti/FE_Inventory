import axios from "axios"
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
  data: null,
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
}


//action
export const loginThunk = createAsyncThunk("login/request", async ({email,password}) =>{
  const response = await axios.post(
    "http://localhost:5000/api/v1/auth/login",{
      email,
      password,
    }
  )
  return response.data
})


//reducer
const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    logout:(state)=>{
      return{
        ...state,
        data:null,
        isAuthenticated:false
      }
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(loginThunk.pending, (state)=>{
      return{
        ...state,
          isLoading:true
      }
    }),
    builder.addCase(loginThunk.fulfilled, (state, action)=>{
      return{
        ...state,
        isLoading:false,
        data: action.payload,
        isAuthenticated:true
      }
    }),
    builder.addCase(loginThunk.rejected, (state, action)=>{
      return{
        ...state,
        isLoading:false,
        isError: true,
        errorMessage: action.error.message,
      }
    })  
  }
})

export const authAction = {
  ...authSlice.actions,
  loginThunk,
}
//reducer import di konfigurasi store
export const authReducer = authSlice.reducer
