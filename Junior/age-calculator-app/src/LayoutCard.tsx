import { Card, Stack, ThemeProvider, createTheme } from "@mui/material";
import DateInput, { DateInputRef } from "./DateInput";
import IconButtonAndDivider from "./IconButtonAndDivider";
import ResultTypography from "./ResultTypography";
import { useRef } from "react";

const cardTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            height: "100vh",
            maxHeight: "28rem",
            width: "100vw",
            maxWidth: "37.5rem",
            bgcolor: "white",
            borderRadius: "1.2rem",
            borderBottomRightRadius: "7.5rem",
            p: "2rem",
          }),
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          width: "75%",
        },
      },
    },
  },
});

const LayoutCard = () => {
  const ddRef = useRef<DateInputRef>(null);
  const mmRef = useRef<DateInputRef>(null);
  const yyyyRef = useRef<DateInputRef>(null);

  return (
    <ThemeProvider theme={cardTheme}>
      <Card elevation={0}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <DateInput
            placeholder="DD"
            label="DAY"
            ref={ddRef}
            // error
            // errorHandler={() => "Must be a valid date"}
          />
          <DateInput
            placeholder="MM"
            label="MONTH"
            ref={mmRef}
            // error
            // errorHandler={() => "Must be a valid date"}
          />
          <DateInput
            placeholder="YYYY"
            label="YEAR"
            ref={yyyyRef}
            // error
            // errorHandler={() => "Must be a valid date"}
          />
        </Stack>
        <IconButtonAndDivider
          onClick={() => {
            ddRef.current?.getValue();
            mmRef.current?.getValue();
            yyyyRef.current?.getValue();
          }}
        />
        <ResultTypography highlighted="--" text="years" />
        <ResultTypography highlighted="--" text="months" />
        <ResultTypography highlighted="--" text="days" />
      </Card>
    </ThemeProvider>
  );
};

export default LayoutCard;
