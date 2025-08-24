import React, { useState, useEffect } from "react";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);

  // Load từ localStorage
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  // Lưu vào localStorage khi tasks thay đổi
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddOrUpdate = () => {
    if (!taskName.trim()) {
      alert("Tên công việc không được để trống");
      return;
    }
    if (
      tasks.some(
        (t) => t.name.toLowerCase() === taskName.toLowerCase() && t.id !== editingId
      )
    ) {
      alert("Tên công việc đã tồn tại!");
      return;
    }

    if (editingId) {
      setTasks(tasks.map((t) => (t.id === editingId ? { ...t, name: taskName } : t)));
      setEditingId(null);
    } else {
      const newTask: Task = { id: Date.now(), name: taskName, completed: false };
      setTasks([...tasks, newTask]);
    }
    setTaskName("");
  };

  const handleEdit = (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      setTaskName(task.name);
      setEditingId(id);
    }
  };

  const handleDeleteConfirm = () => {
    if (taskToDelete !== null) {
      setTasks(tasks.filter((t) => t.id !== taskToDelete));
      setTaskToDelete(null);
      setShowModal(false);
    }
  };

  const handleToggleComplete = (id: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="todo-container" style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Danh sách công việc</h2>
      <div style={{ display: "flex", gap: "5px" }}>
        <input
          type="text"
          placeholder="Thêm công việc mới..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{ flex: 1 }}
        />
        <button onClick={handleAddOrUpdate}>
          {editingId ? "Cập nhật" : "Thêm"}
        </button>
      </div>

      <ul style={{ marginTop: "10px", listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span style={{ textDecoration: task.completed ? "line-through" : "none", flex: 1 }}>
              {task.name}
            </span>
            <button onClick={() => handleEdit(task.id)}>Sửa</button>
            <button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={() => {
                setShowModal(true);
                setTaskToDelete(task.id);
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>

      {showModal && (
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
          <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
            <h3>Xác nhận</h3>
            <p>Bạn có chắc chắn muốn xóa công việc này không?</p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button onClick={() => setShowModal(false)}>Hủy</button>
              <button
                style={{ backgroundColor: "red", color: "white" }}
                onClick={handleDeleteConfirm}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoApp;
