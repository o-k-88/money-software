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
            <Box sx={{ mr: { xs: 0, md: 2 }, position: "relative" }}>
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "3rem", sm: "3.5rem", md: "4rem" },
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  backgroundImage: "linear-gradient(45deg, #00FF00, #00AA00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "4px 4px 10px rgba(0, 255, 0, 0.5)",
                  mb: { xs: 4, md: 6 },
                  position: "relative",
                  "&::after": {
                    content: '""',
                    display: "block",
                    width: "50%",
                    height: "4px",
                    backgroundColor: "#00FF00",
                    position: "absolute",
                    bottom: "-8px",
                    left: "0",
                    borderRadius: "2px",
                  },
                }}
              >
                Money is Software
              </Typography>
              <TypingEffect
                text="This book is about the biggest transformation of wealth in modern times - one where the future is dictated by lines of code. Do not be left behind."
                speed={20}
              />
              <Box
                component="img"
                src={line2}
                alt="line"
                sx={{
                  position: "absolute",
                  left: "0",
                  zIndex: 99,
                  height: { md: "150px" },
                  display: { xs: "none", md: "block" },

                  mt: 4,
                }}
              />
            </Box>
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
