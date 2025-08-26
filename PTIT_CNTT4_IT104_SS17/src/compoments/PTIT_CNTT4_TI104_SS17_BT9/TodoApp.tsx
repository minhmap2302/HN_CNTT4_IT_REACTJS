import { useState, useEffect } from "react";

type Task = {
  id: number;
  name: string;
  completed: boolean;
};

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (input.trim() === "") {
      setError("Tên công việc không được để trống");
      return;
    }
    if (tasks.some((t) => t.name.toLowerCase() === input.trim().toLowerCase())) {
      setError("Tên công việc không được trùng");
      return;
    }
    const newTask: Task = {
      id: Date.now(),
      name: input.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
    setError("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const confirmDelete = (task: Task) => {
    setTaskToDelete(task);
  };

  const cancelDelete = () => {
    setTaskToDelete(null);
  };

  const deleteTask = () => {
    if (taskToDelete) {
      setTasks(tasks.filter((t) => t.id !== taskToDelete.id));
      setTaskToDelete(null);
    }
  };

  return (
    <div style={{ width: "400px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <h2>Danh sách công việc</h2>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập tên công việc"
          style={{ flex: 1, padding: "5px" }}
        />
        <button onClick={handleAdd} style={{ marginLeft: "5px" }}>
          Thêm
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />{" "}
              <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.name}
              </span>
            </label>
            <div>
              <button
                style={{ marginLeft: "5px", color: "red" }}
                onClick={() => confirmDelete(task)}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p>
        Công việc đã hoàn thành:{" "}
        {tasks.filter((t) => t.completed).length} / {tasks.length}
      </p>
      {taskToDelete && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ background: "#fff", padding: "20px", borderRadius: "5px" }}>
            <h3>Xác nhận</h3>
            <p>
              Bạn có chắc muốn xóa công việc:{" "}
              <b>{taskToDelete.name}</b> ?
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button onClick={cancelDelete} style={{ marginRight: "10px" }}>
                Hủy
              </button>
              <button onClick={deleteTask} style={{ background: "red", color: "white" }}>
                Đồng ý
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
