import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "primary.dark", color: "white", py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {/* Website Name & Copyright */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h6" fontWeight="bold">
              📖 Book Website
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © {new Date().getFullYear()} All Rights Reserved.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4} textAlign="center">
            {["Home", "Chapters", "About", "Contact"].map((text) => (
              <Link key={text} href="#" color="inherit" underline="none" sx={{ mx: 1 }}>
                {text}
              </Link>
            ))}
          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
