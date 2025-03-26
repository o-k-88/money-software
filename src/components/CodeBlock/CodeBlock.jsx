import React from "react";
import { Box, Paper } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = () => {
  const codeString = `
const moneyIsSoftware = () => {
  const title = "Money is Software";
  const author = "Andrei Kirilenko";
  const read = true;
  let wealth = null;

  if (read) {
    wealth = true;
  } else {
    wealth = false;
  }
};
  `;

  return (
    <Paper
      elevation={4}
      sx={{
        p: 2,
        borderRadius: 2,
        // backgroundColor: "#1e1e1e", // VS Code background
      }}
    >
      <Box
        sx={{
          //   backgroundColor: "#1e1e1e",
          borderRadius: 2,
          overflowX: "auto",
        }}
      >
        <SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>
          {codeString}
        </SyntaxHighlighter>
      </Box>
    </Paper>
  );
};

export default CodeBlock;
