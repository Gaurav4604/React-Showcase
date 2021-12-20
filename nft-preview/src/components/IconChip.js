import { Stack } from "@mui/material";

const IconChip = ({ imgSrc, text, textStyles }) => {
  return (
    <Stack direction="row">
      <img
        src={imgSrc}
        alt={imgSrc}
        style={{
          marginRight: "5px",
        }}
      />
      <p style={textStyles}>{text}</p>
    </Stack>
  );
};

export default IconChip;
