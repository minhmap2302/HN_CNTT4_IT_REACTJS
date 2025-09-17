// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProductDetail from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE1/ProductDetail";
import ProductDetail from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE10/ProductDetail";
import Student from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE2/Student";
import Student3 from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE3/Student3";
// import Login from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE5/Login";
// import Account from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE5/Account";
// import PrivateRouter from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE5/PrivateRouter";
import Login from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE6/Login";
import Account from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE6/Account";
import PrivateRouter from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE6/PrivateRouter";
import Teams from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE7/Teams";
import TeamsIndex from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE7/TeamsIndex";
import Team from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE7/Team";
import ListProduct from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE10/ListProduct";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Bài 1 */}
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Bài 2 */}
          <Route path="/student/:name" element={<Student></Student>} />
          {/* Bài 3 + 4  */}
          <Route path="/student3" element={<Student3 />} />
          {/* Bài 5 */}
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/account"
            element={<PrivateRouter children={<Account></Account>} />}
          ></Route>
          {/* Bài 6*/}
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/account"
            element={<PrivateRouter children={<Account></Account>} />}
          ></Route>
          {/* Bài 7 */}
          <Route path="teams" element={<Teams />}>
            <Route index element={<TeamsIndex />} />
            <Route path=":teamId" element={<Team />} />
          </Route>
          <Route path="*" element={<h1>404 Không tìm thấy trang</h1>} />

          {/* Bài 10 */}

          <Route path="/" element={<ListProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
