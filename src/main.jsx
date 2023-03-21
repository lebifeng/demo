import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "src/pages/404";
import Layout from "./components/Layout";
import HttpDemo from "src/pages/http-demo";
import "antd/dist/reset.css";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorComponent: <NotFound />,
    children: [
      {
        path: "http",
        element: <HttpDemo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
