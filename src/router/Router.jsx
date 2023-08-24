/* eslint-disable react/prop-types */
import {Switch, Route, Redirect} from "react-router-dom"
import Login from "../pages/login"
import User from "../pages/admin/user"
import Product from "../pages/operator/product"
import Home from '../pages/homePage'
import NotFound from '../pages/notFound'
import AddProduct from '../pages/operator/addProduct'
import AddUser from '../pages/admin/addUser'
import UpdateProduct from '../pages/operator/updateProduct'
import UpdateUser from "../pages/admin/updateUser"
import Stock from "../pages/operator/stock"
import StockIn from "../pages/operator/stockIn"
import StockOut from "../pages/operator/stockOut"
import StockEdit from "../pages/operator/stockEdit"
import { useSelector } from "react-redux"

const Router = () =>{
  return(
    <Switch>
      <PublicRoute exact path="/">
        <Login/>
      </PublicRoute>
      <PrivateRoute path="/home">
        <Home/>
      </PrivateRoute>
      {/* AUTH */}
      {/* Admin */}
      <PrivateRoute path="/user">
        <User/>
      </PrivateRoute>
      <PrivateRoute path="/addUser">
        <AddUser/>
      </PrivateRoute>
      <PrivateRoute path="/updateUser/:id">
        <UpdateUser/>
      </PrivateRoute>
      {/* end Admin */}
      {/* Operator */}
      <PrivateRoute path="/product">
        <Product/>
      </PrivateRoute>
      <Route path="/addproduct">
        <AddProduct/>
      </Route>
      <PrivateRoute path="/updateProduct/:id">
        <UpdateProduct/>
      </PrivateRoute>
      <PrivateRoute path="/stock">
        <Stock/>
      </PrivateRoute>
      <PrivateRoute path="/stockin">
        <StockIn/>
      </PrivateRoute>
      <PrivateRoute path="/stockout">
        <StockOut/>
      </PrivateRoute>
      <PrivateRoute path="/stockedit">
        <StockEdit/>
      </PrivateRoute>
      {/* end Operator */}
      <Route exact path="/*">
        <NotFound/>
      </Route>
    </Switch>
  )
}

const PrivateRoute = ({children, ...rest}) =>{
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
  return(
    <Route {...rest} render={()=>{
      return isAuthenticated?(
        children
      ):(
        <Redirect to={{pathname: "/"}}/>
      )
    }}/>
  )
}

const PublicRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  // const location = useLocation();

  if (isAuthenticated) {
    console.log("Tidak bisa akses karna sudah login")
    // console.log(location.pathname)
    return <Redirect to={"/home"} />
  }
  return <Route {...rest}>{children}</Route>
}

export default Router