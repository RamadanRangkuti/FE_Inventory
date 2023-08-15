import { useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { deleteProductThunk } from "../../../store/product/action"
const TableProduct = ({productList: initialProductList }) =>{ 
  const dispatch = useDispatch();

  const [productList, setProductList] = useState(initialProductList);
  const handleDelete = (productId) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?")
    if (confirmed) {
      dispatch(deleteProductThunk(productId))
        .then(() => {
          setProductList(prevList => prevList.filter(item => item.id_product !== productId))
        })
        .catch((error) => {
          console.log("Delete product Error:", error)
        })
    }
  }
  return(
    <>
      <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Picture
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
           </thead>
          <tbody className="divide-y divide-gray-200">
            {productList.map((item,i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap">{item.names}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={`http://localhost:5000/uploads/images/${item.picture}`} alt={item.name} className="h-10 w-10 rounded-xl" />
                </td> 
                <td className="px-6 py-4 whitespace-nowrap">{item.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/updateProduct/${item.id_product}`} className="px-2 bg-sky-300 p-2 rounded-xl mx-2">Update</Link>
                <button onClick={() => handleDelete(item.id_product )} className="px-2 bg-rose-400 p-2 rounded-xl">Delete</button></td>
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
  productList: PropTypes.array
}

export default TableProduct