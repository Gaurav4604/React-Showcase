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
import { TypographyOptions } from "@mui/material/styles/createTypography";

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

export default createTheme({
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
  typography(palette) {
    return {
      allVariants: {
        fontFamily: "Poppins",
      },
      h1: {
        fontWeight: "600",
        fontSize: "4rem",
        color: palette.custom.captionTextAndFormBackground,
        marginBottom: "2rem",
      },
      subtitle1: {
        fontWeight: "300",
        fontSize: "1rem",
        color: palette.custom.captionTextAndFormBackground,
      },
      overline: {
        fontWeight: "600",
        fontSize: "0.6rem",
        textTransform: "none",
        color: palette.custom.formInActiveBorder,
      },
      subtitle2: {
        display: "inline-block",
        fontSize: "0.6rem",
        fontWeight: "700",
        textTransform: "none",
        cursor: "pointer",
        color: palette.custom.backgroundAndErrorText,
      },
    } as TypographyOptions;
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
              marginBottom: "1rem",
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
            id: "form-stack",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              width: "60%",
              height: "50%",
              borderRadius: "0.5rem",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "2rem",
              boxShadow: "0px 8px rgba(0, 0, 0, 0.25)",
              bgcolor: theme.palette.custom.captionTextAndFormBackground,
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
            });
          },
        },
        {
          props: {
            id: "try-it-button",
          },
          style: ({ theme }) => {
            return theme.unstable_sx({
              width: "60%",
              height: "3.5rem",
              fontWeight: "600",
              marginBottom: "1.5rem",
              color: theme.palette.custom.captionTextAndFormBackground,
              bgcolor: theme.palette.custom.bannerAndFormActiveBorder,
              "&:hover": {
                color: theme.palette.custom.captionTextAndFormBackground,
                bgcolor: theme.palette.custom.bannerAndFormActiveBorder,
                boxShadow: "0px 4px rgba(0, 0, 0, 0.25)",
              },
              boxShadow: "0px 4px rgba(0, 0, 0, 0.25)",
              "& .MuiTypography-root": {
                fontSize: "0.9rem",
              },
              "& .MuiTypography-root#try-it": {
                textTransform: "none",
                fontWeight: "600",
              },
              "& .MuiTypography-root#pricing": {
                textTransform: "none",
                fontWeight: "300",
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
              [theme.breakpoints.down("md")]: {
                backgroundImage: `url("./bg-intro-mobile.png")`,
              },
              [theme.breakpoints.up("md")]: {
                maxWidth: "100vw",
                backgroundImage: `url("./bg-intro-desktop.png")`,
              },
              backgroundColor: theme.palette.custom.backgroundAndErrorText,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100vw",
              height: "100vh",
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
            });
          },
        },
      ],
    },
  },
});
