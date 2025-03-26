import React from "react";
import { Outlet } from "react-router";
import Header from "../compositions/Header/Header";
import Footer from "../compositions/Footer/Footer";
import { Box, Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Box component="main" sx={{ position: "relative", overflow: "hidden" }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
