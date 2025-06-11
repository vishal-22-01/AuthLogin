import React from "react";
import Header from "../common/Header";
import SideBar from "../common/SideBar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <div>
        {location.pathname !== "/" && <Header />}
        {location.pathname === "/" && <Outlet />}
        {location.pathname !== "/" && (
          <div className="pl-56 h-[calc(100vh_-_90px)] relative">
            {location.pathname !== "/" && <SideBar />}
            <Outlet />
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
