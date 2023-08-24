import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { updateProductThunk, getDetailProductsThunk } from "../../../store/product/action"
import { useHistory,Link } from "react-router-dom"
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory()
    let {id} = useParams()
  // const { idProduct } = useParams();
  useEffect(()=>{
    dispatch(getDetailProductsThunk(id))
    .then((result)=>{
      console.log(result)
      console.log(result.payload.result.description)
      setProductData(
        {
        ...productData,
        names:result.payload.result.names,  
        price:result.payload.result.price,       
        description:result.payload.result.description,
        picture:result.payload.result.picture,
        stock:result.payload.result.stock,
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])


  const [productData, setProductData] = useState({
    names: "",
    price: "",
    description: "",
    picture: null,
    stock: "",
  })
  // console.log(id)


  
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
      await dispatch(updateProductThunk({id,productData}));
      // Jika permintaan POST berhasil, lakukan redirect ke halaman lain
      console.log("Data Berhasil di update")
      history.push("/product")
    } catch (error) {
      console.error("Error adding update:", error.message);
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto my-8 p-4 bg-white shadow-md rounded-md">
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
        Name:
      </label>
      <input
        type="text"
        id="names"
        name="names"
        value={productData.names}
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
          value={productData.price}
          onChange={handleInputChange}
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
          value={productData.description}
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
          // value={productData.picture}
          onChange={handleFileChange}
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
          value={productData.stock}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mt-2">
        <Link to="/product"><button className="mr-5 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-10  rounded-md focus:outline-none focus:ring focus:ring-yellow -200">Back</button></Link>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
          Update Product
        </button>
      </div>
    </form>
    </>
  );
};

export default UpdateProduct;