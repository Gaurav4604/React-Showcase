import { Card } from "@mui/material";
import DateInput from "./DateInput";

const LayoutCard = () => {
  return (
    <Card
      sx={{
        height: "100vh",
        maxHeight: "30rem",
        width: "100vw",
        maxWidth: "40rem",
        bgcolor: "white",
        borderRadius: "1.2rem",
        borderBottomRightRadius: "6rem",
        p: "2rem",
      }}
      elevation={0}
    >
      <DateInput placeholder="DD" label="DAY" />
    </Card>
  );
};

export default LayoutCard;
