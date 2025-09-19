import { Modal, Input, Radio, Button } from "antd";
import { useState } from "react";
import type { TaskType } from "../types/type";
import { useDispatch } from "react-redux";
type prop={
  id:number,
  name:string,
  lever:string
}
export default function EditTaskModal({id,name,lever}:prop) {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState(name);
  const [level, setLevel] = useState<TaskType>(lever as TaskType);
 const dispatch = useDispatch();
  return (
    <>
      <Button type="default" onClick={() => setOpen(true)}>
        Sửa
      </Button>

      <Modal
        title="Sửa công việc"
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
            style={{ display: "flex", marginTop: 8, flexDirection: "column" }}
          >
            <Radio value="Khẩn cấp">Khẩn cấp</Radio>
            <Radio value="Quan trọng">Quan trọng</Radio>
            <Radio value="Bình thường">Bình thường</Radio>
            <Radio value="Không quan trọng">Không quan trọng</Radio>
          </Radio.Group>
        </div>

        <Button type="primary" block onClick={() => {setOpen(false);dispatch({type:"UPDATETASK",payload:{id:id,name:taskName,status:level}})}}>
          Lưu thay đổi
        </Button>
      </Modal>
    </>
  );
}
