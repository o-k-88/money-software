import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const GoldToBitcoin = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, mt: 5, borderRadius: 2, bgcolor: "#f5f5f5" }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
          From gold to bitcoin
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" paragraph>
            Monetary systems based on metals continued to operate for the next 2500 years - well
            into the 20th century. Gold in particular has proven to be especially well suited for
            running a metal-based monetary system. Gold is a chemical element - meaning that it
            cannot composed from underlying components; and many alchemists definitely tried. It
            remains solid under standard room temperature. It does not react with water and most
            other chemical elements. It does not stick to a magnet. It is heavy and pleasantly
            shiny. And most importantly, it takes a lot of work to find and mine. That makes it
            scarce. And scarcity holds value over time.
          </Typography>
          <Typography variant="body1" paragraph>
            To this day gold remains the most valuable asset with an estimated market value of well
            over 10 trillion dollars and an annual turnover - value bought and sold every year -
            double that. We are talking about 20 plus trillion (!) dollars changing hands every
            year. That’s over five times the value created in a year in the whole country of India.
            The vast majority of that traded gold bullion never leaves incredibly secure vaults.
            What happens then if gold gets bought or sold? The ownership of gold deposited in a
            secure vault is signified by a certificate signed by the vault’s custodian. To get the
            gold in the future, the owner can present the signed certificate to the custodian and
            receive the gold. That way trading in gold can be done by exchanging signed certificates
            without the actual physical gold ever leaving a secure vault. This practice dates back
            to the 17th century goldsmiths in Amsterdam and London. Of course, any such exchange had
            to be appropriately recorded in a ledger - a book of issuance and transaction records -
            so that the custodian of each vault knew exactly who owned what when.{" "}
          </Typography>
          <Typography variant="body1" paragraph>
            What if a holder of a signed certificate - which were also known as notes, orders or
            bills - issued by one goldsmith, say John Portman wants to deposit it with another
            goldsmith, say Edward Backwell. No problem! Edward Backwell of Lombard Street, London
            accepted the notes, orders and bills issued by John Portman and many other goldsmiths.
            By doing so Edward issued temporary credit to John and recorded it in his ledger. Edward
            held the note signed by John, which means that John owed Edward the amount of assigned
            gold until John cleared his outstanding balance with Edward. This process is called
            bilateral clearing. Bilateral clearing arrangements - a way to clear balances held
            against each other - formed a private clearing network.
          </Typography>
          <Typography variant="body1" paragraph>
            A clearing network is critical for a widespread acceptance of privately-issued notes,
            orders, bills or certificates as a means of payment. Without it, there is no guarantee
            that a note signed by one goldsmith-banker could be useful as anything other than a
            simple receipt redeemable only with that goldsmith-banker. This system of private
            bilateral clearing arrangements was not based on any laws or regulations. It was kept
            together by self-interest and trust. The trust did not come for free. To gain trust and
            build contacts, an aspiring goldsmith had to work for free for 7 years for a master from
            the Goldsmiths’ Company, a trade guild of the City of London. Only after demonstrating
            the ability to do the work, a new goldsmith-banker could be accepted into the private
            clearing network.
          </Typography>
          <Typography variant="body1" paragraph>
            For centuries, trust was build into national and international clearing networks by
            checking and re-checking whether those who were allowed in can do the relevant work to
            keep things going. Overtime, many of these networks became very incestuous, lost trust
            and collapsed. The most recent episode of a network of private London bankers losing
            trust was the Libor scandal. The Libor scandal was first reported in 2008, in the midst
            of Global Financial Crisis, which engulfed the entire world’s financial system. The
            scandal came about because private bankers from the British Bankers Association - which
            could be thought of as a distant successor of the goldsmiths’ trade guild - lied about
            their cost of extending credit to each other. At the time, I was a regulator with the US
            Commodity Futures Trading Commission, a federal market regulator, which went after the
            lying London bankers and got their banks to pay billions of dollars in fines.{" "}
          </Typography>
          <Typography variant="body1" paragraph>
            Another development that took place in 2008, when the whole global financial system was
            on the verge of collapse, was a nine-page white paper entitled “Bitcoin: A Peer-to-Peer
            Electronic Cash System” which was posted by an anonymous author in a mailing list for
            those interested in cryptography - a branch of math that studies how to securely
            exchange private data over untrustworthy channels. The white paper eloquently proposed
            to use math and software - rather than personal ties - as the foundation of trust in the
            digital world. Before we go into what Bitcoin is, we need to acknowledge one thing - by
            2008, money, payments and overall finance were already mostly based on math an software.
            Only that math and software could be changed, updated or manipulated deep inside the
            complex system by their human architects and operators - bankers, traders, exchanges and
            so forth - to the detriment of the unsuspecting public. When things were going well,
            financiers got their private rewards and when things were going poorly, the public had
            to bail them out.
          </Typography>
          <Typography variant="body1" paragraph>
            The software architecture of Bitcoin is different - it is secure yet transparent. It is
            common to describe software architecture - lines of computer code that call on each
            other - as a collection of layers. We will follow that practice here. The base layer of
            Bitcoin is called blockchain, a word you may have heard many times but might not be
            quite sure what it is. You will know exactly what it is very soon.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default GoldToBitcoin;
