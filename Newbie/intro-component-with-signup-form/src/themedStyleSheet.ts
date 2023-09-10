import { createTheme } from "@mui/material";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

//? module augmentation
interface customPaletteColorOptions {
  backgroundAndErrorText?: string;
  captionTextAndFormBackground?: string;
  bannerAndFormActiveBorder?: string;
  button?: string;
  formBackground?: string;
  formText?: string;
  formInActiveBorder?: string;
}

interface customPaletteColor {
  backgroundAndErrorText: string;
  captionTextAndFormBackground: string;
  bannerAndFormActiveBorder: string;
  button: string;
  formBackground: string;
  formText: string;
  formInActiveBorder: string;
}

declare module "@mui/material" {
  interface Palette {
    custom: customPaletteColor;
  }
  interface PaletteOptions {
    custom: customPaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    custom: {
      backgroundAndErrorText: "hsl(0, 100%, 74%)",
      captionTextAndFormBackground: "hsl(100, 100%, 100%)",
      bannerAndFormActiveBorder: "hsl(248, 32%, 49%)",
      button: "hsl(154, 59%, 51%)",
      formBackground: "hsl(100, 100%, 100%)",
      formText: "hsl(249, 10%, 26%)",
      formInActiveBorder: "rgba(185, 182, 211, 0.7)",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: {
            itemID: "form-field",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              borderColor: theme.palette.custom.formInActiveBorder,
              height: "3.5rem",
              "&.MuiFormControl-root": {
                width: "100%",
              },
              "& .MuiFormHelperText-root, & .MuiFormHelperText-root.Mui-error":
                {
                  color: theme.palette.custom.backgroundAndErrorText,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontStyle: "italic",
                  textAlign: "end",
                  marginRight: "0.5rem",
                  fontSize: "0.6rem",
                },
              "& fieldset, &": {
                transition: "all 0.1s ease",
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor:
                  theme.palette.custom.captionTextAndFormBackground,
                "& fieldset, &:hover fieldset": {
                  borderColor: theme.palette.custom.formInActiveBorder,
                  borderRadius: "0.25rem",
                  borderWidth: "0.1rem",
                },
                "&.Mui-focused fieldset": {
                  borderWidth: "0.1rem",
                  borderColor: theme.palette.custom.bannerAndFormActiveBorder,
                },
                "&.Mui-error fieldset, &.Mui-error:hover fieldset": {
                  borderColor: theme.palette.custom.backgroundAndErrorText,
                  borderRadius: "0.25rem",
                  borderWidth: "0.1rem",
                },
                "&.Mui-focused.Mui-error fieldset": {
                  borderWidth: "0.1rem",
                  borderColor: theme.palette.custom.backgroundAndErrorText,
                },
                "& input": {
                  width: "100%",
                  fontFamily: "Poppins",
                  caretColor: theme.palette.custom.bannerAndFormActiveBorder,
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  opacity: 0.9,
                  color: theme.palette.custom.formText,
                  "&::placeholder": {
                    opacity: 0.8,
                  },
                },
                "&.Mui-error input": {
                  color: theme.palette.custom.backgroundAndErrorText,
                  "&::placeholder": {
                    color: theme.palette.custom.formText,
                  },
                },
              },
            });
          },
        },
      ],
    },
    MuiSvgIcon: {
      variants: [
        {
          props: {
            id: "form-error-icon",
          },
          style: {
            position: "absolute",
            transition: "opacity 0.5s ease",
            right: "0.7rem",
            zIndex: 1,
            transform: "translate(-50%, -50%)",
          },
        },
      ],
    },
    MuiStack: {
      variants: [
        {
          props: {
            id: "root-stack",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              width: "75%",
              minHeight: "100vh",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              [theme.breakpoints.up("xl")]: {
                width: "75%",
              },
              [theme.breakpoints.up("lg")]: {
                width: "90%",
              },
              [theme.breakpoints.up("md")]: {
                width: "90%",
              },
              [theme.breakpoints.down("md")]: {
                width: "90%",
                height: "100%",
                flexDirection: "column",
              },
            });
          },
        },
        {
          props: {
            id: "form-stack",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              width: "90%",
              height: "55vh",
              borderRadius: "0.5rem",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "2rem",
              boxShadow: "0px 8px rgba(0, 0, 0, 0.25)",
              bgcolor: theme.palette.custom.captionTextAndFormBackground,
              [theme.breakpoints.down("md")]: {
                width: "95%",
                minHeight: "50vh",
                height: "unset",
                py: "1rem",
                px: "1rem",
              },
            });
          },
        },
        {
          props: {
            id: "form-wrapping-stack",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              width: "50%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              [theme.breakpoints.down("md")]: {
                width: "100%",
                height: "70%",
              },
            });
          },
        },
        {
          props: {
            id: "typography-stack",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              width: "50%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              [theme.breakpoints.down("md")]: {
                width: "90%",
                height: "30%",
              },
            });
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: {
            id: "form-button",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              width: "100%",
              height: "3.5rem",
              fontWeight: "600",
              color: theme.palette.custom.captionTextAndFormBackground,
              bgcolor: theme.palette.custom.button,
              "&:hover": {
                color: theme.palette.custom.captionTextAndFormBackground,
                bgcolor: theme.palette.custom.button,
                boxShadow: "0px -4px rgba(0, 0, 0, 0.25) inset",
              },
              boxShadow: "0px -4px rgba(0, 0, 0, 0.25) inset",
              marginBottom: "0.5rem",
            });
          },
        },
        {
          props: {
            id: "try-it-button",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              width: "90%",
              height: "3.5rem",
              fontWeight: "600",
              marginBottom: "1.5rem",
              color: theme.palette.custom.captionTextAndFormBackground,
              bgcolor: theme.palette.custom.bannerAndFormActiveBorder,
              "&:hover": {
                color: theme.palette.custom.captionTextAndFormBackground,
                bgcolor: theme.palette.custom.bannerAndFormActiveBorder,
                boxShadow: "0px 5px rgba(0, 0, 0, 0.25)",
              },
              boxShadow: "0px 5px rgba(0, 0, 0, 0.25)",
              "& span": {
                fontSize: "0.9rem",
                display: "inline",
                textTransform: "none",
                fontWeight: "300",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.8rem",
                },
              },
              "& span b": {
                fontWeight: "600",
              },

              [theme.breakpoints.down("md")]: {
                width: "95%",
                height: "4rem",
              },
            });
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => {
          return theme.unstable_sx({
            [theme.breakpoints.up("sm")]: {
              paddingLeft: 0,
              paddingRight: 0,
            },
            [theme.breakpoints.down("sm")]: {
              paddingLeft: 0,
              paddingRight: 0,
            },
          });
        },
      },
      variants: [
        {
          props: {
            id: "root",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              [theme.breakpoints.up("md")]: {
                maxWidth: "100vw",
                backgroundImage: `url("./bg-intro-desktop.png")`,
              },
              backgroundColor: theme.palette.custom.backgroundAndErrorText,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100vw",
              [theme.breakpoints.down("md")]: {
                py: "1.5rem",
                backgroundImage: `url("./bg-intro-mobile.png")`,
              },
            });
          },
        },
        {
          props: {
            itemID: "text-field-container",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              width: "100%",
              position: "relative",
              marginBottom: "1rem",
            });
          },
        },
      ],
    },
  },
});
theme.typography.h1 = {
  fontFamily: "Poppins",
  width: "100%",
  fontWeight: "600",
  fontSize: "3rem",
  color: theme.palette.custom.captionTextAndFormBackground,
  marginBottom: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};
theme.typography.subtitle1 = {
  fontFamily: "Poppins",
  width: "100%",
  fontWeight: "300",
  fontSize: "1rem",
  color: theme.palette.custom.captionTextAndFormBackground,
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
};
theme.typography.overline = {
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "0.6rem",
  textTransform: "none",
  display: "inline",
  textAlign: "center",
  "& span:first-of-type": {
    color: theme.palette.custom.formInActiveBorder,
  },
  "& span:last-of-type": {
    cursor: "pointer",
    color: theme.palette.custom.backgroundAndErrorText,
  },
};

export default theme;
