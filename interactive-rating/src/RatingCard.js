import React, { useState } from "react";
import SvgIconStar from "./IconStar";
import { Button, Card, Fab, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
const RatingCard = () => {
  const [rating, setRating] = useState(null);

  return (
    <Card>
      <Stack>
        <Fab variant="icon">
          <SvgIconStar />
        </Fab>
        <Typography variant="title">How did we do?</Typography>
        <Typography variant="content">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Typography>
        <Stack variant="content-box">
          {[1, 2, 3, 4, 5].map((item) => (
            <Fab
              variant="button"
              state={rating === item ? "active" : ""}
              key={item}
              onClick={() => setRating(item)}
            >
              <Typography>{item}</Typography>
            </Fab>
          ))}
        </Stack>
        <Link to={`/thanks/${rating}`}>
          <Button>submit</Button>
        </Link>
      </Stack>
    </Card>
  );
};

export default RatingCard;
