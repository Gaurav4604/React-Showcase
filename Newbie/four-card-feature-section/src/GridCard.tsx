import { Divider, Stack, Typography } from "@mui/material";

type Props = {
  cardTitle: string;
  cardSubtitle: string;
  imgSrc: string;
  gridRow: string;
  gridColumn: string;
  dividerColor: string;
};
const GridCard = (props: Props) => {
  return (
    <Stack
      className="grid-card"
      sx={{ gridRow: props.gridRow, gridColumn: props.gridColumn }}
    >
      <Stack className="grid-card-typography">
        <Divider sx={{ bgcolor: props.dividerColor }} />
        <Typography variant="cardTitle">{props.cardTitle}</Typography>
        <Typography variant="cardSubtitle">{props.cardSubtitle}</Typography>
      </Stack>
      <img src={props.imgSrc} alt="card media" />
    </Stack>
  );
};

export default GridCard;
