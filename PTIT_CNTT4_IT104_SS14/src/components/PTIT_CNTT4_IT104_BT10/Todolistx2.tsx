import React, { Component } from "react";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface State {
  tasks: Task[];
  newTask: string;
  editingTask: Task | null;
  showModal: boolean;
}

export default class Todolistx2 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
      newTask: "",
      editingTask: null,
      showModal: false,
    };
  }

  saveToLocalStorage(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  addTask = () => {
    const { newTask, tasks } = this.state;
    if (!newTask.trim()) {
      alert("Tên công việc không được để trống!");
      return;
    }
    const newTasks = [
      ...tasks,
      { id: Date.now(), name: newTask, completed: false },
    ];
    this.setState({ tasks: newTasks, newTask: "" });
    this.saveToLocalStorage(newTasks);
  };

  toggleComplete = (id: number) => {
    const newTasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.setState({ tasks: newTasks });
    this.saveToLocalStorage(newTasks);
  };

  deleteTask = (id: number) => {
    if (!window.confirm("Bạn có chắc muốn xóa công việc này?")) return;
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTasks });
    this.saveToLocalStorage(newTasks);
  };

  editTask = (task: Task) => {
    this.setState({ editingTask: task, showModal: true });
  };

  updateTask = () => {
    const { editingTask, tasks } = this.state;
    if (!editingTask || !editingTask.name.trim()) {
      alert("Tên công việc không được để trống!");
      return;
    }
    const newTasks = tasks.map((task) =>
      task.id === editingTask.id ? editingTask : task
    );
    this.setState({ tasks: newTasks, showModal: false, editingTask: null });
    this.saveToLocalStorage(newTasks);
  };

  render() {
    const { tasks, newTask, editingTask, showModal } = this.state;
    const allDone = tasks.length > 0 && tasks.every((t) => t.completed);

    return (
      <div className="p-4">
        <h2>Danh sách công việc</h2>
        <input
          value={newTask}
          onChange={(e) => this.setState({ newTask: e.target.value })}
          placeholder="Nhập công việc..."
        />
        <button onClick={this.addTask}>Thêm</button>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => this.toggleComplete(task.id)}
              />
              <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.name}
              </span>
              <button onClick={() => this.editTask(task)}>✏</button>
              <button onClick={() => this.deleteTask(task.id)}>🗑</button>
            </li>
          ))}
        </ul>

        {allDone && <p style={{ color: "green" }}>Hoàn thành công việc 🎉</p>}
        {showModal && editingTask && (
          <div className="modal">
            <h3>Cập nhật công việc</h3>
            <input
              value={editingTask.name}
              onChange={(e) =>
                this.setState({
                  editingTask: { ...editingTask, name: e.target.value },
                })
              }
            />
            <button onClick={this.updateTask}>Lưu</button>
            <button onClick={() => this.setState({ showModal: false })}>Hủy</button>
          </div>
        )}
      </div>
    );
  }
}
