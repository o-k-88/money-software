import React from "react";
import { Outlet } from "react-router";
import Footer from "../compositions/Footer/Footer";
import { Box, Container } from "@mui/material";
import image3 from "./images/image-03.jpeg";

const LayoutPage = () => {
  return (
    <>
      <Box component="main">
        <Box component="section" sx={{ py: { xs: 6, md: 12 } }}>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LayoutPage;
