import {useDispatch, useSelector} from "react-redux"
import { testReduxAction } from "../../store/testRedux/reducer"
const testRedux = () =>{
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const number = useSelector((state)=> state.testRedux.number)
  
  const handleAdd = (e) =>{
    e.preventDefault()
    dispatch(testReduxAction.add())
  }
  const handleSub = (e) =>{
    e.preventDefault()
    dispatch(testReduxAction.sub())
  }
  return(
    <>
    <h1>{number}</h1>
    <button className="m-1 p-3 rounded-lg border shadow" onClick={handleAdd}>+</button>
    <button className="m-1 p-3 rounded-lg border shadow" onClick={handleSub}>-</button>
    </>
  )
}

export default testRedux