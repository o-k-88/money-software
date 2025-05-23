import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const TypingEffect = ({ text, speed = 100, textColor }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); // Ensure it starts fresh

    const interval = setInterval(() => {
      setDisplayedText((prev) => text.slice(0, index + 1)); // Take substring instead of appending
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Typography
      variant="h2"
      sx={{
        mb: { xs: 4, sm: 2 },
        // color: textColor || "white",
        lineHeight: 1.6,
        fontSize: { xs: "1.2rem", sm: "1.5rem" },
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "1px",
        position: "relative",
        textShadow: "2px 2px 8px rgba(255, 255, 255, 0.5)",

        // Optional gradient text effect
        backgroundImage: "linear-gradient(90deg, #ffffff, #f0f0f0, #d9d9d9)",
        WebkitBackgroundClip: "text",
        // WebkitTextFillColor: "transparent",
      }}
    >
      {displayedText}
    </Typography>
  );
};
export default TypingEffect;
