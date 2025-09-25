import { Card, Select, Input, Space } from "antd";
type prop={
    valueinput:(value:string)=>void
}
export default function Filter({valueinput}:prop) {
    const changle=(e:React.ChangeEvent<HTMLInputElement>)=>{
        valueinput(e.target.value)
    }
    const changeSelect=(value:string)=>{
        valueinput(value)
    }
  return (
    <Card className="shadow-sm rounded-xl">
      <Space>
        <div className="flex flex-col">
          <Select
            defaultValue="Tất cả"
            style={{ width: 150 }}
            options={[
              { value: "", label: "Tất cả" },
              { value: "true", label: "Hoàn thành" },
              { value: "false", label: "Chưa làm" },
            ]}
          onChange={changeSelect}/>
        </div>

        <div className="flex flex-col">
          <Select
            defaultValue="Tất cả"
            style={{ width: 150 }}
            options={[
              { value: "", label: "Tất cả" },
              { value: "HIGH", label: "HIGH" },
              { value: "MEDIUM", label: "MEDIUM" },
              { value: "LOW", label: "LOW" },
            ]}
          onChange={changeSelect}/>
        </div>

        <Input placeholder="Tìm kiếm" className="w-64" onChange={changle}/>
      </Space>
    </Card>
  );
}
