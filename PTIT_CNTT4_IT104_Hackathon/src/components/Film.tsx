import EditFilm from "./EditFilm"
import DeleteFilm from "./DeleteFilm"
import { useState, useEffect } from 'react'

type Film = {
  name: string;
}

function Film(){
  const [name, setName] = useState<Film[]>([]);
  
  useEffect (() => {
    const cinema = localStorage.getItem("film");
    if (cinema) {
      setName(name,JSON<base>)
    }
  })

  
}


export default function Film() {
  return (
    <div>
      <h1>Quản Lý Phim Chiếu</h1>
      <p>Thêm, sửa và quản lý các bộ phim chuẩn bị được chiếu</p>
      <div>
        <h3>Tên Phim:</h3>
        <input type="text" placeholder="Nhập tên phim chuẩn bị chiếu.."/>
        <button>Thêm phim</button>
      </div>
      <div>
        <h2>Danh sách phim</h2>
        <p>0 phim</p>
      </div>
      <div>
        <h2>Chưa có phim nào</h2>
        <p>Hãy thêm phim dầu tiên để bắt đầu quản lý!</p>
      </div>
    </div>
  )
}
