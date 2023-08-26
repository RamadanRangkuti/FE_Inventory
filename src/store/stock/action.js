import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getListStockThunk = createAsyncThunk("getListStock/request", async(_, {getState})=>{
  // console.log(getState().auth.data.result.token)
  const token = getState().auth.data.result.token
  const response = await axios.get(`${import.meta.env.VITE_API_STOCK}`,{ headers:{
    token:token
  }}
  )
  return response.data
})

export const stockInThunk = createAsyncThunk("stockIn/request", async(stockData, {getState})=>{
  // console.log(getState().auth.data.result.token)
  const token = getState().auth.data.result.token
  const response = await axios.post(`${import.meta.env.VITE_API_USER}/in`, stockData, { headers:{
    token:token
  }}
  )
  return response.data
})


export const stockEditThunk = createAsyncThunk("stockEdit/request", async(stockData, {getState})=>{
  // console.log(getState().auth.data.result.token)
  const token = getState().auth.data.result.token
  const response = await axios.post(`${import.meta.env.VITE_API_USER}/edit`, stockData, { headers:{
    token:token
  }}
  )
  return response.data
})

export const stockOutThunk = createAsyncThunk("stockOut/request", async(stockData, {getState})=>{
  // console.log(getState().auth.data.result.token)
  const token = getState().auth.data.result.token
  const response = await axios.post(`${import.meta.env.VITE_API_USER}/out`, stockData, { headers:{
    token:token
  }}
  )
  return response.data
})
