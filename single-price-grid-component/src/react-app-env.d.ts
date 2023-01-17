/// <reference types="react-scripts" />
import "@mui/material";

interface customPaletteOptions {
  lightGray: string;
  grayishBlue: string;
  brightYellow: string;
  cyan: string;
  white: string;
}

interface customPalette {
  lightGray: string;
  grayishBlue: string;
  brightYellow: string;
  cyan: string;
  white: string;
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    price?: React.CSSProperties;
    button?: React.CSSProperties;
    priceTitle?: React.CSSProperties;
    priceDescription?: React.CSSProperties;
    priceSubtitle?: React.CSSProperties;
    whyUs?: React.CSSProperties;
    whyUsLinks?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    description?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    price?: React.CSSProperties;
    button?: React.CSSProperties;
    priceTitle?: React.CSSProperties;
    priceDescription?: React.CSSProperties;
    priceSubtitle?: React.CSSProperties;
    whyUs?: React.CSSProperties;
    whyUsLinks?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    description?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    price?: true;
    button?: true;
    priceTitle?: true;
    priceDescription?: true;
    priceSubtitle?: true;
    whyUs?: true;
    whyUsLinks?: true;
    subtitle?: true;
    description?: true;
    h1?: true;
  }
}
declare module "@mui/material" {
  interface Palette {
    custom: customPalette;
  }
  interface PaletteOptions {
    custom?: customPaletteOptions;
  }
}
