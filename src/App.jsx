import { BrowserRouter } from 'react-router-dom'
import Routers from './router/Router'
import {PersistGate} from "redux-persist/es/integration/react"
import {Provider} from "react-redux"
import {store, persistedStore} from "./store"

function App() {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <BrowserRouter>
          <Routers/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App


// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import {PersistGate} from "redux-persist/es/integration/react"
// import {Provider} from "react-redux"
// import {store, persistedStore} from "./store"
// import Login from "./pages/login"
// import DashboarAdmin from "./pages/dashboardAdmin"
// import DashboardOperator from "./pages/dashboardOperator"
// import Home from './pages/home'
// import User from './pages/user'
// import NotFound from './pages/notFound'



// function App() {
//   return(
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistedStore}>
//         <BrowserRouter>
//           <Routes>
            // {/* AUTH */}
            // <Route path="/login" element={<Login/>}/>

            // {/* Admin */}
            // <Route path="/dashboardAdmin" element={<DashboarAdmin/>}/>

            // {/* Operator */}
            // <Route path="/dashboardOperator" element={<DashboardOperator/>}/>
            // <Route path="/home" element={<Home/>}/>
            // <Route path="/user" element={<User/>}/>

            // {/* Not Found */}
            // <Route path="/*" element={<NotFound/>}/>
//           </Routes>
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   )
// }

// export default App