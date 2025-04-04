import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import image1 from "./images/image-01.jpeg";
import image3 from "./images/image-03.jpeg";
import whatsupImg from "./images/whatsupImg.jpeg";
import TypingEffect from "../../components/TypingEffect/TypingEffect";

const Intro = () => {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        py: { xs: 6, md: 12 },

        // background: "#16172E",
        // background: "linear-gradient(135deg, #16172E 0%, #3A3B5F 100%)",
        // background: "linear-gradient(135deg, #16172E 0%, #1F2041 50%, #3D348B 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 0, sm: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
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
              // textColor="primary.main"
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "100%", height: "auto" }}>
              <CodeBlock />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
