import { Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import AnimatedImage from "./AnimatedImage";
import Image from "next/image";

const FAQIcon = () => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container id="faq-icon" disableGutters component={"section"}>
      <Container
        id="non-overflow"
        className={"faq-icon-wrapper"}
        disableGutters
      >
        <Image
          src={`illustration-woman-online-${
            mediaQuery ? "mobile" : "desktop"
          }.svg`}
          alt={""}
          width={500}
          height={500}
          id="woman"
          priority
        />
        <Image
          src={`bg-pattern-${mediaQuery ? "mobile" : "desktop"}.svg`}
          alt={""}
          id="shadow"
          width={500}
          height={500}
        />
      </Container>
      {!mediaQuery && (
        <Container id="overflow" className={"faq-icon-wrapper"} disableGutters>
          <Image
            src={`illustration-box-desktop.svg`}
            width={500}
            height={300}
            alt={""}
            id="box"
          />
        </Container>
      )}
    </Container>
  );
};

export default FAQIcon;
