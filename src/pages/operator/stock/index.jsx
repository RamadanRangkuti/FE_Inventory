import { useState,useEffect,Fragment } from "react"
import SideBar from "../../../components/molecules/sidebar"
import Header from "../../../components/molecules/header"
import { Transition } from "@headlessui/react"
import TableStock from "../../../components/molecules/tableStock"
import {useDispatch, useSelector} from "react-redux"
import {getListStockThunk} from "../../../store/stock/action"
import { Link } from "react-router-dom"

export default function Stock(){
  const [showNav, setShowNav] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()
  const stockList = useSelector((state)=>state.stock.list.data.result)

  useEffect(()=>{
    dispatch(getListStockThunk())
    .then(()=>{
      setIsLoading(false)
    })
    .catch(()=>{
      setIsLoading(false)
    })
  },[])

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

  if (stockList === undefined) {
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
        <div className="flex justify-between mt-4">
          <h1 className="font-semibold text-2xl text-sky-500">Stock History: </h1>
          <div className="mb-4 mt-2">
            <Link to="/stockin" className="px-6 bg-sky-500 p-2 mr-4 text-white rounded-xl">Stock In</Link>
            <Link to="/stockedit" className="px-4 bg-amber-400 p-2 rounded-xl text-white">Stock Edit</Link>
            <Link to="/stockout" className="px-4 bg-rose-400 p-2 rounded-xl mx-4 text-white">Stock Out</Link>
          </div>
        </div>
        <TableStock stockList = {stockList}/>
      </div>
    </main>
    </>
  )
}