import React from "react";
import { Outlet } from "react-router";

import Footer from "../compositions/Footer/Footer";
import { Box, Container } from "@mui/material";

import CustomCursor from "../components/CustomCursor/CustomCursor";

const Layout = () => {
  return (
    <>
      {/* <CustomCursor /> */}
      <Box
        component="div"
        className="g-content"
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box component="main">
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
