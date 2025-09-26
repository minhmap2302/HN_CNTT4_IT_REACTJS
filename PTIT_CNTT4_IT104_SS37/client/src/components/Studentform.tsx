import { Card, } from "antd";
import ModalAdd from "./ModalAdd";
import Header from "./Header";
import Studentlist from "./Studentlist";
import { useAppDispatch, useAppSelector } from "../HOOKS/hook";
import { useEffect, useState,  } from "react";
import { addStudent, deleStudent, getStudentall, updateStudent } from "../API/student.api";
import type { student } from "../types/interface";

export default function Studentform() {
  const { data: student, error,status } = useAppSelector((e) => e.student);
  const dispatch = useAppDispatch();
  const [input,setInput]=useState<string>("")
  useEffect(() => {
    dispatch(getStudentall(input));
  }, [dispatch,input]);
  
  if (error) return <div>loi khong xac dinh</div>;
  const search=(value:string)=>{
    setInput(value);
  }
  const handleadd = async (value: student) => {
    await dispatch(addStudent(value));
    await dispatch(getStudentall(""));
  };
  const handledele = async (id:number) => {
    await dispatch(deleStudent(id));
    await dispatch(getStudentall(""));
  };
 const handleupdate=async(newStudent:student)=>{
       await dispatch(updateStudent(newStudent));
       await dispatch(getStudentall(""));
 }
  return (
    <Card className="w-[800px] shadow-xl">
      <div>
        <ModalAdd onadd={handleadd}></ModalAdd>
      </div>
      <Header students={student} search={search}></Header>
      <Studentlist students={student} handledele={handledele} handleupdate={handleupdate} status={status}></Studentlist>
    </Card>
  );
}
