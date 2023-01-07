import { Container, SvgIcon, TextField } from "@mui/material";
//@ts-ignore
import { ReactComponent as ErrorIcon } from "./icon-error.svg";
import { useEffect, useRef, useState } from "react";
type Props = {};

const ThemedInput = (props: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [positionOffset, setPositionOffset] = useState(0);

  useEffect(() => {
    if (ref.current)
      setPositionOffset(ref.current.getBoundingClientRect().height / 2);
  }, []);

  return (
    <Container id="text-field-container">
      <SvgIcon
        component={ErrorIcon}
        fontSize="small"
        sx={{
          position: "absolute",
          right: "0.7rem",
          top: positionOffset,
          zIndex: 1,
          transform: "translate(-50%, -50%)",
        }}
      />
      <TextField
        inputRef={ref}
        placeholder="First Name"
        id="form-field"
        error
        helperText="Incorrect entry."
      />
    </Container>
  );
};

export default ThemedInput;
