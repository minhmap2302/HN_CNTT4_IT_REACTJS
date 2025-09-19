
import { useSelector, useDispatch } from "react-redux";
import type { Person } from "./Reduct";

export default function Profile() {
  const person = useSelector((state: Person) => state);
  const dispatch = useDispatch();
  const newperson: Person = {
    id: 1,
    name: "Nguyen Van A",
    gender: "nam",
    address: "hanoi",
    date: "12-1-2000",
  };
  dispatch({ type: "ADD", payload: newperson });
  return (
    <div>
      <div>id:{person.id}</div>
      <div>name:{person.name}</div>
      <div>ngay sinh:{person.date}</div>
      <div>gioi tinh:{person.gender}</div>
      <div>dia chi:{person.address}</div>
    </div>
  );
}
