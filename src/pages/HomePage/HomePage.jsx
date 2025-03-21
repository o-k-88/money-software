import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import road from "./images/road.svg";
import CustomSlider from "../../components/Carousel/CustomSlider";
import book from "./images/book.jpg";

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
        component="section"
        sx={{
          py: 8,
          backgroundImage: `url(${book})`,
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
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {/* Text Content */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                The Book Chapter
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "text.secondary",
                  lineHeight: 1.6,
                }}
              >
                Discover <strong>The Stoic Capitalist</strong>, where Robert Rosenkranz bridges
                ancient Stoic wisdom with modern capitalist strategies to reveal a powerful approach
                to success and fulfillment. Learn how rational decision-making, resilience, and
                purpose can transform your life and business.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  color: "white",
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  transition: "background-color 0.3s ease",
                  "&:hover": { backgroundColor: "primary.dark" },
                }}
              >
                Learn More
              </Button>
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://placehold.co/600x400"
                alt="Book Cover"
                sx={{
                  width: "100%",
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
      <Box component="section">
        <Container maxWidth="xl">
          <CustomSlider feedbacks={feedbacks} />
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <img src={road} alt="Road illustration" style={{ maxWidth: "100%", height: "auto" }} />
        </Container>
      </Box>
    </>
  );
};

export default Homepage;
