import { Button, Card } from "antd";
import Header from "./Header";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Store/store";
import { useEffect, useState } from "react";

export default function Todolist() {
  const data=useSelector((e:RootState)=>e.todolist);
  const [lengthtrue,setlength]=useState<number>(0);
  useEffect(()=>{
    setlength(data.filter((e)=>e.checked==true).length);
  },[data]);
  const dispatch=useDispatch();
  return (
    <div className="mt-4">
      <Card
        title="Danh Sach Cong Viec"
        className="text-center shadow-lg"
      >
        <Header></Header>
        <List/>
        <footer className="flex justify-between items-center mt-4">
          <div>
            Số công việc hoàn thành:{lengthtrue}
          </div>
          <div className="flex gap-4">
            <Button type="primary" onClick={()=>dispatch({type:"TOGGLEALLTASK"})}>Hoàn Thành Tất Cả</Button>
            <Button danger onClick={()=>dispatch({type:"DELETEALL"})}>Xóa Tất Cả</Button>
          </div>
        </footer>
      </Card>
    </div>
  );
}
