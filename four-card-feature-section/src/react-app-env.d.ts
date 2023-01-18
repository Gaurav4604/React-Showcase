/// <reference types="react-scripts" />
import "@mui/material";

interface customPaletteOptions {
  red?: string;
  cyan?: string;
  orange?: string;
  blue?: string;
  veryDarkBlue?: string;
  grayishBlue?: string;
  veryLightGray?: string;
}

interface customPalette {
  red: string;
  cyan: string;
  orange: string;
  blue: string;
  veryDarkBlue: string;
  grayishBlue: string;
  veryLightGray: string;
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    caption?: React.CSSProperties;
    cardTitle?: React.CSSProperties;
    cardSubtitle?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    h1?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    caption?: React.CSSProperties;
    cardTitle?: React.CSSProperties;
    cardSubtitle?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1?: true;
    subtitle?: true;
    caption?: true;
    cardTitle?: true;
    cardSubtitle?: true;
  }
}

declare module "@mui/material" {
  interface Palette {
    custom: customPalette;
  }
  interface PaletteOptions {
    custom: customPaletteOptions;
  }
}
