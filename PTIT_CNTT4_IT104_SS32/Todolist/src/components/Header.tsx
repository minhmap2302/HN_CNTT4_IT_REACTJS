import { Select } from "antd";
import AddTask from "./AddTask";
import type { TaskType } from "../types/type";
import { useDispatch } from "react-redux";


export default function Header() {
  const dispatch=useDispatch();
  const handleChange=(value:TaskType)=>{
      dispatch({type:"FILTERTASK",payload:{status:value}})
  }
  return (
    <div className="flex justify-end gap-3">
      <Select
        defaultValue="Khẩn cấp"
        style={{ width: 120 }}
          onChange={handleChange}
        options={[
          { value: "Khẩn cấp" as TaskType, label: "Khẩn cấp" },
          { value: "Quan trọng" as TaskType, label: "Quan trọng" },
          { value: "Bình thường" as TaskType, label: "Bình thường" },
          { value: "Không quan trọng" as TaskType, label: "Không quan trọng" },
        ]}
      />
      <AddTask></AddTask>
    </div>
  );
}
