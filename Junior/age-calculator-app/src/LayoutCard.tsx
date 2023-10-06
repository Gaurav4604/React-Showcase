import { Card, Stack, ThemeProvider, createTheme } from "@mui/material";
import DateInput from "./DateInput";
import IconButtonAndDivider from "./IconButtonAndDivider";
import ResultTypography from "./ResultTypography";

const cardTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            height: "100vh",
            maxHeight: "30rem",
            width: "100vw",
            maxWidth: "40rem",
            bgcolor: "white",
            borderRadius: "1.2rem",
            borderBottomRightRadius: "6rem",
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
            // error
            // errorHandler={() => "Must be a valid date"}
          />
          <DateInput
            placeholder="MM"
            label="MONTH"
            // error
            // errorHandler={() => "Must be a valid date"}
          />
          <DateInput
            placeholder="YYYY"
            label="YEAR"
            // error
            // errorHandler={() => "Must be a valid date"}
          />
        </Stack>
        <IconButtonAndDivider />
        <ResultTypography highlighted="--" text="years" />
        <ResultTypography highlighted="--" text="months" />
        <ResultTypography highlighted="--" text="days" />
      </Card>
    </ThemeProvider>
  );
};

export default LayoutCard;
