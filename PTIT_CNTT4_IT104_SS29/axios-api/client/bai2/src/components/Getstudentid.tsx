 import { useEffect } from "react"

import axios from "axios";
export default function Getstudentid() {
    const fetchData=async()=>{
        try {
            const res=await axios.get(`http://localhost:8080/student/1`);
            console.log(res.data);
        } catch (error) {
            console.log(error);
            console.log("khong tim thay ban ghi");
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
  return (
    <div>
        
    </div>
  )
}
