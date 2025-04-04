import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import TypingEffect from "../../components/TypingEffect/TypingEffect";

import line2 from "./images/line2.svg";

const Intro = () => {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        py: { xs: 6, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item xs={12} md={6} lg={7}>
            <Box sx={{ mr: { xs: 0, md: 2 } }}>
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "3.5rem", sm: "4rem", lg: "4.6rem" },
                  letterSpacing: "1.5px",
                  color: "#00FF00",
                  mb: { xs: 2, md: 3 },
                }}
              >
                Money is Software
              </Typography>

              <TypingEffect
                text="This book is about the biggest transformation of wealth in modern times - one where the future is dictated by lines of code. Do not be left behind."
                speed={20}
              />
            </Box>
            <Box
              component="img"
              src={line2}
              alt="line"
              sx={{
                display: { xs: "none", md: "block" },
                width: "100px",
                height: "auto",
                mt: 4,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Box sx={{ width: "100%", height: "auto", ml: { xs: 0, md: 4 } }}>
              <CodeBlock />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
