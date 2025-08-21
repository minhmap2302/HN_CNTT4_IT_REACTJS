import React, { Component } from "react";

type State = {
  tasks: string[];
  newTask: string;
  error: string;
  showModal: boolean;
  taskToDelete: number | null;
};

export default class TodoApp extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
      newTask: "",
      error: "",
      showModal: false,
      taskToDelete: null,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTask: e.target.value });
  };

  handleAdd = () => {
    const { newTask, tasks } = this.state;
    if (!newTask.trim()) {
      this.setState({ error: "Tên công việc không được để trống!" });
      return;
    }

    const updatedTasks = [...tasks, newTask.trim()];
    this.setState({ tasks: updatedTasks, newTask: "", error: "" });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  confirmDelete = (index: number) => {
    this.setState({ showModal: true, taskToDelete: index });
  };

  handleDelete = () => {
    const { tasks, taskToDelete } = this.state;
    if (taskToDelete !== null) {
      const updatedTasks = tasks.filter((_, i) => i !== taskToDelete);
      this.setState({ tasks: updatedTasks, showModal: false, taskToDelete: null });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  handleCancel = () => {
    this.setState({ showModal: false, taskToDelete: null });
  };

  render() {
    const { tasks, newTask, error, showModal } = this.state;

    return (
      <div style={{ maxWidth: "400px", margin: "auto", marginTop: "30px" }}>
        <h3>Danh sách công việc</h3>
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={newTask}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAdd}>Thêm</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{task}</span>
              <button onClick={() => this.confirmDelete(index)}>🗑</button>
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
              background: "rgba(0,0,0,0.3)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
              <p>Bạn có chắc chắn muốn xóa công việc này?</p>
              <button onClick={this.handleDelete} style={{ marginRight: "10px" }}>
                Đồng ý
              </button>
              <button onClick={this.handleCancel}>Hủy</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
