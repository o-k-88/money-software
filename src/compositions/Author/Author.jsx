import React from "react";
import { Box, Container, Paper, Typography, Grid } from "@mui/material";

import andrei from "./images/akstillsep-nobg.png";
import code from "./images/code.webp";

const Author = () => {
  return (
    <Box
      component="section"
      id="author"
      sx={{
        py: { xs: 6, md: 10 },
        // backgroundImage: `url(${code})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{
            borderBottom: { lg: "4px solid #fff" },
          }}
        >
          <Grid item sm={12} md={6} lg={5} sx={{ order: { xs: 0, md: 1 } }}>
            <Box
              component="img"
              src={andrei}
              alt="Author"
              sx={{
                width: "100%",
                height: { sm: "auto", lg: "100%" },
                mb: { xs: 2, md: 0 },
              }}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={7}>
            <Box sx={{ color: "#fff" }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.2rem", md: "3.5rem" },
                  letterSpacing: "1.8px",

                  // Gradient text effect
                  backgroundImage: "linear-gradient(90deg, #ffffff, #e0e0e0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "3px 3px 8px rgba(255, 255, 255, 0.3)",
                }}
              >
                Andrei Kirilenko
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "1.5rem", md: "2rem" },

                  position: "relative",
                  mb: 2,
                }}
              >
                Professor of Finance
              </Typography>

              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "1.2rem", md: "1.6rem" },

                  mb: 3,
                  textShadow: "1px 1px 3px rgba(255, 255, 255, 0.2)",
                }}
              >
                Cambridge Judge Business School
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
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
