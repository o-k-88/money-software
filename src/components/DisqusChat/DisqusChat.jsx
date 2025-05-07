import React, { useEffect } from "react";

import { Container, Box } from "@mui/material";

const DisqusChat = () => {
  useEffect(() => {
    (function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://money-is-software.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }, []);
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 12 } }}>
      <Container maxWidth="xl">
        <div id="disqus_thread"></div>
      </Container>
    </Box>
  );
};

export default DisqusChat;
