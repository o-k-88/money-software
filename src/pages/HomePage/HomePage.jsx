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
import { REVIEWS } from "../../helpers/feedbacks";

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
            variant="h2" // Change from h1 to h2 for better balance
            align="center"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "4rem" }, // Responsive font sizes
              lineHeight: 1.3,
              letterSpacing: "1.5px",
              // color: "primary.main",
              color: "secondary.main",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
              mb: 3,
            }}
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
              <Typography variant="h4" sx={{ fontWeight: 700, color: "primary.main", mb: 3 }}>
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
              <Accordion sx={{ bgcolor: "grey.100" }}>
                {/* Light background */}
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    📖 Chapter 1 - Introduction
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ bgcolor: "grey.100" }}>
                {/* Light background */}
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    📖 Chapter 2 - Lorem ipsun
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="section" id="author" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ fontWeight: 700, color: "primary.main", mb: 3 }}>
            About The Author
          </Typography>

          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3.5rem" }, // Responsive font size
                  color: "secondary.main", // Emphasize with primary color
                  textTransform: "uppercase", // Professional look
                  letterSpacing: "1.5px", // Adds spacing for readability
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", // Soft shadow effect
                  mb: 1.5, // Bottom margin for spacing
                }}
              >
                Andrei Kirilenko
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "1.25rem", md: "1.75rem" }, // Adjust size for devices
                  color: "text.secondary", // Subtle contrast
                  fontStyle: "italic", // Stylish italic touch
                  letterSpacing: "0.8px", // Slightly more spacing
                  borderLeft: "4px solid", // Decorative left border
                  borderColor: "secondary.main", // Matches theme
                  pl: 2, // Padding for spacing after border
                  mb: 2, // Margin bottom
                }}
              >
                Professor in Finance, Cambridge Judge Business School
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: "text.secondary", lineHeight: 1.6 }}>
                Andrei Kirilenko is a Reader (Associate Professor) in Finance at the Cambridge Judge
                Business School and the Founding Director of the Cambridge Centre for Finance,
                Technology, and Regulation.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: "text.secondary", lineHeight: 1.6 }}>
                He previously worked at MIT Sloan, Imperial College, and the U.S. Commodity Futures
                Trading Commission (CFTC), using advanced analytical methods for financial
                regulations.
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                Andrei holds a PhD in Economics from the University of Pennsylvania with a
                specialization in Finance from the Wharton School.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={andreiImg}
                alt="Author Image"
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  objectFit: "cover",
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
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "primary.main", mb: 3, paddingLeft: "20px" }}
          >
            What Readers Say
          </Typography>
          <CustomSlider feedbacks={REVIEWS} />
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
