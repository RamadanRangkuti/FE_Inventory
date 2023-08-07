import {useDispatch, useSelector} from "react-redux"
import { homeAction } from "../../store/home/reducer"
const Home = () =>{
  const dispatch = useDispatch()
  const number = useSelector((state)=> state.home.number)
  
  const handleAdd = (e) =>{
    e.preventDefault()
    dispatch(homeAction.add())
  }
  const handleSub = (e) =>{
    e.preventDefault()
    dispatch(homeAction.sub())
  }
  return(
    <>
    <h1>{number}</h1>
    <button className="m-1 p-3 rounded-lg border shadow" onClick={handleAdd}>+</button>
    <button className="m-1 p-3 rounded-lg border shadow" onClick={handleSub}>-</button>
    </>
  )
}

export default Home