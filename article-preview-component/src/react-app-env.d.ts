/// <reference types="react-scripts" />
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
  lightGrayishBlue: string;
  desaturatedDarkBlue: string;
  veryDarkGrayishBlue: string;
  grayishBlue: string;
}

interface customPalette {
  lightGrayishBlue: string;
  desaturatedDarkBlue: string;
  veryDarkGrayishBlue: string;
  grayishBlue: string;
}
declare module "@mui/material/styles" {
  interface TypographyVariants {
    articleTitle?: React.CSSProperties;
    articleBody?: React.CSSProperties;
    date?: React.CSSProperties;
    name?: React.CSSProperties;
    popOverText?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    articleTitle?: React.CSSProperties;
    articleBody?: React.CSSProperties;
    date?: React.CSSProperties;
    name?: React.CSSProperties;
    popOverText?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    articleTitle?: true;
    articleBody?: true;
    date?: true;
    name?: true;
    popOverText?: true;
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
