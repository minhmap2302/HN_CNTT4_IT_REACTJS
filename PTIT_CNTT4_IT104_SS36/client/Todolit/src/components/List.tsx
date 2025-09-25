import { Button, Card, Space, Tag, Spin } from "antd";
import type { todo } from "../types/interface";
import { CloudUploadOutlined } from "@ant-design/icons";





type prop = {
  data: todo[];
  status: string;
  error: null | undefined | string;
  valueEdit:(task:todo)=>void
  toggle:(id:number)=>void
  handledele:(id:number)=>void
};

export default function List({ data, status, error,valueEdit,toggle,handledele }: prop) {
  if (status === "pending") {
    return (
      <div className="flex justify-center items-center p-4">
        <Spin/>
      </div>
    );
  }
  if (status === "failed") return <p>Lỗi: {error}</p>;
  if(data.length==0) return <Card>
    <CloudUploadOutlined />
  </Card>
  const priorityColors: Record<string, string> = {
    HIGH: "red",
    MEDIUM: "orange",
    LOW: "green",
  };
  const getvalueedit=(id:number)=>{
    const newtask=data.find(e=>e.id==id);
    if(!newtask) return
    valueEdit(newtask);
  }
  return (
    <div className="space-y-2">
      {data.map((e) => (
        <Card key={e.id}>
          <Space className="flex justify-between items-center w-full">
            <Space>
              <input type="checkbox" checked={e.completed} onClick={()=>toggle(e.id)}/>
              <div>{e.completed ? <s>{e.taskName}</s>:<span>{e.taskName}</span>}</div>
              {e.priority && (
                <Tag color={priorityColors[e.priority] || "default"}>
                  {e.priority}
                </Tag>
              )}
            </Space>
            <Space>
              <Button type="primary" onClick={()=>getvalueedit(e.id)}>EDIT</Button>
              <Button danger onClick={()=>handledele(e.id)}>DELETE</Button>
            </Space>
          </Space>
        </Card>
      ))}
    </div>
  );
}
