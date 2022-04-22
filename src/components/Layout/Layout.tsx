import React from "react";
import { FBox } from "../../styles/Reusable";
import Nav from "./styles/nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Nav>
        <FBox jc="space-between" ai="center" h="inherit" p="0 4rem">
          <div>LOGO</div>
          <div>ICONS</div>
        </FBox>
      </Nav>
      <Outlet />
    </>
  );
};

export default Layout;
