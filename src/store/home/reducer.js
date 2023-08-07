import { createSlice } from "@reduxjs/toolkit";

//state
const initialState = {
  text:"",
  number:0
}

//state,action, reducer
const homeSlice = createSlice ({
  name: "home",
  initialState,
  //ini bisa dilakukan karna syhncronus jika fetch dari api tidak bisa letak reducers disitu
  reducers:{
    add: (state)=>{
      return{
        ...state,
        number : state.number+1
      }
    },
    sub: (state)=>{
      return{
        ...state,
        number : state.number-1
      }
    }
  }
})

//action import di pages
export const homeAction = homeSlice.actions
//reducer import di konfigurasi store
export const homeReducer = homeSlice.reducer