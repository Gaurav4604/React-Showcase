import {
  Avatar,
  Container,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import "@fontsource/league-spartan/500.css";
import "@fontsource/league-spartan/400.css";

const profileTheme = createTheme({
  palette: {
    custom: {
      white: "#fff",
      softPink: "hsl(333, 80%, 67%)",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            [theme.breakpoints.down("md")]: {
              p: 0,
              m: 0,
            },
            [theme.breakpoints.up("md")]: {
              p: 0,
              m: 0,
            },
            width: "10rem",
            display: "grid",
            gridTemplate: `
            "a b" 1fr
            "a c" 1fr
            `,
            columnGap: "1.5rem",
          }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            gridArea: "a",
            alignSelf: "center",
            height: "2.3rem",
            width: "2.3rem",
            marginBottom: "0.2rem",
          }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            fontSize: "0.95rem",
            width: "6rem",
            height: "0.95rem",
            alignSelf: "center",
            fontFamily: "League Spartan",
            verticalAlign: "center",
          }),
      },
      variants: [
        {
          props: {
            variant: "profileName",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              fontWeight: "700",
              gridArea: "b",
              color: theme.palette.custom?.white,
            }),
        },
        {
          props: {
            variant: "profileVerified",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              fontWeight: "400",
              gridArea: "c",
              color: theme.palette.custom?.softPink,
            }),
        },
      ],
    },
  },
});

type ProfileProps = {
  name: string;
  verified: boolean;
  avatar: string;
};

const Profile = (props: ProfileProps) => {
  return (
    <ThemeProvider theme={profileTheme}>
      <Container>
        <Avatar src={props.avatar} />
        <Typography variant="profileName">Colton Smith</Typography>
        <Typography variant="profileVerified">Verified Buyer</Typography>
      </Container>
    </ThemeProvider>
  );
};

const reviewCardTheme = createTheme({
  palette: {
    custom: {
      veryDarkMagenta: "hsl(300, 43%, 22%)",
      white: "#fff",
    },
  },
  components: {
    MuiStack: {
      variants: [
        {
          props: {},
          style: ({ theme }) =>
            theme.unstable_sx({
              height: "14rem",
              width: "22.5rem",
              maxWidth: "90vw",
              borderRadius: "0.5rem",
              py: "2rem",
              px: "1.8rem",
              bgcolor: theme.palette.custom?.veryDarkMagenta,
              alignItems: "flex-start",
              justifyContent: "space-between",
            }),
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            fontFamily: "League Spartan",
            fontWeight: "400",
            color: theme.palette.custom?.white,
            height: "55%",
            width: "100%",
            fontSize: "1rem",
            [theme.breakpoints.down("sm")]: {
              fontSize: "0.9rem",
            },
          }),
      },
    },
  },
});

type Props = {
  name: string;
  verified: boolean;
  avatar: string;
  comment: string;
};

const ReviewCard = (props: Props) => {
  return (
    <ThemeProvider theme={reviewCardTheme}>
      <Stack>
        <Profile {...props} />
        <Typography>" {props.comment} "</Typography>
      </Stack>
    </ThemeProvider>
  );
};

export default ReviewCard;
