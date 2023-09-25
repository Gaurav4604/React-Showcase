import { Stack, TextField } from "@mui/material";

type Props = {
  label: string;
  placeholder: string;
  errorHandler?: (value: string) => string;
};

const DateInput = (props: Props) => {
  return (
    <Stack>
      {props.label}
      <TextField placeholder={props.placeholder} />
    </Stack>
  );
};

export default DateInput;
