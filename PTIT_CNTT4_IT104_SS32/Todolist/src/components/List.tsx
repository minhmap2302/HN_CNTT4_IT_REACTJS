import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Store/store";
import type { Todolist, TaskType } from "../types/type";
import { Checkbox, Tag } from "antd";
import Confirmdelete from "./ConFirmdelete";
import EditTaskModal from "./Updatetask";

export default function List() {
  const data = useSelector((e: RootState) => e.todolist);
  const dispatch = useDispatch();
  const levelColor: Record<TaskType, string> = {
    "Khẩn cấp": "red",
    "Quan trọng": "orange",
    "Bình thường": "blue",
    "Không quan trọng": "default",
  };

  return (
    <>
      {data.map((e: Todolist) => (
        <div
          key={e.id}
          className="flex items-center justify-between p-2 rounded mb-2 shadow-sm mt-4"
        >
          <div className="flex items-center gap-2">
            <Checkbox checked={e.checked} onClick={()=>dispatch({type:"TOGGLETASK",payload:{id:e.id}})}/>
            <span className={e.checked ? "line-through text-gray-400" : ""}>
              {e.name}
            </span>
            <Tag color={levelColor[e.status]}>{e.status}</Tag>
          </div>
          <div className="flex gap-2">
            <EditTaskModal id={e.id} name={e.name} lever={e.status}></EditTaskModal>
            <Confirmdelete iddele={e.id}></Confirmdelete>
          </div>
        </div>
      ))}
    </>
  );
}
