import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { navLinks } from "../../helpers/links";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* App Bar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* Logo / Title */}
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            📖 Book Website
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navLinks.map((link) => (
              <Button key={link.title} href={link.href} color="inherit" sx={{ mx: 1 }}>
                {link.title}
              </Button>
            ))}
            <Button variant="contained" color="secondary">
              Get the Book
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navLinks.map((link) => (
            <ListItem
              key={link.title}
              disablePadding
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                sx={{
                  color: "text.secondary",
                  position: "relative",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    color: "primary.main", // Change text color on hover
                    transform: "scale(1.05)", // Slight scaling effect
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "primary.main",
                    transform: "scaleX(0)", // Initially hidden
                    transformOrigin: "right",
                    transition: "transform 0.3s ease-out",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)", // Underline animation
                    transformOrigin: "left",
                  },
                }}
                href={link.href}
              >
                {link.title}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
