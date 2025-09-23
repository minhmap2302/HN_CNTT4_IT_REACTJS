import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bai1 from "./components/Bai1";
import Bai2 from "./components/Bai2";
import Bai3 from "./components/Bai3";
import Bai5 from "./components/Bai5";
import Bai8 from "./components/Bai8";
import Dashboard from "./components/Dashboard";
import Bai4 from "./components/Bai4";
import Bai6 from "./components/Bai6";
import Bai7 from "./components/Bai7";


export default function App() {
  return (
    <div>
      <Bai1/>
      <Bai2/>
      <Bai3/>
      <Bai4/>
      <Bai5/>
      <Bai6/>
      <Bai7/>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Dashboard></Dashboard>}></Route>
           <Route path="/login" element={<Bai8/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
