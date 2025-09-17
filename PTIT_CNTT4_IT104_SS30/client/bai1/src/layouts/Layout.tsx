import { Button, Card, Spin } from "antd";
import Header, { type todolists } from "../components/Header";
import { NavLink, Outlet } from "react-router-dom";
import type { todolist } from "../types/interface";
import { useEffect, useState } from "react";
import axios from "axios";
import Updatedata from "../components/Updatedata";

export default function Layouts() {
  const [data, setData] = useState<todolist[]>([]);
  const [loading, setLoading] = useState(false);
  const [isopenupdate, setIsopenupdate] = useState<boolean>(false);
  const [selecid, setSelectid] = useState<number | null>(null);
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/todolist/${id}`);
      fetchData();
    } catch (error) {
      console.log("Delete error:", error);
    }
  };
  const toggleTodo = async (id: number, ispending: boolean) => {
    try {
      await axios.patch(`http://localhost:3000/todolist/${id}`, {
        ispending: !ispending,
      });

      fetchData();
    } catch (error) {
      console.log("Update error:", error);
    }
  };
  const Submit = async (input: todolists) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/todolist", input);
      if (res.status === 201) {
        setData((prev) => [...prev, res.data]);
      } else {
        alert("Cập nhật thất bại");
      }
    } catch (error) {
      console.log(error, data);
    } finally {
      setLoading(false);
    }
  };
  const update = async (newname: string) => {
    try {
      setLoading(true);
      const res = await axios.patch(
        `http://localhost:3000/todolist/${selecid}`,
        { todo_name: newname }
      );
      if (res.status == 200) {
        fetchData();
        setIsopenupdate(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const isOpen = (id: number) => {
    setIsopenupdate(true);
    setSelectid(id);
  };
  const todolistname = data.find((e) => e.id == selecid)?.todo_name;
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/todolist");
      setData(res.data);
    } catch (error) {
      console.log("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const iscancel = () => {
    setSelectid(null);
    setIsopenupdate(false);
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Spin size="large" />
      </div>
    );
  }
  const deleteAll = async () => {
    try {
      const res=await axios.get("http://localhost:3000/todolist");
      const tododelete=res.data;
      await Promise.all(
        tododelete.map((e:todolist)=>axios.delete(`http://localhost:3000/todolist/${e.id}`))
      )
      setData([]);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteTrue = async () => {
    try {
      const res = await axios.get("http://localhost:3000/todolist");
      const todo=res.data;
      const tododelete=todo.filter((e:todolist)=>e.ispending==true);
      await Promise.all(
        tododelete.map((e:todolist)=>axios.delete(`http://localhost:3000/todolist/${e.id}`))
      )
       setData(todo.filter((e: todolist) => !e.ispending));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card
      title="Todo list"
      className="text-center w-[500px] shadow-lg items-center flex flex-col gap-[5px]"
    >
      {isopenupdate ? (
        <Updatedata
          iscancel={iscancel}
          name={todolistname}
          update={update}
        ></Updatedata>
      ) : (
        <></>
      )}
      <Header Submit={Submit} />
      <Card className="flex flex-row justify-center bg-white rounded-xl shadow ">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "blue",
                  padding: "10px 20px",
                  color: "#ffffff",
                  borderRadius: "10px",
                }
              : {}
          }
          className="mr-3 border-1 border-solid border-gray-100 p-[10px] w-[60px] rounded-lg"
        >
          Tất cả
        </NavLink>

        <NavLink
          to="complete"
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "blue",
                  padding: "10px 20px",
                  color: "#ffffff",
                  borderRadius: "10px",
                }
              : {}
          }
          className=" border-1 border-solid border-gray-100 p-[10px] w-[60px] rounded-lg"
        >
          Hoàn thành
        </NavLink>

        <NavLink
          to="completing"
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "blue",
                  padding: "10px 20px",
                  color: "#ffffff",
                  borderRadius: "10px",
                }
              : {}
          }
          className="ml-3 border-1 border-solid border-gray-100 p-[10px] w-[60px] rounded-lg"
        >
          Đang Hoàn Thành
        </NavLink>
      </Card>

      <Card>
        <Outlet
          context={{
            handleDelete: handleDelete,
            toggleTodo: toggleTodo,
            data: data,
            isOpen: isOpen,
            loading: loading,
          }}
        />
      </Card>
      <div className="flex gap-5 justify-center mt-3">
        <Button type="primary" onClick={deleteTrue}>Xoá công việc hoàn thành</Button>
        <Button type="primary" onClick={deleteAll}>Xoá tất cả công việc</Button>
      </div>
    </Card>
  );
}
