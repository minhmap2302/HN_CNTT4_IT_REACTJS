// import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE1/Home";
// import About from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE1/About";
// import Contact from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE1/Contact";
// import Layout from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE1/Layout";
// import ProductList from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE2/ProductList";
// import ProductDetail from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE2/ProductDetail";
// import TaskList from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE3/TaskList";
// import TaskDetail from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE3/TaskDetail";
// import ProductList4 from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE4/ProductList4";
// import Posts from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE5/Posts";
// import PostDetail from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE5/PostDetail";
// import BlogLayout from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE5/BlogLayout";

// import Layout from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE6/Layout";
// import Product from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE6/Product";
// import Detail from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE6/Detail";
// import Home from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE6/Home";
// import Home7 from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE7/Home";
// import NotFound from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE7/NotFound";
// import About7 from "./components/PTIT_CNTT4_IT104_Session26_EXERCISE7/About";
import Login from "./components/PTIT_CNTT4_IT104_Session27_BT8/Login";
import Register from "./components/PTIT_CNTT4_IT104_Session27_BT8/Register";
const routers = createBrowserRouter([
  // Bài 1
  // {
  //   path: "/",
  //   element: <Layout></Layout>,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home />,
  //     },
  //     {
  //       path: "/about",
  //       element: <About />,
  //     },
  //     {
  //       path: "/contact",
  //       element: <Contact />,
  //     },
  //   ],
  // },
  // Bài 2
  // {
  //   path: "/product",
  //   element: <ProductList></ProductList>,
  // },
  // {
  //   path: "/product/:id",
  //   element: <ProductDetail />,
  // },
  // Bài 3
  // {
  //   path: "/",
  //   element: <TaskList></TaskList>,
  // },
  // {
  //   path: "/task/:id",
  //   element: <TaskDetail></TaskDetail>,
  // },
  // Bài 4
  // {
  //   path: "/products",
  //   element: <ProductList4></ProductList4>,
  // },
  // Bài 5
  // {
  //   path: "/blog",
  //   element: <BlogLayout></BlogLayout>,
  //   children: [
  //     {
  //       path: "posts",
  //       element: <Posts />,
  //     },
  //     {
  //       path: "posts/:id",
  //       element: <PostDetail />,
  //     },
  //   ],
  // },
  // Bài 6
  // {
  //   path: "/",
  //   element: <Layout></Layout>,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home />,
  //     },
  //     {
  //       path: "product",
  //       element: <Product />,
  //     },
  //     {
  //       path: "detail",
  //       element: <Detail />,
  //     },
  //   ],
  // },

  // Bài 7
  // {
  //   path: "/",
  //   element: <Home7></Home7>,
  // },
  // {
  //   path: "/about",
  //   element: <About7></About7>,
  // },
  // {
  //   path: "*",
  //   element: <NotFound></NotFound>,
  // },

  // Bài 8
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}
