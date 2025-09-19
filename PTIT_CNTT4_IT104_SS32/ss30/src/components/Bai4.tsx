
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { Button } from "antd";


export default function Bai4() {
    const numberrandom=useSelector((state:RootState)=>state.bai4);
    const dispatch=useDispatch();
  return (
    <div>
        <div>{JSON.stringify(numberrandom)}</div>
        <Button type="primary" onClick={()=>dispatch({type:"ADDNUMBER"})}>Random</Button>
    </div>
  )
}
