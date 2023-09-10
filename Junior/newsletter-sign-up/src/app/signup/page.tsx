/* eslint-disable jsx-a11y/alt-text */
import Image from "@/components/Image";
import ListItem from "@/components/ListItem";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Image />
      <Container component={"section"}>
        <Typography variant="h1">Stay updated!</Typography>
        <Typography variant="body2">
          Join 60,000+ product managers receiving monthly updates on:
        </Typography>
        <ol>
          <ListItem text="Product discovery and building what matters" />
          <ListItem text="Product discovery and building what matters" />
          <ListItem text="Product discovery and building what matters" />
        </ol>
      </Container>
    </>
  );
}
