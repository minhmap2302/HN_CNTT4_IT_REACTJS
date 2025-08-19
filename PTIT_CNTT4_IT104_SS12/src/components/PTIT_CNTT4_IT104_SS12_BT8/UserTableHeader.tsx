import React from "react";

export default function UserTableHeader() {
  return (
    <thead style={{ background: "rgb(248,249,250)" }}>
      <tr>
        <th>STT</th>
        <th>Họ và tên</th>
        <th>Ngày sinh</th>
        <th>Giới tính</th>
        <th>Địa chỉ</th>
        <th>Hành động</th>
      </tr>
    </thead>
  );
}
