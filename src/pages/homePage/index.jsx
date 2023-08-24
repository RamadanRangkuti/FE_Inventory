import { useState,useEffect,Fragment } from "react"
import SideBar from "../../components/molecules/sidebar"
import Header from "../../components/molecules/header"
import { Transition } from "@headlessui/react"
import { StarIcon, ArrowRightIcon } from "@heroicons/react/24/solid"
// import ManSmile from "../../assets/image/man-smiling.jpg"
// import Table from "../../components/molecules/table"
// import {useDispatch, useSelector} from "react-redux"
// import { productAction } from "../../store/product/reducer"
// import { Link } from "react-router-dom"


export default function Home(){
  const [showNav, setShowNav] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

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
      <div className="p-6 mb-2">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <div className="flex justify-between items-center bg-sky-400 text-white p-5 rounded-xl mx-2">
        <div className="flex gap-x-2">
          <StarIcon className="w-5"/>
          <h1 className="text-xl font-semibold">Start this project on Github</h1>
        </div>
        <a href="https://github.com/RamadanRangkuti/FE_Inventory" target="_blank" rel="noopener noreferrer" className="text-white">
          <div className="flex gap-x-3 cursor-pointer">
            <h1 className="font-bold">View More</h1>
            <ArrowRightIcon className="w-5 mr-8"/>
          </div>
        </a>        
      </div>
    </main>
    </>
  )
}