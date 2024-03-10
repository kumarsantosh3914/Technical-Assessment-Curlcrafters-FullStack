import React from "react";
import Quiz from "./Quiz";

import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const UserInputForm = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default UserInputForm;
