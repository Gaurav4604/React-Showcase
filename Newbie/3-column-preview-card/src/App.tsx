import {
  createTheme,
  experimental_sx as sx,
  Stack,
  Theme,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import PreviewCard from "./PreviewCard";

const rootTheme = createTheme({
  components: {
    MuiStack: {
      variants: [
        {
          props: {
            id: "app-root",
          },
          style: {
            bgcolor: "hsl(0, 0%, 95%)",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
          },
        },
        {
          props: {
            id: "app-container",
          },
          style: sx((theme: Theme) => {
            return {
              borderRadius: "0.5rem",
              height: "70%",
              maxWidth: "1240px",
              width: "100%",
              flexDirection: "row",
              [theme.breakpoints.down("xl")]: {
                height: "70%",
                width: "80%",
              },
              [theme.breakpoints.down("lg")]: {
                height: "70%",
                width: "90%",
              },
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                height: "90vh",
                width: "95%",
              },
            };
          }),
        },
      ],
    },
  },
});

function App() {
  const theme = useTheme();
  const matcher = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={rootTheme}>
      <Stack id="app-root">
        <Stack id="app-container">
          <PreviewCard
            cardColor="hsl(31, 77%, 52%)"
            iconSrc="icon-sedans.svg"
            title="Sedans"
            body="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
            or on your next road trip."
            borderBottomLeftRadius={matcher ? "" : "0.5rem"}
            borderTopLeftRadius={"0.5rem"}
            borderTopRightRadius={matcher ? "0.5rem" : ""}
          />
          <PreviewCard
            cardColor="hsl(184, 100%, 22%)"
            iconSrc="icon-suv.svg"
            title="SUVs"
            body="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
            and off-road adventures."
          />
          <PreviewCard
            cardColor="hsl(179, 100%, 13%)"
            iconSrc="icon-luxury.svg"
            title="Luxury"
            body="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
            rental and arrive in style."
            borderBottomRightRadius={"0.5rem"}
            borderTopRightRadius={matcher ? "" : "0.5rem"}
            borderBottomLeftRadius={matcher ? "0.5rem" : ""}
          />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
