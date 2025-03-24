import React from "react";
import { Box, Container, Typography, Grid, Button, Avatar, Stack, IconButton } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import road from "./images/road.svg";
import CustomSlider from "../../components/Carousel/CustomSlider";
import bookImg from "./images/book.jpg";
import andreiImg from "./images/andrei-kirilenko.jpg";
import chapterImg from "./images/chapter-image.jpg";

const feedbacks = [
  {
    id: 1,
    name: "John Doe",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "Lorem10 ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ron Doe1",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "Lorem10 ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
  {
    id: 3,
    name: "Bob Doe2",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "Lorem10 ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
  {
    id: 4,
    name: "Nate Doe3",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "Lorem10 ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
];

const Homepage = () => {
  return (
    <>
      <Box
        id="home"
        component="section"
        sx={{
          py: 8,
          backgroundImage: `url(${bookImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            align="center"
            sx={{
              fontWeight: 700,
              fontSize: "4rem", // Increased font size
              lineHeight: 1.3,
              letterSpacing: "2px", // Adds spacing between letters
              color: "primary.main", // Primary color from your theme
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", // Subtle text shadow for depth
              mb: 3, // Margin bottom
            }}
            gutterBottom
          >
            Money Software
          </Typography>

          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: 400,
              fontSize: "2rem", // Slightly bigger for emphasis
              lineHeight: 1.4,
              color: "text.secondary", // Secondary text color for contrast
              fontStyle: "italic", // Adds an italicized style to make it distinct
              textTransform: "uppercase", // Uppercase for a more dramatic look
              letterSpacing: "1px", // Adds spacing between letters
              mb: 4, // Larger margin bottom
            }}
            gutterBottom
          >
            By Andrei Kirilenko
          </Typography>
        </Container>
      </Box>
      <Box component="section" id="chapter" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: 700, color: "primary.main", mb: 3 }}>
                What's Inside
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6, mb: 4 }}>
                Money Software is a comprehensive guide to understanding the world of finance and
                technology. This book is a must-read for anyone interested in the intersection of
                finance and technology. It covers a wide range of topics, including blockchain,
                cryptocurrencies, and algorithmic trading. Whether you are a finance professional
                looking to stay ahead of the curve or a technology enthusiast curious about the
                future of finance, Money Software has something for you.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ px: 6 }}
                href="/chapters"
              >
                Get the Book
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">Chapter 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span">Chapter 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="section" id="author" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ fontWeight: 700, color: "primary.main", mb: 3 }}>
            About The Author
          </Typography>

          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2">Andrei Kirilenko</Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Professor in Finance, Cambridge Judge Business School
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "text.secondary",
                  lineHeight: 1.6,
                }}
              >
                Andrei Kirilenko is a Reader (Associate Professor) in Finance at the Cambridge Judge
                Business School, the Founding Director of the Cambridge Centre for Finance,
                Technology and Regulation, and a Research Fellow in the Financial Economics
                Programme of the Centre for Economic Policy Research (CEPR). Prior to joining the
                University of Cambridge Judge Business School in 2019, he was the Director of the
                Centre for Global Finance and Technology at the Imperial College Business School.
                Prior to joining Imperial in 2015, he was a Professor of the Practice of Finance at
                MIT Sloan and Co-Director of the MIT Center for Finance and Policy. Prior to MIT,
                Kirilenko served (2010-2012) as Chief Economist of the U.S. Commodity Futures
                Trading Commission (CFTC) where he used modern analytical tools and methods to
                design and enforce an effective regulatory regime of financial markets. Before CFTC
                Kirilenko spent twelve years at the International Monetary Fund working on financial
                crises around the world. Andrei received his PhD in Economics from the University of
                Pennsylvania with a specialization in Finance from the Wharton School.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={andreiImg}
                alt="Author Image"
                sx={{
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: 4,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="reviews" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ fontWeight: 700, color: "primary.main", mb: 3 }}>
            What Readers Say
          </Typography>
          <CustomSlider feedbacks={feedbacks} />
        </Container>
      </Box>

      {/* <Box sx={{ py: 8 }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <img src={road} alt="Road illustration" style={{ maxWidth: "100%", height: "auto" }} />
        </Container>
      </Box> */}
    </>
  );
};

export default Homepage;
