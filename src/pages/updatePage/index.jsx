// import { useParams } from "react-router-dom";
// import UpdateProduct from "../updateProduct/index"
// import axios from "axios";
// import { useState, useEffect } from "react";

// const UpdatePage = () => {
//   const { id } = useParams();
//   const [productData, setProductData] = useState({})
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     // Fetch data for the product to be updated
//     axios.get(`http://localhost:5000/api/v1/products/${id}`)
//       .then((res) => {
//         setProductData(res.data)
//         setIsLoading(false)
//       })
//       .catch((error) => {
//         console.log("Error fetching product data:", error)
//         setIsLoading(false)
//       })
//   }, [id])

//   if (isLoading) {
//     return <div>Loading...</div>
//   }

//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-4">Update Product</h1>
//       <UpdateProduct initialData={productData} />
//     </>
//   )
// }

// export default UpdatePage

// import { useParams } from "react-router-dom";
// import UpdateProduct from "../updateProduct/index"
// import axios from "axios";
// import { useState, useEffect } from "react";

// const UpdatePage = () => {
//   const { id } = useParams();
//   const [productData, setProductData] = useState({})
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     // Fetch data for the product to be updated
//     axios.get(`http://localhost:5000/api/v1/products/${id}`)
//       .then((res) => {
//         setProductData(res.data)
//         setIsLoading(false)
//       })
//       .catch((error) => {
//         console.log("Error fetching product data:", error)
//         setIsLoading(false)
//       })
//   }, [id])

//   if (isLoading) {
//     return <div>Loading...</div>
//   }

//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-4">Update Product</h1>
//       <UpdateProduct initialData={productData} />
//     </>
//   )
// }

// export default UpdatePage