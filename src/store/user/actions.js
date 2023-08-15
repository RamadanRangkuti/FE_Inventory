import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

// createAsyncThunk menerima 2 parameter 1.membuat prefix
// karna sudah ada package thunk/reduxthunk nanti dari redux otomatis membuat menjadi 3 bagian
// 1."getListUsers/pending", 2."getListUsers/fullfilled", 3."getListUsers/rejected"
//semua sudah otomatis dibuatkan kita hanya perlu membuat penamaan untuk prefixnya saja
//parameter ke 2 berupa fungsi dari axios

export const getListUsersThunk = createAsyncThunk("getListUsers/request", async (_,{getState}) =>{
  // console.log(getState().auth.data.result.token)
  const token = getState().auth.data.result.token
  const response = await axios.get("http://localhost:5000/api/v1/users",{ headers:{
      token:token
    }}
  )
  return response.data
})

export const getDetailUsersThunk = createAsyncThunk("getDetailUsers/request", async(id, {getState})=>{
  const token = getState().auth.data.result.token
  const response = await axios.get(`http://localhost:5000/api/v1/users/${id}`,{ headers:{
    token:token
  }}
  )
  return response.data
})

export const addUsersThunk = createAsyncThunk("addUsers/request",async(userData, {getState})=>{
  const token = getState().auth.data.result.token
  const response = await axios.post("http://localhost:5000/api/v1/users", userData,{ headers:{
    'Content-Type': 'multipart/form-data',
    token:token
  }}
  )
  return response.data
})

export const updateUsersThunk = createAsyncThunk("updateUsers/request",async ({id,userData}, { getState }) => {
    const token = getState().auth.data.result.token;
    const response = await axios.patch(`http://localhost:5000/api/v1/users/${id}`,userData,
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

export const deleteUsersThunk = createAsyncThunk("deleteUser/request", async (userId, { getState }) => {
    const token = getState().auth.data.result.token;
    const response = await axios.delete(`http://localhost:5000/api/v1/users/${userId}`, {
      headers: {
        token: token,
      },
    });
    return response.data;
  }
);