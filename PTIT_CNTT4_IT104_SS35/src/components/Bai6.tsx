
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { setEnglish, setVietnamese } from "../Redux/Langue";
export default function Bai6(){
      const result = useAppSelector((state) => state.langue.value);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "English") {
      dispatch(setEnglish());
    } else {
      dispatch(setVietnamese());
    }
  };
  return (
    <div>
      Bai 06:
      <div>
        {" "}
        <select
          value={result}
          onChange={handleChange}
          className="border-2 border-black"
        >
          <option value="Vietnamese">Vietnamese</option>
          <option value="English">English</option>
        </select>
        <h2 className="p-5">
          {result === "English" ? "Rikkei Academy" : "Học viện Rikkei"}
        </h2>
      </div>
    </div>
  )
}
