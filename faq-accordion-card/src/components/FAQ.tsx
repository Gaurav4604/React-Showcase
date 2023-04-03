import { FAQDataSchema } from "@/data/dataFetchUtil";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type Props = {
  faqList: FAQDataSchema;
};

// dividers are created using pseudo element ":before"

const FAQ = ({ faqList }: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const generateAccordions = () => {
    return faqList.map((faq) => (
      <Accordion
        expanded={expanded === faq.params.id}
        onChange={handleChange(faq.params.id)}
        key={faq.params.id}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>{faq.params.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>{faq.params.answer}</AccordionDetails>
      </Accordion>
    ));
  };

  return (
    <Container disableGutters component={"section"}>
      {generateAccordions()}
    </Container>
  );
};

export default FAQ;
