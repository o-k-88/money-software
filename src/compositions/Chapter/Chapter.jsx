import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Chapter = () => {
  return (
    <Box
      component="section"
      id="chapter"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="body1"
            sx={{ mb: 2, color: "text.primary", lineHeight: 1.6, fontSize: "1.2rem" }}
          >
            Money is Software a comprehensive guide to understanding the world of finance and
            technology. This book is a must-read for anyone interested in the intersection of
            finance and technology. It covers a wide range of topics, including blockchain,
            cryptocurrencies, and algorithmic trading. Whether you are a finance professional
            looking to stay ahead of the curve or a technology enthusiast curious about the future
            of finance, Money Software has something for you.
          </Typography>
        </Box>

        <Accordion sx={{ bgcolor: "grey.100", mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span" sx={{ fontWeight: 600 }}>
              📖 Chapter 1 - Introduction
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet
              <Button
                href="#"
                sx={{
                  textTransform: "capitalize",
                  padding: 0,
                  marginLeft: 1,
                }}
              >
                Read more
              </Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ bgcolor: "grey.100" }}>
          {/* Light background */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" sx={{ fontWeight: 600 }}>
              📖 Chapter 2 - Lorem ipsun
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Chapter;
