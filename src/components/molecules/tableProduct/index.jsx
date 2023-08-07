// import axios from "axios"
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
const TableProduct = ({productList}) =>{ 
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
                <td className="px-6 py-4 whitespace-nowrap"><Link to={`/updateProduct/${item.id_product}`} className="px-2 bg-sky-300 p-2 rounded-xl mx-2">Update</Link><button className="px-2 bg-rose-400 p-2 rounded-xl">Delete</button></td>
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


// import axios from "axios"
// import { useEffect, useState } from "react";
// const Table = () =>{
//   const [dataProduct, setDataProduct] = useState([])

//   useEffect(()=>{
//      const fetchData = async()=>{
//        try {
//          const response = await axios.get('http://localhost:5000/api/v1/products',{
//           headers:{
//             token:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9wQGdtYWlsLmNvbSIsInJvbGUiOiIxIiwiaWF0IjoxNjg5Nzk3OTYzLCJleHAiOjE2ODk4ODQzNjN9.dd8YCUYlmECRTBAfs0lYPpfFvQyws-GbYNYRHo7M-7U`
//           }
//          });
//          setDataProduct(response.data.result);
//        } catch (error) {
//          console.error(error)
//        }
//      }
//      fetchData()
//    },[])
 
//   return(
//     <>
//       <div className="overflow-x-auto">
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Name
//                   </th>
//                   <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Price
//                   </th>
//                   <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Description
//                   </th>
//                   <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Picture
//                   </th>
//                   <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Stock
//                   </th>
//                 </tr>
//            </thead>
//           <tbody className="divide-y divide-gray-200">
//             {dataProduct.map((item,i) => (
//               <tr key={i}>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.names}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <img src={`http://localhost:5000/uploads/images/${item.picture}`} alt={item.name} className="h-10 w-10" />
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.stock}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   )
// }

// export default Table


