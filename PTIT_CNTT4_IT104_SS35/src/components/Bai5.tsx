import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  FileTextOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { togglewidth } from "../Redux/width";

export default function Sidebar() {
  const data = useAppSelector((e) => e.togglewidth);
  const dispatch = useAppDispatch();

  return (
    <div
      className="bg-[#05122a] text-white flex flex-col transition-all duration-300"
      style={{ width: data.value ? "224px" : "50px" ,height:data.value ? "300px" : "250px"}}
    >
      <nav className="flex-1 mt-2">
        <ul className="space-y-1">
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer">
            <DashboardOutlined />
            {data.value && <span>Bảng điều khiển</span>}
          </li>
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer">
            <UserOutlined />
            {data.value && <span>Tài khoản</span>}
          </li>
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer">
            <DollarOutlined />
            {data.value && <span>Tài sản</span>}
          </li>
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer">
            <BarChartOutlined />
            {data.value && <span>Thống kê</span>}
          </li>
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer">
            <FileTextOutlined />
            {data.value && <span>Tài liệu</span>}
          </li>
          <li
            className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer"
            onClick={() => dispatch(togglewidth())}
          >
            <LeftOutlined
              className={`transition-transform duration-300 ${
                !data.value ? "rotate-180" : ""
              }`}
            />
            {data.value && <span>Thu gọn</span>}
          </li>
        </ul>
      </nav>
    </div>
  );
}
