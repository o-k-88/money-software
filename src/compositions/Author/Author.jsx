import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import image3 from "./images/image-03.jpeg";

const Author = () => {
  return (
    <Box
      component="section"
      id="author"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image3})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={6}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "16px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            backgroundColor: "transparent",
            color: "#fff",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.2rem", md: "3.5rem" },

              letterSpacing: "1.8px",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
              mb: 2,
            }}
          >
            Andrei Kirilenko
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "1.5rem", md: "2rem" },

              mb: 1,
            }}
          >
            Professor of Finance
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1.2rem", md: "1.6rem" },

              mb: 3,
            }}
          >
            Cambridge Judge Business School
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            Andrei Kirilenko is a Professor of Finance at the Cambridge Judge Business School and
            the Founding Director of the Cambridge Centre for Finance, Technology, and Regulation.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            He previously worked at MIT Sloan, Imperial College, and the U.S. Commodity Futures
            Trading Commission (CFTC), using advanced analytical methods for financial regulations.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Andrei holds a PhD in Economics from the University of Pennsylvania with a
            specialization in Finance from the Wharton School.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Author;
