import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Box } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton
        onClick={() => navigate("/")}
        sx={{
          color: "primary.main",
          "&:hover": {
            backgroundColor: "primary.light",
          },
          p: 1,
        }}
      >
        <ArrowBackIcon />
      </IconButton>
    </Box>
  );
};

export default GoBack;
