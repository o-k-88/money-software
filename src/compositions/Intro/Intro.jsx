import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import image1 from "./images/image-01.jpeg";
import whatsupImg from "./images/whatsupImg.jpeg";
import TypingEffect from "../../components/TypingEffect/TypingEffect";

const Intro = () => {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        py: { xs: 6, md: 12 },
        // position: "relative",
        // backgroundImage: `url(${whatsupImg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // background: "linear-gradient(135deg, #0F1829, #16253A, #1D334D)",
        background: "#16172E",
        // background: "linear-gradient(90deg, rgba(22,23,46,1) 0%, #0f113b 42%, #081853 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "3.5rem", lg: "4.6rem" },

                letterSpacing: "1.5px",

                color: "primary.main",
                mb: { xs: 2, md: 3 },
              }}
            >
              Money is Software
            </Typography>

            <TypingEffect
              text="Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, natus."
              speed={20}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ maxWidth: "100%", height: "auto" }}>
              <CodeBlock />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
