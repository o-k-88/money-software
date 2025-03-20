import React from "react";
import styled from "styled-components";
import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
// import Carousel from "../components/Carousel/Carousel";
import book from "./images/book.jpg";

const Homepage = () => {
  return (
    <>
      <Box component="section" sx={{ py: 8, backgroundColor: "grey.100" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Column - Text */}
            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Money is Software by Andrei Kirilenko 📚
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Explore a world of captivating stories, insightful non-fiction, and timeless
                classics. Find books that inspire, entertain, and educate.
              </Typography>
              <Button variant="contained" color="primary" size="large">
                Browse Books
              </Button>
            </Grid>

            {/* Right Column - Image */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://placehold.co/450x300" // Replace with actual book image
                alt="Books"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="section" sx={{ py: 8, backgroundColor: "grey.50" }}>
        <Container maxWidth="md">
          <Paper sx={{ padding: 4, boxShadow: 3, borderRadius: 2 }}>
            {/* Chapter Title */}
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Chapter 1: The Journey Begins 🚀
            </Typography>

            {/* Chapter Content (Excerpt) */}
            <Typography variant="body1" color="text.secondary" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, esse aliquam.
              Perspiciatis facere dolor placeat reprehenderit consequuntur consectetur quas earum
              eligendi, facilis mollitia numquam voluptatum!...
            </Typography>

            {/* Read More Button */}
            <Button variant="contained" color="primary" size="large">
              Read More
            </Button>
          </Paper>
        </Container>
      </Box>
      <Box component="section">
        <Container maxWidth="lg">
          <Typography>Author</Typography>
        </Container>
      </Box>
      <Box component="section">
        <Container maxWidth="lg">
          <Typography>Where to buy</Typography>
        </Container>
      </Box>
    </>
  );
};

export default Homepage;
