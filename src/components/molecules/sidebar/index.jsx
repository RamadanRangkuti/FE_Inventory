import {authAction} from "../../../store/auth/reducer"
import { useSelector, useDispatch } from "react-redux"
import { forwardRef } from "react";
import Logo from "../../../assets/image/ferox-transparent.png"
import { Link, useHistory } from "react-router-dom"
import { HomeIcon, CreditCardIcon, UserIcon,ArrowLeftIcon } from "@heroicons/react/24/solid"
import PropTypes from "prop-types"

const SideBar = forwardRef(({showNav}, ref) => {
  //Acces Role
  const userRole = useSelector((state) => state.auth.data?.result?.user.role)
  console.log(userRole)

  
  //LogOut
  const history= useHistory()
  const dispatch = useDispatch()
  const handleLogout = (e) =>{
    e.preventDefault();
    dispatch(authAction.logout())
    history.push("/login")
  }
  return(
  <>
  <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
    {/* <div className="flex justify-center mt-6 mb-14">
      <picture>
      </picture>
      <img className="w-32 h-auto" src={Logo} alt="#"/>
    </div> */}

    <div className="flex flex-col">
      <Link to="#">
        <div className={`pl-6 py-3 pt-5 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transtion-colors text-gray-400 hover:bg-orange-100 hover:text-orange-500`}>
          <div className="mr-2">
            <HomeIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Home</p>
          </div>
        </div>
      </Link>
      {
        userRole==="0"?(
          <Link to="/admin">
          <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transtion-colors text-gray-400 hover:bg-orange-100 hover:text-orange-500`}>
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
      {/* <Link to="/admin">
        <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transtion-colors text-gray-400 hover:bg-orange-100 hover:text-orange-500`}>
          <div className="mr-2">
            <UserIcon className="h-5 w-5" />
          </div>
          <div>
            <p>User</p>
          </div>
        </div>
      </Link> */}
      <Link to="/operator">
        <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transtion-colors text-gray-400 hover:bg-orange-100 hover:text-orange-500`}>
          <div className="mr-2">
            <CreditCardIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Product</p>
          </div>
        </div>
      </Link>
      <button onClick={handleLogout}>
        <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transtion-colors text-gray-400 hover:bg-orange-100 hover:text-orange-500`}>
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
  showNav: PropTypes.boolean
}
SideBar.displayName = 'SideBar'

export default SideBar






























// import { useDispatch } from "react-redux"
// import { Link, useHistory } from "react-router-dom"
// import {authAction} from "../../../store/auth/reducer"
// // import Logo from "../../../assets/image/logo-apk.png"
// import Dashboard from "../../../assets/icon/home.svg"
// import User from "../../../assets/icon/user.svg"
// import Logout from "../../../assets/icon/logout.svg"
// import Stock from "../../../assets/icon/stock.svg"
// import Product from "../../../assets/icon/product.svg"
// import Close from "../../../assets/icon/close.svg"


// // eslint-disable-next-line react/prop-types
// const Sidebar = ({closeSidebar}) =>{
//   const history = useHistory()
//   const dispatch =  useDispatch()
//   const handleLogout=(e)=>{
//     e.preventDefault()
//     dispatch(
//       authAction.logout()
//       )
//       history.push("/login")
//   }
//   return(
//     <>
//     <div className="absolute left-0 top-0 h-full bg-sky-200 w-56 shadow">
//       <section className="flex flex-col">
//           <div className="flex p-2 justify-between">
//             <Link to="/" className="flex gap-x-2">
//               <img src={Dashboard} className="w-[20px]" alt="tes"/>
//               <span className="">Dashboard</span>
//             </Link>
//             <img src={Close} className="w-[20px]" alt="" onClick={closeSidebar}/>
//           </div>
//           <Link to="/user" className="flex gap-x-2 p-2">
//             <img src={User} className="w-[20px]" alt="tes"/>
//             <span className="">User</span>
//           </Link>
//           <Link to="/product" className="flex gap-x-2 p-2">
//             <img src={Product} className="w-[20px]" alt=""/>
//             <span className="">Product</span>
//           </Link>
//           <Link to="/stock" className="flex gap-x-2 p-2">
//             <img src={Stock} className="w-[20px]" alt=""/>
//             <span className="">Stock</span>
//           </Link>
//           <Link onClick={handleLogout} className="flex gap-x-2 p-2">
//             <img src={Logout} className="w-[20px]" alt=""/>
//             <span className="">Logout</span>
//           </Link>
//         </section>
//       </div>
//     </>
//   )
// }


// export default Sidebar