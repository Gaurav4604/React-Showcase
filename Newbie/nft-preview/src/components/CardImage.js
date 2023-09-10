import { CardMedia, Container } from "@mui/material";

const CardImage = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
      }}
    >
      <CardMedia
        component="img"
        image="image-equilibrium.jpg"
        alt="equilibrium"
        sx={{
          position: "absolute",
          zIndex: 5,
          width: "100%",
          height: "300px",
          borderRadius: "0.5rem",
        }}
      />
      <Container
        sx={{
          position: "absolute",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "300px",
          borderRadius: "0.5rem",
        }}
        className="helper-img-hover"
      >
        <CardMedia
          component="img"
          image="icon-view.svg"
          alt="equilibrium"
          sx={{
            position: "absolute",
            width: "40px",
            height: "40px",
            borderRadius: "0.5rem",
          }}
        />
      </Container>
    </div>
  );
};

export default CardImage;
