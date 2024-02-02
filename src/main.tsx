import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WrapperLayout from "./components/layout/WrapperLayout.tsx";
import PublicLayout from "./components/layout/PublicLayout.tsx";
import PrivateLayout from "./components/layout/PrivateLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WrapperLayout />,
    children: [
      { path: "public", element: <PublicLayout /> },
      {
        path: "private",
        element: <PrivateLayout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
