
import type { RootState } from "../store/store"
import { useDispatch, useSelector } from "react-redux"


export default function Bai6() {
    const input=useSelector((state:RootState)=>state.bai6);
    const dispatch=useDispatch();
  return (
    <div style={{padding:"10px", border:"1px solid gray",borderRadius:"7px", width:300, color:input? "white":"black" ,backgroundColor:input?"black":"white"}}>
        <div><input type="checkbox" checked={input} onClick={()=>dispatch({type:"toogle"})}/>{input ? <span>toi</span>:<span>sang</span>}</div>
    </div>
  )
}
