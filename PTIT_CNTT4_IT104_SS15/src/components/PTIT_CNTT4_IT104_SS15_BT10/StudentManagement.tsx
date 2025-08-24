import React, { useState, useEffect } from "react";

interface Student {
  id: string;
  name: string;
  dob: string;
  email: string;
  status: "Đang học" | "Bảo lưu" | "Đình chỉ";
}

const StudentManagement: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Student>({
    id: "",
    name: "",
    dob: "",
    email: "",
    status: "Đang học",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    const stored = localStorage.getItem("students");
    if (stored) setStudents(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const validate = (): boolean => {
    if (!formData.id.trim() || !formData.name.trim() || !formData.email.trim()) {
      alert("Mã SV, Tên SV và Email không được để trống!");
      return false;
    }
    if (
      students.some(
        (s) =>
          (s.id === formData.id || s.email === formData.email) &&
          s.id !== editingId
      )
    ) {
      alert("Mã SV hoặc Email đã tồn tại!");
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (!validate()) return;

    if (editingId) {
      setStudents(
        students.map((s) => (s.id === editingId ? { ...formData } : s))
      );
      setEditingId(null);
    } else {
      setStudents([...students, formData]);
    }

    setFormData({ id: "", name: "", dob: "", email: "", status: "Đang học" });
    setShowForm(false);
  };

  const handleEdit = (id: string) => {
    const st = students.find((s) => s.id === id);
    if (st) {
      setFormData(st);
      setEditingId(id);
      setShowForm(true);
    }
  };

  const handleDeleteRequest = (id: string) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    if (deleteId) {
      setStudents(students.filter((s) => s.id !== deleteId));
      setDeleteId(null);
      setShowDeleteModal(false);
    }
  };

  const totalPages = Math.ceil(students.length / pageSize);
  const dataPage = students.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div style={{ maxWidth: "900px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2>Quản lý sinh viên</h2>
      <button
        onClick={() => {
          setShowForm(true);
          setEditingId(null);
          setFormData({ id: "", name: "", dob: "", email: "", status: "Đang học" });
        }}
        style={{ marginBottom: "10px", padding: "6px 12px", background: "#1976d2", color: "#fff" }}
      >
        Thêm mới sinh viên
      </button>

      <table border={1} cellPadding={6} width="100%">
        <thead style={{ background: "#eee" }}>
          <tr>
            <th>Mã SV</th>
            <th>Tên SV</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {dataPage.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.dob}</td>
              <td>{s.email}</td>
              <td>{s.status}</td>
              <td>
                <button onClick={() => handleEdit(s.id)}>Sửa</button>{" "}
                <button
                  style={{ background: "red", color: "white" }}
                  onClick={() => handleDeleteRequest(s.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "10px" }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            style={{
              margin: "0 4px",
              background: num === page ? "#1976d2" : "#eee",
              color: num === page ? "#fff" : "#000",
              padding: "4px 8px",
            }}
          >
            {num}
          </button>
        ))}
      </div>

      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.3)",
            display: "flex", justifyContent: "center", alignItems: "center"
          }}
        >
          <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", width: "400px" }}>
            <h3>{editingId ? "Cập nhật sinh viên" : "Thêm mới sinh viên"}</h3>
            <input
              placeholder="Mã SV"
              value={formData.id}
              disabled={!!editingId}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
              style={{ display: "block", margin: "6px 0", width: "100%", padding: "6px" }}
            />
            <input
              placeholder="Tên SV"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ display: "block", margin: "6px 0", width: "100%", padding: "6px" }}
            />
            <input
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              style={{ display: "block", margin: "6px 0", width: "100%", padding: "6px" }}
            />
            <input
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ display: "block", margin: "6px 0", width: "100%", padding: "6px" }}
            />
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value as Student["status"] })
              }
              style={{ display: "block", margin: "6px 0", width: "100%", padding: "6px" }}
            >
              <option value="Đang học">Đang học</option>
              <option value="Bảo lưu">Bảo lưu</option>
              <option value="Đình chỉ">Đình chỉ</option>
            </select>
            <div style={{ marginTop: "10px", textAlign: "right" }}>
              <button onClick={() => setShowForm(false)} style={{ marginRight: "6px" }}>
                Hủy
              </button>
              <button onClick={handleSave} style={{ background: "#1976d2", color: "white" }}>
                {editingId ? "Cập nhật" : "Thêm mới"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex", justifyContent: "center", alignItems: "center"
          }}
        >
          <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", width: "300px" }}>
            <h3>Xác nhận</h3>
            <p>Bạn có chắc muốn xóa sinh viên này không?</p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button onClick={() => setShowDeleteModal(false)}>Hủy</button>
              <button
                onClick={handleDeleteConfirm}
                style={{ background: "red", color: "white" }}
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

export default StudentManagement;
