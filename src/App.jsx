import React from "react";
import Login from "./Component/Login";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./Component/Body";
import ProfileDashboard from "./Component/ProfileDashboard";
import Feed from "./Component/Feed";
const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/instagram",
    element: <Body />,
    children: [
      {
        path: "/instagram",
        element: <Feed />,
      },
      {
        path: "/instagram/userprofile",
        element: <ProfileDashboard />,
      },
    ],
  },
]);
export default App;
