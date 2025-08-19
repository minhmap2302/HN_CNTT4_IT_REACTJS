import React, { useState } from "react";

type TodoFormProps = {
  onAdd: (task: string) => void;
};

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() === "") return;
    onAdd(task);
    setTask("");
  };

  return (
    <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSubmit}>
      <div className="form-outline flex-fill">
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label className="form-label">Thêm công việc</label>
      </div>
      <button type="submit" className="btn btn-info ms-2">
        Thêm
      </button>
    </form>
  );
}
