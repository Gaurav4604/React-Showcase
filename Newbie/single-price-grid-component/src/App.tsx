import { Container } from "@mui/material";
import CardTypography from "./CardTypography";
import WhyUsSection from "./WhyUsSection";
import PricingSection from "./PricingSection";

function App() {
  return (
    <Container id="app-root">
      <Container id="card-grid">
        <CardTypography />
        <PricingSection />
        <WhyUsSection />
      </Container>
    </Container>
  );
}

export default App;
