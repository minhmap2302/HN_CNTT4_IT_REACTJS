import React from 'react'

export default function UserInfo() {
  const user = {
    name:"Nguyen Van A",
    sex:"nam",
    date:"06/03/2024",
    email:"nva@gmail.com",
    address:"Thanh Xuan,Ha Noi"
  }
  return (
    <>
    <div>
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>
          Họ và tên: <strong>{user.name}</strong>
        </li>
        <li>
          Giới tính: <strong>{user.sex}</strong>
        </li>
        <li>
          Ngày sinh: <strong>{user.date}</strong>
        </li>
        <li>
          Email: <strong>{user.email}</strong>
        </li>
        <li>
          Địa chỉ: <strong>{user.address}</strong>
        </li>
      </ul>
    </div>
      </>
  )
}
