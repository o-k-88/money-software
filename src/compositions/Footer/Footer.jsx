import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { navLinks } from "../../helpers/links";

import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "4px solid #000",
        background: "#transparent",
        color: "#000",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {/* Website Name & Copyright */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              📖 Money is Software
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © {new Date().getFullYear()} All Rights Reserved.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4} textAlign="center">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                color="inherit"
                underline="none"
                sx={{ mx: 1 }}
              >
                {link.title}
              </Link>
            ))}
          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/andrei-kirilenko-941b381/"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
