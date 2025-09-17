
import { Button } from "antd";
import { useOutletContext } from "react-router-dom";
import type { todolist } from "../types/interface";
type context={
    handleDelete:(id:number)=>void,
    toggleTodo:(id:number,ispending:boolean)=>void,
    data:todolist[],
    isOpen:(id:number)=>void;
}
export default function Alltodolist() {
  const {handleDelete, toggleTodo , data,isOpen } = useOutletContext<context>();

  

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
