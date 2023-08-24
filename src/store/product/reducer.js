import { createSlice } from "@reduxjs/toolkit"
import { getListProductsThunk,geFilterProductsThunk, addProductThunk,updateProductThunk, deleteProductThunk, getDetailProductsThunk} from "./action"
import { initialState } from "./initialState"

const productSlice = createSlice({
  name:"product",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getListProductsThunk.pending, (state)=>{
      return{
        ...state,
        list:{
          ...state.list,
          isLoading:true
        }
      }
    }),
    builder.addCase(getListProductsThunk.fulfilled, (state, action)=>{
      return{
        ...state,
        list:{
          ...state.list,
          isLoading:false,
          data: action.payload
        }
      }
    }),
    builder.addCase(getListProductsThunk.rejected, (state, action)=>{
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
    builder.addCase(geFilterProductsThunk.pending, (state)=>{
      return{
        ...state,
        list:{
          ...state.list,
          isLoading:true
        }
      }
    }),
    builder.addCase(geFilterProductsThunk.fulfilled, (state, action)=>{
      return{
        ...state,
        list:{
          ...state.list,
          isLoading:false,
          data: action.payload
        }
      }
    }),
    builder.addCase(geFilterProductsThunk.rejected, (state, action)=>{
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

//action import pages
export const productAction = {
  ...productSlice.actions,
  getListProductsThunk,
  addProductThunk,
  updateProductThunk,
  deleteProductThunk,
  getDetailProductsThunk,
  geFilterProductsThunk
}

//reducer import di konfigurasi store
export const productReducer = productSlice.reducer