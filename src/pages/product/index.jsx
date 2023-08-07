import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {productAction} from "../../store/product/reducer"
const Product = () =>{
  const dispatch = useDispatch()
  const listProduct = useSelector((state)=> state.product.list) 
  console.log(listProduct)
  useEffect(()=>{
    dispatch(productAction.getListProductsThunk())
  },[])
  return (
    <>
    <div className="p-5">
      {
        listProduct.isLoading?(
          <div>Loading</div>
        ):listProduct.isError?(
          <div className="min-h-screen flex justify-center items-center"><span className="text-6xl text-[#f00] ">{listProduct.errorMessage}.!!!</span></div>
        ):(
          <div>{JSON.stringify(listProduct)}</div>
        )
      }
    </div>
    </>
  )
}

export default Product