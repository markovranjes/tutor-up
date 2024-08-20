import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Courses } from "./pages/courses";
import { MakeOffer } from "./pages/make-offer";
import { Requests } from "./pages/requests";
import { AcceptedRequests } from "./pages/accepted-requests";

document.title = "Tutor UP";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/makeoffer",
    element: <MakeOffer />,
  },
  {
    path: "/requests",
    element: <Requests />,
  },
  {
    path: "/accepted-requests",
    element: <AcceptedRequests />,
  },
  { path: "*", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
