import { useState,useEffect,Fragment } from "react"
import SideBar from "../../../components/molecules/sidebar"
import Header from "../../../components/molecules/header"
import { Transition } from "@headlessui/react"
import TableProduct from "../../../components/molecules/tableProduct"
import {useDispatch, useSelector} from "react-redux"
import { productAction } from "../../../store/product/reducer"
import { Link } from "react-router-dom"


export default function Product(){
  const [showNav, setShowNav] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  // const [page, setPage] = useState(1)
  // const [keyword, setKeyword] = useState ('')
  const [filter, setFilter] = useState({
    search: "",
    page:1,
    limit:5
  })

  // console.log(keyword)
  const dispatch = useDispatch()
  const listProduct = useSelector((state) => state.product.list.data.result)
  // console.log(listProduct)
  
  
  useEffect(()=>{
    dispatch(productAction.geFilterProductsThunk(filter))
    .then(()=>{
      // Ketika data selesai diambil, set isLoading menjadi false
      setIsLoading(false)
    })
    .catch((error)=>{
      console.error("Error fetching products: ", error)
      setIsLoading(false)
    })
  },[filter.page,])

  const handleDeleteProduct = (productId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this product?")

    if(shouldDelete){
      dispatch(productAction.deleteProductThunk(productId))
      .then(()=>{
        // console.log('Deleting product with ID:', productId)
        dispatch(productAction.geFilterProductsThunk(filter));
      })
      .catch((err)=>{
        console.log(err)
      })
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

  const handleInputChange = (e) => {
    setFilter({...filter, search: e.target.value})
  }

  const handleSeacrh = () =>{
    dispatch(productAction.geFilterProductsThunk(filter))
    // console.log(`ini submit keyword ketika button seacrh di klik: ${filter}`)
  }
  
  const handlePageChange = (type) =>{
    if (type === "plus") {
      // Cek apakah masih ada data berikutnya
      if (listProduct.length === filter.limit) {
        setFilter({ ...filter, page: filter.page + 1 });
      }
    } else {
      if (filter.page <= 1) {
        setFilter({ ...filter, page: 1 });
      } else {
        setFilter({ ...filter, page: filter.page - 1 });
      }
    }
  }


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
        {/* <input type="text" placeholder="Seacrh Product" onChange={(e)=>setKeyword(e.target.value)} className="input input-bordered w-full max-w-xs block my-4" /> */}
        
        <Link to="/addproduct" className=""><button className="bg-green-400 p-2 px-4 rounded-xl mb-2 pointer">New Product</button></Link>
        <div className="flex mb-4">
          <input
          type="text"
          id="search"
          name="search"
          placeholder="Seacrh by name"
          onChange={handleInputChange}
          value={filter.search}
          required
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
      <button className="cursor-pointer px-3 py-2 bg-sky-200 mx-2 rounded-xl" onClick={handleSeacrh}>Search</button>
        </div>
        
        <TableProduct productList={listProduct} onDelete={handleDeleteProduct}/>
        <div className="flex justify-end mt-4 gap-4 cursor-pointer">
        <button className="px-8 py-2 font-bold bg-red-200 cursor-pointer" onClick={()=>handlePageChange("min")}>-</button>
        <button className="px-8 py-2 font-bold bg-sky-200 cursor-pointer" onClick={()=>handlePageChange("plus")}>+</button>
        </div>
      </div>
    </main>
    </>
  )
}