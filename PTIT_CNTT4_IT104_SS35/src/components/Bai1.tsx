
import { Button, Card } from "antd";
import { useAppDispatch, useAppSelector } from "../hooks/hook"
import { decrement, increment, reset } from "../Redux/couter";

export default function Bai1() {
    const data=useAppSelector((state)=>state.couter.value);
    const dispatch=useAppDispatch();
  return (
    <div>
        <Card style={{width:260}}>Couter:{data}</Card>
        <div>
            <Button onClick={()=>dispatch(increment())}>increment</Button> <Button onClick={()=>dispatch(decrement())}>decrement</Button> <Button onClick={()=>dispatch(reset())}>reset</Button>
        </div>
    </div>
  )
}
