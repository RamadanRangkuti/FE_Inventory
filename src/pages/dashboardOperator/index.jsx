import { useState,useEffect,Fragment } from "react"
import SideBar from "../../components/molecules/sidebar"
import Header from "../../components/molecules/header"
import { Transition } from "@headlessui/react"
import Table from "../../components/molecules/table"
import {useDispatch, useSelector} from "react-redux"
import { productAction } from "../../store/product/reducer"
import { Link } from "react-router-dom"


export default function DashboardOperator(){
  const [showNav, setShowNav] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch()
  const listProduct = useSelector((state) => state.product.list.data.result)
  

  useEffect(()=>{
    dispatch(productAction.getListProductsThunk())
    .then(()=>{
      // Ketika data selesai diambil, set isLoading menjadi false
      setIsLoading(false)
    })
    .catch((error)=>{
      console.error("Error fetching products: ", error)
      setIsLoading(false)
    })
  },[])


  const handleResize=()=>{
    //640 default mobile tailwind css
    if(innerWidth <=640){
      setShowNav(false)
      setIsMobile(true)
    }else{
      setShowNav(true)
      setIsMobile(false)
    }
  }

  useEffect(()=>{
    // eslint-disable-next-line valid-typeof
    if(typeof window != undefined){
      addEventListener("resize", handleResize)
    }
    //console.log({"ini tipe data window " :typeof window})
    return()=>{
      removeEventListener("resize",handleResize)
    }
  },[])

  if (listProduct === undefined) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return(
    <>
    <Header showNav={showNav} setShowNav={setShowNav}/>
    <Transition 
    as={Fragment}
    show={showNav}
    enter="transform transition duration-[400ms]"
    enterFrom="-translate-x-full"
    enterTo="translate-x-0"
    leave="transform duration-[400ms] transition ease-in-out"
    leaveFrom="translate-x-0"
    leaveTo="-translate-x-full"
    >
      <SideBar showNav={showNav}/>
    </Transition>
    <main className={`pt-16 transition-all duration-[400ms] ${showNav && !isMobile? "pl-56":""}`}>
      <div className="p-4 md:px-16">
        <h1 className="mb-2 text-xl pb-5">Data Product :</h1>
        <Link to="/addProduct"><button className="bg-green-400 p-2 px-4 rounded-xl mb-2 pointer mr-2">New Product</button></Link>
        <Link to="/addProducts"><button className="bg-green-400 p-2 px-4 rounded-xl mb-2 pointer">Add Product use Redux</button></Link>
        <Table productList={listProduct}/>
      </div>
    </main>
    </>
  )
}


























// import Header from "../../components/molecules/header"
// import Table from "../../components/molecules/table"
// // import Sidebar from "../../components/molecules/sidebar"
// // import { useEffect } from "react"
// // import axios from "../../utils/axios"


// function DashboardOperator(){
//   return(
//     <>
//     {/* <Header/> */}
//     <div className="w-full">
//       <Header/>
//       <main className="min-h-screen">
//         {/* <Sidebar/> */}
//         <section className="w-full">
//           {/* MAIN CONTENT */}
//           <Table/>
//           {/* END MAIN CONTENT */}
//         </section>
//       </main>      
//     </div>
//     </>
//   )
// }

// export default DashboardOperator