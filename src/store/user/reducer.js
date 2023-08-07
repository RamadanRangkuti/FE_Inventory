import { createSlice } from "@reduxjs/toolkit";
import { getListUsersThunk } from "./actions";
import { initialState } from "./initialState";

const userSlice = createSlice ({
  name: "user",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getListUsersThunk.pending, (state)=>{
      return{
        ...state,
        list:{
          ...state.list,
          isLoading:true
        }
      }
    }),
    builder.addCase(getListUsersThunk.fulfilled, (state, action)=>{
      return{
        ...state,
        list:{
          ...state.list,
          isLoading:false,
          data: action.payload
        }
      }
    }),
    builder.addCase(getListUsersThunk.rejected, (state, action)=>{
      return{
        ...state,
        list:{
          ...state.list,
          isLoading:false,
          isError: true,
          errorMessage: action.error.message,
        }
      }
    })  
  }
})

//action import di pages
export const userAction = {
  ...userSlice.actions,
  getListUsersThunk,
}
//reducer import di konfigurasi store
export const userReducer = userSlice.reducer