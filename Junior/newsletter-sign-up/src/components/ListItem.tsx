import React from "react";
import {
  Avatar,
  ListItemAvatar,
  ListItemText,
  ListItem as MuiListItem,
} from "@mui/material";
import { Check } from "@mui/icons-material";

type Props = {
  text: string;
};

const ListItem = (props: Props) => {
  return (
    <MuiListItem disableGutters disablePadding>
      <ListItemAvatar>
        <Avatar>
          <Check />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.text} />
    </MuiListItem>
  );
};

export default ListItem;
