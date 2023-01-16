import { createTheme } from "@mui/material";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/700.css";

const theme = createTheme({
  palette: {
    custom: {
      veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
      desaturatedDarkBlue: "hsl(214, 17%, 51%)",
      grayishBlue: "hsl(212, 23%, 69%)",
      lightGrayishBlue: "hsl(210, 46%, 95%)",
      white: "hsl(0, 100%, 100%)",
    },
  },
  typography: (palette) => {
    return {
      name: {
        color: palette.custom.veryDarkGrayishBlue,
        fontFamily: "Manrope",
        fontSize: "0.9rem",
        fontWeight: "700",
      },
      date: {
        color: palette.custom.grayishBlue,
        fontFamily: "Manrope",
        fontSize: "0.85rem",
        fontWeight: "500",
      },
    };
  },
  components: {
    MuiContainer: {
      variants: [
        {
          props: {
            id: "app-root",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: theme.palette.custom.lightGrayishBlue,
              [theme.breakpoints.up("md")]: {
                maxWidth: "100vw",
                p: 0,
              },
              [theme.breakpoints.down("md")]: {
                maxWidth: "100vw",
                p: 0,
              },
              [theme.breakpoints.down("sm")]: {
                maxWidth: "100vw",
                p: 0,
              },
            }),
        },
        {
          props: {
            id: "profile-container",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              height: "100%",
              position: "relative",
              [theme.breakpoints.up("md")]: {
                maxWidth: "100vw",
                p: 0,
                m: 0,
              },
              [theme.breakpoints.down("md")]: {
                maxWidth: "100vw",
                p: 0,
                m: 0,
              },
              [theme.breakpoints.down("sm")]: {
                maxWidth: "100vw",
                p: 0,
                m: 0,
              },
            }),
        },
      ],
    },
    MuiStack: {
      variants: [
        {
          props: {
            id: "app-card",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: "1rem",
              width: "80%",
              height: "20rem",
              maxWidth: "800px",
              overflow: "hidden",
              bgcolor: theme.palette.custom.white,
              boxShadow:
                "0px 20px 5px" + theme.palette.custom.veryDarkGrayishBlue,
              flexDirection: "row",
              "& img": {
                height: "100%",
                width: "40%",
                objectPosition: "0 0",
                objectFit: "cover",
              },
              [theme.breakpoints.down("md")]: {
                height: "90%",
                width: "95%",
                flexDirection: "column",
                "& img": {
                  height: "40%",
                  width: "100%",
                },
              },
            }),
        },
        {
          props: {
            id: "typography-section",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "100%",
              height: "100%",
              p: "2rem",
              justifyContent: "space-between",
              [theme.breakpoints.down("md")]: {
                p: 0,
                paddingTop: "3.5rem",
                paddingBottom: 0,
              },
            }),
        },
        {
          props: {
            id: "profile-socials",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              height: "4rem",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              "& #profile-info": {
                marginLeft: "0.5rem",
                alignItems: "flex-start",
                justifyContent: "space-evenly",
              },
              [theme.breakpoints.down("md")]: {
                height: "6rem",
                px: "2rem",
                transition: "all 0.5s ease",
                "&.popover-open": {
                  bgcolor: theme.palette.custom.veryDarkGrayishBlue,
                },
              },
            }),
        },
        {
          props: {
            id: "profile-details",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              [theme.breakpoints.down("md")]: {
                position: "absolute",
                transform: "translate(0%, -50%)",
                zIndex: 1,
              },
            }),
        },
        {
          props: {
            id: "socials-container",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              width: "16.5rem",
              height: "3.5rem",
              borderRadius: "0.8rem",
              bgcolor: theme.palette.custom.veryDarkGrayishBlue,
              px: "2.5rem",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              "& .MuiSvgIcon-root": {
                color: theme.palette.custom.lightGrayishBlue,
              },
              [theme.breakpoints.down("md")]: {
                position: "absolute",
                transform: "translate(0%, -50%)",
                zIndex: 2,
                opacity: 0,
                px: "1rem",
                transition: "all 0.5s ease",
                bgcolor: theme.palette.custom.lightGrayishBlue,
                width: "60vw",
                "&.popover-open": {
                  opacity: 1,
                  bgcolor: theme.palette.custom.veryDarkGrayishBlue,
                },
                "& .MuiIconButton": {
                  height: "2.5rem",
                  width: "2.5rem",
                  marginLeft: "1rem",
                },
                "& .MuiSvgIcon-root": {
                  height: "2rem",
                  width: "2rem",
                },
              },
            }),
        },
      ],
    },
    MuiPopover: {
      variants: [
        {
          props: {
            id: "tooltip",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              "& .MuiPopover-paper": {
                overflow: "visible",
                borderRadius: "0.8rem",
                boxShadow:
                  "0px 20px 5px" + theme.palette.custom.veryDarkGrayishBlue,
              },
              "& .MuiPopover-paper::after": {
                content: "' '",
                position: "absolute",
                top: "100%",
                left: "50%",
                marginLeft: "-0.65rem",
                borderWidth: "0.65rem",
                borderStyle: "solid",
                zIndex: 1000,
                borderColor:
                  theme.palette.custom.veryDarkGrayishBlue +
                  " transparent transparent transparent",
              },
            }),
        },
      ],
    },
    MuiAvatar: {
      variants: [
        {
          props: {
            id: "avatar",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              height: "3rem",
              width: "3rem",
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "fill",
              },
            }),
        },
      ],
    },
    MuiIconButton: {
      variants: [
        {
          props: {
            id: "share",
          },
          style: ({ theme }) =>
            theme.unstable_sx({
              bgcolor: theme.palette.custom.lightGrayishBlue,
              color: theme.palette.custom.veryDarkGrayishBlue,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.5s ease",
              "&:hover": {
                bgcolor: theme.palette.custom.veryDarkGrayishBlue,
                color: theme.palette.custom.white,
              },
              "&.popover-open": {
                bgcolor: theme.palette.custom.desaturatedDarkBlue,
                color: theme.palette.custom.white,
              },
              "& .MuiSvgIcon-root": {
                transform: "scaleX(-1)",
              },
            }),
        },
      ],
    },
  },
});

theme.typography.articleTitle = {
  fontFamily: "Manrope",
  color: theme.palette.custom.veryDarkGrayishBlue,
  fontWeight: "700",
  fontSize: "1.15rem",
  lineHeight: "1.75rem",
  [theme.breakpoints.down("md")]: theme.unstable_sx({
    mx: "2rem",
    fontSize: "1.2rem",
  }),
};

theme.typography.articleBody = {
  fontFamily: "Manrope",
  fontWeight: "500",
  color: theme.palette.custom.desaturatedDarkBlue,
  fontSize: "0.85rem",
  lineHeight: "1.4rem",
  [theme.breakpoints.down("md")]: theme.unstable_sx({
    mx: "2rem",
    fontSize: "0.9rem",
  }),
};

theme.typography.popOverText = {
  color: theme.palette.custom.lightGrayishBlue,
  fontFamily: "Manrope",
  fontWeight: "300",
  fontSize: "0.8rem",
  textTransform: "uppercase",
  letterSpacing: "0.35rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
};

export default theme;
