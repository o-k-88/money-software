import React from "react";
import { Box, Container } from "@mui/material";
import CustomSlider from "../../components/Carousel/CustomSlider";
import { REVIEWS } from "../../helpers/reviews";

const Reviews = () => {
  return (
    <Box component="section" id="reviews" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        <CustomSlider feedbacks={REVIEWS} />
      </Container>
    </Box>
  );
};

export default Reviews;
