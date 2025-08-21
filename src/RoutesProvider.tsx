import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./components/Layout/Layout";
import Servicios from "./views/Servicios";

function RoutesProvider(): React.ReactElement {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Layout />
        </>
      ),
      children: [
        {
          index: true,
          element: (
            <>
              <Home />
            </>
          ),
        },
        {
          path: "service",
          element: (
            <>
              <Servicios />
            </>
          ),
        },
        { path: "AboutUs", element: <></> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default RoutesProvider;
