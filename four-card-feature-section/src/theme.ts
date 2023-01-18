import { createTheme } from "@mui/material";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

const theme = createTheme({
  palette: {
    custom: {
      red: "hsl(0, 78%, 62%)",
      cyan: "hsl(180, 62%, 55%)",
      orange: "hsl(34, 97%, 64%)",
      blue: "hsl(212, 86%, 64%)",
      veryDarkBlue: "hsl(234, 12%, 34%)",
      grayishBlue: "hsl(229, 6%, 66%)",
      veryLightGray: "hsl(0, 0%, 95%)",
    },
  },
  components: {
    MuiStack: {
      variants: [
        {
          props: {
            id: "app-root",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              minHeight: "100vh",
              width: "100vw",
              px: "2rem",
              py: "3rem",
              alignItems: "center",
              bgcolor: theme.palette.custom.veryLightGray,
              [theme.breakpoints.down("md")]: {
                py: 0,
                pt: "3rem",
              },
            }),
        },
        {
          props: {
            id: "grid-container",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              display: "grid",
              flex: 0.8,
              width: "90%",
              columnGap: "2rem",
              rowGap: "1.5rem",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr 1fr",
              [theme.breakpoints.down("lg")]: {
                width: "100%",
              },
              [theme.breakpoints.down("md")]: {
                width: "90%",
                gridTemplate: "repeat(4, 12rem)/1fr",
                mb: "2rem",
              },
            }),
        },
        {
          props: {
            id: "grid-card",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: "0.5rem",
              overflow: "hidden",
              bgcolor: "white",
              alignItems: "flex-end",
              justifyContent: "space-between",
              width: "100%",
              "& .MuiDivider-root": {
                height: "0.3rem",
                mb: "2rem",
                width: "100%",
                [theme.breakpoints.down("md")]: {
                  mb: "1.2rem",
                },
              },
              "& img": {
                height: "4rem",
                objectFit: "contain",
                mr: "1.5rem",
                mb: "1.5rem",
                [theme.breakpoints.down("md")]: {
                  height: "3rem",
                  mr: "1rem",
                  mb: "1rem",
                },
              },
              boxShadow: "0 10px 10px " + theme.palette.custom.grayishBlue,
            }),
        },
        {
          props: {
            id: "grid-card-typography",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              "& .MuiTypography-root": {
                width: "100%",
                textAlign: "start",
                px: "1.5rem",
              },
            }),
        },
      ],
    },
  },
});

theme.typography.h1 = {
  fontFamily: "Poppins",
  fontWeight: "200",
  fontSize: "2rem",
  marginBottom: "0.2rem",
  color: theme.palette.custom.grayishBlue,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.6rem",
  },
};

theme.typography.subtitle = {
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "2rem",
  marginBottom: "1.2rem",
  color: theme.palette.custom.veryDarkBlue,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.6rem",
    marginBottom: "1.5rem",
  },
};

theme.typography.caption = {
  fontFamily: "Poppins",
  fontWeight: "200",
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: "2rem",
  color: theme.palette.custom.grayishBlue,
  marginBottom: "3rem",
  [theme.breakpoints.down("md")]: {
    lineHeight: "1.5rem",
  },
};

theme.typography.cardTitle = {
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
  color: theme.palette.custom.veryDarkBlue,
};

theme.typography.cardSubtitle = {
  fontFamily: "Poppins",
  fontWeight: "400",
  color: theme.palette.custom.grayishBlue,
  fontSize: "0.9rem",
};

export default theme;
