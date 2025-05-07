import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

import andrei from "./images/akstillsep-nobg.png";

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
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{
            borderBottom: { lg: "4px solid #000" },
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
                mb: { xs: 2, md: "-3px" },
              }}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={7}>
            <Box sx={{ color: "#000" }}>
              <Typography variant="h2" sx={{ fontWeight: 600 }}>
                Andrei Kirilenko
              </Typography>

              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, fontWeight: 600, fontSize: "24px" }}
              >
                Professor of Finance
              </Typography>

              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, mb: 4, fontWeight: 600, fontSize: "24px" }}
              >
                Cambridge Judge Business School
              </Typography>

              <Typography sx={{ mb: 2, fontSize: "16px", lineHeight: 1.8 }}>
                Andrei Kirilenko is a Professor of Finance at the Cambridge Judge Business School
                and the Founding Director of the Cambridge Centre for Finance, Technology, and
                Regulation. He was previously a professor at MIT Sloan and Imperial College Business
                School.
              </Typography>

              <Typography sx={{ mb: 2, fontSize: "16px", lineHeight: 1.8 }}>
                After the Global Financial Crisis, he served as Chief Economist of the U.S.
                Commodity Futures Trading Commission (CFTC), where he received the CFTC Chairman's
                Award for Excellence (highest honor).
              </Typography>
              <Typography sx={{ mb: 2, fontSize: "16px", lineHeight: 1.8 }}>
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
