/* eslint-disable jsx-a11y/alt-text */
import Image from "@/components/Image";
import ListItem from "@/components/ListItem";
import TextField from "@/components/TextField";
import { Container, List, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Image />
      <Container component={"section"} disableGutters>
        <Typography variant="h1">Stay updated!</Typography>
        <Typography variant="body2">
          Join 60,000+ product managers receiving monthly updates on:
        </Typography>
        <List>
          <ListItem text="Product discovery and building what matters" />
          <ListItem text="Measuring to ensure updates are a success" />
          <ListItem text="And much more!" />
        </List>
        <TextField />
      </Container>
    </>
  );
}
