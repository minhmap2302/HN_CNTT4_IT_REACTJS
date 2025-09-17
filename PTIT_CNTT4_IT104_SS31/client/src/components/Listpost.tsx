import { useEffect, useState } from "react";
import Header from "./Header";
import type { Article } from "../types/interface";
import axios from "axios";
import Modalwarn from "./Modalwarn";
import type { posts } from "./Modaladd";
import ModalRepair from "./ModalRepair";

export default function Listpost() {
  const [data, setData] = useState<Article[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selecsid, setSelectid] = useState<number | null>(null);
  const [inputfilter,setInputFilter]=useState<string>("all");
  const filterinput=(s:string)=>{
    setInputFilter(s);
  }

  
  const fecthdata = async () => {
  try {
    let url = `http://localhost:8080/subject?title_like=${search}`;
    if (inputfilter !== "all") {
      const statusValue = inputfilter === "true"; 
      url += `&status=${statusValue}`;
    }
    const res = await axios.get(url);
    setData(res.data);
  } catch (error) {
    console.log(error);
  }
};


  const valueinput = (e: string) => {
    setSearch(e);
  };

  useEffect(() => {
    fecthdata();
  }, [search,inputfilter]);

  const selectid = (id: number) => {
    setSelectid(id);
  };

  // Toggle 
  const togle = async () => {
    if (selecsid == null) return;
    const selected = data.find((item) => item.id === selecsid);
    if (!selected) return;

    try {
      const res = await axios.patch(
        `http://localhost:8080/subject/${selecsid}`,
        {
          status: !selected.status,
        }
      );
      setData((prev) =>
        prev.map((item) =>
          item.id === selecsid ? { ...item, status: res.data.status } : item
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Thêm 
  const addvalue = async (value: posts) => {
    try {
      const res = await axios.post("http://localhost:8080/subject", value);
      if (res.status == 201) {
        fecthdata();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Sửa
  const repairvalue = async (id: number, value: posts) => {
    try {
      const res = await axios.put(`http://localhost:8080/subject/${id}`, value);
      if (res.status == 200) {
        fecthdata();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Xóa
  const deletePost = async (id: number) => {
    try {
      const res = await axios.delete(`http://localhost:8080/subject/${id}`);
      if (res.status == 200) {
        fecthdata();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header changevalue={valueinput} add={addvalue} filterinput={filterinput}/>
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-md mt-3">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">STT</th>
            <th className="px-4 py-2 border">Tiêu đề</th>
            <th className="px-4 py-2 border">Hình ảnh</th>
            <th className="px-4 py-2 border">Ngày viết</th>
            <th className="px-4 py-2 border">Trạng thái</th>
            <th className="px-4 py-2 border">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id} className="hover:bg-gray-50 text-center">
              <td className="px-4 py-2 border">{e.id}</td>
              <td className="px-4 py-2 border">{e.title}</td>
              <td className="px-4 py-2 border">
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-16 h-16 object-cover rounded-md mx-auto"
                />
              </td>
              <td className="px-4 py-2 border">{e.date}</td>
              <td className="px-4 py-2 border">
                {e.status ? (
                  <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded">
                    Đã xuất bản
                  </span>
                ) : (
                  <span className="px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded">
                    Đã chặn
                  </span>
                )}
              </td>
              <td className="px-4 py-2 flex gap-2 justify-center items-center">
               
                <div onClick={() => selectid(e.id)}>
                  <Modalwarn togle={togle} lock={e.status} />
                </div>

               
                <ModalRepair id={e.id} data={data} repair={repairvalue} />

            
                <button
                  onClick={() => deletePost(e.id)}
                  className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
