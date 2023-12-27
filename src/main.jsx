import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Home from "./Pages/Home/Home";
import Destination from "./Pages/Destination/Destination";
import Crew from "./Pages/Crew/Crew";
import Technology from "./Pages/Technology/Technology";
import { PLANETS_MOCK } from "./mock/planetsInformation";
import { PEOPLE_MOCK } from "./mock/peoplesInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/destination",
    element: <Destination data={PLANETS_MOCK}/>,
  },
  {
    path: "/crew",
    element: <Crew data={PEOPLE_MOCK}/>,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
