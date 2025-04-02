import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const Preface = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, mt: 5, borderRadius: 2, bgcolor: "#f5f5f5" }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
          Preface
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" paragraph>
            Take a moment and mentally picture money. Your mental image probably looks like a
            colorful piece of paper or a metal disk or a rectangular piece of plastic. Now that you
            have a mental image of money, can you imagine using it? Most anything you want to do
            with your money these days—pay, transfer, invest—involves computers.
          </Typography>
          <Typography variant="body1" paragraph>
            To understand money, computers need software—instructions that tell a computer what to
            do. Money is somewhere in that software. Where? Who puts it there? Can money be taken
            out of the software and placed somewhere else? What’s left in the software once you take
            money out? Can software make more money?
          </Typography>
          <Typography variant="body1" paragraph>
            Money existed well before computers and software. It is a unique human invention. What
            does it mean to be human? It has been argued—and I quote—that “the ability to travel
            mentally in time constitutes a discontinuity between humans and other animals.”
          </Typography>
          <Typography variant="body1" paragraph>
            When I asked you to picture and use money, you’ve traveled mentally first to the past
            then into the future. It was quite easy for you to do that. Apparently, animals are not
            able do that—not so effortlessly or consistently, anyway. Animals do not have money
            either. Humans have domesticated some animals millennia ago. Yet, after living side by
            side with the humans for that long, no animal seems to have become aware of money.
          </Typography>
          <Typography variant="body1" paragraph>
            Computer software, however, does have an ability to generate artificial versions of both
            the past and the future—to travel in time. Time travel is not yet nearly costless for
            computers like it is for humans, but it is rapidly going that way.
          </Typography>
          <Typography variant="body1" paragraph>
            Have you noticed that the most valuable companies in the world are software companies?
            These software companies have been offering you their versions of AI. AI enables
            computers to write and re-write their own software. You might not know it yet, but
            computers already do create and manage some of their own software money.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
            This book will help you become aware of the biggest creation and transformation of
            wealth in modern times—one where the future is dictated by lines of code. It will also
            help you not to be left behind.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Preface;
