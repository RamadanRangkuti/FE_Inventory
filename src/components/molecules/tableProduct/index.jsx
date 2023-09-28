// import { useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
// import { useDispatch } from "react-redux"
// import { deleteProductThunk } from "../../../store/product/action"
const TableProduct = ({productList, onDelete}) =>{ 
  // const dispatch = useDispatch();

  // const [productList, setProductList] = useState(initialProductList);
  const handleDelete = (productId) => {
    // console.log(productId)
    onDelete(productId)
    // const confirmed = window.confirm("Are you sure you want to delete this product?")
    // if (confirmed) {
    //   dispatch(deleteProductThunk(productId))
    //     .then(() => {
    //       setProductList(prevList => prevList.filter(item => item.id_product !== productId))
    //     })
    //     .catch((error) => {
    //       console.log("Delete product Error:", error)
    //     })
    // }
  }
  return(
    <>
      <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="text-center px-6 py-3 border-b border-gray-200 bg-sky-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="text-center px-6 py-3 border-b border-gray-200 bg-sky-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="text-center px-6 py-3 border-b border-gray-200 bg-sky-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="text-center px-6 py-3 border-b border-gray-200 bg-sky-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Picture
                  </th>
                  <th className="text-center px-6 py-3 border-b border-gray-200 bg-sky-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="text-center px-6 py-3 border-b border-gray-200 bg-sky-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
           </thead>
          <tbody className="divide-y divide-sky-200">
            {productList.map((item,i) => (
              <tr key={i}>
                <td className="text-center px-6 py-4 whitespace-nowrap">{item.names}</td>
                <td className="text-center px-6 py-4 whitespace-nowrap">{item.price}</td>
                <td className="text-center px-6 py-4 whitespace-nowrap">{item.description}</td>
                <td className="flex justify-center text-center px-6 py-4 whitespace-nowrap">
                  <img src={`${import.meta.env.VITE_API_URL}/uploads/images/${item.picture}`} alt={item.name} className="h-10 w-10 rounded-xl" />
                </td> 
                <td className="text-center px-6 py-4 whitespace-nowrap">{item.stock}</td>
                <td className="text-center px-6 py-4 whitespace-nowrap">
                  <div className="flex justify-center gap-x-2">
                    <Link to={`/updateProduct/${item.id_product}`} className="px-3 bg-sky-200 py-2 rounded-xl mx-2 shadow text-slate-600">Update</Link>
                    <button onClick={() => handleDelete(item.id_product )} className="px-3 bg-rose-300 py-2 rounded-xl shadow">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

//mendaftarkan props beserta tipe datanya
TableProduct.propTypes = {
  productList: PropTypes.array,
  onDelete:PropTypes.func
}

export default TableProduct