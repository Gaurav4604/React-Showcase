import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {};

const FAQIcon = (props: Props) => {
  return (
    <Container id="faq-icon" disableGutters component={"section"}>
      <Container
        id="non-overflow"
        className={"faq-icon-wrapper"}
        disableGutters
      >
        <Image
          src={"illustration-woman-online-desktop.svg"}
          alt={""}
          width={500}
          height={500}
          id="woman"
          priority
        />
        <Image
          src={"bg-pattern-desktop.svg"}
          alt={""}
          id="shadow"
          width={500}
          height={500}
        />
      </Container>
      <Container id="overflow" className={"faq-icon-wrapper"} disableGutters>
        <Image
          src={"illustration-box-desktop.svg"}
          width={500}
          height={300}
          alt={""}
          id="box"
        />
      </Container>
    </Container>
  );
};

export default FAQIcon;
