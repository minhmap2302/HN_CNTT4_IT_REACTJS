import { Button, Card } from "antd";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { toggle } from "../Redux/toggle";

export default function Bai3() {
    const data=useAppSelector((e)=>e.toggle);
    const dispatch=useAppDispatch()
  return (
    <Card style={{width:200 , backgroundColor:data.value? "black" :"white"}}>
        <Button danger onClick={()=>dispatch(toggle())}>{data.value? <span style={{color:"black"}}>dark</span>:<span style={{color:"black"}}>lingth</span>}</Button>
    </Card>
  )
}
