import { FAQDataSchema } from "@/data/dataFetchUtil";
import { ExpandMoreRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type Props = {
  faqList: FAQDataSchema;
};

// dividers are created using pseudo element ":before"

const FAQ = ({ faqList }: Props) => {
  const [expanded, setExpanded] = useState<string | false>("faq-2");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const generateAccordions = () => {
    return faqList.map((faq) => (
      <React.Fragment key={faq.params.id}>
        <Accordion
          expanded={expanded === faq.params.id}
          onChange={handleChange(faq.params.id)}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreRounded style={{ color: "hsl(14, 88%, 65%)" }} />
            }
          >
            <Typography>{faq.params.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography id="answer">{faq.params.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      </React.Fragment>
    ));
  };

  return (
    <Container disableGutters component={"section"} id="faq-accordion">
      <Typography variant="h1">FAQ</Typography>
      {generateAccordions()}
    </Container>
  );
};

export default FAQ;
