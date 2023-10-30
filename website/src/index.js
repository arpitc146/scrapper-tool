import React from "react";
import "./index.css";
import App from "./App";
import Dashboard from "./Dashboard";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
reportWebVitals();
