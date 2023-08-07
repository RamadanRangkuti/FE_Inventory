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
    builder.addCase(addProductThunk.pending, (state)=>{
      return{
        ...state,
        list:{
          ...state.list,
          isLoading:true
        }
      }
    }),
    builder.addCase(addProductThunk.fulfilled, (state, action)=>{
      return{
        ...state,
        list:{
          ...state.list,
          isLoading:false,
          // data: [...state.list.data, action.payload],
          data: action.payload,
        }
      }
    }),
    builder.addCase(addProductThunk.rejected, (state, action)=>{
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
    //Update
    builder.addCase(updateProductThunk.pending, (state) => {
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
        },
      };
    });
    builder.addCase(updateProductThunk.fulfilled, (state, action) => {
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          data: action.payload,
        },
      };
    });
    builder.addCase(updateProductThunk.rejected, (state, action) => {
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: true,
          errorMessage: action.error.message,
        },
      };
    });
    //Delete
    builder.addCase(deleteProductThunk.rejected, (state, action)=>{
      return{
        ...state,
        list:{
          ...state.list,
          ...state.list,
          isLoading:false,
          data: action.payload,
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
  getDetailProductsThunk
}

//reducer import di konfigurasi store
export const productReducer = productSlice.reducer