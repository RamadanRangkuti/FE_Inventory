import { useState,useEffect,Fragment } from "react"
import SideBar from "../../../components/molecules/sidebar"
import Header from "../../../components/molecules/header"
import { Transition } from "@headlessui/react"
import TableUser from "../../../components/molecules/TableUser"
import {useDispatch, useSelector} from "react-redux"
import { userAction } from "../../../store/user/reducer"
import { Link } from "react-router-dom"


export default function User(){
  const [showNav, setShowNav] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch()
  const listUser = useSelector((state) => state.user.list.data.result)
  console.log(listUser)

  useEffect(()=>{
    dispatch(userAction.getListUsersThunk())
    .then(()=>{
      // Ketika data selesai diambil, set isLoading menjadi false
      setIsLoading(false)
    })
    .catch((error)=>{
      console.error("Error fetching users: ", error)
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
      <div className="p-6 mt-px md:px-16">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl text-sky-500">Data User </h1>
          <Link to="/addUser"><button className="bg-sky-300 p-2 px-6 rounded-xl mb-4 mb-2 pointer md:mr-20">+ Add New User</button></Link>
        </div>
        <TableUser userList={listUser}/>
      </div>
    </main>
    </>
  )
}