import React from "react";
import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";

const users = [
  { id: 1, name: "Malcolm Lockyer", dob: "21/03/1961", gender: "Nam", address: "New york" },
  { id: 2, name: "Maria", dob: "11/02/1990", gender: "Nữ", address: "London" },
];

export default function UserTable() {
  return (
    <div style={{ margin: "20px", border: "1px solid #dee2e6", borderRadius: "8px", overflow: "hidden" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <UserTableHeader />
        <tbody>
          {users.map((user) => (
            <UserTableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
