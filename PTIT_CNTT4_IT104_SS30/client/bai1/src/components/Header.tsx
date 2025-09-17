import { Button, Card, Input } from "antd";
import {  useState } from "react";


export type todolists={
    todo_name:string,
    ispending:boolean
}
type prop={
    Submit:(input:todolists)=>void
}
export default function Header({Submit}:prop) {
    const [input,setInput]=useState<todolists>({todo_name:"",ispending:false});
    const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput({...input,todo_name:e.target.value});
    }
    const submit=()=>{
        Submit(input);
        setInput({todo_name:"",ispending:false});
    }
  return (
    <Card className="shadow-lg">
         <img src="https://pic.20988.xyz/2024-05-24/1716515135-735353-gif-6.gif" alt=""/>
         <Input placeholder="Nhap ten cong viec" value={input.todo_name} onChange={change}/>
         <Button type="primary" className="w-2xs mt-3" onClick={submit}>Them cong viec</Button>
    </Card>
  )
}
