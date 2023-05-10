import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataScreen from "./components/datascreen/DataScreen";
import SummaryScreen from "./components/summaryscreen/SummaryScreen";
import BookingForm from "./components/BookingForm/BookingForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DataScreen />,
  },
  {
    path: "/summary",
    element: <SummaryScreen />,
  },
  {
    path: "/booking",
    element: <BookingForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
