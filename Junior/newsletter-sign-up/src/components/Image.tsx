"use client";
import NextImage from "next/image";
import { useMediaQuery, useTheme } from "@mui/material";

const Image = () => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <NextImage
      alt="sign-up-illustration"
      id="card-image"
      src={`/illustration-sign-up-${mediaQuery ? "mobile" : "desktop"}.svg`}
      width="0"
      height="0"
      priority
    />
  );
};

export default Image;
