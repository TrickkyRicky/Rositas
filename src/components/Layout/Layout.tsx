import React from "react";
import { FBox } from "../../styles/Reusable";
import { Logo, Nav } from "./styles";
import { Outlet } from "react-router-dom";

import logo from "../../assets/Logo-1.png";
import logoN from "../../assets/Logo-1-nbg.png";
import { FoodMenu, Location, Mail } from "../UI/Icons/Icons";

const Layout = () => {
  return (
    <>
      <Nav>
        <FBox jc="space-between" ai="center" h="inherit" p="0 4rem 0 7rem">
          <Logo src={logoN} />
          <FBox>
            <FBox m="0 20px">
              <FoodMenu />
            </FBox>
            <FBox m="0 20px">
              <Mail />
            </FBox>
            <FBox m="0 0 0 20px">
              <Location />
            </FBox>
          </FBox>
        </FBox>
      </Nav>
      <Outlet />
    </>
  );
};

export default Layout;
