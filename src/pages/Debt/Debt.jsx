import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const Debt = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, mt: 5, borderRadius: 2, bgcolor: "#f5f5f5" }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
          Debt as money
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" paragraph>
            The US dollar is currently the most widely used money in transactions involving goods
            and services around the world. Let’s take a look at a US dollar bill. On the front of it
            we will find the following words: “This note is legal tender for all debts, public or
            private.” Notice that it says ‘debts’. There is no mention of transactions involving
            goods or services, only debts. Have you wondered why? How did these words get there?
          </Typography>
          <Typography variant="body1" paragraph>
            Let’s start with what debt is. Debt can be defined as something owed. Remember that clay
            or papyrus record? It represents something owed - a certain number of your sacks of
            wheat stored in a keep that can be collected by you in the future. It is owed to you. It
            is also called a liability for the storage place - an obligation that they are liable
            for.
          </Typography>
          <Typography variant="body1" paragraph>
            When you are placing your wheat in someone’s keep, you will need to agree with them on
            how their obligation to you will be extinguished. Do they have to return (or tender)
            back to you the exact sacks of wheat you’ve placed there or can they return an
            equivalent amount of wheat by weight or can they give you something else in return? What
            is considered to be legal for them to tender back to you in order to extinguish their
            debt?
          </Typography>
          <Typography variant="body1" paragraph>
            The front of a US dollar bill states that it is legal to tender it as a note to
            extinguish any debt equal to the monetary denomination printed on it. If the bill’s
            denomination is equal to 10 US dollars, it can be tendered to extinguish 10 US dollars
            worth of any debt, be it private or public. It is legal in the United States only, of
            course. Your possession of a 10 US dollar bill outside of the US does not guarantee that
            it can be legally tendered to extinguish your debt there.
          </Typography>
          <Typography variant="body1" paragraph>
            The US dollar bill you are looking at is a direct descendant of the United States note
            originally issued in 1862. These notes were issued by the US Treasury to pay for the
            Union’s (North) war effort against the Confederacy (South) during the American Civil
            War. The original US note was a form of US government debt that was neither backed by
            gold nor offered any interest to its holders. According to its most ardent proponent,
            its issuance was “a war measure, a measure of necessity, and not of choice.” The US
            note, in the words of the same person, “is the people's loan to the Government, and the
            most popular mode of borrowing ever adopted by any Government.” However, “[t]his kind of
            loan is so popular with the people, and being without interest, is so advantageous to
            the Government, it is desirable that it should be extended as far as it can be done
            safely, and without unduly stimulating speculations to such an extent as to cause an
            unfavorable reaction to the legitimate business of the country.”{" "}
          </Typography>
          <Typography variant="body1" paragraph>
            The North won the war against the South and the US notes became legal tender across the
            unified country. Even more magically, the legal tender value assigned to a 10 US dollar
            bill is well in excess of 5.5 cents that it currently costs to make a 10-dollar bill.
            This difference is called seignorage. So, the US government issued an interest-free
            loan, did not have it backed by anything, valued it well in excess of the cost of
            issuance - and saw it somehow become ‘so popular with the people’ around the world, even
            in places where its legal tender property is not recognized. How?
          </Typography>
          <Typography variant="body1" paragraph>
            We will come back to that later in the book but for now let’s return to the ancient
            world where the earliest recorded forms of money and debt were being used in Egypt, the
            Greek islands, Babylonia, Anatolia and Canaan until about 1200 BCE. Then something
            really bad happened. There is no consensus on what it was - a massive drought, a huge
            volcanic eruption, an earthquake or a pandemic have been mentioned among others - but
            all sophisticated civilizations in that area suddenly collapsed. Cities and towns
            disappeared, some of them forever, temples were abandoned, trade stopped, people forgot
            how to use the accounting language. Most people forgot how to read and write altogether.
            Their mental time travel became very short - to survive another day and then a night.
            And for a long time they forgot about the money in any form.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Debt;
