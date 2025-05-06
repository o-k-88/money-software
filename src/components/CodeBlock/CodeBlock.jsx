import React from "react";
import { Box } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  funky,
  twilight,
  cb,
  coldarkDark,
  materialDark,
  materialOceanic,
  nightOwl,
  synthwave84,
  zTouch,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = () => {
  const codeString = `const BOOK = () => {
    const title = "Money is Software";
    const author = "Andrei Kirilenko";
    const read = true;
    let wealth = null;
    
    if (read) {
        wealth = true;
    } else {
        wealth = false;
    }
  return wealth;
};
  `;

  return (
    <Box
      sx={{
        borderRadius: 10,
        fontSize: { xs: "0.7rem", sm: "1rem", md: "1rem", xl: "1.2rem" },
      }}
    >
      <SyntaxHighlighter language="javascript" style={materialOceanic} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeBlock;
