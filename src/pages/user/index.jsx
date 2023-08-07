import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {userAction} from "../../store/user/reducer"
const User = () =>{
  const dispatch = useDispatch()
  const listUsers = useSelector((state)=> state.user.list) 
  useEffect(()=>{
    dispatch(userAction.getListUsersThunk())
  },[])
  return (
    <>
    <div className="p-5">
      {
        listUsers.isLoading?(
          <div>Loading</div>
        ):listUsers.isError?(
          <div className="min-h-screen flex justify-center items-center"><span className="text-6xl text-[#f00] ">{listUsers.errorMessage}.!!!</span></div>
        ):(
          <div>{JSON.stringify(listUsers)}</div>
        )
      }
    </div>
    </>
  )
}

export default User