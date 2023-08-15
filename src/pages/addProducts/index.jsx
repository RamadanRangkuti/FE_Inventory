
import { useDispatch } from "react-redux"
import { addProductThunk } from "../../store/product/action"
// import axios from "axios"
import { useHistory } from "react-router-dom"
import { useState } from "react"
const addProducts = ()=>{
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [productData, setProductData] = useState({
    names: "",
    price: "",
    description: "",
    picture: null,
    stock: "",
  })


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory()
  
  const handleInputChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Mendapatkan nama file dari objek File dan menyimpannya ke dalam inputData
      setProductData({ ...productData, picture: file })
    }
  };

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      // Kirim data produk ke action addProductThunk
      await dispatch(addProductThunk(productData));

      // Jika permintaan POST berhasil, lakukan redirect ke halaman lain
      console.log("Data Berhasil di post")
      history.push("/product")
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  }
  return(
    <>
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-8 p-4 bg-white shadow-md rounded-md">
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
        Name:
      </label>
      <input
        type="text"
        id="names"
        name="names"
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          // onChange={e => setInputData({...inputData, description:e.target.value})}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="picture" className="block text-gray-700 text-sm font-bold mb-2">
          Picture:
        </label>
        <input
          type="file"
          id="picture"
          name="picture"
          onChange={handleFileChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">
          Stock:
        </label>
        <input
          type="number"
          id="stock"
          name="stock"
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      >
        Create Product
      </button>
    </form>
    </>
  )
}

export default addProducts