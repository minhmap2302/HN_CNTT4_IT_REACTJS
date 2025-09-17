import { useEffect, useState } from "react";
import type { todolist } from "../types/interface";
import axios from "axios";
import { Button } from "antd";
import { useOutletContext } from "react-router-dom";
type context={
   handleDelete:(id:number)=>void,
    toggleTodo:(id:number,ispending:boolean)=>void,
    isOpen:(id:number)=>void;
    loading:boolean
}
export default function Completing() {
  const [data, setData] = useState<todolist[]>([]);
  const {handleDelete, toggleTodo, isOpen,loading}=useOutletContext<context>()
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/todolist?ispending=false"
      );
      setData(res.data);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [loading]);
  return (
    <div className="flex flex-col gap-2">
      {data.map((e) => (
        <div key={e.id} className="flex flex-row justify-between items-center">
          <div className="flex items-center justify-center gap-5">
            <input
              type="checkbox"
              checked={e.ispending}
              onChange={() => toggleTodo(e.id, e.ispending)}
            />
            {e.ispending ? <s>{e.todo_name}</s> : <span>{e.todo_name}</span>}
          </div>
          <div className="flex gap-2">
            <Button type="primary" onClick={()=>isOpen(e.id)}>sửa</Button>
            <Button danger onClick={() => handleDelete(e.id)}>
              xóa
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
