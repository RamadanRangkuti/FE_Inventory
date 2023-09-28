import {authAction} from "../../../store/auth/reducer"
import { useSelector, useDispatch } from "react-redux"
import { forwardRef } from "react";
// import Logo from "../../../assets/image/ferox-transparent.png"
import { Link, useHistory } from "react-router-dom"
import { HomeIcon, CreditCardIcon, UserIcon,ArrowLeftIcon,FolderIcon } from "@heroicons/react/24/solid"
import PropTypes from "prop-types"

// eslint-disable-next-line no-unused-vars
const SideBar = forwardRef(({showNav}, ref) => {
  //Acces Role
  const userRole = useSelector((state) => state.auth.data.result.user.role)
  // const userName = useSelector((state) => state.auth.data.result.user.names)
  // console.log(userRole)
  const history= useHistory()
  const dispatch = useDispatch()
  const handleLogout = (e) =>{
    e.preventDefault();
    dispatch(authAction.logout())
    history.push("/")
  }
  return(
  <>
  <div ref={ref} className="fixed w-56 h-full bg-slate-100 shadow shadow-xl rounded">
    {/* <div className="flex justify-center mt-6 mb-14">
      <picture>
      </picture>
      <img className="w-32 h-auto" src={Logo} alt="#"/>
    </div> */}
    <div className="mt-4 mb-6 ml-11">
      <h1 className="text-gray-600 hover:bg-sky-100 hover:text-sky-400 font-serif text-3xl"><span className="text-sky-400 text-4xl">I</span>nventory</h1>
    </div>
    
    <div className="flex flex-col">
      <Link to="/home">
        <div className={`pl-6 py-3 pt-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transtion-colors text-gray-600 hover:bg-sky-100 hover:text-sky-400`}>
          <div className="mr-2">
            <HomeIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Dashboard</p>
          </div>
        </div>
      </Link>
      {
        userRole==0?(
          <Link to="/user">
          <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transtion-colors text-gray-600 hover:bg-sky-100 hover:text-sky-400`}>
          <div className="mr-2">
            <UserIcon className="h-5 w-5" />
          </div>
          <div>
            <p>User</p>
          </div>
        </div>
      </Link>
        ):null
      }
      {
        userRole==1?(
          <Link to="/product">
          <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transtion-colors text-gray-600 hover:bg-sky-100 hover:text-sky-400`}>
            <div className="mr-2">
              <FolderIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Product</p>
          </div>
          </div>
          </Link>
        ):null
      }
      {
        userRole==1?(
          <Link to="/stock">
          <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transtion-colors text-gray-600 hover:bg-sky-100 hover:text-sky-400`}>
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Stock</p>
          </div>
          </div>
          </Link>
        ):null
      }
      <button onClick={handleLogout}>
        <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transtion-colors text-gray-00 hover:bg-sky-100 hover:text-sky-400`}>
          <div className="mr-2">
            <ArrowLeftIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Log Out</p>
          </div>
        </div>
      </button>
    </div>
  </div>
  </>
  )
})

SideBar.propTypes = {
  showNav: PropTypes.bool
}
SideBar.displayName = 'SideBar'

export default SideBar