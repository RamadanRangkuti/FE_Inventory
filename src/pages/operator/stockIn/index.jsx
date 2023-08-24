import { useEffect, useState } from "react"
import {getListProductsThunk} from "../../../store/product/action"
import {stockInThunk} from "../../../store/stock/action"
import { useDispatch, useSelector } from "react-redux"
import { useHistory,Link } from "react-router-dom"
import {BiChevronDown} from "react-icons/bi"
import {AiOutlineSearch} from "react-icons/ai"
// import backgroundImage from "../../../assets/image/background.png"
const StockIn = () => {
  // const [countries, setCountreis] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const [selected, setSelected] = useState("")
  // const [selectedProductId, setSelectedProductId] = useState("");
  const [open, setOpen] = useState(false)
  const [stockData, setStockData] = useState({
    product_id:"",
    user_id: "",
    note: "",
    qty: "",
  })
  const history = useHistory()
  const dispatch = useDispatch()
  const user_id = useSelector((state)=>state.auth.data.result.user.id_user)
  const listProduct = useSelector((state)=>state.product.list.data.result)

  useEffect(()=>{
    dispatch(getListProductsThunk())
  },[])
  
  const handleInputChange = (e) => {
    setStockData({
      ...stockData,
      [e.target.name]: e.target.value,
      user_id:user_id
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      // Kirim data produk ke action addProductThunk
      await dispatch(stockInThunk(stockData));
      console.log(stockData)
      // Jika permintaan POST berhasil, lakukan redirect ke halaman lain
      console.log("Data Berhasil di post")
      history.push("/stock")
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  }
  
  return(
    <>
    <div className="">
      <form className="max-w-6xl mx-auto mt-2 p-4 bg-white shadow-md rounded-md">
          <div className="mb-4">
            <label htmlFor="qty" className="block text-gray-700 text-sm font-bold mb-2">
              Qty
            </label>
            <input
              type="number"
              id="qty"
              name="qty"
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="note" className="block text-gray-700 text-sm font-bold mb-2">
              Note
            </label>
            <textarea
              id="note"
              name="note"
              // onChange={e => setInputData({...inputData, description:e.target.value})}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-8 font-medium relative">
            <label htmlFor="product" className="block text-gray-700 text-sm font-bold mb-2">
                Select Product
            </label>
          <div className="relative">
            <div onClick={()=>setOpen(!open)} className={`bg-gray-200 w-full p-2 flex items-center justify-between rounded ${!selected && "text-gray-700"}`}>
              {selected ? (selected?.length > 30? selected?.substring(0,30) + '...' : selected):("Select Product")}
              <BiChevronDown size={20} className={`${open && 'rotate-180'}`}/>
            </div>
            <ul className={`bg-white mt-px overflow-y-auto absolute right-0 left-0 ${open ?'max-h-60': 'max-h-0'}`}>
              <div className=" flex items-center px-2 sticky top-0 bg-white">
                <AiOutlineSearch size={18} className="text-gray-700"/>
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e)=>setInputValue(e.target.value)} 
                  placeholder="Enter Product Name" 
                  className="placeholder:text-gray-700 p-2 outline-none"/>
              </div>
              {listProduct ? (
              listProduct.map((item, i) => (
                  <li key={i} className={`p-2 text-sm hover:bg-sky-600 hover:text-white 
                  ${item.names.toLowerCase() === selected?.toLowerCase() && 'bg-sky-600 text-white'}
                  ${item.names.toLowerCase().startsWith(inputValue)? "block": "hidden"}`} 
                  onClick={()=>{
                    if(item.names.toLowerCase() !== selected.toLowerCase()){
                      setSelected(item.names)
                      setStockData({...stockData, product_id:item.id_product})
                      setOpen(false)
                    }
                  }}>
                    {item.names}
                  </li>
                ))
              ) : (
                <li>Loading products...</li>
              )}
            </ul>
          </div>
          </div>
          <div className="mt-2">
            <Link to="/stock"><button className="mr-5 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-10  rounded-md focus:outline-none focus:ring focus:ring-yellow -200">Back</button></Link>
            <button onClick={handleSubmit} type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
              Stock In
            </button>
          </div>
      </form>
    </div>
    </>
  )
}

export default StockIn

