import React, { Component } from "react";

type Todo = {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: string;
};

type StateType = {
  todos: Todo[];
};

export default class Todolist extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          name: "Thiết kế giao diện Header",
          assign: "Nguyễn Văn A",
          status: false,
          created_at: this.formatDate(new Date()),
        },
        {
          id: 2,
          name: "Thiết kế giao diện Footer",
          assign: "Nguyễn Văn B",
          status: true,
          created_at: this.formatDate(new Date()),
        },
      ],
    };
  }

  formatDate(date: Date) {
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear();
    const h = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");
    const s = date.getSeconds().toString().padStart(2, "0");
    return `${d}/${m}/${y} ${h}:${min}:${s}`;
  }

  toggleStatus = (id: number) => {
    this.setState({
      todos: this.state.todos.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      ),
    });
  };

  render() {
    return (
      <div>
        <h1>Danh sách công việc</h1>
        <table border={1} cellPadding={10} style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên công việc</th>
              <th>Người thực hiện</th>
              <th>Trạng thái</th>
              <th>Thời gian tạo</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.assign}</td>
                <td style={{ color: item.status ? "green" : "red" }}>
                  {item.status ? "Hoàn thành" : "Chưa hoàn thành"}
                </td>
                <td>{item.created_at}</td>
                <td>
                  <button onClick={() => this.toggleStatus(item.id)}>Sửa</button>{" "}
                  <button>Xoá</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
