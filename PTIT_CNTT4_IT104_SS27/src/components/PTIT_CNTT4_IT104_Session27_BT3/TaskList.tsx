import { Link } from "react-router-dom";

// import React from 'react'
export interface IDataTask {
  id: number;
  title: string;
  description: string;
}
export const tasks: IDataTask[] = [
  {
    id: 1,
    title: "Học React Router",
    description: "Làm quen với Dynamic Router và useNavigate",
  },
  {
    id: 2,
    title: "Ôn lại TailWind",
    description: "Thực hành tạo UI cơ bản",
  },
  {
    id: 3,
    title: "Hoàn thành bài tập về nhà",
    description: "Đẩy code lên Github và nộp link",
  },
];
export default function TaskList() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Danh sách công việc</h1>
      {tasks.map((e) => {
        return (
          <div
            key={e.id}
            style={{
              border: "2px solid black",
              borderRadius: "2px",
              margin: "2px",
              padding: "20px",
            }}
          >
            <h3>{e.title}</h3>
            <p>{e.description}</p>
            <Link to={`/task/${e.id}`}>Xem chi tiết</Link>
          </div>
        );
      })}
    </div>
  );
}
