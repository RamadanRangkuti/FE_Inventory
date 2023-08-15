
// // import { useDispatch } from "react-redux"
// // import {productAction} from "../../store/product/reducer"
// import axios from "axios"
// import { useHistory } from "react-router-dom"
// import { useState } from "react"
// const addProduct = ()=>{
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const history = useHistory()
//   const apiUrl = 'http://localhost:5000/api/v1/products'
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [inputData, setInputData] = useState({
//     names: "",
//     price: "",
//     description: "",
//     picture: null,
//     stock: "",
//   })

//   const config = {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputData({ ...inputData, [name]: value });
//   };
  
//   const handleFileChange = (e) => {
//     // setInputData({ ...inputData, picture: e.target.files[0] });
//     const file = e.target.files[0]
//     if (file) {
//       // Mendapatkan nama file dari objek File dan menyimpannya ke dalam inputData
//       setInputData({ ...inputData, picture: file })
//     }
//   }

//   const handleSubmit = (e) =>{
//     e.preventDefault()
//     console.log(inputData)

//     axios.post(apiUrl, inputData, config)
//     .then((res)=>{
//       console.log("Data berhasil dipost:", res.data);
//       alert("Data posted succesfuly",res)
//       history.push("/operator")
//     })
//     .catch((error)=>{
//       alert("gagal")
//       console.log("Gagal menambahkan produk:", error);
//       console.log(inputData)
//     })
//   }
//   return(
//     <>
//     {/* handlesubmit */}
//     <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-8 p-4 bg-white shadow-md rounded-md">
//     <div className="mb-4">
//       <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
//         Name:
//       </label>
//       <input
//         type="text"
//         id="names"
//         name="names"
//         value={inputData.names}
//         onChange={handleChange}
//         required
//         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//       />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
//           Price:
//         </label>
//         <input
//           type="number"
//           id="price"
//           name="price"
//           value={inputData.price}
//           onChange={handleChange}
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
//           Description:
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           value={inputData.description}
//           onChange={handleChange}
//           // onChange={e => setInputData({...inputData, description:e.target.value})}
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="picture" className="block text-gray-700 text-sm font-bold mb-2">
//           Picture:
//         </label>
//         <input
//           type="file"
//           id="picture"
//           name="picture"
//           // value={inputData.picture}
//           onChange={handleFileChange}
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">
//           Stock:
//         </label>
//         <input
//           type="number"
//           id="stock"
//           name="stock"
//           value={inputData.stock}
//           onChange={handleChange}
//           // onChange={e => setInputData({...inputData, stock:e.target.value})}
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//       >
//         Create Product
//       </button>
//     </form>
//     </>
//   )
// }

// export default addProduct