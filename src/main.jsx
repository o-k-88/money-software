import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider, CssBaseline, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    // fontFamily: "Consolas, 'Courier New', monospace",
  },
  palette: {
    // primary: {
    //   main: "#F28C28",
    // },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
