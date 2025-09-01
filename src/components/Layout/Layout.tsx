import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Layout(): React.ReactElement {
  return (
    <div>
      <Header />
      <div className="m-auto pb-48 md:pb-0 max-w-[1500px] overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
