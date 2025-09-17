import { useState } from "react";

export type Students2 = {
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};
type prop={
    add:(newstudent:Students2)=>void
}
export default function AddStudentForm({add}:prop) {
  const [input, setInput] = useState<Students2>({
    student_name: "",
    email: "",
    address: "",
    phone: "",
    status: true,
    created_at: "",
  });
 
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "status") {
      setInput({ ...input, status: value === "true" });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    add(input);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Thêm Sinh Viên</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium">Tên sinh viên</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="Nhập tên sinh viên"
            name="student_name"
            value={input.student_name}
            onChange={change}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            placeholder="Nhập email"
            name="email"
            value={input.email}
            onChange={change}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Địa chỉ</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="Nhập địa chỉ"
            name="address"
            value={input.address}
            onChange={change}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Số điện thoại</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="Nhập số điện thoại"
            name="phone"
            value={input.phone}
            onChange={change}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Ngày thêm</label>
          <input
            type="date"
            className="w-full border rounded px-3 py-2"
            name="created_at"
            value={input.created_at}
            onChange={change}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Trạng thái</label>
          <select
            className="w-full border rounded px-3 py-2"
            name="status"
            value={String(input.status)}
            onChange={change}
          >
            <option value="true">Hoạt động</option>
            <option value="false">Không hoạt động</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Thêm sinh viên
        </button>
      </form>
    </div>
  );
}
