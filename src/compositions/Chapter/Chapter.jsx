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
import { Link } from "react-router-dom";

const TypographyStyle = ({ children }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        mb: 2,
        lineHeight: 1.8,
        color: "text.primary",
        letterSpacing: "0.5px",
        position: "relative",
        paddingLeft: "12px",
        fontSize: "16px",

        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "4px",
          height: "80%",
          background: "linear-gradient(180deg, #ddd, #bbb)",
          borderRadius: "2px",
        },
      }}
    >
      {children}
    </Typography>
  );
};

const TypographyHeader = ({ children }) => {
  return (
    <Typography component="span" sx={{ fontWeight: 600, fontSize: "16px" }}>
      {children}
    </Typography>
  );
};

const Chapter = () => {
  return (
    <Box
      component="section"
      id="chapter"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <TypographyHeader>Preface -- The Big Idea</TypographyHeader>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyStyle>
              Take a moment and mentally picture money. Your mental image probably looks like a
              colorful piece of paper or a metal disk or a rectangular piece of plastic.
            </TypographyStyle>
            <TypographyStyle>
              Now that you have a mental image of money, can you imagine using it? Most anything you
              want to do with your money these days - pay, transfer, invest - involves computers. To
              understand money computers need software - instructions that tell a computer what to
              do.
            </TypographyStyle>
            <TypographyStyle>
              Money is somewhere in that software. Where? Who puts it there? Can money be taken out
              of the software and placed somewhere else? What’s left in the software once you take
              money out? Can software make more money?
              <Link
                style={{ textDecoration: "none", color: "#CE5214", marginLeft: ".5rem" }}
                to="/preface"
              >
                Read more...
              </Link>
            </TypographyStyle>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mb: 2 }}>
          {/* Light background */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <TypographyHeader>Chapter 1 -- What is money?</TypographyHeader>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyStyle>
              Money is really any medium that is commonly accepted to transfer value from the past
              to the present and from the present to the future. This medium can be tangible -
              something that you can see and feel - like metal or paper or plastic. Or intangible -
              something that human senses cannot process - like an encrypted piece of computer code.
            </TypographyStyle>

            <TypographyStyle>
              What do humans need money for?
              <Link
                style={{ textDecoration: "none", color: "#CE5214", marginLeft: ".5rem" }}
                to="/what-is-money"
              >
                Read more...
              </Link>
            </TypographyStyle>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mb: 2 }}>
          {/* Light background */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <TypographyHeader>Chapter 2 -- Debt as money</TypographyHeader>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyStyle>
              The US dollar is currently the most widely used money in transactions involving goods
              and services around the world. Let’s take a look at a US dollar bill. On the front of
              it we will find the following words: “This note is legal tender for all debts, public
              or private.” Notice that it says ‘debts’. There is no mention of transactions
              involving goods or services, only debts. Have you wondered why? How did these words
              get there?
            </TypographyStyle>
            <TypographyStyle>
              Let’s start with what debt is. Debt can be defined as something owed. Remember that
              clay or papyrus record? It represents something owed - a certain number of your sacks
              of wheat stored in a keep that can be collected by you in the future. It is owed to
              you. It is also called a liability for the storage place - an obligation that they are
              liable for.
              <Link
                style={{ textDecoration: "none", color: "#CE5214", marginLeft: ".5rem" }}
                to="/debt"
              >
                Read more...
              </Link>
            </TypographyStyle>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mb: 2 }}>
          {/* Light background */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <TypographyHeader>Chapter 3 -- Monetary system</TypographyHeader>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyStyle variant="body2">
              This sad period lasted for about 400 years. Then, gradually, some of the places in and
              around what is now Greece and coastal areas of the Aegean sea became inhabited again.
              Settlements formed, then villages, then towns. Specialization - in wine, olive oil,
              pottery, tools, jewlery - became common due to differences in soils, minerals, water,
              landscape and climate. Trade started again. City states were formed. The Greeks have
              acquired their own 24 letter alphabet, which helped forge a common identity. People
              spoke and wrote in a common language, ate very similar food, wore very similar
              clothes, competed in the same sports, and believed in the same gods, but different
              city states also developed their own politics, economy, and trade. And these were
              often very different.
            </TypographyStyle>
            <TypographyStyle>
              The Greeks also traded internationally - especially with the Persians, who were very
              different from the Greeks. They spoke a different language, had a different way of
              writing, dressed in different clothes, and prayed to different gods. That made it hard
              for the Greeks and the Persians to trade with each other but not impossible. For
              centuries, especially for international trade, it was common to use gold or silver as
              a common currency. Gold and silver are durable, could be quickly hidden, hard to
              counterfeit, and easy to verify without a common language. Metals simply need to be
              weighted, assuming the scales are correct.
              <Link
                style={{ textDecoration: "none", color: "#CE5214", marginLeft: ".5rem" }}
                to="/monetary-system"
              >
                Read more...
              </Link>
            </TypographyStyle>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          {/* Light background */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <TypographyHeader>Chapter 9 -- From gold to bitcoin</TypographyHeader>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyStyle>
              Monetary systems based on metals continued to operate for the next 2500 years - well
              into the 20th century. Gold in particular has proven to be especially well suited for
              running a metal-based monetary system. Gold is a chemical element - meaning that it
              cannot composed from underlying components; and many alchemists definitely tried. It
              remains solid under standard room temperature. It does not react with water and most
              other chemical elements. It does not stick to a magnet. It is heavy and pleasantly
              shiny. And most importantly, it takes a lot of work to find and mine. That makes it
              scarce. And scarcity holds value over time.
            </TypographyStyle>
            <TypographyStyle>
              To this day gold remains the most valuable asset with an estimated market value of
              well over 10 trillion dollars and an annual turnover - value bought and sold every
              year - double that. We are talking about 20 plus trillion (!) dollars changing hands
              every year. That’s over five times the value created in a year in the whole country of
              India. The vast majority of that traded gold bullion never leaves incredibly secure
              vaults. What happens then if gold gets bought or sold? The ownership of gold deposited
              in a secure vault is signified by a certificate signed by the vault’s custodian. To
              get the gold in the future, the owner can present the signed certificate to the
              custodian and receive the gold. That way trading in gold can be done by exchanging
              signed certificates without the actual physical gold ever leaving a secure vault. This
              practice dates back to the 17th century goldsmiths in Amsterdam and London. Of course,
              any such exchange had to be appropriately recorded in a ledger - a book of issuance
              and transaction records - so that the custodian of each vault knew exactly who owned
              what when.
              <Link
                style={{ textDecoration: "none", color: "#CE5214", marginLeft: ".5rem" }}
                to="/gold-to-bitcoin"
              >
                Read more...
              </Link>
            </TypographyStyle>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Chapter;
