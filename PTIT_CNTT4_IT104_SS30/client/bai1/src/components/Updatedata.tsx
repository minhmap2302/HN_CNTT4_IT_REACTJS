import { Button, Card, Input } from "antd";
import { useState } from "react";

 type context={
    iscancel:()=>void;
    name?:string;
    update:(newname:string)=>void
  }
export default function Updatedata({iscancel,name,update}:context) {
  const [value, setValue] = useState<string>(name?name:"");
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <Card className="w-96 p-6 rounded-xl shadow-lg">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Nhập công việc"
          className="mb-4 rounded-md"
        />
        <div className="flex justify-end gap-2 mt-3">
          <Button onClick={iscancel}>Hủy</Button>
          <Button type="primary" onClick={()=>update(value)}>Cập nhật</Button>
        </div>
      </Card>
    </div>
  );
}
