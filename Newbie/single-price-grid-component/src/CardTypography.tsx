import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const CardTypography = () => {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack id="card-typography" className="grid-element">
      <Typography variant="h1">Join our community</Typography>
      <Typography variant="subtitle">
        30-day, hassle-free money back guarantee
      </Typography>
      <Typography variant="description">
        Gain access to our full library of tutorials along with expert code
        reviews. {!breakpoint && <br />}Perfect for any developers who are
        serious about honing their skills.
      </Typography>
    </Stack>
  );
};

export default CardTypography;
