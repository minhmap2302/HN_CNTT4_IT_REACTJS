import { Route, Routes } from "react-router-dom";
import Listpost from "./components/Listpost";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/list-post" element={<Listpost></Listpost>}></Route>
      </Routes>
    </div>
  )
}
