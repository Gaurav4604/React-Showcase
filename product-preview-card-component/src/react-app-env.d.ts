/// <reference types="react-scripts" />

import "@mui/material";

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

interface customPaletteOptions {
  white?: string;
  darkGrayishBlue?: string;
  veryDarkBlue?: string;
  cream?: string;
  darkCyan?: string;
}

interface customPalette {
  white: string;
  darkGrayishBlue: string;
  veryDarkBlue: string;
  cream: string;
  darkCyan: string;
}
declare module "@mui/material/styles" {
  interface TypographyVariants {
    button?: React.CSSProperties;
    productName?: React.CSSProperties;
    title?: React.CSSProperties;
    body?: React.CSSProperties;
    price?: React.CSSProperties;
    priceDrop?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    button?: React.CSSProperties;
    productName?: React.CSSProperties;
    title?: React.CSSProperties;
    body?: React.CSSProperties;
    price?: React.CSSProperties;
    priceDrop?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    button: true;
    productName: true;
    title: true;
    body: true;
    price: true;
    priceDrop: true;
  }
}
declare module "@mui/material" {
  interface Palette {
    custom?: customPalette;
  }
  interface PaletteOptions {
    custom?: customPaletteOptions;
  }
}
