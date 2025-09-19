import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { Button } from "antd";


export default function Bai3() {
    const Couternumber=useSelector((state:RootState)=>state.bai3);
    const dispatch=useDispatch();
  return (
    <div>
        <div>{Couternumber}</div>
        <div>
            <Button type="primary" onClick={()=>dispatch({type:"incree"})}>+</Button>   
            <Button type="primary" onClick={()=>dispatch({type:"decree"})}>-</Button>
        </div>
    </div>
  )
}
