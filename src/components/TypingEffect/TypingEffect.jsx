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
        mb: { xs: 1, md: 2 },
        color: textColor || "white",

        lineHeight: 1.6,
        fontSize: { xs: "1.2rem", sm: "1.5rem" },
      }}
    >
      {displayedText}
    </Typography>
  );
};
export default TypingEffect;
