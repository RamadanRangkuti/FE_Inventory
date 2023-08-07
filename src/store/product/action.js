import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

// const API_URL = 'http://localhost:5000/api/v1/products'
export const getListProductsThunk = createAsyncThunk("getListProducts/request", async(_, {getState})=>{
  // console.log(getState().auth.data.result.token)
  const token = getState().auth.data.result.token
  const response = await axios.get("http://localhost:5000/api/v1/products",{ headers:{
    token:token
  }}
  )
  return response.data
})

export const getDetailProductsThunk = createAsyncThunk("getDetailProducts/request", async(_, {getState})=>{
  // console.log(getState().auth.data.result.token)
  const token = getState().auth.data.result.token
  const response = await axios.get("http://localhost:5000/api/v1/products/31136719-03e2-415f-998d-9f68388f911d",{ headers:{
    token:token
  }}
  )
  return response.data
})

export const addProductThunk = createAsyncThunk("addProduct/request",async(productData, {getState})=>{
  const token = getState().auth.data.result.token
  const response = await axios.post("http://localhost:5000/api/v1/products", productData,{ headers:{
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
    const response = await axios.patch(`http://localhost:5000/api/v1/products/${id}`,productData,
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
    const response = await axios.delete(`http://localhost:5000/api/v1/products/${productId}`, {
      headers: {
        token: token,
      },
    });
    return response.data;
  }
);