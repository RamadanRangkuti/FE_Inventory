/* eslint-disable react/prop-types */
import {Switch, Route, Redirect} from "react-router-dom"
import Login from "../pages/login"
import DashboarAdmin from "../pages/dashboardAdmin"
import DashboardOperator from "../pages/dashboardOperator"
import TestRedux from '../pages/testRedux'
import Home from '../pages/home'
import NotFound from '../pages/notFound'
import AddProducts from '../pages/addProducts'
import AddUser from '../pages/addUser'
import UpdateProduct from '../pages/updateProduct'
import UpdateUser from "../pages/updateUser"
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
      {/* Operator */}
      <PrivateRoute path="/product">
        <DashboardOperator/>
      </PrivateRoute>
      <Route path="/addProducts">
        <AddProducts/>
      </Route>
      <Route path="/addUser">
        <AddUser/>
      </Route>
      <Route path="/updateProduct/:id">
        <UpdateProduct/>
      </Route>
      <Route path="/updateUser/:id">
        <UpdateUser/>
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