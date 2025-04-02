import React from "react";
import { Outlet } from "react-router";
import Footer from "../compositions/Footer/Footer";
import { Box, Container } from "@mui/material";
import image3 from "./images/image-03.jpeg";

const LayoutPage = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 6, md: 12 },
          background: `url(${image3}) no-repeat top center`,
          backgroundSize: "cover",
          color: "#fff",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default LayoutPage;
