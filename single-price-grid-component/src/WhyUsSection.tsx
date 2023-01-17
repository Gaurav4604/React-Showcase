import { Stack, Typography } from "@mui/material";

const WhyUsSection = () => {
  return (
    <Stack id="why-us" className="grid-element">
      <Typography variant="whyUs">Why Us</Typography>
      <Stack>
        <Typography variant="whyUsLinks">
          Tutorials by industry experts
        </Typography>
        <Typography variant="whyUsLinks">
          Peer &amp; expert code review
        </Typography>
        <Typography variant="whyUsLinks">Coding exercises</Typography>
        <Typography variant="whyUsLinks">Access to our GitHub repos</Typography>
        <Typography variant="whyUsLinks">Community forum</Typography>
        <Typography variant="whyUsLinks">Flashcard decks</Typography>
        <Typography variant="whyUsLinks">New videos every week</Typography>
      </Stack>
    </Stack>
  );
};

export default WhyUsSection;
