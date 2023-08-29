import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const geFilterProductsThunk = createAsyncThunk("getFiltertProducts/request", async( filter, {getState})=>{
  // console.log(getState().auth.data.result.token)
  // console.log(`page : ${page}`)
  console.log(filter)
  const token = getState().auth.data.result.token
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/produts?search=${filter.search}&sortBy=asc&sortField=names&page=${filter.page}&limit=${filter.limit}`,{ headers:{
    token:token
  }}
  )
  return response.data
})

export const getListProductsThunk = createAsyncThunk("getListProducts/request", async( _, {getState})=>{
  // console.log(getState().auth.data.result.token)
  // console.log(`page : ${page}`)
  // console.log(filter)
  const token = getState().auth.data.result.token
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/products`,{ headers:{
    token:token
  }}
  )
  return response.data
})

export const getDetailProductsThunk = createAsyncThunk("getDetailProducts/request", async(id, {getState})=>{
  const token = getState().auth.data.result.token
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/${id}`,{ headers:{
    token:token
  }}
  )
  return response.data
})

export const addProductThunk = createAsyncThunk("addProduct/request",async(productData, {getState})=>{
  const token = getState().auth.data.result.token
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/products`, productData,{ headers:{
    'Content-Type': 'multipart/form-data',
    token:token
  }}
  )
  return response.data
})

export const updateProductThunk = createAsyncThunk("updateProduct/request",async ({id,productData}, { getState }) => {
    const token = getState().auth.data.result.token;
    // const productId = productData.id_product;
    // console.log(productData)
    const response = await axios.patch(`${import.meta.env.VITE_API_URL}/api/v1/${id}`,productData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: token,
        },
      }
    );
    return response.data;
  }
);

export const deleteProductThunk = createAsyncThunk("deleteProduct/request", async (productId, { getState }) => {
    const token = getState().auth.data.result.token;
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/${productId}`, {
      headers: {
        token: token,
      },
    });
    return response.data;
  }
);