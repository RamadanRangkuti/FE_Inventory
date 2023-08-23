/* eslint-disable react/prop-types */
import {Switch, Route, Redirect} from "react-router-dom"
import Login from "../pages/login"
import DashboarAdmin from "../pages/admin/user"
import DashboardOperator from "../pages/operator/product"
import TestRedux from '../pages/testRedux'
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
      <Route path="/testRedux">
        <TestRedux/>  
      </Route>
      <Route exact path="/">
        <Login/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      {/* AUTH */}
      {/* Admin */}
      <PrivateRoute path="/user">
        <DashboarAdmin/>
      </PrivateRoute>
      <Route path="/addUser">
        <AddUser/>
      </Route>
      <Route path="/updateUser/:id">
        <UpdateUser/>
      </Route>
      {/* end Admin */}
      {/* Operator */}
      <PrivateRoute path="/product">
        <DashboardOperator/>
      </PrivateRoute>
      <Route path="/addproduct">
        <AddProduct/>
      </Route>
      <Route path="/updateProduct/:id">
        <UpdateProduct/>
      </Route>
      <Route path="/stock">
        <Stock/>
      </Route>
      <Route path="/stockin">
        <StockIn/>
      </Route>
      <Route path="/stockout">
        <StockOut/>
      </Route>
      <Route path="/stockedit">
        <StockEdit/>
      </Route>
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
        <Redirect to={{pathname: "/login"}}/>
      )
    }}/>
  )
}

export default Router