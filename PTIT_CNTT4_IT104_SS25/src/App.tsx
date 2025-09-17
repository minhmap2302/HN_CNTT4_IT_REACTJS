// import React from 'react'

import {
  BrowserRouter,
  // createBrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from "react-router-dom";
// import Home from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE1/Home";
// import Contact from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE1/Contact";
// import Contact2 from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE2/Contact";
// import About from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE1/About";
// import NotFound from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE5/NotFound";
// import Login from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE3/Login";
// import Register from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE4/Register";
// import Home6 from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE6/Home";
// import Product from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE6/Product";
// import Detail from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE6/Detail";
// import Main from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE7/Main";
// import CustomLink from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE7/CustomLink";
// import HomePage from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE7/HomePage";
// import ListUser from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE8/ListUser";
// import UserDetail from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE8/UserDetail";
// import Login from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE9/Login";
// import Register from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE9/Register";
import Login from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE10/Login";
import Register from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE10/Register";
import HomePage from "./components/PTIT_CNTT4_IT104_Session21_EXERCISE10/HomePage";

export default function App() {
  // const rounters = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },
  //   {
  //     path: "/contact2",
  //     element: <Contact2 />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/home",
  //     element: <Home6 />,
  //   },
  //   {
  //     path: "/product",
  //     element: <Product />,
  //   },
  //   {
  //     path: "/detail",
  //     element: <Detail />,
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);
  return (
    <div>
      {/* <RouterProvider router={rounters} /> */}
      {/* {Bài 7} */}
      {/* <BrowserRouter>
        <div style={{ padding: "20px" }}>
          <h1>Demo Điều Hướng Kiểm Tra Đường Dẫn</h1>
          <CustomLink />
          <Routes>
            <Route path="/home-page" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter> */}
      {/* Bài 8 */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </BrowserRouter> */}
      {/* Bài 9 */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
      {/* Baif 10 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage/:user" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
