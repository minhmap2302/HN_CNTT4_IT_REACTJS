import { Input, Select, Button, Card, Space } from "antd";
import type { student } from "../types/interface";
import { useState } from "react";


const { Option } = Select;

type Prop = {
  students: student[];
  search:(value:string)=>void
};

export default function Header({ students,search }: Prop) {
    const [input,setInput]=useState<string>("")
    const [inputselect,setInputse]=useState<string>("")
    const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
        search(e.target.value);
        setInput(e.target.value)
    }
    const changeSelect=(value:string)=>{
        search(value);
        setInputse(value);
    }
    const clear=()=>{
        search("");
        setInputse("");
        setInput('')
    }
  return (
    <div style={{ marginTop: 8, marginBottom: 8 }}>
      <Card>
        <Space size="middle">
          <Input placeholder="Tìm theo tên" allowClear style={{ width: 200 }} onChange={change} value={input}/>
          <Select value={inputselect} style={{ width: 120 }} onChange={changeSelect}>
            <Option value="">Tất cả</Option>
            {students.map((e) => (
              <Option value={e.grade} key={e.id}>
                {e.grade}
              </Option>
            ))}
          </Select>

          
          <Select defaultValue="az" style={{ width: 160 }} >
            <Option value="az">Name A → Z</Option>
            <Option value="za">Name Z → A</Option>
          </Select>

          <Button type="primary" onClick={clear}>CLEAR</Button>
        </Space>
      </Card>
    </div>
  );
}
