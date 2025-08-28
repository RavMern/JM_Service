import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./components/Layout/Layout";
import Servicios from "./views/Servicios";
import AboutElect from "./components/About/AboutElect";
import AboutAlba from "./components/About/AboutAlba";

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
          path: "servicios",
          element: (
            <>
              <Servicios />
            </>
          ),
        },
        {
          path: "about/electricista",
          element: <AboutElect />,
        },
        {
          path: "about/albanil",
          element: <AboutAlba />,
        },

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
