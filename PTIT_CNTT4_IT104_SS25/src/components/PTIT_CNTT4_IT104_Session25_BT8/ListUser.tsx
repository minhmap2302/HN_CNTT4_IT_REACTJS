import { Link } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "a@gmail.com",
    address: "Hà Nội",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "b@gmail.com",
    address: "TP. HCM",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "c@gmail.com",
    address: "Đà Nẵng",
  },
];

export default function ListUser() {
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ol
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-around",
        }}
      >
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              border: "2px solid black",
              listStyle: "none",
              padding: "30px",
            }}
          >
            <p>ID: {user.id}</p>
            <p>{user.name}</p> <p>Email: {user.email}</p>{" "}
            <p>Address: {user.address}</p>
            <Link to={`/user/${user.id}`}>
              <button>Xem chi tiết</button>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export { users };
