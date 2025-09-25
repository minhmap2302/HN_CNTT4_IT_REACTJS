import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/hook";
import Filter from "./Filter";
import Header from "./Header";
import List from "./List";
import { useAppDispatch } from "../Redux/stores";
import { DELETETASK, getAllTask, UPDATETASK } from "../Api/task.api";
import { Card } from "antd";
import type { todo } from "../types/interface";

export default function Todolist() {
  const { data: tasks, status, error } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const [isrepair, setIsrepair] = useState<todo>({
    id: Math.ceil(Math.random() * 10000),
    taskName: "",
    completed: false,
    priority: "HIGH",
  });
  const repairs = (task: todo) => {
    setIsrepair(task);
  };
  const reset = () => {
    setIsrepair({
      id: Math.ceil(Math.random() * 10000),
      taskName: "",
      completed: false,
      priority: "HIGH",
    });
  };
  const [input,setInput]=useState<string>("");
  const Update = async (task: todo) => {
    await dispatch(UPDATETASK(task));
    await dispatch(getAllTask(""));
    reset();
  };
  const handledele=async(id:number)=>{
    await dispatch(DELETETASK(id));
    await dispatch(getAllTask(""));
  }
  const inputSearch=(value:string)=>{
    setInput(value);
  }
  useEffect(() => {
    dispatch(getAllTask(input));
  }, [dispatch,input]);
  const toggle=async(id:number)=>{
    const findtask=tasks.find(e=>e.id==id);
    if(!findtask) return
    const newtask={...findtask,completed:!findtask.completed}
    await dispatch(UPDATETASK(newtask));
    await dispatch(getAllTask(""));
  }
  return (
    <Card title="Task Manager" className="text-center w-215 shadow-lg">
      <Header edit={isrepair} onUpdate={Update} />
      <Filter valueinput={inputSearch}/>
      <List data={tasks} status={status} error={error} valueEdit={repairs} toggle={toggle} handledele={handledele}/>
    </Card>
  );
}
