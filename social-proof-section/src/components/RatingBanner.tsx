import {
  Icon,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import "@fontsource/league-spartan/700.css";
import { StarRounded } from "@mui/icons-material";
type Props = {};

const bannerTheme = createTheme({
  palette: {
    custom: {
      lightGrayishMagenta: "hsl(300, 24%, 96%)",
      veryDarkMagenta: "hsl(300, 43%, 22%)",
      yellow: "#EF9546",
    },
  },

  components: {
    MuiStack: {
      variants: [
        {
          props: {
            className: "rating-banner",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              bgcolor: theme.palette.custom?.lightGrayishMagenta,
              height: "3.5rem",
              width: "35vw",
              borderRadius: "0.2rem",
              px: "2.5rem",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }),
        },
        {
          props: {
            className: "rating",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "35%",
              height: "100%",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "row",
            }),
        },
        {
          props: {
            className: "rating-typography",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "60%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }),
        },
      ],
    },
    MuiIcon: {
      variants: [
        {
          props: {
            className: "visible",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              color: theme.palette.custom?.yellow,
            }),
        },
        {
          props: {
            className: "invisible",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              color: "transparent",
            }),
        },
      ],
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          rating: "h3",
        },
      },
      variants: [
        {
          props: {
            variant: "rating",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              fontFamily: "League Spartan",
              fontSize: "1.1rem",
              width: "100%",
              color: theme.palette.custom?.veryDarkMagenta,
            }),
        },
      ],
    },
  },
});

const generateStars = (quantity: number) => {
  const iconArray = [];
  for (let i = 1; i <= 5; i++) {
    i <= quantity
      ? iconArray.push(
          <Icon component={StarRounded} key={i} className="visible" />
        )
      : iconArray.push(
          <Icon component={StarRounded} key={i} className="invisible" />
        );
  }
  return iconArray;
};

const RatingBanner = (props: Props) => {
  return (
    <ThemeProvider theme={bannerTheme}>
      <Stack className="rating-banner">
        <Stack className="rating">{generateStars(5)}</Stack>
        <Stack className="rating-typography">
          <Typography variant="rating">Rated 5 Stars in Reviews</Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default RatingBanner;
