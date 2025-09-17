import { Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layout";
import Complete from "./components/Complete";
import Completing from "./components/Completing";
import Alltodolist from "./components/Alltodolist";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts></Layouts>}>
          <Route index element={<Alltodolist></Alltodolist>}></Route>
          <Route path="complete" element={<Complete></Complete>}></Route>
          <Route path="completing" element={<Completing></Completing>}></Route>
        </Route>
      </Routes>
    </>
  )
}
