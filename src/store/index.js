//tempat letak reducer dan konfigurasi storenya
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  PERSIST,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PURGE
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { homeReducer } from "./home/reducer";
import {userReducer} from "./user/reducer"
import { authReducer } from "./auth/reducer";
import { productReducer } from "./product/reducer";
//menggabungkan state,action, reducer
//ini reducer
const reducers = combineReducers({
  home: homeReducer,
  user: userReducer,
  auth: authReducer,
  product: productReducer,
})
//persist config
const persistConfig = {
  //key local storage
  key:"data",
  storage,
  blacklist:["user","product"] //reducers yang tidak mau di masukkan ke persist
}

//persist reducer
const persistedReducer = persistReducer(persistConfig, reducers)

//tes awal tanpa api
// export const store = configureStore({
//   reducer:reducers,
//   middleware:(defaultMiddleware)=>{
//     return defaultMiddleware({
//       thunk:false
//     })
//   }
// })

// sebelum menggunakan redux persist kita ambil langsung reducernya
// jika sudah menggunakan redux persist kita ambil dari persist
// export const store = configureStore({
//   reducer: reducers,
//   middleware:(defaultMiddleware)=>{
//     return defaultMiddleware({
//       thunk:true
//     })
//   }
// })

//data tidak lagi langsung dari reducer melainkan dari persist
//data akan disimpan dulu di local storage kemudian baru disimpan di store
//store menunggu data disimpan di local storage terlebih dahulu
//data tidak langsung dari reducers disimpan ke dalam store melainkan melalui reduxpersist dahulu
export const store = configureStore({
  reducer: persistedReducer,
  middleware:(defaultMiddleware)=>{
    return defaultMiddleware({
      serializableCheck:{
        ignoreActions:[PERSIST,FLUSH,REHYDRATE,PAUSE,REGISTER,PURGE]
      },
      thunk:true
    })
  }
})

//persist pada store agar store disimpan di localstorage
export const persistedStore = persistStore(store)

