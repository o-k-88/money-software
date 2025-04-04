import React from "react";
import { Outlet } from "react-router";
import Header from "../compositions/Header/Header";
import Footer from "../compositions/Footer/Footer";
import { Box, Container } from "@mui/material";
import code from "./images/code.webp";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Box
        component="main"
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #16172E 0%, #3A3B5F 100%)",
          // backgroundImage: `url(${code})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center center",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
