import { Button, Card } from "antd";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { random } from "../Redux/Random";


export default function Bai2() {
    const data=useAppSelector((e)=>e.random.value);
    const dispatch=useAppDispatch();
  return (
    <>
    <Card style={{width:"20%"}}>
         {JSON.stringify(data)}
    </Card>
    <Button onClick={()=>dispatch(random(Math.ceil(Math.random()*100)))} danger>Random Number</Button>
    </>
  )
}
