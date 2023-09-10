import {
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import desktopImage from "./image-product-desktop.jpg";
import mobileImage from "./image-product-mobile.jpg";
import { ShoppingCartOutlined } from "@mui/icons-material";

function App() {
  const theme = useTheme();
  const breakpoint = theme.breakpoints.down("sm");
  const mediaQuery = useMediaQuery(breakpoint);
  return (
    <Container id="app-container">
      <Stack id="app-card" direction={mediaQuery ? "column" : "row"}>
        <img
          src={mediaQuery ? mobileImage : desktopImage}
          alt="product preview"
        />
        <Stack id="content">
          <Typography variant="productType">Perfume</Typography>
          <Typography variant="h1">
            Gabrielle {!mediaQuery && <br />} Essence {mediaQuery && <br />} Eau
            &nbsp;
            {!mediaQuery && <br />}De Parfum
          </Typography>
          <Typography variant="body">
            A floral, solar and voluptuous <br /> interpretation composed by{" "}
            {!mediaQuery && <br />}Olivier{mediaQuery && <br />} Polge,
            Perfumer-Creator{!mediaQuery && <br />} for the House of
            {mediaQuery && <br />} CHANEL.
          </Typography>
          <Stack direction="row">
            <Typography variant="price">$149.99</Typography>
            <Typography variant="priceDrop">$169.99</Typography>
          </Stack>
          <Button startIcon={<SvgIcon component={ShoppingCartOutlined} />}>
            <Typography variant="button">Add to Cart</Typography>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
