// import React from 'react'

import { Link, useParams } from "react-router-dom";
import { tasks } from "./TaskList";

export default function TaskDetail() {
  const idTask = useParams();
  const id = +idTask.id;

  const task = tasks.find((e) => e.id === +id);

  return (
    <div>
      <p>ID: {task?.id}</p>
      <p>Title: {task?.title}</p>
      <p>Description: {task?.description}</p>
      <Link to={"/"}>Quay lại</Link>
    </div>
  );
}
