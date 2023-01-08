import { Stack, Typography } from "@mui/material";

const TypographySection = () => {
  return (
    <Stack id="typography-stack">
      <Typography variant="h1">
        Learn to code by
        <br /> watching others
      </Typography>
      <Typography variant="subtitle1">
        See how experienced developers solve problems in real-time.
        <br />
        Watching scripted tutorials is great, but understanding how
        <br /> developers think is invaluable.
      </Typography>
    </Stack>
  );
};

export default TypographySection;
