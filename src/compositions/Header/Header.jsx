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

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = ["Home", "Chapters", "About", "Contact"];

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
              <Button key={link} color="inherit" sx={{ mx: 1 }}>
                {link}
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
            <ListItem key={link} disablePadding>
              <ListItemButton>
                <ListItemText primary={link} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
