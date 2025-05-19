import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import TypographyStylePage from "../../components/TypographyStylePage/TypographyStylePage";
import GoBack from "../../components/GoBack/GoBack";
const MonetarySystem = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
        Money is Software: Monetary system
      </Typography>
      <Box sx={{ mt: 3 }}>
        <TypographyStylePage>
          This sad period lasted for about 400 years. Then, gradually, some of the places in and
          around what is now Greece and coastal areas of the Aegean sea became inhabited again.
          Settlements formed, then villages, then towns. Specialization - in wine, olive oil,
          pottery, tools, jewlery - became common due to differences in soils, minerals, water,
          landscape and climate. Trade started again. City states were formed. The Greeks have
          acquired their own 24 letter alphabet, which helped forge a common identity. People spoke
          and wrote in a common language, ate very similar food, wore very similar clothes, competed
          in the same sports, and believed in the same gods, but different city states also
          developed their own politics, economy, and trade. And these were often very different.
        </TypographyStylePage>
        <TypographyStylePage>
          The Greeks also traded internationally - especially with the Persians, who were very
          different from the Greeks. They spoke a different language, had a different way of
          writing, dressed in different clothes, and prayed to different gods. That made it hard for
          the Greeks and the Persians to trade with each other but not impossible. For centuries,
          especially for international trade, it was common to use gold or silver as a common
          currency. Gold and silver are durable, could be quickly hidden, hard to counterfeit, and
          easy to verify without a common language. Metals simply need to be weighted, assuming the
          scales are correct.
        </TypographyStylePage>
        <TypographyStylePage>
          One of the city states called Lydia was conveniently located in the middle of the trade
          routes between the seafaring Greeks and the land-dwelling Persians. In around 600 BCE, the
          Lydians came up with a big innovation. They started minting a standardized unit of
          currency from a naturally formed alloy of silver and gold. The alloy, called the electrum,
          had relatively stable proportions of gold and silver. The Lydians started minting
          bean-shaped coins of about equal weight - defined as 220 grains of wheat - and with a
          stable consistency of gold and silver. To certify quality, they pressed an image of a lion
          on each coin. The image of a lion also came with a promise that this standardized piece of
          metal called a stater will be accepted by the Lydians as an official “state” means of
          payment.
        </TypographyStylePage>
        <TypographyStylePage>
          The Lydian stater was standardized, so it did not need to be weighted or verified anymore;
          just counted. Its acceptance was guaranteed. And it was used for international trade,
          irrespective of the language, culture, beliefs or politics.
        </TypographyStylePage>
        <TypographyStylePage>
          With that the era of modern money has began. The old money represented recorded claims on
          something needed now or in the future like sacks of wheat. The new metal money was just
          money. These coins were not claims on anything. Each one of them only promised to be of
          the same weight and with the same standardized proportions of gold and silver as any
          other. Also, rather than relying on the natural, but not always consistent electrum alloy,
          soon pure gold and silver slaters were minted with their weights in stable proportions.
          That made any two slater coins equal in value yesterday, today, tomorrow or many days
          later. Also, a one-third of any slater coin was equal to a one-third of any other slater
          coin, as well as any eight one-twenty fourths slater coins. This characteristic known as
          fungibility made it possible to use stater coins in various denominations as a common
          medium to transfer value from the past to the present and from the present to the future.
        </TypographyStylePage>
        <TypographyStylePage>
          The Greeks now had a common way to keep records using their own alphabet and a common way
          to transfer value across time using their stater coins. And with that, they created the
          first monetary system.
        </TypographyStylePage>
        <TypographyStylePage>
          This innovation led to great changes. The Lydians were supposedly the first to have
          permanent retail shops. Soon permanent marketplaces were established in Greek city states.
          Merchants no longer needed to search for customers and customers no longer needed to
          search for a merchant with a specific merchandise. Customers came to marketplaces and
          found merchants in same places and willing to trade during the same certain time. This
          solved the so-called costly search problem. Because merchants were located in a commonly
          known place and were open during the same hours, total available supply and demand could
          be determined, which made it possible to come up with market-clearing prices for each good
          or service, as well as relative prices across goods. Anything could be traded for anything
          else. Soldiers could be paid in coins rather than loot. Workers could be paid in coins
          rather than food. City states with higher wages attracted immigrants. Ventures that
          promised to yield more coins attracted adventurers. Money was a part of a system.
        </TypographyStylePage>
        <TypographyStylePage>
          Around 550 BCE, Lydia was annexed by Persia giving rise a fundamental conflict between the
          freedom-loving Greeks and the authority-abiding Persians.
        </TypographyStylePage>
        <GoBack />
      </Box>
    </Container>
  );
};

export default MonetarySystem;
