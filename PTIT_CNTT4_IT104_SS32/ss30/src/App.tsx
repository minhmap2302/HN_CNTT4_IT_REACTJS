import { Provider } from "react-redux";
import Bai2 from "./components/bai2";
import { store } from "./store/store";
import Bai3 from "./components/Bai3";
import Bai4 from "./components/Bai4";
import Bai5 from "./components/Bai5";
import Bai6 from "./components/Bai6";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";


export default function App() {
  return (
    <Provider store={store}>
      <Bai2/>
      <Bai3/>
      <Bai4/>
      <Bai5/>
      <Bai6/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
