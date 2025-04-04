import React from "react";
import { Box, Container, Paper, Typography, Grid } from "@mui/material";

import andrei from "./images/AKirilenko.jpg";

const Author = () => {
  return (
    <Box
      component="section"
      id="author"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          <Grid item sm={12} md={4}>
            <Box
              component="img"
              src={andrei}
              alt="Author"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
          <Grid item sm={12} md={8}>
            <Box sx={{ color: "#fff" }}>
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
                Andrei Kirilenko is a Professor of Finance at the Cambridge Judge Business School
                and the Founding Director of the Cambridge Centre for Finance, Technology, and
                Regulation. He was previously a professor at MIT Sloan and Imperial College Business
                School.
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
                After the Global Financial Crisis, he served as Chief Economist of the U.S.
                Commodity Futures Trading Commission (CFTC), where he received the CFTC Chairman's
                Award for Excellence (highest honor).
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                Andrei holds a PhD in Economics from the University of Pennsylvania with a
                specialization in Finance from the Wharton School.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Author;
