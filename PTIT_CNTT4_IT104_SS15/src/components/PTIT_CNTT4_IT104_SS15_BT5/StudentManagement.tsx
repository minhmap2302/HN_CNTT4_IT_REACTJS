import React, { Component } from "react";

type Student = {
  id: string;
  name: string;
  dob: string; // yyyy-mm-dd
  email: string;
  status: "active" | "inactive";
};

type State = {
  students: Student[];
  search: string;
  sortByAge: boolean;
};

class StudentManagement extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      students: [
        {
          id: "SV001",
          name: "Nguyễn Văn A",
          dob: "2023-12-21",
          email: "nva@gmail.com",
          status: "active",
        },
        {
          id: "SV002",
          name: "Nguyễn Thị B",
          dob: "2022-11-21",
          email: "ntb@gmail.com",
          status: "inactive",
        },
      ],
      search: "",
      sortByAge: false,
    };
  }

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
  };

  toggleSort = () => {
    this.setState((prev) => ({ sortByAge: !prev.sortByAge }));
  };

  render() {
    let filtered = this.state.students.filter(
      (s) =>
        s.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        s.email.toLowerCase().includes(this.state.search.toLowerCase())
    );

    if (this.state.sortByAge) {
      filtered = [...filtered].sort((a, b) => a.dob.localeCompare(b.dob));
    }

    return (
      <div style={{ margin: "20px" }}>
        <h2>Quản lý sinh viên</h2>

        <div style={{ marginBottom: "10px" }}>
          <button style={{ marginRight: "10px" }}>Thêm mới sinh viên</button>
          <button onClick={this.toggleSort}>
            {this.state.sortByAge ? "Bỏ sắp xếp" : "Sắp xếp theo tuổi"}
          </button>
          <input
            type="text"
            placeholder="Tìm kiếm theo tên hoặc email"
            value={this.state.search}
            onChange={this.handleSearch}
            style={{ marginLeft: "10px" }}
          />
        </div>

        <table border={1} cellPadding={5} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, index) => (
              <tr key={s.id}>
                <td>{index + 1}</td>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.dob}</td>
                <td>{s.email}</td>
                <td
                  style={{
                    color: s.status === "active" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {s.status === "active"
                    ? "Đang hoạt động"
                    : "Ngừng hoạt động"}
                </td>
                <td>
                  <button>Chi tiết</button>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentManagement;
