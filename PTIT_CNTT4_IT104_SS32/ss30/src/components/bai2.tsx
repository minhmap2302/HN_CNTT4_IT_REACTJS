import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { Person } from "../types/interface";
import { useEffect } from "react";

export default function Bai2() {
  const person = useSelector((state: RootState) => state.bai2);
  const dispatch = useDispatch();
  const newPerson: Person = {
    id: 1,
    name: "Nguyễn Văn A",
    gender: "Nam",
    date: "20/11/2023",
    address: "Thanh Xuân, Hà Nội",
  };
  useEffect(() => {
    dispatch({ type: "ADD", payload: newPerson });
  },[dispatch]);
  return <table border={1} cellPadding={6} style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {person.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.gender}</td>
            <td>{p.date}</td>
            <td>{p.address}</td>
            <td>
              <button>
                Xóa
              </button>
              <button
                
              >
                Sửa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>;
}
