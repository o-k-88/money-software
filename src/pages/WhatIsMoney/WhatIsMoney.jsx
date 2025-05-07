import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

import TypographyStylePage from "../../components/TypographyStylePage/TypographyStylePage";

const WhatIsMoney = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
        What is money
      </Typography>
      <Box sx={{ mt: 3 }}>
        <TypographyStylePage>
          Money is really any medium that is commonly accepted to transfer value from the past to
          the present and from the present to the future. This medium can be tangible - something
          that you can see and feel - like metal or paper or plastic. Or intangible - something that
          human senses cannot process - like an encrypted piece of computer code.
        </TypographyStylePage>
        <TypographyStylePage>What do humans need money for?</TypographyStylePage>
        <TypographyStylePage>
          To exchange for something of need or importance to them now or to set aside for something
          of need or importance to them later. See, it’s human mental time travel again - from the
          past to the present and from the present to some imagined future.
        </TypographyStylePage>
        <TypographyStylePage>
          Some of what is considered to be of need or importance to humans stayed the same for
          millennia and some changed a lot.
        </TypographyStylePage>
        <TypographyStylePage>
          What stayed the same is commonly referred to as death and taxes. I would also add weddings
          and debt to that.
        </TypographyStylePage>
        <TypographyStylePage>
          Why death? From time immemorial, crimes of violence, especially if they resulted in the
          death of a human had be settled in a form that satisfied the aggrieved family that lost a
          valuable member by the family of the criminal. This type of payment was used to stop feuds
          between families or clans that otherwise could go forever and greatly weaken both
          families. Written laws for these types of payments sometimes known as “blood money” have
          been found in a lot of human civilizations - from Mesopotamia, to ancient Germany, to the
          Pacific Coast of North America to the present where they are called “wrongful death
          settlements.”
        </TypographyStylePage>
        <TypographyStylePage>
          Wedding payments, which also have been around since time immemorial and continue in many
          civilisations to this day, represent the payment for a more happy occasion. But, since
          they are viewed as a loss of a family member by one family and a gain of a family member
          by the other family, they too require a payment from the gaining to the losing side. In
          some societies, the gaining family is the groom’s family, while in others, it is the
          bride’s family - and the direction of payment is arranged accordingly. In accordance with
          ancient customs, to this day neither wrongful death settlements nor wedding gifts are
          taxable, which brings us to taxes.
        </TypographyStylePage>
        <TypographyStylePage>
          What about taxes? Taxes generally pay for some sort of service delivered or promised to be
          delivered in the future by those who collect tax revenues now. One of the most important
          services was, is, and will continue to be is called “security.” Security from the enemies
          foreign and domestic is typically delivered by those who are willing and able to withstand
          violence - from chiefs and warlords to the armies raised by the kings, emperors and nation
          states. Another type of security that for a long time was offered in return for payment
          was delivered by the priests. In return for a sacrifice now, the priests promised to
          deliver spiritual protection and even a particular kind of afterlife in the future.
        </TypographyStylePage>
        <TypographyStylePage>
          Priests and kings collected taxes mostly in kind and they needed large and strong
          buildings to store what they’ve collected. These buildings were often large enough to
          provide secure storage facilities for grains and other storable commodities. Earliest
          forms of banking seem to have originated in and around palaces and temples that were used
          for storage. What was stored was recorded on a separate medium such as clay tablets or
          papyrus sheets. The possessor of that record could come back to the storage facility in
          the future and claim the stored commodity minus taxes and fees. The possessor did not have
          to be the original owner of the commodity - and with that the era of banking and credit
          has began.
        </TypographyStylePage>
      </Box>
    </Container>
  );
};

export default WhatIsMoney;
