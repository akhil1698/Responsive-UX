import React from "react";
import Header from "../Header";
import MainContent from "../MainContent";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { Toolbar } from "@mui/material";

function Layout() {
  return (
    <>
      <Header />
      <Toolbar/>
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
}

export default Layout;
