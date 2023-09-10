import { Button, Stack, Typography } from "@mui/material";

const PricingSection = () => {
  return (
    <Stack id="pricing" className="grid-element">
      <Typography variant="priceTitle">Monthly Subscription</Typography>
      <Stack direction="row" alignItems="center">
        <Typography variant="price">$29</Typography>
        <Typography variant="priceDescription">per month</Typography>
      </Stack>
      <Typography variant="priceSubtitle">
        Full access for less than 1$ a day
      </Typography>
      <Button>Sign Up</Button>
    </Stack>
  );
};

export default PricingSection;
