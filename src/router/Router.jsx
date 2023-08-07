/* eslint-disable react/prop-types */
import {Switch, Route, Redirect} from "react-router-dom"
import Login from "../pages/login"
import DashboarAdmin from "../pages/dashboardAdmin"
import DashboardOperator from "../pages/dashboardOperator"
import Home from '../pages/home'
import User from '../pages/user'
import Product from '../pages/product'
import NotFound from '../pages/notFound'
import AddProduct from '../pages/addProduct'
import AddProducts from '../pages/addProducts'
import UpdateProduct from '../pages/updateProduct'
import { useSelector } from "react-redux"

const Router = () =>{
  return(
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>

      {/* AUTH */}
      <Route path="/login">
        <Login/>
      </Route>
      {/* Admin */}
      <PrivateRoute path="/admin">
        <DashboarAdmin/>
      </PrivateRoute>
      {/* Operator */}
      {/* <Route path="/operator">
        <DashboardOperator/>
      </Route> */}
      <PrivateRoute path="/operator">
        <DashboardOperator/>
      </PrivateRoute>
      <Route path="/user">
        <User/>
      </Route>
      <Route path="/product">
        <Product/>
      </Route>
      <Route path="/addProduct">
        <AddProduct/>
      </Route>
      <Route path="/addProducts">
        <AddProducts/>
      </Route>
      <Route path="/updateProduct/:id">
        <UpdateProduct/>
      </Route>
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
        <Redirect to={{pathname: "/login"}}/>
      )
    }}/>
  )
}

export default Router