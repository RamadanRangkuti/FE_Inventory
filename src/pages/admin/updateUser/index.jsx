import { useDispatch } from "react-redux"
import { updateUsersThunk, getDetailUsersThunk } from "../../../store/user/actions"
import { useHistory } from "react-router-dom"
import { useEffect,useState } from "react"
import { useParams,Link } from "react-router-dom";

const UpdateUser = () =>{
  const dispatch = useDispatch()
  const history = useHistory()
  let {id} = useParams()

  useEffect(()=>{
    dispatch(getDetailUsersThunk(id))
    .then((result)=>{
      console.log(result)
      setUserData(
        {
        ...userData,
        fullname:result.payload.result.fullname,  
        email:result.payload.result.email,       
        password:"",
        picture:result.payload.result.picture,
        role:result.payload.result.role,
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
    picture: null,
    role: "",
  })
  console.log(id)
  
  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Mendapatkan nama file dari objek File dan menyimpannya ke dalam inputData
      setUserData({ ...userData, picture: file })
    }
  };

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      // Kirim data produk ke action addProductThunk
      await dispatch(updateUsersThunk({id,userData}));

      // Jika permintaan POST berhasil, lakukan redirect ke halaman lain
      console.log("Data Berhasil di post")
      history.push("/user")
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  }
  return(
    <>
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto my-8 p-4 bg-white shadow-md rounded-md">
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
        Fullname:
      </label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        value={userData.fullname}
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">
          Role
        </label>
        <input
          type="number"
          id="role"
          name="role"
          value={userData.role}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mt-2">
        <Link to="/user"><button className="mr-5 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-10  rounded-md focus:outline-none focus:ring focus:ring-yellow -200">Back</button></Link>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
          Update User
        </button>
      </div>
    </form>
    </>
  )
}

export default UpdateUser