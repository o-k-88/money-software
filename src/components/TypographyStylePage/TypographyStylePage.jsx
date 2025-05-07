import React from "react";
import { Typography } from "@mui/material";

const TypographyStylePage = ({ children }) => {
  return (
    <Typography variant="body1" paragraph sx={{ textIndent: "2rem" }}>
      {children}
    </Typography>
  );
};

export default TypographyStylePage;
