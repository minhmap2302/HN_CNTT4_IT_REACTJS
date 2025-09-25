import { Card, Input, Select, Button, Space } from "antd";
import { useEffect, useState } from "react";
import type { todo } from "../types/interface";
import { useAppDispatch } from "../Redux/stores";
import { ADDTASK } from "../Api/task.api";

type prop = {
  edit: todo | null; 
  onUpdate: (task: todo) => void;
};

export default function Header({ edit, onUpdate }: prop) {
  const [input, setInput] = useState<todo>({
    id: Math.ceil(Math.random() * 10000),
    taskName: "",
    completed: false,
    priority: "HIGH",
  });

  useEffect(() => {
    if (edit) {
      setInput(edit);
    }
  }, [edit]);

  const dispatch = useAppDispatch();

  const handleChangeinput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, taskName: e.target.value });
  };

  const handleSelect = (value: string) => {
    setInput({ ...input, priority: value });
  };

  const submit = () => {
    if (!input.taskName.trim()) return;
    if (edit?.taskName!=="") {
      onUpdate(input);
    } else {
      dispatch(ADDTASK(input));
      setInput({
        id: Math.ceil(Math.random() * 10000),
        taskName: "",
        completed: false,
        priority: "HIGH",
      });
    }
  };

  return (
    <Card className="shadow-lg">
      <Space>
        <Input
          placeholder="Công việc mới"
          className="shadow-lg"
          value={input.taskName}
          onChange={handleChangeinput}
        />
        <Select
          value={input.priority}
          style={{ width: 120 }}
          options={[
            { value: "HIGH", label: "HIGH" },
            { value: "MEDIUM", label: "MEDIUM" },
            { value: "LOW", label: "LOW" },
          ]}
          onChange={handleSelect}
        />
        <Button type="primary" onClick={submit}>
          {edit?.taskName ? "SỬA" : "THÊM"}
        </Button>
      </Space>
    </Card>
  );
}
