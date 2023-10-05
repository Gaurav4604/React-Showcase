import { Typography } from "@mui/material";
import "@fontsource/poppins/700-italic.css";
type Props = {
  highlighted: string;
  text: string;
};

const ResultTypography = (props: Props) => {
  return (
    <Typography
      sx={{
        fontFamily: "poppins",
        fontStyle: "italic",
        fontWeight: "700",
        fontSize: "4rem",
      }}
    >
      <span
        style={{
          color: "hsl(259, 100%, 65%)",
          letterSpacing: "0.2rem",
        }}
      >
        {props.highlighted}
      </span>
      {props.text}
    </Typography>
  );
};

export default ResultTypography;
