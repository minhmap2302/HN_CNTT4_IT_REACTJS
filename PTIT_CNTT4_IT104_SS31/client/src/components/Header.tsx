import { Input, Select } from "antd";
import Modaladd, { type posts } from "./Modaladd";

type prop = {
  changevalue: (e: string) => void;
  add: (value: posts) => void;
  filterinput: (s: string) => void;
};

export default function Header({ changevalue, add, filterinput }: prop) {
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    changevalue(e.target.value);
  };

  const selecter = (value: string) => {
    filterinput(value);
  };

  return (
    <div className="flex flex-row justify-between items-center mt-4">
      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="nhap ten tim kiem"
          onChange={change}
        />
        <Select
          style={{ width: 200 }}
          options={[
            { value: "all", label: "loc theo" },
            { value: "true", label: "Đã xuất bản" },
            { value: "false", label: "Đã chặn" },
          ]}
          defaultValue="all"
          onChange={selecter}
        />
      </div>
      <Modaladd addvalue={add}></Modaladd>
    </div>
  );
}
