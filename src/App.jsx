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