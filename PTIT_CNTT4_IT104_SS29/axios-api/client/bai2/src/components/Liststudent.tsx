import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Students2 } from "./Createstudent";
import AddStudentForm from "./Createstudent";
import ConfirmModal from "./Modaldele";
export type Student = {
  id: number | null;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};
export default function Liststudent() {
  const [data, setData] = useState<Student[]>([]);
  const [isAdd, setIsadd] = useState<boolean>(false);
  const [isdele, setIsdele] = useState<boolean>(false);
  const [studentid,setStudentid]=useState<number|null>(null);
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/student`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  const addstudent = async (newstudent: Students2) => {
    try {
      const res = await axios.post("http://localhost:8080/student", newstudent);
      console.log(res.status);
      if (res.status === 201 || res.status === 200) {
        fetchData();
        setIsadd(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onClose=()=>{
    setIsdele(false);
  }
  const onConfirm=async()=>{
      try {
        const res=await axios.delete(`http://localhost:8080/student/${studentid}`);
        console.log(res.data);
        if(res.status==200){
            fetchData();
        }
        
      } catch (error) {
        console.log(error);
      }
  }
  const nameuser=data.find(e=>e.id==studentid);
  if(!nameuser) console.log(nameuser);
  return (
    <div className="p-6">
      <div className="flex flex-row justify-between items-center mb-3">
        <div>Quan ly sinh vien</div>
        <Button
          type="primary"
          onClick={() => {
            setIsadd(!isAdd);
          }}
        >
          them sinh vien
        </Button>
      </div>
      {isAdd ? <AddStudentForm add={addstudent}></AddStudentForm> : <></>}
      {isdele ? <ConfirmModal  onClose={onClose} onConfirm={onConfirm} nameuser={nameuser?.student_name}></ConfirmModal> : <></>}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Tên sinh viên</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Địa chỉ</th>
            <th className="border border-gray-300 px-4 py-2">SĐT</th>
            <th className="border border-gray-300 px-4 py-2">Ngày tạo</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((student) => (
              <tr key={student.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {student.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.student_name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.address}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(student.created_at).toLocaleDateString("vi-VN")}
                </td>
                <td>
                  <Button type="primary" className="mr-3">
                    sua
                  </Button>
                  <Button type="primary" onClick={()=>{setIsdele(true);setStudentid(student.id)}}>Xoa</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-4">
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
