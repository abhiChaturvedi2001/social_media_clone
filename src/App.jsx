import React from "react";
import Login from "./Component/Login";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./Component/Body";
import ProfileDashboard from "./Component/ProfileDashboard";
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
    element: <App />,
    children: [
      {
        path: "/instagram",
        element: <Body />,
      },
      {
        path: "/instagram/userprofile",
        element: <ProfileDashboard />,
      },
    ],
  },
]);
export default App;
