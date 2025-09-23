import { Button, Card } from "antd";
import { useAppSelector, useAppDispatch } from "../hooks/hook";
import { useNavigate } from "react-router-dom";
import { Login } from "../Redux/Login";


export default function Dashboard() {
  const data = useAppSelector((e) => e.login);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
 const logout={id:null,name:"",emai:"",password:""}
  const handleLogout = () => {
    dispatch(Login(logout));       
    navigate("/");            
  };

  return (
    <Card>
      {data.name || data.email ? (
        <>
          <div>User: {data.name}</div>
          <div>Email: {data.email}</div>
          <Button onClick={handleLogout}>Đăng xuất</Button>
        </>
      ) : (
        <Button onClick={() => navigate("/login")}>Login</Button>
      )}
    </Card>
  );
}
