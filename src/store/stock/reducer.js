import { createSlice } from "@reduxjs/toolkit";
import { getListStockThunk } from "./action";
import { initialState } from "./initialState";

const stockSlice = createSlice ({
  name: "stock",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getListStockThunk.pending, (state)=>{
      return{
        ...state,
        list:{
          ...state.list,
          isLoading:true
        }
      }
    }),
    builder.addCase(getListStockThunk.fulfilled, (state, action)=>{
      return{
        ...state,
        list:{
          ...state.list,
          isLoading:false,
          data: action.payload
        }
      }
    }),
    builder.addCase(getListStockThunk.rejected, (state, action)=>{
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
export const stockAction = {
  ...stockSlice.actions,
  getListStockThunk,
}
//reducer import di konfigurasi store
export const stockReducer = stockSlice.reducer