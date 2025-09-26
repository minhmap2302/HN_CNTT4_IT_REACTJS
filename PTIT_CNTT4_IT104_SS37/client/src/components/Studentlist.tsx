import { Card, Spin } from "antd";

import ModalDele from "./ModalDele";
import ModalUpdate from "./ModalUpdate";
import type { student } from "../types/interface";

type Student = {
  id: number;
  name: string;
  age: number;
  grade: string;
};

type Props = {
  students: Student[];
  handledele:(id:number)=>void
  handleupdate:(newstudent:student)=>void
  status:string
};

export default function StudentList({ students,handledele,handleupdate,status}: Props) {
    if(status=="pending") return <Spin></Spin>
  return (
    <div className="space-y-3 grid grid-cols-2 gap-4 ">
      {students.map((e) => (
        <Card
          key={e.id}
          className="shadow-xl"
          bodyStyle={{ padding: "12px 16px" }}
          actions={[
            <ModalUpdate namestudent={e.name} id={e.id} grade={e.grade} age={e.age} handleupdate={handleupdate}/>,
            <ModalDele namestudent={e.name} id={e.id} handledele={handledele} />,
          ]}
        >
          <div className="font-medium text-gray-800">{e.name}</div>
          <div className="text-sm text-gray-500">Age: {e.age} • Grade: {e.grade}</div>
        </Card>
      ))}
    </div>
  );
}
