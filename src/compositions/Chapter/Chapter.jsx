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
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: "text.primary" }}>
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
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ bgcolor: "#7169E2" }}
          >
            <Typography component="span" sx={{ fontWeight: 600, color: "#fff" }}>
              💡 Preface -- The Big Idea
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "grey.100" }}>
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
        <Accordion sx={{ bgcolor: "#7169E2", mb: 2 }}>
          {/* Light background */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" sx={{ fontWeight: 600, color: "#fff" }}>
              💵 Chapter 1 -- What is money?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "grey.100" }}>
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
                to="/debt-as-money"
              >
                Read more...
              </Link>
            </TypographyStyle>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ bgcolor: "#7169E2", mb: 2 }}>
          {/* Light background */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" sx={{ fontWeight: 600, color: "#fff" }}>
              📉 Chapter 2 -- Debt as money
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "grey.100" }}>
            <TypographyStyle>
              Debt can be defined as something owed. Remember that clay or papyrus record? It
              represents something owed - a certain number of your sacks of wheat stored in a keep
              that can be collected at will by you in the future. Think of it as a deposit you’ve
              made. It is value owed to you. It is also called a liability for the storage place -
              an obligation that they are liable to care for it on your behalf.
            </TypographyStyle>
            <TypographyStyle>
              What if someone other than you comes to the storage facility while you are not around
              and asks for wheat to plant now with a promise to bring back all of it plus more next
              year. That promise is called credit. The promise is from the borrower or debtor to the
              lender or creditor to bring back all of the wheat plus more, typically recorded as a
              fraction of the whole - say 10 percent or 1/10th more. This “more” part is typically
              called interest.
            </TypographyStyle>
            <TypographyStyle>
              It’s your wheat, not the storage facility’s, but let’s say when you agreed to store it
              there, you also agreed that they could give it out to someone you don’t know in return
              for some payment to you. Say you agreed to be paid 1/20th of the total you’ve stored.
              Now the storage facility took your wheat and gave it to someone else to plant in
              return for a promise to bring it back next year whole plus 1/10th more. You have a
              recorded claim on the bank and the bank has a recorded claim on someone else.
              Importantly though, that someone else now has wheat to plant, grow and then to
              harvest. Your wheat now works as an asset for the bank earning interest. It is the
              same wheat that otherwise would have been sitting in storage being eaten by mice.
              <Link
                style={{ textDecoration: "none", color: "#CE5214", marginLeft: ".5rem" }}
                to="/debt"
              >
                Read more...
              </Link>
            </TypographyStyle>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ bgcolor: "#7169E2", mb: 2 }}>
          {/* Light background */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" sx={{ fontWeight: 600, color: "#fff" }}>
              🏦 Chapter 3 -- Monetary system
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "grey.100" }}>
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
              weighted, assuming the scales are correct.{" "}
              <Link
                style={{ textDecoration: "none", color: "#C9328E", marginLeft: ".5rem" }}
                to="/monetary-system"
              >
                Read more...
              </Link>
            </TypographyStyle>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ bgcolor: "#7169E2" }}>
          {/* Light background */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" sx={{ fontWeight: 600, color: "#fff" }}>
              🏅 Chapter 9 -- From gold to bitcoin
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "grey.100" }}>
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
