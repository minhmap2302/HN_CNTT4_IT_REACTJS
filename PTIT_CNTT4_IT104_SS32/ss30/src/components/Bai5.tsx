import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { Button } from "antd";

export default function Bai5() {
    const Changeinput=useSelector((e:RootState)=>e.bai5);
    const dispatch=useDispatch();
  return (
    <div>
        <div>{Changeinput}</div>
        <Button type="primary" onClick={()=>dispatch({type:"Change"})}>Change</Button>
    </div>
  )
}
