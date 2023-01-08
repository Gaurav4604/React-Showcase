import { Container, SvgIcon, TextField } from "@mui/material";
import { ReactComponent as ErrorIcon } from "./icon-error.svg";
import React, { useEffect, useRef, useState } from "react";
type Props = {
  placeholder: string;
  helperText: string;
  type: React.HTMLInputTypeAttribute;
  validation: (input: string) => boolean;
};

const ThemedInput: React.FC<Props> = ({
  placeholder,
  helperText,
  type,
  validation,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const [positionOffset, setPositionOffset] = useState(0);
  const [input, setInput] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (ref.current)
      setPositionOffset(ref.current.getBoundingClientRect().height / 2);
  }, []);

  useEffect(() => {
    setError(validation(input));
  }, [input, validation, touched]);

  return (
    <Container itemID="text-field-container">
      <SvgIcon
        component={ErrorIcon}
        id="form-error-icon"
        fontSize="small"
        sx={{
          top: positionOffset,
          opacity: touched && error ? 1 : 0,
        }}
      />
      <TextField
        inputRef={ref}
        autoComplete="off"
        onBlur={() => {
          setTouched(true);
        }}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          if (!touched) setTouched(true);
        }}
        placeholder={placeholder}
        itemID="form-field"
        error={touched && error}
        helperText={error && touched ? helperText : " "}
        type={type}
      />
    </Container>
  );
};

export default ThemedInput;
