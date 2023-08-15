import { createSlice } from "@reduxjs/toolkit"
import { getListProductsThunk, addProductThunk,updateProductThunk, deleteProductThunk, getDetailProductsThunk} from "./action"
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
    // builder.addCase(getDetailProductsThunk.pending, (state)=>{
    //   return{
    //     detail:{
    //       ...state.detail,
    //       isLoading:true
    //     }
    //   }
    // }),
    // builder.addCase(getDetailProductsThunk.fulfilled, (state, action)=>{
    //   return{
    //     detail:{
    //       ...state.detail,
    //       isLoading:false,
    //       data: action.payload
    //     }
    //   }
    // }),
    // builder.addCase(getDetailProductsThunk.rejected, (state, action)=>{
    //   return{
    //     detail:{
    //       ...state.detail,
    //       isLoading:false,
    //       isError: true,
    //       errorMessage: action.error.message,
    //     }
    //   }
    // })
  }
})

//action import pages
export const productAction = {
  ...productSlice.actions,
  getListProductsThunk,
  addProductThunk,
  updateProductThunk,
  deleteProductThunk,
  getDetailProductsThunk
}

//reducer import di konfigurasi store
export const productReducer = productSlice.reducer