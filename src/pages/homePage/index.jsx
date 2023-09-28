import { useState,useEffect,Fragment } from "react"
import SideBar from "../../components/molecules/sidebar"
import Header from "../../components/molecules/header"
import { Transition } from "@headlessui/react"
import {FaRegCalendarMinus, FaEllipsisV } from "react-icons/fa"
import PieCharts from "../../components/molecules/PieChart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { StarIcon, ArrowRightIcon } from "@heroicons/react/24/solid"
// import BarChart from "../../components/molecules/BarChart"
// import ManSmile from "../../assets/image/man-smiling.jpg"
// import Table from "../../components/molecules/table"
// import {useDispatch, useSelector} from "react-redux"
// import { productAction } from "../../store/product/reducer"
// import { Link } from "react-router-dom"


export default function Home(){
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
      <div className="p-6 mb-px">
        <h1 className="text-2xl text-sky-400 font-semibold">Dashboard</h1>
      </div>
      {/* <div className="flex justify-between items-center bg-sky-400 text-white p-5 rounded-xl mx-2">
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
      </div> */}
      <div className="grid grid-cols-4 gap-[30px] mx-6 mt-[4px] pb-[15px]">
        <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">EARNING MONTHLY</h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">$40.000</h1>
          </div>
            <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">Profit</h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">$340.000</h1>
          </div>
            <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">Stock</h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">125.777</h1>
          </div>
            <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">Sell</h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">$13.340.000</h1>
          </div>
            <FaRegCalendarMinus fontSize={20} color="" />
        </div>
      </div>

      {/* Linechart */}
      <div className="flex mt-[22px] ml-6 gap-[30px]">
        <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#f8f9fc] flex items-center justify-between py-[5px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
            <h2>Earning Overview</h2>
            <FaEllipsisV color="gray" className="cursor-pointer"/>
          </div>
          <div>
          <LineChart
          width={820}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
          </div>
        </div>
        <div className="basis-[20%] mr-8 bg-sky-100 border shadow-md cursor-pointer rounded-[4px]">
          <div className=" flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2>Revenue Resources</h2>
            <FaEllipsisV color="gray" className="cursor-pointer"/>
          </div>
          <div className="px-[35px]">
            <PieCharts/>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}