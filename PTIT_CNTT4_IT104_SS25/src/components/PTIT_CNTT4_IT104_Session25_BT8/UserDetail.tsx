import { useParams } from "react-router-dom";
import { users } from "./ListUser";

export default function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user) return <p>Không tìm thấy người dùng</p>;

  return (
    <div>
      <h2>Chi tiết người dùng</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Họ tên:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Địa chỉ:</strong> {user.address}
      </p>
    </div>
  );
}
