import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getListStockThunk = createAsyncThunk("getListStock/request", async(_, {getState})=>{
  // console.log(getState().auth.data.result.token)
  const token = getState().auth.data.result.token
  const response = await axios.get("http://localhost:5000/api/v1/stock",{ headers:{
    token:token
  }}
  )
  return response.data
})

export const stockInThunk = createAsyncThunk("stockIn/request", async(stockData, {getState})=>{
  // console.log(getState().auth.data.result.token)
  const token = getState().auth.data.result.token
  const response = await axios.post("http://localhost:5000/api/v1/stock/in", stockData, { headers:{
    token:token
  }}
  )
  return response.data
})


export const stockEditThunk = createAsyncThunk("stockEdit/request", async(stockData, {getState})=>{
  // console.log(getState().auth.data.result.token)
  const token = getState().auth.data.result.token
  const response = await axios.post("http://localhost:5000/api/v1/stock/edit", stockData, { headers:{
    token:token
  }}
  )
  return response.data
})

export const stockOutThunk = createAsyncThunk("stockOut/request", async(stockData, {getState})=>{
  // console.log(getState().auth.data.result.token)
  const token = getState().auth.data.result.token
  const response = await axios.post("http://localhost:5000/api/v1/stock/out", stockData, { headers:{
    token:token
  }}
  )
  return response.data
})
