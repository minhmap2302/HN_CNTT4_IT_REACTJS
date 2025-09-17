import { Button, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
interface user {
  id: number;
  name: string;
  age: number;
}

export default function Listuser() {
  const [user, setUser] = useState<user[]>([]);
  const [input,setInput]=useState<string>("");
  const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value);
  }
  const loadData = () => {
    let url = "http://localhost:8080/user";
    if (input.trim() !== "") {
      url += `?name_like=${input}`;
    }
    axios
      .get(url)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, [input]);
  return (
    <div>
        <Input value={input} onChange={change}/>
      <table style={{ width: 1000, textAlign: "center" }}>
        <thead>
          <tr>
            <th>stt</th>
            <th>name</th>
            <th>age</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>
                <Button type="primary" >sua</Button>
                <Button type="primary" >xoa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
