import { useState } from "react"
import {useDispatch,useSelector} from "react-redux"
import {authAction} from "../../store/auth/reducer"
import { useHistory } from "react-router-dom"
import Background from "../../assets/image/background.png"
import { FiEyeOff } from "react-icons/fi"
import { FiEye } from "react-icons/fi"
import { FcGoogle } from "react-icons/fc"
// import axios from "../../utils/axios"


function Login(){
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory()
  //manggil action
  const dispatch = useDispatch()
  const[form, setForm] = useState({
    email:"",
    password:""
  })
  
   //REDUX 
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
   const userRole = useSelector((state) => state.auth.data?.result?.user.role)
  const submit = (e) =>{
    e.preventDefault()
    dispatch(authAction.loginThunk({email: form.email, password:form.password}))
    .unwrap()
    .then((response)=>{
      //direct berdasarkan role
      console.log({"ini response":response})
      console.log(isAuthenticated)
      console.log({"ini user role": userRole})
      
     if(isAuthenticated){
      if(userRole==0){
        history.push("/admin")
      }else if(userRole==1){
        history.push("/operator")
      }
     }
    }).catch((err)=>{
      console.log(err.message)
    })
  }

  return(
    <>
    <section className="bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="flex bg-slate-50 rounded-2xl shadow-lg max-w-6xl p-5">
        <div className="md:w-1/2 px-16">
          <h1 className="font-serif font-bold text-2xl sm:text-5xl text-black pt-8">Log<span className="text-sky-600">In</span></h1>
          <p className="font-serif text-sm sm:text-base text-slate-600"><span className="text-sky-600">Login</span> to acces the system.!!!</p>
          <form action="" className="flex flex-col gap-6">
              <input onChange={(e)=>{
                setForm({...form, email: e.target.value})
                }} 
                id="email" className="font-serif p-4 mt-6 sm:p-5 sm:mt-8 rounded-xl border text-xs sm:text-sm" type="email"
                name="email"
                placeholder="Enter Your Email"
              />
              <input onChange={(e)=>{
                setForm({...form, password: e.target.value})
                }}
                className="font-serif p-4 sm:p-5 rounded-xl border w-full text-xs sm:text-sm" type={showPassword?"text":"password"}
                name="password"
                placeholder="Enter Your Password"
              />
            <div onClick={()=>setShowPassword(!showPassword)} className="font-serif flex items-center gap-2 text-xs sm:text-sm mt-[-12px] px-2">{showPassword?<FiEye className="w-[15px] center cursor-pointer"/>:<FiEyeOff className="w-[15px] center cursor-pointer"/>}{showPassword? "Hide Password":"Show Password"}</div>
            <button onClick={submit} className="font-serif bg-sky-600 rounded-xl text-xs sm:text-sm text-white font-semibold py-4 hover:bg-sky-500">Login</button>
          </form>

          <div className="mt-10 flex items-center justify-center mt-4">
            <div className="border-t border-gray-400 flex-grow mr-2"></div>
            <span className="font-serif text-gray-500 text-sm">OR</span>
            <div className="border-t border-gray-400 flex-grow ml-2"></div>
          </div>
          
          <button className="font-serif flex justify-center items-center text-xs sm:text-sm bg-sky-100 text-slate-600 border py-4 w-full font-semibold rounded-xl mt-2 hover:bg-sky-200"> <FcGoogle className="w-[35px]"/>Login With Google</button>
        </div>

        <div className="md:flex hidden w-1/2">
          <img className="rounded-2xl bg-cover" src={Background} alt="Background" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Login