import { Modal, Input, Radio, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import type { TaskType, Todolist } from "../types/type";

export default function AddTask() {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [level, setLevel] = useState<TaskType | "">("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!taskName || !level) {
      return;
    }
    const newTask: Todolist = {
      id: Math.floor(Math.random() * 1000),
      name: taskName,
      status: level as TaskType,
      checked: false,
    };
    dispatch({ type: "ADDTASK", payload: newTask });
    setTaskName("");
    setLevel("");
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Thêm công việc
      </Button>
      <Modal
        title="Thêm mới công việc"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <div style={{ marginBottom: 16 }}>
          <label>Tên công việc</label>
          <Input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Nhập tên công việc"
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label>Cấp độ</label>
          <Radio.Group
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            style={{ display: "flex", marginTop: 8 }}
          >
            <Radio value={"Khẩn cấp"}>Khẩn cấp</Radio>
            <Radio value={"Quan trọng"}>Quan trọng</Radio>
            <Radio value={"Bình thường"}>Bình thường</Radio>
            <Radio value={"Không quan trọng"}>Không quan trọng</Radio>
          </Radio.Group>
        </div>

        <Button type="primary" block onClick={handleAdd}>
          Thêm mới
        </Button>
      </Modal>
    </>
  );
}
