import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { mode } from "../Redux/mode";


export default function Bai4() {
    const result = useAppSelector((state) => state.mode);

  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(mode());
  };
  return (
    <div>
        {" "}
        <Button className="mb-4" onClick={handleChange}>
          {result.value ? "list mode" : "Grid mode"}
        </Button>
        {result.value ? (
          <div className="w-[300px] justify-center flex flex-col gap-2">
            <div className="bg-red-500 text-center ">1</div>
            <div className="bg-red-500 text-center">2</div>
            <div className="bg-red-500 text-center">3</div>
            <div className="bg-red-500 text-center">4</div>
          </div>
        ) : (
          <div className="flex gap-4">
            <div className="bg-red-500 text-center w-[100px] h-[100px] flex justify-center items-center">
              1
            </div>
            <div className="bg-red-500 text-center w-[100px] h-[100px] flex justify-center items-center">
              2
            </div>
            <div className="bg-red-500 text-center w-[100px] h-[100px] flex justify-center items-center">
              3
            </div>
            <div className="bg-red-500 text-center w-[100px] h-[100px] flex justify-center items-center">
              4
            </div>
          </div>
        )}
      </div>
  )
}
